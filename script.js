// Cursor wave effect
const cursor = document.querySelector('.cursor-trail');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(updateCursor);
}

updateCursor();

// Image upload and OCR
const imageInput = document.getElementById('imageInput');
const imageContainer = document.getElementById('imageContainer');
const textContainer = document.getElementById('textContainer');
const loadingIndicator = document.getElementById('loadingIndicator');

// Initialize Tesseract worker
const worker = Tesseract.createWorker({
    logger: m => {
        console.log(m);
        if (m.status === 'recognizing text') {
            loadingIndicator.querySelector('span').textContent = `Processing... ${Math.round(m.progress * 100)}%`;
        }
    }
});

// Initialize worker on page load
(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
})();

imageInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
            // Display the image
            const img = document.createElement('img');
            img.src = e.target.result;
            
            // Clear previous content
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            
            // Add fade-in effect
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = '1';
            }, 10);

            // Show loading indicator
            loadingIndicator.style.display = 'flex';
            textContainer.innerHTML = '';

            try {
                // Perform OCR with optimized settings
                const result = await worker.recognize(e.target.result, {
                    tessjs_create_pdf: '0',
                    tessjs_create_hocr: '0',
                    tessjs_create_tsv: '0',
                    tessjs_create_box: '0',
                    tessjs_create_unlv: '0',
                    tessjs_create_osd: '0'
                });

                // Display the extracted text with formatting
                const formattedText = result.data.text
                    .split('\n')
                    .filter(line => line.trim())
                    .join('\n\n');
                
                textContainer.innerHTML = formattedText || 'No text detected in the image.';
            } catch (error) {
                console.error('OCR Error:', error);
                textContainer.innerHTML = 'Error extracting text. Please try again with a clearer image.';
            } finally {
                // Hide loading indicator
                loadingIndicator.style.display = 'none';
            }
        };
        
        reader.readAsDataURL(file);
    }
});

// Clean up worker when page is unloaded
window.addEventListener('beforeunload', () => {
    worker.terminate();
}); 
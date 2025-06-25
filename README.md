# QuickMeds - Prescription OCR Analysis Tool

A modern, web-based Optical Character Recognition (OCR) application designed specifically for analyzing prescription images. Built with vanilla JavaScript and powered by Tesseract.js, QuickMeds provides an intuitive interface for extracting text from prescription images with real-time processing and a beautiful, responsive design.

## ✨ Features

- **📸 Image Upload**: Drag and drop or click to upload prescription images
- **🔍 Real-time OCR**: Instant text extraction using Tesseract.js
- **🎨 Modern UI**: Beautiful glassmorphism design with animated cursor tracking effects
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Fast Processing**: Optimized OCR settings for quick text recognition
- **🔄 Progress Tracking**: Real-time progress indicators during processing
- **📄 Text Formatting**: Clean, formatted output of extracted text

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone or download** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start using** QuickMeds immediately!

```bash
# If you have git installed
git clone <repository-url>
cd ocr
# Open index.html in your browser
```

## 📖 How to Use

1. **Upload an Image**: Click the upload area or drag and drop a prescription image
2. **Wait for Processing**: The app will automatically process the image using OCR
3. **View Results**: Extracted text will appear in the right panel
4. **Copy Text**: Select and copy the extracted text for further use

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **OCR Engine**: [Tesseract.js](https://github.com/naptha/tesseract.js) v2.1.0
- **Styling**: Custom CSS with glassmorphism effects
- **Animations**: CSS animations and JavaScript-based cursor effects

## 📁 Project Structure

```
ocr/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
├── LICENSE             # Project license
└── README.md           # This file
```

## 🎨 Design Features

- **Glassmorphism UI**: Modern translucent design with backdrop blur effects
- **Animated Cursor**: Custom animated cursor trail that follows mouse movement
- **Starfield Background**: Animated star background for visual appeal
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Smooth Transitions**: Elegant hover effects and loading animations

## 🔧 Customization

### Modifying OCR Settings

You can adjust the OCR processing options in `script.js`:

```javascript
const result = await worker.recognize(e.target.result, {
    tessjs_create_pdf: '0',
    tessjs_create_hocr: '0',
    tessjs_create_tsv: '0',
    tessjs_create_box: '0',
    tessjs_create_unlv: '0',
    tessjs_create_osd: '0'
});
```

### Styling Changes

The visual appearance can be customized by modifying `styles.css`. Key customization areas:

- Color scheme: Modify CSS variables for primary colors
- Animations: Adjust timing and effects in CSS keyframes
- Layout: Modify grid and flexbox properties for different layouts

## 🌟 Key Features Explained

### OCR Processing
- Uses Tesseract.js for robust text recognition
- Supports multiple image formats (JPEG, PNG, etc.)
- Optimized for prescription text recognition
- Real-time progress tracking

### User Experience
- Intuitive drag-and-drop interface
- Visual feedback during processing
- Error handling for failed OCR attempts
- Clean, readable text output

### Performance
- Optimized worker configuration
- Efficient image processing
- Memory management with worker cleanup
- Responsive design for various devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 🙏 Acknowledgments

- [Tesseract.js](https://github.com/naptha/tesseract.js) for providing the OCR capabilities
- The open-source community for inspiration and resources

## 📞 Support

If you encounter any issues or have questions about using QuickMeds, please:

1. Check the browser console for error messages
2. Ensure your image is clear and well-lit
3. Try with different image formats if one doesn't work
4. Open an issue in the project repository

---

**QuickMeds** - Making prescription analysis quick and easy! 🏥✨ 
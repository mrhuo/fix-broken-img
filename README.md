# fix-broken-img 🖼️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://github.com/mrhuo/fix-broken-img)
[![Web Components](https://img.shields.io/badge/Web%20Components-✓-success)](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
[![Stars](https://img.shields.io/github/stars/mrhuo/fix-broken-img?style=plastic&logo=github&color=ffcb2b)](https://github.com/mrhuo/fix-broken-img)
[![Forks](https://img.shields.io/github/forks/mrhuo/fix-broken-img?style=plastic&logo=github&color=6f42c1)](https://github.com/mrhuo/fix-broken-img)
[![](https://data.jsdelivr.com/v1/package/gh/mrhuo/fix-broken-img/badge)](https://www.jsdelivr.com/package/gh/mrhuo/fix-broken-img)

A zero-dependency, one-line solution WebComponents-based component for fixing broken images on websites. Automatically handles image loading failures with elegant fallbacks.

## ✨ Features

- **🚀 Zero Dependencies** - Pure native WebComponents, no external libraries required
- **⚡ One-Line Setup** - Automatic initialization with script tag configuration
- **🎨 Customizable Fallbacks** - Configurable background colors, text colors, and default messages
- **🔄 Smart Auto-Conversion** - Automatically converts regular `img` tags to protected components
- **📱 Dynamic DOM Monitoring** - Handles dynamically added images automatically
- **🌀 Loading Animations** - Smooth loading indicators and transitions
- **♿ Accessibility First** - Proper ARIA support and semantic HTML

## 🚀 Quick Start

### Method 1: Auto-Initialization (Recommended)

Simply include the script:


```html
<script src="https://cdn.jsdelivr.net/gh/mrhuo/fix-broken-img@latest/src/fix-broken-img.min.js"></script>
```
Or add some configuration attributes:

```html
<script src="https://cdn.jsdelivr.net/gh/mrhuo/fix-broken-img@latest/src/fix-broken-img.min.js" 
        id="fix-broken-img"
        data-background="#e8f5e8"
        data-text-color="#2e7d32"
        data-default-text="🌱 Image loading..."
        data-auto-convert="true">
</script>
```

### Method 2: Manual Initialization

```javascript
import { initFixBrokenImg } from './fix-broken-img.js';
initFixBrokenImg(); // One line to protect all images
```

### Method 3: Manual Component Usage

```html
<fix-broken-img
    src="path/to/image.jpg"
    alt="Image description"
    background-color="#f5f5f5"
    text-color="#666">
</fix-broken-img>
```

## 📖 Configuration Options

### Script Tag Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-background` | String | `#f5f5f5` | Fallback background color |
| `data-text-color` | String | `#666` | Fallback text color |
| `data-default-text` | String | `😟 Image failed to load` | Default message when no alt text |
| `data-auto-convert` | Boolean | `true` | Auto-convert regular img tags |

### Manual Configuration

```javascript
initFixBrokenImg({
    background: '#f5f5f5',      // Fallback background color
    textColor: '#666',          // Fallback text color  
    defaultText: '😟 Image failed to load', // Default message
    autoConvert: true           // Auto-convert images
});
```

## 🎯 Usage Examples

### Basic Protection
```html
<!-- Regular images are automatically protected -->
<img src="profile.jpg" alt="User profile picture">
<img src="https://example.com/broken-image.jpg">
```

### Custom Styled Components
```html
<fix-broken-img
    src="hero-image.jpg"
    alt="Hero banner"
    background-color="#fff3cd"
    text-color="#856404"
    style="width: 100%; height: 400px;">
</fix-broken-img>
```

### Dynamic Image Handling
```javascript
// Dynamically added images are automatically handled
const newImage = document.createElement('img');
newImage.src = 'dynamic-image.jpg';
newImage.alt = 'Dynamic content';
document.body.appendChild(newImage);
```

## 🔧 Installation

### CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/mrhuo/fix-broken-img@latest/src/fix-broken-img.min.js"></script>
```

### NPM
```bash
npm install fix-broken-img
```

```javascript
import { initFixBrokenImg } from 'fix-broken-img';
initFixBrokenImg();
```

### Manual Download
Download from [Releases](https://github.com/mrhuo/fix-broken-img/releases) and include in your project.

## 🛠️ Development

### Build from Source
```bash
git clone https://github.com/mrhuo/fix-broken-img.git
cd fix-broken-img
npm install
npm run build
```

### Development Server
```bash
npm run serve
```

## 📚 API Reference

### Global Functions

#### `initFixBrokenImg(config)`
Initializes the component with optional configuration.

**Parameters:**
- `config` (Object): Configuration object
  - `background` (String): Fallback background color
  - `textColor` (String): Fallback text color
  - `defaultText` (String): Default message
  - `autoConvert` (Boolean): Auto-convert images

### Component Attributes

#### `<fix-broken-img>` Element
- `src` (String): Image source URL
- `alt` (String): Alternative text
- `background-color` (String): Fallback background color
- `text-color` (String): Fallback text color

### Component Methods
- `reload()`: Reload the image
- `setSrc(src)`: Set new image source
- `setAlt(alt)`: Set alternative text

## 🌟 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 54+ | ✅ Full |
| Firefox | 63+ | ✅ Full |
| Safari | 10.1+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | ❌ | Not Supported |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern Web Components standards
- Inspired by the need for better image error handling
- Thanks to all contributors who help improve this project

---

**Made with ❤️ for better web experiences**

For questions and support, please open an [issue](https://github.com/mrhuo/fix-broken-img/issues).

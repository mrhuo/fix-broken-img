/**
 * fix-broken-img
 * 一个零依赖的 WebComponents 组件，用于修复网站上破损的图片
 * 支持懒加载和图片加载失败时的优雅降级
 */
class FixBrokenImg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._init();
  }

  static get observedAttributes() {
    return ['src', 'alt', 'background-color', 'text-color'];
  }

  _init() {
    this._render();
    this._setupEventListeners();
  }

  _render() {
    const backgroundColor = this.getAttribute('background-color') || '#f5f5f5';
    const textColor = this.getAttribute('text-color') || '#666';
    const altText = this.getAttribute('alt') || (window.FIX_BROKEN_IMG_DEFAULT_TEXT || '😟 图片加载失败');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .image.loaded {
          opacity: 1;
        }
        
        .fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${backgroundColor};
          color: ${textColor};
          font-family: Arial, sans-serif;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .fallback.show {
          opacity: 1;
          pointer-events: auto;
        }
        
        .loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(245, 245, 245, 0.8);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .loading.show {
          opacity: 1;
        }
        
        .loading::after {
          content: '';
          width: 20px;
          height: 20px;
          border: 2px solid #ddd;
          border-top: 2px solid #666;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      
      <div class="image-container">
        <img class="image" src="" alt="">
        <div class="loading"></div>
        <div class="fallback">${altText}</div>
      </div>
    `;
  }

  _setupEventListeners() {
    const img = this.shadowRoot.querySelector('.image');
    const loading = this.shadowRoot.querySelector('.loading');
    const fallback = this.shadowRoot.querySelector('.fallback');

    img.addEventListener('load', () => {
      img.classList.add('loaded');
      loading.classList.remove('show');
      fallback.classList.remove('show');
    });

    img.addEventListener('error', () => {
      loading.classList.remove('show');
      fallback.classList.add('show');
    });

    // 监听图片加载开始
    img.addEventListener('loadstart', () => {
      loading.classList.add('show');
    });
  }

  connectedCallback() {
    this._loadImage();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'src') {
        this._loadImage();
      } else if (name === 'alt') {
        this._updateAltText();
      } else if (name === 'background-color' || name === 'text-color') {
        this._updateStyles();
      }
    }
  }

  _loadImage() {
    const src = this.getAttribute('src');
    const img = this.shadowRoot.querySelector('.image');
    const loading = this.shadowRoot.querySelector('.loading');
    const fallback = this.shadowRoot.querySelector('.fallback');

    if (!src) {
      loading.classList.remove('show');
      fallback.classList.add('show');
      return;
    }

    // 重置状态
    img.classList.remove('loaded');
    loading.classList.add('show');
    fallback.classList.remove('show');

    // 设置新的图片源
    img.src = src;
    img.alt = this.getAttribute('alt') || '';
  }

  _updateAltText() {
    const altText = this.getAttribute('alt') || (window.FIX_BROKEN_IMG_DEFAULT_TEXT || '😟 图片加载失败');
    const fallback = this.shadowRoot.querySelector('.fallback');
    fallback.textContent = altText;
  }

  _updateStyles() {
    const backgroundColor = this.getAttribute('background-color') || '#f5f5f5';
    const textColor = this.getAttribute('text-color') || '#666';
    const fallback = this.shadowRoot.querySelector('.fallback');
    
    fallback.style.backgroundColor = backgroundColor;
    fallback.style.color = textColor;
  }

  // 公共方法
  reload() {
    this._loadImage();
  }

  setSrc(src) {
    this.setAttribute('src', src);
  }

  setAlt(alt) {
    this.setAttribute('alt', alt);
  }
}

// 注册自定义元素
customElements.define('fix-broken-img', FixBrokenImg);

/**
 * 初始化 fix-broken-img 组件
 * @param {Object} config - 配置对象
 * @param {string} config.background - 降级背景颜色，默认 '#f5f5f5'
 * @param {string} config.textColor - 降级文字颜色，默认 '#666'
 * @param {string} config.defaultText - 默认显示文本，默认 '😟 图片加载失败'
 * @param {boolean} config.autoConvert - 是否自动转换图片，默认 true
 */
function initFixBrokenImg(config = {}) {
  const {
    background = '#f5f5f5',
    textColor = '#666',
    defaultText = '😟 图片加载失败',
    autoConvert = true
  } = config;

  // 设置全局默认值，用于组件内部使用
  if (defaultText !== '😟 图片加载失败') {
    window.FIX_BROKEN_IMG_DEFAULT_TEXT = defaultText;
  }

  // 如果禁用自动转换，直接返回
  if (!autoConvert) return;

  // 监听 DOM 变化，自动处理动态添加的图片
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // 处理新添加的图片
          const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
          images.forEach(img => {
            if (!img.closest('fix-broken-img')) {
              _convertToFixBrokenImg(img, background, textColor);
            }
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 处理页面加载时已有的图片
  const processExistingImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.closest('fix-broken-img')) {
        _convertToFixBrokenImg(img, background, textColor);
      }
    });
  };

  // 根据页面加载状态决定初始化时机
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processExistingImages);
  } else {
    processExistingImages();
  }
}

/**
 * 转换普通图片为 fix-broken-img 组件
 * @param {HTMLImageElement} img - 要转换的图片元素
 * @param {string} background - 降级背景颜色
 * @param {string} textColor - 降级文字颜色
 */
function _convertToFixBrokenImg(img, background, textColor) {
  // 检查图片是否已经被转换，避免重复处理
  if (img.closest('fix-broken-img')) {
    return;
  }
  
  const wrapper = document.createElement('fix-broken-img');
  
  // 复制所有属性到新组件
  Array.from(img.attributes).forEach(attr => {
    wrapper.setAttribute(attr.name, attr.value);
  });
  
  // 设置配置参数（仅在非默认值时设置）
  if (background && background !== '#f5f5f5') {
    wrapper.setAttribute('background-color', background);
  }
  
  if (textColor && textColor !== '#666') {
    wrapper.setAttribute('text-color', textColor);
  }
  
  // 复制样式以确保外观一致
  wrapper.style.cssText = img.style.cssText;
  
  // 替换原图片为受保护的组件
  img.parentNode.replaceChild(wrapper, img);
}

/**
 * 自动初始化函数 - 通过脚本标签配置
 * 从脚本标签的 data 属性读取配置并自动初始化组件
 */
function autoInitFixBrokenImg() {
  const scriptElement = document.getElementById('fix-broken-img');
  const config = {};
  
  // 从脚本标签的 data 属性读取配置
  if (scriptElement) {
    config.background = scriptElement.dataset.background || '#f5f5f5';
    config.textColor = scriptElement.dataset.textColor || '#666';
    config.defaultText = scriptElement.dataset.defaultText || '😟 图片加载失败';
    config.autoConvert = scriptElement.dataset.autoConvert !== 'false';
  } else {
    // 使用默认配置
    config.background = '#f5f5f5';
    config.textColor = '#666';
    config.defaultText = '😟 图片加载失败';
    config.autoConvert = true;
  }

  // 初始化组件
  initFixBrokenImg(config);
}

/**
 * 导出到全局对象，提供外部访问接口
 */
if (typeof window !== 'undefined') {
  window.FixBrokenImg = FixBrokenImg;
  window.initFixBrokenImg = initFixBrokenImg;
  window.autoInitFixBrokenImg = autoInitFixBrokenImg;
}

/**
 * 自动初始化入口
 * 在页面加载完成后自动执行初始化
 */
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      autoInitFixBrokenImg();
    });
  } else {
    // DOM 已经加载完成，直接初始化
    autoInitFixBrokenImg();
  }
}

# fix-broken-img 🖼️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://github.com/mrhuo/fix-broken-img)
[![Web Components](https://img.shields.io/badge/Web%20Components-✓-success)](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
[![Stars](https://img.shields.io/github/stars/mrhuo/fix-broken-img?style=plastic&logo=github&color=ffcb2b)](https://github.com/mrhuo/fix-broken-img)
[![Forks](https://img.shields.io/github/forks/mrhuo/fix-broken-img?style=plastic&logo=github&color=6f42c1)](https://github.com/mrhuo/fix-broken-img)
[![](https://data.jsdelivr.com/v1/package/gh/mrhuo/fix-broken-img/badge)](https://www.jsdelivr.com/package/gh/mrhuo/fix-broken-img)

一个零依赖、一行代码即可生效的基于 WebComponents 的组件，用于修复网站上破损的图片。自动处理图片加载失败，提供优雅的降级显示。

## ✨ 特性

- **🚀 零依赖** - 纯原生 WebComponents，无需任何外部库
- **⚡ 一行代码生效** - 通过脚本标签配置自动初始化
- **🎨 可自定义降级界面** - 可配置背景色、文字颜色和默认消息
- **🔄 智能自动转换** - 自动将普通 `img` 标签转换为受保护的组件
- **📱 动态 DOM 监听** - 自动处理动态添加的图片
- **🌀 加载动画** - 流畅的加载指示器和过渡效果
- **♿ 无障碍优先** - 完整的 ARIA 支持和语义化 HTML

## 🚀 快速开始

### 方式一：自动初始化（推荐）

只需引入脚本：

```html
<script src="https://cdn.jsdelivr.net/gh/mrhuo/fix-broken-img@latest/src/fix-broken-img.min.js"></script>
```
或者加入一些配置：

```html
<script src="https://cdn.jsdelivr.net/gh/mrhuo/fix-broken-img@latest/src/fix-broken-img.min.js" 
        id="fix-broken-img"
        data-background="#e8f5e8"
        data-text-color="#2e7d32"
        data-default-text="🌱 图片加载中..."
        data-auto-convert="true">
</script>
```

### 方式二：手动初始化

```javascript
import { initFixBrokenImg } from './fix-broken-img.js';
initFixBrokenImg(); // 一行代码保护所有图片
```

### 方式三：手动使用组件

```html
<fix-broken-img
    src="path/to/image.jpg"
    alt="图片描述"
    background-color="#f5f5f5"
    text-color="#666">
</fix-broken-img>
```

## 📖 配置选项

### 脚本标签属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data-background` | String | `#f5f5f5` | 降级背景颜色 |
| `data-text-color` | String | `#666` | 降级文字颜色 |
| `data-default-text` | String | `😟 图片加载失败` | 无 alt 文本时的默认消息 |
| `data-auto-convert` | Boolean | `true` | 是否自动转换普通 img 标签 |

### 手动配置

```javascript
initFixBrokenImg({
    background: '#f5f5f5',      // 降级背景颜色
    textColor: '#666',          // 降级文字颜色
    defaultText: '😟 图片加载失败', // 默认消息
    autoConvert: true           // 自动转换图片
});
```

## 🎯 使用示例

### 基础保护
```html
<!-- 普通图片自动受保护 -->
<img src="profile.jpg" alt="用户头像">
<img src="https://example.com/broken-image.jpg">
```

### 自定义样式组件
```html
<fix-broken-img
    src="hero-image.jpg"
    alt="横幅图片"
    background-color="#fff3cd"
    text-color="#856404"
    style="width: 100%; height: 400px;">
</fix-broken-img>
```

### 动态图片处理
```javascript
// 动态添加的图片会自动处理
const newImage = document.createElement('img');
newImage.src = 'dynamic-image.jpg';
newImage.alt = '动态内容';
document.body.appendChild(newImage);
```

## 🔧 安装

### CDN（推荐）
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

### 手动下载
从 [Releases](https://github.com/mrhuo/fix-broken-img/releases) 下载并包含到项目中。

## 🛠️ 开发

### 从源码构建
```bash
git clone https://github.com/mrhuo/fix-broken-img.git
cd fix-broken-img
npm install
npm run build
```

### 开发服务器
```bash
npm run serve
```

## 📚 API 参考

### 全局函数

#### `initFixBrokenImg(config)`
使用可选配置初始化组件。

**参数：**
- `config` (Object): 配置对象
  - `background` (String): 降级背景颜色
  - `textColor` (String): 降级文字颜色
  - `defaultText` (String): 默认消息
  - `autoConvert` (Boolean): 是否自动转换图片

### 组件属性

#### `<fix-broken-img>` 元素
- `src` (String): 图片源 URL
- `alt` (String): 替代文本
- `background-color` (String): 降级背景颜色
- `text-color` (String): 降级文字颜色

### 组件方法
- `reload()`: 重新加载图片
- `setSrc(src)`: 设置新的图片源
- `setAlt(alt)`: 设置替代文本

## 🌟 浏览器支持

| 浏览器 | 版本 | 支持情况 |
|--------|------|----------|
| Chrome | 54+ | ✅ 完全支持 |
| Firefox | 63+ | ✅ 完全支持 |
| Safari | 10.1+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |
| IE | ❌ | 不支持 |

## 🤝 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解详情。

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m '添加了很棒的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 基于现代 Web Components 标准构建
- 受更好的图片错误处理需求启发
- 感谢所有帮助改进此项目的贡献者

---

**用心打造，为了更好的网页体验 ❤️**

如有问题和支持，请开启 [issue](https://github.com/mrhuo/fix-broken-img/issues)。

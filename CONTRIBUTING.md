# 贡献指南

感谢您对 fix-broken-img 项目的关注！我们欢迎各种形式的贡献，包括但不限于代码改进、文档完善、问题报告等。

## 开发环境设置

### 前置要求
- Node.js (推荐 16.x 或更高版本)
- Git

### 本地开发
1. Fork 项目到您的 GitHub 账户
2. 克隆您的 fork：
   ```bash
   git clone https://github.com/mrhuo/fix-broken-img.git
   cd fix-broken-img
   ```
3. 安装依赖：
   ```bash
   npm install
   ```
4. 构建项目：
   ```bash
   node build.js
   ```

## 贡献流程

### 1. 报告问题
- 在创建 issue 前，请先搜索是否已有类似问题
- 使用 issue 模板提供详细信息：
  - 问题描述
  - 复现步骤
  - 期望行为
  - 实际行为
  - 环境信息（浏览器、操作系统等）

### 2. 提交代码
1. 从主分支创建功能分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 进行代码修改
3. 运行测试（如果有）
4. 构建项目确保没有错误：
   ```bash
   node build.js
   ```
5. 提交代码：
   ```bash
   git add .
   git commit -m "feat: 描述你的功能"
   ```
6. 推送到您的 fork：
   ```bash
   git push origin feature/your-feature-name
   ```
7. 创建 Pull Request

### 3. 代码规范

#### 代码风格
- 使用 2 个空格缩进
- 使用单引号
- 遵循现有的代码风格
- 添加适当的注释

#### 提交信息规范
使用约定式提交格式：
- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构代码
- `test:` 测试相关
- `chore:` 构建过程或辅助工具变动

示例：
```
feat: 添加 HTML 实体编码函数
fix: 修复双引号导致的 setAttribute 错误
docs: 更新贡献指南
```

### 4. Pull Request 指南
- 确保 PR 描述清晰说明修改内容和原因
- 关联相关 issue（如适用）
- 确保代码通过构建
- 保持 PR 的专注性，一个 PR 只解决一个问题

## 项目结构

```
fix-broken-img/
├── src/
│   └── fix-broken-img.js    # 源代码
├── dist/
│   ├── fix-broken-img.js    # 开发版本
│   └── fix-broken-img.min.js # 压缩版本
├── docs/                    # 文档和示例
├── build.js                 # 构建脚本
├── package.json
└── README.md
```

## 开发注意事项

### 零依赖原则
本项目坚持零依赖原则，所有功能都使用原生 JavaScript 实现。

### Web Components 标准
- 遵循 Web Components 标准
- 使用 Shadow DOM 进行样式隔离
- 支持自定义元素生命周期

### 浏览器兼容性
- 支持现代浏览器（Chrome、Firefox、Safari、Edge）
- 使用 ES6+ 语法
- 不包含 polyfill，用户需自行处理兼容性

## 测试

目前项目使用手动测试，建议在以下场景测试您的修改：
- 图片加载成功
- 图片加载失败
- 动态添加图片
- 属性更新
- 特殊字符处理

## 文档

- 更新 README.md 以反映新功能
- 提供使用示例
- 更新 API 文档

## 获取帮助

- 查看 [README.md](README.md) 获取项目概述
- 查看现有 issue 和 PR
- 如有疑问，可在 issue 中讨论

## 行为准则

我们致力于营造一个开放、友好的社区环境。请遵守以下行为准则：
- 尊重他人意见
- 建设性讨论
- 帮助新贡献者

感谢您的贡献！🎉

## 许可证

通过向本项目提交贡献，您同意您的贡献将遵循项目的 [MIT 许可证](LICENSE)。

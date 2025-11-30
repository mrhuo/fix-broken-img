import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

// 构建配置
const config = {
  input: 'src/fix-broken-img.js',
  output: 'dist/fix-broken-img.js',
  minifiedOutput: 'dist/fix-broken-img.min.js'
};

// 确保目录存在
function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

// 读取文件
function readFile(filePath) {
  return readFileSync(filePath, 'utf8');
}

// 写入文件
function writeFile(filePath, content) {
  ensureDir(dirname(filePath));
  writeFileSync(filePath, content, 'utf8');
}

// 简单的代码压缩
function minify(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // 移除多行注释
    .replace(/\/\/.*$/gm, '') // 移除单行注释
    .replace(/\s+/g, ' ') // 压缩空格
    .replace(/\s*([{}();:,])\s*/g, '$1') // 移除符号周围的空格
    .trim();
}

// 构建函数
function build() {
  console.log('开始构建 fix-broken-img...');
  
  try {
    // 读取源码
    const sourceCode = readFile(config.input);
    
    // 创建开发版本
    writeFile(config.output, sourceCode);
    console.log(`✅ 开发版本构建完成: ${config.output}`);
    
    // 创建压缩版本
    const minifiedCode = minify(sourceCode);
    writeFile(config.minifiedOutput, minifiedCode);
    console.log(`✅ 压缩版本构建完成: ${config.minifiedOutput}`);
    
    console.log('🎉 构建完成！');
  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    process.exit(1);
  }
}

// 监听模式
if (process.argv.includes('--watch')) {
  console.log('👀 监听模式已启动...');
  build();
  
  // 简单的文件监听（实际项目中建议使用 chokidar）
  setInterval(() => {
    build();
  }, 1000);
} else {
  build();
}

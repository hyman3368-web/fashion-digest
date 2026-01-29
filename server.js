#!/usr/bin/env node
/**
 * 简单的HTTP服务器
 * 用于在本地网络预览生成的HTML文件
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const OUTPUT_DIR = path.join(__dirname, 'output');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // 默认重定向到最新的HTML文件
  if (req.url === '/' || req.url === '/index.html') {
    const files = fs.readdirSync(OUTPUT_DIR)
      .filter(f => f.endsWith('.html'))
      .sort()
      .reverse();

    if (files.length > 0) {
      const filePath = path.join(OUTPUT_DIR, files[0]);
      const content = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.writeHead(200);
      res.end(content);
      return;
    }
  }

  // 处理其他文件
  const filePath = path.join(OUTPUT_DIR, req.url);

  try {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.setHeader('Content-Type', `${contentType}; charset=utf-8`);
    res.writeHead(200);
    res.end(content);
  } catch (error) {
    res.writeHead(404);
    res.end('File not found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║       🌐 时尚简报预览服务器已启动                    ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

📱 手机访问方式:
   1. 确保手机和电脑在同一WiFi网络
   2. 在手机浏览器输入以下地址之一:

   本地访问:
   → http://localhost:${PORT}

   局域网访问:
   → http://YOUR_COMPUTER_IP:${PORT}

   💡 提示: 获取电脑IP地址，运行:
   macOS: ifconfig | grep "inet " | grep -v 127.0.0.1
   Windows: ipconfig

📁 服务目录: ${OUTPUT_DIR}
🔄 自动重载: 修改文件后刷新页面即可

按 Ctrl+C 停止服务器
  `);

  // 自动显示可用的访问地址
  const os = require('os');
  const interfaces = os.networkInterfaces();

  console.log('\n📡 可用的访问地址:\n');

  Object.keys(interfaces).forEach(ifaceName => {
    interfaces[ifaceName].forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) {
        console.log(`   http://${iface.address}:${PORT}`);
      }
    });
  });
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n\n👋 服务器已停止');
  process.exit(0);
});

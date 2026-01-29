# 📱 手机远程查看指南

## 方案1：本地HTTP服务器（推荐，最简单）

### 步骤：

**1. 在Mac上启动服务器**
```bash
cd /Users/hyman/fashion
npm run serve
```

**2. 获取电脑的IP地址**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```
会显示类似：`192.168.1.100`

**3. 在手机浏览器访问**
```
http://192.168.1.100:3000
```

**4. 享受手机浏览！** ✨

---

## 方案2：使用Python（无需安装，macOS自带）

```bash
cd /Users/hyman/fashion/output
python3 -m http.server 8000
```

然后在手机访问：`http://YOUR_IP:8000`

---

## 方案3：使用VS Code Live Server

**1. 安装VS Code扩展**
   - 搜索 "Live Server"
   - 点击安装

**2. 打开HTML文件**
   - 在VS Code中打开 `output/fashion-digest-2026-03.html`
   - 右键 → "Open with Live Server"

**3. 查看端口**
   - 通常在端口5500

**4. 手机访问**
   - `http://YOUR_IP:5500`

---

## 方案4：上传到GitHub Pages（永久在线）

### 步骤：

**1. 创建GitHub仓库**
```bash
cd /Users/hyman/fashion
git init
git add .
git commit -m "Initial commit"
```

**2. 推送到GitHub**
```bash
# 在GitHub创建新仓库后
git remote add origin https://github.com/YOUR_USERNAME/fashion-digest.git
git branch -M main
git push -u origin main
```

**3. 启用GitHub Pages**
   - 进入仓库Settings
   - 找到 "Pages"
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /output
   - 点击Save

**4. 访问链接**
   - 几分钟后访问：`https://YOUR_USERNAME.github.io/fashion-digest/`

---

## 方案5：使用Vercel/Netlify（推荐，最专业）

### Vercel部署（最简单）

**1. 安装Vercel CLI**
```bash
npm install -g vercel
```

**2. 部署**
```bash
cd /Users/hyman/fashion/output
vercel
```

**3. 获得永久链接**
   - 类似：`https://fashion-digest.vercel.app`

---

## 🎯 推荐方案速查

| 方案 | 难度 | 优点 | 缺点 | 适用场景 |
|------|------|------|------|----------|
| 本地HTTP服务器 | ⭐ | 最简单，即时 | 需在同一WiFi | 临时预览 |
| Python服务器 | ⭐ | 无需安装 | 需保持终端 | 临时预览 |
| VS Code Live Server | ⭐⭐ | 方便开发 | 需要安装VS Code | 开发调试 |
| GitHub Pages | ⭐⭐⭐ | 永久免费 | 需要Git | 长期展示 |
| Vercel | ⭐⭐ | 最专业 | 需注册 | 生产环境 |

---

## 💡 常见问题

**Q: 手机访问不了怎么办？**
- 确保手机和电脑在同一WiFi
- 检查防火墙设置
- 尝试用电脑浏览器先访问 `http://localhost:3000`

**Q: 如何让其他人也能访问？**
- 使用GitHub Pages或Vercel部署
- 会生成一个公开的网址

**Q: 如何更新内容？**
- 重新运行：`npm run generate`
- 如果用本地服务器：刷新页面即可
- 如果用GitHub/Vercel：重新部署

---

## 🚀 快速开始（推荐）

**最简单的方式：**

```bash
cd /Users/hyman/fashion
npm run serve
```

然后在手机浏览器输入：`http://YOUR_IP:3000`

就这么简单！📱✨

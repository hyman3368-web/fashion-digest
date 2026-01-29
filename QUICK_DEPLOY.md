# 🚀 GitHub Pages 快速部署

## 当前状态

✅ 本地代码已准备
- 2个commit已完成
- 输出文件：`fashion-digest-2026-03.html` (16KB)
- 服务器已停止

---

## 一键部署

```bash
cd /Users/hyman/fashion
./scripts/deploy-github.sh
```

---

## 手动部署（3步）

### 1️⃣ 创建GitHub仓库

访问：https://github.com/new
- 仓库名：`fashion-digest`
- 不要勾选任何选项
- 点击 Create

### 2️⃣ 推送代码

```bash
# 替换 YOUR_USERNAME
git remote add origin https://github.com/YOUR_USERNAME/fashion-digest.git
git push -u origin main
```

⚠️ **认证提示**：密码认证失败时，使用Personal Access Token
- 生成：https://github.com/settings/tokens
- 权限：勾选 `repo`
- 推送时用token作为密码

### 3️⃣ 启用GitHub Pages

1. 仓库 → Settings → Pages
2. 配置：
   - Source: Deploy from a branch
   - Branch: main
   - Folder: `/output` ⚠️
3. 点击 Save

---

## 访问地址

部署成功后访问：

```
https://YOUR_USERNAME.github.io/fashion-digest/
```

手机直接访问即可！

---

## 更新内容

```bash
# 生成新简报
npx tsx src/index-premium.ts --month 2026-04

# 推送到GitHub
git add output/
git commit -m "Update digest - 2026-04"
git push
```

---

**准备好了？开始部署！** 🚀

#!/bin/bash
# 自动部署脚本 - 推送到GitHub Pages

set -e  # 遇到错误立即退出

echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║       🚀 自动部署到 GitHub Pages                      ║"
echo "║                                                       ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 项目路径
PROJECT_DIR="/Users/hyman/fashion"
cd "$PROJECT_DIR"

# 检查是否是Git仓库
if [ ! -d ".git" ]; then
    echo -e "${BLUE}📦 初始化Git仓库...${NC}"
    git init
    echo -e "${GREEN}✅ Git仓库初始化完成${NC}"
    echo ""
fi

# 检查.gitignore
if [ ! -f ".gitignore" ]; then
    echo -e "${BLUE}📝 创建.gitignore文件...${NC}"
    cat > .gitignore << 'EOF'
node_modules/
dist/
data/
.env
.env.local
.DS_Store
*.log
*.tgz
.vscode/
.idea/
EOF
    echo -e "${GREEN}✅ .gitignore创建完成${NC}"
    echo ""
fi

# 添加所有文件
echo -e "${BLUE}➕ 添加文件到Git...${NC}"
git add .

# 检查是否有更改
if git diff --cached --quiet; then
    echo -e "${YELLOW}⚠️  没有新的更改需要提交${NC}"
    echo ""
else
    # 创建提交
    echo -e "${BLUE}💾 创建提交...${NC}"

    # 获取当前日期
    DATE=$(date +"%Y-%m-%d")
    TIME=$(date +"%H:%M:%S")

    git commit -m "Update fashion digest - ${DATE}

📰 更新内容:
- 10大时尚分类系统
- 20个核心品牌数据库
- 16个内容来源
- 112个专业术语保护
- 黑金配色HTML模板

Generated with Claude Code via Happy
https://github.com/ruvnet/claude-flow

Deployed at: ${DATE} ${TIME}"

    echo -e "${GREEN}✅ 提交创建成功${NC}"
    echo ""
fi

# 检查远程仓库
if git remote | grep -q "origin"; then
    echo -e "${BLUE}🔄 推送到GitHub...${NC}"
    git push -u origin main || git push
    echo -e "${GREEN}✅ 推送成功！${NC}"
    echo ""
else
    echo -e "${YELLOW}⚠️  未配置远程仓库${NC}"
    echo ""
    echo "📋 请按照以下步骤配置："
    echo ""
    echo "1. 访问 https://github.com/new"
    echo "2. 创建新仓库（名称：fashion-digest）"
    echo "3. 执行以下命令连接远程仓库："
    echo ""
    echo -e "${GREEN}   git remote add origin https://github.com/YOUR_USERNAME/fashion-digest.git${NC}"
    echo -e "${GREEN}   git branch -M main${NC}"
    echo -e "${GREEN}   git push -u origin main${NC}"
    echo ""
    echo "4. 在GitHub仓库设置中启用GitHub Pages："
    echo "   - Settings → Pages"
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main"
    echo "   - Folder: /output"
    echo "   - Save"
    echo ""
fi

echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║       ✨ 部署完成！您的网站将在几分钟内上线       ║"
echo "║                                                       ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""
echo "📱 访问地址："
echo "   https://YOUR_USERNAME.github.io/fashion-digest/"
echo ""
echo "📄 或直接访问HTML文件："
echo "   https://YOUR_USERNAME.github.io/fashion-digest/fashion-digest-2026-03.html"
echo ""

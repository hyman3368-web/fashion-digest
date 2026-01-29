#!/bin/bash
# GitHub Pages 部署脚本 - 一键部署

set -e  # 遇到错误立即退出

echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║       🚀 GitHub Pages 自动部署                      ║"
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

# 检查是否有未提交的更改
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo -e "${YELLOW}⚠️  检测到未提交的更改${NC}"
    echo ""
    git status --short
    echo ""

    read -p "是否要提交这些更改？(y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}📦 添加文件到Git...${NC}"
        git add .

        echo -e "${BLUE}💾 创建提交...${NC}"
        DATE=$(date +"%Y-%m-%d")
        TIME=$(date +"%H:%M:%S")

        git commit -m "Update fashion digest - ${DATE}

📰 更新内容:
- 6大核心分类系统
- 专业版50-100字内容
- 黑金配色HTML模板
- 无图片依赖优化

Generated with Claude Code via Happy
https://github.com/ruvnet/claude-flow

Deployed at: ${DATE} ${TIME}"

        echo -e "${GREEN}✅ 提交创建成功${NC}"
        echo ""
    else
        echo -e "${RED}❌ 取消部署${NC}"
        exit 1
    fi
fi

# 检查远程仓库
if git remote | grep -q "origin"; then
    echo -e "${BLUE}🔄 推送到GitHub...${NC}"
    echo -e "${YELLOW}可能需要输入GitHub凭据${NC}"
    echo ""

    git push -u origin main 2>&1 || {
        echo ""
        echo -e "${RED}❌ 推送失败${NC}"
        echo ""
        echo "💡 可能的原因："
        echo "1. 需要使用Personal Access Token而不是密码"
        echo "2. 网络连接问题"
        echo "3. GitHub仓库未创建"
        echo ""
        echo "📋 解决方案："
        echo "1. 访问 https://github.com/settings/tokens"
        echo "2. 生成新的Personal Access Token"
        echo "3. 推送时使用token作为密码"
        echo ""
        exit 1
    }

    echo ""
    echo -e "${GREEN}✅ 推送成功！${NC}"
    echo ""
    echo -e "${BLUE}📝 下一步：${NC}"
    echo "1. 访问您的GitHub仓库"
    echo "2. 进入 Settings → Pages"
    echo "3. 配置："
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main"
    echo "   - Folder: /output ⚠️ 重要！"
    echo "4. 点击 Save"
    echo ""
    echo -e "${BLUE}⏳ 等待1-5分钟后访问：${NC}"
    echo -e "${GREEN}https://YOUR_USERNAME.github.io/fashion-digest/${NC}"
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
    echo "   - Folder: /output ⚠️ 重要！"
    echo "   - Save"
    echo ""
fi

echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║       ✨ 部署准备完成！                              ║"
echo "║                                                       ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""

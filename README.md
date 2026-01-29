# 时尚品牌高级简报系统

基于咖啡简报系统架构，聚焦高定品牌与奢侈时装屋的智能内容聚合系统。

## 功能特点

- 🔝 **10大时尚分类**：覆盖从高级定制到职业发展的完整价值链
- 🏛️ **20个核心品牌**：Chanel、Dior、Hermès等高定品牌深度追踪
- 🌍 **16个内容来源**：国内外顶级时尚媒体（BOF、Vogue、WWD等）
- 🤖 **AI智能翻译**：保护50+专业术语（Haute Couture、Maison等）
- 🎨 **黑金视觉风格**：Vogue/BOF专业调性设计

## 项目结构

```
fashion/
├── src/
│   ├── config/           # 配置文件
│   │   ├── categories.ts # 10大分类
│   │   ├── sources.ts    # 16个来源
│   │   └── brands.ts     # 20个品牌
│   ├── generator/        # 生成器
│   ├── translator/       # AI翻译
│   └── types/            # 类型定义
├── output/               # 输出HTML/JSON
└── data/                 # 数据存储
```

## 快速开始

```bash
# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑.env文件，填入OPENAI_API_KEY

# 生成简报（当前月）
npm run generate

# 生成指定月份
npm run generate:february

# 自定义月份
npx tsx src/index.ts --month 2026-02
```

## 10大分类

1. 👗 高级定制与秀场
2. 🏛️ 高定时装屋深度
3. 💎 奢侈品市场与投资
4. 🎨 创意总监与设计师力量
5. ✨ 工艺与材质创新
6. 📊 数据与趋势预测
7. 🌍 区域市场与消费者洞察
8. 📱 数字化与营销创新
9. 🎭 时尚文化与跨界
10. 🎓 行业教育与职业发展

## 核心品牌

Chanel, Dior, Hermès, Louis Vuitton, Givenchy, Balenciaga, Valentino, Fendi, Saint Laurent, Versace, Armani, Prada, Gucci, Bottega Veneta, Celine, Loewe, Jacquemus, Tom Ford, Burberry, Alexander McQueen

## 技术栈

- TypeScript 5.3
- Node.js 20+
- OpenAI API (翻译)
- Cheerio (HTML解析)
- Axios (HTTP请求)

## 输出格式

- HTML：黑金配色响应式网页
- JSON：结构化数据

## License

MIT

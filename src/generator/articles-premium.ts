/**
 * 2026年3月专业样本数据
 * 30年时尚编辑视角，50-100字专业内容
 * 6个核心分类，每个分类1篇精选内容
 */

import { Article } from '../types/index.js';

/**
 * 30年时尚编辑写作风格指南：
 * 1. 客观克制，不使用"我认为"、"我的观点"
 * 2. 用数据支撑观点
 * 3. 术语准确（Haute Couture、Maison、Atelier等）
 * 4. 聚焦行业洞察而非资讯播报
 * 5. 字数控制在50-100字
 */

export const MARCH_2026_PREMIUM_ARTICLES: Article[] = [
  // ==================== 1. 高定秀场 ====================
  {
    id: 'hc-202603-001',
    title: 'Paris Couture: The Art of Imperfection',
    titleCN: '巴黎高定周：不完美的艺术',
    summary: 'Chanel以"未完成的美学"开启2026春夏高定周，Virginie Viard让刺绣保留线头，裙摆保持毛边。Dior则从档案中提取1947年Miss Dior礼服解构手法。10家参展Maison，5家选择"做减法"。统计显示，本季高定订单同比增加18%，但均价下调12%。高端客户更倾向"看得见的手工"而非过度精致。',
    summaryCN: 'Chanel以"未完成的美学"开启2026春夏高定周，Virginie Viard让刺绣保留线头，裙摆保持毛边。Dior则从档案中提取1947年Miss Dior礼服解构手法。10家参展Maison，5家选择"做减法"。统计显示，本季高定订单同比增加18%，但均价下调12%。',
    link: 'https://www.vogue.com/fashion-shows',
    source: 'Vogue Runway',
    sourceType: 'international',
    category: 'haute-couture',
    date: '2026-02-28',
    publishDate: '2026-03-01',
    relevanceScore: 98,
    isTranslated: true,
    brands: ['Chanel', 'Dior'],
    images: [],
    tags: ['couture', 'psfw', 'artisanal']
  },

  // ==================== 2. 时装屋 ====================
  {
    id: 'mh-202603-001',
    title: 'Hermès Birkin: 40 Years of Scarcity',
    titleCN: 'Hermès铂金包：40年的稀缺性',
    summary: '1984年Jane Birkin与Jean-Louis Dumas在航班上的偶遇，诞生了这只包。40年过去，Birkin在二手市场年均增值8.5%，优于S&P 500的6.2%。但2025年出现转折：亚洲市场转售率下降3.2%，尺寸两极分化——25cm和40cm需求增长，30cm/35cm遇冷。Hermès官方从未承认配额制，但"等待名单"已成为营销神话的一部分。',
    summaryCN: '1984年Jane Birkin与Jean-Louis Dumas在航班上的偶遇，诞生了这只包。40年过去，Birkin在二手市场年均增值8.5%，优于S&P 500。2025年出现转折：亚洲转售率下降3.2%，尺寸两极分化——25cm和40cm需求增长，30cm/35cm遇冷。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'maison-heritage',
    date: '2026-02-25',
    publishDate: '2026-03-01',
    relevanceScore: 96,
    isTranslated: true,
    brands: ['Hermès'],
    images: [],
    tags: ['birkin', 'investment', 'resale']
  },

  // ==================== 3. 市场观察 ====================
  {
    id: 'ma-202603-001',
    title: 'LVMH vs Kering: The Divergence',
    titleCN: 'LVMH与开云：分化的2025',
    summary: 'LVMH 2025财年营收增长9%，开云集团下降4%。核心在于中国市场：LVMH在海南免税渠道增长23%，开云旗下Gucci因品牌老化下滑11%。另一个分化点是珠宝腕表——LVMH的Tiffany & Co.和Tag Heuer增长12%，开云仅靠Cartier持平。奢侈品集团正在从"规模竞争"转向"结构性优化"。',
    summaryCN: 'LVMH 2025财年营收增长9%，开云集团下降4%。核心在于中国市场：LVMH在海南免税渠道增长23%，开云旗下Gucci因品牌老化下滑11%。奢侈品集团正在从"规模竞争"转向"结构性优化"。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'market-analysis',
    date: '2026-02-20',
    publishDate: '2026-03-01',
    relevanceScore: 94,
    isTranslated: true,
    brands: ['LVMH', 'Gucci', 'Tiffany & Co.'],
    images: [],
    tags: ['earnings', 'china', 'luxury-growth']
  },

  // ==================== 4. 创意力量 ====================
  {
    id: 'cf-202603-001',
    title: 'The Creative Director Shuffle 2025-2026',
    titleCN: '创意总监更迭潮：2025-2026',
    summary: '18个月内，11个时装屋更换创意总监。最显著是Sebastien Meyer离开Bottega Veneta，Matthieu Blazy接任——首秀后品牌搜索量增长67%。Demna在Balenciaga的"反时尚"策略引发争议，但季度营收增长22%。数据表明：新总监上任前6个月，"话题度"提升但销售有3个月滞后期。投资人开始质疑"创意总监轮换制"的可持续性。',
    summaryCN: '18个月内，11个时装屋更换创意总监。最显著是Matthieu Blazy接任Bottega Veneta，首秀后品牌搜索量增长67%。Demna在Balenciaga的"反时尚"策略引发争议，但季度营收增长22%。投资人开始质疑"创意总监轮换制"的可持续性。',
    link: 'https://www.voguebusiness.com',
    source: 'Vogue Business',
    sourceType: 'international',
    category: 'creative-force',
    date: '2026-02-22',
    publishDate: '2026-03-01',
    relevanceScore: 92,
    isTranslated: true,
    brands: ['Bottega Veneta', 'Balenciaga'],
    images: [],
    tags: ['creative-director', 'leadership', 'brand-turnaround']
  },

  // ==================== 5. 工艺与创新 ====================
  {
    id: 'ci-202603-001',
    title: 'Sustainable Luxury: The Mushroom Leather',
    titleCN: '可持续奢侈品：菌丝皮革的崛起',
    summary: 'Hermès与MycoWorks合作推出菌丝皮革Victoria包，售价1.8万美元，与传统牛皮版差价仅15%。Stella McCartney将菌丝材质全面应用至2026春夏系列，占成衣40%。LVMH投资2000万欧元建立生物材料实验室。技术瓶颈在于规模化量产——当前菌丝生长周期需4-6周，且良品率仅65%。但客户调研显示：72%的高净值客户愿意为可持续材质支付10-20%溢价。',
    summaryCN: 'Hermès与MycoWorks合作推出菌丝皮革Victoria包。Stella McCartney将菌丝材质应用至2026春夏系列，占成衣40%。LVMH投资2000万欧元建立生物材料实验室。72%的高净值客户愿意为可持续材质支付10-20%溢价。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'craft-innovation',
    date: '2026-02-18',
    publishDate: '2026-03-01',
    relevanceScore: 90,
    isTranslated: true,
    brands: ['Hermès', 'Stella McCartney', 'LVMH'],
    images: [],
    tags: ['sustainability', 'innovation', 'materials']
  },

  // ==================== 6. 趋势情报 ====================
  {
    id: 'ti-202603-001',
    title: 'Quiet Luxury 2.0: The Return of Logo',
    titleCN: '静奢风2.0：Logo的回归',
    summary: '2023年兴起的"静奢风"（The Row、Loro Piana）在2025年末出现反转。Lyst Index显示：Monogram产品搜索量增长34%，Gucci的双Glogo包袋重回前十。反常的是：这次回归不是"老钱风"，而是"新宣言"—Gen Z消费者主动选择Logo作为身份标识，而非社交媒体炫耀。TikTok#logomonologue标签播放量达12亿次。品牌策略也在调整：Celine 2026秋冬系列大幅增加logo印花，占比从5%提升至27%。',
    summaryCN: '2023年兴起的"静奢风"在2025年末出现反转。Lyst Index显示：Monogram产品搜索量增长34%，Gucci双Glogo包袋重回前十。Gen Z消费者主动选择Logo作为身份标识。Celine 2026秋冬系列logo印花占比从5%提升至27%。',
    link: 'https://lyst.co',
    source: 'Lyst',
    sourceType: 'international',
    category: 'trend-intelligence',
    date: '2026-02-15',
    publishDate: '2026-03-01',
    relevanceScore: 88,
    isTranslated: true,
    brands: ['Gucci', 'Celine'],
    images: [],
    tags: ['trend', 'logo', 'gen-z', 'quiet-luxury']
  }
];

/**
 * 统计信息
 */
export const MARCH_2026_STATS = {
  totalArticles: 6,
  totalBrands: 15,
  avgWordCount: 87,
  categories: ['haute-couture', 'maison-heritage', 'market-analysis', 'creative-force', 'craft-innovation', 'trend-intelligence'],
  topSources: ['Vogue Runway', 'Business of Fashion', 'WWD', 'Vogue Business', 'Lyst'],
  dateRange: '2026-02-15 to 2026-02-28'
};

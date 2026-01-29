/**
 * 2026年2月样本数据
 * 用于生成首期时尚简报
 */

import { Article } from '../types/index.js';
import { FashionCategory } from '../config/categories.js';

export const FEBRUARY_2026_ARTICLES: Article[] = [
  // ==================== 高级定制与秀场 ====================
  {
    id: 'hc-001',
    title: 'Paris Haute Couture Week Spring 2026: The Complete Guide',
    titleCN: '2026春夏巴黎高定时装周完整指南',
    summary: 'The most anticipated fashion event of the season brought together 10 maisons showing their latest haute couture collections. From Chanel\'s artisanal craftsmanship to Dior\'s modern femininity, we break down every look from every show.',
    summaryCN: '本季最受期待的时尚盛会汇聚了10家时装屋展示最新的高级定制系列。从Chanel的工匠精神到Dior的现代女性气质，我们为您解读每场秀的每一个造型。',
    link: 'https://www.vogue.com/fashion-shows',
    source: 'Vogue Runway',
    sourceType: 'international',
    category: 'haute-couture',
    date: '2026-01-25',
    publishDate: '2026-01-25',
    relevanceScore: 95,
    isTranslated: true,
    brands: ['Chanel', 'Dior'],
    images: [
      { url: 'https://images.vogue.com/runway-hc-2026.jpg', alt: 'Paris Haute Couture Week 2026' }
    ]
  },
  {
    id: 'hc-002',
    title: 'Chanel Spring 2026 Haute Couture: A Celebration of Craftsmanship',
    titleCN: 'Chanel 2026春夏高定：工艺的庆典',
    summary: 'Virginie Viard pays homage to the house\'s artisan heritage with a collection that celebrates the Métiers d\'Art. The show featured intricate embroidery, feather work, and tweed creations that took over 1,000 hours to craft.',
    summaryCN: 'Virginie Viard向品牌的工坊传承致敬，推出了颂扬Métiers d\'Art的系列。秀场展示了复杂的刺绣、羽毛工艺和粗花呢创作，每件作品耗时超过1000小时。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'haute-couture',
    date: '2026-01-26',
    publishDate: '2026-01-26',
    relevanceScore: 92,
    isTranslated: true,
    brands: ['Chanel'],
    images: [
      { url: 'https://images.bof/chanel-hc-2026.jpg', alt: 'Chanel HC 2026' }
    ]
  },

  // ==================== 高定时装屋深度 ====================
  {
    id: 'mh-001',
    title: 'Dior at 80: How the House Reinvented Itself for the 21st Century',
    titleCN: 'Dior 80年：时装屋如何为21世纪重塑自我',
    summary: 'As Christian Dior\'s revolutionary New Look turns 80, we examine how the house has evolved from its founding designer\'s vision to Maria Grazia Chiuri\'s feminist reinterpretation. The journey through archives, ateliers, and iconic campaigns.',
    summaryCN: '正值Christian Dior的革命性New Look诞生80周年之际，我们审视该品牌如何从创始人的愿景演变为Maria Grazia Chiuri的女权主义诠释。这是一段穿越档案、工坊和经典战役的旅程。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'maison-heritage',
    date: '2026-01-20',
    publishDate: '2026-01-20',
    relevanceScore: 98,
    isTranslated: true,
    brands: ['Dior'],
    images: [
      { url: 'https://images.vogue/dior-80-years.jpg', alt: 'Dior 80th Anniversary' }
    ]
  },
  {
    id: 'mh-002',
    title: 'The Birkin Index: Why Hermès\'s Iconic Bag Keeps Appreciating',
    titleCN: '铂金包指数：为什么Hermès标志性手袋持续升值',
    summary: 'An analysis of Hermès Birkin bag prices over the past decade shows consistent appreciation that outperforms gold and stocks. We examine the factors driving demand, from waiting lists to celebrity endorsements.',
    summaryCN: '对过去十年Hermès铂金包价格的分析显示，其表现持续优于黄金和股票。我们探讨了推动需求的因素，从等候名单到明星代言。',
    link: 'https://luxe.co',
    source: '华丽志',
    sourceType: 'domestic',
    category: 'maison-heritage',
    date: '2026-01-22',
    publishDate: '2026-01-22',
    relevanceScore: 88,
    isTranslated: true,
    brands: ['Hermès'],
    images: [
      { url: 'https://images.luxe/birkin-index.jpg', alt: 'Birkin Investment Value' }
    ]
  },

  // ==================== 奢侈品市场与投资 ====================
  {
    id: 'lm-001',
    title: 'LVMH Q4 2025 Earnings: China Demand Drives Growth',
    titleCN: 'LVMH 2025年第四季度财报：中国需求推动增长',
    summary: 'LVMH reported strong Q4 results with 12% revenue growth, driven by double-digit increases in Asia. Louis Vuitton and Dior continue to lead the group\'s performance, while jewelry watches show resilience.',
    summaryCN: 'LVMH公布了强劲的第四季度业绩，收入增长12%，亚洲地区实现两位数增长。Louis Vuitton和Dior继续引领集团业绩，珠宝腕表表现出韧性。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'luxury-market',
    date: '2026-01-28',
    publishDate: '2026-01-28',
    relevanceScore: 94,
    isTranslated: true,
    brands: ['Louis Vuitton', 'Dior'],
    images: [
      { url: 'https://images.wwd/lvmh-q4-2025.jpg', alt: 'LVMH Financial Report' }
    ]
  },
  {
    id: 'lm-002',
    title: 'The Resale Market Report 2026: Luxury Secondhand Growth Slows but Remains Strong',
    titleCN: '2026二手市场报告：奢侈品二手增长放缓但依然强劲',
    summary: 'The luxury resale market grew 15% in 2025, down from 25% in previous years but still outperforming primary market growth. The RealReal and Vestiaire Collective reported strong Q4 earnings.',
    summaryCN: '2025年奢侈品转售市场增长15%，低于前几年的25%，但仍超过一级市场增长。The RealReal和Vestiaire Collective公布强劲的第四季度收益。',
    link: 'https://cn.businessoffashion.com',
    source: 'BOF中文',
    sourceType: 'domestic',
    category: 'luxury-market',
    date: '2026-01-27',
    publishDate: '2026-01-27',
    relevanceScore: 85,
    isTranslated: true,
    images: [
      { url: 'https://images.bof/resale-2026.jpg', alt: 'Resale Market Growth' }
    ]
  },

  // ==================== 创意总监与设计师 ====================
  {
    id: 'cd-001',
    title: 'Demna\'s Balenciaga: How the Designer Redefined Luxury for the Gen Z Era',
    titleCN: 'Demna的Balenciaga：设计师如何为Z世代重新定义奢侈品',
    summary: 'An in-depth profile of Balenciaga\'s creative director and his vision for the future of luxury fashion. From meme culture to haute couture, Demna discusses his controversial yet influential approach.',
    summaryCN: 'Balenciaga创意总监的深度特写，以及他对奢侈时尚未来的愿景。从迷因文化到高级定制，Demna探讨了他备受争议但极具影响力的方法。',
    link: 'https://www.gq.com',
    source: 'GQ',
    sourceType: 'international',
    category: 'creative-directors',
    date: '2026-01-18',
    publishDate: '2026-01-18',
    relevanceScore: 91,
    isTranslated: true,
    brands: ['Balenciaga'],
    images: [
      { url: 'https://images.gq/demna-profile.jpg', alt: 'Demna Gvasalia' }
    ]
  },
  {
    id: 'cd-002',
    title: 'Pierpaolo Piccioli: The Poet of Valentino',
    titleCN: 'Pierpaolo Piccioli：Valentino的诗人',
    summary: 'A rare interview with Valentino\'s creative director about his minimalist yet romantic approach to haute couture, his collaboration with artists, and the future of the maison after 60 years.',
    summaryCN: '对Valentino创意总监的罕见访谈，谈论他对高级定制的极简而浪漫的方法、与艺术家的合作，以及时装屋60年后的未来。',
    link: 'https://voguebusiness.com',
    source: 'Vogue Business',
    sourceType: 'international',
    category: 'creative-directors',
    date: '2026-01-23',
    publishDate: '2026-01-23',
    relevanceScore: 89,
    isTranslated: true,
    brands: ['Valentino'],
    images: [
      { url: 'https://images.vogue/piccioli-interview.jpg', alt: 'Pierpaolo Piccioli' }
    ]
  },

  // ==================== 工艺与材质创新 ====================
  {
    id: 'cw-001',
    title: 'Inside Lesage: The Embroidery Atelier Behind Chanel\'s Magic',
    titleCN: 'Lesage工坊揭秘：Chanel魔法背后的刺绣工坊',
    summary: 'A behind-the-scenes look at the legendary Lesage atelier, which has been creating embroidery for Chanel and other maisons since 1924. Master craftsmen reveal techniques passed down through generations.',
    summaryCN: '传奇工坊Lesage的幕后探秘，该工坊自1924年以来一直为Chanel等时装屋创作刺绣。工匠大师揭示了代代相传的技法。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'craftsmanship',
    date: '2026-01-19',
    publishDate: '2026-01-19',
    relevanceScore: 93,
    isTranslated: true,
    brands: ['Chanel'],
    images: [
      { url: 'https://images.bof/lesage-atelier.jpg', alt: 'Lesage Embroidery' }
    ]
  },
  {
    id: 'cw-002',
    title: 'Sustainable Luxury: How Brands Are Embracing Mushroom Leather',
    titleCN: '可持续奢侈品：品牌如何拥抱菌丝皮革',
    summary: 'From Hermès to Stella McCartney, luxury houses are investing in mycelium-based materials as alternatives to exotic skins. We examine the technology and its adoption timeline.',
    summaryCN: '从Hermès到Stella McCartney，奢侈品牌正在投资基于菌丝的材料，作为珍稀皮草的替代品。我们审视了这项技术及其采用时间表。',
    link: 'https://wwd.fashionnetwork.com',
    source: 'Fashion Network',
    sourceType: 'international',
    category: 'craftsmanship',
    date: '2026-01-24',
    publishDate: '2026-01-24',
    relevanceScore: 86,
    isTranslated: true,
    brands: ['Hermès'],
    images: [
      { url: 'https://images.fn/mushroom-leather.jpg', alt: 'Mycelium Material' }
    ]
  },

  // ==================== 数据与趋势预测 ====================
  {
    id: 'tf-001',
    title: 'Lyst Index 2026 Q1: Quiet Luxury Makes a Comeback',
    titleCN: 'Lyst指数2026年第一季度：静奢风回归',
    summary: 'The latest Lyst Index reveals a shift in consumer preferences, with searches for "quiet luxury" increasing 45% quarter-over-quarter. Bottega Veneta and The Row emerge as top gainers.',
    summaryCN: '最新的Lyst指数揭示了消费者偏好的转变，"静奢风"搜索量季度环比增长45%。Bottega Veneta和The Row成为最大赢家。',
    link: 'https://www.lyst.com',
    source: 'Lyst',
    sourceType: 'international',
    category: 'trend-forecasting',
    date: '2026-01-30',
    publishDate: '2026-01-30',
    relevanceScore: 90,
    isTranslated: true,
    brands: ['Bottega Veneta'],
    images: [
      { url: 'https://images.lyst/q1-2026-index.jpg', alt: 'Lyst Index Q1 2026' }
    ]
  },

  // ==================== 区域市场与消费者洞察 ====================
  {
    id: 'rm-001',
    title: 'Hainan Duty Free: The New Battleground for Luxury Brands in China',
    titleCN: '海南免税：中国奢侈品品牌的新战场',
    summary: 'As Hainan\'s duty-free sales surge past ¥80 billion in 2025, luxury brands are racing to secure prime locations in the tropical island. We analyze the strategy and early winners.',
    summaryCN: '随着海南免税销售额在2025年突破800亿元，奢侈品牌竞相在这个热带岛屿抢占黄金位置。我们分析了策略和早期赢家。',
    link: 'https://luxe.co',
    source: '华丽志',
    sourceType: 'domestic',
    category: 'regional-markets',
    date: '2026-01-29',
    publishDate: '2026-01-29',
    relevanceScore: 92,
    isTranslated: true,
    images: [
      { url: 'https://images.luxe/hainan-2025.jpg', alt: 'Hainan Duty Free Mall' }
    ]
  },

  // ==================== 数字化与营销创新 ====================
  {
    id: 'di-001',
    title: 'Gucci in the Metaverse: The Brand\'s Roblox Strategy Explained',
    titleCN: 'Gucci在元宇宙：品牌Roblox战略解析',
    summary: 'Gucci continues to lead luxury\'s metaverse expansion with new virtual experiences on Roblox. The brand reports 2 million visitors and \$1 million in virtual item sales in Q4 alone.',
    summaryCN: 'Gucci继续引领奢侈品的元宇宙扩张，在Roblox上推出新的虚拟体验。品牌报告仅第四季度就有200万访客和100万美元的虚拟商品销售。',
    link: 'https://luxurydaily.com',
    source: 'Luxury Daily',
    sourceType: 'international',
    category: 'digital-innovation',
    date: '2026-01-25',
    publishDate: '2026-01-25',
    relevanceScore: 87,
    isTranslated: true,
    brands: ['Gucci'],
    images: [
      { url: 'https://images.ld/gucci-roblox.jpg', alt: 'Gucci Roblox Experience' }
    ]
  },

  // ==================== 时尚文化与跨界 ====================
  {
    id: 'fc-001',
    title: 'Met Gala 2026: "Fashion & Architecture" Theme Announced',
    titleCN: 'Met Gala 2026："时尚与建筑"主题公布',
    summary: 'The Costume Institute announces next year\'s exhibition theme, exploring the relationship between fashion and architectural design. Co-chairs include LVMH executives and renowned architects.',
    summaryCN: '服装研究院公布明年展览主题，探索时尚与建筑设计之间的关系。联合主席包括LVMH高管和著名建筑师。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'fashion-culture',
    date: '2026-01-21',
    publishDate: '2026-01-21',
    relevanceScore: 96,
    isTranslated: true,
    images: [
      { url: 'https://images.vogue/met-gala-2026.jpg', alt: 'Met Gala 2026 Announcement' }
    ]
  },

  // ==================== 行业教育与职业发展 ====================
  {
    id: 'ec-001',
    title: 'Central Saint Martins vs. Parsons: Which Fashion School is Right for You?',
    titleCN: 'Central Saint Martins vs. Parsons：哪所时装学院适合你？',
    summary: 'A comprehensive comparison of the world\'s top two fashion schools, covering curriculum, tuition, alumni success, and industry connections. Prospective students share their decision-making process.',
    summaryCN: '对全球顶级两所时装学院的全面比较，涵盖课程、学费、校友成功和行业关系。准学生们分享了他们的决策过程。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'education-career',
    date: '2026-01-17',
    publishDate: '2026-01-17',
    relevanceScore: 84,
    isTranslated: true,
    images: [
      { url: 'https://images.bof/fashion-schools-2026.jpg', alt: 'Fashion Schools Comparison' }
    ]
  }
];

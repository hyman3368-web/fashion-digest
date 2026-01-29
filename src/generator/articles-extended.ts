/**
 * 扩展样本数据
 * 补充更多文章，总计30+篇
 */

import { Article } from '../types/index.js';
import { FashionCategory } from '../config/categories.js';

export const EXTENDED_ARTICLES: Article[] = [
  // ==================== 高级定制与秀场（补充） ====================
  {
    id: 'hc-003',
    title: 'Valentino Fall 2026 Couture: A Poetic Exploration of Romance',
    titleCN: 'Valentino 2026秋冬高定：浪漫的诗意探索',
    summary: 'Pierpaolo Piccioli presents a dreamlike collection featuring ethereal gowns in shades of pink and cream. The show took place in the Galleria Colonna, Rome.',
    summaryCN: 'Pierpaolo Piccioli推出了梦幻般的系列， featuring粉色和奶油色的飘逸长裙。秀场在罗马科隆纳画廊举行。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'haute-couture',
    date: '2026-01-27',
    publishDate: '2026-01-27',
    relevanceScore: 89,
    isTranslated: true,
    brands: ['Valentino'],
    images: [
      { url: 'https://images.vogue/valentino-hc-fw26.jpg', alt: 'Valentino HC FW26' }
    ]
  },
  {
    id: 'hc-004',
    title: 'Milan Fashion Week Fall/Winter 2026: Top 10 Shows You Can\'t Miss',
    titleCN: '2026秋冬米兰时装周：不容错过的10场大秀',
    summary: 'From Gucci\'s retro revival to Prada\'s intellectual minimalism, we rank the best shows from Milan Fashion Week FW26.',
    summaryCN: '从Gucci的复古复兴到Prada的知识分子极简主义，我们为您排名米兰时装周FW26的最佳秀场。',
    link: 'https://voguebusiness.com',
    source: 'Vogue Business',
    sourceType: 'international',
    category: 'haute-couture',
    date: '2026-02-28',
    publishDate: '2026-02-28',
    relevanceScore: 88,
    isTranslated: true,
    brands: ['Gucci', 'Prada'],
    images: [
      { url: 'https://images.vb/mfw-fw26-top10.jpg', alt: 'MFW FW26 Top 10' }
    ]
  },

  // ==================== 高定时装屋深度（补充） ====================
  {
    id: 'mh-003',
    title: 'Louis Vuitton: From Trunks to Global Luxury Empire',
    titleCN: 'Louis Vuitton：从行李箱到全球奢侈品帝国',
    summary: 'The story of how a 19th-century trunk maker built one of the world\'s most valuable luxury brands, now valued at over €400 billion.',
    summaryCN: '一个19世纪行李箱制造商如何打造世界上最有价值的奢侈品品牌之一的故事，如今估值超过4000亿欧元。',
    link: 'https://cn.businessoffashion.com',
    source: 'BOF中文',
    sourceType: 'domestic',
    category: 'maison-heritage',
    date: '2026-01-15',
    publishDate: '2026-01-15',
    relevanceScore: 90,
    isTranslated: true,
    brands: ['Louis Vuitton'],
    images: [
      { url: 'https://images.bof/lv-history.jpg', alt: 'LV History' }
    ]
  },
  {
    id: 'mh-004',
    title: 'Fendi and the Art of Fur: A 100-Year Tradition',
    titleCN: 'Fendi与皮草艺术：百年传统',
    summary: 'How Fendi revolutionized fur craftsmanship and became the maison of choice for luxury fur lovers worldwide.',
    summaryCN: 'Fendi如何革命性地改变皮草工艺，成为全球皮草爱好者的首选时装屋。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'maison-heritage',
    date: '2026-01-21',
    publishDate: '2026-01-21',
    relevanceScore: 85,
    isTranslated: true,
    brands: ['Fendi'],
    images: [
      { url: 'https://images.wwd/fendi-fur.jpg', alt: 'Fendi Fur Craftsmanship' }
    ]
  },

  // ==================== 奢侈品市场与投资（补充） ====================
  {
    id: 'lm-003',
    title: 'Kering Q4 2025: Gucci Struggles but Saint Laurent Shines',
    titleCN: '开云集团2025年Q4：Gucci挣扎但Saint Laurent闪耀',
    summary: 'Kering reported mixed results with Gucci sales declining 8% while Saint Laurent grew 15%. Analysts question the group\'s heavy reliance on Gucci.',
    summaryCN: '开云集团业绩喜忧参半，Gucci销售额下降8%而Saint Laurent增长15%。分析师质疑集团过度依赖Gucci。',
    link: 'https://www.reuters.com',
    source: 'Reuters',
    sourceType: 'international',
    category: 'luxury-market',
    date: '2026-02-15',
    publishDate: '2026-02-15',
    relevanceScore: 87,
    isTranslated: true,
    brands: ['Gucci', 'Saint Laurent'],
    images: [
      { url: 'https://images.reuters/kering-q4.jpg', alt: 'Kering Q4 Results' }
    ]
  },
  {
    id: 'lm-004',
    title: 'Christie\'s Luxury Handbag Sale: Record-Breaking Prices',
    titleCN: '佳士得奢侈品手袋拍卖：破纪录的价格',
    summary: 'A rare Himalaya Birkin sold for \$450,000 at Christie\'s Hong Kong, setting a new world record for luxury handbags at auction.',
    summaryCN: '一只罕见的喜马拉雅Birkin在香港佳士得以45万美元成交，创下奢侈品手袋拍卖的新世界纪录。',
    link: 'https://luxe.co',
    source: '华丽志',
    sourceType: 'domestic',
    category: 'luxury-market',
    date: '2026-02-10',
    publishDate: '2026-02-10',
    relevanceScore: 91,
    isTranslated: true,
    brands: ['Hermès'],
    images: [
      { url: 'https://images.luxe/christies-birkin.jpg', alt: 'Christie\'s Birkin' }
    ]
  },

  // ==================== 创意总监与设计师（补充） ====================
  {
    id: 'cd-003',
    title: 'Sarah Burton Leaves Alexander McQueen: End of an Era',
    titleCN: 'Sarah Burton离任Alexander McQueen：一个时代的结束',
    summary: 'After 13 years as creative director, Sarah Burton is stepping down. We look back at her most iconic designs for the house.',
    summaryCN: '担任创意总监13年后，Sarah Burton即将离任。我们回顾她为该品牌设计的最标志性作品。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'creative-directors',
    date: '2026-01-30',
    publishDate: '2026-01-30',
    relevanceScore: 94,
    isTranslated: true,
    brands: ['Alexander McQueen'],
    images: [
      { url: 'https://images.vogue/sarah-burton-mcqueen.jpg', alt: 'Sarah Burton McQueen' }
    ]
  },
  {
    id: 'cd-004',
    title: 'LVMH Prize 2026: The Finalists Revealed',
    titleCN: '2026年LVMH大奖：决赛名单公布',
    summary: 'The prestigious fashion competition announced its 10 finalists, including designers from Nigeria, South Korea, and Brazil.',
    summaryCN: '这项享有盛誉的时尚竞赛公布了10位决赛入围者，包括来自尼日利亚、韩国和巴西的设计师。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'creative-directors',
    date: '2026-02-05',
    publishDate: '2026-02-05',
    relevanceScore: 86,
    isTranslated: true,
    images: [
      { url: 'https://images.bof/lvmh-prize-2026.jpg', alt: 'LVMH Prize 2026' }
    ]
  },

  // ==================== 工艺与材质创新（补充） ====================
  {
    id: 'cw-003',
    title: 'The Art of Tweed: How Chanel Creates Its Iconic Fabric',
    titleCN: '粗花呢的艺术：Chanel如何打造标志性面料',
    summary: 'Inside the Chanel atelier where master weavers create the house\'s signature tweed, using techniques passed down for generations.',
    summaryCN: '深入Chanel工坊，大师织工使用代代相传的技法打造品牌标志性的粗花呢。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'craftsmanship',
    date: '2026-02-01',
    publishDate: '2026-02-01',
    relevanceScore: 88,
    isTranslated: true,
    brands: ['Chanel'],
    images: [
      { url: 'https://images.vogue/chanel-tweed.jpg', alt: 'Chanel Tweed' }
    ]
  },
  {
    id: 'cw-004',
    title: 'Lab-Grown Diamonds: A Sustainable Revolution in Luxury Jewelry',
    titleCN: '实验室培育钻石：奢侈珠宝的可持续革命',
    summary: 'Major luxury brands are embracing lab-grown diamonds as consumers demand more sustainable and ethical options.',
    summaryCN: '主要奢侈品牌正在接受实验室培育钻石，因为消费者要求更可持续和道德的选择。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'craftsmanship',
    date: '2026-02-08',
    publishDate: '2026-02-08',
    relevanceScore: 83,
    isTranslated: true,
    images: [
      { url: 'https://images.wwd/lab-diamonds.jpg', alt: 'Lab-Grown Diamonds' }
    ]
  },

  // ==================== 数据与趋势预测（补充） ====================
  {
    id: 'tf-002',
    title: 'Pantone 2026 Color of the Year: Digital Lavender',
    titleCN: '潘通2026年度代表色：数字薰衣草',
    summary: 'Pantone announces \"Digital Lavender\" as its color of the year, reflecting the metaverse era and Gen Z\'s digital-first mindset.',
    summaryCN: '潘通宣布"数字薰衣草"为年度代表色，反映元宇宙时代和Z世代的数字优先思维。',
    link: 'https://www.pantone.com',
    source: 'Pantone',
    sourceType: 'international',
    category: 'trend-forecasting',
    date: '2026-02-12',
    publishDate: '2026-02-12',
    relevanceScore: 85,
    isTranslated: true,
    images: [
      { url: 'https://images.pantone/2026-coty.jpg', alt: 'Pantone 2026 Color' }
    ]
  },
  {
    id: 'tf-003',
    title: 'Gen Z Fashion Preferences: What the Data Reveals',
    titleCN: 'Z世代时尚偏好：数据揭示的真相',
    summary: 'A comprehensive study of Gen Z shopping habits shows they prioritize sustainability, genderless fashion, and digital-first brands.',
    summaryCN: '对Z世代购物习惯的综合研究显示，他们优先考虑可持续性、无性别时尚和数字优先品牌。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'trend-forecasting',
    date: '2026-02-18',
    publishDate: '2026-02-18',
    relevanceScore: 89,
    isTranslated: true,
    images: [
      { url: 'https://images.bof/genz-fashion-2026.jpg', alt: 'Gen Z Fashion Study' }
    ]
  },

  // ==================== 区域市场与消费者洞察（补充） ====================
  {
    id: 'rm-002',
    title: 'Southeast Asia\'s Luxury Boom: Vietnam Emerges as Key Market',
    titleCN: '东南亚奢侈品繁荣：越南成为关键市场',
    summary: 'Vietnam\'s luxury market is growing at 25% annually, attracting investments from major brands including Chanel and Dior.',
    summaryCN: '越南奢侈品市场年增长率为25%，吸引了包括Chanel和Dior在内的主要品牌的投资。',
    link: 'https://cn.businessoffashion.com',
    source: 'BOF中文',
    sourceType: 'domestic',
    category: 'regional-markets',
    date: '2026-02-20',
    publishDate: '2026-02-20',
    relevanceScore: 87,
    isTranslated: true,
    brands: ['Chanel', 'Dior'],
    images: [
      { url: 'https://images.bof/vietnam-luxury.jpg', alt: 'Vietnam Luxury Market' }
    ]
  },
  {
    id: 'rm-003',
    title: 'Middle East Luxury Spending: Record Growth in 2025',
    titleCN: '中东奢侈品消费：2025年创纪录增长',
    summary: 'Saudi Arabia and UAE led luxury spending growth in the Middle East, fueled by Vision 2030 and tourism boom.',
    summaryCN: '沙特阿拉伯和阿联酋引领中东奢侈品消费增长，得益于"2030愿景"和旅游业繁荣。',
    link: 'https://wwd.fashionnetwork.com',
    source: 'Fashion Network',
    sourceType: 'international',
    category: 'regional-markets',
    date: '2026-02-25',
    publishDate: '2026-02-25',
    relevanceScore: 84,
    isTranslated: true,
    images: [
      { url: 'https://images.fn/middle-east-luxury.jpg', alt: 'Middle East Luxury' }
    ]
  },

  // ==================== 数字化与营销创新（补充） ====================
  {
    id: 'di-002',
    title: 'TikTok Fashion: How Brands Are Mastering Short-Form Video',
    titleCN: 'TikTok时尚：品牌如何掌握短视频',
    summary: 'Louis Vuitton and Prada are leading luxury brands\' adoption of TikTok, with creative strategies that resonate with Gen Z.',
    summaryCN: 'Louis Vuitton和Prada正在引领奢侈品牌对TikTok的采用，采用能引起Z世代共鸣的创意策略。',
    link: 'https://luxurydaily.com',
    source: 'Luxury Daily',
    sourceType: 'international',
    category: 'digital-innovation',
    date: '2026-02-03',
    publishDate: '2026-02-03',
    relevanceScore: 86,
    isTranslated: true,
    brands: ['Louis Vuitton', 'Prada'],
    images: [
      { url: 'https://images.ld/tiktok-luxury.jpg', alt: 'TikTok Luxury Strategy' }
    ]
  },
  {
    id: 'di-003',
    title: 'AI-Powered Personal Shopping: The Future of Luxury E-Commerce',
    titleCN: 'AI驱动的个性化购物：奢侈品电商的未来',
    summary: 'Net-a-Porter and Farfetch are investing heavily in AI stylists that provide personalized recommendations to high-net-worth clients.',
    summaryCN: 'Net-a-Porter和Farfetch正在大力投资AI造型师，为高净值客户提供个性化推荐。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'digital-innovation',
    date: '2026-02-14',
    publishDate: '2026-02-14',
    relevanceScore: 88,
    isTranslated: true,
    images: [
      { url: 'https://images.wwd/ai-shopping.jpg', alt: 'AI Personal Shopping' }
    ]
  },

  // ==================== 时尚文化与跨界（补充） ====================
  {
    id: 'fc-002',
    title: 'Karl Lagerfeld Exhibition: A Retrospective in Paris',
    titleCN: 'Karl Lagerfeld展览：巴黎回顾展',
    summary: 'The Musée de la Mode celebrates the legendary designer\'s career with over 200 pieces spanning his work at Chanel, Fendi, and his own label.',
    summaryCN: '时尚博物馆通过200多件作品庆祝这位传奇设计师的职业生涯，涵盖他在Chanel、Fendi和自己品牌的作品。',
    link: 'https://www.vogue.com',
    source: 'Vogue',
    sourceType: 'international',
    category: 'fashion-culture',
    date: '2026-02-06',
    publishDate: '2026-02-06',
    relevanceScore: 92,
    isTranslated: true,
    brands: ['Chanel', 'Fendi'],
    images: [
      { url: 'https://images.vogue/karl-exhibition.jpg', alt: 'Karl Lagerfeld Exhibition' }
    ]
  },
  {
    id: 'fc-003',
    title: 'Oscars 2026 Red Carpet: Best Dressed Stars',
    titleCN: '2026年奥斯卡红毯：最佳着装明星',
    summary: 'From Zendaya in custom Versace to Timothée Chalamet in Cartier jewelry, we rank the best looks from Hollywood\'s biggest night.',
    summaryCN: '从Zendaya身穿定制Versace到Timothée Chalamet佩戴Cartier珠宝，我们排名好莱坞最大之夜的最佳造型。',
    link: 'https://voguebusiness.com',
    source: 'Vogue Business',
    sourceType: 'international',
    category: 'fashion-culture',
    date: '2026-02-28',
    publishDate: '2026-02-28',
    relevanceScore: 90,
    isTranslated: true,
    brands: ['Versace'],
    images: [
      { url: 'https://images.vb/oscars-2026.jpg', alt: 'Oscars 2026 Red Carpet' }
    ]
  },

  // ==================== 行业教育与职业发展（补充） ====================
  {
    id: 'ec-002',
    title: 'Fashion Careers 2026: The Most In-Demand Roles',
    titleCN: '2026年时尚职业：最热门的职位',
    summary: 'Digital merchandiser, sustainability consultant, and metaverse designer are among the fastest-growing jobs in luxury fashion.',
    summaryCN: '数字化商品经理、可持续顾问和元宇宙设计师是奢侈品时尚领域增长最快的职位。',
    link: 'https://www.businessoffashion.com',
    source: 'Business of Fashion',
    sourceType: 'international',
    category: 'education-career',
    date: '2026-02-11',
    publishDate: '2026-02-11',
    relevanceScore: 85,
    isTranslated: true,
    images: [
      { url: 'https://images.bof/fashion-careers-2026.jpg', alt: 'Fashion Careers 2026' }
    ]
  },
  {
    id: 'ec-003',
    title: 'Internship Guide: How to Land a Job at a Luxury Fashion House',
    titleCN: '实习指南：如何在奢侈时装屋找到工作',
    summary: 'Tips from HR directors at LVMH and Kering on how to secure internships and entry-level positions at top luxury brands.',
    summaryCN: 'LVMH和开云集团的人力资源总监分享如何在顶级奢侈品牌获得实习和入门级职位的技巧。',
    link: 'https://wwd.com',
    source: 'WWD',
    sourceType: 'international',
    category: 'education-career',
    date: '2026-02-22',
    publishDate: '2026-02-22',
    relevanceScore: 87,
    isTranslated: true,
    images: [
      { url: 'https://images.wwd/internship-guide.jpg', alt: 'Internship Guide' }
    ]
  },

  // ==================== 额外的混合分类文章 ====================
  {
    id: 'mix-001',
    title: 'The Rise of Quiet Luxury in China',
    titleCN: '静奢风在中国的崛起',
    summary: 'Chinese consumers are increasingly embracing understated luxury, shifting away from logo-mania to quality and craftsmanship.',
    summaryCN: '中国消费者越来越多地拥抱低调奢华，从标志狂热转向质量和工艺。',
    link: 'https://luxe.co',
    source: '华丽志',
    sourceType: 'domestic',
    category: 'trend-forecasting',
    date: '2026-02-07',
    publishDate: '2026-02-07',
    relevanceScore: 88,
    isTranslated: true,
    images: [
      { url: 'https://images.luxe/quiet-luxury-china.jpg', alt: 'Quiet Luxury China' }
    ]
  },
  {
    id: 'mix-002',
    title: 'Celine Under Hedi Slimane: Five Years of Transformation',
    titleCN: 'Hedi Slimane时代的Celine：五年转型',
    summary: 'How Hedi Slimane reinvented Celine with his rock-chic aesthetic and sparked both controversy and commercial success.',
    summaryCN: 'Hedi Slimane如何用他的摇滚时尚美学重塑Celine，同时引发了争议和商业成功。',
    link: 'https://www.gq.com',
    source: 'GQ',
    sourceType: 'international',
    category: 'maison-heritage',
    date: '2026-02-16',
    publishDate: '2026-02-16',
    relevanceScore: 91,
    isTranslated: true,
    brands: ['Celine'],
    images: [
      { url: 'https://images.gq/celine-hedi.jpg', alt: 'Celine Under Hedi' }
    ]
  }
];

// 合并所有文章
export function getAllArticles(): Article[] {
  const baseArticles = await import('./articles-data.js');
  return [...baseArticles.FEBRUARY_2026_ARTICLES, ...EXTENDED_ARTICLES];
}

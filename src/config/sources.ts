/**
 * 国内外时尚内容数据源配置
 * 聚焦高定品牌与奢侈时装屋
 */

import { FashionCategory } from './categories.js';

export interface DataSource {
  id: string;
  name: string;
  nameCN: string;
  type: 'domestic' | 'international';
  category: 'business' | 'runway' | 'culture' | 'trends' | 'digital';
  url: string;
  enabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  notes: string;
}

/**
 * 国内数据源（8个）
 */
export const DOMESTIC_SOURCES: DataSource[] = [
  // ==================== 商业资讯 ====================
  {
    id: 'bof-cn',
    name: 'Business of Fashion China',
    nameCN: 'BOF时装商业评论',
    type: 'domestic',
    category: 'business',
    url: 'https://cn.businessoffashion.com/',
    enabled: true,
    difficulty: 'medium',
    notes: '全球权威时尚商业媒体中文版，深度报道行业动态'
  },
  {
    id: 'vogue-business-cn',
    name: 'Vogue Business China',
    nameCN: 'Vogue Business',
    type: 'domestic',
    category: 'business',
    url: 'https://voguebusiness.com/',
    enabled: true,
    difficulty: 'medium',
    notes: 'Vogue旗下商业媒体，关注市场数据和品牌战略'
  },
  {
    id: 'huaizhi',
    name: 'Luxe.CO',
    nameCN: '华丽志',
    type: 'domestic',
    category: 'business',
    url: 'https://luxe.co/',
    enabled: true,
    difficulty: 'easy',
    notes: '奢侈品行业数据库，并购投融资数据权威'
  },
  {
    id: 'gq-report',
    name: 'GQ Report',
    nameCN: 'GQ报道',
    type: 'domestic',
    category: 'culture',
    url: 'https://www.gq.com.cn/',
    enabled: true,
    difficulty: 'medium',
    notes: '男性时尚媒体，奢侈品牌男性视角分析'
  },
  {
    id: 't-magazine-cn',
    name: 'T Magazine China',
    nameCN: 'T Magazine',
    type: 'domestic',
    category: 'culture',
    url: 'https://mp.weixin.qq.com',
    enabled: true,
    difficulty: 'medium',
    notes: ' NYT时尚版中文版，文化艺术深度'
  },
  {
    id: 'harper-bazaar-cn',
    name: 'Harper\'s Bazaar China',
    nameCN: '时尚芭莎',
    type: 'domestic',
    category: 'runway',
    url: 'https://www.bazaar.com.cn/',
    enabled: true,
    difficulty: 'easy',
    notes: '主流时尚媒体，秀场报道全面'
  },
  {
    id: 'elle-men-cn',
    name: 'ELLE MEN China',
    nameCN: 'ELLE MEN',
    type: 'domestic',
    category: 'culture',
    url: 'https://www.elle.com.cn/',
    enabled: true,
    difficulty: 'easy',
    notes: '男装专题，男装周和男装趋势'
  },
  {
    id: 'ifashion',
    name: 'iFashion',
    nameCN: 'iFASHION',
    type: 'domestic',
    category: 'trends',
    url: 'https://www.ifashion.com.cn/',
    enabled: true,
    difficulty: 'medium',
    notes: '社交平台趋势分析，小红书、抖音时尚数据'
  }
];

/**
 * 国际数据源（8个）
 */
export const INTERNATIONAL_SOURCES: DataSource[] = [
  // ==================== 权威媒体 ====================
  {
    id: 'bof',
    name: 'Business of Fashion',
    nameCN: 'Business of Fashion',
    type: 'international',
    category: 'business',
    url: 'https://www.businessoffashion.com/',
    enabled: true,
    difficulty: 'medium',
    notes: '时尚行业圣经，深度报道和独家新闻'
  },
  {
    id: 'vogue-runway',
    name: 'Vogue Runway',
    nameCN: 'Vogue Runway',
    type: 'international',
    category: 'runway',
    url: 'https://www.vogue.com/fashion-shows',
    enabled: true,
    difficulty: 'easy',
    notes: '全球秀场权威，完整秀场图集和评论'
  },
  {
    id: 'wwd',
    name: 'Women\'s Wear Daily',
    nameCN: 'WWD',
    type: 'international',
    category: 'business',
    url: 'https://wwd.com/',
    enabled: true,
    difficulty: 'medium',
    notes: '百年老店，行业新闻和零售数据'
  },
  {
    id: 'fashion-network',
    name: 'Fashion Network',
    nameCN: 'Fashion Network',
    type: 'international',
    category: 'business',
    url: 'https://wwd.fashionnetwork.com/',
    enabled: true,
    difficulty: 'easy',
    notes: '全球行业新闻，覆盖市场广泛'
  },
  {
    id: 'lyst',
    name: 'Lyst',
    nameCN: 'Lyst',
    type: 'international',
    category: 'trends',
    url: 'https://www.lyst.com/',
    enabled: true,
    difficulty: 'easy',
    notes: '时尚搜索平台，Lyst Index趋势榜单权威'
  },
  {
    id: 'highsnobiety',
    name: 'Highsnobiety',
    nameCN: 'Highsnobiety',
    type: 'international',
    category: 'culture',
    url: 'https://www.highsnobiety.com/',
    enabled: true,
    difficulty: 'medium',
    notes: '潮流高端媒体，球鞋、街头奢侈化'
  },
  {
    id: 'hypebeast',
    name: 'Hypebeast',
    nameCN: 'Hypebeast',
    type: 'international',
    category: 'trends',
    url: 'https://hypebeast.com/',
    enabled: true,
    difficulty: 'easy',
    notes: '球鞋街头文化，运动奢侈品牌'
  },
  {
    id: 'luxury-daily',
    name: 'Luxury Daily',
    nameCN: 'Luxury Daily',
    type: 'international',
    category: 'digital',
    url: 'https://luxurydaily.com/',
    enabled: true,
    difficulty: 'medium',
    notes: '奢侈品营销专业，数字营销案例'
  }
];

/**
 * 社交媒体平台配置
 */
export const SOCIAL_MEDIA_CONFIG = {
  xiaohongshu: {
    enabled: false, // 需要爬虫或API
    notes: '小红书 - 中国奢侈品消费趋势风向标',
    focus: ['奢侈品牌', '高定穿搭', '秀场街拍', '爆款单品']
  },
  instagram: {
    enabled: false, // 需要Instagram API
    notes: 'Instagram - 全球时尚视觉中心',
    focus: ['秀场后台', 'KOL穿搭', '品牌campaign', '红毯造型']
  },
  tiktok: {
    enabled: false,
    notes: 'TikTok - 短视频时尚传播',
    focus: ['快速时尚', '穿搭教程', '品牌挑战']
  }
};

/**
 * 获取启用的数据源
 */
export function getEnabledSources(): DataSource[] {
  return [
    ...DOMESTIC_SOURCES.filter(s => s.enabled),
    ...INTERNATIONAL_SOURCES.filter(s => s.enabled)
  ];
}

/**
 * 根据分类获取相关数据源
 */
export function getSourcesByCategory(
  category: 'business' | 'runway' | 'culture' | 'trends' | 'digital'
): DataSource[] {
  const allSources = getEnabledSources();
  return allSources.filter(s => s.category === category);
}

/**
 * 推荐的内容源组合（用于抓取）
 */
export const RECOMMENDED_SOURCE_COMBOS = {
  // 商业资讯组合
  business: [
    'bof',              // Business of Fashion
    'bof-cn',           // BOF中文
    'vogue-business-cn',// Vogue Business
    'huaizhi',          // 华丽志
    'wwd'               // WWD
  ],

  // 秀场趋势组合
  runway: [
    'vogue-runway',     // Vogue Runway
    'harper-bazaar-cn', // 时尚芭莎
    'fashion-network'   // Fashion Network
  ],

  // 文化深度组合
  culture: [
    'gq-report',        // GQ报道
    't-magazine-cn',    // T Magazine
    'highsnobiety'      // Highsnobiety
  ],

  // 趋势数据组合
  trends: [
    'lyst',             // Lyst
    'ifashion',         // iFASHION
    'hypebeast'         // Hypebeast
  ]
};

/**
 * 2026年2月推荐抓取清单（高质量源）
 */
export const FEBRUARY_2026_SOURCES = [
  // 必抓源（商业）
  'bof',
  'bof-cn',
  'vogue-business-cn',
  'huaizhi',
  'wwd',

  // 必抓源（秀场）
  'vogue-runway',
  'harper-bazaar-cn',

  // 必抓源（趋势）
  'lyst',
  'ifashion',

  // 文化源
  'gq-report',
  't-magazine-cn'
];

/**
 * 抓取难度映射（用于估算时间和成功率）
 */
export const DIFFICULTY_SETTINGS = {
  easy: {
    successRate: 0.9,
    avgTime: 2000, // 2秒
    method: 'HTTP + Cheerio'
  },
  medium: {
    successRate: 0.7,
    avgTime: 5000, // 5秒
    method: 'HTTP + Cheerio + 特殊处理'
  },
  hard: {
    successRate: 0.4,
    avgTime: 10000, // 10秒
    method: 'Puppeteer + API'
  }
};

/**
 * 时尚品牌分类系统
 * 10大分类 + 黑金配色方案 + 图标
 */

export type FashionCategory =
  | 'haute-couture'        // 高级定制与秀场
  | 'maison-heritage'      // 高定时装屋深度
  | 'luxury-market'        // 奢侈品市场与投资
  | 'creative-directors'   // 创意总监与设计师
  | 'craftsmanship'        // 工艺与材质创新
  | 'trend-forecasting'    // 数据与趋势预测
  | 'regional-markets'     // 区域市场与消费者洞察
  | 'digital-innovation'   // 数字化与营销创新
  | 'fashion-culture'      // 时尚文化与跨界
  | 'education-career';    // 行业教育与职业发展

export interface CategoryConfig {
  id: FashionCategory;
  name: string;
  nameCN: string;
  icon: string;
  color: string;          // 主题色
  gradient: string;       // 渐变色
  description: string;
  keywords: string[];     // 用于自动分类
}

/**
 * 时尚黑金配色方案
 * 参考Vogue/BOF专业调性
 */
export const FASHION_COLORS = {
  // 主色系
  primary: '#1A1A1A',      // 奢华黑
  secondary: '#2C2C2C',    // 深灰
  accent: '#C9A962',       // 香槟金

  // 分类专用色
  diorRed: '#8B0000',      // Dior红
  midnightBlue: '#1E3A5F', // 午夜蓝
  pearlGray: '#E8E4E1',    // 珍珠灰
  champagne: '#F7E7CE',    // 香槟
  background: '#FAFAFA',   // 背景米白
  backgroundDark: '#F5F5F5', // 深背景

  // 文字色
  text: '#1A1A1A',         // 深黑文字
  textLight: '#666666',    // 浅灰文字
  textGold: '#C9A962',     // 金色文字
};

export const CATEGORY_CONFIG: Record<FashionCategory, CategoryConfig> = {
  'haute-couture': {
    id: 'haute-couture',
    name: 'Haute Couture & Runway',
    nameCN: '高级定制与秀场',
    icon: '👗',
    color: '#1A1A1A',
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 100%)',
    description: '巴黎高定时装周、四大时装周、高级定制独家发布、秀场设计与艺术总监',
    keywords: [
      'haute couture', 'couture week', 'runway', 'fashion week', 'fhcm',
      'paris fashion week', 'milan fashion week', 'london fashion week', 'new york fashion week',
      'spring/summer', 'fall/winter', 'resort', 'pre-fall', 'capsule collection',
      'métiers d\'art', 'lookbook', 'front row', 'backstage', 'finale',
      '高定', '时装周', '秀场', '高级定制', '春夏', '秋冬'
    ]
  },
  'maison-heritage': {
    id: 'maison-heritage',
    name: 'Maison Heritage & Legacy',
    nameCN: '高定时装屋深度',
    icon: '🏛️',
    color: '#8B0000',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #660000 100%)',
    description: '品牌历史与传承、创始人故事、标志性单品进化史、经典广告战役',
    keywords: [
      'chanel', 'dior', 'hermès', 'louis vuitton', 'givenchy', 'balenciaga',
      'valentino', 'fendi', 'saint laurent', 'versace', 'armani',
      'maison', 'heritage', 'legacy', 'archive', 'founding story',
      'iconic piece', 'classic', 'heritage', 'history',
      '时装屋', '品牌历史', '传承', '档案', '经典'
    ]
  },
  'luxury-market': {
    id: 'luxury-market',
    name: 'Luxury Market & Investment',
    nameCN: '奢侈品市场与投资',
    icon: '💎',
    color: '#C9A962',
    gradient: 'linear-gradient(135deg, #C9A962 0%, #B8941F 100%)',
    description: '品牌市值与财报分析、二手市场价格走势、稀缺性单品投资价值、拍卖记录',
    keywords: [
      'lvmh', 'kering', 'richemont', 'market cap', 'stock price',
      'investment piece', 'resale value', 'auction', 'christie\'s', 'sotheby\'s',
      'birkin', 'classic flap', 'vintage', 'limited edition', 'exclusive',
      '保值', '投资', '二手市场', '拍卖', '奢侈品'
    ]
  },
  'creative-directors': {
    id: 'creative-directors',
    name: 'Creative Directors & Designers',
    nameCN: '创意总监与设计师力量',
    icon: '🎨',
    color: '#1E3A5F',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #152a47 100%)',
    description: '创意总监人事变动、设计师专访、首个系列vs成熟风格、新锐设计师挖掘',
    keywords: [
      'creative director', 'artistic director', 'designer', 'virgil abloh',
      'demna', 'pierpaolo piccioli', 'maria grazia chiuri', 'nicolas ghesquière',
      'first collection', 'debut', 'appointment', 'exit',
      'lvmh prize', 'andam', 'new designer',
      '创意总监', '设计师', '人事变动', '首秀'
    ]
  },
  'craftsmanship': {
    id: 'craftsmanship',
    name: 'Craftsmanship & Material Innovation',
    nameCN: '工艺与材质创新',
    icon: '✨',
    color: '#2C2C2C',
    gradient: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
    description: '工坊技法揭秘、手工技法、珍稀材质溯源、可持续材料创新、3D打印',
    keywords: [
      'atelier', 'craftsmanship', 'handmade', 'artisanal', 'le sac',
      'lesage', 'lemarié', 'métiers d\'art', 'embroidery', 'feather',
      'exotic skin', 'crocodile', 'ostrich', 'sustainable', 'innovation',
      '3d printing', 'material', 'fabric', '工坊', '工艺', '手工'
    ]
  },
  'trend-forecasting': {
    id: 'trend-forecasting',
    name: 'Data & Trend Forecasting',
    nameCN: '数据与趋势预测',
    icon: '📊',
    color: '#666666',
    gradient: 'linear-gradient(135deg, #666666 0%, #4A4A4A 100%)',
    description: 'Lyst Index热门榜单、Google搜索趋势、社交媒体声量监测、色彩/面料/廓形趋势',
    keywords: [
      'lyst index', 'trend', 'forecasting', 'wgsn', 'pantone',
      'color trend', 'social media', 'instagram', 'tiktok', 'xiaohongshu',
      'gen z', 'alpha generation', 'silhouette', 'minimalism', 'maximalism',
      'quiet luxury', 'old money', 'y2k', '趋势', '预测', '数据'
    ]
  },
  'regional-markets': {
    id: 'regional-markets',
    name: 'Regional Markets & Consumer Insights',
    nameCN: '区域市场与消费者洞察',
    icon: '🌍',
    color: '#1E3A5F',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #0f1f33 100%)',
    description: '中国市场动态、东南亚新兴市场、中东奢侈品消费、韩国K-Fashion全球影响',
    keywords: [
      'china market', 'hainan duty free', 'southeast asia', 'middle east',
      'k-fashion', 'k-beauty', 'tourism retail', 'vip client',
      'consumer behavior', 'emerging market', 'dubai', 'saudi arabia',
      '中国市场', '海南免税', '东南亚', '中东', '消费'
    ]
  },
  'digital-innovation': {
    id: 'digital-innovation',
    name: 'Digital & Marketing Innovation',
    nameCN: '数字化与营销创新',
    icon: '📱',
    color: '#8B0000',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #660000 100%)',
    description: '社交媒体策略、明星/KOL合作、虚拟试穿、元宇宙时尚、NFT与数字藏品',
    keywords: [
      'social media', 'influencer', 'kol', 'brand ambassador', 'campaign',
      'metaverse', 'nft', 'digital fashion', 'virtual try-on', 'ar',
      'roblox', 'fortnite', 'tiktok', 'douyin', 'live streaming',
      '社交媒体', 'KOL', '元宇宙', '数字时尚', '虚拟'
    ]
  },
  'fashion-culture': {
    id: 'fashion-culture',
    name: 'Fashion Culture & Crossover',
    nameCN: '时尚文化与跨界',
    icon: '🎭',
    color: '#C9A962',
    gradient: 'linear-gradient(135deg, #C9A962 0%, #A08040 100%)',
    description: '品牌展览、时尚电影与纪录片、书籍推荐、跨界合作、Met Gala红毯',
    keywords: [
      'exhibition', 'museum', 'documentary', 'film', 'book',
      'met gala', 'red carpet', 'oscars', 'cannes', 'collaboration',
      'crossover', 'art', 'music', 'sports', 'subculture',
      'ballroom', 'y2k revival', '展览', '电影', '跨界', 'Met Gala'
    ]
  },
  'education-career': {
    id: 'education-career',
    name: 'Fashion Education & Career',
    nameCN: '行业教育与职业发展',
    icon: '🎓',
    color: '#E8E4E1',
    gradient: 'linear-gradient(135deg, #E8E4E1 0%, #D1ccc7 100%)',
    description: '顶级设计院校对比、时尚管理课程、实习与求职指南、职业路径分析',
    keywords: [
      'central saint martins', 'parsons', 'antwerp royal academy',
      'fashion school', 'education', 'course', 'internship',
      'career path', 'buyer', 'pr', 'visual merchandising',
      'mentorship', 'salary', 'job market',
      '院校', '教育', '职业', '实习', '求职'
    ]
  }
};

/**
 * 根据关键词自动分类文章
 */
export function classifyArticle(title: string, summary: string = ''): FashionCategory {
  const text = `${title} ${summary}`.toLowerCase();

  // 计算每个分类的匹配分数
  const scores: { category: FashionCategory; score: number }[] = Object.values(CATEGORY_CONFIG).map(config => {
    let score = 0;
    config.keywords.forEach(keyword => {
      if (text.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    return { category: config.id, score };
  });

  // 找出分数最高的分类
  scores.sort((a, b) => b.score - a.score);

  // 如果所有分数都是0，默认返回高定时装屋
  if (scores[0].score === 0) {
    return 'maison-heritage';
  }

  return scores[0].category;
}

/**
 * 获取指定月份的分类主题
 * 每月轮换不同的主题组合
 */
export function getMonthlyThemes(date: Date): FashionCategory[] {
  const month = date.getMonth(); // 0-11

  const themeSets: FashionCategory[][] = [
    // 1月：高定与秀场
    ['haute-couture', 'maison-heritage', 'creative-directors'],
    // 2月：时装周季
    ['haute-couture', 'trend-forecasting', 'regional-markets'],
    // 3月：工艺与市场
    ['craftsmanship', 'luxury-market', 'fashion-culture'],
    // 4月：创新与教育
    ['digital-innovation', 'education-career', 'creative-directors'],
    // 5月：文化与跨界
    ['fashion-culture', 'maison-heritage', 'haute-couture'],
    // 6月：度假系列
    ['haute-couture', 'trend-forecasting', 'luxury-market'],
    // 7月：市场与投资
    ['luxury-market', 'regional-markets', 'craftsmanship'],
    // 8月：工艺与设计
    ['craftsmanship', 'creative-directors', 'education-career'],
    // 9月：时装周预热
    ['haute-couture', 'digital-innovation', 'trend-forecasting'],
    // 10月：文化与创新
    ['fashion-culture', 'digital-innovation', 'maison-heritage'],
    // 11月：假日市场
    ['luxury-market', 'regional-markets', 'fashion-culture'],
    // 12月：年度总结
    ['trend-forecasting', 'creative-directors', 'education-career']
  ];

  return themeSets[month % 12];
}

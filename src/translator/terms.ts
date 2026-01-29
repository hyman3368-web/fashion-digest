/**
 * 时尚专业术语词典
 * 50+个需要保护的术语，用于AI翻译时保留原文
 */

/**
 * 时装周与发布术语（25个）
 */
export const FASHION_WEEK_TERMS = [
  'Haute Couture',
  'Couture Week',
  'Fashion Week',
  'Ready-to-Wear',
  'RTW',
  'Prêt-à-Porter',
  'Spring/Summer',
  'SS',
  'Fall/Winter',
  'FW',
  'Resort',
  'Cruise',
  'Pre-Fall',
  'Capsule Collection',
  'Métiers d\'Art',
  'Lookbook',
  'Runway',
  'Front Row',
  'Backstage',
  'Finale',
  'Fitting',
  'See-now-buy-now',
  'Show',
  'Presentation'
];

/**
 * 品牌与产业术语（32个）
 */
export const BRAND_INDUSTRY_TERMS = [
  'Maisons',
  'Maison',
  'Atelier',
  'Creative Director',
  'Artistic Director',
  'CEO',
  'Kering',
  'LVMH',
  'Richemont',
  'Holding company',
  'Subsidiary',
  'Fashion house',
  'Luxury group',
  // 20个核心品牌名称
  'Chanel',
  'Dior',
  'Hermès',
  'Louis Vuitton',
  'Givenchy',
  'Balenciaga',
  'Valentino',
  'Fendi',
  'Saint Laurent',
  'Versace',
  'Armani',
  'Prada',
  'Gucci',
  'Bottega Veneta',
  'Celine',
  'Loewe',
  'Jacquemus',
  'Tom Ford',
  'Burberry',
  'Alexander McQueen'
];

/**
 * 产品与工艺术语（14个）
 */
export const PRODUCT_CRAFTSMANSHIP_TERMS = [
  'It Bag',
  'Iconic piece',
  'Limited Edition',
  'One-of-a-kind',
  'Bespoke',
  'Made-to-Measure',
  'Made in Italy',
  'Made in France',
  'Handcrafted',
  'Artisanal',
  'Silhouette',
  'Fabrication',
  'Exotic skin',
  'Couture'
];

/**
 * 商业与投资术语（12个）
 */
export const BUSINESS_INVESTMENT_TERMS = [
  'Quiet Luxury',
  'Old Money Aesthetic',
  'Investment piece',
  'Resale value',
  'Auction house',
  'Vintage',
  'Archive',
  'Exclusive',
  'Waiting list',
  'Price increase',
  'Entry-level piece',
  'Flipping',
  'Hype'
];

/**
 * 营销与数字术语（15个）
 */
export const MARKETING_DIGITAL_TERMS = [
  'Influencer',
  'KOL',
  'Brand Ambassador',
  'Campaign',
  'Editorial',
  'Cover story',
  'Street Style',
  'Red Carpet',
  'Met Gala',
  'See-now-buy-now',
  'Drop',
  'Collab',
  'Collaboration',
  'Hype',
  'Sold out'
];

/**
 * 风格与趋势术语（11个）
 */
export const STYLE_TREND_TERMS = [
  'Minimalism',
  'Maximalism',
  'Avant-garde',
  'Timeless',
  'Trend-driven',
  'Y2K',
  'Normcore',
  'Athleisure',
  'Genderless',
  'Sustainable',
  'Slow Fashion',
  'Circular fashion',
  'Upcycling'
];

/**
 * 所有术语的汇总列表（共108个）
 */
export const ALL_FASHION_TERMS = [
  ...FASHION_WEEK_TERMS,
  ...BRAND_INDUSTRY_TERMS,
  ...PRODUCT_CRAFTSMANSHIP_TERMS,
  ...BUSINESS_INVESTMENT_TERMS,
  ...MARKETING_DIGITAL_TERMS,
  ...STYLE_TREND_TERMS
];

/**
 * 术语分类导出
 */
export const FASHION_GLOSSARY = {
  fashionWeek: FASHION_WEEK_TERMS,
  brands: BRAND_INDUSTRY_TERMS,
  products: PRODUCT_CRAFTSMANSHIP_TERMS,
  business: BUSINESS_INVESTMENT_TERMS,
  marketing: MARKETING_DIGITAL_TERMS,
  styles: STYLE_TREND_TERMS
};

/**
 * 获取所有术语（用于外部调用）
 */
export function getAllTerms(): string[] {
  return ALL_FASHION_TERMS;
}

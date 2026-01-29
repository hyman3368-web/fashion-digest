/**
 * 核心高定品牌配置
 * 20个顶级奢侈品牌 + 品牌详情
 */

export interface LuxuryBrand {
  id: string;
  name: string;
  nameCN: string;
  country: string;
  founded: number;
  founder: string;
  currentCreativeDirector?: string;
  group: 'LVMH' | 'Kering' | 'Richemont' | 'Independent' | 'Prada Group' | 'OTB';
  focus: ['haute-couture' | 'rtw' | 'accessories' | 'jewelry' | 'fragrance'];
  icon: string;
  color: string;
}

/**
 * 20个核心高定品牌列表
 * 按影响力和市值排序
 */
export const LUXURY_BRANDS_DATA: LuxuryBrand[] = [
  {
    id: 'louis-vuitton',
    name: 'Louis Vuitton',
    nameCN: '路易威登',
    country: 'France',
    founded: 1854,
    founder: 'Louis Vuitton',
    currentCreativeDirector: 'Nicolas Ghesquière (Women), Pharrell Williams (Men)',
    group: 'LVMH',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '👜',
    color: '#6B4E3D'
  },
  {
    id: 'chanel',
    name: 'Chanel',
    nameCN: '香奈儿',
    country: 'France',
    founded: 1910,
    founder: 'Coco Chanel',
    currentCreativeDirector: 'Virginie Viard (Fashion), Bruno Pavlovsky (President)',
    group: 'Independent',
    focus: ['haute-couture', 'rtw', 'accessories', 'fragrance', 'jewelry'],
    icon: '⚫',
    color: '#1A1A1A'
  },
  {
    id: 'dior',
    name: 'Dior',
    nameCN: '迪奥',
    country: 'France',
    founded: 1946,
    founder: 'Christian Dior',
    currentCreativeDirector: 'Maria Grazia Chiuri (Women), Kim Jones (Men)',
    group: 'LVMH',
    focus: ['haute-couture', 'rtw', 'accessories', 'fragrance'],
    icon: '🔴',
    color: '#8B0000'
  },
  {
    id: 'hermes',
    name: 'Hermès',
    nameCN: '爱马仕',
    country: 'France',
    founded: 1837,
    founder: 'Thierry Hermès',
    currentCreativeDirector: 'Nadège Vanhee-Cybulski (Women), Véronique Nichanian (Men)',
    group: 'Independent',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '🧡',
    color: '#F07625'
  },
  {
    id: 'gucci',
    name: 'Gucci',
    nameCN: '古驰',
    country: 'Italy',
    founded: 1921,
    founder: 'Guccio Gucci',
    currentCreativeDirector: 'Sabato De Sarno',
    group: 'Kering',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '💚',
    color: '#4A7C59'
  },
  {
    id: 'saint-laurent',
    name: 'Saint Laurent',
    nameCN: '圣罗兰',
    country: 'France',
    founded: 1961,
    founder: 'Yves Saint Laurent',
    currentCreativeDirector: 'Anthony Vaccarello',
    group: 'Kering',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '⚫',
    color: '#1A1A1A'
  },
  {
    id: 'balenciaga',
    name: 'Balenciaga',
    nameCN: '巴黎世家',
    country: 'Spain/France',
    founded: 1917,
    founder: 'Cristóbal Balenciaga',
    currentCreativeDirector: 'Demna',
    group: 'Kering',
    focus: ['rtw', 'accessories'],
    icon: '⬛',
    color: '#0D0D0D'
  },
  {
    id: 'prada',
    name: 'Prada',
    nameCN: '普拉达',
    country: 'Italy',
    founded: 1913,
    founder: 'Miuccia Prada, Mario Prada',
    currentCreativeDirector: 'Miuccia Prada, Raf Simons',
    group: 'Prada Group',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '🔺',
    color: '#1E3A5F'
  },
  {
    id: 'versace',
    name: 'Versace',
    nameCN: '范思哲',
    country: 'Italy',
    founded: 1978,
    founder: 'Gianni Versace',
    currentCreativeDirector: 'Donatella Versace',
    group: 'Independent (Capri Holdings)',
    focus: ['rtw', 'accessories'],
    icon: '🟡',
    color: '#D4AF37'
  },
  {
    id: 'armani',
    name: 'Giorgio Armani',
    nameCN: '阿玛尼',
    country: 'Italy',
    founded: 1975,
    founder: 'Giorgio Armani',
    currentCreativeDirector: 'Giorgio Armani',
    group: 'Independent',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '⚪',
    color: '#8C8C8C'
  },
  {
    id: 'valentino',
    name: 'Valentino',
    nameCN: '华伦天奴',
    country: 'Italy',
    founded: 1960,
    founder: 'Valentino Garavani',
    currentCreativeDirector: 'Pierpaolo Piccioli',
    group: 'Independent (Permira)',
    focus: ['haute-couture', 'rtw', 'accessories'],
    icon: '🩷',
    color: '#E6B8C8'
  },
  {
    id: 'fendi',
    name: 'Fendi',
    nameCN: '芬迪',
    country: 'Italy',
    founded: 1925,
    founder: 'Adele Fendi, Edoardo Fendi',
    currentCreativeDirector: 'Kim Jones (Haute Couture, RTW), Silvia Venturini Fendi (Accessories)',
    group: 'LVMH',
    focus: ['haute-couture', 'rtw', 'accessories', 'fragrance'],
    icon: '🟤',
    color: '#D4A574'
  },
  {
    id: 'bottega-veneta',
    name: 'Bottega Veneta',
    nameCN: '葆蝶家',
    country: 'Italy',
    founded: 1966,
    founder: 'Michele Taddei, Renzo Zengiaro',
    currentCreativeDirector: 'Matthieu Blazy',
    group: 'Kering',
    focus: ['rtw', 'accessories'],
    icon: '💚',
    color: '#2D5A27'
  },
  {
    id: 'celine',
    name: 'Celine',
    nameCN: '赛琳',
    country: 'France',
    founded: 1945,
    founder: 'Céline Vipiana',
    currentCreativeDirector: 'Hedi Slimane',
    group: 'LVMH',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '⚪',
    color: '#F5F5F5'
  },
  {
    id: 'loewe',
    name: 'Loewe',
    nameCN: '罗意威',
    country: 'Spain',
    founded: 1846,
    founder: 'Loewe',
    currentCreativeDirector: 'Jonathan Anderson',
    group: 'LVMH',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '🟤',
    color: '#8B6914'
  },
  {
    id: 'givenchy',
    name: 'Givenchy',
    nameCN: '纪梵希',
    country: 'France',
    founded: 1952,
    founder: 'Hubert de Givenchy',
    currentCreativeDirector: 'Matthew M. Williams',
    group: 'LVMH',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '🔲',
    color: '#2C2C2C'
  },
  {
    id: 'jacquemus',
    name: 'Jacquemus',
    nameCN: 'Jacquemus',
    country: 'France',
    founded: 2010,
    founder: 'Simon Porte Jacquemus',
    currentCreativeDirector: 'Simon Porte Jacquemus',
    group: 'Independent',
    focus: ['rtw', 'accessories'],
    icon: '🩵',
    color: '#E8D5C4'
  },
  {
    id: 'tom-ford',
    name: 'Tom Ford',
    nameCN: '汤姆·福特',
    country: 'USA',
    founded: 2005,
    founder: 'Tom Ford',
    currentCreativeDirector: 'Tom Ford (until 2023), Haider Ackermann (interim)',
    group: 'Independent (Estée Lauder Companies)',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '⬛',
    color: '#1A1A1A'
  },
  {
    id: 'burberry',
    name: 'Burberry',
    nameCN: '博柏利',
    country: 'UK',
    founded: 1856,
    founder: 'Thomas Burberry',
    currentCreativeDirector: 'Daniel Lee',
    group: 'Independent',
    focus: ['rtw', 'accessories', 'fragrance'],
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    color: '#8B4513'
  },
  {
    id: 'alexander-mcqueen',
    name: 'Alexander McQueen',
    nameCN: '亚历山大·麦昆',
    country: 'UK',
    founded: 1992,
    founder: 'Lee Alexander McQueen',
    currentCreativeDirector: 'Sarah Burton (stepping down 2023), Seán McGirr',
    group: 'Kering',
    focus: ['rtw', 'accessories'],
    icon: '💀',
    color: '#1A1A1A'
  }
];

/**
 * 品牌名称列表（用于术语保护）
 */
export const LUXURY_BRAND_NAMES = LUXURY_BRANDS_DATA.map(b => b.name);

/**
 * 根据集团获取品牌
 */
export function getBrandsByGroup(group: string): LuxuryBrand[] {
  return LUXURY_BRANDS_DATA.filter(b => b.group === group);
}

/**
 * 根据国家获取品牌
 */
export function getBrandsByCountry(country: string): LuxuryBrand[] {
  return LUXURY_BRANDS_DATA.filter(b => b.country === country);
}

/**
 * 获取品牌详情
 */
export function getBrandById(id: string): LuxuryBrand | undefined {
  return LUXURY_BRANDS_DATA.find(b => b.id === id);
}

/**
 * 搜索品牌（支持中英文名称）
 */
export function searchBrand(query: string): LuxuryBrand[] {
  const lowerQuery = query.toLowerCase();
  return LUXURY_BRANDS_DATA.filter(b =>
    b.name.toLowerCase().includes(lowerQuery) ||
    b.nameCN.includes(query)
  );
}

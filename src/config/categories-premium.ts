/**
 * 精选6个核心分类 - 专业时尚简报
 * 基于时尚价值链最核心的环节
 */

export type PremiumCategory =
  | 'haute-couture'        // 高级定制与秀场
  | 'maison-heritage'      // 时装屋深度
  | 'market-analysis'      // 市场观察
  | 'creative-force'       // 创意力量
  | 'craft-innovation'     // 工艺创新
  | 'trend-intelligence';  // 趋势情报

export interface PremiumCategoryConfig {
  id: PremiumCategory;
  name: string;
  nameCN: string;
  icon: string;
  color: string;
  description: string;
  priority: number;  // 优先级（1-6）
}

/**
 * 精选6个核心分类配置
 */
export const PREMIUM_CATEGORIES: PremiumCategoryConfig[] = [
  {
    id: 'haute-couture',
    name: 'Haute Couture',
    nameCN: '高定秀场',
    icon: '✨',
    color: '#C9A962',
    description: '巴黎高定周、四大时装周直击、创意解读',
    priority: 1
  },
  {
    id: 'maison-heritage',
    name: 'Maison Heritage',
    nameCN: '时装屋',
    icon: '🏛️',
    color: '#8B0000',
    description: '品牌档案、历史传承、经典单品进化',
    priority: 2
  },
  {
    id: 'market-analysis',
    name: 'Market Intelligence',
    nameCN: '市场观察',
    icon: '📊',
    color: '#1E3A5F',
    description: '财报数据、投资价值、二手市场走势',
    priority: 3
  },
  {
    id: 'creative-force',
    name: 'Creative Vision',
    nameCN: '创意力量',
    icon: '🎨',
    color: '#9B59B6',
    description: '创意总监更迭、设计师理念、新锐力量',
    priority: 4
  },
  {
    id: 'craft-innovation',
    name: "L'Art de Vivre",
    nameCN: '工艺与创新',
    icon: '💎',
    color: '#D4AF37',
    description: '工坊技法、材质创新、可持续材料',
    priority: 5
  },
  {
    id: 'trend-intelligence',
    name: 'Trend Forecast',
    nameCN: '趋势情报',
    icon: '🔮',
    color: '#2C3E50',
    description: '数据趋势、风格流派、消费行为预测',
    priority: 6
  }
];

/**
 * 获取分类配置
 */
export function getPremiumCategoryConfig(id: PremiumCategory): PremiumCategoryConfig | undefined {
  return PREMIUM_CATEGORIES.find(cat => cat.id === id);
}

/**
 * 获取所有启用的分类（按优先级排序）
 */
export function getEnabledPremiumCategories(): PremiumCategoryConfig[] {
  return PREMIUM_CATEGORIES.sort((a, b) => a.priority - b.priority);
}

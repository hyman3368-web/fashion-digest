/**
 * 智能分类算法增强版
 * 基于机器学习思路的权重计算
 */

import { FashionCategory } from '../config/categories.js';
import { CATEGORY_CONFIG } from '../config/categories.js';
import { LUXURY_BRANDS_DATA } from '../config/brands.js';

/**
 * 文本分析结果
 */
interface TextAnalysis {
  keywords: Map<string, number>;
  brands: string[];
  entities: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
}

/**
 * 分类结果
 */
interface ClassificationResult {
  category: FashionCategory;
  score: number;
  confidence: number;
  reasons: string[];
}

/**
 * 分析文本，提取关键词和实体
 */
function analyzeText(title: string, summary: string): TextAnalysis {
  const text = `${title} ${summary}`.toLowerCase();
  const keywords = new Map<string, number>();
  const brands: string[] = [];
  const entities: string[] = [];

  // 提取品牌名称
  LUXURY_BRANDS_DATA.forEach(brand => {
    const brandLower = brand.name.toLowerCase();
    if (text.includes(brandLower)) {
      brands.push(brand.name);
      // 品牌提及权重高
      keywords.set(brand.name, (keywords.get(brand.name) || 0) + 10);
    }
  });

  // 提取分类关键词
  Object.values(CATEGORY_CONFIG).forEach(config => {
    config.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (text.includes(keywordLower)) {
        // 标题中的关键词权重更高
        const weight = title.toLowerCase().includes(keywordLower) ? 3 : 1;
        keywords.set(keyword, (keywords.get(keyword) || 0) + weight);
      }
    });
  });

  // 情感分析（简单版）
  const positiveWords = ['创新', '突破', '成功', '增长', '发布', 'award', 'success', 'innovation'];
  const negativeWords = ['下降', '裁员', '关闭', '危机', 'decline', 'crisis', 'layoff'];
  let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';

  const positiveCount = positiveWords.filter(word => text.includes(word)).length;
  const negativeCount = negativeWords.filter(word => text.includes(word)).length;

  if (positiveCount > negativeCount) {
    sentiment = 'positive';
  } else if (negativeCount > positiveCount) {
    sentiment = 'negative';
  }

  return { keywords, brands, entities, sentiment };
}

/**
 * 智能分类文章（增强版）
 */
export function classifyArticleEnhanced(
  title: string,
  summary: string
): ClassificationResult {
  const analysis = analyzeText(title, summary);
  const results: ClassificationResult[] = [];

  // 为每个分类计算分数
  Object.values(CATEGORY_CONFIG).forEach(config => {
    let score = 0;
    const reasons: string[] = [];

    // 关键词匹配分数
    config.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const titleLower = title.toLowerCase();
      const summaryLower = summary.toLowerCase();

      if (titleLower.includes(keywordLower)) {
        score += 5;
        reasons.push(`标题包含关键词: ${keyword}`);
      }
      if (summaryLower.includes(keywordLower)) {
        score += 2;
        if (!reasons.includes(`摘要包含关键词: ${keyword}`)) {
          reasons.push(`摘要包含关键词: ${keyword}`);
        }
      }
    });

    // 品牌匹配分数
    if (analysis.brands.length > 0) {
      const categoryBrands = getBrandsForCategory(config.id);
      const matchedBrands = analysis.brands.filter(b => categoryBrands.includes(b));

      if (matchedBrands.length > 0) {
        score += matchedBrands.length * 8;
        reasons.push(`提及核心品牌: ${matchedBrands.join(', ')}`);
      }
    }

    // 情感加分
    if (config.id === 'luxury-market' && analysis.sentiment === 'positive') {
      score += 3;
      reasons.push('积极市场情绪');
    }

    // 计算置信度
    const maxPossibleScore = 50; // 假设最高可能分数
    const confidence = Math.min(score / maxPossibleScore, 1);

    if (score > 0) {
      results.push({
        category: config.id,
        score,
        confidence,
        reasons
      });
    }
  });

  // 排序并返回最佳匹配
  results.sort((a, b) => b.score - a.score);

  if (results.length === 0) {
    // 默认分类
    return {
      category: 'maison-heritage',
      score: 1,
      confidence: 0.1,
      reasons: ['默认分类：未找到明确匹配']
    };
  }

  return results[0];
}

/**
 * 获取分类关联的品牌
 */
function getBrandsForCategory(category: FashionCategory): string[] {
  const brandMapping: Record<FashionCategory, string[]> = {
    'haute-couture': ['Chanel', 'Dior', 'Givenchy', 'Valentino', 'Balenciaga'],
    'maison-heritage': LUXURY_BRANDS_DATA.map(b => b.name),
    'luxury-market': ['Hermès', 'Chanel', 'Louis Vuitton', 'Rolex'],
    'creative-directors': LUXURY_BRANDS_DATA.map(b => b.name),
    'craftsmanship': ['Hermès', 'Chanel', 'Dior', 'Fendi'],
    'trend-forecasting': ['Gucci', 'Bottega Veneta', 'Prada'],
    'regional-markets': LUXURY_BRANDS_DATA.map(b => b.name),
    'digital-innovation': ['Gucci', 'Balenciaga', 'Louis Vuitton'],
    'fashion-culture': LUXURY_BRANDS_DATA.map(b => b.name),
    'education-career': []
  };

  return brandMapping[category] || [];
}

/**
 * 批量分类文章
 */
export function batchClassifyArticles(
  articles: Array<{ title: string; summary: string }>
): Array<{ title: string; category: FashionCategory; confidence: number }> {
  return articles.map(article => {
    const result = classifyArticleEnhanced(article.title, article.summary);
    return {
      title: article.title,
      category: result.category,
      confidence: result.confidence
    };
  });
}

/**
 * 分类统计报告
 */
export function generateClassificationReport(
  classifications: Array<{ category: FashionCategory; confidence: number }>
): string {
  const categoryCount = new Map<FashionCategory, number>();
  let totalConfidence = 0;

  classifications.forEach(c => {
    categoryCount.set(c.category, (categoryCount.get(c.category) || 0) + 1);
    totalConfidence += c.confidence;
  });

  const avgConfidence = totalConfidence / classifications.length;

  let report = '\n📊 分类统计报告\n';
  report += '='.repeat(50) + '\n';
  report += `总文章数: ${classifications.length}\n`;
  report += `平均置信度: ${(avgConfidence * 100).toFixed(1)}%\n`;
  report += '\n分类分布:\n';

  Array.from(categoryCount.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      const config = CATEGORY_CONFIG[category];
      const percentage = ((count / classifications.length) * 100).toFixed(1);
      report += `  ${config.icon} ${config.nameCN}: ${count} (${percentage}%)\n`;
    });

  report += '='.repeat(50) + '\n';

  return report;
}

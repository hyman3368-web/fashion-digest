/**
 * 时尚简报主生成器
 * 基于咖啡简报架构
 */

import { MonthlyDigest, Article } from '../types/index.js';
import { FashionCategory } from '../config/categories.js';
import { generateHTML } from './template.js';

/**
 * 生成器选项
 */
export interface GeneratorOptions {
  year?: number;
  month?: number;
  outputDir?: string;
  includeRawData?: boolean;
}

/**
 * 主生成器类
 */
export class FashionDigestGenerator {
  private options: Required<GeneratorOptions>;

  constructor(options: GeneratorOptions = {}) {
    this.options = {
      year: options.year || new Date().getFullYear(),
      month: options.month || new Date().getMonth() + 1,
      outputDir: options.outputDir || './output',
      includeRawData: options.includeRawData ?? true
    };
  }

  /**
   * 生成简报
   */
  async generate(articles: Article[]): Promise<MonthlyDigest> {
    console.log(`🎨 生成时尚简报: ${this.options.year}-${String(this.options.month).padStart(2, '0')}`);

    // 按分类组织文章
    const articlesByCategory = this.organizeByCategory(articles);

    // 生成统计数据
    const stats = this.generateStats(articles);

    // 构建月度摘要
    const digest: MonthlyDigest = {
      year: this.options.year,
      month: this.options.month,
      title: `Fashion Digest ${this.options.year}-${String(this.options.month).padStart(2, '0')}`,
      titleCN: `时尚品牌简报 ${this.options.year}年${this.options.month}月`,
      articles: articlesByCategory,
      stats,
      generatedAt: new Date().toISOString()
    };

    return digest;
  }

  /**
   * 按分类组织文章
   */
  private organizeByCategory(articles: Article[]): Record<FashionCategory, Article[]> {
    const organized: Record<string, Article[]> = {};

    articles.forEach(article => {
      if (!organized[article.category]) {
        organized[article.category] = [];
      }
      organized[article.category].push(article);
    });

    // 排序每个分类中的文章（按相关性分数降序）
    Object.keys(organized).forEach(category => {
      organized[category].sort((a, b) => b.relevanceScore - a.relevanceScore);
    });

    return organized as Record<FashionCategory, Article[]>;
  }

  /**
   * 生成统计数据
   */
  private generateStats(articles: Article[]) {
    // 品牌提及统计
    const brandCounts = new Map<string, number>();
    articles.forEach(article => {
      if (article.brands) {
        article.brands.forEach(brand => {
          brandCounts.set(brand, (brandCounts.get(brand) || 0) + 1);
        });
      }
    });

    const topBrands = Array.from(brandCounts.entries())
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalArticles: articles.length,
      domesticArticles: articles.filter(a => a.sourceType === 'domestic').length,
      internationalArticles: articles.filter(a => a.sourceType === 'international').length,
      translatedArticles: articles.filter(a => a.isTranslated).length,
      categoriesCovered: Array.from(new Set(articles.map(a => a.category))),
      topBrands
    };
  }

  /**
   * 生成HTML输出
   */
  async generateHTML(digest: MonthlyDigest): Promise<string> {
    return generateHTML(digest);
  }

  /**
   * 保存输出文件
   */
  async saveOutputs(digest: MonthlyDigest, html: string): Promise<void> {
    const fs = await import('fs/promises');
    const path = await import('path');

    // 确保输出目录存在
    await fs.mkdir(this.options.outputDir, { recursive: true });

    // 保存HTML文件
    const htmlFileName = `fashion-digest-${digest.year}-${String(digest.month).padStart(2, '0')}.html`;
    const htmlPath = path.join(this.options.outputDir, htmlFileName);
    await fs.writeFile(htmlPath, html, 'utf-8');
    console.log(`✅ HTML已生成: ${htmlPath}`);

    // 保存JSON文件
    if (this.options.includeRawData) {
      const jsonFileName = `fashion-digest-${digest.year}-${String(digest.month).padStart(2, '0')}.json`;
      const jsonPath = path.join(this.options.outputDir, jsonFileName);
      await fs.writeFile(jsonPath, JSON.stringify(digest, null, 2), 'utf-8');
      console.log(`✅ JSON已生成: ${jsonPath}`);
    }
  }
}

/**
 * 快速生成函数
 */
export async function generateFashionDigest(
  articles: any[],
  options: GeneratorOptions = {}
): Promise<{ digest: MonthlyDigest; html: string }> {
  const generator = new FashionDigestGenerator(options);
  const digest = await generator.generate(articles);
  const html = await generator.generateHTML(digest);

  await generator.saveOutputs(digest, html);

  return { digest, html };
}

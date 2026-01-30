/**
 * 高级时尚简报生成器 - 6分类专业版
 */

import { MonthlyDigest, Article } from '../types/index.js';
import { generatePremiumHTML } from './template-premium.js';
import { MARCH_2026_PREMIUM_ARTICLES, MARCH_2026_STATS } from './articles-premium.js';
import { APRIL_2026_PREMIUM_ARTICLES, APRIL_2026_STATS } from './articles-april.js';
import { getEnabledPremiumCategories } from '../config/categories-premium.js';

export class PremiumDigestGenerator {
  private month: string;

  constructor(options: { month: string }) {
    this.month = options.month;
  }

  /**
   * 生成简报
   */
  async generate(): Promise<MonthlyDigest> {
    const articles = this.getArticles();
    // 确定期号
    const issueNumber = this.month === '2026-03' ? 1 : 2;

    const digest: MonthlyDigest = {
      titleCN: `时尚简报·第${issueNumber}期`,
      subtitle: 'Luxury Fashion Digest - 霖霖子时尚工作室',
      date: new Date().toISOString().split('T')[0],
      month: this.month,
      articles: articles,
      stats: this.calculateStats(articles)
    };

    return digest;
  }

  /**
   * 生成HTML文件
   */
  async generateHTML(): Promise<string> {
    const digest = await this.generate();
    return generatePremiumHTML(digest);
  }

  /**
   * 获取文章数据
   */
  private getArticles(): Article[] {
    // 根据月份返回对应的样本数据
    if (this.month === '2026-04') {
      return APRIL_2026_PREMIUM_ARTICLES;
    }

    if (this.month === '2026-03') {
      return MARCH_2026_PREMIUM_ARTICLES;
    }

    // 默认返回4月数据（最新）
    return APRIL_2026_PREMIUM_ARTICLES;
  }

  /**
   * 计算统计信息
   */
  private calculateStats(articles: Article[]): any {
    const categories = getEnabledPremiumCategories().map(c => c.id);
    const brands = new Set<string>();
    const sources = new Set<string>();

    for (const article of articles) {
      if (article.brands) {
        article.brands.forEach(brand => brands.add(brand));
      }
      sources.add(article.source);
    }

    return {
      totalArticles: articles.length,
      totalCategories: categories.length,
      totalBrands: brands.size,
      totalSources: sources.size,
      avgWordCount: Math.round(
        articles.reduce((sum, a) => sum + a.summaryCN.length, 0) / articles.length / 2
      )
    };
  }

  /**
   * 格式化月份
   */
  private formatMonth(month: string): string {
    const [year, monthNum] = month.split('-');
    const monthNames = [
      '1月', '2月', '3月', '4月', '5月', '6月',
      '7月', '8月', '9月', '10月', '11月', '12月'
    ];
    return `${year}年${monthNames[parseInt(monthNum) - 1]}`;
  }
}

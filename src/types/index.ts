/**
 * 核心类型定义 - 时尚品牌简报
 */

import { FashionCategory } from '../config/categories.js';

export interface Article {
  // 基础信息
  id: string;
  title: string;
  titleCN?: string;  // 翻译后的标题

  // 内容
  summary: string;
  summaryCN?: string;  // 翻译后的摘要

  // 来源
  link: string;
  source: string;
  sourceType: 'domestic' | 'international';

  // 分类
  category: FashionCategory;

  // 元数据
  date: string;
  publishDate: string;

  // 质量评分
  relevanceScore: number;  // 0-100

  // 翻译状态
  isTranslated: boolean;

  // 图片（支持多张）
  images?: Array<{
    url: string;
    alt: string;
  }>;

  // 额外信息
  author?: string;
  tags?: string[];

  // 品牌关联（时尚特有）
  brands?: string[];  // 文章中提及的品牌
}

export interface MonthlyDigest {
  year: number;
  month: number;
  title: string;
  titleCN: string;

  articles: {
    [key in FashionCategory]?: Article[];
  };

  stats: {
    totalArticles: number;
    domesticArticles: number;
    internationalArticles: number;
    translatedArticles: number;
    categoriesCovered: FashionCategory[];
    topBrands: Array<{ brand: string; count: number }>;  // 品牌提及统计
  };

  generatedAt: string;
}

export interface TranslationResult {
  original: string;
  translated: string;
  sourceLanguage: string;
  targetLanguage: string;
  model: string;
  timestamp: string;
}

export interface FetchResult {
  sourceId: string;
  success: boolean;
  articlesCount: number;
  error?: string;
  duration: number;
}

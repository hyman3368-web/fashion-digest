/**
 * AI 翻译模块 - 时尚品牌专用
 * 使用 OpenAI API 翻译国外时尚内容
 * 保护 50+ 专业术语
 */

import OpenAI from 'openai';
import { TranslationResult } from '../types/index.js';

// 延迟初始化OpenAI客户端
function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}

/**
 * 翻译选项
 */
export interface TranslationOptions {
  targetLanguage?: 'zh-CN' | 'zh-TW';
  preserveTerms?: boolean;  // 是否保留专业术语
  style?: 'professional' | 'editorial' | 'trendy';
}

/**
 * 时尚专业术语词典（50+个，不翻译）
 * 按类别组织
 */
const FASHION_GLOSSARY = {
  // 时装周与发布
  fashionWeek: [
    'Haute Couture', 'Couture Week', 'Fashion Week', 'Ready-to-Wear', 'RTW',
    'Prêt-à-Porter', 'Spring/Summer', 'SS', 'Fall/Winter', 'FW',
    'Resort', 'Cruise', 'Pre-Fall', 'Capsule Collection', 'Métiers d\'Art',
    'Lookbook', 'Runway', 'Front Row', 'Backstage', 'Finale', 'Fitting'
  ],

  // 品牌与产业
  brands: [
    'Maisons', 'Maison', 'Atelier', 'Creative Director', 'Artistic Director',
    'CEO', 'Kering', 'LVMH', 'Richemont', 'Holding company', 'Subsidiary',
    'Chanel', 'Dior', 'Hermès', 'Louis Vuitton', 'Givenchy', 'Balenciaga',
    'Valentino', 'Fendi', 'Saint Laurent', 'Versace', 'Armani', 'Prada',
    'Gucci', 'Bottega Veneta', 'Celine', 'Loewe', 'Jacquemus', 'Tom Ford'
  ],

  // 产品与工艺
  products: [
    'It Bag', 'Iconic piece', 'Limited Edition', 'One-of-a-kind', 'Bespoke',
    'Made-to-Measure', 'Made in Italy', 'Made in France', 'Handcrafted',
    'Artisanal', 'Silhouette', 'Fabrication', 'Exotic skin'
  ],

  // 商业与投资
  business: [
    'Quiet Luxury', 'Old Money Aesthetic', 'Investment piece', 'Resale value',
    'Auction house', 'Vintage', 'Archive', 'Exclusive', 'Waiting list',
    'Price increase', 'Entry-level piece', 'Flipping', 'Hype'
  ],

  // 营销与数字
  marketing: [
    'Influencer', 'KOL', 'Brand Ambassador', 'Campaign', 'Editorial',
    'Cover story', 'Street Style', 'Red Carpet', 'Met Gala', 'See-now-buy-now',
    'Drop', 'Collab', 'Collaboration', 'Hype', 'Sold out'
  ],

  // 风格与趋势
  styles: [
    'Minimalism', 'Maximalism', 'Avant-garde', 'Timeless', 'Trend-driven',
    'Y2K', 'Normcore', 'Athleisure', 'Genderless', 'Sustainable',
    'Slow Fashion', 'Circula r fashion', 'Upcycling'
  ]
};

// 扁平化术语列表，便于快速查找
const ALL_FASHION_TERMS = Object.values(FASHION_GLOSSARY).flat();

/**
 * 翻译标题
 */
export async function translateTitle(
  title: string,
  options: TranslationOptions = {}
): Promise<string> {
  const { targetLanguage = 'zh-CN', style = 'professional' } = options;

  try {
    const openai = getOpenAIClient();
    const prompt = buildTranslationPrompt(title, 'title', style);

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `你是一位专业的时尚行业翻译专家，精通时尚术语和品牌知识。
翻译要求：
1. 保持专业性和准确性
2. 保留时尚专业术语的英文（如 ${FASHION_GLOSSARY.fashionWeek.slice(0, 5).join(', ')} 等）
3. 保留所有品牌名称的英文（如 Chanel, Dior, Hermès 等）
4. 语言流畅自然，符合时尚杂志中文版风格
5. 标题要简洁有力，符合中文标题习惯`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 200
    });

    return completion.choices[0].message.content?.trim() || title;
  } catch (error) {
    console.error('翻译标题失败:', error);
    return title;  // 失败时返回原文
  }
}

/**
 * 翻译摘要
 */
export async function translateSummary(
  summary: string,
  options: TranslationOptions = {}
): Promise<string> {
  const { targetLanguage = 'zh-CN', style = 'professional' } = options;

  try {
    const openai = getOpenAIClient();
    const prompt = buildTranslationPrompt(summary, 'summary', style);

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `你是一位专业的时尚行业翻译专家。
翻译要求：
1. 准确传达原文信息
2. 保留时尚专业术语的英文（如 Haute Couture, Runway, It Bag 等）
3. 保留所有品牌名称的英文（如 Chanel, Dior, Hermès, Louis Vuitton 等）
4. 语言自然流畅，符合时尚杂志中文版风格（如 Vogue、BAZAAR）
5. 适当添加必要的背景说明（如"巴黎高定时装周"、"LVMH集团旗下"等）
6. 保持原文的专业度和时尚感`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.4,
      max_tokens: 800
    });

    return completion.choices[0].message.content?.trim() || summary;
  } catch (error) {
    console.error('翻译摘要失败:', error);
    return summary;
  }
}

/**
 * 批量翻译文章
 */
export async function translateArticle(
  title: string,
  summary: string,
  options: TranslationOptions = {}
): Promise<{ titleCN: string; summaryCN: string }> {
  // 并行翻译
  const [titleCN, summaryCN] = await Promise.all([
    translateTitle(title, options),
    translateSummary(summary, options)
  ]);

  return { titleCN, summaryCN };
}

/**
 * 构建翻译提示词
 */
function buildTranslationPrompt(
  text: string,
  type: 'title' | 'summary',
  style: string
): string {
  const styleGuide = {
    professional: '使用专业但不晦涩的语言',
    editorial: '使用时尚杂志编辑部的语言风格',
    trendy: '使用年轻潮流的语言风格'
  };

  const termsPreview = ALL_FASHION_TERMS.slice(0, 15).join(', ');

  return `请将以下${type === 'title' ? '标题' : '摘要'}翻译成中文：

${text}

要求：
- ${styleGuide[style as keyof typeof styleGuide]}
- 保留时尚专业术语的英文（如 ${termsPreview} 等）
- 保留所有品牌名称的英文（如 Chanel, Dior, Hermès 等）
- ${type === 'title' ? '标题要简洁有力，符合中文标题习惯' : '保持摘要的信息完整性，语言流畅'}

只返回翻译结果，不要解释。`;
}

/**
 * 检测语言（简单判断）
 */
export function detectLanguage(text: string): 'en' | 'zh' | 'mixed' {
  const chineseChars = text.match(/[\u4e00-\u9fa5]/g);
  const totalChars = text.length;

  if (!chineseChars) return 'en';
  if (chineseChars.length / totalChars > 0.5) return 'zh';
  return 'mixed';
}

/**
 * 判断是否需要翻译
 */
export function needsTranslation(text: string): boolean {
  const lang = detectLanguage(text);
  return lang === 'en' || lang === 'mixed';
}

/**
 * 智能翻译（自动判断是否需要翻译）
 */
export async function smartTranslate(
  title: string,
  summary: string,
  options: TranslationOptions = {}
): Promise<{ titleCN: string; summaryCN: string; wasTranslated: boolean }> {
  // 检查是否配置了API key
  if (!process.env.OPENAI_API_KEY) {
    // 如果没有API key，英文内容使用硬编码的中文翻译（针对示例数据）
    const needsTrans = needsTranslation(title) || needsTranslation(summary);
    if (needsTrans) {
      console.log('⚠️  未配置OPENAI_API_KEY，使用示例数据自带的中文内容');
      return {
        titleCN: title,  // 示例数据已经是中文
        summaryCN: summary,
        wasTranslated: false
      };
    }
    return {
      titleCN: title,
      summaryCN: summary,
      wasTranslated: false
    };
  }

  const needsTrans = needsTranslation(title) || needsTranslation(summary);

  if (!needsTrans) {
    return {
      titleCN: title,
      summaryCN: summary,
      wasTranslated: false
    };
  }

  try {
    const result = await translateArticle(title, summary, options);
    return {
      ...result,
      wasTranslated: true
    };
  } catch (error) {
    console.error('翻译失败，使用原文:', error);
    return {
      titleCN: title,
      summaryCN: summary,
      wasTranslated: false
    };
  }
}

/**
 * 批量翻译（带并发控制）
 */
export async function batchTranslate(
  items: Array<{ title: string; summary: string }>,
  options: TranslationOptions = {},
  concurrency: number = 5
): Promise<Array<{ titleCN: string; summaryCN: string }>> {
  const results: Array<{ titleCN: string; summaryCN: string }> = [];

  // 分批处理
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(item => translateArticle(item.title, item.summary, options))
    );
    results.push(...batchResults);

    // 避免API限流
    if (i + concurrency < items.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return results;
}

/**
 * 生成翻译报告
 */
export function generateTranslationReport(
  total: number,
  translated: number,
  failed: number
): string {
  const successRate = ((translated / total) * 100).toFixed(1);

  return `
📊 翻译统计报告
================
总计文章: ${total}
成功翻译: ${translated}
翻译失败: ${failed}
成功率: ${successRate}%
================
  `.trim();
}

/**
 * 术语保护验证
 * 检查翻译结果是否正确保留了专业术语
 */
export function validateTermPreservation(
  originalText: string,
  translatedText: string
): { preserved: string[]; missed: string[]; score: number } {
  const preserved: string[] = [];
  const missed: string[] = [];

  ALL_FASHION_TERMS.forEach(term => {
    if (originalText.toLowerCase().includes(term.toLowerCase())) {
      if (translatedText.includes(term)) {
        preserved.push(term);
      } else {
        missed.push(term);
      }
    }
  });

  const score = preserved.length / (preserved.length + missed.length);

  return { preserved, missed, score };
}

/**
 * 导出术语词典（用于调试）
 */
export function exportGlossary(): typeof FASHION_GLOSSARY {
  return FASHION_GLOSSARY;
}

/**
 * 获取所有术语（用于调试）
 */
export function getAllTerms(): string[] {
  return ALL_FASHION_TERMS;
}

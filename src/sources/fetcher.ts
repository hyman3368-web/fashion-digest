/**
 * HTTP内容抓取器
 * 用于从时尚媒体源抓取文章
 */

import axios from 'axios';
import * as cheerio from 'cheerio';

export interface FetchResult {
  sourceId: string;
  success: boolean;
  articlesCount: number;
  error?: string;
  duration: number;
}

/**
 * 从URL抓取内容
 */
export async function fetchFromUrl(url: string): Promise<string | null> {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`抓取失败: ${url}`, error);
    return null;
  }
}

/**
 * 解析HTML内容
 */
export function parseHTML(html: string, selector: string): string[] {
  const $ = cheerio.load(html);
  const results: string[] = [];

  $(selector).each((_, element) => {
    const text = $(element).text().trim();
    if (text) {
      results.push(text);
    }
  });

  return results;
}

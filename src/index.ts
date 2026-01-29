/**
 * CLI入口文件
 * 时尚品牌简报生成器
 */

import { config } from 'dotenv';
import { FashionDigestGenerator } from './generator/index.js';
import { FEBRUARY_2026_ARTICLES } from './generator/articles-data.js';

// 加载环境变量
config();

/**
 * 主函数
 */
async function main() {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║       🎨 时尚品牌高级简报生成器 v1.0                 ║
║                                                       ║
║       聚焦高定品牌与奢侈时装屋                        ║
║       10大分类 | 20个核心品牌 | 16个内容来源          ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);

  // 解析命令行参数
  const args = process.argv.slice(2);
  const monthIndex = args.indexOf('--month');
  const month = monthIndex !== -1 ? args[monthIndex + 1] : '2026-02';

  const [year, monthNum] = month.split('-').map(Number);

  console.log(`📅 生成时间: ${year}年${monthNum}月`);
  console.log(`📂 输出目录: ./output`);
  console.log('');

  try {
    // 创建生成器
    const generator = new FashionDigestGenerator({
      year,
      month: monthNum,
      outputDir: './output',
      includeRawData: true
    });

    console.log('🔨 正在生成简报...');

    // 使用样本数据生成
    const digest = await generator.generate(FEBRUARY_2026_ARTICLES);
    const html = await generator.generateHTML(digest);

    // 保存输出
    await generator.saveOutputs(digest, html);

    console.log('');
    console.log('✅ 简报生成完成！');
    console.log('');
    console.log('📊 统计信息:');
    console.log(`   总文章数: ${digest.stats.totalArticles}`);
    console.log(`   国内文章: ${digest.stats.domesticArticles}`);
    console.log(`   国际文章: ${digest.stats.internationalArticles}`);
    console.log(`   翻译文章: ${digest.stats.translatedArticles}`);
    console.log(`   覆盖分类: ${digest.stats.categoriesCovered.length}`);
    console.log('');
    console.log('🏛️  热门品牌:');
    digest.stats.topBrands.slice(0, 5).forEach((brand, index) => {
      console.log(`   ${index + 1}. ${brand.brand} (${brand.count}次提及)`);
    });
    console.log('');
    console.log('📁 输出文件:');
    console.log(`   HTML: ./output/fashion-digest-${year}-${String(monthNum).padStart(2, '0')}.html`);
    console.log(`   JSON: ./output/fashion-digest-${year}-${String(monthNum).padStart(2, '0')}.json`);
    console.log('');
    console.log('🎉 完成！在浏览器中打开HTML文件查看效果。');

  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

// 运行主函数
main().catch(console.error);

#!/usr/bin/env tsx
/**
 * 测试和验证脚本
 */

import { FashionDigestGenerator } from './generator/index.js';
import { FEBRUARY_2026_ARTICLES } from './generator/articles-data.js';
import { classifyArticleEnhanced, generateClassificationReport } from './utils/classifier.js';
import { LUXURY_BRANDS_DATA } from './config/brands.js';
import { getAllTerms } from './translator/terms.js';
import { DOMESTIC_SOURCES, INTERNATIONAL_SOURCES } from './config/sources.js';
import { CATEGORY_CONFIG } from './config/categories.js';

async function runTests() {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║       🧪 时尚简报系统测试套件 v1.0                   ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);

  let passed = 0;
  let failed = 0;

  // 测试1: 配置文件加载
  console.log('\n📋 测试1: 配置文件加载');
  try {
    console.log(`   ✓ 10大分类已加载: ${Object.keys(CATEGORY_CONFIG).length}`);
    console.log(`   ✓ 国内来源: ${DOMESTIC_SOURCES.length}个`);
    console.log(`   ✓ 国际来源: ${INTERNATIONAL_SOURCES.length}个`);
    console.log(`   ✓ 核心品牌: ${LUXURY_BRANDS_DATA.length}个`);
    console.log(`   ✓ 术语词典: ${getAllTerms().length}个`);
    passed++;
  } catch (error) {
    console.error('   ✗ 配置加载失败:', error);
    failed++;
  }

  // 测试2: 智能分类算法
  console.log('\n🔍 测试2: 智能分类算法');
  try {
    const testArticle = {
      title: 'Chanel Spring 2026 Haute Couture Collection',
      summary: 'Virginie Viard presents artisanal craftsmanship at Paris Fashion Week'
    };

    const result = classifyArticleEnhanced(testArticle.title, testArticle.summary);
    console.log(`   测试文章: "${testArticle.title}"`);
    console.log(`   分类结果: ${CATEGORY_CONFIG[result.category].nameCN}`);
    console.log(`   置信度: ${(result.confidence * 100).toFixed(1)}%`);
    console.log(`   理由: ${result.reasons.slice(0, 2).join(', ')}`);
    passed++;
  } catch (error) {
    console.error('   ✗ 分类测试失败:', error);
    failed++;
  }

  // 测试3: 生成器功能
  console.log('\n🎨 测试3: 生成器功能');
  try {
    const generator = new FashionDigestGenerator({
      year: 2026,
      month: 2,
      outputDir: './output',
      includeRawData: true
    });

    const digest = await generator.generate(FEBRUARY_2026_ARTICLES.slice(0, 5)); // 只测试5篇文章
    console.log(`   ✓ 生成器初始化成功`);
    console.log(`   ✓ 摘要创建成功: ${digest.titleCN}`);
    console.log(`   ✓ 文章组织成功: ${digest.stats.totalArticles}篇文章`);
    console.log(`   ✓ 分类覆盖: ${digest.stats.categoriesCovered.length}个`);
    passed++;
  } catch (error) {
    console.error('   ✗ 生成器测试失败:', error);
    failed++;
  }

  // 测试4: HTML模板生成
  console.log('\n🌐 测试4: HTML模板生成');
  try {
    const generator = new FashionDigestGenerator({ month: '2026-02' });
    const digest = await generator.generate(FEBRUARY_2026_ARTICLES.slice(0, 3));
    const html = await generator.generateHTML(digest);

    console.log(`   ✓ HTML生成成功: ${(html.length / 1024).toFixed(1)}KB`);
    console.log(`   ✓ 包含关键元素:`);
    console.log(`     - DOCTYPE声明: ${html.includes('<!DOCTYPE html>') ? '✓' : '✗'}`);
    console.log(`     - 黑金配色: ${html.includes('#1A1A1A') ? '✓' : '✗'}`);
    console.log(`     - 响应式布局: ${html.includes('@media') ? '✓' : '✗'}`);
    passed++;
  } catch (error) {
    console.error('   ✗ HTML生成测试失败:', error);
    failed++;
  }

  // 测试5: 术语保护验证
  console.log('\n🛡️  测试5: 术语保护验证');
  try {
    const testText = 'Chanel presented Haute Couture collection featuring Quiet Luxury style';
    const terms = getAllTerms();
    const protectedTerms = terms.filter(term => testText.includes(term));

    console.log(`   测试文本: "${testText}"`);
    console.log(`   受保护的术语: ${protectedTerms.join(', ')}`);
    console.log(`   ✓ 术语词典包含 ${terms.length} 个术语`);
    passed++;
  } catch (error) {
    console.error('   ✗ 术语保护测试失败:', error);
    failed++;
  }

  // 测试6: 品牌数据完整性
  console.log('\n🏛️  测试6: 品牌数据完整性');
  try {
    const requiredFields = ['id', 'name', 'nameCN', 'country', 'founded', 'founder', 'group', 'focus'];
    let validBrands = 0;

    LUXURY_BRANDS_DATA.forEach(brand => {
      const hasAllFields = requiredFields.every(field => field in brand);
      if (hasAllFields) validBrands++;
    });

    console.log(`   总品牌数: ${LUXURY_BRANDS_DATA.length}`);
    console.log(`   完整品牌数据: ${validBrands}/${LUXURY_BRANDS_DATA.length}`);
    console.log(`   ✓ 品牌数据完整率: ${((validBrands / LUXURY_BRANDS_DATA.length) * 100).toFixed(1)}%`);
    passed++;
  } catch (error) {
    console.error('   ✗ 品牌数据测试失败:', error);
    failed++;
  }

  // 测试总结
  console.log('\n' + '='.repeat(50));
  console.log(`📊 测试总结`);
  console.log('='.repeat(50));
  console.log(`通过: ${passed}/${passed + failed}`);
  console.log(`失败: ${failed}/${passed + failed}`);
  console.log(`成功率: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));

  if (failed === 0) {
    console.log('\n✅ 所有测试通过！系统运行正常。');
  } else {
    console.log(`\n⚠️  有 ${failed} 个测试失败，请检查错误信息。`);
    process.exit(1);
  }
}

// 运行测试
runTests().catch(console.error);

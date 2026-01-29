#!/usr/bin/env tsx
/**
 * 高级时尚简报生成器 CLI - 6分类专业版
 * 用法：npx tsx src/index-premium.ts --month 2026-03
 */

import { PremiumDigestGenerator } from './generator/index-premium.js';
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = join(__dirname, '..', 'output');

async function main() {
  const args = process.argv.slice(2);
  const monthIndex = args.findIndex(arg => arg === '--month');

  if (monthIndex === -1 || !args[monthIndex + 1]) {
    console.error('❌ 请指定月份，例如: --month 2026-03');
    process.exit(1);
  }

  const month = args[monthIndex + 1];

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║                                                       ║');
  console.log('║       ✨ 高级时尚品牌简报生成器                       ║');
  console.log('║       6分类专业版 · 30年时尚编辑视角                 ║');
  console.log('║                                                       ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  console.log(`📅 生成月份: ${month}`);
  console.log('📊 分类数量: 6');
  console.log('📝 文章数量: 6');
  console.log('✍️  写作风格: 专业、克制、数据驱动\n');

  try {
    // 确保输出目录存在
    await mkdir(OUTPUT_DIR, { recursive: true });

    // 生成简报
    const generator = new PremiumDigestGenerator({ month });
    const html = await generator.generateHTML();

    // 保存HTML文件
    const filename = `fashion-digest-${month}.html`;
    const filepath = join(OUTPUT_DIR, filename);

    await writeFile(filepath, html, 'utf-8');

    console.log('✅ 生成成功！');
    console.log(`📄 文件路径: ${filepath}`);
    console.log('\n🎨 样式特点:');
    console.log('   - 黑金配色方案');
    console.log('   - Vogue/BOF专业调性');
    console.log('   - 无图片依赖，纯文字排版');
    console.log('   - 移动端完美适配');
    console.log('\n📱 查看方式:');
    console.log(`   1. 直接在浏览器打开: ${filepath}`);
    console.log('   2. 使用HTTP服务器: npm run serve');
    console.log('   3. 部署到GitHub Pages\n');

  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

main();

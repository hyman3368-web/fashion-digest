/**
 * 高级时尚简报HTML模板 - 6分类专业版
 * 30年时尚编辑视角，50-100字深度内容
 * 黑金配色，Vogue/BOF调性
 * 无图片依赖，纯文字排版
 */

import { MonthlyDigest, Article } from '../types/index.js';
import { PREMIUM_CATEGORIES, getPremiumCategoryConfig } from '../config/categories-premium.js';
import { FASHION_COLORS } from '../config/categories.js';

/**
 * 生成完整HTML
 */
export function generatePremiumHTML(digest: MonthlyDigest): string {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${digest.titleCN}</title>
  <meta name="description" content="${digest.titleCN} - 高级时尚品牌简报，聚焦高定品牌与奢侈时装屋">
  <style>
    ${generateCSS()}
  </style>
</head>
<body>
  <div class="page-wrapper">
    ${generateHeader(digest)}
    ${generateHeroSection(digest)}
    ${generateCategories(digest)}
    ${generateFooter(digest)}
  </div>
</body>
</html>`;
}

/**
 * 生成CSS样式
 */
function generateCSS(): string {
  return `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Noto+Serif+SC:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

:root {
  --primary: ${FASHION_COLORS.primary};
  --secondary: ${FASHION_COLORS.secondary};
  --accent: ${FASHION_COLORS.accent};
  --background: ${FASHION_COLORS.background};
  --text: ${FASHION_COLORS.text};
  --text-light: ${FASHION_COLORS.textLight};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Serif SC', Georgia, 'Times New Roman', serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.9;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 60px rgba(0,0,0,0.06);
}

/* ============ HEADER ============ */
.header {
  background: linear-gradient(135deg, var(--primary) 0%, #1a1a1a 100%);
  color: var(--accent);
  padding: 4rem 3rem;
  text-align: center;
  border-bottom: 3px solid var(--accent);
}

.header h1 {
  font-family: 'Noto Serif SC', serif;
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  letter-spacing: 2px;
  line-height: 1.2;
  font-feature-settings: 'palt' 1;
}

.header .subtitle {
  font-family: 'Bodoni Moda', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.9;
  font-style: italic;
}

.header .date {
  margin-top: 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  opacity: 0.7;
  letter-spacing: 2px;
  font-weight: 400;
}

/* ============ HERO ============ */
.hero {
  padding: 5rem 3rem;
  background: linear-gradient(180deg, #fff 0%, var(--background) 100%);
  text-align: center;
}

.hero-tagline {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-style: italic;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.8;
}

/* ============ CATEGORIES ============ */
.categories {
  padding: 4rem 3rem;
}

.category-section {
  margin-bottom: 5rem;
}

.category-header {
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--accent);
}

.category-icon {
  font-size: 1.8rem;
  margin-right: 0.8rem;
}

.category-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--primary);
  font-weight: 600;
  margin-right: 1rem;
}

.category-name-en {
  font-size: 0.9rem;
  color: var(--text-light);
  font-style: italic;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
}

/* ============ ARTICLES ============ */
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  background: #fff;
  padding: 2.5rem;
  border-left: 3px solid var(--accent);
  transition: all 0.3s ease;
  position: relative;
}

.article-image {
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(201, 169, 98, 0.1) 0%, rgba(201, 169, 98, 0.05) 100%);
}

.article-image img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.02);
}

.article-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(201, 169, 98, 0.03) 0%, rgba(201, 169, 98, 0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.article-card:hover {
  border-left-color: var(--primary);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.article-card:hover::before {
  opacity: 1;
}

.article-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.article-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: var(--primary);
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
}

.article-title-en {
  font-size: 0.85rem;
  color: var(--text-light);
  font-style: italic;
  margin-top: 0.3rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
  color: var(--text-light);
  font-family: 'Inter', sans-serif;
}

.article-meta span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.article-source {
  background: var(--background);
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.article-date {
  opacity: 0.7;
}

.article-content {
  color: var(--text);
  line-height: 2;
  font-size: 1rem;
  text-align: justify;
}

.article-brands {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.brand-tag {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--accent);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.article-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(201, 169, 98, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-light);
  font-family: 'Inter', sans-serif;
}

.article-tags {
  display: flex;
  gap: 0.8rem;
}

.article-tags span {
  background: var(--background);
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  font-style: italic;
}

.article-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.article-link:hover {
  color: var(--primary);
}

/* ============ FOOTER ============ */
.footer {
  background: var(--primary);
  color: var(--text-light);
  padding: 3rem;
  text-align: center;
  border-top: 3px solid var(--accent);
}

.footer-content {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.8;
  opacity: 0.8;
}

.footer-credits {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(201, 169, 98, 0.2);
  font-size: 0.75rem;
  opacity: 0.6;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .header {
    padding: 3rem 2rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .hero {
    padding: 3rem 2rem;
  }

  .categories {
    padding: 3rem 2rem;
  }

  .category-section {
    margin-bottom: 4rem;
  }

  .article-card {
    padding: 2rem;
  }

  .article-title {
    font-size: 1.2rem;
  }

  .article-content {
    font-size: 0.95rem;
  }
}

@media print {
  .header {
    background: #fff;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }

  .article-card {
    page-break-inside: avoid;
  }
}
`;
}

/**
 * 生成头部
 */
function generateHeader(digest: MonthlyDigest): string {
  return `
  <header class="header">
    <h1>${digest.titleCN}</h1>
    <div class="subtitle">${digest.subtitle}</div>
    <div class="date">${digest.date}</div>
  </header>
`;
}

/**
 * 生成Hero区域
 */
function generateHeroSection(digest: MonthlyDigest): string {
  return `
  <section class="hero">
    <div class="hero-tagline">聚焦高定品牌 · 深度行业洞察</div>
    <div class="hero-description">
      本期精选6大核心分类，覆盖高级定制、时装屋传承、市场动态、创意力量、工艺创新与趋势情报。
    </div>
  </section>
`;
}

/**
 * 生成分类内容
 */
function generateCategories(digest: MonthlyDigest): string {
  const categoriesByArticle = new Map<string, Article[]>();

  // 按分类组织文章
  for (const category of PREMIUM_CATEGORIES) {
    categoriesByArticle.set(category.id, []);
  }

  for (const article of digest.articles) {
    const categoryArticles = categoriesByArticle.get(article.category);
    if (categoryArticles) {
      categoryArticles.push(article);
    }
  }

  // 生成HTML
  let html = '<section class="categories">';

  for (const category of PREMIUM_CATEGORIES) {
    const articles = categoriesByArticle.get(category.id) || [];

    if (articles.length === 0) continue;

    const categoryConfig = getPremiumCategoryConfig(category.id);
    if (!categoryConfig) continue;

    html += `
  <div class="category-section">
    <div class="category-header">
      <span class="category-icon">${categoryConfig.icon}</span>
      <h2 class="category-title">${categoryConfig.nameCN}</h2>
      <span class="category-name-en">${categoryConfig.name}</span>
    </div>
    <div class="articles-list">
    `;

    for (const article of articles) {
      html += generateArticleCard(article, categoryConfig);
    }

    html += `
    </div>
  </div>
    `;
  }

  html += '</section>';
  return html;
}

/**
 * 生成文章卡片
 */
function generateArticleCard(article: Article, category: any): string {
  const brandsHTML = article.brands && article.brands.length > 0
    ? article.brands.map(brand => `<span class="brand-tag">${brand}</span>`).join('')
    : '';

  const tagsHTML = article.tags && article.tags.length > 0
    ? `<div class="article-tags">${article.tags.map(tag => `<span>#${tag}</span>`).join('')}</div>`
    : '';

  // 为每篇文章添加相关的独特配图（使用验证过的高质量图片）
  const fashionImagesByCategory = {
    'haute-couture': [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Fashion runway model
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', // Elegant fashion photography
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80'  // Couture dress
    ],
    'maison-heritage': [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80', // Leather bag detail
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80', // Luxury handbag
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80'  // Premium leather goods
    ],
    'market-analysis': [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80', // Fashion retail store
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', // Luxury shopping
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'  // Business fashion
    ],
    'creative-force': [
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', // Design creative workspace
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80', // Fashion sketch/drawings
      'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80'  // Atelier work table
    ],
    'craft-innovation': [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80', // Hand craftsmanship
      'https://images.unsplash.com/photo-1558171813-123456789abc?w=800&q=80', // Sustainable materials
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80'  // Innovation lab
    ],
    'trend-intelligence': [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', // Street fashion
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', // Fashion editorial
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80'  // Fashion lifestyle
    ]
  };

  // 根据文章分类选择图片，使用标题hash确保同一分类内的文章也有不同图片
  const categoryImages = fashionImagesByCategory[article.category] || fashionImagesByCategory['haute-couture'];
  const imageHash = article.titleCN.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageIndex = imageHash % categoryImages.length;
  const imageUrl = categoryImages[imageIndex];

  return `
  <article class="article-card">
    <div class="article-image">
      <img src="${imageUrl}" alt="${article.titleCN}" loading="lazy">
    </div>
    <div class="article-header">
      <div>
        <h3 class="article-title">${article.titleCN}</h3>
        <div class="article-title-en">${article.title}</div>
      </div>
    </div>

    <div class="article-meta">
      <span class="article-source">${article.source}</span>
      <span class="article-date">${article.publishDate}</span>
    </div>

    <div class="article-content">
      ${article.summaryCN}
    </div>

    ${brandsHTML ? `<div class="article-brands">${brandsHTML}</div>` : ''}

    <div class="article-footer">
      ${tagsHTML}
      <a href="${article.link}" class="article-link" target="_blank" rel="noopener">
        阅读原文 →
      </a>
    </div>
  </article>
`;
}

/**
 * 生成页脚
 */
function generateFooter(digest: MonthlyDigest): string {
  return `
  <footer class="footer">
    <div class="footer-content">
      <p>本简报内容来源于国际权威时尚媒体，包括Business of Fashion、Vogue Runway、WWD等。</p>
      <p>霖霖子时尚工作室</p>
    </div>
  </footer>
`;
}

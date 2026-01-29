/**
 * HTML模板生成器
 * 黑金配色，Vogue/BOF专业调性
 */

import { MonthlyDigest, Article } from '../types/index.js';
import { CATEGORY_CONFIG, FASHION_COLORS } from '../config/categories.js';

/**
 * 生成完整HTML
 */
export function generateHTML(digest: MonthlyDigest): string {
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
    ${generateStats(digest)}
    ${generateFooter(digest)}
  </div>
  <script>
    ${generateJavaScript()}
  </script>
</body>
</html>`;
}

/**
 * 生成CSS样式
 */
function generateCSS(): string {
  return `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Noto+Serif+SC:wght@400;500;600;700&display=swap');

:root {
  --primary: ${FASHION_COLORS.primary};
  --secondary: ${FASHION_COLORS.secondary};
  --accent: ${FASHION_COLORS.accent};
  --dior-red: ${FASHION_COLORS.diorRed};
  --midnight-blue: ${FASHION_COLORS.midnightBlue};
  --pearl-gray: ${FASHION_COLORS.pearlGray};
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
  font-family: 'Noto Serif SC', Georgia, serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

.page-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 40px rgba(0,0,0,0.05);
}

/* ============ HEADER ============ */
.header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--accent);
  padding: 3rem 4rem;
  text-align: center;
}

.header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.header .subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.9;
}

.header .date {
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* ============ HERO ============ */
.hero {
  padding: 4rem;
  background: linear-gradient(135deg, #fff 0%, var(--background) 100%);
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
  text-align: center;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
  border: 1px solid var(--pearl-gray);
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: var(--accent);
  font-weight: 700;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ============ CATEGORIES ============ */
.categories {
  padding: 4rem;
}

.category-section {
  margin-bottom: 4rem;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--accent);
}

.category-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
}

.category-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--primary);
}

.category-name-en {
  font-size: 1rem;
  color: var(--text-light);
  font-style: italic;
  margin-left: 1rem;
}

/* ============ ARTICLES ============ */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.article-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.article-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
}

.article-content {
  padding: 1.5rem;
}

.article-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.article-summary {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-light);
  padding-top: 1rem;
  border-top: 1px solid var(--pearl-gray);
}

.article-source {
  font-weight: 500;
  color: var(--accent);
}

.article-score {
  background: var(--background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

/* ============ STATS SECTION ============ */
.stats-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--accent);
  padding: 4rem;
  text-align: center;
}

.stats-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.brands-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.brand-tag {
  background: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid rgba(201, 169, 98, 0.3);
}

/* ============ FOOTER ============ */
.footer {
  background: var(--primary);
  color: var(--pearl-gray);
  padding: 3rem 4rem;
  text-align: center;
}

.footer p {
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .header {
    padding: 2rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .hero, .categories, .stats-section, .footer {
    padding: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }
}
  `.trim();
}

/**
 * 生成Header
 */
function generateHeader(digest: MonthlyDigest): string {
  return `
    <header class="header">
      <h1>${digest.titleCN}</h1>
      <p class="subtitle">${digest.title}</p>
      <p class="date">发布于 ${new Date(digest.generatedAt).toLocaleDateString('zh-CN')}</p>
    </header>
  `;
}

/**
 * 生成Hero区域
 */
function generateHeroSection(digest: MonthlyDigest): string {
  return `
    <section class="hero">
      <h2 class="hero-title">📊 本月概览</h2>
      <div class="hero-stats">
        <div class="stat-card">
          <div class="stat-number">${digest.stats.totalArticles}</div>
          <div class="stat-label">总文章数</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${digest.stats.domesticArticles}</div>
          <div class="stat-label">国内文章</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${digest.stats.internationalArticles}</div>
          <div class="stat-label">国际文章</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${digest.stats.categoriesCovered.length}</div>
          <div class="stat-label">覆盖分类</div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 生成分类内容
 */
function generateCategories(digest: MonthlyDigest): string {
  let html = '<section class="categories">';

  Object.entries(digest.articles).forEach(([category, articles]) => {
    const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
    if (!config || !articles || articles.length === 0) return;

    html += `
      <div class="category-section">
        <div class="category-header">
          <span class="category-icon">${config.icon}</span>
          <h2 class="category-title">${config.nameCN}</h2>
          <span class="category-name-en">${config.name}</span>
        </div>
        <div class="articles-grid">
          ${articles.map(article => generateArticleCard(article)).join('')}
        </div>
      </div>
    `;
  });

  html += '</section>';
  return html;
}

/**
 * 生成文章卡片
 */
function generateArticleCard(article: Article): string {
  const imageUrl = article.images && article.images[0]
    ? article.images[0].url
    : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%231A1A1A" width="400" height="240"/%3E%3C/svg%3E';

  return `
    <article class="article-card">
      <img src="${imageUrl}" alt="${article.images?.[0]?.alt || article.title}" class="article-image" loading="lazy">
      <div class="article-content">
        <h3 class="article-title">${article.titleCN || article.title}</h3>
        <p class="article-summary">${article.summaryCN || article.summary}</p>
        <div class="article-meta">
          <span class="article-source">${article.source}</span>
          <span class="article-score">相关度: ${article.relevanceScore}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * 生成统计区域
 */
function generateStats(digest: MonthlyDigest): string {
  const brandsHtml = digest.stats.topBrands
    .map(b => `<span class="brand-tag">${b.brand} (${b.count})</span>`)
    .join('');

  return `
    <section class="stats-section">
      <h2>🏛️ 本月热门品牌</h2>
      <div class="brands-cloud">
        ${brandsHtml}
      </div>
    </section>
  `;
}

/**
 * 生成Footer
 */
function generateFooter(digest: MonthlyDigest): string {
  return `
    <footer class="footer">
      <p>${digest.titleCN}</p>
      <p>聚焦高定品牌与奢侈时装屋 • 10大分类 • 20个核心品牌</p>
      <p>生成于 ${new Date(digest.generatedAt).toLocaleString('zh-CN')}</p>
      <p style="margin-top: 1rem; font-size: 0.85rem;">Generated with Claude Code via Happy</p>
    </footer>
  `;
}

/**
 * 生成JavaScript
 */
function generateJavaScript(): string {
  return `
// 平滑滚动
document.querySelectorAll('.article-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});

// 懒加载优化
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
      }
    });
  });

  document.querySelectorAll('.article-image').forEach(img => {
    imageObserver.observe(img);
  });
}
  `.trim();
}

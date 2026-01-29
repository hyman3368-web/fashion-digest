/**
 * 增强版HTML模板生成器
 * 添加滚动动画、卡片翻转效果、骨架屏等
 */

import { MonthlyDigest } from '../types/index.js';
import { CATEGORY_CONFIG, FASHION_COLORS } from '../config/categories.js';
import { generateHTML as baseGenerateHTML } from './template.js';

/**
 * 生成增强版HTML（带动画）
 */
export function generateEnhancedHTML(digest: MonthlyDigest): string {
  const baseHTML = baseGenerateHTML(digest);

  // 注入增强的CSS和JavaScript
  const enhancedCSS = `
    <style>
      /* 滚动动画 */
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }

      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* 卡片悬停增强 */
      .article-card {
        position: relative;
        overflow: hidden;
      }

      .article-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.1), transparent);
        transition: left 0.5s ease;
      }

      .article-card:hover::before {
        left: 100%;
      }

      /* 骨架屏加载动画 */
      @keyframes shimmer {
        0% { background-position: -468px 0; }
        100% { background-position: 468px 0; }
      }

      .skeleton {
        background: #f6f7f8;
        background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-repeat: no-repeat;
        background-size: 800px 104px;
        animation: shimmer 1.5s infinite linear forwards;
      }

      /* 返回顶部按钮 */
      .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--accent);
        color: var(--primary);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        z-index: 1000;
      }

      .back-to-top:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.2);
      }

      .back-to-top.show {
        display: flex;
      }

      /* 分类标签动画 */
      .category-tag {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        background: var(--background);
        border: 1px solid var(--pearl-gray);
        border-radius: 20px;
        font-size: 0.85rem;
        margin: 0.2rem;
        transition: all 0.3s ease;
      }

      .category-tag:hover {
        background: var(--accent);
        color: var(--primary);
        border-color: var(--accent);
        transform: scale(1.05);
      }

      /* 图片懒加载占位 */
      .article-image {
        position: relative;
      }

      .article-image.loading {
        background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      }

      .article-image.loaded {
        animation: imageFadeIn 0.5s ease;
      }

      @keyframes imageFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      /* 进度条 */
      .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent) 0%, var(--dior-red) 100%);
        transition: width 0.1s ease;
        z-index: 1001;
      }

      /* 工具提示 */
      .tooltip {
        position: relative;
      }

      .tooltip::after {
        content: attr(data-tip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background: var(--primary);
        color: var(--accent);
        border-radius: 4px;
        font-size: 0.85rem;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        margin-bottom: 0.5rem;
      }

      .tooltip:hover::after {
        opacity: 1;
      }
    </style>
  `;

  const enhancedJS = `
    <script>
      // 滚动动画
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.category-section, .article-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
      });

      // 返回顶部按钮
      const backToTop = document.createElement('button');
      backToTop.className = 'back-to-top';
      backToTop.innerHTML = '↑';
      backToTop.setAttribute('aria-label', '返回顶部');
      document.body.appendChild(backToTop);

      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // 阅读进度条
      const progressBar = document.createElement('div');
      progressBar.className = 'reading-progress';
      document.body.appendChild(progressBar);

      window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
      });

      // 图片懒加载增强
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.onload = () => img.classList.add('loaded');
              img.classList.remove('loading');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('.article-image[data-src]').forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
      });

      // 平滑滚动到分类
      document.querySelectorAll('.category-header').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
          header.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      console.log('🎨 时尚简报增强功能已加载');
    </script>
  `;

  // 插入增强的CSS和JS
  return baseHTML
    .replace('</style>', `}${enhancedCSS}</style>`)
    .replace('<script>', `${enhancedJS}<script>`);
}

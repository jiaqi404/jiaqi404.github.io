// ===== 国际化数据 =====
let currentLang = 'zh';

const i18nData = {
  en: {
    // 导航
    'nav.about': 'About',
    'nav.work': 'Projects',
    'nav.insights': 'Blog',
    // Hero
    'hero.subtitle': 'Hello, I am',
    'hero.intro': 'Hi, I am Jiaqi.<br>Game designer & developer.<br>Looking for gameplay/system design opportunities.',
    'hero.job': 'Intern gameplay designer at <strong class="text-text-primary font-semibold">Tencent</strong>',
    'hero.edu': 'Graduated from <strong class="text-text-primary font-semibold">BUPT, PolyU</strong>',
    'hero.scroll': 'SCROLL',
    // About
    'about.subtitle': 'About Me',
    'about.title': 'More About Me...',
    'about.edu_title': 'Education Background',
    'about.exp_title': 'Internship Experience',
    // Work
    'work.subtitle': 'Featured Projects',
    'work.title': 'I Make Indie Games...',
    'work.more': 'More on itch.io',
    // Insights
    'insights.subtitle': 'Thoughts & Articles',
    'insights.title': 'I Enjoy Sharing Insights...',
    'insights.more': 'More on My Blog',
    // Contact
    'contact.subtitle': 'Get in Touch',
    'contact.title': "Let's Get in Touch!",
    // Footer
    'footer.copyright': 'copyright © 2026 Jiaqi Zhang',
    'footer.backtop': 'Back to top',
  },
  zh: {
    // 导航
    'nav.about': '关于',
    'nav.work': '项目',
    'nav.insights': '博客',
    // Hero
    'hero.subtitle': 'Hello, I am',
    'hero.intro': '你好，我是家琪！<br>我是一名游戏设计师和开发者，<br>正在寻找玩法/系统策划的工作机会。',
    'hero.job': '<strong class="text-text-primary font-semibold">腾讯</strong> 玩法策划实习',
    'hero.edu': '毕业于 <strong class="text-text-primary font-semibold">北京邮电大学、香港理工大学</strong>',
    'hero.scroll': 'SCROLL',
    // About
    'about.subtitle': 'About Me',
    'about.title': '我的背景是...',
    'about.edu_title': '教育背景',
    'about.exp_title': '实习经历',
    // Work
    'work.subtitle': 'Featured Projects',
    'work.title': '我设计和制作独立游戏...',
    'work.more': 'More on itch.io',
    // Insights
    'insights.subtitle': 'Thoughts & Articles',
    'insights.title': '我乐于分享对游戏的思考...',
    'insights.more': 'More on My Blog',
    // Contact
    'contact.subtitle': 'Get in Touch',
    'contact.title': '来和我聊一聊？',
    // Footer
    'footer.copyright': 'copyright © 2026 Jiaqi Zhang',
    'footer.backtop': 'Back to top',
  }
};

// ===== 教育经历数据 =====
const educationData = [
  {
    school: 'The Hong Kong Polytechnic University',
    school_zh: '香港理工大学',
    major: 'MSc in Innovative Multimedia Entertainment',
    major_zh: '创新多媒体娱乐 理学硕士',
    period: '2024.09 — 2026.07',
    period_zh: '2024.09 — 2026.07',
    icon: 'ri-building-2-line'
  },
  {
    school: 'Beijing University of Posts and Telecommunications',
    school_zh: '北京邮电大学',
    major: 'BSc in Digital Media Technology',
    major_zh: '数字媒体技术 工学学士',
    period: '2020.09 — 2024.07',
    period_zh: '2020.09 — 2024.07',
    icon: 'ri-building-line'
  }
];

// ===== 实习/工作经历数据 =====
const experienceData = [
  {
    company: 'Tencent LightSpeed Studios - League of Legends: Wild Rift Team',
    company_zh: '腾讯光子工作室 英雄联盟手游项目组',
    role: 'Intern Gameplay Designer',
    role_zh: '玩法策划实习生',
    period: '2025.11 — Present',
    period_zh: '2025.11 — 至今',
    icon: 'ri-gamepad-line'
  },
  {
    company: 'PolyU-Nvidia Joint Research Centre',
    company_zh: '香港理工大学-英伟达联合研究中心',
    role: 'Unity Developer Intern',
    role_zh: 'Unity开发实习生',
    period: '2024.12 — 2025.03',
    period_zh: '2024.12 — 2025.03',
    icon: 'ri-lightbulb-line'
  }
];

// ===== 游戏数据 =====
const gamesData = [
  {
    title: 'Meow Recruit',
    title_zh: '猫猫直聘',
    genre: '🥉 2025 Tencent Game Awards University Track Third Prize',
    cover: 'project1.jpg',
    genre_color: 'linear-gradient(to right, #ffcc6e, #ffed78)',
    genre_text_color: '#2c2c2cd4',
    genre_zh: '🥉 2025腾讯游戏创作大赛高校赛道三等奖',
    description: 'Casual strategy roguelike DBG + backpack management game<br>Pick Cards, Arrange Cubicles - Who is the real Human Resources Master?',
    description_zh: 'Roguelike DBG + 背包管理玩法的休闲策略游戏<br>选卡牌，摆工位——谁才是真正的HR大师？',
    gradient: 'gradient-meow',
    icon: '🐱',
    links: [
      { label: 'Steam', label_zh: 'Steam', url: 'https://store.steampowered.com/app/3811320/_/', icon: 'ri-steam-fill' },
      { label: 'Website', label_zh: '官网', url: 'https://jiaqi404.github.io/chillgame/', icon: 'ri-global-line' },
      { label: 'itch.io', label_zh: 'itch.io', url: 'https://chill-game.itch.io/meow-recruit', icon: 'ri-gamepad-line' }
    ]
  },
  {
    title: 'POKO',
    title_zh: 'POKO',
    cover: 'project2.jpg',
    genre: '2025 Spotlight Gamejam',
    genre_zh: '2025聚光灯Gamejam参赛作品',
    description: 'Meta puzzle game with a virtual pet theme<br>Hi, I am POKO!♡',
    description_zh: '电子宠物主题的Meta解谜游戏<br>你好，我是POKO酱！♡',
    gradient: 'gradient-poko',
    icon: '🧩',
    links: [
      { label: 'Taptap', label_zh: 'Taptap', url: 'https://www.taptap.cn/app/781125?os=pc', icon: 'ri-smartphone-line' },
      { label: 'itch.io', label_zh: 'itch.io', url: 'https://captainceleste.itch.io/poko', icon: 'ri-gamepad-line' }
    ]
  },
  {
    title: 'I Bubble You Guess',
    title_zh: 'I Bubble You Guess',
    cover: 'project3.png',
    genre: '🏆 2025 Global Game Jam HK Site Most Unique Concept',
    genre_zh: '🏆 2025GGJ香港站最独特概念奖',
    description: 'Bubble-themed 3D Pictionary game<br>Create bubble creatures like SpongeBob!',
    description_zh: '泡泡主题的3D你画我猜游戏<br>像海绵宝宝一样创造泡泡生物吧！',
    gradient: 'gradient-bubble',
    icon: '🫧',
    links: [
      { label: 'GGJ', label_zh: 'GGJ', url: 'https://globalgamejam.org/games/2025/i-bubble-you-guess-1', icon: 'ri-trophy-line' },
      { label: 'itch.io', label_zh: 'itch.io', url: 'https://captainceleste.itch.io/i-bubble-you-guess', icon: 'ri-gamepad-line' }
    ]
  },
  {
    title: '3D Maze City Generator',
    title_zh: '3D 迷宫城市生成器',
    cover: 'project4.png',
    description: 'Uses Wave Function Collapse algorithm to procedurally generate 3D maze cities.',
    description_zh: '使用波函数坍缩算法程序化生成3D迷宫城市',
    gradient: 'gradient-maze',
    icon: '🏙️',
    links: [
      { label: 'Github', label_zh: 'Github', url: 'https://github.com/jiaqi404/3DCityGenerator', icon: 'ri-github-fill' },
      { label: 'Demo', label_zh: 'Demo', url: 'https://captainceleste.itch.io/3d-city-generator', icon: 'ri-play-circle-line' }
    ]
  }
];

// ===== 文章数据 =====
const articlesData = [
  {
    title: "Why Does Honor of Kings Design its Gameplay this Way: More Intense and Competitive Mobile-Native MOBA Game",
    title_zh: '《王者荣耀》为什么要这么设计：更激烈对抗的手机原生MOBA游戏',
    tags: ['GameAnalysis', 'Mechanics', 'MOBA', 'Monetization'],
    tags_zh: ['游戏拆解', '机制分析', 'MOBA', '商业化'],
    excerpt: 'There may never be another DOTA2 or LoL, but there will definitely be more and more Honor of Kings.',
    excerpt_zh: '未来可能不会再有下一个DOTA2或英雄联盟，但一定会有越来越多的王者荣耀。',
    date: 'Mar 2026',
    date_zh: '2026年3月',
    url:"https://hellojiaqi.notion.site/MOBA-322cf023e7d3802a93b7f09ff9933231"
  },
  {
    title: 'Why Does Slay the Spire Feel so Addictive: the Unique Charm of Roguelike DBG being Both Random and Deterministic',
    title_zh: '《杀戮尖塔》为何让人如此上头：Roguelike DBG随机又确定的独特魅力',
    tags: ['GameAnalysis', 'Roguelike', 'DBG'],
    tags_zh: ['游戏拆解', 'Roguelike', 'DBG'],
    excerpt: 'Neow makes you believe: you really can slay this Spire.',
    excerpt_zh: '涅奥让你相信：你真的可以杀戮这座尖塔。',
    date: 'Mar 2026',
    date_zh: '2026年3月',
    url:"https://hellojiaqi.notion.site/Roguelike-DBG-322cf023e7d380e891bff9cd0de3cefb"
  },
  {
    title: 'The Long Rest Dilemma in Baldur\'s Gate 3: Why Did Larian Design Long Rests?',
    title_zh: '《博德之门3》的长休迷思：为什么拉瑞安要设计长休？',
    tags: ['GameAnalysis', 'CRPG', 'SaveMechanics'],
    tags_zh: ['游戏拆解', 'CRPG', '保存机制'],
    excerpt: 'Is it just me who didn\'t know about long rests at the beginning?',
    excerpt_zh: '应该不只有我一个人一开始不知道要长休吧？',
    date: 'Mar 2026',
    date_zh: '2026年3月',
    url:"https://hellojiaqi.notion.site/3-322cf023e7d380388112e3121606c134"
  },
  {
    title: 'Why the Mahjong We Played This Afternoon Was Not Fun: Strategic Degradation Under Pressure',
    title_zh: '为什么我们今天下午打的麻将不好玩：论压力下的策略退化',
    tags: ['GameTalk', 'ExperienceEngine'],
    tags_zh: ['游戏杂谈', '体验引擎'],
    excerpt: 'I can always apply the Experience Engine in weird places.',
    excerpt_zh: '关于我总能在奇怪的地方活学活用《体验引擎》这件事。',
    date: 'Nov 2025',
    date_zh: '2025年11月',
    url:"https://hellojiaqi.notion.site/322cf023e7d38001a79ed45e392393c1"
  },
  {
    title: 'How Do Indie Games Stand Out: Interview with Jordi, Producer of Cosmic Wheel Sisterhood',
    title_zh: '独立游戏因何立足：访谈《宇宙之轮姐妹会》制作人Jordi',
    tags: ['GameIndustry', 'IndieGames', 'ProducerInterview'],
    tags_zh: ['市场研究', '独立游戏', '制作人访谈'],
    excerpt: 'If games are no longer an industry but a medium, indie games might be the core of this medium\'s vitality.',
    excerpt_zh: '如果游戏不再是某个"产业"，而是一种"媒介"，独立游戏或许才是这种媒介生命力的核心。',
    date: 'Apr 2025',
    date_zh: '2025年4月',
    url:"https://hellojiaqi.notion.site/Jordi-322cf023e7d38075b009fc72ad48020b"
  },
  {
    title: 'How Did League of Legends Become a Cultural Phenomenon: The Power of the Pan-Entertainment Cycle',
    title_zh: '英雄联盟如何成为一种文化现象：论泛娱乐循环的影响力',
    tags: ['GameIndustry', 'Culture', 'Esports'],
    tags_zh: ['市场研究', '文化', '电竞'],
    excerpt: 'When a game can become a lifestyle, it has the vitality to transcend time and cycles.',
    excerpt_zh: '当一款游戏能够成为一种生活方式时，它便拥有了穿越时间、超越周期的生命力。',
    date: 'Dec 2024',
    date_zh: '2024年12月',
    url:"https://hellojiaqi.notion.site/322cf023e7d3803eb6deedf93e849572"
  }
];

// ===== 渲染教育经历时间线 =====
function renderEducationTimeline() {
  const container = document.getElementById('education-timeline');
  if (!container) return;
  const isZh = currentLang === 'zh';

  container.innerHTML = educationData.map((item, index) => `
    <div class="timeline-item reveal" style="transition-delay: ${index * 0.12}s">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${isZh ? item.period_zh : item.period}</span>
        <h4 class="timeline-title">${isZh ? item.school_zh : item.school}</h4>
        <p class="timeline-subtitle">${isZh ? item.major_zh : item.major}</p>
      </div>
    </div>
  `).join('');
}

// ===== 渲染工作经历时间线 =====
function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;
  const isZh = currentLang === 'zh';

  container.innerHTML = experienceData.map((item, index) => `
    <div class="timeline-item reveal" style="transition-delay: ${index * 0.12}s">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${isZh ? item.period_zh : item.period}</span>
        <h4 class="timeline-title">${isZh ? item.company_zh : item.company}</h4>
        <p class="timeline-subtitle">${isZh ? item.role_zh : item.role}</p>
      </div>
    </div>
  `).join('');
}

// ===== 渲染游戏卡片 =====
function renderGameCards() {
  const grid = document.getElementById('games-grid');
  if (!grid) return;
  const isZh = currentLang === 'zh';

  grid.innerHTML = gamesData.map((game, index) => {
    const genreText = isZh ? game.genre_zh : game.genre;
    const genreStyle = game.genre_color ? `background: ${game.genre_color};` : '';
    const genreTextColorStyle = game.genre_text_color ? `color: ${game.genre_text_color};` : '';
    const firstUrl = game.links && game.links[0] ? game.links[0].url : '#';
    return `
    <div class="game-card reveal" style="transition-delay: ${index * 0.1}s" role="link" tabindex="0"
       onclick="window.open('${firstUrl}', '_blank', 'noopener');"
       onkeydown="if(event.key==='Enter'){window.open('${firstUrl}', '_blank', 'noopener');}">
      <div class="game-card-visual flex items-center justify-center overflow-hidden">
      <img src="images/${game.cover}" alt="${isZh ? game.title_zh : game.title}" style="max-width:100%; height:auto; display:block;">
      </div>
      <div class="game-card-content">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        ${genreText ? `<span class="game-tag" style="${genreStyle}${genreTextColorStyle}">${genreText}</span>` : ''}
      </div>
      <h3 class="text-2xl lg:text-[1.7rem] font-display font-bold mb-1 tracking-tight leading-tight">${isZh ? game.title_zh : game.title}</h3>
      <div class="w-8 h-[2px] bg-accent-color/60 mb-2 rounded-full"></div>
      <p class="text-sm text-text-secondary leading-relaxed mb-3 font-regular">${isZh ? game.description_zh : game.description}</p>
      <div class="flex flex-wrap gap-4">
        ${game.links.map(link => `
        <a href="${link.url}" class="game-link" onclick="event.stopPropagation();" target="_blank" rel="noopener noreferrer">
          <i class="${link.icon}"></i>
          ${isZh ? link.label_zh : link.label}
          <i class="ri-arrow-right-up-line text-xs"></i>
        </a>
        `).join('')}
      </div>
      </div>
    </div>
    `;
  }).join('');
}

// ===== 渲染文章卡片 =====
function renderArticleCards() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  const isZh = currentLang === 'zh';

  grid.innerHTML = articlesData.map((article, index) => {
    const url = article.url || '#';
    return `
    <div class="article-card reveal" style="transition-delay: ${index * 0.08}s" role="link" tabindex="0"
      onclick="window.open('${url}', '_blank', 'noopener');"
      onkeydown="if(event.key==='Enter'){window.open('${url}', '_blank', 'noopener');}">
      <div class="flex items-center justify-between mb-4">
        <span class="text-[10px] font-mono opacity-35 tracking-wider">${isZh ? article.date_zh : article.date}</span>
        <i class="ri-arrow-right-up-line opacity-20 text-sm"></i>
      </div>
      <h3 class="article-card-title text-lg font-display font-bold mb-3 leading-snug tracking-tight transition-colors">${isZh ? article.title_zh : article.title}</h3>
      <p class="text-sm opacity-50 leading-relaxed mb-4 font-light">${isZh ? article.excerpt_zh : article.excerpt}</p>
      <div class="flex flex-wrap gap-2">
        ${(isZh ? (article.tags_zh || []) : (article.tags || [])).map(tag => `
          <span class="article-tag">#${tag}</span>
        `).join('')}
      </div>
    </div>
    `;
  }).join('');
}

// ===== 切换语言 =====
function switchLanguage(lang) {
  currentLang = lang;

  // 更新所有 data-i18n 元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // 更新切换按钮文本
  const toggleText = lang === 'en' ? '中' : 'En';
  const langBtn = document.getElementById('lang-toggle');
  const mobileLangBtn = document.getElementById('mobile-lang-toggle');
  if (langBtn) langBtn.textContent = toggleText;
  if (mobileLangBtn) mobileLangBtn.textContent = toggleText;

  // 重新渲染所有动态内容
  renderEducationTimeline();
  renderExperienceTimeline();
  renderGameCards();
  renderArticleCards();

  // 重新初始化滚动动画
  initScrollReveal();
}

// ===== 初始化语言切换按钮 =====
function initLangToggle() {
  const langBtn = document.getElementById('lang-toggle');
  const mobileLangBtn = document.getElementById('mobile-lang-toggle');

  const toggle = () => {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    switchLanguage(newLang);
  };

  if (langBtn) langBtn.addEventListener('click', toggle);
  if (mobileLangBtn) mobileLangBtn.addEventListener('click', toggle);
}

// ===== 滚动显示动画 (Intersection Observer) =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ===== 导航栏滚动效果 =====
function initNavbar() {
  const navbar = document.getElementById('navbar');

  function updateNavbarMode() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbarMode);
  // 初始化检测
  updateNavbarMode();
}

// ===== 移动端菜单 =====
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const icon = btn.querySelector('i');
    if (menu.classList.contains('hidden')) {
      icon.className = 'ri-menu-3-line';
    } else {
      icon.className = 'ri-close-line';
    }
  });

  // 点击菜单项后关闭
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.querySelector('i').className = 'ri-menu-3-line';
    });
  });
}

// ===== 返回顶部 =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== 导航高亮 =====
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ===== 平滑锚点滚动 =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== 初始化 =====
function init() {
  renderEducationTimeline();
  renderExperienceTimeline();
  renderGameCards();
  renderArticleCards();
  
  // 等待DOM渲染完成后初始化动画
  requestAnimationFrame(() => {
    initScrollReveal();
    initNavbar();
    initMobileMenu();
    initBackToTop();
    initActiveNavLink();
    initSmoothScroll();
    initLangToggle();
  });
}

// DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

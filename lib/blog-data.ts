// lib/blog-data.ts
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;

  /** Category name (display) */
  category: string;

  /** Category slug (SEO URL) */
  categorySlug: string;

  image?: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POSTS
// ─────────────────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "diferentes-tipos-de-caracteres-invisiveis",
    title: "Diferentes tipos de caracteres invisiveis: Quais usar e quando",
    excerpt: "Descubra os varios tipos de caracteres invisiveis disponiveis no Unicode...",
    category: "Discussões",
    categorySlug: "discussoes",
    image: "/blog/caracteres-invisiveis.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-03-15",
    readingTime: 8,
    tags: ["unicode", "caracteres invisiveis", "espaco invisivel", "guia"],
    featured: true
  },
  {
    slug: "espacos-invisiveis-desaparecem",
    title: "Porque e que os seus espacos invisiveis desaparecem...",
    excerpt: "Entenda por que seus espacos invisiveis podem nao funcionar...",
    category: "Dicas e truques",
    categorySlug: "dicas-e-truques",
    image: "/blog/espacos-plataformas.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-03-10",
    readingTime: 6,
    tags: ["troubleshooting", "plataformas", "compatibilidade"],
    featured: true
  },
  {
    slug: "biografias-do-instagram-espacos-invisiveis",
    title: "Letras Diferentes para Instagram: O Guia Completo 2026",
    excerpt: "Aprenda a usar letras diferentes no Instagram...",
    category: "Dicas e truques",
    categorySlug: "dicas-e-truques",
    image: "/blog/instagram-letras.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-03-05",
    readingTime: 10,
    tags: ["instagram", "letras diferentes", "redes sociais", "bio"]
  },
  {
    slug: "criar-nome-de-usuario-do-discord",
    title: "Como usar espaços invisíveis em nomes de usuário e canais do Discord!",
    excerpt: "Como usar espaços invisíveis em nomes de usuário e canais do Discord!",
    category: "Dicas e truques",
    categorySlug: "dicas-e-truques",
    image: "/blog/free-fire-nicks.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-02-28",
    readingTime: 7,
    tags: ["free fire", "games", "nicks", "letras especiais"]
  },
  {
    slug: "espacos-invisiveis-em-nomes-de-usuario",
    title: "10 maneiras criativas de usar espaços invisíveis em nomes de usuário e mídias sociais",
    excerpt: "10 maneiras criativas de usar espaços invisíveis em nomes de usuário e mídias sociais",
    category: "Discussões",
    categorySlug: "discussoes",
    image: "/blog/unicode-guia.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-02-20",
    readingTime: 12,
    tags: ["unicode", "educacional", "guia", "tecnologia"]
  },
  {
    slug: "espacos-invisiveis-para-whatsapp",
    title: "Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques",
    excerpt: "Pare de enviar textos desordenados no WhatsApp! Aprenda a usar espaços invisíveis...",
    category: "Dicas e truques",
    categorySlug: "dicas-e-truques",
    image: "/blog/unicode-guia.webp",
    author: "Espaco Invisivel",
    publishedAt: "2026-01-25",
    readingTime: 12,
    tags: ["whatsapp", "espacos invisiveis", "mensagens", "truques"],
    featured: false
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured);
}

/** ✅ FILTER BY SLUG (SEO FIX) */
export function getPostsByCategorySlug(slug: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.categorySlug === slug);
}

/** (optional fallback) */
export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return BLOG_POSTS.filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return BLOG_POSTS
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      if (post.categorySlug === currentPost.categorySlug) score += 2;
      post.tags.forEach(tag => {
        if (currentPost.tags.includes(tag)) score += 1;
      });
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/** ✅ Returns objects instead of just names (SEO ready) */
export function getAllCategories() {
  const map = new Map<string, string>();

  BLOG_POSTS.forEach(post => {
    map.set(post.categorySlug, post.category);
  });

  return Array.from(map.entries()).map(([slug, name]) => ({
    slug,
    name
  }));
}

export function getAllTags(): string[] {
  return [...new Set(BLOG_POSTS.flatMap(post => post.tags))];
}

export function formatDate(dateString: string): string {
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month, 10) - 1];
  return `${parseInt(day, 10)} de ${monthName} de ${year}`;
}
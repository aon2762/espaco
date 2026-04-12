import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories, formatDate, type BlogPost } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Espaço Invisível",
  description: "Leia todos os artigos do nosso blog sobre espaços invisíveis, caracteres Unicode e dicas para personalizar seus perfis.",
  keywords: ["blog", "espaços invisíveis", "tutoriais", "dicas", "redes sociais"],
};

const Header = () => (
  <header className="hdr" role="banner">
    <div className="wrap hdr__in">
      <Link href="/" className="hdr__logo" aria-label="Espaço Invisível – Página inicial">
        <Image src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" width={120} height={40} />
      </Link>
      <input type="checkbox" id="nav-chk" className="nav-chk" aria-hidden="true" suppressHydrationWarning />
      <label htmlFor="nav-chk" className="nav-ham" aria-label="Abrir menu de navegação"><span /><span /><span /></label>
      <nav className="hdr__nav" aria-label="Navegação principal">
        <ul role="list">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/sobre-nos">Sobre Nós</Link></li>
          <li><Link href="/contacto">Contato</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__in wrap">
      <div className="footer__brand">
        <Image src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" width={120} height={40} />
        <p>Gerador gratuito de espaços invisíveis para jogos e redes sociais.</p>
        <div className="footer__soc">
          <a href="https://www.facebook.com/profile.php?id=61573868490259" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
          <a href="https://www.youtube.com/@espaco-invisivel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
          <a href="https://www.pinterest.com/espacoinvisivelhelp" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">pt</a>
        </div>
      </div>
      <nav className="footer__nav" aria-label="Links do rodapé">
        <p className="footer__nt">Páginas</p>
        <ul>
          <li><Link href="/sobre-nos">Sobre Nós</Link></li>
          <li><Link href="/contacto">Contato</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
          <li><Link href="/termos-e-condicoes">Termos e Condições</Link></li>
          <li><Link href="/isencao-de-responsabilidade">Isenção de Responsabilidade</Link></li>
        </ul>
      </nav>
      <div className="footer__tools">
        <p className="footer__nt">Ferramentas</p>
        <ul>
          <li><Link href="/">Gerador de Espaço Invisível</Link></li>
          <li><Link href="/letras-diferentes">Gerador de Letras Diferentes</Link></li>
        </ul>
      </div>
    </div>
    <div className="footer__bot">
      <p>© {new Date().getFullYear()} Espaço Invisível. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── HERO ── */}
        <section className="hero hero--blog" aria-labelledby="blog-h1">
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
          <div className="wrap hero__in">
            <h1 id="blog-h1" className="hero__h1">
              Blog
            </h1>
            <p className="hero__meta">
              {posts.length} artigo{posts.length > 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* ── CATEGORY FILTER ── */}
        <section className="sec sec--white" aria-label="Filtro de categorias">
          <div className="wrap">
            <div className="cat-filter">
              <Link href="/blog" className="cat-filter__btn cat-filter__btn--active">
                Todos
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="cat-filter__btn"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG GRID ── */}
        <section className="sec" aria-label="Artigos do blog">
          <div className="wrap">
            {posts.length > 0 ? (
              <div className="bgrid">
                {posts.map((post: BlogPost) => (
                  <article key={post.slug} className="bcard">
                    {post.image && (
                      <Link href={`/${post.slug}`} className="bcard__img-wrap">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          loading="lazy"
                          width={800}
                          height={450}
                        />
                      </Link>
                    )}

                    <div className="bcard__content">
                      <Link
                        href={`/category/${post.categorySlug}`}
                        className="bcard__cat"
                      >
                        {post.category}
                      </Link>

                      <h3 className="bcard__title">
                        <Link href={`/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="bcard__excerpt">
                        {post.excerpt}
                      </p>

                      <div className="bcard__meta">
                        <time>{formatDate(post.publishedAt)}</time>
                        <span className="bcard__dot">•</span>
                        <span>{post.readingTime} min de leitura</span>
                      </div>

                      <Link href={`/${post.slug}`} className="bcard__more">
                        Ler mais →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="tc" style={{ color: "var(--muted)", fontSize: "1.1rem" }}>
                Nenhum artigo encontrado.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BlogStyles />
    </>
  );
}

function BlogStyles() {
  return (
    <style precedence="default">{`
      :root{--navy:#091e3a;--navy2:#0f3272;--blue:#1a56db;--orange:#f05a1a;--orange2:#ff7a3d;--bg:#f3f6fb;--bgtint:#eaf0fb;--surf:#ffffff;--bdr:#dde5f5;--txt:#111827;--txt2:#374151;--muted:#6b7280;--r:12px;--rl:20px;--sh:0 4px 24px rgba(9,30,58,.09);--shl:0 12px 48px rgba(9,30,58,.15);--tr:.22s cubic-bezier(.4,0,.2,1);--fh:'Syne',sans-serif;--fb:'DM Sans',system-ui,sans-serif}
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
      body{font-family:var(--fb);background:var(--bg);color:var(--txt);line-height:1.72;font-size:16px}
      img{max-width:100%;display:block}
      a{color:var(--blue);text-decoration:none}
      .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .wrap{max-width:1280px;margin:0 auto;padding:0 48px}
      .tc{text-align:center}
      .hdr__logo .logo-img{height:44px;width:auto;display:block}
      .footer__brand .logo-img{height:40px;width:auto;display:block;margin-bottom:14px}
      .hdr{position:sticky;top:0;z-index:9999;background:rgba(9,30,58,.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.07)}
      .hdr__in{display:flex;align-items:center;justify-content:space-between;height:64px;gap:20px}
      .hdr__nav ul{display:flex;list-style:none;gap:4px}
      .hdr__nav a{display:block;padding:7px 15px;border-radius:9px;color:rgba(255,255,255,.8);font-size:.92rem;font-weight:500;text-decoration:none;transition:all var(--tr)}
      .hdr__nav a:hover{background:rgba(255,255,255,.1);color:#fff}
      .nav-chk{display:none}
      .nav-ham{display:none;flex-direction:column;justify-content:center;gap:5px;cursor:pointer;padding:8px;z-index:210}
      .nav-ham span{display:block;width:24px;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:all var(--tr)}
      .hero{position:relative;overflow:hidden;background:linear-gradient(145deg,#060f24 0%,#0c2660 55%,#0e3590 100%);color:white;padding:88px 0 96px}
      .hero--blog{padding:64px 0 56px}
      .hero__orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px)}
      .hero__orb--1{width:560px;height:560px;background:rgba(26,86,219,.28);top:-160px;right:-80px}
      .hero__orb--2{width:440px;height:440px;background:rgba(240,90,26,.17);bottom:-130px;left:-60px}
      .hero__in{position:relative;z-index:1}
      .hero__h1{font-family:var(--fh);font-weight:800;color:#fff;line-height:1.15;font-size:clamp(1.8rem,3.8vw,2.8rem);margin-bottom:16px}
      .hero__meta{font-size:.95rem;color:rgba(255,255,255,.65)}
      .sec{padding:80px 0;background:var(--bg)}
      .sec--white{background:var(--surf)}
      .cat-filter{display:flex;flex-wrap:wrap;gap:12px;margin:0 auto}
      .cat-filter__btn{display:inline-block;padding:10px 20px;border-radius:100px;font-size:.9rem;font-weight:600;background:var(--bdr);color:var(--navy);transition:all var(--tr);border:none;cursor:pointer}
      .cat-filter__btn:hover{background:var(--blue);color:#fff}
      .cat-filter__btn--active{background:var(--orange);color:#fff}
      .bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:36px}
      .bcard{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--rl);overflow:hidden;box-shadow:0 2px 10px rgba(9,30,58,.06);transition:all var(--tr);display:flex;flex-direction:column}
      .bcard:hover{box-shadow:var(--shl);transform:translateY(-3px)}
      .bcard__img-wrap{display:block;width:100%;height:200px;overflow:hidden;background:var(--bgtint)}
      .bcard__img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
      .bcard__content{padding:24px}
      .bcard__cat{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--orange);background:rgba(240,90,26,.1);padding:4px 11px;border-radius:100px;margin-bottom:12px;width:fit-content}
      .bcard__title{font-family:var(--fh);font-size:1.1rem;font-weight:700;margin-bottom:10px;line-height:1.35}
      .bcard__title a{color:var(--navy);text-decoration:none}
      .bcard__title a:hover{color:var(--blue)}
      .bcard__excerpt{font-size:.93rem;color:var(--txt2);margin-bottom:16px;flex:1;line-height:1.6}
      .bcard__meta{display:flex;align-items:center;gap:8px;font-size:.85rem;color:var(--muted);margin-bottom:14px}
      .bcard__dot{color:var(--muted)}
      .bcard__more{font-size:.9rem;font-weight:700;color:var(--orange);text-decoration:none}
      .bcard__more:hover{text-decoration:underline}
      .footer{background:#060e1f;color:rgba(255,255,255,.6)}
      .footer__in{display:grid;grid-template-columns:2fr 1.2fr 1.2fr;gap:60px;padding:64px 0 52px}
      .footer__brand p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.45);max-width:280px;margin-bottom:20px}
      .footer__soc{display:flex;gap:10px}
      .footer__soc a{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.65);font-size:.74rem;font-weight:700;text-transform:uppercase;text-decoration:none;letter-spacing:.03em;transition:all var(--tr)}
      .footer__soc a:hover{background:var(--orange);color:#fff}
      .footer__nt{font-family:var(--fh);font-size:.77rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:18px}
      .footer__nav ul,.footer__tools ul{list-style:none;display:flex;flex-direction:column;gap:10px}
      .footer__nav a,.footer__tools a{color:rgba(255,255,255,.55);text-decoration:none;font-size:.9rem;transition:color var(--tr)}
      .footer__nav a:hover,.footer__tools a:hover{color:#fff}
      .footer__bot{border-top:1px solid rgba(255,255,255,.07);text-align:center;padding:18px 20px;font-size:.82rem;color:rgba(255,255,255,.28)}
      @media(max-width:1100px){.wrap{padding:0 36px}.bgrid{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:900px){.wrap{padding:0 28px}.bgrid{grid-template-columns:1fr}.footer__in{grid-template-columns:1fr 1fr;gap:36px}.footer__brand{grid-column:1/-1}.hero--blog{padding:52px 0 44px}}
      @media(max-width:680px){.wrap{padding:0 18px}.nav-ham{display:flex}.hdr__nav{position:fixed;top:64px;left:0;right:0;bottom:0;background:rgba(9,30,58,.98);backdrop-filter:blur(18px);transform:translateX(100%);transition:transform var(--tr);z-index:10000;pointer-events:auto;display:flex;flex-direction:column;padding:28px 24px;overflow-y:auto;isolation:isolate}.hdr__nav ul{flex-direction:column;gap:4px}.hdr__nav a{font-size:1.15rem;padding:13px 16px}.nav-chk:checked ~ .hdr__nav{transform:translateX(0)}.nav-chk:checked + .nav-ham span:nth-child(1){transform:translateY(7px) rotate(45deg)}.nav-chk:checked + .nav-ham span:nth-child(2){opacity:0}.nav-chk:checked + .nav-ham span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}.hero--blog{padding:44px 0 36px}.hero__h1{font-size:clamp(1.6rem,5vw,2.1rem)}.sec{padding:52px 0}.bgrid{grid-template-columns:1fr}.footer__in{grid-template-columns:1fr;gap:30px;padding-top:48px;padding-bottom:36px}}
      @media(max-width:480px){.wrap{padding:0 14px}}
    `}</style>
  );
}
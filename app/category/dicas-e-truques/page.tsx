import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategorySlug, formatDate, type BlogPost } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Dicas e truques | Blog Espaço Invisível",
  description: "Artigos com dicas e truques sobre espaços invisíveis e caracteres especiais.",
};

const Header = () => (
  <header className="hdr">
    <div className="wrap hdr__in">
      <Link href="/" className="hdr__logo">
        <img src="/logo.svg" alt="Logo" className="logo-img" />
      </Link>
      <nav className="hdr__nav">
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/sobre-nos">Sobre Nós</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__in wrap">
      <div className="footer__brand">
        <img src="/logo.svg" alt="Logo" className="logo-img" />
        <p>Gerador gratuito de espaços invisíveis.</p>
      </div>
    </div>
    <div className="footer__bot">
      <p>© {new Date().getFullYear()} Espaço Invisível.</p>
    </div>
  </footer>
);

export default function DicasETruquesPage() {
  const posts = getPostsByCategorySlug("dicas-e-truques");

  return (
    <>
      <Header />
      <main>
        <section className="hero hero--blog">
          <div className="wrap hero__in">
            <h1 className="hero__h1">Dicas e truques</h1>
            <p className="hero__meta">{posts.length} artigos</p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <Link href="/blog" className="back-link">← Voltar ao Blog</Link>
            <div className="bgrid" style={{ marginTop: "40px" }}>
              {posts.map((post: BlogPost) => (
                <article key={post.slug} className="bcard">
                  {post.image && (
                    <Link href={`/${post.slug}`}>
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </Link>
                  )}
                  <div style={{ padding: "20px" }}>
                    <h3 style={{ marginBottom: "10px" }}>
                      <Link href={`/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p style={{ color: "#666", marginBottom: "10px" }}>{post.excerpt}</p>
                    <small style={{ color: "#999" }}>{formatDate(post.publishedAt)}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Styles />
    </>
  );
}

function Styles() {
  return <style>{`
    :root{--navy:#091e3a;--blue:#1a56db;--orange:#f05a1a;--bg:#f3f6fb;--surf:#fff;--bdr:#dde5f5;--txt:#111827;--txt2:#374151;--muted:#6b7280;--r:12px;--rl:20px;--tr:.22s}
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt)}
    a{color:var(--blue);text-decoration:none}
    img{max-width:100%;display:block}
    .wrap{max-width:1280px;margin:0 auto;padding:0 48px}
    .hdr{position:sticky;top:0;z-index:200;background:rgba(9,30,58,.97);border-bottom:1px solid rgba(255,255,255,.07)}
    .hdr__in{display:flex;align-items:center;justify-content:space-between;height:64px}
    .hdr__logo .logo-img{height:44px}
    .hdr__nav ul{display:flex;list-style:none;gap:4px}
    .hdr__nav a{display:block;padding:7px 15px;border-radius:9px;color:rgba(255,255,255,.8);text-decoration:none;transition:all var(--tr)}
    .hdr__nav a:hover{background:rgba(255,255,255,.1);color:#fff}
    .hero{background:linear-gradient(145deg,#060f24,#0e3590);color:#fff;padding:64px 0 56px}
    .hero__in{position:relative;z-index:1}
    .hero__h1{font-size:2.5rem;font-weight:800;margin-bottom:16px}
    .hero__meta{font-size:.95rem;color:rgba(255,255,255,.65)}
    .sec{padding:80px 0;background:var(--bg)}
    .back-link{display:inline-block;font-size:.9rem;font-weight:600;color:var(--navy);padding:8px 0;margin-bottom:20px}
    .back-link:hover{color:var(--orange)}
    .bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .bcard{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);overflow:hidden;box-shadow:0 2px 10px rgba(9,30,58,.06);transition:all var(--tr)}
    .bcard:hover{transform:translateY(-3px);box-shadow:0 12px 48px rgba(9,30,58,.15)}
    .bcard img{width:100%;height:200px;object-fit:cover;display:block}
    .bcard a{color:inherit;text-decoration:none}
    .footer{background:#060e1f;color:rgba(255,255,255,.6);padding:64px 0 52px}
    .footer__in{display:grid;grid-template-columns:1fr;gap:60px}
    .footer__bot{border-top:1px solid rgba(255,255,255,.07);text-align:center;padding:18px 20px;font-size:.82rem;color:rgba(255,255,255,.28)}
    @media(max-width:900px){.wrap{padding:0 28px}.bgrid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:680px){.wrap{padding:0 18px}.bgrid{grid-template-columns:1fr}}
  `}</style>;
}
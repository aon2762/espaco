// app/sobre-nos/page.tsx — Espaço Invisível — About Us Page
// Next.js 13+ App Router

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

// ─── SEO — exact meta title, description, canonical, hreflang pt-BR ───────────
export const metadata: Metadata = {
  title: "Sobre Nós | Espaço Invisível",
  description:
    "Conheça a história do Espaço Invisível, nossa inspiração, propósito e compromisso em tornar a comunicação digital mais criativa.",
  keywords: [
    "sobre nós",
    "espaço invisível",
    "tipografia criativa",
    "fontes online",
    "texto invisível",
  ],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/sobre-nos",
    languages: {
      "pt-BR": "https://espacoinvisivel.com.br/sobre-nos",
    },
  },
  openGraph: {
    title: "Sobre Nós | Espaço Invisível",
    description:
      "Conheça a missão do Espaço Invisível e a inspiração por trás do projeto.",
    url: "https://espacoinvisivel.com.br/sobre-nos",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp",
        width: 1200,
        height: 630,
        alt: "Espaço Invisível Logo",
      },
    ],
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Espaço Invisível",
  alternateName: "Espaco Invisivel",
  url: "https://espacoinvisivel.com.br/",
  logo: "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61573868490259",
    "https://www.youtube.com/@espaco-invisivel",
    "https://www.pinterest.com/espacoinvisivelhelp",
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SobreNosPage() {
  return (
    <>
      {/* ── JSON-LD Schema ── */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ── hreflang pt-BR ── */}
      <link
        rel="alternate"
        hrefLang="pt-BR"
        href="https://espacoinvisivel.com.br/sobre-nos"
      />

      {/* ── Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
        rel="stylesheet"
      />

      {/* ═══════════════════════════════════════════════════════ HEADER */}
      <header className="hdr" role="banner">
        <div className="wrap hdr__in">
          <Link
            href="/"
            className="hdr__logo"
            aria-label="Espaço Invisível – Página inicial"
          >
            <Image
              src="/logo.svg"
              alt="Espaço Invisível Logo"
              className="logo-img"
              width={120}
              height={40}
            />
          </Link>
          <input
            type="checkbox"
            id="nav-chk"
            className="nav-chk"
            aria-hidden="true"
          />
          <label
            htmlFor="nav-chk"
            className="nav-ham"
            aria-label="Abrir menu de navegação"
          >
            <span />
            <span />
            <span />
          </label>
          <nav className="hdr__nav" aria-label="Navegação principal">
            <ul role="list">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/sobre-nos">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/contacto">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ═══════════════════════════════════════════════════════ HERO */}
        <section className="hero" aria-labelledby="hero-h1">
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
          <div className="wrap hero__in">
            <h1 id="hero-h1" className="hero__h1">
              Sobre nós
            </h1>
            <p className="hero__lead">
              Olá! Sou Mark, o criador do <Link href="/">Espaço Invísivel</Link>. O que começou como um
              projeto de paixão se transformou em um serviço on-line exclusivo,
              dedicado a levar criatividade à sua comunicação digital.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ A INSPIRAÇÃO — H2 */}
        <section id="inspiracao" className="sec" aria-labelledby="insp-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="insp-h2" className="sh2">
                A inspiração
              </h2>
              <p>
                Sempre fui fascinado pela forma como a tipografia pode
                transformar um texto simples em algo extraordinário.
              </p>
              <p>
                Você já notou como uma fonte única pode mudar completamente o
                clima de uma mensagem? Essa é a magia que eu queria compartilhar
                com o mundo.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POR QUE EXISTIMOS — H2 */}
        <section
          id="por-que-existimos"
          className="sec sec--tint"
          aria-labelledby="pqe-h2"
        >
          <div className="wrap">
            <div className="prose">
              <h2 id="pqe-h2" className="sh2">
                Por que existimos
              </h2>
              <p>
                O principal objetivo do Espaço Invisível é simples: fornecer uma
                plataforma gratuita e fácil de usar onde qualquer pessoa possa
                encontrar e usar fontes interessantes e atraentes em plataformas
                de mídia social.
              </p>
              <ul className="slist">
                <li>Incremente sua biografia no Instagram</li>
                <li>Dê um toque especial à sua postagem no Facebook</li>
                <li>Crie um texto exclusivo para as histórias do WhatsApp</li>
                <li>Faça experiências com tipografia criativa</li>
              </ul>
              <p>Estamos aqui para tornar isso fácil e divertido.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ NOSSO COMPROMISSO — H2 */}
        <section id="compromisso" className="sec" aria-labelledby="comp-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="comp-h2" className="sh2">
                Nosso compromisso
              </h2>
              <p>
                Este serviço é totalmente voltado para a diversão e o
                entretenimento.
              </p>
              <p>
                Acreditamos que a comunicação deve ser divertida, pessoal e
                expressiva.
              </p>
              <p>
                Cada fonte é uma pequena tela de criatividade, e estamos
                entusiasmados em ajudá-lo a pintar seu mundo digital com cores
                tipográficas exclusivas.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ VAMOS NOS CONECTAR — H2 */}
        <section id="contato" className="sec sec--tint" aria-labelledby="con-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="con-h2" className="sh2">
                Vamos nos conectar
              </h2>
              <p>
                Seu feedback e seu entusiasmo nos impulsionam. Se tiver alguma
                dúvida, sugestão ou apenas quiser dizer olá:
              </p>

              <div className="tbl-wrap" role="region" aria-label="Informações de contato" tabIndex={0}>
                <table className="dtbl">
                  <caption>Informações de contato</caption>
                  <tbody>
                    <tr>
                      <th scope="row">Email</th>
                      <td>
                        <a href="mailto:espacoinvisivel.help@gmail.com">
                          espacoinvisivel.help@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cta-box">
                <p>Explore nosso blog oficial</p>
                <Link href="/blog" className="btn btn--primary">
                  Visitar Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════ FOOTER */}
      <footer className="footer">
        <div className="wrap footer__in">
          <div className="footer__brand">
            <Image
              src="/logo.svg"
              alt="Espaço Invisível Logo"
              className="logo-img"
              width={120}
              height={40}
            />
            <p>
              Ferramentas gratuitas para criatividade digital, espaços
              invisíveis, fontes e símbolos para redes sociais.
            </p>
            <div className="footer__soc">
              <a
                href="https://www.facebook.com/profile.php?id=61573868490259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://www.youtube.com/@espaco-invisivel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href="https://www.pinterest.com/espacoinvisivelhelp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                PT
              </a>
            </div>
          </div>
          <nav className="footer__nav" aria-label="Links principais">
            <p className="footer__nt">Links</p>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/sobre-nos">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/contacto">Contato</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer__tools" aria-label="Links legais">
            <p className="footer__nt">Legal</p>
            <ul>
              <li>
                <Link href="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos">Termos</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bot">
          <p>© 2026 Espaço Invisível. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════════════ CSS */}
      <style precedence="default">{`
        /* ══ DESIGN TOKENS ══ */
        :root {
          --navy:    #091e3a;
          --navy2:   #0e2d54;
          --blue:    #1a56db;
          --orange:  #f05a1a;
          --orange2: #e04a0a;
          --bg:      #f4f7fd;
          --bgtint:  #e8f0fe;
          --surf:    #ffffff;
          --bdr:     #dbeafe;
          --txt:     #1e293b;
          --txt2:    #374151;
          --muted:   #6b7280;
          --r:       12px;
          --rl:      20px;
          --sh:      0 4px 24px rgba(9,30,58,.09);
          --shl:     0 12px 48px rgba(9,30,58,.15);
          --tr:      .22s cubic-bezier(.4,0,.2,1);
          --fh:      'Syne', sans-serif;
          --fb:      'DM Sans', system-ui, sans-serif;
        }

        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        body { font-family: var(--fb); background: var(--bg); color: var(--txt); line-height: 1.72; font-size: 16px; }
        img  { max-width: 100%; display: block; }
        a    { color: var(--blue); }
        code { font-family: 'SF Mono','Fira Code',monospace; font-size: .83em; background: #e8eeff; color: var(--navy); padding: 2px 7px; border-radius: 5px; }
        p    { color: var(--txt2); margin-bottom: 16px; font-size: 1.02rem; }
        strong { color: var(--txt); }

        /* ── Layout ── */
        .wrap  { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .prose { max-width: 860px; }

        /* ── Typography scale ── */
        .sh2 {
          font-family: var(--fh); font-weight: 800; color: var(--navy);
          font-size: clamp(1.9rem, 3vw, 2.85rem); line-height: 1.12; margin-bottom: 16px;
        }
        .sh3 {
          font-family: var(--fh); font-weight: 700; color: var(--navy);
          font-size: clamp(1.2rem, 1.8vw, 1.55rem); line-height: 1.25; margin: 36px 0 14px;
        }

        /* ── Buttons ── */
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 30px; border-radius: 100px; font-family: var(--fb); font-size: 1rem; font-weight: 600; text-decoration: none; cursor: pointer; transition: all var(--tr); white-space: nowrap; border: none; }
        .btn--primary { background: var(--orange); color: #fff; box-shadow: 0 4px 20px rgba(240,90,26,.35); }
        .btn--primary:hover { background: var(--orange2); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(240,90,26,.42); }

        /* ══ LOGO ══ */
        .hdr__logo .logo-img  { height: 44px; width: auto; display: block; }
        .footer__brand .logo-img { height: 40px; width: auto; display: block; margin-bottom: 14px; }

        /* ══ HEADER ══ */
        .hdr { position: sticky; top: 0; z-index: 9999; background: rgba(9,30,58,.97); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,.07); }
        .hdr__in { display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 20px; }
        .hdr__logo img { height: 44px; width: auto; }
        .hdr__nav ul { display: flex; list-style: none; gap: 4px; }
        .hdr__nav a { display: block; padding: 7px 15px; border-radius: 9px; color: rgba(255,255,255,.8); font-size: .92rem; font-weight: 500; text-decoration: none; transition: all var(--tr); }
        .hdr__nav a:hover { background: rgba(255,255,255,.1); color: #fff; }
        .nav-chk { display: none; }
        .nav-ham { display: none; flex-direction: column; justify-content: center; gap: 5px; cursor: pointer; padding: 8px; z-index: 210; }
        .nav-ham span { display: block; width: 24px; height: 2px; background: rgba(255,255,255,.85); border-radius: 2px; transition: all var(--tr); }

        /* ══ HERO ══ */
        .hero { position: relative; overflow: hidden; background: linear-gradient(145deg,#060f24 0%,#0c2660 55%,#0e3590 100%); color: white; padding: 88px 0 96px; }
        .hero__orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
        .hero__orb--1 { width: 560px; height: 560px; background: rgba(26,86,219,.28); top: -160px; right: -80px; }
        .hero__orb--2 { width: 440px; height: 440px; background: rgba(240,90,26,.17); bottom: -130px; left: -60px; }
        .hero__in { position: relative; z-index: 1; }
        .hero__h1 { font-family: var(--fh); font-weight: 800; color: #fff; line-height: 1.15; font-size: clamp(1.8rem, 3.8vw, 3.2rem); margin-bottom: 22px; max-width: 960px; }
        .hero__lead { font-size: clamp(1rem, 1.5vw, 1.15rem); color: rgba(255,255,255,.82); max-width: 700px; margin-bottom: 0; }

        /* ══ SECTIONS ══ */
        .sec       { padding: 80px 0; background: var(--bg); }
        .sec--white { background: var(--surf); }
        .sec--tint  { background: var(--bgtint); }

        /* ══ PROSE CONTENT ══ */
        .sec a { color: var(--blue); font-weight: 500; }
        .sec a:hover { text-decoration: underline; }

        /* Lists */
        .slist { list-style: none; padding: 0; margin: 16px 0 24px; }
        .slist li { display: flex; gap: 13px; align-items: flex-start; padding: 13px 0; border-bottom: 1px solid var(--bdr); color: var(--txt2); font-size: 1.02rem; }
        .slist li:last-child { border-bottom: none; }
        .slist li::before { content: '→'; color: var(--orange); font-weight: 700; flex-shrink: 0; margin-top: 2px; }

        /* ══ TABLE ══ */
        .tbl-wrap { overflow-x: auto; border-radius: var(--r); border: 1px solid var(--bdr); margin: 20px 0 28px; }
        .dtbl { width: 100%; border-collapse: collapse; font-size: .92rem; min-width: 300px; }
        .dtbl caption { padding: 10px 16px; text-align: left; font-size: .78rem; color: var(--muted); font-weight: 700; letter-spacing: .06em; text-transform: uppercase; border-bottom: 1px solid var(--bdr); background: #f8faff; }
        .dtbl th { background: var(--navy); color: rgba(255,255,255,.9); padding: 13px 16px; text-align: left; font-family: var(--fh); font-size: .85rem; white-space: nowrap; }
        .dtbl td { padding: 11px 16px; border-bottom: 1px solid var(--bdr); color: var(--txt2); }
        .dtbl tr:nth-child(even) td { background: #f6f9ff; }
        .dtbl tr:last-child td { border-bottom: none; }
        .dtbl tr:hover td { background: #eef2ff; }

        /* ══ CTA BOX ══ */
        .cta-box { background: linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%); border-radius: var(--rl); padding: 40px 36px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-top: 36px; }
        .cta-box p { font-family: var(--fh); font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0; }

        /* ══ FOOTER ══ */
        .footer { background: #060e1f; color: rgba(255,255,255,.6); }
        .footer__in { display: grid; grid-template-columns: 2fr 1.2fr 1.2fr; gap: 60px; padding-top: 64px; padding-bottom: 52px; }
        .footer__brand img { margin-bottom: 14px; }
        .footer__brand p { font-size: .9rem; line-height: 1.7; color: rgba(255,255,255,.45); max-width: 280px; margin-bottom: 20px; }
        .footer__soc { display: flex; gap: 10px; }
        .footer__soc a { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,.08); color: rgba(255,255,255,.65); font-size: .74rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: .03em; transition: all var(--tr); }
        .footer__soc a:hover { background: var(--orange); color: #fff; }
        .footer__nt { font-family: var(--fh); font-size: .77rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: 18px; }
        .footer__nav ul, .footer__tools ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer__nav a, .footer__tools a { color: rgba(255,255,255,.55); text-decoration: none; font-size: .9rem; transition: color var(--tr); }
        .footer__nav a:hover, .footer__tools a:hover { color: #fff; }
        .footer__bot { border-top: 1px solid rgba(255,255,255,.07); text-align: center; padding: 18px 20px; font-size: .82rem; color: rgba(255,255,255,.28); }

        /* ══ RESPONSIVE ══ */
        @media(max-width:1100px){
          .wrap   { padding: 0 36px; }
        }
        @media(max-width:900px){
          .wrap   { padding: 0 28px; }
          .footer__in { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer__brand { grid-column: 1/-1; }
          .hero   { padding: 72px 0 80px; }
        }
        @media(max-width:680px){
          .wrap   { padding: 0 18px; }
          /* Hamburger */
          .nav-ham { display: flex; }
          .hdr__nav {
            position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
            background: rgba(9,30,58,.98); backdrop-filter: blur(18px);
            transform: translateX(100%); transition: transform var(--tr);
            z-index: 9998; pointer-events: auto; display: flex; flex-direction: column;
            padding: 28px 24px; overflow-y: auto;
          }
          .hdr__nav ul { flex-direction: column; gap: 4px; }
          .hdr__nav a  { font-size: 1.15rem; padding: 13px 16px; }
          .nav-chk:checked ~ .hdr__nav { transform: translateX(0); }
          .nav-chk:checked + .nav-ham span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          .nav-chk:checked + .nav-ham span:nth-child(2) { opacity: 0; }
          .nav-chk:checked + .nav-ham span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
          /* Layout */
          .hero   { padding: 56px 0 64px; }
          .hero__h1 { font-size: clamp(1.6rem, 5vw, 2.1rem); }
          .sec    { padding: 56px 0; }
          .sh2    { font-size: clamp(1.6rem, 5vw, 1.9rem); }
          .cta-box { flex-direction: column; text-align: center; }
          .cta-box .btn { width: 100%; }
          .footer__in { grid-template-columns: 1fr; gap: 30px; padding-top: 48px; padding-bottom: 36px; }
        }
        @media(max-width:480px){
          .wrap   { padding: 0 14px; }
        }
        @media(max-width:360px){
          .hero__h1 { font-size: 1.5rem; }
          .sh2    { font-size: 1.45rem; }
        }
      `}</style>
    </>
  );
}

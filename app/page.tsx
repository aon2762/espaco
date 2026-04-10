// app/page.tsx — Espaço Invisível — Final Version (exact original content)
// Next.js 13+ App Router

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const InvisibleTool = dynamic(() => import("@/components/InvisibleTool").then(m => ({ default: m.InvisibleTool })), {
  loading: () => <div className="min-h-[200px]" />,
});

const NickGrid = dynamic(() => import("@/components/NickGrid").then(m => ({ default: m.NickGrid })), {
  loading: () => <div className="min-h-[100px]" />,
});

// ─── SEO — exact meta title, description, canonical, hreflang pt-BR ───────────
export const metadata: Metadata = {
  title: "Espaço Invisível - Pequeno () Médio ( ) Grande (ㅤ) ✔️ - 2026",
  description:
    "Use nosso Gerador de Espaço Invisível para criar espaços em branco em nomes do FreeFire, Instagram e mais. Torne seu perfil único e atraente!",
  keywords: [
    "espaço invisível","espaco invisivel","letra invisível","nick free fire",
    "espaço invisível whatsapp","espaço invisível instagram","caractere invisível unicode",
  ],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/" },
  },
  openGraph: {
    title: "Espaço Invisível - Pequeno () Médio ( ) Grande (ㅤ) ✔️ - 2026",
    description: "Use nosso Gerador de Espaço Invisível para criar espaços em branco em nomes do FreeFire, Instagram e mais. Torne seu perfil único e atraente!",
    url: "https://espacoinvisivel.com.br/",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp", width: 1200, height: 630, alt: "Espaço Invisível Logo" }],
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  "name": "Espaço Invisível", "alternateName": "Espaco Invisivel",
  "url": "https://espacoinvisivel.com.br/",
  "logo": "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp",
  "sameAs": ["https://www.facebook.com/profile.php?id=61573868490259","https://www.youtube.com/@espaco-invisivel","https://www.pinterest.com/espacoinvisivelhelp"],
};

const videoSchema = {
  "@context": "https://schema.org", "@type": "VideoObject",
  "name": "Vamos ver como você pode usar nossa ferramenta para adicionar o Espaco Invisivel!",
  "description": "Vamos ver como você pode usar nossa ferramenta para adicionar o Espaco Invisivel!",
  "thumbnailUrl": "https://i.ytimg.com/vi/VSq3wklv9Pk/hqdefault.jpg",
  "uploadDate": "2025-03-06T17:58:42Z", "duration": "PT27S",
  "embedUrl": "https://www.youtube.com/embed/VSq3wklv9Pk", "interactionCount": "1",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que é uma letra invisível?", "acceptedAnswer": { "@type": "Answer", "text": "Uma letra invisível é um caractere Unicode que não aparece na tela, mas ainda ocupa espaço." } },
    { "@type": "Question", "name": "Quantos caracteres invisíveis existem?", "acceptedAnswer": { "@type": "Answer", "text": "Existem dezenas de caracteres Unicode invisíveis usados em Free Fire, WhatsApp, Instagram e mais." } },
    { "@type": "Question", "name": "O espaço invisível pode ser usado em todos os aplicativos?", "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos aplicativos modernos suporta caracteres Unicode invisíveis, incluindo Free Fire, Instagram, WhatsApp e Twitter." } },
    { "@type": "Question", "name": "É permitido usar o Espaco Invisivel no Free Fire?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, usar espaços invisíveis em apelidos do Free Fire é amplamente praticado e geralmente permitido pelos termos do jogo." } },
    { "@type": "Question", "name": "Qual é a diferença entre espaço em branco e caractere invisível?", "acceptedAnswer": { "@type": "Answer", "text": "Um espaço em branco comum é o espaço padrão (U+0020) que muitos apps não aceitam em nomes. Caracteres invisíveis são pontos de código Unicode distintos que visualmente parecem espaços mas são tecnicamente diferentes." } },
    { "@type": "Question", "name": "O uso do espaco invisivel é seguro?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, os espaços invisíveis são simples caracteres Unicode e são completamente seguros para usar." } },
    { "@type": "Question", "name": "Posso ser banido por usar espaços invisíveis em jogos?", "acceptedAnswer": { "@type": "Answer", "text": "O uso de espaços invisíveis em apelidos de jogos é geralmente tolerado e muito comum. Use com bom senso e verifique os termos de serviço do jogo." } },
  ],
};

// ─── Full original unicode table (all 20 rows) ────────────────────────────────
const unicodeChars = [
  { code:"U+0020", type:"Espaço Padrão",           desc:"Espaço comum",                               example:"[ ]",  origin:"Tipografia padrão"   },
  { code:"U+00A0", type:"Espaço sem pausa",         desc:"Espaço que não quebra linha",                example:"[ ]",  origin:"Formatação de texto" },
  { code:"U+2000", type:"En Quad",                  desc:'Espaço de tamanho de "n"',                   example:"[ ]",  origin:"Tipografia"          },
  { code:"U+2001", type:"Em Quad",                  desc:'Espaço de tamanho de "m"',                   example:"[ ]",  origin:"Tipografia"          },
  { code:"U+2002", type:"No Espaço",                desc:'Espaço de meio "m"',                         example:"[ ]",  origin:"Formatação"          },
  { code:"U+2003", type:"Em Espaço",                desc:'Espaço de largura de "m"',                   example:"[ ]",  origin:"Tipografia"          },
  { code:"U+2004", type:"Espaço Três-Por-Em",       desc:"Espaço fracionário",                         example:"[ ]",  origin:"Tipografia"          },
  { code:"U+2005", type:"Espaço Quatro-Por-Em",     desc:"Espaço fino",                                example:"[ ]",  origin:"Formatação"          },
  { code:"U+2006", type:"Espaço Seis-Por-Em",       desc:"Espaço muito fino",                          example:"[ ]",  origin:"Tipografia"          },
  { code:"U+2007", type:"Espaço da Figura",         desc:"Espaço de largura numérica",                 example:"[ ]",  origin:"Formatação numérica" },
  { code:"U+2008", type:"Espaço de pontuação",      desc:"Espaço específico para pontuação",           example:"[ ]",  origin:"Pontuação"           },
  { code:"U+2009", type:"Espaço Fino",              desc:"Espaço muito estreito",                      example:"[ ]",  origin:"Tipografia"          },
  { code:"U+200A", type:"Espaço para cabelo",       desc:"Espaço extremamente fino",                   example:"[ ]",  origin:"Tipografia"          },
  { code:"U+200B", type:"Espaço de largura zero",   desc:"Espaço invisível",                           example:"[​]", origin:"Pontuação especial"  },
  { code:"U+2028", type:"Separador de linha",       desc:"Quebra de linha",                            example:"[ ]",  origin:"Formatação de texto" },
  { code:"U+205F", type:"Espaço Matemático Médio",  desc:"Espaço em contextos matemáticos",            example:"[ ]",  origin:"Matemática"          },
  { code:"U+3000", type:"Espaço Ideográfico",       desc:"Espaço em sistemas ideográficos",            example:"[　]",  origin:"Escrita asiática"    },
  { code:"U+3164", type:"Hangul Filler",            desc:"Espaço no sistema coreano",                  example:"[ㅤ]", origin:"Escrita coreana"     },
  { code:"U+17B5", type:"Vogal Khmer Aa inerente",  desc:"Espaço em escrita cambojana",                example:"[឵]",  origin:"Escrita cambojana"   },
  { code:"U+2800", type:"Padrão Braille em branco", desc:"Espaço em sistema Braille",                  example:"[⠀]",  origin:"Escrita Braille"     },
];

// ─── Original nicknames ───────────────────────────────────────────────────────
export const nicknames = [
  "ㅤRei da Umpㅤ通",
  "PRETINㅤᵍˢᵗᶻツ",
  "LZㅤㅤㅤㅤㅤㅤㅤㅤ愛",
  "Japaㅤㅤ⁷⁷⁷",
  "Amoㅤxereca",
  "OdeioㅤSônia",
  "ＯＦＦﾠＢＵＧＡＤＡ",
  "Yzzyㅤxereca ⛺",
  "MAGO F1ㅤㅤ",
  "Luffyﾠᵘᵐᵖ",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <Script id="s-org"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema)   }} />
      <Script id="s-vid"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <Script id="s-faq"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema)   }} />

      {/* ── hreflang pt-BR (in addition to Next.js alternates) ── */}
      <link rel="alternate" hrefLang="pt-BR" href="https://espacoinvisivel.com.br/" />

      {/* ═══════════════════════════════════════════════════════ HEADER */}
      <header className="hdr" role="banner">
        <div className="wrap hdr__in">
          <Link href="/" className="hdr__logo" aria-label="Espaço Invisível – Página inicial">
            {/*
              Logo lives at public/logo.svg — Next.js serves /public as the root,
              so the src is just "/logo.svg". No width/height props means the SVG
              renders at its own intrinsic size (viewBox dimensions). The CSS class
              .hdr__logo img caps the height at 44px so it never overflows the header
              while keeping the original aspect ratio.
            */}
            <img
              src="/logo.svg"
              alt="Espaço Invisível Logo"
              className="logo-img"
              width="220"
              height="80"
            />
          </Link>
          <input type="checkbox" id="nav-chk" className="nav-chk" aria-hidden="true" />
          <label htmlFor="nav-chk" className="nav-ham" aria-label="Abrir menu de navegação">
            <span /><span /><span />
          </label>
          <nav className="hdr__nav" aria-label="Navegação principal">
            <ul role="list">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/sobre-nos">Sobre Nós</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
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
            {/* Platform badges */}
            <div className="hero__badges" aria-label="Plataformas suportadas">
              {["Free Fire","Instagram","WhatsApp","Discord","PUBG","TikTok"].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>

            {/* ── H1 — exact original ── */}
            <h1 id="hero-h1" className="hero__h1">
              Espaço Invisível – Pequeno (&thinsp;) Médio (&ensp;) Grande (ㅤ) para nick Free Fire Instagram e WhatsApp!
            </h1>

            <p className="hero__lead">
              Você já se perguntou como alguns jogadores têm aqueles apelidos legais em branco no Free Fire? Ou como as pessoas enviam mensagens vazias no WhatsApp? O segredo está em algo chamado "Espaço Invisível" – uma ferramenta oculta que pode transformar sua presença on-line em jogos e mídias sociais. Este guia mostrará tudo sobre os personagens invisíveis e como eles podem lhe dar uma vantagem única em 2026.
            </p>

            <div className="hero__ctas">
              <a href="#tool" className="btn btn--primary">Gerar espaço invisível ↓</a>
              <a href="#o-que-e" className="btn btn--ghost">Saiba mais</a>
            </div>

            <div className="hero__stats" aria-label="Estatísticas">
              <div className="hero__stat"><strong>140k+</strong><span>Caracteres Unicode</span></div>
              <div className="hero__stat"><strong>100%</strong><span>Gratuito</span></div>
              <div className="hero__stat"><strong>0</strong><span>Instalações necessárias</span></div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TOOL — H2 */}
        <section id="tool" className="sec sec--white" aria-labelledby="tool-h2">
          <div className="wrap">
            {/* ── H2: Gerador de espaço invisível ── */}
            <h2 id="tool-h2" className="sh2">Gerador de espaço invisível</h2>
            <p className="ssub">Escolha o tipo, ajuste a quantidade e copie com um clique.</p>
            <InvisibleTool />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TOC */}
        <section className="sec sec--tint" aria-label="Índice do conteúdo">
          <div className="wrap">
            <details className="toc">
              <summary className="toc__sum">
                <span>📋 Índice</span>
                <span className="toc__arrow" aria-hidden="true">›</span>
              </summary>
              <nav aria-label="Índice da página">
                <ol className="toc__list">
                  <li><a href="#o-que-e">O que é o Espaço Invisível?</a></li>
                  <li><a href="#por-que-usar">Por que usar o Espaço Invisível?</a></li>
                  <li><a href="#guia-video">Como usar – Guia em vídeo</a></li>
                  <li><a href="#tipos">Tipos de Espaço Invisivel (tamanhos de caracteres)</a></li>
                  <li><a href="#vantagens">Por que usar nosso gerador de texto invisível?</a></li>
                  <li><a href="#free-fire">Como adicionar o letra invisível ao apelido Free Fire?</a></li>
                  <li><a href="#redes-sociais">Como usar o Space no Instagram, Twitter e outros aplicativos?</a></li>
                  <li><a href="#whatsapp">Como enviar uma mensagem em branco no WhatsApp usando essa ferramenta?</a></li>
                  <li><a href="#exemplos">Exemplos de apelidos com letra invisível!</a></li>
                  <li><a href="#conclusao">Conclusão</a></li>
                  <li><a href="#faq">Perguntas frequentes (FAQS)</a></li>
                </ol>
              </nav>
            </details>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ O QUE É — H2 */}
        <section id="o-que-e" className="sec" aria-labelledby="oqe-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: O que é o Espaço Invisível? ── */}
              <h2 id="oqe-h2" className="sh2">O que é o Espaço Invisível?</h2>
              <p>
                O Espaço Invisível é uma coleção de caracteres Unicode invisíveis que aparecem como espaços em branco, mas que, na verdade, são caracteres distintos que os computadores e smartphones podem reconhecer. Diferentemente dos espaços regulares que você cria com a barra de espaço, esses caracteres especiais são do sistema Unicode – o padrão universal que dá a cada caractere um código exclusivo.
              </p>

              {/* ── Hero image — "Espaço Invisível" overview ── */}
              <figure className="img-hero">
                <Image
                  src="/Espaco-Invisivel.webp"
                  alt="Espaço Invisível"
                  width={1200}
                  height={630}
                  className="img-hero__photo"
                />
              </figure>

              {/* ── H3: Entendendo o Unicode ── */}
              <h3 className="sh3">Entendendo o Unicode</h3>
              <p>
                O Unicode é um padrão internacional de codificação que atribui um número exclusivo (ponto de código) a cada caractere em todos os sistemas de escrita do mundo. Criado para dar suporte a todas as línguas humanas, o Unicode contém atualmente mais de 140.000 caracteres de escritas antigas e modernas. Cada caractere recebe um identificador exclusivo, como <code>U+200B</code> para o espaço de largura zero.
              </p>
              <p>
                Quando você vê um caractere "normal", como a letra "A", seu valor Unicode é <code>U+0041</code>. Da mesma forma, os caracteres invisíveis têm seus próprios valores Unicode, mas são projetados para serem invisíveis ou não ocuparem espaço quando exibidos.
              </p>

              {/* ── H3: Caracteres Unicode invisíveis comuns ── */}
              <h3 className="sh3">Caracteres Unicode invisíveis comuns</h3>
              <p>
                Aqui está uma tabela que mostra os caracteres invisíveis mais populares usados no Free Fire, WhatsApp e Instagram, juntamente com seus detalhes Unicode:
              </p>
            </div>

            {/* Full 20-row table — outside prose so it can breathe full-width */}
            <div className="tbl-wrap" role="region" aria-label="Tabela de caracteres Unicode invisíveis" tabIndex={0}>
              <table className="dtbl">
                <caption>Tabela de caracteres Unicode invisíveis comuns</caption>
                <thead>
                  <tr>
                    <th scope="col">Unicode</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Exemplo</th>
                    <th scope="col">Origem</th>
                  </tr>
                </thead>
                <tbody>
                  {unicodeChars.map(r => (
                    <tr key={r.code}>
                      <td><code>{r.code}</code></td>
                      <td>{r.type}</td>
                      <td>{r.desc}</td>
                      <td>{r.example}</td>
                      <td>{r.origin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose">
              <p>
                Esses caracteres invisíveis vêm de vários sistemas linguísticos, como Hangul (coreano), Sundanês, Tailandês, Balinês e outros. Eles foram originalmente projetados para funções específicas nesses sistemas de escrita, mas encontraram novos usos criativos on-line. Antes de escolher um espaço para o seu apelido, vale a pena dedicar um tempo para explorar diferentes tipos de caracteres invisíveis e entender qual deles funciona melhor para o seu caso específico.
              </p>

              {/* ── H3: Como funcionam os espaços invisíveis? ── */}
              <h3 className="sh3">Como funcionam os espaços invisíveis?</h3>
              <p>Quando você insere um caractere invisível em seu texto:</p>
              <ul className="slist">
                <li>Seu dispositivo lê o valor Unicode e sabe que existe um caractere ali</li>
                <li>O sistema de renderização aloca espaço para ele com base em suas propriedades</li>
                <li>O caractere em si é desenhado como invisível ou com largura zero</li>
                <li>O resultado é um texto que parece ter um espaçamento incomum ou áreas vazias</li>
              </ul>
              <p>
                É por isso que, ao olhar para a tela, você não verá esses caracteres – esse é o objetivo! Mas, nos bastidores, seu dispositivo com Android, iOS, Windows ou outros sistemas os reconhece como entrada de texto legítima.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POR QUE USAR — H2 */}
        <section id="por-que-usar" className="sec sec--tint" aria-labelledby="pqu-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Por que usar o Espaço Invisível? ── */}
              <h2 id="pqu-h2" className="sh2">Por que usar o Espaço Invisível?</h2>
              <p>
                O Espaco Invisivel não é apenas um truque divertido – é uma ferramenta poderosa com muitos usos. Veja por que você deve começar a usá-lo hoje mesmo:
              </p>
              <ul className="slist">
                <li>
                  <strong>Criar apelidos exclusivos em jogos:</strong> Destaque-se no Free Fire, Fortnite e PUBG com apelidos que usam espaços invisíveis. Por exemplo, em vez de "Player1", você pode ter "Playerㅤ1" ou "Playerﾠ1".
                </li>
                <li>
                  <strong>Enviar mensagens em branco no WhatsApp:</strong> Quer fazer uma pegadinha com seus amigos ou enviar uma mensagem misteriosa? O Espaço Invisivel permite que você envie mensagens em branco no WhatsApp que parecem vazias, mas na verdade estão lá.
                </li>
                <li>
                  <strong>Crie nomes de usuário estéticos nas mídias sociais:</strong> Use espaços invisíveis para criar nomes de usuário elegantes no Instagram, Twitter e TikTok. Por exemplo, "ㅤAestheticㅤ" ou "ﾠCreative".
                </li>
                <li>
                  <strong>Pranks e usos criativos:</strong> De destaques vazios do Instagram a mensagens secretas, o Espaco Invisivel abre um mundo de possibilidades criativas. Você pode usá-lo para criar arquivos de texto com aparência misteriosa, formatar documentos de maneiras exclusivas ou até mesmo pregar peças inofensivas nos amigos. As possibilidades são limitadas apenas por sua imaginação e criatividade.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ GUIA DE VÍDEO — H2 */}
        <section id="guia-video" className="sec" aria-labelledby="vid-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Como usar – Guia em vídeo ── */}
              <h2 id="vid-h2" className="sh2">Como usar – Guia em vídeo</h2>
              <figure className="vfig">
                <div className="vwrap">
                  <iframe
                    src="https://www.youtube.com/embed/VSq3wklv9Pk"
                    title="Vamos ver como você pode usar nossa ferramenta para adicionar o Espaco Invisivel!"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <figcaption>Vamos ver como você pode usar nossa ferramenta para adicionar o Espaco Invisivel!</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TIPOS — H2 */}
        <section id="tipos" className="sec sec--tint" aria-labelledby="tipos-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Tipos de Espaço Invisivel (tamanhos de caracteres) ── */}
              <h2 id="tipos-h2" className="sh2">Tipos de Espaço Invisivel (tamanhos de caracteres)</h2>
              <p>
                Nem todos os espaços invisíveis são iguais! Aqui estão os três principais tipos de Espaco Invisivel, cada um com seu próprio tamanho e caso de uso:
              </p>
              <ul className="slist">
                <li>
                  <strong>Espaço invisível pequeno (&thinsp;):</strong> Perfeito para adicionar espaços sutis em textos ou apelidos. Por exemplo, "Free Fire".
                </li>
                <li>
                  <strong>Espaco Invisivel médio (ﾠ ou &ensp;):</strong> Ótimo para criar lacunas um pouco maiores. Por exemplo, "Playerﾠ1" ou "InstagramﾠBio".
                </li>
                <li>
                  <strong>Grande espaço invisível (ㅤ):</strong> Ideal para criar áreas em branco perceptíveis. Por exemplo, "ㅤInvisibleㅤTextㅤ."
                </li>
              </ul>
              <p>
                Cada tipo de Espaço Invisivel tem seu próprio valor Unicode, tornando-o compatível com jogos, mídia social e aplicativos de mensagens.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ VANTAGENS — H2 */}
        <section id="vantagens" className="sec" aria-labelledby="vant-h2">
          <div className="wrap">
            {/* ── H2: Por que usar nosso gerador de texto invisível? ── */}
            <h2 id="vant-h2" className="sh2 tc">
              Por que usar nosso gerador de texto invisível? (O que nos torna melhores que os outros!)
            </h2>
            <p className="ssub tc">
              Embora seja possível encontrar várias ferramentas de Espaço Invisível on-line, a nossa se destaca em muitos aspectos que os usuários de Nova York a Los Angeles têm comentado. Veja por que nossa ferramenta se tornou a favorita entre os jogadores do Free Fire, influenciadores do Instagram e usuários do WhatsApp em todo o mundo:
            </p>

            <div className="fgrid">
              {/* ── H3: Adicionar espaços invisíveis personalizados ── */}
              <article className="fcard" aria-labelledby="f1">
                <div className="fcard__ico" aria-hidden="true">✦</div>
                <h3 id="f1">Adicionar espaços invisíveis personalizados</h3>
                <p>Ao contrário dos geradores básicos, nossa ferramenta permite que você personalize totalmente seus espaços invisíveis. Você pode combinar diferentes caracteres Unicode para criar o efeito de espaçamento exato que deseja. Esse nível de personalização é perfeito para criar aquele Nick FF exclusivo que fará com que todos se perguntem como você o fez.</p>
              </article>

              {/* ── H3: Modo escuro dedicado ── */}
              <article className="fcard" aria-labelledby="f2">
                <div className="fcard__ico" aria-hidden="true">◑</div>
                <h3 id="f2">Modo escuro dedicado</h3>
                <p>O cansaço visual é real, especialmente para os jogadores que passam horas aperfeiçoando seus perfis. Nosso gerador apresenta um modo escuro dedicado que torna a edição noturna mais confortável. Esse recurso tem sido particularmente popular entre os jogadores do Free Fire e do Fortnite, que apreciam a redução do brilho ao criar o apelido perfeito.</p>
              </article>

              {/* ── H3: Salve sua entrada para buscá-la mais tarde ── */}
              <article className="fcard" aria-labelledby="f3">
                <div className="fcard__ico" aria-hidden="true">⊙</div>
                <h3 id="f3">Salve sua entrada para buscá-la mais tarde</h3>
                <p>Criou a combinação perfeita de espaços invisíveis? Nossa ferramenta permite que você salve suas criações para uso futuro. Esse recurso é incrivelmente útil para criadores de conteúdo que mantêm várias contas ou desejam manter um estilo consistente em diferentes plataformas.</p>
              </article>

              {/* ── H3: Não é necessário instalar ── */}
              <article className="fcard" aria-labelledby="f4">
                <div className="fcard__ico" aria-hidden="true">⬡</div>
                <h3 id="f4">Não é necessário instalar</h3>
                <p>Ao contrário de outras soluções que exigem o download de um aplicativo ou software, nosso gerador de Espaco Invisivel funciona diretamente no seu navegador. Não importa se você está usando Android ou iOS, um smartphone ou computador, nossa ferramenta baseada na Web funciona perfeitamente sem consumir espaço de armazenamento em seu dispositivo.</p>
              </article>

              {/* ── H3: Copiar e colar espaço invisivel ── */}
              <article className="fcard" aria-labelledby="f5">
                <div className="fcard__ico" aria-hidden="true">⊕</div>
                <h3 id="f5">Copiar e colar espaço invisivel</h3>
                <p>A simplicidade é fundamental. Com o nosso gerador, a cópia de espaços invisíveis está a apenas um clique de distância. Essa abordagem direta torna a ferramenta acessível até mesmo para iniciantes que estão apenas descobrindo o mundo dos caracteres invisíveis.</p>
              </article>

              {/* ── H3: Mostra o número de caracteres ── */}
              <article className="fcard" aria-labelledby="f6">
                <div className="fcard__ico" aria-hidden="true">≡</div>
                <h3 id="f6">Mostra o número de caracteres</h3>
                <p>Um dos maiores desafios dos espaços invisíveis é saber quantos você realmente usou. Nossa ferramenta exibe a contagem exata de caracteres, ajudando você a ficar dentro dos limites de caracteres de plataformas como Instagram, Twitter ou Free Fire. Isso é fundamental, pois muitos jogos e aplicativos têm limites rígidos de caracteres para nomes de usuário e biografias.</p>
              </article>

              {/* ── H3: Caixa de teste ── */}
              <article className="fcard" aria-labelledby="f7">
                <div className="fcard__ico" aria-hidden="true">⬚</div>
                <h3 id="f7">Caixa de teste – experimente o espaço gerado antes de usá-lo</h3>
                <p>Não há mais surpresas! Nossa ferramenta inclui uma conveniente caixa de teste onde você pode visualizar exatamente como seus espaços invisíveis aparecerão. Isso ajuda a garantir que seu apelido ou mensagem fique perfeito antes de se comprometer a usá-lo em seu jogo ou perfil de mídia social. Basta colar sua criação na área de teste e ver exatamente como ela aparecerá para os outros.</p>
              </article>

              {/* ── H3: Gratuito para usar ── */}
              <article className="fcard" aria-labelledby="f8">
                <div className="fcard__ico" aria-hidden="true">◎</div>
                <h3 id="f8">Gratuito para usar</h3>
                <p>Talvez a melhor parte? Nossa ferramenta é totalmente gratuita. Sem login premium, sem taxas ocultas e sem necessidade de assinatura. Acreditamos que todos devem ter acesso a ferramentas criativas que aprimorem sua presença on-line.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FREE FIRE — H2 */}
        <section id="free-fire" className="sec sec--tint" aria-labelledby="ff-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Como adicionar o letra invisível ao apelido Free Fire? ── */}
              <h2 id="ff-h2" className="sh2">Como adicionar o letra invisível ao apelido Free Fire?</h2>
              <p>
                Quer fazer com que seu apelido Free Fire se destaque? Aqui está um guia passo a passo para adicionar o letra invisível:
              </p>

              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div>
                    <strong>Etapa 1: Abra o Free Fire:</strong>
                    <p>Inicie o jogo e vá para a seção Alteração de apelido.</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div>
                    <strong>Etapa 2: Use nosso gerador:</strong>
                    <p>Copie um espaco invisivel (pequeno, médio ou grande) do nosso Gerador de Espaços Invisíveis.</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div>
                    <strong>Etapa 3: Cole no campo do apelido:</strong>
                    <p>Cole o espaço invisivel em seu apelido. Por exemplo, "Playerㅤ1" ou "GhostﾠAgent".</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">4</span>
                  <div>
                    <strong>Etapa 4: Salve seu apelido:</strong>
                    <p>Confirme as alterações e aproveite seu novo e exclusivo apelido!</p>
                  </div>
                </li>
              </ol>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>
                  <strong>Instruções especiais para usuários de iPhone:</strong> Se estiver usando um iPhone, certifique-se de testar o espaco invisivel na caixa de teste primeiro. Alguns teclados do iOS podem não suportar determinados caracteres Unicode.
                </p>
              </div>

              {/* ── Free Fire step screenshots ── */}
              <div className="img-row">
                <figure className="img-row__item">
                  <Image
                    src="/Espaco-Invisivel-Visite-nosso-site.webp"
                    alt="Espaço Invisível - Visite nosso site"
                    width={400}
                    height={800}
                    className="img-row__photo"
                  />
                </figure>
                <figure className="img-row__item">
                  <Image
                    src="/Copia-Espaco-necessario.webp"
                    alt="Cópia Espaço necessário"
                    width={400}
                    height={800}
                    className="img-row__photo"
                  />
                </figure>
                <figure className="img-row__item">
                  <Image
                    src="/Espaco-Invisivel-Adicionar-apelido-no-Freefire.webp"
                    alt="Espaco Invisivel - Adicionar apelido no Freefire"
                    width={400}
                    height={800}
                    className="img-row__photo"
                  />
                </figure>
              </div>

              <p>
                Você pode usar espaços invisíveis para criar efeitos como letras flutuantes, pausas dramáticas ou segmentos organizados em seu apelido. Muitos dos melhores jogadores do Free Fire usam essas técnicas para criar identidades memoráveis, como "PRETINㅤᵍˢᵗᶻツ" ou "Japaㅤㅤㅤ⁷⁷⁷ﾠ", que se destacam no Battle Royale.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ REDES SOCIAIS — H2 */}
        <section id="redes-sociais" className="sec" aria-labelledby="rs-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Como usar o Space no Instagram, Twitter e outros aplicativos? ── */}
              <h2 id="rs-h2" className="sh2">Como usar o Space no Instagram, Twitter e outros aplicativos?</h2>
              <p>
                Os espaços invisíveis não são apenas para jogos – eles também podem transformar sua presença na mídia social. Veja como usá-los em plataformas populares:
              </p>

              {/* ── H3: Adicionando-o à sua biografia, nome de usuário ou destaques do Instagram ── */}
              <h3 className="sh3">Adicionando-o à sua biografia, nome de usuário ou destaques do Instagram</h3>
              <p>
                As biografias e os nomes de usuário do Instagram podem ser aprimorados com o uso estratégico de espaços invisíveis:
              </p>
              <ul className="slist">
                <li>Em sua biografia, use espaços invisíveis para criar quebras de parágrafo mais limpas que a plataforma normalmente não permite</li>
                <li>Adicione-os ao seu nome de usuário para criar um efeito de espaçamento exclusivo que o diferencie</li>
                <li>Ao nomear os destaques do Instagram, os espaços invisíveis podem criar títulos mínimos e estéticos ou até mesmo nomes completamente invisíveis para uma aparência mais limpa do perfil</li>
              </ul>
              <p>
                Muitos influenciadores do Instagram usam espaços invisíveis para criar aquele perfil estético perfeito que parece ter sido projetado profissionalmente. A aparência limpa e minimalista obtida com os espaços invisíveis pode fazer com que seu perfil se destaque da multidão. Se você deseja criar uma estética de perfil única, confira nosso <Link href="/biografias-do-instagram-espacos-invisiveis">guia detalhado sobre como criar biografias no Instagram com espaços invisíveis</Link> para obter instruções passo a passo.
              </p>

              {/* ── H3: Usá-lo para tweets criativos ou nomes de usuário estéticos ── */}
              <h3 className="sh3">Usá-lo para tweets criativos ou nomes de usuário estéticos</h3>
              <p>
                No Twitter, o número de caracteres é precioso, mas os espaços invisíveis ainda podem agregar valor:
              </p>
              <ul className="slist">
                <li>Use-os em seu nome de exibição para criar efeitos de espaçamento exclusivos</li>
                <li>Adicione-os aos tweets para fazer pausas dramáticas ou para criar padrões visuais</li>
                <li>Combine-os com emojis para criar layouts criativos que chamem a atenção</li>
              </ul>
              <p>
                O uso correto dos espaços invisíveis pode tornar seus tweets mais envolventes e seu perfil mais memorável, ajudando você a se destacar no feed do Twitter, que se movimenta rapidamente. Embora nossa ferramenta funcione na maioria das plataformas, você pode perceber que o motivo pelo qual seus espaços invisíveis desaparecem em certas plataformas varia de acordo com a forma como cada aplicativo processa caracteres Unicode.
              </p>

              {/* ── H3: Criar destaques vazios no Instagram ── */}
              <h3 className="sh3">Criar destaques vazios no Instagram</h3>
              <p>
                Um dos usos mais populares dos espaços invisíveis no Instagram é a criação de nomes de destaques "vazios":
              </p>
              <ol className="steps steps--sm">
                <li><span className="snum" aria-hidden="true">1</span><div>Copie um espaço invisivel grande (ㅤ) do nosso gerador</div></li>
                <li><span className="snum" aria-hidden="true">2</span><div>Crie um novo destaque ou edite um já existente</div></li>
                <li><span className="snum" aria-hidden="true">3</span><div>Cole o espaço invisível como o nome do destaque</div></li>
                <li><span className="snum" aria-hidden="true">4</span><div>Salvar as alterações</div></li>
              </ol>
              <p>
                O resultado é um destaque que parece não ter nome algum, criando uma estética limpa e minimalista que muitos usuários preocupados com o design preferem. Essa técnica é especialmente popular entre contas de fotografia e marcas pessoais que buscam uma aparência elegante e profissional. Os usuários do Discord têm requisitos específicos, por isso criamos um tutorial separado sobre <Link href="/criar-nome-de-usuario-do-discord">como usar espaços invisíveis em nomes de usuário do Discord</Link> para ajudá-lo a navegar pelas regras da plataforma.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ WHATSAPP — H2 */}
        <section id="whatsapp" className="sec sec--tint" aria-labelledby="wa-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Como enviar uma mensagem em branco no WhatsApp usando essa ferramenta? ── */}
              <h2 id="wa-h2" className="sh2">Como enviar uma mensagem em branco no WhatsApp usando essa ferramenta?</h2>
              <p>
                Um dos usos mais populares dos espaços invisíveis é o envio de mensagens aparentemente vazias no WhatsApp. Esse truque nunca deixa de surpreender os amigos e pode ser uma maneira divertida de se destacar em bate-papos em grupo. Veja como fazer isso:
              </p>

              {/* ── H3: Método de copiar e colar ── */}
              <h3 className="sh3">Método de copiar e colar</h3>
              <p>O envio de uma mensagem em branco no WhatsApp é surpreendentemente simples:</p>
              <ol className="steps">
                <li><span className="snum" aria-hidden="true">1</span><div>Visite nosso gerador de Espaco Invisivel e copie o grande espaço invisível (ㅤ).</div></li>
                <li><span className="snum" aria-hidden="true">2</span><div>Abra o WhatsApp e vá para qualquer bate-papo para o qual você deseja enviar a mensagem em branco.</div></li>
                <li><span className="snum" aria-hidden="true">3</span><div>Cole o caractere invisível no campo de mensagem.</div></li>
                <li><span className="snum" aria-hidden="true">4</span><div>Clique em enviar e observe como uma mensagem aparentemente vazia aparece no bate-papo.</div></li>
              </ol>
              <p>
                A pessoa que receber sua mensagem verá o que parece ser uma mensagem completamente em branco. Embora o WhatsApp impeça o envio de mensagens realmente vazias, esses caracteres Unicode invisíveis são reconhecidos como entrada de texto válida, criando a ilusão de uma mensagem vazia.
              </p>

              {/* ── H3: Maneiras criativas de usar isso para pegadinhas e bate-papos divertidos ── */}
              <h3 className="sh3">Maneiras criativas de usar isso para pegadinhas e bate-papos divertidos</h3>
              <p>As mensagens em branco no WhatsApp abrem muitas possibilidades criativas:</p>
              <ul className="slist">
                <li>Envie uma série de mensagens em branco para confundir seus amigos.</li>
                <li>Use-as como pausas dramáticas para contar histórias.</li>
                <li>Crie "mensagens fantasmas" que pareçam não ter conteúdo.</li>
                <li>Use-as como espaçadores para separar tópicos em conversas em grupo.</li>
                <li>Combine-as com emojis para obter efeitos de emojis flutuantes.</li>
              </ul>

              {/* ── WhatsApp step screenshots ── */}
              <div className="img-row">
                <figure className="img-row__item">
                  <Image
                    src="/Copiar-o-Espaco-Invisivel-do-site.webp"
                    alt="Copiar o Espaço Invisível do site"
                    width={400}
                    height={800}
                    className="img-row__photo"
                  />
                </figure>
                <figure className="img-row__item">
                  <Image
                    src="/Espaco-Invisivel-Copiar-espaco-vazio.webp"
                    alt="Espaço Invisível - Copiar espaço vazio"
                    width={400}
                    height={800}                    
                    className="img-row__photo"
                  />
                </figure>
                <figure className="img-row__item">
                  <Image
                    src="/Espaco-Invisivel-Enviar-mensagem-Whatsapp.webp"
                    alt="Espaco Invisivel - Enviar mensagem Whatsapp"
                    width={400}
                    height={800}
                    className="img-row__photo"
                  />
                </figure>
              </div>

              <p>
                Muitos usuários relataram que essas pegadinhas com mensagens invisíveis obtêm o maior número de reações em bate-papos em grupo, o que as torna perfeitas para adicionar um pouco de diversão às suas conversas diárias. Lembre-se apenas de manter as pegadinhas amigáveis e respeitosas!
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ EXEMPLOS — H2 */}
        <section id="exemplos" className="sec" aria-labelledby="ex-h2">
          <div className="wrap">
            {/* ── H2: Exemplos de apelidos com letra invisível! ── */}
            <h2 id="ex-h2" className="sh2 tc">Exemplos de apelidos com letra invisível!</h2>
            <p className="ssub tc">
              Está procurando inspiração? Aqui estão alguns exemplos prontos para uso de apelidos com espaços invisíveis que você pode copiar diretamente:
            </p>

            {/* ── H3: Estilos de espaço invisível ff e outros jogos ── */}
            <h3 className="sh3 tc">Estilos de espaço invisível ff e outros jogos</h3>
            <p className="tc" style={{marginBottom:"8px"}}>
              Os usuários do Free Fire, PUBG ou Instagram adoram usar espaços invisíveis para criar identidades exclusivas. Aqui estão alguns exemplos:
            </p>

            <NickGrid nicknames={nicknames} />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ BLOG ARTICLES */}
        <section className="sec sec--tint" aria-labelledby="blog-h2">
          <div className="wrap">
            <p className="lbl tc">Blog</p>
            <h2 id="blog-h2" className="sh2 tc">Artigos Relacionados</h2>
            <div className="bgrid">
              <article className="bcard">
                <div className="bcard__cat">Discord</div>
                <h3><Link href="/discord-nome-usuario-invisivel">Criar nome de usuário do Discord com espaço invisível</Link></h3>
                <p>Aprenda a criar um nome único para Discord usando caracteres Unicode invisíveis de forma rápida e fácil.</p>
                <Link href="/discord-nome-usuario-invisivel" className="bcard__more">Leia mais →</Link>
              </article>
              <article className="bcard">
                <div className="bcard__cat">Instagram</div>
                <h3><Link href="/instagram-bio-espacos-invisiveis">Como criar bio do Instagram com espaços invisíveis</Link></h3>
                <p>Descubra como usar o espaço invisível para criar uma bio do Instagram com estilo, quebras de linha e destaques sem nome.</p>
                <Link href="/instagram-bio-espacos-invisiveis" className="bcard__more">Leia mais →</Link>
              </article>
              <article className="bcard">
                <div className="bcard__cat">WhatsApp</div>
                <h3><Link href="/mensagem-branca-whatsapp">Como enviar mensagem em branco no WhatsApp</Link></h3>
                <p>Passo a passo completo para enviar aquela mensagem misteriosa em branco e pregar peças nos seus amigos.</p>
                <Link href="/mensagem-branca-whatsapp" className="bcard__more">Leia mais →</Link>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ CONCLUSÃO — H2 */}
        <section id="conclusao" className="sec" aria-labelledby="conc-h2">
          <div className="wrap">
            <div className="prose">
              {/* ── H2: Conclusão ── */}
              <h2 id="conc-h2" className="sh2">Conclusão</h2>
              <p>
                O Espaço Invisível é mais do que apenas um truque divertido – é uma ferramenta versátil para jogadores, usuários de mídia social e brincalhões. Não importa se você está criando um nome exclusivo do Free Fire, enviando uma mensagem em branco no WhatsApp ou criando uma biografia estética no Instagram, o Espaco Invisivel tem tudo o que você precisa. Você também deve explorar como <Link href="/biografias-do-instagram-espacos-invisiveis">criar biografias do Instagram com o espaços invisíveis</Link>.
              </p>
              <p>Aqui está uma rápida recapitulação dos melhores usos e ferramentas:</p>
              <ul className="slist">
                <li><strong>Free Fire, Fortnite, PUBG:</strong> Destaque-se com apelidos exclusivos.</li>
                <li><strong>Instagram, Twitter, TikTok:</strong> Crie nomes de usuário e biografias com estilo.</li>
                <li><strong>WhatsApp:</strong> Envie mensagens em branco para se divertir e fazer pegadinhas.</li>
                <li><strong>Ferramenta geradora:</strong> Nosso Espaço Invisível Generator facilita a criação e o teste de espaços invisíveis.</li>
              </ul>
              <p>
                Pronto para começar? Experimente o nosso <a href="#tool">Gerador de Espaco Invisivel</a> hoje mesmo e libere sua criatividade!
              </p>
            </div>

            <div className="cta-box">
              <p>Pronto para começar?</p>
              <a href="#tool" className="btn btn--primary">Usar o Gerador Agora ↑</a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FAQ — H2 */}
        <section id="faq" className="sec sec--tint" aria-labelledby="faq-h2">
          <div className="wrap">
            {/* ── H2: Perguntas frequentes (FAQS) ── */}
            <h2 id="faq-h2" className="sh2 tc">Perguntas frequentes (FAQS)</h2>
            <div className="faqgrid">

              <details className="faqd">
                <summary className="faqd__q">
                  <span>O que é uma letra invisível?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Uma letra invisível é um caractere Unicode que não aparece na tela, mas ainda ocupa espaço.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Quantos caracteres invisíveis existem?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Existem dezenas de caracteres Unicode invisíveis, incluindo U+3164 (Hangul Filler), U+200B (Zero-Width Space), U+2800 (Braille Pattern Blank) e muitos outros de sistemas de escrita ao redor do mundo — veja a tabela completa acima.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>O espaço invisível pode ser usado em todos os aplicativos?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>A maioria dos aplicativos modernos suporta caracteres Unicode invisíveis, incluindo Free Fire, Instagram, WhatsApp e Twitter. No entanto, alguns aplicativos podem filtrar certos caracteres Unicode.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>É permitido usar o Espaco Invisivel no Free Fire?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim, usar espaços invisíveis em apelidos do Free Fire é amplamente praticado e geralmente permitido. No entanto, verifique sempre os termos de serviço atuais do jogo.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Qual é a diferença entre espaço em branco e caractere invisível?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Um espaço em branco comum (barra de espaço) é o espaço padrão (U+0020) que muitos aplicativos não aceitam em nomes de usuário. Caracteres invisíveis são pontos de código Unicode distintos que visualmente parecem espaços, mas são tecnicamente caracteres diferentes.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>O uso do espaco invisivel é seguro?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim, os espaços invisíveis são simples caracteres Unicode e são completamente seguros para usar. Eles não são malware nem vírus.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Posso ser banido por usar espaços invisíveis em jogos?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>O uso de espaços invisíveis em apelidos de jogos é geralmente tolerado e muito comum. Contudo, use com bom senso e verifique os termos de serviço do jogo em questão.</p></div>
              </details>

            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════════════════ FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer__in wrap">
          <div className="footer__brand">
            {/*
              Same SVG from /public/logo.svg.
              .footer__brand .logo-img caps height at 40px in the footer via CSS.
            */}
            <img
              src="/logo.svg"
              alt="Espaço Invisível Logo"
              className="logo-img"
              width="220"
              height="80"
            />
            <p>Gerador gratuito de espaços invisíveis para jogos e redes sociais.</p>
            <div className="footer__soc">
              <a href="https://www.facebook.com/profile.php?id=61573868490259" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
              <a href="https://www.youtube.com/@espaco-invisivel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
              <a href="https://www.pinterest.com/espacoinvisivelhelp" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">pt</a>
              <a href="https://www.tiktok.com/@support2668" target="_blank" rel="noopener noreferrer" aria-label="TikTok">tk</a>
            </div>
          </div>
          <nav className="footer__nav" aria-label="Links do rodapé">
            <p className="footer__nt">Páginas</p>
            <ul>
              <li><Link href="/sobre-nos">Sobre Nós</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
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

      {/* ═══════════════════════════════════════════════════════ GLOBAL STYLES */}
      <style precedence="default">{`
        /* ── Design tokens ── */
        :root {
          --navy:    #091e3a;
          --navy2:   #0f3272;
          --blue:    #1a56db;
          --blue2:   #3b7de8;
          --orange:  #f05a1a;
          --orange2: #ff7a3d;
          --bg:      #f3f6fb;
          --bgtint:  #eaf0fb;
          --surf:    #ffffff;
          --bdr:     #dde5f5;
          --txt:     #111827;
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

        /* ── Layout ──
           .wrap  → 1280px container, 48px side padding (comfortable on all desktops)
           .prose → 860px inner text limiter for readability (never applied to the outer wrap)
           Every section: <div className="wrap"> → full width padding
                          <div className="prose"> inside → limits only prose text
        */
        .wrap  { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .prose { max-width: 860px; }
        .tc    { text-align: center; }

        /* ── Typography scale ── */
        .lbl {
          display: inline-block; font-size: .7rem; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--orange);
          background: rgba(240,90,26,.1); border: 1px solid rgba(240,90,26,.22);
          padding: 4px 13px; border-radius: 100px; margin-bottom: 14px;
        }
        .sh2 {
          font-family: var(--fh); font-weight: 800; color: var(--navy);
          font-size: clamp(1.9rem, 3vw, 2.85rem); line-height: 1.12; margin-bottom: 16px;
        }
        .sh3 {
          font-family: var(--fh); font-weight: 700; color: var(--navy);
          font-size: clamp(1.2rem, 1.8vw, 1.55rem); line-height: 1.25; margin: 36px 0 14px;
        }
        .ssub { font-size: clamp(1rem, 1.4vw, 1.15rem); color: var(--muted); margin-bottom: 36px; max-width: 640px; }
        .ssub.tc { margin-left: auto; margin-right: auto; }

        /* ── Buttons ── */
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 30px; border-radius: 100px; font-family: var(--fb); font-size: 1rem; font-weight: 600; text-decoration: none; cursor: pointer; transition: all var(--tr); white-space: nowrap; border: none; }
        .btn--primary { background: var(--orange); color: #fff; box-shadow: 0 4px 20px rgba(240,90,26,.35); }
        .btn--primary:hover { background: var(--orange2); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(240,90,26,.42); }
        .btn--ghost { background: rgba(255,255,255,.1); color: rgba(255,255,255,.92); border: 2px solid rgba(255,255,255,.28); }
        .btn--ghost:hover { background: rgba(255,255,255,.18); color: #fff; }

        /* ══ LOGO ══
           .logo-img renders the SVG at its natural intrinsic dimensions.
           We cap height so it never overflows its container, and set width:auto
           so the original aspect ratio is always preserved — no stretching.
        */
        .hdr__logo .logo-img  { height: 44px; width: auto; display: block; }
        .footer__brand .logo-img { height: 40px; width: auto; display: block; margin-bottom: 14px; }

        /* ══ HEADER ══ */
        .hdr { position: sticky; top: 0; z-index: 200; background: rgba(9,30,58,.97); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,.07); }
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
        .hero__orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); will-change: filter; transform: translateZ(0); }
        .hero__orb--1 { width: 560px; height: 560px; background: rgba(26,86,219,.28); top: -160px; right: -80px; }
        .hero__orb--2 { width: 440px; height: 440px; background: rgba(240,90,26,.17); bottom: -130px; left: -60px; }
        .hero__in { position: relative; z-index: 1; }
        .hero__badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 26px; }
        .badge { padding: 5px 15px; border-radius: 100px; font-size: .77rem; font-weight: 600; letter-spacing: .05em; background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.18); color: rgba(255,255,255,.88); }
        .hero__h1 { font-family: var(--fh); font-weight: 800; color: #fff; line-height: 1.15; font-size: clamp(1.8rem, 3.8vw, 3.2rem); margin-bottom: 22px; max-width: 960px; }
        .hero__lead { font-size: clamp(1rem, 1.5vw, 1.15rem); color: rgba(255,255,255,.82); max-width: 700px; margin-bottom: 36px; }
        .hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 52px; }
        .hero__stats { display: flex; flex-wrap: wrap; gap: 40px; padding-top: 36px; border-top: 1px solid rgba(255,255,255,.14); }
        .hero__stat strong { display: block; font-family: var(--fh); font-size: 2.1rem; font-weight: 800; color: #fff; }
        .hero__stat span { font-size: .83rem; color: rgba(255,255,255,.6); font-weight: 500; }

        /* ══ SECTIONS ══ */
        .sec       { padding: 80px 0; background: var(--bg); }
        .sec--white { background: var(--surf); }
        .sec--tint  { background: var(--bgtint); }

        /* Tool section heading alignment */
        .sec--white .sh2 { margin-bottom: 8px; }

        /* ══ TOC ══ */
        .toc { background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--rl); max-width: 760px; box-shadow: var(--sh); border-left: 4px solid var(--orange); overflow: hidden; }
        .toc__sum { display: flex; align-items: center; justify-content: space-between; padding: 20px 28px; cursor: pointer; list-style: none; user-select: none; font-family: var(--fh); font-size: 1.05rem; font-weight: 700; color: var(--navy); gap: 12px; }
        .toc__sum::-webkit-details-marker { display: none; }
        .toc__sum:hover { background: rgba(240,90,26,.04); }
        .toc__arrow { font-size: 1.4rem; color: var(--orange); transition: transform var(--tr); display: inline-block; line-height: 1; }
        .toc[open] .toc__arrow { transform: rotate(90deg); }
        .toc__list { padding: 8px 28px 24px 52px; border-top: 1px solid var(--bdr); }
        .toc__list li { margin-bottom: 9px; }
        .toc__list a { color: var(--blue); font-weight: 500; text-decoration: none; font-size: .97rem; }
        .toc__list a:hover { text-decoration: underline; color: var(--navy); }

        /* ══ PROSE CONTENT ══ */
        .sec a { color: var(--blue); font-weight: 500; }
        .sec a:hover { text-decoration: underline; }

        /* Lists */
        .slist { list-style: none; padding: 0; margin: 16px 0 24px; }
        .slist li { display: flex; gap: 13px; align-items: flex-start; padding: 13px 0; border-bottom: 1px solid var(--bdr); color: var(--txt2); font-size: 1.02rem; }
        .slist li:last-child { border-bottom: none; }
        .slist li::before { content: '→'; color: var(--orange); font-weight: 700; flex-shrink: 0; margin-top: 2px; }

        /* Numbered steps */
        .steps { list-style: none; padding: 0; margin: 20px 0; display: flex; flex-direction: column; gap: 16px; }
        .steps li { display: flex; gap: 18px; align-items: flex-start; }
        .snum { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0; background: var(--navy); color: #fff; font-family: var(--fh); font-size: .95rem; font-weight: 800; }
        .steps li div { padding-top: 8px; color: var(--txt2); font-size: 1.02rem; }
        .steps li div strong { display: block; color: var(--navy); font-weight: 700; margin-bottom: 4px; font-size: 1.06rem; }
        .steps li div p { margin: 0; }
        .steps--sm li div { padding-top: 10px; }

        /* Tip box */
        .tip { display: flex; gap: 14px; align-items: flex-start; background: rgba(240,90,26,.07); border: 1px solid rgba(240,90,26,.2); border-radius: var(--r); padding: 18px 22px; margin-top: 28px; }
        .tip__ico { font-size: 1.4rem; flex-shrink: 0; margin-top: -2px; }
        .tip p { margin: 0; font-size: .97rem; color: var(--txt2); }

        /* ══ TABLE ══ */
        .tbl-wrap { overflow-x: auto; border-radius: var(--r); border: 1px solid var(--bdr); margin: 20px 0 28px; }
        .dtbl { width: 100%; border-collapse: collapse; font-size: .92rem; min-width: 560px; }
        .dtbl caption { padding: 10px 16px; text-align: left; font-size: .78rem; color: var(--muted); font-weight: 700; letter-spacing: .06em; text-transform: uppercase; border-bottom: 1px solid var(--bdr); background: #f8faff; }
        .dtbl th { background: var(--navy); color: rgba(255,255,255,.9); padding: 13px 16px; text-align: left; font-family: var(--fh); font-size: .85rem; white-space: nowrap; }
        .dtbl td { padding: 11px 16px; border-bottom: 1px solid var(--bdr); color: var(--txt2); }
        .dtbl tr:nth-child(even) td { background: #f6f9ff; }
        .dtbl tr:last-child td { border-bottom: none; }
        .dtbl tr:hover td { background: #eef2ff; }

        /* ══ FEATURES GRID ══ */
        .fgrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 36px; }
        .fcard { background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--rl); padding: 28px 24px; box-shadow: 0 2px 10px rgba(9,30,58,.06); transition: all var(--tr); }
        .fcard:hover { box-shadow: var(--shl); transform: translateY(-3px); border-color: rgba(26,86,219,.25); }
        .fcard__ico { font-size: 1.7rem; color: var(--orange); margin-bottom: 14px; display: block; }
        .fcard h3 { font-family: var(--fh); font-size: 1.02rem; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .fcard p { font-size: .9rem; color: var(--muted); margin: 0; }

        /* ══ VIDEO ══ */
        .vfig { margin-top: 12px; }
        .vwrap { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--rl); background: #000; max-width: 800px; box-shadow: var(--shl); }
        .vwrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        figcaption { margin-top: 12px; font-size: .88rem; color: var(--muted); }

        /* ══ SINGLE HERO IMAGE ══
           Used after the first paragraph of "O que é o Espaço Invisível?".
           Full prose width (max 860px), rounded corners, subtle shadow.
           The Next.js <Image> fills the container width naturally.
        */
        .img-hero {
          margin: 28px 0 36px;
          border-radius: var(--rl);
          overflow: hidden;
          border: 1px solid var(--bdr);
          box-shadow: var(--sh);
          line-height: 0;               /* removes inline gap under <img> */
        }
        .img-hero__photo {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--rl);
          object-fit: cover;
        }

        /* ══ THREE-COLUMN SCREENSHOT ROW ══
           Used in Free Fire and WhatsApp sections.
           On desktop: 3 equal columns side-by-side (portrait phone screenshots).
           On tablet (≤ 700px): 2 columns, third wraps.
           On mobile (≤ 480px): single column stack.
           Each image has a subtle card treatment that matches the page cards.
        */
        .img-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 36px 0 32px;
          align-items: start;
        }
        .img-row__item {
          border-radius: var(--r);
          overflow: hidden;
          border: 1px solid var(--bdr);
          box-shadow: var(--sh);
          background: var(--surf);
          transition: box-shadow var(--tr), transform var(--tr);
          line-height: 0;
        }
        .img-row__item:hover {
          box-shadow: var(--shl);
          transform: translateY(-3px);
        }
        .img-row__photo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        @media(max-width:700px){
          .img-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:480px){
          .img-row { grid-template-columns: 1fr; gap: 16px; }
          .img-hero { margin: 20px 0 28px; }
        }

        /* ══ BLOG GRID ══ */
        .bgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 36px; }
        .bcard { background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--rl); padding: 30px 28px; box-shadow: 0 2px 10px rgba(9,30,58,.06); transition: all var(--tr); display: flex; flex-direction: column; }
        .bcard:hover { box-shadow: var(--shl); transform: translateY(-3px); }
        .bcard__cat { display: inline-block; font-size: .7rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: var(--orange); background: rgba(240,90,26,.1); padding: 3px 11px; border-radius: 100px; margin-bottom: 14px; width: fit-content; }
        .bcard h3 { font-family: var(--fh); font-size: 1.08rem; font-weight: 700; margin-bottom: 10px; line-height: 1.35; }
        .bcard h3 a { color: var(--navy); text-decoration: none; }
        .bcard h3 a:hover { color: var(--blue); }
        .bcard p { font-size: .93rem; color: var(--muted); flex: 1; margin-bottom: 18px; }
        .bcard__more { font-size: .9rem; font-weight: 700; color: var(--orange); text-decoration: none; margin-top: auto; }
        .bcard__more:hover { text-decoration: underline; }

        /* ══ CTA BOX ══ */
        .cta-box { background: linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%); border-radius: var(--rl); padding: 40px 36px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-top: 36px; }
        .cta-box p { font-family: var(--fh); font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0; }

        /* ══ FAQ ══ */
        .faqgrid { max-width: 900px; margin: 36px auto 0; display: flex; flex-direction: column; gap: 12px; }
        .faqd { background: var(--surf); border: 1.5px solid var(--bdr); border-radius: var(--r); overflow: hidden; transition: border-color var(--tr); }
        .faqd[open] { border-color: var(--blue); }
        .faqd__q { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; cursor: pointer; list-style: none; font-family: var(--fh); font-size: 1.07rem; font-weight: 700; color: var(--navy); gap: 16px; user-select: none; }
        .faqd__q::-webkit-details-marker { display: none; }
        .faqd__q:hover { background: rgba(26,86,219,.03); }
        .faqd__arr { font-size: 1.5rem; font-weight: 300; color: var(--orange); transition: transform var(--tr); line-height: 1; flex-shrink: 0; }
        .faqd[open] .faqd__arr { transform: rotate(45deg); }
        .faqd__a { padding: 0 24px 20px; border-top: 1px solid var(--bdr); }
        .faqd__a p { margin: 16px 0 0; font-size: .98rem; color: var(--txt2); }

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

        /* ══ RESPONSIVE ══════════════════════════════════════════════════════
           1100 → reduce columns
            900 → tablet adjustments
            680 → mobile nav, stacked layout
            480 → small phones
            360 → tiny phones
        ════════════════════════════════════════════════════════════════════ */
        @media(max-width:1100px){
          .wrap   { padding: 0 36px; }
          .fgrid  { grid-template-columns: repeat(2,1fr); }
          .bgrid  { grid-template-columns: repeat(2,1fr); }
        }
        @media(max-width:900px){
          .wrap   { padding: 0 28px; }
          .bgrid  { grid-template-columns: 1fr; }
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
            z-index: 199; display: flex; flex-direction: column;
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
          .hero__ctas { flex-direction: column; }
          .hero__ctas .btn { width: 100%; text-align: center; }
          .hero__stats { gap: 24px; }
          .hero__stat strong { font-size: 1.65rem; }
          .sec    { padding: 56px 0; }
          .sh2    { font-size: clamp(1.6rem, 5vw, 1.9rem); }
          .sh3    { font-size: clamp(1.1rem, 4vw, 1.3rem); }
          .fgrid  { grid-template-columns: 1fr; }
          .bgrid  { grid-template-columns: 1fr; }
          .toc__sum { padding: 16px 20px; font-size: .97rem; }
          .toc__list { padding: 8px 20px 20px 40px; }
          .cta-box { flex-direction: column; text-align: center; }
          .cta-box .btn { width: 100%; }
          .footer__in { grid-template-columns: 1fr; gap: 30px; padding-top: 48px; padding-bottom: 36px; }
          .faqd__q { font-size: .98rem; padding: 16px 18px; }
          .faqd__a { padding: 0 18px 16px; }
          .snum   { width: 32px; height: 32px; font-size: .88rem; }
          .steps li { gap: 12px; }
        }
        @media(max-width:480px){
          .wrap   { padding: 0 14px; }
          .hero__stat strong { font-size: 1.4rem; }
          .hero__stats { gap: 18px; }
        }
        @media(max-width:360px){
          .hero__h1 { font-size: 1.5rem; }
          .sh2    { font-size: 1.45rem; }
          .badge  { font-size: .72rem; padding: 4px 11px; }
        }
      `}</style>
    </>
  );
}
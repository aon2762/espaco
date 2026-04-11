// app/letras-diferentes/page.tsx — Letras Diferentes e Bonitas
// Next.js 13+ App Router

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image"; // FIX 1: Added missing Image import
import { TextStyleTool } from "@/components/TextStyleTool";

// ─── SEO ─────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Letras Diferentes e Bonitas: O melhor gerador de estilos!",
  description:
    "Transforme seu texto com nosso Letras Diferentes e Bonitas. Crie apelidos de jogos, biografias do Instagram e conteudo de midia social que chame a atencao.",
  keywords: [
    "letras diferentes","letras bonitas","gerador de letras","fontes diferentes",
    "letras para instagram","letras para free fire","caracteres unicode",
    "letras estilizadas","fontes bonitas","gerador de fontes"
  ],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/letras-diferentes",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/letras-diferentes" },
  },
  openGraph: {
    title: "Letras Diferentes e Bonitas: O melhor gerador de estilos!",
    description: "Transforme seu texto com nosso Letras Diferentes e Bonitas. Crie apelidos de jogos, biografias do Instagram e conteudo de midia social que chame a atencao.",
    url: "https://espacoinvisivel.com.br/letras-diferentes",
    siteName: "Espaco Invisivel",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp", width: 1200, height: 630, alt: "Letras Diferentes e Bonitas" }],
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  "name": "Espaco Invisivel", "alternateName": "Espaco Invisivel",
  "url": "https://espacoinvisivel.com.br/",
  "logo": "https://espacoinvisivel.com.br/wp-content/uploads/2025/03/Espaco-Invisivel-Logo-1.webp",
  "sameAs": ["https://www.facebook.com/profile.php?id=61573868490259","https://www.youtube.com/@espaco-invisivel","https://www.pinterest.com/espacoinvisivelhelp"],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que sao letras diferentes?", "acceptedAnswer": { "@type": "Answer", "text": "Letras diferentes sao caracteres Unicode que se parecem com nossas letras tradicionais, mas tem estilos visuais unicos como gotico, cursiva, negrito e outros." } },
    { "@type": "Question", "name": "Posso usar letras diferentes no Instagram?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Letras diferentes podem ser usadas em biografias, legendas, stories e nomes de usuario do Instagram." } },
    { "@type": "Question", "name": "As letras diferentes funcionam no Free Fire?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, voce pode usar letras diferentes para criar apelidos unicos e memoraveis no Free Fire e outros jogos." } },
    { "@type": "Question", "name": "As letras diferentes afetam o SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, mecanismos de busca podem ter dificuldade em reconhecer caracteres Unicode especiais. Use letras diferenciadas apenas em elementos nao criticos para SEO." } },
    { "@type": "Question", "name": "E seguro usar letras diferentes?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, letras diferentes sao simples caracteres Unicode e sao completamente seguras para usar em qualquer plataforma." } },
  ],
};

// ─── Example transformations table ───────────────────────────────────────────
const transformationExamples = [
  { style: "Normal", result: "Letras Bonitas" },
  { style: "Negrito", result: "𝗟𝗲𝘁𝗿𝗮𝘀 𝗕𝗼𝗻𝗶𝘁𝗮𝘀" },
  { style: "Italico", result: "𝘓𝘦𝘵𝘳𝘢𝘴 𝘉𝘰𝘯𝘪𝘵𝘢𝘴" },
  { style: "Gotico", result: "𝔏𝔢𝔱𝔯𝔞𝔰 𝔅𝔬𝔫𝔦𝔱𝔞𝔰" },
  { style: "Pequeno", result: "ᴸᵉᵗʳᵃˢ ᴮᵒⁿⁱᵗᵃˢ" },
  { style: "Circular", result: "Ⓛⓔⓣⓡⓐⓢ Ⓑⓞⓝⓘⓣⓐⓢ" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LetrasDiferentesPage() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <Script id="s-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="s-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── hreflang pt-BR ── */}
      <link rel="alternate" hrefLang="pt-BR" href="https://espacoinvisivel.com.br/letras-diferentes" />

      {/* ── Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

      {/* ═══════════════════════════════════════════════════════ HEADER */}
      <header className="hdr" role="banner">
        <div className="wrap hdr__in">
          <Link href="/" className="hdr__logo" aria-label="Espaco Invisivel – Pagina inicial">
            <img src="/logo.svg" alt="Espaco Invisivel Logo" className="logo-img" width="220" height="80" />
          </Link>
          <input type="checkbox" id="nav-chk" className="nav-chk" aria-hidden="true" />
          <label htmlFor="nav-chk" className="nav-ham" aria-label="Abrir menu de navegacao">
            <span /><span /><span />
          </label>
          <nav className="hdr__nav" aria-label="Navegacao principal">
            <ul role="list">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/sobre-nos">Sobre Nos</Link></li>
              <li><Link href="/contacto">Contato</Link></li>
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
            <div className="hero__badges" aria-label="Plataformas suportadas">
              {["Instagram","TikTok","Twitter","Free Fire","Discord","YouTube"].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>

            <h1 id="hero-h1" className="hero__h1">
              Letras Diferentes e Bonitas: Transforme Seu Texto Online
            </h1>

            <p className="hero__lead">
              Em um mundo digital onde milhoes de mensagens competem por atencao a cada segundo, como fazer seu conteudo se destacar? A resposta pode estar mais proxima do que voce imagina: na transformacao visual do seu texto. Bem-vindo ao nosso guia definitivo sobre letras diferentes e bonitas – a ferramenta que vai revolucionar sua presenca online, seja no Instagram, Twitter, jogos como Free Fire ou qualquer plataforma digital.
            </p>
            <p className="hero__lead">
              Prepare-se para descobrir como pequenas mudanças visuais no seu texto podem gerar grandes impactos na forma como as pessoas percebem e interagem com seu conteúdo. Confira também nosso incrível <Link href="/">Espaco Invisivel</Link> para fazer com que essas fontes elegantes se destaquem!
            </p>

            <div className="hero__ctas">
              <a href="#tool" className="btn btn--primary">Gerar letras diferentes</a>
              <a href="#o-que-sao" className="btn btn--ghost">Saiba mais</a>
            </div>

            <div className="hero__stats" aria-label="Estatisticas">
              <div className="hero__stat"><strong>50+</strong><span>Estilos de Texto</span></div>
              <div className="hero__stat"><strong>100%</strong><span>Gratuito</span></div>
              <div className="hero__stat"><strong>0</strong><span>Instalacoes necessarias</span></div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TOOL — H2 */}
        <section id="tool" className="sec sec--white" aria-labelledby="tool-h2">
          <div className="wrap">
            <h2 id="tool-h2" className="sh2">Gerador de Estilos de Texto</h2>
            <p className="ssub">Digite seu texto, escolha seu estilo preferido e copie com um clique.</p>
            <TextStyleTool />
            <div className="note-box">
              <p><strong>Nota:</strong> As letras geradas por esta ferramenta sao caracteres Unicode padrao e podem ser usadas livremente em qualquer plataforma que suporte Unicode. No entanto, algumas plataformas podem ter politicas proprias sobre o uso de caracteres especiais em determinados contextos.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TOC */}
        <section className="sec sec--tint" aria-label="Indice do conteudo">
          <div className="wrap">
            <details className="toc">
              <summary className="toc__sum">
                <span>Indice</span>
                <span className="toc__arrow" aria-hidden="true">›</span>
              </summary>
              <nav aria-label="Indice da pagina">
                <ol className="toc__list">
                  <li><a href="#o-que-sao">O Que Sao Realmente &quot;Letras Diferentes&quot;?</a></li>
                  <li><a href="#como-funciona">Como Nosso Gerador de Letras Diferentes Funciona!</a></li>
                  <li><a href="#utilizando">Utilizando Nosso Gerador – Simples e Rapido</a></li>
                  <li><a href="#por-que-destaca">Por Que Nosso Gerador Se Destaca</a></li>
                  <li><a href="#onde-usar">Onde Usar Letras Diferentes?</a></li>
                  <li><a href="#exemplos">Exemplos de Transformacoes</a></li>
                  <li><a href="#dicas">Dicas Profissionais Para Uso Efetivo</a></li>
                  <li><a href="#tecnico">Questoes Tecnicas e Compatibilidade</a></li>
                  <li><a href="#por-que-escolher">Por Que Escolher Nosso Gerador?</a></li>
                  <li><a href="#faq">Perguntas Frequentes</a></li>
                </ol>
              </nav>
            </details>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ O QUE SAO — H2 */}
        <section id="o-que-sao" className="sec" aria-labelledby="oqs-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="oqs-h2" className="sh2">O Que Sao Realmente &quot;Letras Diferentes&quot;?</h2>
              <p>
                O que muitos chamam de &quot;fontes diferentes&quot; nao sao tecnicamente novas fontes, mas caracteres especiais Unicode que se parecem com nossas letras tradicionais. Estes simbolos fazem parte do padrao Unicode, que inclui milhares de caracteres de diversos alfabetos e sistemas de escrita do mundo todo.
              </p>

              {/* FIX 2: Replaced Tailwind wrapper div with a proper CSS class */}
              <figure className="prose-img">
                <Image
                  src="/Letras-Diferentes-e-Bonitas.webp"
                  alt="Letras Diferentes e Bonitas"
                  width={800}
                  height={630}
                  priority={true}
                />
              </figure>

              <p>
                Quando voce usa nosso gerador, seu texto normal e transformado em caracteres semelhantes de outros conjuntos Unicode, criando a aparencia de uma nova &quot;fonte&quot; sem realmente mudar a fonte em si. Isso significa que o texto estilizado pode ser copiado e colado em qualquer lugar que aceite texto – desde redes sociais ate jogos online.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ COMO FUNCIONA — H2 */}
        <section id="como-funciona" className="sec sec--tint" aria-labelledby="cf-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="cf-h2" className="sh2">Como Nosso Gerador de Letras Diferentes Funciona!</h2>
              <p>Nosso sistema avancado:</p>
              <ul className="slist">
                <li>Analisa cada caractere do seu texto original</li>
                <li>Mapeia esse caractere para equivalentes estilizados em diversos conjuntos Unicode</li>
                <li>Gera instantaneamente multiplas versoes do seu texto em diferentes estilos</li>
                <li>Preserva o significado original, apenas alterando a apresentacao visual</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ UTILIZANDO — H2 */}
        <section id="utilizando" className="sec" aria-labelledby="ut-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="ut-h2" className="sh2">Utilizando Nosso Gerador – Simples e Rapido</h2>
              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div>
                    <strong>Digite seu texto</strong>
                    <p>Digite seu texto na caixa principal do gerador</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div>
                    <strong>Veja as transformacoes</strong>
                    <p>Veja instantaneamente as transformacoes aparecerem em tempo real</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div>
                    <strong>Escolha seu estilo</strong>
                    <p>Escolha seu estilo preferido entre dezenas de opcoes unicas</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">4</span>
                  <div>
                    <strong>Copie e cole</strong>
                    <p>Copie com um clique e cole onde quiser</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POR QUE DESTACA — H2 */}
        <section id="por-que-destaca" className="sec sec--tint" aria-labelledby="pqd-h2">
          <div className="wrap">
            <h2 id="pqd-h2" className="sh2 tc">Por Que Nosso Gerador Se Destaca</h2>
            <p className="ssub tc">
              Descubra o que torna nosso gerador de letras diferentes a melhor escolha para transformar seus textos.
            </p>
            <div className="fgrid">
              <article className="fcard" aria-labelledby="f1">
                <div className="fcard__ico" aria-hidden="true">✦</div>
                <h3 id="f1">Maior biblioteca de estilos</h3>
                <p>Oferecemos mais de 50 estilos diferentes, desde gotico ate cursiva elegante, negrito, italico e muito mais.</p>
              </article>
              <article className="fcard" aria-labelledby="f2">
                <div className="fcard__ico" aria-hidden="true">✓</div>
                <h3 id="f2">Compatibilidade garantida</h3>
                <p>Testamos todos os caracteres nas principais plataformas para garantir que funcionem perfeitamente.</p>
              </article>
              <article className="fcard" aria-labelledby="f3">
                <div className="fcard__ico" aria-hidden="true">⚡</div>
                <h3 id="f3">Previa instantanea</h3>
                <p>Veja como ficara antes de copiar. Todas as transformacoes aparecem em tempo real.</p>
              </article>
              <article className="fcard" aria-labelledby="f4">
                <div className="fcard__ico" aria-hidden="true">∞</div>
                <h3 id="f4">Sem limitacao de caracteres</h3>
                <p>Transforme textos curtos ou longos sem restricoes. Use quanto quiser, quando quiser.</p>
              </article>
              <article className="fcard" aria-labelledby="f5">
                <div className="fcard__ico" aria-hidden="true">☁</div>
                <h3 id="f5">Funciona offline</h3>
                <p>Uma vez carregada, nossa ferramenta continua funcionando mesmo sem internet.</p>
              </article>
              <article className="fcard" aria-labelledby="f6">
                <div className="fcard__ico" aria-hidden="true">◑</div>
                <h3 id="f6">Modo escuro dedicado</h3>
                <p>Ative o modo escuro para uma experiencia mais confortavel, especialmente a noite.</p>
              </article>
              <article className="fcard" aria-labelledby="f7">
                <div className="fcard__ico" aria-hidden="true">⊙</div>
                <h3 id="f7">Copia com um clique</h3>
                <p>Basta clicar no botao copiar e seu texto estilizado esta pronto para colar em qualquer lugar.</p>
              </article>
              <article className="fcard" aria-labelledby="f8">
                <div className="fcard__ico" aria-hidden="true">◎</div>
                <h3 id="f8">100% Gratuito</h3>
                <p>Sem taxas ocultas, sem assinaturas, sem cadastro. Use nossa ferramenta livremente.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ ONDE USAR — H2 */}
        <section id="onde-usar" className="sec" aria-labelledby="ou-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="ou-h2" className="sh2">Onde Usar Letras Diferentes?</h2>

              {/* FIX 2 (second image): Replaced Tailwind wrapper div with CSS class */}
              <figure className="prose-img">
                <Image
                  src="/Letras-Diferentes.webp"
                  alt="Letras Diferentes"
                  width={800}
                  height={630}
                  priority={true}
                />
              </figure>

              <h3 className="sh3">Redes Sociais</h3>
              <ul className="slist">
                <li><strong>Instagram:</strong> Destaque sua bio, legendas e stories</li>
                <li><strong>TikTok:</strong> Titulos de videos que capturam atencao</li>
                <li><strong>Twitter:</strong> Tweets memoraveis que se destacam na timeline</li>
                <li><strong>Facebook:</strong> Postagens e titulos de eventos personalizados</li>
                <li><strong>LinkedIn:</strong> Destaque secoes especificas do seu perfil profissional</li>
              </ul>

              <h3 className="sh3">Games e Plataformas</h3>
              <ul className="slist">
                <li><strong>Free Fire:</strong> Crie nicks unicos e memoraveis</li>
                <li><strong>Minecraft:</strong> Personalize nomes de servidores e itens</li>
                <li><strong>Discord:</strong> Destaque-se em servidores com nomes de usuario estilizados</li>
                <li><strong>Twitch:</strong> Chame atencao nos chats com mensagens em estilos diferentes</li>
                <li><strong>Steam:</strong> Perfis com nomes que impressionam outros jogadores</li>
              </ul>

              <h3 className="sh3">Conteudo Digital</h3>
              <ul className="slist">
                <li><strong>YouTube:</strong> Titulos de videos e descricoes que chamam atencao</li>
                <li><strong>Sites e blogs:</strong> Cabecalhos e titulos diferenciados</li>
                <li><strong>Email marketing:</strong> Linhas de assunto que aumentam taxas de abertura</li>
                <li><strong>Apresentacoes:</strong> Slides com titulos memoraveis</li>
                <li><strong>Assinaturas digitais:</strong> Deixe sua marca em comunicacoes profissionais</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ EXEMPLOS — H2 */}
        <section id="exemplos" className="sec sec--tint" aria-labelledby="ex-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="ex-h2" className="sh2">Exemplos de Transformacoes</h2>
              <p>Veja como nosso gerador transforma o texto &quot;Letras Bonitas&quot; em diferentes estilos:</p>
            </div>
            <div className="tbl-wrap" role="region" aria-label="Tabela de exemplos de transformacoes" tabIndex={0}>
              <table className="dtbl">
                <caption>Exemplos de transformacoes de texto</caption>
                <thead>
                  <tr>
                    <th scope="col">Estilo</th>
                    <th scope="col">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  {transformationExamples.map(r => (
                    <tr key={r.style}>
                      <td>{r.style}</td>
                      <td className="example-text">{r.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ DICAS — H2 */}
        <section id="dicas" className="sec" aria-labelledby="dp-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="dp-h2" className="sh2">Dicas Profissionais Para Uso Efetivo</h2>

              <h3 className="sh3">Aumente Seu Engajamento</h3>
              <p>
                As letras diferentes capturam instantaneamente a atencao do leitor. Nossos estudos mostram que publicacoes com estilos de texto diferenciados recebem em media 37% mais engajamento.
              </p>

              <h3 className="sh3">Use Com Moderacao</h3>
              <p>Para manter a legibilidade, recomendamos usar letras diferenciadas em:</p>
              <ul className="slist">
                <li>Titulos e cabecalhos</li>
                <li>Frases curtas de destaque</li>
                <li>Nomes e assinaturas</li>
                <li>Chamadas para acao</li>
              </ul>
              <p>Evite usar em textos longos onde a legibilidade e essencial.</p>

              <h3 className="sh3">Combine Com Sua Identidade</h3>
              <p>
                Escolha estilos que complementem sua identidade visual ou pessoal. Estilos elegantes como a cursiva combinam com temas sofisticados, enquanto estilos mais expressivos como o gotico podem refletir personalidades criativas ou alternativas. Confira tambem nosso incrivel{" "}
                {/* FIX 3: Corrected broken internal link to match site structure */}
                <Link href="/espacos-invisiveis-em-nomes-de-usuario">10 maneiras criativas de usar espaços invisíveis</Link>{" "}
                para combinar com suas letras diferentes!
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TECNICO — H2 */}
        <section id="tecnico" className="sec sec--tint" aria-labelledby="tc-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="tc-h2" className="sh2">Questoes Tecnicas e Compatibilidade</h2>

              <h3 className="sh3">Por Que Alguns Caracteres Nao Aparecem?</h3>
              <p>
                Alguns dispositivos ou plataformas mais antigas podem nao suportar todos os caracteres Unicode. Nosso gerador mostra a previa de compatibilidade para as principais plataformas. Se um caractere nao aparecer corretamente, tente um estilo diferente.
              </p>

              <h3 className="sh3">Letras Diferentes e SEO</h3>
              <p>
                Para conteudo web que precisa ser otimizado para mecanismos de busca, use letras diferenciadas apenas em imagens ou elementos nao criticos para SEO, ja que os buscadores podem ter dificuldade em reconhecer esses caracteres especiais.
              </p>

              <h3 className="sh3">Acessibilidade</h3>
              <p>
                Leitores de tela podem ter dificuldade em interpretar corretamente caracteres Unicode especiais. Se a acessibilidade e importante para seu conteudo, use essas letras com moderacao e forneca alternativas em texto padrao. Confira também este incrível guia{" "}
                <Link href="/criar-nome-de-usuario-do-discord">usar espaços invisíveis nos nomes de usuário do Discord</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POR QUE ESCOLHER — H2 */}
        <section id="por-que-escolher" className="sec" aria-labelledby="pqe-h2">
          <div className="wrap">
            <div className="prose">
              <h2 id="pqe-h2" className="sh2">Por Que Escolher Nosso Gerador?</h2>
              <p>Diferente de outras ferramentas, nosso gerador de letras diferentes:</p>
              <ul className="slist">
                <li>Atualiza-se constantemente com novos estilos e caracteres</li>
                <li>Respeita a privacidade – nao armazenamos seu texto</li>
                <li>Funciona em qualquer dispositivo – desktop, tablet ou celular</li>
                <li>E completamente gratuito – sem limitacoes escondidas</li>
                <li>Nao requer cadastro – use instantaneamente</li>
              </ul>
            </div>

            <div className="cta-box">
              <p>Pronto para transformar seus textos?</p>
              <a href="#tool" className="btn btn--primary">Usar o Gerador Agora</a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POSTS SIMILARES */}
        <section className="sec sec--tint" aria-labelledby="nav-h2">
          <div className="wrap">
            <h2 id="nav-h2" className="sh2">Posts Similares</h2>
            <div className="bgrid">
              <article className="bcard">
                <span className="bcard__cat">Tutorial</span>
                <h3><Link href="/caracteres-invisiveis-tipos">Diferentes tipos de caracteres invisiveis: Quais usar e quando</Link></h3>
                <p>Descubra os diferentes tipos de caracteres invisiveis Unicode e aprenda quando usar cada um para obter os melhores resultados.</p>
                <Link href="/caracteres-invisiveis-tipos" className="bcard__more">Ler mais</Link>
              </article>
              <article className="bcard">
                <span className="bcard__cat">Solucao</span>
                <h3><Link href="/espacos-invisiveis-desaparecem">Porque e que os seus espacos invisiveis desaparecem em determinadas plataformas (e como corrigi-lo)</Link></h3>
                <p>Entenda por que seus espacos invisiveis podem sumir em certas plataformas e aprenda como resolver esse problema.</p>
                <Link href="/espacos-invisiveis-desaparecem" className="bcard__more">Ler mais</Link>
              </article>
              <article className="bcard">
                <span className="bcard__cat">Ferramenta</span>
                <h3><Link href="/">Gerador de Espaco Invisivel</Link></h3>
                <p>Use nosso gerador de espacos invisiveis para criar espacos em branco em nomes do Free Fire, Instagram e mais.</p>
                <Link href="/" className="bcard__more">Usar ferramenta</Link>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FAQ — H2 */}
        <section id="faq" className="sec" aria-labelledby="faq-h2">
          <div className="wrap">
            <h2 id="faq-h2" className="sh2 tc">Perguntas Frequentes (FAQs)</h2>
            <p className="ssub tc">Tire suas duvidas sobre letras diferentes e nosso gerador.</p>
            <div className="faqgrid">
              <details className="faqd">
                <summary className="faqd__q">
                  <span>O que sao letras diferentes?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Letras diferentes sao caracteres Unicode que se parecem com nossas letras tradicionais, mas tem estilos visuais unicos como gotico, cursiva, negrito e outros. Elas podem ser copiadas e coladas em qualquer lugar.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q">
                  <span>Posso usar letras diferentes no Instagram?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim! Letras diferentes podem ser usadas em biografias, legendas, stories e nomes de usuario do Instagram. Elas sao uma otima forma de personalizar seu perfil.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q">
                  <span>As letras diferentes funcionam no Free Fire?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim, voce pode usar letras diferentes para criar apelidos unicos e memoraveis no Free Fire e outros jogos como Minecraft, Fortnite e PUBG.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q">
                  <span>As letras diferentes afetam o SEO?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim, mecanismos de busca podem ter dificuldade em reconhecer caracteres Unicode especiais. Use letras diferenciadas apenas em elementos nao criticos para SEO, como imagens ou decoracoes visuais.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q">
                  <span>E seguro usar letras diferentes?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim, letras diferentes sao simples caracteres Unicode e sao completamente seguras para usar em qualquer plataforma. Nao sao virus nem malware.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q">
                  <span>Por que alguns caracteres nao aparecem no meu dispositivo?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Alguns dispositivos ou sistemas operacionais mais antigos podem nao ter todas as fontes Unicode instaladas. Tente atualizar seu sistema ou use um estilo diferente que seja mais compativel.</p></div>
              </details>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════════════════ FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer__in wrap">
          <div className="footer__brand">
            <img src="/logo.svg" alt="Espaco Invisivel Logo" className="logo-img" width="220" height="80" />
            <p>Gerador gratuito de espacos invisiveis e letras diferentes para jogos e redes sociais.</p>
            <div className="footer__soc">
              <a href="https://www.facebook.com/profile.php?id=61573868490259" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
              <a href="https://www.youtube.com/@espaco-invisivel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
              <a href="https://www.pinterest.com/espacoinvisivelhelp" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">pt</a>
            </div>
          </div>
          <nav className="footer__nav" aria-label="Links do rodape">
            <p className="footer__nt">Paginas</p>
            <ul>
              <li><Link href="/sobre-nos">Sobre Nos</Link></li>
              <li><Link href="/contacto">Contato</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/politica-de-privacidade">Politica de Privacidade</Link></li>
              <li><Link href="/termos-e-condicoes">Termos e Condicoes</Link></li>
              <li><Link href="/isencao-de-responsabilidade">Isencao de Responsabilidade</Link></li>
            </ul>
          </nav>
          <div className="footer__tools">
            <p className="footer__nt">Ferramentas</p>
            <ul>
              <li><Link href="/">Gerador de Espaco Invisivel</Link></li>
              <li><Link href="/letras-diferentes">Gerador de Letras Diferentes</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <p>© {new Date().getFullYear()} Espaco Invisivel. Todos os direitos reservados.</p>
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

        /* ── Layout ── */
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

        /* ══ LOGO ══ */
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
        .hero__orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
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
        .sec--white .sh2 { margin-bottom: 8px; }

        /* ── Note box ── */
        .note-box {
          background: rgba(26,86,219,.06);
          border: 1px solid rgba(26,86,219,.15);
          border-left: 4px solid var(--blue);
          border-radius: var(--r);
          padding: 18px 22px;
          margin-top: 28px;
        }
        .note-box p { margin: 0; font-size: .95rem; color: var(--txt2); }

        /* FIX 2: Prose image — replaces Tailwind flex/justify-center/my-8 */
        .prose-img {
          display: flex;
          justify-content: center;
          margin: 32px 0;
          border-radius: var(--r);
          overflow: hidden;
        }
        .prose-img img { border-radius: var(--r); width: 100%; height: auto; }

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
        /* FIX 4: Arrow character restored to proper Unicode → (was ASCII '->' which renders literally) */
        .slist li::before { content: '→'; color: var(--orange); font-weight: 700; flex-shrink: 0; margin-top: 2px; }

        /* Numbered steps */
        .steps { list-style: none; padding: 0; margin: 20px 0; display: flex; flex-direction: column; gap: 16px; }
        .steps li { display: flex; gap: 18px; align-items: flex-start; }
        .snum { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0; background: var(--navy); color: #fff; font-family: var(--fh); font-size: .95rem; font-weight: 800; }
        .steps li div { padding-top: 8px; color: var(--txt2); font-size: 1.02rem; }
        .steps li div strong { display: block; color: var(--navy); font-weight: 700; margin-bottom: 4px; font-size: 1.06rem; }
        .steps li div p { margin: 0; }

        /* ══ TABLE ══ */
        .tbl-wrap { overflow-x: auto; border-radius: var(--r); border: 1px solid var(--bdr); margin: 20px 0 28px; }
        .dtbl { width: 100%; border-collapse: collapse; font-size: .92rem; min-width: 300px; }
        .dtbl caption { padding: 10px 16px; text-align: left; font-size: .78rem; color: var(--muted); font-weight: 700; letter-spacing: .06em; text-transform: uppercase; border-bottom: 1px solid var(--bdr); background: #f8faff; }
        .dtbl th { background: var(--navy); color: rgba(255,255,255,.9); padding: 13px 16px; text-align: left; font-family: var(--fh); font-size: .85rem; white-space: nowrap; }
        .dtbl td { padding: 11px 16px; border-bottom: 1px solid var(--bdr); color: var(--txt2); }
        .dtbl tr:nth-child(even) td { background: #f6f9ff; }
        .dtbl tr:last-child td { border-bottom: none; }
        .dtbl tr:hover td { background: #eef2ff; }
        .dtbl .example-text { font-size: 1.1rem; }

        /* ══ FEATURES GRID ══ */
        .fgrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 36px; }
        .fcard { background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--rl); padding: 28px 24px; box-shadow: 0 2px 10px rgba(9,30,58,.06); transition: all var(--tr); }
        .fcard:hover { box-shadow: var(--shl); transform: translateY(-3px); border-color: rgba(26,86,219,.25); }
        .fcard__ico { font-size: 1.7rem; color: var(--orange); margin-bottom: 14px; display: block; }
        .fcard h3 { font-family: var(--fh); font-size: 1.02rem; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .fcard p { font-size: .9rem; color: var(--muted); margin: 0; }

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

        /* ══ RESPONSIVE ══ */
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
// app/blog/espacos-invisiveis-whatsapp/page.tsx
// Next.js 13+ App Router
//
// FIXES APPLIED:
// 1. <article> intro section → changed to <section> (article wrapping entire page sections causes layout/semantic issues)
// 2. TOC <details open> → removed `open` attr, hydration mismatch on SSR
// 3. Broken image → wrapped in a conditional comment explaining it needs to exist in /public/images/
// 4. aria-labelledby="blog-h1" on article → pointed to correct heading inside the section
// 5. All sections now consistently use <section> not <article>
// 6. Added missing `suppressHydrationWarning` to inputs (hamburger checkbox)

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dicas: Usar espaços invisíveis para WhatsApp mensagens 2026",
  description:
    "Pare de enviar textos desordenados no WhatsApp! Aprenda a Usar espaços invisíveis para WhatsApp para facilitar a leitura e se destacar na multidão.",
  keywords: [
    "espaços invisíveis","whatsapp","mensagens whatsapp",
    "formatação whatsapp","status em branco","caracteres invisíveis",
  ],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/espacos-invisiveis-whatsapp",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/espacos-invisiveis-whatsapp" },
  },
  openGraph: {
    title: "Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques",
    description:
      "Pare de enviar textos desordenados no WhatsApp! Aprenda a Usar espaços invisíveis para WhatsApp para facilitar a leitura e se destacar na multidão.",
    url: "https://espacoinvisivel.com.br/espacos-invisiveis-whatsapp",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "article",
  },
};

// ─── JSON-LD Article Schema ───────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques",
  description:
    "Pare de enviar textos desordenados no WhatsApp! Aprenda a Usar espaços invisíveis para WhatsApp para facilitar a leitura e se destacar na multidão.",
  author: { "@type": "Organization", name: "Espaço Invisível" },
  publisher: {
    "@type": "Organization",
    name: "Espaço Invisível",
    logo: { "@type": "ImageObject", url: "https://espacoinvisivel.com.br/logo.svg" },
  },
  datePublished: "2026-01-25",
  dateModified: "2026-01-25",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogEspacosInvisiveisWhatsApp() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
        rel="stylesheet"
      />

      {/* ═══════════════════════════════════════════════════ HEADER */}
      <header className="hdr" role="banner">
        <div className="wrap hdr__in">
          <Link href="/" className="hdr__logo" aria-label="Espaço Invisível – Página inicial">
            <img src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" width="220" height="80" />
          </Link>

          {/* FIX: suppressHydrationWarning stops browser extensions (password managers)
              injecting attributes like fdprocessedid and causing hydration errors */}
          <input
            type="checkbox"
            id="nav-chk"
            className="nav-chk"
            aria-hidden="true"
            suppressHydrationWarning
          />
          <label htmlFor="nav-chk" className="nav-ham" aria-label="Abrir menu de navegação">
            <span /><span /><span />
          </label>
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

      <main id="main-content">

        {/* ═══════════════════════════════════════════════════ BLOG HERO */}
        <section className="hero hero--blog" aria-labelledby="blog-h1">
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
          <div className="wrap hero__in">
            <span className="lbl">Dicas e truques</span>
            <h1 id="blog-h1" className="hero__h1">
              Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques
            </h1>
            <p className="hero__meta">
              <time dateTime="2026-01-25">25 de Janeiro, 2026</time> · 12 min de leitura
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ TOC
            FIX: Removed `open` attribute from <details>.
            Using `open` on SSR causes a React hydration mismatch because the server
            renders the element as open, but React's client reconciliation treats the
            boolean differently. Remove `open` to start closed (which is the correct
            default for a TOC — let the user choose to open it).
        */}
        <section className="sec sec--tint" aria-label="Índice do conteúdo">
          <div className="wrap">
            <details className="toc">
              <summary className="toc__sum">
                <span>📋 Índice</span>
                <span className="toc__arrow" aria-hidden="true">›</span>
              </summary>
              <nav aria-label="Índice da página">
                <ol className="toc__list">
                  <li><a href="#o-que-sao">O que são espaços invisíveis?</a></li>
                  <li><a href="#como-criar">Como criar e usar espaços invisíveis no WhatsApp?</a></li>
                  <li><a href="#usos-criativos">Usos criativos para espaços invisíveis</a></li>
                  <li><a href="#truques-divertidos">Truques divertidos com espaços invisíveis</a></li>
                  <li><a href="#problemas">Possíveis problemas e limitações</a></li>
                  <li><a href="#conclusao">Conclusão</a></li>
                  <li><a href="#faq">Perguntas frequentes</a></li>
                </ol>
              </nav>
            </details>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ INTRO
            FIX: Was <article className="sec sec--white"> — changed to <section>.
            Using <article> for a full-page content block is semantically incorrect
            (article is for self-contained content that makes sense in isolation, like
            a blog card). The entire page IS the article. The <section> here is just
            a styled content block inside it. The .sec CSS works on any element but
            keeping it as <section> is correct HTML.
        */}
        <section className="sec sec--white" aria-labelledby="intro-h2">
          <div className="wrap">
            <div className="prose">
              {/* Visually hidden heading for screen readers / aria-labelledby */}
              <h2 id="intro-h2" className="sr-only">Introdução</h2>

              <p className="lead">
                Você já viu um status do WhatsApp que parece completamente vazio? Ou se
                perguntou como algumas pessoas criam essas mensagens limpas e minimalistas
                com espaçamento extra? O segredo está nos{" "}
                <Link href="/">espaços invisíveis</Link> – caracteres em branco que ocupam
                espaço, mas não mostram nenhum texto visível. Esses caracteres ocultos podem
                dar um toque especial à sua experiência no WhatsApp, ajudando suas mensagens
                a se destacarem ou criando um visual minimalista.
              </p>

              {/*
                IMAGE NOTE:
                This image needs to exist at: public/images/espacos-invisiveis-whatsapp.jpg
                If the file doesn't exist yet, the <img> will show a broken icon.
                To add it: place your image at public/images/espacos-invisiveis-whatsapp.jpg
                Recommended size: 1200×675px (16:9), under 200KB (use webp for best performance).
                Rename the extension to .webp and update the src below when ready.
              */}
              <figure className="fig-img">
                <img
                  src="/espacos-invisiveis-para-WhatsApp-1.jpg" alt="espaços invisíveis para WhatsApp" width={600} height={400} loading="lazy"
                />
                <figcaption>espaços invisíveis para WhatsApp</figcaption>
              </figure>

              <p>
                Neste guia, mostraremos tudo o que você precisa saber sobre usar espaços
                invisíveis para WhatsApp – desde como criá-los até maneiras criativas de
                usá-los em suas mensagens diárias. Seja para criar um status em branco,
                mensagens mais bem formatadas ou apenas para se divertir com os amigos,
                esses truques simples darão um toque pessoal ao seu WhatsApp. Aprendendo a
                usar{" "}
                <Link href="/letras-diferentes">Letras Diferentes e Bonitas</Link>, você
                pode fazer com que seus nomes de usuário se destaquem.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ O QUE SÃO */}
        <section id="o-que-sao" className="sec" aria-labelledby="h2-oque">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-oque" className="sh2">O que são espaços invisíveis?</h2>
              <p>
                Espaços invisíveis (também chamados de caracteres em branco ou caracteres
                vazios) são caracteres Unicode especiais que ocupam espaço no texto, mas não
                exibem nenhuma marca visível. Ao contrário dos espaços comuns, que mostram
                uma pequena lacuna entre as palavras, esses caracteres parecem completamente
                vazios e ainda funcionam como texto.
              </p>
              <p>
                Esses caracteres especiais são provenientes do padrão Unicode, um sistema que
                define milhares de caracteres em diferentes idiomas e símbolos. Alguns desses
                caracteres foram criados para fins específicos de formatação ou para idiomas
                que precisam de espaçamento especial, mas se tornaram populares para criar
                efeitos visuais em aplicativos de mensagens como o WhatsApp.
              </p>
              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>
                  <strong>Saiba mais:</strong> Leia um guia detalhado sobre{" "}
                  <Link href="/diferentes-tipos-de-caracteres-invisiveis">
                    Diferentes tipos de caracteres invisíveis: Quais usar e quando
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ COMO CRIAR */}
        <section id="como-criar" className="sec sec--tint" aria-labelledby="h2-criar">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-criar" className="sh2">
                Como criar e usar espaços invisíveis no WhatsApp?
              </h2>
              <p>
                Colocar as mãos nesses caracteres invisíveis é mais fácil do que você imagina.
                Aqui estão os métodos mais confiáveis:
              </p>

              <h3 className="sh3">Método copiar e colar</h3>
              <p>
                A abordagem mais simples é copiar um caractere invisível e colá-lo onde for
                necessário. Aqui está um caractere em branco que você pode copiar:
              </p>
              <p>
                Basta destacar o que parece ser um espaço vazio entre esses colchetes{" "}
                <code>[ㅤ]</code> (na verdade, há um caractere invisível ali), copiá-lo e
                colá-lo no WhatsApp sempre que necessário.
              </p>

              <h3 className="sh3">Usando caracteres Unicode</h3>
              <p>
                Se quiser digitar espaços invisíveis diretamente, você pode usar os métodos
                de entrada Unicode:
              </p>
              <ul className="slist">
                <li>
                  <strong>No Android:</strong> mantenha pressionada a barra de espaço para
                  acessar caracteres especiais ou use um aplicativo de teclado Unicode
                </li>
                <li>
                  <strong>No iPhone:</strong> Instale um teclado Unicode na App Store
                </li>
                <li>
                  <strong>No desktop:</strong> Use códigos Alt ou aplicativos de mapa de
                  caracteres
                </li>
              </ul>

              <h3 className="sh3">Aplicativos e sites</h3>
              <p>Várias ferramentas podem gerar caracteres invisíveis para você:</p>
              <ul className="slist">
                <li>
                  Sites como &quot;Empty Characters&quot; (Caracteres vazios) ou &quot;Blank
                  Character Generator&quot; (Gerador de caracteres em branco)
                </li>
                <li>Aplicativos de teclado com suporte a Unicode</li>
                <li>
                  Ferramentas de formatação do WhatsApp que incluem opções de caracteres em
                  branco
                </li>
              </ul>
              <p>
                A maioria dos usuários acha o método de copiar e colar mais fácil, mas ter
                um aplicativo dedicado pode ser conveniente se você usar espaços invisíveis
                com frequência.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ USOS CRIATIVOS */}
        <section id="usos-criativos" className="sec" aria-labelledby="h2-usos">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-usos" className="sh2">Usos criativos para espaços invisíveis</h2>
              <p>
                Agora que você sabe como criar espaços invisíveis, aqui estão algumas
                maneiras criativas de usá-los:
              </p>

              <h3 className="sh3">Criação de atualizações de status em branco</h3>
              <p>Um dos usos mais populares é publicar uma atualização de status &quot;vazia&quot;:</p>
              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div>
                    <strong>Copie vários caracteres invisíveis</strong>
                    <p>Use nosso gerador ou copie o caractere entre colchetes.</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div>
                    <strong>Cole-os em seu campo de status do WhatsApp</strong>
                    <p>Abra o WhatsApp e vá para a seção de status.</p>
                  </div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div>
                    <strong>Publique o status</strong>
                    <p>
                      Isso cria uma aparência minimalista e limpa que se destaca entre as
                      atualizações de status com muito texto.
                    </p>
                  </div>
                </li>
              </ol>
              <p>
                Sua foto de perfil ainda aparecerá nas atualizações de status, mas sem
                nenhum texto.
              </p>

              <h3 className="sh3">Formatação de nomes de grupos</h3>
              <p>Deixe os nomes de seus grupos do WhatsApp com uma aparência mais limpa:</p>
              <ul className="slist">
                <li>Adicione espaços invisíveis entre as palavras para aumentar o espaçamento</li>
                <li>Crie um preenchimento ao redor de caracteres especiais ou emojis</li>
                <li>Crie designs de texto centralizados com espaços em ambos os lados</li>
              </ul>
              <p>
                Por exemplo, em vez de &quot;FamilyGroup2023&quot;, você pode espaçá-lo para
                que fique parecido com &quot;Family Group 2023&quot;, com caracteres invisíveis
                criando um espaçamento extra.
              </p>

              <h3 className="sh3">Como fazer as mensagens se destacarem</h3>
              <p>Use espaços invisíveis para formatar suas mensagens regulares:</p>
              <ul className="slist">
                <li>Criar quebras de parágrafo com espaçamento extra</li>
                <li>Indentar determinadas linhas de texto</li>
                <li>Separe seções de mensagens mais longas</li>
                <li>Adicione espaço para respirar ao redor de informações importantes</li>
              </ul>
              <p>
                Isso pode tornar suas mensagens mais longas muito mais fáceis de ler e
                ajudar a enfatizar pontos importantes.
              </p>

              <h3 className="sh3">Como criar espaço entre parágrafos</h3>
              <p>
                O WhatsApp normalmente remove as quebras de linha extras, mas os caracteres
                invisíveis podem ajudar a criar um verdadeiro espaçamento entre parágrafos:
              </p>
              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div><strong>Digite seu primeiro parágrafo</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div><strong>Pressione Enter/Return</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div><strong>Insira um caractere invisível</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">4</span>
                  <div><strong>Pressione Enter/Return novamente</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">5</span>
                  <div><strong>Inicie seu próximo parágrafo</strong></div>
                </li>
              </ol>
              <p>
                Isso cria um efeito de espaço duplo que torna as mensagens mais longas mais
                legíveis.
              </p>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>
                  <strong>Explore também:</strong>{" "}
                  <Link href="/biografias-do-instagram-espacos-invisiveis">
                    Como criar biografias do Instagram com o espaços invisíveis
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ TRUQUES DIVERTIDOS */}
        <section id="truques-divertidos" className="sec sec--tint" aria-labelledby="h2-truques">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-truques" className="sh2">Truques divertidos com espaços invisíveis</h2>
              <p>
                Além da formatação básica, aqui estão algumas maneiras divertidas de usar
                espaços invisíveis:
              </p>

              <h3 className="sh3">Mensagens ocultas</h3>
              <p>
                Crie mensagens &quot;ocultas&quot; colocando espaços invisíveis entre os
                caracteres visíveis:
              </p>
              <p>
                <code>T ㅤhㅤiㅤs ㅤlㅤoㅤoㅤkㅤs ㅤsㅤtㅤrㅤaㅤnㅤgㅤe</code>
              </p>
              <p>Isso cria um efeito incomum de alongamento que chama a atenção.</p>

              <h3 className="sh3">Indicadores de digitação falsos</h3>
              <p>
                Envie uma mensagem contendo apenas espaços invisíveis para fazer parecer que
                você está digitando algo sem realmente enviar texto legível. Isso pode ser
                útil quando você deseja confirmar o recebimento de uma mensagem sem enviar
                uma resposta adequada.
              </p>

              <h3 className="sh3">Listas com aparência limpa</h3>
              <p>Crie listas bem formatadas:</p>
              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div><strong>Comece com um número ou marcador</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div><strong>Adicione um espaço invisível após o número</strong></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div><strong>Escreva o item da lista</strong></div>
                </li>
              </ol>
              <p>
                Isso dá às suas listas uma aparência mais organizada com espaçamento
                consistente.
              </p>

              <h3 className="sh3">Perfis minimalistas</h3>
              <p>
                Combine espaços invisíveis com imagens de perfil mínimas para obter um perfil
                ultra-limpo:
              </p>
              <ul className="slist">
                <li>Use caracteres invisíveis na seção &quot;Sobre&quot;</li>
                <li>Crie um status em branco ou mínimo</li>
                <li>Use uma foto de perfil simples e minimalista</li>
              </ul>
              <p>Isso cria uma estética coesa e minimalista em todo o seu perfil.</p>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>
                  <strong>Leia também:</strong>{" "} Por que é que os seus?
                  <Link href="/espacos-invisiveis-desaparecem">espaços invisíveis desaparecem em determinadas plataformas</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ PROBLEMAS */}
        <section id="problemas" className="sec" aria-labelledby="h2-problemas">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-problemas" className="sh2">Possíveis problemas e limitações</h2>
              <p>
                Embora os espaços invisíveis possam ser divertidos, há algumas coisas que
                você deve ter em mente:
              </p>

              <h3 className="sh3">Compatibilidade de dispositivos</h3>
              <p>
                Nem todos os dispositivos exibem caracteres Unicode da mesma forma. O que
                parece ser um espaço invisível em seu telefone pode aparecer como uma pequena
                caixa ou outro símbolo no dispositivo de outra pessoa, especialmente em
                telefones ou computadores mais antigos.
              </p>

              <h3 className="sh3">Limites de caracteres</h3>
              <p>
                O WhatsApp tem limites de caracteres para status, mensagens e nomes de grupos.
                Os espaços invisíveis ainda contam para esses limites, portanto, o uso de
                muitos deles pode impedi-lo de incluir todo o texto desejado.
              </p>

              <h3 className="sh3">Confusão em potencial</h3>
              <p>
                O uso de muitos espaços invisíveis pode confundir seus contatos. Por exemplo,
                mensagens ou status completamente em branco podem fazer com que as pessoas
                pensem que há um problema técnico ou que estão perdendo alguma coisa.
              </p>
              <p>
                Para obter melhores resultados, use os espaços invisíveis com moderação e de
                forma intencional, em vez de usá-los em excesso.
              </p>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>
                  <strong>Confira também:</strong>{" "}
                  <Link href="/criar-nome-de-usuario-do-discord">
                    Como usar espaços invisíveis nos nomes de usuário e canais do Discord!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ CONCLUSÃO */}
        <section id="conclusao" className="sec sec--tint" aria-labelledby="h2-conclusao">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-conclusao" className="sh2">Conclusão</h2>
              <p>
                Os espaços invisíveis são uma maneira simples, mas eficaz, de dar um toque
                pessoal às suas mensagens do WhatsApp. Seja para criar um visual mais limpo,
                formatar melhor suas mensagens ou apenas se divertir com os amigos, esses
                caracteres ocultos oferecem muitas possibilidades criativas.
              </p>
              <p>Lembre-se destas dicas importantes:</p>
              <ul className="slist">
                <li>
                  <strong>Copie e cole</strong> os caracteres invisíveis para obter o método
                  mais fácil
                </li>
                <li>
                  <strong>Use-os com moderação</strong> para obter o melhor efeito
                </li>
                <li>
                  <strong>Esteja ciente</strong> de que eles podem ser exibidos de forma
                  diferente em outros dispositivos
                </li>
                <li>
                  <strong>Combine-os</strong> com outras técnicas de formatação para obter
                  mais opções criativas
                </li>
              </ul>
              <p>
                Com esses truques simples, você pode fazer com que suas mensagens e seu perfil
                do WhatsApp se destaquem de maneira sutil, mas perceptível. Boas mensagens!
              </p>

              <div className="cta-box">
                <p>Pronto para experimentar? Use nosso gerador gratuito!</p>
                <Link href="/" className="btn btn--primary">
                  Gerar Espaço Invisível
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ FAQ */}
        <section id="faq" className="sec" aria-labelledby="h2-faq">
          <div className="wrap">
            <h2 id="h2-faq" className="sh2 tc">Perguntas frequentes</h2>
            <p className="ssub tc">
              Respostas para as dúvidas mais comuns sobre espaços invisíveis no WhatsApp
            </p>
            <div className="faqgrid">

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Posso realmente enviar uma mensagem completamente em branco no WhatsApp?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a">
                  <p>
                    Sim! Você pode enviar mensagens que pareçam completamente em branco usando
                    caracteres Unicode invisíveis. Basta copiar esse caractere invisível [ㅤ]
                    e colá-lo no campo da mensagem. Você pode colá-lo várias vezes para criar
                    uma mensagem em branco mais longa.
                  </p>
                </div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Por que meus espaços invisíveis às vezes aparecem como caixas ou símbolos?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a">
                  <p>
                    Isso acontece porque nem todos os dispositivos e sistemas operacionais
                    suportam todos os caracteres Unicode da mesma forma. Dispositivos mais
                    antigos ou com fontes limitadas podem exibir caracteres desconhecidos como
                    caixas ou símbolos. Tente usar diferentes tipos de caracteres invisíveis
                    para encontrar um que funcione melhor em vários dispositivos.
                  </p>
                </div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Os espaços invisíveis contam para os limites de caracteres do WhatsApp?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a">
                  <p>
                    Sim, os espaços invisíveis são caracteres Unicode como qualquer outro,
                    portanto, eles contam para os limites de caracteres do WhatsApp. Isso
                    significa que você deve usá-los com moderação para não atingir o limite
                    de caracteres antes de terminar sua mensagem ou status.
                  </p>
                </div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Posso usar espaços invisíveis em nomes de grupos do WhatsApp?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a">
                  <p>
                    Sim! Você pode usar espaços invisíveis em nomes de grupos para criar
                    espaçamento extra entre palavras ou para centralizar o texto. Isso pode
                    dar ao nome do seu grupo uma aparência mais limpa e profissional.
                  </p>
                </div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Como faço para copiar um caractere invisível?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a">
                  <p>
                    A maneira mais fácil é usar nosso{" "}
                    <Link href="/">gerador de espaço invisível</Link>. Basta clicar no botão
                    para copiar o caractere para a área de transferência e, em seguida,
                    cole-o onde precisar no WhatsApp usando Ctrl+V (ou Command+V no Mac) ou
                    o menu de colar do seu dispositivo móvel.
                  </p>
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ POST NAV */}
        <section className="sec sec--tint" aria-label="Navegação entre posts">
          <div className="wrap">
            <h2 className="sh2">Navegação de Post</h2>
            <div className="post-nav">
              <Link href="/tipos-caracteres-invisiveis" className="post-nav__link">
                <span className="post-nav__label">← Post anterior</span>
                <span className="post-nav__title">
                  Diferentes tipos de caracteres invisíveis: Quais usar e quando
                </span>
              </Link>
              <Link href="/espacos-invisiveis-instagram" className="post-nav__link">
                <span className="post-nav__label">Próximo post →</span>
                <span className="post-nav__title">
                  Como criar biografias do Instagram com o Espaços Invisíveis!
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════ RELATED POSTS */}
        <section className="sec" aria-labelledby="h2-related">
          <div className="wrap">
            <h2 id="h2-related" className="sh2">Posts Similares</h2>
            <p className="ssub">
              Explore mais conteúdos sobre espaços invisíveis e formatação de texto
            </p>
            <div className="bgrid">

              <article className="bcard">
                <span className="bcard__cat">Discussões</span>
                <h3>
                  <Link href="/espacos-invisiveis-instagram">
                    Como criar biografias do Instagram com o Espaços Invisíveis!
                  </Link>
                </h3>
                <p>
                  Aprenda a usar espaços invisíveis para criar biografias do Instagram mais
                  limpas e organizadas.
                </p>
                <Link href="/espacos-invisiveis-instagram" className="bcard__more">
                  Ler mais →
                </Link>
              </article>

              <article className="bcard">
                <span className="bcard__cat">Dicas e truques</span>
                <h3>
                  <Link href="/maneiras-criativas-espacos-invisiveis">
                    10 maneiras criativas de usar espaços invisíveis em nomes de usuário e mídias sociais
                  </Link>
                </h3>
                <p>
                  Descubra formas criativas de usar caracteres invisíveis para personalizar
                  seu perfil nas redes sociais.
                </p>
                <Link href="/maneiras-criativas-espacos-invisiveis" className="bcard__more">
                  Ler mais →
                </Link>
              </article>

              <article className="bcard">
                <span className="bcard__cat">Ferramentas</span>
                <h3>
                  <Link href="/espacos-invisiveis-discord">
                    Como usar espaços invisíveis em nomes de usuário e canais do Discord!
                  </Link>
                </h3>
                <p>
                  Um guia completo para usar espaços invisíveis no Discord para criar nomes
                  de usuário únicos.
                </p>
                <Link href="/espacos-invisiveis-discord" className="bcard__more">
                  Ler mais →
                </Link>
              </article>

            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════════════ FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer__in wrap">
          <div className="footer__brand">
            <img src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" width="220" height="80" />
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

      {/* ═══════════════════════════════════════════════════ GLOBAL STYLES */}
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

        /* FIX: screen-reader-only utility — hides the intro <h2> visually
           but keeps it available for aria-labelledby and screen readers */
        .sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }

        /* ── Layout ── */
        .wrap  { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .prose { max-width: 860px; }
        .tc    { text-align: center; }
        .lead  { font-size: 1.15rem; color: var(--txt); line-height: 1.8; margin-bottom: 24px; }

        /* ── Typography ── */
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

        /* ══ LOGO ══ */
        .hdr__logo .logo-img     { height: 44px; width: auto; display: block; }
        .footer__brand .logo-img { height: 40px; width: auto; display: block; margin-bottom: 14px; }

        /* ══ HEADER ══ */
        .hdr { position: sticky; top: 0; z-index: 200; background: rgba(9,30,58,.97); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,.07); }
        .hdr__in { display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 20px; }
        .hdr__nav ul { display: flex; list-style: none; gap: 4px; }
        .hdr__nav a { display: block; padding: 7px 15px; border-radius: 9px; color: rgba(255,255,255,.8); font-size: .92rem; font-weight: 500; text-decoration: none; transition: all var(--tr); }
        .hdr__nav a:hover { background: rgba(255,255,255,.1); color: #fff; }
        .nav-chk { display: none; }
        .nav-ham { display: none; flex-direction: column; justify-content: center; gap: 5px; cursor: pointer; padding: 8px; z-index: 210; }
        .nav-ham span { display: block; width: 24px; height: 2px; background: rgba(255,255,255,.85); border-radius: 2px; transition: all var(--tr); }

        /* ══ HERO ══ */
        .hero { position: relative; overflow: hidden; background: linear-gradient(145deg,#060f24 0%,#0c2660 55%,#0e3590 100%); color: white; padding: 88px 0 96px; }
        .hero--blog { padding: 64px 0 56px; }
        .hero__orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
        .hero__orb--1 { width: 560px; height: 560px; background: rgba(26,86,219,.28); top: -160px; right: -80px; }
        .hero__orb--2 { width: 440px; height: 440px; background: rgba(240,90,26,.17); bottom: -130px; left: -60px; }
        .hero__in { position: relative; z-index: 1; }
        .hero__h1 { font-family: var(--fh); font-weight: 800; color: #fff; line-height: 1.15; font-size: clamp(1.8rem, 3.8vw, 2.8rem); margin-bottom: 16px; max-width: 900px; }
        .hero__meta { font-size: .95rem; color: rgba(255,255,255,.65); }

        /* ══ SECTIONS ══ */
        .sec        { padding: 80px 0; background: var(--bg); }
        .sec--white { background: var(--surf); }
        .sec--tint  { background: var(--bgtint); }

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
        .fig-img{margin:28px 0;border-radius:var(--rl);overflow:hidden;border:1px solid var(--bdr);box-shadow:var(--sh)}
        .fig-img img{width:100%;height:auto;display:block}
        .fig-img figcaption{padding:12px 16px;font-size:.88rem;color:var(--muted);background:var(--bgtint);text-align:center}            
        .fig-img{margin:28px 0;border-radius:var(--rl);overflow:hidden;border:1px solid var(--bdr);box-shadow:var(--sh)} .fig-img figcaption{padding:12px 16px;font-size:.88rem;color:var(--muted);background:var(--bgtint);text-align:center}

        /* ══ PROSE ══ */
        .sec a { color: var(--blue); font-weight: 500; }
        .sec a:hover { text-decoration: underline; }

        /* Figure / Images */
        .fig-img { margin: 28px 0; border-radius: var(--rl); overflow: hidden; border: 1px solid var(--bdr); box-shadow: var(--sh); }
        .fig-img img { width: 100%; height: auto; display: block; }
        .fig-img figcaption { padding: 12px 16px; font-size: .88rem; color: var(--muted); background: var(--bgtint); text-align: center; }

        /* Lists */
        .slist { list-style: none; padding: 0; margin: 16px 0 24px; }
        .slist li { display: flex; gap: 13px; align-items: flex-start; padding: 13px 0; border-bottom: 1px solid var(--bdr); color: var(--txt2); font-size: 1.02rem; }
        .slist li:last-child { border-bottom: none; }
        .slist li::before { content: '→'; color: var(--orange); font-weight: 700; flex-shrink: 0; margin-top: 2px; }

        /* Steps */
        .steps { list-style: none; padding: 0; margin: 20px 0; display: flex; flex-direction: column; gap: 16px; }
        .steps li { display: flex; gap: 18px; align-items: flex-start; }
        .snum { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0; background: var(--navy); color: #fff; font-family: var(--fh); font-size: .95rem; font-weight: 800; }
        .steps li div { padding-top: 8px; color: var(--txt2); font-size: 1.02rem; }
        .steps li div strong { display: block; color: var(--navy); font-weight: 700; margin-bottom: 4px; font-size: 1.06rem; }
        .steps li div p { margin: 0; }

        /* Tip */
        .tip { display: flex; gap: 14px; align-items: flex-start; background: rgba(240,90,26,.07); border: 1px solid rgba(240,90,26,.2); border-radius: var(--r); padding: 18px 22px; margin-top: 28px; margin-bottom: 8px; }
        .tip__ico { font-size: 1.4rem; flex-shrink: 0; margin-top: -2px; }
        .tip p { margin: 0; font-size: .97rem; color: var(--txt2); }

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

        /* ══ POST NAV ══ */
        .post-nav { display: flex; gap: 20px; margin-top: 20px; }
        .post-nav__link { display: block; flex: 1; padding: 24px 28px; background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--r); text-decoration: none; transition: all var(--tr); }
        .post-nav__link:hover { box-shadow: var(--shl); transform: translateY(-2px); border-color: var(--blue); }
        .post-nav__label { display: block; font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--orange); margin-bottom: 8px; }
        .post-nav__title { font-family: var(--fh); font-size: 1.05rem; font-weight: 700; color: var(--navy); line-height: 1.35; }

        /* ══ BLOG CARDS ══ */
        .bgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 36px; }
        .bcard { background: var(--surf); border: 1px solid var(--bdr); border-radius: var(--rl); padding: 30px 28px; box-shadow: 0 2px 10px rgba(9,30,58,.06); transition: all var(--tr); display: flex; flex-direction: column; }
        .bcard:hover { box-shadow: var(--shl); transform: translateY(-3px); }
        .bcard__cat { display: inline-block; font-size: .7rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: var(--orange); background: rgba(240,90,26,.1); padding: 3px 11px; border-radius: 100px; margin-bottom: 14px; width: fit-content; }
        .bcard h3 { font-family: var(--fh); font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; line-height: 1.35; }
        .bcard h3 a { color: var(--navy); text-decoration: none; }
        .bcard h3 a:hover { color: var(--blue); }
        .bcard p { font-size: .93rem; color: var(--muted); flex: 1; margin-bottom: 18px; }
        .bcard__more { font-size: .9rem; font-weight: 700; color: var(--orange); text-decoration: none; margin-top: auto; }
        .bcard__more:hover { text-decoration: underline; }

        /* ══ FOOTER ══ */
        .footer { background: #060e1f; color: rgba(255,255,255,.6); }
        .footer__in { display: grid; grid-template-columns: 2fr 1.2fr 1.2fr; gap: 60px; padding-top: 64px; padding-bottom: 52px; }
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
          .wrap  { padding: 0 36px; }
          .bgrid { grid-template-columns: repeat(2,1fr); }
        }
        @media(max-width:900px){
          .wrap  { padding: 0 28px; }
          .bgrid { grid-template-columns: 1fr; }
          .footer__in { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer__brand { grid-column: 1/-1; }
          .hero--blog { padding: 52px 0 44px; }
        }
        @media(max-width:680px){
          .wrap  { padding: 0 18px; }
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
          .hero--blog { padding: 44px 0 36px; }
          .hero__h1  { font-size: clamp(1.6rem, 5vw, 2.1rem); }
          .sec       { padding: 52px 0; }
          .sh2       { font-size: clamp(1.6rem, 5vw, 1.9rem); }
          .sh3       { font-size: clamp(1.1rem, 4vw, 1.3rem); }
          .toc__sum  { padding: 16px 20px; font-size: .97rem; }
          .toc__list { padding: 8px 20px 20px 40px; }
          .cta-box   { flex-direction: column; text-align: center; }
          .cta-box .btn { width: 100%; }
          .post-nav  { flex-direction: column; }
          .footer__in { grid-template-columns: 1fr; gap: 30px; padding-top: 48px; padding-bottom: 36px; }
          .faqd__q   { font-size: .98rem; padding: 16px 18px; }
          .faqd__a   { padding: 0 18px 16px; }
          .snum      { width: 32px; height: 32px; font-size: .88rem; }
          .steps li  { gap: 12px; }
        }
        @media(max-width:480px){
          .wrap { padding: 0 14px; }
        }
        @media(max-width:360px){
          .hero__h1 { font-size: 1.5rem; }
          .sh2      { font-size: 1.45rem; }
        }
      `}</style>
    </>
  );
}
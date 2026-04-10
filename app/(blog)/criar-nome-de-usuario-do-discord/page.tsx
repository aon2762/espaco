// app/blog/criar-nome-de-usuario-do-discord/page.tsx
// Next.js 13+ App Router

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Use espaços invisíveis nos nomes de usuário do Discord 2026",
  description:
    "Saiba como use espaços invisíveis nos nomes de usuário do Discord e canais para criar perfis de jogo mais limpos e organizar seus servidores.",
  keywords: [
    "espaços invisíveis discord","nome de usuário discord","canais discord",
    "organizar servidor discord","caracteres invisíveis discord","formatação discord",
  ],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/criar-nome-de-usuario-do-discord",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/criar-nome-de-usuario-do-discord" },
  },
  openGraph: {
    title: "Use espaços invisíveis nos nomes de usuário do Discord 2026",
    description: "Saiba como use espaços invisíveis nos nomes de usuário do Discord e canais para criar perfis de jogo mais limpos e organizar seus servidores.",
    url: "https://espacoinvisivel.com.br/criar-nome-de-usuario-do-discord",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "article",
  },
};

// ─── Schemas ──────────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como usar espaços invisíveis em nomes de usuário e canais do Discord!",
  description: "Saiba como use espaços invisíveis nos nomes de usuário do Discord e canais para criar perfis de jogo mais limpos e organizar seus servidores.",
  author: { "@type": "Organization", name: "Espaço Invisível" },
  publisher: { "@type": "Organization", name: "Espaço Invisível", logo: { "@type": "ImageObject", url: "https://espacoinvisivel.com.br/logo.svg" } },
  datePublished: "2026-01-25",
  dateModified: "2026-01-25",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Por que meus espaços invisíveis desaparecem quando eu salvo meu nome de usuário do Discord?",
      acceptedAnswer: { "@type": "Answer", text: "O Discord filtra certos caracteres invisíveis, especialmente em nomes de usuário e nomes de canal. Tente usar o caractere em branco do Braille (U+2800), pois ele é exibido de forma mais confiável." },
    },
    {
      "@type": "Question",
      name: "Os outros usuários do Discord podem saber que estou usando caracteres invisíveis?",
      acceptedAnswer: { "@type": "Answer", text: "Na maioria dos casos, não — a menos que copiem seu nome e o analisem com ferramentas Unicode. O visual que você cria é o que os outros usuários verão." },
    },
    {
      "@type": "Question",
      name: "Os espaços invisíveis funcionarão da mesma forma no aplicativo móvel do Discord?",
      acceptedAnswer: { "@type": "Answer", text: "Nem sempre. Algumas plataformas móveis renderizam caracteres Unicode de forma diferente do desktop. Sempre teste em ambas as plataformas antes de finalizar sua formatação." },
    },
  ],
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
          <li><Link href="/contato">Contato</Link></li>
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
          <li><Link href="/contato">Contato</Link></li>
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

export default function BlogDiscord() {
  return (
    <>
      <Script id="art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="hero hero--blog" aria-labelledby="blog-h1">
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
          <div className="wrap hero__in">
            <span className="lbl">Discord · Jogos</span>
            <h1 id="blog-h1" className="hero__h1">
              Como usar espaços invisíveis em nomes de usuário e canais do Discord!
            </h1>
            <p className="hero__meta">
              <time dateTime="2026-01-25">25 de Janeiro, 2026</time> · 15 min de leitura
            </p>
          </div>
        </section>

        {/* ── TOC ── */}
        <section className="sec sec--tint" aria-label="Índice do conteúdo">
          <div className="wrap">
            <details className="toc">
              <summary className="toc__sum">
                <span>📋 Índice</span>
                <span className="toc__arrow" aria-hidden="true">›</span>
              </summary>
              <nav aria-label="Índice da página">
                <ol className="toc__list">
                  <li><a href="#por-que-usar">Por que usar espaços invisíveis no Discord</a></li>
                  <li><a href="#adicionar-nome">Como adicionar espaços invisíveis ao seu nome de usuário do Discord</a></li>
                  <li><a href="#organizacao-servidor">Uso de personagens invisíveis para a organização do servidor do Discord</a></li>
                  <li><a href="#truques-avancados">Truques avançados de formatação do Discord</a></li>
                  <li><a href="#solucao-problemas">Solução de problemas comuns</a></li>
                  <li><a href="#conclusao">Conclusão</a></li>
                  <li><a href="#faq">Perguntas frequentes</a></li>
                </ol>
              </nav>
            </details>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="sec sec--white" aria-labelledby="intro-lbl">
          <div className="wrap">
            <div className="prose">
              <h2 id="intro-lbl" className="sr-only">Introdução</h2>
              <p className="lead">
                Você já se perguntou como alguns usuários do Discord têm aqueles nomes de usuário elegantes e minimalistas com espaçamento perfeito? Ou como os melhores servidores de jogos têm aquelas listas de canais limpas e organizadas com divisores invisíveis? O segredo está nos <Link href="/">espaços invisíveis</Link> – caracteres especiais que ocupam espaço na tela, mas não são vistos.
              </p>
              <figure className="fig-img">
                <Image src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord.webp" alt="Como usar espaços invisíveis em nomes de usuário e canais do Discord" width={800} height={600} loading="lazy" />
                <figcaption>Como usar espaços invisíveis em nomes de usuário e canais do Discord</figcaption>
              </figure>
              <p>
                Os espaços invisíveis se tornaram incrivelmente populares nas comunidades do Discord, especialmente entre os jogadores que adoram personalizar todos os aspectos de sua presença digital. Neste guia, você aprenderá exatamente como usar espaços invisíveis nos nomes de usuário do Discord para elevar o nível de sua presença. Você também deve aprender a usar <Link href="/letras-diferentes">Letras Diferentes e Bonitas</Link> e fazer com que seus nomes de usuário se destaquem.
              </p>
            </div>
          </div>
        </section>

        {/* ── H2: Por que usar ── */}
        <section id="por-que-usar" className="sec" aria-labelledby="h2-porque">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-porque" className="sh2">Por que usar espaços invisíveis no Discord</h2>
              <figure className="fig-img">
                <Image src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-1.webp" alt="Como usar espaços invisíveis em nomes de usuário e canais do Discord" width={300} height={300} loading="lazy" />
                <figcaption>Como usar espaços invisíveis em nomes de usuário e canais do Discord - 1</figcaption>
              </figure>

              <h3 className="sh3">Criação de perfis de jogos mais limpos e minimalistas</h3>
              <p>
                A comunidade de jogos valoriza uma estética limpa e minimalista. Os espaços invisíveis permitem que você crie nomes de usuário com espaçamento perfeito entre caracteres ou palavras, sem a aparência desajeitada dos espaços regulares. Isso cria uma sensação mais refinada e personalizada para sua identidade de jogo.
              </p>
              <p>
                Por exemplo, em vez de "GamingMaster123", você pode usar espaços invisíveis para criar "GamingMasterㅤ1ㅤ2ㅤ3", em que os espaços são realmente invisíveis, dando ao seu nome uma aparência elegante e flutuante.
              </p>

              <h3 className="sh3">Organização de servidores e canais de jogos de forma mais eficaz</h3>
              <p>Se você administra um servidor de jogos com várias categorias de jogos, os espaços invisíveis são ferramentas essenciais. Eles permitem que você:</p>
              <ul className="slist">
                <li>Criar intervalos visuais entre diferentes seções de jogos</li>
                <li>Agrupar canais relacionados de forma mais clara</li>
                <li>Adicionar canais &quot;espaçadores&quot; que funcionam como cabeçalhos de seção</li>
                <li>Tornar a navegação no canal mais intuitiva para novos membros</li>
              </ul>
              <p>
                Muitos dos principais servidores de jogos usam espaços invisíveis para transformar listas de canais desordenadas em menus organizados e fáceis de navegar. Leia também: <Link href="/espacos-invisiveis-para-whatsapp">Como usar espaços invisíveis em nomes de usuário e mídias sociais</Link>.
              </p>

              <h3 className="sh3">Destaque-se nas comunidades de jogos</h3>
              <p>
                Em jogos populares com milhares de jogadores, ter um nome de usuário diferenciado ajuda a ser reconhecido. Os espaços invisíveis criam uma formatação exclusiva que chama a atenção sem ser chamativa ou incômoda.
              </p>
              <p>
                Jogadores competitivos e streamers costumam usar essas técnicas para tornar seus nomes instantaneamente reconhecíveis e, ao mesmo tempo, manter uma aparência limpa e profissional.
              </p>

              <h3 className="sh3">Criação de layouts de servidor visualmente atraentes</h3>
              <p>Além da simples organização, os espaços invisíveis permitem layouts de servidor criativos que melhoram a experiência geral do usuário. As comunidades de jogos podem criar:</p>
              <ul className="slist">
                <li>Divisores limpos entre as seções</li>
                <li>Listas de canais equilibradas e simétricas</li>
                <li>Hierarquias visuais que tornam a navegação intuitiva</li>
                <li>Formatação personalizada que corresponda à sua marca de jogos</li>
              </ul>
              <p>Essas sutis melhorias no design fazem uma enorme diferença na aparência polida e profissional da sua comunidade de jogos.</p>
            </div>
          </div>
        </section>

        {/* ── H2: Como adicionar ao nome ── */}
        <section id="adicionar-nome" className="sec sec--tint" aria-labelledby="h2-nome">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-nome" className="sh2">Como adicionar espaços invisíveis ao seu nome de usuário do Discord</h2>
              <figure className="fig-img">
                <Image src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-3.webp" alt="Como usar espaços invisíveis em nomes de usuário e canais do Discord - 3" width={300} height={300} loading="lazy" />
                <figcaption>Como usar espaços invisíveis em nomes de usuário e canais do Discord - 3</figcaption>
              </figure>

              <h3 className="sh3">Instruções passo a passo</h3>
              <ol className="steps">
                <li><span className="snum" aria-hidden="true">1</span><div><strong>Copie um caractere invisível</strong><p>Use nosso Gerador de Espaço Invisível para copiar o espaço de largura zero ou o caractere Hangul Filler.</p></div></li>
                <li><span className="snum" aria-hidden="true">2</span><div><strong>Abra o Discord</strong><p>Vá para Configurações do usuário (o ícone de engrenagem próximo ao seu nome).</p></div></li>
                <li><span className="snum" aria-hidden="true">3</span><div><strong>Clique em &quot;Edit&quot; ao lado do seu nome de usuário</strong></div></li>
                <li><span className="snum" aria-hidden="true">4</span><div><strong>Cole o caractere invisível</strong><p>Insira onde você deseja que o espaçamento apareça.</p></div></li>
                <li><span className="snum" aria-hidden="true">5</span><div><strong>Clique em &quot;Save&quot; para atualizar seu nome de usuário</strong></div></li>
              </ol>
              <p>Lembre-se de que o Discord limita a frequência com que você pode alterar seu nome de usuário, portanto, planeje seu design cuidadosamente antes de salvá-lo.</p>

              <h3 className="sh3">Como copiar e colar caracteres invisíveis</h3>
              <p>Como não é possível digitar caracteres invisíveis diretamente, você precisará copiá-los e colá-los. Aqui estão as fontes confiáveis:</p>
              <ul className="slist">
                <li>Nosso <Link href="/">Gerador de Espaço Invisível</Link> — a fonte mais fácil e confiável</li>
                <li>Sites de caracteres Unicode</li>
                <li>Aplicativos de mapa de caracteres em seu computador</li>
                <li>Arquivos de texto com caracteres invisíveis pré-salvos</li>
              </ul>
              <p>Sempre teste seus caracteres invisíveis em uma mensagem do Discord antes de aplicá-los ao seu nome de usuário para garantir que eles funcionem conforme o esperado.</p>

              <h3 className="sh3">Como criar nomes espaçados para a estética do jogo</h3>
              <p>Muitos gamers usam espaços invisíveis para criar efeitos de texto &quot;flutuante&quot;:</p>
              <div className="tip">
                <span className="tip__ico" aria-hidden="true">🎮</span>
                <p><strong>Exemplo:</strong> <code>SㅤnㅤiㅤpㅤeㅤrㅤEㅤlㅤiㅤtㅤe</code> — Onde cada letra parece flutuar de forma independente. Isso cria uma aparência distinta e minimalista que se destaca em lobbies de jogos e servidores do Discord.</p>
              </div>

              <h3 className="sh3">Erros comuns e como evitá-los</h3>
              <ul className="slist">
                <li>Usar caracteres que o Discord filtra</li>
                <li>Criar nomes que são muito difíceis de mencionar</li>
                <li>Uso excessivo de caracteres invisíveis, dificultando a marcação de seu nome</li>
                <li>Usar caracteres que são exibidos de forma diferente nos dispositivos</li>
              </ul>
              <p>Sempre teste o formato do seu nome de usuário em um canal privado antes de finalizá-lo.</p>

              <h3 className="sh3">Instruções para dispositivos móveis e computadores</h3>
              <div className="tip">
                <span className="tip__ico" aria-hidden="true">📱</span>
                <div>
                  <p><strong>No celular:</strong></p>
                  <ul className="slist">
                    <li>Toque em sua foto de perfil no canto inferior direito</li>
                    <li>Toque no seu nome de usuário atual e no ícone de edição</li>
                    <li>Cole seus caracteres invisíveis e toque em &quot;Save&quot;</li>
                  </ul>
                </div>
              </div>
              <p>
                As telas dos dispositivos móveis podem renderizar alguns caracteres invisíveis de forma diferente do desktop, portanto, teste em ambas as plataformas, se possível. Confira o artigo abrangente sobre <Link href="/diferentes-tipos-de-caracteres-invisiveis">Diferentes tipos de caracteres invisíveis</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ── H2: Organização do servidor ── */}
        <section id="organizacao-servidor" className="sec" aria-labelledby="h2-servidor">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-servidor" className="sh2">Uso de personagens invisíveis para a organização do servidor do Discord</h2>
              <figure className="fig-img">
                <Image src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-2.webp" alt="Como usar espaços invisíveis em nomes de usuário e canais do Discord - 2" width={300} height={300} loading="lazy" />
                <figcaption>Como usar espaços invisíveis em nomes de usuário e canais do Discord - 2</figcaption>
              </figure>

              <h3 className="sh3">Criação de canais divisores &quot;em branco&quot; para categorias de jogos</h3>
              <p>Os canais divisores ajudam a organizar grandes servidores de jogos com várias categorias:</p>
              <ol className="steps">
                <li><span className="snum" aria-hidden="true">1</span><div><strong>Crie um novo canal de texto</strong></div></li>
                <li><span className="snum" aria-hidden="true">2</span><div><strong>Nomeie-o com o caractere em branco do Braille (U+2800)</strong></div></li>
                <li><span className="snum" aria-hidden="true">3</span><div><strong>Defina as permissões para que ninguém possa postar nele</strong></div></li>
                <li><span className="snum" aria-hidden="true">4</span><div><strong>Posicione-o entre as categorias de jogos</strong></div></li>
              </ol>
              <p>Esses divisores criam uma separação visual entre as seções sem sobrecarregar o servidor.</p>

              <h3 className="sh3">Criação de cabeçalhos invisíveis entre grupos de jogos</h3>
              <p>Para obter uma aparência mais estruturada, crie canais de cabeçalho:</p>
              <ol className="steps">
                <li><span className="snum" aria-hidden="true">1</span><div><strong>Crie um novo canal de texto</strong></div></li>
                <li><span className="snum" aria-hidden="true">2</span><div><strong>Nomeie-o com símbolos e espaços invisíveis</strong><p>Exemplo: <code>⬛ ⬛ FPS GAMES ⬛ ⬛</code></p></div></li>
                <li><span className="snum" aria-hidden="true">3</span><div><strong>Use as permissões do canal para torná-lo somente para visualização</strong></div></li>
                <li><span className="snum" aria-hidden="true">4</span><div><strong>Posicione-o acima dos canais de jogos relacionados</strong></div></li>
              </ol>

              <h3 className="sh3">Organização de canais de voz por tipo de jogo com espaçamento limpo</h3>
              <p>Os canais de voz também se beneficiam do espaçamento invisível:</p>
              <ul className="slist">
                <li>Agrupar canais de voz de jogos semelhantes</li>
                <li>Adicione canais divisores entre diferentes tipos de jogos</li>
                <li>Use padrões de espaçamento consistentes para cada categoria</li>
                <li>Considere a possibilidade de codificar os grupos de canais por cores para maior clareza</li>
              </ul>

              <h3 className="sh3">Configuração de hierarquias de funções esteticamente agradáveis</h3>
              <p>As funções também podem ser organizadas com espaços invisíveis:</p>
              <ul className="slist">
                <li>Criar funções com espaços invisíveis em seus nomes</li>
                <li>Use-os para criar intervalos visuais na lista de membros</li>
                <li>Crie hierarquias de funções que sejam exibidas de forma limpa na barra lateral</li>
                <li>Considere como as funções aparecerão quando mencionadas no bate-papo</li>
              </ul>
              <p>
                Funções bem organizadas facilitam o gerenciamento de permissões e a visualização rápida de quem joga quais jogos. Você também deve aprender a <Link href="/biografias-do-instagram-espacos-invisiveis">criar biografias no Instagram com o Espaços Invisíveis</Link> e aprimorar sua presença na mídia social.
              </p>
            </div>
          </div>
        </section>

        {/* ── H2: Truques avançados ── */}
        <section id="truques-avancados" className="sec sec--tint" aria-labelledby="h2-truques">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-truques" className="sh2">Truques avançados de formatação do Discord</h2>
              <figure className="fig-img">
                <Image src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-4.webp" alt="Como usar espaços invisíveis em nomes de usuário e canais do Discord - 4" width={300} height={300} loading="lazy" />
                <figcaption>Como usar espaços invisíveis em nomes de usuário e canais do Discord - 4</figcaption>
              </figure>

              <h3 className="sh3">Combinação de espaços invisíveis com emojis para servidores de jogos</h3>
              <p>Emojis e espaços invisíveis funcionam perfeitamente juntos para criar designs atraentes em servidores de jogos:</p>
              <ul className="slist">
                <li>Crie um padrão usando emojis relacionados a jogos (🎮 🕹️ 🎯)</li>
                <li>Coloque espaços invisíveis entre cada emoji para obter um espaçamento perfeito</li>
                <li>Use essa combinação nos nomes dos canais para criar divisores temáticos</li>
                <li>Incorpore os emojis personalizados da sua equipe de jogos ou do seu clã para criar divisores de marca</li>
              </ul>
              <p>Os espaços invisíveis garantem que cada emoji tenha exatamente a quantidade certa de espaço entre eles, criando uma aparência limpa e profissional.</p>

              <h3 className="sh3">Como criar descrições mínimas de canais de jogos</h3>
              <p>As descrições de canais geralmente parecem desordenadas com muito texto. Os espaços invisíveis ajudam a criar layouts mais limpos:</p>
              <ul className="slist">
                <li>Use espaços de largura zero para criar quebras de parágrafo sem linhas extras</li>
                <li>Crie um recuo sutil para regras ou informações</li>
                <li>Alinhar elementos de texto sem caracteres de formatação visíveis</li>
                <li>Fazer com que as descrições com várias linhas pareçam intencionalmente projetadas</li>
              </ul>

              <h3 className="sh3">Uso de espaços para corrigir problemas de formatação em mensagens do Discord</h3>
              <p>A formatação markdown do Discord às vezes causa problemas. Os espaços invisíveis podem ajudar:</p>
              <ul className="slist">
                <li>Insira um espaço de largura zero entre asteriscos para evitar itálicos indesejados</li>
                <li>Adicione caracteres invisíveis entre os backticks para corrigir a formatação do código</li>
                <li>Impedir a conversão automática de emojis adicionando espaços de largura zero</li>
                <li>Corrigir links que se quebram entre linhas com caracteres invisíveis estratégicos</li>
              </ul>

              <h3 className="sh3">Mensagens de status de jogo personalizadas com caracteres invisíveis</h3>
              <p>Destaque-se com um status de jogo exclusivo usando espaços invisíveis:</p>
              <ul className="slist">
                <li>Crie um status com seu jogo atual e seu nome de usuário com espaço invisível</li>
                <li>Use caracteres invisíveis para alinhar elementos em seu status personalizado</li>
                <li>Crie efeitos de texto &quot;flutuante&quot; em sua mensagem de status</li>
                <li>Separe as informações do jogo com divisores invisíveis em vez de pontuação</li>
              </ul>
              <div className="tip">
                <span className="tip__ico" aria-hidden="true">🎮</span>
                <p><strong>Exemplo:</strong> <code>🎮 Pㅤlㅤaㅤyㅤiㅤnㅤg ⟫ Valorant ⟪ Ranked</code></p>
              </div>
            </div>
          </div>
        </section>

        {/* ── H2: Solução de problemas ── */}
        <section id="solucao-problemas" className="sec" aria-labelledby="h2-problemas">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-problemas" className="sh2">Solução de problemas comuns</h2>

              <h3 className="sh3">O que fazer quando o Discord rejeita determinados personagens</h3>
              <p>Às vezes, o Discord filtra ou rejeita caracteres invisíveis:</p>
              <ul className="slist">
                <li>Experimente um personagem invisível diferente dos mencionados anteriormente</li>
                <li>Teste novos personagens em um canal privado antes de aplicá-los</li>
                <li>Lembre-se de que alguns caracteres funcionam em mensagens, mas não em nomes de usuário</li>
                <li>Se um caractere for constantemente rejeitado, use o espaço em branco em Braille como uma alternativa confiável</li>
              </ul>

              <h3 className="sh3">Correção de problemas de exibição em diferentes dispositivos</h3>
              <ul className="slist">
                <li>Teste sua formatação nas versões para celular e desktop</li>
                <li>Evite caracteres que desapareçam completamente em determinados dispositivos</li>
                <li>Use capturas de tela para comparar como a formatação aparece em diferentes plataformas</li>
                <li>O espaço de largura zero e o espaço em branco em Braille tendem a ser os mais consistentes entre as plataformas</li>
              </ul>

              <h3 className="sh3">Como lidar com as atualizações do Discord que afetam os caracteres invisíveis</h3>
              <ul className="slist">
                <li>Mantenha cópias de backup de seus personagens invisíveis favoritos</li>
                <li>Participe das comunidades de teste ou beta do Discord para receber avisos antecipados</li>
                <li>Tenha planos de formatação alternativos prontos caso seu método preferido pare de funcionar</li>
                <li>Siga os anúncios de atualização do Discord para ficar à frente de possíveis alterações</li>
              </ul>

              <h3 className="sh3">Erros comuns que os jogadores enfrentam e como corrigi-los</h3>
              <ul className="slist">
                <li><strong>Todos os espaços desaparecem depois de salvos:</strong> O Discord os filtrou. Tente usar o caractere em branco do Braille.</li>
                <li><strong>Os espaços funcionam no editor, mas não quando salvos:</strong> O caractere não é compatível com esse contexto. Teste os caracteres individualmente.</li>
                <li><strong>O celular e o desktop mostram espaçamentos diferentes:</strong> Use caracteres mais compatíveis universalmente ou otimize para sua plataforma principal.</li>
                <li><strong>Os nomes com espaços invisíveis não podem ser mencionados:</strong> O excesso de caracteres invisíveis dificulta a marcação. Use menos caracteres invisíveis.</li>
              </ul>
              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p>Leia também <Link href="/espacos-invisiveis-whatsapp">Porque é que os seus espaços invisíveis desaparecem em determinadas plataformas</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONCLUSÃO ── */}
        <section id="conclusao" className="sec sec--tint" aria-labelledby="h2-conclusao">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-conclusao" className="sh2">Conclusão</h2>
              <p>
                Os espaços invisíveis oferecem uma maneira poderosa de personalizar sua experiência no Discord, seja para criar um nome de usuário de jogo que se destaque ou para organizar um servidor para sua comunidade de jogos. As técnicas que abordamos – de espaços de largura zero a espaços em Braille – oferecem ferramentas para criar espaços no Discord mais limpos e visualmente mais atraentes.
              </p>
              <p>Lembre-se destes pontos-chave:</p>
              <ul className="slist">
                <li><strong>Use caracteres invisíveis propositalmente</strong> para melhorar a organização e a estética</li>
                <li><strong>Teste em vários dispositivos</strong> para garantir uma exibição consistente</li>
                <li><strong>Equilibre a formatação criativa</strong> com a usabilidade</li>
                <li><strong>Respeite as diretrizes da comunidade</strong> ao usar espaços invisíveis em servidores compartilhados</li>
              </ul>
              <p>
                Com essas técnicas de espaço invisível, você pode transformar sua presença no Discord de básica para profissional. Não importa se você é um jogador casual que quer se destacar ou um administrador de comunidade que está projetando o servidor perfeito, esses métodos o ajudarão a criar a experiência sofisticada do Discord que você deseja.
              </p>
              <div className="cta-box">
                <p>Pronto para personalizar seu Discord?</p>
                <Link href="/" className="btn btn--primary">Gerar Espaço Invisível</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="sec" aria-labelledby="h2-faq">
          <div className="wrap">
            <h2 id="h2-faq" className="sh2 tc">Perguntas frequentes</h2>
            <p className="ssub tc">Respostas para as dúvidas mais comuns sobre espaços invisíveis no Discord</p>
            <div className="faqgrid">
              <details className="faqd">
                <summary className="faqd__q"><span>Por que meus espaços invisíveis desaparecem quando eu salvo meu nome de usuário do Discord?</span><span className="faqd__arr" aria-hidden="true">+</span></summary>
                <div className="faqd__a"><p>O Discord filtra certos caracteres invisíveis, especialmente em nomes de usuário e nomes de canal. Tente usar o caractere em branco do Braille (U+2800), pois ele é exibido de forma mais confiável.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q"><span>Os outros usuários do Discord podem saber que estou usando caracteres invisíveis?</span><span className="faqd__arr" aria-hidden="true">+</span></summary>
                <div className="faqd__a"><p>Na maioria dos casos, não. A menos que copiem seu nome e o analisem com ferramentas Unicode, os outros usuários verão apenas a formatação limpa que você criou.</p></div>
              </details>
              <details className="faqd">
                <summary className="faqd__q"><span>Os espaços invisíveis funcionarão da mesma forma no aplicativo móvel do Discord?</span><span className="faqd__arr" aria-hidden="true">+</span></summary>
                <div className="faqd__a"><p>Nem sempre. Algumas plataformas móveis renderizam caracteres Unicode de forma diferente do desktop. Sempre teste em ambas as plataformas antes de finalizar sua formatação.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ── POST NAV ── */}
        <section className="sec sec--tint" aria-label="Navegação entre posts">
          <div className="wrap">
            <h2 className="sh2">Navegação de Post</h2>
            <div className="post-nav">
              <Link href="/biografias-do-instagram-espacos-invisiveis" className="post-nav__link">
                <span className="post-nav__label">← Post anterior</span>
                <span className="post-nav__title">Como criar biografias do Instagram com o Espaços Invisíveis!</span>
              </Link>
              <Link href="/espacos-invisiveis-em-nomes-de-usuario" className="post-nav__link">
                <span className="post-nav__label">Próximo post →</span>
                <span className="post-nav__title">10 maneiras criativas de usar espaços invisíveis em nomes de usuário e mídias sociais</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className="sec" aria-labelledby="h2-related">
          <div className="wrap">
            <h2 id="h2-related" className="sh2">Posts Similares</h2>
            <p className="ssub">Explore mais conteúdos sobre espaços invisíveis</p>
            <div className="bgrid">
              <article className="bcard">
                <span className="bcard__cat">Instagram</span>
                <h3><Link href="/biografias-do-instagram-espacos-invisiveis">Como criar biografias do Instagram com o Espaços Invisíveis!</Link></h3>
                <p>Aprenda a usar espaços invisíveis para criar biografias do Instagram mais limpas e organizadas.</p>
                <Link href="/biografias-do-instagram-espacos-invisiveis" className="bcard__more">Ler mais →</Link>
              </article>
              <article className="bcard">
                <span className="bcard__cat">Dicas e truques</span>
                <h3><Link href="/espacos-invisiveis-em-nomes-de-usuario">10 maneiras criativas de usar espaços invisíveis em nomes de usuário e mídias sociais</Link></h3>
                <p>Descubra formas criativas de usar caracteres invisíveis para personalizar seu perfil nas redes sociais.</p>
                <Link href="/espacos-invisiveis-em-nomes-de-usuario" className="bcard__more">Ler mais →</Link>
              </article>
              <article className="bcard">
                <span className="bcard__cat">WhatsApp</span>
                <h3><Link href="/espacos-invisiveis-whatsapp">Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques</Link></h3>
                <p>Aprenda a formatar mensagens no WhatsApp e criar status em branco com espaços invisíveis.</p>
                <Link href="/espacos-invisiveis-whatsapp" className="bcard__more">Ler mais →</Link>
              </article>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BlogStyles />
    </>
  );
}

// ─── Shared CSS (identical to Blog 1, kept inline per file) ──────────────────
function BlogStyles() {
  return (
    <style precedence="default">{`
      :root{--navy:#091e3a;--navy2:#0f3272;--blue:#1a56db;--orange:#f05a1a;--orange2:#ff7a3d;--bg:#f3f6fb;--bgtint:#eaf0fb;--surf:#ffffff;--bdr:#dde5f5;--txt:#111827;--txt2:#374151;--muted:#6b7280;--r:12px;--rl:20px;--sh:0 4px 24px rgba(9,30,58,.09);--shl:0 12px 48px rgba(9,30,58,.15);--tr:.22s cubic-bezier(.4,0,.2,1);--fh:'Syne',sans-serif;--fb:'DM Sans',system-ui,sans-serif}
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
      body{font-family:var(--fb);background:var(--bg);color:var(--txt);line-height:1.72;font-size:16px}
      img{max-width:100%;display:block} a{color:var(--blue)}
      code{font-family:'SF Mono','Fira Code',monospace;font-size:.83em;background:#e8eeff;color:var(--navy);padding:2px 7px;border-radius:5px}
      p{color:var(--txt2);margin-bottom:16px;font-size:1.02rem} strong{color:var(--txt)}
      .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .wrap{max-width:1280px;margin:0 auto;padding:0 48px} .prose{max-width:860px} .tc{text-align:center}
      .lead{font-size:1.15rem;color:var(--txt);line-height:1.8;margin-bottom:24px}
      .lbl{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);background:rgba(240,90,26,.1);border:1px solid rgba(240,90,26,.22);padding:4px 13px;border-radius:100px;margin-bottom:14px}
      .sh2{font-family:var(--fh);font-weight:800;color:var(--navy);font-size:clamp(1.9rem,3vw,2.85rem);line-height:1.12;margin-bottom:16px}
      .sh3{font-family:var(--fh);font-weight:700;color:var(--navy);font-size:clamp(1.2rem,1.8vw,1.55rem);line-height:1.25;margin:36px 0 14px}
      .ssub{font-size:clamp(1rem,1.4vw,1.15rem);color:var(--muted);margin-bottom:36px;max-width:640px} .ssub.tc{margin-left:auto;margin-right:auto}
      .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 30px;border-radius:100px;font-family:var(--fb);font-size:1rem;font-weight:600;text-decoration:none;cursor:pointer;transition:all var(--tr);white-space:nowrap;border:none}
      .btn--primary{background:var(--orange);color:#fff;box-shadow:0 4px 20px rgba(240,90,26,.35)}
      .btn--primary:hover{background:var(--orange2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(240,90,26,.42)}
      .hdr__logo .logo-img{height:44px;width:auto;display:block} .footer__brand .logo-img{height:40px;width:auto;display:block;margin-bottom:14px}
      .hdr{position:sticky;top:0;z-index:200;background:rgba(9,30,58,.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.07)}
      .hdr__in{display:flex;align-items:center;justify-content:space-between;height:64px;gap:20px}
      .hdr__nav ul{display:flex;list-style:none;gap:4px}
      .hdr__nav a{display:block;padding:7px 15px;border-radius:9px;color:rgba(255,255,255,.8);font-size:.92rem;font-weight:500;text-decoration:none;transition:all var(--tr)}
      .hdr__nav a:hover{background:rgba(255,255,255,.1);color:#fff}
      .nav-chk{display:none} .nav-ham{display:none;flex-direction:column;justify-content:center;gap:5px;cursor:pointer;padding:8px;z-index:210}
      .nav-ham span{display:block;width:24px;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:all var(--tr)}
      .hero{position:relative;overflow:hidden;background:linear-gradient(145deg,#060f24 0%,#0c2660 55%,#0e3590 100%);color:white;padding:88px 0 96px}
      .hero--blog{padding:64px 0 56px}
      .hero__orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px)}
      .hero__orb--1{width:560px;height:560px;background:rgba(26,86,219,.28);top:-160px;right:-80px}
      .hero__orb--2{width:440px;height:440px;background:rgba(240,90,26,.17);bottom:-130px;left:-60px}
      .hero__in{position:relative;z-index:1}
      .hero__h1{font-family:var(--fh);font-weight:800;color:#fff;line-height:1.15;font-size:clamp(1.8rem,3.8vw,2.8rem);margin-bottom:16px;max-width:900px}
      .hero__meta{font-size:.95rem;color:rgba(255,255,255,.65)}
      .sec{padding:80px 0;background:var(--bg)} .sec--white{background:var(--surf)} .sec--tint{background:var(--bgtint)}
      .sec a{color:var(--blue);font-weight:500} .sec a:hover{text-decoration:underline}
      .toc{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--rl);max-width:760px;box-shadow:var(--sh);border-left:4px solid var(--orange);overflow:hidden}
      .toc__sum{display:flex;align-items:center;justify-content:space-between;padding:20px 28px;cursor:pointer;list-style:none;user-select:none;font-family:var(--fh);font-size:1.05rem;font-weight:700;color:var(--navy);gap:12px}
      .toc__sum::-webkit-details-marker{display:none} .toc__sum:hover{background:rgba(240,90,26,.04)}
      .toc__arrow{font-size:1.4rem;color:var(--orange);transition:transform var(--tr);display:inline-block;line-height:1}
      .toc[open] .toc__arrow{transform:rotate(90deg)}
      .toc__list{padding:8px 28px 24px 52px;border-top:1px solid var(--bdr)} .toc__list li{margin-bottom:9px}
      .toc__list a{color:var(--blue);font-weight:500;text-decoration:none;font-size:.97rem} .toc__list a:hover{text-decoration:underline;color:var(--navy)}
      .fig-img{margin:28px 0;border-radius:var(--rl);overflow:hidden;border:1px solid var(--bdr);box-shadow:var(--sh)}
      .fig-img img{width:100%;height:auto;display:block}
      .fig-img figcaption{padding:12px 16px;font-size:.88rem;color:var(--muted);background:var(--bgtint);text-align:center}
      .slist{list-style:none;padding:0;margin:16px 0 24px} .slist li{display:flex;gap:13px;align-items:flex-start;padding:13px 0;border-bottom:1px solid var(--bdr);color:var(--txt2);font-size:1.02rem} .slist li:last-child{border-bottom:none} .slist li::before{content:'→';color:var(--orange);font-weight:700;flex-shrink:0;margin-top:2px}
      .steps{list-style:none;padding:0;margin:20px 0;display:flex;flex-direction:column;gap:16px} .steps li{display:flex;gap:18px;align-items:flex-start}
      .snum{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;flex-shrink:0;background:var(--navy);color:#fff;font-family:var(--fh);font-size:.95rem;font-weight:800}
      .steps li div{padding-top:8px;color:var(--txt2);font-size:1.02rem} .steps li div strong{display:block;color:var(--navy);font-weight:700;margin-bottom:4px;font-size:1.06rem} .steps li div p{margin:0}
      .tip{display:flex;gap:14px;align-items:flex-start;background:rgba(240,90,26,.07);border:1px solid rgba(240,90,26,.2);border-radius:var(--r);padding:18px 22px;margin-top:28px;margin-bottom:8px}
      .tip__ico{font-size:1.4rem;flex-shrink:0;margin-top:-2px} .tip p{margin:0;font-size:.97rem;color:var(--txt2)}
      .cta-box{background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);border-radius:var(--rl);padding:40px 36px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-top:36px}
      .cta-box p{font-family:var(--fh);font-size:1.5rem;font-weight:800;color:#fff;margin:0}
      .faqgrid{max-width:900px;margin:36px auto 0;display:flex;flex-direction:column;gap:12px}
      .faqd{background:var(--surf);border:1.5px solid var(--bdr);border-radius:var(--r);overflow:hidden;transition:border-color var(--tr)} .faqd[open]{border-color:var(--blue)}
      .faqd__q{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;cursor:pointer;list-style:none;font-family:var(--fh);font-size:1.07rem;font-weight:700;color:var(--navy);gap:16px;user-select:none}
      .faqd__q::-webkit-details-marker{display:none} .faqd__q:hover{background:rgba(26,86,219,.03)}
      .faqd__arr{font-size:1.5rem;font-weight:300;color:var(--orange);transition:transform var(--tr);line-height:1;flex-shrink:0} .faqd[open] .faqd__arr{transform:rotate(45deg)}
      .faqd__a{padding:0 24px 20px;border-top:1px solid var(--bdr)} .faqd__a p{margin:16px 0 0;font-size:.98rem;color:var(--txt2)}
      .post-nav{display:flex;gap:20px;margin-top:20px}
      .post-nav__link{display:block;flex:1;padding:24px 28px;background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);text-decoration:none;transition:all var(--tr)}
      .post-nav__link:hover{box-shadow:var(--shl);transform:translateY(-2px);border-color:var(--blue)}
      .post-nav__label{display:block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--orange);margin-bottom:8px}
      .post-nav__title{font-family:var(--fh);font-size:1.05rem;font-weight:700;color:var(--navy);line-height:1.35}
      .bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:36px}
      .bcard{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--rl);padding:30px 28px;box-shadow:0 2px 10px rgba(9,30,58,.06);transition:all var(--tr);display:flex;flex-direction:column} .bcard:hover{box-shadow:var(--shl);transform:translateY(-3px)}
      .bcard__cat{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--orange);background:rgba(240,90,26,.1);padding:3px 11px;border-radius:100px;margin-bottom:14px;width:fit-content}
      .bcard h3{font-family:var(--fh);font-size:1.05rem;font-weight:700;margin-bottom:10px;line-height:1.35} .bcard h3 a{color:var(--navy);text-decoration:none} .bcard h3 a:hover{color:var(--blue)}
      .bcard p{font-size:.93rem;color:var(--muted);flex:1;margin-bottom:18px} .bcard__more{font-size:.9rem;font-weight:700;color:var(--orange);text-decoration:none;margin-top:auto} .bcard__more:hover{text-decoration:underline}
      .footer{background:#060e1f;color:rgba(255,255,255,.6)}
      .footer__in{display:grid;grid-template-columns:2fr 1.2fr 1.2fr;gap:60px;padding-top:64px;padding-bottom:52px}
      .footer__brand p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.45);max-width:280px;margin-bottom:20px}
      .footer__soc{display:flex;gap:10px} .footer__soc a{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.65);font-size:.74rem;font-weight:700;text-transform:uppercase;text-decoration:none;letter-spacing:.03em;transition:all var(--tr)} .footer__soc a:hover{background:var(--orange);color:#fff}
      .footer__nt{font-family:var(--fh);font-size:.77rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:18px}
      .footer__nav ul,.footer__tools ul{list-style:none;display:flex;flex-direction:column;gap:10px} .footer__nav a,.footer__tools a{color:rgba(255,255,255,.55);text-decoration:none;font-size:.9rem;transition:color var(--tr)} .footer__nav a:hover,.footer__tools a:hover{color:#fff}
      .footer__bot{border-top:1px solid rgba(255,255,255,.07);text-align:center;padding:18px 20px;font-size:.82rem;color:rgba(255,255,255,.28)}
      @media(max-width:1100px){.wrap{padding:0 36px}.bgrid{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:900px){.wrap{padding:0 28px}.bgrid{grid-template-columns:1fr}.footer__in{grid-template-columns:1fr 1fr;gap:36px}.footer__brand{grid-column:1/-1}.hero--blog{padding:52px 0 44px}}
      @media(max-width:680px){.wrap{padding:0 18px}.nav-ham{display:flex}.hdr__nav{position:fixed;top:64px;left:0;right:0;bottom:0;background:rgba(9,30,58,.98);backdrop-filter:blur(18px);transform:translateX(100%);transition:transform var(--tr);z-index:199;display:flex;flex-direction:column;padding:28px 24px;overflow-y:auto}.hdr__nav ul{flex-direction:column;gap:4px}.hdr__nav a{font-size:1.15rem;padding:13px 16px}.nav-chk:checked ~ .hdr__nav{transform:translateX(0)}.nav-chk:checked + .nav-ham span:nth-child(1){transform:translateY(7px) rotate(45deg)}.nav-chk:checked + .nav-ham span:nth-child(2){opacity:0}.nav-chk:checked + .nav-ham span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}.hero--blog{padding:44px 0 36px}.hero__h1{font-size:clamp(1.6rem,5vw,2.1rem)}.sec{padding:52px 0}.sh2{font-size:clamp(1.6rem,5vw,1.9rem)}.sh3{font-size:clamp(1.1rem,4vw,1.3rem)}.toc__sum{padding:16px 20px;font-size:.97rem}.toc__list{padding:8px 20px 20px 40px}.cta-box{flex-direction:column;text-align:center}.cta-box .btn{width:100%}.post-nav{flex-direction:column}.footer__in{grid-template-columns:1fr;gap:30px;padding-top:48px;padding-bottom:36px}.faqd__q{font-size:.98rem;padding:16px 18px}.faqd__a{padding:0 18px 16px}.snum{width:32px;height:32px;font-size:.88rem}.steps li{gap:12px}}
      @media(max-width:480px){.wrap{padding:0 14px}}
      @media(max-width:360px){.hero__h1{font-size:1.5rem}.sh2{font-size:1.45rem}}
    `}</style>
  );
}   
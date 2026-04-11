// app/blog/espacos-invisiveis-desaparecem/page.tsx
// Next.js 13+ App Router

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// ─── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Fixar espaços invisíveis desaparecem: Solução e Alternativas",
  description: "Saiba porque é que os espaços invisíveis desaparecem nas redes sociais e noutras plataformas, além de soluções fáceis para preservar a formatação do seu texto.",
  keywords: ["espaços invisíveis desaparecem", "espaço invisível", "formatação texto", "caracteres invisíveis", "unicode"],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/espacos-invisiveis-desaparecem",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/espacos-invisiveis-desaparecem" },
  },
  openGraph: {
    title: "Fixar espaços invisíveis desaparecem: Solução e Alternativas",
    description: "Saiba porque é que os espaços invisíveis desaparecem nas redes sociais e noutras plataformas, além de soluções fáceis para preservar a formatação do seu texto.",
    url: "https://espacoinvisivel.com.br/espacos-invisiveis-desaparecem",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "article",
  },
};

// ─── JSON-LD Schema ─────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Porque é que os seus espaços invisíveis desaparecem em determinadas plataformas (e como corrigi-lo)",
  description: "Saiba porque é que os espaços invisíveis desaparecem nas redes sociais e noutras plataformas, além de soluções fáceis para preservar a formatação do seu texto.",
  author: { "@type": "Organization", name: "Espaço Invisível" },
  publisher: { "@type": "Organization", name: "Espaço Invisível", logo: { "@type": "ImageObject", url: "https://espacoinvisivel.com.br/logo.svg" } },
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
};

// ─── Page Component ─────────────────────────────────────────────────────────
export default function BlogEspacosInvisiveisDesaparecem() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

      {/* ═══════════════════════════════════════════════════════ HEADER */}
      <header className="hdr" role="banner">
        <div className="wrap hdr__in">
          <Link href="/" className="hdr__logo" aria-label="Espaço Invisível – Página inicial">
            <img src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" width="220" height="80" />
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
              <li><Link href="/contacto">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ═══════════════════════════════════════════════════════ BLOG HERO */}
        <section className="hero hero--blog" aria-labelledby="blog-h1">
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
          <div className="wrap hero__in">
            <span className="lbl">Discussões</span>
            <h1 id="blog-h1" className="hero__h1">
              Porque é que os seus espaços invisíveis desaparecem em determinadas plataformas (e como corrigi-lo)
            </h1>
            <p className="hero__meta">
              <time dateTime="2026-01-15">15 de Janeiro, 2026</time> · 8 min de leitura
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TOC */}
        <section className="sec sec--tint" aria-label="Índice do conteúdo">
          <div className="wrap">
            <details className="toc" open>
              <summary className="toc__sum">
                <span>Índice</span>
                <span className="toc__arrow" aria-hidden="true">›</span>
              </summary>
              <nav aria-label="Índice da página">
                <ol className="toc__list">
                  <li><a href="#o-que-sao">O que são espaços invisíveis?</a></li>
                  <li><a href="#porque-removem">Porque é que as plataformas removem os espaços invisíveis?</a></li>
                  <li><a href="#plataformas-comuns">Plataformas comuns onde os espaços desaparecem</a></li>
                  <li><a href="#como-corrigir">Como corrigir espaços que desaparecem</a></li>
                  <li><a href="#melhores-praticas">Melhores práticas para preservar o formato</a></li>
                  <li><a href="#conclusao">Conclusão</a></li>
                  <li><a href="#faq">Perguntas frequentes</a></li>
                </ol>
              </nav>
            </details>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ INTRO */}
        <article className="sec sec--white" aria-labelledby="blog-h1">
          <div className="wrap">
            <div className="prose">
              <p className="lead">
                Já alguma vez passou algum tempo a formatar um texto na perfeição com <Link href="/">espaço invisível</Link>, para depois o ver todo estragado quando o publica online? Não é o único. O mistério dos espaços invisíveis desaparecem é uma dor de cabeça comum para muitos utilizadores da Internet.
              </p>

              <p>
                Estes espaços invisíveis parecem desaparecer no ar quando se move o conteúdo de uma plataforma para outra. O que parece perfeito no seu editor de texto perde subitamente a formatação nas redes sociais ou no seu correio eletrónico. É frustrante e pode fazer com que o seu conteúdo pareça pouco profissional.
              </p>

              <p>
                Isto é importante porque o espaçamento afecta a legibilidade do seu conteúdo. O espaçamento adequado ajuda a separar secções, a criar quebras visuais e a organizar a informação. Quando as plataformas retiram estes espaços invisíveis, o seu esquema cuidadosamente concebido desmorona-se.
              </p>

              <p>
                Neste guia, vamos explorar a razão pela qual os espaços invisíveis desaparecem, quais as plataformas que são as principais culpadas e como pode resolver estes problemas. Partilharemos soluções simples e alternativas que funcionam mesmo em plataformas que detestam espaços invisíveis.
              </p>
            </div>
          </div>
        </article>

        {/* ═══════════════════════════════════════════════════════ O QUE SÃO */}
        <section id="o-que-sao" className="sec" aria-labelledby="h2-oque">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-oque" className="sh2">O que são espaços invisíveis?</h2>
              <p>
                Os espaços invisíveis são caracteres especiais que criam espaço no texto sem serem eles próprios visíveis. Ao contrário dos espaços normais, que aparecem como uma área em branco entre as palavras, estes caracteres têm funções específicas, mas permanecem ocultos. Você também deve aprender a usar <Link href="/letras-diferentes">Letras Diferentes e Bonitas</Link> e fazer com que seus nomes de usuário se destaquem.
              </p>

              <p>Existem vários tipos de espaços invisíveis que pode estar a utilizar:</p>

              <ul className="slist">
                <li><strong>Espaços sem quebra de linha (NBSP):</strong> Estes espaços evitam quebras de linha na sua posição. São úteis quando se pretende manter as palavras juntas, como num número de telefone ou no nome de uma pessoa.</li>
                <li><strong>Espaços de largura zero (ZWSP):</strong> Não criam espaço visível, mas permitem quebras de linha. São úteis para quebrar palavras longas em pontos específicos.</li>
                <li><strong>Espaços em cabelo e espaços finos:</strong> Estes espaços criam pequenos intervalos mais pequenos do que um espaço normal, frequentemente utilizados em tipografia para ajustes finos.</li>
                <li><strong>Espaços em e espaços en:</strong> Estes espaços criam espaços mais largos, tradicionalmente com a largura das letras &quot;m&quot; e &quot;n&quot;, respetivamente.</li>
              </ul>

              <p>
                Estes espaços especiais são utilizados por várias razões. Os web designers utilizam-nos para controlar a forma como o texto é apresentado nos sítios Web. Os escritores utilizam-nos para criar um espaçamento correto nos documentos. Os utilizadores de redes sociais inserem-nos para criar efeitos de texto especiais ou para contornar os limites de caracteres.
              </p>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p><strong>Leia também:</strong> <Link href="/diferentes-tipos-de-caracteres-invisiveis">Diferentes tipos de caracteres invisíveis: Quais usar e quando</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ PORQUE REMOVEM */}
        <section id="porque-removem" className="sec sec--tint" aria-labelledby="h2-porque">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-porque" className="sh2">Porque é que as plataformas removem os espaços invisíveis?</h2>
              <p>
                As plataformas não removem os espaços invisíveis apenas para o irritar – existem, de facto, algumas boas razões técnicas por detrás desta prática. A maioria das plataformas processa o texto através de algo chamado &quot;normalização de texto&quot;.
              </p>

              <p>
                Este processo de limpeza remove caracteres que possam causar problemas nos seus sistemas. Os espaços invisíveis são frequentemente apanhados nesta limpeza porque são considerados caracteres não normalizados. As plataformas fazem isto para garantir a consistência e evitar comportamentos inesperados na sua interface.
              </p>

              <p>Plataformas diferentes lidam com caracteres invisíveis de maneiras diferentes:</p>

              <ul className="slist">
                <li>Algumas retiram-nos completamente</li>
                <li>Outras convertem-nos em espaços normais</li>
                <li>Algumas preservam certos tipos mas removem outros</li>
              </ul>

              <p>
                A segurança é outra grande razão para remover estes caracteres. Os espaços invisíveis podem ser utilizados em tentativas de phishing e outras burlas. Por exemplo, os hackers podem utilizar espaços de largura zero para fazer com que um URL malicioso pareça legítimo. Ao remover estes caracteres, as plataformas reduzem os riscos de segurança.
              </p>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p><strong>Leia também:</strong> <Link href="/espacos-invisiveis-para-whatsapp">Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ PLATAFORMAS */}
        <section id="plataformas-comuns" className="sec" aria-labelledby="h2-plat">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-plat" className="sh2">Plataformas comuns onde os espaços desaparecem</h2>
              <p>Se reparou que os seus espaços invisíveis desapareceram, estas plataformas são provavelmente as culpadas:</p>

              <h3 className="sh3">Plataformas de redes sociais</h3>
              <ul className="slist">
                <li><strong>Twitter/X:</strong> É famoso por remover quase todos os espaços invisíveis. A plataforma normaliza agressivamente o texto para manter o seu sistema de contagem de caracteres e a consistência da interface.</li>
                <li><strong>Instagram:</strong> Retira a maioria dos espaços invisíveis quando publica legendas ou comentários, tornando quase impossível criar um espaçamento personalizado.</li>
                <li><strong>Facebook:</strong> É um pouco mais tolerante, mas continua a remover muitos tipos de espaços invisíveis, especialmente em comentários e actualizações de estado.</li>
                <li><strong>LinkedIn:</strong> Remove a maioria dos espaços especiais em publicações e artigos, concentrando-se na normalização profissional.</li>
              </ul>

              <h3 className="sh3">Aplicações de mensagens</h3>
              <ul className="slist">
                <li><strong>WhatsApp:</strong> Converte muitos espaços invisíveis em espaços regulares, especialmente em conversas de grupo.</li>
                <li><strong>Telegram:</strong> Preserva alguns caracteres especiais, mas ainda remove muitos tipos de espaços invisíveis.</li>
                <li><strong>Slack:</strong> Tem o seu próprio sistema de formatação de texto e remove a maioria dos espaçamentos personalizados para manter a sua interface.</li>
              </ul>

              <h3 className="sh3">Sistemas de gestão de conteúdos</h3>
              <ul className="slist">
                <li><strong>WordPress:</strong> Remove frequentemente os espaços invisíveis ao alternar entre editores visuais e de texto.</li>
                <li><strong>Wix:</strong> E outros criadores de sítios Web podem remover espaços especiais quando o conteúdo é guardado ou publicado.</li>
                <li><strong>Medium:</strong> Normaliza a formatação de texto, removendo a maioria dos espaços invisíveis em favor do seu próprio sistema de estilo.</li>
              </ul>

              <h3 className="sh3">Editores de código e IDEs</h3>
              <ul className="slist">
                <li><strong>GitHub:</strong> E as plataformas de codificação removem espaços invisíveis que possam interferir com a funcionalidade do código.</li>
                <li><strong>VS Code:</strong> E outros IDEs podem realçar ou remover espaços invisíveis para evitar erros de codificação.</li>
                <li><strong>Google Docs:</strong> Preserva alguns espaços especiais, mas pode perdê-los ao converter documentos para outros formatos.</li>
                <li>Compreender quais as plataformas que causam problemas ajuda-o a preparar estratégias de formatação alternativas antes de partilhar o seu conteúdo.</li>
                <li><strong>Leia também:</strong> <Link href="/biografias-do-instagram-espacos-invisiveis">Como criar biografias do Instagram com o Espaços Invisíveis!</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ COMO CORRIGIR */}
        <section id="como-corrigir" className="sec sec--tint" aria-labelledby="h2-corrigir">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-corrigir" className="sh2">Como corrigir espaços que desaparecem</h2>
              <p>Agora que você sabe por que seus espaços invisíveis continuam desaparecendo, vamos dar uma olhada em algumas soluções práticas para corrigir esse problema frustrante.</p>

              <h3 className="sh3">Soluções alternativas específicas para cada plataforma</h3>
              <p>Cada plataforma tem suas peculiaridades, mas há maneiras de contorná-las:</p>
            </div>

            <div className="tbl-wrap" role="region" aria-label="Tabela de soluções por plataforma" tabIndex={0}>
              <table className="dtbl">
                <caption>Soluções para cada plataforma</caption>
                <thead>
                  <tr>
                    <th scope="col">Plataforma</th>
                    <th scope="col">Solução</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Twitter/X</td><td>Use pontos ou símbolos como • como marcadores de espaço visíveis</td></tr>
                  <tr><td>Instagram</td><td>Crie seu conteúdo em um app de notas e faça uma captura de tela</td></tr>
                  <tr><td>Facebook</td><td>Use emojis como espaçadores entre as seções ou quebras de linha</td></tr>
                  <tr><td>Apps de mensagens</td><td>Use caracteres de traço (-) ou asteriscos (*) como separadores</td></tr>
                  <tr><td>WordPress</td><td>Use tags HTML como &amp;nbsp; para espaços não separáveis</td></tr>
                </tbody>
              </table>
            </div>

            <div className="prose">
              <h3 className="sh3">Métodos de formatação alternativos</h3>
              <p>Em vez de espaços invisíveis, tente estas alternativas:</p>

              <ul className="slist">
                <li><strong>Use símbolos como separadores:</strong> Traços (—), estrelas (*) ou pontos (•) podem criar separação visual sem depender de espaços especiais.</li>
                <li><strong>Crie texto em formato de imagem:</strong> Para conteúdo importante onde a formatação importa, crie uma imagem do seu texto usando ferramentas de design.</li>
                <li><strong>Formatação Markdown:</strong> Plataformas como Reddit, Discord e GitHub suportam Markdown, o que lhe dá mais controle sobre a aparência do texto.</li>
                <li><strong>Blocos de texto pré-formatados:</strong> Use a tag pre ou a formatação de bloco de código para preservar o espaçamento exato.</li>
              </ul>

              <h3 className="sh3">Ferramentas e plugins que ajudam a preservar o espaçamento</h3>
              <p>Várias ferramentas podem ajudar você a manter sua formatação em todas as plataformas:</p>

              <ul className="slist">
                <li><strong>Ferramentas de inserção de caracteres Unicode:</strong> Sites como o Unicode Table permitem que você copie caracteres especiais que algumas plataformas podem preservar.</li>
                <li><strong>Extensões de navegador:</strong> Extensões como &quot;Copiar como texto simples&quot; ajudam a remover problemas de formatação ocultos antes de colar.</li>
                <li><strong>Plugins de formatação:</strong> Plataformas CMS como o WordPress têm plugins projetados especificamente para preservar caracteres especiais e espaçamento.</li>
                <li><strong>Leia também:</strong> <Link href="/criar-nome-de-usuario-do-discord">Como usar espaços invisíveis em nomes de usuário e canais do Discord!</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ MELHORES PRÁTICAS */}
        <section id="melhores-praticas" className="sec" aria-labelledby="h2-praticas">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-praticas" className="sh2">Melhores práticas para preservar o formato</h2>

              <h3 className="sh3">Quando usar espaços invisíveis (e quando não usar)</h3>
              <p>Espaços invisíveis funcionam melhor em ambientes controlados:</p>

              <ul className="slist">
                <li><strong>USE-os:</strong> Em documentos HTML, PDFs e outros formatos que você controla completamente.</li>
                <li><strong>USE-os:</strong> Ao projetar materiais impressos ou criar conteúdo para seu próprio site.</li>
                <li><strong>NÃO os use:</strong> Para informações importantes que precisam ser legíveis em várias plataformas.</li>
                <li><strong>NÃO confie neles:</strong> Para materiais críticos da marca que serão amplamente compartilhados nas mídias sociais.</li>
              </ul>

              <h3 className="sh3">Testando seu conteúdo em várias plataformas</h3>
              <p>Antes de finalizar seu conteúdo:</p>

              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div><strong>Crie uma postagem de teste</strong><p>em cada plataforma onde você planeja compartilhar seu conteúdo.</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div><strong>Visualize em diferentes dispositivos</strong><p>(celular, tablet, desktop) para ver como o espaçamento aparece.</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div><strong>Peça a um amigo</strong><p>para visualizar seu conteúdo no dispositivo dele para verificar se ele parece correto.</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">4</span>
                  <div><strong>Faça capturas de tela</strong><p>de como seu conteúdo deve ficar para que você possa comparar com o resultado real.</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">5</span>
                  <div><strong>Teste navegadores diferentes</strong><p>pois alguns lidam com caracteres especiais de forma diferente.</p></div>
                </li>
              </ol>

              <h3 className="sh3">Técnicas de formatação de backup</h3>
              <p>Sempre tenha um Plano B para sua formatação:</p>

              <ul className="slist">
                <li>Crie versões alternativas de conteúdo importante com diferentes abordagens de formatação.</li>
                <li>Use elementos visuais como linhas horizontais, caixas ou cores de fundo para separar o conteúdo.</li>
                <li>Mantenha uma versão de texto simples que pareça aceitável mesmo sem formatação especial.</li>
                <li>Quando possível, use opções de formatação nativas fornecidas pela plataforma.</li>
                <li>Considere usar listas numeradas ou com marcadores, que a maioria das plataformas lida consistentemente.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ CONCLUSÃO */}
        <section id="conclusao" className="sec sec--tint" aria-labelledby="h2-conclusao">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-conclusao" className="sh2">Conclusão</h2>
              <p>
                O ato de desaparecer de espaços invisíveis pode ser frustrante, mas agora você entende por que isso acontece e como contornar isso. A maioria das plataformas remove esses caracteres especiais por bons motivos: segurança, consistência e limitações técnicas.
              </p>              

              <p>
                Em vez de lutar contra essas limitações, adapte sua abordagem com base em onde você está compartilhando o conteúdo. Use formatação nativa da plataforma quando possível, teste seu conteúdo antes de compartilhá-lo amplamente e sempre tenha métodos de formatação de backup prontos.
              </p>

              <p>Lembre-se destes pontos-chave:</p>

              <ul className="slist">
                <li>Espaços invisíveis desaparecem porque as plataformas normalizam o texto para segurança e consistência</li>
                <li>Diferentes plataformas lidam com caracteres especiais de forma diferente</li>
                <li>Separadores visuais e formatação específica da plataforma geralmente funcionam melhor do que espaços invisíveis</li>
                <li>Testar seu conteúdo em todas as plataformas antes de publicar evita dores de cabeça mais tarde</li>
              </ul>

              <p>
                Com essas estratégias, você pode criar conteúdo limpo e bem formatado que fica ótimo não importa onde você o compartilhe. Seus dias de luta com espaços que desaparecem finalmente acabaram!
              </p>
              <p>
                <strong>Leia também:</strong> <Link href="/espacos-invisiveis-em-nomes-de-usuario">10 maneiras de usar espaços invisíveis em nomes de usuário.</Link>
              </p>

              <div className="cta-box">
                <p>Experimente nosso Gerador de Espaço Invisível</p>
                <Link href="/" className="btn btn--primary">Gerar agora →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FAQ */}
        <section id="faq" className="sec" aria-labelledby="h2-faq">
          <div className="wrap">
            <h2 id="h2-faq" className="sh2 tc">Perguntas frequentes</h2>
            <p className="ssub tc">Respostas para as dúvidas mais comuns sobre espaços invisíveis</p>

            <div className="faqgrid">
              <details className="faqd">
                <summary className="faqd__q">
                  <span>Por que meus espaços desaparecem quando copio texto de um aplicativo para outro?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Quando você copia texto entre aplicativos, a formatação geralmente se perde porque cada programa lida com caracteres especiais de forma diferente. O aplicativo receptor pode não reconhecer ou suportar os espaços invisíveis do programa original.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Posso criar quebras de linha nas mídias sociais sem usar espaços invisíveis?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Sim! A maioria das plataformas de mídia social respeita quebras de linha normais (tecla Enter). Você pode usar quebras de linha múltiplas ou símbolos visíveis como separadores para criar espaçamento visual sem depender de caracteres invisíveis.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Existe um espaço invisível universal que funciona em todas as plataformas?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Infelizmente, não existe um caractere invisível que funcione perfeitamente em todas as plataformas. O caractere Hangul Filler (U+3164) é um dos mais compatíveis, mas ainda pode ser removido em algumas plataformas. A melhor abordagem é testar em cada plataforma específica.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POST NAV */}
        <section className="sec sec--tint" aria-label="Navegação de Post">
          <div className="wrap">
            <h2 className="sh2">Navegação de Post</h2>
            <div className="post-nav">
              <Link href="/tipos-caracteres-invisiveis" className="post-nav__link">
                <span className="post-nav__label">Próximo artigo →</span>
                <span className="post-nav__title">Diferentes tipos de caracteres invisíveis: Quais usar e quando</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ RELATED */}
        <section className="sec" aria-labelledby="h2-related">
          <div className="wrap">
            <h2 id="h2-related" className="sh2">Posts Similares</h2>
            <p className="ssub">Explore mais conteúdos sobre espaços invisíveis e formatação de texto</p>

            <div className="bgrid">
              <article className="bcard">
                <span className="bcard__cat">Discussões</span>
                <h3><Link href="/tipos-caracteres-invisiveis">Diferentes tipos de caracteres invisíveis: Quais usar e quando</Link></h3>
                <p>Descubra os diferentes tipos de caracteres invisíveis e saiba quando usar espaços, tabulações e quebras de linha para resolver problemas comuns de formatação.</p>
                <Link href="/tipos-caracteres-invisiveis" className="bcard__more">Ler mais →</Link>
              </article>

              <article className="bcard">
                <span className="bcard__cat">Dicas e truques</span>
                <h3><Link href="/espacos-invisiveis-whatsapp">Como Usar espaços invisíveis para WhatsApp mensagens</Link></h3>
                <p>Aprenda a Usar espaços invisíveis para WhatsApp para facilitar a leitura e se destacar na multidão.</p>
                <Link href="/espacos-invisiveis-whatsapp" className="bcard__more">Ler mais →</Link>
              </article>

              <article className="bcard">
                <span className="bcard__cat">Ferramentas</span>
                <h3><Link href="/letras-diferentes">Letras Diferentes e Bonitas: Transforme Seu Texto Online</Link></h3>
                <p>Use nosso gerador de letras diferentes para criar textos estilizados para redes sociais e jogos.</p>
                <Link href="/letras-diferentes" className="bcard__more">Ler mais →</Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════ FOOTER */}
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
        .lead  { font-size: 1.15rem; color: var(--txt); line-height: 1.8; }

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
        .hero--blog { padding: 72px 0 64px; }
        .hero__orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px); }
        .hero__orb--1 { width: 560px; height: 560px; background: rgba(26,86,219,.28); top: -160px; right: -80px; }
        .hero__orb--2 { width: 440px; height: 440px; background: rgba(240,90,26,.17); bottom: -130px; left: -60px; }
        .hero__in { position: relative; z-index: 1; }
        .hero__h1 { font-family: var(--fh); font-weight: 800; color: #fff; line-height: 1.15; font-size: clamp(1.8rem, 3.8vw, 2.8rem); margin-bottom: 16px; max-width: 900px; }
        .hero__meta { font-size: .95rem; color: rgba(255,255,255,.65); }

        /* ══ SECTIONS ══ */
        .sec       { padding: 80px 0; background: var(--bg); }
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
        .post-nav__title { font-family: var(--fh); font-size: 1.1rem; font-weight: 700; color: var(--navy); line-height: 1.35; }

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
          .bgrid  { grid-template-columns: repeat(2,1fr); }
        }
        @media(max-width:900px){
          .wrap   { padding: 0 28px; }
          .bgrid  { grid-template-columns: 1fr; }
          .footer__in { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer__brand { grid-column: 1/-1; }
          .hero   { padding: 72px 0 80px; }
          .hero--blog { padding: 56px 0 48px; }
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
          .hero--blog { padding: 48px 0 40px; }
          .hero__h1 { font-size: clamp(1.6rem, 5vw, 2.1rem); }
          .sec    { padding: 56px 0; }
          .sh2    { font-size: clamp(1.6rem, 5vw, 1.9rem); }
          .sh3    { font-size: clamp(1.1rem, 4vw, 1.3rem); }
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
          .post-nav { flex-direction: column; }
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

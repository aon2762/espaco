// app/blog/tipos-caracteres-invisiveis/page.tsx
// Next.js 13+ App Router

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// ─── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Diferentes tipos de caracteres invisíveis: Quais usar e quando",
  description: "Descubra os diferentes tipos de caracteres invisíveis e saiba quando usar espaços, tabulações e quebras de linha para resolver problemas comuns de formatação.",
  keywords: ["caracteres invisíveis", "espaço invisível", "tabulação", "quebra de linha", "unicode", "formatação texto"],
  alternates: {
    canonical: "https://espacoinvisivel.com.br/tipos-caracteres-invisiveis",
    languages: { "pt-BR": "https://espacoinvisivel.com.br/tipos-caracteres-invisiveis" },
  },
  openGraph: {
    title: "Diferentes tipos de caracteres invisíveis: Quais usar e quando",
    description: "Descubra os diferentes tipos de caracteres invisíveis e saiba quando usar espaços, tabulações e quebras de linha para resolver problemas comuns de formatação.",
    url: "https://espacoinvisivel.com.br/tipos-caracteres-invisiveis",
    siteName: "Espaço Invisível",
    locale: "pt_BR",
    type: "article",
  },
};

// ─── JSON-LD Schema ─────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diferentes tipos de caracteres invisíveis: Quais usar e quando",
  description: "Descubra os diferentes tipos de caracteres invisíveis e saiba quando usar espaços, tabulações e quebras de linha para resolver problemas comuns de formatação.",
  author: { "@type": "Organization", name: "Espaço Invisível" },
  publisher: { "@type": "Organization", name: "Espaço Invisível", logo: { "@type": "ImageObject", url: "https://espacoinvisivel.com.br/logo.svg" } },
  datePublished: "2026-01-20",
  dateModified: "2026-01-20",
};

// ─── Page Component ─────────────────────────────────────────────────────────
export default function BlogTiposCaracteresInvisiveis() {
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
            <img src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" />
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
              <li><Link href="/contato">Contato</Link></li>
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
              Diferentes tipos de caracteres invisíveis: Quais usar e quando
            </h1>
            <p className="hero__meta">
              <time dateTime="2026-01-20">20 de Janeiro, 2026</time> · 15 min de leitura
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
                  <li><a href="#tipos-comuns">Tipos comuns de caracteres invisíveis</a></li>
                  <li><a href="#caracteres-espaco">Caracteres de espaço</a></li>
                  <li><a href="#caractere-tabulacao">Caractere de tabulação</a></li>
                  <li><a href="#quebra-linha">Caracteres de quebra de linha</a></li>
                  <li><a href="#largura-zero">Caracteres de largura zero</a></li>
                  <li><a href="#nao-quebraveis">Caracteres não quebráveis</a></li>
                  <li><a href="#especiais">Caracteres especiais invisíveis</a></li>
                  <li><a href="#aplicativos">Aplicativos práticos</a></li>
                  <li><a href="#problemas">Problemas em potencial</a></li>
                  <li><a href="#ferramentas">Ferramentas para trabalhar com caracteres invisíveis</a></li>
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
                Os caracteres invisíveis são símbolos especiais no texto digital que ocupam espaço ou têm uma função, mas não aparecem visivelmente no ecrã. Pense neles como os trabalhadores silenciosos da formatação de texto – não os consegue ver, mas eles estão ocupados a fazer com que o texto pareça e funcione corretamente e ocupam <Link href="/">espaço invisível</Link> para dar ao seu texto um aspeto único.
              </p>

              <p>
                Esses ajudantes ocultos são muito importantes tanto na digitação cotidiana quanto na codificação. No texto digital, eles controlam o espaçamento, as quebras de linha e o fluxo do texto. Na codificação, eles podem fazer com que seu programa funcione ou não, pois os computadores leem essas marcas invisíveis mesmo quando não podemos vê-las.
              </p>
              <figure className="fig-img">
                <img src="/Diferentes-tipos-de-caracteres-invisiveis-1.webp" alt="Diferentes tipos de caracteres invisíveis" width={500} height={300} loading="lazy" />
                <figcaption>Diferentes tipos de caracteres invisíveis</figcaption>
              </figure>          

              <p>
                Neste artigo, exploraremos diferentes tipos de caracteres invisíveis, aprenderemos quando usar cada um deles, entenderemos como funcionam em diferentes sistemas e descobriremos como evitar problemas comuns que eles podem causar. Você também deve aprender a usar <Link href="/letras-diferentes">Letras Diferentes e Bonitas</Link> e fazer com que seus nomes de usuário se destaquem.
              </p>
            </div>
          </div>
        </article>

        {/* ═══════════════════════════════════════════════════════ TIPOS COMUNS */}
        <section id="tipos-comuns" className="sec" aria-labelledby="h2-tipos">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-tipos" className="sh2">Tipos comuns de caracteres invisíveis</h2>
              <p>Há vários tipos de caracteres invisíveis que servem a diferentes propósitos:</p>

              <ul className="slist">
                <li><strong>Caractere de espaço:</strong> O caractere invisível mais básico – o espaço em branco entre as palavras</li>
                <li><strong>Caractere de tabulação:</strong> Cria um espaço maior do que um espaço, geralmente usado para recuo</li>
                <li><strong>Caracteres de quebra de linha/nova linha:</strong> Informam ao texto quando iniciar uma nova linha</li>
                <li><strong>Caracteres de largura zero:</strong> Não ocupam espaço visual, mas afetam o comportamento do texto</li>
                <li><strong>Espaço sem quebra de linha:</strong> Parece um espaço normal, mas evita quebras de linha nesse ponto</li>
              </ul>

              <p>Vamos examinar cada tipo mais de perto para entender quando e como usá-los.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ CARACTERES DE ESPAÇO */}
        <section id="caracteres-espaco" className="sec sec--tint" aria-labelledby="h2-espaco">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-espaco" className="sh2">Caracteres de espaço</h2>

              <h3 className="sh3">Espaço regular</h3>
              <p>O espaço padrão é o que você obtém quando pressiona a barra de espaço. É o caractere invisível mais comum, usado entre palavras e frases. Em HTML e codificação, ele é representado como   ou código ASCII 32.</p>

              <h3 className="sh3">Espaço Em e Espaço En</h3>
              <p>São espaços mais largos que receberam o nome de medidas tipográficas:</p>

              <ul className="slist">
                <li><strong>Espaço Em:</strong> Um espaço tão largo quanto a letra &quot;M&quot; na fonte atual (mais largo que um espaço normal)</li>
                <li><strong>Espaço En:</strong> Metade da largura de um espaço em, aproximadamente tão largo quanto a letra &quot;N&quot;</li>
              </ul>

              <p>Esses espaços são úteis em tipografia e design profissionais quando é necessário um controle preciso do espaçamento.</p>

              <h3 className="sh3">Espaço fino</h3>
              <p>Um espaço fino é mais estreito do que um espaço regular, cerca de 1/5 ou 1/6 de um espaço em. É frequentemente usado entre números e unidades (como &quot;10 kg&quot;) ou em torno de determinados sinais de pontuação.</p>

              <h3 className="sh3">Espaço de cabelo</h3>
              <p>O espaço de cabelo é o mais fino de todos os espaços, quase invisível mesmo se você estiver procurando por ele. Ele é usado em ajustes tipográficos muito finos.</p>

              <h3 className="sh3">Quando usar cada tipo</h3>
            </div>

            <div className="tbl-wrap" role="region" aria-label="Tabela de tipos de espaço" tabIndex={0}>
              <table className="dtbl">
                <caption>Tipos de espaço e quando usá-los</caption>
                <thead>
                  <tr>
                    <th scope="col">Tipo de Espaço</th>
                    <th scope="col">Quando Usar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Espaços regulares</td><td>Entre palavras e frases</td></tr>
                  <tr><td>Espaços em e en</td><td>Para alinhamento em trabalhos de design</td></tr>
                  <tr><td>Espaços finos</td><td>Para separação sutil entre elementos</td></tr>
                  <tr><td>Espaços de cabelo</td><td>Para os menores ajustes em tipografia profissional</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ TABULAÇÃO */}
        <section id="caractere-tabulacao" className="sec" aria-labelledby="h2-tab">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-tab" className="sh2">Caractere de tabulação</h2>
              <figure className="fig-img">
                <img src="/Diferentes-tipos-de-caracteres-invisiveis.webp" alt="Diferentes tipos de caracteres invisíveis" width={300} height={300} loading="lazy" />
                <figcaption>Diferentes tipos de caracteres invisíveis</figcaption>
              </figure>

              <h3 className="sh3">O que é e como funciona</h3>
              <p>O caractere de tabulação é um caractere único invisível que cria um espaço maior do que um espaço. Quando você pressiona a tecla Tab, está inserindo esse caractere. Na codificação, ele é geralmente representado como <code>\t</code>.</p>

              <h3 className="sh3">Usos comuns em codificação e formatação de texto</h3>
              <ul className="slist">
                <li>Criação de recuo no código para mostrar a estrutura</li>
                <li>Alinhamento de texto em tabelas simples</li>
                <li>Definir recuos de parágrafo no processamento de texto</li>
                <li>Criação de listas organizadas</li>
              </ul>

              <h3 className="sh3">Possíveis problemas com as tabulações</h3>
              <ul className="slist">
                <li>Programas diferentes podem exibir as tabulações com larguras diferentes</li>
                <li>A mistura de tabulações e espaços no código pode causar problemas de alinhamento</li>
                <li>Alguns sistemas podem converter automaticamente as tabulações em espaços</li>
                <li>No desenvolvimento da Web, as tabulações nem sempre funcionam como esperado no HTML</li>
              </ul>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p><strong>Confira também:</strong> <Link href="/espacos-invisiveis-para-whatsapp">Como Usar espaços invisíveis para WhatsApp mensagens: Dicas e truques</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ QUEBRA DE LINHA */}
        <section id="quebra-linha" className="sec sec--tint" aria-labelledby="h2-quebra">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-quebra" className="sh2">Caracteres de quebra de linha</h2>

              <h3 className="sh3">Avanço de linha (LF)</h3>
              <p>A alimentação de linha (LF) move o cursor para a próxima linha sem retornar ao início. É representado como <code>\n</code> na maioria das linguagens de programação e é o final de linha padrão nos sistemas Unix e Linux.</p>

              <h3 className="sh3">Retorno de carro (CR)</h3>
              <p>O Carriage Return (CR) move o cursor para o início da linha sem mover para baixo. Ele é mostrado como <code>\r</code> no código e era o padrão nos sistemas Mac antigos (pré-OS X).</p>

              <h3 className="sh3">Combinação CRLF</h3>
              <p>A combinação CRLF usa ambos os caracteres (<code>\r\n</code>) para mover o cursor para baixo e para o início da próxima linha. Os sistemas Windows normalmente usam essa combinação para finais de linha.</p>

              <h3 className="sh3">Diferenças entre os sistemas operacionais</h3>
            </div>

            <div className="tbl-wrap" role="region" aria-label="Tabela de quebras de linha por SO" tabIndex={0}>
              <table className="dtbl">
                <caption>Quebras de linha por sistema operacional</caption>
                <thead>
                  <tr>
                    <th scope="col">Sistema Operacional</th>
                    <th scope="col">Caractere de Quebra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Windows</td><td>CRLF (<code>\r\n</code>)</td></tr>
                  <tr><td>Linux/Unix</td><td>LF (<code>\n</code>)</td></tr>
                  <tr><td>MacOS moderno</td><td>LF (<code>\n</code>)</td></tr>
                  <tr><td>Sistemas Mac antigos</td><td>CR (<code>\r</code>)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="prose">
              <p>Essas diferenças podem causar problemas de &quot;quebra de linha estranha&quot; ao mover o texto entre sistemas.</p>
              <p>Confira também nosso guia sobre: <Link href="/biografias-do-instagram-espacos-invisiveis">Como criar biografias do Instagram com o Espaços Invisíveis!</Link></p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ LARGURA ZERO */}
        <section id="largura-zero" className="sec" aria-labelledby="h2-zero">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-zero" className="sh2">Caracteres de largura zero</h2>

              <h3 className="sh3">Espaço de largura zero</h3>
              <p>Um espaço de largura zero (ZWSP) não ocupa espaço visível, mas marca um possível ponto de quebra de linha. É útil para controlar onde palavras longas podem ser quebradas em colunas estreitas.</p>

              <h3 className="sh3">Não juntador de largura zero</h3>
              <p>O não juntador de largura zero (ZWNJ) impede que dois caracteres se juntem em idiomas em que os caracteres normalmente se conectam (como árabe ou persa).</p>

              <h3 className="sh3">Unificador de largura zero</h3>
              <p>O zero-width joiner (ZWJ) faz o oposto: força os caracteres a se unirem mesmo quando normalmente não o fariam. Ele é crucial em muitas combinações de emojis e em determinados scripts.</p>

              <h3 className="sh3">Aplicações comuns e possível uso indevido</h3>
              <ul className="slist">
                <li>Usado para criar quebras de palavras adequadas em URLs longos ou termos técnicos</li>
                <li>Essencial para a exibição adequada de determinados idiomas e scripts</li>
                <li>Às vezes, mal utilizado para ocultar texto ou contornar limites de caracteres</li>
                <li>Pode ser usado em ataques de segurança se não for filtrado adequadamente no código</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ NÃO QUEBRÁVEIS */}
        <section id="nao-quebraveis" className="sec sec--tint" aria-labelledby="h2-naoq">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-naoq" className="sh2">Caracteres não quebráveis</h2>

              <h3 className="sh3">Espaço sem quebra</h3>
              <p>O espaço sem quebra se parece com um espaço normal, mas evita quebras de linha. É útil para manter palavras relacionadas juntas (como datas, nomes ou medidas). Em HTML, ele é escrito como <code>&amp;nbsp;</code>.</p>

              <h3 className="sh3">Hífen sem quebra</h3>
              <p>Um hífen sem quebra se parece com um hífen comum, mas mantém as palavras hifenizadas juntas na mesma linha. É útil para termos como &quot;up-to-date&quot; quando você não quer que eles sejam divididos em várias linhas.</p>

              <h3 className="sh3">Casos de uso em tipografia e web design</h3>
              <ul className="slist">
                <li>Manter números e unidades juntos (como &quot;100 km&quot;)</li>
                <li>Evitar quebras de linha incômodas em nomes, datas ou títulos</li>
                <li>Manter números de telefone intactos</li>
                <li>Manter a integridade de termos técnicos ou nomes de produtos</li>
              </ul>
              <p>Confira também nosso guia sobre: <Link href="/criar-nome-de-usuario-do-discord">Como usar espaços invisíveis em nomes de usuário e canais do Discord!</Link></p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ ESPECIAIS */}
        <section id="especiais" className="sec" aria-labelledby="h2-espec">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-espec" className="sh2">Caracteres especiais invisíveis</h2>

              <h3 className="sh3">Marca de ordem de bytes (BOM)</h3>
              <p>A marca de ordem de bytes é um caractere invisível no início dos arquivos de texto que indica como os bytes do arquivo estão organizados. Ele ajuda os sistemas a determinar a codificação do arquivo (como UTF-8 ou UTF-16).</p>

              <h3 className="sh3">Hífen suave</h3>
              <p>O hífen suave é invisível até que seja necessário. Ele marca onde uma palavra deve ser interrompida se cair no final de uma linha. Ele só aparece se a palavra realmente precisar ser hifenizada.</p>

              <h3 className="sh3">Unificador de palavras</h3>
              <p>O juntador de palavras é semelhante a um espaço de largura zero, mas nunca cria uma quebra de linha. Ele é usado para manter as palavras juntas, permitindo que sejam consideradas palavras separadas para pesquisa e outras funções.</p>

              <h3 className="sh3">Suas finalidades específicas</h3>
              <ul className="slist">
                <li>As listas técnicas ajudam no manuseio adequado de arquivos de texto em diferentes sistemas</li>
                <li>Os hífens suaves melhoram a legibilidade em textos justificados</li>
                <li>Os juntadores de palavras ajudam nos idiomas que não usam espaços entre as palavras</li>
                <li>Esses caracteres resolvem problemas técnicos específicos que o espaçamento regular não consegue resolver</li>
              </ul>

              <div className="tip">
                <span className="tip__ico" aria-hidden="true">💡</span>
                <p><strong>Você também pode conferir:</strong> <Link href="/espacos-invisiveis-desaparecem">Porque é que seus espaços invisíveis desaparecem em determinadas plataformas</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ APLICATIVOS */}
        <section id="aplicativos" className="sec sec--tint" aria-labelledby="h2-app">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-app" className="sh2">Aplicativos práticos</h2>

              <h3 className="sh3">Desenvolvimento web e HTML</h3>
              <p>No desenvolvimento da Web, os caracteres invisíveis desempenham um papel fundamental no espaçamento e na formatação. O HTML comprime vários espaços regulares em um só, portanto, os desenvolvedores usam espaços sem quebra (<code>&amp;nbsp;</code>) para criar um espaçamento extra. Os espaços de largura zero ajudam a quebrar palavras em URLs longos ou termos técnicos. As quebras de linha adequadas garantem uma exibição consistente nos navegadores.</p>

              <h3 className="sh3">Programação e formatação de código</h3>
              <p>Os programadores dependem muito de caracteres invisíveis para a estrutura do código. A indentação usando tabulações ou espaços torna o código legível, mostrando a hierarquia e as relações entre as linhas. As quebras de linha separam blocos lógicos de código. Muitas linguagens de programação tratam os caracteres invisíveis como sintaxe significativa – o Python, por exemplo, usa recuo para definir blocos de código em vez de chaves ou palavras-chave.</p>

              <h3 className="sh3">Formatação de documentos</h3>
              <p>Na edição de documentos, os caracteres invisíveis controlam o fluxo e o layout do texto. Espaços não quebráveis mantêm itens relacionados juntos (como datas ou medidas). Os hífens suaves melhoram as quebras de palavras em textos justificados. Os espaços especiais criam uma tipografia de aparência profissional em currículos, relatórios e publicações sem que o leitor perceba o espaçamento cuidadoso.</p>

              <h3 className="sh3">Tipografia e design</h3>
              <p>A tipografia profissional usa toda a gama de caracteres invisíveis. Os espaços em e en criam um alinhamento preciso nos layouts. Espaços finos adicionam um espaço sutil para respirar ao redor da pontuação. Os juntores e não juntores de largura zero garantem a exibição adequada de scripts complexos. Esses pequenos detalhes podem passar despercebidos pela maioria dos leitores, mas melhoram significativamente a legibilidade e o apelo visual.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ PROBLEMAS */}
        <section id="problemas" className="sec" aria-labelledby="h2-prob">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-prob" className="sh2">Problemas em potencial</h2>

              <h3 className="sh3">Problemas de compatibilidade</h3>
              <p>Sistemas diferentes interpretam caracteres invisíveis de forma diferente. Por exemplo, um espaço de largura zero pode aparecer como um espaço vazio em um navegador, mas ser exibido como uma pequena caixa em outro. Esses problemas de compatibilidade podem causar layouts inesperados ou caracteres estranhos em seu texto.</p>

              <h3 className="sh3">Erros de codificação</h3>
              <p>Quando o texto é movido entre sistemas com codificações diferentes, os caracteres invisíveis podem ser convertidos incorretamente. Isso pode levar a um texto corrompido, perda de formatação ou até mesmo a caracteres estranhos que aparecem do nada.</p>

              <h3 className="sh3">Riscos de segurança</h3>
              <p>Caracteres invisíveis podem ser usados para fins maliciosos:</p>

              <ul className="slist">
                <li>Ocultação de código malicioso em arquivos de texto aparentemente inofensivos</li>
                <li>Criação de URLs ou endereços de e-mail enganosos que parecem legítimos</li>
                <li>Contorno de filtros de conteúdo ou limites de caracteres</li>
                <li>Inserção de dados ocultos em comunicações</li>
              </ul>

              <h3 className="sh3">Dicas de solução de problemas</h3>
              <ol className="steps">
                <li>
                  <span className="snum" aria-hidden="true">1</span>
                  <div><strong>Use editores de texto</strong><p>que possam mostrar caracteres invisíveis (como Notepad++ ou VS Code com a configuração &quot;renderizar espaços em branco&quot;)</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">2</span>
                  <div><strong>Verifique a codificação</strong><p>ao mover texto entre sistemas</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">3</span>
                  <div><strong>Limite o uso</strong><p>de caracteres especiais a situações em que são realmente necessários</p></div>
                </li>
                <li>
                  <span className="snum" aria-hidden="true">4</span>
                  <div><strong>Teste seu conteúdo</strong><p>em vários navegadores e dispositivos</p></div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FERRAMENTAS */}
        <section id="ferramentas" className="sec sec--tint" aria-labelledby="h2-ferr">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-ferr" className="sh2">Ferramentas para trabalhar com caracteres invisíveis</h2>

              <h3 className="sh3">Editores de texto com revelação de caracteres</h3>
              <ul className="slist">
                <li><strong>VS Code:</strong> Pode mostrar espaços em branco com a configuração &quot;Editor: Render Whitespace&quot;</li>
                <li><strong>Notepad++:</strong> Tem opções embutidas para mostrar caracteres invisíveis</li>
                <li><strong>Sublime Text:</strong> Pode renderizar espaços em branco com plugins ou configurações</li>
              </ul>

              <h3 className="sh3">Ferramentas online de análise de texto</h3>
              <ul className="slist">
                <li>Visualizadores de Unicode que mostram cada caractere em uma string</li>
                <li>Ferramentas de limpeza de texto que removem caracteres invisíveis indesejados</li>
                <li>Conversores de codificação para trabalhar com diferentes formatos de texto</li>
              </ul>

              <h3 className="sh3">Ferramentas de desenvolvedor do navegador</h3>
              <p>A maioria dos navegadores modernos tem ferramentas de desenvolvedor que podem ajudar a identificar caracteres invisíveis no conteúdo da Web. Você pode inspecionar elementos de texto e ver a representação hexadecimal ou Unicode de cada caractere.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ CONCLUSÃO */}
        <section id="conclusao" className="sec" aria-labelledby="h2-conclusao">
          <div className="wrap">
            <div className="prose">
              <h2 id="h2-conclusao" className="sh2">Conclusão</h2>
              <p>
                Os caracteres invisíveis são ferramentas poderosas que desempenham um papel crucial no texto digital, desde a formatação simples até a codificação complexa. Compreender os diferentes tipos – espaços, tabulações, quebras de linha, caracteres de largura zero e caracteres não quebráveis – ajuda você a usá-los de forma eficaz e a evitar problemas comuns.
              </p>

              <p>Lembre-se destes pontos-chave:</p>

              <ul className="slist">
                <li>Cada tipo de caractere invisível serve a um propósito específico</li>
                <li>Sistemas diferentes podem interpretar esses caracteres de forma diferente</li>
                <li>Os caracteres de largura zero afetam o comportamento do texto sem ocupar espaço</li>
                <li>Os caracteres não quebráveis mantêm elementos relacionados juntos</li>
                <li>Use as ferramentas certas para visualizar e gerenciar caracteres invisíveis</li>
              </ul>

              <p>
                Ao entender como esses caracteres funcionam, você pode criar textos melhor formatados, código mais limpo e layouts mais consistentes em diferentes plataformas e dispositivos.
              </p>

              <div className="cta-box">
                <p>Experimente nosso Gerador de Espaço Invisível</p>
                <Link href="/" className="btn btn--primary">Gerar agora →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ FAQ */}
        <section id="faq" className="sec sec--tint" aria-labelledby="h2-faq">
          <div className="wrap">
            <h2 id="h2-faq" className="sh2 tc">Perguntas frequentes</h2>
            <p className="ssub tc">Respostas para as dúvidas mais comuns sobre caracteres invisíveis</p>

            <div className="faqgrid">
              <details className="faqd">
                <summary className="faqd__q">
                  <span>Os caracteres invisíveis afetam o SEO do meu site?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>O uso normal de caracteres invisíveis para formatação não afeta negativamente o SEO. No entanto, o uso excessivo ou manipulador (como ocultar palavras-chave) pode ser penalizado pelos mecanismos de busca. Use-os de forma responsável para melhorar a legibilidade e a experiência do usuário.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Por que meu código não funciona quando copio e colo texto?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>Quando você copia texto de fontes diferentes, caracteres invisíveis ocultos podem ser incluídos. Esses caracteres podem interferir com a sintaxe do código. Tente colar primeiro em um editor de texto simples ou use uma ferramenta que remova caracteres invisíveis antes de colar no seu código.</p></div>
              </details>

              <details className="faqd">
                <summary className="faqd__q">
                  <span>Qual é a diferença entre espaço de largura zero e espaço sem quebra?</span>
                  <span className="faqd__arr" aria-hidden="true">+</span>
                </summary>
                <div className="faqd__a"><p>O espaço de largura zero (ZWSP) não ocupa espaço visual, mas marca um possível ponto de quebra de linha. O espaço sem quebra (NBSP) ocupa espaço visual como um espaço normal, mas impede que o texto seja quebrado nesse ponto. Use ZWSP para permitir quebras em palavras longas e NBSP para manter palavras juntas.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ POST NAV */}
        <section className="sec" aria-label="Navegação de Post">
          <div className="wrap">
            <h2 className="sh2">Navegação de Post</h2>
            <div className="post-nav">
              <Link href="/espacos-invisiveis-desaparecem" className="post-nav__link">
                <span className="post-nav__label">← Post anterior</span>
                <span className="post-nav__title">Porque é que os seus espaços invisíveis desaparecem em determinadas plataformas</span>
              </Link>
              <Link href="/espacos-invisiveis-whatsapp" className="post-nav__link">
                <span className="post-nav__label">Próximo post →</span>
                <span className="post-nav__title">Como Usar espaços invisíveis para WhatsApp mensagens</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ RELATED */}
        <section className="sec sec--tint" aria-labelledby="h2-related">
          <div className="wrap">
            <h2 id="h2-related" className="sh2">Posts Similares</h2>
            <p className="ssub">Explore mais conteúdos sobre espaços invisíveis e formatação de texto</p>

            <div className="bgrid">
              <article className="bcard">
                <span className="bcard__cat">Discussões</span>
                <h3><Link href="/espacos-invisiveis-desaparecem">Porque é que os seus espaços invisíveis desaparecem</Link></h3>
                <p>Saiba porque é que os espaços invisíveis desaparecem nas redes sociais e noutras plataformas, além de soluções fáceis.</p>
                <Link href="/espacos-invisiveis-desaparecem" className="bcard__more">Ler mais →</Link>
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
            <img src="/logo.svg" alt="Espaço Invisível Logo" className="logo-img" />
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

      {/* ═══════════════════════════════════════════════════════ GLOBAL STYLES */}
      <style>{`
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

"use client";

import { useState, useEffect } from "react";

// Helper function to map characters
function mapChars(text: string, normalChars: string, mappedChars: string): string {
  return [...text].map(char => {
    const idx = normalChars.indexOf(char.toLowerCase());
    if (idx !== -1) {
      // Check if the character is uppercase
      return char === char.toUpperCase() && char.toUpperCase() !== char.toLowerCase() 
        ? mappedChars[idx + 26] // Get uppercase version (offset by 26)
        : mappedChars[idx];     // Get lowercase version
    }
    return char; // Return unchanged if not found
  }).join('');
}

// Define styled text transformations with icons
const textStyles = [
  {
    name: "Pequeno",
    icon: "↓",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const small = 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᑫᴿˢᵀᵁⱽᵂˣʸᶻ';
      return mapChars(text, normal, small);
    }
  },
  {
    name: "Circular",
    icon: "○",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const circled = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨';
      return mapChars(text, normal, circled);
    }
  },
  {
    name: "Letras Pequenas",
    icon: "A",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const smallCaps = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return mapChars(text, normal, smallCaps);
    }
  },
  {
    name: "Negrito",
    icon: "B",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const bold = '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
      return mapChars(text, normal, bold);
    }
  },
  {
    name: "Itálico",
    icon: "I",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const italic = '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡';
      return mapChars(text, normal, italic);
    }
  },
  {
    name: "Negrito Itálico",
    icon: "BI",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const boldItalic = '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕';
      return mapChars(text, normal, boldItalic);
    }
  },
  {
    name: "Script",
    icon: "S",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const script = '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵';
      return mapChars(text, normal, script);
    }
  },
  {
    name: "Gótico",
    icon: "G",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const gothic = '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ';
      return mapChars(text, normal, gothic);
    }
  },
  {
    name: "Double-Struck",
    icon: "D",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const doubleStruck = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
      return mapChars(text, normal, doubleStruck);
    }
  },
  {
    name: "Monospace",
    icon: "M",
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const mono = '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';
      return mapChars(text, normal, mono);
    }
  },
  {
    name: "Sublinhado",
    icon: "_",
    transform: (text: string) => {
      return [...text].map(char => char + '\u0332').join('');
    }
  },
  {
    name: "Riscado",
    icon: "—",
    transform: (text: string) => {
      return [...text].map(char => char + '\u0336').join('');
    }
  },
  {
    name: "Estilo Ondulado",
    icon: "~",
    transform: (text: string) => {
      return [...text].map(char => char + '\u1DD3').join('');
    }
  },
  {
    name: "Espaçado",
    icon: "··",
    transform: (text: string) => {
      return [...text].join(' ');
    }
  },
  {
    name: "Colchetes",
    icon: "【】",
    transform: (text: string) => {
      return `【 ${text} 】`;
    }
  },
  {
    name: "Estilo Citacao",
    icon: "\"",
    transform: (text: string) => {
      return `" ${text} "`;
    }
  },
  {
    name: "Brilhos",
    icon: "✨",
    transform: (text: string) => {
      return `✨ ${text} ✨`;
    }
  },
  {
    name: "Estrelas",
    icon: "★",
    transform: (text: string) => {
      return `★ ${text} ★`;
    }
  },
  {
    name: "Setas",
    icon: "→",
    transform: (text: string) => {
      return `→ ${text} ←`;
    }
  },
  {
    name: "Coracoes",
    icon: "❤",
    transform: (text: string) => {
      return `❤️ ${text} ❤️`;
    }
  },
  {
    name: "Separado por Pontos",
    icon: "•",
    transform: (text: string) => {
      return [...text].join('•');
    }
  },
  {
    name: "Moldura Elegante",
    icon: "╭╯",
    transform: (text: string) => {
      return `╭─━━━━━━━━─╮\n    ${text}\n╰─━━━━━━━━─╯`;
    }
  },
  {
    name: "Letras Maiusculas",
    icon: "AA",
    transform: (text: string) => {
      return text.toUpperCase();
    }
  },
  {
    name: "Letras Minusculas",
    icon: "aa",
    transform: (text: string) => {
      return text.toLowerCase();
    }
  }
];

export function TextStyleTool() {
  const [inputText, setInputText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("text-style-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("text-style-theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={`tst ${isDarkMode ? "tst--dark" : ""}`}>
      <div className="tst__inner">
        <div className="tst__head">
          <h3 className="tst__title">Gerador de Estilos de Texto</h3>
          <p className="tst__desc">Transforme seu texto em varios formatos estilizados para redes sociais, nomes de usuario, mensagens e muito mais!</p>
        </div>

        <div className="tst__input-wrap">
          <input
            type="text"
            className="tst__input"
            placeholder="Digite seu texto aqui..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            autoComplete="off"
          />
          {inputText && (
            <button 
              className="tst__clear" 
              onClick={() => setInputText("")}
              aria-label="Limpar texto"
            >
              x
            </button>
          )}
        </div>

        {!inputText ? (
          <div className="tst__empty">
            <span className="tst__empty-ico">⌨</span>
            <p>Digite algo no campo de texto acima para ver transformado em diferentes estilos</p>
          </div>
        ) : (
          <div className="tst__grid">
            {textStyles.map((style, index) => {
              const transformedText = style.transform(inputText);
              return (
                <div key={style.name} className="tst__card">
                  <div className="tst__card-name">
                    <span className="tst__card-ico">{style.icon}</span>
                    {style.name}
                  </div>
                  <div className="tst__card-text">{transformedText}</div>
                  <button
                    className={`tst__copy ${copiedIndex === index ? "tst__copy--done" : ""}`}
                    onClick={() => handleCopy(transformedText, index)}
                  >
                    {copiedIndex === index ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <button className="tst__theme" onClick={toggleTheme} aria-label="Alternar tema">
          {isDarkMode ? "☀" : "☾"}
        </button>
      </div>

      <style>{`
        .tst {
          --tst-primary: #0A2F6C;
          --tst-accent: #4895ef;
          --tst-text: #333;
          --tst-bg: #f8f9fa;
          --tst-card: #fff;
          --tst-border: #e9ecef;
          --tst-shadow: rgba(0, 0, 0, 0.1);
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          line-height: 1.6;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
          background: var(--tst-bg);
          position: relative;
        }

        .tst--dark {
          --tst-primary: #4cc9f0;
          --tst-accent: #3a86ff;
          --tst-text: #e9ecef;
          --tst-bg: #121212;
          --tst-card: #1e1e1e;
          --tst-border: #333;
          --tst-shadow: rgba(0, 0, 0, 0.3);
        }

        .tst__inner {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          color: var(--tst-text);
        }

        .tst__head {
          text-align: center;
          margin-bottom: 30px;
        }

        .tst__title {
          font-size: 28px;
          font-weight: 700;
          color: var(--tst-primary);
          margin-bottom: 10px;
        }

        .tst__desc {
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .tst--dark .tst__desc {
          color: #aaa;
        }

        .tst__input-wrap {
          position: relative;
          margin-bottom: 30px;
        }

        .tst__input {
          width: 100%;
          padding: 15px 50px 15px 20px;
          font-size: 18px;
          border: 2px solid var(--tst-border);
          border-radius: 12px;
          background-color: var(--tst-card);
          color: var(--tst-text);
          box-shadow: 0 2px 8px var(--tst-shadow);
          transition: all 0.2s ease;
        }

        .tst__input:focus {
          outline: none;
          border-color: var(--tst-accent);
          box-shadow: 0 4px 12px rgba(10, 47, 108, 0.15);
        }

        .tst__clear {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          font-size: 20px;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .tst__clear:hover {
          opacity: 1;
        }

        .tst__empty {
          text-align: center;
          padding: 40px 20px;
          color: #888;
        }

        .tst__empty-ico {
          font-size: 40px;
          display: block;
          margin-bottom: 15px;
          color: var(--tst-primary);
        }

        .tst__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .tst__card {
          background-color: var(--tst-card);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px var(--tst-shadow);
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid var(--tst-border);
          overflow: hidden;
        }

        .tst__card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px var(--tst-shadow);
          border-color: var(--tst-accent);
        }

        .tst__card-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--tst-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tst__card-ico {
          font-size: 14px;
        }

        .tst__card-text {
          font-size: 20px;
          line-height: 1.4;
          margin: 10px 0;
          word-break: break-word;
          min-height: 60px;
          color: var(--tst-text);
        }

        .tst__copy {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: var(--tst-primary);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.2s;
        }

        .tst__card:hover .tst__copy {
          opacity: 1;
          transform: translateX(0);
        }

        .tst__copy:hover {
          filter: brightness(1.1);
        }

        .tst__copy--done {
          background-color: #2ecc71 !important;
        }

        .tst__theme {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: var(--tst-primary);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 100;
          transition: transform 0.2s;
          border: none;
          font-size: 20px;
        }

        .tst__theme:hover {
          transform: scale(1.1);
        }

        @media (max-width: 680px) {
          .tst {
            padding: 15px;
          }

          .tst__inner {
            padding: 0 10px;
          }

          .tst__title {
            font-size: 22px;
          }

          .tst__grid {
            grid-template-columns: 1fr;
          }

          .tst__copy {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

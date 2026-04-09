"use client";

import { useState, useCallback } from "react";

// ─── Unicode Style Transformations ───────────────────────────────────────────
const styles: { name: string; transform: (text: string) => string }[] = [
  { name: "Normal", transform: (t) => t },
  { name: "Negrito Unicode", transform: (t) => toBold(t) },
  { name: "Itálico Unicode", transform: (t) => toItalic(t) },
  { name: "Negrito Itálico", transform: (t) => toBoldItalic(t) },
  { name: "Gótico", transform: (t) => toFraktur(t) },
  { name: "Gótico Negrito", transform: (t) => toBoldFraktur(t) },
  { name: "Script", transform: (t) => toScript(t) },
  { name: "Script Negrito", transform: (t) => toBoldScript(t) },
  { name: "Duplo Traço", transform: (t) => toDoubleStruck(t) },
  { name: "Monoespaçado", transform: (t) => toMonospace(t) },
  { name: "Pequeno (Sobrescrito)", transform: (t) => toSuperscript(t) },
  { name: "Pequeno (Subscrito)", transform: (t) => toSubscript(t) },
  { name: "Circular", transform: (t) => toCircled(t) },
  { name: "Circular Preenchido", transform: (t) => toCircledNegative(t) },
  { name: "Quadrado", transform: (t) => toSquared(t) },
  { name: "Quadrado Preenchido", transform: (t) => toSquaredNegative(t) },
  { name: "Invertido", transform: (t) => toUpsideDown(t) },
  { name: "Espelhado", transform: (t) => toMirrored(t) },
  { name: "Com Sublinhado", transform: (t) => withUnderline(t) },
  { name: "Com Tachado", transform: (t) => withStrikethrough(t) },
  { name: "Parênteses", transform: (t) => toParenthesized(t) },
  { name: "Estilo Vaporwave", transform: (t) => toFullwidth(t) },
  { name: "Serif Negrito", transform: (t) => toSerifBold(t) },
  { name: "Serif Itálico", transform: (t) => toSerifItalic(t) },
  { name: "Sans Serif", transform: (t) => toSansSerif(t) },
  { name: "Sans Negrito", transform: (t) => toSansBold(t) },
  { name: "Sans Itálico", transform: (t) => toSansItalic(t) },
  { name: "Sans Negrito Itálico", transform: (t) => toSansBoldItalic(t) },
  { name: "Sublinhado Duplo", transform: (t) => withDoubleUnderline(t) },
  { name: "Com Pontos", transform: (t) => withDots(t) },
];

// ─── Character Mappings ──────────────────────────────────────────────────────

function charMap(text: string, map: Record<string, string>): string {
  return text
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}

// Bold
const boldMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  .split("")
  .forEach((c, i) => {
    if (i < 26) boldMap[c] = String.fromCodePoint(0x1d400 + i);
    else if (i < 52) boldMap[c] = String.fromCodePoint(0x1d41a + (i - 26));
    else boldMap[c] = String.fromCodePoint(0x1d7ce + (i - 52));
  });
function toBold(t: string) {
  return charMap(t, boldMap);
}

// Italic
const italicMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) italicMap[c] = String.fromCodePoint(0x1d434 + i);
    else italicMap[c] = String.fromCodePoint(0x1d44e + (i - 26));
  });
italicMap["h"] = "ℎ";
function toItalic(t: string) {
  return charMap(t, italicMap);
}

// Bold Italic
const boldItalicMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) boldItalicMap[c] = String.fromCodePoint(0x1d468 + i);
    else boldItalicMap[c] = String.fromCodePoint(0x1d482 + (i - 26));
  });
function toBoldItalic(t: string) {
  return charMap(t, boldItalicMap);
}

// Fraktur (Gothic)
const frakturMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) frakturMap[c] = String.fromCodePoint(0x1d504 + i);
    else frakturMap[c] = String.fromCodePoint(0x1d51e + (i - 26));
  });
// Fix special chars
frakturMap["C"] = "ℭ";
frakturMap["H"] = "ℌ";
frakturMap["I"] = "ℑ";
frakturMap["R"] = "ℜ";
frakturMap["Z"] = "ℨ";
function toFraktur(t: string) {
  return charMap(t, frakturMap);
}

// Bold Fraktur
const boldFrakturMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) boldFrakturMap[c] = String.fromCodePoint(0x1d56c + i);
    else boldFrakturMap[c] = String.fromCodePoint(0x1d586 + (i - 26));
  });
function toBoldFraktur(t: string) {
  return charMap(t, boldFrakturMap);
}

// Script
const scriptMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) scriptMap[c] = String.fromCodePoint(0x1d49c + i);
    else scriptMap[c] = String.fromCodePoint(0x1d4b6 + (i - 26));
  });
// Fix special chars
scriptMap["B"] = "ℬ";
scriptMap["E"] = "ℰ";
scriptMap["F"] = "ℱ";
scriptMap["H"] = "ℋ";
scriptMap["I"] = "ℐ";
scriptMap["L"] = "ℒ";
scriptMap["M"] = "ℳ";
scriptMap["R"] = "ℛ";
scriptMap["e"] = "ℯ";
scriptMap["g"] = "ℊ";
scriptMap["o"] = "ℴ";
function toScript(t: string) {
  return charMap(t, scriptMap);
}

// Bold Script
const boldScriptMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) boldScriptMap[c] = String.fromCodePoint(0x1d4d0 + i);
    else boldScriptMap[c] = String.fromCodePoint(0x1d4ea + (i - 26));
  });
function toBoldScript(t: string) {
  return charMap(t, boldScriptMap);
}

// Double Struck
const doubleStruckMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  .split("")
  .forEach((c, i) => {
    if (i < 26) doubleStruckMap[c] = String.fromCodePoint(0x1d538 + i);
    else if (i < 52) doubleStruckMap[c] = String.fromCodePoint(0x1d552 + (i - 26));
    else doubleStruckMap[c] = String.fromCodePoint(0x1d7d8 + (i - 52));
  });
// Fix special chars
doubleStruckMap["C"] = "ℂ";
doubleStruckMap["H"] = "ℍ";
doubleStruckMap["N"] = "ℕ";
doubleStruckMap["P"] = "ℙ";
doubleStruckMap["Q"] = "ℚ";
doubleStruckMap["R"] = "ℝ";
doubleStruckMap["Z"] = "ℤ";
function toDoubleStruck(t: string) {
  return charMap(t, doubleStruckMap);
}

// Monospace
const monospaceMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  .split("")
  .forEach((c, i) => {
    if (i < 26) monospaceMap[c] = String.fromCodePoint(0x1d670 + i);
    else if (i < 52) monospaceMap[c] = String.fromCodePoint(0x1d68a + (i - 26));
    else monospaceMap[c] = String.fromCodePoint(0x1d7f6 + (i - 52));
  });
function toMonospace(t: string) {
  return charMap(t, monospaceMap);
}

// Superscript
const superscriptMap: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "q", r: "ʳ",
  s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ",
  J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "Q", R: "ᴿ",
  S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶",
  "7": "⁷", "8": "⁸", "9": "⁹",
};
function toSuperscript(t: string) {
  return charMap(t, superscriptMap);
}

// Subscript
const subscriptMap: Record<string, string> = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆",
  "7": "₇", "8": "₈", "9": "₉",
};
function toSubscript(t: string) {
  return charMap(t, subscriptMap);
}

// Circled
const circledMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => {
  circledMap[c] = String.fromCodePoint(0x24b6 + i);
});
"abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => {
  circledMap[c] = String.fromCodePoint(0x24d0 + i);
});
"123456789".split("").forEach((c, i) => {
  circledMap[c] = String.fromCodePoint(0x2460 + i);
});
circledMap["0"] = "⓪";
function toCircled(t: string) {
  return charMap(t, circledMap);
}

// Circled Negative (filled)
const circledNegMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => {
  circledNegMap[c] = String.fromCodePoint(0x1f150 + i);
});
function toCircledNegative(t: string) {
  return charMap(t.toUpperCase(), circledNegMap);
}

// Squared
const squaredMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => {
  squaredMap[c] = String.fromCodePoint(0x1f130 + i);
});
function toSquared(t: string) {
  return charMap(t.toUpperCase(), squaredMap);
}

// Squared Negative (filled)
const squaredNegMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => {
  squaredNegMap[c] = String.fromCodePoint(0x1f170 + i);
});
function toSquaredNegative(t: string) {
  return charMap(t.toUpperCase(), squaredNegMap);
}

// Upside Down
const upsideDownMap: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ",
  j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "q", C: "Ɔ", D: "p", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H", I: "I",
  J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Q", R: "ɹ",
  S: "S", T: "┴", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ",
  "8": "8", "9": "6", "0": "0", ".": "˙", ",": "'", "'": ",", '"': "„",
  "?": "¿", "!": "¡", "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
  "<": ">", ">": "<", "&": "⅋", "_": "‾",
};
function toUpsideDown(t: string) {
  return charMap(t, upsideDownMap).split("").reverse().join("");
}

// Mirrored
const mirroredMap: Record<string, string> = {
  a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "ʇ", g: "ǫ", h: "ʜ", i: "i",
  j: "ꞁ", k: "ʞ", l: "l", m: "m", n: "ᴎ", o: "o", p: "q", q: "p", r: "ɿ",
  s: "ꙅ", t: "ƚ", u: "u", v: "v", w: "w", x: "x", y: "ʏ", z: "ƹ",
  A: "A", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ᖷ", G: "ꓜ", H: "H", I: "I",
  J: "Ⴑ", K: "ꓘ", L: "⅃", M: "M", N: "ᴎ", O: "O", P: "ꟼ", Q: "Ọ", R: "Я",
  S: "Ꙅ", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Ƹ",
};
function toMirrored(t: string) {
  return charMap(t, mirroredMap).split("").reverse().join("");
}

// With combining characters
function withUnderline(t: string) {
  return t
    .split("")
    .map((c) => c + "\u0332")
    .join("");
}

function withStrikethrough(t: string) {
  return t
    .split("")
    .map((c) => c + "\u0336")
    .join("");
}

function withDoubleUnderline(t: string) {
  return t
    .split("")
    .map((c) => c + "\u0333")
    .join("");
}

function withDots(t: string) {
  return t
    .split("")
    .map((c) => c + "\u0307")
    .join("");
}

// Parenthesized
const parenthesizedMap: Record<string, string> = {};
"abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => {
  parenthesizedMap[c] = String.fromCodePoint(0x249c + i);
});
"123456789".split("").forEach((c, i) => {
  parenthesizedMap[c] = String.fromCodePoint(0x2474 + i);
});
function toParenthesized(t: string) {
  return charMap(t.toLowerCase(), parenthesizedMap);
}

// Fullwidth (Vaporwave)
const fullwidthMap: Record<string, string> = {};
for (let i = 33; i <= 126; i++) {
  fullwidthMap[String.fromCharCode(i)] = String.fromCodePoint(0xff00 + i - 32);
}
fullwidthMap[" "] = "　";
function toFullwidth(t: string) {
  return charMap(t, fullwidthMap);
}

// Serif Bold
const serifBoldMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) serifBoldMap[c] = String.fromCodePoint(0x1d400 + i);
    else serifBoldMap[c] = String.fromCodePoint(0x1d41a + (i - 26));
  });
function toSerifBold(t: string) {
  return charMap(t, serifBoldMap);
}

// Serif Italic
const serifItalicMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) serifItalicMap[c] = String.fromCodePoint(0x1d434 + i);
    else serifItalicMap[c] = String.fromCodePoint(0x1d44e + (i - 26));
  });
serifItalicMap["h"] = "ℎ";
function toSerifItalic(t: string) {
  return charMap(t, serifItalicMap);
}

// Sans Serif
const sansSerifMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  .split("")
  .forEach((c, i) => {
    if (i < 26) sansSerifMap[c] = String.fromCodePoint(0x1d5a0 + i);
    else if (i < 52) sansSerifMap[c] = String.fromCodePoint(0x1d5ba + (i - 26));
    else sansSerifMap[c] = String.fromCodePoint(0x1d7e2 + (i - 52));
  });
function toSansSerif(t: string) {
  return charMap(t, sansSerifMap);
}

// Sans Bold
const sansBoldMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  .split("")
  .forEach((c, i) => {
    if (i < 26) sansBoldMap[c] = String.fromCodePoint(0x1d5d4 + i);
    else if (i < 52) sansBoldMap[c] = String.fromCodePoint(0x1d5ee + (i - 26));
    else sansBoldMap[c] = String.fromCodePoint(0x1d7ec + (i - 52));
  });
function toSansBold(t: string) {
  return charMap(t, sansBoldMap);
}

// Sans Italic
const sansItalicMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) sansItalicMap[c] = String.fromCodePoint(0x1d608 + i);
    else sansItalicMap[c] = String.fromCodePoint(0x1d622 + (i - 26));
  });
function toSansItalic(t: string) {
  return charMap(t, sansItalicMap);
}

// Sans Bold Italic
const sansBoldItalicMap: Record<string, string> = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((c, i) => {
    if (i < 26) sansBoldItalicMap[c] = String.fromCodePoint(0x1d63c + i);
    else sansBoldItalicMap[c] = String.fromCodePoint(0x1d656 + (i - 26));
  });
function toSansBoldItalic(t: string) {
  return charMap(t, sansBoldItalicMap);
}

// ─── Component ───────────────────────────────────────────────────────────────

export function LetrasDiferentesTool() {
  const [input, setInput] = useState("Letras Bonitas");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = useCallback(async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  }, []);

  const results = styles.map((s) => ({
    name: s.name,
    result: s.transform(input || "Digite algo..."),
  }));

  return (
    <div className="letras-tool">
      <div className="letras-tool__input-wrap">
        <label htmlFor="letras-input" className="letras-tool__label">
          Digite seu texto:
        </label>
        <input
          id="letras-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite seu texto aqui..."
          className="letras-tool__input"
          autoComplete="off"
        />
      </div>

      <div className="letras-tool__grid" role="list">
        {results.map((r, idx) => (
          <div key={r.name} className="letras-tool__card" role="listitem">
            <div className="letras-tool__card-head">
              <span className="letras-tool__style-name">{r.name}</span>
              <button
                type="button"
                onClick={() => handleCopy(r.result, idx)}
                className={`letras-tool__copy-btn ${copiedIdx === idx ? "letras-tool__copy-btn--copied" : ""}`}
                aria-label={`Copiar estilo ${r.name}`}
              >
                {copiedIdx === idx ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <div className="letras-tool__result" aria-label={`Resultado: ${r.name}`}>
              {r.result}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .letras-tool {
          margin-top: 24px;
        }
        .letras-tool__input-wrap {
          margin-bottom: 28px;
        }
        .letras-tool__label {
          display: block;
          font-family: var(--fh, 'Syne', sans-serif);
          font-weight: 700;
          font-size: 1rem;
          color: var(--navy, #091e3a);
          margin-bottom: 10px;
        }
        .letras-tool__input {
          width: 100%;
          padding: 16px 20px;
          font-size: 1.15rem;
          font-family: var(--fb, 'DM Sans', system-ui, sans-serif);
          border: 2px solid var(--bdr, #dde5f5);
          border-radius: 12px;
          background: var(--surf, #ffffff);
          color: var(--txt, #111827);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .letras-tool__input:focus {
          outline: none;
          border-color: var(--blue, #1a56db);
          box-shadow: 0 0 0 4px rgba(26, 86, 219, 0.12);
        }
        .letras-tool__input::placeholder {
          color: var(--muted, #6b7280);
        }
        .letras-tool__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .letras-tool__card {
          background: var(--surf, #ffffff);
          border: 1px solid var(--bdr, #dde5f5);
          border-radius: 14px;
          padding: 18px 20px;
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
        }
        .letras-tool__card:hover {
          box-shadow: 0 8px 32px rgba(9, 30, 58, 0.1);
          transform: translateY(-2px);
          border-color: rgba(26, 86, 219, 0.25);
        }
        .letras-tool__card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--bdr, #dde5f5);
        }
        .letras-tool__style-name {
          font-family: var(--fh, 'Syne', sans-serif);
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy, #091e3a);
        }
        .letras-tool__copy-btn {
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--fb, 'DM Sans', system-ui, sans-serif);
          background: var(--orange, #f05a1a);
          color: #fff;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .letras-tool__copy-btn:hover {
          background: var(--orange2, #ff7a3d);
          transform: scale(1.03);
        }
        .letras-tool__copy-btn--copied {
          background: #10b981;
        }
        .letras-tool__result {
          font-size: 1.35rem;
          word-break: break-word;
          line-height: 1.5;
          color: var(--txt, #111827);
          min-height: 2.7rem;
        }
        @media (max-width: 680px) {
          .letras-tool__grid {
            grid-template-columns: 1fr;
          }
          .letras-tool__input {
            font-size: 1rem;
            padding: 14px 16px;
          }
          .letras-tool__result {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  );
}

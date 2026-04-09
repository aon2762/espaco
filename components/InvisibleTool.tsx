"use client";
// components/InvisibleTool.tsx
// Drop this into: components/InvisibleTool.tsx

import { useState, useRef, useCallback, useEffect } from "react";

type SpaceType = "social" | "web" | "formatting";
type Lang = "pt" | "en";

const SPACE_CHARS: Record<SpaceType, string> = {
  social:     "ㅤ",    // U+3164 Hangul Filler — best for games/social
  web:        "⠀",    // U+2800 Braille Pattern Blank — best for web
  formatting: "\u200B", // U+200B Zero-Width Space — best for text formatting
};

const TRACKER = "\u200B"; // invisible tracker so we can count spaces

const T = {
  pt: {
    title:"Gerador de espaço invisível", charCount:"Caracteres: ", spaceCount:"Espaços invisíveis: ",
    spacesAdded:"Espaços adicionados: ", placeholder:"Digite seu texto aqui",
    copy:"Copiar", copied:"Copiado! ✓", small:"Pequeno", medium:"Médio", large:"Grande",
    customLabel:"Número de Espaços:", typeLabel:"Tipo de Espaço:",
    typeSocial:"Redes Sociais & Jogos (Recomendado)", typeWeb:"Sites & Desenvolvimento Web",
    typeFormat:"Formatação de Texto", insert:"Inserir", clear:"Limpar",
    save:"Salvar", load:"Carregar", export:"Exportar", darkMode:"Modo Escuro",
    langSwitch:"English", saved:"Texto salvo!", noSaved:"Nenhum texto salvo.", failCopy:"Falha ao copiar.",
    personalize:"Copiar e Personalizar Letras",
  },
  en: {
    title:"Invisible Space Generator", charCount:"Characters: ", spaceCount:"Invisible spaces: ",
    spacesAdded:"Spaces added: ", placeholder:"Enter your text here",
    copy:"Copy", copied:"Copied! ✓", small:"Small", medium:"Medium", large:"Large",
    customLabel:"Number of Spaces:", typeLabel:"Space Type:",
    typeSocial:"Social Media & Games (Recommended)", typeWeb:"Websites & Web Development",
    typeFormat:"Text Formatting", insert:"Insert", clear:"Clear",
    save:"Save", load:"Load", export:"Export", darkMode:"Dark Mode",
    langSwitch:"Português", saved:"Text saved!", noSaved:"No saved text.", failCopy:"Failed to copy.",
    personalize:"Copy and Customize Letters",
  },
};

function countTrackers(text: string) {
  return (text.match(/\u200B/g) || []).length;
}

export function InvisibleTool() {
  const [lang, setLang]       = useState<Lang>("pt");
  const [dark, setDark]       = useState(false);
  const [spaceType, setSpaceType] = useState<SpaceType>("social");
  const [text, setText]       = useState("");
  const [custom, setCustom]   = useState(5);
  const [toast, setToast]     = useState("");
  const [copying, setCopying] = useState(false);
  const inputRef              = useRef<HTMLInputElement>(null);
  const toastTimer            = useRef<ReturnType<typeof setTimeout>|null>(null);
  const t = T[lang];

  // Load persisted preferences once on mount
  useEffect(() => {
    try {
      const d = localStorage.getItem("darkMode");   if (d === "true") setDark(true);
      const l = localStorage.getItem("language");   if (l === "en" || l === "pt") setLang(l as Lang);
      const s = localStorage.getItem("spaceType");  if (s) setSpaceType(s as SpaceType);
      const tx = localStorage.getItem("savedText"); if (tx) setText(tx);
    } catch (_) {}
  }, []);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  // ── KEY FIX: insert spaces without losing focus or cursor position ──────────
  const insertSpaces = useCallback((count: number) => {
    const el = inputRef.current;
    if (!el) return;

    // Read cursor position BEFORE setState changes anything
    const start = el.selectionStart ?? el.value.length;
    const end   = el.selectionEnd   ?? el.value.length;

    // Build the string to insert: one regular space + one tracker per space
    const toInsert = Array(count).fill(" " + TRACKER).join("");

    const newValue =
      el.value.substring(0, start) +
      toInsert +
      el.value.substring(end);

    // Update React state
    setText(newValue);

    // Restore focus + cursor position AFTER React re-renders
    const newPos = start + toInsert.length;
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(newPos, newPos);
    });

    showToast(`${t.spacesAdded}${count}`);
  }, [t.spacesAdded, showToast]);

  const handleCopy = useCallback(async () => {
    const cleaned = text.replace(/ \u200B/g, SPACE_CHARS[spaceType]);
    try {
      await navigator.clipboard.writeText(cleaned);
      setCopying(true);
      showToast(t.copied);
      setTimeout(() => setCopying(false), 2000);
    } catch {
      showToast(t.failCopy);
    }
  }, [text, spaceType, t, showToast]);

  const handleSave = useCallback(() => {
    try { localStorage.setItem("savedText", text); showToast(t.saved); } catch (_) {}
  }, [text, t]);

  const handleLoad = useCallback(() => {
    try {
      const s = localStorage.getItem("savedText");
      if (s) setText(s);
      else showToast(t.noSaved);
    } catch (_) {}
  }, [t, showToast]);

  const handleExport = useCallback(() => {
    const cleaned = text.replace(/ \u200B/g, SPACE_CHARS[spaceType]);
    if (!cleaned) { showToast(t.noSaved); return; }
    if (!confirm("Confirmar download?")) return;
    const blob = new Blob([cleaned], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "InvisibleSpaceText.txt"; a.click();
    URL.revokeObjectURL(url);
  }, [text, spaceType, t, showToast]);

  const toggleLang = useCallback(() => {
    const next: Lang = lang === "pt" ? "en" : "pt";
    setLang(next);
    try { localStorage.setItem("language", next); } catch (_) {}
  }, [lang]);

  const toggleDark = useCallback(() => {
    setDark(d => {
      try { localStorage.setItem("darkMode", String(!d)); } catch (_) {}
      return !d;
    });
  }, []);

  const handleTypeChange = useCallback((v: SpaceType) => {
    setSpaceType(v);
    try { localStorage.setItem("spaceType", v); } catch (_) {}
  }, []);

  const charCount   = text.length;
  const spaceCount  = countTrackers(text);

  return (
    <div className={`tool${dark ? " tool--dark" : ""}`}>
      {/* Language bar */}
      <div className="tool__bar">
        <button onClick={toggleLang} className="tool__lang" type="button" aria-label="Switch language">
          🌐 {t.langSwitch}
        </button>
      </div>

      <div className="tool__body">
        <h2 className="tool__h2">{t.title}</h2>

        {/* Space type */}
        <div className="tool__field">
          <label htmlFor="spaceType">{t.typeLabel}</label>
          <select id="spaceType" value={spaceType} onChange={e => handleTypeChange(e.target.value as SpaceType)}>
            <option value="social">{t.typeSocial}</option>
            <option value="web">{t.typeWeb}</option>
            <option value="formatting">{t.typeFormat}</option>
          </select>
        </div>

        {/* Counters */}
        <div className="tool__counts">
          <span>{t.charCount}<strong>{charCount}</strong></span>
          <span>{t.spaceCount}<strong>{spaceCount}</strong></span>
        </div>

        {/* Text input + copy */}
        <div className="tool__field">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            autoComplete="off"
          />
          <button
            onClick={handleCopy}
            className={`tool__btn tool__btn--copy${copying ? " tool__btn--copied" : ""}`}
            type="button"
          >
            {copying ? t.copied : t.copy}
          </button>
        </div>

        {/* Size buttons */}
        <div className="tool__sizes">
          <button className="tool__btn" type="button" onClick={() => insertSpaces(2)}>{t.small}</button>
          <button className="tool__btn" type="button" onClick={() => insertSpaces(6)}>{t.medium}</button>
          <button className="tool__btn" type="button" onClick={() => insertSpaces(10)}>{t.large}</button>
        </div>

        {/* Personalize link */}
        <a
          href="https://espacoinvisivel.com.br/letras-diferentes/"
          className="tool__personalize"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.personalize}
        </a>

        {/* Custom count */}
        <div className="tool__custom">
          <div className="tool__field tool__field--inline">
            <label htmlFor="customCount">{t.customLabel}</label>
            <div className="tool__counter">
              <button className="tool__btn tool__btn--sm" type="button" onClick={() => setCustom(v => Math.max(1, v - 1))}>−</button>
              <input
                id="customCount"
                type="number"
                min={1}
                value={custom}
                onChange={e => setCustom(Math.max(1, parseInt(e.target.value, 10) || 1))}
                aria-label={t.customLabel}
              />
              <button className="tool__btn tool__btn--sm" type="button" onClick={() => setCustom(v => v + 1)}>+</button>
            </div>
          </div>
          <button className="tool__btn" type="button" onClick={() => insertSpaces(custom)}>{t.insert}</button>
        </div>

        {/* Footer actions */}
        <div className="tool__actions">
          <button className="tool__act" type="button" onClick={() => setText("")}>{t.clear}</button>
          <button className="tool__act" type="button" onClick={handleSave}>{t.save}</button>
          <button className="tool__act" type="button" onClick={handleLoad}>{t.load}</button>
          <button className="tool__act" type="button" onClick={handleExport}>{t.export}</button>
          <button className="tool__act" type="button" onClick={toggleDark}>{t.darkMode}</button>
        </div>
      </div>

      {/* Toast */}
      {toast && <div className="tool__toast" role="status" aria-live="polite">{toast}</div>}

      <style>{`
        /* ── Tool root ── */
        .tool {
          max-width: 660px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #dde5f5;
          box-shadow: 0 12px 48px rgba(9,30,58,.15);
          font-family: 'DM Sans', system-ui, sans-serif;
          position: relative;
        }
        .tool--dark .tool__body { background: #1a1f2e; color: #f0f0f0; }
        .tool--dark label { color: #e5e7eb !important; }
        .tool--dark input,
        .tool--dark select { background: #252b3b !important; color: #f0f0f0 !important; border-color: #374151 !important; }
        .tool--dark .tool__counts { background: #252b3b !important; color: #9ca3af !important; }
        .tool--dark .tool__h2 { color: #93c5fd !important; }
        .tool--dark .tool__counts strong { color: #93c5fd !important; }

        /* ── Language bar ── */
        .tool__bar {
          background: #091e3a;
          padding: 10px 22px;
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }
        .tool__lang {
          background: transparent;
          border: 1px solid rgba(255,255,255,.28);
          color: white;
          padding: 5px 14px;
          border-radius: 7px;
          font-size: .85rem;
          cursor: pointer;
          font-family: inherit;
          transition: background .2s;
          display: flex; align-items: center; gap: 6px;
        }
        .tool__lang:hover { background: rgba(255,255,255,.1); }

        /* ── Body ── */
        .tool__body {
          background: #ffffff;
          padding: 36px 34px;
        }
        .tool__h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #091e3a;
          text-align: center;
          margin-bottom: 24px;
        }

        /* ── Fields ── */
        .tool__field {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }
        .tool__field label {
          font-size: .87rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 7px;
        }
        .tool__field input,
        .tool__field select {
          padding: 12px 15px;
          border: 1.5px solid #dde5f5;
          border-radius: 10px;
          font-size: 1rem;
          font-family: inherit;
          background: #fff;
          color: #111827;
          transition: border-color .2s, box-shadow .2s;
          margin-bottom: 10px;
          width: 100%;
        }
        .tool__field input:focus,
        .tool__field select:focus {
          outline: none;
          border-color: #1a56db;
          box-shadow: 0 0 0 3px rgba(26,86,219,.12);
        }
        .tool__field--inline { margin-bottom: 0; flex: 1; }
        .tool__field--inline label { margin-bottom: 7px; }

        /* ── Counters ── */
        .tool__counts {
          display: flex;
          justify-content: space-between;
          font-size: .86rem;
          color: #6b7280;
          background: #f3f6fb;
          padding: 9px 14px;
          border-radius: 9px;
          margin-bottom: 14px;
        }
        .tool__counts strong { color: #091e3a; font-weight: 700; }

        /* ── Buttons ── */
        .tool__btn {
          background: #091e3a;
          color: white;
          border: none;
          padding: 11px 20px;
          border-radius: 10px;
          font-size: .95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background .2s, transform .1s;
          display: flex; align-items: center; justify-content: center;
          white-space: nowrap;
        }
        .tool__btn:hover { background: #0f3272; }
        .tool__btn:active { transform: translateY(1px); }
        .tool__btn--sm { padding: 10px 14px; min-width: 40px; }
        .tool__btn--copy { background: #f05a1a; width: 100%; }
        .tool__btn--copy:hover { background: #ff7a3d; }
        .tool__btn--copied { background: #16a34a !important; }

        /* ── Size buttons ── */
        .tool__sizes {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }
        .tool__sizes .tool__btn { flex: 1; }

        /* ── Personalize ── */
        .tool__personalize {
          display: block;
          text-align: center;
          padding: 11px 18px;
          border-radius: 10px;
          background: #7c3aed;
          color: white;
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          margin-bottom: 18px;
          transition: background .2s;
          font-family: inherit;
        }
        .tool__personalize:hover { background: #6d28d9; }

        /* ── Custom counter row ── */
        .tool__custom {
          display: flex;
          gap: 12px;
          align-items: flex-end;
          margin-bottom: 18px;
        }
        .tool__custom .tool__btn { height: 42px; margin-bottom: 0; flex-shrink: 0; }
        .tool__counter {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .tool__counter input {
          flex: 1;
          text-align: center;
          margin-bottom: 0 !important;
          padding: 10px 8px !important;
          min-width: 0;
        }

        /* ── Action grid ── */
        .tool__actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 6px;
        }
        .tool__act {
          display: flex; align-items: center; justify-content: center;
          padding: 11px;
          border-radius: 10px;
          background: #374151;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: .88rem;
          font-family: inherit;
          transition: background .2s;
        }
        .tool__act:hover { background: #1f2937; }

        /* ── Toast ── */
        .tool__toast {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(9,30,58,.93);
          color: white;
          padding: 10px 26px;
          border-radius: 100px;
          font-size: .9rem;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0,0,0,.2);
          z-index: 9999;
          white-space: nowrap;
          animation: toastIn .2s ease;
          pointer-events: none;
        }
        @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }

        /* ── Mobile ── */
        @media(max-width:500px){
          .tool__body { padding: 24px 16px; }
          .tool__sizes { flex-direction: column; }
          .tool__custom { flex-direction: column; align-items: stretch; }
          .tool__custom .tool__btn { height: auto; padding: 12px 18px; }
          .tool__actions { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
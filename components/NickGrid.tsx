"use client";
// components/NickGrid.tsx  →  place at: components/NickGrid.tsx

import { useState, useCallback } from "react";

interface Props { nicknames: string[]; }

export function NickGrid({ nicknames }: Props) {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = useCallback(async (nick: string, i: number) => {
    try {
      await navigator.clipboard.writeText(nick);
      setCopied(i);
      setTimeout(() => setCopied(null), 2000);
    } catch (_) {}
  }, []);

  return (
    <>
      <div className="ngrid">
        {nicknames.map((n, i) => (
          <div key={i} className="ncard">
            <span className="ncard__txt">{n}</span>
            <button
              className={`ncard__btn${copied === i ? " ncard__btn--done" : ""}`}
              type="button"
              onClick={() => handleCopy(n, i)}
              aria-label="Copiar apelido"
            >
              {copied === i ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .ngrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:14px; margin-top:32px; }
        .ncard { background:#ffffff; border:1.5px solid #dde5f5; border-radius:12px; padding:15px 18px; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:border-color .22s,box-shadow .22s; }
        .ncard:hover { border-color:#1a56db; box-shadow:0 4px 24px rgba(9,30,58,.09); }
        .ncard__txt { font-size:1rem; color:#111827; font-weight:500; word-break:break-all; flex:1; }
        .ncard__btn { flex-shrink:0; padding:5px 13px; border-radius:7px; background:#091e3a; color:#fff; font-size:.78rem; font-weight:700; border:none; cursor:pointer; transition:background .22s; font-family:inherit; white-space:nowrap; }
        .ncard__btn:hover { background:#1a56db; }
        .ncard__btn--done { background:#16a34a !important; }
        @media(max-width:480px){ .ngrid { grid-template-columns:1fr 1fr; } }
        @media(max-width:360px){ .ngrid { grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}
import React, { useEffect, useState } from "react";

/**
 * Small terminal-style window. Pass `lines` for static content,
 * or `typedLine` for a line that types itself out on mount.
 */
export default function Terminal({ typedLine, lines = [], className = "" }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!typedLine) return undefined;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(typedLine.slice(0, i));
      if (i >= typedLine.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [typedLine]);

  return (
    <div
      className={`bg-ink text-[#CFE8E6] rounded-[10px] px-6 py-5 font-mono text-sm shadow-[0_30px_60px_-30px_rgba(18,33,58,0.45)] ${className}`}
    >
      <div className="mb-3.5 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-amber inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted inline-block" />
      </div>

      {typedLine && (
        <>
          <div>
            <span className="text-amber">$</span> whoami
          </div>
          <div className="text-[#9FB4C7]">{typed}</div>
        </>
      )}

      {lines.map((line, idx) => (
        <div key={idx} className={line.spaced ? "mt-2.5" : ""}>
          {line.prompt && (
            <div>
              <span className="text-amber">$</span> {line.prompt}
            </div>
          )}
          {line.output && <div className="text-[#9FB4C7]">{line.output}</div>}
        </div>
      ))}
    </div>
  );
}

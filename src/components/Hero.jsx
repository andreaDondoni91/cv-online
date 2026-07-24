import React from "react";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <header className="grid-bg">
      <div className="max-w-[880px] mx-auto px-6 pt-28 pb-10">
        <p className="font-mono text-[13px] tracking-wide text-teal lowercase">
          ~/andrea-dondoni &nbsp;·&nbsp; frontend-developer.git
        </p>

        <h1 className="font-display font-bold text-4xl md:text-[56px] leading-[1.05] tracking-tight text-ink mt-3.5 mb-4">
          Andrea Dondoni
        </h1>

        <p className="text-lg md:text-[19px] text-inksoft max-w-[560px] mb-8">
          Frontend developer con oltre 10 anni di esperienza. Costruisco
          interfacce che restano in produzione ben oltre il framework con cui
          sono nate.
        </p>

        <Terminal
          typedLine="Frontend developer based in Pavia, Italy."
          className="max-w-[480px] mb-8"
        />

        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#changelog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium bg-ink text-paperwhite hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_#12213A] transition"
          >
            Vedi il changelog →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium border border-ink text-ink hover:bg-ink hover:text-paperwhite hover:-translate-y-0.5 transition"
          >
            Contattami
          </a>
        </div>
      </div>
    </header>
  );
}

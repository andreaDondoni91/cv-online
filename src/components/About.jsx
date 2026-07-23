import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-[88px] fade-up">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="font-mono text-[13px] text-teal lowercase"># README.md</p>
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-ink mt-2.5 mb-5">
          Chi sono
        </h2>
        <p className="text-[17px] text-inksoft max-w-[640px]">
          Sono un frontend developer di Pavia. Ho iniziato costruendo
          interfacce su stack legacy per banche e assicurazioni, e da
          qualche anno mi occupo della manutenzione e dello sviluppo dei
          siti pubblici di DeAgostini Publishing, integrando via via
          strumenti di sviluppo assistito da AI nel mio flusso di lavoro. Mi
          piace il codice che invecchia bene: leggibile oggi, facile da
          aggiornare tra tre anni.
        </p>
      </div>
    </section>
  );
}

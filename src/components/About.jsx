import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="# README.md" title="Chi sono">
      <p className="text-[17px] text-inksoft max-w-[640px]">
        Sono un frontend developer di Pavia. Ho iniziato costruendo
        interfacce su stack legacy per banche e assicurazioni, e da
        qualche anno mi occupo della manutenzione e dello sviluppo dei
        siti pubblici di DeAgostini Publishing, integrando via via
        strumenti di sviluppo assistito da AI nel mio flusso di lavoro. Mi
        piace il codice che invecchia bene: leggibile oggi, facile da
        aggiornare tra tre anni.
      </p>
    </Section>
  );
}

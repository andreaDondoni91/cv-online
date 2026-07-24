// Modifica qui le tue esperienze: ogni voce diventa una "release" nel changelog.
const changelog = [
  {
    version: "v6.0.0",
    current: true,
    dates: "2022 — oggi",
    role: "DeAgostini Publishing — Frontend Developer",
    entries: [
      { type: "Added", text: "ownership della manutenzione e dello sviluppo frontend dei due siti pubblici aziendali." },
      { type: "Added", text: "workflow di sviluppo assistito da AI (GitHub Copilot, Claude) per velocizzare il ciclo di rilascio." },
      { type: "Added", text: "Docker per l'ambiente di sviluppo locale." },
      { type: "Added", text: "servizi cloud AWS e Heroku per il deploy." },
      { type: "Changed", text: "aggiornamento continuo di librerie e framework del progetto." },
      { type: "Improved", text: "esperienza utente end-to-end, dal brief al deploy in produzione." },
    ],
    stack: "javascript · react · gatsby · tailwind · css · html5 · php · git · docker · aws · heroku",
  },
  {
    version: "v5.0.0",
    dates: "2020 — 2022",
    role: "Fincons Group @ Banca Mediolanum — Consulente IT",
    entries: [
      { type: "Added", text: "nuove funzionalità applicative, testate end-to-end." },
      { type: "Changed", text: "disegno dell'architettura, in collaborazione con cliente e project manager." },
      { type: "Docs", text: "stesura di documenti dettagliati di specifica." },
    ],
    stack: "javascript · jquery · html5 · css · java (mvc) · jboss · ejb · osb · c++ · pl/sql",
  },
  {
    version: "v4.0.0",
    dates: "2015 — 2020",
    role: "Banca Mediolanum — Consulente IT",
    entries: [
      { type: "Added", text: "nuove funzionalità dell'home banking." },
      { type: "Fixed", text: "criticità tecniche su modifiche esistenti, con relativa stima." },
    ],
    stack: "javascript · html5 · css · java (mvc) · ajax · jquery · c++ · oracle (toad)",
  },
  {
    version: "v3.0.0",
    dates: "2015",
    role: "People Lab S.r.l. — Sviluppatore",
    entries: [
      { type: "Added", text: "nuovo applicativo internet per la gestione presenze, da zero." },
    ],
    stack: "html5 · css · asp.net · javascript · ajax · jquery · bootstrap · c# · sql server",
  },
  {
    version: "v2.0.0",
    dates: "2013",
    role: "People Lab @ Allianz / Target Sistemi @ Aler — Consulente IT",
    entries: [
      { type: "Added", text: "nuove funzionalità per applicazione di gestione polizze assicurative." },
      { type: "Maintained", text: "sistemi del ciclo attivo e gestione ordinaria del sistema informativo." },
    ],
    stack: "visual basic · html · javascript · asp.net · vbscript · oracle (toad) · sql server",
  },
  {
    version: "v1.0.0",
    dates: "2012",
    role: "DHL Supply Chain S.p.A. — Stage",
    entries: [
      { type: "Added", text: "parte grafica di un nuovo tool interno per il miglioramento dei processi." },
      { type: "Added", text: "primo sistema di monitoraggio KPI legato alle attività operative." },
    ],
    stack: "javascript · asp.net · vbscript · mysql",
  },
];

export default changelog;

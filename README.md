# Andrea Dondoni — Portfolio - https://www.andreadondoni.com/

Portfolio personale costruito con **Gatsby + React + Tailwind CSS**, in italiano e inglese.

Il concept: la carriera raccontata come il **changelog di un repository** —
ogni ruolo è una "release" (da `v1.0.0` allo stage in DHL fino a `v6.0.0`,
il ruolo attuale), con voci in stile `Added / Changed / Fixed`, competenze
presentate come `package.json`, e un hero in stile terminale.

## Struttura del progetto

```
locales/{it,en}/translation.json → tutti i testi del sito (changelog, competenze, privacy, SEO)
src/components/                  → un componente per sezione (Hero, Changelog, Skills, ...)
src/pages/                       → home (index.js) e privacy policy (privacy.js)
src/styles/                      → Tailwind, regole custom (grid, timeline) e font
static/                          → CV in PDF, favicon, immagine Open Graph
```

Per aggiornare i contenuti **non serve toccare i componenti**: basta modificare
`locales/it/translation.json` e `locales/en/translation.json` (stessa struttura in entrambe le lingue).

- Nuova esperienza lavorativa → aggiungi una voce in `changelog.releases`
- Competenze → `skills.dependencies` / `skills.devDependencies`
- CV scaricabile → sostituisci i PDF in `static/` (il percorso è in `cv.file`)

## Sviluppo in locale

Con Docker:

```bash
docker compose up --build
```

Oppure con [Node.js](https://nodejs.org/) 22 e npm:

```bash
npm install
npm run develop
```

Il sito sarà disponibile su `http://localhost:8000`.

## Analytics

Google Tag Manager viene caricato solo dopo il consenso dell'utente. L'ID va in
`.env.development` / variabili d'ambiente Netlify come `GATSBY_GTM_ID`; senza ID
il banner cookie non viene mostrato.

## Qualità

`npm run build` esegue prima lint (`npm run lint`) e test (`npm test`).

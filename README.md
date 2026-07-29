# Andrea Dondoni — Portfolio - https://www.andreadondoni.com/

Portfolio personale costruito con **Gatsby + React + Tailwind CSS**.

Il concept: la carriera raccontata come il **changelog di un repository** —
ogni ruolo è una "release" (da `v1.0.0` allo stage in DHL fino a `v6.0.0`,
il ruolo attuale), con voci in stile `Added / Changed / Fixed`, competenze
presentate come `package.json`, e un hero in stile terminale.

## Struttura del progetto

```
src/
  components/     → un componente per sezione (Hero, Changelog, Skills, ...)
  data/           → contenuti separati dal markup (changelog.js, projects.js)
  pages/index.js  → assembla le sezioni
  styles/global.css → font, Tailwind, e le poche regole custom (grid, timeline)
```

Per aggiornare i contenuti **non serve toccare i componenti**:

- Nuova esperienza lavorativa → aggiungi una voce in `src/data/changelog.js`
- Nuovo progetto → aggiungi una voce in `src/data/projects.js`
- Testo del "Chi sono" → modifica direttamente `src/components/About.jsx`

## Sviluppo in locale

Richiede [Node.js](https://nodejs.org/) 18+ e npm.

```bash
npm install
npm run develop
```

Il sito sarà disponibile su `http://localhost:8000`.

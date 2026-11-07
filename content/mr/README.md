# Marathi (मराठी) content

The Marathi site (`/mr/`) explains every topic in Marathi. The exam itself is English-only, so
practice questions and options stay in English on both sites; the Marathi site shows a Marathi
translation of each question underneath it as a helper, and the explanation (`why`) in Marathi.

One file per section, or several files whose names start with the section id
(`maths-1.mjs`, `maths-2.mjs`); the build merges them. Each file exports an object keyed by topic id:

```js
export default {
  'quadratic-equations': {
    title: 'वर्गसमीकरणे',                    // Marathi only; the build shows the English title under it
    analogy: {
      title: 'वर फेकलेला क्रिकेटचा चेंडू',
      oneLine: '…',
      story: '…',
      map: [['…', '…'], ['…', '…']],        // SAME number of rows as the English topic, same order
    },
    concept: ['…'],                         // same count as English
    keyPoints: ['…'],                       // same count as English
    example: { q: '…', steps: ['…'], answer: '…' },  // same number of steps
    shortcut: '…',                          // only if the English topic has one
    traps: ['…'],                           // same count as English
    practice: [                             // same count as English, same order
      { q: 'Marathi translation of the question (helper)', why: 'Marathi explanation' },
    ],
  },
};
```

Rules:

- Write natural, simple Marathi as used in Maharashtra State Board (Balbharati) textbooks, not a
  word-by-word translation. Many readers studied in Marathi medium up to 12th.
- The first time a technical term appears in a topic, write the Marathi term followed by the English
  term in brackets: `विवेचक (Discriminant)`, `संभाव्यता (Probability)`. The exam is in English, so
  students must learn the English terms too. Where no common Marathi term exists (CPU, RAM, pointer,
  compiler, syllogism), keep the English word in Devanagari or Latin script as Marathi speakers say it.
- Keep every formula, number, symbol, variable name, code snippet and option text exactly as in English.
- Strings are HTML, like the English files: write `&lt;` and `&gt;` for comparison signs; keep
  `<b>`, `<i>`, `<sup>`, `<sub>`, `<code>` tags where the English has them.
- English section: explain grammar rules in Marathi, but keep every English example sentence, word,
  idiom and passage in English (translating them would defeat the purpose). For practice `q`, write only
  the Marathi instruction (e.g. `दिलेल्या शब्दाचा समानार्थी शब्द निवडा.`), not a translation of the English
  sentence or passage.
- Reasoning: translate the puzzle/statement text faithfully; keep names, letters and codes unchanged.

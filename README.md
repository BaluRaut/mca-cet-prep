# MCA CET Prep

Free preparation for **MAH-MCA-CET**, the Maharashtra MCA Common Entrance Test, where **every topic is explained with an everyday analogy**.

**Live site: https://baluraut.github.io/mca-cet-prep/**

Each topic page follows the same path:

1. **Think of it like…** An analogy from daily life (a cricket ball, a local train, a kirana shop, a dabbawala), with a table mapping each everyday idea to the exam idea.
2. **The concept**, explained in plain English.
3. **Key points & formulas**, which double as the formula sheet.
4. **A worked example**, with the solution hidden until you want it.
5. **Exam shortcut** and **common traps**.
6. **Practice MCQs**. Tap an option to see whether it's right, with an explanation.

You can also use:

- a **mock test** with a full 100-question paper in the real 30/30/20/20 split and a 90-minute timer, or a 10-question drill per section, followed by a section-wise score, a list of weak topics and answer review;
- a printable **revision sheet** that gives the one-line analogy and key formulas for every topic;
- an **8-week study plan** that mixes all four sections each week;
- **progress tracking**: tick a topic as done and it is remembered in your browser.

## Exam pattern

These figures come from the official [MAH-MCA-CET 2026 Information Brochure](https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf). Confirm them against the current year's brochure on [cetcell.mahacet.org](https://cetcell.mahacet.org/).

| Section | Questions | Marks |
|---|---|---|
| Mathematics & Statistics | 30 | 60 |
| Logical / Abstract Reasoning | 30 | 60 |
| English Comprehension & Verbal Ability | 20 | 40 |
| Computer Concepts | 20 | 40 |
| **Total** | **100** | **200** |

The paper has 90 minutes for all sections, uses four-option MCQs, is taken online and is in English only. **There is no negative marking.**

## Run it locally

You need Node 20 or newer. There are no dependencies to install.

```sh
npm run dev      # build into site/ and serve at http://localhost:4321
npm run check    # validate all content without building
```

## Add or fix content

All study material lives in `content/maths.mjs`, `reasoning.mjs`, `english.mjs` and `computer.mjs`. [`content/README.md`](content/README.md) describes the format. The build rejects a topic that has no analogy, a question whose options are not exactly four, an answer index outside 0–3, or unescaped HTML. Every push to `main` is validated and deployed to GitHub Pages by `.github/workflows/pages.yml`.

If you find a wrong answer, please [open an issue](https://github.com/BaluRaut/mca-cet-prep/issues) and include the topic and question number.

## License

MIT

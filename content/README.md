# Content format

Each section is one file: `maths.mjs`, `reasoning.mjs`, `english.mjs`, `computer.mjs`.
Each file has `export default [ ...topics ]`. `npm run build` validates every topic and fails
loudly if a field is missing, an answer index is out of range, or a string contains a bare `<`.

```js
{
  id: 'quadratic-equations',          // kebab-case, unique across the whole site
  title: 'Quadratic Equations',
  syllabus: 'Algebra',                // the official syllabus heading this topic sits under

  analogy: {
    title: 'A cricket ball thrown upward',  // short name of the analogy
    oneLine: 'Roots are the two moments the ball is at ground level.', // used on the revision page
    story: 'A paragraph or two telling the analogy in everyday Indian life.',
    map: [                            // at least 2 rows: everyday thing -> maths/CS idea
      ['Height of the ball at time t', 'ax² + bx + c'],
      ['Moments the ball touches the ground', 'roots of the equation'],
    ],
  },

  concept: ['Paragraph.', 'Paragraph.'],   // HTML allowed: <b> <i> <sup> <sub> <code> <br>
  keyPoints: ['Formula or rule', '...'],   // the formula sheet for this topic
  example: {
    q: 'Question text',
    code: 'optional C code, plain text, escaped by the build',
    steps: ['Step 1', 'Step 2'],
    answer: 'Final answer',
  },
  shortcut: 'Optional exam-speed trick.',
  traps: ['Common mistake 1'],
  practice: [                         // at least 3, exam-style, four options each
    {
      q: 'Question',
      code: 'optional',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,                      // 0-based index into options
      why: 'One- or two-line explanation of the right answer.',
    },
  ],
}
```

Rules:

- Strings are HTML. Write `&lt;` for a less-than sign (`a &lt; b`), and `&amp;` for `&`.
  Put C code in a `code` field instead, which is plain text.
- Use Unicode for maths: `x²`, `√`, `π`, `θ`, `≤`, `≥`, `≠`, `×`, `÷`, or `<sup>`/`<sub>`.
- Every practice answer must be checked by working it out, not recalled.
- Spread the correct option across positions A–D.

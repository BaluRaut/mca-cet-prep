// 8-week study plan. Each week mixes all four sections so nothing goes cold.
// Topic ids must exist in the section files; the build checks this.

export const STUDY_PLAN = [
  {
    focus: 'Foundations: arithmetic, series, number systems, reading habit',
    topics: ['ratio-percentage', 'time-work', 'time-speed-distance', 'number-series', 'letter-series', 'number-systems', 'reading-comprehension'],
    note: 'Start a daily habit now: one comprehension passage and ten new words every day until the exam.',
  },
  {
    focus: 'Algebra I, coding and relations, binary arithmetic',
    topics: ['algebra-basics', 'quadratic-equations', 'logarithms', 'coding-decoding', 'blood-relations', 'direction-sense', 'character-representation', 'binary-arithmetic', 'synonyms-antonyms'],
  },
  {
    focus: 'Algebra II, arrangements, floating point and Boolean logic',
    topics: ['progressions', 'binomial-theorem', 'permutations-combinations', 'ranking-ordering', 'seating-arrangement', 'floating-point', 'boolean-algebra', 'vocabulary', 'idioms-phrases'],
  },
  {
    focus: 'Coordinate geometry, puzzles, the CPU',
    topics: ['straight-lines', 'circles', 'conics', 'pair-of-lines-transformations', 'puzzles', 'syllogisms', 'cpu-organization', 'instructions-addressing', 'parts-of-speech-tenses'],
  },
  {
    focus: 'Trigonometry, statement logic, memory and I/O',
    topics: ['trig-identities', 'triangles-heights-distances', 'inverse-trig', 'statements-conclusions', 'analogy-classification', 'memory', 'io-backup-devices', 'architecture-interrupts', 'subject-verb-agreement', 'articles-prepositions'],
  },
  {
    focus: 'Probability and statistics, calendars and clocks, C basics',
    topics: ['probability', 'descriptive-statistics', 'distributions', 'correlation-regression', 'calendar-clock', 'languages-translators', 'c-basics', 'sentence-correction'],
  },
  {
    focus: 'Remaining topics: DE, sets, mensuration, non-verbal, C and OS',
    topics: ['differential-equations', 'sets-relations-functions', 'mensuration-2d', 'mensuration-3d', 'venn-data-sufficiency', 'non-verbal', 'c-control-flow', 'c-arrays-pointers-functions', 'os-basics', 'computer-awareness', 'fill-in-the-blanks', 'para-jumbles'],
  },
  {
    focus: 'Mock tests and revision',
    topics: [],
    note: 'Take three full mock tests on alternate days. After each, re-open every topic you got wrong and redo its practice set. Read the revision sheet daily.',
  },
];

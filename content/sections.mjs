// Section metadata. Pattern and syllabus wording are taken from the official
// MAH-MCA-CET 2026 Information Brochure (State CET Cell, Maharashtra), section 9.0.
// Re-check against the 2027 brochure when it is published.

export const EXAM = {
  name: 'MAH-MCA-CET',
  brochureYear: 2026,
  brochureUrl: 'https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf',
  officialSite: 'https://cetcell.mahacet.org/',
  questions: 100,
  marks: 200,
  minutes: 90,
  marksPerQuestion: 2,
  negativeMarking: false,
  medium: 'English',
  mode: 'Online (computer-based)',
  eligibility:
    'Any graduation degree (B.E./B.Tech/B.Sc/B.Com/B.Voc/BCA etc.), preferably with Mathematics at 10+2 or graduation level, with at least 50% marks (45% for reserved categories, EWS and PwD candidates belonging to Maharashtra). Final-year students may also appear.',
};

export const SECTIONS = [
  {
    id: 'maths',
    name: 'Mathematics & Statistics',
    short: 'Maths',
    questions: 30,
    hue: 250,
    blurb: 'High-school maths up to 12th standard: algebra, coordinate geometry, trigonometry, probability and statistics, arithmetic, sets and mensuration.',
    official:
      'Algebra; Co-ordinate Geometry; Differential Equations; Trigonometry; Probability and Statistics; Arithmetic; Basic Set Theory and Functions; Mensuration.',
    analogy:
      'Maths here is a toolbox, not a theory exam. Every question asks "which tool, and how fast can you use it?" Learn the formula as the tool and the worked example as the way to hold it.',
  },
  {
    id: 'reasoning',
    name: 'Logical / Abstract Reasoning',
    short: 'Reasoning',
    questions: 30,
    hue: 300,
    blurb: 'How quickly and logically you think: series, coding, relations, directions, arrangements, puzzles, syllogisms and statement-based logic.',
    official:
      'Questions measuring how quickly and logically you can think: logical situations and questions based on the facts given in a passage, testing problem-solving capability.',
    analogy:
      'Reasoning is detective work. The question hands you clues; your job is to write them down neatly, rule things out, and only then name the culprit. Most wrong answers come from solving in your head instead of on paper.',
  },
  {
    id: 'english',
    name: 'English Comprehension & Verbal Ability',
    short: 'English',
    questions: 20,
    hue: 150,
    blurb: 'Basic grammar, vocabulary, comprehension, synonyms and antonyms, sentence correction, words and phrases, and jumbled paragraphs.',
    official:
      'Basic English grammar, vocabulary, comprehension, synonyms, antonyms, sentence correction, word & phrases, jumbled paragraph.',
    analogy:
      'English is like learning the rules of a road. Grammar is the traffic rules, vocabulary is knowing the place names, and comprehension is reading the signboards while driving at speed.',
  },
  {
    id: 'computer',
    name: 'Computer Concepts',
    short: 'Computer',
    questions: 20,
    hue: 30,
    blurb: 'Computer basics, data representation and binary arithmetic, Boolean algebra, architecture and interrupts, assembly vs high-level languages, C programming and OS basics.',
    official:
      'Computer Basics; Data Representation (incl. binary arithmetic, two’s complement, floating point, Boolean algebra, truth tables, Venn diagrams); Computer Architecture; Computer Language (assembly, high-level, programming in C); Operating System basics.',
    analogy:
      'A computer is a well-run restaurant kitchen. The CPU is the chef, RAM is the counter space, the hard disk is the store-room, the OS is the manager handing out orders, and binary is the simple on/off language every worker understands.',
  },
];

// Generic interface text for each language. Everything exam-specific (names, sections,
// pattern, home-page copy) lives in content/exam.mjs.

export const LANGS = ['en', 'mr'];

export const UI = {
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    themeLabel: 'Toggle dark mode',
    otherLang: { label: 'मराठी', title: 'मराठीत वाचा' },
    nav: { home: 'Home', about: 'About', plan: 'Plan', words: 'Words', revision: 'Revision', papers: 'Past papers', mock: 'Mock test' },
    sectionsLabel: 'Sections',
    footRepo: (repo, issues) => `Free and open source · <a href="${repo}">GitHub</a>${issues ? ` · Found a wrong answer? <a href="${issues}">Open an issue</a>.` : '.'}`,

    topicEyebrow: (short, syllabus, i, n) => `${short} · ${syllabus} · Topic ${i} of ${n}`,
    markDone: 'Mark as done',
    analogyTag: 'Think of it like…',
    analogyLabel: 'Analogy',
    mapHead: ['In everyday life', 'In the exam topic'],
    concept: 'The concept',
    keyPoints: 'Key points &amp; formulas',
    example: 'Worked example',
    showSolution: 'Show solution',
    answer: 'Answer',
    shortcut: 'Exam shortcut',
    traps: 'Common traps',
    practice: 'Practice',
    practiceHint: 'tap an option to check',
    backToTop: '↑ Back to topic list',

    sectionEyebrow: (q, m) => `Section · ${q} questions · ${m} marks`,
    sectionPicture: 'The whole section, in one picture',
    official: 'Official syllabus',
    progress: (n, q, short) => `<span class="done-count">0</span> of ${n} topics done · ${q} practice questions · <a href="mock.html#DRILL">Timed ${short} drill →</a>`,
    topicsLabel: 'Topics in this section',
    sectionTitle: (name, brand) => `${name} · ${brand}`,
    sectionDesc: (name, exam) => `${name} for ${exam}: every topic explained with an everyday analogy, formulas, worked examples and practice MCQs.`,
  },

  mr: {
    htmlLang: 'mr',
    skip: 'मुख्य मजकुराकडे जा',
    themeLabel: 'डार्क मोड बदला',
    otherLang: { label: 'English', title: 'Read in English' },
    nav: { home: 'मुख्यपृष्ठ', about: 'परीक्षेविषयी', plan: 'आराखडा', words: 'शब्द', revision: 'उजळणी', papers: 'मागील प्रश्नपत्रिका', mock: 'सराव परीक्षा' },
    sectionsLabel: 'विभाग',
    footRepo: (repo, issues) => `मोफत आणि मुक्त स्रोत · <a href="${repo}">GitHub</a>${issues ? ` · एखादे उत्तर चुकीचे वाटले? <a href="${issues}">इथे कळवा</a>.` : '.'}`,

    topicEyebrow: (short, syllabus, i, n) => `${short} · ${syllabus} · विषय ${i} / ${n}`,
    markDone: 'पूर्ण झाले म्हणून खूण करा',
    analogyTag: 'असं समजा…',
    analogyLabel: 'उपमा',
    mapHead: ['रोजच्या जीवनात', 'परीक्षेच्या विषयात'],
    concept: 'संकल्पना',
    keyPoints: 'महत्त्वाचे मुद्दे व सूत्रे',
    example: 'सोडवलेले उदाहरण',
    showSolution: 'उकल पाहा',
    answer: 'उत्तर',
    shortcut: 'परीक्षेसाठी झटपट युक्ती',
    traps: 'नेहमीच्या चुका',
    practice: 'सराव',
    practiceHint: 'प्रश्न परीक्षेप्रमाणे इंग्रजीत, खाली मराठी अर्थ · उत्तर तपासण्यासाठी पर्याय निवडा',
    backToTop: '↑ विषयसूचीकडे परत',

    sectionEyebrow: (q, m) => `विभाग · ${q} प्रश्न · ${m} गुण`,
    sectionPicture: 'संपूर्ण विभाग, एका चित्रात',
    official: 'अधिकृत अभ्यासक्रम',
    progress: (n, q, short) => `${n} पैकी <span class="done-count">0</span> विषय पूर्ण · ${q} सराव प्रश्न · <a href="mock.html#DRILL">${short}: झटपट सराव →</a>`,
    topicsLabel: 'या विभागातील विषय',
    sectionTitle: (name, brand) => `${name} · ${brand}`,
    sectionDesc: (name, exam) => `${exam} साठी ${name}: प्रत्येक विषय रोजच्या जीवनातील उपमेने समजावलेला; सूत्रे, सोडवलेली उदाहरणे आणि सराव प्रश्नांसह, मराठीत.`,
  },
};

// Labels for the pattern table on the About page.
export const ABOUT_UI = {
  en: { pattern: 'Pattern at a glance', head: ['Section', 'Questions', 'Marks'], total: 'Total', duration: 'Duration', minutes: (m) => `${m} minutes`, perQ: 'Marks per correct answer', negative: 'Negative marking', none: 'None', each: (n) => `−${n} for each wrong answer`, medium: 'Medium', mode: 'Mode', eligibility: 'Eligibility' },
  mr: { pattern: 'स्वरूप एका नजरेत', head: ['विभाग', 'प्रश्न', 'गुण'], total: 'एकूण', duration: 'कालावधी', minutes: (m) => `${m} मिनिटे`, perQ: 'प्रत्येक बरोबर उत्तराला गुण', negative: 'निगेटिव्ह मार्किंग', none: 'नाही', each: (n) => `प्रत्येक चुकीच्या उत्तरासाठी −${n}`, medium: 'माध्यम', mode: 'पद्धत', eligibility: 'पात्रता' },
};

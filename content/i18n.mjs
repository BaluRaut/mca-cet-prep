// Interface text for each language. Topic content lives in content/*.mjs (English)
// and content/mr/*.mjs (Marathi). English values for section metadata and the
// study plan come from sections.mjs and plan.mjs; Marathi values are here.

export const LANGS = ['en', 'mr'];

export const UI = {
  en: {
    htmlLang: 'en',
    brand: 'MCA CET Prep',
    skip: 'Skip to content',
    themeLabel: 'Toggle dark mode',
    otherLang: { label: 'मराठी', title: 'मराठीत वाचा' },
    nav: { home: 'Home', plan: 'Plan', words: 'Words', revision: 'Revision', papers: 'Past papers', mock: 'Mock test' },
    sectionsLabel: 'Sections',
    footSource: (url, year, site) => `Exam pattern and syllabus from the official <a href="${url}">MAH-MCA-CET ${year} Information Brochure</a> (State CET Cell, Maharashtra). Always confirm dates and rules on <a href="${site}">cetcell.mahacet.org</a>.`,
    footRepo: (repo) => `Free and open source · <a href="${repo}">GitHub</a> · Found a wrong answer? <a href="${repo}/issues">Open an issue</a>.`,

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
    sectionTitle: (name) => `${name} · MCA CET Prep`,
    sectionDesc: (name) => `${name} for MAH-MCA-CET: every topic explained with an everyday analogy, formulas, worked examples and practice MCQs.`,
  },

  mr: {
    htmlLang: 'mr',
    brand: 'MCA CET तयारी',
    skip: 'मुख्य मजकुराकडे जा',
    themeLabel: 'डार्क मोड बदला',
    otherLang: { label: 'English', title: 'Read in English' },
    nav: { home: 'मुख्यपृष्ठ', plan: 'आराखडा', words: 'शब्द', revision: 'उजळणी', papers: 'मागील प्रश्नपत्रिका', mock: 'सराव परीक्षा' },
    sectionsLabel: 'विभाग',
    footSource: (url, year, site) => `परीक्षेचे स्वरूप व अभ्यासक्रम अधिकृत <a href="${url}">MAH-MCA-CET ${year} माहितीपुस्तिकेतून</a> (राज्य सामाईक प्रवेश परीक्षा कक्ष, महाराष्ट्र) घेतले आहेत. तारखा व नियम नेहमी <a href="${site}">cetcell.mahacet.org</a> वर तपासा.`,
    footRepo: (repo) => `मोफत आणि मुक्त स्रोत · <a href="${repo}">GitHub</a> · एखादे उत्तर चुकीचे वाटले? <a href="${repo}/issues">इथे कळवा</a>.`,

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
    sectionTitle: (name) => `${name} · MCA CET तयारी`,
    sectionDesc: (name) => `MAH-MCA-CET साठी ${name}: प्रत्येक विषय रोजच्या जीवनातील उपमेने समजावलेला; सूत्रे, सोडवलेली उदाहरणे आणि सराव प्रश्नांसह, मराठीत.`,
  },
};

export const SECTION_MR = {
  maths: {
    name: 'गणित व सांख्यिकी',
    short: 'गणित',
    blurb: '12वीपर्यंतचे गणित: बीजगणित, निर्देशक भूमिती, त्रिकोणमिती, संभाव्यता व सांख्यिकी, अंकगणित, संच आणि महत्त्वमापन.',
    official: 'बीजगणित (Algebra); निर्देशक भूमिती (Co-ordinate Geometry); विकल समीकरणे (Differential Equations); त्रिकोणमिती (Trigonometry); संभाव्यता व सांख्यिकी (Probability and Statistics); अंकगणित (Arithmetic); संच सिद्धांत व फलन (Set Theory and Functions); महत्त्वमापन (Mensuration).',
    analogy: 'इथलं गणित म्हणजे सिद्धांतांची परीक्षा नाही, तर हत्यारांची पेटी आहे. प्रत्येक प्रश्न एवढंच विचारतो: "कोणतं हत्यार वापरायचं, आणि किती पटकन?" सूत्र म्हणजे हत्यार, आणि सोडवलेलं उदाहरण म्हणजे ते हातात कसं धरायचं ते.',
  },
  reasoning: {
    name: 'तार्किक / अमूर्त तर्कशक्ती',
    short: 'तर्कशक्ती',
    blurb: 'तुम्ही किती पटकन आणि तर्कशुद्ध विचार करता: मालिका, सांकेतिक भाषा, नातेसंबंध, दिशा, बैठक व्यवस्था, कोडी, syllogism आणि विधानांवर आधारित तर्क.',
    official: 'तुम्ही किती पटकन आणि तर्कशुद्ध विचार करू शकता हे मोजणारे प्रश्न: तार्किक परिस्थिती आणि दिलेल्या उताऱ्यातील तथ्यांवर आधारित प्रश्न, जे तुमची समस्या सोडवण्याची क्षमता तपासतात.',
    analogy: 'तर्कशक्ती म्हणजे गुप्तहेराचं काम. प्रश्न तुम्हाला सुगावे देतो; ते कागदावर नीट मांडायचे, अशक्य शक्यता एक-एक करून बाद करायच्या, आणि मगच गुन्हेगाराचं नाव घ्यायचं. बहुतेक चुका कागदाऐवजी डोक्यातच सोडवल्यामुळे होतात.',
  },
  english: {
    name: 'इंग्रजी आकलन व शाब्दिक क्षमता',
    short: 'इंग्रजी',
    blurb: 'मूलभूत व्याकरण, शब्दसंग्रह, उतारा आकलन, समानार्थी-विरुद्धार्थी शब्द, वाक्य दुरुस्ती, शब्द व वाक्प्रचार आणि विस्कळीत परिच्छेद. नियम मराठीत समजावले आहेत; उदाहरणे इंग्रजीतच.',
    official: 'मूलभूत इंग्रजी व्याकरण, शब्दसंग्रह, आकलन, समानार्थी व विरुद्धार्थी शब्द, वाक्य दुरुस्ती, शब्द व वाक्प्रचार, विस्कळीत परिच्छेद (jumbled paragraph).',
    analogy: 'इंग्रजी शिकणं म्हणजे रस्त्याचे नियम शिकण्यासारखं आहे. व्याकरण म्हणजे वाहतुकीचे नियम, शब्दसंग्रह म्हणजे गावांची नावं ओळखणं, आणि आकलन म्हणजे गाडी वेगात चालवताना रस्त्यावरचे फलक वाचणं.',
  },
  computer: {
    name: 'संगणक संकल्पना',
    short: 'संगणक',
    blurb: 'संगणकाची मूलतत्त्वे, डेटाचे निरूपण व द्विमान अंकगणित, बूलियन बीजगणित, संगणक संरचना व interrupts, assembly व उच्चस्तरीय भाषा, C प्रोग्रामिंग आणि ऑपरेटिंग सिस्टमची मूलतत्त्वे.',
    official: 'संगणकाची मूलतत्त्वे; डेटाचे निरूपण (द्विमान अंकगणित, two’s complement, floating point, बूलियन बीजगणित, सत्यता सारणी, वेन आकृती); संगणक संरचना; संगणक भाषा (assembly, उच्चस्तरीय भाषा, C प्रोग्रामिंग); ऑपरेटिंग सिस्टमची मूलतत्त्वे.',
    analogy: 'संगणक म्हणजे व्यवस्थित चालणारं हॉटेलचं स्वयंपाकघर. CPU हा आचारी, RAM म्हणजे ओट्यावरची मोकळी जागा, हार्ड डिस्क म्हणजे कोठीची खोली, OS म्हणजे ऑर्डर वाटणारा मॅनेजर, आणि binary म्हणजे चालू/बंद अशी सोपी भाषा जी प्रत्येक कामगाराला कळते.',
  },
};

export const PLAN_MR = [
  { focus: 'पाया: अंकगणित, मालिका, संख्या पद्धती, वाचनाची सवय', note: 'आजपासून एक सवय लावा: परीक्षेपर्यंत दररोज एक इंग्रजी उतारा आणि दहा नवे इंग्रजी शब्द.' },
  { focus: 'बीजगणित भाग 1, सांकेतिक भाषा व नातेसंबंध, द्विमान अंकगणित' },
  { focus: 'बीजगणित भाग 2, क्रमवारी व बैठक व्यवस्था, floating point व बूलियन तर्क' },
  { focus: 'निर्देशक भूमिती, कोडी, CPU' },
  { focus: 'त्रिकोणमिती, विधानांवरील तर्क, मेमरी व I/O' },
  { focus: 'संभाव्यता व सांख्यिकी, दिनदर्शिका व घड्याळ, C ची मूलतत्त्वे' },
  { focus: 'उरलेले विषय: विकल समीकरणे, संच, महत्त्वमापन, आकृतींवरील तर्क, C व OS' },
  { focus: 'सराव परीक्षा आणि उजळणी', note: 'एक दिवसाआड तीन पूर्ण सराव परीक्षा द्या. प्रत्येक परीक्षेनंतर चुकलेल्या प्रत्येक विषयाचा सराव पुन्हा सोडवा. रोज उजळणी पत्रक वाचा.' },
];

// Marathi names for the `syllabus` headings used by topics (group headings and topic eyebrows).
export const SYLLABUS_MR = {
  'Algebra': 'बीजगणित',
  'Co-ordinate Geometry': 'निर्देशक भूमिती',
  'Differential Equations': 'विकल समीकरणे',
  'Trigonometry': 'त्रिकोणमिती',
  'Probability and Statistics': 'संभाव्यता व सांख्यिकी',
  'Arithmetic': 'अंकगणित',
  'Basic Set Theory and Functions': 'संच सिद्धांत व फलन',
  'Mensuration': 'महत्त्वमापन',
  'Analytical puzzles': 'विश्लेषणात्मक कोडी',
  'Logical deduction': 'तार्किक निष्कर्ष',
  'Verbal reasoning': 'शाब्दिक तर्क',
  'Non-verbal reasoning': 'अशाब्दिक (आकृती) तर्क',
  'Comprehension': 'उतारा आकलन',
  'Synonyms, Antonyms': 'समानार्थी व विरुद्धार्थी शब्द',
  'Vocabulary': 'शब्दसंग्रह',
  'Word & Phrases': 'शब्द व वाक्प्रचार',
  'Basic English Grammar': 'मूलभूत इंग्रजी व्याकरण',
  'Sentence Correction': 'वाक्य दुरुस्ती',
  'Jumbled Paragraph': 'विस्कळीत परिच्छेद',
  'Computer Basics': 'संगणकाची मूलतत्त्वे',
  'Data Representation': 'डेटाचे निरूपण',
  'Computer Architecture': 'संगणक संरचना',
  'Computer Language': 'संगणक भाषा',
  'Operating System basics': 'ऑपरेटिंग सिस्टमची मूलतत्त्वे',
};

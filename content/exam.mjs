// Everything specific to this exam. The engine (scripts/build.mjs, src/) reads only this file,
// content/plan.mjs, content/papers.mjs, content/terms.mjs and the topic files. To build a site for
// another exam, replace this file and the content, and keep the engine unchanged.
//
// Pattern and syllabus wording are from the official MAH-MCA-CET 2026 Information Brochure
// (State CET Cell, Maharashtra), section 9.0. Re-check against the next brochure.

export const EXAM = {
  "id": "mca",
  "logo": "MC",
  "brand": {
    "en": "MCA CET Prep",
    "mr": "MCA CET तयारी"
  },
  "examName": "MAH-MCA-CET",
  "conductor": {
    "en": "State CET Cell, Maharashtra",
    "mr": "राज्य सामाईक प्रवेश परीक्षा कक्ष, महाराष्ट्र"
  },
  "repo": "https://github.com/BaluRaut/mca-cet-prep",
  "issues": "https://github.com/BaluRaut/mca-cet-prep/issues",
  "oldPathPrefix": "/mca-cet-prep",
  "officialSite": "https://cetcell.mahacet.org/",
  "brochureUrl": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf",
  "brochureYear": 2026,
  "questions": 100,
  "marks": 200,
  "minutes": 90,
  "marksPerQuestion": 2,
  "negativeMarks": 0,
  "medium": {
    "en": "English",
    "mr": "केवळ इंग्रजी"
  },
  "mode": {
    "en": "Online (computer-based)",
    "mr": "ऑनलाइन (संगणकावर)"
  },
  "eligibility": {
    "en": "Any graduation degree (B.E./B.Tech/B.Sc/B.Com/B.Voc/BCA etc.), preferably with Mathematics at 10+2 or graduation level, with at least 50% marks (45% for reserved categories, EWS and PwD candidates belonging to Maharashtra). Final-year students may also appear.",
    "mr": "कोणतीही पदवी (B.E./B.Tech/B.Sc/B.Com/B.Voc/BCA इ.), शक्यतो 12वी किंवा पदवी स्तरावर गणितासह, किमान 50% गुण (महाराष्ट्रातील राखीव प्रवर्ग, EWS व दिव्यांग उमेदवारांसाठी 45%). अंतिम वर्षातील विद्यार्थीही परीक्षा देऊ शकतात."
  },
  "analytics": {
    "amplitudeKey": "cf9409dbde4fb96686ac8fabd345e057"
  },
  "features": {
    "words": true
  },
  "sections": [
    {
      "id": "maths",
      "questions": 30,
      "hue": 250,
      "minutes": 35,
      "name": {
        "en": "Mathematics & Statistics",
        "mr": "गणित व सांख्यिकी"
      },
      "short": {
        "en": "Maths",
        "mr": "गणित"
      },
      "blurb": {
        "en": "High-school maths up to 12th standard: algebra, coordinate geometry, trigonometry, probability and statistics, arithmetic, sets and mensuration.",
        "mr": "12वीपर्यंतचे गणित: बीजगणित, निर्देशक भूमिती, त्रिकोणमिती, संभाव्यता व सांख्यिकी, अंकगणित, संच आणि महत्त्वमापन."
      },
      "official": {
        "en": "Algebra; Co-ordinate Geometry; Differential Equations; Trigonometry; Probability and Statistics; Arithmetic; Basic Set Theory and Functions; Mensuration.",
        "mr": "बीजगणित (Algebra); निर्देशक भूमिती (Co-ordinate Geometry); विकल समीकरणे (Differential Equations); त्रिकोणमिती (Trigonometry); संभाव्यता व सांख्यिकी (Probability and Statistics); अंकगणित (Arithmetic); संच सिद्धांत व फलन (Set Theory and Functions); महत्त्वमापन (Mensuration)."
      },
      "analogy": {
        "en": "Maths here is a toolbox, not a theory exam. Every question asks \"which tool, and how fast can you use it?\" Learn the formula as the tool and the worked example as the way to hold it.",
        "mr": "इथलं गणित म्हणजे सिद्धांतांची परीक्षा नाही, तर हत्यारांची पेटी आहे. प्रत्येक प्रश्न एवढंच विचारतो: \"कोणतं हत्यार वापरायचं, आणि किती पटकन?\" सूत्र म्हणजे हत्यार, आणि सोडवलेलं उदाहरण म्हणजे ते हातात कसं धरायचं ते."
      }
    },
    {
      "id": "reasoning",
      "questions": 30,
      "hue": 300,
      "minutes": 30,
      "name": {
        "en": "Logical / Abstract Reasoning",
        "mr": "तार्किक / अमूर्त तर्कशक्ती"
      },
      "short": {
        "en": "Reasoning",
        "mr": "तर्कशक्ती"
      },
      "blurb": {
        "en": "How quickly and logically you think: series, coding, relations, directions, arrangements, puzzles, syllogisms and statement-based logic.",
        "mr": "तुम्ही किती पटकन आणि तर्कशुद्ध विचार करता: मालिका, सांकेतिक भाषा, नातेसंबंध, दिशा, बैठक व्यवस्था, कोडी, syllogism आणि विधानांवर आधारित तर्क."
      },
      "official": {
        "en": "Questions measuring how quickly and logically you can think: logical situations and questions based on the facts given in a passage, testing problem-solving capability.",
        "mr": "तुम्ही किती पटकन आणि तर्कशुद्ध विचार करू शकता हे मोजणारे प्रश्न: तार्किक परिस्थिती आणि दिलेल्या उताऱ्यातील तथ्यांवर आधारित प्रश्न, जे तुमची समस्या सोडवण्याची क्षमता तपासतात."
      },
      "analogy": {
        "en": "Reasoning is detective work. The question hands you clues; your job is to write them down neatly, rule things out, and only then name the culprit. Most wrong answers come from solving in your head instead of on paper.",
        "mr": "तर्कशक्ती म्हणजे गुप्तहेराचं काम. प्रश्न तुम्हाला सुगावे देतो; ते कागदावर नीट मांडायचे, अशक्य शक्यता एक-एक करून बाद करायच्या, आणि मगच गुन्हेगाराचं नाव घ्यायचं. बहुतेक चुका कागदाऐवजी डोक्यातच सोडवल्यामुळे होतात."
      }
    },
    {
      "id": "english",
      "questions": 20,
      "hue": 150,
      "minutes": 12,
      "name": {
        "en": "English Comprehension & Verbal Ability",
        "mr": "इंग्रजी आकलन व शाब्दिक क्षमता"
      },
      "short": {
        "en": "English",
        "mr": "इंग्रजी"
      },
      "blurb": {
        "en": "Basic grammar, vocabulary, comprehension, synonyms and antonyms, sentence correction, words and phrases, and jumbled paragraphs.",
        "mr": "मूलभूत व्याकरण, शब्दसंग्रह, उतारा आकलन, समानार्थी-विरुद्धार्थी शब्द, वाक्य दुरुस्ती, शब्द व वाक्प्रचार आणि विस्कळीत परिच्छेद. नियम मराठीत समजावले आहेत; उदाहरणे इंग्रजीतच."
      },
      "official": {
        "en": "Basic English grammar, vocabulary, comprehension, synonyms, antonyms, sentence correction, word & phrases, jumbled paragraph.",
        "mr": "मूलभूत इंग्रजी व्याकरण, शब्दसंग्रह, आकलन, समानार्थी व विरुद्धार्थी शब्द, वाक्य दुरुस्ती, शब्द व वाक्प्रचार, विस्कळीत परिच्छेद (jumbled paragraph)."
      },
      "analogy": {
        "en": "English is like learning the rules of a road. Grammar is the traffic rules, vocabulary is knowing the place names, and comprehension is reading the signboards while driving at speed.",
        "mr": "इंग्रजी शिकणं म्हणजे रस्त्याचे नियम शिकण्यासारखं आहे. व्याकरण म्हणजे वाहतुकीचे नियम, शब्दसंग्रह म्हणजे गावांची नावं ओळखणं, आणि आकलन म्हणजे गाडी वेगात चालवताना रस्त्यावरचे फलक वाचणं."
      }
    },
    {
      "id": "computer",
      "questions": 20,
      "hue": 30,
      "minutes": 10,
      "name": {
        "en": "Computer Concepts",
        "mr": "संगणक संकल्पना"
      },
      "short": {
        "en": "Computer",
        "mr": "संगणक"
      },
      "blurb": {
        "en": "Computer basics, data representation and binary arithmetic, Boolean algebra, architecture and interrupts, assembly vs high-level languages, C programming and OS basics.",
        "mr": "संगणकाची मूलतत्त्वे, डेटाचे निरूपण व द्विमान अंकगणित, बूलियन बीजगणित, संगणक संरचना व interrupts, assembly व उच्चस्तरीय भाषा, C प्रोग्रामिंग आणि ऑपरेटिंग सिस्टमची मूलतत्त्वे."
      },
      "official": {
        "en": "Computer Basics; Data Representation (incl. binary arithmetic, two’s complement, floating point, Boolean algebra, truth tables, Venn diagrams); Computer Architecture; Computer Language (assembly, high-level, programming in C); Operating System basics.",
        "mr": "संगणकाची मूलतत्त्वे; डेटाचे निरूपण (द्विमान अंकगणित, two’s complement, floating point, बूलियन बीजगणित, सत्यता सारणी, वेन आकृती); संगणक संरचना; संगणक भाषा (assembly, उच्चस्तरीय भाषा, C प्रोग्रामिंग); ऑपरेटिंग सिस्टमची मूलतत्त्वे."
      },
      "analogy": {
        "en": "A computer is a well-run restaurant kitchen. The CPU is the chef, RAM is the counter space, the hard disk is the store-room, the OS is the manager handing out orders, and binary is the simple on/off language every worker understands.",
        "mr": "संगणक म्हणजे व्यवस्थित चालणारं हॉटेलचं स्वयंपाकघर. CPU हा आचारी, RAM म्हणजे ओट्यावरची मोकळी जागा, हार्ड डिस्क म्हणजे कोठीची खोली, OS म्हणजे ऑर्डर वाटणारा मॅनेजर, आणि binary म्हणजे चालू/बंद अशी सोपी भाषा जी प्रत्येक कामगाराला कळते."
      }
    }
  ]
};

export const SECTIONS = EXAM.sections;

// Marathi names for the `syllabus` headings used by topics.
export const SYLLABUS_MR = {
  "Algebra": "बीजगणित",
  "Co-ordinate Geometry": "निर्देशक भूमिती",
  "Differential Equations": "विकल समीकरणे",
  "Trigonometry": "त्रिकोणमिती",
  "Probability and Statistics": "संभाव्यता व सांख्यिकी",
  "Arithmetic": "अंकगणित",
  "Basic Set Theory and Functions": "संच सिद्धांत व फलन",
  "Mensuration": "महत्त्वमापन",
  "Analytical puzzles": "विश्लेषणात्मक कोडी",
  "Logical deduction": "तार्किक निष्कर्ष",
  "Verbal reasoning": "शाब्दिक तर्क",
  "Non-verbal reasoning": "अशाब्दिक (आकृती) तर्क",
  "Comprehension": "उतारा आकलन",
  "Synonyms, Antonyms": "समानार्थी व विरुद्धार्थी शब्द",
  "Vocabulary": "शब्दसंग्रह",
  "Word & Phrases": "शब्द व वाक्प्रचार",
  "Basic English Grammar": "मूलभूत इंग्रजी व्याकरण",
  "Sentence Correction": "वाक्य दुरुस्ती",
  "Jumbled Paragraph": "विस्कळीत परिच्छेद",
  "Computer Basics": "संगणकाची मूलतत्त्वे",
  "Data Representation": "डेटाचे निरूपण",
  "Computer Architecture": "संगणक संरचना",
  "Computer Language": "संगणक भाषा",
  "Operating System basics": "ऑपरेटिंग सिस्टमची मूलतत्त्वे"
};

export const FOOT = {
  en: {
    source: "Exam pattern and syllabus from the official <a href=\"https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf\">MAH-MCA-CET 2026 Information Brochure</a> (State CET Cell, Maharashtra). Always confirm dates and rules on <a href=\"https://cetcell.mahacet.org/\">cetcell.mahacet.org</a>.",
    terms: "<a href=\"terms.html\">Terms and conditions</a> · For learning purposes only. This is not an official site and is not affiliated with the State CET Cell.",
  },
  mr: {
    source: "परीक्षेचे स्वरूप व अभ्यासक्रम अधिकृत <a href=\"https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf\">MAH-MCA-CET 2026 माहितीपुस्तिकेतून</a> (राज्य सामाईक प्रवेश परीक्षा कक्ष, महाराष्ट्र) घेतले आहेत. तारखा व नियम नेहमी <a href=\"https://cetcell.mahacet.org/\">cetcell.mahacet.org</a> वर तपासा.",
    terms: "<a href=\"terms.html\">अटी व शर्ती</a> · केवळ अभ्यासासाठी. हे अधिकृत संकेतस्थळ नाही आणि राज्य CET कक्षाशी संलग्न नाही.",
  },
};

// About page: what the exam is and who can appear. Rendered as about.html.
export const ABOUT = {
  en: {
    title: 'About MAH-MCA-CET · MCA CET Prep',
    description: 'What MAH-MCA-CET is, who conducts it, what it is for, and who can appear: eligibility, pattern, medium and official links.',
    eyebrow: 'About the exam',
    h1: 'What is MAH-MCA-CET, and who can appear?',
    lede: 'The Maharashtra MCA Common Entrance Test is the state-level entrance test for admission to the two-year MCA (Master of Computer Applications) course in Maharashtra. Everything below is from the official 2026 information brochure; the next brochure may change details.',
    blocks: [
      { h: 'What it is', p: [
        'MAH-MCA-CET is conducted by the <b>State Common Entrance Test Cell, Maharashtra</b> (cetcell.mahacet.org), once a year, usually in March–April, as an online computer-based test.',
        'Its score is used for admission to MCA courses in government, government-aided, university-managed and unaided colleges across Maharashtra, through the <b>Centralised Admission Process (CAP)</b> run by the CET Cell after the result. Candidates are ranked by percentile.',
      ] },
      { h: 'Who can appear', ul: [
        'Indian nationals.',
        'Anyone who has passed <b>any graduation degree</b> (B.E./B.Tech, B.Sc, B.Com, B.Voc, BCA and so on), preferably with Mathematics at 10+2 or at graduation level.',
        'At least <b>50% marks</b> in the qualifying degree; <b>45%</b> for candidates of reserved categories, EWS and persons with disability belonging to Maharashtra.',
        'Students in the <b>final year</b> of their degree may also appear.',
        'There is no age limit and no limit on the number of attempts in the brochure.',
      ] },
      { h: 'Who should consider it', p: [
        'Graduates from any stream who want a postgraduate computing qualification and a software career, including students from B.Sc, B.Com and BCA backgrounds. If you did not study Mathematics after 10th, you can still appear; check the latest brochure for any bridge-course requirement at admission.',
      ] },
      { h: 'How the test works', p: [
        'One online paper, 90 minutes, four sections and a single timer. Every question is a four-option multiple-choice question worth 2 marks, and there is no negative marking. The medium is English only.',
      ] },
      { h: 'Official links', links: [
        ['State CET Cell (notifications, registration, hall ticket, result)', 'https://cetcell.mahacet.org/'],
        ['MAH-MCA-CET 2026 Information Brochure (PDF)', 'https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf'],
      ] },
    ],
  },
  mr: {
    title: 'MAH-MCA-CET विषयी · MCA CET तयारी',
    description: 'MAH-MCA-CET म्हणजे काय, ती कोण घेते, ती कशासाठी आहे, आणि ती कोण देऊ शकते: पात्रता, स्वरूप, माध्यम आणि अधिकृत दुवे.',
    eyebrow: 'परीक्षेविषयी',
    h1: 'MAH-MCA-CET म्हणजे काय, आणि ती कोण देऊ शकते?',
    lede: 'महाराष्ट्र MCA सामाईक प्रवेश परीक्षा ही महाराष्ट्रातील दोन वर्षांच्या MCA (Master of Computer Applications) अभ्यासक्रमाच्या प्रवेशासाठीची राज्यस्तरीय प्रवेश परीक्षा आहे. खालील सर्व माहिती अधिकृत 2026 माहितीपुस्तिकेतून घेतली आहे; पुढील माहितीपुस्तिकेत तपशील बदलू शकतात.',
    blocks: [
      { h: 'ही परीक्षा काय आहे', p: [
        'MAH-MCA-CET <b>राज्य सामाईक प्रवेश परीक्षा कक्ष, महाराष्ट्र</b> (cetcell.mahacet.org) वर्षातून एकदा, साधारण मार्च–एप्रिलमध्ये, ऑनलाइन संगणक-आधारित पद्धतीने घेते.',
        'तिचे गुण महाराष्ट्रातील शासकीय, अनुदानित, विद्यापीठ-संचालित आणि विनाअनुदानित महाविद्यालयांतील MCA प्रवेशासाठी वापरले जातात. प्रवेश निकालानंतर CET कक्ष राबवत असलेल्या <b>केंद्रीभूत प्रवेश प्रक्रियेतून (CAP)</b> होतो. उमेदवारांची क्रमवारी percentile नुसार लावली जाते.',
      ] },
      { h: 'कोण देऊ शकते', ul: [
        'भारतीय नागरिक.',
        '<b>कोणतीही पदवी</b> उत्तीर्ण (B.E./B.Tech, B.Sc, B.Com, B.Voc, BCA इ.), शक्यतो 12वी किंवा पदवी स्तरावर गणित विषयासह.',
        'पात्रता पदवीत किमान <b>50% गुण</b>; महाराष्ट्रातील राखीव प्रवर्ग, EWS आणि दिव्यांग उमेदवारांसाठी <b>45%</b>.',
        'पदवीच्या <b>अंतिम वर्षातील</b> विद्यार्थीही परीक्षा देऊ शकतात.',
        'माहितीपुस्तिकेत वयाची अट नाही आणि प्रयत्नांच्या संख्येवर मर्यादा नाही.',
      ] },
      { h: 'कोणी विचार करावा', p: [
        'कोणत्याही शाखेचे पदवीधर ज्यांना संगणकातील पदव्युत्तर पात्रता आणि software क्षेत्रातील करिअर हवे आहे, B.Sc, B.Com आणि BCA च्या विद्यार्थ्यांसह. 10वी नंतर गणित शिकले नसले तरी परीक्षा देता येते; प्रवेशाच्या वेळी bridge course ची अट आहे का, ते नव्या माहितीपुस्तिकेत तपासा.',
      ] },
      { h: 'परीक्षा कशी असते', p: [
        'एकच ऑनलाइन पेपर, 90 मिनिटे, चार विभाग आणि एकच टायमर. प्रत्येक प्रश्न चार पर्यायांचा बहुपर्यायी प्रश्न, 2 गुणांचा, आणि निगेटिव्ह मार्किंग नाही. माध्यम केवळ इंग्रजी.',
      ] },
      { h: 'अधिकृत दुवे', links: [
        ['राज्य CET कक्ष (सूचना, नोंदणी, हॉल तिकीट, निकाल)', 'https://cetcell.mahacet.org/'],
        ['MAH-MCA-CET 2026 माहितीपुस्तिका (PDF)', 'https://cetcell.mahacet.org/wp-content/uploads/2023/12/IB_MCA_CET2026.pdf'],
      ] },
    ],
  },
};

// ---- Home page copy ----
export const HOME = {
  en: {
    title: 'MCA CET Prep · MAH-MCA-CET with analogies',
    description: 'Free MAH-MCA-CET preparation: every Maths, Reasoning, English and Computer topic explained with an everyday analogy, plus practice questions and a timed mock test.',
    eyebrow: 'MAH-MCA-CET · Maharashtra MCA entrance',
    h1: 'Every topic, explained with an everyday analogy',
    lede: (n) => `Free preparation for the MCA Common Entrance Test. Each of the ${n} topics starts with a picture from daily life (a cricket ball, a local train, a kirana shop) so the concept sticks, then gives the formulas, a worked example, the traps, and practice questions. Finish with a full-length timed mock test. <a href="mr/index.html" lang="mr" hreflang="mr">हे संकेतस्थळ मराठीतही वाचा →</a>`,
    stats: ['questions', 'marks', 'minutes', 'negative marking'],
    sections: 'The four sections',
    card: (q, m, min) => `${q} Q · ${m} marks · ~${min} min`,
    cardDone: (n) => `<span class="done-count">0</span> / ${n} topics done`,
    glance: 'Exam at a glance',
    facts: [
      ['Pattern', `${EXAM.questions} multiple-choice questions (4 options), ${EXAM.marksPerQuestion} marks each, ${EXAM.marks} marks total.`],
      ['Time', `${EXAM.minutes} minutes for the whole paper. There is no separate timer per section; you can attempt any question at any time.`],
      ['Negative marking', 'none. An unanswered question scores zero.'],
      ['Mode and medium', `${EXAM.mode}, in ${EXAM.medium} only.`],
      ['Eligibility', EXAM.eligibility],
    ],
    source: `Source: official ${EXAM.brochureYear} brochure. The ${EXAM.brochureYear + 1} brochure may change details; check <a href="${EXAM.officialSite}">cetcell.mahacet.org</a>.`,
    strategy: 'Exam-day strategy',
    strategyTag: 'Think of it like…',
    strategyAnalogy: 'A farmer picking cotton before the rain. Pick the full, easy bolls on every plant first, then come back for the hard ones. Never stand at one stubborn plant while the whole field waits.',
    strategySteps: [
      ['Two passes.', 'First pass: answer everything you can do in under a minute; mark the rest. Second pass: return to marked questions.'],
      ['Leave nothing blank.', 'With no negative marking, a blank is a guaranteed zero. The brochure advises against <i>random</i> guessing, so eliminate the options you know are wrong first, then choose.'],
      ['Bank time on English and Computer.', 'They are mostly recall: aim for ~12 and ~10 minutes, leaving ~35 for Maths and ~30 for Reasoning.'],
      ['Paper for reasoning.', 'Draw the family tree, the direction arrows, the seating circle. Solving in your head is where reasoning marks are lost.'],
    ],
    plan: '8-week study plan',
    planNote: 'Each week mixes all four sections so nothing goes cold. Topics you tick as done show a check here too.',
    week: (i) => `Week ${i}`,
    cta: 'Ready to test yourself?',
    ctaText: `The mock test draws ${EXAM.questions} questions in the real 30/30/20/20 split, runs a ${EXAM.minutes}-minute timer, and shows a section-wise score with explanations.`,
    ctaMock: 'Start a mock test',
    ctaRevision: 'Quick revision sheet',
  },
  mr: {
    title: 'MCA CET तयारी · प्रत्येक विषय उपमेसह, मराठीत',
    description: 'MAH-MCA-CET ची मोफत तयारी मराठीत: गणित, तर्कशक्ती, इंग्रजी आणि संगणकाचा प्रत्येक विषय रोजच्या जीवनातील उपमेने समजावलेला, सराव प्रश्न आणि वेळेसह सराव परीक्षा.',
    eyebrow: 'MAH-MCA-CET · महाराष्ट्र MCA प्रवेश परीक्षा',
    h1: 'प्रत्येक विषय, रोजच्या जीवनातील उपमेने',
    lede: (n) => `MCA सामाईक प्रवेश परीक्षेची मोफत तयारी, मराठीत. सर्व ${n} विषयांची सुरुवात रोजच्या जीवनातील एका चित्राने होते (क्रिकेटचा चेंडू, लोकल ट्रेन, किराणा दुकान), त्यामुळे संकल्पना पक्की बसते. नंतर सूत्रे, सोडवलेले उदाहरण, नेहमीच्या चुका आणि सराव प्रश्न. शेवटी पूर्ण वेळेची सराव परीक्षा. <b>परीक्षा फक्त इंग्रजीत असते</b>, म्हणून प्रश्न इंग्रजीतच ठेवले आहेत आणि प्रत्येक प्रश्नाखाली त्याचा मराठी अर्थ दिला आहे.`,
    stats: ['प्रश्न', 'गुण', 'मिनिटे', 'निगेटिव्ह मार्किंग'],
    sections: 'चार विभाग',
    card: (q, m, min) => `${q} प्रश्न · ${m} गुण · ~${min} मिनिटे`,
    cardDone: (n) => `<span class="done-count">0</span> / ${n} विषय पूर्ण`,
    glance: 'परीक्षा एका नजरेत',
    facts: [
      ['स्वरूप', `${EXAM.questions} बहुपर्यायी प्रश्न (4 पर्याय), प्रत्येकी ${EXAM.marksPerQuestion} गुण, एकूण ${EXAM.marks} गुण.`],
      ['वेळ', `संपूर्ण पेपरसाठी ${EXAM.minutes} मिनिटे. प्रत्येक विभागासाठी वेगळा टायमर नाही; कोणताही प्रश्न केव्हाही सोडवता येतो.`],
      ['निगेटिव्ह मार्किंग', 'नाही. न सोडवलेल्या प्रश्नाला शून्य गुण.'],
      ['पद्धत व माध्यम', 'ऑनलाइन (संगणकावर), केवळ इंग्रजी माध्यम.'],
      ['पात्रता', 'कोणतीही पदवी (B.E./B.Tech/B.Sc/B.Com/B.Voc/BCA इ.), शक्यतो 12वी किंवा पदवी स्तरावर गणितासह, किमान 50% गुण (महाराष्ट्रातील राखीव प्रवर्ग, EWS व दिव्यांग उमेदवारांसाठी 45%). अंतिम वर्षातील विद्यार्थीही परीक्षा देऊ शकतात.'],
    ],
    source: `स्रोत: अधिकृत ${EXAM.brochureYear} माहितीपुस्तिका. ${EXAM.brochureYear + 1} च्या माहितीपुस्तिकेत बदल असू शकतात; <a href="${EXAM.officialSite}">cetcell.mahacet.org</a> वर तपासा.`,
    strategy: 'परीक्षेच्या दिवशीची रणनीती',
    strategyTag: 'असं समजा…',
    strategyAnalogy: 'पाऊस येण्याआधी कापूस वेचणारा शेतकरी. आधी प्रत्येक झाडावरची पूर्ण उमललेली, सहज हाती येणारी बोंडं वेचायची, आणि अवघड बोंडांसाठी नंतर परत यायचं. एका हट्टी झाडापाशी उभं राहून संपूर्ण शेत थांबवायचं नाही.',
    strategySteps: [
      ['दोन फेऱ्या.', 'पहिली फेरी: एका मिनिटात सुटणारे सगळे प्रश्न सोडवा, बाकीच्यांवर खूण करा. दुसरी फेरी: खूण केलेल्या प्रश्नांकडे परत या.'],
      ['एकही प्रश्न सोडू नका.', 'निगेटिव्ह मार्किंग नसल्यामुळे रिकामा प्रश्न म्हणजे खात्रीचा शून्य. माहितीपुस्तिका <i>अंदाधुंद</i> अंदाज न लावण्याचा सल्ला देते, म्हणून आधी नक्की चुकीचे पर्याय बाद करा, मग निवडा.'],
      ['इंग्रजी व संगणकात वेळ वाचवा.', 'हे विभाग मुख्यतः पाठांतरावर आधारित आहेत: सुमारे 12 व 10 मिनिटे ठेवा, म्हणजे गणितासाठी ~35 आणि तर्कशक्तीसाठी ~30 मिनिटे उरतात.'],
      ['तर्कशक्तीसाठी कागद वापरा.', 'वंशवृक्ष, दिशांचे बाण, बैठकीचे वर्तुळ काढा. डोक्यातच सोडवल्यामुळे तर्कशक्तीचे गुण जातात.'],
    ],
    plan: '8 आठवड्यांचा अभ्यास आराखडा',
    planNote: 'प्रत्येक आठवड्यात चारही विभाग मिसळले आहेत, म्हणजे कोणताही विषय विसरला जात नाही. तुम्ही पूर्ण म्हणून खूण केलेले विषय इथेही ✓ सह दिसतात.',
    week: (i) => `आठवडा ${i}`,
    cta: 'स्वतःची परीक्षा घ्यायला तयार?',
    ctaText: `सराव परीक्षेत खऱ्या परीक्षेप्रमाणे 30/30/20/20 विभागणीत ${EXAM.questions} प्रश्न येतात, ${EXAM.minutes} मिनिटांचा टायमर चालतो, आणि शेवटी विभागवार गुण व स्पष्टीकरणे दिसतात.`,
    ctaMock: 'सराव परीक्षा सुरू करा',
    ctaRevision: 'झटपट उजळणी पत्रक',
  },
};

export const HOME_EXTRA = {
  en: {
    startHere: 'Start here',
    diag: 'Take the 20-question diagnostic',
    diagHint: '18 minutes. It tells you which section to study first.',
    you: 'Your progress',
    youDone: (n) => `of ${n} topics done`,
    youMock: 'last test score',
    youWrong: 'questions to retry',
    youDiag: 'Diagnostic',
    retake: 'retake',
    retry: 'Retry my mistakes',
    dailyLink: 'Day-by-day plan →',
    todayLabel: 'Today',
    examDay: 'Exam-day checklist',
    examDayNote: 'From the official brochure. Read it the night before.',
    checklist: [
      'Hall ticket, printed, with a recent photo affixed. Download it from the candidate login; the exam date, reporting time and centre are on it.',
      'One original photo ID with the same name as on the hall ticket: PAN card, passport, permanent driving licence, voter card, Aadhaar or e-Aadhaar with photo, bank passbook with photo, or a valid college ID. A ration card or learner’s licence is not accepted.',
      'Reach the centre before the reporting time on the hall ticket. Late candidates are not allowed in. Plan to be at the venue about 140 minutes in all, for verification, login and instructions.',
      'No mobile phone, smart watch, headphones or any electronic device in the hall. Being found with one means disqualification. Leave them at home or with someone outside.',
      'The test is on a computer: the option you click is your answer, and you can change it before submitting. There is no negative marking, so answer every question.',
      'Sleep well the night before and eat before you leave. Read the revision sheet once; do not start a new topic on exam day.',
    ],
  },
  mr: {
    startHere: 'इथून सुरू करा',
    diag: '20 प्रश्नांची प्रारंभिक चाचणी द्या',
    diagHint: '18 मिनिटे. कोणता विभाग आधी अभ्यासायचा ते सांगते.',
    you: 'तुमची प्रगती',
    youDone: (n) => `${n} विषयांपैकी पूर्ण`,
    youMock: 'शेवटच्या परीक्षेचे गुण',
    youWrong: 'पुन्हा सोडवायचे प्रश्न',
    youDiag: 'प्रारंभिक चाचणी',
    retake: 'पुन्हा द्या',
    retry: 'माझ्या चुका पुन्हा सोडवा',
    dailyLink: 'दिवसागणिक आराखडा →',
    todayLabel: 'आज',
    examDay: 'परीक्षेच्या दिवसाची यादी',
    examDayNote: 'अधिकृत माहितीपुस्तिकेतून. आदल्या रात्री वाचा.',
    checklist: [
      'हॉल तिकीट, प्रिंट केलेले, अलीकडचा फोटो चिकटवलेले. उमेदवार लॉगिनमधून डाउनलोड करा; परीक्षेची तारीख, हजर राहण्याची वेळ आणि केंद्र त्यावर असते.',
      'हॉल तिकिटावरील नावाशी जुळणारे एक मूळ फोटो ओळखपत्र: PAN कार्ड, पासपोर्ट, कायमस्वरूपी ड्रायव्हिंग लायसन्स, मतदार ओळखपत्र, फोटोसह आधार किंवा ई-आधार, फोटोसह बँक पासबुक, किंवा वैध कॉलेज ओळखपत्र. रेशन कार्ड किंवा लर्निंग लायसन्स चालत नाही.',
      'हॉल तिकिटावरील हजर राहण्याच्या वेळेआधी केंद्रावर पोहोचा. उशिरा आलेल्यांना प्रवेश मिळत नाही. पडताळणी, लॉगिन आणि सूचनांसाठी एकूण सुमारे 140 मिनिटे केंद्रावर लागतील असे गृहीत धरा.',
      'परीक्षा हॉलमध्ये मोबाइल, स्मार्ट वॉच, हेडफोन किंवा कोणतेही इलेक्ट्रॉनिक उपकरण नेऊ नका. जवळ सापडले तर अपात्र ठरवले जाते. ती घरी किंवा बाहेर कोणाकडे ठेवा.',
      'परीक्षा संगणकावर होते: तुम्ही क्लिक केलेला पर्याय हेच तुमचे उत्तर, आणि सबमिट करण्याआधी ते बदलता येते. निगेटिव्ह मार्किंग नाही, म्हणून प्रत्येक प्रश्न सोडवा.',
      'आदल्या रात्री पुरेशी झोप घ्या आणि निघण्याआधी जेवा. उजळणी पत्रक एकदा वाचा; परीक्षेच्या दिवशी नवीन विषय सुरू करू नका.',
    ],
  },
};

// ---- Mock test page copy ----
export const MOCK = {
  en: {
    eyebrow: 'Practice under exam conditions',
    h1: 'Mock test',
    lede: (n) => `Questions are drawn at random from the ${n}-question bank and options are shuffled, so every attempt is different.`,
    title: 'Mock test · MCA CET Prep',
    description: 'Timed MAH-MCA-CET mock test: 100 questions, 90 minutes, section-wise score and explanations.',
    noscript: 'The mock test needs JavaScript.',
  },
  mr: {
    eyebrow: 'परीक्षेसारख्या वातावरणात सराव',
    h1: 'सराव परीक्षा',
    lede: (n) => `${n} प्रश्नांच्या संग्रहातून प्रश्न यादृच्छिक पद्धतीने निवडले जातात आणि पर्यायांचा क्रमही बदलतो, त्यामुळे प्रत्येक वेळी नवी परीक्षा. प्रश्न खऱ्या परीक्षेप्रमाणे इंग्रजीत; हवे तेव्हा मराठी अर्थ पाहता येतो.`,
    title: 'सराव परीक्षा · MCA CET तयारी',
    description: 'वेळेसह MAH-MCA-CET सराव परीक्षा: 100 प्रश्न, 90 मिनिटे, विभागवार गुण आणि मराठी स्पष्टीकरणे.',
    noscript: 'सराव परीक्षेसाठी JavaScript आवश्यक आहे.',
  },
};

// ---- Previous papers page copy ----
export const PAPERS = {
  en: {
    title: 'Previous papers · MCA CET Prep',
    description: 'Where to find MAH-MCA-CET previous year question papers, what each source really contains, and how to practise with them.',
    eyebrow: 'Reference',
    h1: 'Previous year papers',
    lede: 'Honest answer first: State CET Cell does not publish MCA CET question papers on its website. What exists is your own paper in the candidate login, and papers that other sites have collected. Here is what each source actually contains, what kinds of questions past papers show, and how to use one with this site.',
    sources: 'Where to find them',
    head: ['Source', 'Years', 'Type', 'Access'],
    kinds: { official: 'Official', memory: 'Memory-based (unofficial)', unverified: 'Unofficial copy, not verified' },
    open: 'Open',
    caution: 'Unofficial papers can contain wrong answers or incomplete questions. If an answer key disagrees with your working, trust your working and check the topic here.',
    types: 'What past papers actually ask',
    typesNote: 'Question types seen in the 2023 memory-based paper, with the topic on this site that teaches each one.',
    typesHead: ['Question type', 'Learn it here'],
    gap: 'Not in the official syllabus, but asked',
    howto: 'How to practise with a past paper',
    steps: [
      ['Set exam conditions.', 'Print it or open it full-screen, put your phone away, and set a timer: 90 minutes for 100 questions, or about 54 seconds per question if the paper is shorter.'],
      ['Answer in one sitting.', 'No checking answers midway. Leave nothing blank: there is no negative marking.'],
      ['Mark, then sort your mistakes.', 'For every wrong or skipped question, write down which topic it belongs to.'],
      ['Fix the topic, not the question.', 'Open that topic here, read the analogy again, and redo its practice set until all four are right.'],
      ['Repeat with a fresh paper.', 'Alternate past papers with the <a href="mock.html">mock test</a> here, which draws a new paper every time.'],
    ],
  },
  mr: {
    title: 'मागील प्रश्नपत्रिका · MCA CET तयारी',
    description: 'MAH-MCA-CET च्या मागील वर्षांच्या प्रश्नपत्रिका कुठे मिळतात, प्रत्येक स्रोतात नेमके काय आहे, आणि त्यांचा सराव कसा करायचा.',
    eyebrow: 'संदर्भ',
    h1: 'मागील वर्षांच्या प्रश्नपत्रिका',
    lede: 'आधी खरे उत्तर: राज्य CET कक्ष MCA CET च्या प्रश्नपत्रिका स्वतःच्या संकेतस्थळावर प्रसिद्ध करत नाही. उपलब्ध आहे ते म्हणजे उमेदवार लॉगिनमधील तुमची स्वतःची प्रश्नपत्रिका, आणि इतर संकेतस्थळांनी गोळा केलेल्या प्रश्नपत्रिका. प्रत्येक स्रोतात नेमके काय आहे, मागील प्रश्नपत्रिकांमध्ये कोणत्या प्रकारचे प्रश्न येतात, आणि त्यांचा या संकेतस्थळासोबत कसा वापर करायचा, ते इथे दिले आहे.',
    sources: 'कुठे मिळतील',
    head: ['स्रोत', 'वर्षे', 'प्रकार', 'उपलब्धता'],
    kinds: { official: 'अधिकृत', memory: 'आठवणीवर आधारित (अनधिकृत)', unverified: 'अनधिकृत प्रत, खात्री केलेली नाही' },
    open: 'उघडा',
    caution: 'अनधिकृत प्रश्नपत्रिकांमध्ये चुकीची उत्तरे किंवा अपूर्ण प्रश्न असू शकतात. उत्तरसूची तुमच्या उकलीशी जुळत नसेल, तर तुमच्या उकलीवर विश्वास ठेवा आणि इथे तो विषय तपासा.',
    types: 'मागील प्रश्नपत्रिकांमध्ये प्रत्यक्ष काय विचारले जाते',
    typesNote: '2023 च्या आठवणीवर आधारित प्रश्नपत्रिकेत दिसलेले प्रश्नांचे प्रकार, आणि ते शिकवणारा या संकेतस्थळावरील विषय.',
    typesHead: ['प्रश्नाचा प्रकार', 'इथे शिका'],
    gap: 'अधिकृत अभ्यासक्रमात नाही, पण विचारले जाते',
    howto: 'मागील प्रश्नपत्रिकेने सराव कसा करायचा',
    steps: [
      ['परीक्षेसारखे वातावरण तयार करा.', 'प्रिंट काढा किंवा पूर्ण स्क्रीनवर उघडा, फोन बाजूला ठेवा आणि टायमर लावा: 100 प्रश्नांसाठी 90 मिनिटे, किंवा प्रश्नपत्रिका लहान असेल तर प्रत्येक प्रश्नाला सुमारे 54 सेकंद.'],
      ['एका बैठकीत सोडवा.', 'मध्येच उत्तरे तपासू नका. एकही प्रश्न रिकामा सोडू नका: निगेटिव्ह मार्किंग नाही.'],
      ['गुण काढा, मग चुकांची वर्गवारी करा.', 'प्रत्येक चुकलेल्या किंवा सोडलेल्या प्रश्नासाठी तो कोणत्या विषयाचा आहे ते लिहा.'],
      ['प्रश्न नव्हे, विषय पक्का करा.', 'तो विषय इथे उघडा, उपमा पुन्हा वाचा, आणि चारही प्रश्न बरोबर येईपर्यंत त्याचा सराव पुन्हा सोडवा.'],
      ['नवीन प्रश्नपत्रिकेने पुन्हा करा.', 'मागील प्रश्नपत्रिका आणि इथली <a href="mock.html">सराव परीक्षा</a> आलटून-पालटून द्या; सराव परीक्षा दर वेळी नवीन प्रश्नपत्रिका तयार करते.'],
    ],
  },
};

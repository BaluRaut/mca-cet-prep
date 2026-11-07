// "Previous papers" page. Facts checked on 2026-11-07:
// - State CET Cell does not post MCA CET question papers publicly. The question paper, the
//   candidate's response sheet and the provisional answer key are shown in the candidate login
//   during the answer-key/objection window.
// - The CollegeDekho 2023 PDF was downloaded and read: it is titled "(Memory-Based)", has about
//   20 questions recalled by candidates, and some questions are incomplete.
// - Testbook lists 2014–2016 papers it calls official, behind a free login; not verified here.
// Question types below were observed in that 2023 memory-based paper; `topic` links them to ours.

export const PAPER_SOURCES = [
  {
    name: { en: 'Your own official paper (candidate login)', mr: 'तुमची स्वतःची अधिकृत प्रश्नपत्रिका (उमेदवार लॉगिन)' },
    url: 'https://cetcell.mahacet.org/',
    years: { en: 'The year you appeared', mr: 'तुम्ही परीक्षा दिलेले वर्ष' },
    kind: 'official',
    access: { en: 'Free, with your CET login', mr: 'मोफत, तुमच्या CET लॉगिनने' },
    note: {
      en: 'After the exam, State CET Cell shows each candidate their question paper, response sheet and provisional answer key in the login, during the objection window. This is the only official source. It may not stay available after the result, so download it while you can. If a senior appeared last year, ask them for theirs.',
      mr: 'परीक्षेनंतर, हरकती नोंदवण्याच्या कालावधीत, राज्य CET कक्ष प्रत्येक उमेदवाराला त्याच्या लॉगिनमध्ये प्रश्नपत्रिका, उत्तरपत्रिका (response sheet) आणि तात्पुरती उत्तरसूची दाखवतो. हाच एकमेव अधिकृत स्रोत आहे. निकालानंतर तो उपलब्ध राहीलच असे नाही, म्हणून वेळेत डाउनलोड करून ठेवा. मागच्या वर्षी परीक्षा दिलेल्या सीनियरकडे त्यांची प्रत मागा.',
    },
  },
  {
    name: { en: 'CollegeDekho: MAH MCA CET 2023', mr: 'CollegeDekho: MAH MCA CET 2023' },
    url: 'https://www.collegedekho.com/exam/mah-mca-cet/previous-year-question-papers',
    years: { en: '2023', mr: '2023' },
    kind: 'memory',
    access: { en: 'Free PDF, no login', mr: 'मोफत PDF, लॉगिनची गरज नाही' },
    note: {
      en: 'We opened this PDF. It is titled “Memory-Based”: about 20 questions recalled by candidates after the exam, with answers. Some questions are incomplete or garbled, so use it to see question styles, not as a full timed paper.',
      mr: 'आम्ही ही PDF उघडून पाहिली. तिच्यावर “Memory-Based” असे लिहिले आहे: परीक्षेनंतर उमेदवारांनी आठवून लिहिलेले सुमारे 20 प्रश्न, उत्तरांसह. काही प्रश्न अपूर्ण किंवा अस्पष्ट आहेत, म्हणून प्रश्नांचे प्रकार समजण्यासाठी वापरा, पूर्ण वेळेची परीक्षा म्हणून नव्हे.',
    },
  },
  {
    name: { en: 'Testbook: MAH MCA CET papers', mr: 'Testbook: MAH MCA CET प्रश्नपत्रिका' },
    url: 'https://testbook.com/mah-mca-cet/previous-year-papers',
    years: { en: '2014, 2015, 2016', mr: '2014, 2015, 2016' },
    kind: 'unverified',
    access: { en: 'Free, login with mobile number or email', mr: 'मोफत, मोबाइल नंबर किंवा ईमेलने लॉगिन' },
    note: {
      en: 'The site calls these official papers; we have not been able to verify that. Older papers may follow a different pattern, so count the questions before you time yourself.',
      mr: 'हे संकेतस्थळ यांना अधिकृत प्रश्नपत्रिका म्हणते; आम्ही याची खात्री करू शकलो नाही. सध्याच्या 100 प्रश्नांच्या पद्धतीआधीच्या असू शकतात, म्हणून वेळ लावण्याआधी प्रश्नांची संख्या मोजा.',
    },
  },
];

export const OBSERVED_TYPES = [
  { topic: 'reading-comprehension', en: 'A passage (on dolphins) followed by main-idea and inference questions', mr: 'एक उतारा (डॉल्फिनवर) आणि त्यावर मुख्य कल्पना व अनुमानाचे प्रश्न' },
  { topic: 'synonyms-antonyms', en: 'Synonym and antonym of a single word', mr: 'एका शब्दाचा समानार्थी व विरुद्धार्थी शब्द' },
  { topic: 'vocabulary', en: 'Meaning of a word used in a sentence', mr: 'वाक्यात वापरलेल्या शब्दाचा अर्थ' },
  { topic: 'articles-prepositions', en: 'The correct preposition after a noun', mr: 'नामानंतर येणारे योग्य शब्दयोगी अव्यय (preposition)' },
  { topic: 'parts-of-speech-tenses', en: 'Choosing the right tense for “… for five years”', mr: '“… for five years” साठी योग्य काळ निवडणे' },
  { topic: 'sentence-correction', en: 'Improving part of a sentence', mr: 'वाक्याचा एखादा भाग सुधारणे' },
  { topic: 'analogy-classification', en: 'Odd one out among words, shapes and kinds of computers; putting words in logical order (city → state → country → world)', mr: 'शब्द, आकृत्या व संगणकांच्या प्रकारांमधील विसंगत घटक; शब्दांचा तार्किक क्रम (शहर → राज्य → देश → जग)' },
  { topic: 'letter-series', en: 'Finding a letter by its position from the end of the alphabet', mr: 'वर्णमालेच्या शेवटून स्थानावरून अक्षर शोधणे' },
  { topic: 'number-series', en: 'Next term of a series, and the wrong number in a series', mr: 'मालिकेतील पुढचे पद आणि मालिकेतील चुकीची संख्या' },
  { topic: 'coding-decoding', en: 'Coding by rearranging the letters of a word', mr: 'शब्दातील अक्षरांची जागा बदलून सांकेतिक भाषा' },
  { topic: 'permutations-combinations', en: 'Forming numbers from given digits with a divisibility rule; the dictionary rank of a word', mr: 'दिलेल्या अंकांपासून विभाज्यतेच्या अटीसह संख्या बनवणे; शब्दकोशातील शब्दाचा क्रमांक' },
  { topic: 'mensuration-3d', en: 'Melting a cuboid into a sphere and finding the radius', mr: 'इष्टिकाचिती वितळवून गोल बनवणे आणि त्रिज्या काढणे' },
  { topic: 'sets-relations-functions', en: 'Counting elements of sets defined by a rule (odd numbers below 200)', mr: 'नियमाने दिलेल्या संचातील घटक मोजणे (200 पेक्षा लहान विषम संख्या)' },
  { topic: null, en: 'General computer awareness: the parts of an email address, why HTML pages work in every browser', mr: 'सामान्य संगणक ज्ञान: ईमेल पत्त्याचे भाग, HTML पाने प्रत्येक ब्राउझरमध्ये का दिसतात' },
];

export default [
  // ───────────────────────────────────────────── 1. Reading comprehension
  {
    id: 'reading-comprehension',
    title: 'Reading Comprehension',
    syllabus: 'Comprehension',
    analogy: {
      title: 'Aai’s phone call from the village',
      oneLine: 'Answer only from what Aai actually said and hinted, never from gossip you heard elsewhere.',
      story:
        'You are in a hostel in Pune and Aai calls from the village. She talks for five minutes: your cousin’s results, the neighbour’s new tractor, the rain. But there is always <b>one reason she called</b>, and by the end you know it. She also says things without saying them: “Baba has been looking at the sky every hour, and the soybean seed is still in the store-room.” She never said “the rain is late and sowing is delayed”, yet you know it. And you can tell from her voice whether she is worried, proud or teasing you.<br><br>A comprehension passage is exactly this call. The examiner asks why she called (main idea), what exactly she said (detail), what she meant without saying it (inference), and how she sounded (tone). The one thing you must never do is answer from gossip your friend told you: if Aai did not say it or clearly hint it, it is not in the passage.',
      map: [
        ['The one reason Aai called', 'Main idea / best title: covers the whole passage'],
        ['The specific news she mentions (marks, tractor, rain)', 'Detail questions: answered by locating a line'],
        ['“Baba checks the sky; the seed is still in the store-room”', 'Inference: one small, certain step beyond the words'],
        ['Her voice: worried, proud, teasing', 'Tone / attitude of the author'],
        ['Gossip you heard from a friend, not from her', 'Out-of-scope option: may be true, but not supported'],
      ],
    },
    concept: [
      'CET passages are short (one to three paragraphs) and the questions come in five kinds: <b>main idea / title</b>, <b>direct detail</b>, <b>inference</b>, <b>tone / attitude</b>, and <b>word in context</b>. The passage is the whole world: an option that is true in real life but not supported by the passage is wrong.',
      '<b>Strategy:</b> read the question stems first (not the options), then read the passage actively. Notice the first and last sentences, the contrast words (<i>however, but, yet, unfortunately</i>) and the author’s opinion words. For a main-idea question, the right option covers every paragraph; reject options that are <i>too narrow</i> (one detail) or <i>too broad</i> (more than the passage discusses).',
      'An <b>inference</b> is something the passage does not state but which <i>must</i> be true if the passage is true. It is one small step, not a leap. Options with extreme words (<i>always, never, all, only, completely</i>) are usually wrong. For <b>tone</b>, collect the adjectives and the attitude behind them: CET favourites are critical, appreciative, objective (neutral), ironic/sarcastic, nostalgic, optimistic, pessimistic and cautionary.',
    ],
    keyPoints: [
      'Main idea = the one statement that covers the whole passage; reject too-narrow (one example) and too-broad (beyond the passage) options.',
      'Detail question: find the keyword in the passage and read the sentence before and after it. The right option usually <b>paraphrases</b>; an option that copies exact words is often a trap.',
      'Inference = must be true from the passage, one step beyond it. “Could be true” is not enough.',
      'Out of scope: true in the real world but not supported by the passage = wrong.',
      'Extreme words (always, never, only, all, completely) are red flags; moderate words (may, often, some, largely) are safer.',
      'Tone: judge from adjectives and contrast words. Sarcasm says the opposite of what it means, or mocks with exaggeration.',
      'Word in context: put each option into the sentence. The common dictionary meaning is often <i>not</i> the meaning used.',
      'Best title: short, covers the whole passage, and matches the author’s focus and tone.',
    ],
    example: {
      q: 'Passage: “Many farmers in Marathwada once burned crop residue after harvest because it was the cheapest way to clear a field. Agricultural officers now show them that the same residue, mixed into the soil, holds moisture and feeds the next crop. Villages that tried it report lower fertiliser bills within two seasons. The change has been slow, but it is spreading by word of mouth rather than through subsidies.”<br>Which option best states the main idea? (a) Burning crop residue is illegal. (b) Fertiliser prices in Marathwada are rising. (c) Farmers are slowly adopting residue mixing because it pays off in practice. (d) Subsidies are the best way to change farming habits.',
      steps: [
        'Summarise each sentence: old habit (burning) → new method shown (mixing) → result (lower bills) → how it spreads (slowly, by word of mouth).',
        '(a) Legality is never mentioned: out of scope.',
        '(b) Fertiliser <i>bills fall</i> for these villages; nothing is said about prices rising: out of scope.',
        '(d) The passage says the change spreads <i>without</i> subsidies: contradicts the passage.',
        '(c) Covers the shift, the reason (it pays off) and the pace (slowly): the whole passage.',
      ],
      answer: '(c) Farmers are slowly adopting residue mixing because it pays off in practice.',
    },
    shortcut:
      'Read the question stems before the passage so you read with a purpose. For main idea, the answer usually echoes the first or last sentence. Then strike out every option with an extreme word or an idea the passage never mentions; you are often left with one.',
    traps: [
      'Choosing an option because it is true or because you agree with it. Only the passage counts, not your general knowledge.',
      'Picking the option that repeats the passage word for word: examiners often build wrong answers from exact phrases used in the wrong sense.',
      'Marathi-medium readers often translate every word in their head, which eats time. Read in phrase-sized chunks and translate only the one sentence you are stuck on.',
    ],
    practice: [
      {
        q: 'Read the passage and answer.<br><i>The Mumbai dabbawalas deliver around two lakh lunch boxes every working day, and their error rate is remarkably low. They use no computers and keep few written records. Instead, a simple system of colour codes painted on each box, combined with fixed hand-over points at railway stations, lets workers with little formal schooling pass boxes from one team to the next without confusion. Management schools now study the system as an example of how clear rules can do the work of expensive technology.</i><br>The passage is mainly about:',
        options: [
          'The poor literacy of Mumbai’s dabbawalas',
          'Why railway stations in Mumbai are crowded at lunchtime',
          'How a simple, rule-based system makes the dabbawalas highly reliable',
          'Why management schools should stop teaching technology',
        ],
        answer: 2,
        why: 'Every sentence supports one idea: simple rules (codes, fixed hand-over points) give a low error rate. (a) is one detail, (b) is not discussed, (d) goes far beyond the passage.',
      },
      {
        q: 'Read the passage and answer.<br><i>When the new library opened in our taluka town, the librarian expected students to come mainly for exam guides. Within a month, however, the most borrowed shelf was the one with Marathi novels, and the waiting list for a single copy of a popular translation ran to forty names. The librarian has since moved the fiction shelf to the front and ordered extra copies, while the exam guides remain near the back.</i><br>Which of the following can be inferred from the passage?',
        options: [
          'Readers’ actual demand turned out to be different from what the librarian had expected.',
          'Students in the town have stopped preparing for exams.',
          'Marathi novels are better written than exam guides.',
          'The library will soon remove all its exam guides.',
        ],
        answer: 0,
        why: 'He expected demand for exam guides; the novels were borrowed most, and he changed the shelves. So demand differed from his expectation. (b) and (d) are extreme, (c) is an opinion the passage never gives.',
      },
      {
        q: 'Read the passage and answer.<br><i>Every year the civic body announces that the city’s roads will be pothole-free before the monsoon. Every year the rains arrive on time, and so do the potholes. This year, at a well-attended press conference, officials have once again promised a “permanent solution”, a phrase residents have learned to hear the way they hear a forecast of a cloudless day in the middle of July.</i><br>The tone of the author is best described as:',
        options: ['Appreciative', 'Neutral and factual', 'Nostalgic', 'Ironic'],
        answer: 3,
        why: '“The rains arrive on time, and so do the potholes” and the comparison with a cloudless July forecast mock the repeated promise. That is irony, not neutral reporting or praise.',
      },
      {
        q: 'Read the passage and answer.<br><i>Drip irrigation was once seen as a luxury that only large sugarcane growers could afford. Falling pipe prices and government support have changed that picture. A small grower in Jalna who switched last year says his water use fell by nearly half, and the water he saved let him <b>sustain</b> a second crop of vegetables through the dry months. He admits the first weeks were hard: the pipes clogged often until he learned to flush them every week.</i><br>As used in the passage, the word <b>sustain</b> most nearly means:',
        options: ['suffer', 'keep going', 'confirm', 'measure'],
        answer: 1,
        why: 'The saved water let him keep a second crop alive through the dry months. “Suffer” (sustain an injury) and “confirm” (an objection is sustained) are other dictionary senses that do not fit this sentence.',
      },
    ],
  },

  // ───────────────────────────────────────────── 2. Synonyms & antonyms
  {
    id: 'synonyms-antonyms',
    title: 'Synonyms and Antonyms',
    syllabus: 'Synonyms, Antonyms',
    analogy: {
      title: 'The shade card at the paint shop',
      oneLine: 'A synonym is the nearest shade on the same strip; an antonym is the far end of that strip.',
      story:
        'Before Diwali your family goes to the paint shop to repaint the front room. The shopkeeper hands you a shade card: each strip holds one colour family, going from very light to very dark. Your mother wants “the same green as the old wall”. Several shades look close, but only one is <i>nearest</i>, and that is the one you pick. If your brother wants the opposite feel, he points to the far end of the same strip, not to a random red from another card.<br><br>Words work the same way. <i>Glad, happy, cheerful, elated</i> sit on one strip, from mild to intense. A synonym question asks for the nearest shade; an antonym question asks for the far end of the same strip (<i>elated</i> ↔ <i>dejected</i>). And just as a matte paint cannot replace a gloss one, the answer must also be the same part of speech.',
      map: [
        ['One colour strip, light to dark', 'A word family of related meanings, mild to strong'],
        ['The shade nearest to the old wall', 'Synonym: “most nearly the same” meaning'],
        ['The opposite end of the same strip', 'Antonym: the opposite on the same scale (frugal ↔ extravagant)'],
        ['A shade from another card that looks similar under shop lights', 'Look-alike distractor (eminent / imminent, ephemeral / ethereal)'],
        ['Matte cannot replace gloss', 'The answer must be the same part of speech'],
      ],
    },
    concept: [
      'A synonym question asks for the word <b>most nearly the same</b> in meaning; an antonym question asks for the word <b>most nearly opposite</b>. Perfect matches are rare in English, so the skill is choosing the <i>closest shade</i> among several near-misses.',
      '<b>Method:</b> (1) say what part of speech the word is; (2) use it in a short sentence you know; (3) decide its charge, positive or negative (<i>frugal</i> is a compliment, <i>miserly</i> is not); (4) predict a meaning in your own words before you read the options. Roots help when the word is new: <i>bene</i> = good (benevolent), <i>mal</i> = bad (malevolent), <i>loqu</i> = speak (loquacious), <i>chron</i> = time (chronic), <i>ami</i> = friend (amicable).',
      'Examiners plant three kinds of trap: the <b>opposite</b> placed among synonym options (and vice versa), a <b>look-alike</b> word with a different meaning, and a word from the same <b>topic</b> but not the same meaning. Elimination is as useful as knowing the word.',
    ],
    keyPoints: [
      'Synonym = closest meaning <b>and</b> same part of speech: <i>abundant</i> (adj) → <i>plentiful</i> (adj).',
      'Antonym = the opposite on the same scale: <i>verbose</i> ↔ <i>concise</i> (not “silent”).',
      'Decide the charge (+/−) first: <i>frugal</i> (+, thrifty) vs <i>stingy</i> (−). The right answer keeps the same charge for a synonym and flips it for an antonym.',
      'High-frequency pairs (word – synonym / antonym): candid – frank / evasive; diligent – industrious / lazy; obsolete – outdated / modern; lethargic – sluggish / energetic; ephemeral – short-lived / permanent.',
      'More pairs: benevolent – kind / malevolent; garrulous – talkative / reticent; meticulous – careful / careless; ameliorate – improve / worsen; adversity – hardship / prosperity; abundant – plentiful / scarce.',
      'Prefixes in-, im-, un-, dis- often form antonyms, but not always: <i>inflammable</i> = easily set on fire (same as flammable); <i>invaluable</i> = priceless.',
      'Look-alikes: <i>eminent</i> (famous) / <i>imminent</i> (about to happen); <i>ephemeral</i> (short-lived) / <i>ethereal</i> (delicate, heavenly); <i>adverse</i> (unfavourable) / <i>averse</i> (unwilling).',
    ],
    example: {
      q: 'Choose the word most nearly <b>opposite</b> in meaning to <b>VERBOSE</b>: (a) wordy (b) eloquent (c) concise (d) silent',
      steps: [
        'Meaning: <i>verbose</i> (adjective) = using more words than needed.',
        'The scale is “how many words for the idea”: too many ↔ just enough / few.',
        '(a) <i>wordy</i> is a synonym: it is the planted trap. Eliminate.',
        '(b) <i>eloquent</i> = fluent and persuasive: a different scale (quality, not quantity). Eliminate.',
        '(d) <i>silent</i> uses no words at all: it is off the scale, not its opposite end. (c) <i>concise</i> = expressing much in few words, the far end of the same strip.',
      ],
      answer: '(c) concise',
    },
    shortcut:
      'Predict before you peek: cover the options, say a simple meaning in your own words (in Marathi if that is faster), then look for the closest option. For an antonym question, first spot the synonym among the options and strike it out; the right answer is usually its exact opposite.',
    traps: [
      'Answering “synonym” when the question says “antonym”: every set includes one option of each kind. Underline SAME or OPPOSITE before you start.',
      'Choosing a look-alike: <i>ethereal</i> for <i>ephemeral</i>, <i>adversary</i> (opponent) for <i>adversity</i> (hardship), <i>candy</i>-sounding “sweet” for <i>candid</i>.',
      '<i>Inflammable</i> is not the opposite of <i>flammable</i>; both mean “easily set on fire”. The opposite is <i>non-flammable</i>.',
    ],
    practice: [
      {
        q: 'Choose the word most nearly the <b>same</b> in meaning as <b>AMELIORATE</b>.',
        options: ['Aggravate', 'Improve', 'Accumulate', 'Alienate'],
        answer: 1,
        why: '<i>Ameliorate</i> = to make a bad situation better. <i>Aggravate</i> (make worse) is the planted opposite.',
      },
      {
        q: 'Choose the word most nearly <b>opposite</b> in meaning to <b>EPHEMERAL</b>.',
        options: ['Transient', 'Fleeting', 'Ethereal', 'Permanent'],
        answer: 3,
        why: '<i>Ephemeral</i> = lasting a very short time. <i>Transient</i> and <i>fleeting</i> are synonyms; <i>ethereal</i> is a look-alike meaning delicate or heavenly. The opposite is <i>permanent</i>.',
      },
      {
        q: 'Choose the word most nearly the <b>same</b> in meaning as <b>CANDID</b>.',
        options: ['Frank', 'Sweet', 'Cautious', 'Clever'],
        answer: 0,
        why: '<i>Candid</i> = open and honest in what one says, i.e. frank. “Sweet” is a sound trap (candy); “cautious” is closer to its opposite.',
      },
      {
        q: 'Choose the word most nearly <b>opposite</b> in meaning to <b>ADVERSITY</b>.',
        options: ['Misfortune', 'Hardship', 'Prosperity', 'Opposition'],
        answer: 2,
        why: '<i>Adversity</i> = difficult or unlucky circumstances. Misfortune and hardship are synonyms; “opposition” is a trap from the look-alike <i>adversary</i>. The opposite is <i>prosperity</i>.',
      },
    ],
  },

  // ───────────────────────────────────────────── 3. Vocabulary
  {
    id: 'vocabulary',
    title: 'Vocabulary: One-word Substitution and Confused Words',
    syllabus: 'Vocabulary',
    analogy: {
      title: 'The postman and the PIN code',
      oneLine: 'One-word substitution is a PIN code for a long description; confused words are two houses with nearly the same name.',
      story:
        'The postman in your taluka does not need to read “third house after the Hanuman temple, behind the dairy, near the old well, Shirur”. Six digits of the PIN code carry the whole description, and the digits are not random: the first one tells the region, the next ones narrow it down. Learn how the code is built and you can place a PIN you have never seen.<br><br>One-word substitution is the same trick: “one who does not believe in God” compresses to <b>atheist</b>, and the parts of the word (<i>a-</i> = without, <i>theos</i> = God) are the digits you can decode. The postman’s other headache is two houses on one lane called <i>Patil Niwas</i> and <i>Patel Niwas</i>. He must read the name letter by letter. Commonly confused words (<i>principal / principle</i>, <i>affect / effect</i>) are those two houses: one wrong letter and the letter goes to the wrong door.',
      map: [
        ['The full, long address', 'A descriptive phrase: “one who cannot be corrected”'],
        ['The six-digit PIN that replaces it', 'The single word: incorrigible'],
        ['Digits that tell region, then district', 'Prefix, root and suffix: in- (not) + corrig (correct) + -ible (able)'],
        ['Patil Niwas vs Patel Niwas on the same lane', 'Look-alike pairs: principal / principle, stationary / stationery'],
        ['Checking the house number, not just the name', 'Checking the part of speech: affect (verb) vs effect (noun)'],
      ],
    },
    concept: [
      '<b>One-word substitution</b> replaces a phrase with one exact word: “a person who hates mankind” = <i>misanthrope</i>. These words come in families built on a root, so learn the families, not single words: <i>-cide</i> (killing), <i>-cracy</i> (rule), <i>omni-</i> (all), <i>-phile</i> (lover of), <i>mis-</i> (hatred), <i>in-/il-/ir-</i> + <i>-ible/-able</i> (cannot be).',
      '<b>Commonly confused words</b> look or sound alike but differ in meaning or in part of speech. Many CET items are settled simply by asking what part of speech the sentence needs: <i>advice</i> is a noun, <i>advise</i> a verb; <i>affect</i> is (usually) a verb, <i>effect</i> (usually) a noun.',
      'Method: for a substitution, underline the key idea in the phrase (who? does what? to whom?), then match the root. For a confused pair, decide the part of speech of the blank first, then the meaning.',
    ],
    keyPoints: [
      '<b>-cide</b> (killing): homicide (a human), regicide (a king), patricide (father), matricide (mother), fratricide (brother), infanticide (infant), genocide (a whole people).',
      '<b>-cracy</b> (rule by): autocracy (one person, absolute power), bureaucracy (officials), theocracy (religious authority), plutocracy (the rich), aristocracy (nobles).',
      '<b>omni-</b> (all): omnipotent (all-powerful), omniscient (all-knowing), omnipresent (present everywhere), omnivorous (eats both plants and animals).',
      '<b>People:</b> atheist (does not believe in God), agnostic (holds that God’s existence cannot be known), philanthropist (helps mankind through charity), misanthrope (hates mankind), misogynist (hates women), polyglot (speaks many languages), teetotaller (never drinks alcohol), novice (beginner), connoisseur (expert judge of art, food or taste).',
      '<b>Cannot be…:</b> illegible (read), inaudible (heard), incorrigible (corrected/reformed), infallible (wrong), invincible (defeated), inevitable (avoided), irreparable (repaired). Also: posthumous (after death), anonymous (of unknown name), panacea (remedy for all ills).',
      '<b>Confused pairs (1):</b> affect (v, to influence) / effect (n, result); principal (head; main) / principle (rule, belief); stationary (not moving) / stationery (pens, paper); complement (that which completes) / compliment (praise).',
      '<b>Confused pairs (2):</b> advice (n) / advise (v); practice (n) / practise (v) in British spelling; loose (not tight) / lose (misplace); elicit (draw out) / illicit (illegal); council (a body) / counsel (advice; a lawyer); emigrate (leave one’s country) / immigrate (come into a country); beside (next to) / besides (in addition to).',
    ],
    example: {
      q: 'Give one word for: “the killing of one’s own brother”.',
      steps: [
        'Key idea: killing → the word ends in <b>-cide</b>.',
        'Whom? A brother. The Latin root for brother is <i>frater</i>, the same root as <i>fraternity</i> (brotherhood).',
        'Combine: frater + cide → <b>fratricide</b>.',
        'Check against neighbours: patricide (father), matricide (mother), regicide (king). Only fratricide fits.',
      ],
      answer: 'Fratricide',
    },
    shortcut:
      'Break the unknown word into prefix + root + suffix: <i>in-corrig-ible</i> = not + correct + able = cannot be corrected. For confused pairs, ask only “what part of speech does the blank need?” That alone settles affect/effect, advice/advise and practice/practise.',
    traps: [
      'Mixing <i>anthrop</i> (mankind) with <i>gyn</i> (women): a misanthrope dislikes people in general; a misogynist dislikes women.',
      'Marathi-medium students often write “an advice” or “advices”. <i>Advice</i> is uncountable: “a piece of advice”, “some advice”. The verb is <i>advise</i>.',
      'An <i>agnostic</i> is not an <i>atheist</i>: the atheist says there is no God; the agnostic says it cannot be known.',
    ],
    practice: [
      {
        q: 'Choose the one word for: <b>“one who is present everywhere”</b>.',
        options: ['Omnipotent', 'Omniscient', 'Omnivorous', 'Omnipresent'],
        answer: 3,
        why: '<i>Omni</i> = all, <i>present</i> = present: omnipresent. Omnipotent = all-powerful, omniscient = all-knowing, omnivorous = eats all kinds of food.',
      },
      {
        q: 'In which sentence is the word in bold used correctly?',
        options: [
          'The bus remained <b>stationery</b> for an hour.',
          'Her <b>advise</b> helped me choose a college.',
          'The new rule will not <b>affect</b> students who have already applied.',
          'Please do not <b>loose</b> the hall ticket.',
        ],
        answer: 2,
        why: 'After “will not” we need a verb meaning “influence”: <i>affect</i>. The others need stationary (not moving), advice (noun) and lose (misplace).',
      },
      {
        q: 'Choose the one word for: <b>“one who cannot be corrected or reformed”</b>.',
        options: ['Infallible', 'Incorrigible', 'Invincible', 'Illegible'],
        answer: 1,
        why: 'in (not) + corrig (correct) + ible (able) = incorrigible. Infallible = never wrong, invincible = cannot be defeated, illegible = cannot be read.',
      },
      {
        q: 'Choose the one word for: <b>“a person who hates mankind”</b>.',
        options: ['Misanthrope', 'Philanthropist', 'Misogynist', 'Misogamist'],
        answer: 0,
        why: 'mis (hate) + anthrop (mankind) = misanthrope. A philanthropist loves mankind, a misogynist hates women, a misogamist hates marriage.',
      },
    ],
  },

  // ───────────────────────────────────────────── 4. Idioms & phrases
  {
    id: 'idioms-phrases',
    title: 'Idioms and Phrases',
    syllabus: 'Word & Phrases',
    analogy: {
      title: 'The code on a dabbawala’s tiffin',
      oneLine: 'An idiom is a tiffin code: learnt as a whole, never read letter by letter, and one changed letter sends it elsewhere.',
      story:
        'Look at the lid of a Mumbai dabbawala’s tiffin: a few letters, numbers and a coloured mark. To an outsider it means nothing. To the dabbawala it means one particular desk on one floor of one building near one station. You cannot work it out from the letters; you learn the code as a whole. Change a single letter and the tiffin goes to a different office. And the same starting code with a different last mark sends the box to a different floor of the same building.<br><br>An idiom is that code. <i>A white elephant</i> has nothing to do with elephants; it means a costly possession that is useless. You cannot swap a word (<i>kick the bucket</i> is an idiom, <i>kick the pail</i> is nonsense). Phrasal verbs are the “different last mark”: <i>look after</i>, <i>look into</i> and <i>look up to</i> start with the same verb but go to completely different meanings.',
      map: [
        ['The code painted on the lid', 'The idiom: a fixed group of words'],
        ['The desk it stands for, known only to those who learnt it', 'The figurative meaning, not the sum of the words'],
        ['Change one letter → wrong office', 'Fixed wording: “kick the bucket”, never “kick the pail”'],
        ['Same starting code, different last mark → different floor', 'Phrasal verbs: look after / look into / look up to'],
        ['A new worker guessing from the area of the route', 'Using sentence context and tone to eliminate options'],
      ],
    },
    concept: [
      'An <b>idiom</b> is a fixed expression whose meaning cannot be worked out from its words: <i>to bury the hatchet</i> = to make peace. A <b>phrasal verb</b> is a verb plus a particle (up, off, in, with…) that together carry a new meaning: <i>put up with</i> = tolerate. CET either prints the idiom in bold inside a sentence and asks its meaning, or asks you to supply the missing particle.',
      'Idioms are frozen: you cannot change the words, the article or the number. It is “a piece of cake”, not “a cake piece”; “at the eleventh hour”, not “at the twelfth hour”. Learn them in themes (secrets, effort, trouble, surprise, conflict) so that the meanings support each other.',
      'When you do not know an idiom, use the sentence. Decide whether the context is positive or negative, and <b>eliminate the literal option</b>: if the options include a meaning about actual elephants, ice or beans, that is almost always the trap.',
    ],
    keyPoints: [
      'Secrets: <i>spill the beans</i> / <i>let the cat out of the bag</i> = reveal a secret; <i>smell a rat</i> = suspect something is wrong.',
      'Effort and time: <i>burn the midnight oil</i> = study/work late at night; <i>at the eleventh hour</i> = at the last moment; <i>call it a day</i> = stop working; <i>once in a blue moon</i> = very rarely.',
      'Trouble and surprise: <i>in hot water</i> = in trouble; <i>a bolt from the blue</i> = a complete, sudden surprise; <i>in the same boat</i> = in the same difficult situation.',
      'People and talk: <i>beat about the bush</i> = avoid the main point; <i>hit the nail on the head</i> = say exactly the right thing; <i>pull someone’s leg</i> = tease; <i>a wet blanket</i> = one who spoils others’ fun; <i>turn a deaf ear</i> = deliberately ignore.',
      'Things: <i>a white elephant</i> = costly but useless possession; <i>Achilles’ heel</i> = a weak point; <i>a red-letter day</i> = a memorable, happy day; <i>break the ice</i> = start a conversation in a stiff situation; <i>cry over spilt milk</i> = regret what cannot be undone.',
      'Phrasal verbs (look): look after = take care of; look into = investigate; look up to = respect; look down on = despise; look forward to = wait eagerly for.',
      'Phrasal verbs (others): call off = cancel; put off = postpone; put up with = tolerate; give in = surrender; give up = stop / abandon; turn down = reject; carry out = perform; run out of = use up completely; make up for = compensate; bring up = raise a child / mention.',
    ],
    example: {
      q: 'Choose the meaning of the idiom in bold: “The huge stadium built in the small town has turned out to be a <b>white elephant</b>.”',
      steps: [
        'Reject the literal reading: no animal is involved in a stadium.',
        'Context clues: “huge”, “built” (so it cost money), “small town” (so it is hardly used), “turned out to be” (a disappointing result).',
        'Charge of the sentence: negative.',
        'Meaning that fits: something that costs a lot to own and maintain but is of little use.',
      ],
      answer: 'A costly possession that is of little use',
    },
    shortcut:
      'Eliminate in two passes: first strike out the literal option, then strike out options with the wrong tone (positive vs negative) for the sentence. With most idioms only one option survives.',
    traps: [
      'Choosing the literal meaning: <i>to break the ice</i> has nothing to do with ice; it means to start talking in an awkward or formal situation.',
      'Twin phrasal verbs: <i>call off</i> = cancel but <i>put off</i> = postpone; <i>give in</i> = surrender but <i>give up</i> = abandon.',
      'Marathi-medium students sometimes translate Marathi expressions word for word, e.g. “Don’t eat my head” (from डोकं खाऊ नकोस). In English say “Stop pestering me”. Never invent an English idiom by translation.',
    ],
    practice: [
      {
        q: 'Choose the meaning of the phrase in bold: “The inter-college match was <b>called off</b> because of heavy rain.”',
        options: ['cancelled', 'postponed', 'shortened', 'announced'],
        answer: 0,
        why: '<i>Call off</i> = cancel. “Postponed” is the meaning of <i>put off</i>, the classic twin trap.',
      },
      {
        q: 'Choose the meaning of the idiom in bold: “The news that the factory would close came as <b>a bolt from the blue</b> to the workers.”',
        options: ['a lightning strike', 'a complete surprise', 'a welcome relief', 'an expected event'],
        answer: 1,
        why: 'A bolt from the blue = something sudden and wholly unexpected. “Lightning strike” is the literal trap; “expected event” is the opposite.',
      },
      {
        q: 'Choose the meaning of the idiom in bold: “Stop <b>beating about the bush</b> and tell me what the doctor said.”',
        options: ['wasting money', 'working slowly', 'avoiding the main point', 'making excuses for being late'],
        answer: 2,
        why: 'To beat about the bush = to talk around a subject without coming to the point. The speaker wants the doctor’s words directly.',
      },
      {
        q: 'Fill in the blank: “I cannot put ______ his rude behaviour any longer.”',
        options: ['up', 'in with', 'off', 'up with'],
        answer: 3,
        why: '<i>Put up with</i> = tolerate. “Put up” alone means to raise or to give someone a place to stay; “put off” = postpone.',
      },
    ],
  },

  // ───────────────────────────────────────────── 5. Parts of speech & tenses
  {
    id: 'parts-of-speech-tenses',
    title: 'Parts of Speech and Tenses',
    syllabus: 'Basic English Grammar',
    analogy: {
      title: 'A live cricket scorecard',
      oneLine: 'A word’s part of speech is the role it plays this over; tense is where the action sits on the scorecard’s timeline.',
      story:
        'Watch an India match. Jadeja bowls an over, then later walks out to bat. Nobody calls him “a bowler” when he is batting: his role is decided by <b>what he is doing right now</b>. Words are the same. In “They <b>run</b> every morning”, <i>run</i> is a verb; in “a morning <b>run</b>”, it is a noun. In “a <b>fast</b> bowler” <i>fast</i> is an adjective; in “he bowls <b>fast</b>” it is an adverb.<br><br>Now listen to the commentator, because he uses every tense correctly without thinking. “Kohli <b>is batting</b> beautifully” (happening now). “He <b>has scored</b> 80” (the innings is still on, so the past runs connect to now). “India <b>won</b> yesterday’s match by five wickets” (finished, with a fixed past time). “He <b>had reached</b> his fifty before the rain came” (the earlier of two past events). Choose the tense the way he does: by asking where the action sits on the timeline.',
      map: [
        ['Jadeja’s role decided by what he is doing this over', 'A word’s part of speech decided by its job in the sentence'],
        ['“Kohli is batting beautifully”', 'Present continuous: action in progress now'],
        ['“He has scored 80” (innings still on)', 'Present perfect: past action linked to now, no fixed past time'],
        ['“India won yesterday’s match”', 'Simple past: finished action at a stated past time'],
        ['“He had reached fifty before the rain came”', 'Past perfect: the earlier of two past actions'],
      ],
    },
    concept: [
      'English has eight parts of speech: <b>noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection</b>. A word does not own a part of speech; it takes one from its job. Exams test this most with adjective vs adverb: an adjective describes a noun (<i>a careful driver</i>), an adverb describes a verb, an adjective or another adverb (<i>he drives carefully</i>). After linking verbs such as <i>be, seem, look, feel, taste, smell, sound, become</i>, use an adjective: “The halwa tastes <b>sweet</b>.”',
      'Twelve tenses come from three times (past, present, future) and four aspects (simple, continuous, perfect, perfect continuous). CET mostly tests the boundaries: present perfect vs simple past, the perfect tenses with <i>since/for</i>, past perfect for the earlier of two past actions, and the simple present inside time and condition clauses.',
      '<b>Stative verbs</b> describe states, not actions (<i>know, believe, understand, own, have</i> in the sense of possess, <i>belong, contain, consist, prefer, see, hear</i>) and are normally not used in the continuous: “I <b>know</b> him”, not “I am knowing him”.',
    ],
    keyPoints: [
      'Adjective describes a noun; adverb describes a verb/adjective/adverb. Linking verbs (be, seem, look, feel, taste, smell, sound, become) take an adjective.',
      'Simple present: habits, universal truths, fixed timetables. “The sun rises in the east.” “The train leaves at 7:15.”',
      'Present perfect (has/have + V3): past action whose result matters now, <b>with no fixed past time</b>. It never goes with yesterday, ago, last year, in 2019.',
      '<b>Since</b> + point of time (since 2019, since Monday); <b>for</b> + length of time (for three years). With these use the perfect or perfect continuous: “I have been living here since 2019.”',
      'Past perfect (had + V3) marks the earlier of two past actions: “The train <b>had left</b> before we reached the station.”',
      'In time and condition clauses (when, as soon as, before, after, until, if, unless) about the future, use the simple present, not <i>will</i>: “I will call you when he <b>comes</b>.”',
      'Conditionals: If + present, will + V1; If + past (were), would + V1; If + had + V3, would have + V3. “If I <b>had known</b>, I <b>would have come</b>.”',
      'Stative verbs (know, believe, own, have = possess, belong, consist, prefer) are not used in continuous forms.',
    ],
    example: {
      q: 'Correct the sentence: “I am living in Nashik since 2019.”',
      steps: [
        'Find the time marker: <i>since 2019</i>, a point in the past.',
        'The action started in 2019 and is still going on, so it links the past to now: a perfect tense is needed, not the present continuous.',
        'The action is ongoing (living), so use the present perfect continuous: <i>have been</i> + V-ing.',
        'This error comes from Marathi: “मी २०१९ पासून नाशिकमध्ये राहत आहे” maps word for word onto “I am living… since”. English does not allow it.',
      ],
      answer: 'I have been living in Nashik since 2019.',
    },
    shortcut:
      'Hunt for the time marker before reading options. <i>Yesterday / ago / last / in 2019</i> → simple past. <i>Since / for / already / yet / just</i> → perfect. <i>By the time</i> + past → past perfect. <i>When / if / as soon as</i> + future idea → simple present in that clause.',
    traps: [
      'Marathi-medium students often say “I am having two brothers” or “I am knowing the answer”. <i>Have</i> (possess) and <i>know</i> are stative: “I have two brothers”, “I know the answer”.',
      'Present perfect with a fixed past time is always wrong: “I have met him yesterday” → “I met him yesterday”.',
      '“Since three years” is wrong: since takes a starting point; a length of time takes <i>for</i>: “for three years”.',
    ],
    practice: [
      {
        q: 'Choose the correct option: “When I reached the station, the train ______.”',
        options: ['already leaves', 'has already left', 'had already left', 'will already leave'],
        answer: 2,
        why: 'Two past actions: the train leaving came first, so it takes the past perfect (had + V3). The present perfect cannot sit in a past-time narrative.',
      },
      {
        q: 'Identify the part of speech of the word in bold: “She worked <b>hard</b> to clear the entrance exam.”',
        options: ['Adjective', 'Noun', 'Preposition', 'Adverb'],
        answer: 3,
        why: '<i>Hard</i> tells us how she worked, so it modifies the verb: an adverb. (In “a hard question” it would be an adjective.)',
      },
      {
        q: 'Choose the grammatically correct sentence.',
        options: [
          'I will phone you as soon as I reach Mumbai.',
          'I will phone you as soon as I will reach Mumbai.',
          'I phone you as soon as I will reach Mumbai.',
          'I would phone you as soon as I will reach Mumbai.',
        ],
        answer: 0,
        why: 'In a time clause (as soon as…) referring to the future, use the simple present (<i>reach</i>); <i>will</i> belongs only in the main clause.',
      },
      {
        q: 'Spot the part with the error: “My cousin (a) / has completed his diploma (b) / last year in Pune. (c) / No error (d)”',
        options: ['(a)', '(b)', '(c)', '(d)'],
        answer: 1,
        why: '“Last year” is a fixed past time, so the present perfect is wrong. Part (b) should read “completed his diploma”.',
      },
    ],
  },

  // ───────────────────────────────────────────── 6. Subject–verb agreement
  {
    id: 'subject-verb-agreement',
    title: 'Subject–Verb Agreement',
    syllabus: 'Basic English Grammar',
    analogy: {
      title: 'Aaji’s steel almirah and its key',
      oneLine: 'The verb is a key that must fit the real lock (the subject), not whichever lock is hanging nearest.',
      story:
        'Aaji’s Godrej almirah has one lock, and only its own key opens it. On the same ring hang the keys of the kitchen cupboard, the scooter and the post box. When you are in a hurry you grab the key that is nearest your fingers, and it does not turn. You have to find the key that matches <b>this</b> lock.<br><br>The subject is the lock and the verb is the key. A singular subject takes a singular verb (<i>The box <b>is</b></i>), a plural subject a plural one (<i>The boxes <b>are</b></i>). The trouble is the extra keys hanging nearby: in “The <b>box</b> of chocolates <b>is</b> on the table”, <i>chocolates</i> is the key that happens to be nearest, but the lock is <i>box</i>. Phrases like <i>along with, as well as, together with</i> are just more keys on the ring; they never change the lock.',
      map: [
        ['The almirah’s lock', 'The true subject of the sentence'],
        ['The one key that turns in it', 'The verb form that agrees with it (is/are, has/have, goes/go)'],
        ['The nearest key on the ring, which does not fit', 'The noun in an “of…” phrase: “The quality of the mangoes <b>is</b>…”'],
        ['Extra keys added to the ring', '“along with / as well as / together with” do not change the subject'],
        ['Two locks, use the key of the nearer one', 'Either…or / neither…nor: verb agrees with the nearer subject'],
      ],
    },
    concept: [
      'A verb must agree with its subject in <b>number</b> and <b>person</b>. In the present tense, the <i>-s</i> works backwards from nouns: a singular third-person subject takes a verb <i>with</i> -s (<i>She goes</i>, <i>The train leaves</i>); a plural subject takes the verb <i>without</i> it (<i>They go</i>).',
      'Most errors come from not finding the true subject. Strike out the words between subject and verb: prepositional phrases (<i>of the students</i>), and add-on phrases (<i>along with, as well as, together with, in addition to, accompanied by, besides</i>). In <i>There is / There are</i> sentences the subject comes after the verb.',
      'Some subjects have fixed rules: <i>each, every, either, neither, everyone, nobody</i> are singular; <i>either…or / neither…nor / not only…but also</i> follow the nearer subject; <i>the number of</i> is singular but <i>a number of</i> is plural; collective nouns are singular when the group acts as one and plural when its members act separately.',
    ],
    keyPoints: [
      'Find the true subject first; ignore “of…” phrases: “The <b>quality</b> of the mangoes <b>is</b> good.”',
      '“As well as, along with, together with, with, in addition to, accompanied by, besides” do not make the subject plural: “The teacher, along with her students, <b>was</b> present.”',
      'Each, every, either, neither, everyone, someone, nobody, each of + plural noun → singular verb: “Each of the boys <b>has</b> a bicycle.”',
      'Either…or, neither…nor, not only…but also, or, nor → the verb agrees with the nearer subject: “Neither the coach nor the players <b>were</b> happy.”',
      'Two subjects joined by <i>and</i> → plural, unless they name one person or one idea: “The secretary and treasurer <b>is</b> here” (one person); “Bread and butter <b>is</b> my breakfast.”',
      '“The number of” → singular; “A number of” → plural. “Many a” + singular noun → singular verb: “Many a student <b>has</b> tried.”',
      'Collective nouns: one unit → singular (“The jury <b>has</b> given its verdict”); members acting separately → plural (“The jury <b>were</b> divided in their opinions”).',
      'Plural-looking but singular: news, mathematics, physics, economics, measles; a sum of money/distance as one amount (“Ten thousand rupees <b>is</b> a large sum”). Always plural: police, cattle, people, scissors, trousers (but “a pair of scissors <b>is</b>”).',
    ],
    example: {
      q: 'Choose the correct verb: “Neither the principal nor the teachers (was / were) aware of the change.”',
      steps: [
        'The subject has two parts joined by <i>neither…nor</i>.',
        'Rule: with neither…nor, the verb agrees with the subject nearer to it.',
        'The nearer subject is <i>the teachers</i>, which is plural.',
        'Plural subject → plural verb.',
      ],
      answer: 'were',
    },
    shortcut:
      'Cover the middle: put your finger over everything between the subject and the verb (of-phrases, along-with phrases, anything between commas). Then read the subject and verb alone; the right form is usually obvious.',
    traps: [
      'Agreeing with the nearest noun: “The bundle of newspapers <b>were</b>…” is wrong; the subject is <i>bundle</i>.',
      'Marathi verbs change with gender (तो जातो / ती जाते), but English verbs change with the third-person singular. Dropping the -s (“He go to college daily”) is the most common slip; write “He <b>goes</b>”.',
      'Mixing up “The number of applicants <b>has</b> risen” (singular) and “A number of applicants <b>have</b> complained” (plural).',
    ],
    practice: [
      {
        q: 'Choose the correct option: “The bundle of old newspapers ______ kept near the door.”',
        options: ['were', 'was', 'have been', 'are'],
        answer: 1,
        why: 'The subject is <i>bundle</i> (singular); “of old newspapers” is only a describing phrase. Singular subject → <i>was</i>.',
      },
      {
        q: 'Choose the grammatically correct sentence.',
        options: [
          'Each of the boys has submitted his project.',
          'Each of the boys have submitted their project.',
          'Each of the boys have submitted his project.',
          'Each of the boys are submitting his project.',
        ],
        answer: 0,
        why: '<i>Each</i> is singular, so it takes <i>has</i> and the singular pronoun <i>his</i>. Every other option uses a plural verb.',
      },
      {
        q: 'Spot the part with the error: “A number of farmers (a) / have joined (b) / the new cooperative society. (c) / No error (d)”',
        options: ['(a)', '(b)', '(c)', '(d)'],
        answer: 3,
        why: '“A number of” means “many” and takes a plural verb, so “have joined” is correct. The sentence has no error.',
      },
      {
        q: 'Choose the correct option: “Neither my parents nor my sister ______ coming to the function.”',
        options: ['are', 'were', 'is', 'have'],
        answer: 2,
        why: 'With neither…nor the verb agrees with the nearer subject, <i>my sister</i> (singular), so <i>is</i>.',
      },
    ],
  },

  // ───────────────────────────────────────────── 7. Articles & prepositions
  {
    id: 'articles-prepositions',
    title: 'Articles and Prepositions',
    syllabus: 'Basic English Grammar',
    analogy: {
      title: 'The railway platform announcement',
      oneLine: '“A train” is any train, “the train” is the one we both know; at, on and in zoom from a clock point to a day to a whole month.',
      story:
        'Stand on Pune station and listen. First: “<b>A</b> train is arriving on platform 3; passengers are requested not to cross the tracks.” Any train, not yet identified. Then: “<b>The</b> 07:15 Deccan Queen to Mumbai will leave from platform 1.” Now it is one specific train that everyone knows. The announcer never mixes these up.<br><br>Time works like the timetable’s zoom levels. The exact departure is <b>at</b> 7:15, a single point on the clock. The day it runs is <b>on</b> Monday or <b>on</b> 15 August, one square on the calendar. The season it runs extra coaches is <b>in</b> June, <b>in</b> the monsoon, <b>in</b> 2026, a whole stretch of time. Place zooms the same way: <b>at</b> the station (a point on the route), <b>on</b> the platform (a surface), <b>in</b> the coach (inside an enclosed space).',
      map: [
        ['“A train is arriving” (any train, first mention)', 'Indefinite article a/an: any one, not yet identified'],
        ['“The 07:15 Deccan Queen” (the one everyone knows)', 'Definite article the: a specific or already-known thing'],
        ['Departure at 7:15', '<b>at</b> + an exact point of time (at noon, at night)'],
        ['Runs on Monday / on 15 August', '<b>on</b> + days and dates'],
        ['Extra coaches in June / in the monsoon', '<b>in</b> + months, years, seasons, parts of the day'],
      ],
    },
    concept: [
      '<b>A/an</b> go with singular countable nouns that are not yet specific. The choice depends on the first <b>sound</b>, not the first letter: <i>an hour, an honest man, an MLA, an FIR, an X-ray</i> (vowel sounds), but <i>a university, a European, a one-rupee coin, a useful book</i> (y- and w- sounds). <b>The</b> marks something specific or already known, unique things (<i>the sun</i>), superlatives and ordinals (<i>the best, the first</i>), and named rivers, seas, oceans, mountain ranges and groups of islands.',
      'No article is used before names of people, cities and most countries, languages (“She speaks Marathi”), games (“They play cricket”), meals in general (“We had lunch”), and <i>school, college, hospital, church, prison, bed</i> when used for their main purpose (“He goes to school”, but “His father went to <b>the</b> school to meet the principal”).',
      '<b>Prepositions</b> show time, place and relationship. Many words have a <b>fixed partner</b> that must be memorised (<i>superior to, comply with, consist of, depend on</i>), and several verbs take <b>no</b> preposition at all (<i>discuss, reach, enter, attack, resemble, marry, request, order, answer</i>). These two lists produce most CET preposition errors.',
    ],
    keyPoints: [
      'a/an by sound: an hour, an honour, an MBA, an FIR, an X-ray; a university, a uniform, a European, a one-way street.',
      'The: specific/known things, unique things (the sun, the earth), superlatives and ordinals (the tallest, the first), rivers, seas, oceans, mountain ranges, island groups (the Godavari, the Arabian Sea, the Western Ghats, the Andaman Islands), holy books (the Gita), musical instruments (plays the tabla), “the + adjective” for a class (the poor, the rich).',
      'No article: people’s names, cities, most countries (but the USA, the UK), languages, games, meals in general, and school/hospital/bed for their main purpose.',
      'Time: <b>at</b> 7:15, at noon, at night; <b>on</b> Monday, on 15 August; <b>in</b> June, in 2026, in the morning, in the monsoon.',
      'Place: <b>at</b> a point (at the bus stop), <b>on</b> a surface or line (on the table, on the road), <b>in</b> an enclosed space or area (in the room, in Pune).',
      'Fixed partners: superior / inferior / senior / junior / prior / preferable <b>to</b> (never “than”); prefer A to B; comply with; abide by; consist of; depend on; different from; congratulate on; accused of; charged with; angry with a person, at a thing.',
      'No preposition after: discuss, reach, enter, attack, resemble, marry, request, order, answer. “We discussed the plan”, “She reached Pune”.',
    ],
    example: {
      q: 'Correct the sentence: “He reached at the station at 7 o’clock in Monday.”',
      steps: [
        '<i>Reach</i> takes a direct object: no preposition. “reached at the station” → “reached the station”.',
        '“at 7 o’clock” is an exact point of time: correct.',
        '“in Monday” is wrong: days take <b>on</b>.',
        'Check articles: “the station” is a specific, known station, so <i>the</i> stays.',
      ],
      answer: 'He reached the station at 7 o’clock on Monday.',
    },
    shortcut:
      'For a/an, say the word aloud: vowel <i>sound</i> → an. For a preposition blank, first look at the word just before it: if it has a fixed partner (superior <b>to</b>, comply <b>with</b>, consist <b>of</b>), you are done before you think about meaning.',
    traps: [
      'Marathi-medium transfers: “discuss about” (चर्चा करणे), “reached at”, “return back”, “married with”. Correct English: discuss the plan, reached Pune, return, married <b>to</b>.',
      '“a university” and “an hour” look wrong by letter but are right by sound.',
      '“Senior than”, “superior than”, “prefer coffee than tea” are wrong: these words take <b>to</b>.',
    ],
    practice: [
      {
        q: 'Fill in the blanks: “He is ___ honest man and ___ European by birth.”',
        options: ['a, a', 'an, an', 'a, an', 'an, a'],
        answer: 3,
        why: '<i>Honest</i> begins with a vowel sound (silent h) → <i>an</i>. <i>European</i> begins with a “yoo” sound → <i>a</i>.',
      },
      {
        q: 'Fill in the blank: “This mobile phone is superior ______ the one I bought last year.”',
        options: ['than', 'to', 'from', 'over'],
        answer: 1,
        why: '<i>Superior</i> (like senior, junior, inferior, prior) always takes <i>to</i>, never <i>than</i>.',
      },
      {
        q: 'Choose the grammatically correct sentence.',
        options: [
          'We discussed about the timetable in the meeting.',
          'The guests reached at the hall before noon.',
          'The train will leave at 6 a.m. on Monday.',
          'She was born on June 2004.',
        ],
        answer: 2,
        why: '“at” + clock time and “on” + day are both right. The others need: discussed the timetable, reached the hall, born <i>in</i> June 2004.',
      },
      {
        q: 'Fill in the blanks: “___ Godavari is one of ___ longest rivers in India.”',
        options: ['The, the', 'A, the', 'The, a', 'No article, the'],
        answer: 0,
        why: 'Names of rivers take <i>the</i> (the Godavari), and a superlative (longest) takes <i>the</i>.',
      },
    ],
  },

  // ───────────────────────────────────────────── 8. Sentence correction
  {
    id: 'sentence-correction',
    title: 'Sentence Correction and Error Spotting',
    syllabus: 'Sentence Correction',
    analogy: {
      title: 'The tailor’s trial fitting',
      oneLine: 'Check the sentence the way a tailor checks a shirt: part by part with a tape, not by a glance from the door.',
      story:
        'Before Diwali you go to the tailor on Laxmi Road for the trial of your new shirt. From the doorway it looks fine. But the tailor does not trust the look: he takes his tape and checks the collar, then the shoulders, then each sleeve, then the length, in the same order every time. One sleeve is an inch longer than the other: both arms must match. A button is stitched on the wrong side: right button, wrong place. And some days, after the full check, he says, “Perfect, nothing to change.”<br><br>Error spotting is that trial. A sentence that “sounds fine” at a glance can hide a mismatch. Check it with a fixed checklist, part by part. Two halves of a list must match like two sleeves (parallelism). A correct word in the wrong form is the button on the wrong side. And “No error” is a real answer, just as a perfect fit is.',
      map: [
        ['Looking at the shirt from the doorway', 'Reading the whole sentence once for its meaning'],
        ['Tape check: collar, shoulders, sleeves, length, in fixed order', 'A fixed checklist: subject–verb, tense, pronoun, paired words, articles and prepositions'],
        ['Two sleeves must be the same length', 'Parallelism: items in a list in the same form (reading, writing and <b>dancing</b>)'],
        ['Right button, wrong side', 'Right word, wrong form or partner (no sooner…<b>than</b>, superior <b>to</b>)'],
        ['“Perfect, nothing to change”', '“No error” / “No improvement” is a legitimate answer'],
      ],
    },
    concept: [
      'CET tests correction in two formats. <b>Error spotting</b> splits a sentence into three parts plus “No error”; you name the part that must change. <b>Sentence improvement</b> prints one part in bold and offers three replacements plus “No improvement”. Both draw on the same short list of rules, so a checklist beats “it sounds right”.',
      '<b>The checklist:</b> subject–verb agreement; tense and time markers; pronoun case and agreement (<i>between you and me</i>; <i>One should do one’s duty</i>); adjective vs adverb; articles and prepositions; parallelism; paired conjunctions (<i>no sooner…than, hardly…when</i>); comparisons (<i>more better</i> ✗, compare like with like); redundancy (<i>return back</i>); uncountable nouns used as plurals (<i>informations</i> ✗).',
      'Read the whole sentence first, find the subject and the main verb, then test each part against the checklist. The error belongs to the part that must change. If the checklist finds nothing, choose “No error” with confidence.',
    ],
    keyPoints: [
      'Pronoun case: after a preposition use the object form (“between you and <b>me</b>”); after than/as, complete the clause (“He is taller than <b>I</b> [am]”). With <i>one</i>, use <i>one’s</i>: “One should keep one’s promise.”',
      'Parallelism: items joined by <i>and, or, both…and, not only…but also</i> take the same form. “She likes reading, writing and <b>to dance</b>” ✗ → “dancing”.',
      'Paired words: no sooner…<b>than</b>; hardly / scarcely…<b>when</b>; not only…but also; both…and; either…or; neither…nor; lest…<b>should</b>. <i>Although</i> is not followed by <i>but</i>.',
      'Comparison: no double comparatives (<i>more better, most cleverest</i>); compare like with like (“The climate of Pune is better than <b>that of</b> Mumbai”); superior/senior/prefer take <b>to</b>.',
      'Uncountable nouns have no plural and take no <i>a/an</i>: advice, information, furniture, luggage, equipment, scenery, machinery, news. Say “a piece of advice”, “much information”.',
      'Redundancy: “return back”, “revert back”, “repeat again”, “cousin brother” → return, revert, repeat, cousin.',
      'Adverb vs adjective: “He drives <b>carefully</b>”; but after linking verbs use an adjective: “The milk smells <b>sour</b>.”',
      'Dangling modifier: “Walking to college, the rain started” ✗ (the rain was not walking) → “As I was walking to college, it started to rain.”',
    ],
    example: {
      q: 'Spot the error: “No sooner had the bell rung (a) / when the students (b) / rushed out of the classroom. (c) / No error (d)”',
      steps: [
        'Read the whole sentence: it means the students left the moment the bell rang.',
        'Checklist: subject–verb fine (the students rushed); tense fine (had rung → rushed, earlier → later).',
        'Paired words: the sentence begins with <i>No sooner</i>, whose partner is <i>than</i>, not <i>when</i>.',
        'The word that must change is in part (b).',
      ],
      answer: '(b): “No sooner had the bell rung <b>than</b> the students rushed out of the classroom.”',
    },
    shortcut:
      'Run the checklist in this order; it finds most CET errors fastest: (1) subject–verb, (2) tense / time marker, (3) pronoun, (4) paired words (no sooner…than), (5) parallel lists, (6) article / preposition, (7) redundancy and uncountable nouns.',
    traps: [
      'Fixing what is not broken. If the checklist finds nothing, “No error” is a legitimate answer, not a cop-out.',
      'Marathi and Indian-English habits that CET treats as errors: “cousin brother” (just <i>cousin</i>), “return back” (just <i>return</i>), and “today morning” (<i>this morning</i>).',
      'Seeing the error but marking the wrong part: mark the part containing the word that has to change.',
    ],
    practice: [
      {
        q: 'Spot the part with the error: “She gave me many useful advices (a) / before I left (b) / for Mumbai. (c) / No error (d)”',
        options: ['(a)', '(b)', '(c)', '(d)'],
        answer: 0,
        why: '<i>Advice</i> is uncountable: no plural and no “many”. Part (a) should read “a lot of useful advice” (or “much useful advice”).',
      },
      {
        q: 'Choose the best replacement for the part in bold: “Although he was ill, <b>but he attended the lecture</b>.”',
        options: ['but he attends the lecture', 'but he had attended the lecture', 'he attended the lecture', 'No improvement'],
        answer: 2,
        why: '<i>Although</i> already joins the two clauses; adding <i>but</i> doubles the conjunction. Remove <i>but</i> and keep the past tense.',
      },
      {
        q: 'Spot the part with the error: “My sister likes (a) / to cook, painting (b) / and singing old Marathi songs. (c) / No error (d)”',
        options: ['(a)', '(b)', '(c)', '(d)'],
        answer: 1,
        why: 'Parallelism: the list has <i>painting</i> and <i>singing</i>, so the first item must be <i>cooking</i>, not “to cook”. The faulty item is in part (b).',
      },
      {
        q: 'Choose the best replacement for the part in bold: “The climate of Nashik is more pleasant <b>than that of</b> Solapur.”',
        options: ['than', 'than those of', 'to that of', 'No improvement'],
        answer: 3,
        why: 'We compare climate with climate, so “that of” (= the climate of) is needed and singular. <i>Pleasant</i> takes “than”, not “to”. The sentence is already correct.',
      },
    ],
  },

  // ───────────────────────────────────────────── 9. Fill in the blanks / cloze
  {
    id: 'fill-in-the-blanks',
    title: 'Fill in the Blanks and Cloze Test',
    syllabus: 'Vocabulary',
    analogy: {
      title: 'Serving a festival thali',
      oneLine: 'Each blank is an empty katori: the dish must fit the bowl, suit the meal, and agree with the dishes beside it.',
      story:
        'At a Gudi Padwa lunch, Aai lays out a steel thali with empty katoris and asks you to serve. Each katori has a place and a shape: the deep one takes <i>aamti</i>, the flat corner takes <i>koshimbir</i>, the small round one takes <i>shrikhand</i>. Pouring aamti into the flat corner is a mess, however tasty the aamti is. The dish must also suit the meal: shrikhand goes with puri, not with curd rice. And the dishes beside it give clues: if the rest of the thali is a fasting (upvas) thali, you know the next katori will not hold onion bhaji.<br><br>A blank works exactly like that katori. The word must fit the <b>grammar slot</b> (a verb where a verb belongs), make <b>sense</b> with the rest of the sentence, and follow the <b>signals</b> from its neighbours: <i>although</i> and <i>but</i> warn that the next part will turn the other way; <i>so</i> and <i>because</i> say it continues the same way. Before calling the family to eat, Aai looks over the whole thali once. Do the same: reread the sentence with your answer in it.',
      map: [
        ['An empty katori in a fixed place', 'A blank in the sentence or passage'],
        ['Aamti needs the deep bowl, not the flat corner', 'Grammar fit: part of speech, tense, number, the preposition the word takes'],
        ['Shrikhand goes with puri', 'Collocation and meaning: “heavy rain”, “make a difference”, “commit a crime”'],
        ['An upvas thali rules out onion bhaji', 'Signal words: although / but (contrast), so / because (continuation)'],
        ['One last look at the whole thali', 'Reread the full sentence or passage with your choices filled in'],
      ],
    },
    concept: [
      'Fill-in-the-blank questions come as a single sentence with one or two blanks, or as a <b>cloze</b> passage with several numbered blanks. Every blank is tested on three levels: <b>grammar</b> (part of speech, tense, number, the preposition the word needs), <b>meaning</b> (does the sentence make logical sense?), and <b>collocation</b> (words that naturally go together in English: <i>heavy rain, strong tea, commit a crime, pay attention, make an effort</i>).',
      '<b>Signal words</b> do much of the work. Contrast signals (<i>but, although, though, however, yet, despite, while</i>) tell you the blank turns against the other half of the sentence. Continuation signals (<i>and, also, moreover, because, since, so, therefore</i>) tell you it continues in the same direction.',
      'For two-blank questions, solve the easier blank first and strike out every option that fails it; then test the other blank on what remains. For a cloze, read the whole passage once before filling anything, so you know its topic, tense and tone; then fill, and finally reread.',
    ],
    keyPoints: [
      'Predict a word for the blank before reading the options.',
      'Contrast signals (but, although, though, however, yet, despite, while) → the blank opposes the other part.',
      'Continuation / cause signals (and, also, moreover, because, since, so, therefore) → the blank agrees with the other part.',
      'Grammar clues: “an ___” needs a vowel-sound word; “to ___” usually needs a base verb; “the most ___” needs an adjective; “has ___” needs a past participle.',
      'Collocations: heavy rain, strong tea, commit a crime, pay attention, make an effort, make a mistake, keep a promise, catch a cold.',
      'Look-alikes appear as options: flout (openly disobey) / flaunt (show off); adapt (adjust) / adopt (take up); persecute (harass) / prosecute (take to court).',
      'Two blanks: solve one, eliminate, then check the other. Cloze: read the whole passage first; keep the same tense through a narrative.',
    ],
    example: {
      q: '“Although the medicine was ______, it ______ the patient’s fever within a day.” (a) costly, increased (b) bitter, brought down (c) sweet, raised (d) effective, cured',
      steps: [
        'Signal word: <i>Although</i> → the two halves must contrast.',
        'The second half is about the fever, and a medicine is meant to lower it, so blank 2 is positive (brought down / cured). This removes (a) and (c).',
        'For (d), “effective” and “cured” point the same way: no contrast. Remove it.',
        '(b) “bitter” (unpleasant) contrasts with “brought down the fever” (good result).',
      ],
      answer: '(b) bitter, brought down',
    },
    shortcut:
      'Find the signal word first (but, although, so, because). It tells you the direction of the blank before you read a single option and usually knocks out two options at once.',
    traps: [
      'Choosing a word that fits the meaning but not the grammar: an adjective in a slot that needs a verb, or a word that needs a different preposition after it.',
      'Marathi-medium students often write “do a mistake” (चूक करणे) or “close the light” (दिवा बंद कर). English says <b>make</b> a mistake and <b>switch off</b> the light.',
      'Look-alikes planted as options: <i>flaunt</i> for <i>flout</i>, <i>adopt</i> for <i>adapt</i>.',
    ],
    practice: [
      {
        q: 'Fill in the blank: “The farmer was ______ about the monsoon this year; he had bought his seeds even before the first rains.”',
        options: ['pessimistic', 'indifferent', 'optimistic', 'doubtful'],
        answer: 2,
        why: 'Buying seeds before the rain even began shows confidence that it will rain well: <i>optimistic</i>. Pessimistic and doubtful contradict the action; indifferent does not explain it.',
      },
      {
        q: 'Fill in the blank: “Despite repeated warnings, he continued to ______ the traffic rules.”',
        options: ['flout', 'flaunt', 'float', 'follow'],
        answer: 0,
        why: '<i>Flout</i> = openly disregard a rule, which is what “despite warnings” implies. <i>Flaunt</i> (show off) is the look-alike trap; <i>follow</i> breaks the contrast.',
      },
      {
        q: 'Fill in the blanks: “The new bridge has ______ the travel time between the two villages, ______ children can now reach school in fifteen minutes.”',
        options: ['increased, but', 'reduced, although', 'increased, so', 'reduced, so'],
        answer: 3,
        why: 'Children now reach school quickly, so travel time was <i>reduced</i>; the second clause is a result of the first, so the connector is <i>so</i>.',
      },
      {
        q: 'Read the passage and choose the word that best fills the blank: “Saving water is not the job of the government alone. Each household can ______ a difference by fixing leaking taps, because a single dripping tap can waste hundreds of litres in a month.”',
        options: ['do', 'make', 'take', 'give'],
        answer: 1,
        why: 'The fixed collocation is <i>make a difference</i>. “Do a difference” is a common error by translation.',
      },
    ],
  },

  // ───────────────────────────────────────────── 10. Para jumbles
  {
    id: 'para-jumbles',
    title: 'Para Jumbles (Jumbled Paragraphs)',
    syllabus: 'Jumbled Paragraph',
    analogy: {
      title: 'A farmer’s sowing calendar',
      oneLine: 'Farm work has an order you cannot break: ploughing first, sowing after the rain, weeding only once seedlings exist, harvest last.',
      story:
        'Ask any farmer in Vidarbha the order of the kharif season and he will not hesitate. Ploughing comes first, because it needs nothing before it. Sowing comes right after the first good rain; those two always go together. Weeding comes next, and it is impossible to weed <i>them</i> unless the seedlings are already there. The harvest and the trip to the market yard come last. Even if you shuffle his diary pages, he can put them back in order, because each job depends on the one before it.<br><br>A jumbled paragraph is that shuffled diary. The opening sentence is the ploughing: it stands on its own and introduces the subject by its full name. A sentence beginning with <i>He, This, Such</i> or <i>However</i> is the weeding: it refers back to something that must already exist. Some sentences are a fixed pair like rain and sowing. And the conclusion is the market yard, the result of everything before it.',
      map: [
        ['Ploughing: needs nothing before it', 'Opening sentence: introduces the topic with a full noun, no pronoun or connector'],
        ['You cannot weed “them” before seedlings exist', 'Pronouns and words like this / these / such / the need an earlier sentence'],
        ['First good rain → sowing, always together', 'Mandatory pair: cause → effect, claim → example, question → answer'],
        ['Calendar words: after the rain, then, at harvest', 'Time markers and connectors: first, then, later, however, finally'],
        ['Selling the crop at the market yard', 'Concluding sentence: result or summary (thus, therefore, today…)'],
      ],
    },
    concept: [
      'A para jumble gives four (sometimes five or six) sentences of a paragraph in scrambled order, labelled P, Q, R, S, and asks for the logical order. Sometimes the first or last sentence is fixed. The order comes from the <b>links between sentences</b>, not just from the topic.',
      'The links to look for: an <b>opener</b> introduces the topic and makes sense on its own; <b>pronouns</b> (he, it, they), <b>demonstratives</b> (this, these, such) and <b>the</b> for something already introduced point back to an earlier sentence; <b>connectors</b> (however, therefore, also, but, as a result) attach a sentence to the one before; <b>time order</b> (dates, first/then/later) and the pattern <b>general → specific</b> or <b>problem → cause → solution</b> give the overall shape.',
      'Use the options; do not build the order from scratch. Find the opener (this usually eliminates one or two options), then find one <b>mandatory pair</b> of sentences that must sit together and remove options that split it. Read the surviving order once from start to finish to confirm it flows.',
    ],
    keyPoints: [
      'Opener: introduces the subject with a full noun or a general statement; no pronoun pointing back, no “however / therefore / also”.',
      'A sentence that begins with He, She, It, They, This, These, Such, However, Thus, Therefore or But cannot usually open the paragraph.',
      'Noun before pronoun: “Sanjay…” must come before “He…”.',
      'Article order: “a farmer” (new) comes before “the farmer” (already known).',
      'Mandatory pairs: question → answer; claim → “For example…”; cause → “So / As a result…”; a point → “However…” that contrasts it.',
      'Time order: dates and words like first, then, later, finally; “A decade ago” comes before “Today”.',
      'The conclusion often gives the result or the present situation, or begins with Thus / Hence / In short / Today.',
    ],
    example: {
      q: 'Arrange in order. P: However, the monsoon was delayed by three weeks. Q: Ramesh had prepared his field near Latur well before June. R: As a result, he had to sow his soybean late, and the yield fell. S: He had also bought certified seed and fertiliser in advance.',
      steps: [
        'Opener: Q names Ramesh and stands alone. P (However), R (As a result) and S (He… also) all point back, so none can open.',
        'S follows Q: “He” = Ramesh, and “also” adds a second piece of preparation.',
        'P comes next: “However” contrasts the good preparation with the delayed monsoon.',
        'R closes: “As a result” gives the effect of the delay. Mandatory pair P → R.',
      ],
      answer: 'QSPR',
    },
    shortcut:
      'Do not solve from scratch. Check which letters the options start with and pick the true opener (eliminates 1–2 options). Then find one mandatory pair, such as a pronoun and its noun, or “However” and the point it contrasts, and eliminate options that split it. Usually only one option survives; read it once fully to confirm.',
    traps: [
      'Choosing an opener because it sounds general, without checking that it contains no pronoun or connector pointing back.',
      'Checking only the first pair of an option. Always read the chosen order once from start to finish; a wrong option often has the right start and a broken middle.',
    ],
    practice: [
      {
        q: 'Arrange the sentences in a logical order.<br>P: These daily visits mean that the shopkeeper often knows more about the village than anyone else.<br>Q: These shops sell everything from vegetables to mobile recharges.<br>R: Almost every village in Maharashtra has at least one small general store.<br>S: As a result, villagers visit them several times a day.',
        options: ['RSQP', 'RQSP', 'QRSP', 'RQPS'],
        answer: 1,
        why: 'R introduces the stores; Q (“These shops”) describes them; S (“As a result”) follows from selling everything; P (“These daily visits”) needs S before it. RQSP.',
      },
      {
        q: 'Arrange the sentences in a logical order.<br>P: Today, even a vegetable seller at a weekly bazaar displays a QR code.<br>Q: A decade ago, most small payments in India were made in cash.<br>R: The launch of UPI in 2016 changed this by allowing instant transfers from a mobile phone.<br>S: However, this convenience has also brought a rise in online fraud, so users must stay alert.',
        options: ['QPRS', 'RQPS', 'QRSP', 'QRPS'],
        answer: 3,
        why: 'Q sets the old situation; R (“changed this”) needs Q before it; P shows the change today; S (“However… also”) adds the downside and closes with advice. QRPS.',
      },
      {
        q: 'Arrange the sentences in a logical order.<br>P: Today, the same village has a bus stop named after the school he built.<br>Q: Determined that other children should not struggle as he had, he opened a school there after becoming an engineer.<br>R: He walked six kilometres to school every day because there was no bus.<br>S: Sanjay grew up in a small village near Satara.',
        options: ['SRQP', 'SQRP', 'RSQP', 'SRPQ'],
        answer: 0,
        why: 'S names Sanjay (opener); R (“He”) describes his childhood struggle; Q (“struggle as he had”) needs R before it; P (“Today… the school he built”) needs Q before it. SRQP.',
      },
      {
        q: 'Arrange the sentences in a logical order.<br>P: Instead, it can be turned into rich compost in about two months.<br>Q: Kitchen waste such as vegetable peels and tea leaves is usually thrown away.<br>R: Once ready, this compost can replace part of the chemical fertiliser used in terrace gardens.<br>S: To do this, the waste is layered with dry leaves in a pot and turned once a week.',
        options: ['QSPR', 'PQSR', 'QPSR', 'QPRS'],
        answer: 2,
        why: 'Q is the opener; P (“Instead, it…”) contrasts with throwing the waste away; S (“To do this”) explains how compost is made; R (“Once ready”) comes after the process. QPSR.',
      },
    ],
  },
];

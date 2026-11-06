export default [
  // ───────────────────────────────────────────── 1
  {
    id: 'number-series',
    title: 'Number Series',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'Your gullak (piggy bank) savings',
      oneLine: 'Do not stare at the jar total; look at how much was added each day.',
      story:
        'Suppose you drop coins into a clay gullak every evening and write the total in a notebook: ₹3, ₹8, ₹15, ₹24, ₹35. Looking only at the totals, the pattern is not obvious. But ask “how much did I add each day?” and you see ₹5, ₹7, ₹9, ₹11 — every day you add ₹2 more than the day before. So tomorrow you will add ₹13 and the jar will hold ₹48. On another month, Aai doubles whatever is in your jar every Sunday; then the totals grow by multiplying, not adding. And if you and your sister fill two jars on alternate days, the notebook mixes two separate lists. A number series question is exactly this notebook: find what was added (or multiplied) each step, and the next total writes itself.',
      map: [
        ['Total in the jar each evening', 'Term of the series'],
        ['Money added each day', 'First difference (next term − this term)'],
        ['“I add ₹2 more than yesterday”', 'Constant second difference'],
        ['Aai doubling the savings every Sunday', 'Multiplication / ratio pattern (×2, ×2 + 1 …)'],
        ['You and your sister writing on alternate days', 'Alternating series: two series mixed together'],
      ],
    },
    concept: [
      'A number series is a list of numbers made by a hidden rule. Your job is to find that rule and use it for the next term (or to catch the one term that breaks it). Always start by writing the <b>differences</b> between neighbouring terms below the series. If the differences are equal, it is an arithmetic series. If the differences themselves change by a fixed amount, look at the <b>second differences</b>.',
      'If the differences grow very fast (roughly doubling or tripling), test <b>ratios</b> instead: ×2, ×3, or mixed rules like ×2 + 1 or ×3 − 2. If the terms are close to familiar numbers, compare them with squares (1, 4, 9, 16, 25 …) and cubes (1, 8, 27, 64, 125 …): many series are n² ± 1, n³ + n, or n(n + 1).',
      'If nothing fits, split the series into odd and even positions. Often two simple series are woven together (alternating series). For “find the wrong number” questions, find the rule from the majority of terms, then check each term against it one by one.',
    ],
    keyPoints: [
      'Step order: differences → second differences → ratios → squares/cubes → alternate positions',
      'Equal differences: arithmetic series (a, a + d, a + 2d …)',
      'Differences 2, 4, 6, 8 … or 5, 7, 9, 11 …: second difference is constant',
      'Fast growth: test ×k, ×k + c, ×k − c (e.g. 5, 11, 23, 47 is ×2 + 1)',
      'Know squares to 30² and cubes to 15³ by heart',
      'n(n + 1): 2, 6, 12, 20, 30 …; n² − 1: 3, 8, 15, 24 …; n³ + n: 2, 10, 30, 68 …',
      'Long series (7–8 terms) with a zig-zag: check odd and even positions separately',
      'Wrong-number questions: the wrong term usually makes two consecutive differences look odd',
    ],
    example: {
      q: 'Find the next term: 3, 8, 15, 24, 35, ?',
      steps: [
        'First differences: 8 − 3 = 5, 15 − 8 = 7, 24 − 15 = 9, 35 − 24 = 11.',
        'Differences 5, 7, 9, 11 rise by 2 each time, so the next difference is 13.',
        'Next term = 35 + 13 = 48.',
        'Check with squares: the terms are 2² − 1, 3² − 1, 4² − 1, 5² − 1, 6² − 1, so the next is 7² − 1 = 48. Both methods agree.',
      ],
      answer: '48',
    },
    shortcut:
      'Look at the last digits and the size jump first. If a term roughly doubles each time, go straight to ×2 ± something and skip the difference table. If the terms sit just above or below squares or cubes, test n² ± 1 or n³ ± n before anything else.',
    traps: [
      'Stopping after checking only two terms. A rule must fit every gap in the series, not just the first one.',
      'Missing an alternating series: if the differences jump up and down (e.g. +3, +1, +6, +2), split the series into two.',
    ],
    practice: [
      {
        q: 'Find the next term: 5, 11, 23, 47, 95, ?',
        options: ['189', '190', '191', '193'],
        answer: 2,
        why: 'Each term is (previous × 2) + 1: 95 × 2 + 1 = 191.',
      },
      {
        q: 'Find the next term: 2, 10, 30, 68, 130, ?',
        options: ['216', '210', '226', '222'],
        answer: 3,
        why: 'The terms are n³ + n for n = 1 to 5 (1 + 1, 8 + 2, 27 + 3, 64 + 4, 125 + 5). Next: 6³ + 6 = 216 + 6 = 222.',
      },
      {
        q: 'Find the next term: 4, 7, 8, 14, 16, 21, 32, ?',
        options: ['28', '64', '35', '42'],
        answer: 0,
        why: 'Two series are mixed. Odd positions: 4, 8, 16, 32 (×2). Even positions: 7, 14, 21, ? (+7). The next term is in an even position: 21 + 7 = 28.',
      },
      {
        q: 'Find the wrong number in the series: 3, 5, 9, 17, 33, 66, 129',
        options: ['33', '66', '17', '129'],
        answer: 1,
        why: 'The rule is ×2 − 1: 3 → 5 → 9 → 17 → 33 → 65 → 129. The term 66 should be 65.',
      },
    ],
  },

  // ───────────────────────────────────────────── 2
  {
    id: 'letter-series',
    title: 'Letter &amp; Alphanumeric Series',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'House numbers on a circular society lane',
      oneLine: 'Every letter is a house number from 1 to 26 on a lane that loops back to the start.',
      story:
        'Picture a housing society where the lane has exactly 26 bungalows, numbered 1 to 26, and the lane goes round in a loop so that after bungalow 26 you are back at bungalow 1. Name the bungalows A to Z. Now “move 3 letters ahead of W” simply means “walk 3 houses ahead of house 23”: 24, 25, 26 — that is Z. Walk one more and you reach house 1, A, because the lane loops. Bungalow 1 (A) faces bungalow 26 (Z) across the garden, B faces Y, and so on: every pair of facing houses adds up to 27. Once you think in house numbers, a letter series becomes a number series you already know how to solve.',
      map: [
        ['Bungalow number on the lane', 'Position of the letter (A = 1 … Z = 26)'],
        ['Walking k houses ahead', 'Moving k letters forward (+k)'],
        ['Lane loops back to house 1 after 26', 'After Z comes A again (subtract 26)'],
        ['House facing yours across the garden', 'Opposite letter: positions add to 27 (A–Z, B–Y …)'],
      ],
    },
    concept: [
      'Convert every letter into its position number (A = 1, B = 2 … Z = 26), solve the number pattern, then convert back. To get positions quickly, remember <b>EJOTY</b> = 5, 10, 15, 20, 25. Every other letter is one or two steps from these anchors: R is 2 before T, so R = 18.',
      'For backward positions use 27 − position: the 10th letter from the right (Z end) is 27 − 10 = 17 = Q. The <b>opposite</b> letter of any letter is also 27 − position (G = 7 ↔ 27 − 7 = 20 = T). If a count goes past 26, subtract 26; if it goes below 1, add 26.',
      'In letter-cluster series (AZ, CX, EV …), treat each place in the cluster as its own series. In alphanumeric arrangements (a mixed string of letters, digits and symbols), read the question very carefully: “immediately preceded by” means the element just before it, “immediately followed by” means the one just after it. Count slowly and mark each match on paper.',
    ],
    keyPoints: [
      'EJOTY: E = 5, J = 10, O = 15, T = 20, Y = 25',
      'Position from the right end = 27 − position from the left',
      'Opposite pairs add to 27: A–Z, B–Y, C–X, D–W, E–V, F–U, G–T, H–S, I–R, J–Q, K–P, L–O, M–N',
      'Moving forward beyond Z: subtract 26; moving back beyond A: add 26',
      '“k-th to the left of X” = position of X − k; “k-th to the right” = position + k',
      'Clusters: solve the 1st letters, 2nd letters (and digits) as separate series',
      'Vowels A, E, I, O, U are at 1, 5, 9, 15, 21',
    ],
    example: {
      q: 'Find the next letter: B, E, I, N, ?',
      steps: [
        'Convert to positions: B = 2, E = 5, I = 9, N = 14.',
        'Differences: +3, +4, +5. The next difference is +6.',
        '14 + 6 = 20.',
        'Position 20 = T (from EJOTY).',
      ],
      answer: 'T',
    },
    shortcut:
      'Never count on your fingers from A. Jump to the nearest EJOTY anchor and count one or two steps: to find the 22nd letter, start at T (20) and step U (21), V (22).',
    traps: [
      'Confusing “from the left” and “from the right”. The 10th letter from the right is Q (27 − 10), not J.',
      'In alphanumeric strings, symbols like #, @, $ are neither letters nor numbers — do not count them as either.',
    ],
    practice: [
      {
        q: 'Find the next term: AZ, CX, EV, GT, ?',
        options: ['IR', 'HS', 'IS', 'JR'],
        answer: 0,
        why: 'First letters move +2 (A, C, E, G, I). Second letters move −2 (Z, X, V, T, R). So the next term is IR.',
      },
      {
        q: 'Find the next letter: Z, W, S, N, ?',
        options: ['I', 'G', 'H', 'J'],
        answer: 2,
        why: 'Positions 26, 23, 19, 14 go down by 3, 4, 5. Next is −6: 14 − 6 = 8 = H.',
      },
      {
        q: 'In the arrangement M 4 # K 7 R @ 2 E 9 $ B 5 T, how many letters are immediately preceded by a number?',
        options: ['2', '3', '4', '1'],
        answer: 1,
        why: 'R (after 7), E (after 2) and T (after 5) qualify. K is after #, B is after $, and M has nothing before it. Total 3.',
      },
      {
        q: 'In the English alphabet, which letter is 6th to the left of the 10th letter from the right end?',
        options: ['L', 'J', 'M', 'K'],
        answer: 3,
        why: '10th from the right = 27 − 10 = 17 = Q. Six to the left of it: 17 − 6 = 11 = K.',
      },
    ],
  },

  // ───────────────────────────────────────────── 3
  {
    id: 'coding-decoding',
    title: 'Coding–Decoding',
    syllabus: 'Logical deduction',
    analogy: {
      title: 'The Mumbai dabbawala tiffin code',
      oneLine: 'Every tiffin carries a short code; the same rule is applied to every tiffin, so one decoded tiffin teaches you all the rest.',
      story:
        'Mumbai’s dabbawalas deliver lakhs of lunch boxes using a few painted letters, numbers and colours on each tiffin lid. A new dabbawala does not memorise every box. He learns the <i>rule</i>: this mark means the starting station, that one means the building, this number means the floor. Once he cracks the rule from a few known tiffins, he can read any new tiffin. And if two tiffins both go to Churchgate, the mark they share must be the Churchgate mark. Coding–decoding questions work the same way: they show you one or two coded examples, you discover the rule by comparing, and then you apply that same rule to a new word.',
      map: [
        ['A painted code on a tiffin lid', 'The coded word or sentence'],
        ['The one rule all dabbawalas follow', 'The coding rule (shift, reverse, opposite letter, number value)'],
        ['Two tiffins going to the same station share a mark', 'A word common to two sentences gets the code common to both'],
        ['A new dabbawala reading a new tiffin', 'Applying the found rule to the word asked in the question'],
      ],
    },
    concept: [
      '<b>Letter coding:</b> write the position numbers of the original word above the code and find the change letter by letter. Common rules: every letter shifted by a fixed amount (+1, −2), shifts that grow (+1, +2, +3 …), the word reversed, or each letter replaced by its <b>opposite</b> letter (positions adding to 27).',
      '<b>Number coding:</b> the code is often the sum of letter positions, the number of letters × something, or each letter replaced by its position. Test the simplest idea (sum of positions) first.',
      '<b>Sentence (word) coding:</b> compare two sentences at a time. The word common to both sentences must have the code common to both coded forms. Eliminate step by step until only the asked word is left. <b>Substitution coding</b> (“sky is called sea …”) is a trap of language: first answer the real-world question, then replace that real answer with its code name.',
    ],
    keyPoints: [
      'Always write positions above and below: compare letter by letter',
      'Check for a constant shift first, then reversal, then opposite letters (sum 27)',
      'Opposite-letter coding: GIRL → TRIO because G↔T, I↔R, R↔I, L↔O',
      'Number codes: try sum of positions, then product, then number of letters',
      'Sentence coding: common word ↔ common code; use pairs of sentences',
      'Substitution: answer the real question first, then give its code name',
      'If the code is shorter or longer than the word, letters are being dropped, added or grouped',
    ],
    example: {
      q: 'In a code language, “pit na sa” means “you are good”, “na ka da” means “they are bad”, and “sa ri ka” means “good and bad”. What is the code for “they”?',
      steps: [
        'Sentences 1 and 2 share the word “are” and the code “na”. So are = na.',
        'Sentences 1 and 3 share “good” and the code “sa”. So good = sa.',
        'Sentences 2 and 3 share “bad” and the code “ka”. So bad = ka.',
        'Sentence 2 is “na ka da” = “they are bad”. With are = na and bad = ka, the only code left is “da”.',
      ],
      answer: 'they = da',
    },
    shortcut:
      'For shift codes, check only the first and last letters. If both shift by the same amount, the rest almost always follow — then pick the option whose first and last letters match, and verify one middle letter.',
    traps: [
      'In substitution questions, students write the real word (“water”) instead of its code name. Read the chain again and give the name it is “called”.',
      'Assuming the order of codes matches the order of words. In sentence coding the codes can be jumbled; only common words and common codes matter.',
    ],
    practice: [
      {
        q: 'If PAPER is coded as QBQFS, how is PENCIL coded in the same language?',
        options: ['QFNDJM', 'OFODJM', 'QFODIM', 'QFODJM'],
        answer: 3,
        why: 'Each letter moves +1 (P→Q, A→B, E→F, R→S). PENCIL → Q F O D J M.',
      },
      {
        q: 'If GIRL is coded as TRIO, how is BOY coded?',
        options: ['ZLB', 'YLB', 'YKB', 'XLB'],
        answer: 1,
        why: 'Each letter is replaced by its opposite (positions add to 27): G↔T, I↔R, R↔I, L↔O. So B↔Y, O↔L, Y↔B gives YLB.',
      },
      {
        q: 'If CAT = 24, then DOG = ?',
        options: ['26', '24', '28', '25'],
        answer: 0,
        why: 'CAT = 3 + 1 + 20 = 24 (sum of positions). DOG = 4 + 15 + 7 = 26.',
      },
      {
        q: 'If “sky” is called “sea”, “sea” is called “water”, “water” is called “air”, and “air” is called “cloud”, then where do fish live?',
        options: ['water', 'sea', 'air', 'cloud'],
        answer: 2,
        why: 'Fish really live in water, and in this language water is called “air”.',
      },
    ],
  },

  // ───────────────────────────────────────────── 4
  {
    id: 'blood-relations',
    title: 'Blood Relations',
    syllabus: 'Logical deduction',
    analogy: {
      title: 'The family photo at a wedding',
      oneLine: 'Arrange everyone like the wedding photographer does: grandparents on top, parents in the middle, children below, couples side by side.',
      story:
        'At a Maharashtrian wedding, the photographer calls “sagle family, ekatra ya!” and arranges the whole family for one big photo. Aaji–Ajoba sit in the front centre, their sons and daughters with their spouses stand in the next row, and the grandchildren squat in front. Couples always stand side by side; children stand below their parents. With this photo in hand you can answer any “How is she related to him?” question at a glance — you do not need to remember who said what at the haldi. A blood relation question is a list of introductions; your job is to draw that photo on paper before answering.',
      map: [
        ['Rows in the wedding photo (Aaji–Ajoba, parents, kids)', 'Generations: draw each on its own level'],
        ['A couple standing side by side', 'Horizontal double line (=) for husband–wife'],
        ['Children standing below their parents', 'Vertical line from parent down to child'],
        ['Gents in kurta, ladies in saree', '+ for male, − for female next to each name'],
        ['Looking at the finished photo to answer', 'Reading the relation off the tree, not from memory'],
      ],
    },
    concept: [
      'Draw a <b>family tree</b> for every question. Mark each person with + (male) or − (female) as soon as the gender is known. Put people of the same generation on the same level. Join husband and wife with a horizontal double line (=), brothers and sisters with a single horizontal line, and draw a vertical line from parent down to child.',
      'For “pointing to a photo” statements, break the sentence from the end. In “She is the daughter of the only son of my father’s father”, first decode “the only son of my father’s father” (= my father), then “daughter of my father” (= my sister). Replace each phrase with one person before moving on.',
      'In <b>coded relations</b> (P + Q means P is the father of Q, etc.), translate each symbol into a line on the tree, one symbol at a time from left to right. Never assume a person’s gender unless a word (brother, wife, son) or a symbol tells you.',
    ],
    keyPoints: [
      'Symbols: + male, − female, = married couple, | parent to child, — siblings',
      'Same generation on the same horizontal level',
      'Father’s or mother’s brother = uncle; their sister = aunt; their children = cousins',
      'Son’s wife = daughter-in-law; daughter’s husband = son-in-law',
      'Wife’s or husband’s brother = brother-in-law; sister’s husband = brother-in-law',
      '“Only son of my father’s father” = my father; “only daughter of my mother” = me (if I am female)',
      'Gender is unknown unless stated — “A is the child of B” says nothing about A’s gender',
      'Decode long “pointing” sentences from the end backwards',
    ],
    example: {
      q: 'Pointing to a photograph, Ravi says, “She is the daughter of the only son of my father’s father.” How is the girl in the photograph related to Ravi?',
      steps: [
        'Start from the end: “my father’s father” = Ravi’s paternal grandfather.',
        '“The only son of my father’s father” = Ravi’s father (the grandfather has only one son, and Ravi’s father is his son, so it must be him).',
        '“The daughter of my father” = a daughter of Ravi’s father.',
        'Ravi is male, so a daughter of Ravi’s father is not Ravi himself — she is Ravi’s sister.',
      ],
      answer: 'She is Ravi’s sister.',
    },
    shortcut:
      'In “pointing” questions, cross out each phrase and write the single relation above it: “only son of my father’s father” → father, “daughter of father” → sister. Three phrases usually shrink to one word in ten seconds.',
    traps: [
      'Assuming gender from a name or a word like “child”. “B is the sister of C” tells you B is female, but not C.',
      '“A is the brother of B” and “B is the brother of A” are not the same fact — the second also tells you B is male.',
    ],
    practice: [
      {
        q: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?',
        options: ['Father', 'Uncle', 'Grandfather', 'Cousin'],
        answer: 1,
        why: 'A, B and C are siblings, and A is male. C is D’s father, so A is the brother of D’s father: D’s uncle.',
      },
      {
        q: 'Pointing to a man, Neha says, “His mother is the only daughter of my mother.” How is Neha related to the man?',
        options: ['Sister', 'Aunt', 'Mother', 'Grandmother'],
        answer: 2,
        why: 'The only daughter of Neha’s mother is Neha herself. So the man’s mother is Neha.',
      },
      {
        q: 'P + Q means P is the father of Q; P − Q means P is the wife of Q; P × Q means P is the brother of Q. If A + B × C − D, how is D related to A?',
        options: ['Son', 'Brother-in-law', 'Nephew', 'Son-in-law'],
        answer: 3,
        why: 'A is the father of B; B is the brother of C, so C is also A’s child; C is the wife of D, so C is A’s daughter. D is the husband of A’s daughter: A’s son-in-law.',
      },
      {
        q: 'M is the son of N. N is the daughter of O. O is the husband of P. How is P related to M?',
        options: ['Grandmother', 'Mother', 'Aunt', 'Sister'],
        answer: 0,
        why: 'O and P are husband and wife, and N is their daughter, so P is N’s mother. M is N’s son, so P is M’s grandmother.',
      },
    ],
  },

  // ───────────────────────────────────────────── 5
  {
    id: 'direction-sense',
    title: 'Direction Sense',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'Directions from the ST stand to your house in the village',
      oneLine: 'Mark the ST stand as the origin, draw every road on paper, and turn the way the walker turns — not the way you are sitting.',
      story:
        'A friend from the city gets off the ST bus in your village and phones you. You say: “Walk straight towards the Hanuman temple, about 4 km. At the temple turn right and go 3 km to the well. Our house is right there.” If your friend sketches this on paper — the bus stand as a dot, an arrow towards the temple, a right turn — he can tell how far your house is from the stand in a straight line, even though he walked 7 km on the roads. He also knows that in the morning the sun rises behind the temple (east), so shadows fall the other way. Direction questions are exactly this sketch: a start point, straight roads, turns, and a final straight-line distance.',
      map: [
        ['The ST bus stand where your friend gets down', 'Starting point at the origin (0, 0)'],
        ['“Turn right at the temple”', 'Turn 90° clockwise from the current facing direction'],
        ['Sun rising behind the temple in the morning', 'East reference: morning shadows fall to the west'],
        ['Straight-line distance from the stand to your house', 'Displacement = √(x² + y²) by Pythagoras'],
      ],
    },
    concept: [
      'Draw a cross for North (up), South (down), East (right) and West (left) at the start. Then trace the path on paper, writing the length on each segment. Turns depend on which way the person is <b>currently</b> facing: a right turn is 90° clockwise and a left turn is 90° anticlockwise <i>from the walker’s direction</i>, not from the page.',
      'For the final distance, add up the net east–west movement (x) and the net north–south movement (y), then use Pythagoras: distance = √(x² + y²). The answer direction is read from the start point to the end point (e.g. x positive and y negative means South-East). Common triples: 3-4-5, 6-8-10, 5-12-13, 8-15-17.',
      'For <b>shadow</b> questions: in the morning the sun is in the east, so shadows fall towards the west; in the evening the sun is in the west, so shadows fall towards the east. At noon there is almost no shadow (do not use noon in questions). If the shadow falls to your left in the morning, your left is west, so you are facing north.',
    ],
    keyPoints: [
      'Right turn = 90° clockwise; left turn = 90° anticlockwise (from current facing)',
      'Clockwise order: N → E → S → W → N; 45° turns: N → NE → E → SE → S …',
      'Net x = East − West; net y = North − South; distance = √(x² + y²)',
      'Triples: 3-4-5, 6-8-10, 5-12-13, 8-15-17, 7-24-25',
      'Morning: sun in east, shadow to the west. Evening: sun in west, shadow to the east',
      '“Direction of A from B” means stand at B and look towards A',
      'A U-turn is 180°; two right turns or two left turns also reverse the direction',
    ],
    example: {
      q: 'Ramesh walks 10 m north, turns right and walks 6 m, then turns right again and walks 18 m. How far and in which direction is he from his starting point?',
      steps: [
        'Start at (0, 0) facing north. Walk 10 m → (0, 10).',
        'Facing north, a right turn makes him face east. Walk 6 m → (6, 10).',
        'Facing east, a right turn makes him face south. Walk 18 m → (6, 10 − 18) = (6, −8).',
        'Distance = √(6² + 8²) = √100 = 10 m.',
        'He is to the east (x = +6) and south (y = −8) of the start: South-East.',
      ],
      answer: '10 m, South-East of the starting point',
    },
    shortcut:
      'Ignore the order of moves when finding the final position: just total all north moves minus south moves, and all east moves minus west moves. You only need the turns to know which direction each move was in.',
    traps: [
      'Turning according to the page instead of the walker. If he is facing south, his “right” is west, not east.',
      'Answering the direction of the start from the end when the question asks the end from the start (or the other way round). These are opposite directions.',
    ],
    practice: [
      {
        q: 'A man walks 5 km south, turns left and walks 3 km, then turns left again and walks 9 km. How far is he from his starting point?',
        options: ['17 km', '5 km', '7 km', '4 km'],
        answer: 1,
        why: 'South 5 → (0, −5). Facing south, left is east: (3, −5). Facing east, left is north: 9 km → (3, 4). Distance = √(3² + 4²) = 5 km.',
      },
      {
        q: 'One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was he facing?',
        options: ['East', 'West', 'North', 'South'],
        answer: 3,
        why: 'In the morning the sun is in the east, so the shadow falls to the west. The shadow is on his right, so his right is west. A person whose right is west faces south.',
      },
      {
        q: 'Priya is facing east. She turns 90° clockwise, then 180° anticlockwise, then 45° clockwise. Which direction is she facing now?',
        options: ['North-East', 'South-East', 'North-West', 'South-West'],
        answer: 0,
        why: 'East → 90° clockwise → South → 180° anticlockwise → North → 45° clockwise → North-East.',
      },
      {
        q: 'A temple is 6 km north of the bus stand. A well is 8 km east of the temple. How far is the bus stand from the well, and in which direction?',
        options: ['10 km, North-East', '14 km, South-West', '10 km, South-West', '10 km, South-East'],
        answer: 2,
        why: 'Bus stand (0, 0), temple (0, 6), well (8, 6). From the well, the bus stand is 8 km west and 6 km south: √(64 + 36) = 10 km, South-West.',
      },
    ],
  },

  // ───────────────────────────────────────────── 6
  {
    id: 'ranking-ordering',
    title: 'Ranking &amp; Ordering',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'The queue at the ration shop',
      oneLine: 'Your place from the front plus your place from the back counts you twice, so subtract one.',
      story:
        'On the first of the month there is a long queue outside the ration shop (sasta dhanya dukan). You count: you are 7th from the shop window. Your friend at the back shouts that you are 12th from his end. How many people are in the queue? Counting from the front you counted yourself, and counting from the back you counted yourself again, so the total is 7 + 12 − 1 = 18. If two people swap places in the queue, the place of one tells you the place of the other. And when an aunty says “I am behind Mrs Patil but ahead of Mrs Shinde”, you can line them up without seeing the queue. Ranking questions are this queue, written in words.',
      map: [
        ['Your place from the shop window', 'Rank from the top / left'],
        ['Your place from the back of the queue', 'Rank from the bottom / right'],
        ['You get counted twice', 'Total = left + right − 1'],
        ['Two people swapping places', 'Interchange: one person’s new position = the other’s old position'],
        ['“Behind Mrs Patil, ahead of Mrs Shinde”', 'Ordering clues: write a chain with &gt; signs'],
      ],
    },
    concept: [
      'For one person: <b>Total = position from left + position from right − 1</b>. The same formula gives position from one end: position from right = Total − position from left + 1. Ranks in a class work the same way (rank from top and rank from bottom).',
      'For two people, first convert both positions to the <b>same end</b>. Then the number of people between them = (difference of positions) − 1. In interchange questions, after swapping, A stands where B stood — so A’s new position from the left is B’s position from the left. Combine that with B’s position from the right to get the total.',
      'For ordering by height, marks, age, etc., write each clue as a chain using &gt; (taller, more, older) and merge the chains: P &gt; Q, R &gt; P gives R &gt; P &gt; Q. Place the most definite clues first. If the chain cannot be completed, the answer is “cannot be determined” — do not guess.',
    ],
    keyPoints: [
      'Total = L + R − 1',
      'Position from right = Total − L + 1',
      'Between two people (same end positions a and b): |a − b| − 1',
      'Interchange: A’s new position = B’s old position (from the same end)',
      'Ordering: build one chain with &gt; and read the k-th from the top',
      'Minimum total in a row when A is p-th from left and B is q-th from right (B to the right of A, no overlap) = p + q',
    ],
    example: {
      q: 'In a row of students, Amit is 12th from the left end and 18th from the right end. How many students are there in the row?',
      steps: [
        'Amit is counted once from the left (12) and once from the right (18).',
        'He has been counted twice, so subtract 1.',
        'Total = 12 + 18 − 1 = 29.',
      ],
      answer: '29 students',
    },
    shortcut:
      'For interchange questions, ignore the person who moved and look only at the seat: “A becomes 15th from left after taking B’s place” means B’s seat is 15th from left. Then use L + R − 1 with B’s right position.',
    traps: [
      'Forgetting the −1 in L + R − 1, giving 30 instead of 29.',
      'Mixing ends when counting people between two persons: always convert both to positions from the same end first.',
    ],
    practice: [
      {
        q: 'In a class of 40 students, Rahul ranks 13th from the top. What is his rank from the bottom?',
        options: ['27', '28', '29', '26'],
        answer: 1,
        why: 'Rank from bottom = 40 − 13 + 1 = 28.',
      },
      {
        q: 'In a row, A is 10th from the left and B is 9th from the right. When they interchange their positions, A becomes 15th from the left. How many people are in the row?',
        options: ['23', '24', '22', '25'],
        answer: 0,
        why: 'After the swap, A is in B’s old seat, so B’s seat is 15th from the left. That seat is 9th from the right. Total = 15 + 9 − 1 = 23.',
      },
      {
        q: 'Among P, Q, R, S and T: P is taller than Q but shorter than R. S is taller than R. T is shorter than Q. Who is the third tallest?',
        options: ['R', 'Q', 'S', 'P'],
        answer: 3,
        why: 'R &gt; P &gt; Q, S &gt; R, Q &gt; T. Chain: S &gt; R &gt; P &gt; Q &gt; T. Third tallest is P.',
      },
      {
        q: 'In a row of 30 children, Meena is 8th from the left and Kiran is 12th from the right. How many children are there between Meena and Kiran?',
        options: ['9', '11', '10', '12'],
        answer: 2,
        why: 'Kiran from the left = 30 − 12 + 1 = 19. Between positions 8 and 19: 19 − 8 − 1 = 10.',
      },
    ],
  },

  // ───────────────────────────────────────────── 7
  {
    id: 'seating-arrangement',
    title: 'Seating Arrangement — Linear &amp; Circular',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'Seats in a Mumbai local train compartment',
      oneLine: 'Fix one person first, and remember that “your right” depends on which way your bench faces.',
      story:
        'In a local train, the long benches face each other: one row faces the engine and the row opposite faces backwards. If you face the engine, your right hand points to one window; the passenger sitting opposite you has his right hand pointing to the other window. So “X is to the right of Y” means a different seat depending on which bench Y sits on. Regular commuters also fix seats by one known person: “Kaka always sits by the window — I sit two seats from him.” A round table at a hotel is the same bench bent into a ring with its two ends joined. Seating questions are solved by fixing one passenger, drawing the bench, and turning “right/left” into seats according to the direction each person faces.',
      map: [
        ['Bench facing the engine vs facing backwards', 'People facing north vs south: left and right are swapped'],
        ['“Kaka always takes the window seat”', 'Start with the most definite clue (fixed position)'],
        ['“I sit two seats from Kaka”', 'Relative clues: second to the right/left'],
        ['Bench bent into a ring at a round table', 'Circular arrangement: no ends, only neighbours and opposites'],
        ['Facing the centre of the round table', 'Right = anticlockwise, left = clockwise'],
      ],
    },
    concept: [
      '<b>Linear:</b> draw blanks for the seats and write which way the row faces. If people face north (up the page, the same way you are looking), their right is your right. If they face south, their right is your left. Place the fixed clues first (“C is third from the left end”, “A sits at an end”), then the relative clues (“B is to the immediate right of C”). If a clue gives two possibilities, draw both cases and kill the one that breaks a later clue.',
      '<b>Circular:</b> draw a circle with the right number of seats. Fix any one person at the bottom — in a circle every seat is the same until someone sits. When people face the <b>centre</b>, “right” is <b>anticlockwise</b> and “left” is <b>clockwise</b>. When they face outward, it is the reverse. With n seats (n even), the person opposite is n/2 seats away.',
      'Read every question in the set before you start: sometimes one clue is only useful later. After filling the arrangement, re-check every clue once against your final drawing — this catches most mistakes.',
    ],
    keyPoints: [
      'Facing north: their right = page right. Facing south: their right = page left',
      'Circle facing centre: right = anticlockwise, left = clockwise',
      'Circle facing outward: right = clockwise, left = anticlockwise',
      '“Immediate right” = the very next seat; “second to the right” = skip one seat',
      'n people in a circle: opposite person is n/2 seats away (n even)',
      'Place definite clues first, then relative clues, then negative clues (“not adjacent”)',
      'Two possible cases? Draw both side by side and eliminate',
    ],
    example: {
      q: 'Five friends V, W, X, Y and Z sit in a row facing north. X sits in the middle. Z sits at the extreme right end. W sits second to the left of X. Y is not an immediate neighbour of Z. Who sits between X and Z?',
      steps: [
        'Seats 1 to 5 from left to right; facing north, their left and right match the page.',
        'X is in the middle: seat 3. Z is at the right end: seat 5.',
        'W is second to the left of X: seat 3 − 2 = seat 1.',
        'Seats 2 and 4 are left for V and Y. Y cannot be next to Z (seat 4), so Y is in seat 2 and V is in seat 4.',
        'Order: W, Y, X, V, Z. The person between X (3) and Z (5) is V.',
      ],
      answer: 'V',
    },
    shortcut:
      'In a circle where everyone faces the centre, just remember “Right = Reverse of clock” (anticlockwise). Write a small ↺ = R next to your circle so you never mix it up during the exam.',
    traps: [
      'Using page-right for people facing south. They are like the passengers on the opposite bench: their right is your left.',
      'Reading “B sits between A and C” as “immediately between” when the question does not say so. Unless it says “immediately”, there may be other people in between.',
    ],
    practice: [
      {
        q: 'Six friends A, B, C, D, E and F sit in a row facing north. C is third from the left end. B sits to the immediate right of C. A sits at one of the ends. E is an immediate neighbour of both A and B. F does not sit at an end. Who sits at the left end?',
        options: ['A', 'F', 'D', 'B'],
        answer: 2,
        why: 'C = 3, B = 4. E must touch B, so E = 5 (seat 3 is taken), and A must touch E at an end, so A = 6. Seats 1 and 2 are left; F is not at an end, so F = 2 and D = 1. Order: D F C B E A.',
      },
      {
        q: 'Six friends A, B, C, D, E and F sit in a row facing north. C is third from the left end. B sits to the immediate right of C. A sits at one of the ends. E is an immediate neighbour of both A and B. F does not sit at an end. Who sits second to the right of C?',
        options: ['E', 'B', 'A', 'F'],
        answer: 0,
        why: 'The order is D F C B E A. C is in seat 3; second to the right is seat 5, which is E.',
      },
      {
        q: 'Six people P, Q, R, S, T and U sit around a circular table facing the centre. S sits opposite P. Q sits to the immediate right of P. R sits second to the left of Q. U sits between Q and S, next to both. Who sits opposite R?',
        options: ['T', 'Q', 'S', 'U'],
        answer: 3,
        why: 'Clockwise from P: P, R, T, S, U, Q. (Facing the centre, right = anticlockwise, so Q is just anticlockwise of P; R is two seats clockwise of Q.) R and U are three seats apart, so U is opposite R.',
      },
      {
        q: 'Six people P, Q, R, S, T and U sit around a circular table facing the centre. S sits opposite P. Q sits to the immediate right of P. R sits second to the left of Q. U sits between Q and S, next to both. Who sits second to the right of S?',
        options: ['T', 'R', 'P', 'U'],
        answer: 1,
        why: 'Clockwise order is P, R, T, S, U, Q. Right means anticlockwise: one seat anticlockwise of S is T, two seats is R.',
      },
    ],
  },

  // ───────────────────────────────────────────── 8
  {
    id: 'puzzles',
    title: 'Puzzles — Scheduling, Floors &amp; Multi-attribute Grids',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'The Ganpati mandal volunteer roster',
      oneLine: 'Make a table of volunteers × days, tick the sure things first, cross out the impossible ones, and the gaps fill themselves.',
      story:
        'Every year the Ganpati mandal secretary must make a roster: who does the aarti, who handles the prasad, who manages the crowd, and on which day. Everyone has a condition — “Sachin can’t come before Wednesday”, “Pooja does prasad only”, “Rohit must come the day after Sachin”. The secretary does not keep it in his head. He draws a table with names down the side and days across the top, fills in the definite facts first (Pooja = prasad), puts ✗ where something is impossible, and soon each row and column has only one empty box left. When a condition gives two choices, he pencils in both and checks which one breaks a rule. Puzzle questions in the exam are this roster.',
      map: [
        ['Names down the side, days/duties across the top', 'Grid with one row per person, one column per attribute value'],
        ['“Pooja does prasad only”', 'Definite clue: tick it first'],
        ['“Sachin can’t come before Wednesday”', 'Negative clue: put ✗ in those boxes'],
        ['One person per day, one day per person', 'Each row and each column gets exactly one tick'],
        ['Pencilling two possible rosters', 'Case analysis: try both, eliminate the one that breaks a clue'],
      ],
    },
    concept: [
      'Most puzzles have people matched to one or more attributes (day, floor, city, colour, subject). Draw a <b>table</b>: one row per position (Monday, Tuesday … or floor 1 to 5) and one column per attribute. Write every clue in short form beside the table so you do not keep re-reading the paragraph.',
      'Fill clues in this order: (1) <b>definite</b> clues (“Chirag lives on the top floor”), (2) <b>linked</b> clues that hang on a placed person (“Amit lives two floors below Chirag”), (3) <b>negative</b> clues (“Joshi does not teach Python”). When a clue still allows two places, write both cases side by side and continue each until one breaks a rule.',
      'For floor puzzles, decide the numbering first: floor 1 is the lowest unless told otherwise. “Above” and “below” do not mean “immediately”. For scheduling, “the day after” means immediately next, but “before” means any earlier day. When the grid is complete, check every clue once more.',
    ],
    keyPoints: [
      'Draw the table before reading clue 2',
      'Order: definite → linked → negative clues',
      '“Immediately above/after” = next one; “above/after” = any one higher/later',
      'Each person–value pair is used exactly once (one tick per row and column)',
      'Two cases? Solve both; the survivor is the answer',
      'Floor 1 is the bottom unless the question says “ground floor = 0”',
      'Re-check every clue against the final table before answering',
    ],
    example: {
      q: 'Three friends Om, Pooja and Rohan come from Pune, Nashik and Nagpur (one each), and each likes a different sweet: modak, puran poli and shrikhand. (1) Pooja is from Nashik. (2) The friend from Pune likes modak. (3) Rohan likes neither modak nor shrikhand. Who likes shrikhand, and which city is that person from?',
      steps: [
        'Make a 3 × 2 table: Name | City | Sweet.',
        'Clue 1 (definite): Pooja = Nashik.',
        'Clue 3: Rohan likes neither modak nor shrikhand, so Rohan = puran poli.',
        'Clue 2: the Pune friend likes modak. Rohan does not like modak, so Rohan is not from Pune. Pooja is from Nashik, so Rohan = Nagpur and Om = Pune.',
        'Om (Pune) likes modak. The only sweet left is shrikhand, for Pooja.',
      ],
      answer: 'Pooja, from Nashik, likes shrikhand.',
    },
    shortcut:
      'Read all the questions in the set first. Sometimes the question only asks about one person, and you can answer it after placing just two or three clues, without completing the whole table.',
    traps: [
      'Treating “Bina lives below Eknath” as “immediately below”. Without the word “immediately”, any lower floor is possible.',
      'Forgetting that “before” in scheduling means any earlier day, not the previous day.',
    ],
    practice: [
      {
        q: 'Five friends Amit, Bina, Chirag, Divya and Eknath live on floors 1 to 5 of a building (floor 1 is the lowest), one per floor. Chirag lives on the top floor. Amit lives two floors below Chirag. Eknath lives immediately below Amit. Divya lives on an even-numbered floor. Who lives on floor 1?',
        options: ['Eknath', 'Divya', 'Amit', 'Bina'],
        answer: 3,
        why: 'Chirag = 5, Amit = 3, Eknath = 2. Divya must be on an even floor; 2 is taken, so Divya = 4. Bina gets floor 1.',
      },
      {
        q: 'Five friends Amit, Bina, Chirag, Divya and Eknath live on floors 1 to 5 of a building (floor 1 is the lowest), one per floor. Chirag lives on the top floor. Amit lives two floors below Chirag. Eknath lives immediately below Amit. Divya lives on an even-numbered floor. How many people live between Bina and Divya?',
        options: ['Two', 'One', 'Three', 'None'],
        answer: 0,
        why: 'Floors from 1 up: Bina, Eknath, Amit, Divya, Chirag. Between Bina (1) and Divya (4) are Eknath and Amit: two people.',
      },
      {
        q: 'Four lectures — C, Java, Python and SQL — are held on Monday to Thursday, one per day, each taught by a different professor: Joshi, Kulkarni, Patil and Shaikh. Java is held the day after C. SQL is held on some day before C. Python is not on Monday or Tuesday. Patil teaches Java. Shaikh’s lecture is on Monday. Joshi does not teach Python. Who teaches the lecture on Tuesday?',
        options: ['Prof. Shaikh', 'Prof. Patil', 'Prof. Joshi', 'Prof. Kulkarni'],
        answer: 2,
        why: 'SQL before C and Java right after C. If C were on Wednesday, Python would have to be on Monday or Tuesday — not allowed. So SQL Mon, C Tue, Java Wed, Python Thu. Shaikh = Mon (SQL), Patil = Java, Joshi is not Python, so Joshi = C (Tuesday) and Kulkarni = Python.',
      },
      {
        q: 'Four lectures — C, Java, Python and SQL — are held on Monday to Thursday, one per day, each taught by a different professor: Joshi, Kulkarni, Patil and Shaikh. Java is held the day after C. SQL is held on some day before C. Python is not on Monday or Tuesday. Patil teaches Java. Shaikh’s lecture is on Monday. Joshi does not teach Python. Which lecture does Prof. Kulkarni teach, and on which day?',
        options: ['C on Tuesday', 'Python on Thursday', 'Python on Wednesday', 'SQL on Monday'],
        answer: 1,
        why: 'The schedule is SQL (Mon, Shaikh), C (Tue, Joshi), Java (Wed, Patil), Python (Thu, Kulkarni).',
      },
    ],
  },

  // ───────────────────────────────────────────── 9
  {
    id: 'syllogisms',
    title: 'Syllogisms',
    syllabus: 'Logical deduction',
    analogy: {
      title: 'WhatsApp groups and their members',
      oneLine: 'Each category is a WhatsApp group; a conclusion follows only if it is true for every possible way the groups could overlap.',
      story:
        'Think of “Class FY-MCA”, “College Cricket” and “Family” as WhatsApp groups. “All FY-MCA members are in the College group” means the class group sits completely inside the college group. “Some cricket members are in FY-MCA” means at least one person is in both — maybe one, maybe all. “No family member is in College Cricket” means the two groups share nobody. Now, you cannot see the member list of a group you are not in, so you must ask: is this statement true <i>whatever</i> the hidden members are? If yes, it definitely follows. If it is true in some member lists and false in others, it is only a possibility. That is exactly how syllogisms are judged.',
      map: [
        ['A WhatsApp group', 'A category (circle in the Venn diagram)'],
        ['Class group completely inside the College group', '“All A are B”: circle A inside circle B'],
        ['At least one common member in two groups', '“Some A are B”: circles overlap (at least one element)'],
        ['Two groups with no common member', '“No A is B”: separate circles'],
        ['Cannot see a hidden member list', 'Check every possible diagram: definite only if true in all'],
      ],
    },
    concept: [
      'Draw the <b>simplest</b> Venn diagram that satisfies all the statements, and then ask: can I redraw it (still obeying every statement) so that the conclusion becomes false? If you can, the conclusion does <b>not</b> follow definitely. If no valid drawing makes it false, it follows. “Some” means at least one, possibly all.',
      'Useful definite results: “All A are B” gives “Some A are B” and “Some B are A”. “Some A are B” gives “Some B are A”. “No A is B” gives “No B is A”. Two “some” statements (Some A are B, Some B are C) give <b>no</b> definite link between A and C. “All A are B + No B is C” gives “No A is C”. “Some A are B + No B is C” gives “Some A are not C”.',
      '<b>Possibility</b> conclusions (“Some A being C is a possibility”) follow if <i>at least one</i> valid diagram makes them true; they fail only if the statements force them false. <b>Either–or:</b> when neither of a pair like “Some A are B” and “No A is B” follows definitely, but between them they cover every case (same two terms), the answer is “Either I or II follows”.',
    ],
    keyPoints: [
      'All A are B → A inside B; also Some A are B and Some B are A',
      'Some A are B → Some B are A (at least one common)',
      'No A is B → No B is A',
      'All A–B + All B–C → All A are C; All A–B + No B–C → No A is C; Some A–B + All B–C → Some A are C; Some A–B + No B–C → Some A are not C',
      'Some + Some, or No + No, or All (A in B) + Some (B with C): no definite A–C conclusion',
      '“All B are A” does NOT follow from “All A are B” — but it is a possibility',
      'Possibility fails only when a definite statement forbids it',
      'Either–or: a complementary pair on the same two terms (Some/No, or All/Some-not) where neither is definite alone',
    ],
    example: {
      q: 'Statements: All pens are books. Some books are bags. Conclusions: I. Some pens are bags. II. Some bags are books.',
      steps: [
        'Draw the pens circle inside the books circle. Draw a bags circle overlapping the books circle.',
        'Conclusion I: can the bags circle touch only the part of books outside pens? Yes. Then no pen is a bag, so I does not follow definitely.',
        'Conclusion II: “Some books are bags” means at least one book is a bag, so that object is a bag that is a book. II follows (it is just the reverse of the statement).',
      ],
      answer: 'Only II follows.',
    },
    shortcut:
      'For a quick check, use the rule table: a definite conclusion linking the two end terms needs the middle term to be fully covered in at least one statement — as the subject of an “All” statement, or in a “No” statement. Here the middle term is books: “All pens are books” covers pens, not books, and “Some books are bags” does not cover books either — so no definite pen–bag conclusion follows.',
    traps: [
      'Using real-world knowledge. If the statement says “All cats are dogs”, accept it as true inside the question.',
      'Concluding “All B are A” from “All A are B”. The class group is inside the college group; the college group is not inside the class group.',
    ],
    practice: [
      {
        q: 'Statements: All dogs are animals. All animals are living beings. Conclusions: I. All dogs are living beings. II. Some living beings are dogs.',
        options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither I nor II follows'],
        answer: 0,
        why: 'Dogs are inside animals, which are inside living beings, so all dogs are living beings (I). Since all dogs are living beings, some living beings are dogs (II).',
      },
      {
        q: 'Statements: Some teachers are singers. No singer is a dancer. Conclusions: I. Some teachers are not dancers. II. No teacher is a dancer.',
        options: ['Only II follows', 'Both I and II follow', 'Only I follows', 'Either I or II follows'],
        answer: 2,
        why: 'The teachers who are singers can never be dancers, so some teachers are not dancers (I). Other teachers may still be dancers, so II is not definite.',
      },
      {
        q: 'Statements: Some phones are laptops. Some laptops are tablets. Conclusions: I. Some phones are tablets. II. No phone is a tablet.',
        options: ['Only I follows', 'Either I or II follows', 'Neither I nor II follows', 'Both I and II follow'],
        answer: 1,
        why: 'Two “some” statements give no definite phone–tablet link, so neither I nor II follows alone. But between them (Some phones are tablets / No phone is a tablet) every case is covered, so by the standard convention “Either I or II follows”. Choose “Neither” only when the two conclusions do not form such a complementary pair on the same two terms.',
      },
      {
        q: 'Statements: All cars are buses. No bus is a truck. Conclusions: I. Some cars being trucks is a possibility. II. All buses being cars is a possibility.',
        options: ['Only I follows', 'Both I and II follow', 'Neither I nor II follows', 'Only II follows'],
        answer: 3,
        why: 'Cars are inside buses, and buses share nothing with trucks, so no car can be a truck: I is impossible. Nothing stops the buses circle from being exactly the cars circle, so II is a possibility.',
      },
    ],
  },

  // ───────────────────────────────────────────── 10
  {
    id: 'statements-conclusions',
    title: 'Statements — Assumptions, Conclusions &amp; Inferences',
    syllabus: 'Verbal reasoning',
    analogy: {
      title: 'The gram panchayat’s drum announcement (dawandi)',
      oneLine: 'The announcement is the statement; the unspoken belief behind it is the assumption; what villagers can safely take away is the conclusion.',
      story:
        'The gram panchayat sends a man around with a drum: “Aika ho aika! During the monsoon, boil your drinking water to avoid jaundice!” Why would the sarpanch spend money on this? Because he silently believes two things: that people will listen to the announcement, and that boiling water really cuts the risk of jaundice. Those unspoken beliefs are <b>assumptions</b>. What can the villagers safely take away? “If I boil my water, I lower my risk” — a <b>conclusion</b> that comes straight from the words. But the chatter at the chavdi — “So the whole village has jaundice now!” or “Only boiled water is safe anywhere in India” — goes beyond what was announced. Exam questions are this drum announcement: you judge what is behind it and what follows from it, using only the words announced.',
      map: [
        ['The drum announcement', 'The statement or passage'],
        ['Why the sarpanch bothered to announce it', 'Implicit assumption: taken for granted, not written'],
        ['What a villager can safely take away', 'Conclusion: follows directly from the statement'],
        ['Exaggerated gossip at the chavdi', 'Invalid: extreme words, outside knowledge, goes beyond the text'],
      ],
    },
    concept: [
      'An <b>assumption</b> is something the speaker must believe for the statement to make sense, but has not said. Test it by negation: if the assumption were false, would the statement become pointless? (If people never listen to announcements, the drum is useless — so “people listen” is an assumption.) An advertisement assumes people want what it promises; an appeal assumes people can act on it.',
      'A <b>conclusion</b> must follow from the statement alone, using no outside facts. Reject conclusions with extreme words (only, all, always, never, definitely) unless the statement itself uses them. An <b>inference</b> from a passage is what can reasonably be deduced from the facts given; options that add new facts, predict the future, or generalise beyond the passage are wrong.',
      'Work option by option, and keep your own opinions out. Something can be true in real life and still not follow from the statement. Answer choices are usually: only I, only II, both, neither (sometimes either). Decide I and II separately before looking at the options.',
    ],
    keyPoints: [
      'Assumption = unstated belief the statement depends on',
      'Negation test: if the assumption is false, does the statement lose its point?',
      'Conclusion = must follow from the given words only',
      'Extreme words (only, all, never, always, best) usually make a choice wrong',
      'Advice/appeal assumes the advice is useful and people can follow it',
      'Inference questions: no new facts, no future predictions, no generalising',
      'Real-world truth is irrelevant — only the statement matters',
    ],
    example: {
      q: 'Statement: The gram panchayat announced, “Boil drinking water during the monsoon to avoid jaundice.” Assumptions: I. People pay attention to the panchayat’s announcements. II. Boiling water helps reduce the risk of jaundice.',
      steps: [
        'Assumption I: if nobody listened, the announcement would be pointless. So I is implicit.',
        'Assumption II: if boiling made no difference, the panchayat would not ask for it. So II is implicit.',
        'Neither assumption uses an extreme word or an outside fact.',
      ],
      answer: 'Both I and II are implicit.',
    },
    shortcut:
      'For every assumption or conclusion, quickly underline any extreme word (only, all, never, always, best, definitely). If the statement does not contain that strength, mark the option invalid at once — this settles about half the choices in seconds.',
    traps: [
      'Choosing an option because it is true in real life. The only question is whether it follows from (or is assumed by) the statement.',
      'Treating a restatement as an assumption. An assumption is unsaid; something already written in the statement is not an assumption.',
    ],
    practice: [
      {
        q: 'Statement: “Drink Shakti tea — stay fresh and full of energy all day!” — an advertisement. Assumptions: I. People want to feel fresh and energetic. II. No other tea gives any energy at all.',
        options: ['Only II is implicit', 'Only I is implicit', 'Both I and II are implicit', 'Neither I nor II is implicit'],
        answer: 1,
        why: 'An ad promising energy assumes people want energy (I). It does not say or need that other teas give none — the word “no other … at all” is too extreme (II).',
      },
      {
        q: 'Statement: The college has made 75% attendance compulsory for appearing in the final examination. Conclusions: I. Students with less than 75% attendance will not be allowed to appear for the final examination. II. Every student with 75% or more attendance will pass the final examination.',
        options: ['Only II follows', 'Neither I nor II follows', 'Both I and II follow', 'Only I follows'],
        answer: 3,
        why: 'I is the direct meaning of “compulsory for appearing”. II goes beyond the statement: 75% attendance only lets a student sit the exam; it says nothing about passing (and “every” is an extreme word). Only I follows.',
      },
      {
        q: 'Passage: In Shivapur village, most farmers grow soybean in the kharif season. This year the monsoon arrived three weeks late. Because of the delay, the first sowing failed for many farmers, and they had to buy fresh seed and sow a second time. Which of the following can be inferred from the passage?',
        options: [
          'The late monsoon raised farming costs for many farmers in Shivapur.',
          'Soybean is grown only in Shivapur.',
          'Every farmer in Shivapur lost the entire crop.',
          'Shivapur farmers will stop growing soybean next year.',
        ],
        answer: 0,
        why: 'The passage says the late monsoon made many farmers buy fresh seed and sow again — an extra expense they would not otherwise have had, so their costs rose. The other options use extreme words (only, every) or predict the future.',
      },
      {
        q: 'Statement: The municipal corporation has added 50 new buses on the city’s busiest routes. Assumptions: I. The new buses will completely end traffic jams in the city. II. All people in the city travel only by bus.',
        options: ['Only I is implicit', 'Only II is implicit', 'Neither I nor II is implicit', 'Both I and II are implicit'],
        answer: 2,
        why: 'Adding buses assumes there is demand on those routes, not that jams will “completely” end (I) or that “all” people travel “only” by bus (II). Both are too extreme.',
      },
    ],
  },

  // ───────────────────────────────────────────── 11
  {
    id: 'analogy-classification',
    title: 'Analogy &amp; Classification (Odd One Out)',
    syllabus: 'Verbal reasoning',
    analogy: {
      title: 'The shelves of a kirana shop',
      oneLine: 'Find the shelf label (the common property); the item that does not belong on that shelf is the odd one out.',
      story:
        'Walk into your neighbourhood kirana shop. Kaka has arranged the shelves by a rule: grains on one rack (rice, wheat, jowar, bajra), oils on another, soaps and detergents far away from food. If someone keeps a packet of washing powder next to the jowar, you notice at once — it breaks the shelf rule. Kaka also sells by a pattern: sugar by the kilo, oil by the litre, eggs by the dozen. Ask “Sugar is to kilo as oil is to what?” and the answer is litre, because the <i>relationship</i> (item → unit it is sold in) must be the same on both sides. Analogy and odd-one-out questions test whether you can read Kaka’s rule.',
      map: [
        ['The label on a shelf', 'The common property shared by the group'],
        ['Washing powder kept next to jowar', 'The odd one out: breaks the common property'],
        ['Sugar → kilo, oil → litre', 'Analogy A : B :: C : D — same relationship on both sides'],
        ['Checking every item on the rack', 'Test your rule on every option before choosing'],
      ],
    },
    concept: [
      'In an <b>analogy</b> (A : B :: C : ?), first say the relationship between A and B in one sentence: “A pen is used to write.” Then apply exactly that sentence to C: “A knife is used to … cut.” Common relationships: tool–use, worker–workplace, item–unit, part–whole, cause–effect, synonym, antonym, animal–young one, and number rules (n², n³, n² + 1, ×2 + 1).',
      'In <b>classification</b> (odd one out), find the property that all but one option share. For numbers, test: prime or not, even/odd, perfect square or cube, divisible by some number, sum of digits. For letter groups, convert to positions and check gaps (consecutive letters, +2 gaps, vowels). For words, check category (grains, fruits, instruments), and then finer details if two candidates appear.',
      'If more than one rule seems to work, pick the <b>most specific and complete</b> one — the rule that makes exactly one option stand out. A rule that makes two options odd is the wrong rule.',
    ],
    keyPoints: [
      'Say the A–B relationship as a sentence, then reuse the sentence for C',
      'Common word relations: tool–use, worker–workplace, item–unit, part–whole, synonym/antonym',
      'Number analogies: test n², n³, n² ± 1, n³ ± n, n × (n + 1)',
      'Number odd-one-out: prime, square, cube, even/odd, digit sum',
      'Letter groups: convert to positions and compare gaps',
      'A good rule leaves exactly one item out',
      'Keep the order: A : B :: C : D, not B : A',
    ],
    example: {
      q: 'Find the odd one out: 27, 64, 125, 144, 216',
      steps: [
        'Look for a shared property. 27 = 3³, 64 = 4³, 125 = 5³, 216 = 6³ — all cubes.',
        '144 = 12² is a perfect square but not a perfect cube.',
        'Check that the rule makes only one item odd: yes, only 144 fails “perfect cube”.',
      ],
      answer: '144',
    },
    shortcut:
      'For number analogies, look at the size jump: if 7 becomes about 49, test 7² ± something; if it becomes about 343, test 7³. Then confirm with the second pair before choosing.',
    traps: [
      'Reversing the relationship: “Pen : Write” is object → use. Do not answer with the use → object pair.',
      'Choosing a rule that makes two options odd. Go back and look for a more specific property.',
    ],
    practice: [
      {
        q: 'Pen : Write :: Knife : ?',
        options: ['Sharp', 'Cut', 'Kitchen', 'Steel'],
        answer: 1,
        why: 'A pen is used to write; a knife is used to cut. The relationship is object → its use.',
      },
      {
        q: '7 : 50 :: 9 : ?',
        options: ['81', '80', '82', '90'],
        answer: 2,
        why: '7² + 1 = 50, so 9² + 1 = 82.',
      },
      {
        q: 'Find the odd one out: BCD, FGH, JKL, MNP',
        options: ['BCD', 'FGH', 'JKL', 'MNP'],
        answer: 3,
        why: 'BCD, FGH and JKL are three consecutive letters. In MNP, O is skipped between N and P.',
      },
      {
        q: 'Find the odd one out: Jowar, Bajra, Wheat, Cotton',
        options: ['Cotton', 'Jowar', 'Wheat', 'Bajra'],
        answer: 0,
        why: 'Jowar, bajra and wheat are food grains (cereals). Cotton is a fibre crop.',
      },
    ],
  },

  // ───────────────────────────────────────────── 12
  {
    id: 'calendar-clock',
    title: 'Calendars &amp; Clocks',
    syllabus: 'Analytical puzzles',
    analogy: {
      title: 'The weekly village bazaar',
      oneLine: 'Full weeks bring you back to the same bazaar day; only the leftover days move the weekday.',
      story:
        'In many Maharashtra villages the weekly bazaar (athavdi bazaar) comes on a fixed day, say Tuesday. If today is bazaar day, then 7 days later, 14 days later, 70 days later — it is Tuesday again. Only the <i>leftover</i> days after full weeks change the weekday: 10 days later is 1 full week + 3 extra days, so it is Friday. A normal year is 52 weeks + 1 extra day, so next year the bazaar date falls one weekday later; a leap year has 2 extra days. Clocks work like two bullock carts going round the same circular track at a sugarcane crusher: the minute-hand cart runs 6° per minute, the hour-hand cart only 0.5° per minute, so the fast one gains 5.5° every minute.',
      map: [
        ['Bazaar day returns every 7 days', 'Weekdays repeat in a cycle of 7'],
        ['Leftover days after full weeks', 'Odd days = number of days mod 7'],
        ['Normal year = 52 weeks + 1 day; leap year + 2 days', 'Year shift: +1 weekday (ordinary), +2 (leap)'],
        ['Fast cart gains on the slow cart every minute', 'Minute hand gains 5.5° per minute on the hour hand'],
        ['Fast cart catching the slow cart', 'Hands coinciding: M = 60H/11 minutes past H'],
      ],
    },
    concept: [
      '<b>Odd days</b> are the days left over after removing complete weeks. Ordinary year = 1 odd day, leap year = 2 odd days. 100 years = 5 odd days, 200 years = 3, 300 years = 1, 400 years = 0. Months: 31-day month = 3 odd days, 30-day = 2, February = 0 (or 1 in a leap year). Count the total odd days up to the date, take mod 7, and read 0 = Sunday, 1 = Monday … 6 = Saturday.',
      'A year is a <b>leap year</b> if divisible by 4, except century years, which must be divisible by 400 (2000 yes, 1900 no). When moving from a date in one year to the same date next year, the day shifts by 2 only if 29 February lies <i>in between</i>. Two years have the same calendar when they start on the same weekday and are both leap or both ordinary.',
      '<b>Clocks:</b> the minute hand moves 6° per minute and the hour hand 0.5° per minute. The angle between them at H:M is <b>|30H − 5.5M|</b>; if this is over 180°, subtract from 360°. The hands coincide at 60H/11 minutes past H, and are together 22 times a day. Mirror-image times are covered in the non-verbal topic.',
    ],
    keyPoints: [
      'Odd day code: 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat',
      'Ordinary year = 1 odd day; leap year = 2 odd days',
      '100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0 odd days',
      'Leap year: ÷ 4, but century years must be ÷ 400',
      'Angle = |30H − 5.5M| (use 360 − angle if &gt; 180°)',
      'Hands coincide at 60H/11 min past H; 22 times a day',
      'Hands at right angles 44 times a day; in a straight line (0° or 180°) 44 times a day',
    ],
    example: {
      q: 'What day of the week was 15 August 1947?',
      steps: [
        '15 Aug 1947 = 1946 complete years + Jan 1 to Aug 15 of 1947.',
        '1600 years → 0 odd days. 300 years (1601–1900) → 1 odd day.',
        '46 years (1901–1946) have 11 leap years and 35 ordinary: 11 × 2 + 35 = 57 → 57 mod 7 = 1 odd day.',
        '1947 up to 15 Aug: Jan 3 + Feb 0 + Mar 3 + Apr 2 + May 3 + Jun 2 + Jul 3 + 15 days (1) = 17 → 3 odd days.',
        'Total = 0 + 1 + 1 + 3 = 5 → Friday.',
      ],
      answer: 'Friday',
    },
    shortcut:
      'For “same date next year” questions, do not count days. Just ask: does 29 February fall between the two dates? Yes → +2 weekdays; no → +1 weekday.',
    traps: [
      'Treating 1900 or 2100 as leap years. Century years are leap only if divisible by 400.',
      'Adding 2 days for a leap year when the period does not actually include 29 February (e.g. 1 March 2024 to 1 March 2025 is only +1).',
    ],
    practice: [
      {
        q: 'If 26 January 2024 was a Friday, what day of the week was 26 January 2025?',
        options: ['Saturday', 'Sunday', 'Monday', 'Friday'],
        answer: 1,
        why: 'The period includes 29 February 2024, so it has 366 days = 52 weeks + 2 days. Friday + 2 = Sunday.',
      },
      {
        q: 'Which of the following years will have the same calendar as 2023?',
        options: ['2029', '2033', '2034', '2031'],
        answer: 2,
        why: 'Odd days from 2023: 2023 (1), 2024 (2), 2025 (1) … adding year by year, the total first reaches a multiple of 7 at the end of 2033 (1+2+1+1+1+2+1+1+1+2+1 = 14). So 2034 starts on the same weekday as 2023, and both are ordinary years.',
      },
      {
        q: 'What is the angle between the hour hand and the minute hand of a clock at 3:40?',
        options: ['130°', '120°', '140°', '135°'],
        answer: 0,
        why: 'Angle = |30 × 3 − 5.5 × 40| = |90 − 220| = 130°.',
      },
      {
        q: 'At what time between 4 and 5 o’clock are the hands of a clock together?',
        options: ['20 min past 4', '22 min past 4', '21 3/11 min past 4', '21 9/11 min past 4'],
        answer: 3,
        why: 'Hands coincide at 60H/11 = 240/11 = 21 9/11 minutes past 4.',
      },
    ],
  },

  // ───────────────────────────────────────────── 13
  {
    id: 'venn-data-sufficiency',
    title: 'Venn Diagrams &amp; Data Sufficiency',
    syllabus: 'Logical deduction',
    analogy: {
      title: 'Sports-day team lists: kabaddi and kho-kho',
      oneLine: 'Students in both teams sit in the overlap and must be counted once; and the coach only asks whether the note is enough, not for the full answer.',
      story:
        'On school sports day, the PT sir has two lists: the kabaddi team and the kho-kho team. Some students play both. If he simply adds the two lists to order T-shirts, the double players get two T-shirts — so he subtracts the students who appear on both lists. Draw two overlapping circles and it is obvious: only-kabaddi, both, only-kho-kho, and outside the circles are students who play neither. Then the headmaster asks, “Sir, can you tell me how many play only kho-kho?” Sir looks at the note in his hand and says “Yes, this note is enough” or “No, I need the other list too” — he does not need to actually work out the number. That is data sufficiency.',
      map: [
        ['Kabaddi list and kho-kho list', 'Two circles in a Venn diagram'],
        ['Students on both lists', 'The overlap (intersection), counted once'],
        ['T-shirts needed = kabaddi + kho-kho − both', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'],
        ['Students playing neither game', 'Region outside both circles = Total − n(A ∪ B)'],
        ['“Is this note enough to answer?”', 'Data sufficiency: decide if the data is enough, do not finish the sum'],
      ],
    },
    concept: [
      '<b>Venn counting:</b> for two groups, n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Only A = n(A) − n(A ∩ B). Neither = Total − n(A ∪ B). For three groups, fill the diagram from the centre (all three) outward, subtracting as you go. <b>Venn relationships</b> ask which picture fits three words: if one class is fully part of another (mothers are women), draw it inside; if two classes can share members (women and doctors), draw them overlapping; if they cannot (men and women), keep them apart.',
      '<b>Data sufficiency:</b> a question is followed by two statements. Check statement I <i>alone</i>, then statement II <i>alone</i>, and only if both fail, check them <i>together</i>. You do not need the final value — only whether a single, definite answer is possible. A yes/no question is sufficient if the data always gives the same answer (always yes, or always no).',
      'Standard answers: I alone is sufficient; II alone is sufficient; each alone is sufficient; both together are needed; even both together are not sufficient. Never carry information from statement I into your check of statement II alone.',
    ],
    keyPoints: [
      'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
      'Only A = n(A) − n(A ∩ B); Neither = Total − n(A ∪ B)',
      'Three sets: n(A ∪ B ∪ C) = A + B + C − (AB + BC + CA) + ABC',
      'Subset (mothers ⊂ women): circle inside; possible overlap: intersecting circles; impossible overlap: separate circles',
      'DS order: I alone → II alone → together',
      'Sufficient = exactly one definite answer (for yes/no: a definite yes or a definite no)',
      'Do not compute the final value in DS — just decide if you could',
    ],
    example: {
      q: 'In a class of 50 students, 30 play kabaddi, 25 play kho-kho and 10 play both. How many students play neither game?',
      steps: [
        'Students who play at least one game = 30 + 25 − 10 = 45.',
        'Neither = total − at least one = 50 − 45 = 5.',
        'Check with regions: only kabaddi 20, both 10, only kho-kho 15, neither 5 → 20 + 10 + 15 + 5 = 50 ✓.',
      ],
      answer: '5 students',
    },
    shortcut:
      'In DS, if two statements each give one equation in the same two unknowns, “together” is usually enough — but first check that the equations are not the same equation written twice.',
    traps: [
      'Adding the two groups without subtracting the overlap, so the “both” students are counted twice.',
      'In DS, using a fact from statement I while judging statement II “alone”.',
    ],
    practice: [
      {
        q: 'In a group of 60 people, 35 speak Marathi, 30 speak Hindi and 12 speak both. How many speak only Hindi?',
        options: ['18', '23', '30', '12'],
        answer: 0,
        why: 'Only Hindi = Hindi − both = 30 − 12 = 18.',
      },
      {
        q: 'Which description correctly shows the relationship between Mothers, Women and Doctors?',
        options: [
          'Three separate circles',
          'Mothers inside Women; Doctors overlapping both',
          'Women inside Mothers; Doctors separate',
          'Doctors inside Women; Mothers separate',
        ],
        answer: 1,
        why: 'Every mother is a woman, so Mothers lies inside Women. Some doctors are women and some are mothers, but not all, so Doctors overlaps both.',
      },
      {
        q: 'What is Rahul’s age? I. Rahul is 4 years older than Sohan. II. Sohan’s age is half of Rahul’s age.',
        options: [
          'Statement I alone is sufficient, but II alone is not',
          'Statement II alone is sufficient, but I alone is not',
          'Each statement alone is sufficient',
          'Both statements together are needed',
        ],
        answer: 3,
        why: 'I alone: R = S + 4 (two unknowns). II alone: S = R/2 (two unknowns). Together: R = R/2 + 4, so R = 8. Both are needed.',
      },
      {
        q: 'x is a positive integer. Is x even? I. x² is even. II. x + 5 is odd.',
        options: [
          'Statement I alone is sufficient, but II alone is not',
          'Statement II alone is sufficient, but I alone is not',
          'Each statement alone is sufficient',
          'Both statements together are needed',
        ],
        answer: 2,
        why: 'I: if x² is even, x must be even (an odd number squared is odd). II: if x + 5 is odd, x must be even. Each alone gives a definite “yes”.',
      },
    ],
  },

  // ───────────────────────────────────────────── 14
  {
    id: 'non-verbal',
    title: 'Non-verbal — Mirror/Water Images, Paper Folding, Dice &amp; Figure Series',
    syllabus: 'Non-verbal reasoning',
    analogy: {
      title: 'The barber shop mirror and the village pond',
      oneLine: 'A wall mirror flips left and right; a pond flips top and bottom; nothing else changes.',
      story:
        'Sit in the chair at the barber shop and look at the big mirror. The clock on the wall behind you looks strange: the numbers are reversed left-to-right, and when the real time is 4:20 the mirror seems to show 7:40. Your left hand appears on the right, but your head is still on top. Now look at the temple reflected in the village pond: the top of the shikhar is at the bottom of the water, but left and right are unchanged. Fold a paper to cut a kite or a rangoli stencil and every cut you make appears on both sides of the fold when you open it. And in a game of Ludo, the dice never shows two opposite faces together. Non-verbal reasoning is just these everyday flips, folds and rolls, done in your head.',
      map: [
        ['Barber shop wall mirror', 'Mirror image: left ↔ right, top and bottom unchanged'],
        ['Clock seen in the barber’s mirror', 'Mirror time = 11:60 − actual time (12:00 − time)'],
        ['Temple reflected in the pond', 'Water image: top ↔ bottom, left and right unchanged'],
        ['Cutting a folded rangoli stencil', 'Paper folding: every cut is copied across each fold'],
        ['Ludo dice never shows two opposite faces together', 'Faces seen together are adjacent; the missing one is opposite'],
      ],
    },
    concept: [
      '<b>Mirror image</b> (mirror placed to the left or right): left and right swap, the order of letters in a word reverses, and each letter is flipped. Letters that look the same in a vertical mirror: A, H, I, M, O, T, U, V, W, X, Y. <b>Water image</b> (mirror below): top and bottom swap. Letters unchanged in water: B, C, D, E, H, I, K, O, X. For a clock, mirror time = 11:60 − actual time (if the time is after 11:00, use 23:60 − time).',
      '<b>Paper folding:</b> each fold doubles the number of layers. A single punch through k layers makes k holes when unfolded (if the punch is not on a fold line). A cut on the folded edge opens into a shape that is symmetric about the fold — half a circle cut on a fold becomes a full circle.',
      '<b>Dice:</b> the three faces seen in one view are all adjacent to each other, so none of them is opposite another. Collect all faces adjacent to a number; the one left out is opposite it. On a standard dice, opposite faces add up to 7 (1–6, 2–5, 3–4). <b>Figure series:</b> look for a fixed rotation (45° or 90° clockwise), an element added or removed each step, or a shape moving one corner at a time.',
    ],
    keyPoints: [
      'Mirror (vertical): left ↔ right; water (horizontal): top ↔ bottom',
      'Mirror clock time = 11:60 − actual time',
      'Vertical-mirror-symmetric letters: A H I M O T U V W X Y',
      'Water-symmetric letters: B C D E H I K O X',
      'n folds → 2ⁿ layers → 2ⁿ holes from one punch (not on a fold)',
      'Faces seen together on a dice are adjacent, never opposite',
      'Standard dice: opposite faces sum to 7',
      'Figure series: check rotation angle and direction first',
    ],
    example: {
      q: 'A wall clock shows 4:20. What time does its image in a plane mirror show?',
      steps: [
        'For a mirror image of a clock, subtract the time from 11:60 (which is the same as 12:00).',
        '11:60 − 4:20 → hours 11 − 4 = 7, minutes 60 − 20 = 40.',
        'Check: real 4:20 has the hour hand just past 4 (right side); the mirror moves it to between 7 and 8 (left side), and the minute hand from 4 to 8 — that is 7:40.',
      ],
      answer: '7:40',
    },
    shortcut:
      'For mirror clocks, just make the two times add up to 12:00. Real 2:35 + mirror ? = 12:00 → mirror 9:25. You can verify any option in two seconds this way.',
    traps: [
      'Mixing up mirror and water images: a mirror on the side flips left–right, water below flips top–bottom.',
      'In dice questions, assuming a standard dice (opposite faces sum to 7) when the views show it is not standard. Always use the views first.',
    ],
    practice: [
      {
        q: 'A mirror is held vertically to the right of each word. Which word looks exactly the same in the mirror?',
        options: ['DAD', 'NUN', 'MOM', 'POP'],
        answer: 2,
        why: 'A mirror reverses the order of letters and flips each letter. MOM reads the same backwards, and M and O look the same when flipped. D, N and P change shape in a mirror.',
      },
      {
        q: 'Two views of the same dice: in View 1 the visible faces are 2, 3 and 4; in View 2 the visible faces are 2, 5 and 6. Which number is opposite 2?',
        options: ['1', '3', '5', '6'],
        answer: 0,
        why: 'Faces seen together with 2 are adjacent to it: 3, 4, 5 and 6. A face has only four neighbours, so the remaining number, 1, is opposite 2.',
      },
      {
        q: 'A square sheet of paper is folded once along its vertical centre line. A semicircle is cut out from the middle of the folded edge. What will you see when the paper is opened?',
        options: [
          'A semicircular notch on the right edge',
          'A full circular hole in the centre of the sheet',
          'Two separate semicircular holes',
          'Two full circular holes',
        ],
        answer: 1,
        why: 'The cut is on the fold, so its mirror copy joins it on the other side of the fold line. Half a circle on the fold opens into one full circle at the centre.',
      },
      {
        q: 'An arrow changes in a fixed way: ↑, ↗, →, ↘, ↓, ? What comes next?',
        options: ['←', '↖', '↓', '↙'],
        answer: 3,
        why: 'The arrow turns 45° clockwise each step: up, up-right, right, down-right, down, then down-left (↙).',
      },
    ],
  },
];

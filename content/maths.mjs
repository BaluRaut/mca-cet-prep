export default [
  // ===================================================================
  // ALGEBRA
  // ===================================================================
  {
    id: 'algebra-basics',
    title: 'Basic Algebra: Expansion, Factorisation, Indices',
    syllabus: 'Algebra',
    analogy: {
      title: 'Making a square farm plot bigger',
      oneLine: '(a + b)² is a bigger square plot: the old plot, two new strips and one small corner piece.',
      story:
        'Your father owns a square plot of land, <b>a</b> metres on each side. He buys an extra strip <b>b</b> metres wide along the east side and another along the north side, so the plot is still a square, now of side <b>a + b</b>. Walk the new plot and count the land: the old square (a²), two long strips of a × b each, and one small square piece in the corner where the strips meet (b × b). So (a + b)² = a² + 2ab + b². If you write only a² + b², you have forgotten the two strips you paid for.<br><br><b>Factorisation</b> is the reverse job. The 7/12 land record shows only the total area, and you must find the length and the width that multiply to give it. Expansion breaks the plot into pieces; factorisation puts the pieces back into one rectangle.',
      map: [
        ['Old square plot of side a', 'a²'],
        ['Two new strips along the east and north sides', '2ab'],
        ['Small corner piece where the two strips meet', 'b²'],
        ['Total area of the enlarged square plot', '(a + b)² = a² + 2ab + b²'],
        ['Finding length × width from the total area on the land record', 'Factorisation'],
      ],
    },
    concept: [
      '<b>Expansion</b> means multiplying out brackets: every term of the first bracket multiplies every term of the second. The standard identities below are just expansions done once and remembered, so you do not redo them in the exam.',
      '<b>Factorisation</b> is the reverse: writing an expression as a product. Always try in this order: (1) take out the common factor, (2) look for an identity such as a² − b², (3) for a quadratic, split the middle term.',
      '<b>Indices</b> (powers) follow a few laws that all come from “aⁿ means a multiplied n times”. In CET, most index questions become easy once every number is written as a power of the same base (for example 4 = 2², 8 = 2³, 27 = 3³).',
    ],
    keyPoints: [
      '(a ± b)² = a² ± 2ab + b²; a² − b² = (a − b)(a + b)',
      '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³ = a³ ± b³ ± 3ab(a ± b)',
      'a³ + b³ = (a + b)(a² − ab + b²); a³ − b³ = (a − b)(a² + ab + b²)',
      '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)',
      'If a + b + c = 0, then a³ + b³ + c³ = 3abc',
      'aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ⁿ = aⁿbⁿ',
      'a⁰ = 1 (a ≠ 0); a⁻ⁿ = 1/aⁿ; a<sup>p/q</sup> = (q-th root of a)<sup>p</sup>',
      'x + 1/x = k ⇒ x² + 1/x² = k² − 2 and x³ + 1/x³ = k³ − 3k',
    ],
    example: {
      q: 'If x + 1/x = 5, find x³ + 1/x³.',
      steps: [
        'Use (a + b)³ = a³ + b³ + 3ab(a + b) with a = x, b = 1/x, so ab = 1.',
        '(x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x), so 125 = x³ + 1/x³ + 15.',
        'x³ + 1/x³ = 125 − 15.',
      ],
      answer: '110',
    },
    shortcut:
      'When the options contain algebraic expressions, put a small number such as x = 1 or x = 2 into the question and into each option. The option that gives the same number is the answer. This checks a factorisation in five seconds.',
    traps: [
      '(a + b)² is not a² + b². The middle term 2ab is the most commonly forgotten piece.',
      'aᵐ + aⁿ cannot be combined into one power. Only multiplication and division of the same base add or subtract the powers.',
      'a⁻ⁿ is not negative: 2⁻³ = 1/8, a positive number.',
    ],
    practice: [
      {
        q: 'If a + b = 7 and ab = 10, then a² + b² equals:',
        options: ['49', '29', '39', '69'],
        answer: 1,
        why: 'a² + b² = (a + b)² − 2ab = 49 − 20 = 29.',
      },
      {
        q: 'If 2<sup>x + 3</sup> = 32<sup>x − 1</sup>, then x equals:',
        options: ['1', '3', '4', '2'],
        answer: 3,
        why: '32 = 2⁵, so x + 3 = 5(x − 1) = 5x − 5, giving 4x = 8 and x = 2.',
      },
      {
        q: 'One factor of x³ − 8 is:',
        options: ['x² + 2x + 4', 'x² − 2x + 4', 'x + 2', 'x² + 4'],
        answer: 0,
        why: 'x³ − 2³ = (x − 2)(x² + 2x + 4), using a³ − b³ = (a − b)(a² + ab + b²).',
      },
      {
        q: 'The value of 27<sup>2/3</sup> + 16<sup>3/4</sup> − 32<sup>1/5</sup> is:',
        options: ['17', '13', '15', '19'],
        answer: 2,
        why: '27<sup>2/3</sup> = 3² = 9, 16<sup>3/4</sup> = 2³ = 8, 32<sup>1/5</sup> = 2. So 9 + 8 − 2 = 15.',
      },
    ],
  },
  {
    id: 'quadratic-equations',
    title: 'Quadratic Equations',
    syllabus: 'Algebra',
    analogy: {
      title: 'A cricket ball thrown upward',
      oneLine: 'The roots are the two moments the ball is at ground level.',
      story:
        'Throw a cricket ball straight up. Its height rises, stops for an instant at the top, then falls back. Plot height against time and you get a curve shaped like an arch: a parabola. The equation <b>ax² + bx + c = 0</b> asks one question: <i>at what times is the height zero?</i> Usually two moments (the throw and the catch), sometimes one (the ball just touches the ground), and sometimes none (you threw it from a rooftop terrace and it never comes down to road level in your graph). The discriminant is how you tell which case you are in without solving.',
      map: [
        ['Height of the ball at time t', 'f(x) = ax² + bx + c'],
        ['Moments the ball is at ground level', 'Roots of ax² + bx + c = 0'],
        ['Ball touches ground exactly once', 'D = 0, equal roots'],
        ['Ball never reaches ground level', 'D &lt; 0, no real roots'],
        ['Highest point of the throw', 'Vertex at x = −b/2a'],
      ],
    },
    concept: [
      'A quadratic equation has the form <b>ax² + bx + c = 0</b> with a ≠ 0. It has exactly two roots (real or complex), found by factorising or by the quadratic formula.',
      'The <b>discriminant</b> D = b² − 4ac decides the nature of the roots before you solve anything. Many CET questions ask only for the nature of the roots, or for the sum and product, so you can skip solving entirely.',
    ],
    keyPoints: [
      'Roots: x = (−b ± √D) / 2a, where D = b² − 4ac',
      'D &gt; 0: two distinct real roots; D = 0: two equal real roots; D &lt; 0: complex conjugate roots',
      'D a perfect square (with a, b, c rational): roots are rational',
      'Sum of roots α + β = −b/a; product αβ = c/a',
      'Equation from roots: x² − (sum)x + (product) = 0',
      'α² + β² = (α + β)² − 2αβ',
    ],
    example: {
      q: 'If α and β are roots of x² − 5x + 6 = 0, find α² + β².',
      steps: [
        'Sum α + β = −(−5)/1 = 5. Product αβ = 6/1 = 6.',
        'α² + β² = (α + β)² − 2αβ = 25 − 12.',
      ],
      answer: '13',
    },
    shortcut:
      'For “find α² + β²” or “1/α + 1/β” questions, never solve for the roots. Write the expression in terms of sum and product first: 1/α + 1/β = (α + β)/αβ.',
    traps: [
      'Sign of the sum: it is −b/a, not b/a. For x² − 5x + 6 the sum is +5.',
      'If the equation is not in standard form (e.g. 2x² = 3x − 1), move everything to one side before reading a, b, c.',
    ],
    practice: [
      {
        q: 'The roots of 2x² − 4x + 5 = 0 are:',
        options: ['Real and equal', 'Real and distinct', 'Complex (not real)', 'Rational and distinct'],
        answer: 2,
        why: 'D = 16 − 40 = −24 &lt; 0, so the roots are complex conjugates.',
      },
      {
        q: 'The quadratic equation whose roots are 3 and −2 is:',
        options: ['x² + x − 6 = 0', 'x² − x − 6 = 0', 'x² − x + 6 = 0', 'x² + 5x − 6 = 0'],
        answer: 1,
        why: 'Sum = 1, product = −6, so x² − (1)x + (−6) = 0.',
      },
      {
        q: 'For what value of k does x² + kx + 9 = 0 have equal roots (k &gt; 0)?',
        options: ['3', '9', '18', '6'],
        answer: 3,
        why: 'Equal roots need D = 0: k² − 36 = 0, so k = 6 (taking k &gt; 0).',
      },
      {
        q: 'If one root of x² − 7x + k = 0 is 2, then the other root and k are:',
        options: ['5 and k = 10', '5 and k = −10', '9 and k = 18', '−5 and k = −10'],
        answer: 0,
        why: 'Sum of roots = 7, so the other root is 7 − 2 = 5. Product = k = 2 × 5 = 10.',
      },
    ],
  },
  {
    id: 'logarithms',
    title: 'Logarithms',
    syllabus: 'Algebra',
    analogy: {
      title: 'A savings scheme that doubles your money',
      oneLine: 'A logarithm counts how many times you multiplied by the base, like counting how many doubling periods your savings needed.',
      story:
        'Aai puts ₹1,000 in a post office scheme that <b>doubles</b> the money every period. After one period ₹2,000, after two ₹4,000, after three ₹8,000. Now ask the question backwards: <i>the money became 8 times bigger; how many periods did that take?</i> The answer, 3, is exactly log₂ 8. A logarithm does not ask “what is the answer of the multiplication”; it asks “<b>how many times</b> did we multiply by the base?”<br><br>This explains the laws. Wait 3 periods (money × 8) and then 2 more periods (money × 4): the money grows 8 × 4 = 32 times, but the periods simply add, 3 + 2 = 5. Multiplying growths means adding counts, which is log(xy) = log x + log y. And growth of 8 × 8 × 8 = 8³ needs 3 × 3 = 9 periods, which is log(8³) = 3 log 8.',
      map: [
        ['Money doubles every period', 'Base 2 (the number we keep multiplying by)'],
        ['Money became 8 times bigger', 'The number, 8'],
        ['Number of periods it took (3)', 'log₂ 8 = 3, because 2³ = 8'],
        ['3 periods then 2 more: growth 8 × 4, periods 3 + 2', 'log(xy) = log x + log y'],
        ['Growth of 8³ takes 3 × (periods for 8)', 'log(xⁿ) = n log x'],
      ],
    },
    concept: [
      '<b>log<sub>a</sub> x = y</b> means exactly the same as <b>a<sup>y</sup> = x</b>. The logarithm is the power. It is defined only when x &gt; 0, a &gt; 0 and a ≠ 1. Base 10 logs are called common logs (written log x); base e logs are natural logs (ln x).',
      'Every log law is an index law in disguise: multiplying numbers adds their powers, so the log of a product is the sum of the logs. Most CET questions are solved by (1) writing every number as a power of a small base, (2) bringing all logs to one base using change of base, then (3) solving a simple linear or quadratic equation.',
      'After solving any log equation, put the answer back and check that every log has a positive argument. Values that make an argument zero or negative must be rejected.',
    ],
    keyPoints: [
      'log<sub>a</sub> x = y ⟺ aʸ = x (x &gt; 0, a &gt; 0, a ≠ 1)',
      'log<sub>a</sub> 1 = 0; log<sub>a</sub> a = 1; a<sup>log<sub>a</sub> x</sup> = x',
      'log(xy) = log x + log y; log(x/y) = log x − log y; log(xⁿ) = n log x',
      'Change of base: log<sub>a</sub> x = log<sub>b</sub> x / log<sub>b</sub> a; so log<sub>a</sub> b × log<sub>b</sub> a = 1',
      'log<sub>aᵐ</sub> xⁿ = (n/m) log<sub>a</sub> x',
      'log₁₀ 2 ≈ 0.3010, log₁₀ 3 ≈ 0.4771, log₁₀ 5 = 1 − log₁₀ 2 ≈ 0.6990',
      'Number of digits in N (N ≥ 1) = (integer part of log₁₀ N) + 1',
    ],
    example: {
      q: 'Given log₁₀ 2 = 0.3010, how many digits does 2⁵⁰ have?',
      steps: [
        'log₁₀(2⁵⁰) = 50 × log₁₀ 2 = 50 × 0.3010 = 15.05.',
        'The integer part (characteristic) is 15, so 2⁵⁰ lies between 10¹⁵ and 10¹⁶.',
        'Number of digits = 15 + 1.',
      ],
      answer: '16 digits',
    },
    shortcut:
      'Mixed bases? Convert all to the smallest base. For log₂ x + log₄ x + log₁₆ x = 7: log₄ x = ½ log₂ x and log₁₆ x = ¼ log₂ x, so (1 + ½ + ¼) log₂ x = 7, giving log₂ x = 4 and x = 16 in two lines.',
    traps: [
      'log(x + y) is NOT log x + log y. The sum law is for a product inside the log.',
      'log x / log y is NOT log(x/y). log x / log y = log<sub>y</sub> x (change of base).',
      'Forgetting to reject roots that make an argument ≤ 0, e.g. x = −5 in log₂(x + 3).',
    ],
    practice: [
      {
        q: 'The value of log₂ 64 − log₃ 81 + log₅ 1 is:',
        options: ['10', '3', '1', '2'],
        answer: 3,
        why: 'log₂ 64 = 6 (2⁶ = 64), log₃ 81 = 4 (3⁴ = 81), log₅ 1 = 0. So 6 − 4 + 0 = 2.',
      },
      {
        q: 'If log₁₀ 2 = 0.3010 and log₁₀ 3 = 0.4771, then log₁₀ 72 is:',
        options: ['1.8572', '1.7781', '1.9542', '1.6532'],
        answer: 0,
        why: '72 = 2³ × 3², so log 72 = 3(0.3010) + 2(0.4771) = 0.9030 + 0.9542 = 1.8572.',
      },
      {
        q: 'The solution of log₂(x + 3) + log₂(x − 3) = 4 is:',
        options: ['x = 5 or x = −5', 'x = −5', 'x = 5', 'x = 4'],
        answer: 2,
        why: 'log₂[(x + 3)(x − 3)] = 4 gives x² − 9 = 16, so x = ±5. x = −5 makes x + 3 negative, so only x = 5 is valid.',
      },
      {
        q: 'The value of log₃ 5 × log₂₅ 27 is:',
        options: ['2/3', '3/2', '5/3', '1'],
        answer: 1,
        why: 'log₂₅ 27 = (3/2) log₅ 3. So the product = (3/2) × log₃ 5 × log₅ 3 = (3/2) × 1 = 3/2.',
      },
    ],
  },
  {
    id: 'progressions',
    title: 'Progressions: AP, GP, HP',
    syllabus: 'Algebra',
    analogy: {
      title: 'Gokulashtami: the Dahi Handi pyramid and the WhatsApp invite',
      oneLine: 'AP adds the same number each step (pyramid tiers); GP multiplies by the same number each step (forwarded invites).',
      story:
        'On Gokulashtami your chawl’s govinda pathak builds a human pyramid. The bottom tier has 20 govindas and each tier above has 4 fewer: 20, 16, 12, 8, 4. The change is always the same <b>difference</b>, so the tiers form an AP. To count everyone quickly, pair the bottom tier with the top tier (20 + 4 = 24), the second with the fourth (16 + 8 = 24): every pair gives the same total, so the sum is (number of tiers ÷ 2) × (first + last).<br><br>Meanwhile the mandal’s invite goes out on WhatsApp. One person sends it to 3 people, each of them to 3 more: 1, 3, 9, 27… Here each step <b>multiplies</b> by the same ratio, so it is a GP, and it grows much faster than the pyramid. Finally, you ride your bike to the handi venue at 30 km/h and back at 20 km/h. Your average speed for the trip is the <b>harmonic mean</b> 24 km/h, not 25, because you spend more time on the slow ride.',
      map: [
        ['Each tier has 4 fewer govindas than the tier below', 'AP with common difference d = −4'],
        ['Pairing bottom tier with top tier (20 + 4 = 16 + 8)', 'Sₙ = (n/2)(first term + last term)'],
        ['Each person forwards the invite to 3 people', 'GP with common ratio r = 3'],
        ['Total phones reached after n rounds', 'Sₙ = a(rⁿ − 1)/(r − 1)'],
        ['Same distance there at 30 km/h and back at 20 km/h', 'Average speed = HM = 2ab/(a + b) = 24'],
      ],
    },
    concept: [
      'An <b>AP</b> (arithmetic progression) adds a fixed number d each time: a, a + d, a + 2d, … A <b>GP</b> (geometric progression) multiplies by a fixed ratio r each time: a, ar, ar², … An <b>HP</b> (harmonic progression) is a sequence whose <i>reciprocals</i> form an AP, such as 1, 1/2, 1/3, 1/4.',
      'There is no direct sum formula for an HP: always convert it to the AP of reciprocals, work there, and flip back at the end.',
      'For two positive numbers a and b, the three means satisfy <b>AM ≥ GM ≥ HM</b> (equal only when a = b), and GM² = AM × HM. CET loves questions that give two of these means and ask for the third.',
    ],
    keyPoints: [
      'AP: aₙ = a + (n − 1)d; Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l)',
      'GP: aₙ = arⁿ⁻¹; Sₙ = a(rⁿ − 1)/(r − 1), r ≠ 1; infinite sum = a/(1 − r) when |r| &lt; 1',
      'HP: reciprocals are in AP; nth term of HP = 1/(nth term of that AP)',
      'AM = (a + b)/2; GM = √(ab); HM = 2ab/(a + b)',
      'AM ≥ GM ≥ HM for positive numbers, and GM² = AM × HM',
      'Three terms in AP: a − d, a, a + d; three terms in GP: a/r, a, ar',
      'aₙ = Sₙ − Sₙ₋₁ (find any term from the sum formula)',
    ],
    example: {
      q: 'Find the sum of all two-digit numbers divisible by 7.',
      steps: [
        'The numbers are 14, 21, …, 98: an AP with a = 14, d = 7, l = 98.',
        'Number of terms: 98 = 14 + (n − 1)7, so n − 1 = 12 and n = 13.',
        'Sum = (13/2)(14 + 98) = (13/2)(112) = 13 × 56.',
      ],
      answer: '728',
    },
    shortcut:
      'For an AP with an odd number of terms, sum = (number of terms) × (middle term). If the 4th term of a 7-term AP is 10, the sum is 7 × 10 = 70 without finding a or d.',
    traps: [
      'The infinite GP sum a/(1 − r) works only when |r| &lt; 1. For r = 2 the sum does not exist.',
      'There is no “sum of HP” formula. Convert to the AP of reciprocals first.',
      'Counting terms: from 14 to 98 in steps of 7 is (98 − 14)/7 + 1 = 13 terms, not 12.',
    ],
    practice: [
      {
        q: 'The 10th term of the AP 3, 7, 11, … is:',
        options: ['39', '43', '40', '35'],
        answer: 0,
        why: 'a₁₀ = a + 9d = 3 + 9 × 4 = 39.',
      },
      {
        q: 'The sum of the infinite GP 6 + 2 + 2/3 + … is:',
        options: ['12', '8', '9', '18'],
        answer: 2,
        why: 'a = 6, r = 1/3, so sum = 6/(1 − 1/3) = 6/(2/3) = 9.',
      },
      {
        q: 'The AM of two positive numbers is 10 and their GM is 8. Their HM is:',
        options: ['6', '6.4', '7.2', '5.6'],
        answer: 1,
        why: 'GM² = AM × HM, so HM = 64/10 = 6.4.',
      },
      {
        q: 'The sum of the first n terms of an AP is 3n² + 2n. Its 5th term is:',
        options: ['85', '27', '31', '29'],
        answer: 3,
        why: 'a₅ = S₅ − S₄ = (75 + 10) − (48 + 8) = 85 − 56 = 29.',
      },
    ],
  },
  {
    id: 'binomial-theorem',
    title: 'Binomial Theorem',
    syllabus: 'Algebra',
    analogy: {
      title: 'Five friends ordering in the college canteen',
      oneLine: 'Each bracket is one friend choosing poha or upma; a coefficient counts how many ways the same order slip can happen.',
      story:
        'Five friends walk into the college canteen. Each one orders either <b>poha</b> (call it a) or <b>upma</b> (call it b). The waiter writes only the totals on the slip, for example “3 poha, 2 upma”. How many different ways can that slip happen? You just choose which 2 of the 5 friends took upma: ⁵C₂ = 10 ways.<br><br>That is exactly what happens when you expand (a + b)⁵ = (a + b)(a + b)(a + b)(a + b)(a + b). Each bracket is one friend who must pick a or b. The term a³b² is the slip “3 poha, 2 upma”, and its coefficient 10 is the number of ways to choose which brackets gave b. The possible slips go from 0 upma to 5 upma, so there are 6 terms, and the total number of ways the five friends can order is 2⁵ = 32, which is the sum of all the coefficients.',
      map: [
        ['Each friend chooses poha or upma', 'Each bracket (a + b) gives either a or b'],
        ['Order slip “3 poha, 2 upma”', 'The term a³b²'],
        ['Ways to choose which 2 friends took upma', 'Coefficient ⁵C₂ = 10'],
        ['Possible slips: 0, 1, 2, 3, 4 or 5 upma', 'n + 1 = 6 terms'],
        ['All possible ways the 5 friends can order', 'Sum of coefficients = 2⁵ = 32'],
      ],
    },
    concept: [
      'The binomial theorem gives the expansion of (a + b)ⁿ for a positive integer n without multiplying the bracket n times. The coefficients ⁿC₀, ⁿC₁, …, ⁿCₙ are the binomial coefficients (the rows of Pascal’s triangle).',
      'Almost every CET question uses the <b>general term</b> T<sub>r+1</sub> = ⁿCᵣ aⁿ⁻ʳ bʳ. For “coefficient of xᵏ” or “term independent of x”, write the general term, collect the power of x, set it equal to what you want and solve for r.',
      'To get the <b>sum of coefficients</b> of any expansion in x, simply put x = 1.',
    ],
    keyPoints: [
      '(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ (r = 0 to n); it has n + 1 terms',
      'General term: T<sub>r+1</sub> = ⁿCᵣ aⁿ⁻ʳ bʳ',
      'n even: one middle term T<sub>n/2 + 1</sub>; n odd: two middle terms T<sub>(n+1)/2</sub> and T<sub>(n+3)/2</sub>',
      'ⁿC₀ + ⁿC₁ + … + ⁿCₙ = 2ⁿ; sum of odd-position coefficients = sum of even-position = 2ⁿ⁻¹',
      'ⁿCᵣ = ⁿCₙ₋ᵣ; ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ',
      'In (a − b)ⁿ the general term has (−1)ʳ: signs alternate',
      'Term independent of x: put the power of x in T<sub>r+1</sub> equal to 0',
    ],
    example: {
      q: 'Find the term independent of x in (x² + 1/x)⁹.',
      steps: [
        'T<sub>r+1</sub> = ⁹Cᵣ (x²)⁹⁻ʳ (1/x)ʳ = ⁹Cᵣ x<sup>18 − 2r − r</sup> = ⁹Cᵣ x<sup>18 − 3r</sup>.',
        'Independent of x: 18 − 3r = 0, so r = 6. It is the 7th term.',
        'T₇ = ⁹C₆ = ⁹C₃ = (9 × 8 × 7)/(3 × 2 × 1).',
      ],
      answer: '84 (the 7th term)',
    },
    shortcut:
      'In (xᵖ + 1/x<sup>q</sup>)ⁿ the power of x in T<sub>r+1</sub> is p(n − r) − qr. Set it to the power you need and solve; no need to write the whole term first.',
    traps: [
      'The general term is T<sub>r+1</sub>, not Tᵣ. r = 6 means the 7th term.',
      '“Coefficient” includes the constants: in (1 + 3x)⁵ the coefficient of x² is ⁵C₂ × 3² = 90, not just ⁵C₂ = 10.',
      'Forgetting the (−1)ʳ sign in expansions like (2x − 1/x)ⁿ.',
    ],
    practice: [
      {
        q: 'The coefficient of x² in the expansion of (1 + 3x)⁵ is:',
        options: ['10', '30', '90', '270'],
        answer: 2,
        why: 'T₃ = ⁵C₂ (3x)² = 10 × 9x² = 90x².',
      },
      {
        q: 'The middle term in the expansion of (x − 2/x)⁸ is:',
        options: ['−1120', '70', '560', '1120'],
        answer: 3,
        why: 'n = 8, so the middle term is T₅ = ⁸C₄ x⁴ (−2/x)⁴ = 70 × 16 = 1120 (even power, so positive).',
      },
      {
        q: 'The sum of the coefficients in the expansion of (3x − 2)⁵ is:',
        options: ['32', '1', '243', '−1'],
        answer: 1,
        why: 'Put x = 1: (3 − 2)⁵ = 1.',
      },
      {
        q: 'The term independent of x in (2x − 1/x)⁶ is:',
        options: ['−160', '160', '20', '−20'],
        answer: 0,
        why: 'T<sub>r+1</sub> = ⁶Cᵣ (2x)⁶⁻ʳ (−1/x)ʳ has power 6 − 2r = 0, so r = 3: ⁶C₃ × 2³ × (−1)³ = 20 × 8 × (−1) = −160.',
      },
    ],
  },
  {
    id: 'permutations-combinations',
    title: 'Permutations and Combinations',
    syllabus: 'Algebra',
    analogy: {
      title: 'Planning the sweets at a wedding',
      oneLine: 'Choosing sweets for the menu card is a combination; deciding the order the servers bring them is a permutation.',
      story:
        'Your cousin’s wedding caterer can make 8 sweets. The family must <b>choose 3</b> for the menu card. Jalebi, gulab jamun and basundi is the same menu whichever way you list it, so order does not matter: that is a <b>combination</b>, ⁸C₃ = 56 menus.<br><br>Now the head cook must decide the <b>order</b> in which the servers bring those sweets to the pangat: first, second, third. Jalebi-then-basundi is different from basundi-then-jalebi, so order matters: that is a <b>permutation</b>, ⁸P₃ = 336. Notice 336 = 56 × 6, because each chosen menu can be served in 3! = 6 orders. Then the caterer also offers 4 rice dishes: picking one sweet <i>and</i> one rice multiplies the choices, while picking a sweet <i>or</i> a farsan as the single extra item adds them.',
      map: [
        ['Choosing 3 sweets out of 8 for the menu card', 'Combination ⁸C₃ = 56 (order does not matter)'],
        ['Deciding the serving order of the 3 sweets', 'Permutation ⁸P₃ = 336 (order matters)'],
        ['Each chosen menu can be served in 3! = 6 orders', 'ⁿPᵣ = ⁿCᵣ × r!'],
        ['One sweet AND one rice dish', 'Multiply the counts (fundamental principle)'],
        ['One sweet OR one farsan as the single extra item', 'Add the counts'],
      ],
    },
    concept: [
      'Ask one question first: <b>does order matter?</b> If yes (ranks, seating, digits of a number, passwords, arrangements of letters), it is a permutation. If no (committees, teams, selections, handshakes), it is a combination.',
      'The <b>fundamental principle of counting</b>: if one job can be done in m ways and, after that, another in n ways, both together can be done in m × n ways (AND = multiply). If you do either one job or the other, there are m + n ways (OR = add).',
      'When some objects are identical (like the four A’s in MAHARASHTRA), divide by the factorial of each repeat count, because swapping identical letters does not create a new word.',
    ],
    keyPoints: [
      'ⁿPᵣ = n!/(n − r)!; ⁿCᵣ = n!/[r!(n − r)!]; ⁿPᵣ = r! × ⁿCᵣ',
      'Arrangements of n objects with p alike, q alike, …: n!/(p! q! …)',
      'Circular arrangements of n different objects: (n − 1)!; necklace or garland (can be flipped): (n − 1)!/2',
      'ⁿCᵣ = ⁿCₙ₋ᵣ; if ⁿCₓ = ⁿCᵧ then x = y or x + y = n',
      'Selections of at least one from n different things: 2ⁿ − 1',
      'Diagonals of an n-sided polygon: ⁿC₂ − n; triangles from n points (no three collinear): ⁿC₃',
      '“Together”: tie the group into one block, arrange, then multiply by the arrangements inside the block',
    ],
    example: {
      q: 'How many different arrangements can be made of the letters of the word MAHARASHTRA?',
      steps: [
        'There are 11 letters: A appears 4 times, H 2 times, R 2 times, and M, S, T once each.',
        'Arrangements = 11!/(4! × 2! × 2!) = 39916800/(24 × 2 × 2) = 39916800/96.',
      ],
      answer: '415800',
    },
    shortcut:
      '“Never together” = (total arrangements) − (arrangements where they are together). Counting the together case is usually much easier.',
    traps: [
      'Using ⁿPᵣ for a committee or team. A committee of A, B, C is the same as C, B, A, so use ⁿCᵣ.',
      'Forgetting that a number cannot start with 0 when forming numbers from digits that include 0.',
      'Forgetting to divide by p! for repeated letters.',
    ],
    practice: [
      {
        q: 'A committee of 3 men and 2 women is to be formed from 6 men and 4 women. The number of ways is:',
        options: ['210', '120', '26', '720'],
        answer: 1,
        why: '⁶C₃ × ⁴C₂ = 20 × 6 = 120 (AND, so multiply).',
      },
      {
        q: 'In how many ways can 6 people sit around a round table?',
        options: ['120', '720', '60', '24'],
        answer: 0,
        why: 'Circular arrangements = (6 − 1)! = 5! = 120.',
      },
      {
        q: 'How many 3-digit numbers with all digits different can be formed using 0, 1, 2, 3, 4, 5?',
        options: ['120', '60', '180', '100'],
        answer: 3,
        why: 'Hundreds place: 5 choices (not 0). Tens: 5 (any remaining). Units: 4. Total 5 × 5 × 4 = 100.',
      },
      {
        q: 'If ⁿC₈ = ⁿC₆, then ⁿC₂ equals:',
        options: ['182', '14', '91', '28'],
        answer: 2,
        why: 'ⁿC₈ = ⁿC₆ with 8 ≠ 6 means n = 8 + 6 = 14. Then ¹⁴C₂ = (14 × 13)/2 = 91.',
      },
    ],
  },
  // ===================================================================
  // CO-ORDINATE GEOMETRY
  // ===================================================================
  {
    id: 'straight-lines',
    title: 'Straight Lines',
    syllabus: 'Co-ordinate Geometry',
    analogy: {
      title: 'An ST bus climbing a ghat road',
      oneLine: 'Slope is the ghat road’s gradient: how much you climb for every step forward.',
      story:
        'The ST bus from Pune to Mahabaleshwar climbs the ghat. A board says <b>“Gradient 1 in 10”</b>: for every 10 m the bus moves forward, the road rises 1 m. That ratio, rise ÷ forward distance, is exactly the <b>slope</b> of a line. A flat stretch on the plateau has slope 0; a steeper ghat has a bigger slope.<br><br>Put the district map on graph paper and each village becomes a point (x, y). The straight-line distance between two villages comes from Pythagoras. The tea stop exactly halfway is the <b>midpoint</b>; a stop two-thirds of the way along divides the route in the ratio 2 : 1, which is the <b>section formula</b>. Two roads with the same gradient run side by side and never meet (parallel), a road that crosses at a right angle has m₁m₂ = −1, and the junction where two roads cross is found by solving their two equations together.',
      map: [
        ['Road rises 1 m for every 10 m forward', 'Slope m = (y₂ − y₁)/(x₂ − x₁) = 1/10'],
        ['Tea stop exactly halfway between two villages', 'Midpoint ((x₁ + x₂)/2, (y₁ + y₂)/2)'],
        ['Bus stop two-thirds of the way along the route', 'Section formula with ratio 2 : 1'],
        ['Two roads with the same gradient that never meet', 'Parallel lines: m₁ = m₂'],
        ['Junction where two roads cross', 'Intersection point: solve both equations together'],
      ],
    },
    concept: [
      'Every point in the plane is a pair (x, y). From two points you can get the <b>distance</b> between them, the <b>midpoint</b>, any point dividing the join in a given ratio (<b>section formula</b>), and the <b>slope</b> of the line through them.',
      'A straight line is any equation of the form ax + by + c = 0. Choose the form that matches the data given: slope and intercept → y = mx + c; a point and slope → y − y₁ = m(x − x₁); two intercepts → x/a + y/b = 1.',
      'Two lines are <b>parallel</b> when their slopes are equal and <b>perpendicular</b> when the product of slopes is −1. Their point of <b>intersection</b> is found by solving the two equations simultaneously.',
    ],
    keyPoints: [
      'Distance: √[(x₂ − x₁)² + (y₂ − y₁)²]',
      'Section formula (internal, ratio m : n): ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)); external: replace + by − in the ratio part',
      'Centroid of a triangle: ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)',
      'Slope m = tan θ = (y₂ − y₁)/(x₂ − x₁); for ax + by + c = 0, m = −a/b',
      'Forms: y = mx + c; y − y₁ = m(x − x₁); x/a + y/b = 1',
      'Parallel: m₁ = m₂; perpendicular: m₁m₂ = −1; angle: tan θ = |(m₁ − m₂)/(1 + m₁m₂)|',
      'Distance of (x₁, y₁) from ax + by + c = 0: |ax₁ + by₁ + c| / √(a² + b²); between parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0: |c₁ − c₂| / √(a² + b²)',
      'Area of triangle: ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|; area 0 means the points are collinear',
    ],
    example: {
      q: 'Find the equation of the line through (2, 3) that is perpendicular to 3x − 4y + 5 = 0.',
      steps: [
        'Slope of the given line = −a/b = −3/(−4) = 3/4.',
        'Perpendicular slope = −1 ÷ (3/4) = −4/3.',
        'Point-slope form: y − 3 = (−4/3)(x − 2), so 3y − 9 = −4x + 8.',
        'Rearranging: 4x + 3y − 17 = 0. Check: 4(2) + 3(3) − 17 = 0. ✓',
      ],
      answer: '4x + 3y − 17 = 0',
    },
    shortcut:
      'Line perpendicular to ax + by + c = 0: write bx − ay + k = 0. Line parallel to it: ax + by + k = 0. Then find k by putting in the given point. Above: perpendicular to 3x − 4y + 5 = 0 is 4x + 3y + k = 0; (2, 3) gives k = −17.',
    traps: [
      'A vertical line (x = constant) has an undefined slope, not slope 0. A horizontal line has slope 0.',
      'Section formula order: for ratio m : n from A towards B, m multiplies B’s coordinates. Swapping gives the wrong point.',
      'For the distance between parallel lines, first make the x and y coefficients identical (e.g. 6x + 8y = … must be halved to match 3x + 4y).',
    ],
    practice: [
      {
        q: 'The distance between the points (−1, 2) and (5, −6) is:',
        options: ['8', '√52', '14', '10'],
        answer: 3,
        why: '√[(5 + 1)² + (−6 − 2)²] = √(36 + 64) = √100 = 10.',
      },
      {
        q: 'The point dividing the join of A(1, −2) and B(7, 4) internally in the ratio 2 : 1 is:',
        options: ['(3, 0)', '(4, 1)', '(5, 2)', '(13/3, 2/3)'],
        answer: 2,
        why: '((2 × 7 + 1 × 1)/3, (2 × 4 + 1 × (−2))/3) = (15/3, 6/3) = (5, 2). (3, 0) is the 1 : 2 point.',
      },
      {
        q: 'The perpendicular distance of the point (3, −2) from the line 3x + 4y − 6 = 0 is:',
        options: ['1', '5', '7/5', '11/5'],
        answer: 0,
        why: '|3(3) + 4(−2) − 6| / √(9 + 16) = |9 − 8 − 6| / 5 = 5/5 = 1.',
      },
      {
        q: 'The lines 2x + ky − 3 = 0 and 3x − 6y + 1 = 0 are perpendicular when k equals:',
        options: ['−4', '1', '4', '−1'],
        answer: 1,
        why: 'Perpendicular when a₁a₂ + b₁b₂ = 0: 2(3) + k(−6) = 0, so k = 1. (k = −4 would make them parallel.)',
      },
    ],
  },
  {
    id: 'circles',
    title: 'Circles',
    syllabus: 'Co-ordinate Geometry',
    analogy: {
      title: 'A goat tied to a peg',
      oneLine: 'The peg is the centre, the rope is the radius, and the edge of the grazed patch is the circle.',
      story:
        'Ajoba ties the goat to a peg in the angan with a 3 m rope. Pulling the rope tight, the goat can just reach every point exactly 3 m from the peg, so the edge of the grass it eats is a <b>circle</b>. If the peg is at the point (h, k) on our graph, any point (x, y) on that edge satisfies (x − h)² + (y − k)² = 3², which is just the distance formula squared.<br><br>Is a particular tuft of grass reachable? Put its position into the left side minus 9. If the result is negative the tuft is inside (the goat eats it), zero means it is exactly on the edge, positive means out of reach. A straight compound wall that the stretched rope just brushes is a <b>tangent</b>: the distance from the peg to that wall is exactly the rope length.',
      map: [
        ['Position of the peg', 'Centre (h, k), or (−g, −f) in the general form'],
        ['Length of the rope', 'Radius r = √(g² + f² − c)'],
        ['Edge of the grazed patch', '(x − h)² + (y − k)² = r²'],
        ['Is a tuft of grass reachable? Put its position in', 'S₁ &lt; 0 inside, S₁ = 0 on, S₁ &gt; 0 outside'],
        ['Straight wall that the tight rope just brushes', 'Tangent: distance from centre to line = r'],
      ],
    },
    concept: [
      'A circle is the set of points at a fixed distance r (radius) from a fixed point (centre). Writing the distance formula for this gives the centre-radius form (x − h)² + (y − k)² = r².',
      'Expanding gives the <b>general form</b> x² + y² + 2gx + 2fy + c = 0, with centre (−g, −f) and radius √(g² + f² − c). An equation is a circle only when the x² and y² coefficients are equal and there is no xy term.',
      'For a line and a circle, compare the perpendicular distance d from the centre to the line with r: d &lt; r cuts in two points, d = r touches (tangent), d &gt; r misses.',
    ],
    keyPoints: [
      'Centre-radius form: (x − h)² + (y − k)² = r²',
      'General form x² + y² + 2gx + 2fy + c = 0: centre (−g, −f), radius √(g² + f² − c)',
      'Diameter form with ends (x₁, y₁), (x₂, y₂): (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0',
      'Tangent at (x₁, y₁) on x² + y² = a²: xx₁ + yy₁ = a²',
      'y = mx + c touches x² + y² = a² if and only if c² = a²(1 + m²)',
      'Length of tangent from (x₁, y₁): √S₁, where S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c',
      'Two circles touch externally if C₁C₂ = r₁ + r₂, internally if C₁C₂ = |r₁ − r₂|',
    ],
    example: {
      q: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.',
      steps: [
        'Compare with x² + y² + 2gx + 2fy + c = 0: 2g = −6, 2f = 4, c = −12.',
        'So g = −3, f = 2 and the centre is (−g, −f) = (3, −2).',
        'Radius = √(g² + f² − c) = √(9 + 4 + 12) = √25.',
      ],
      answer: 'Centre (3, −2), radius 5',
    },
    shortcut:
      'Centre = (−½ × coefficient of x, −½ × coefficient of y), but only after the x² and y² coefficients are made 1. For 2x² + 2y² − 8x + … divide by 2 first.',
    traps: [
      'Not dividing by the x² coefficient first. For 2x² + 2y² − 8x + 12y − 6 = 0 the centre is (2, −3), not (4, −6).',
      'Sign of the centre: + 2gx means the centre’s x-coordinate is −g.',
      'If g² + f² − c is negative, there is no real circle at all.',
    ],
    practice: [
      {
        q: 'The radius of the circle 2x² + 2y² − 8x + 12y − 6 = 0 is:',
        options: ['4', '√58', '√10', '16'],
        answer: 0,
        why: 'Divide by 2: x² + y² − 4x + 6y − 3 = 0, so g = −2, f = 3, c = −3. r = √(4 + 9 + 3) = 4.',
      },
      {
        q: 'The equation of the circle with (1, 2) and (5, 6) as ends of a diameter is:',
        options: ['x² + y² + 6x + 8y + 17 = 0', 'x² + y² − 6x − 8y + 17 = 0', 'x² + y² − 6x − 8y − 7 = 0', 'x² + y² − 6x − 8y + 25 = 0'],
        answer: 1,
        why: '(x − 1)(x − 5) + (y − 2)(y − 6) = 0 gives x² − 6x + 5 + y² − 8y + 12 = 0, i.e. x² + y² − 6x − 8y + 17 = 0.',
      },
      {
        q: 'The length of the tangent from (5, 3) to the circle x² + y² − 2x + 4y − 4 = 0 is:',
        options: ['√30', '6', '2√6', '4√2'],
        answer: 3,
        why: 'S₁ = 25 + 9 − 10 + 12 − 4 = 32, so the length is √32 = 4√2.',
      },
      {
        q: 'The line y = x + c touches the circle x² + y² = 8 when c equals:',
        options: ['±2√2', '±8', '±4', '±2'],
        answer: 2,
        why: 'Tangency condition c² = a²(1 + m²) = 8(1 + 1) = 16, so c = ±4.',
      },
    ],
  },
  {
    id: 'conics',
    title: 'Conics: Parabola, Ellipse, Hyperbola',
    syllabus: 'Co-ordinate Geometry',
    analogy: {
      title: 'A torch beam on the wall during a power cut',
      oneLine: 'Tilt a torch against a wall and its patch of light goes circle → ellipse → parabola → hyperbola.',
      story:
        'Evening load-shedding: you switch on the battery torch and point it at the wall. The beam is a <b>cone</b> of light and the wall slices through it. Point the torch straight at the wall and the patch is a <b>circle</b>. Tilt it a little and the patch stretches into a closed oval, an <b>ellipse</b>. Keep tilting until the top edge of the beam runs exactly parallel to the wall: now the patch never closes at the far end. That open U-shape is a <b>parabola</b>. Tilt even more and the patch opens out even wider: a <b>hyperbola</b>.<br><br>That is literally why they are called conic sections: each is a slice of a cone. The single number that tells you how far you tilted is the <b>eccentricity</b> e. Every conic is the path of a point whose distance from a fixed point (the focus) is e times its distance from a fixed line (the directrix).',
      map: [
        ['Torch beam sliced by the wall', 'A cone cut by a plane; the light patch is the conic'],
        ['Torch pointing straight at the wall', 'Circle, e = 0'],
        ['Tilted a little: closed oval patch', 'Ellipse, 0 &lt; e &lt; 1'],
        ['Beam edge parallel to the wall: patch never closes', 'Parabola, e = 1'],
        ['Tilted even more: patch opens out wider', 'Hyperbola, e &gt; 1'],
      ],
    },
    concept: [
      'A conic is the path of a point P that moves so that <b>PF = e × PM</b>, where F is a fixed point (focus), PM is the distance to a fixed line (directrix) and e is the eccentricity. e = 1 gives a parabola, e &lt; 1 an ellipse, e &gt; 1 a hyperbola.',
      'In CET, almost every question gives a standard equation and asks for the focus, directrix, eccentricity, latus rectum or axes. So first bring the equation to standard form (divide to get 1 on the right side), then read off a and b.',
      'Two facts worth remembering: for an ellipse, the <b>sum</b> of distances of any point from the two foci is constant (= 2a); for a hyperbola, the <b>difference</b> is constant (= 2a).',
    ],
    keyPoints: [
      'Parabola y² = 4ax: vertex (0, 0), focus (a, 0), directrix x = −a, latus rectum 4a',
      'Parabola x² = 4ay: focus (0, a), directrix y = −a',
      'Ellipse x²/a² + y²/b² = 1 (a &gt; b): b² = a²(1 − e²), foci (±ae, 0), directrices x = ±a/e',
      'Ellipse: latus rectum 2b²/a; PF₁ + PF₂ = 2a (major axis)',
      'Hyperbola x²/a² − y²/b² = 1: b² = a²(e² − 1), foci (±ae, 0), latus rectum 2b²/a, |PF₁ − PF₂| = 2a',
      'Rectangular hyperbola (a = b, e.g. x² − y² = a² or xy = c²): e = √2',
      'Focus distance from centre: ellipse ae = √(a² − b²); hyperbola ae = √(a² + b²)',
    ],
    example: {
      q: 'Find the eccentricity, foci and latus rectum of the ellipse 9x² + 25y² = 225.',
      steps: [
        'Divide by 225: x²/25 + y²/9 = 1, so a = 5, b = 3.',
        'e² = 1 − b²/a² = 1 − 9/25 = 16/25, so e = 4/5.',
        'Foci (±ae, 0) = (±4, 0). Latus rectum = 2b²/a = 18/5.',
      ],
      answer: 'e = 4/5, foci (±4, 0), latus rectum 18/5',
    },
    shortcut:
      'Ellipse: minus (ae = √(a² − b²)). Hyperbola: plus (ae = √(a² + b²)). For x²/25 + y²/9 = 1, ae = √16 = 4; for x²/16 − y²/9 = 1, ae = √25 = 5. Then e = (ae)/a.',
    traps: [
      'In y² = 12x, 4a = 12 so a = 3: the focus is (3, 0), not (12, 0).',
      'If the larger denominator is under y² (b &gt; a), the major axis is vertical and the foci are on the y-axis.',
      'Mixing up the ellipse and hyperbola relations: ellipse uses 1 − e², hyperbola uses e² − 1.',
    ],
    practice: [
      {
        q: 'The focus of the parabola y² = 12x is:',
        options: ['(12, 0)', '(0, 3)', '(3, 0)', '(6, 0)'],
        answer: 2,
        why: '4a = 12 so a = 3; the focus of y² = 4ax is (a, 0) = (3, 0).',
      },
      {
        q: 'The eccentricity of the hyperbola x²/16 − y²/9 = 1 is:',
        options: ['5/4', '4/5', '√7/4', '5/3'],
        answer: 0,
        why: 'e² = 1 + b²/a² = 1 + 9/16 = 25/16, so e = 5/4.',
      },
      {
        q: 'The length of the latus rectum of the ellipse x²/36 + y²/16 = 1 is:',
        options: ['8/3', '16/3', '18', '32/3'],
        answer: 1,
        why: 'a² = 36, b² = 16: latus rectum = 2b²/a = 32/6 = 16/3.',
      },
      {
        q: 'For any point on the ellipse 4x² + 9y² = 36, the sum of its distances from the two foci is:',
        options: ['4', '12', '2√5', '6'],
        answer: 3,
        why: 'x²/9 + y²/4 = 1, so a = 3 and PF₁ + PF₂ = 2a = 6. (2√5 is the distance between the foci.)',
      },
    ],
  },
  {
    id: 'pair-of-lines-transformations',
    title: 'Pair of Straight Lines and Transformations',
    syllabus: 'Co-ordinate Geometry',
    analogy: {
      title: 'Drawing a Diwali rangoli with a stencil',
      oneLine: 'Two crossing chalk lines are one pair-of-lines equation; sliding, turning and enlarging the stencil are translation, rotation and scaling.',
      story:
        'Before Diwali you draw rangoli on the floor. First you draw two chalk guide-lines crossing at the centre. They are two separate lines, but one single equation ax² + 2hxy + by² = 0 can hold both of them, because it is just the two line equations multiplied together. If the two guide-lines cross at a right angle, the coefficients satisfy a + b = 0.<br><br>Then you use a plastic stencil. Sliding it to the next tile without turning it is a <b>translation</b>: every point moves by the same amount. Turning it about its centre is a <b>rotation</b>: shapes and sizes stay the same, only the direction changes. Picking the bigger stencil from the same packet is <b>scaling</b>: the shape stays the same but every length is multiplied by the same factor, so the area is multiplied by the square of that factor.',
      map: [
        ['Two chalk lines crossing at the centre', 'ax² + 2hxy + by² = 0 (two lines through the origin)'],
        ['Chalk lines crossing at a right angle', 'a + b = 0 (coefficient of x² + coefficient of y²)'],
        ['Sliding the stencil to the next tile without turning', 'Translation: (x, y) → (x + p, y + q)'],
        ['Turning the stencil about its centre by θ', 'Rotation: (x, y) → (x cos θ − y sin θ, x sin θ + y cos θ)'],
        ['Using the bigger stencil from the same packet', 'Scaling: (x, y) → (kx, ky), area × k²'],
      ],
    },
    concept: [
      'The homogeneous equation <b>ax² + 2hxy + by² = 0</b> represents two straight lines through the origin. If they are y = m₁x and y = m₂x, dividing by x² gives a quadratic in y/x whose roots are m₁ and m₂; so sum and product of slopes come straight from the coefficients.',
      'The general second-degree equation ax² + 2hxy + by² + 2gx + 2fy + c = 0 represents a pair of lines only when the determinant condition abc + 2fgh − af² − bg² − ch² = 0 holds.',
      '<b>Transformations</b> move points. Translation shifts every point by the same amount; rotation turns points about the origin by an angle θ; scaling stretches by factors along the axes. Be careful to note whether a question moves the <i>point</i> or moves the <i>axes</i>: moving the axes one way is the same as moving the point the opposite way.',
    ],
    keyPoints: [
      'ax² + 2hxy + by² = 0: two lines through the origin; real and distinct if h² &gt; ab, coincident if h² = ab',
      'Slopes m₁, m₂: m₁ + m₂ = −2h/b, m₁m₂ = a/b',
      'Angle between them: tan θ = 2√(h² − ab) / |a + b|; perpendicular if a + b = 0',
      'ax² + 2hxy + by² + 2gx + 2fy + c = 0 is a pair of lines if abc + 2fgh − af² − bg² − ch² = 0',
      'Shift origin to (h, k) (axes moved, not turned): new coordinates X = x − h, Y = y − k',
      'Rotate a point anticlockwise by θ about the origin: (x cos θ − y sin θ, x sin θ + y cos θ); by 90°: (x, y) → (−y, x)',
      'Rotate the axes by θ: X = x cos θ + y sin θ, Y = −x sin θ + y cos θ',
      'Scaling by sₓ and sᵧ: (x, y) → (sₓx, sᵧy); areas are multiplied by sₓsᵧ',
    ],
    example: {
      q: 'Find the angle between the lines represented by x² − 4xy + y² = 0.',
      steps: [
        'Compare with ax² + 2hxy + by² = 0: a = 1, 2h = −4 so h = −2, b = 1.',
        'tan θ = 2√(h² − ab) / |a + b| = 2√(4 − 1) / 2 = √3.',
        'tan θ = √3 gives θ = 60°.',
      ],
      answer: '60°',
    },
    shortcut:
      'To get the two separate lines, factorise like a quadratic: x² − 5xy + 6y² = (x − 2y)(x − 3y), so the lines are x = 2y and x = 3y. If it factorises easily, slopes and angle follow at once.',
    traps: [
      'h is HALF the coefficient of xy. In 3x² + 2xy − y² = 0, h = 1, not 2.',
      'Shifting the origin to (2, −1) makes the new coordinates (x − 2, y + 1), not (x + 2, y − 1).',
      'Rotating the axes and rotating the point by the same θ give opposite results. Read which one is asked.',
    ],
    practice: [
      {
        q: 'The equation kx² + 5xy − 3y² = 0 represents a pair of perpendicular lines if k equals:',
        options: ['−3', '3', '5', '0'],
        answer: 1,
        why: 'Perpendicular when a + b = 0: k + (−3) = 0, so k = 3.',
      },
      {
        q: 'The point (2, 3) is rotated through 90° anticlockwise about the origin. Its new position is:',
        options: ['(3, −2)', '(−2, 3)', '(−3, 2)', '(3, 2)'],
        answer: 2,
        why: '(x cos 90° − y sin 90°, x sin 90° + y cos 90°) = (−3, 2).',
      },
      {
        q: 'The origin is shifted to (2, −1) without rotating the axes. The new coordinates of the point (5, 3) are:',
        options: ['(7, 2)', '(3, 2)', '(7, 4)', '(3, 4)'],
        answer: 3,
        why: 'X = x − h = 5 − 2 = 3, Y = y − k = 3 − (−1) = 4.',
      },
      {
        q: 'The sum of the slopes of the lines given by 3x² + 2xy − y² = 0 is:',
        options: ['2', '−2', '3', '−3'],
        answer: 0,
        why: 'a = 3, h = 1, b = −1: m₁ + m₂ = −2h/b = −2/(−1) = 2. Check: 3x² + 2xy − y² = (3x − y)(x + y), slopes 3 and −1.',
      },
    ],
  },

  // ===================================================================
  // DIFFERENTIAL EQUATIONS
  // ===================================================================
  {
    id: 'differential-equations',
    title: 'Differential Equations',
    syllabus: 'Differential Equations',
    analogy: {
      title: 'A glass of cutting chai cooling at the tapri',
      oneLine: 'The chai cools faster when it is hotter; writing that rule down is a differential equation, and the cooling curve is its solution.',
      story:
        'The tapri-wala pours cutting chai at 80°C on a 30°C afternoon. At first it cools fast; as it gets close to room temperature the cooling slows down. Say it in one sentence: <i>the rate at which the chai cools is proportional to how much hotter it is than the room</i>. Written in maths, that sentence is <b>dT/dt = −k(T − 30)</b>, a differential equation. It does not tell you the temperature directly; it tells you how the temperature is <b>changing</b>.<br><br>Solving it gives T = 30 + Ce<sup>−kt</sup>. This is a whole family of curves, one for every possible starting temperature, because the constant C is not yet fixed: that is the <b>general solution</b>. The moment you know the chai was poured at 80°C (T = 80 at t = 0), C = 50 is fixed and you get one particular curve: the <b>particular solution</b>.',
      map: [
        ['Temperature of the chai at time t', 'Dependent variable T (or y)'],
        ['How fast the chai is cooling right now', 'Derivative dT/dt'],
        ['Hotter chai cools faster', 'The equation dT/dt = −k(T − 30)'],
        ['All cooling curves for chai poured at any temperature', 'General solution T = 30 + Ce<sup>−kt</sup> (arbitrary constant C)'],
        ['Knowing it was poured at 80°C', 'Initial condition fixes C = 50: particular solution'],
      ],
    },
    concept: [
      'A differential equation (DE) connects a function with its derivatives. Its <b>order</b> is the order of the highest derivative present; its <b>degree</b> is the power of that highest derivative once the equation is free of radicals and fractions in the derivatives. The general solution of an order-n equation contains exactly n arbitrary constants.',
      'First-order methods you must know: <b>variables separable</b> (bring all y to one side, all x to the other, integrate); <b>homogeneous</b> (dy/dx is a function of y/x, so put y = vx); and <b>linear</b> dy/dx + Py = Q, solved with the integrating factor IF = e<sup>∫P dx</sup>.',
      'For <b>linear equations with constant coefficients</b> such as y″ + ay′ + by = 0, try y = e<sup>mx</sup>. This turns the DE into the auxiliary equation m² + am + b = 0, and the type of roots decides the form of the solution.',
    ],
    keyPoints: [
      'Order = highest derivative; degree = its power (after clearing radicals/fractions); number of arbitrary constants = order',
      'Variables separable: f(y) dy = g(x) dx, integrate both sides',
      'Homogeneous dy/dx = F(y/x): put y = vx, dy/dx = v + x dv/dx',
      'Linear dy/dx + Py = Q: IF = e<sup>∫P dx</sup>; solution y × IF = ∫(Q × IF) dx + C',
      'y″ + ay′ + by = 0: solve m² + am + b = 0',
      'Distinct real roots m₁, m₂: y = c₁e<sup>m₁x</sup> + c₂e<sup>m₂x</sup>; equal roots m: y = (c₁ + c₂x)e<sup>mx</sup>; roots α ± iβ: y = e<sup>αx</sup>(c₁ cos βx + c₂ sin βx)',
      'Growth or decay dy/dt = ky gives y = y₀e<sup>kt</sup>',
    ],
    example: {
      q: 'Solve dy/dx + y/x = x² (x &gt; 0).',
      steps: [
        'This is linear with P = 1/x and Q = x².',
        'IF = e<sup>∫(1/x) dx</sup> = e<sup>ln x</sup> = x.',
        'y × x = ∫x² × x dx = ∫x³ dx = x⁴/4 + C.',
        'Divide by x: y = x³/4 + C/x.',
      ],
      answer: 'y = x³/4 + C/x',
    },
    shortcut:
      'To form the DE of a family of curves with n arbitrary constants, differentiate n times and eliminate the constants. The order equals the number of constants: y = A cos x + B sin x has 2 constants, so its DE is second order: y″ + y = 0.',
    traps: [
      'Degree is not defined if a derivative sits inside sin, e<sup>…</sup> or log, e.g. sin(dy/dx) + y = 0.',
      'Read P only after making the coefficient of dy/dx equal to 1. For x dy/dx + 2y = x³, divide by x first: P = 2/x.',
      'Equal roots of the auxiliary equation need (c₁ + c₂x)e<sup>mx</sup>, not c₁e<sup>mx</sup> + c₂e<sup>mx</sup>.',
    ],
    practice: [
      {
        q: 'The order and degree of (d²y/dx²)³ + (dy/dx)⁴ + y = 0 are:',
        options: ['Order 3, degree 2', 'Order 2, degree 4', 'Order 1, degree 4', 'Order 2, degree 3'],
        answer: 3,
        why: 'The highest derivative is d²y/dx² (order 2), and its power is 3 (degree 3).',
      },
      {
        q: 'The integrating factor of dy/dx + (2/x)y = x is:',
        options: ['2x', 'x²', 'e<sup>2x</sup>', '1/x²'],
        answer: 1,
        why: 'IF = e<sup>∫(2/x) dx</sup> = e<sup>2 ln x</sup> = x².',
      },
      {
        q: 'The general solution of y″ − 5y′ + 6y = 0 is:',
        options: ['y = c₁e<sup>2x</sup> + c₂e<sup>3x</sup>', 'y = c₁e<sup>−2x</sup> + c₂e<sup>−3x</sup>', 'y = (c₁ + c₂x)e<sup>2x</sup>', 'y = c₁ cos 2x + c₂ sin 3x'],
        answer: 0,
        why: 'Auxiliary equation m² − 5m + 6 = 0 has roots 2 and 3 (distinct, real).',
      },
      {
        q: 'The general solution of the homogeneous equation dy/dx = (x + y)/x is:',
        options: ['y = ln|x| + C', 'y = x² + Cx', 'y = x ln|x| + Cx', 'y = x ln|x| + C'],
        answer: 2,
        why: 'Put y = vx: v + x dv/dx = 1 + v, so dv = dx/x and v = ln|x| + C. Hence y = x ln|x| + Cx.',
      },
    ],
  },
  // ===================================================================
  // TRIGONOMETRY
  // ===================================================================
  {
    id: 'trig-identities',
    title: 'Trigonometric Identities and Equations',
    syllabus: 'Trigonometry',
    analogy: {
      title: 'Riding the giant wheel at the village jatra',
      oneLine: 'Your seat’s height is sin θ and its sideways distance is cos θ; you are always the same distance from the axle, so sin²θ + cos²θ = 1.',
      story:
        'At the village jatra you sit in the giant wheel. Take its radius as 1 unit. When the wheel has turned through an angle θ from the horizontal, your seat’s height above the axle is <b>sin θ</b> and its sideways distance from the axle is <b>cos θ</b>. However the wheel turns, your seat is always exactly 1 unit from the axle, so by Pythagoras (cos θ)² + (sin θ)² = 1. That is the most important identity, and most other identities are built from it.<br><br>The wheel also explains <b>trigonometric equations</b>. Ask “when is my seat at height ½?” You pass that height twice in each turn: once going up (θ = 30°) and once coming down (θ = 180° − 30° = 150°). And after a full turn of 360° everything repeats. So a trig equation does not have one answer; it has a family of answers, written with an integer n. That is the <b>general solution</b>.',
      map: [
        ['Angle the wheel has turned', 'θ'],
        ['Seat’s height above the axle (radius 1)', 'sin θ'],
        ['Seat’s sideways distance from the axle', 'cos θ'],
        ['Seat always stays 1 unit from the axle', 'sin²θ + cos²θ = 1'],
        ['Same height twice per turn, and again every turn', 'sin θ = sin α ⇒ θ = nπ + (−1)ⁿα'],
      ],
    },
    concept: [
      'A trigonometric <b>identity</b> is true for every angle; an <b>equation</b> is true only for some angles. Identities are tools to simplify or to prove; equations are to be solved.',
      'Most simplification uses three families: the Pythagorean identities (sin²θ + cos²θ = 1 and its cousins), compound-angle formulas (sin(A ± B), cos(A ± B)), and multiple-angle formulas (sin 2A, cos 2A, sin 3A …). The cos 2A formula has three forms; choose the one that removes the term you do not want.',
      'Because sin, cos and tan repeat (period 2π for sin and cos, π for tan), every trig equation has infinitely many solutions. Reduce the equation to one of sin θ = sin α, cos θ = cos α or tan θ = tan α, then write the general solution.',
    ],
    keyPoints: [
      'sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ',
      'sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B; tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)',
      'sin 2A = 2 sin A cos A; cos 2A = cos²A − sin²A = 1 − 2 sin²A = 2 cos²A − 1; tan 2A = 2 tan A/(1 − tan²A)',
      'sin 3A = 3 sin A − 4 sin³A; cos 3A = 4 cos³A − 3 cos A',
      'sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2); cos C + cos D = 2 cos((C + D)/2) cos((C − D)/2)',
      'General solutions: sin θ = sin α ⇒ θ = nπ + (−1)ⁿα; cos θ = cos α ⇒ θ = 2nπ ± α; tan θ = tan α ⇒ θ = nπ + α',
      'sin θ = 0 ⇒ θ = nπ; cos θ = 0 ⇒ θ = (2n + 1)π/2; n is any integer',
    ],
    example: {
      q: 'Find the general solution of 2 cos²θ + 3 sin θ = 0.',
      steps: [
        'Replace cos²θ by 1 − sin²θ: 2 − 2 sin²θ + 3 sin θ = 0, i.e. 2 sin²θ − 3 sin θ − 2 = 0.',
        'Factorise: (2 sin θ + 1)(sin θ − 2) = 0. sin θ = 2 is impossible, so sin θ = −1/2.',
        'sin θ = −1/2 = sin(−π/6), so θ = nπ + (−1)ⁿ(−π/6).',
      ],
      answer: 'θ = nπ + (−1)ⁿ(−π/6), n ∈ ℤ',
    },
    shortcut:
      'For “simplify” questions with options, put a convenient angle such as θ = 30° or 45° into the question and into each option. For (1 − cos 2θ)/sin 2θ at θ = 30°: (1 − ½)/(√3/2) = 1/√3, and only tan θ gives 1/√3 among the options. (Avoid 45° here: tan and cot are both 1 there, so it cannot separate them.)',
    traps: [
      'Never cancel sin θ (or cos θ) from both sides of an equation; you lose the solutions where it is 0. Factor it out instead.',
      'Reject values like sin θ = 2: sin and cos always lie between −1 and 1.',
      'The general solution of cos θ = cos α is 2nπ ± α, not nπ + (−1)ⁿα. Do not mix the sin and cos forms.',
    ],
    practice: [
      {
        q: 'The value of sin²30° + cos²60° + tan²45° is:',
        options: ['3/2', '1', '2', '1/2'],
        answer: 0,
        why: '1/4 + 1/4 + 1 = 3/2.',
      },
      {
        q: '(1 − cos 2θ)/sin 2θ is equal to:',
        options: ['cot θ', 'sin θ', 'cos 2θ', 'tan θ'],
        answer: 3,
        why: '1 − cos 2θ = 2 sin²θ and sin 2θ = 2 sin θ cos θ, so the ratio is sin θ/cos θ = tan θ.',
      },
      {
        q: 'The value of cos 15° − sin 15° is:',
        options: ['√3/2', '1/2', '1/√2', '√2'],
        answer: 2,
        why: 'cos 15° − sin 15° = √2 cos(15° + 45°) = √2 cos 60° = √2/2 = 1/√2.',
      },
      {
        q: 'The general solution of tan 2θ = √3 is:',
        options: ['θ = nπ + π/3', 'θ = nπ/2 + π/6', 'θ = nπ + π/6', 'θ = 2nπ ± π/6'],
        answer: 1,
        why: 'tan 2θ = tan(π/3) gives 2θ = nπ + π/3, so θ = nπ/2 + π/6. (nπ + π/6 gives only half of these solutions; it misses θ = 2π/3, for example.)',
      },
    ],
  },
  {
    id: 'triangles-heights-distances',
    title: 'Solution of Triangles, Heights and Distances',
    syllabus: 'Trigonometry',
    analogy: {
      title: 'Finding the height of the school flagpole on Republic Day',
      oneLine: 'Stand at a known distance, measure how far you tilt your head, and tan gives the height without climbing.',
      story:
        'On 26 January the PT sir asks: <i>how tall is our school flagpole?</i> Nobody is allowed to climb it. So you stand 20 m from its base and look at the flag on top. The angle your line of sight makes with the ground, the <b>angle of elevation</b>, is 30°. Your eye, the base of the pole and the top of the pole form a right-angled triangle: the 20 m is the side next to the angle, and the height is the side opposite it. So height = 20 × tan 30°.<br><br>If you walk closer, the angle grows; using two such readings you can find the height even without knowing how far the pole is. And when the three points are not at a right angle, like three neem trees in the school ground, you use the <b>sine rule</b> and <b>cosine rule</b>, which work in any triangle.',
      map: [
        ['Your eye, the base and the top of the pole', 'The three vertices of a right-angled triangle'],
        ['Distance you stand from the pole', 'Adjacent side (horizontal distance d)'],
        ['How far you tilt your head to see the top', 'Angle of elevation θ'],
        ['Height of the flagpole', 'Opposite side h = d tan θ'],
        ['Three neem trees in the ground, not at right angles', 'Sine rule and cosine rule for any triangle'],
      ],
    },
    concept: [
      'In any triangle ABC, side a is opposite angle A, b opposite B and c opposite C. The <b>sine rule</b> connects each side with the angle opposite it; the <b>cosine rule</b> connects three sides with one angle. Use the cosine rule when you know all three sides (or two sides and the angle between them); use the sine rule when you know an angle and the side opposite it.',
      'For <b>heights and distances</b>, always draw the figure first. The angle of elevation is measured upwards from the horizontal; the angle of depression is measured downwards from the horizontal. Because the two horizontals are parallel, the angle of depression from A to B equals the angle of elevation from B to A.',
      'Learn tan 30° = 1/√3, tan 45° = 1, tan 60° = √3 by heart; almost every height question uses only these.',
    ],
    keyPoints: [
      'Sine rule: a/sin A = b/sin B = c/sin C = 2R (R = circumradius)',
      'Cosine rule: cos A = (b² + c² − a²)/(2bc), i.e. a² = b² + c² − 2bc cos A',
      'Projection rule: a = b cos C + c cos B',
      'Area Δ = ½ bc sin A = √[s(s − a)(s − b)(s − c)], s = (a + b + c)/2',
      'R = abc/(4Δ); inradius r = Δ/s',
      'Height h = d tan θ; angle of depression from the top = angle of elevation from the ground point',
      'Elevations α and β (α &gt; β) from two points d apart in line with the base: h = d tan α tan β/(tan α − tan β)',
    ],
    example: {
      q: 'The angle of elevation of the top of a tower from a point on the ground is 30°. After walking 20 m towards the tower, it becomes 60°. Find the height of the tower.',
      steps: [
        'Let the height be h and the nearer distance x. Then h = x tan 60° = x√3, and h = (x + 20) tan 30° = (x + 20)/√3.',
        'Equate: x√3 = (x + 20)/√3, so 3x = x + 20 and x = 10 m.',
        'h = 10√3 ≈ 17.32 m.',
      ],
      answer: '10√3 m (about 17.32 m)',
    },
    shortcut:
      'For the 30° → 60° walk-towards case, the height is always (√3/2) × distance walked. Here (√3/2) × 20 = 10√3. Also, in that case the distance walked equals the distance from the second point to the top of the tower.',
    traps: [
      'The d in h = d tan θ is the horizontal distance along the ground, not the slant line of sight.',
      'The angle of depression is from the horizontal, not from the vertical wall of the building.',
      'In the sine rule, pair each side with the angle opposite it, not the angle next to it.',
    ],
    practice: [
      {
        q: 'In ΔABC, a = 3, b = 5 and c = 7. Angle C is:',
        options: ['60°', '90°', '120°', '150°'],
        answer: 2,
        why: 'cos C = (a² + b² − c²)/(2ab) = (9 + 25 − 49)/30 = −15/30 = −1/2, so C = 120°.',
      },
      {
        q: 'A 10 m ladder leans against a wall, making an angle of 60° with the ground. How high up the wall does it reach?',
        options: ['5 m', '5√3 m', '10√3 m', '5√2 m'],
        answer: 1,
        why: 'Height = 10 sin 60° = 10 × √3/2 = 5√3 m.',
      },
      {
        q: 'From the top of a 30 m high building, the angle of depression of a car on the road is 30°. How far is the car from the foot of the building?',
        options: ['30√3 m', '10√3 m', '15 m', '60 m'],
        answer: 0,
        why: 'Angle of elevation of the top from the car is also 30°: 30/d = tan 30° = 1/√3, so d = 30√3 m.',
      },
      {
        q: 'The area of a triangle with sides 13 cm, 14 cm and 15 cm is:',
        options: ['42 cm²', '96 cm²', '168 cm²', '84 cm²'],
        answer: 3,
        why: 's = 21; Δ = √(21 × 8 × 7 × 6) = √7056 = 84 cm².',
      },
    ],
  },
  {
    id: 'inverse-trig',
    title: 'Inverse Trigonometric Functions',
    syllabus: 'Trigonometry',
    analogy: {
      title: 'Guessing the time from the temperature on a Nagpur summer day',
      oneLine: 'The same temperature comes twice a day, so to read time from temperature you agree to look only at the rising morning hours: that is the principal value.',
      story:
        'On a May day in Nagpur the temperature climbs from the cool dawn to a burning afternoon peak and then falls again by night. If your friend says “it was 38°C”, you cannot tell the time: 38°C happened once in the morning while it was rising and once in the evening while it was falling, and again tomorrow, and the day after.<br><br>To make “time from temperature” a proper answer, you must agree on a rule: <b>only look at the rising part of the day</b>. Then every temperature matches exactly one time. That is exactly what an inverse trig function does. sin θ takes each value again and again, so sin⁻¹ is allowed to answer only from one stretch where sin keeps rising, from −π/2 to π/2. That chosen answer is called the <b>principal value</b>.',
      map: [
        ['Time of the day', 'Angle θ'],
        ['Temperature at that time', 'sin θ'],
        ['Same temperature in morning and evening, every day', 'sin is not one-one: many θ give the same value'],
        ['Agreeing to read only the rising morning hours', 'Principal range of sin⁻¹: [−π/2, π/2]'],
        ['“At what morning hour was it 38°C?”', 'sin⁻¹x: the one angle in that range with sine x'],
      ],
    },
    concept: [
      'sin, cos and tan are not one-one, so they have no inverse over all angles. We restrict each to a <b>principal range</b> where it is one-one, and define the inverse only there. sin⁻¹x means “the angle in [−π/2, π/2] whose sine is x”; it is NOT 1/sin x.',
      'Because of these ranges, sin⁻¹(sin θ) equals θ only when θ is already in [−π/2, π/2]. Otherwise first rewrite sin θ as the sine of an angle inside the range (using sin(π − θ) = sin θ, etc.) and then remove the sin⁻¹.',
      'Most CET questions use the complementary pairs (sin⁻¹x + cos⁻¹x = π/2), the negative-argument rules, and the tan⁻¹ addition formula.',
    ],
    keyPoints: [
      'sin⁻¹x: domain [−1, 1], range [−π/2, π/2]',
      'cos⁻¹x: domain [−1, 1], range [0, π]; tan⁻¹x: domain all real x, range (−π/2, π/2)',
      'sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2; sec⁻¹x + cosec⁻¹x = π/2',
      'sin⁻¹(−x) = −sin⁻¹x; tan⁻¹(−x) = −tan⁻¹x; but cos⁻¹(−x) = π − cos⁻¹x',
      'tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y)/(1 − xy)] when xy &lt; 1',
      '2 tan⁻¹x = tan⁻¹[2x/(1 − x²)] for |x| &lt; 1',
      'sin⁻¹(sin θ) = θ only for θ in [−π/2, π/2]; cos⁻¹(cos θ) = θ only for θ in [0, π]',
    ],
    example: {
      q: 'Find the value of sin⁻¹(sin 5π/6).',
      steps: [
        '5π/6 is not in [−π/2, π/2], so the answer is not 5π/6.',
        'sin(5π/6) = sin(π − 5π/6) = sin(π/6).',
        'π/6 is in the principal range, so sin⁻¹(sin π/6) = π/6.',
      ],
      answer: 'π/6',
    },
    shortcut:
      'Remember three famous results: tan⁻¹(1/2) + tan⁻¹(1/3) = π/4; tan⁻¹1 + tan⁻¹2 + tan⁻¹3 = π; and if sin⁻¹x + sin⁻¹y = θ then cos⁻¹x + cos⁻¹y = π − θ (because each pair adds to π/2).',
    traps: [
      'sin⁻¹x is not (sin x)⁻¹ = cosec x.',
      'Writing sin⁻¹(sin 2π/3) = 2π/3. It is π/3, because 2π/3 is outside [−π/2, π/2].',
      'cos⁻¹(−1/2) is 2π/3, not −π/3: the range of cos⁻¹ is [0, π], which contains no negative angles.',
    ],
    practice: [
      {
        q: 'The principal value of cos⁻¹(−1/2) is:',
        options: ['−π/3', '2π/3', 'π/3', '4π/3'],
        answer: 1,
        why: 'cos⁻¹(−x) = π − cos⁻¹x = π − π/3 = 2π/3, which lies in [0, π].',
      },
      {
        q: 'tan⁻¹(1/2) + tan⁻¹(1/3) equals:',
        options: ['π/3', 'π/6', 'π/2', 'π/4'],
        answer: 3,
        why: '(1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1, and tan⁻¹1 = π/4 (xy = 1/6 &lt; 1, so the formula applies).',
      },
      {
        q: 'The value of sin⁻¹(sin 2π/3) is:',
        options: ['2π/3', '−π/3', 'π/3', 'π/6'],
        answer: 2,
        why: 'sin(2π/3) = sin(π − 2π/3) = sin(π/3), and π/3 lies in [−π/2, π/2].',
      },
      {
        q: 'If sin⁻¹x + sin⁻¹y = 2π/3, then cos⁻¹x + cos⁻¹y equals:',
        options: ['π/3', '2π/3', 'π/6', 'π'],
        answer: 0,
        why: 'cos⁻¹x + cos⁻¹y = (π/2 − sin⁻¹x) + (π/2 − sin⁻¹y) = π − 2π/3 = π/3.',
      },
    ],
  },

  // ===================================================================
  // PROBABILITY AND STATISTICS
  // ===================================================================
  {
    id: 'probability',
    title: 'Probability: Basics, Dependent and Independent Events',
    syllabus: 'Probability and Statistics',
    analogy: {
      title: 'The lucky draw at the Ganpati mandal',
      oneLine: 'Drawing chits without putting them back makes the next draw dependent; putting them back keeps draws independent.',
      story:
        'On the last day of Ganeshotsav, the mandal holds a lucky draw. The box has 100 chits and 5 of them say “prize”. Your chance on one draw is 5 out of 100. That is all probability is: <b>favourable outcomes ÷ total outcomes</b>, provided every chit is equally likely.<br><br>Now two prizes are drawn. If the volunteer keeps the first chit aside, the box changes: after a prize chit is out, only 4 prize chits remain in 99. The second draw <b>depends</b> on the first, so you multiply by the changed chance: P(both) = 5/100 × 4/99. But if the chit is put back and the box shaken (or the second draw is from a different mandal’s box), the first draw tells you nothing about the second: the events are <b>independent</b>, and you simply multiply 5/100 × 5/100.',
      map: [
        ['All the chits in the box', 'Sample space S'],
        ['Prize chits', 'Event A; P(A) = n(A)/n(S)'],
        ['Chit kept aside before the next draw', 'Dependent events: P(A ∩ B) = P(A) × P(B | A)'],
        ['Chit put back and box shaken', 'Independent events: P(A ∩ B) = P(A) × P(B)'],
        ['Chance of winning at least one of the two prizes', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],
      ],
    },
    concept: [
      'For equally likely outcomes, P(A) = (number of outcomes favourable to A) ÷ (total number of outcomes). Probabilities lie between 0 and 1, and P(not A) = 1 − P(A).',
      '<b>Conditional probability</b> P(B | A) is the probability of B once you know A has happened: P(B | A) = P(A ∩ B)/P(A). Events A and B are <b>independent</b> when knowing A does not change the chance of B, i.e. P(A ∩ B) = P(A) P(B). Without replacement, draws are dependent; with replacement, they are independent.',
      '<b>Bayes’ theorem</b> turns the question around: given that a result happened, which cause was it likely to come from? Find each cause’s share of the result, then divide by the total.',
    ],
    keyPoints: [
      'P(A) = n(A)/n(S); 0 ≤ P(A) ≤ 1; P(A′) = 1 − P(A)',
      'P(A ∪ B) = P(A) + P(B) − P(A ∩ B); mutually exclusive means P(A ∩ B) = 0',
      'P(B | A) = P(A ∩ B)/P(A)',
      'Independent: P(A ∩ B) = P(A) P(B); then A′ and B′ are independent too',
      'P(at least one) = 1 − P(none)',
      'Bayes: P(Eᵢ | A) = P(Eᵢ) P(A | Eᵢ) / Σ P(Eⱼ) P(A | Eⱼ)',
      'Two dice: 36 outcomes; a sum of 7 has 6 ways (the most likely sum)',
      'Odds in favour a : b means P = a/(a + b)',
    ],
    example: {
      q: 'A bag has 5 red and 3 black balls. Two balls are drawn one after the other without replacement. Find the probability that both are red.',
      steps: [
        'First ball red: 5/8.',
        'Given the first was red, 4 red remain in 7 balls: P(second red | first red) = 4/7.',
        'P(both red) = 5/8 × 4/7 = 20/56.',
      ],
      answer: '5/14',
    },
    shortcut:
      'Whenever you see “at least one”, use 1 − P(none). For two shooters who hit with probabilities 1/3 and 1/4: P(target hit) = 1 − (2/3)(3/4) = 1/2, no case-by-case adding.',
    traps: [
      'Mutually exclusive is not the same as independent. If two events with non-zero probabilities cannot happen together, they are dependent.',
      'Without replacement, both the favourable count and the total drop by one for the second draw.',
      'For independent events, P(A ∪ B) is still P(A) + P(B) − P(A)P(B), not P(A) + P(B).',
    ],
    practice: [
      {
        q: 'Box I has 3 red and 2 white balls; Box II has 2 red and 3 white balls. A box is chosen at random and a ball drawn from it is red. The probability that it came from Box I is:',
        options: ['2/5', '3/10', '1/2', '3/5'],
        answer: 3,
        why: 'P(red) = ½(3/5) + ½(2/5) = 1/2. P(Box I | red) = ½(3/5) ÷ ½ = 3/5.',
      },
      {
        q: 'A and B are independent events with P(A) = 0.4 and P(B) = 0.5. Then P(A ∪ B) is:',
        options: ['0.7', '0.9', '0.2', '0.5'],
        answer: 0,
        why: 'P(A ∩ B) = 0.4 × 0.5 = 0.2, so P(A ∪ B) = 0.4 + 0.5 − 0.2 = 0.7.',
      },
      {
        q: 'The probability that A hits a target is 1/3 and that B hits it is 1/4. If both fire once independently, the probability that the target is hit is:',
        options: ['7/12', '1/2', '1/12', '5/12'],
        answer: 1,
        why: 'P(neither hits) = (2/3)(3/4) = 1/2, so P(hit) = 1 − 1/2 = 1/2.',
      },
      {
        q: 'Two cards are drawn without replacement from a pack of 52. The probability that both are kings is:',
        options: ['1/169', '1/26', '1/221', '2/221'],
        answer: 2,
        why: '4/52 × 3/51 = 12/2652 = 1/221. (1/169 would be with replacement.)',
      },
    ],
  },
  {
    id: 'descriptive-statistics',
    title: 'Averages, Dispersion, Skewness and Kurtosis',
    syllabus: 'Probability and Statistics',
    analogy: {
      title: 'Evening milk collection at the village dairy',
      oneLine: 'Mean, median and mode describe the typical farmer’s milk; standard deviation measures how much farmers differ; one big farmer creates skew.',
      story:
        'Every evening farmers bring milk to the village co-operative dairy. One day five farmers bring 4, 5, 5, 6 and 30 litres. The secretary adds it up, 50 litres, and divides by 5: the <b>mean</b> is 10 L. But nobody brought 10 L! Line the farmers up by litres and the one in the middle brought 5 L: that is the <b>median</b>. The most common amount, also 5 L, is the <b>mode</b>.<br><br>The one big farmer with 30 L pulls the mean far above the typical farmer. When a long tail stretches to the right like this, the mean is pulled above the median and the mode, and the data is <b>positively skewed</b>. Another dairy may also average 10 L with every farmer bringing 9 to 11 L. Same average, very different spread: the <b>standard deviation</b> measures that spread. And <b>kurtosis</b> tells whether most farmers bunch tightly around the middle (a sharp peak) or are spread flat.',
      map: [
        ['Litres brought by each farmer', 'Observations x₁, x₂, …, xₙ'],
        ['Total milk ÷ number of farmers', 'Mean x̄ = Σx/n'],
        ['The farmer in the middle when lined up by litres', 'Median'],
        ['How much farmers differ from the average', 'Standard deviation σ (dispersion)'],
        ['One big 30 L farmer pulls the average above the typical farmer', 'Positive skew: mean pulled above median and mode'],
      ],
    },
    concept: [
      '<b>Averages</b> (measures of central tendency) give one typical value: mean, median, mode. <b>Dispersion</b> (range, quartile deviation, mean deviation, standard deviation) tells how spread out the data is. Two data sets can have the same mean but very different spreads.',
      '<b>Skewness</b> describes lack of symmetry. In a symmetric distribution mean = median = mode. A long right tail gives positive skew (mean is pulled up); a long left tail gives negative skew. <b>Kurtosis</b> describes how peaked the distribution is compared with the normal curve.',
      'Two rules save time: adding a constant to every value changes the mean but not the SD; multiplying every value by k multiplies both mean and SD by k (and the variance by k²).',
    ],
    keyPoints: [
      'Mean x̄ = Σfx/Σf; grouped median = l + [(N/2 − cf)/f] × h; grouped mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h',
      'Empirical relation (moderately skewed data): Mode = 3 Median − 2 Mean',
      'Variance σ² = Σ(x − x̄)²/n = Σx²/n − x̄²; SD σ = √variance',
      'Coefficient of variation CV = (σ/x̄) × 100; lower CV means more consistent',
      'Range = max − min; quartile deviation = (Q₃ − Q₁)/2',
      'y = ax + b ⇒ ȳ = ax̄ + b and σᵧ = |a|σₓ (adding b does not change SD)',
      'Karl Pearson’s skewness Sk = (Mean − Mode)/σ = 3(Mean − Median)/σ',
      'Kurtosis β₂ = μ₄/μ₂²: β₂ = 3 mesokurtic (normal), β₂ &gt; 3 leptokurtic (peaked), β₂ &lt; 3 platykurtic (flat)',
    ],
    example: {
      q: 'Find the mean and standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.',
      steps: [
        'Mean = (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = 5.',
        'Σx² = 4 + 16 + 16 + 16 + 25 + 25 + 49 + 81 = 232.',
        'Variance = Σx²/n − x̄² = 232/8 − 25 = 29 − 25 = 4, so σ = √4.',
      ],
      answer: 'Mean = 5, SD = 2',
    },
    shortcut:
      'For the first n natural numbers: mean = (n + 1)/2 and variance = (n² − 1)/12. So the variance of 1, 2, 3, 4, 5 is (25 − 1)/12 = 2 straight away.',
    traps: [
      'Adding a constant to every value does not change the SD or variance.',
      'Multiplying by k multiplies the variance by k², not k.',
      'CET uses the population formula (divide by n) unless the question says otherwise. Dividing by n − 1 gives a different answer.',
    ],
    practice: [
      {
        q: 'A distribution has β₂ = 2.4. It is:',
        options: ['Platykurtic', 'Leptokurtic', 'Mesokurtic', 'Positively skewed'],
        answer: 0,
        why: 'β₂ &lt; 3 means flatter than the normal curve, i.e. platykurtic. Kurtosis says nothing about skewness.',
      },
      {
        q: 'For a moderately skewed distribution, mean = 40 and median = 42. The mode is approximately:',
        options: ['44', '38', '46', '41'],
        answer: 2,
        why: 'Mode = 3 Median − 2 Mean = 126 − 80 = 46.',
      },
      {
        q: 'The variance of the observations 1, 2, 3, 4, 5 (population variance, dividing by n) is:',
        options: ['√2', '3', '2.5', '2'],
        answer: 3,
        why: 'Mean = 3; Σ(x − 3)² = 4 + 1 + 0 + 1 + 4 = 10; variance = 10/5 = 2. (2.5 is the sample variance, dividing by n − 1; √2 is the SD.)',
      },
      {
        q: 'The SD of a set of observations is 4. Each observation is multiplied by 3 and then 5 is added. The new SD is:',
        options: ['17', '12', '36', '9'],
        answer: 1,
        why: 'Multiplying by 3 makes the SD 12; adding 5 does not change it. New SD = 12.',
      },
    ],
  },
  {
    id: 'distributions',
    title: 'Random Variables and Probability Distributions',
    syllabus: 'Probability and Statistics',
    analogy: {
      title: 'Packing Devgad hapus mangoes',
      oneLine: 'Spoilt mangoes per box is a random variable; it follows a Binomial law, rare pests follow Poisson, and mango weights follow a Normal bell curve.',
      story:
        'A Devgad trader packs Alphonso mangoes in boxes of 12. Each mango, independently, has a 10% chance of being spoilt. Open a box and count the spoilt ones: you might get 0, 1, 2 or more. That count is a <b>random variable</b> X, and because each of the 12 mangoes is a separate yes/no trial with the same chance, X follows the <b>Binomial distribution</b> with n = 12 and p = 0.1. Over a whole season the average spoilt per box settles at np = 1.2. That long-run average is the <b>expectation</b> E(X).<br><br>Now think of a very rare pest that hits only 1 mango in 2,500. In a truck of 5,000 mangoes, n is huge and p is tiny, but np = 2 is a sensible number. Counts of such rare events follow the <b>Poisson distribution</b> with λ = np. Finally, weigh the mangoes: most are near 250 g, fewer are much lighter or heavier, and the graph is a symmetric bell. That is the <b>Normal distribution</b>.',
      map: [
        ['Number of spoilt mangoes in a box', 'Random variable X'],
        ['12 mangoes, each spoilt or not with the same chance 0.1', 'Binomial: n = 12, p = 0.1'],
        ['Average spoilt mangoes per box over the season', 'Expectation E(X) = np = 1.2'],
        ['Rare pest in a huge truckload', 'Poisson with λ = np; mean = variance = λ'],
        ['Mango weights bunching around 250 g', 'Normal distribution: bell curve centred at μ'],
      ],
    },
    concept: [
      'A <b>random variable</b> assigns a number to each outcome of an experiment. A discrete random variable has a probability for each value; the probabilities must add to 1. Its expectation E(X) = Σx p(x) is the long-run average, and its variance measures the spread around that average.',
      'The <b>Binomial</b> distribution counts successes in n independent trials with the same success probability p. The <b>Poisson</b> distribution counts rare events in a fixed interval; it is the limit of the binomial when n is large and p is small, with λ = np. For Poisson, mean and variance are both λ.',
      'The <b>Normal</b> distribution is a continuous, symmetric bell curve. Mean = median = mode, the total area under the curve is 1, and probabilities are areas. Any normal X is converted to the standard normal Z = (X − μ)/σ to use tables.',
    ],
    keyPoints: [
      'Discrete RV: Σp(x) = 1; E(X) = Σx p(x); Var(X) = E(X²) − [E(X)]²',
      'E(aX + b) = aE(X) + b; Var(aX + b) = a² Var(X)',
      'Binomial B(n, p): P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ, q = 1 − p; mean np, variance npq (variance &lt; mean)',
      'Poisson: P(X = r) = e<sup>−λ</sup> λʳ / r!; mean = variance = λ',
      'Normal N(μ, σ²): symmetric; mean = median = mode; total area 1; P(X = a) = 0 for a single point',
      'Standard normal Z = (X − μ)/σ has mean 0 and SD 1',
      'About 68%, 95% and 99.7% of values lie within 1, 2 and 3 SDs of the mean',
      'Continuous RV: f(x) ≥ 0 and the total area ∫f(x) dx = 1',
    ],
    example: {
      q: 'A binomial distribution has mean 4 and variance 3. Find n and p.',
      steps: [
        'np = 4 and npq = 3, so q = 3/4.',
        'p = 1 − q = 1/4.',
        'n = 4 ÷ p = 4 ÷ (1/4) = 16.',
      ],
      answer: 'n = 16, p = 1/4',
    },
    shortcut:
      'For a binomial, variance ÷ mean = q. So if a question says “binomial with mean 3 and variance 4”, it is impossible (q would be more than 1). Use this to reject options quickly.',
    traps: [
      'Poisson: mean = variance (not mean = standard deviation).',
      'Binomial variance is npq, not np.',
      'For a continuous distribution the probability of one exact value is 0; only intervals have probability.',
    ],
    practice: [
      {
        q: 'A random variable X takes values 0, 1, 2 with probabilities 1/4, 1/2, 1/4. Its variance is:',
        options: ['1', '3/2', '1/2', '1/4'],
        answer: 2,
        why: 'E(X) = 0 + 1/2 + 2/4 = 1; E(X²) = 0 + 1/2 + 4/4 = 3/2; Var = 3/2 − 1 = 1/2.',
      },
      {
        q: 'For a binomial distribution with n = 10 and p = 0.4, the variance is:',
        options: ['2.4', '4', '0.24', '6'],
        answer: 0,
        why: 'Variance = npq = 10 × 0.4 × 0.6 = 2.4. (4 is the mean.)',
      },
      {
        q: 'For a Poisson variable X, P(X = 1) = P(X = 2). The variance of X is:',
        options: ['√2', '4', '1', '2'],
        answer: 3,
        why: 'λe<sup>−λ</sup> = λ²e<sup>−λ</sup>/2 gives λ = 2. For Poisson, variance = mean = 2.',
      },
      {
        q: 'Marks are normally distributed with mean 50 and SD 10. About what percentage of students score between 40 and 60?',
        options: ['95%', '68%', '50%', '34%'],
        answer: 1,
        why: '40 to 60 is μ − σ to μ + σ, which holds about 68% of a normal distribution.',
      },
    ],
  },
  {
    id: 'correlation-regression',
    title: 'Correlation, Regression and Curve Fitting',
    syllabus: 'Probability and Statistics',
    analogy: {
      title: 'Study hours and marks in a Pune coaching class',
      oneLine: 'Correlation measures how tightly the dots follow a line; regression is the best ruler line through them, used for prediction.',
      story:
        'Sir at a coaching class in Pune notes, for each of 30 students, the hours studied per day (x) and the mock test marks (y). Plotted as dots, they lean upward: more hours, more marks. How tightly the dots hug a straight line is the <b>correlation coefficient</b> r: close to +1 means tight and rising, close to 0 means a shapeless cloud, close to −1 tight and falling.<br><br>Now Sir places a ruler through the cloud. The “best” position is the one where the vertical misses from the dots, squared and added, are as small as possible: that is the <b>least squares</b> line. He uses it to predict marks from hours: the regression line of <b>y on x</b>. But a parent who knows only the marks and wants to guess the hours needs a different line, <b>x on y</b>. The two lines always cross at the point (x̄, ȳ), the “average student”.',
      map: [
        ['Each student’s (hours, marks)', 'A point (x, y) on the scatter diagram'],
        ['How tightly the dots follow a line', 'Correlation coefficient r, −1 ≤ r ≤ 1'],
        ['Ruler placed to make the total squared misses smallest', 'Least squares line of best fit'],
        ['Predicting marks from hours vs hours from marks', 'Two lines: y on x (slope b<sub>yx</sub>) and x on y (b<sub>xy</sub>)'],
        ['The “average student” where both lines meet', 'The point (x̄, ȳ)'],
      ],
    },
    concept: [
      '<b>Correlation</b> measures the strength and direction of a linear relationship between two variables. Karl Pearson’s r = cov(x, y)/(σₓσᵧ) lies between −1 and +1, and it does not change if you shift the origin or change the scale of either variable (except for a sign flip with a negative scale).',
      '<b>Regression</b> gives the line used for prediction. There are two lines: y on x (to predict y) and x on y (to predict x). Their slopes are the regression coefficients b<sub>yx</sub> and b<sub>xy</sub>; their product is r², and r takes the common sign of the two coefficients.',
      '<b>Curve fitting by least squares</b> chooses the constants so that the sum of squared errors is least. For a straight line y = a + bx this gives two normal equations, which you solve for a and b.',
    ],
    keyPoints: [
      'r = cov(x, y)/(σₓσᵧ), cov(x, y) = Σ(x − x̄)(y − ȳ)/n; −1 ≤ r ≤ 1',
      'y on x: y − ȳ = b<sub>yx</sub>(x − x̄), b<sub>yx</sub> = r σᵧ/σₓ',
      'x on y: x − x̄ = b<sub>xy</sub>(y − ȳ), b<sub>xy</sub> = r σₓ/σᵧ',
      'b<sub>yx</sub> × b<sub>xy</sub> = r²; r = ±√(b<sub>yx</sub> b<sub>xy</sub>) with the same sign as the coefficients',
      'Both regression lines pass through (x̄, ȳ); they coincide if r = ±1',
      'Least squares line y = a + bx: Σy = na + bΣx and Σxy = aΣx + bΣx²',
      'Spearman’s rank correlation: R = 1 − 6Σd²/[n(n² − 1)]',
    ],
    example: {
      q: 'The two regression lines are 3x + 2y = 26 and 6x + y = 31. Find x̄, ȳ and r.',
      steps: [
        'Means: solve together. From 6x + y = 31, y = 31 − 6x; then 3x + 62 − 12x = 26, so x = 4 and y = 7.',
        'Try 3x + 2y = 26 as y on x: y = 13 − 1.5x, so b<sub>yx</sub> = −1.5. Then 6x + y = 31 as x on y: x = 31/6 − y/6, so b<sub>xy</sub> = −1/6.',
        'r² = (−1.5)(−1/6) = 0.25 ≤ 1, so this choice is valid. Both coefficients are negative, so r = −0.5.',
      ],
      answer: 'x̄ = 4, ȳ = 7, r = −0.5',
    },
    shortcut:
      'If you are not told which line is which, guess. If b<sub>yx</sub> × b<sub>xy</sub> comes out greater than 1, your guess was wrong; swap the lines.',
    traps: [
      'b<sub>yx</sub> × b<sub>xy</sub> = r², not r. Take the square root and attach the sign of the coefficients.',
      'The two regression lines are different lines (unless r = ±1). Do not use y on x to predict x.',
      'High correlation does not prove that one variable causes the other.',
    ],
    practice: [
      {
        q: 'If b<sub>yx</sub> = 0.8 and b<sub>xy</sub> = 0.45, the correlation coefficient r is:',
        options: ['0.36', '0.6', '0.625', '1.25'],
        answer: 1,
        why: 'r² = 0.8 × 0.45 = 0.36, and both coefficients are positive, so r = 0.6.',
      },
      {
        q: 'The two regression lines are x + 2y = 5 and 2x + 3y = 8. The means (x̄, ȳ) are:',
        options: ['(2, 1)', '(5, 8)', '(1, 2)', '(−1, 3)'],
        answer: 2,
        why: 'Both lines pass through (x̄, ȳ). Solving: x = 5 − 2y, 10 − 4y + 3y = 8, so y = 2 and x = 1.',
      },
      {
        q: 'The least squares line y = a + bx for the points (1, 2), (2, 4), (3, 5) is:',
        options: ['y = 2/3 + 1.5x', 'y = 1.5 + (2/3)x', 'y = 1 + 1.5x', 'y = 0.5 + 1.5x'],
        answer: 0,
        why: 'Σx = 6, Σy = 11, Σx² = 14, Σxy = 25. Normal equations: 11 = 3a + 6b and 25 = 6a + 14b give b = 1.5, a = 2/3.',
      },
      {
        q: 'For 5 pairs of ranks, Σd² = 4. Spearman’s rank correlation coefficient is:',
        options: ['0.2', '0.6', '0.9', '0.8'],
        answer: 3,
        why: 'R = 1 − 6(4)/[5(25 − 1)] = 1 − 24/120 = 0.8.',
      },
    ],
  },
  // ===================================================================
  // ARITHMETIC
  // ===================================================================
  {
    id: 'ratio-percentage',
    title: 'Ratio, Proportion and Percentage',
    syllabus: 'Arithmetic',
    analogy: {
      title: 'A day at Ramesh Kaka’s kirana shop',
      oneLine: 'Mixing two rice qualities is a ratio, the discount board is a percentage, and two offers one after another do not simply add.',
      story:
        'Ramesh Kaka sells two qualities of rice, ₹40/kg and ₹60/kg. A customer wants rice at ₹48/kg, so he mixes them. Each kg of cheap rice is ₹8 below the target and each kg of costly rice is ₹12 above it; to balance, he needs more of the cheap one: cheap : costly = 12 : 8 = 3 : 2. That balancing is the rule of <b>alligation</b>, and the answer is a <b>ratio</b>.<br><br>At Diwali his board says “10% off, plus extra 20% off”. A <b>percentage</b> just means “per hundred”. On a ₹100 item the first offer makes it ₹90, and the extra 20% is taken on ₹90, not on ₹100: ₹72 in the end, a 28% total cut, not 30%. And when sugar becomes 25% costlier, a family that wants the same monthly bill must buy 20% less sugar, not 25% less, because the 25% was calculated on the old price.',
      map: [
        ['Mixing ₹40 and ₹60 rice to sell at ₹48', 'Alligation: ratio = (60 − 48) : (48 − 40) = 3 : 2'],
        ['“Per hundred rupees” on the discount board', 'Percentage = (part/whole) × 100'],
        ['10% off and then an extra 20% off', 'Successive change: −10 − 20 + (10 × 20)/100 = −28%'],
        ['Sugar 25% costlier, same monthly bill', 'Cut consumption by 25/(100 + 25) × 100 = 20%'],
        ['Profit counted on cost price, discount on marked price', 'Always check the base of the percentage'],
      ],
    },
    concept: [
      'A <b>ratio</b> a : b compares two quantities of the same kind; a <b>proportion</b> says two ratios are equal, a : b = c : d, which means ad = bc. To divide an amount in a given ratio, add the ratio parts and give each person their share of the total.',
      'A <b>percentage</b> is a ratio with denominator 100. Every percentage is “of something”: profit and loss percentages are on cost price, discount percentage is on marked price, and a percentage change is on the original value.',
      'When two percentage changes happen one after another, the second acts on the new value. So changes combine as a + b + ab/100 (use negative signs for decreases). Taking a starting value of 100 makes all such questions easy.',
    ],
    keyPoints: [
      'a : b = c : d ⇒ ad = bc; mean proportional of a and b = √(ab); third proportional = b²/a',
      'Divide N in ratio a : b : c → shares aN/(a + b + c), bN/(a + b + c), cN/(a + b + c)',
      'x% of y = y% of x',
      'Successive changes a% and b%: net = a + b + ab/100',
      'Price up r% ⇒ cut consumption by r/(100 + r) × 100% to keep spending the same',
      'If A is r% more than B, then B is r/(100 + r) × 100% less than A',
      'Profit% = (SP − CP)/CP × 100; Discount% = (MP − SP)/MP × 100',
      'Alligation: cheaper : dearer = (dearer price − mean price) : (mean price − cheaper price)',
    ],
    example: {
      q: 'A shopkeeper marks his goods 40% above cost price and gives a 20% discount. Find his profit percentage.',
      steps: [
        'Let CP = ₹100. Marked price = ₹140.',
        '20% discount on ₹140 = ₹28, so SP = ₹112.',
        'Profit = 112 − 100 = ₹12 on CP ₹100. Check with the formula: 40 − 20 + (40 × −20)/100 = 12.',
      ],
      answer: '12% profit',
    },
    shortcut:
      'Start every percentage chain with 100. “Increase 20% then decrease 20%”: 100 → 120 → 96, so a 4% loss, read off in two seconds.',
    traps: [
      'Two successive discounts of 10% and 20% are 28%, not 30%.',
      'If A is 25% more than B, B is 20% less than A, not 25% less (the base changes).',
      'A 20% rise followed by a 20% fall is not “no change”; it is a 4% fall.',
    ],
    practice: [
      {
        q: 'A salary is first increased by 20% and then decreased by 20%. The net change is:',
        options: ['4% decrease', 'No change', '4% increase', '2% decrease'],
        answer: 0,
        why: '100 → 120 → 96. Net change = 20 − 20 − 400/100 = −4%, a 4% decrease.',
      },
      {
        q: '₹1,800 is divided among A, B and C in the ratio 2 : 3 : 4. C’s share is:',
        options: ['₹600', '₹400', '₹900', '₹800'],
        answer: 3,
        why: 'Total parts = 9. C gets 4/9 × 1800 = ₹800.',
      },
      {
        q: 'In what ratio must rice at ₹30/kg be mixed with rice at ₹45/kg to get a mixture worth ₹36/kg?',
        options: ['2 : 3', '3 : 2', '1 : 2', '3 : 1'],
        answer: 1,
        why: 'Cheaper : dearer = (45 − 36) : (36 − 30) = 9 : 6 = 3 : 2. Check: (3 × 30 + 2 × 45)/5 = 36.',
      },
      {
        q: 'A’s income is 25% more than B’s. By what percent is B’s income less than A’s?',
        options: ['25%', '15%', '20%', '33⅓%'],
        answer: 2,
        why: '25/(100 + 25) × 100 = 20%. With B = 100, A = 125; difference 25 on base 125 = 20%.',
      },
    ],
  },
  {
    id: 'time-work',
    title: 'Time and Work (with Pipes and Cisterns)',
    syllabus: 'Arithmetic',
    analogy: {
      title: 'Filling the housing society’s overhead tank',
      oneLine: 'Think per hour: each motor fills a fraction of the tank every hour, fractions add, and a leak subtracts.',
      story:
        'Your housing society’s overhead tank is filled by two motors. Motor A alone fills it in 6 hours, motor B alone in 4 hours. How long with both? Do not add the hours; think <b>per hour</b>. In one hour A fills 1/6 of the tank and B fills 1/4. Together they fill 1/6 + 1/4 = 5/12 of the tank every hour, so the full tank takes 12/5 = 2.4 hours.<br><br>Then the secretary finds a leak at the bottom that would empty a full tank in 12 hours. The leak is simply a negative worker: −1/12 per hour. Now the net filling is 5/12 − 1/12 = 4/12 = 1/3 per hour, so the tank takes 3 hours. Every time-and-work question works the same way: men, women, taps or machines are all just rates that add or subtract.',
      map: [
        ['One full tank', 'Total work = 1 unit (or take the LCM of the times)'],
        ['Motor A fills the tank in 6 hours', 'A’s rate = 1/6 of the work per hour'],
        ['Both motors running together', 'Rates add: 1/6 + 1/4 = 5/12 per hour'],
        ['A leak at the bottom', 'A negative rate: −1/12 per hour'],
        ['Hours needed to fill', 'Time = work ÷ combined rate'],
      ],
    },
    concept: [
      'If someone finishes a job in n days, their rate is 1/n of the job per day. Rates of people working together <b>add</b>; time is never added. Once you have the combined rate, time = 1 ÷ rate.',
      'A convenient trick is to take the total work as the <b>LCM</b> of the given times, so every rate is a whole number of units per day. For 12 and 15 days, take 60 units: rates are 5 and 4 units per day.',
      '<b>Pipes and cisterns</b> are the same idea: a filling pipe is a positive worker, an emptying pipe or leak is a negative worker. For man-days questions, the total work is proportional to men × days × hours.',
    ],
    keyPoints: [
      'A finishes in a days ⇒ A’s one-day work = 1/a',
      'Two together: time T = ab/(a + b); three together: 1/T = 1/a + 1/b + 1/c',
      'M₁D₁H₁/W₁ = M₂D₂H₂/W₂ (men × days × hours per unit of work)',
      'Pipes: filling pipe +, emptying pipe or leak −; net rate × time = 1 tank',
      'If A is k times as efficient as B, A takes 1/k of B’s time',
      'Wages are shared in the ratio of work done',
      'LCM method: total work = LCM of the given days; each rate = total ÷ own days',
    ],
    example: {
      q: 'A can do a piece of work in 12 days and B in 15 days. They work together for 4 days, then A leaves. In how many more days will B finish the work?',
      steps: [
        'Take total work = LCM(12, 15) = 60 units. A does 5 units/day, B does 4 units/day.',
        'In 4 days together: 4 × (5 + 4) = 36 units. Remaining = 60 − 36 = 24 units.',
        'B alone: 24 ÷ 4 = 6 days.',
      ],
      answer: '6 more days (10 days in all)',
    },
    shortcut:
      'For two workers, T = ab/(a + b), “product over sum”. 10 and 15 days together: 150/25 = 6 days. For a filling pipe a and an emptying pipe b: T = ab/(b − a).',
    traps: [
      'Adding times: 6 h + 4 h = 10 h is wrong. Add rates, never times.',
      'Forgetting that a leak or outlet works against you (subtract its rate).',
      'When someone leaves midway, first count the work already done before they left.',
    ],
    practice: [
      {
        q: 'A can do a work in 10 days and B in 15 days. Working together, they finish it in:',
        options: ['12.5 days', '25 days', '6 days', '5 days'],
        answer: 2,
        why: '1/10 + 1/15 = 5/30 = 1/6 per day, so 6 days. (Product over sum: 150/25 = 6.)',
      },
      {
        q: 'Pipe A fills a tank in 20 minutes and pipe B empties it in 30 minutes. With both open, an empty tank fills in:',
        options: ['12 minutes', '50 minutes', '10 minutes', '60 minutes'],
        answer: 3,
        why: 'Net rate = 1/20 − 1/30 = 1/60 per minute, so 60 minutes.',
      },
      {
        q: '12 men can build a wall in 20 days. How many men are needed to build the same wall in 15 days?',
        options: ['16', '9', '15', '18'],
        answer: 0,
        why: 'Total work = 12 × 20 = 240 man-days. 240 ÷ 15 = 16 men.',
      },
      {
        q: 'A is twice as efficient as B. Together they finish a job in 14 days. A alone would take:',
        options: ['42 days', '21 days', '28 days', '7 days'],
        answer: 1,
        why: 'Rates 2 : 1, so together 3 parts per day finish in 14 days: total 42 parts. A does 2 per day: 42/2 = 21 days.',
      },
    ],
  },
  {
    id: 'time-speed-distance',
    title: 'Time, Speed and Distance',
    syllabus: 'Arithmetic',
    analogy: {
      title: 'Watching Mumbai locals at Dadar station',
      oneLine: 'A train must cover its own length to pass a pole, its length plus the platform to clear the platform, and two trains feel only their relative speed.',
      story:
        'Stand on a platform at Dadar and watch. A local train passes the signal pole: the train is not “past” until its last coach crosses the pole, so it must travel <b>its own full length</b>. To clear the whole platform, its engine must go from one end of the platform to beyond the other end until the last coach is out: <b>train length + platform length</b>.<br><br>Now a fast local overtakes a slow local on the next track, in the same direction. From the slow train’s window, the fast one creeps past, because you see only the <b>difference</b> of their speeds. But when a train comes from the opposite direction it whooshes past in seconds, because the speeds <b>add</b>. And since lengths are in metres and speed boards are in km/h, you keep converting with 5/18.',
      map: [
        ['Train passing a signal pole', 'Distance = length of the train'],
        ['Train clearing the whole platform', 'Distance = train length + platform length'],
        ['Fast local overtaking a slow local (same direction)', 'Relative speed = difference of speeds'],
        ['Two locals crossing in opposite directions', 'Relative speed = sum of speeds'],
        ['Speed board in km/h, lengths in metres', 'Multiply km/h by 5/18 to get m/s'],
      ],
    },
    concept: [
      'Everything rests on <b>distance = speed × time</b>. Keep units consistent: convert km/h to m/s by multiplying by 5/18, and m/s to km/h by multiplying by 18/5.',
      '<b>Average speed</b> = total distance ÷ total time. It is not the average of the speeds. For two equal distances covered at speeds u and v, the average speed is 2uv/(u + v), the harmonic mean.',
      'For two moving objects, use <b>relative speed</b>: subtract the speeds when they move in the same direction, add them when they move towards each other. Boats work the same way: the stream helps downstream and opposes upstream.',
    ],
    keyPoints: [
      'Distance = speed × time; 1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h',
      'Average speed = total distance ÷ total time; equal distances at u and v: 2uv/(u + v)',
      'Train passing a pole or a person: time = train length ÷ speed',
      'Train passing a platform, bridge or another train: distance = sum of the lengths',
      'Relative speed: same direction u − v; opposite directions u + v',
      'Boat speed b, stream s: downstream b + s, upstream b − s; b = (down + up)/2, s = (down − up)/2',
      'For a fixed distance, time is inversely proportional to speed',
    ],
    example: {
      q: 'A 240 m long train running at 54 km/h crosses a 360 m long platform. How long does it take?',
      steps: [
        'Speed = 54 × 5/18 = 15 m/s.',
        'Distance = train + platform = 240 + 360 = 600 m.',
        'Time = 600 ÷ 15.',
      ],
      answer: '40 seconds',
    },
    shortcut:
      'Late/early problems: if at speed u you are late and at speed v you are early, distance = (u × v × total time difference)/(v − u). For 4 km/h (10 min late) and 5 km/h (5 min early): (4 × 5 × ¼)/1 = 5 km.',
    traps: [
      'Forgetting to convert km/h to m/s when lengths are in metres.',
      'Adding only the platform length (or only the train length) when a train crosses a platform.',
      'Taking (30 + 20)/2 = 25 as the average speed for equal distances; the correct answer is 2 × 30 × 20/50 = 24.',
    ],
    practice: [
      {
        q: 'Two trains 150 m and 100 m long run in opposite directions at 40 km/h and 50 km/h. How long do they take to cross each other completely?',
        options: ['18 s', '10 s', '90 s', '25 s'],
        answer: 1,
        why: 'Relative speed = 90 km/h = 25 m/s; distance = 150 + 100 = 250 m; time = 250/25 = 10 s.',
      },
      {
        q: 'A student goes to college at 30 km/h and returns by the same road at 20 km/h. The average speed for the whole journey is:',
        options: ['24 km/h', '25 km/h', '22 km/h', '26 km/h'],
        answer: 0,
        why: 'Equal distances: average = 2 × 30 × 20/(30 + 20) = 1200/50 = 24 km/h.',
      },
      {
        q: 'A boat goes downstream at 16 km/h and upstream at 10 km/h. The speed of the stream is:',
        options: ['13 km/h', '6 km/h', '3 km/h', '2 km/h'],
        answer: 2,
        why: 'Stream speed = (downstream − upstream)/2 = (16 − 10)/2 = 3 km/h. (13 is the boat’s speed in still water.)',
      },
      {
        q: 'Walking at 4 km/h a student reaches the station 10 minutes late; walking at 5 km/h he is 5 minutes early. The distance to the station is:',
        options: ['4 km', '6 km', '7.5 km', '5 km'],
        answer: 3,
        why: 'Time difference = 15 min = ¼ h. d/4 − d/5 = ¼ gives d/20 = ¼, so d = 5 km. Check: 75 min vs 60 min.',
      },
    ],
  },

  // ===================================================================
  // BASIC SET THEORY AND FUNCTIONS
  // ===================================================================
  {
    id: 'sets-relations-functions',
    title: 'Sets, Relations and Functions',
    syllabus: 'Basic Set Theory and Functions',
    analogy: {
      title: 'The Aadhaar enrolment camp at the gram panchayat',
      oneLine: 'Giving every villager exactly one Aadhaar number is a function; no two sharing a number makes it one-one; every number used makes it onto.',
      story:
        'An Aadhaar camp is held at the gram panchayat. On one side is the set of <b>villagers</b>; on the other, the pool of 12-digit <b>numbers</b>. The rule is that every villager gets exactly one number: nobody is left out and nobody gets two. A rule like that, which sends each element of the first set to exactly one element of the second, is a <b>function</b>.<br><br>Because no two villagers ever share a number, the function is <b>one-one</b> (injective). The pool has crores of unused numbers, so it is not <b>onto</b>; but if we look only at the numbers actually issued in the village, every one of them belongs to someone, and the function becomes onto too, a <b>bijection</b>, which is why it can be reversed: from the number you can find the person. Compare this with the relation “lives in the same village as”: it holds for yourself (reflexive), works both ways (symmetric) and passes along (transitive), so it is an <b>equivalence relation</b>.',
      map: [
        ['Villagers, and the pool of Aadhaar numbers', 'Domain A and codomain B'],
        ['Every villager gets exactly one number', 'Function f : A → B'],
        ['No two villagers share a number', 'One-one (injective)'],
        ['Every issued number belongs to some villager', 'Onto (surjective); one-one + onto = bijection, so f⁻¹ exists'],
        ['“Lives in the same village as”', 'Equivalence relation: reflexive, symmetric, transitive'],
      ],
    },
    concept: [
      'A <b>set</b> is a well-defined collection. Union, intersection, difference and complement combine sets; Venn diagrams show them. The counting formula n(A ∪ B) = n(A) + n(B) − n(A ∩ B) removes the double count of the common part.',
      'A <b>relation</b> from A to B is any subset of A × B. A relation on A is an <b>equivalence relation</b> when it is reflexive (a R a for all a), symmetric (a R b ⇒ b R a) and transitive (a R b and b R c ⇒ a R c).',
      'A <b>function</b> is a relation in which every element of the domain has exactly one image. It is one-one if different inputs give different outputs, onto if every element of the codomain is used, and invertible only if it is both. Composition f ∘ g means “apply g first, then f”.',
    ],
    keyPoints: [
      'n(A ∪ B) = n(A) + n(B) − n(A ∩ B); n(A ∪ B ∪ C) = Σn(A) − Σn(A ∩ B) + n(A ∩ B ∩ C)',
      'De Morgan: (A ∪ B)′ = A′ ∩ B′; (A ∩ B)′ = A′ ∪ B′',
      'A set with n elements has 2ⁿ subsets (2ⁿ − 1 proper subsets)',
      'n(A × B) = mn; number of relations from A to B = 2<sup>mn</sup>; relations on a set of n elements = 2<sup>n²</sup>',
      'Equivalence relation = reflexive + symmetric + transitive',
      'Functions from A (m elements) to B (n elements): nᵐ in all; one-one: ⁿPₘ (m ≤ n); bijections when m = n: n!',
      '(f ∘ g)(x) = f(g(x)); in general f ∘ g ≠ g ∘ f; f⁻¹ exists only if f is a bijection',
    ],
    example: {
      q: 'In a class of 60 students, 35 like cricket, 25 like kabaddi and 10 like both. How many like neither game?',
      steps: [
        'n(C ∪ K) = n(C) + n(K) − n(C ∩ K) = 35 + 25 − 10 = 50.',
        'Neither = total − n(C ∪ K) = 60 − 50.',
      ],
      answer: '10 students',
    },
    shortcut:
      'For “how many functions or relations” questions, count choices element by element. Each of the m elements of A picks an image from n choices, so there are nᵐ functions. Each of the mn ordered pairs is either in or out of a relation, so there are 2<sup>mn</sup> relations.',
    traps: [
      'n(A ∪ B) = n(A) + n(B) only when A and B are disjoint.',
      'f ∘ g means g first, then f. (f ∘ g)(x) and (g ∘ f)(x) are usually different.',
      'A relation can be symmetric and transitive without being reflexive. Check every element has (a, a).',
    ],
    practice: [
      {
        q: 'The number of relations on the set A = {1, 2, 3} is:',
        options: ['8', '64', '9', '512'],
        answer: 3,
        why: 'n(A × A) = 9 ordered pairs, each in or out: 2⁹ = 512 relations.',
      },
      {
        q: 'If f(x) = 2x + 3 and g(x) = x², then (f ∘ g)(2) is:',
        options: ['49', '7', '11', '19'],
        answer: 2,
        why: 'g(2) = 4, then f(4) = 2(4) + 3 = 11. (49 is (g ∘ f)(2).)',
      },
      {
        q: 'The number of one-one functions from {a, b, c} to {1, 2, 3, 4} is:',
        options: ['64', '24', '81', '12'],
        answer: 1,
        why: 'a has 4 choices, b has 3, c has 2: ⁴P₃ = 24. (64 = 4³ counts all functions.)',
      },
      {
        q: 'On A = {1, 2, 3}, the relation R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)} is:',
        options: ['An equivalence relation', 'Reflexive only', 'Symmetric but not transitive', 'Transitive but not symmetric'],
        answer: 0,
        why: 'All (a, a) are present (reflexive); (1, 2) and (2, 1) are both present (symmetric); every chain such as (1, 2), (2, 1) → (1, 1) is present (transitive).',
      },
    ],
  },

  // ===================================================================
  // MENSURATION
  // ===================================================================
  {
    id: 'mensuration-2d',
    title: 'Mensuration 2D: Triangles, Quadrilaterals, Circles',
    syllabus: 'Mensuration',
    analogy: {
      title: 'Tiling the floor of a new flat',
      oneLine: 'Tiles needed is the area, the skirting strip along the walls is the perimeter, and doubling the room’s size needs four times the tiles.',
      story:
        'Your family has bought a new flat in Pune and the tile mistri comes to measure. The number of 1 ft × 1 ft tiles needed to cover the floor is the <b>area</b>. The skirting strip that runs along the bottom of every wall is the <b>perimeter</b>. They are measured in different units: area in square feet, perimeter in feet.<br><br>Now the mistri says: “The hall is double the length and double the width of the bedroom.” The skirting doubles, but the tiles become <b>four</b> times, because area grows with the square of the scale. For the round dining table, the decorative edge strip is the circumference 2πr, while the tablecloth must cover the area πr². And for the triangular corner piece he cuts, the area is half of the rectangle around it: ½ × base × height.',
      map: [
        ['Number of 1 ft × 1 ft tiles to cover the floor', 'Area (square units)'],
        ['Skirting strip along the walls', 'Perimeter (units)'],
        ['Hall with double the length and double the width', 'Perimeter × 2, but area × 4 (area scales as k²)'],
        ['Edge strip vs tablecloth for a round table', 'Circumference 2πr vs area πr²'],
        ['Triangular corner tile cut from a rectangle', 'Triangle area = ½ × base × height'],
      ],
    },
    concept: [
      '<b>Perimeter</b> is the length of the boundary; <b>area</b> is the amount of surface enclosed. Always check units: 1 m = 100 cm, but 1 m² = 10,000 cm².',
      'For triangles, use ½ × base × height when the height is known, Heron’s formula when all three sides are known, and (√3/4)a² for an equilateral triangle. Quadrilaterals reduce to rectangles and triangles; for a rhombus, the diagonals bisect each other at right angles.',
      'For circles, the radius drives everything: area πr², circumference 2πr, and a sector of angle θ is the fraction θ/360 of the full circle. If every length is multiplied by k, the perimeter is multiplied by k and the area by k².',
    ],
    keyPoints: [
      'Triangle: ½ × base × height = ½ ab sin C; Heron: √[s(s − a)(s − b)(s − c)], s = (a + b + c)/2',
      'Equilateral triangle of side a: area (√3/4)a², height (√3/2)a',
      'Rectangle: area lb, perimeter 2(l + b), diagonal √(l² + b²); square: area a² = d²/2, diagonal a√2',
      'Parallelogram: base × height; rhombus: ½ d₁d₂, side = ½√(d₁² + d₂²); trapezium: ½ (sum of parallel sides) × height',
      'Circle: area πr², circumference 2πr; semicircle perimeter πr + 2r; ring: π(R² − r²)',
      'Sector of angle θ°: area (θ/360)πr², arc length (θ/360) × 2πr',
      'Wheel: distance in one revolution = circumference; revolutions = distance ÷ 2πr',
      'Each length × k ⇒ perimeter × k, area × k² (r up 10% ⇒ area up 21%)',
    ],
    example: {
      q: 'The radius of a cycle wheel is 35 cm. How many revolutions does it make to cover 1.1 km? (π = 22/7)',
      steps: [
        'Circumference = 2πr = 2 × (22/7) × 35 = 220 cm.',
        '1.1 km = 1,10,000 cm.',
        'Revolutions = 1,10,000 ÷ 220.',
      ],
      answer: '500 revolutions',
    },
    shortcut:
      'Percentage change in area when every length changes by x%: use the successive-change formula x + x + x²/100. Radius +20% ⇒ area +(20 + 20 + 4) = 44%. Radius −10% ⇒ area −19%.',
    traps: [
      'Mixing units: convert everything to the same unit before multiplying, especially cm² and m².',
      'Using diameter where the formula needs radius.',
      'A rhombus’s area uses the diagonals (½ d₁d₂); its side comes from half-diagonals by Pythagoras, not from d₁ or d₂ directly.',
    ],
    practice: [
      {
        q: 'The diagonals of a rhombus are 16 cm and 12 cm. Its perimeter is:',
        options: ['56 cm', '48 cm', '96 cm', '40 cm'],
        answer: 3,
        why: 'Half-diagonals 8 and 6 meet at right angles, so side = √(64 + 36) = 10 cm; perimeter = 40 cm.',
      },
      {
        q: 'If the radius of a circle is increased by 20%, its area increases by:',
        options: ['20%', '44%', '40%', '21%'],
        answer: 1,
        why: 'Area ∝ r²: 1.2² = 1.44, an increase of 44%.',
      },
      {
        q: 'The area of an equilateral triangle of side 8 cm is:',
        options: ['32√3 cm²', '8√3 cm²', '16√3 cm²', '64 cm²'],
        answer: 2,
        why: '(√3/4) × 8² = (√3/4) × 64 = 16√3 cm².',
      },
      {
        q: 'The area of a sector of a circle of radius 14 cm with central angle 90° is (π = 22/7):',
        options: ['154 cm²', '44 cm²', '616 cm²', '308 cm²'],
        answer: 0,
        why: '(90/360) × (22/7) × 14² = ¼ × 616 = 154 cm². (616 is the full circle and 308 a semicircle.)',
      },
    ],
  },
  {
    id: 'mensuration-3d',
    title: 'Mensuration 3D: Cube, Cuboid, Sphere, Cylinder, Cone',
    syllabus: 'Mensuration',
    analogy: {
      title: 'An ice-cream parlour on a Sunday evening',
      oneLine: 'The ice-cream inside is volume, the paper wrapper is surface area, and three cones fill one tub of the same base and height.',
      story:
        'At an ice-cream parlour you see three shapes: a <b>cylindrical</b> tub, <b>cone</b> cups and round <b>scoops</b>. How much ice-cream a container holds is its <b>volume</b>. The paper wrapper rolled around a cone is its <b>curved surface area</b>, which has nothing to do with how much it holds.<br><br>Try this with a cone and a tub that have the same base radius and the same height: it takes exactly <b>three</b> cone-fulls to fill the tub. That is why V<sub>cone</sub> = ⅓ πr²h, one-third of the cylinder. The scoop on top of a cone is a hemisphere, ⅔ πr³. And when the shopkeeper melts a big block of ice-cream and refills it into small cones, no ice-cream is created or lost: the total volume before equals the total volume after. That single idea solves every “melted and recast” question.',
      map: [
        ['How much ice-cream a container holds', 'Volume (cubic units)'],
        ['Paper wrapper rolled around a cone', 'Curved surface area πrl, with slant height l = √(r² + h²)'],
        ['Three cone-fulls fill a tub of the same base and height', 'V<sub>cone</sub> = ⅓ πr²h = ⅓ V<sub>cylinder</sub>'],
        ['Round scoop sitting on the cone', 'Hemisphere: volume ⅔ πr³'],
        ['Melting a big block and refilling small cones', 'Recasting: total volume stays the same'],
      ],
    },
    concept: [
      '<b>Volume</b> measures the space inside a solid (cubic units); <b>surface area</b> measures the material needed to cover it (square units). Curved surface area (CSA) covers only the curved part; total surface area (TSA) adds the flat ends too.',
      'Cylinder, cone and sphere are linked: a cone is one-third of the cylinder with the same base and height, and a sphere of radius r has two-thirds the volume of the cylinder that just encloses it (radius r, height 2r). For a cone, keep the vertical height h and the slant height l separate: volume uses h, surface area uses l.',
      'For melting and recasting, equate volumes. If every length is multiplied by k, surface areas are multiplied by k² and volumes by k³.',
    ],
    keyPoints: [
      'Cuboid: V = lbh; TSA = 2(lb + bh + hl); diagonal √(l² + b² + h²)',
      'Cube: V = a³; TSA = 6a²; diagonal a√3',
      'Cylinder: V = πr²h; CSA = 2πrh; TSA = 2πr(r + h)',
      'Cone: V = ⅓πr²h; CSA = πrl; TSA = πr(l + r); l = √(r² + h²)',
      'Sphere: V = (4/3)πr³; surface area 4πr²',
      'Hemisphere: V = (2/3)πr³; CSA = 2πr²; TSA = 3πr²',
      'Recasting: volume before = volume after; number of small pieces = big volume ÷ one small volume',
      'Lengths × k ⇒ surface area × k², volume × k³',
    ],
    example: {
      q: 'A metal sphere of radius 6 cm is melted and recast into a cylinder of radius 4 cm. Find the height of the cylinder.',
      steps: [
        'Volume of sphere = (4/3)π(6)³ = (4/3)π × 216 = 288π cm³.',
        'Volume of cylinder = π(4)²h = 16πh.',
        'Equate: 16πh = 288π, so h = 288/16.',
      ],
      answer: '18 cm',
    },
    shortcut:
      'In recasting questions π cancels from both sides, so never multiply out 22/7. Write both volumes with π, cancel it, and work with the plain numbers.',
    traps: [
      'Using the vertical height h in the cone’s CSA formula. CSA uses the slant height l.',
      'Using TSA when the object is open (an open tank or a hemispherical bowl has no lid: bowl uses 2πr², not 3πr²).',
      'Doubling the radius doubles the volume? No: volume grows 2³ = 8 times.',
    ],
    practice: [
      {
        q: 'How many cubes of edge 2 cm can be cut from a cuboid measuring 6 cm × 8 cm × 10 cm?',
        options: ['240', '120', '60', '30'],
        answer: 2,
        why: '(6 × 8 × 10)/(2 × 2 × 2) = 480/8 = 60. (3 × 4 × 5 along the edges confirms 60.)',
      },
      {
        q: 'The curved surface area of a cone with radius 7 cm and height 24 cm is (π = 22/7):',
        options: ['704 cm²', '550 cm²', '1232 cm²', '154 cm²'],
        answer: 1,
        why: 'l = √(49 + 576) = 25 cm; CSA = πrl = (22/7) × 7 × 25 = 550 cm². (704 is the TSA, 1232 cm³ the volume.)',
      },
      {
        q: 'If the radius of a sphere is doubled, its volume becomes:',
        options: ['2 times', '4 times', '6 times', '8 times'],
        answer: 3,
        why: 'Volume ∝ r³, so it becomes 2³ = 8 times.',
      },
      {
        q: 'The total surface area of a cube is 150 cm². Its volume is:',
        options: ['125 cm³', '25 cm³', '150 cm³', '625 cm³'],
        answer: 0,
        why: '6a² = 150 gives a² = 25, a = 5 cm, so volume = 5³ = 125 cm³.',
      },
    ],
  },
];

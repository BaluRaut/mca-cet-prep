// Marathi helper content for the Computer section. Keyed by the English topic ids in ../computer.mjs.
// Questions and options stay in English on the site; `q` here is only a Marathi helper.
export default {
  // ───────────────────────────── Computer Basics ─────────────────────────────
  'cpu-organization': {
    title: 'संगणकाची रचना आणि CPU',
    analogy: {
      title: 'किराणा दुकानदार आणि सामानाची चिठ्ठी',
      oneLine: 'पुढच्या ओळीवर बोट (PC), ओळ वाचायची (fetch), समजून घ्यायची (decode), तोलून बेरीज करायची (execute) — आणि पुन्हा तेच.',
      story: `कोल्हापूरच्या एका गल्लीत रमेशचं किराणा दुकान आहे. एक गिऱ्हाईक त्याच्या हातात चिठ्ठी ठेवतं: "1 kg साखर, 2 पुडे Parle-G, 500 g तूरडाळ". पुढे जी ओळ करायची आहे, त्या ओळीवर रमेश बोट ठेवतो. ती ओळ तो वाचतो (<b>fetch</b>), तिचा अर्थ समजून घेतो — कोणत्या फळीवरचं, किती (<b>decode</b>) — मग माल तोलतो आणि त्याची किंमत आपल्या छोट्या पाटीवरच्या चालू बेरजेत मिळवतो (<b>execute</b>). बोट पुढच्या ओळीवर सरकतं आणि चिठ्ठी संपेपर्यंत हेच चक्र चालू राहतं. ती चिठ्ठी म्हणजे मेमरीत ठेवलेला program; त्याचं बोट म्हणजे <b>Program Counter</b>; प्रत्येक ओळ समजून घेऊन हातांना काय करायचं ते सांगणारा त्याचा मेंदू म्हणजे <b>Control Unit</b>; कॅल्क्युलेटर म्हणजे <b>ALU</b>; आणि चालू बेरीज धरून ठेवणारी पाटी म्हणजे एक <b>register</b> (accumulator). लक्षात घ्या — त्याचा मेंदू स्वतः काहीच तोलत नाही, बेरीजही करत नाही; तो फक्त हुकूम देतो. Control Unit नेमकं हेच करतो.`,
      map: [
        ['गिऱ्हाइकाची चिठ्ठी (क्रमाने लिहिलेले सामान)', 'मुख्य मेमरीत साठवलेला program'],
        ['पुढे करायच्या ओळीवर ठेवलेलं बोट', 'Program Counter (PC)'],
        ['आत्ता वाचत असलेली ओळ', 'Instruction Register (IR)'],
        ['मेंदू: ओळ समजून घेतो, हातांना हुकूम देतो', 'Control Unit — decode करून control signals पाठवतो'],
        ['कॅल्क्युलेटर + चालू बेरजेची पाटी', 'ALU + accumulator register'],
      ],
    },
    concept: [
      `जवळजवळ प्रत्येक संगणक (computer) <b>von Neumann (stored-program) प्रारूप</b> पाळतो: program आणि त्याचा data दोन्ही एकत्र मुख्य स्मृतीत (main memory) असतात आणि CPU एका वेळी एक instruction आणतो. संगणकात पाच कार्यात्मक घटक असतात — <b>input, मेमरी, ALU, control unit, output</b>. <b>CPU</b> म्हणजे ALU + control unit + registers, एकाच chip वर.`,
      `<b>ALU</b> (अंकगणित व तर्क एकक — Arithmetic Logic Unit) अंकगणित (+, −) आणि तार्किक क्रिया (AND, OR, NOT, तुलना) करतो. <b>Control Unit</b> (नियंत्रण एकक) कोणत्याही data वर स्वतः प्रक्रिया करत नाही: तो प्रत्येक instruction decode करतो आणि clock च्या तालावर इतर सर्व घटकांना <i>control signals</i> (memory read, memory write, ALU ने कोणती क्रिया करायची) पाठवतो. <b>Registers</b> म्हणजे CPU च्या आतली अगदी छोटी, सर्वांत वेगवान साठवण जागा: PC, IR, MAR, MDR (यालाच MBR म्हणतात), accumulator आणि flag (status) register.`,
      `CPU <b>instruction cycle</b> सतत पुन्हा पुन्हा चालवतो: <b>fetch</b> (MAR ← PC; MDR ← M[MAR]; IR ← MDR; PC ← PC + 1), <b>decode</b> (CU opcode वाचतो), <b>execute</b> (ALU, मेमरी किंवा I/O क्रिया; flags अद्ययावत होतात). त्यानंतर interrupt आला आहे का ते तपासतो आणि पुन्हा सुरुवात करतो. वेग clock ठरवतो: 2 GHz clock म्हणजे दर सेकंदाला 2 × 10⁹ cycles, म्हणून एक cycle 0.5 ns चा असतो.`,
    ],
    keyPoints: [
      'CPU = ALU + Control Unit + registers; CU हुकूम देतो, ALU हिशोब करतो',
      'PC: <b>पुढच्या</b> instruction चा address; IR: <b>आत्ता</b> execute होत असलेली instruction',
      'MAR: मेमरीकडे पाठवलेला address; MDR/MBR: मेमरीकडून येणारा किंवा मेमरीकडे जाणारा data',
      'Accumulator मध्ये ALU चे निकाल राहतात; flag register मध्ये Zero, Sign, Carry, Overflow bits असतात',
      'Fetch: MAR ← PC → MDR ← M[MAR] → IR ← MDR, PC ← PC + 1',
      'Clock period = 1 ÷ frequency; instruction ला लागणारा वेळ = cycles × period',
      'Von Neumann: program आणि data साठी एकच मेमरी (“von Neumann bottleneck”); Harvard: instructions आणि data साठी वेगवेगळ्या मेमरी',
      'Control unit ची रचना: hardwired (वेगवान, ठरलेले logic) किंवा microprogrammed (control memory, बदल करणे सोपे)',
    ],
    example: {
      q: 'मेमरीत address 100–102 वर हा program आहे: <code>LOAD 500</code>, <code>ADD 501</code>, <code>STORE 502</code>. M[500] = 7 आणि M[501] = 5. PC 100 पासून सुरू होतो. registers चा मागोवा घ्या. शेवटी M[502] आणि PC किती?',
      steps: [
        'Fetch 1: MAR ← 100, IR ← <code>LOAD 500</code>, PC ← 101. Execute: AC ← M[500] = 7.',
        'Fetch 2: MAR ← 101, IR ← <code>ADD 501</code>, PC ← 102. Execute: ALU बेरीज करतो, AC ← 7 + M[501] = 12.',
        'Fetch 3: MAR ← 102, IR ← <code>STORE 502</code>, PC ← 103. Execute: M[502] ← AC = 12.',
        'प्रत्येक fetch च्या वेळी PC एकने वाढतो, म्हणून तीन instructions नंतर तो 103 कडे निर्देश करतो.',
      ],
      answer: 'M[502] = 12, PC = 103',
    },
    shortcut:
      '“कोणता register” असा प्रश्न आला की स्वतःला विचारा: यात <i>address</i> आहे की <i>content</i>? Address PC आणि MAR मध्ये राहतात; content IR, MDR आणि accumulator मध्ये. Clock च्या प्रश्नांसाठी, ns मधील period = 1 ÷ (GHz ची किंमत): 2.5 GHz → 0.4 ns.',
    traps: [
      'PC मध्ये चालू instruction चा नव्हे, तर <b>पुढच्या</b> instruction चा address असतो (fetch च्या वेळीच तो वाढवला जातो).',
      'Control Unit कोणताही हिशोब करत नाही; a &lt; b सारखी तुलनासुद्धा ALU च करतो.',
    ],
    practice: [
      { q: 'पुढे fetch होणाऱ्या instruction चा address कोणत्या register मध्ये असतो?', why: 'PC नेहमी पुढच्या instruction कडे निर्देश करतो; IR मध्ये सध्या execute होत असलेली instruction असते.' },
      { q: 'Instruction cycle मधील fetch टप्प्याचे अचूक वर्णन कोणता क्रम करतो?', why: 'Address PC → MAR जातो, मेमरी तो word MDR मध्ये देते, तो IR मध्ये copy होतो आणि PC एकने वाढतो.' },
      { q: 'CPU चा कोणता घटक instructions चा अर्थ लावतो आणि timing व control signals निर्माण करतो, पण स्वतः data वर प्रक्रिया करत नाही?', why: 'CU decode करतो आणि दिशा देतो; data वरची सगळी प्रक्रिया ALU करतो.' },
      { q: 'एक processor 2.5 GHz वर चालतो. एका instruction ला 5 clock cycles लागतात. त्या instruction ला किती वेळ लागेल?', why: 'Clock period = 1 ÷ 2.5 GHz = 0.4 ns. वेळ = 5 × 0.4 ns = 2 ns.' },
    ],
  },

  'instructions-addressing': {
    title: 'Instruction ची रचना आणि Addressing Modes',
    analogy: {
      title: 'मुंबईच्या डबेवाल्यांचा झाकणावरचा कोड',
      oneLine: 'काम ठरलेलं (opcode); झाकणावरचा कोड सांगतो जागा कशी शोधायची (addressing mode).',
      story: `मुंबईचे डबेवाले रोज लाखो डबे पोहोचवतात, आणि चुका जवळजवळ होतच नाहीत — प्रत्येक झाकणावर रंगवलेल्या एका छोट्या कोडच्या जोरावर. प्रत्येक डबा म्हणजे एक <b>instruction</b> समजा: काम ठरलेलं आहे — “हा डबा पोहोचव” (हा <i>opcode</i>) — आणि रंगवलेला कोड सांगतो <i>कुठे</i> (हे <i>address field</i>). कधी कधी हवी असलेली गोष्ट डब्यातच असते, जसं आत ठेवलेली पैशांची चिठ्ठी — कुठे जायची गरजच नाही (<b>immediate</b>). बहुतेक वेळा झाकणावर ऑफिसचं नेमकं टेबलच लिहिलेलं असतं (<b>direct</b>). कधी झाकणावर फक्त “चर्चगेटच्या sorting desk वर विचारा” एवढंच असतं, आणि तो desk खरं ऑफिस सांगतो — म्हणजे एक जास्तीची फेरी (<b>indirect</b>). आणि कधी लिहिलेलं असतं “इमारत 4, तिथून 3 मजले वर” — एक ठरलेली सुरुवात आणि त्यात एक मोजणी (<b>indexed / base + offset</b>). डबा पोहोचवण्याचं काम एकच, फक्त जागा सांगण्याच्या पद्धती वेगवेगळ्या — addressing modes म्हणजे एवढंच.`,
      map: [
        ['चिठ्ठीवरचं काम: “पोहोचव”', 'Opcode (कोणती क्रिया)'],
        ['डब्यातच ठेवलेले पैसे', 'Immediate: operand instruction मध्येच असतो'],
        ['झाकणावर ऑफिसचं नेमकं टेबल', 'Direct: address field = effective address'],
        ['झाकण म्हणतं “sorting desk वर विचारा”; desk खरा पत्ता देतो', 'Indirect: EA = M[address field] (एक जास्तीचा memory access)'],
        ['“इमारत 4, तिथून 3 मजले वर”', 'Indexed / base: EA = register + offset'],
      ],
    },
    concept: [
      `Instruction म्हणजे bits चा एक नमुना, जो <b>fields</b> मध्ये विभागलेला असतो: एक <b>opcode</b> (कोणती क्रिया) आणि एक किंवा अधिक <b>operand/address fields</b> (data कुठे आहे). Opcode साठी n bits असतील तर CPU मध्ये जास्तीत जास्त 2<sup>n</sup> वेगवेगळ्या क्रिया असू शकतात. Address च्या संख्येनुसार instructions चे प्रकार: <b>3-address</b> (ADD R1, R2, R3), <b>2-address</b> (ADD R1, R2), <b>1-address</b> (ADD X, दुसरा operand accumulator असतो) आणि <b>0-address</b> (stack वरचा ADD, postfix evaluation साठी वापरतात).`,
      `<b>Addressing mode</b> CPU ला operand कसा शोधायचा ते सांगतो; शेवटी जो memory address वापरला जातो तो <b>effective address (EA)</b>. <b>Immediate</b>: operand instruction मध्येच (memory access नाही). <b>Direct</b>: EA = address field. <b>Indirect</b>: EA = M[address field], म्हणून एक जास्तीचा memory access. <b>Register</b>: operand register मध्ये. <b>Register indirect</b>: EA = register मधील किंमत. <b>Indexed</b>: EA = address field + index register (arrays साठी उपयोगी). <b>Relative</b>: EA = PC + offset (branches आणि relocatable code साठी उपयोगी). <b>Implied</b>: operand opcode नेच ठरलेला असतो (उदा. CMA, accumulator चा complement).`,
    ],
    keyPoints: [
      'Instruction = opcode + address field(s); n opcode bits → 2<sup>n</sup> क्रिया',
      'Address साठीचे bits = instruction ची लांबी − opcode bits − register-field bits',
      'Immediate: operand = instruction मधील किंमत (एक constant, memory access नाही)',
      'Direct: EA = A; Indirect: EA = M[A] (एक जास्तीचा memory reference)',
      'Register indirect: EA = (R); Indexed: EA = A + (XR); Base: EA = (BR) + A',
      'PC-relative: EA = PC + offset, आणि PC आधीच पुढच्या instruction कडे निर्देश करत असतो',
      '0-address instructions stack वर काम करतात (PUSH, POP, ADD) — postfix रूप',
    ],
    example: {
      q: 'एका instruction चे address field 300 आहे आणि index register XR मध्ये 100 आहे. मेमरी: M[300] = 500, M[400] = 700, M[500] = 800. Immediate, direct, indirect आणि indexed modes मध्ये operand काढा.',
      steps: [
        'Immediate: address field हाच operand → <b>300</b>.',
        'Direct: EA = 300, operand = M[300] → <b>500</b>.',
        'Indirect: EA = M[300] = 500, operand = M[500] → <b>800</b>.',
        'Indexed: EA = 300 + 100 = 400, operand = M[400] → <b>700</b>.',
      ],
      answer: 'Immediate 300, Direct 500, Indirect 800, Indexed 700',
    },
    shortcut:
      'Instruction fetch झाल्यानंतर operand मिळवायला मेमरीच्या किती फेऱ्या लागतात ते मोजा: immediate 0, register 0, direct 1, register indirect 1, indexed 1, indirect 2. मग “सर्वांत वेगवान / सर्वांत संथ mode” असे प्रश्न आपोआप सुटतात.',
    traps: [
      'PC-relative mode मध्ये offset हा <b>वाढवलेल्या</b> PC मध्ये (म्हणजे पुढच्या instruction च्या address मध्ये) मिळवला जातो, branch instruction च्या स्वतःच्या address मध्ये नाही — प्रश्नात वेगळं सांगितलं नसेल तर.',
      'Immediate mode म्हणजे “वेगवान मेमरी” नव्हे; त्याचा अर्थ operand साठी मेमरीत जावंच लागत नाही.',
    ],
    practice: [
      { q: 'कोणत्या addressing mode मध्ये operand स्वतःच instruction चा भाग असतो?', why: 'Immediate mode मध्ये operand field मध्ये प्रत्यक्ष किंमतच असते, उदा. MOV A, #5.' },
      { q: 'कोणत्या addressing mode मध्ये operand मिळवायला (instruction fetch झाल्यानंतर) दोन memory references लागतात?', why: 'आधी M[A] वाचून effective address मिळवायचा, मग M[EA] वाचून operand मिळवायचा.' },
      { q: 'एका संगणकात 32-bit instructions आणि 128 वेगवेगळ्या क्रिया आहेत. प्रत्येक instruction मध्ये एक register operand (32 registers) आणि एक memory address field आहे. Memory address साठी किती bits उरतात?', why: 'Opcode = log₂128 = 7 bits; register = log₂32 = 5 bits; address = 32 − 7 − 5 = 20 bits.' },
      { q: 'PC-relative addressing वापरणारी 2-word branch instruction address 1000 वर साठवलेली आहे (word-addressable मेमरी). तिचे offset field +20 आहे, आणि instruction fetch झाल्यानंतर (PC तिच्या पुढे सरकल्यानंतर) offset PC मध्ये मिळवला जातो. Target (effective) address किती?', why: 'Fetch नंतर PC = 1000 + 2 = 1002. EA = 1002 + 20 = 1022.' },
    ],
  },

  'io-backup-devices': {
    title: 'Input / Output आणि Backup साधने',
    analogy: {
      title: 'तलाठी कार्यालय आणि शेतकऱ्याच्या सातबाऱ्याच्या झेरॉक्स',
      oneLine: 'भरलेला अर्ज आत = input, छापलेला उतारा बाहेर = output, घरी ठेवलेली झेरॉक्स = backup.',
      story: `गावातलं तलाठी कार्यालय डोळ्यांसमोर आणा — इथे जमिनीच्या नोंदी, म्हणजे सातबारा उतारे ठेवले जातात. शेतकरी भरलेला अर्ज घेऊन येतो आणि कारकून तो संगणकात टाइप करतो: हे <b>input</b>. कार्यालय नवा सातबारा उतारा छापून शेतकऱ्याच्या हातात देतं: हे <b>output</b>. शेतकरी शहाणा आहे — प्रत्येक उताऱ्याची एक झेरॉक्स तो घरी जपून ठेवतो, म्हणजे एका ठिकाणी पूर आला किंवा आग लागली तरी त्याचा पुरावा नष्ट होत नाही — हा <b>backup</b>. गोडाऊनमधली जुनी नोंदवही सुरुवातीपासून पान-पान उलटूनच शोधावी लागते; रजिस्टरमध्ये मात्र आपण थेट हव्या त्या पानावर जाऊ शकतो — हाच फरक <b>sequential access</b> (magnetic tape) आणि <b>direct access</b> (disk) मध्ये आहे. आणि जेव्हा थोडीच पानं बदलतात, तेव्हा तो पूर्ण फाइल पुन्हा झेरॉक्स न करता फक्त नवी पानं झेरॉक्स करतो — हा <b>incremental backup</b>.`,
      map: [
        ['कारकुनाने टाइप केलेला शेतकऱ्याचा अर्ज', 'Input साधन (keyboard, scanner, OMR, MICR)'],
        ['छापून हातात दिलेला सातबारा उतारा', 'Output साधन (printer, monitor)'],
        ['घरी जपून ठेवलेली झेरॉक्स', 'दुसऱ्या साधनावर किंवा दुसऱ्या ठिकाणी ठेवलेली backup प्रत'],
        ['सुरुवातीपासून पान-पान वाचावी लागणारी जुनी नोंदवही', 'Magnetic tape — sequential access'],
        ['मागच्या प्रतीनंतर बदललेली पानंच copy करणे', 'Incremental backup'],
      ],
    },
    concept: [
      `<b>Input साधने</b> (Input devices) बाहेरच्या जगातला data संगणकाला समजणाऱ्या signals मध्ये बदलतात: keyboard, mouse, scanner, microphone, webcam, joystick, light pen, barcode reader, biometric scanner. तीन खास readers परीक्षेत हमखास विचारले जातात: <b>MICR</b> (Magnetic Ink Character Recognition) बँकेच्या चेकच्या तळाशी magnetic शाईने छापलेले आकडे वाचतो; <b>OMR</b> (Optical Mark Reader) उत्तरपत्रिकेवरची भरलेली वर्तुळे ओळखतो; <b>OCR</b> (Optical Character Recognition) प्रतिमेतील छापील मजकूर edit करता येणाऱ्या मजकुरात बदलतो. Touch screen हे input आणि output दोन्ही प्रकारचे साधन आहे.`,
      `<b>Output साधने</b> (Output devices): monitors (CRT, LCD, LED), speakers, projectors, plotters (मोठी engineering drawings) आणि printers. <b>Impact printers</b> ribbon वर ठोका मारतात: dot-matrix (वेग characters per second, cps मध्ये), line printer (lines per minute, lpm), daisy wheel. <b>Non-impact printers</b> कागदावर ठोका मारत नाहीत: inkjet, laser (pages per minute, ppm), thermal (बिल छापणारे printers). छपाईची गुणवत्ता <b>dpi</b> (dots per inch) मध्ये मोजतात.`,
      `<b>Backup साधने</b> data ची दुसरी प्रत ठेवतात: magnetic tape (स्वस्त, प्रचंड क्षमता, sequential — archives साठी), external hard disks, optical discs (CD ≈ 700 MB, DVD ≈ 4.7 GB single layer, Blu-ray ≈ 25 GB single layer), flash storage (pen drive, SSD, memory card) आणि cloud/network storage. Backup चे प्रकार: <b>full</b> (सगळं), <b>incremental</b> (कोणत्याही प्रकारच्या मागच्या backup नंतरचे बदल — घ्यायला सर्वांत जलद, restore करायला सर्वांत संथ) आणि <b>differential</b> (मागच्या <i>full</i> backup नंतरचे सगळे बदल — restore साठी फक्त full + सर्वांत नवा differential पुरतो).`,
    ],
    keyPoints: [
      'MICR → बँकेचे चेक; OMR → वर्तुळे भरायच्या उत्तरपत्रिका; OCR → छापील मजकूर ते edit करता येणारा मजकूर; barcode reader → दुकानातील billing',
      'Impact: dot-matrix (cps), line printer (lpm), daisy wheel; non-impact: inkjet, laser (ppm), thermal',
      'Touch screen = input + output; plotter = मोठ्या drawings साठी output',
      'Magnetic tape म्हणजे sequential access; hard disk, SSD आणि RAM म्हणजे direct (random) access',
      'CD ≈ 700 MB, DVD ≈ 4.7 GB (single layer), Blu-ray ≈ 25 GB (single layer)',
      'Incremental backups ने restore: शेवटचा full + त्यानंतरचे प्रत्येक incremental, क्रमाने',
      'Differential backups ने restore: शेवटचा full + फक्त सर्वांत नवा differential',
      '3-2-1 नियम: 3 प्रती, 2 प्रकारच्या माध्यमांवर, 1 प्रत दुसऱ्या ठिकाणी (off-site)',
    ],
    example: {
      q: 'एक महाविद्यालयाचे कार्यालय दर रविवारी रात्री full backup घेते आणि बाकीच्या प्रत्येक रात्री incremental backup घेते. गुरुवारी सकाळी disk बिघडते. Restore करण्यासाठी कोणते backups लागतील, आणि कोणत्या क्रमाने? रात्रीचे backups differential असते तर काय बदलले असते?',
      steps: [
        'शेवटचा full backup रविवारी रात्रीचा आहे.',
        'त्यानंतरचे incrementals: सोमवार, मंगळवार आणि बुधवार रात्रीचे. प्रत्येकात फक्त त्या एका दिवसाचे बदल आहेत, म्हणून तिन्ही लागतील.',
        'Restore चा क्रम: रविवारचा full → सोमवार → मंगळवार → बुधवार.',
        'Differential backups असतील तर बुधवारच्या differential मध्ये रविवारपासूनचे सगळे बदल आधीच आहेत, म्हणून फक्त रविवारचा full + बुधवारचा differential पुरेसे.',
      ],
      answer: 'Incremental: रविवारचा full + सोम + मंगळ + बुध (4 संच). Differential: रविवारचा full + बुधवार (2 संच).',
    },
    shortcut:
      'Reader आणि त्याचं काम एका शब्दाने जुळवा: <b>MICR</b> = Magnetic ink → money (चेक); <b>OMR</b> = Marks (वर्तुळे); <b>OCR</b> = Characters (मजकूर).',
    traps: [
      'OMR आणि OCR दोन्ही optical आहेत, पण OMR फक्त वर्तुळ भरलेलं आहे की नाही एवढंच ओळखतो; तो अक्षरे वाचू शकत नाही.',
      'कार्यालयात मोठ्या प्रमाणात छपाईसाठी वापरला जात असला तरी laser printer non-impact आहे; “impact” म्हणजे pin किंवा हातोडा ribbon वर ठोका मारतो.',
    ],
    practice: [
      { q: 'बँकेच्या चेकच्या तळाशी छापलेले आकडे कोण वाचतो?', why: 'चेकवरचे आकडे magnetic शाईने छापलेले असतात आणि ते Magnetic Ink Character Recognition ने वाचले जातात.' },
      { q: 'खालीलपैकी कोणता impact printer आहे?', why: 'Dot-matrix printer च्या pins शाईच्या ribbon वर ठोका मारतात; बाकीचे printers हातोड्याने कागदाला स्पर्श करत नाहीत.' },
      { q: 'रविवारी रात्री full backup घेतला जातो आणि बाकीच्या प्रत्येक रात्री differential backup. शुक्रवारी सकाळी disk बिघडते. कोणते backups restore करावे लागतील?', why: 'Differential मध्ये मागच्या full backup नंतरचे सगळे बदल असतात, म्हणून full + सर्वांत नवा differential पुरेसे आहेत.' },
      { q: 'कोणते साठवण माध्यम फक्त sequential access देते आणि मुख्यतः दीर्घकालीन archival backup साठी वापरले जाते?', why: 'Tape योग्य ठिकाणापर्यंत गुंडाळत न्यावी लागते; ती दर GB मागे स्वस्त असते आणि archives साठी वापरली जाते.' },
    ],
  },

  memory: {
    title: 'मेमरीची श्रेणीरचना आणि मांडणी',
    analogy: {
      title: 'टेबलावर बसून CET चा अभ्यास',
      oneLine: 'हात → टेबल → कपाट → ग्रंथालय: प्रत्येक पायरीवर मोठं, संथ आणि स्वस्त.',
      story: `कल्पना करा, तुम्ही CET चा अभ्यास करत बसला आहात. हातातलं पेन आणि आत्ता वापरत असलेलं एक सूत्र तुमच्या हातातच आहे — लगेच मिळतं, पण हातात फार थोडं मावतं (<b>registers</b>). टेबलावर उघडून ठेवलेली दोन-चार पुस्तकं हात लांब केला की मिळतात (<b>cache</b>). खोलीतल्या कपाटात या वर्षाची सगळी पुस्तकं आहेत, पण एखादं आणायला उठावं लागतं (<b>मुख्य मेमरी, RAM</b>). महाविद्यालयाच्या ग्रंथालयात हजारो पुस्तकं आहेत, पण तिथे सायकलने जावं लागतं (<b>secondary storage — SSD/hard disk</b>). जितकं जवळ तितकं जलद पण लहान; जितकं लांब तितकं मोठं, संथ आणि स्वस्त. भिंतीवरचा whiteboard रोज रात्री पुसला जातो (<b>volatile RAM</b>), तर छापील पाठ्यपुस्तक वर्षानुवर्षे तसंच राहतं (<b>ROM</b>). आत्ताच वापरलेलं पुस्तक तुम्ही टेबलावरच ठेवता, कारण ते लवकरच पुन्हा लागणार असतं — हीच सवय, म्हणजे <i>locality of reference</i>, cache चालण्यामागचं कारण आहे.`,
      map: [
        ['हातातलं पेन / सूत्र', 'Registers (CPU च्या आत, सर्वांत वेगवान, सर्वांत लहान)'],
        ['टेबलावर उघडी पुस्तकं', 'Cache मेमरी (SRAM)'],
        ['खोलीतलं कपाट', 'मुख्य मेमरी (RAM, DRAM पासून बनलेली)'],
        ['गावाच्या दुसऱ्या टोकाला असलेलं महाविद्यालयाचं ग्रंथालय', 'Secondary storage (SSD, hard disk)'],
        ['रोज रात्री पुसला जाणारा whiteboard विरुद्ध छापील पाठ्यपुस्तक', 'Volatile RAM विरुद्ध non-volatile ROM'],
      ],
    },
    concept: [
      `मेमरी (स्मृती) एका <b>श्रेणीरचनेत</b> (hierarchy) मांडलेली असते: registers → cache (L1, L2, L3) → मुख्य मेमरी (RAM) → secondary storage (SSD, HDD) → backup storage (tape, optical). खाली जाताना क्षमता वाढते आणि दर bit मागचा खर्च कमी होतो, पण access time वाढतो. CPU थेट फक्त registers, cache आणि मुख्य मेमरी (<b>primary memory</b>) वापरू शकतो; secondary storage पर्यंत I/O मार्फत पोहोचावं लागतं. Cache चालतो कारण <b>locality of reference</b>: <i>temporal</i> (आत्ता वापरलेला word लवकरच पुन्हा वापरला जाईल) आणि <i>spatial</i> (त्याच्या शेजारचे words लवकरच वापरले जातील).`,
      `<b>RAM</b> volatile असते (वीज गेली की data जातो). <b>SRAM</b> flip-flops वापरते — वेगवान, refresh ची गरज नाही, महाग — आणि cache साठी वापरली जाते. <b>DRAM</b> प्रत्येक bit capacitor वरच्या charge च्या रूपात ठेवते — दाट आणि स्वस्त, पण तिला सतत <b>refresh</b> करावं लागतं — आणि ती मुख्य मेमरीसाठी वापरतात. <b>ROM</b> non-volatile असते आणि त्यात BIOS/boot program सारखे firmware असते: mask ROM (कारखान्यातच लिहिलेली), <b>PROM</b> (वापरकर्ता एकदाच program करतो), <b>EPROM</b> (ultraviolet प्रकाशाने पुसली जाते), <b>EEPROM</b> (विजेने, byte-byte पुसली जाते) आणि <b>flash</b> (विजेने, blocks मध्ये पुसली जाते — pen drives, SSDs).`,
      `Memory chip चे वर्णन <b>words × bits per word</b> असे करतात. ज्या chip ला <b>n address lines</b> आहेत, तिच्यात <b>2<sup>n</sup></b> locations असतात; <b>m data lines</b> असतील तर प्रत्येक location मध्ये m bits राहतात. म्हणून क्षमता = 2<sup>n</sup> × m bits. CET binary एकके वापरते: 1 KB = 2<sup>10</sup> bytes, 1 MB = 2<sup>20</sup>, 1 GB = 2<sup>30</sup>, 1 TB = 2<sup>40</sup>; nibble म्हणजे 4 bits आणि byte म्हणजे 8 bits.`,
    ],
    keyPoints: [
      'वेग: registers &gt; cache &gt; RAM &gt; SSD &gt; HDD &gt; tape; दर bit मागचा खर्च याच क्रमाने कमी होतो',
      'Cache = SRAM (refresh नाही); मुख्य मेमरी = DRAM (refresh लागतो)',
      'PROM: एकदाच लिहिता येते; EPROM: UV ने पुसणे; EEPROM: विजेने, byte-wise; Flash: विजेने, block-wise',
      'क्षमता = 2<sup>address lines</sup> × word size; address lines = log₂(locations ची संख्या)',
      'लागणाऱ्या chips = (एकूण words ÷ chip चे words) × (एकूण word size ÷ chip चा word size)',
      'Hit ratio h = hits ÷ एकूण accesses',
      'Miss झाल्यावर आधी cache पाहून मग मेमरी पाहिली तर EAT: h·T<sub>c</sub> + (1 − h)(T<sub>c</sub> + T<sub>m</sub>); दोन्ही एकाच वेळी पाहिल्या तर: h·T<sub>c</sub> + (1 − h)·T<sub>m</sub>',
      '1 KB = 2<sup>10</sup> B, 1 MB = 2<sup>20</sup> B, 1 GB = 2<sup>30</sup> B, 1 TB = 2<sup>40</sup> B',
    ],
    example: {
      q: '32K × 8 मेमरी 8K × 8 RAM chips वापरून तयार करायची आहे. किती chips लागतील? संपूर्ण मेमरीला किती address lines लागतील, त्यांपैकी किती प्रत्येक chip ला जातील, आणि chip निवडणाऱ्या decoder ला किती जातील?',
      steps: [
        'Chips = (32K ÷ 8K) × (8 ÷ 8) = 4 × 1 = 4 chips.',
        'एकूण words = 32K = 2<sup>5</sup> × 2<sup>10</sup> = 2<sup>15</sup>, म्हणून मेमरीला 15 address lines लागतात.',
        'प्रत्येक chip मध्ये 8K = 2<sup>13</sup> words आहेत, म्हणून खालच्या 13 lines प्रत्येक chip ला समांतर जोडल्या जातात.',
        'उरलेल्या 15 − 13 = 2 वरच्या (high-order) lines एक 2-to-4 decoder चालवतात, जो 4 पैकी एक chip enable करतो.',
      ],
      answer: '4 chips; एकूण 15 address lines — 13 प्रत्येक chip ला, 2 एका 2×4 decoder ला',
    },
    shortcut:
      'आधी प्रत्येक आकार 2 च्या घातात लिहा: 2 MB = 2<sup>1</sup> × 2<sup>20</sup> = 2<sup>21</sup> bytes → byte-addressable मेमरीसाठी 21 address lines. त्यानंतर सगळं काम म्हणजे फक्त घातांकांची बेरीज-वजाबाकी.',
    traps: [
      'Address lines <b>locations</b> मोजतात, bits नाही. 64K × 16 word-addressable मेमरीला 16 address lines लागतात; “× 16” फक्त data lines ची संख्या ठरवतो.',
      'Byte-addressable आहे की word-addressable ते तपासा: 32-bit words ची 1 MB मेमरी म्हणजे 2<sup>18</sup> words (18 lines), पण 2<sup>20</sup> bytes (20 lines).',
      'EAT ची दोन सूत्रे वेगवेगळी उत्तरे देतात; miss झाल्यावरही cache access time खर्च होतो का, ते प्रश्नात नीट वाचा.',
    ],
    practice: [
      { q: 'एका memory chip ला 12 address lines आणि 8 data lines आहेत. तिची क्षमता किती?', why: '2<sup>12</sup> = 4096 locations × 8 bits = 4096 bytes = 4 KB.' },
      { q: '2 MB byte-addressable मेमरी address करण्यासाठी किती address lines लागतात?', why: '2 MB = 2 × 2<sup>20</sup> = 2<sup>21</sup> bytes, म्हणून 21 lines.' },
      { q: '8K × 8 मेमरी तयार करण्यासाठी 1K × 4 च्या किती RAM chips लागतील?', why: '(8K ÷ 1K) × (8 ÷ 4) = 8 × 2 = 16 chips.' },
      { q: 'एका cache चा access time 10 ns आणि hit ratio 0.9 आहे; मुख्य मेमरीचा access time 100 ns आहे. प्रत्येक access आधी cache मध्ये पाहतो; miss झाला तर cache मध्ये शोध अयशस्वी झाल्यानंतरच मुख्य मेमरी वाचली जाते, म्हणून एका miss ला cache time + memory time लागतो. Effective access time किती?', why: 'EAT = 0.9 × 10 + 0.1 × (10 + 100) = 9 + 11 = 20 ns. (hit आणि miss ratios अदलाबदल केले तर 91 ns येतात; 110 ns हा एका miss चा खर्च आहे.)' },
    ],
  },

  // ───────────────────────────── Data Representation ─────────────────────────────
  'number-systems': {
    title: 'संख्या पद्धती आणि रूपांतरे',
    analogy: {
      title: '2 च्या प्रत्येक घाताचं एकच नाणं वापरून पैसे देणे',
      oneLine: 'द्विमान म्हणजे ₹1, 2, 4, 8 … ची नाणी वापरून, प्रत्येकाचं जास्तीत जास्त एकच नाणं देऊन पैसे भरणे.',
      story: `टोल नाक्यावरची एक कॅशियर डोळ्यांसमोर आणा. तिच्याकडे फक्त ₹1, ₹2, ₹4, ₹8, ₹16, ₹32, ₹64 आणि ₹128 ची नाणी आहेत — आणि प्रत्येक किमतीचं <b>जास्तीत जास्त एकच</b> नाणं ती देऊ शकते. ₹13 द्यायचे असतील तर ती बसणारं सर्वांत मोठं नाणं घेते (₹8, उरले 5), मग ₹4 (उरला 1), ₹2 सोडून देते, आणि मग ₹1 घेते. सर्वांत मोठ्या नाण्यापासून “घेतलं = 1, सोडलं = 0” असं लिहीत गेलं तर 1101 मिळतं — आणि हाच 13 चा binary रूप आहे. आपली नेहमीची दशमान पद्धतही अशीच चालते, फक्त तिथे ₹1, ₹10, ₹100, ₹1000 च्या नोटा असतात आणि प्रत्येकी नऊपर्यंत नोटा वापरता येतात. कोणतीही संख्या पद्धती म्हणजे फक्त एवढंच: “कोणत्या किमतीच्या नोटा आहेत, आणि प्रत्येकी किती वापरता येतात”.`,
      map: [
        ['₹1, ₹2, ₹4, ₹8 … ची नाणी', 'स्थानिक किमती 2⁰, 2¹, 2², 2³ … (आधारांक 2)'],
        ['प्रत्येक किमतीचं जास्तीत जास्त एकच नाणं', 'प्रत्येक binary अंक फक्त 0 किंवा 1'],
        ['घेतलं = 1, सोडलं = 0, सर्वांत मोठ्या नाण्यापासून', 'Bit pattern, उदा. 13 = 1101<sub>2</sub>'],
        ['₹1, ₹10, ₹100 च्या नोटा, प्रत्येकी नऊपर्यंत', 'दशमान: आधारांक 10, अंक 0–9'],
        ['नेहमी बसणारं सर्वांत मोठं नाणं घ्यायचं', '2 चे घात वजा करत केलेले रूपांतर'],
      ],
    },
    concept: [
      `<b>स्थानमूल्य संख्या पद्धतीत</b> (positional number system) आधारांक (base / radix) r असेल तर प्रत्येक अंकाला त्याच्या स्थानानुसार r च्या एका घाताने गुणले जाते. द्विमान पद्धती (binary, आधारांक 2) 0–1 वापरते, अष्टमान (octal, आधारांक 8) 0–7, दशमान (decimal, आधारांक 10) 0–9, आणि षोडशमान (hexadecimal, आधारांक 16) 0–9 आणि A–F (A = 10 … F = 15). <b>कोणत्याही आधारांकातून दशमानात</b> नेण्यासाठी प्रत्येक अंकाला त्याच्या स्थानिक किमतीने गुणून सर्वांची बेरीज करा: 1011.1<sub>2</sub> = 8 + 0 + 2 + 1 + 0.5 = 11.5.`,
      `<b>दशमान पूर्णांक</b> आधारांक r मध्ये नेण्यासाठी r ने पुन्हा पुन्हा भागा आणि बाकी <b>खालून वर</b> वाचा. <b>दशमान अपूर्णांकासाठी</b> r ने पुन्हा पुन्हा गुणा आणि पूर्णांक भाग <b>वरून खाली</b> वाचा. काही अपूर्णांक कधीच संपत नाहीत: 0.1<sub>10</sub> = 0.000110011…<sub>2</sub>, म्हणूनच संगणक 0.1 अचूक साठवू शकत नाही.`,
      `Binary ↔ octal आणि binary ↔ hex साठी भागाकाराची गरजच नाही, कारण 8 = 2³ आणि 16 = 2⁴. Bits चे <b>तीन-तीनचे</b> (octal) किंवा <b>चार-चारचे</b> (hex) गट करा, सुरुवात <b>binary point पासून</b> — पूर्णांक भागासाठी डावीकडे आणि अपूर्णांक भागासाठी उजवीकडे — आणि कमी पडल्यास शून्ये जोडा. Octal ↔ hex साठी binary मार्गे जा.`,
    ],
    keyPoints: [
      'किंमत = Σ अंक × r<sup>स्थान</sup> (स्थाने …, 2, 1, 0, −1, −2 …)',
      'पूर्णांक → आधारांक r: r ने भागा, बाकी खालून वर वाचा',
      'अपूर्णांक → आधारांक r: r ने गुणा, पूर्णांक भाग वरून खाली वाचा',
      'Binary → octal: 3 चे गट; binary → hex: 4 चे गट, point पासून बाहेरच्या दिशेने',
      'Hex अंक: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15',
      'उपयोगी घात: 2¹⁰ = 1024, 8² = 64, 8³ = 512, 16² = 256, 16³ = 4096',
      'आधारांक r मधील सर्वांत मोठी n-अंकी संख्या = r<sup>n</sup> − 1 (8 bits → 255 = FF<sub>16</sub>)',
    ],
    example: {
      q: '156.625<sub>10</sub> चे binary, octal आणि hexadecimal मध्ये रूपांतर करा.',
      steps: [
        'पूर्णांक भाग: 156 ला 2 ने पुन्हा पुन्हा भागल्यावर बाकी 0, 0, 1, 1, 1, 0, 0, 1 मिळतात. खालून वर वाचा: 10011100. पडताळा: 128 + 16 + 8 + 4 = 156.',
        'अपूर्णांक: 0.625 × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; 0.5 × 2 = 1.0 → 1. वरून खाली वाचा: .101.',
        'Binary: 10011100.101<sub>2</sub>.',
        'Octal: 010 011 100 . 101 → 234.5<sub>8</sub>.',
        'Hex: 1001 1100 . 1010 (अपूर्णांकात एक 0 जोडून) → 9C.A<sub>16</sub>.',
      ],
      answer: '10011100.101<sub>2</sub> = 234.5<sub>8</sub> = 9C.A<sub>16</sub>',
    },
    shortcut:
      'लहान संख्यांचे दशमान → binary करताना भागाकार टाळा: 128 64 32 16 8 4 2 1 असं लिहा आणि ज्यांची बेरीज ती संख्या होते त्यांच्यावर खूण करा (नाण्यांची पद्धत). “आधारांक शोधा” अशा प्रश्नांत संख्या b मधील बहुपदी म्हणून लिहा आणि पर्याय ताडून पाहा.',
    traps: [
      'Octal/hex साठी गट binary point पासून सुरू होतात, डाव्या टोकापासून नाही: 1011.1<sub>2</sub> = 001 011 . 100 = 13.4<sub>8</sub>, 13.1<sub>8</sub> नाही.',
      'अपूर्णांकांसाठी पूर्णांक भाग वरून खाली वाचा; ते खालून वर (पूर्णांकाच्या बाकीसारखे) वाचले तर उत्तर चुकते.',
    ],
    practice: [
      { q: '(2AF)<sub>16</sub> दशमानात किती?', why: '2 × 256 + 10 × 16 + 15 = 512 + 160 + 15 = 687.' },
      { q: '(0.375)<sub>10</sub> binary मध्ये किती?', why: '0.375 × 2 = 0.75 → 0; 0.75 × 2 = 1.5 → 1; 0.5 × 2 = 1.0 → 1. वरून खाली वाचा: 0.011.' },
      { q: '(725)<sub>8</sub> hexadecimal मध्ये किती?', why: '725<sub>8</sub> = 111 010 101 = 1 1101 0101 (चार-चारचे नवे गट) = 1D5<sub>16</sub> (दोन्हींची किंमत 469).' },
      { q: 'जर (121)<sub>b</sub> = (49)<sub>10</sub>, तर आधारांक b किती?', why: 'b² + 2b + 1 = (b + 1)² = 49, म्हणून b + 1 = 7 आणि b = 6.' },
    ],
  },

  'character-representation': {
    title: 'अक्षरे आणि data चे निरूपण (ASCII, Unicode, BCD, Parity)',
    analogy: {
      title: 'भारतीय रेल्वेचे गाडी क्रमांक',
      oneLine: 'प्रत्येक गाडीला जसा एकच गाडी क्रमांक, तसा प्रत्येक अक्षराला सगळीकडे मान्य असलेला एकच क्रमांक.',
      story: `भारतातल्या प्रत्येक गाडीला एक ठरलेला क्रमांक असतो. नागपूरचे स्टेशन मास्तर, पुण्याचा बुकिंग क्लार्क आणि तुमच्या मोबाइलवरचं app — सगळ्यांचं एकमत आहे की 12123 म्हणजे डेक्कन क्वीन. म्हणूनच एका शहरात काढलेलं तिकीट सगळीकडे समजतं. संगणक अक्षरांच्या बाबतीत हेच करतात: प्रत्येक अक्षरासाठी एक क्रमांक ठरवलेला असतो — “A” म्हणजे सगळीकडे 65 — म्हणून एका संगणकावर टाइप केलेली फाइल दुसऱ्यावर बरोबर वाचली जाते. रेल्वेची जुनी पद्धत चार अंकी होती; गाड्या वाढल्या तसे क्रमांक कमी पडू लागले. 2010 मध्ये रेल्वे पाच अंकी क्रमांकांकडे वळली आणि जुने क्रमांक नव्यांच्या आतच ठेवले (2123 चा 12123 झाला). अक्षरांच्या code ची कहाणीही अगदी अशीच: 7-bit <b>ASCII</b> मध्ये फक्त 128 codes — इंग्रजीला पुरेसे, पण मराठीला जागाच नाही. <b>Unicode</b> प्रत्येक लिपीतल्या प्रत्येक अक्षराला एक क्रमांक देतो आणि ASCII चे 128 codes आपले पहिले 128 म्हणून तसेच ठेवतो, त्यामुळे जुना इंग्रजी मजकूर आजही चालतो.`,
      map: [
        ['गाडीचं नाव (डेक्कन क्वीन)', 'एक अक्षर (A हे अक्षर)'],
        ['तिचा ठरलेला गाडी क्रमांक (12123)', 'त्याचा character code (65)'],
        ['भारतातल्या प्रत्येक स्टेशनवर तोच क्रमांक', 'प्रत्येक संगणकावर तीच code table, म्हणून मजकुराची देवाणघेवाण शक्य'],
        ['जुने 4-अंकी क्रमांक कमी पडले', '7-bit ASCII: फक्त 2⁷ = 128 codes, देवनागरीला जागा नाही'],
        ['5-अंकी पद्धतीत जुने क्रमांक आतच सामावले', 'Unicode: पहिले 128 code points हुबेहूब ASCII'],
      ],
    },
    concept: [
      `संगणक फक्त bits साठवतो, म्हणून प्रत्येक अक्षराला एक मान्य क्रमांक (त्याचा <b>code</b>) दिला जातो. <b>ASCII</b> हा 128 अक्षरांचा 7-bit code आहे: 0–31 control characters, 32 म्हणजे space, 48–57 म्हणजे ‘0’–‘9’ हे अंक, 65–90 म्हणजे A–Z आणि 97–122 म्हणजे a–z. Extended ASCII 8 bits (256 अक्षरे) वापरतो. IBM mainframes <b>EBCDIC</b> हा 8-bit code वापरत. <b>Unicode</b> सर्व लिप्यांना सामावून घेतो आणि तो <b>UTF-8</b> (दर अक्षरामागे 1 ते 4 bytes: ASCII अक्षरांना 1 byte, देवनागरी अक्षरांना 3), <b>UTF-16</b> (2 किंवा 4 bytes) किंवा <b>UTF-32</b> (नेहमी 4 bytes) या रूपात साठवला जातो.`,
      `संख्या अंक-अंक करूनही साठवता येतात. <b>BCD</b> (Binary Coded Decimal, 8421 code) प्रत्येक दशमान अंक 4 bits मध्ये लिहितो: 395 = 0011 1001 0101. BCD मध्ये 1010 ते 1111 हे नमुने अवैध आहेत. <b>Excess-3</b> मध्ये code करण्याआधी प्रत्येक अंकात 3 मिळवतात (5 → 1000). <b>Gray code</b> मध्ये लागोपाठच्या दोन संख्यांमध्ये फक्त एकच bit बदलतो.`,
      `<b>Parity bit</b> हा एक जास्तीचा bit असतो, जो असा निवडला जातो की एकूण 1 ची संख्या सम (<b>even parity</b>) किंवा विषम (<b>odd parity</b>) होईल. घेणारा (receiver) 1 मोजतो; संख्या चुकली तर error आहे. Parity उलटलेल्या bits ची कोणतीही <b>विषम संख्या</b> (उदा. एक) पकडतो, पण दोन bits उलटले तर चुकतो, आणि <i>कोणता</i> bit चुकला हे सांगू शकत नाही, म्हणून तो error दुरुस्त करू शकत नाही (Hamming code करू शकतो).`,
    ],
    keyPoints: [
      'ASCII: 7 bits, 128 अक्षरे; extended ASCII: 8 bits, 256 अक्षरे',
      '‘0’ = 48, ‘A’ = 65, ‘a’ = 97, space = 32; lowercase = uppercase + 32 (फक्त bit 5 वेगळा)',
      'Unicode: प्रत्येक लिपीतल्या प्रत्येक अक्षरासाठी एक code point; पहिले 128 म्हणजे ASCII',
      'UTF-8: ASCII साठी 1 byte, देवनागरीसाठी 3 bytes (उदा. अ = U+0905)',
      'BCD: दर दशमान अंकामागे 4 bits; 1010–1111 अवैध',
      'Excess-3 = (अंक + 3) चा BCD; Gray code: शेजारच्या संख्यांत एकच bit बदलतो',
      'Parity विषम संख्येतील bit errors (उदा. 1) पकडतो, 2 चुकवतो, आणि दुरुस्त करू शकत नाही',
      'n bits ने 2<sup>n</sup> वेगवेगळी अक्षरे दाखवता येतात',
    ],
    example: {
      q: '‘g’ चा ASCII code 103 आहे. त्याचे 7-bit binary रूप लिहा आणि फक्त एक bit बदलून ते uppercase ‘G’ मध्ये बदला.',
      steps: [
        '103 = 64 + 32 + 4 + 2 + 1 → 1100111<sub>2</sub>.',
        'Uppercase अक्षरे lowercase पेक्षा बरोबर 32 ने कमी असतात, आणि 32 = 0100000<sub>2</sub> म्हणजे bit 5 (उजवीकडच्या bit 0 पासून मोजल्यास).',
        'Bit 5 शून्य करा: 1100111 → 1000111<sub>2</sub> = 64 + 4 + 2 + 1 = 71.',
        '71 हा ‘G’ चा ASCII code आहे.',
      ],
      answer: '‘g’ = 1100111<sub>2</sub>; bit 5 शून्य केल्यावर 1000111<sub>2</sub> = 71 = ‘G’',
    },
    shortcut:
      'तीन खुंट्या लक्षात ठेवा: <b>48, 65, 97</b> (‘0’, ‘A’, ‘a’). बाकी प्रत्येक code = खुंटी + स्थान: ‘d’ = 97 + 3 = 100, ‘7’ = 48 + 7 = 55, ‘Z’ = 65 + 25 = 90.',
    traps: [
      `‘7’ हे अक्षर म्हणजे 7 ही संख्या नव्हे: त्याचा ASCII code 55 आहे. C मध्ये <code>'7' - '0'</code> केल्यावर 7 मिळतो.`,
      'BCD म्हणजे binary नव्हे: 25 चा BCD 0010 0101 आहे, पण binary मध्ये तो 11001 आहे.',
    ],
    practice: [
      { q: '‘A’ चा ASCII code 65 असेल, तर ‘d’ चा ASCII code किती?', why: 'Lowercase ची सुरुवात ‘a’ = 97 (65 + 32) पासून होते, म्हणून ‘d’ = 97 + 3 = 100. (68 म्हणजे uppercase ‘D’.)' },
      { q: '395 चे BCD (8421) रूप कोणते?', why: 'प्रत्येक अंक स्वतंत्रपणे code करा: 3 = 0011, 9 = 1001, 5 = 0101. (0001 1000 1011 हे 395 चे साधे binary रूप आहे.)' },
      { q: 'एक receiver 8-bit words (7 data bits + 1 parity bit) वर even parity वापरतो. मिळालेल्या कोणत्या word मध्ये error दिसतो?', why: '01011101 मध्ये पाच 1 आहेत (विषम); बाकीच्यांत 4, 6 आणि 0 एक आहेत, म्हणजे सगळे सम.' },
      { q: 'UTF-8 मध्ये “Aअ” ही दोन अक्षरांची string (Latin A नंतर देवनागरी अ) साठवण्यासाठी किती bytes लागतात?', why: '‘A’ ASCII आहे आणि त्याला 1 byte लागतो; अ (U+0905) ला 3 bytes लागतात. एकूण 4.' },
    ],
  },

  'binary-arithmetic': {
    title: 'Binary अंकगणित, चिन्हांकित संख्या आणि Two’s Complement',
    analogy: {
      title: '0000 च्या खाली उलटा फिरणारा स्कूटरचा odometer',
      oneLine: '0000 एकने मागे फिरवला की सर्वांत मोठी किंमत दिसते — −1 म्हणजे सगळे 1 असं होतं ते असंच.',
      story: `जुन्या स्कूटरचा चार अंकी यांत्रिक odometer आठवा. 0000 वरून तो एकने मागे फिरवला तर तो “−1” दाखवत नाही; तो उलटा फिरून 9999 वर जातो. हे माहीत असलेला मेकॅनिक 9999 ला सरळ “शून्याच्या एक खाली”, 9998 ला “शून्याच्या दोन खाली” असं वाचतो. आता कल्पना करा एका <b>binary</b> odometer ची, ज्याची 4 चाकं फक्त 0 किंवा 1 दाखवतात. 0000 वरून एक मागे गेलं की 1111 येतं, म्हणजे 1111 = −1, 1110 = −2, आणि 1000 (बरोबर अर्धा फेरा) सर्वांत लहान ऋण संख्या, −8. हा उलटा फिरलेला आकडा म्हणजेच <b>two’s complement</b> code. मीटर फक्त एका वर्तुळावर मोजत राहतो, म्हणून ऋण संख्या मिळवणं म्हणजे पुढे फिरवण्यासारखंच — म्हणूनच संगणकाला फक्त adder लागतो, वजाबाकीसाठी वेगळं यंत्र कधीच लागत नाही. चुकून अर्ध्या फेऱ्याची रेषा ओलांडली (7 + 1 जाऊन 1000 = −8 वर पडलं) तर तो <b>overflow</b>.`,
      map: [
        ['Odometer ची ठरलेली चाकं', 'ठरलेले bits (n-bit register)'],
        ['0000 च्या खाली उलटा फिरून 1111', '−1 सगळ्या 1 च्या रूपात साठवला जातो'],
        ['10000 या फेरा-पूर्तीच्या बिंदूपर्यंत उरलेलं अंतर', 'x चा two’s complement = 2<sup>n</sup> − x'],
        ['Carry दाखवायला पाचवं चाकच नाही', 'शेवटचा carry out टाकून दिला जातो'],
        ['7 + 1 अर्धा फेरा ओलांडून 1000 वर', 'Overflow: निकाल मावत नाही, चिन्ह चुकीचं येतं'],
      ],
    },
    concept: [
      `Binary बेरीज: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (0 लिहा, 1 हातचा) आणि 1 + 1 + 1 = 11. चिन्हांकित संख्या (signed numbers) n bits मध्ये तीन प्रकारे साठवता येतात. <b>Sign-magnitude</b>: MSB म्हणजे चिन्ह आणि उरलेले bits म्हणजे आकार. <b>One’s complement</b>: ऋण संख्या म्हणजे धन संख्येचा प्रत्येक bit उलटवलेला. <b>Two’s complement</b>: प्रत्येक bit उलटवा आणि 1 मिळवा (म्हणजेच 2<sup>n</sup> − x). Sign-magnitude आणि one’s complement दोन्हींमध्ये दोन शून्ये (+0 आणि −0) असतात; two’s complement मध्ये एकच शून्य असतं, म्हणूनच आजचा प्रत्येक CPU तो वापरतो.`,
      `Two’s complement मध्ये A − B काढण्यासाठी A मध्ये B चा two’s complement मिळवा आणि MSB मधून बाहेर पडणाऱ्या <b>carry कडे दुर्लक्ष करा</b>. उत्तराचा MSB 1 असेल तर उत्तर ऋण आहे; त्याचा आकार वाचण्यासाठी त्याचा two’s complement घ्या. <b>Overflow</b> फक्त तेव्हाच होतो जेव्हा <b>एकाच चिन्हाच्या</b> दोन संख्या मिळवल्या जातात आणि निकालाचं चिन्ह उलट येतं — म्हणजेच MSB मध्ये येणारा carry आणि MSB मधून जाणारा carry वेगवेगळे असतात. एक धन आणि एक ऋण संख्या मिळवताना overflow कधीच होत नाही.`,
      `Two’s-complement संख्या जास्त bits मध्ये रुंद करायची असेल तर नव्या जागांमध्ये sign bit ची copy करा (<b>sign extension</b>): −3 हे 4 bits मध्ये 1101 आणि 8 bits मध्ये 11111101 आहे.`,
    ],
    keyPoints: [
      'n-bit two’s complement ची व्याप्ती: −2<sup>n−1</sup> ते +2<sup>n−1</sup> − 1 (8 bits: −128 ते +127)',
      'n-bit sign-magnitude आणि one’s complement ची व्याप्ती: −(2<sup>n−1</sup> − 1) ते +(2<sup>n−1</sup> − 1), दोन शून्यांसह',
      'Two’s complement = one’s complement + 1 = 2<sup>n</sup> − x',
      'झटपट पद्धत: उजवीकडून पहिल्या 1 पर्यंत (तोही धरून) bits जसेच्या तसे लिहा, मग उरलेले उलटवा',
      'A − B = A + (B चा two’s complement); शेवटचा carry टाकून द्या',
      'Overflow: (+) + (+) = (−), किंवा (−) + (−) = (+); MSB मध्ये येणारा carry ≠ MSB मधून जाणारा carry',
      'Sign extension: रुंद करताना MSB पुन्हा पुन्हा लिहा',
    ],
    example: {
      q: '8-bit two’s complement अंकगणित वापरून 25 − 37 काढा.',
      steps: [
        '25 = 00011001 आणि 37 = 00100101.',
        '37 चा two’s complement: उलटवा → 11011010, 1 मिळवा → 11011011.',
        'बेरीज: 00011001 + 11011011 = 11110100 (carry out नाही).',
        'MSB 1 आहे, म्हणून उत्तर ऋण आहे. 11110100 चा two’s complement = 00001100 = 12.',
        'म्हणून निकाल −12. पडताळा: 25 − 37 = −12. ✓',
      ],
      answer: '11110100<sub>2</sub> = −12',
    },
    shortcut:
      'ऋण two’s-complement संख्या पटकन वाचायची असेल तर MSB ला <b>ऋण</b> किंमत द्या: 11110100 = −128 + 64 + 32 + 16 + 4 = −12. काहीही उलटवायची गरज नाही.',
    traps: [
      '“उलटवा आणि 1 मिळवा” म्हणजे two’s complement; फक्त उलटवणे म्हणजे one’s complement. प्रश्न कोणता विचारतो ते नीट वाचा.',
      'Two’s complement मध्ये MSB मधून बाहेर पडणारा carry म्हणजे overflow <b>नव्हे</b>. Overflow चिन्हांवरून ठरवा, carry वरून नाही.',
      'व्याप्ती सममित नाही: −128 हे 8 bits मध्ये मावते, +128 मावत नाही.',
    ],
    practice: [
      { q: '−45 चे 8-bit two’s complement रूप कोणते?', why: '45 = 00101101 → उलटवा 11010010 → 1 मिळवा → 11010011. (10101101 हे sign-magnitude आहे; 11010010 हे one’s complement आहे.)' },
      { q: '8-bit two’s complement मध्ये दाखवता येणाऱ्या पूर्णांकांची व्याप्ती कोणती?', why: '−2⁷ ते 2⁷ − 1 = −128 ते +127.' },
      { q: '4-bit two’s complement अंकगणितात 0110 + 0101 = 1011. कोणते विधान बरोबर आहे?', why: '6 + 5 = 11 हे 4-bit च्या कमाल +7 पेक्षा जास्त आहे. दोन धन संख्यांनी ऋण नमुना (1011 = −5) दिला, म्हणून overflow झाला.' },
      { q: '10000001 हा 8-bit नमुना sign-magnitude, one’s complement आणि two’s complement मध्ये अनुक्रमे कोणत्या किमती दाखवतो?', why: 'Sign-magnitude: −(0000001) = −1. One’s: उलटवा → 01111110 = 126, म्हणून −126. Two’s: −128 + 1 = −127.' },
    ],
  },

  'floating-point': {
    title: 'Floating Point आणि Normalization (IEEE 754)',
    analogy: {
      title: 'लाख-कोटीत लिहिलेले फ्लॅटचे भाव',
      oneLine: 'थोडेच महत्त्वाचे अंक (mantissa) आणि “कोटी” सारखा एकक-शब्द (exponent).',
      story: `पुण्यातल्या एका बिल्डरच्या भावफलकावर फक्त तीन अंक आणि एक एकक-शब्द लिहिण्याइतकीच जागा आहे: “₹ 2.53 कोटी”, “₹ 8.40 लाख”. कोणीही ₹25300000 असं लिहीत नाही — ते फार लांब होतं — आणि “₹ 0.253 दहा-कोटी” असंही कोणी लिहीत नाही, कारण त्यात सुरुवातीच्या शून्यावर एक अंक वाया जातो. “दशांश चिन्हाआधी एक शून्येतर अंक, मग एकक-शब्द” हा नियम म्हणजेच <b>normalization</b>. ते तीन अंक म्हणजे <b>mantissa</b> (significand): ते अचूकता देतात. एकक-शब्द म्हणजे <b>exponent</b>: तो व्याप्ती देतो. ₹2,53,46,781 च्या फ्लॅटचा भाव 2.53 कोटी असा दाखवला जातो, म्हणजे शेवटचे अंक गळतात — हीच <b>rounding error</b>. संगणक हेच 2 च्या आधारांकात करतो, आणि normalized binary संख्या नेहमी 1 ने सुरू होत असल्याने तो 1 साठवतच नाही (<b>hidden bit</b>).`,
      map: [
        ['दाखवलेले तीन अंक, उदा. 2.53', 'Mantissa / significand (अचूकता)'],
        ['एकक-शब्द: लाख, कोटी', 'Exponent (व्याप्ती — आधारांकाचा घात)'],
        ['“दशांश चिन्हाआधी एक शून्येतर अंक” हा नियम', 'Normalization: 1.xxx × 2<sup>e</sup>'],
        ['₹2,53,46,781 चे शेवटचे अंक गळले', 'मर्यादित mantissa bits मुळे rounding error'],
        ['तोट्यासाठी उणे चिन्ह', 'Sign bit'],
      ],
    },
    concept: [
      `Floating point मध्ये वास्तव संख्या <b>± M × B<sup>E</sup></b> अशी साठवली जाते: एक चिन्ह, एक mantissa M आणि एक exponent E (संगणकात आधारांक B = 2). Mantissa मध्ये सुरुवातीला शून्ये नसतील, म्हणजे एकही bit वाया जात नसेल, तेव्हा ती संख्या <b>normalized</b> असते. पुस्तकांत दोन पद्धती दिसतात: जुनी पाठ्यपुस्तके <b>0.1xxx × 2<sup>E</sup></b> (point नंतरचा पहिला bit 1) वापरतात; IEEE 754 <b>1.xxx × 2<sup>E</sup></b> वापरते. कोणती अपेक्षित आहे ते प्रश्न वाचून ठरवा.`,
      `<b>IEEE 754 single precision</b> (32 bits, C चा <code>float</code>) मध्ये 1 sign bit, 8 exponent bits आणि 23 fraction bits असतात. Exponent <b>127 च्या bias</b> सह साठवला जातो (साठवलेला E = खरा exponent + 127), आणि सुरुवातीचा 1 साठवला जात नाही (<b>hidden bit</b>), म्हणून किंमत = (−1)<sup>S</sup> × 1.F × 2<sup>E − 127</sup>. Double precision (64 bits) मध्ये 1 + 11 + 52 bits आणि bias 1023.`,
      `विशेष नमुने: E = 0 आणि F = 0 म्हणजे ±0; E = 255 आणि F = 0 म्हणजे ±∞; E = 255 आणि F ≠ 0 म्हणजे NaN (not a number, उदा. 0/0); E = 0 आणि F ≠ 0 म्हणजे denormal (अतिशय लहान) संख्या. म्हणून सामान्य exponents −126 ते +127 पर्यंत असतात. 0.1 सारखी संख्या binary मध्ये आवर्ती अपूर्णांक असते आणि ती फक्त अंदाजे साठवली जाते; अर्धे, पाव आणि आठवे भाग यांपासून बनलेल्या संख्या (0.5, 0.75, 0.625) अचूक साठवल्या जातात.`,
    ],
    keyPoints: [
      'Single: 1 sign + 8 exponent + 23 fraction = 32 bits, bias 127',
      'Double: 1 sign + 11 exponent + 52 fraction = 64 bits, bias 1023',
      'किंमत = (−1)<sup>S</sup> × 1.F × 2<sup>E − 127</sup> (hidden 1 साठवला जात नाही)',
      'साठवलेला exponent = खरा exponent + 127 (म्हणून 1.0 साठी E = 127 = 01111111)',
      'E सगळे 0 आणि F = 0 → शून्य; E सगळे 1 आणि F = 0 → अनंत; E सगळे 1 आणि F ≠ 0 → NaN',
      'Normalizing: point च्या डावीकडे एकच 1 उरेपर्यंत point सरकवा; point डावीकडे सरकवला की exponent वाढतो',
      'ज्यांचा छेद 2 चा घात आहे असेच अपूर्णांक अचूक (0.5, 0.25, 0.625 हो; 0.1, 0.2 नाही)',
    ],
    example: {
      q: '−12.375 हे IEEE 754 single precision मध्ये लिहा (binary आणि hex).',
      steps: [
        'चिन्ह: ऋण → S = 1.',
        '12 = 1100 आणि 0.375 = .011, म्हणून 12.375 = 1100.011<sub>2</sub>.',
        'Normalize: 1100.011 = 1.100011 × 2³ (point 3 स्थाने डावीकडे सरकवला).',
        'साठवलेला exponent = 3 + 127 = 130 = 10000010.',
        'Fraction (hidden 1 नंतरचा भाग): 100011 आणि त्यानंतर 17 शून्ये.',
        'Bits: 1 | 10000010 | 10001100000000000000000. चार-चारच्या गटांत: 1100 0001 0100 0110 0000 … → C1460000<sub>16</sub>.',
      ],
      answer: '1 10000010 10001100000000000000000 = C1460000<sub>16</sub>',
    },
    shortcut:
      'C0A00000 सारखा hex नमुना उलगडायचा असेल तर फक्त पहिले 3 hex अंक binary मध्ये लिहा (C0A → 1100 0000 1010): पहिला bit = चिन्ह, पुढचे 8 bits = exponent, उरलेले = fraction ची सुरुवात. 12 पेक्षा जास्त bits क्वचितच लागतात.',
    traps: [
      'Bias विसरू नका: साठवलेला exponent = खरा + 127, खरा exponent नव्हे.',
      'Hidden 1 साठवला जात नाही; 23 fraction bits म्हणजे फक्त point नंतर येणारा भाग.',
      'प्रश्नात 0.1xxx normalization वापरले असेल तर 1100.011 चा 0.1100011 × 2⁴ होतो — exponent वेगळा.',
    ],
    practice: [
      { q: 'IEEE 754 single-precision नमुना C0A00000<sub>16</sub> कोणती संख्या दाखवतो?', why: '1100 0000 1010 … → S = 1, E = 10000001 = 129 (खरा 2), F = 01. किंमत = −1.01<sub>2</sub> × 2² = −101<sub>2</sub> = −5.' },
      { q: 'IEEE 754 single precision मध्ये 1.0 या संख्येसाठी साठवलेले (biased) exponent field कोणते?', why: '1.0 = 1.0 × 2⁰; साठवलेला exponent = 0 + 127 = 127 = 01111111.' },
      { q: '0.0001011<sub>2</sub> चे IEEE पद्धतीचे normalized रूप (1.F × 2<sup>e</sup>) कोणते?', why: '1.011 मिळवण्यासाठी point 4 स्थाने उजवीकडे सरकवा, म्हणून 2<sup>−4</sup> ने गुणा. (0.1011 × 2<sup>−3</sup> ची किंमत तीच आहे, पण ते जुन्या 0.1F पद्धतीचे रूप आहे.)' },
      { q: 'यांपैकी कोणती दशमान संख्या IEEE 754 single precision मध्ये अचूक साठवता येते?', why: '0.625 = 5/8 = 0.101<sub>2</sub>, म्हणजे संपणारा binary अपूर्णांक. 0.1, 0.2 आणि 0.3 binary मध्ये अनंतपर्यंत आवर्ती होतात.' },
    ],
  },

  'boolean-algebra': {
    title: 'बूलियन बीजगणित, तार्किक द्वारे, सत्यता सारणी आणि K-maps',
    analogy: {
      title: 'आपल्या घरातली बटणं आणि दिवे',
      oneLine: 'Series मधली बटणं = AND, parallel मधली = OR, जिन्यावरचं two-way बटण = XOR.',
      story: `आपल्या घरातली wiring बघा. एखादा दिवा दोन बटणांमधून <b>एकामागून एक</b> (series मध्ये) जोडला असेल, तर बटण A <b>आणि</b> बटण B दोन्ही चालू असतील तेव्हाच तो पेटतो — हा AND. दोन बटणं <b>शेजारी-शेजारी</b> (parallel मध्ये) जोडली असतील, तर कोणतंही एक दिवा पेटवू शकतं — हा OR. दाबल्यावर circuit <i>तोडणारं</i> push-button म्हणजे NOT. आणि जिन्यावरचा दिवा — जो खाली चालू करून वरून बंद करता येतो — <b>कोणतंही एकच</b> बटण फिरवलं की आपली स्थिती बदलतो; ती two-way बटणं XOR सारखी वागतात. बूलियन बीजगणित म्हणजे अशा चालू/बंद बटणांचं गणित एवढंच: 1 = चालू/जोडलेलं/सत्य, 0 = बंद/तुटलेलं/असत्य.`,
      map: [
        ['Series मधली दोन बटणं', 'AND: A·B'],
        ['Parallel मधली दोन बटणं', 'OR: A + B'],
        ['दाबल्यावर circuit तोडणारं push-button', 'NOT: A′'],
        ['जिन्यावरची two-way बटणं — कोणतंही एक फिरवलं की दिवा उलटतो', 'XOR: A ⊕ B = A′B + AB′'],
        ['दिवा चालू / बंद', 'Output 1 / 0'],
      ],
    },
    concept: [
      `बूलियन बीजगणित (Boolean algebra) 0 आणि 1 या किमतींवर तीन मूलभूत क्रियांनी चालते: AND (·), OR (+) आणि NOT (′ किंवा वरची रेघ). इतर तार्किक द्वारे (logic gates) यांच्याच जोडण्या आहेत: NAND = AND चा NOT, NOR = OR चा NOT, XOR (inputs वेगवेगळे असतील तेव्हा 1), XNOR (inputs सारखे असतील तेव्हा 1). <b>NAND आणि NOR ही सार्वत्रिक द्वारे (universal gates) आहेत</b>: फक्त त्यांपैकी एकच वापरून कोणतंही circuit बनवता येतं. n inputs साठीच्या <b>सत्यता सारणीत</b> (truth table) 2<sup>n</sup> ओळी असतात, आणि n चलांची 2<sup>2<sup>n</sup></sup> वेगवेगळी Boolean functions असतात.`,
      `महत्त्वाचे नियम: A + 0 = A, A·1 = A, A + 1 = 1, A·0 = 0, A + A = A, A + A′ = 1, A·A′ = 0, (A′)′ = A; वितरण नियम (distributive) A + BC = (A + B)(A + C); शोषण नियम (absorption) A + AB = A, A(A + B) = A, आणि A + A′B = A + B. <b>De Morgan चे नियम</b>: (A + B)′ = A′·B′ आणि (A·B)′ = A′ + B′ — “रेघ तोडा, चिन्ह बदला”.`,
      `<b>Venn आकृतीत</b> AND म्हणजे सामाईक भाग (छेद, intersection), OR म्हणजे संयोग (union), NOT म्हणजे वर्तुळाबाहेरचं सगळं, आणि XOR म्हणजे सामाईक भाग सोडून दोन्ही बाजूंचे भाग. <b>Karnaugh map</b> मध्ये minterms Gray-code क्रमाने (00, 01, 11, 10) मांडलेले असतात, म्हणून शेजारच्या cells मध्ये फक्त एकच चल बदलतो. शेजारचे 1 हे 1, 2, 4 किंवा 8 च्या गटांत घ्या (गट कडांवरून गुंडाळून पलीकडे जाऊ शकतात); प्रत्येक गटात जे चल बदलत नाहीत त्यांचे एक product term बनते.`,
    ],
    keyPoints: [
      'AND: सगळे inputs 1 असतील तेव्हाच 1; OR: सगळे inputs 0 असतील तेव्हाच 0',
      'NAND: सगळे inputs 1 असतील तेव्हाच 0; NOR: सगळे inputs 0 असतील तेव्हाच 1 — दोन्ही universal',
      'XOR = A′B + AB′ (inputs वेगवेगळे असतील तेव्हा 1); XNOR = AB + A′B′',
      'De Morgan: (A + B)′ = A′B′; (AB)′ = A′ + B′',
      'शोषण नियम: A + AB = A; A(A + B) = A; A + A′B = A + B',
      'n चल: सत्यता सारणीत 2<sup>n</sup> ओळी आणि 2<sup>2<sup>n</sup></sup> शक्य functions',
      'K-map क्रम 00, 01, 11, 10; 2<sup>k</sup> cells चा गट k चल काढून टाकतो',
      'Venn: AND = छेद, OR = संयोग, XOR = symmetric difference',
    ],
    example: {
      q: 'K-map वापरून F(A, B, C) = Σm(0, 1, 2, 4, 5) सोपे करा.',
      steps: [
        'Minterms ABC रूपात: 0 = 000, 1 = 001, 2 = 010, 4 = 100, 5 = 101.',
        'K-map च्या ओळी A = 0, 1; स्तंभ BC = 00, 01, 11, 10. A = 0 या ओळीत 00, 01, 10 खाली 1 आहेत; A = 1 या ओळीत 00, 01 खाली 1 आहेत.',
        'चारचा गट: cells 0, 1, 4, 5 (दोन्ही ओळींतले 00 आणि 01 स्तंभ). सगळीकडे B = 0, तर A आणि C बदलतात → term <b>B′</b>.',
        'Cell 2 (010) अजून झाकला गेलेला नाही. ओळीच्या कडेवरून गुंडाळून त्याची cell 0 (000) सोबत जोडी करा: A = 0 आणि C = 0 स्थिर राहतात → term <b>A′C′</b>.',
        'F = B′ + A′C′. पडताळा m2 = 010: B = 1, म्हणून फक्त A′C′ तो झाकतो. ✓',
      ],
      answer: 'F = B′ + A′C′',
    },
    shortcut:
      '“Simplify” प्रकारच्या MCQ मध्ये मूळ expression आणि चारही पर्याय काही input ओळींवर तपासा, उदा. (A, B) = (0, 0), (0, 1), (1, 0), (1, 1). बहुतेक वेळा एक-दोन ओळींतच तीन पर्याय बाद होतात.',
    traps: [
      'De Morgan क्रियाही बदलतो: (A + B)′ म्हणजे A′B′, A′ + B′ नाही.',
      'K-map चे स्तंभ 00, 01, 11, 10 असे जातात — 00, 01, 10, 11 असे नाही. Binary क्रम वापरला तर शेजारीपणा तुटतो.',
      'A + BC = (A + B)(A + C) हे सामान्य बीजगणितात चुकीचं वाटलं तरी बूलियन बीजगणितात खरं आहे.',
    ],
    practice: [
      { q: 'A + A′B चे सोपे रूप कोणते?', why: 'A + A′B = (A + A′)(A + B) = 1·(A + B) = A + B.' },
      { q: 'De Morgan च्या नियमानुसार (A + B + C)′ कशाच्या बरोबर आहे?', why: 'रेघ तोडा आणि + चे · करा: (A + B + C)′ = A′·B′·C′.' },
      { q: 'A आणि B संचांच्या Venn आकृतीत, A मध्ये किंवा B मध्ये असलेला पण दोन्हींत <b>नसलेला</b> सगळा भाग छायांकित केला आहे. तो कोणते Boolean expression दाखवतो?', why: '“A, B पैकी नेमक्या एकात” म्हणजे symmetric difference, म्हणजेच XOR = AB′ + A′B.' },
      { q: 'F(A, B, C, D) = Σm(0, 2, 8, 10) चे सर्वांत लहान expression कोणते?', why: 'Minterms 0000, 0010, 1000, 1010: चारही मध्ये B = 0 आणि D = 0 (K-map चे चार कोपरे), तर A आणि C बदलतात → B′D′.' },
    ],
  },

  // ───────────────────────────── Computer Architecture ─────────────────────────────
  'architecture-interrupts': {
    title: 'Buses, Processor–I/O संवाद आणि Interrupts',
    analogy: {
      title: 'वर्गात शंका सोडवणाऱ्या बाई',
      oneLine: 'प्रत्येक विद्यार्थ्याला पुन्हा पुन्हा विचारणे = polling; वर केलेला हात = interrupt; वह्या नेणारा मॉनिटर = DMA.',
      story: `साठ मुलांच्या वर्गाला बाई एक धडा शिकवत आहेत. शंका सोडवायची एक पद्धत म्हणजे दर चार ओळींनंतर थांबून प्रत्येक मुलाला क्रमाने विचारायचं, “काही शंका? काही शंका?” — थकवणारं, आणि बहुतेक वेळ वायाच (<b>polling / programmed I/O</b>). त्यापेक्षा चांगली पद्धत: ज्याला मदत हवी तो फक्त <b>हात वर करतो</b>. बाई बोलत असलेलं वाक्य पूर्ण करतात, पुस्तकातल्या त्या ओळीवर बोट ठेवतात, शंका सोडवतात, आणि मग त्याच ओळीपासून पुढे सुरू करतात (<b>interrupt</b>: चालू instruction पूर्ण करा, PC जपून ठेवा, service routine चालवा, परत या). दोन हात एकदम वर गेले, तर आधी कोणाचं ऐकायचं ते एक ठरलेला नियम सांगतो (<b>priority</b>), आणि मुख्याध्यापक एखादी सूचना घेऊन वर्गात आले, तर ती कोणीच टाळू शकत नाही (<b>non-maskable interrupt</b>). साठ वह्या गोळा करून staffroom मध्ये न्यायच्या असतील, तर बाई फक्त वर्गाच्या मॉनिटरला ते काम सांगतात आणि शिकवणं चालूच ठेवतात; काम पूर्ण झाल्यावरच तो त्यांना सांगतो (<b>DMA</b>).`,
      map: [
        ['प्रत्येक मुलाला पुन्हा पुन्हा “काही शंका?” विचारणे', 'Programmed I/O (polling): CPU सतत device ची स्थिती तपासत राहतो'],
        ['विद्यार्थ्याने वर केलेला हात', 'Device कडून आलेली interrupt request (IRQ)'],
        ['पुस्तकातल्या ओळीवर बोट, उत्तर, मग पुढे सुरू', 'PC आणि flags जपणे, ISR चालवणे, परत येणे'],
        ['टाळता न येणारी मुख्याध्यापकांची सूचना', 'Non-maskable interrupt (उदा. वीज जाणे)'],
        ['मॉनिटर स्वतःच वह्या घेऊन जातो', 'DMA: controller पूर्ण block हलवतो, फक्त शेवटी interrupt करतो'],
      ],
    },
    concept: [
      `Block स्तरावर संगणक म्हणजे CPU + मेमरी + I/O modules, आणि ते तीन भागांच्या <b>system bus</b> ने जोडलेले असतात. <b>Address bus</b> CPU ला हवं असलेलं ठिकाण वाहून नेतो (एकदिशा: CPU → मेमरी/I/O); n address lines असतील तर CPU 2<sup>n</sup> locations address करू शकतो. <b>Data bus</b> प्रत्यक्ष data वाहून नेतो (दुदिशा); त्याची रुंदी म्हणजे एका transfer मध्ये हलणारे bits. <b>Control bus</b> memory read/write, I/O read/write, interrupt request, bus request/grant आणि clock असे signals वाहून नेतो. Devices <b>interfaces/ports</b> मार्फत जोडलेली असतात; त्यांना एकतर मेमरीचाच भाग म्हणून address केलं जातं (<b>memory-mapped I/O</b>) किंवा वेगळ्या I/O instructions ने (<b>isolated I/O</b>).`,
      `Processor आणि I/O यांचा संवाद तीन प्रकारे होतो. <b>Programmed I/O</b>: CPU device चा status bit सतत तपासत राहतो (busy-waiting), त्यात CPU चा वेळ वाया जातो. <b>Interrupt-driven I/O</b>: device तयार झाल्यावर interrupt पाठवते; मधल्या वेळात CPU दुसरं काम करतो, पण प्रत्येक word त्याला स्वतःच हलवावा लागतो. <b>DMA (Direct Memory Access)</b>: CPU DMA controller ला सुरुवातीचा address, words ची संख्या आणि दिशा देतो; controller bus ताब्यात घेतो (bus request / bus grant, HOLD/HLDA) आणि device व मेमरी यांच्यामध्ये पूर्ण block हलवतो — <i>cycle stealing</i> ने किंवा <i>burst mode</i> मध्ये — आणि शेवटी CPU ला एकदाच interrupt करतो. Disks सारख्या वेगवान, मोठ्या प्रमाणात data हलवणाऱ्या devices साठी DMA योग्य आहे.`,
      `<b>Interrupt</b> आला की CPU चालू instruction पूर्ण करतो, PC आणि flags stack वर जपून ठेवतो, <b>Interrupt Service Routine (ISR)</b> चा address शोधतो — बहुतेकदा <b>interrupt vector table</b> मधून — ती चालवतो, आणि return instruction आल्यावर जपलेली स्थिती परत आणतो. <b>Hardware interrupts</b> devices कडून येतात आणि ते <i>maskable</i> (बंद करता येणारे) किंवा <i>non-maskable</i> (NMI, उदा. वीज जाणे) असतात. <b>Software interrupts / traps</b> instructions मुळे (system calls) किंवा errors मुळे (शून्याने भागाकार, अवैध opcode, page fault — यांना exceptions म्हणतात) निर्माण होतात. अनेक devices असतील तर priority software मध्ये <b>polling क्रमाने</b> किंवा hardware मध्ये <b>daisy chaining</b> ने ठरते; daisy chain मध्ये CPU च्या सर्वांत जवळच्या device ला सर्वोच्च priority असते.`,
    ],
    keyPoints: [
      'Address bus: एकदिशा (CPU कडून); data bus: दुदिशा; control bus: स्वतंत्र signal lines',
      'n address lines → 2<sup>n</sup> locations; data bus ची रुंदी = दर transfer मागे bits',
      'Programmed I/O: CPU busy-wait करतो; interrupt I/O: device signal देईपर्यंत CPU मोकळा; DMA: CPU शिवाय block हलतो',
      'DMA bus request/grant (HOLD/HLDA) वापरतो; modes: cycle stealing आणि burst',
      'प्रत्येक instruction cycle च्या शेवटी CPU interrupts तपासतो',
      'Interrupt आल्यावर: instruction पूर्ण → PC + flags stack वर → ISR चालवा → स्थिती परत → पुढे सुरू',
      'NMI बंद करता येत नाही (वीज जाणे); शून्याने भागाकार हा अंतर्गत trap/exception आहे',
      'Daisy chain: स्थानानुसार priority — CPU च्या सर्वांत जवळचे device सर्वोच्च',
    ],
    example: {
      q: 'एक program address 2000 वरची one-word instruction execute करत असताना keyboard interrupt येतो. ISR address 6000 पासून सुरू होते. CPU काय काय करतो ते क्रमाने लिहा.',
      steps: [
        '2000 वरची चालू instruction पूर्ण करा. PC मध्ये आधीच 2001, म्हणजे पुढच्या instruction चा address आहे.',
        'Interrupt ला acknowledge करा आणि (सहसा) पुढचे maskable interrupts बंद करा.',
        'PC (2001) आणि flag register stack वर push करा.',
        'PC मध्ये ISR चा address 6000 (vector table मधून) भरा आणि ISR चालवा — ती keyboard port मधून key code वाचते.',
        'Return-from-interrupt instruction आल्यावर flags आणि PC (2001) pop करा आणि काहीच झालं नव्हतं अशा प्रकारे program पुढे चालू ठेवा.',
      ],
      answer: 'Instruction पूर्ण → PC (2001) आणि flags जपा → 6000 वर उडी → ISR चालवा → स्थिती परत → 2001 पासून पुढे सुरू',
    },
    shortcut:
      'तीन I/O पद्धतींचा क्रम CPU च्या सहभागानुसार लावा: programmed I/O (सर्वांत जास्त) &gt; interrupt-driven &gt; DMA (सर्वांत कमी). प्रश्नात “large block”, “disk” किंवा “without the CPU” असं काही असेल → DMA.',
    traps: [
      'साध्या interrupt साठी CPU instruction अर्ध्यावर सोडत नाही; आधी चालू instruction पूर्ण करतो.',
      'DMA सुद्धा एक interrupt वापरतो — पूर्ण block संपल्यावर, प्रत्येक word साठी नाही.',
    ],
    practice: [
      { q: 'System bus चा कोणता भाग एकदिशा (unidirectional) असतो?', why: 'Address फक्त CPU (किंवा bus master) कडून बाहेर जातात; data दोन्ही दिशांनी जातो.' },
      { q: 'Disk वरून मुख्य मेमरीत मोठा data block, CPU चा सर्वांत कमी सहभाग ठेवून, कशाने हलवला जातो?', why: 'DMA controller पूर्ण block स्वतःच हलवतो आणि शेवटी CPU ला एकदाच interrupt करतो.' },
      { q: 'CPU एका instruction च्या मध्यात असताना एक I/O device maskable interrupt निर्माण करते (interrupts चालू आहेत). CPU काय करतो?', why: 'Instruction cycle च्या शेवटी interrupts तपासले जातात; परत येण्याचा address आणि flags जपले जातात म्हणजे program पुढे चालू करता येतो.' },
      { q: 'एक device सेकंदाला 1000 वेळा poll केले जाते. प्रत्येक poll ला 100 clock cycles लागतात, आणि CPU 100 MHz वर चालतो. CPU च्या वेळेपैकी किती भाग polling मध्ये जातो?', why: 'दर सेकंदाला वापरलेले cycles = 1000 × 100 = 10⁵. भाग = 10⁵ ÷ 10⁸ = 0.001 = 0.1%.' },
    ],
  },

  // ───────────────────────────── Computer Language ─────────────────────────────
  'languages-translators': {
    title: 'Assembly विरुद्ध उच्चस्तरीय भाषा; Compiler, Interpreter, Assembler, Linker, Loader',
    analogy: {
      title: 'मराठी कादंबरीचा अनुवाद विरुद्ध ग्रामसभेतला दुभाषी',
      oneLine: 'Compiler = संपूर्ण पुस्तक एकदाच अनुवादित; interpreter = दर वेळी वाक्य-वाक्य अनुवाद.',
      story: `समजा एक लोकप्रिय मराठी कादंबरी इंग्रजी वाचकांपर्यंत पोहोचवायची आहे. एक मार्ग: एक अनुवादक महिनोन्महिने काम करून <b>संपूर्ण पुस्तक</b> अनुवादित करतो, सगळी अस्पष्ट वाक्ये एकत्र यादी करून दाखवतो, आणि इंग्रजी आवृत्ती छापली जाते. त्यानंतर वाचक ते इंग्रजी पुस्तक हवं तितक्या वेळा वाचतात, अनुवादकाची गरजच नाही — हा <b>compiler</b>. दुसरा मार्ग: ग्रामसभेत एक परदेशी पाहुणा आला आहे, आणि एक <b>दुभाषी</b> (interpreter) वक्त्याच्या शेजारी उभी राहून ते बोलत जातील तसं <b>वाक्य-वाक्य</b> अनुवाद करते; एखादं वाक्य समजलंच नाही तर ती तिथेच थांबते — आणि उद्या तेच भाषण पुन्हा झालं तर तिला पुन्हा सगळा अनुवाद करावा लागतो. लघुलेखकाचं shorthand — जिथे प्रत्येक खूण एका ठरलेल्या शब्दासाठी असते — ते म्हणजे <b>assembly language</b>, आणि ते शब्दशः टाइप करणं म्हणजे <b>assembler</b>. वेगवेगळ्या लेखकांनी लिहिलेली प्रकरणं आणि संदर्भग्रंथातलं एक परिशिष्ट एकत्र शिवून एक खंड तयार करणारा बाइंडर म्हणजे <b>linker</b>, आणि बांधलेलं पुस्तक वाचकाच्या टेबलावर नेऊन ठेवणारा ग्रंथालयातला शिपाई म्हणजे <b>loader</b>.`,
      map: [
        ['संपूर्ण पुस्तक एकदाच अनुवादित; छापील आवृत्ती अनेकदा वाचली', 'Compiler: संपूर्ण program → object code, मग compiler शिवाय चालतो'],
        ['वाक्य-वाक्य अनुवाद करणारी दुभाषी, पहिल्याच गोंधळाच्या वाक्यावर थांबते', 'Interpreter: statement-statement, पहिल्या error वर थांबतो, प्रत्येक run ला पुन्हा अनुवाद'],
        ['दर शब्दासाठी एक shorthand खूण, लघुलेखक टाइप करतो', 'दर machine instruction साठी एक assembly mnemonic, assembler अनुवाद करतो'],
        ['प्रकरणं + संदर्भ परिशिष्ट एका पुस्तकात शिवणारा बाइंडर', 'Linker: object files + library code जोडून एक executable'],
        ['पुस्तक वाचकाच्या टेबलावर ठेवणारा शिपाई', 'Loader: executable मेमरीत ठेवून सुरू करतो'],
      ],
    },
    concept: [
      `भाषांचे पिढ्यांमध्ये (generations) गट केले जातात. <b>Machine language</b> (1GL) म्हणजे शुद्ध binary — CPU फक्त हीच execute करतो; वेगवान पण machine-dependent आणि लिहायला कठीण. <b>Assembly language</b> (2GL) bit patterns ऐवजी <b>mnemonics</b> (MOV, ADD, JMP) आणि labels वापरते; प्रत्येक statement सहसा नेमकी एक machine instruction होते, म्हणून ती अजूनही <b>machine-dependent</b> (portable नाही) आहे, पण hardware वर पूर्ण नियंत्रण देते — device drivers आणि embedded code मध्ये वापरतात. <b>उच्चस्तरीय भाषा</b> (high-level languages, 3GL: C, C++, Java, Python) इंग्रजी आणि गणिताच्या जवळच्या, <b>portable</b> असतात, आणि एक statement अनेक machine instructions होते. SQL सारख्या 4GL मध्ये तुम्हाला <i>काय</i> हवं ते सांगता, कसं ते नाही.`,
      `<b>Assembler</b> assembly चे machine code मध्ये रूपांतर करतो (two-pass assembler पहिल्या pass मध्ये labels ची symbol table तयार करतो). <b>Compiler</b> संपूर्ण high-level program object code मध्ये अनुवादित करतो आणि तो पूर्ण तपासल्यानंतर सगळे errors यादीने दाखवतो; तयार झालेला program वेगाने चालतो आणि चालताना compiler ची गरज नसते (C, C++). <b>Interpreter</b> एका वेळी एक statement अनुवादित करून execute करतो, पहिल्या error वर थांबतो, object file तयार करत नाही आणि त्याचा program संथ चालतो (Python, BASIC; Java bytecode JVM चालवते). <b>Cross-compiler</b> दुसऱ्या machine साठी code तयार करतो.`,
      `C program तयार होण्याचे टप्पे: <b>preprocessor</b> (<code>#include</code> आणि <code>#define</code> हाताळतो, comments काढतो) → <b>compiler</b> (C ते assembly) → <b>assembler</b> (object file मध्ये, <code>.o</code>/<code>.obj</code>) → <b>linker</b> (object files ना <code>printf</code> सारख्या library code शी जोडतो, बाह्य references सोडवतो, executable तयार करतो) → <b>loader</b> (executable मेमरीत copy करतो, relocate करतो आणि सुरू करतो). Syntax errors compiler पकडतो; declare केलेलं पण कधीच define न केलेलं function <b>linker</b> error देतं; शून्याने भागाकार हा <b>run-time</b> error आहे.`,
    ],
    keyPoints: [
      '1GL machine, 2GL assembly, 3GL उच्चस्तरीय (C, Java), 4GL (SQL), 5GL (Prolog, AI)',
      'Assembly: mnemonics, machine code शी एकास-एक, machine-dependent, assembler लागतो',
      'Compiler: संपूर्ण program एकदम, सगळे errors यादीत, object code तयार, जलद execution',
      'Interpreter: ओळ-ओळ, पहिल्या error वर थांबतो, object code नाही, संथ execution',
      'C build साखळी: preprocessor → compiler → assembler → linker → loader',
      'Linker बाह्य references सोडवतो; loader मेमरी देतो आणि relocate करतो',
      'Syntax error → compile time; function चा body नसणे → link time; शून्याने भागाकार → run time',
    ],
    example: {
      q: '<code>marks.c</code> या फाइलमध्ये तीन वेगवेगळ्या चुका आहेत: (1) एक semicolon राहून गेला आहे; (2) <code>avg()</code> हे function prototype ने declare केलं आहे आणि call केलं आहे, पण त्याचा body कुठेच लिहिलेला नाही; (3) एका विद्यार्थ्यासाठी 0 होणाऱ्या variable ने भागाकार केला आहे. प्रत्येक चूक कोणत्या टप्प्यावर उघड होते?',
      steps: [
        'Preprocessor फक्त headers copy करतो आणि macros उलगडतो; तो C चं व्याकरण तपासत नाही.',
        '(1) Semicolon नसल्याने व्याकरण मोडतं → <b>compiler</b> सांगतो (compile-time syntax error).',
        '(2) Prototype मुळे call compile होतो, पण कोणत्याही object file मध्ये <code>avg()</code> चा body नाही → <b>linker</b> “undefined reference to avg” असं सांगतो.',
        '(3) मजकुरात काहीच चूक नाही, म्हणून program build होतो. तो चालवल्यावर शून्याने भागाकार होऊन तो कोसळतो → <b>run-time</b> error.',
      ],
      answer: '(1) compiler, (2) linker, (3) run time',
    },
    shortcut:
      'C ची साखळी “<b>P</b>lease <b>C</b>ompile <b>A</b>nd <b>L</b>ink, <b>L</b>ater” अशी लक्षात ठेवा: Preprocessor, Compiler, Assembler, Linker, Loader.',
    traps: [
      'Interpreter कोणतीही object/executable file तयार करत नाही; “जलद execution” नेहमी compiler सोबतच येतं.',
      'Linker आणि loader वेगळे आहेत: linker executable file बनवतो; तुम्ही program चालवता तेव्हा loader ती मेमरीत ठेवतो.',
    ],
    practice: [
      { q: 'कोणता translator उच्चस्तरीय program एका वेळी एक statement अनुवादित करून execute करतो?', why: 'Interpreter प्रत्येक statement क्रमाने अनुवादित करून चालवतो आणि पहिल्या error वर थांबतो.' },
      { q: 'अनेक object files आणि library routines एकत्र करून एकच executable file बनवणे हे कोणाचे काम आहे?', why: 'Linker object modules जोडतो आणि त्यांच्यातले व libraries कडे जाणारे references सोडवतो.' },
      { q: 'Assembly language बद्दल कोणते विधान असत्य (FALSE) आहे?', why: 'Assembly एकाच processor च्या instruction set शी बांधलेली असते, म्हणून ती portable नाही.' },
      { q: 'C program build करून चालवताना टप्प्यांचा योग्य क्रम कोणता?', why: 'आधी macros आणि headers हाताळले जातात, मग C → assembly → object code, मग linking, आणि शेवटी मेमरीत loading.' },
    ],
  },

  'c-basics': {
    title: 'C ची मूलतत्त्वे: Data Types, Operators, Precedence, Type Conversion, printf',
    analogy: {
      title: 'गावच्या दूध संकलन केंद्रावरचे कॅन',
      oneLine: 'प्रत्येक data type म्हणजे ठरलेल्या मापाचं भांडं; लहान भांड्यात ओतलं की दूध सांडतं.',
      story: `गावच्या दूध संकलन केंद्रावर दूध ठरलेल्या मापाच्या भांड्यांत मोजलं जातं: 250 ml चा मग, 1 लिटरचा कॅन, 40 लिटरचा ड्रम. प्रत्येक भांड्यावर त्यात काय आहे याचं <b>लेबल</b> असतं. मगातलं दूध मोठ्या कॅनमध्ये ओतलं तर काहीच सांडत नाही — हे सुरक्षित <b>widening</b> (char → int → double). मोठ्या कॅनमधलं दूध लहान मगात ओतलं तर दूध ओसंडून वाहतं — हे <b>narrowing</b>, ज्यात data गमावला जातो. फक्त पूर्ण लिटर नोंदवणाऱ्या काउंटरला 2.75 लिटर दिलं तर तो 2 लिहितो: अपूर्णांक सरळ गळून जातो — जसं <code>double</code> हे <code>int</code> मध्ये ठेवताना C अपूर्णांक टाकून देतं. कारकुनाने म्हशीचं दूध गायीच्या दुधाच्या fat chart ने वाचलं तर आकडा निरर्थक येतो — जसं <code>float</code> ला <code>%d</code> ने छापणं. आणि कारकून नेहमी ठरलेल्या क्रमानेच काम करतो — आधी वजन, मग fat तपासणी, मग दराने गुणाकार — तसाच C मध्ये operators चा क्रम <b>precedence</b> ठरवते.`,
      map: [
        ['ठरलेल्या मापाचे मग, कॅन, ड्रम', 'ठरलेल्या आकाराचे data types: char (1 B), int (4 B), double (8 B)'],
        ['मग मोठ्या कॅनमध्ये ओतला — काहीच गेलं नाही', 'Implicit widening / promotion (int → double)'],
        ['पूर्ण लिटर काउंटर 2.75 L ला 2 नोंदवतो', 'double → int रूपांतरात अपूर्णांक कापला जातो'],
        ['म्हशीचं दूध गायीच्या chart ने वाचलं', 'चुकीचा printf format specifier कचरा छापतो'],
        ['ठरलेला क्रम: वजन, fat तपासणी, दराने गुणाकार', 'Operator precedence आणि associativity'],
      ],
    },
    concept: [
      `C चे मूलभूत types (एक नेहमीची system गृहीत धरा): <code>char</code> 1 byte, <code>short</code> 2, <code>int</code> 4, <code>long</code> 4 किंवा 8, <code>float</code> 4, <code>double</code> 8. Signed n-bit पूर्णांकाची व्याप्ती −2<sup>n−1</sup> ते 2<sup>n−1</sup> − 1 (4-byte int म्हणजे साधारण ±2.1 × 10⁹); <code>unsigned</code> ची व्याप्ती 0 ते 2<sup>n</sup> − 1. <code>sizeof</code> हा operator आहे जो bytes मध्ये आकार देतो. पूर्णांक भागाकारात अपूर्णांक गळतो (<code>7 / 2</code> म्हणजे 3), आणि <code>%</code> फक्त पूर्णांकांवर चालतो, ज्याच्या निकालाचं चिन्ह डाव्या operand चं असतं (<code>-7 % 2</code> म्हणजे −1).`,
      `सर्वोच्च ते सर्वांत कमी precedence नुसार operators: postfix <code>()</code> <code>[]</code> <code>++</code> <code>--</code> → unary <code>!</code> <code>~</code> <code>++</code> <code>--</code> <code>-</code> <code>(type)</code> <code>sizeof</code> → <code>* / %</code> → <code>+ -</code> → shifts <code>&lt;&lt; &gt;&gt;</code> → relational <code>&lt; &lt;= &gt; &gt;=</code> → <code>== !=</code> → <code>&amp;</code> → <code>^</code> → <code>|</code> → <code>&amp;&amp;</code> → <code>||</code> → <code>?:</code> → assignment → comma. समान precedence चे operators डावीकडून उजवीकडे गटबद्ध होतात, फक्त unary operators, <code>?:</code> आणि assignment उजवीकडून डावीकडे. <code>&amp;&amp;</code> आणि <code>||</code> <b>short-circuit</b> करतात: डाव्या बाजूनेच उत्तर ठरलं तर उजवी बाजू evaluate केली जात नाही.`,
      `मिश्र expressions मध्ये C लहान type चे मोठ्या type मध्ये रूपांतर करते (<b>implicit conversion</b>: char/short → int → long → float → double); लहान type मध्ये assign केलं तर कापलं जातं. <b>Cast</b> रूपांतर सक्तीने करतो: <code>(float)7 / 2</code> म्हणजे 3.5, पण <code>(float)(7 / 2)</code> म्हणजे 3.0, कारण भागाकार आधीच int मध्ये झालेला असतो. नेहमीचे <code>printf</code> formats: <code>%d</code>/<code>%i</code> int, <code>%u</code> unsigned, <code>%ld</code> long, <code>%f</code> float/double (default 6 दशांश स्थळे), <code>%e</code> घातांकी रूप, <code>%c</code> char, <code>%s</code> string, <code>%x</code> hex, <code>%o</code> octal, <code>%p</code> pointer, <code>%%</code> टक्केवारीचं चिन्ह; <code>%5d</code> रुंदी 5 ठेवतो, <code>%-5d</code> डावीकडे जुळवतो, <code>%.2f</code> 2 दशांश स्थळे छापतो.`,
    ],
    keyPoints: [
      'वेगळं सांगितलं नसेल तर char 1, short 2, int 4, float 4, double 8 bytes गृहीत धरा',
      '<code>7 / 2</code> = 3; <code>7 % 2</code> = 1; <code>-7 / 2</code> = −3; <code>-7 % 2</code> = −1 (डाव्या operand चं चिन्ह)',
      'Precedence: unary &gt; * / % &gt; + − &gt; &lt;&lt; &gt;&gt; &gt; relational &gt; == != &gt; &amp; &gt; ^ &gt; | &gt; &amp;&amp; &gt; || &gt; ?: &gt; = &gt; ,',
      'उजवीकडून डावीकडे गटबद्धता: unary operators, <code>?:</code>, assignment (<code>a = b = 5</code>)',
      'Short-circuit: <code>a &amp;&amp; b</code> मध्ये a 0 असेल तर b वगळला जातो; <code>a || b</code> मध्ये a शून्येतर असेल तर b वगळला जातो',
      '<code>x &lt;&lt; n</code> = x × 2<sup>n</sup>; <code>x &gt;&gt; n</code> = x ÷ 2<sup>n</sup> (ऋण नसलेल्या x साठी)',
      'Promotion: char → int → long → float → double; cast फक्त लगेच नंतरच्या operand वर लागू होतो',
      'printf: %d %u %f %c %s %x %o %e %p %%; %.2f = 2 दशांश स्थळे; %5d = रुंदी 5',
    ],
    example: {
      q: 'हा program काय छापतो?',
      steps: [
        '<code>a / b</code> म्हणजे int ÷ int = 3 (अपूर्णांक गळतो). त्यानंतरच 3 float मध्ये ठेवला जातो, म्हणून f = 3.0.',
        '<code>(float)a</code> ने 7.0 मिळतो, आणि 7.0 / 2 हा float भागाकार = 3.5, म्हणून g = 3.5.',
        '<code>a % b</code> = 7 % 2 = 1.',
        '<code>-a % b</code>: unary minus हा % पेक्षा घट्ट बांधला जातो, म्हणून (−7) % 2 = −1 (चिन्ह डाव्या operand प्रमाणे).',
        '<code>%.2f</code> दोन दशांश स्थळे छापतो.',
      ],
      answer: '3.00 3.50 1 -1',
    },
    shortcut:
      'Precedence च्या प्रश्नांत आधी स्वतःच कंस घाला, या क्रमाने: unary, मग * / %, मग + −, मग shifts, मग तुलना, मग bitwise &amp; ^ |, मग &amp;&amp; ||, मग ?:, मग =. लक्षात ठेवण्यासाठी: “<b>U</b>ncle <b>A</b>rjun <b>S</b>aw <b>R</b>ani <b>B</b>uying <b>L</b>ots of <b>T</b>ea <b>A</b>gain” — Unary, Arithmetic, Shift, Relational, Bitwise, Logical, Ternary, Assignment.',
    traps: [
      '<code>float f = 7 / 2;</code> मध्ये 3.5 नव्हे, 3.0 साठवला जातो — रूपांतराआधीच भागाकार int मध्ये होतो.',
      'Bitwise <code>&amp;</code> ची precedence <code>==</code> पेक्षा <b>कमी</b> आहे: <code>x &amp; 1 == 0</code> म्हणजे <code>x &amp; (1 == 0)</code>, जे नेहमी 0 असते.',
      'Float ला <code>%d</code> ने (किंवा int ला <code>%f</code> ने) छापणं हे undefined behaviour आहे आणि त्याने रूपांतरित किंमत नव्हे, कचरा छापला जातो.',
    ],
    practice: [
      { q: 'या program चा output काय आहे?', why: '3 * 2 = 6. मग 8 / 4 % 3 डावीकडून उजवीकडे: (8 / 4) % 3 = 2 % 3 = 2. म्हणून 5 + 6 − 2 = 9.' },
      { q: 'या program चा output काय आहे?', why: '12 = 1100, 10 = 1010. AND = 1000 = 8; OR = 1110 = 14; XOR = 0110 = 6; 12 &lt;&lt; 2 = 12 × 4 = 48.' },
      { q: 'या program चा output काय आहे?', why: 'a 0 आहे, म्हणून <code>&amp;&amp;</code> short-circuit करतो: <code>++b</code> कधीच चालत नाही आणि if असत्य ठरतो. b 5 च राहतो.' },
      { q: 'या program चा output काय आहे?', why: '‘A’ + 2 = 67 = ‘C’. 67 hex मध्ये 43 (4 × 16 + 3) आणि octal मध्ये 103 (1 × 64 + 0 × 8 + 3).' },
    ],
  },

  'c-control-flow': {
    title: 'C मधील Control Flow आणि Loops (Output ओळखणे)',
    analogy: {
      title: 'आपल्या मार्गावर धावणारी PMPML बस',
      oneLine: 'प्रत्येक थांबा म्हणजे loop ची एक फेरी; रिकामा थांबा = continue; बस बंद पडणे = break; पुढे प्रवास करत राहणारा प्रवासी = switch fall-through.',
      story: `पुण्यातली एक PMPML बस थांबा 1 पासून थांबा 20 पर्यंत आपल्या मार्गावर धावते आहे. प्रत्येक थांब्यावरून निघण्याआधी कंडक्टर एकच अट तपासतो: “शेवटचा थांबा आला का?” नसेल तर बस पुढे जाते — हे तपासा-आणि-पुन्हा-करा म्हणजेच <b>loop</b>, आणि थांब्याचा क्रमांक म्हणजे loop counter. ज्या थांब्यावर कोणी थांबलेलं नाही आणि कोणाला उतरायचंही नाही, तिथे बस थांबत नाही; त्या थांब्याचं उरलेलं काम सोडून ती सरळ पुढच्या थांब्याकडे जाते — हे <b>continue</b>. बस थांबा 12 वर बंद पडली, तर मार्ग तिथेच संपतो आणि सगळे खाली उतरतात — हे <b>break</b>. आता एका प्रवाशाचा विचार करा: थांबा 5 वर चढलेला प्रवासी थांबा 6, 7, 8 … असा पुढे प्रवास करत राहतो, जोपर्यंत तो उतरायचं ठरवत नाही. <b>switch</b> नेमकं असंच चालतं: control जुळणाऱ्या <code>case</code> वर आत शिरतो आणि <code>break</code> भेटेपर्यंत पुढचे सगळे cases चालवत राहतो.`,
      map: [
        ['थांबा क्रमांक 1, 2, 3 …', 'Loop counter (i)'],
        ['पुढे निघण्याआधी कंडक्टर तपासतो “शेवटचा थांबा?”', 'प्रत्येक फेरीला तपासली जाणारी loop condition'],
        ['रिकामा थांबा — बस तो वगळून पुढे जाते', '<code>continue</code>: या फेरीचं उरलेलं काम वगळा'],
        ['बस बंद पडली — मार्ग लगेच संपला', '<code>break</code>: loop मधून लगेच बाहेर पडा'],
        ['थांबा 5 वर चढलेला प्रवासी उतरेपर्यंत पुढे जात राहतो', '<code>switch</code> जुळणाऱ्या case वर शिरतो आणि <code>break</code> पर्यंत fall through करतो'],
      ],
    },
    concept: [
      `<b>if / else</b> दोन मार्गांपैकी एक निवडतो; कोणतीही शून्येतर किंमत सत्य मानली जाते. Indentation कसंही असलं तरी <code>else</code> नेहमी <b>सर्वांत जवळच्या, जोडी न लागलेल्या</b> <code>if</code> शी जोडला जातो (dangling-else नियम). <code>if (x = 0)</code> हे तुलना नव्हे, assignment आहे: ते x ला 0 करतं आणि condition असत्य ठरते. <b>switch</b> फक्त integer/char किमतींवर चालतो; control जुळणाऱ्या <code>case</code> label वर उडी मारतो आणि <code>break</code> किंवा शेवट येईपर्यंत पुढच्या प्रत्येक case मध्ये <b>fall through</b> करतो. कोणताही case जुळला नाही तर <code>default</code> चालतो, तो कुठेही लिहिलेला असला तरी.`,
      `C मध्ये तीन loops आहेत. <code>for (init; condition; update)</code> आणि <code>while (condition)</code> प्रत्येक फेरीच्या <b>आधी</b> तपासतात, म्हणून ते एकदाही न चालण्याची शक्यता असते. <code>do { … } while (condition);</code> प्रत्येक फेरीच्या <b>नंतर</b> तपासतो, म्हणून तो कमीत कमी एकदा तरी नक्की चालतो. <code>for</code> loop मध्ये <code>continue</code> update भागाकडे (उदा. <code>i++</code>) आणि मग तपासणीकडे उडी मारतो; <code>break</code> फक्त सर्वांत आतल्या loop किंवा switch मधून बाहेर पडतो.`,
      `Output ओळखताना कधीही अंदाज लावू नका: प्रत्येक variable साठी एक स्तंभ आणि प्रत्येक फेरीसाठी एक ओळ असलेली छोटी सारणी काढा, आणि ओळ-ओळ ती भरत जा. Conditions मधल्या post-increment/decrement कडे लक्ष ठेवा: <code>while (n-- &gt; 2)</code> मध्ये n ची जुनी किंमत तुलना केली जाते आणि मग n कमी होतो — शेवटच्या, असत्य ठरलेल्या तपासणीतसुद्धा. <code>for (…);</code> किंवा <code>while (…);</code> नंतर चुकून आलेला semicolon loop ला रिकामा body देतो.`,
    ],
    keyPoints: [
      'शून्येतर = सत्य, 0 = असत्य; <code>if (x = 0)</code> assign करतो आणि नेहमी असत्य असतो',
      'else सर्वांत जवळच्या जोडी न लागलेल्या if शी जोडला जातो',
      'switch: फक्त integer/char; break पर्यंत fall through; case labels constants च असावे लागतात',
      'for/while: आधी तपासणी (0 किंवा जास्त फेऱ्या); do-while: शेवटी तपासणी (कमीत कमी 1 फेरी)',
      'continue → पुढची फेरी (for loop मध्ये आधी update चालतो); break → सर्वांत आतल्या loop/switch मधून बाहेर',
      'i = 1..n आणि j = i..n असलेले nested loops n(n + 1)/2 वेळा चालतात',
      '<code>for (i = 0; i &lt; 5; i++);</code> — semicolon म्हणजे रिकामा body; शेवटी i = 5',
    ],
    example: {
      q: 'हा program काय छापतो?',
      steps: [
        'i = 1: j 1, 2, 3, 4 असा चालतो → 4 वेळा.',
        'i = 2: j 2, 3, 4 असा चालतो → 3 वेळा.',
        'i = 3: j 3, 4 असा चालतो → 2 वेळा. i = 4: j 4 → 1 वेळा.',
        'एकूण = 4 + 3 + 2 + 1 = 10, म्हणजेच n = 4 साठी n(n + 1)/2.',
      ],
      answer: '10',
    },
    shortcut:
      '<code>continue</code>/<code>break</code> असलेल्या loops साठी i च्या किमती एका ओळीत लिहा, continue ने वगळलेल्या आणि break पासून पुढच्या सगळ्या खोडा, आणि उरलेल्यांची बेरीज करा. Switch साठी कोणत्या case मध्ये शिरतो ते शोधा आणि पहिल्या break पर्यंत खाली वाचत जा.',
    traps: [
      '<code>break</code> नसलेला <code>switch</code> जुळलेल्या case च्या खालचे सगळे cases चालवतो — <code>default</code> खाली असेल तर तोही.',
      '<code>while (n-- &gt; 2)</code> मध्ये शेवटच्या, अयशस्वी तपासणीत n आणखी एकदा कमी होतो.',
      '<code>for (i = 0; i &lt; 5; i++);</code> नंतर <code>printf("%d", i);</code> असेल तर 0 ते 4 नव्हे, फक्त एकदा 5 छापलं जातं — semicolon loop तिथेच संपवतो.',
    ],
    practice: [
      { q: 'या program चा output काय आहे?', why: 'Control case 2 वर शिरतो, “two” नंतर break नसल्याने case 3 मध्ये fall through करतो, आणि मग default आधीच्या break वर थांबतो.' },
      { q: 'या program चा output काय आहे?', why: 'तपासण्या: 5 &gt; 2 (n → 4, 4 छापा), 4 &gt; 2 (n → 3, 3 छापा), 3 &gt; 2 (n → 2, 2 छापा), 2 &gt; 2 असत्य, पण तरीही n → 1.' },
      { q: 'या program चा output काय आहे?', why: 'i = 3 आणि 6 वगळले जातात; i = 8 ला loop break होतो. बेरीज = 1 + 2 + 4 + 5 + 7 = 19. (break कडे दुर्लक्ष केलं तर उत्तर 37 येतं.)' },
      { q: 'या program चा output काय आहे?', why: '<code>x = 0</code> x ला 0 देतो; condition ची किंमत 0 (असत्य) आहे, म्हणून else भाग x छापतो, जो आता 0 आहे.' },
    ],
  },

  'c-arrays-pointers-functions': {
    title: 'C मधील Arrays, Strings, Pointers आणि Functions (Recursion, Call by Value/Reference)',
    analogy: {
      title: 'मुंबईच्या चाळीतल्या खोल्या',
      oneLine: 'Array म्हणजे एकसारख्या खोल्यांची रांग; pointer म्हणजे खोली क्रमांक लिहिलेली चिठ्ठी.',
      story: `मुंबईच्या एका जुन्या चाळीत एकाच पॅसेजच्या बाजूने लागोपाठ क्रमांकांच्या खोल्या आहेत — 101, 102, 103 … — सगळ्या सारख्याच आकाराच्या. हाच <b>array</b>: शेजारी-शेजारी एकसारखे खोके, आणि चाळीचं नाव सांगतं की पहिली खोली कुठे आहे. <b>Pointer</b> म्हणजे खोली क्रमांक लिहिलेली एक चिठ्ठी. चिठ्ठी वाचणं म्हणजे खोलीत जाणं नव्हे; तिथे कोण राहतं ते पाहायला तुम्हाला त्या खोलीपर्यंत चालत जावं लागतं — हे <b>dereferencing</b> (<code>*p</code>). 101 च्या “दोन खोल्या पुढे” म्हणजे 103, खोली कितीही मोठी असली तरी — जसं <code>p + 2</code> दोन bytes नव्हे, दोन <i>elements</i> पुढे सरकतो. आता, सोसायटीच्या सेक्रेटरींना तुमचं वीज बिल तपासायचं असेल, तर तुम्ही त्यांना <b>झेरॉक्स</b> देऊ शकता: त्यांनी त्यावर काहीही खरडलं तरी तुमचं मूळ बिल स्वच्छ राहतं — हे <b>call by value</b>. किंवा तुम्ही त्यांना तुमचा <b>खोली क्रमांक</b> देऊ शकता, आणि मग ते आत येऊन तुमची भिंतसुद्धा रंगवू शकतात — हे <b>call by reference</b> (address पाठवणे).`,
      map: [
        ['एका रांगेत सारख्या आकाराच्या खोल्या 101, 102, 103 …', 'सलग मेमरीतले array elements'],
        ['खोली क्रमांक लिहिलेली चिठ्ठी', 'Pointer (address धरून ठेवतो)'],
        ['तिथे कोण राहतं ते पाहायला खोलीपर्यंत जाणे', 'Dereferencing: <code>*p</code>'],
        ['“दोन खोल्या पुढे”', 'Pointer arithmetic: <code>p + 2</code> दोन elements पुढे जातो'],
        ['सेक्रेटरींना झेरॉक्स विरुद्ध तुमचा खोली क्रमांक', 'Call by value विरुद्ध call by reference (<code>&amp;x</code> पाठवणे)'],
      ],
    },
    concept: [
      `<b>Array</b> एकाच type चे elements सलग मेमरीत साठवतो. Indexes 0 पासून सुरू होतात, म्हणून <code>int a[5]</code> मध्ये <code>a[0]</code> ते <code>a[4]</code> असतात, आणि C कोणतीही bounds checking करत नाही. Expression मध्ये array चं नाव पहिल्या element कडे निर्देश करणारा pointer बनतं, आणि <code>a[i]</code> म्हणजे नेमकं <code>*(a + i)</code>; a[i] चा address = base + i × (एका element चा आकार). <b>String</b> म्हणजे null character <code>'\\0'</code> ने संपणारा <code>char</code> array: <code>strlen</code> त्याच्या आधीची अक्षरे मोजतो, तर array वरचा <code>sizeof</code> <code>'\\0'</code> धरून संपूर्ण array मोजतो.`,
      `<b>Pointer</b> मध्ये एक address असतो. <code>&amp;x</code> x चा address देतो; <code>*p</code> p मधल्या address वर साठवलेली किंमत देतो. Pointer मध्ये 1 मिळवला की तो एका element ने पुढे सरकतो (<code>int *</code> साठी 4 bytes, <code>char *</code> साठी 1 byte). C प्रत्येक argument <b>by value</b> पाठवते: function ला एक copy मिळते, म्हणून parameter बदलला तरी बोलावणाऱ्याचा (caller चा) variable बदलत नाही. Function ला variable बदलू द्यायचा असेल तर त्याचा address पाठवा आणि <code>*</code> मार्फत काम करा — C मध्ये <b>call by reference</b> असाच होतो (उदा. <code>swap(&amp;a, &amp;b)</code>, <code>scanf("%d", &amp;n)</code>). Arrays पहिल्या element कडे निर्देश करणाऱ्या pointer च्या रूपात पाठवले जातात, म्हणून function caller चा array बदलू शकतं.`,
      `<b>Recursive</b> function स्वतःलाच call करतं. त्याला calls थांबवणारी <b>base case</b> लागते, आणि प्रत्येक call त्या base case च्या जवळ जायलाच हवा. प्रत्येक call ला stack वर local variables ची स्वतःची copy मिळते; recursive call च्या <i>नंतर</i> लिहिलेली statements calls परत येत असताना, उलट्या क्रमाने चालतात. <code>static</code> local variable एकदाच तयार होतो आणि calls दरम्यान आपली किंमत टिकवून ठेवतो.`,
    ],
    keyPoints: [
      '<code>a[i]</code> ≡ <code>*(a + i)</code> ≡ <code>i[a]</code>; a[i] चा address = base + i × sizeof(element)',
      '2-D array (row-major): a[i][j] चा address = base + (i × columns + j) × size',
      `<code>char s[] = "CET";</code> → sizeof 4 (<code>'\\0'</code> धरून), strlen 3`,
      '<code>&amp;</code> = चा address; <code>*</code> = वरची किंमत; <code>p + 1</code> एक element पुढे',
      'C by value पाठवते; caller चे variables बदलायचे असतील तर addresses (pointers) पाठवा',
      'Arrays pointers म्हणून पाठवले जातात, म्हणून function मध्ये केलेले बदल बाहेरही दिसतात',
      'Recursion: base case + लहान उप-प्रश्न; recursive call नंतरचा code उलट्या क्रमाने चालतो',
      'Static local variable एकदाच initialize होतो आणि calls दरम्यान आपली किंमत टिकवतो',
    ],
    example: {
      q: 'हा program काय छापतो?',
      steps: [
        '<code>swapVal(a, b)</code> ला x = 3, y = 8 अशा copies मिळतात आणि ते फक्त copies ची अदलाबदल करतं. main मधले a आणि b जसेच्या तसे → <code>3 8</code> छापतं.',
        '<code>swapPtr(&amp;a, &amp;b)</code> ला addresses मिळतात. <code>*x</code> म्हणजे स्वतः a आणि <code>*y</code> म्हणजे स्वतः b, म्हणून अदलाबदलीने main चे variables बदलतात → <code>8 3</code> छापतं.',
      ],
      answer: 'पहिल्या ओळीत 3 8, मग 8 3',
    },
    shortcut:
      'Pointer-आणि-array च्या प्रश्नांसाठी array खोक्यांच्या रूपात काढा, खाली indexes लिहा आणि p साठी एक बाण काढा; प्रत्येक <code>*(p + k)</code> किंवा <code>p[k]</code> “बाणाच्या उजवीकडे k खोकी” असं वाचा. Call नंतर छापणाऱ्या recursion मध्ये output calls च्या उलट्या क्रमाने येतो — binary रूपांतरात बाकी खालून वर वाचतो तसा.',
    traps: [
      `<code>char s[] = "CET2026"</code> साठी <code>sizeof(s)</code> 7 नव्हे, 8 आहे — लपलेला <code>'\\0'</code> मोजला जातो. (ज्या function मध्ये s हा pointer parameter आहे, तिथे sizeof त्याऐवजी pointer चा आकार देतो.)`,
      'Function मध्ये parameter बदलल्याने caller चा variable कधीच बदलत नाही — pointer मार्फत (<code>*p = …</code>) लिहिलं तरच बदलतो.',
    ],
    practice: [
      { q: 'या program चा output काय आहे?', why: 'p, a[1] = 20 कडे निर्देश करतो. <code>*(p + 2)</code> म्हणजे a[3] = 40. <code>p[1]</code> म्हणजे <code>*(p + 1)</code> = a[2] = 30.' },
      { q: 'या program चा output काय आहे?', why: `Array मध्ये 7 अक्षरे आणि <code>'\\0'</code> आहे, म्हणून sizeof 8; strlen <code>'\\0'</code> च्या आधी थांबतो आणि 7 देतो.` },
      { q: 'या program चा output काय आहे?', why: 'Calls 13 → 6 → 3 → 1 → 0 असे जातात; छपाई परत येताना होते: 1 % 2, 3 % 2, 6 % 2, 13 % 2 = 1, 1, 0, 1. हेच 13 चे binary रूप.' },
      { q: 'या program चा output काय आहे?', why: 'a by value पाठवला आहे, म्हणून फक्त copy x दुप्पट होते. b चा address पाठवला आहे, म्हणून <code>*y = *y * 2</code> स्वतः b ला दुप्पट करतो.' },
    ],
  },

  // ───────────────────────────── Operating System ─────────────────────────────
  'os-basics': {
    title: 'कार्यप्रणालीची मूलतत्त्वे: Processes, CPU Scheduling, Paging, Deadlock, File Systems',
    analogy: {
      title: 'कॉलेजजवळचं एका मशीनचं झेरॉक्स दुकान',
      oneLine: 'एक झेरॉक्स मशीन, अनेक विद्यार्थी: पुढे कोणाचं काम करायचं, हेच CPU scheduling.',
      story: `प्रत्येक कॉलेजजवळ एक झेरॉक्स दुकान असतं — एकच मशीन आणि विद्यार्थ्यांची गर्दी. दुकानदार म्हणजे <b>scheduler</b> आणि मशीन म्हणजे <b>CPU</b>. तो काटेकोरपणे “जो आधी आला तो आधी” असं काम करत असेल, तर पुढे उभा असलेला 200 पानांचा प्रबंध घेऊन आलेला एक विद्यार्थी, प्रत्येकी 2 पानं असलेल्या दहा जणांना खूप वेळ थांबवून ठेवतो (<b>FCFS</b> आणि त्याचा convoy effect). ज्याची पानं सर्वांत कमी त्याचं काम तो आधी करत असेल, तर <i>सरासरी</i> थांबण्याचा वेळ शक्य तितका कमी होतो (<b>SJF</b>) — पण छोटी कामं येतच राहिली तर प्रबंधवाला विद्यार्थी कायमचा थांबूनच राहू शकतो (<b>starvation</b>). तो प्रत्येकाची आळीपाळीने 10 पानं काढत असेल आणि अपूर्ण काम रांगेच्या शेवटी पाठवत असेल, तर प्रत्येकाचं काम पुढे सरकताना दिसतं (<b>Round Robin</b>, time quantum = 10 पानं). आणि दोन विद्यार्थ्यांकडे प्रत्येकी एक पुस्तक आहे, आणि दुसऱ्याचं पुस्तक मिळेपर्यंत दोघंही आपलं सोडायला तयार नाहीत, तर दोघंही कायमचे थांबून राहतात — हे <b>deadlock</b>.`,
      map: [
        ['एक झेरॉक्स मशीन, अनेक विद्यार्थी', 'एक CPU, ready queue मध्ये अनेक processes'],
        ['काढायच्या पानांची संख्या', 'CPU burst time'],
        ['काम न होता नुसता उभं राहण्यात गेलेला वेळ', 'Waiting time = turnaround − burst'],
        ['प्रत्येकी 10 पानं, मग रांगेच्या शेवटी', 'Time quantum असलेला Round Robin'],
        ['दुसऱ्याला हवं असलेलं पुस्तक धरून बसलेले दोन विद्यार्थी', 'Deadlock: hold-and-wait + circular wait'],
      ],
    },
    concept: [
      `<b>कार्यप्रणाली</b> (Operating System) hardware चं व्यवस्थापन करते आणि programs ना सेवा देते: process management, memory management, file management, device (I/O) management, सुरक्षा, आणि user interface (shell किंवा GUI). <b>Kernel</b> हा तिचा गाभा आहे, आणि programs <b>system calls</b> मार्फत त्याच्याकडे सेवा मागतात. प्रकार: batch, multiprogramming, time-sharing (multitasking), real-time आणि distributed. <b>Process</b> म्हणजे चालू असलेला program, ज्याचं वर्णन त्याच्या <b>PCB</b> (Process Control Block) मध्ये असतं. तो <b>new → ready → running → waiting (blocked) → ready … → terminated</b> या अवस्थांमधून जातो; CPU एका process कडून दुसऱ्याकडे वळवणे म्हणजे <b>context switch</b>.`,
      `<b>CPU scheduling</b> पुढचा ready process निवडतं. <b>FCFS</b>: येण्याच्या क्रमाने, non-preemptive, convoy effect चा त्रास. <b>SJF</b>: सर्वांत लहान burst आधी; किमान सरासरी waiting time देतं; त्याचं preemptive रूप म्हणजे <b>SRTF</b>; लांब कामं starve होऊ शकतात. <b>Priority</b>: सर्वोच्च priority आधी; starvation वर उपाय म्हणजे <b>aging</b>. <b>Round Robin</b>: प्रत्येक process ला ठरलेला <b>time quantum</b> मिळतो, मग तो रांगेच्या शेवटी जातो; time-sharing साठी बनवलेलं. प्रत्येक process साठी <b>turnaround time = completion − arrival</b> आणि <b>waiting time = turnaround − burst</b>.`,
      `<b>Paging</b> मध्ये process ठरलेल्या आकाराच्या <b>pages</b> मध्ये आणि मेमरी तितक्याच आकाराच्या <b>frames</b> मध्ये विभागली जाते; page table pages ना frames शी जोडते. त्याने external fragmentation नाहीसं होतं (शेवटच्या page मध्ये थोडं internal fragmentation उरतं). Logical address = page number + offset, आणि pages ची संख्या = 2<sup>address bits</sup> ÷ page size. <b>Virtual memory</b> फक्त गरजेच्या pages RAM मध्ये ठेवते; नसलेलं page मागितलं की <b>page fault</b> होतो; सतत faults होत राहणं म्हणजे <b>thrashing</b>; replacement policies म्हणजे FIFO (Belady’s anomaly दाखवू शकतो), LRU आणि Optimal. <b>Deadlock</b> साठी चारही अटी एकत्र लागतात — <b>mutual exclusion, hold and wait, no preemption, circular wait</b>; Banker’s algorithm तो टाळतो. <b>File systems</b> files directories मध्ये मांडतात (single-level, two-level, tree) आणि disk blocks सलग, linked list च्या रूपात, किंवा index block मार्फत देतात (FAT, NTFS, ext4).`,
    ],
    keyPoints: [
      'TAT = completion time − arrival time; WT = TAT − burst time',
      'FCFS: non-preemptive, convoy effect; SJF: किमान सरासरी WT, लांब कामं starve होऊ शकतात',
      'SRTF = preemptive SJF; priority scheduling मधील starvation aging ने दूर होते',
      'Round Robin: time quantum सह preemptive; quantum खूप मोठा ठेवला तर तो FCFS सारखा वागतो',
      'Process अवस्था: new, ready, running, waiting, terminated; PCB मध्ये प्रत्येक process चा तपशील असतो',
      'Paging: page size = frame size; page-table entries = 2<sup>logical address bits</sup> ÷ page size',
      'Deadlock च्या अटी: mutual exclusion, hold and wait, no preemption, circular wait (चारही लागतात)',
      'FIFO page replacement Belady’s anomaly दाखवू शकतो (frames जास्त, तरीही faults जास्त)',
    ],
    example: {
      q: 'चार processes वेळ 0 ला येतात, त्यांचे burst times P1 = 8, P2 = 4, P3 = 2, P4 = 6 (ms). FCFS आणि SJF खाली सरासरी waiting time काढा.',
      steps: [
        'FCFS क्रम P1, P2, P3, P4. Gantt chart: P1 0–8, P2 8–12, P3 12–14, P4 14–20.',
        'सगळे 0 ला येतात, म्हणून waiting time = सुरुवातीची वेळ: 0, 8, 12, 14 → सरासरी = 34 ÷ 4 = 8.5 ms.',
        'Burst नुसार SJF क्रम: P3 (2), P2 (4), P4 (6), P1 (8). Gantt chart: P3 0–2, P2 2–6, P4 6–12, P1 12–20.',
        'SJF waiting times: P1 = 12, P2 = 2, P3 = 0, P4 = 6 → सरासरी = 20 ÷ 4 = 5 ms.',
      ],
      answer: 'FCFS 8.5 ms; SJF 5 ms',
    },
    shortcut:
      'सगळे processes वेळ 0 ला येत असतील आणि policy non-preemptive असेल, तर प्रत्येकाचा waiting time म्हणजे Gantt chart मधली त्याची सुरुवातीची वेळ: सुरुवातीच्या वेळांची बेरीज करा आणि भागा. येण्याच्या वेळा वेगवेगळ्या असतील तर प्रत्येकाच्या सुरुवातीच्या वेळेतून त्याची येण्याची वेळ वजा करा.',
    traps: [
      'येण्याच्या वेळा वेगवेगळ्या असतील किंवा preemption असेल (Round Robin, SRTF), तर waiting time म्हणजे फक्त सुरुवातीची वेळ नाही; WT = completion − arrival − burst वापरा.',
      'येण्याच्या वेळा असलेल्या non-preemptive SJF मध्ये फक्त <b>आधीच आलेले</b> processes निवडता येतात.',
      'Deadlock साठी <b>चारही</b> अटी लागतात. “Preemption” ही त्यांपैकी अट नाही — “no preemption” आहे.',
    ],
    practice: [
      { q: 'तीन processes वेळ 0 ला P1, P2, P3 या क्रमाने येतात, त्यांचे burst times 5, 3 आणि 1 ms. 2 ms time quantum असलेला Round Robin वापरला तर सरासरी waiting time किती?', why: 'Gantt: P1 0–2, P2 2–4, P3 4–5, P1 5–7, P2 7–8, P1 8–9. WT = completion − burst: P1 = 9 − 5 = 4, P2 = 8 − 3 = 5, P3 = 5 − 1 = 4. सरासरी = 13 ÷ 3 ≈ 4.33 ms.' },
      { q: '(arrival, burst) वेळा P1 (0, 7), P2 (2, 4), P3 (4, 1), P4 (5, 4) असलेले processes non-preemptive SJF ने schedule केले आहेत. सरासरी waiting time किती?', why: '0 ला फक्त P1 हजर आहे, म्हणून P1 0–7. मग सर्वांत लहान आधी: P3 7–8, P2 8–12, P4 12–16. WT: P1 0, P2 8 − 2 = 6, P3 7 − 4 = 3, P4 12 − 5 = 7. सरासरी = 16 ÷ 4 = 4 ms. (4.75 ms हे FCFS चं उत्तर आहे.)' },
      { q: 'खालीलपैकी कोणती deadlock साठीच्या चार आवश्यक अटींपैकी एक नाही?', why: 'अट आहे <i>no</i> preemption. Resources काढून घेता येत असतील तर deadlock तयारच होऊ शकत नाही.' },
      { q: 'एक system 32-bit logical addresses आणि 4 KB page size वापरते. Single-level page table मध्ये किती entries असतात?', why: '4 KB = 2<sup>12</sup> bytes, म्हणून 12 bits offset साठी. Pages = 2<sup>32</sup> ÷ 2<sup>12</sup> = 2<sup>20</sup> (सुमारे 10 लाख entries).' },
    ],
  },

  // ───────────────────────────── Computer Awareness ─────────────────────────────
  'computer-awareness': {
    title: 'संगणक जागरूकता: Internet, Email, Web आणि Software',
    analogy: {
      title: 'पुण्यातून गावी लग्नपत्रिका पोस्टाने पाठवणे',
      oneLine: 'रस्ते म्हणजे internet, पत्र म्हणजे email, नाव@गाव म्हणजे username@domain, आणि पोस्टमन म्हणजे DNS.',
      story: `चुलत भावाचं लग्न ठरलं आहे आणि तुम्ही पुण्यातून गावच्या नातेवाइकांना पत्रिका पोस्टाने पाठवत आहात. प्रत्येक गाव-शहर जोडणारे <b>रस्ते, रेल्वे आणि ट्रक</b> म्हणजे <b>internet</b>: एकच भौतिक जाळं, जे पत्रं, पार्सलं, प्रवासी आणि दूध सगळं वाहून नेतं. त्यावरून जाणारी <b>पत्रं</b> म्हणजे <b>email</b>; त्या रस्त्यांवरची, तुम्ही भेट देऊ शकता अशी <b>दुकानं आणि कार्यालयं</b> म्हणजे <b>World Wide Web</b> — रस्त्यांच्या अनेक उपयोगांपैकी फक्त एक. पाकिटावर तुम्ही लिहिता <code>Sunil Patil, Mhaswad</code>: <i>व्यक्ती</i> आणि <i>ठिकाण</i>, अगदी email address मधल्या <b>username@domain</b> सारखं. तुमचं पत्र स्वीकारून पुढे पाठवणारं पुण्याचं पोस्ट ऑफिस म्हणजे <b>पाठवणारा mail server (SMTP)</b>; सुनील येऊन घेईपर्यंत पत्र सांभाळणारं म्हसवडचं पोस्ट ऑफिस म्हणजे <b>घेणारा server (POP/IMAP)</b>. “सुनील पाटील” म्हणजे घर नंबर 42 हे ओळखणारा गावचा <b>पोस्टमन</b> म्हणजे <b>DNS</b> — नावाचं रूपांतर नंबरात (IP address) करणारा. तुम्ही संपूर्ण कुटुंबासाठी जास्तीच्या प्रती छापता (<b>CC</b>), पाकिटात एक फोटो सरकवता (<b>attachment</b>), मित्राला उघडं पोस्टकार्ड पाठवता (<b>HTTP</b>) पण बँकेला सीलबंद रजिस्टर्ड पाकीट (<b>HTTPS</b>). पत्रिका प्रमाण देवनागरीत छापलेली असते, म्हणून कोणत्याही गावातला कोणताही नातेवाईक ती वाचू शकतो — प्रमाण <b>HTML</b> मध्ये लिहिलेलं page कोणत्याही browser मध्ये उघडतं, तसंच.`,
      map: [
        ['प्रत्येक गाव-शहर जोडणारे रस्ते आणि रेल्वे', 'Internet: जाळ्यांचं भौतिक जाळं (network of networks)'],
        ['रस्त्यांवरची, तुम्ही भेट देऊ शकता अशी दुकानं आणि कार्यालयं', 'World Wide Web: web pages — internet वरची एक सेवा'],
        ['पाकिटावरचं <code>Sunil Patil, Mhaswad</code>', 'Email address <code>username@domain</code>; दोन्ही बाजूंची पोस्ट ऑफिसं म्हणजे mail servers (SMTP / POP, IMAP)'],
        ['“सुनील पाटील” म्हणजे कोणतं घर हे ओळखणारा पोस्टमन', 'DNS: domain name → IP address'],
        ['उघडं पोस्टकार्ड विरुद्ध सीलबंद रजिस्टर्ड पाकीट', 'HTTP विरुद्ध HTTPS (SSL/TLS ने encrypted)'],
      ],
    },
    concept: [
      `<b>Internet</b> म्हणजे <b>TCP/IP</b> protocols वापरून संगणक जोडणारं, जगभर पसरलेलं जाळ्यांचं जाळं (network of networks); त्याची सुरुवात <b>ARPANET</b> (1969) पासून झाली. <b>World Wide Web (WWW)</b> ही त्यावर चालणारी फक्त एक सेवा आहे — एकमेकांना जोडलेल्या pages चा (<b>hypertext</b>) संग्रह, जो <b>Tim Berners-Lee</b> यांनी CERN मध्ये 1989 साली शोधला; email, file transfer (FTP) आणि video calls या इतर सेवा. Web page त्याच्या <b>URL</b> (Uniform Resource Locator) ने सापडतं, उदा. <code>https://www.mahacet.org/exams/mca.html</code>: <b>protocol</b> (<code>https</code>), <b>domain name</b> (<code>www.mahacet.org</code>, ज्याचा शेवटचा भाग <code>.org</code> हा <b>top-level domain</b>, जसे <code>.com</code>, <code>.in</code>, <code>.edu</code>, <code>.gov</code>), आणि <b>path व file name</b> (<code>/exams/mca.html</code>). <b>HTTP</b> (HyperText Transfer Protocol, port 80) web server आणि तुमच्या <b>browser</b> (Chrome, Firefox, Edge, Safari) दरम्यान pages वाहून नेतो; <b>HTTPS</b> त्यात SSL/TLS encryption जोडतो (port 443) आणि कुलपाचं चिन्ह दाखवतो. Pages <b>HTML</b> (HyperText Markup Language) मध्ये लिहिली जातात: <code>&lt;p&gt;</code> आणि <code>&lt;a href="…"&gt;</code> अशा tags ची <i>markup</i> भाषा, जी रचना आणि links सांगते — ही programming भाषा नाही. HTML हे प्रत्येक operating system वरचा प्रत्येक browser समजणारं खुलं प्रमाण (open standard) असल्याने, तेच document कुठेही दाखवता येतं — हाच त्याचा मुख्य फायदा. <b>Email</b> (electronic mail) <b>username@domain</b> या रूपाच्या पत्त्यावर संदेश पोहोचवतं, उदा. <code>sunil.patil@gmail.com</code>: <code>@</code> च्या आधी <b>user name</b> (mailbox) आणि नंतर mail पुरवठादाराचं <b>domain name</b>. <b>SMTP</b> (Simple Mail Transfer Protocol) mail पाठवतो; <b>POP3</b> (Post Office Protocol) ती एका device वर download करतो; <b>IMAP</b> (Internet Message Access Protocol) ती server वरच ठेवतो, म्हणून फोन आणि laptop दोन्हीकडे तेच दिसतं. <b>CC</b> (carbon copy) मधले लोक सगळ्यांना दिसतात; <b>BCC</b> (blind carbon copy) मधले लपलेले असतात; संदेशासोबत पाठवलेली file म्हणजे <b>attachment</b>; नको असलेली ढीगभर mail म्हणजे <b>spam</b>.`,
      `<b>Software</b> चे तीन प्रकार. <b>System software</b> यंत्र स्वतः चालवतं: operating system (Windows, Linux, macOS, Android), device drivers आणि भाषा-रूपांतरक (compiler, interpreter, assembler). <b>Application software</b> वापरकर्त्याचं काम करतं: word processor (MS Word), spreadsheet (Excel), presentation (PowerPoint), browser, WhatsApp, Tally. <b>Utility software</b> system ची देखभाल करतं: antivirus, disk clean-up, file compression (WinRAR, 7-Zip), backup साधनं. ROM मध्ये (BIOS) कायमचं लिहिलेलं software म्हणजे <b>firmware</b>; <b>open-source</b> software (Linux, Firefox) आपला source code सोबत देतं, <b>proprietary</b> software (Windows, MS Office) देत नाही. File चा <b>extension</b> तिचा प्रकार सांगतो: <code>.docx</code> Word, <code>.xlsx</code> Excel, <code>.pptx</code> PowerPoint, <code>.pdf</code> portable document, <code>.txt</code> साधा मजकूर, <code>.jpg</code>/<code>.png</code>/<code>.gif</code> चित्रं, <code>.mp3</code> ध्वनी, <code>.mp4</code> video, <code>.zip</code> compressed archive, <code>.exe</code> Windows program, <code>.apk</code> Android app, <code>.html</code> web page, <code>.c</code> C source. <b>Networks</b> ची नावं आकारावरून: <b>PAN</b> (personal, Bluetooth), <b>LAN</b> (Local Area Network — एक इमारत किंवा campus, जसं कॉलेजची lab), <b>MAN</b> (एक शहर) आणि <b>WAN</b> (Wide Area Network — शहरं आणि देश ओलांडून; internet हे सर्वांत मोठं WAN). Network वरच्या प्रत्येक device ला <b>IP address</b> असतो: IPv4 32 bits चा, ठिपक्यांनी वेगळे केलेले 0 ते 255 मधले चार आकडे (<code>192.168.1.1</code>); IPv6 128 bits चा. <b>DNS</b> (Domain Name System) <code>www.google.com</code> अशा नावांचं रूपांतर IP addresses मध्ये करतं — internet ची फोन-डिरेक्टरी. <b>Modem</b> (modulator–demodulator) संगणकाचे digital signals टेलिफोन किंवा cable line च्या analog signals मध्ये आणि उलट रूपांतरित करतो; <b>router</b> data packets एका network मधून दुसऱ्यात पुढे पाठवतो आणि एक connection अनेक devices मध्ये वाटतो; <b>switch</b> किंवा <b>hub</b> LAN च्या आतले devices जोडतो; <b>Wi-Fi</b> (IEEE 802.11) म्हणजे wireless LAN; <b>ISP</b> (Internet Service Provider — Jio, Airtel, BSNL) तुम्हाला internet ला जोडतो. <b>Bandwidth</b> म्हणजे एक link जास्तीत जास्त किती वेगाने data वाहून नेऊ शकते, ते bits per second मध्ये मोजतात (kbps, Mbps, Gbps).`,
      `<b>सुरक्षा</b> (security): कोणताही हानिकारक program म्हणजे <b>malware</b>. <b>Virus</b> एखाद्या file ला चिकटतो आणि ती file चालवली की पसरतो; <b>worm</b> network वरून स्वतःहून स्वतःच्या प्रती करतो; <b>Trojan horse</b> उपयोगी दिसणाऱ्या software मध्ये लपतो; <b>spyware</b> माहिती चोरतं आणि <b>ransomware</b> पैशांसाठी तुमच्या files कुलूपबंद करतं. <b>Antivirus</b> software (पुण्याचं Quick Heal, Norton, McAfee, Kaspersky) malware शोधून काढून टाकतं, आणि ते नियमित update करावं लागतं. <b>Firewall</b> (hardware किंवा software) विश्वासू network आणि internet मधली वाहतूक नियमांनुसार गाळतं. <b>Phishing</b> म्हणजे बँक किंवा ओळखीच्या कंपनीचं सोंग घेणारी बनावट email, SMS किंवा website, जी passwords, OTP आणि card नंबर “गळाला लावायला” (fish) बघते; बँक हे कधीच मागत नाही. <b>Strong password</b> लांब असतो (कमीत कमी 8–12 अक्षरं), त्यात मोठी व लहान अक्षरं, आकडे आणि चिन्हं मिसळलेली असतात, तो नाव किंवा जन्मतारीख नसतो, आणि त्याला <b>two-factor authentication</b> (OTP) ची जोड असते. <b>Encryption</b> data अशी गुंतागुंतीची करतं की फक्त key असलेल्यालाच ती वाचता येते. आकार आणि क्षमतेनुसार <b>संगणकाचे प्रकार</b>, सर्वांत लहान आधी: <b>microcomputer</b> (एक microprocessor — desktop, laptop/notebook, tablet, smartphone), <b>minicomputer</b> (मध्यम आकार, एका विभागातले अनेक वापरकर्ते), <b>mainframe</b> (एकाच वेळी हजारो वापरकर्ते — बँका, रेल्वे आरक्षण) आणि <b>supercomputer</b> (सर्वांत वेगवान, वेग FLOPS मध्ये — हवामान अंदाज, संशोधन; भारताचा PARAM 8000 C-DAC पुणे यांनी 1991 मध्ये बनवला). वापरलेल्या signals नुसार संगणक analog, digital किंवा hybrid असतात. <b>पिढ्या</b> (generations) त्यांच्या switching तंत्रज्ञानावरून ओळखल्या जातात: <b>पहिली</b> (सुमारे 1940–56) vacuum tubes, machine language, punched cards (ENIAC, UNIVAC); <b>दुसरी</b> (1956–63) transistors, assembly language आणि सुरुवातीच्या high-level भाषा (FORTRAN, COBOL); <b>तिसरी</b> (1964–71) integrated circuits, keyboards, monitors आणि operating systems (IBM 360); <b>चौथी</b> (1971 पासून) VLSI असलेले microprocessors (Intel 4004), personal computers, GUI आणि networks; <b>पाचवी</b> (आज आणि पुढे) ULSI, parallel processing आणि कृत्रिम बुद्धिमत्ता (artificial intelligence).`,
    ],
    keyPoints: [
      'Internet = जाळ्यांचं जाळं (TCP/IP); WWW = त्यावरची web pages, Tim Berners-Lee (1989) यांचा शोध; email आणि FTP या internet च्या इतर सेवा',
      'URL = protocol://domain/path, उदा. <code>https://www.mahacet.org/exams/mca.html</code>; HTTP port 80, HTTPS = HTTP + SSL/TLS, port 443',
      'HTML ही tags ची markup भाषा आहे, programming भाषा नाही; कोणत्याही OS वरचा कोणताही browser HTML page दाखवू शकतो',
      'Email address = user name @ domain name; SMTP पाठवतो, POP3 एका device वर download करतो, IMAP mail server वर ठेवतो; CC दिसतं, BCC लपलेलं',
      'Software: system (OS, drivers, translators) · application (Word, Excel, browser) · utility (antivirus, compression, backup); firmware ROM मध्ये असतं',
      'PAN &lt; LAN &lt; MAN &lt; WAN; IPv4 = 32 bits (0–255 मधले चार आकडे), IPv6 = 128 bits; DNS: नाव → IP; modem: digital ↔ analog; router: networks जोडतो',
      'Virus ला host file लागते, worm स्वतःहून पसरतो, Trojan उपयोगी दिसणाऱ्या software मध्ये लपतो; firewall वाहतूक गाळतं; phishing = passwords/OTP साठी गळ टाकणारा बनावट संदेश',
      'आकाराचा क्रम micro &lt; mini &lt; mainframe &lt; super; पिढ्या: vacuum tube → transistor → IC → microprocessor (VLSI) → AI (ULSI)',
    ],
    example: {
      q: 'URL <code>https://www.mahacet.org/exams/mca.html</code> आणि email address <code>sunil.patil@gmail.com</code> यांचे भाग वेगळे करा, आणि सुनीलच्या laptop ने पाठवलेली mail नंतर त्याचा फोन वाचतो तेव्हा प्रत्येक पायरीला कोणता protocol वापरला जातो ते सांगा.',
      steps: [
        'URL: <code>https</code> हा protocol (secure HTTP, port 443); <code>www.mahacet.org</code> हे domain name — <code>www</code> host/sub-domain, <code>mahacet</code> संस्था, <code>.org</code> top-level domain; <code>/exams/mca.html</code> हा <code>mca.html</code> या file चा path, आणि ती एक HTML page आहे.',
        'Browser DNS ला <code>www.mahacet.org</code> चा IP address विचारतो, त्या server ला जोडतो, HTTPS वरून <code>mca.html</code> आणतो आणि HTML tags चं page मध्ये रूपांतर करून दाखवतो.',
        'Email: <code>sunil.patil</code> हे user name (mailbox) आणि <code>gmail.com</code> हे mail पुरवठादाराचं domain name; <code>@</code> (“at”) त्यांना वेगळं करतो.',
        'पाठवणे: laptop वरचा mail program संदेश SMTP ने Gmail च्या server कडे देतो, आणि SMTP च तो पुढे घेणाऱ्याच्या server पर्यंत नेतो. वाचणे: फोन ती IMAP ने आणतो (mail server वरच राहते, म्हणून दोन्ही devices वर दिसते) — किंवा POP3 ने, ज्याने ती फक्त एका device वर download झाली असती.',
      ],
      answer: 'URL = protocol + domain (host · संस्था · TLD) + path/file; email = user name @ domain name; पाठवायला SMTP, घ्यायला IMAP किंवा POP3.',
    },
    shortcut:
      'URL डावीकडून उजवीकडे वाचा — <i>कसं</i> (protocol) → <i>कुठे</i> (domain; त्याचा शेवटचा तुकडा top-level domain) → <i>काय</i> (path/file). Email address <code>@</code> च्या दोन्ही बाजूंनी वाचा: डावीकडे व्यक्ती, उजवीकडे पोस्ट ऑफिस (domain). “कोणता protocol” प्रश्नांसाठी: SMTP मधला S = Send (पाठवणे); POP आणि IMAP = Pick up (घेणे); HTTP = pages; FTP = files.',
    traps: [
      'Internet आणि World Wide Web एकच नाहीत: internet म्हणजे जाळं; web ही त्यावरची एक सेवा (email ही दुसरी). “Internet चा शोध कोणी लावला?” याचं उत्तर Tim Berners-Lee नाही — त्यांनी web शोधलं.',
      'HTML ही programming भाषा नाही आणि browser ती “चालवत” नाही; ती मजकुराला tags लावते, जो कोणताही browser दाखवू शकतो. तसंच HTTP हा protocol आहे, भाषा नाही.',
      'Notebook/laptop हा microcomputer चाच एक प्रकार आहे, वेगळा वर्ग नाही; म्हणून micro-, mini- आणि supercomputer सोबतच्या odd-one-out मध्ये तोच वेगळा ठरतो. आणि modem ≠ router: modem ISP च्या line शी बोलतो, router connection वाटतो — घरातला “Wi-Fi box” दोन्ही एकत्र करतो, इतकंच.',
    ],
    practice: [
      { q: '<code>sunil.patil@rediffmail.com</code> असा email address <code>@</code> चिन्हाने वेगळे केलेल्या कोणत्या दोन भागांचा बनलेला असतो?', why: '@ च्या आधीचा भाग user name (mailbox) आणि नंतरचा भाग mail पुरवठादाराचं domain name. Address मध्ये password किंवा IP address कुठेच नसतो.' },
      { q: 'खालीलपैकी कोणता web page HTML मध्ये लिहिण्याचा फायदा आहे?', why: 'HTML हे प्रत्येक browser समजणारं खुलं प्रमाण आहे, म्हणून एकच document सगळीकडे दिसतं. HTML मध्ये आकडेमोडीचं logic नसतं, आणि encryption HTTPS मधून येतं, HTML मधून नाही.' },
      { q: 'वेगळा पर्याय ओळखा.', why: 'Micro-, mini- आणि supercomputer हे आकार व क्षमतेनुसार संगणकांचे वर्ग आहेत. Notebook हा microcomputer चा फक्त एक प्रकार आहे, स्वतंत्र वर्ग नाही.' },
      { q: 'पाठवणाऱ्याच्या mail program पासून mail server कडे email <i>पाठवायला</i> कोणता protocol वापरला जातो?', why: 'SMTP (Simple Mail Transfer Protocol) mail पाठवतो; POP3 आणि IMAP ती घेण्यासाठी/वाचण्यासाठी; HTTP web pages वाहून नेतो.' },
    ],
  },
};

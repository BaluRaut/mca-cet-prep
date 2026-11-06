export default [
  // ───────────────────────────── Computer Basics ─────────────────────────────
  {
    id: 'cpu-organization',
    title: 'Computer Organization and the CPU',
    syllabus: 'Computer Basics',
    analogy: {
      title: 'A kirana shopkeeper billing a grocery chit',
      oneLine: 'Finger on the next line (PC), read it (fetch), understand it (decode), weigh and add (execute), repeat.',
      story: `Ramesh runs a kirana shop in a Kolhapur galli. A customer hands him a chit: "1 kg sugar, 2 packets Parle-G, 500 g toor dal". Ramesh keeps his finger on the line he must do next. He reads that line (<b>fetch</b>), understands what it means — which shelf, how much (<b>decode</b>) — then weighs the item and adds its price to the running total on his small slate (<b>execute</b>). His finger moves to the next line and the cycle repeats until the chit ends. The chit is the program sitting in memory; his finger is the <b>Program Counter</b>; his brain, which understands each line and tells his hands what to do, is the <b>Control Unit</b>; the calculator is the <b>ALU</b>; and the slate holding the running total is a <b>register</b> (the accumulator). Notice that his brain never weighs or adds anything itself — it only directs. That is exactly the Control Unit.`,
      map: [
        ['The customer’s chit (items in order)', 'Program stored in main memory'],
        ['Finger on the line to be done next', 'Program Counter (PC)'],
        ['The line he is reading right now', 'Instruction Register (IR)'],
        ['His brain: understands the line, directs his hands', 'Control Unit — decodes and sends control signals'],
        ['Calculator + slate with the running total', 'ALU + accumulator register'],
      ],
    },
    concept: [
      `Almost every computer follows the <b>von Neumann (stored-program) model</b>: the program and its data sit together in main memory, and the CPU fetches instructions one at a time. The machine has five functional units — <b>input, memory, ALU, control unit, output</b>. The <b>CPU</b> is the ALU + control unit + registers, on one chip.`,
      `The <b>ALU</b> (Arithmetic Logic Unit) does arithmetic (+, −) and logic (AND, OR, NOT, compare). The <b>Control Unit</b> processes no data at all: it decodes each instruction and sends <i>control signals</i> (memory read, memory write, which ALU operation) to every other unit, in step with the clock. <b>Registers</b> are tiny, fastest storage inside the CPU: PC, IR, MAR, MDR (also called MBR), the accumulator and the flag (status) register.`,
      `The CPU repeats the <b>instruction cycle</b> forever: <b>fetch</b> (MAR ← PC; MDR ← M[MAR]; IR ← MDR; PC ← PC + 1), <b>decode</b> (the CU reads the opcode), <b>execute</b> (ALU, memory or I/O action; flags updated). Then it checks for interrupts and starts again. Speed is set by the clock: a 2 GHz clock gives 2 × 10⁹ cycles per second, so one cycle lasts 0.5 ns.`,
    ],
    keyPoints: [
      'CPU = ALU + Control Unit + registers; the CU directs, the ALU computes',
      'PC: address of the <b>next</b> instruction; IR: the instruction being executed <b>now</b>',
      'MAR: address sent to memory; MDR/MBR: data coming from or going to memory',
      'Accumulator holds ALU results; flag register holds Zero, Sign, Carry, Overflow bits',
      'Fetch: MAR ← PC → MDR ← M[MAR] → IR ← MDR, PC ← PC + 1',
      'Clock period = 1 ÷ frequency; instruction time = cycles × period',
      'Von Neumann: one memory for program and data (the “von Neumann bottleneck”); Harvard: separate instruction and data memories',
      'Control unit design: hardwired (fast, fixed logic) or microprogrammed (control memory, easy to change)',
    ],
    example: {
      q: 'Memory holds a program at addresses 100–102: <code>LOAD 500</code>, <code>ADD 501</code>, <code>STORE 502</code>. M[500] = 7 and M[501] = 5. The PC starts at 100. Trace the registers. What are M[502] and the PC at the end?',
      steps: [
        'Fetch 1: MAR ← 100, IR ← <code>LOAD 500</code>, PC ← 101. Execute: AC ← M[500] = 7.',
        'Fetch 2: MAR ← 101, IR ← <code>ADD 501</code>, PC ← 102. Execute: the ALU adds, AC ← 7 + M[501] = 12.',
        'Fetch 3: MAR ← 102, IR ← <code>STORE 502</code>, PC ← 103. Execute: M[502] ← AC = 12.',
        'The PC is incremented during every fetch, so after three instructions it points to 103.',
      ],
      answer: 'M[502] = 12, PC = 103',
    },
    shortcut:
      'For “which register” questions ask: is it an <i>address</i> or a <i>content</i>? Addresses live in the PC and MAR; contents live in the IR, MDR and accumulator. For clock questions, period in ns = 1 ÷ (GHz value): 2.5 GHz → 0.4 ns.',
    traps: [
      'The PC holds the address of the <b>next</b> instruction, not the current one (it is incremented during fetch).',
      'The Control Unit does no calculation; even a comparison such as a &lt; b is done by the ALU.',
    ],
    practice: [
      {
        q: 'Which register holds the address of the next instruction to be fetched?',
        options: ['Instruction Register (IR)', 'Program Counter (PC)', 'Memory Data Register (MDR)', 'Accumulator'],
        answer: 1,
        why: 'The PC always points to the next instruction; the IR holds the one being executed.',
      },
      {
        q: 'Which sequence correctly describes the fetch phase of the instruction cycle?',
        options: [
          'IR ← PC; MDR ← M[IR]; PC ← PC + 1',
          'MDR ← PC; MAR ← M[MDR]; IR ← MAR',
          'PC ← PC + 1; IR ← M[PC]; MAR ← IR',
          'MAR ← PC; MDR ← M[MAR]; IR ← MDR and PC ← PC + 1',
        ],
        answer: 3,
        why: 'The address goes PC → MAR, memory returns the word into MDR, it is copied into IR, and the PC is incremented.',
      },
      {
        q: 'Which unit of the CPU interprets instructions and generates timing and control signals, but does not itself process data?',
        options: ['Control Unit', 'Arithmetic Logic Unit', 'Accumulator', 'Cache memory'],
        answer: 0,
        why: 'The CU decodes and directs; all data processing is done by the ALU.',
      },
      {
        q: 'A processor runs at 2.5 GHz. An instruction needs 5 clock cycles. How long does the instruction take?',
        options: ['12.5 ns', '0.5 ns', '2 ns', '0.4 ns'],
        answer: 2,
        why: 'Clock period = 1 ÷ 2.5 GHz = 0.4 ns. Time = 5 × 0.4 ns = 2 ns.',
      },
    ],
  },

  {
    id: 'instructions-addressing',
    title: 'Instruction Structure and Addressing Modes',
    syllabus: 'Computer Basics',
    analogy: {
      title: 'The Mumbai dabbawala’s lid code',
      oneLine: 'The job is fixed (opcode); the lid code says how to find the place (addressing mode).',
      story: `Mumbai’s dabbawalas deliver lakhs of tiffins every day with very few mistakes, using a short code painted on each lid. Think of each tiffin as an <b>instruction</b>: the job is fixed — “deliver this” (the <i>opcode</i>) — and the painted code says <i>where</i> (the <i>address field</i>). Sometimes what you need is already inside the tiffin, like a note with money: no trip needed (<b>immediate</b>). Usually the lid gives the exact office desk (<b>direct</b>). Sometimes the lid only says “ask at the Churchgate sorting desk”, and the desk tells you the real office — one extra trip (<b>indirect</b>). And sometimes it says “building 4, then 3 floors up” — a fixed starting point plus a count (<b>indexed / base + offset</b>). Same delivery, different ways of naming the place: that is all addressing modes are.`,
      map: [
        ['The job on the slip: “deliver”', 'Opcode (which operation)'],
        ['Money kept inside the tiffin itself', 'Immediate: operand is inside the instruction'],
        ['Lid gives the exact office desk', 'Direct: address field = effective address'],
        ['Lid says “ask the sorting desk”; desk gives the real address', 'Indirect: EA = M[address field] (one extra memory access)'],
        ['“Building 4, then 3 floors up”', 'Indexed / base: EA = register + offset'],
      ],
    },
    concept: [
      `An instruction is a bit pattern divided into <b>fields</b>: an <b>opcode</b> (which operation) and one or more <b>operand/address fields</b> (where the data is). With n opcode bits the CPU can have at most 2<sup>n</sup> different operations. By the number of addresses, instructions are <b>3-address</b> (ADD R1, R2, R3), <b>2-address</b> (ADD R1, R2), <b>1-address</b> (ADD X, the other operand is the accumulator) and <b>0-address</b> (ADD on a stack, used for postfix evaluation).`,
      `The <b>addressing mode</b> tells the CPU how to find the operand; the memory address it finally uses is the <b>effective address (EA)</b>. <b>Immediate</b>: the operand is in the instruction (no memory access). <b>Direct</b>: EA = address field. <b>Indirect</b>: EA = M[address field], so one extra memory access. <b>Register</b>: operand is in a register. <b>Register indirect</b>: EA = contents of a register. <b>Indexed</b>: EA = address field + index register (good for arrays). <b>Relative</b>: EA = PC + offset (good for branches and relocatable code). <b>Implied</b>: the operand is fixed by the opcode itself (e.g. CMA, complement the accumulator).`,
    ],
    keyPoints: [
      'Instruction = opcode + address field(s); n opcode bits → 2<sup>n</sup> operations',
      'Bits for address = instruction length − opcode bits − register-field bits',
      'Immediate: operand = value in the instruction (a constant, no memory access)',
      'Direct: EA = A; Indirect: EA = M[A] (one extra memory reference)',
      'Register indirect: EA = (R); Indexed: EA = A + (XR); Base: EA = (BR) + A',
      'PC-relative: EA = PC + offset, where PC already points to the next instruction',
      '0-address instructions work on a stack (PUSH, POP, ADD) — postfix form',
    ],
    example: {
      q: 'An instruction has address field 300, and the index register XR holds 100. Memory: M[300] = 500, M[400] = 700, M[500] = 800. Find the operand in immediate, direct, indirect and indexed modes.',
      steps: [
        'Immediate: the operand is the address field itself → <b>300</b>.',
        'Direct: EA = 300, operand = M[300] → <b>500</b>.',
        'Indirect: EA = M[300] = 500, operand = M[500] → <b>800</b>.',
        'Indexed: EA = 300 + 100 = 400, operand = M[400] → <b>700</b>.',
      ],
      answer: 'Immediate 300, Direct 500, Indirect 800, Indexed 700',
    },
    shortcut:
      'Count memory trips needed for the operand after the instruction is fetched: immediate 0, register 0, direct 1, register indirect 1, indexed 1, indirect 2. “Fastest / slowest mode” questions then answer themselves.',
    traps: [
      'In PC-relative mode the offset is added to the <b>updated</b> PC (address of the next instruction), not the address of the branch itself — unless the question says otherwise.',
      'Immediate mode does not mean “fast memory”; it means the operand needs no memory access at all.',
    ],
    practice: [
      {
        q: 'In which addressing mode is the operand itself part of the instruction?',
        options: ['Immediate', 'Direct', 'Indirect', 'Register indirect'],
        answer: 0,
        why: 'In immediate mode the operand field holds the actual value, e.g. MOV A, #5.',
      },
      {
        q: 'Which addressing mode needs two memory references to get the operand (after the instruction has been fetched)?',
        options: ['Direct', 'Register', 'Memory indirect', 'Immediate'],
        answer: 2,
        why: 'First read M[A] to get the effective address, then read M[EA] to get the operand.',
      },
      {
        q: 'A computer has 32-bit instructions and 128 different operations. Each instruction has one register operand (32 registers) and one memory address field. How many bits are left for the memory address?',
        options: ['25', '24', '22', '20'],
        answer: 3,
        why: 'Opcode = log₂128 = 7 bits; register = log₂32 = 5 bits; address = 32 − 7 − 5 = 20 bits.',
      },
      {
        q: 'A 2-word branch instruction using PC-relative addressing is stored at address 1000 (word-addressable memory). Its offset field is +20, and the offset is added to the PC after the instruction has been fetched (the PC has already been advanced past it). What is the target (effective) address?',
        options: ['1020', '1022', '1002', '980'],
        answer: 1,
        why: 'After the fetch, PC = 1000 + 2 = 1002. EA = 1002 + 20 = 1022.',
      },
    ],
  },

  {
    id: 'io-backup-devices',
    title: 'Input / Output and Backup Devices',
    syllabus: 'Computer Basics',
    analogy: {
      title: 'The talathi office and the farmer’s 7/12 photocopies',
      oneLine: 'Form in = input, printed extract out = output, photocopy at home = backup.',
      story: `Think of a village talathi office that keeps land records — the 7/12 extracts (satbara utara). A farmer brings a filled form and the clerk types it in: that is <b>input</b>. The office prints a fresh 7/12 extract and hands it over: that is <b>output</b>. The farmer is wise: he keeps a photocopy of every extract at home, so a flood or fire in one place cannot wipe out his proof — that is a <b>backup</b>. The old record books in the godown can only be searched page after page from the start, unlike a register where you jump straight to a page — that is <b>sequential access</b> (magnetic tape) versus <b>direct access</b> (disk). And when only a few pages change, he photocopies just the new pages instead of the whole file — an <b>incremental backup</b>.`,
      map: [
        ['Farmer’s form typed in by the clerk', 'Input device (keyboard, scanner, OMR, MICR)'],
        ['Printed 7/12 extract handed over', 'Output device (printer, monitor)'],
        ['Photocopy kept safely at home', 'Backup copy on another device or place'],
        ['Old record books read page by page from the start', 'Magnetic tape — sequential access'],
        ['Copying only the pages changed since the last copy', 'Incremental backup'],
      ],
    },
    concept: [
      `<b>Input devices</b> turn real-world data into signals the computer understands: keyboard, mouse, scanner, microphone, webcam, joystick, light pen, barcode reader, biometric scanner. Three special readers are favourite exam questions: <b>MICR</b> (Magnetic Ink Character Recognition) reads the magnetic-ink numbers at the bottom of bank cheques; <b>OMR</b> (Optical Mark Reader) detects filled bubbles on answer sheets; <b>OCR</b> (Optical Character Recognition) turns printed text in an image into editable text. A touch screen is both an input and an output device.`,
      `<b>Output devices</b>: monitors (CRT, LCD, LED), speakers, projectors, plotters (large engineering drawings) and printers. <b>Impact printers</b> strike a ribbon: dot-matrix (speed in characters per second, cps), line printer (lines per minute, lpm), daisy wheel. <b>Non-impact printers</b> do not hammer the paper: inkjet, laser (pages per minute, ppm), thermal (bill printers). Print quality is measured in <b>dpi</b> (dots per inch).`,
      `<b>Backup devices</b> keep a second copy of data: magnetic tape (cheap, huge, sequential — used for archives), external hard disks, optical discs (CD ≈ 700 MB, DVD ≈ 4.7 GB single layer, Blu-ray ≈ 25 GB single layer), flash storage (pen drive, SSD, memory card) and cloud/network storage. Backup types: <b>full</b> (everything), <b>incremental</b> (changes since the last backup of any type — quickest to take, slowest to restore) and <b>differential</b> (changes since the last <i>full</i> backup — restore needs only the full plus the latest differential).`,
    ],
    keyPoints: [
      'MICR → bank cheques; OMR → bubble answer sheets; OCR → printed text to editable text; barcode reader → shop billing',
      'Impact: dot-matrix (cps), line printer (lpm), daisy wheel; non-impact: inkjet, laser (ppm), thermal',
      'Touch screen = input + output; plotter = output for large drawings',
      'Magnetic tape is sequential access; hard disk, SSD and RAM are direct (random) access',
      'CD ≈ 700 MB, DVD ≈ 4.7 GB (single layer), Blu-ray ≈ 25 GB (single layer)',
      'Restore with incremental backups: last full + every incremental after it, in order',
      'Restore with differential backups: last full + only the latest differential',
      '3-2-1 rule: 3 copies, on 2 types of media, 1 kept off-site',
    ],
    example: {
      q: 'A college office takes a full backup every Sunday night and an incremental backup every other night. The disk crashes on Thursday morning. Which backups are needed to restore, and in what order? What changes if the nightly backups were differential instead?',
      steps: [
        'The last full backup is Sunday night’s.',
        'Incrementals after it: Monday, Tuesday and Wednesday nights. Each holds only that one day’s changes, so all three are needed.',
        'Restore order: Sunday full → Monday → Tuesday → Wednesday.',
        'With differential backups, Wednesday’s differential already holds every change since Sunday, so only Sunday full + Wednesday differential are needed.',
      ],
      answer: 'Incremental: Sunday full + Mon + Tue + Wed (4 sets). Differential: Sunday full + Wednesday (2 sets).',
    },
    shortcut:
      'Match the reader to its job by one word: <b>MICR</b> = Magnetic ink → money (cheques); <b>OMR</b> = Marks (bubbles); <b>OCR</b> = Characters (text).',
    traps: [
      'OMR and OCR are both optical, but OMR only detects whether a bubble is filled; it cannot read letters.',
      'A laser printer is non-impact even though offices use it for bulk printing; “impact” means a pin or hammer strikes a ribbon.',
    ],
    practice: [
      {
        q: 'The numbers printed at the bottom of a bank cheque are read by:',
        options: ['OMR', 'OCR', 'MICR', 'Barcode reader'],
        answer: 2,
        why: 'Cheque numbers are printed in magnetic ink and read by Magnetic Ink Character Recognition.',
      },
      {
        q: 'Which of the following is an impact printer?',
        options: ['Dot-matrix printer', 'Laser printer', 'Inkjet printer', 'Thermal printer'],
        answer: 0,
        why: 'A dot-matrix printer’s pins strike an inked ribbon; the others do not touch the paper with a hammer.',
      },
      {
        q: 'A full backup is taken on Sunday night and a differential backup every other night. The disk fails on Friday morning. Which backups must be restored?',
        options: [
          'Sunday full + Monday to Thursday differentials',
          'Sunday full + Thursday differential',
          'Thursday differential only',
          'Sunday full only',
        ],
        answer: 1,
        why: 'A differential holds all changes since the last full backup, so the full plus the latest differential is enough.',
      },
      {
        q: 'Which storage medium gives only sequential access and is mainly used for long-term archival backup?',
        options: ['Pen drive', 'Hard disk', 'DVD', 'Magnetic tape'],
        answer: 3,
        why: 'Tape must be wound to the right place; it is cheap per GB and used for archives.',
      },
    ],
  },

  {
    id: 'memory',
    title: 'Memory Hierarchy and Organization',
    syllabus: 'Computer Basics',
    analogy: {
      title: 'Studying at your desk for CET',
      oneLine: 'Hand → desk → shelf → library: each step bigger, slower and cheaper.',
      story: `Picture yourself studying for CET. The pen and the one formula you are using right now are in your hand — instant, but you can hold very little (<b>registers</b>). The few books open on your desk are a hand-stretch away (<b>cache</b>). The bookshelf in your room holds all this year’s books, but you must get up to fetch one (<b>main memory, RAM</b>). The college library has thousands of books but needs a bicycle ride (<b>secondary storage — SSD/hard disk</b>). Closer means faster but smaller; farther means bigger, slower and cheaper. The whiteboard on your wall is wiped clean every night (<b>volatile RAM</b>), while the printed textbook stays the same for years (<b>ROM</b>). You leave the book you just used on the desk because you will probably need it again soon — that habit, <i>locality of reference</i>, is the reason cache works.`,
      map: [
        ['Pen / formula in your hand', 'Registers (inside the CPU, fastest, smallest)'],
        ['Books open on the desk', 'Cache memory (SRAM)'],
        ['Bookshelf in your room', 'Main memory (RAM, built from DRAM)'],
        ['College library across town', 'Secondary storage (SSD, hard disk)'],
        ['Whiteboard wiped each night vs printed textbook', 'Volatile RAM vs non-volatile ROM'],
      ],
    },
    concept: [
      `Memory is arranged as a <b>hierarchy</b>: registers → cache (L1, L2, L3) → main memory (RAM) → secondary storage (SSD, HDD) → backup storage (tape, optical). Moving down, capacity rises and cost per bit falls, but access time grows. The CPU directly accesses only registers, cache and main memory (<b>primary memory</b>); secondary storage is reached through I/O. Cache works because of <b>locality of reference</b>: <i>temporal</i> (a word used now will be used again soon) and <i>spatial</i> (its neighbours will be used soon).`,
      `<b>RAM</b> is volatile. <b>SRAM</b> uses flip-flops — fast, no refresh, costly — and is used for cache. <b>DRAM</b> stores each bit as charge on a capacitor — dense and cheap but must be <b>refreshed</b> — and is used for main memory. <b>ROM</b> is non-volatile and holds firmware such as the BIOS/boot program: mask ROM (written at the factory), <b>PROM</b> (programmed once by the user), <b>EPROM</b> (erased with ultraviolet light), <b>EEPROM</b> (erased electrically, byte by byte) and <b>flash</b> (erased electrically in blocks — pen drives, SSDs).`,
      `A memory chip is described as <b>words × bits per word</b>. A chip with <b>n address lines</b> has <b>2<sup>n</sup></b> locations; with <b>m data lines</b>, each location holds m bits. So capacity = 2<sup>n</sup> × m bits. CET uses binary units: 1 KB = 2<sup>10</sup> bytes, 1 MB = 2<sup>20</sup>, 1 GB = 2<sup>30</sup>, 1 TB = 2<sup>40</sup>; a nibble is 4 bits and a byte is 8 bits.`,
    ],
    keyPoints: [
      'Speed: registers &gt; cache &gt; RAM &gt; SSD &gt; HDD &gt; tape; cost per bit falls in the same order',
      'Cache = SRAM (no refresh); main memory = DRAM (needs refresh)',
      'PROM: write once; EPROM: UV erase; EEPROM: electrical, byte-wise; Flash: electrical, block-wise',
      'Capacity = 2<sup>address lines</sup> × word size; address lines = log₂(number of locations)',
      'Chips needed = (total words ÷ chip words) × (total word size ÷ chip word size)',
      'Hit ratio h = hits ÷ total accesses',
      'EAT if a miss checks cache first, then memory: h·T<sub>c</sub> + (1 − h)(T<sub>c</sub> + T<sub>m</sub>); if both are accessed together: h·T<sub>c</sub> + (1 − h)·T<sub>m</sub>',
      '1 KB = 2<sup>10</sup> B, 1 MB = 2<sup>20</sup> B, 1 GB = 2<sup>30</sup> B, 1 TB = 2<sup>40</sup> B',
    ],
    example: {
      q: 'A 32K × 8 memory is built from 8K × 8 RAM chips. How many chips are needed? How many address lines does the whole memory need, how many go to every chip, and how many to the decoder that selects a chip?',
      steps: [
        'Chips = (32K ÷ 8K) × (8 ÷ 8) = 4 × 1 = 4 chips.',
        'Total words = 32K = 2<sup>5</sup> × 2<sup>10</sup> = 2<sup>15</sup>, so the memory needs 15 address lines.',
        'Each chip has 8K = 2<sup>13</sup> words, so the lower 13 lines go to every chip in parallel.',
        'The remaining 15 − 13 = 2 high-order lines drive a 2-to-4 decoder that enables one of the 4 chips.',
      ],
      answer: '4 chips; 15 address lines in all — 13 to each chip, 2 to a 2×4 decoder',
    },
    shortcut:
      'Turn every size into a power of 2 first: 2 MB = 2<sup>1</sup> × 2<sup>20</sup> = 2<sup>21</sup> bytes → 21 address lines for a byte-addressable memory. After that, everything is just adding and subtracting exponents.',
    traps: [
      'Address lines count <b>locations</b>, not bits. A 64K × 16 word-addressable memory needs 16 address lines; the “× 16” only decides the number of data lines.',
      'Check byte-addressable vs word-addressable: 1 MB of 32-bit words is 2<sup>18</sup> words (18 lines) but 2<sup>20</sup> bytes (20 lines).',
      'The two EAT formulas give different answers; read whether a miss also spends the cache access time.',
    ],
    practice: [
      {
        q: 'A memory chip has 12 address lines and 8 data lines. Its capacity is:',
        options: ['12 KB', '96 bytes', '8 KB', '4 KB'],
        answer: 3,
        why: '2<sup>12</sup> = 4096 locations × 8 bits = 4096 bytes = 4 KB.',
      },
      {
        q: 'How many address lines are needed to address a 2 MB byte-addressable memory?',
        options: ['20', '21', '22', '16'],
        answer: 1,
        why: '2 MB = 2 × 2<sup>20</sup> = 2<sup>21</sup> bytes, so 21 lines.',
      },
      {
        q: 'How many 1K × 4 RAM chips are needed to build an 8K × 8 memory?',
        options: ['8', '4', '16', '32'],
        answer: 2,
        why: '(8K ÷ 1K) × (8 ÷ 4) = 8 × 2 = 16 chips.',
      },
      {
        q: 'A cache has access time 10 ns and hit ratio 0.9; main memory access time is 100 ns. Every access looks in the cache first; on a miss, main memory is read only after the cache lookup fails, so a miss costs the cache time plus the memory time. The effective access time is:',
        options: ['20 ns', '91 ns', '11 ns', '110 ns'],
        answer: 0,
        why: 'EAT = 0.9 × 10 + 0.1 × (10 + 100) = 9 + 11 = 20 ns. (91 ns comes from swapping the hit and miss ratios; 110 ns is the cost of a single miss.)',
      },
    ],
  },

  // ───────────────────────────── Data Representation ─────────────────────────────
  {
    id: 'number-systems',
    title: 'Number Systems and Conversions',
    syllabus: 'Data Representation',
    analogy: {
      title: 'Paying with one coin of each power of 2',
      oneLine: 'Binary is paying with coins of ₹1, 2, 4, 8 … using at most one of each.',
      story: `Imagine a toll-booth cashier who has only coins of ₹1, ₹2, ₹4, ₹8, ₹16, ₹32, ₹64 and ₹128 — and may give <b>at most one</b> coin of each value. To pay ₹13 she takes the biggest coin that fits (₹8, leaving 5), then ₹4 (leaving 1), skips ₹2, then takes ₹1. Writing “took = 1, skipped = 0” from the biggest coin down gives 1101 — and that is 13 in binary. Our normal decimal system works the same way with notes of ₹1, ₹10, ₹100, ₹1000, where you may use up to nine of each. Every number system is just “which note values exist, and how many of each may you use”.`,
      map: [
        ['Coin values ₹1, ₹2, ₹4, ₹8 …', 'Place values 2⁰, 2¹, 2², 2³ … (base 2)'],
        ['At most one coin of each value', 'Each binary digit is only 0 or 1'],
        ['Took = 1, skipped = 0, biggest coin first', 'The bit pattern, e.g. 13 = 1101<sub>2</sub>'],
        ['Notes ₹1, ₹10, ₹100, up to nine of each', 'Decimal: base 10, digits 0–9'],
        ['Always take the biggest coin that still fits', 'Conversion by subtracting powers of 2'],
      ],
    },
    concept: [
      `In a <b>positional number system</b> with base (radix) r, each digit is multiplied by a power of r that depends on its position. Binary (base 2) uses 0–1, octal (base 8) uses 0–7, decimal (base 10) uses 0–9, and hexadecimal (base 16) uses 0–9 and A–F (A = 10 … F = 15). To convert <b>any base to decimal</b>, multiply each digit by its place value and add: 1011.1<sub>2</sub> = 8 + 0 + 2 + 1 + 0.5 = 11.5.`,
      `To convert a <b>decimal integer</b> to base r, divide repeatedly by r and read the remainders <b>from bottom to top</b>. For a <b>decimal fraction</b>, multiply repeatedly by r and read the integer parts <b>from top to bottom</b>. Some fractions never end: 0.1<sub>10</sub> = 0.000110011…<sub>2</sub>, which is why a computer cannot store 0.1 exactly.`,
      `Binary ↔ octal and binary ↔ hex need no division at all, because 8 = 2³ and 16 = 2⁴. Group bits in <b>threes</b> (octal) or <b>fours</b> (hex), starting <b>from the binary point</b> — leftwards for the integer part and rightwards for the fraction — padding with zeros. For octal ↔ hex, go through binary.`,
    ],
    keyPoints: [
      'Value = Σ digit × r<sup>position</sup> (positions …, 2, 1, 0, −1, −2 …)',
      'Integer → base r: divide by r, read remainders bottom-up',
      'Fraction → base r: multiply by r, read integer parts top-down',
      'Binary → octal: groups of 3; binary → hex: groups of 4, from the point outwards',
      'Hex digits: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15',
      'Useful powers: 2¹⁰ = 1024, 8² = 64, 8³ = 512, 16² = 256, 16³ = 4096',
      'Largest n-digit number in base r = r<sup>n</sup> − 1 (8 bits → 255 = FF<sub>16</sub>)',
    ],
    example: {
      q: 'Convert 156.625<sub>10</sub> to binary, octal and hexadecimal.',
      steps: [
        'Integer part: dividing 156 by 2 again and again gives remainders 0, 0, 1, 1, 1, 0, 0, 1. Read bottom to top: 10011100. Check: 128 + 16 + 8 + 4 = 156.',
        'Fraction: 0.625 × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; 0.5 × 2 = 1.0 → 1. Read top-down: .101.',
        'Binary: 10011100.101<sub>2</sub>.',
        'Octal: 010 011 100 . 101 → 234.5<sub>8</sub>.',
        'Hex: 1001 1100 . 1010 (fraction padded with a 0) → 9C.A<sub>16</sub>.',
      ],
      answer: '10011100.101<sub>2</sub> = 234.5<sub>8</sub> = 9C.A<sub>16</sub>',
    },
    shortcut:
      'For decimal → binary of small numbers, skip division: write 128 64 32 16 8 4 2 1 and tick the values that add up to the number (the coin method). For “find the base” questions, write the number as a polynomial in b and test the options.',
    traps: [
      'Grouping for octal/hex starts at the binary point, not at the left end: 1011.1<sub>2</sub> = 001 011 . 100 = 13.4<sub>8</sub>, not 13.1<sub>8</sub>.',
      'For fractions, read the integer parts top-down; reading them bottom-up (like integer remainders) gives a wrong answer.',
    ],
    practice: [
      {
        q: '(2AF)<sub>16</sub> in decimal is:',
        options: ['678', '687', '701', '2615'],
        answer: 1,
        why: '2 × 256 + 10 × 16 + 15 = 512 + 160 + 15 = 687.',
      },
      {
        q: '(0.375)<sub>10</sub> in binary is:',
        options: ['0.011', '0.101', '0.0011', '0.110'],
        answer: 0,
        why: '0.375 × 2 = 0.75 → 0; 0.75 × 2 = 1.5 → 1; 0.5 × 2 = 1.0 → 1. Read top-down: 0.011.',
      },
      {
        q: '(725)<sub>8</sub> in hexadecimal is:',
        options: ['2D5', '1C5', '3A5', '1D5'],
        answer: 3,
        why: '725<sub>8</sub> = 111 010 101 = 1 1101 0101 (regrouped in fours) = 1D5<sub>16</sub> (both equal 469).',
      },
      {
        q: 'If (121)<sub>b</sub> = (49)<sub>10</sub>, the base b is:',
        options: ['5', '8', '6', '7'],
        answer: 2,
        why: 'b² + 2b + 1 = (b + 1)² = 49, so b + 1 = 7 and b = 6.',
      },
    ],
  },

  {
    id: 'character-representation',
    title: 'Character and Data Representation (ASCII, Unicode, BCD, Parity)',
    syllabus: 'Data Representation',
    analogy: {
      title: 'Indian Railways train numbers',
      oneLine: 'Every character has one agreed number everywhere, like every train has one train number.',
      story: `Every train in India has a fixed number. The station master in Nagpur, the booking clerk in Pune and the app on your phone all agree that 12123 is the Deccan Queen, so a ticket made in one city is understood everywhere. Computers do the same with letters: they agree on one number for each character — “A” is 65 everywhere — so a file typed on one machine reads correctly on another. The old railway scheme used four digits and ran short of numbers as trains increased; in 2010 it moved to five digits and kept the old numbers inside the new ones (2123 became 12123). Text coding went through the same story: 7-bit <b>ASCII</b> has only 128 codes — enough for English, no room for मराठी. <b>Unicode</b> gives a number to every character of every script and keeps the 128 ASCII codes as its first 128, so old English text still works.`,
      map: [
        ['Train name (Deccan Queen)', 'A character (the letter A)'],
        ['Its fixed train number (12123)', 'Its character code (65)'],
        ['Same number at every station in India', 'Same code table on every computer, so text can be exchanged'],
        ['Old 4-digit numbers ran short', '7-bit ASCII: only 2⁷ = 128 codes, no Devanagari'],
        ['5-digit scheme keeps old numbers inside', 'Unicode: the first 128 code points are exactly ASCII'],
      ],
    },
    concept: [
      `Computers store only bits, so every character gets an agreed number (its <b>code</b>). <b>ASCII</b> is a 7-bit code with 128 characters: 0–31 are control characters, 32 is space, 48–57 are the digits ‘0’–‘9’, 65–90 are A–Z and 97–122 are a–z. Extended ASCII uses 8 bits (256 characters). IBM mainframes used <b>EBCDIC</b>, an 8-bit code. <b>Unicode</b> covers all scripts and is stored as <b>UTF-8</b> (1 to 4 bytes per character: ASCII characters take 1 byte, Devanagari letters take 3), <b>UTF-16</b> (2 or 4 bytes) or <b>UTF-32</b> (always 4 bytes).`,
      `Numbers can also be stored digit by digit. <b>BCD</b> (Binary Coded Decimal, 8421 code) writes each decimal digit in 4 bits: 395 = 0011 1001 0101. The patterns 1010 to 1111 are invalid in BCD. <b>Excess-3</b> adds 3 to each digit before coding (5 → 1000). <b>Gray code</b> changes only one bit between consecutive numbers.`,
      `A <b>parity bit</b> is an extra bit chosen so that the total number of 1s is even (<b>even parity</b>) or odd (<b>odd parity</b>). The receiver counts the 1s; a wrong count means an error. Parity detects any <b>odd number</b> of flipped bits (for example, one), but misses two flipped bits, and cannot tell <i>which</i> bit is wrong, so it cannot correct errors (a Hamming code can).`,
    ],
    keyPoints: [
      'ASCII: 7 bits, 128 characters; extended ASCII: 8 bits, 256 characters',
      '‘0’ = 48, ‘A’ = 65, ‘a’ = 97, space = 32; lowercase = uppercase + 32 (only bit 5 differs)',
      'Unicode: one code point for every character of every script; the first 128 are ASCII',
      'UTF-8: 1 byte for ASCII, 3 bytes for Devanagari (e.g. अ = U+0905)',
      'BCD: 4 bits per decimal digit; 1010–1111 are invalid',
      'Excess-3 = BCD of (digit + 3); Gray code: one bit changes between neighbours',
      'Parity detects an odd number of bit errors (e.g. 1), misses 2, and cannot correct',
      'n bits can represent 2<sup>n</sup> different characters',
    ],
    example: {
      q: 'The ASCII code of ‘g’ is 103. Write its 7-bit binary form and convert it to uppercase ‘G’ by changing a single bit.',
      steps: [
        '103 = 64 + 32 + 4 + 2 + 1 → 1100111<sub>2</sub>.',
        'Uppercase letters are exactly 32 less than lowercase, and 32 = 0100000<sub>2</sub> is bit 5 (counting from bit 0 on the right).',
        'Clear bit 5: 1100111 → 1000111<sub>2</sub> = 64 + 4 + 2 + 1 = 71.',
        '71 is the ASCII code of ‘G’.',
      ],
      answer: '‘g’ = 1100111<sub>2</sub>; clearing bit 5 gives 1000111<sub>2</sub> = 71 = ‘G’',
    },
    shortcut:
      'Remember three anchors: <b>48, 65, 97</b> (‘0’, ‘A’, ‘a’). Every other code is anchor + position: ‘d’ = 97 + 3 = 100, ‘7’ = 48 + 7 = 55, ‘Z’ = 65 + 25 = 90.',
    traps: [
      'The character ‘7’ is not the number 7: its ASCII code is 55. In C, <code>\'7\' - \'0\'</code> gives 7.',
      'BCD is not binary: 25 in BCD is 0010 0101, but in binary it is 11001.',
    ],
    practice: [
      {
        q: 'If the ASCII code of ‘A’ is 65, what is the ASCII code of ‘d’?',
        options: ['68', '101', '100', '132'],
        answer: 2,
        why: 'Lowercase starts at ‘a’ = 97 (65 + 32), so ‘d’ = 97 + 3 = 100. (68 is uppercase ‘D’.)',
      },
      {
        q: 'The BCD (8421) representation of 395 is:',
        options: ['0001 1000 1011', '0011 1001 0110', '0101 1001 0011', '0011 1001 0101'],
        answer: 3,
        why: 'Code each digit separately: 3 = 0011, 9 = 1001, 5 = 0101. (0001 1000 1011 is plain binary of 395.)',
      },
      {
        q: 'A receiver uses even parity on 8-bit words (7 data bits + 1 parity bit). Which received word shows an error?',
        options: ['01011101', '10110100', '11100111', '00000000'],
        answer: 0,
        why: '01011101 has five 1s (odd); the others have 4, 6 and 0 ones, all even.',
      },
      {
        q: 'In UTF-8, how many bytes are needed to store the two-character string “Aअ” (Latin A followed by Devanagari अ)?',
        options: ['2', '4', '3', '8'],
        answer: 1,
        why: '‘A’ is ASCII and takes 1 byte; अ (U+0905) takes 3 bytes. Total 4.',
      },
    ],
  },

  {
    id: 'binary-arithmetic',
    title: 'Binary Arithmetic, Signed Numbers and Two’s Complement',
    syllabus: 'Data Representation',
    analogy: {
      title: 'A scooter odometer rolling back below 0000',
      oneLine: 'Wind 0000 back by one and it shows the top value — that is how −1 becomes all 1s.',
      story: `Look at an old scooter’s mechanical odometer with four digits. Wind it back by 1 from 0000 and it does not show “−1”; it rolls over to 9999. A mechanic who knows this simply reads 9999 as “one below zero”, 9998 as “two below zero”, and so on. Now imagine a <b>binary</b> odometer with 4 wheels that show only 0 or 1. Going back one from 0000 gives 1111, so 1111 means −1, 1110 means −2, and 1000 (halfway round) is the most negative, −8. That rolled-back reading is exactly the <b>two’s complement</b> code. Because the meter just counts round a circle, adding a negative number is the same as winding forward — so the computer needs only an adder, never a separate subtractor. Crossing the halfway mark by accident (7 + 1 landing on 1000 = −8) is <b>overflow</b>.`,
      map: [
        ['Fixed number of odometer wheels', 'Fixed number of bits (n-bit register)'],
        ['Rolling back below 0000 to 1111', '−1 is stored as all 1s'],
        ['Distance left to the wrap-around point 10000', 'Two’s complement of x = 2<sup>n</sup> − x'],
        ['No fifth wheel to show the carry', 'The final carry out is discarded'],
        ['7 + 1 jumping across halfway to 1000', 'Overflow: result does not fit, sign comes out wrong'],
      ],
    },
    concept: [
      `Binary addition uses 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1) and 1 + 1 + 1 = 11. Signed numbers can be stored in three ways in n bits. <b>Sign-magnitude</b>: the MSB is the sign and the rest is the size. <b>One’s complement</b>: a negative number is the positive number with every bit inverted. <b>Two’s complement</b>: invert every bit and add 1 (equivalently 2<sup>n</sup> − x). Sign-magnitude and one’s complement both have two zeros (+0 and −0); two’s complement has only one zero, which is why every modern CPU uses it.`,
      `To find A − B in two’s complement, add A to the two’s complement of B and <b>ignore any carry out</b> of the MSB. If the MSB of the answer is 1, the answer is negative; take its two’s complement to read the size. <b>Overflow</b> happens only when two numbers of the <b>same sign</b> are added and the result has the opposite sign — equivalently, when the carry into the MSB differs from the carry out of it. Adding a positive and a negative number can never overflow.`,
      `To widen a two’s-complement number to more bits, copy the sign bit into the new places (<b>sign extension</b>): −3 is 1101 in 4 bits and 11111101 in 8 bits.`,
    ],
    keyPoints: [
      'n-bit two’s complement range: −2<sup>n−1</sup> to +2<sup>n−1</sup> − 1 (8 bits: −128 to +127)',
      'n-bit sign-magnitude and one’s complement range: −(2<sup>n−1</sup> − 1) to +(2<sup>n−1</sup> − 1), with two zeros',
      'Two’s complement = one’s complement + 1 = 2<sup>n</sup> − x',
      'Quick method: copy bits from the right up to and including the first 1, then invert the rest',
      'A − B = A + (two’s complement of B); discard the end carry',
      'Overflow: (+) + (+) gives (−), or (−) + (−) gives (+); carry into MSB ≠ carry out of MSB',
      'Sign extension: repeat the MSB when widening',
    ],
    example: {
      q: 'Compute 25 − 37 using 8-bit two’s complement arithmetic.',
      steps: [
        '25 = 00011001 and 37 = 00100101.',
        'Two’s complement of 37: invert → 11011010, add 1 → 11011011.',
        'Add: 00011001 + 11011011 = 11110100 (no carry out).',
        'The MSB is 1, so the answer is negative. Two’s complement of 11110100 = 00001100 = 12.',
        'So the result is −12. Check: 25 − 37 = −12. ✓',
      ],
      answer: '11110100<sub>2</sub> = −12',
    },
    shortcut:
      'To read a negative two’s-complement number fast, give the MSB a <b>negative</b> weight: 11110100 = −128 + 64 + 32 + 16 + 4 = −12. No inverting needed.',
    traps: [
      '“Invert and add 1” is two’s complement; inverting alone is one’s complement. Read which one the question asks for.',
      'A carry out of the MSB is <b>not</b> overflow in two’s complement. Judge overflow by the signs, not by the carry.',
      'The range is not symmetric: −128 fits in 8 bits, +128 does not.',
    ],
    practice: [
      {
        q: 'The 8-bit two’s complement representation of −45 is:',
        options: ['10101101', '11010010', '00101101', '11010011'],
        answer: 3,
        why: '45 = 00101101 → invert 11010010 → add 1 → 11010011. (10101101 is sign-magnitude; 11010010 is one’s complement.)',
      },
      {
        q: 'The range of integers that can be represented in 8-bit two’s complement is:',
        options: ['−127 to +127', '−128 to +128', '−128 to +127', '0 to 255'],
        answer: 2,
        why: '−2⁷ to 2⁷ − 1 = −128 to +127.',
      },
      {
        q: 'In 4-bit two’s complement arithmetic, 0110 + 0101 = 1011. Which statement is correct?',
        options: [
          'The result is +11 and is correct',
          'The result reads as −5; overflow has occurred',
          'The result is −3; no overflow',
          'The result reads as −5; no overflow, because there is no carry out',
        ],
        answer: 1,
        why: '6 + 5 = 11 is above the 4-bit maximum of +7. Two positives gave a negative pattern (1011 = −5), so overflow occurred.',
      },
      {
        q: 'The 8-bit pattern 10000001 represents which values in sign-magnitude, one’s complement and two’s complement respectively?',
        options: ['−1, −126, −127', '−1, −127, −126', '−127, −126, −1', '+129 in all three'],
        answer: 0,
        why: 'Sign-magnitude: −(0000001) = −1. One’s: invert → 01111110 = 126, so −126. Two’s: −128 + 1 = −127.',
      },
    ],
  },

  {
    id: 'floating-point',
    title: 'Floating Point and Normalization (IEEE 754)',
    syllabus: 'Data Representation',
    analogy: {
      title: 'Property prices written in lakh and crore',
      oneLine: 'A few significant digits (mantissa) plus a unit word like “crore” (exponent).',
      story: `A builder’s rate board in Pune has room for just three digits and one unit word: “₹ 2.53 crore”, “₹ 8.40 lakh”. Nobody writes ₹25300000 — it is too long — and nobody writes “₹ 0.253 ten-crore”, because that wastes a digit on a leading zero. The rule “one non-zero digit before the point, then the unit word” is <b>normalization</b>. The three digits are the <b>mantissa</b> (significand): they give precision. The unit word is the <b>exponent</b>: it gives range. A flat costing ₹2,53,46,781 is shown as 2.53 crore, so the last digits are lost — that is <b>rounding error</b>. Computers do the same thing in base 2, and since a normalized binary number always starts with 1, they do not even store that 1 (the <b>hidden bit</b>).`,
      map: [
        ['The three digits shown, e.g. 2.53', 'Mantissa / significand (precision)'],
        ['The unit word: lakh, crore', 'Exponent (range — the power of the base)'],
        ['“One non-zero digit before the point” rule', 'Normalization: 1.xxx × 2<sup>e</sup>'],
        ['Last digits of ₹2,53,46,781 dropped', 'Rounding error from limited mantissa bits'],
        ['Minus sign for a loss', 'Sign bit'],
      ],
    },
    concept: [
      `Floating point stores a real number as <b>± M × B<sup>E</sup></b>: a sign, a mantissa M and an exponent E (base B = 2 in computers). A number is <b>normalized</b> when the mantissa has no leading zeros, so no bit is wasted. Two conventions appear in books: older textbooks use <b>0.1xxx × 2<sup>E</sup></b> (first bit after the point is 1); IEEE 754 uses <b>1.xxx × 2<sup>E</sup></b>. Read the question to see which one is meant.`,
      `<b>IEEE 754 single precision</b> (32 bits, C’s <code>float</code>) has 1 sign bit, 8 exponent bits and 23 fraction bits. The exponent is stored with a <b>bias of 127</b> (stored E = actual exponent + 127), and the leading 1 is not stored (<b>hidden bit</b>), so value = (−1)<sup>S</sup> × 1.F × 2<sup>E − 127</sup>. Double precision (64 bits) uses 1 + 11 + 52 bits with bias 1023.`,
      `Special patterns: E = 0 and F = 0 is ±0; E = 255 and F = 0 is ±∞; E = 255 and F ≠ 0 is NaN (not a number, e.g. 0/0); E = 0 and F ≠ 0 is a denormal (very tiny) number. So normal exponents run from −126 to +127. A number such as 0.1 is a repeating fraction in binary and is stored only approximately; numbers made of halves, quarters and eighths (0.5, 0.75, 0.625) are exact.`,
    ],
    keyPoints: [
      'Single: 1 sign + 8 exponent + 23 fraction = 32 bits, bias 127',
      'Double: 1 sign + 11 exponent + 52 fraction = 64 bits, bias 1023',
      'Value = (−1)<sup>S</sup> × 1.F × 2<sup>E − 127</sup> (the hidden 1 is not stored)',
      'Stored exponent = actual exponent + 127 (so 1.0 has E = 127 = 01111111)',
      'E all 0s and F = 0 → zero; E all 1s and F = 0 → infinity; E all 1s and F ≠ 0 → NaN',
      'Normalizing: move the point until a single 1 is left of it; moving the point left raises the exponent',
      'Only fractions with a power-of-2 denominator are exact (0.5, 0.25, 0.625 yes; 0.1, 0.2 no)',
    ],
    example: {
      q: 'Write −12.375 in IEEE 754 single precision (binary and hex).',
      steps: [
        'Sign: negative → S = 1.',
        '12 = 1100 and 0.375 = .011, so 12.375 = 1100.011<sub>2</sub>.',
        'Normalize: 1100.011 = 1.100011 × 2³ (point moved 3 places left).',
        'Stored exponent = 3 + 127 = 130 = 10000010.',
        'Fraction (after the hidden 1): 100011 followed by 17 zeros.',
        'Bits: 1 | 10000010 | 10001100000000000000000. In fours: 1100 0001 0100 0110 0000 … → C1460000<sub>16</sub>.',
      ],
      answer: '1 10000010 10001100000000000000000 = C1460000<sub>16</sub>',
    },
    shortcut:
      'To decode a hex pattern such as C0A00000, write only the first 3 hex digits in binary (C0A → 1100 0000 1010): first bit = sign, next 8 bits = exponent, the rest = start of the fraction. You rarely need more than 12 bits.',
    traps: [
      'Do not forget the bias: the stored exponent is actual + 127, not the actual exponent.',
      'The hidden 1 is not stored; the 23 fraction bits are only what comes after the point.',
      'If the question uses the 0.1xxx normalization, 1100.011 becomes 0.1100011 × 2⁴ — a different exponent.',
    ],
    practice: [
      {
        q: 'The IEEE 754 single-precision pattern C0A00000<sub>16</sub> represents:',
        options: ['−2.5', '+5.0', '−5.0', '−10.0'],
        answer: 2,
        why: '1100 0000 1010 … → S = 1, E = 10000001 = 129 (actual 2), F = 01. Value = −1.01<sub>2</sub> × 2² = −101<sub>2</sub> = −5.',
      },
      {
        q: 'In IEEE 754 single precision, the stored (biased) exponent field for the number 1.0 is:',
        options: ['01111111', '00000000', '10000000', '00000001'],
        answer: 0,
        why: '1.0 = 1.0 × 2⁰; stored exponent = 0 + 127 = 127 = 01111111.',
      },
      {
        q: 'The IEEE-style normalized form (1.F × 2<sup>e</sup>) of 0.0001011<sub>2</sub> is:',
        options: ['1.011 × 2<sup>4</sup>', '0.1011 × 2<sup>−3</sup>', '1.011 × 2<sup>−3</sup>', '1.011 × 2<sup>−4</sup>'],
        answer: 3,
        why: 'Move the point 4 places right to get 1.011, so multiply by 2<sup>−4</sup>. (0.1011 × 2<sup>−3</sup> has the same value but is the older 0.1F style.)',
      },
      {
        q: 'Which of these decimal numbers can be stored exactly in IEEE 754 single precision?',
        options: ['0.1', '0.625', '0.2', '0.3'],
        answer: 1,
        why: '0.625 = 5/8 = 0.101<sub>2</sub>, a finite binary fraction. 0.1, 0.2 and 0.3 repeat forever in binary.',
      },
    ],
  },

  {
    id: 'boolean-algebra',
    title: 'Boolean Algebra, Logic Gates, Truth Tables and K-maps',
    syllabus: 'Data Representation',
    analogy: {
      title: 'The switches and bulbs in your house',
      oneLine: 'Switches in series = AND, in parallel = OR, the staircase two-way switch = XOR.',
      story: `Look at the wiring in your house. If a bulb is connected through two switches placed <b>one after the other</b> (in series), it glows only when switch A <b>and</b> switch B are both on — that is AND. If the two switches are placed <b>side by side</b> (in parallel), either one can light it — that is OR. A push-button that <i>breaks</i> the circuit when pressed gives NOT. And the staircase light, which you switch on downstairs and off upstairs, changes state whenever <b>exactly one</b> switch is flipped — those two-way switches behave as XOR. Boolean algebra is simply the arithmetic of such on/off switches: 1 = on/closed/true, 0 = off/open/false.`,
      map: [
        ['Two switches in series', 'AND: A·B'],
        ['Two switches in parallel', 'OR: A + B'],
        ['Push-button that cuts the circuit when pressed', 'NOT: A′'],
        ['Staircase two-way switches — any single flip toggles the light', 'XOR: A ⊕ B = A′B + AB′'],
        ['Bulb on / off', 'Output 1 / 0'],
      ],
    },
    concept: [
      `Boolean algebra works on the values 0 and 1 with three basic operations: AND (·), OR (+) and NOT (′ or a bar). Other gates are combinations: NAND = NOT of AND, NOR = NOT of OR, XOR (1 when the inputs differ), XNOR (1 when the inputs are equal). <b>NAND and NOR are universal gates</b>: any circuit can be built using only one of them. A <b>truth table</b> for n inputs has 2<sup>n</sup> rows, and there are 2<sup>2<sup>n</sup></sup> different Boolean functions of n variables.`,
      `Key laws: A + 0 = A, A·1 = A, A + 1 = 1, A·0 = 0, A + A = A, A + A′ = 1, A·A′ = 0, (A′)′ = A; distributive A + BC = (A + B)(A + C); absorption A + AB = A, A(A + B) = A, and A + A′B = A + B. <b>De Morgan’s laws</b>: (A + B)′ = A′·B′ and (A·B)′ = A′ + B′ — “break the bar, change the sign”.`,
      `In a <b>Venn diagram</b>, AND is the overlap (intersection), OR is the union, NOT is everything outside the circle, and XOR is the two side parts without the overlap. A <b>Karnaugh map</b> places minterms in Gray-code order (00, 01, 11, 10) so neighbouring cells differ in one variable. Group adjacent 1s in blocks of 1, 2, 4 or 8 (groups may wrap around the edges); in each group, the variables that stay constant form one product term.`,
    ],
    keyPoints: [
      'AND: 1 only if all inputs are 1; OR: 0 only if all inputs are 0',
      'NAND: 0 only if all inputs are 1; NOR: 1 only if all inputs are 0 — both are universal',
      'XOR = A′B + AB′ (1 when inputs differ); XNOR = AB + A′B′',
      'De Morgan: (A + B)′ = A′B′; (AB)′ = A′ + B′',
      'Absorption: A + AB = A; A(A + B) = A; A + A′B = A + B',
      'n variables: 2<sup>n</sup> truth-table rows and 2<sup>2<sup>n</sup></sup> possible functions',
      'K-map order 00, 01, 11, 10; a group of 2<sup>k</sup> cells removes k variables',
      'Venn: AND = intersection, OR = union, XOR = symmetric difference',
    ],
    example: {
      q: 'Simplify F(A, B, C) = Σm(0, 1, 2, 4, 5) using a K-map.',
      steps: [
        'Minterms as ABC: 0 = 000, 1 = 001, 2 = 010, 4 = 100, 5 = 101.',
        'K-map rows A = 0, 1; columns BC = 00, 01, 11, 10. Row A = 0 has 1s under 00, 01, 10; row A = 1 has 1s under 00, 01.',
        'Group of four: cells 0, 1, 4, 5 (columns 00 and 01 in both rows). B = 0 throughout while A and C change → term <b>B′</b>.',
        'Cell 2 (010) is still uncovered. Pair it with cell 0 (000) by wrapping around the row edge: A = 0 and C = 0 stay fixed → term <b>A′C′</b>.',
        'F = B′ + A′C′. Check m2 = 010: B = 1, so only A′C′ covers it. ✓',
      ],
      answer: 'F = B′ + A′C′',
    },
    shortcut:
      'For “simplify” MCQs, test the original and the four options with a few input rows, e.g. (A, B) = (0, 0), (0, 1), (1, 0), (1, 1). Usually one or two rows rule out three options.',
    traps: [
      'De Morgan changes the operator too: (A + B)′ is A′B′, not A′ + B′.',
      'K-map columns go 00, 01, 11, 10 — not 00, 01, 10, 11. Binary order breaks the adjacency.',
      'A + BC = (A + B)(A + C) is true in Boolean algebra even though it looks wrong in ordinary algebra.',
    ],
    practice: [
      {
        q: 'A + A′B simplifies to:',
        options: ['A', 'A + B', 'AB', 'B'],
        answer: 1,
        why: 'A + A′B = (A + A′)(A + B) = 1·(A + B) = A + B.',
      },
      {
        q: 'By De Morgan’s law, (A + B + C)′ equals:',
        options: ['A′ + B′ + C′', 'ABC', '(ABC)′', 'A′B′C′'],
        answer: 3,
        why: 'Break the bar and change + to ·: (A + B + C)′ = A′·B′·C′.',
      },
      {
        q: 'In a Venn diagram of sets A and B, the shaded region is everything in A or in B but <b>not</b> in both. Which Boolean expression does it represent?',
        options: ['A·B', 'A + B', 'AB′ + A′B', 'A′B′'],
        answer: 2,
        why: '“In exactly one of A, B” is the symmetric difference, i.e. XOR = AB′ + A′B.',
      },
      {
        q: 'The minimal expression for F(A, B, C, D) = Σm(0, 2, 8, 10) is:',
        options: ['B′D′', 'A′C′', 'B′C′', 'BD'],
        answer: 0,
        why: 'Minterms 0000, 0010, 1000, 1010: B = 0 and D = 0 in all four (the four corners of the K-map), while A and C vary → B′D′.',
      },
    ],
  },

  // ───────────────────────────── Computer Architecture ─────────────────────────────
  {
    id: 'architecture-interrupts',
    title: 'Buses, Processor–I/O Communication and Interrupts',
    syllabus: 'Computer Architecture',
    analogy: {
      title: 'A teacher handling doubts in a classroom',
      oneLine: 'Asking every student again and again = polling; a raised hand = interrupt; the monitor carrying notebooks = DMA.',
      story: `A teacher is explaining a chapter to a class of sixty. One way to handle doubts is to stop after every few lines and ask each student in turn, “Any doubt? Any doubt?” — tiring and mostly wasted (<b>polling / programmed I/O</b>). A better way: students simply <b>raise a hand</b> when they need help. The teacher finishes the sentence she is speaking, keeps a finger on the line in the textbook, answers the doubt, then continues from the same line (<b>interrupt</b>: finish the current instruction, save the PC, run the service routine, return). If two hands go up together, a fixed rule decides who goes first (<b>priority</b>), and if the principal walks in with an announcement, nobody can ignore it (<b>non-maskable interrupt</b>). To collect sixty notebooks and carry them to the staffroom, she just tells the class monitor to do it and keeps teaching; he tells her only when the job is finished (<b>DMA</b>).`,
      map: [
        ['Asking every student “any doubt?” again and again', 'Programmed I/O (polling): CPU keeps checking the device status'],
        ['A student raising a hand', 'Interrupt request (IRQ) from a device'],
        ['Finger on the textbook line, answer, then continue', 'Save PC and flags, run the ISR, return'],
        ['Principal’s announcement that cannot be ignored', 'Non-maskable interrupt (e.g. power failure)'],
        ['Monitor carries the notebooks by himself', 'DMA: controller moves the block, interrupts only at the end'],
      ],
    },
    concept: [
      `At block level a computer is CPU + memory + I/O modules joined by a <b>system bus</b> with three parts. The <b>address bus</b> carries the location the CPU wants (one-way: CPU → memory/I/O); with n address lines the CPU can address 2<sup>n</sup> locations. The <b>data bus</b> carries the data itself (two-way); its width is the number of bits moved in one transfer. The <b>control bus</b> carries signals such as memory read/write, I/O read/write, interrupt request, bus request/grant and the clock. Devices connect through <b>interfaces/ports</b>, addressed either as part of memory (<b>memory-mapped I/O</b>) or with separate I/O instructions (<b>isolated I/O</b>).`,
      `The processor and I/O can talk in three ways. <b>Programmed I/O</b>: the CPU keeps testing the device’s status bit (busy-waiting), wasting CPU time. <b>Interrupt-driven I/O</b>: the device sends an interrupt when it is ready; the CPU does other work meanwhile but still moves every word itself. <b>DMA (Direct Memory Access)</b>: the CPU gives the DMA controller the start address, word count and direction; the controller takes the bus (bus request / bus grant, HOLD/HLDA) and moves the whole block between device and memory, by <i>cycle stealing</i> or in <i>burst mode</i>, then interrupts the CPU once at the end. DMA suits fast bulk devices such as disks.`,
      `When an <b>interrupt</b> arrives, the CPU finishes the current instruction, saves the PC and flags on the stack, finds the address of the <b>Interrupt Service Routine (ISR)</b> — often from an <b>interrupt vector table</b> — runs it, and on the return instruction restores the saved state. <b>Hardware interrupts</b> come from devices and are <i>maskable</i> (can be disabled) or <i>non-maskable</i> (NMI, e.g. power failure). <b>Software interrupts / traps</b> are caused by instructions (system calls) or by errors (divide by zero, invalid opcode, page fault — called exceptions). With several devices, priority is set by <b>polling order</b> in software or by <b>daisy chaining</b> in hardware, where the device nearest the CPU has the highest priority.`,
    ],
    keyPoints: [
      'Address bus: one-way (from CPU); data bus: two-way; control bus: individual signal lines',
      'n address lines → 2<sup>n</sup> locations; data bus width = bits per transfer',
      'Programmed I/O: CPU busy-waits; interrupt I/O: CPU free until the device signals; DMA: block moved without the CPU',
      'DMA uses bus request/grant (HOLD/HLDA); modes: cycle stealing and burst',
      'The CPU checks for interrupts at the end of each instruction cycle',
      'On interrupt: finish instruction → save PC + flags on stack → run ISR → restore → resume',
      'NMI cannot be disabled (power failure); divide by zero is an internal trap/exception',
      'Daisy chain: priority by position — the device nearest the CPU is highest',
    ],
    example: {
      q: 'A program is executing the one-word instruction at address 2000 when a keyboard interrupt arrives. The ISR starts at address 6000. List what the CPU does, in order.',
      steps: [
        'Finish executing the current instruction at 2000. The PC already holds 2001, the next instruction’s address.',
        'Acknowledge the interrupt and (usually) disable further maskable interrupts.',
        'Push the PC (2001) and the flag register onto the stack.',
        'Load the PC with the ISR address 6000 (from the vector table) and run the ISR — it reads the key code from the keyboard port.',
        'On the return-from-interrupt instruction, pop the flags and the PC (2001) and continue the program as if nothing had happened.',
      ],
      answer: 'Finish instruction → save PC (2001) and flags → jump to 6000 → run ISR → restore → resume at 2001',
    },
    shortcut:
      'Rank the three I/O methods by CPU involvement: programmed I/O (most) &gt; interrupt-driven &gt; DMA (least). Any question mentioning “large block”, “disk” or “without the CPU” → DMA.',
    traps: [
      'The CPU does not abandon an instruction half-way for an ordinary interrupt; it completes the current instruction first.',
      'DMA still uses one interrupt — at the end of the whole block, not for every word.',
    ],
    practice: [
      {
        q: 'Which part of the system bus is unidirectional?',
        options: ['Address bus', 'Data bus', 'Both the address and data buses', 'None of the buses'],
        answer: 0,
        why: 'Addresses flow only from the CPU (or bus master) outwards; data flows both ways.',
      },
      {
        q: 'Transferring a large block of data from disk to main memory with the least CPU involvement is done by:',
        options: ['Programmed I/O', 'DMA', 'Interrupt-driven I/O', 'Polling'],
        answer: 1,
        why: 'The DMA controller moves the whole block itself and interrupts the CPU once at the end.',
      },
      {
        q: 'An I/O device raises a maskable interrupt (interrupts are enabled) while the CPU is in the middle of an instruction. What does the CPU do?',
        options: [
          'Abandons the instruction and jumps to the ISR immediately',
          'Ignores the interrupt until the program ends',
          'Jumps to the ISR without saving anything, then restarts the program',
          'Completes the current instruction, saves the PC and status, then jumps to the ISR',
        ],
        answer: 3,
        why: 'Interrupts are checked at the end of the instruction cycle; the return address and flags are saved so the program can resume.',
      },
      {
        q: 'A device is polled 1000 times per second. Each poll takes 100 clock cycles, and the CPU runs at 100 MHz. What fraction of CPU time is spent polling?',
        options: ['1%', '10%', '0.1%', '0.01%'],
        answer: 2,
        why: 'Cycles used per second = 1000 × 100 = 10⁵. Fraction = 10⁵ ÷ 10⁸ = 0.001 = 0.1%.',
      },
    ],
  },

  // ───────────────────────────── Computer Language ─────────────────────────────
  {
    id: 'languages-translators',
    title: 'Assembly vs High-Level Languages; Compiler, Interpreter, Assembler, Linker, Loader',
    syllabus: 'Computer Language',
    analogy: {
      title: 'Translating a Marathi novel vs a live interpreter at a gram sabha',
      oneLine: 'Compiler = translate the whole book once; interpreter = translate sentence by sentence every time.',
      story: `Suppose a popular Marathi novel must reach English readers. One way: a translator works for months, translates the <b>whole book</b>, lists all the unclear sentences together, and prints an English edition. After that, readers read the English book as often as they like without the translator — that is a <b>compiler</b>. Another way: at a gram sabha with a foreign visitor, an <b>interpreter</b> stands beside the speaker and translates <b>sentence by sentence</b> as it is spoken; if one sentence makes no sense she stops right there — and if the speech is given again tomorrow, she must translate it all over again. A stenographer’s shorthand, where each squiggle stands for one exact word, is like <b>assembly language</b>, and typing it out word for word is the <b>assembler</b>. The binder who stitches chapters written by different authors and an appendix from a reference book into one volume is the <b>linker</b>, and the library peon who places the bound book on the reader’s desk is the <b>loader</b>.`,
      map: [
        ['Whole book translated once; printed edition read many times', 'Compiler: whole program → object code, then run without the compiler'],
        ['Live translator, sentence by sentence, stops at the first confusing sentence', 'Interpreter: statement by statement, stops at the first error, re-translates on every run'],
        ['Shorthand symbol per word, typed out by the steno', 'Assembly mnemonic per machine instruction, translated by an assembler'],
        ['Binder stitching chapters + reference appendix into one book', 'Linker: joins object files + library code into one executable'],
        ['Peon placing the book on the reader’s desk', 'Loader: puts the executable into memory and starts it'],
      ],
    },
    concept: [
      `Languages are grouped in generations. <b>Machine language</b> (1GL) is pure binary — the only thing a CPU executes; fast but machine-dependent and hard to write. <b>Assembly language</b> (2GL) replaces bit patterns with <b>mnemonics</b> (MOV, ADD, JMP) and labels; each statement usually becomes exactly one machine instruction, so it is still <b>machine-dependent</b> (not portable) but gives full control of the hardware — used in device drivers and embedded code. <b>High-level languages</b> (3GL: C, C++, Java, Python) are close to English and maths, <b>portable</b>, and one statement becomes many machine instructions. 4GLs such as SQL describe <i>what</i> you want, not how.`,
      `An <b>assembler</b> converts assembly into machine code (a two-pass assembler builds a symbol table of labels in pass 1). A <b>compiler</b> translates the whole high-level program into object code and lists all errors after scanning it; the result runs fast and needs no compiler at run time (C, C++). An <b>interpreter</b> translates and executes one statement at a time, stops at the first error, produces no object file and runs slower (Python, BASIC; Java bytecode is run by the JVM). A <b>cross-compiler</b> produces code for a different machine.`,
      `Building a C program goes: <b>preprocessor</b> (handles <code>#include</code> and <code>#define</code>, removes comments) → <b>compiler</b> (C to assembly) → <b>assembler</b> (to an object file, <code>.o</code>/<code>.obj</code>) → <b>linker</b> (joins object files with library code such as <code>printf</code>, resolves external references, produces the executable) → <b>loader</b> (copies the executable into memory, relocates it and starts it). Syntax errors are caught by the compiler; a function declared but never defined gives a <b>linker</b> error; dividing by zero is a <b>run-time</b> error.`,
    ],
    keyPoints: [
      '1GL machine, 2GL assembly, 3GL high-level (C, Java), 4GL (SQL), 5GL (Prolog, AI)',
      'Assembly: mnemonics, one-to-one with machine code, machine-dependent, needs an assembler',
      'Compiler: whole program at once, all errors listed, produces object code, faster execution',
      'Interpreter: line by line, stops at the first error, no object code, slower execution',
      'C build chain: preprocessor → compiler → assembler → linker → loader',
      'Linker resolves external references; loader allocates memory and relocates',
      'Syntax error → compile time; missing function body → link time; divide by zero → run time',
    ],
    example: {
      q: 'A file <code>marks.c</code> has three separate problems: (1) a missing semicolon; (2) a function <code>avg()</code> declared with a prototype and called, but its body is never written anywhere; (3) a division by a variable that becomes 0 for one student. At which stage does each problem show up?',
      steps: [
        'The preprocessor only copies headers and expands macros; it does not check C grammar.',
        '(1) A missing semicolon breaks the grammar → reported by the <b>compiler</b> (compile-time syntax error).',
        '(2) The prototype lets the call compile, but no object file contains the body of <code>avg()</code> → the <b>linker</b> reports “undefined reference to avg”.',
        '(3) Nothing is wrong in the text, so the program builds. When it runs, dividing by zero crashes it → <b>run-time</b> error.',
      ],
      answer: '(1) compiler, (2) linker, (3) run time',
    },
    shortcut:
      'Remember the C chain as “<b>P</b>lease <b>C</b>ompile <b>A</b>nd <b>L</b>ink, <b>L</b>ater”: Preprocessor, Compiler, Assembler, Linker, Loader.',
    traps: [
      'An interpreter produces no object/executable file; “faster execution” always goes with the compiler.',
      'Linker and loader are different: the linker makes the executable file; the loader puts it into memory when you run it.',
    ],
    practice: [
      {
        q: 'Which translator translates and executes a high-level program one statement at a time?',
        options: ['Compiler', 'Assembler', 'Linker', 'Interpreter'],
        answer: 3,
        why: 'An interpreter translates and runs each statement in turn, stopping at the first error.',
      },
      {
        q: 'Combining several object files and library routines into a single executable file is the job of the:',
        options: ['Linker', 'Loader', 'Assembler', 'Preprocessor'],
        answer: 0,
        why: 'The linker joins object modules and resolves references between them and to libraries.',
      },
      {
        q: 'Which statement about assembly language is FALSE?',
        options: [
          'It uses mnemonics such as MOV and ADD',
          'Each statement usually maps to one machine instruction',
          'A program written in it runs unchanged on any processor',
          'It is translated into machine code by an assembler',
        ],
        answer: 2,
        why: 'Assembly is tied to one processor’s instruction set, so it is not portable.',
      },
      {
        q: 'The correct order of stages when a C program is built and run is:',
        options: [
          'Compiler → Preprocessor → Linker → Assembler → Loader',
          'Preprocessor → Compiler → Assembler → Linker → Loader',
          'Preprocessor → Assembler → Compiler → Loader → Linker',
          'Compiler → Assembler → Preprocessor → Loader → Linker',
        ],
        answer: 1,
        why: 'Macros and headers are handled first, then C → assembly → object code, then linking, then loading into memory.',
      },
    ],
  },

  {
    id: 'c-basics',
    title: 'C Basics: Data Types, Operators, Precedence, Type Conversion, printf',
    syllabus: 'Computer Language',
    analogy: {
      title: 'Milk cans at the village dairy collection centre',
      oneLine: 'Each data type is a container of fixed size; pouring into a smaller one loses milk.',
      story: `At the village milk collection centre, milk is measured into containers of fixed size: a 250 ml mug, a 1-litre can, a 40-litre drum. Each container has a <b>label</b> saying what it holds. Pour the mug into a big can and nothing spills — that is safe <b>widening</b> (char → int → double). Pour a big can into a small mug and milk overflows — <b>narrowing</b>, where data is lost. Feed 2.75 litres to a counter that records only whole litres and it writes 2: the fraction is simply dropped, just as C drops the fraction when a <code>double</code> is stored in an <code>int</code>. If the clerk reads buffalo milk with the cow-milk fat chart, the reading is nonsense — like printing a <code>float</code> with <code>%d</code>. And the clerk always works in a fixed order — weigh, test fat, then multiply by the rate — just as C fixes the order of operators by <b>precedence</b>.`,
      map: [
        ['Mug, can, drum of fixed sizes', 'Data types of fixed size: char (1 B), int (4 B), double (8 B)'],
        ['Mug poured into a big can — nothing lost', 'Implicit widening / promotion (int → double)'],
        ['Whole-litre counter records 2.75 L as 2', 'double → int conversion truncates the fraction'],
        ['Buffalo milk read with the cow-milk chart', 'Wrong printf format specifier prints garbage'],
        ['Fixed order: weigh, test fat, multiply by rate', 'Operator precedence and associativity'],
      ],
    },
    concept: [
      `C’s basic types (assume a typical system): <code>char</code> 1 byte, <code>short</code> 2, <code>int</code> 4, <code>long</code> 4 or 8, <code>float</code> 4, <code>double</code> 8. A signed n-bit integer ranges from −2<sup>n−1</sup> to 2<sup>n−1</sup> − 1 (a 4-byte int is about ±2.1 × 10⁹); <code>unsigned</code> ranges from 0 to 2<sup>n</sup> − 1. <code>sizeof</code> is an operator that gives a size in bytes. Integer division drops the fraction (<code>7 / 2</code> is 3), and <code>%</code> works only on integers, with the result taking the sign of the left operand (<code>-7 % 2</code> is −1).`,
      `Operators from highest to lowest precedence: postfix <code>()</code> <code>[]</code> <code>++</code> <code>--</code> → unary <code>!</code> <code>~</code> <code>++</code> <code>--</code> <code>-</code> <code>(type)</code> <code>sizeof</code> → <code>* / %</code> → <code>+ -</code> → shifts <code>&lt;&lt; &gt;&gt;</code> → relational <code>&lt; &lt;= &gt; &gt;=</code> → <code>== !=</code> → <code>&amp;</code> → <code>^</code> → <code>|</code> → <code>&amp;&amp;</code> → <code>||</code> → <code>?:</code> → assignment → comma. Operators of equal precedence group left to right, except unary operators, <code>?:</code> and assignment, which group right to left. <code>&amp;&amp;</code> and <code>||</code> <b>short-circuit</b>: the right side is not evaluated if the left side already decides the answer.`,
      `In mixed expressions C converts the smaller type to the larger (<b>implicit conversion</b>: char/short → int → long → float → double); assigning to a smaller type truncates. A <b>cast</b> forces a conversion: <code>(float)7 / 2</code> is 3.5, but <code>(float)(7 / 2)</code> is 3.0 because the division already happened in int. Common <code>printf</code> formats: <code>%d</code>/<code>%i</code> int, <code>%u</code> unsigned, <code>%ld</code> long, <code>%f</code> float/double (6 decimals by default), <code>%e</code> exponent form, <code>%c</code> char, <code>%s</code> string, <code>%x</code> hex, <code>%o</code> octal, <code>%p</code> pointer, <code>%%</code> a percent sign; <code>%5d</code> sets width 5, <code>%-5d</code> left-justifies, <code>%.2f</code> prints 2 decimals.`,
    ],
    keyPoints: [
      'Assume char 1, short 2, int 4, float 4, double 8 bytes unless told otherwise',
      '<code>7 / 2</code> = 3; <code>7 % 2</code> = 1; <code>-7 / 2</code> = −3; <code>-7 % 2</code> = −1 (sign of the left operand)',
      'Precedence: unary &gt; * / % &gt; + − &gt; &lt;&lt; &gt;&gt; &gt; relational &gt; == != &gt; &amp; &gt; ^ &gt; | &gt; &amp;&amp; &gt; || &gt; ?: &gt; = &gt; ,',
      'Right-to-left grouping: unary operators, <code>?:</code>, assignment (<code>a = b = 5</code>)',
      'Short-circuit: in <code>a &amp;&amp; b</code>, b is skipped if a is 0; in <code>a || b</code>, b is skipped if a is non-zero',
      '<code>x &lt;&lt; n</code> = x × 2<sup>n</sup>; <code>x &gt;&gt; n</code> = x ÷ 2<sup>n</sup> (for non-negative x)',
      'Promotion: char → int → long → float → double; a cast applies only to the operand right after it',
      'printf: %d %u %f %c %s %x %o %e %p %%; %.2f = 2 decimals; %5d = width 5',
    ],
    example: {
      q: 'What does this program print?',
      code: `#include <stdio.h>
int main(void) {
    int a = 7, b = 2;
    float f = a / b;
    float g = (float)a / b;
    printf("%.2f %.2f %d %d\\n", f, g, a % b, -a % b);
    return 0;
}`,
      steps: [
        '<code>a / b</code> is int ÷ int = 3 (fraction dropped). Only then is 3 stored in the float, so f = 3.0.',
        '<code>(float)a</code> gives 7.0, and 7.0 / 2 is a float division = 3.5, so g = 3.5.',
        '<code>a % b</code> = 7 % 2 = 1.',
        '<code>-a % b</code>: unary minus binds tighter than %, so it is (−7) % 2 = −1 (sign follows the left operand).',
        '<code>%.2f</code> prints two decimal places.',
      ],
      answer: '3.00 3.50 1 -1',
    },
    shortcut:
      'For precedence questions, put in the brackets yourself first, in this order: unary, then * / %, then + −, then shifts, then comparisons, then bitwise &amp; ^ |, then &amp;&amp; ||, then ?:, then =. Mnemonic: “<b>U</b>ncle <b>A</b>rjun <b>S</b>aw <b>R</b>ani <b>B</b>uying <b>L</b>ots of <b>T</b>ea <b>A</b>gain” — Unary, Arithmetic, Shift, Relational, Bitwise, Logical, Ternary, Assignment.',
    traps: [
      '<code>float f = 7 / 2;</code> stores 3.0, not 3.5 — the division is done in int before the conversion.',
      'Bitwise <code>&amp;</code> has <b>lower</b> precedence than <code>==</code>: <code>x &amp; 1 == 0</code> means <code>x &amp; (1 == 0)</code>, which is always 0.',
      'Printing a float with <code>%d</code> (or an int with <code>%f</code>) is undefined behaviour and prints garbage, not a converted value.',
    ],
    practice: [
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int x = 5 + 3 * 2 - 8 / 4 % 3;
    printf("%d", x);
    return 0;
}`,
        options: ['3', '9', '11', '7'],
        answer: 1,
        why: '3 * 2 = 6. Then 8 / 4 % 3 groups left to right: (8 / 4) % 3 = 2 % 3 = 2. So 5 + 6 − 2 = 9.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int a = 12, b = 10;
    printf("%d %d %d %d", a & b, a | b, a ^ b, a << 2);
    return 0;
}`,
        options: ['8 14 6 24', '14 8 6 48', '8 14 6 48', '8 6 14 48'],
        answer: 2,
        why: '12 = 1100, 10 = 1010. AND = 1000 = 8; OR = 1110 = 14; XOR = 0110 = 6; 12 &lt;&lt; 2 = 12 × 4 = 48.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int a = 0, b = 5;
    if (a && ++b)
        printf("yes ");
    printf("%d %d", a, b);
    return 0;
}`,
        options: ['0 5', 'yes 0 6', '0 6', 'yes 0 5'],
        answer: 0,
        why: 'a is 0, so <code>&amp;&amp;</code> short-circuits: <code>++b</code> never runs and the if is false. b stays 5.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    char c = 'A' + 2;
    printf("%c %d %x %o", c, c, c, c);
    return 0;
}`,
        options: ['C 67 67 67', 'C 67 41 101', 'E 69 45 105', 'C 67 43 103'],
        answer: 3,
        why: '‘A’ + 2 = 67 = ‘C’. 67 in hex is 43 (4 × 16 + 3) and in octal is 103 (1 × 64 + 0 × 8 + 3).',
      },
    ],
  },

  {
    id: 'c-control-flow',
    title: 'C Control Flow and Loops (Output Prediction)',
    syllabus: 'Computer Language',
    analogy: {
      title: 'A PMPML city bus on its route',
      oneLine: 'Each stop is one loop pass; an empty stop is continue; a breakdown is break; a passenger riding on is switch fall-through.',
      story: `Think of a PMPML city bus in Pune running its route from stop 1 to stop 20. Before leaving each stop the conductor checks one condition: “Have we reached the last stop?” If not, the bus moves on — that check-then-repeat is a <b>loop</b>, and the stop number is the loop counter. At a stop where nobody is waiting and nobody wants to get down, the bus does not halt; it skips the rest of that stop’s work and goes on to the next stop — that is <b>continue</b>. If the bus breaks down at stop 12, the route ends there and everyone gets down — that is <b>break</b>. Now think of a passenger: someone who boards at stop 5 keeps riding through stops 6, 7, 8 … until they decide to get down. That is exactly a <b>switch</b>: control jumps in at the matching <code>case</code> and keeps running through the following cases until it meets a <code>break</code>.`,
      map: [
        ['Stop number 1, 2, 3 …', 'Loop counter (i)'],
        ['Conductor checks “last stop?” before moving on', 'Loop condition tested on every pass'],
        ['Empty stop — bus skips it and goes to the next', '<code>continue</code>: skip the rest of this pass'],
        ['Breakdown — the route ends at once', '<code>break</code>: leave the loop immediately'],
        ['Passenger boards at stop 5 and rides on until getting down', '<code>switch</code> enters at the matching case and falls through until <code>break</code>'],
      ],
    },
    concept: [
      `<b>if / else</b> chooses between paths; any non-zero value counts as true. An <code>else</code> always pairs with the <b>nearest unmatched</b> <code>if</code> (the dangling-else rule), whatever the indentation. <code>if (x = 0)</code> is an assignment, not a comparison: it sets x to 0 and the condition is false. <b>switch</b> works only on integer/char values; control jumps to the matching <code>case</code> label and <b>falls through</b> every following case until a <code>break</code> or the end. <code>default</code> runs when no case matches, wherever it is written.`,
      `C has three loops. <code>for (init; condition; update)</code> and <code>while (condition)</code> test <b>before</b> each pass, so they may run zero times. <code>do { … } while (condition);</code> tests <b>after</b> each pass, so it always runs at least once. In a <code>for</code> loop, <code>continue</code> jumps to the update part (e.g. <code>i++</code>) and then the test; <code>break</code> leaves only the innermost loop or switch.`,
      `For output prediction, never guess: make a small table with one column per variable and one row per pass, and update it line by line. Watch post-increment/decrement inside conditions: in <code>while (n-- &gt; 2)</code> the old value of n is compared and then n is decreased — even on the final, false test. A stray semicolon after <code>for (…);</code> or <code>while (…);</code> gives the loop an empty body.`,
    ],
    keyPoints: [
      'Non-zero = true, 0 = false; <code>if (x = 0)</code> assigns and is always false',
      'else pairs with the nearest unmatched if',
      'switch: integer/char only; falls through until break; case labels must be constants',
      'for/while: test first (0 or more passes); do-while: test last (at least 1 pass)',
      'continue → next pass (in a for loop the update runs first); break → leave the innermost loop/switch',
      'Nested loops with i = 1..n and j = i..n run n(n + 1)/2 times',
      '<code>for (i = 0; i &lt; 5; i++);</code> — the semicolon is an empty body; i ends at 5',
    ],
    example: {
      q: 'What does this program print?',
      code: `#include <stdio.h>
int main(void) {
    int i, j, count = 0;
    for (i = 1; i <= 4; i++)
        for (j = i; j <= 4; j++)
            count++;
    printf("%d", count);
    return 0;
}`,
      steps: [
        'i = 1: j runs 1, 2, 3, 4 → 4 times.',
        'i = 2: j runs 2, 3, 4 → 3 times.',
        'i = 3: j runs 3, 4 → 2 times. i = 4: j runs 4 → 1 time.',
        'Total = 4 + 3 + 2 + 1 = 10, which is n(n + 1)/2 with n = 4.',
      ],
      answer: '10',
    },
    shortcut:
      'For loops with <code>continue</code>/<code>break</code>, write the i values in a row, strike out the ones skipped by continue and everything from the break onwards, then add what is left. For a switch, find the entry case and read downwards until the first break.',
    traps: [
      'A <code>switch</code> without <code>break</code> runs every case below the matching one, including <code>default</code> if it is below.',
      'In <code>while (n-- &gt; 2)</code>, n is decreased one extra time on the final, failed test.',
      '<code>for (i = 0; i &lt; 5; i++);</code> followed by <code>printf("%d", i);</code> prints 5 once, not 0 to 4 — the semicolon ends the loop.',
    ],
    practice: [
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int x = 2;
    switch (x) {
        case 1: printf("one ");
        case 2: printf("two ");
        case 3: printf("three ");
                break;
        default: printf("other ");
    }
    return 0;
}`,
        options: ['two', 'two three other', 'two three', 'one two three'],
        answer: 2,
        why: 'Control enters at case 2, falls through into case 3 (no break after “two”), then stops at the break before default.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int n = 5;
    while (n-- > 2)
        printf("%d ", n);
    printf("| %d", n);
    return 0;
}`,
        options: ['4 3 2 | 2', '4 3 2 | 1', '5 4 3 | 2', '4 3 | 1'],
        answer: 1,
        why: 'Tests: 5 &gt; 2 (n → 4, print 4), 4 &gt; 2 (n → 3, print 3), 3 &gt; 2 (n → 2, print 2), 2 &gt; 2 false but n still → 1.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int i, sum = 0;
    for (i = 1; i <= 10; i++) {
        if (i % 3 == 0) continue;
        if (i > 7) break;
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
        options: ['37', '22', '15', '19'],
        answer: 3,
        why: 'i = 3 and 6 are skipped; at i = 8 the loop breaks. Sum = 1 + 2 + 4 + 5 + 7 = 19. (37 is the answer if you ignore the break.)',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int x = 5;
    if (x = 0)
        printf("zero");
    else
        printf("nonzero %d", x);
    return 0;
}`,
        options: ['nonzero 0', 'zero', 'nonzero 5', 'Compilation error'],
        answer: 0,
        why: '<code>x = 0</code> assigns 0 to x; the value of the condition is 0 (false), so the else part prints x, which is now 0.',
      },
    ],
  },

  {
    id: 'c-arrays-pointers-functions',
    title: 'C Arrays, Strings, Pointers and Functions (Recursion, Call by Value/Reference)',
    syllabus: 'Computer Language',
    analogy: {
      title: 'Rooms in a Mumbai chawl',
      oneLine: 'An array is a row of equal rooms; a pointer is a chit with a room number on it.',
      story: `In an old Mumbai chawl, rooms run along one corridor with consecutive numbers — 101, 102, 103 … — all the same size. That is an <b>array</b>: equal boxes side by side, and the chawl’s name tells you where the first room is. A <b>pointer</b> is a chit with a room number written on it. Reading the chit is not visiting the room; you must walk to the room to see who lives there — that is <b>dereferencing</b> (<code>*p</code>). “Two rooms ahead” of 101 is 103, whatever the size of a room, just as <code>p + 2</code> moves two <i>elements</i>, not two bytes. Now, when the society secretary wants to check your electricity bill, you can hand over a <b>photocopy</b>: he may scribble on it, and your original stays clean — <b>call by value</b>. Or you can give him your <b>room number</b>, and he can walk in and repaint your wall — <b>call by reference</b> (passing an address).`,
      map: [
        ['Rooms 101, 102, 103 … of equal size in a row', 'Array elements in contiguous memory'],
        ['Chit with a room number written on it', 'Pointer (holds an address)'],
        ['Walking to the room to see who lives there', 'Dereferencing: <code>*p</code>'],
        ['“Two rooms ahead”', 'Pointer arithmetic: <code>p + 2</code> skips 2 elements'],
        ['Photocopy vs your room number given to the secretary', 'Call by value vs call by reference (passing <code>&amp;x</code>)'],
      ],
    },
    concept: [
      `An <b>array</b> stores elements of one type in consecutive memory. Indexes start at 0, so <code>int a[5]</code> has <code>a[0]</code> to <code>a[4]</code>, and C does no bounds checking. In an expression the array name becomes a pointer to the first element, and <code>a[i]</code> means exactly <code>*(a + i)</code>; the address of a[i] = base + i × (size of one element). A <b>string</b> is a <code>char</code> array ending in the null character <code>'\\0'</code>: <code>strlen</code> counts the characters before it, while <code>sizeof</code> on the array counts the whole array including the <code>'\\0'</code>.`,
      `A <b>pointer</b> holds an address. <code>&amp;x</code> gives the address of x; <code>*p</code> gives the value stored at the address in p. Adding 1 to a pointer moves it by one element (4 bytes for an <code>int *</code>, 1 byte for a <code>char *</code>). C passes every argument <b>by value</b>: the function receives a copy, so changing the parameter does not change the caller’s variable. To let a function change a variable, pass its address and work through <code>*</code> — this is how C does <b>call by reference</b> (e.g. <code>swap(&amp;a, &amp;b)</code>, <code>scanf("%d", &amp;n)</code>). Arrays are passed as a pointer to the first element, so a function can change the caller’s array.`,
      `A <b>recursive</b> function calls itself. It needs a <b>base case</b> that stops the calls, and every call must move closer to it. Each call gets its own copy of local variables on the stack; statements written <i>after</i> the recursive call run while the calls return, in reverse order. A <code>static</code> local variable is created once and keeps its value between calls.`,
    ],
    keyPoints: [
      '<code>a[i]</code> ≡ <code>*(a + i)</code> ≡ <code>i[a]</code>; address of a[i] = base + i × sizeof(element)',
      '2-D array (row-major): address of a[i][j] = base + (i × columns + j) × size',
      '<code>char s[] = "CET";</code> → sizeof is 4 (includes <code>\'\\0\'</code>), strlen is 3',
      '<code>&amp;</code> = address of; <code>*</code> = value at; <code>p + 1</code> moves one element',
      'C passes by value; pass addresses (pointers) to change the caller’s variables',
      'Arrays are passed as pointers, so changes made inside the function are visible outside',
      'Recursion: base case + smaller sub-problem; code after the recursive call runs in reverse order',
      'A static local variable is initialized once and keeps its value between calls',
    ],
    example: {
      q: 'What does this program print?',
      code: `#include <stdio.h>
void swapVal(int x, int y) { int t = x; x = y; y = t; }
void swapPtr(int *x, int *y) { int t = *x; *x = *y; *y = t; }
int main(void) {
    int a = 3, b = 8;
    swapVal(a, b);
    printf("%d %d\\n", a, b);
    swapPtr(&a, &b);
    printf("%d %d\\n", a, b);
    return 0;
}`,
      steps: [
        '<code>swapVal(a, b)</code> receives copies x = 3, y = 8 and swaps only the copies. a and b in main are untouched → prints <code>3 8</code>.',
        '<code>swapPtr(&amp;a, &amp;b)</code> receives the addresses. <code>*x</code> is a itself and <code>*y</code> is b itself, so the swap changes main’s variables → prints <code>8 3</code>.',
      ],
      answer: '3 8 on the first line, then 8 3',
    },
    shortcut:
      'For pointer-and-array questions, draw the array as boxes with indexes under them and an arrow for p; read every <code>*(p + k)</code> or <code>p[k]</code> as “k boxes to the right of the arrow”. For recursion that prints after the call, the output appears in reverse order of the calls — like remainders read bottom-up in binary conversion.',
    traps: [
      '<code>sizeof(s)</code> for <code>char s[] = "CET2026"</code> is 8, not 7 — the hidden <code>\'\\0\'</code> counts. (Inside a function where s is a pointer parameter, sizeof gives the pointer’s size instead.)',
      'Changing a parameter inside a function never changes the caller’s variable unless you write through a pointer (<code>*p = …</code>).',
    ],
    practice: [
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
int main(void) {
    int a[] = {10, 20, 30, 40, 50};
    int *p = a + 1;
    printf("%d %d %d", *p, *(p + 2), p[1]);
    return 0;
}`,
        options: ['20 40 30', '20 30 30', '10 30 20', '20 40 40'],
        answer: 0,
        why: 'p points to a[1] = 20. <code>*(p + 2)</code> is a[3] = 40. <code>p[1]</code> is <code>*(p + 1)</code> = a[2] = 30.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
#include <string.h>
int main(void) {
    char s[] = "CET2026";
    printf("%zu %zu", sizeof(s), strlen(s));
    return 0;
}`,
        options: ['7 7', '7 8', '8 8', '8 7'],
        answer: 3,
        why: 'The array holds 7 characters plus <code>\'\\0\'</code>, so sizeof is 8; strlen stops before <code>\'\\0\'</code> and gives 7.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
void show(int n) {
    if (n == 0) return;
    show(n / 2);
    printf("%d", n % 2);
}
int main(void) {
    show(13);
    return 0;
}`,
        options: ['1011', '1101', '13', '0110'],
        answer: 1,
        why: 'Calls go 13 → 6 → 3 → 1 → 0; the prints run on the way back: 1 % 2, 3 % 2, 6 % 2, 13 % 2 = 1, 1, 0, 1. That is 13 in binary.',
      },
      {
        q: 'What is the output of this program?',
        code: `#include <stdio.h>
void change(int x, int *y) {
    x = x * 2;
    *y = *y * 2;
}
int main(void) {
    int a = 5, b = 5;
    change(a, &b);
    printf("%d %d", a, b);
    return 0;
}`,
        options: ['5 5', '10 10', '5 10', '10 5'],
        answer: 2,
        why: 'a is passed by value, so only the copy x doubles. b’s address is passed, so <code>*y = *y * 2</code> doubles b itself.',
      },
    ],
  },

  // ───────────────────────────── Operating System ─────────────────────────────
  {
    id: 'os-basics',
    title: 'OS Basics: Processes, CPU Scheduling, Paging, Deadlock, File Systems',
    syllabus: 'Operating System basics',
    analogy: {
      title: 'The one-machine xerox shop near college',
      oneLine: 'One xerox machine, many students: who goes next is CPU scheduling.',
      story: `Near every college there is a xerox shop with one machine and a crowd of students. The shopkeeper is the <b>scheduler</b> and the machine is the <b>CPU</b>. If he serves strictly in order of arrival, one student with a 200-page thesis at the front makes ten students with 2 pages each wait a long time (<b>FCFS</b> and its convoy effect). If he first serves whoever has the fewest pages, the <i>average</i> waiting time is the least possible (<b>SJF</b>) — but the thesis student may wait for ever if short jobs keep arriving (<b>starvation</b>). If he copies 10 pages for each person in turn and sends unfinished jobs to the back of the line, everyone sees progress (<b>Round Robin</b>, time quantum = 10 pages). And if two students each hold one book and each refuses to let go until they get the other’s book, both wait for ever — <b>deadlock</b>.`,
      map: [
        ['One xerox machine, many students', 'One CPU, many processes in the ready queue'],
        ['Number of pages to copy', 'CPU burst time'],
        ['Time spent standing around, not being served', 'Waiting time = turnaround − burst'],
        ['10 pages each, then back of the line', 'Round Robin with a time quantum'],
        ['Two students each holding the book the other needs', 'Deadlock: hold-and-wait + circular wait'],
      ],
    },
    concept: [
      `An <b>operating system</b> manages the hardware and provides services to programs: process management, memory management, file management, device (I/O) management, security, and a user interface (shell or GUI). The <b>kernel</b> is its core, and programs ask it for services through <b>system calls</b>. Types: batch, multiprogramming, time-sharing (multitasking), real-time and distributed. A <b>process</b> is a program in execution, described by its <b>PCB</b> (Process Control Block). It moves through the states <b>new → ready → running → waiting (blocked) → ready … → terminated</b>; switching the CPU from one process to another is a <b>context switch</b>.`,
      `<b>CPU scheduling</b> picks the next ready process. <b>FCFS</b>: in arrival order, non-preemptive, suffers the convoy effect. <b>SJF</b>: shortest burst first; gives the minimum average waiting time; its preemptive form is <b>SRTF</b>; long jobs may starve. <b>Priority</b>: highest priority first; starvation is cured by <b>aging</b>. <b>Round Robin</b>: each process gets a fixed <b>time quantum</b>, then goes to the back of the queue; designed for time-sharing. For each process, <b>turnaround time = completion − arrival</b> and <b>waiting time = turnaround − burst</b>.`,
      `<b>Paging</b> divides a process into fixed-size <b>pages</b> and memory into equal-size <b>frames</b>; a page table maps pages to frames. It removes external fragmentation (some internal fragmentation remains in the last page). A logical address = page number + offset, and the number of pages = 2<sup>address bits</sup> ÷ page size. <b>Virtual memory</b> keeps only the needed pages in RAM; a missing page causes a <b>page fault</b>; constant faulting is <b>thrashing</b>; replacement policies are FIFO (can show Belady’s anomaly), LRU and Optimal. <b>Deadlock</b> needs all four conditions together — <b>mutual exclusion, hold and wait, no preemption, circular wait</b>; the Banker’s algorithm avoids it. <b>File systems</b> organise files in directories (single-level, two-level, tree) and allocate disk blocks contiguously, as a linked list, or through an index block (FAT, NTFS, ext4).`,
    ],
    keyPoints: [
      'TAT = completion time − arrival time; WT = TAT − burst time',
      'FCFS: non-preemptive, convoy effect; SJF: minimum average WT, may starve long jobs',
      'SRTF = preemptive SJF; starvation in priority scheduling is fixed by aging',
      'Round Robin: preemptive with a time quantum; a very large quantum makes it behave like FCFS',
      'Process states: new, ready, running, waiting, terminated; the PCB stores each process’s details',
      'Paging: page size = frame size; page-table entries = 2<sup>logical address bits</sup> ÷ page size',
      'Deadlock conditions: mutual exclusion, hold and wait, no preemption, circular wait (all four needed)',
      'FIFO page replacement can show Belady’s anomaly (more frames, yet more faults)',
    ],
    example: {
      q: 'Four processes arrive at time 0 with burst times P1 = 8, P2 = 4, P3 = 2, P4 = 6 (ms). Find the average waiting time under FCFS and under SJF.',
      steps: [
        'FCFS order P1, P2, P3, P4. Gantt chart: P1 0–8, P2 8–12, P3 12–14, P4 14–20.',
        'All arrive at 0, so waiting time = start time: 0, 8, 12, 14 → average = 34 ÷ 4 = 8.5 ms.',
        'SJF order by burst: P3 (2), P2 (4), P4 (6), P1 (8). Gantt chart: P3 0–2, P2 2–6, P4 6–12, P1 12–20.',
        'SJF waiting times: P1 = 12, P2 = 2, P3 = 0, P4 = 6 → average = 20 ÷ 4 = 5 ms.',
      ],
      answer: 'FCFS 8.5 ms; SJF 5 ms',
    },
    shortcut:
      'When all processes arrive at time 0 and the policy is non-preemptive, each waiting time is simply that process’s start time in the Gantt chart: add the start times and divide. With different arrival times, subtract each arrival time from its start time.',
    traps: [
      'With different arrival times or preemption (Round Robin, SRTF), waiting time is not just the start time; use WT = completion − arrival − burst.',
      'In non-preemptive SJF with arrival times, only processes that have <b>already arrived</b> can be chosen.',
      'Deadlock needs <b>all four</b> conditions. “Preemption” is not one of them — “no preemption” is.',
    ],
    practice: [
      {
        q: 'Three processes arrive at time 0 in the order P1, P2, P3 with burst times 5, 3 and 1 ms. Using Round Robin with a time quantum of 2 ms, the average waiting time is:',
        options: ['3.67 ms', '5.00 ms', '4.00 ms', '4.33 ms'],
        answer: 3,
        why: 'Gantt: P1 0–2, P2 2–4, P3 4–5, P1 5–7, P2 7–8, P1 8–9. WT = completion − burst: P1 = 9 − 5 = 4, P2 = 8 − 3 = 5, P3 = 5 − 1 = 4. Average = 13 ÷ 3 ≈ 4.33 ms.',
      },
      {
        q: 'Processes with (arrival, burst) times P1 (0, 7), P2 (2, 4), P3 (4, 1), P4 (5, 4) are scheduled with non-preemptive SJF. The average waiting time is:',
        options: ['3 ms', '4.75 ms', '4 ms', '5.5 ms'],
        answer: 2,
        why: 'Only P1 is present at 0, so P1 0–7. Then shortest first: P3 7–8, P2 8–12, P4 12–16. WT: P1 0, P2 8 − 2 = 6, P3 7 − 4 = 3, P4 12 − 5 = 7. Average = 16 ÷ 4 = 4 ms. (4.75 ms is FCFS.)',
      },
      {
        q: 'Which of the following is NOT one of the four necessary conditions for deadlock?',
        options: ['Preemption of resources', 'Mutual exclusion', 'Hold and wait', 'Circular wait'],
        answer: 0,
        why: 'The condition is <i>no</i> preemption. If resources can be taken away, deadlock cannot form.',
      },
      {
        q: 'A system uses 32-bit logical addresses and a page size of 4 KB. How many entries does a single-level page table have?',
        options: ['2<sup>12</sup>', '2<sup>20</sup>', '2<sup>32</sup>', '2<sup>22</sup>'],
        answer: 1,
        why: '4 KB = 2<sup>12</sup> bytes, so 12 bits are the offset. Pages = 2<sup>32</sup> ÷ 2<sup>12</sup> = 2<sup>20</sup> (about 10 lakh entries).',
      },
    ],
  },
];

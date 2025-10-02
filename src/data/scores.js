// src/data/scores.js
const scores = [
  { // Summer Night
    id: 0,
    title: "Summer Night",
    image: "/images/scores/01_Summer_Night.jpg", // Bild in public/images/ ablegen
    date: "2020-05-31", // Erscheinungsdatum
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "My first Composition for Solo Piano. It only consists of 4 chords, "+
      "which reflects the music theory knowledge I had at that time.\n\n"+
      "The piece is quite simple, but with its beautiful melodies and the variation "+
      "in the left hand, it remains a fun piece to play.",
    youtubeId: "hu3SbdbRzps",
  },
  { // Tide
    id: 1,
    title: "Tide",
    image: "/images/scores/02_Tide.jpg",
    date: "2020-07-28",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "\"Tide\", like \"Summer Night\" is one of my earliest compositions. "+
      "The many rises and falls within the piece depict its natural ebb and flow.",
    youtubeId: "6YIV64nqTMM",
  },
  {// Ad Hoc
    id: 2,
    title: "Ad Hoc",
    image: "/images/scores/03_Ad_Hoc.jpg",
    date: "2021-05-04",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "A short yet vibrant solo piano piece. I spontaneously came up with it while "+
      "practicing some scales, which is also where its name originates.",
    youtubeId: "0v3QYaX8CJs",
  },
  { // Path of Joy
    id: 3,
    title: "Path of Joy",
    image: "/images/scores/04_Path_of_Joy.jpg",
    date: "2021-07-18",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "\"Path of Joy\" lives up to its name as a delightful solo piano composition full of joy.\n\n"+
      "When I play it, I always used to envision a heroic character at the beginning of their journey, "+
      "filled with excitement for the adventures that lie ahead.",
    youtubeId: "MHLOlmtNIsQ",
  },
  { // Cold River
    id: 4,
    title: "Cold River",
    image: "/images/scores/05_Cold_River.jpg",
    date: "2022-07-05",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "Cold River is a calm and almost melancholic piano piece, but with a delightful middle section.\n\n"+
      "In this composition, I explored the concept of transitioning between the minor key and the parallel major key "+
      "while crafting seamless shifts between its sections.",
    youtubeId: "KXkrxqxKplA",
  },
  { // Arete
    id: 5,
    title: "Arete",
    image: "/images/scores/06_Arete.jpg",
    date: "2024-02-12",
    type: "String Orchestra",
    category: "Orchestral",
    instruments: ["Violins 1", "Violins 2", "Violas", "Celli", "Basses"],
    description:
      "My first composition for a string ensemble. I learned a lot during the process, especially in "+
      "instrumentation and writing for string instruments. \n\nI also used a lot of new chords and "+
      "experimented with some unique harmonic progressions that I came up with.",
    youtubeId: "9lGCMCEjVgU",
  },
  { // Firefly Waltz
    id: 6,
    title: "Piano Trio no 1 - Firefly Waltz",
    image: "/images/scores/07_Piano_Trio_no1-Firefly_Waltz.jpg",
    date: "2024-02-28",
    type: "Trio",
    category: "Chamber",
    instruments: ["Oboe", "Cello", "Piano"],
    description:
      "\"Firefly Waltz\" is the first of three trios I composed for oboe, cello and piano.\n\n"+
      "It is a fun little waltz that reminded me of a butterly fluttering around, especially highlighted "+
      "by the oboe melody at the end",
    youtubeId: "dzm9w1iOJgM",
  },
  { // Acceptance
    id: 7,
    title: "Piano Trio no 2 - Acceptance",
    image: "/images/scores/08_Piano_Trio_no2-Acceptance.jpg",
    date: "2024-04-09",
    type: "Trio",
    category: "Chamber",
    instruments: ["Oboe", "Cello", "Piano"],
    description:
      "\"Acceptance\" is the second of my three piano trios. It originally came from a video project "+
      "I did for some students at my former school. \n\nI really liked the simple and calm melody and "+
      "chord progression I came up with, so I decided to expand it into my second trio.",
    youtubeId: "LpWDLy0Ciqc",
  },
  { // A Hint of Spring
    id: 8,
    title: "Piano Trio no 3 - A Hint of Spring",
    image: "/images/scores/09_Piano_Trio_no3-A_Hint_of_Spring.jpg",
    date: "2024-05-03",
    type: "Trio",
    category: "Chamber",
    instruments: ["Oboe", "Cello", "Piano"],
    description:
      "This is the third of my three and is called \"A Hint of Spring\".\n\n It begins in D major, then "+
      "modulates in the second part to G minor, building up to a dramatic climax before returning to D major.\n\n"+
      "I particularly enjoy the chord progressions in this piece, especially the modulation from D major "+
      "to G minor and back again.",
    youtubeId: "uvr446E7O64",
  },
  { // UpRising
    id: 9,
    title: "UpRising",
    image: "/images/scores/10_UpRising.jpg",
    date: "2024-05-27",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "UpRising is a short piece that steadily rises not only in dynamics but also in its tonality. \n\n"+
      "It starts in A flat major, goes up a whole step to b flat major and then goes up again but a "+
      "half step to b major until landing on an A flat major chord to end cycle.",
    youtubeId: "sXASHaC2L1E",
  },
  { // Falling Behind
    id: 10,
    title: "Falling Behind",
    image: "/images/scores/11_Falling_Behind.jpg",
    date: "2024-06-17",
    type: "Woodwind Quintet",
    category: "Chamber",
    instruments: ["Flute", "Oboe", "Clarinet Bb", "Horn in F", "Bassoon"],
    description:
      "I wanted to learn more about woodwind instruments, so I decided to composed a small piece for a woodwind quintet.\n\n "+
      "Harmonically I was inspired by various Ghibli music, especially for the beginning section. \n\n"+
      "\"Falling Behind\" begins rather bright but later turns into a more melancholic piece in the second section.",
    youtubeId: "tSZtlr0V7oM",
  },
  { // A Forgotten Story
    id: 11,
    title: "A Forgotten Story",
    image: "/images/scores/12_A_Forgotten_Story.jpg",
    date: "2024-12-15",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    description:
      "This was the first piece I composed after moving to Vienna to study media composition. At that "+
      "time, I drew a lot of inspiration from japanese music harmony.\n\nI also really enjoy playing this piece. "+
      "It is probably one of my favourite composision so far.",
    youtubeId: "4qBXmvsfdHw",
  },
  { // Snow Will Come
    id: 12,
    title: "Snow Will Come",
    image: "/images/scores/13_Snow_Will_Come.jpg",
    date: "2025-02-20",
    type: "Orchestral",
    category: "Orchestral",
    instruments: ["Solo Violin", "Piano", "Violin 1", "Violin 2", "Violas", "Celli", "Basses"],
    description:
      "My most beautiful composition so far. \n\nSnow Will Come is a melancholy piece composed "+
      "for Solo Violin, Piano and String Ensemble with an emotional climax. It was winter when I composed it "+
      "so I was inspired by snowy and wintery landscapes, even though there was hardly any of it where I live",
    youtubeId: "UgNGt1CyOgQ",
  },
  { // To the Summit
    id: 13,
    title: "To the Summit",
    image: "/images/scores/14_To_the_Summit.jpg",
    date: "2025-05-18",
    type: "Orchestral",
    category: "Orchestral",
    instruments: ["Flute", "Horn in F", "Trombone", "Harp", "Violin 1", "Violin 2", "Violas", "Celli", "Basses"],
    description:
      "This piece depicts the journey of climbing a mountain, starting in the valley, ascending higher and higher "+
      "until finally reaching the summit. And the same thing happens in the piece and its tonality:\nit starts "+
      "in C minor, modulates to E-flat minor, then to F-sharp minor, and switches keys multiple times before the "+
      "climax, finally resolving to C-sharp major to depict the arrival at the summit.",
    youtubeId: "AEWRH4s7Bk0",
  },
  { // Bagatelle of the Night
    id: 14,
    title: "Bagatelle of the Night",
    image: "/images/scores/15_Bagatelle_of_the_Night.jpg",
    date: "2025-08-19",
    type: "Piano",
    category: "Solo",
    instruments: ["Piano"],
    shortdescription:
      "A short solo piano piece harmonically inspired by Ryuichi Sakamoto",
    description:
      "During the summer holiday, I spent some time studying pieces by composers I really admire. \n\nFor this "+
      "particular piece, I was especially inspired by Ryuichi Sakamoto’s harmonic language, which is very "+
      "unique and features many so-called “key fluctuations.” These are essentially small key changes within "+
      "a phrase, while the overall tonality remains in the main key. \n\nI found this concept quite interesting, "+
      "so I tried to incorporate some of it into this piece.",
    youtubeId: "0yVfd6os1zQ",
  },
  { // The other Night
    id: 15,
    title: "The other Night",
    image: "/images/scores/16_The_other_Night.jpg",
    date: "2025-10-02",
    type: "Orchestral",
    category: "Orchestral",
    instruments: ["Glockenspiel", "Harp", "Piano", "Violin 1", "Violin 2", "Violas", "Celli", "Basses"],
    shortdescription:
      "A beautiful piece for Glockenspiel, Harp, Piano and String Ensemble. An instrument combination inspired "+
      "by The Sixth Station by Joe Hisaishi.",
    description:
      "The other Night is a beautiful piece for Glockenspiel, Harp, Piano and String Ensemble."+
      "I got the idea for this instrumentation when I was listening to The Sixth Station by Joe Hisaishi, "+
      "especially the parts where the piano is doubled with the glockenspiel. I also did a lot of experimenting "+
      "with parallel fourths when creating the melody. \n\n I was also reading White Nights by Fyodor Dostoyevsky "+
      "while composing this piece. That's where the name originates.",
    youtubeId: "twnU_amUV5Y",
  },
];

export default scores;

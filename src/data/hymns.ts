export interface Hymn {
  id: string;
  number: number;
  title: string;
  writer: string;
  englishTune: string;
  category: string;
  categoryBemba: string;
  key: string;
  timeSignature: string;
  scripture: string;
  verses: string[][];
  chorus: string[] | null;
  chorusLabel?: string;
  englishVerses?: string[][];
  englishChorus?: string[] | null;
  isSample?: boolean;
  melodicPreview?: number[]; // MIDI note numbers for tune pitch helper
}

export const SAMPLE_DISCLAIMER =
  'SAMPLE CONTENT ONLY: These lyrics and titles are representative liturgical sample texts generated exclusively for prototyping this digital hymnal interface. Do not use as official Seventh-day Adventist church hymnal text.';

export const SAMPLE_HYMNS: Hymn[] = [
  {
    id: 'hymn-1',
    number: 1,
    title: 'Lishisheni Ulupenga',
    writer: 'Watchman Blow Your Trumpet',
    englishTune: 'Watchman Blow Your Trumpet',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Esekiele 33:3 · Esaya 58:1',
    isSample: false,
    melodicPreview: [67, 67, 71, 74, 74, 72, 71, 69, 67],
    verses: [
      [
        'Lishisheni ulupenga,',
        'Mucenjeshe na bonse.',
        'Bonse baleumfwe landwe,',
        'Babwelela ku mwabo.'
      ],
      [
        'Lishisheni pa mapili,',
        'Mumfimfi mumalungu;',
        'Na kabinge pa fimana.',
        '"Yesu e Mupusushi."'
      ],
      [
        'Lishisheni mumisebo.',
        'Kuli bonse baluba',
        'Bebeni bonse beshibe,',
        'Tata atupembela.'
      ],
      [
        'Abo bonse bafininwa,',
        'Banaka no bulanda;',
        'Yesu ni Katula wabo.',
        'Alebelo kutusha.'
      ]
    ],
    chorus: [
      'Lishisheni ulupenga.',
      'Lishisheni konse fye.',
      'Lesa atupela bonse.',
      "Kusose 'landwe Iyakwe."
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Watchman, blow the gospel trumpet,',
        'Every soul a warning give;',
        'Whosoever hears the message',
        'May repent, and turn and live.'
      ],
      [
        'Sound it loud o’er every hilltop,',
        'Gloomy shade and sunny plain;',
        'Ocean depths repeat the message,',
        'Full salvation’s glad refrain.'
      ],
      [
        'Sound it in the hedge and highway,',
        'Earth’s dark spots where exiles roam;',
        'Let it tell all things are ready,',
        'Father waits to welcome home.'
      ],
      [
        'Sound it for the heavy laden,',
        'Weary, longing to be free;',
        'Sound a Savior’s invitation,',
        'Sweetly saying, “Come to me.”'
      ]
    ],
    englishChorus: [
      'Blow the trumpet, trusty watchman,',
      'Blow it loud o’er land and sea;',
      'God commissions, sound the message!',
      'Every captive may be free.'
    ]
  },
  {
    id: 'hymn-2',
    number: 2,
    title: 'Imfumu Ili Fye Mupepi',
    writer: 'The Coming King',
    englishTune: 'The Coming King',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 24:33 · Ukusokolola 22:20',
    isSample: false,
    melodicPreview: [70, 72, 74, 75, 74, 72, 70],
    verses: [
      [
        'Mfumu ili fye mupepi,',
        'Asendele bubi bwesu;',
        'Nomba abantu basuma',
        'Akesa kusenda.'
      ],
      [
        'Malangililo yatweba',
        'Yesu nomba ‘li mupepi;',
        'Bwangu tukamona fyonse',
        'Fya cilambu cesu.'
      ],
      [
        'Mwitontonkanya fyabipa',
        'Fikaleka muno calo;',
        'Katula wesu akesa',
        "'Konaula fyonse."
      ],
      [
        'Elyo mu calo icipya',
        'Tukekala inshiku pe,',
        "Pantu Lesa 'katupela",
        'Mweo wa pe na pe.'
      ]
    ],
    chorus: [
      "Mupepi ... mupepi ... mupepi 'ye nomba mupepi",
      'Akesa, akesa ili nomba mupepi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'The coming King is at the door,',
        'Who once the cross for sinners bore,',
        'But now the righteous ones alone,',
        'He comes to gather home.'
      ],
      [
        'The signs that show His coming near,',
        'Are fast fulfilling year by year,',
        'And soon we’ll hail the glorious dawn,',
        'Of heav’n’s eternal morn.'
      ],
      [
        'Look not on earth for strife to cease,',
        'Look not below for joy and peace,',
        'Until the Savior comes again,',
        'To banish death and sin.'
      ],
      [
        'Then in the glorious earth made new,',
        'We’ll dwell the countless ages through;',
        'This mortal shall immortal be,',
        'And time, eternity.'
      ]
    ],
    englishChorus: [
      'At the door, at the door,',
      'At the door, yes, even at the door;',
      'He is coming, He is coming,',
      'He is even at the door.'
    ]
  },
  {
    id: 'hymn-3',
    number: 3,
    title: 'Lintu Nkamona Icinso',
    writer: 'Face to Face',
    englishTune: 'Face to Face',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinte 13:12 · Ukusokolola 22:4',
    isSample: false,
    melodicPreview: [70, 72, 74, 75, 74, 72, 70],
    verses: [
      [
        'Lintu nkamona ici-nso',
        'Ca kwa Yesu Katula,',
        'Nkasekela pakala-mba',
        'Kumona Mupusushi.'
      ],
      [
        'Nomba nshimumona bwino',
        'Pamulandu wa bubi,',
        'Lelo munshita yapa-lwa',
        'Mpulumushi shikapwa.'
      ],
      [
        'Tukasekela ici-bi',
        "Lintu 'Mfumu ikesa;",
        'Ububi bonse buka-pwa,',
        'Fyamfifi fyamoneka'
      ],
      [
        'Lintu nkamumona Ye-su,',
        'No kumwishiba cine;',
        'Lintu nkamona Katu-la',
        'Elyo nkasekela pe'
      ]
    ],
    chorus: [
      'Nkamona icinso cakwe ‘ko kumulu kumwakwe;',
      'Nkamumona mululumbi Yesu Kristu Katula.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Face to face with Christ, my Savior,',
        'Face to face—what will it be,',
        'When with rapture I behold Him,',
        'Jesus Christ who died for me?'
      ],
      [
        'Only faintly now I see Him,',
        'With the darkened veil between,',
        'But a blessed day is coming,',
        'When His glory shall be seen.'
      ],
      [
        'What rejoicing in His presence,',
        'When are banished grief and pain;',
        'When the crooked ways are straightened,',
        'And the dark things shall be plain.'
      ],
      [
        'Face to face—oh, blissful moment!',
        'Face to face—to see and know;',
        'Face to face with my Redeemer,',
        'Jesus Christ who loves me so.'
      ]
    ],
    englishChorus: [
      'Face to face I shall behold Him,',
      'Far beyond the starry sky;',
      'Face to face in all His glory,',
      'I shall see Him by and by!'
    ]
  },
  {
    id: 'hymn-4',
    number: 4,
    title: 'Ilandwe Lyawama',
    writer: "He's Coming",
    englishTune: "He's Coming",
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: '1 Abena Tesalonika 4:16-17 · Ukusokolola 1:7',
    isSample: false,
    melodicPreview: [68, 70, 72, 75, 75, 73, 72, 70, 68],
    verses: [
      [
        'Ilandwe lyawama twaumfwa nomba,',
        'Lintu tuleluba mu mpanga;',
        'Yesu Kristu akesa kuno bwangu',
        'Ukututwala ku bufumu.'
      ],
      [
        "Nshishi shakale i 'sha- 'ba-su-ma,",
        'shikafumya abantu bakwe,',
        "Na'bo bonse basendama tulo twamfwa",
        'Bakaba pa calo kabili.'
      ],
      [
        'Tatwakalekane lintu twafika uko,',
        'Tukatote Mfumu Yesu;',
        'Kutali na mupepi baka-longana',
        'ukuya pamo kuli Yesu'
      ],
      [
        'Haleluya amen! Haleluya amen!',
        'Basuma bapalamikwa;',
        'Teyanisheni pepeni mwe bantu bakwe,',
        'Mukafwala ifitebo'
      ]
    ],
    chorus: [
      'Akesa, a-ke-sa bwangu nomba,',
      'Akabwela ukuteka,',
      "Na'basambi bakwe baya ku mulu",
      'Lintu akabwela kuteka.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'How sweet are the tidings that greet the pilgrim’s ear,',
        'As he wanders in exile from home!',
        'Soon, soon will the Savior in glory appear,',
        'And soon will the kingdom come.'
      ],
      [
        'The mossy old graves where the pilgrims sleep',
        'Shall be open as wide as before,',
        'And the millions that sleep in the mighty deep',
        'Shall live on this earth once more.'
      ],
      [
        'There we’ll meet ne’er to part in our happy Eden home,',
        'Sweet songs of redemption we’ll sing;',
        'From the north, from the south, all the ransomed shall come,',
        'And worship our heavenly King.'
      ],
      [
        'Hallelujah, Amen! Hallelujah again!',
        'Soon, if faithful, we all shall be there;',
        'O, be watchful, be hopeful, be joyful till then,',
        'And a crown of bright glory we’ll wear.'
      ]
    ],
    englishChorus: [
      'He’s coming, coming, coming soon I know,',
      'Coming back to this earth again;',
      'And the weary pilgrims will to glory go,',
      'When the Savior comes to reign.'
    ]
  },
  {
    id: 'hymn-5',
    number: 5,
    title: 'Kutali Shani Kumwesu',
    writer: 'How Far From Home?',
    englishTune: 'How Far From Home?',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 137:4 · Ahebere 11:13-16',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 67, 63],
    verses: [
      [
        'Kutali shani ku mwesu?',
        'Naipwishe kwa kalinda,',
        'Amashiwi anjebele, "Kasuba kaisa;',
        'Mwilalila, endesheni, Ntungulushi busumino;',
        'Mukafika ku lubuto Mu calo ca Mfumu."'
      ],
      [
        'Naipwishe abankondo, Basosele kuli ine,',
        '"Tukakosa ukulwisha, Ifita fyacepa;',
        'Mwilalila, koselesha, kulwisha pano pa calo,',
        'Tukapoka ifitebo lintu bwansho bwapwa."'
      ],
      [
        'Naipwishe ifibumbwa, fyamoneka ukwasuka,',
        '"Inshita sha mpulumushi, Shikesapwa bwangu;',
        'Mwilalila, mumfwe landwe, Malangililo yatweba,',
        'Fibumbwa fyonse fyalinda ku mpela ya fita."'
      ],
      [
        'Mupepi nomba ku mwesu, Kutontonkanya kwapalwa,',
        'Ilandwe ili lyawama, kutusekelesha;',
        'Mwilalila, pantu bwangu, macusho yonse yakapwa;',
        "Tukasekela pe na pe Mu Ng'anda mwa Tata."
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'How far from home? I asked, as on',
        'I bent my steps—the watchman spake:',
        '“The long, dark night is almost gone,',
        'The morning soon will break.',
        'Then weep no more, but speed thy flight,',
        'With Hope’s bright star thy guiding ray,',
        'Till thou shalt reach the realms of light,',
        'In everlasting day.”'
      ],
      [
        'I asked the warrior on the field;',
        'This was his soul-inspiring song:',
        '“With courage bold, the sword I’ll wield,',
        'The battle is not long.',
        'Then weep no more, but well endure',
        'The conflict, till thy work is done;',
        'For this we know, the prize is sure,',
        'When victory is won.”'
      ],
      [
        'I asked again; earth, sea, and sun',
        'Seemed, with one voice, to make reply:',
        '“Time’s wasting sands are nearly run,',
        'Eternity is nigh.',
        'Then weep no more—with warning tones,',
        'Portentous sights are thick’ning round,',
        'The whole creation, waiting, groans,',
        'To hear the trumpet sound.”'
      ],
      [
        'Not far from home! O blessed thought!',
        'The trav’ler’s lonely heart to cheer;',
        'Which oft a healing balm has brought,',
        'And dried the mourner’s tear.',
        'Then weep no more, since we shall meet',
        'Where weary footsteps never roam—',
        'Our trials past, our joys complete,',
        'Safe in our Father’s home.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-6',
    number: 6,
    title: 'Pempuleni Imwe Bonse',
    writer: 'Watch, Ye Saints',
    englishTune: 'Watch, Ye Saints',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 25:1-13 · 1 Petro 4:7',
    isSample: false,
    melodicPreview: [70, 70, 72, 74, 75, 74, 72, 70],
    verses: [
      [
        'Pempuleni imwe bonse, Nomba macusho yafula;',
        'Wamisheni nyali shenu, Bwino ku-kwisa kwakwe'
      ],
      [
        "Moneni bulayo bwakwe, 'Kwelela ububi bwenu;",
        'Sambwa mumulopa wakwe, Mwendeshe mukebe bambi'
      ],
      [
        'Pa calo ifintu fyonse fya macusho no kulila;',
        'Bebeni cikuku cakwe, Ukuti bonse beshibe.'
      ],
      [
        'Mwe babi iseni nomba, Yesu amwita no luse;',
        "Mwendeshe 'nshita yacepa, Mwikokola ukwasuka."
      ]
    ],
    chorus: [
      'Akesa! Yesu akesa! Mululumbi lwacilile;',
      'Yesu akesa no bwansho, Akesa bwangu nomba'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Watch, ye saints, with eye-lids wak-ing;',
        'Lo! The powers of heaven are shak-ing;',
        'Keeping your lamps all trimmed and burn-ing,',
        'Read-y for your Lord’s return-ing.'
      ],
      [
        'Lo! the promise of your Sav-ior,',
        'Pardoned sin and purchased fa-vor,',
        'Blood-washed robes and crowns of glo-ry;',
        'Haste to tell re-demp-tion’s sto-ry.'
      ],
      [
        'King-doms at their base are crum-bling, Hark!',
        'His char-iot wheels are rum-bling;',
        'Tell, O tell of grace a-bound-ing,',
        'While the sev-enth trump is sound-ing.'
      ],
      [
        'Sin-ners, come, while Christ is plead-ing;',
        'Now for you He’s in-ter-ced-ing;',
        'Haste, ere grace and time di-min-ished',
        'Shall proclaim the mys-tery fin-ished.'
      ]
    ],
    englishChorus: [
      'Lo! He comes, lo! Je-sus comes; Lo!',
      'He comes all – glo-rious!',
      'Je-sus comes to reign vic-to-rious,',
      'Lo! He comes, yes, Jesus comes'
    ]
  },
  {
    id: 'hymn-7',
    number: 7,
    title: 'Aleisa Aleisa',
    writer: 'When He Cometh',
    englishTune: 'When He Cometh',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'D Major',
    timeSignature: '3/4',
    scripture: 'Malaki 3:17',
    isSample: false,
    melodicPreview: [62, 66, 69, 74, 74, 73, 71, 69],
    verses: [
      [
        'Aleisa, aleisa Kusenda a-bakwe,',
        'Abo bonse ababuta Abatemwikwa'
      ],
      [
        "Akasenda, akasenda Kung'anda yakwe,",
        'Abo bonse bamumfwila Abatemwikwa.'
      ],
      [
        'Bana bonse, bana bonse Bamutemwa Yesu,',
        "E'fisamo ifyawama Abatemwikwa."
      ]
    ],
    chorus: [
      'Nge ntanda kubeka Mu- ci tebo cakwe,',
      'Bakabeka ku mulu Abantu bakwe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When he cometh, when he cometh',
        'to make up his jewels,',
        'all his jewels, precious jewels,',
        'his loved and his own.'
      ],
      [
        'He will gather, he will gather',
        'the gems for his kingdom,',
        'all the pure ones, all the bright ones,',
        'his loved and his own.'
      ],
      [
        'Little children, little children',
        'who love their Redeemer,',
        'are the jewels, precious jewels,',
        'his loved and his own.'
      ]
    ],
    englishChorus: [
      'Like the stars of the morning,',
      'his bright crown adorning,',
      'they shall shine in their beauty,',
      'bright gems for his crown.'
    ]
  },
  {
    id: 'hymn-8',
    number: 8,
    title: 'Apo Ipenga Lya Mfumu Likapelelekesha',
    writer: 'When the Trumpet',
    englishTune: 'When the Trumpet',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: '1 Abena Tesalonika 4:16 · Ukusokolola 20:12',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 75, 77, 75, 72, 68],
    verses: [
      [
        'Apo ipenga lya Mfumu likapelelekesha,',
        'Apo bukaca no lubuto tutu;',
        'Apo abasalwa bakaya longana pe shilya,',
        'Apwe penga likalila nkabako'
      ],
      [
        'Muli ilya nshita lintu basuma bakabuka',
        'Lintu basuma bonse bakabuka;',
        'Apo abasalwa bakaya longana pe shilya,',
        'Apwe penga likalila nkabako.'
      ],
      [
        'Aleni tulebombela Shikulwifwe nshiku pe,',
        'Tulelanda ifya kutemwa kwakwe;',
        'Elyo lintu imilimo yesu yonse ikapwa,',
        'Apwe penga likalila nkabako'
      ]
    ],
    chorus: [
      "Apwe pe 'nga likeli-la, Apwe pe-nga likali-la,",
      'Apwe pe-nga likali-la, Apwe penga likalila nkabako'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When the trumpet of the Lord shall sound, and time shall be no more,',
        'And the morning breaks, eternal, bright and fair;',
        'When the saved of earth shall gather over on the other shore,',
        'And the roll is called up yonder, I’ll be there.'
      ],
      [
        'On that bright and cloudless morning when the dead in Christ shall rise,',
        'And the glory of His resurrection share;',
        'When His chosen ones shall gather to their home beyond the skies,',
        'And the roll is called up yonder, I’ll be there.'
      ],
      [
        'Let us labor for the Master from the dawn till setting sun,',
        'Let us talk of all His wondrous love and care;',
        'Then when all of life is over, and our work on earth is done,',
        'And the roll is called up yonder, I’ll be there.'
      ]
    ],
    englishChorus: [
      'When the roll is called up yonder,',
      'When the roll is called up yonder,',
      'When the roll is called up yonder,',
      'When the roll is called up yonder, I’ll be there.'
    ]
  },
  {
    id: 'hymn-9',
    number: 9,
    title: 'Lisheni Intandala na Maka',
    writer: 'Lift Up the Trumpet',
    englishTune: 'Lift Up the Trumpet',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '6/8',
    scripture: 'Tito 2:13 · Danieli 12:4',
    isSample: false,
    melodicPreview: [70, 70, 70, 74, 72, 70, 69, 70, 72],
    verses: [
      [
        'Lisheni inta-ndala namaka; Yesu Mfumu akesa!',
        'Angisheni mwi-mbe imwe beni; Yesu Mfumu akesa'
      ],
      [
        'Mwe mpili lete-ni ifiunda; Yesu Mfumu akesa!',
        'Aisa no lu-lumbi ulwakwe, Yesu Mfumu akesa'
      ],
      [
        'Na iwe cambe-shi ulandishe, Yesu Mfumu akesa!',
        'Ulandishishe ku bantu bonse, Yesu Mfumu akesa!'
      ],
      [
        'Ifinkukuma filetulanga, Yesu Mfumu akesa!',
        'Ne fipupu na-fyo nefifine, Yesu Mfumu akesa!'
      ],
      [
        'Twishibila ku-ndupwa bukali, Yesu Mfumu akesa!',
        'Na mano yafu-lisha mu bantu, Yesu Mfumu akesa!'
      ]
    ],
    chorus: [
      'Yesu akesa, Yesu akesa, Yesu Mfumu akesa!'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Lift up the trumpet, and loud let it ring:',
        'Jesus is coming again!',
        'Cheer up, ye pilgrims, be joyful and sing:',
        'Jesus is coming again!'
      ],
      [
        'Echo it, hilltops; proclaim it, ye plains:',
        'Jesus is coming again!',
        'Coming in glory, the Lamb that was slain:',
        'Jesus is coming again!'
      ],
      [
        'Sound it, old ocean, in each surge and wave:',
        'Jesus is coming again!',
        'Break through the gloom of the shadows and grave:',
        'Jesus is coming again!'
      ],
      [
        'Heavings of earth, tell the vast, wond’ring throng:',
        'Jesus is coming again!',
        'Tempests and whirlwinds, the anthem prolong:',
        'Jesus is coming again!'
      ],
      [
        'Nations are angry—by this we do know:',
        'Jesus is coming again!',
        'Knowledge increases; men run to and fro:',
        'Jesus is coming again!'
      ]
    ],
    englishChorus: [
      'Coming again, coming again,',
      'Jesus is coming again!'
    ]
  },
  {
    id: 'hymn-10',
    number: 10,
    title: 'Bushe Twaya Kumulonga?',
    writer: 'Shall We Gather?',
    englishTune: 'Shall We Gather?',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 22:1-2',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 67, 63, 65, 67],
    verses: [
      [
        'Bushe twaya ku mulonga, Kulya fyonse fisuma;',
        'Amenshi ayenda pe pe Yafuma kwa Yehofa'
      ],
      [
        'Pa mupuma wa mulonga Tukaya no kupepa;',
        'Tukaya tasha Katula Nshiku shonse pe na pe.'
      ],
      [
        'Lintu tukafika uko, Ifipe tukaposa;',
        'Yesu Mfumu ali uko Akatufwika bwino'
      ],
      [
        'Nomba tulepalamina, Bwangu ulwendo lwapwa;',
        'Elyo imitima yesu Ikasekelela pe.'
      ]
    ],
    chorus: [
      'Eya twaya ku mulonga. Menshi yawama yawama-kulya;',
      'Tulongana pa-mo nabo abatemwa-Yehofa'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Shall we gather at the river,',
        'Where bright angel feet have trod,',
        'With its crystal tide forever',
        'Flowing by the throne of God?'
      ],
      [
        'On the margin of the river,',
        'Washing up its silver spray,',
        'We will walk and worship ever,',
        'All the happy golden day.'
      ],
      [
        'Ere we reach the shining river,',
        'Lay we ev’ry burden down;',
        'Grace our spirits will deliver,',
        'And provide a robe and crown.'
      ],
      [
        'Soon we’ll reach the silver river,',
        'Soon our pilgrimage will cease;',
        'Soon our happy hearts will quiver',
        'With the melody of peace.'
      ]
    ],
    englishChorus: [
      'Yes, we’ll gather at the river,',
      'The beautiful, the beautiful river;',
      'Gather with the saints at the river',
      'That flows by the throne of God.'
    ]
  },
  {
    id: 'hymn-11',
    number: 11,
    title: 'Ndemukonka Mwe Katula',
    writer: 'I Will Follow Thee',
    englishTune: 'I Will Follow Thee',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Yohane 10:27 · Mateo 16:24',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 65, 67, 69, 72, 70, 69, 67],
    verses: [
      [
        'Ndemukonka mwe Katula,',
        "Lintu fye M'ntangilila.",
        'Konse fye muntangilila,',
        'Mwe Mfumu ndemukonka'
      ],
      [
        'Nangu nshila yalikosa,',
        'Nangu nshila takuli,',
        'Mwalintangilile kale,',
        'Nomba ndemukonka pe'
      ],
      [
        'Nangu ndemona macusho,',
        'Kutunkwa na satana;',
        'Ndebukisha mwalitunkwa,',
        'Ndemukonka nshiku pe'
      ],
      [
        "Nangu mwanjita kuli 'ne,",
        'Kuleko mweo wandi,',
        'Mwapitilile pa ntanshi,',
        'Ndemukonka no kwanga'
      ]
    ],
    chorus: [
      'Ndemukonka mwe Katula,',
      'Mwamfwilile ine,',
      'Nangu bonse bamufilwa,',
      'Lelo ine nkakonka'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I will follow Thee, my Savior,',
        'Wheresoe’er my lot may be;',
        'Where Thou goest I will follow,',
        'Yes, my Lord, I’ll follow Thee.'
      ],
      [
        'Though the road be rough and thorny,',
        'Trackless as the foamy sea,',
        'Thou hast trod this way before me,',
        'And I gladly follow Thee.'
      ],
      [
        'Though I meet with tribulations,',
        'Sorely tempted though I be;',
        'I remember Thou wast tempted,',
        'And rejoice to follow Thee.'
      ],
      [
        'Though Thou leadest me through shadows,',
        'Bid me give my life for Thee;',
        'Thou hast gone the way before me,',
        'Joyfully I’ll follow Thee.'
      ]
    ],
    englishChorus: [
      'I will follow Thee, my Savior,',
      'Thou didst shed Thy blood for me;',
      'And though all men should forsake Thee,',
      'By Thy grace I’ll follow Thee.'
    ]
  },
  {
    id: 'hymn-12',
    number: 12,
    title: 'Ekwali Kafukauka',
    writer: 'There Is a Fountain',
    englishTune: 'There Is a Fountain',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Sekaria 13:1 · 1 Yohane 1:7',
    isSample: false,
    melodicPreview: [60, 64, 67, 67, 69, 67, 64, 60, 62, 64],
    verses: [
      [
        'Ekwali kafukauka,',
        'Mulopa wa Yesu;',
        "Na babi basambilwe 'ko",
        'Bale buta tutu'
      ],
      [
        'Mupupu asekelela',
        'Kumona Katula;',
        'Na ine nga ndi pamo fye',
        'Nasambilwe uko.'
      ],
      [
        'Mwe Katula umulopa',
        'Tawakapwe iyo,',
        'Na bantu benu bonse fye',
        "Ba pusushiwa 'ko."
      ],
      [
        'Mubusumino namona',
        'Mulopa wa Yesu;',
        'Nomba ukutemwa kwakwe',
        'Ndefwaya nshimike.'
      ],
      [
        'Lintu Katula akesa',
        'Kunsenda ku mwakwe;',
        "Nkalaimba ulwimbo 'lu",
        'Pa luse lwakwe pe'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'There is a fountain filled with blood',
        'Drawn from Immanuel’s veins;',
        'And sinners plunged beneath that flood',
        'Lose all their guilty stains.'
      ],
      [
        'The dying thief rejoiced to see',
        'That fountain in his day;',
        'And there may I, though vile as he,',
        'Wash all my sins away.'
      ],
      [
        'Dear dying Lamb, Thy precious blood',
        'Shall never lose its power,',
        'Till all the ransomed church of God',
        'Are saved, to sin no more.'
      ],
      [
        'E’er since by faith I saw the stream',
        'Thy flowing wounds supply,',
        'Redeeming love has been my theme,',
        'And shall be till I die.'
      ],
      [
        'When this poor lisping, stamm’ring tongue',
        'Lies silent in the grave,',
        'Then in a nobler, sweeter song,',
        'I’ll sing Thy power to save.'
      ]
    ]
  },
  {
    id: 'hymn-13',
    number: 13,
    title: 'Mwe Yesu Ndefwaya Ubutuntulu',
    writer: 'Lord Jesus, I Long to Be Perfectly Whole',
    englishTune: 'Lord Jesus, I Long to Be Perfectly Whole',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 51:7 · Esaya 1:18',
    isSample: false,
    melodicPreview: [68, 70, 72, 75, 75, 75, 72, 70, 68],
    verses: [
      [
        'Mwe, Yesu ndefwaya ubutuntulu;',
        'Kaleni shonse mu mutima wandi;',
        'Tobeni filubi, posa balwani;',
        'Munsambe ine elyo ndebatutu.'
      ],
      [
        'Moneni ine Yesu Mfumu yandi;',
        'Mungafwe ine ukupela fyonse;',
        'Ndepela ine, fyonse ndeishiba;',
        'Munsambe ine elyo ndebatutu.'
      ],
      [
        "Yesu Mfumu kul'ici ndepapata.",
        'Ndepembela Mfumu pankasa shenu,',
        'Mulopa wenu walinsamba ine:',
        'Munsambe ine elyo ndebatutu.'
      ]
    ],
    chorus: [
      'Ndebatutu ye, ndebatutu;',
      'Munsambe ine elyo ndebatutu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Lord Jesus, I long to be perfectly whole;',
        'I want Thee forever to live in my soul;',
        'Break down every idol, cast out every foe;',
        'Now wash me, and I shall be whiter than snow.'
      ],
      [
        'Lord Jesus, look down from Thy throne in the skies,',
        'And help me to make a complete sacrifice;',
        'I give up myself, and whatever I know;',
        'Now wash me, and I shall be whiter than snow.'
      ],
      [
        'Lord Jesus, for this I most humbly entreat,',
        'I wait, blessed Lord, at Thy crucified feet;',
        'By faith, for my cleansing, I see Thy blood flow:',
        'Now wash me, and I shall be whiter than snow.'
      ]
    ],
    englishChorus: [
      'Whiter than snow, yes, whiter than snow,',
      'Now wash me, and I shall be whiter than snow.'
    ]
  },
  {
    id: 'hymn-14',
    number: 14,
    title: 'Bupe Bwa Kwa Lesa',
    writer: 'Hear the Pennies Dropping',
    englishTune: 'Hear the Pennies Dropping',
    category: 'thanksgiving',
    categoryBemba: 'Ubupe no Mutulo',
    key: 'G Major',
    timeSignature: '2/4',
    scripture: '2 Abena Korinte 9:7 · Marko 12:41-44',
    isSample: false,
    melodicPreview: [67, 67, 69, 71, 71, 71, 74, 72, 71, 69],
    verses: [
      [
        'Bupe bwa kwa Lesa',
        'Tuleta nomba',
        'Fyonse kuli Yesu',
        'Apoka ifi.'
      ],
      [
        'Ubupe tuleta,',
        'Panono nomba,',
        'Lelo tulepela,',
        "Pantu twam'temwa."
      ],
      [
        'Tupela kutemwa,',
        'Mwe Mupusushi,',
        'Yesu Mfumu yesu,',
        'Pokeni uku.'
      ]
    ],
    chorus: [
      'Leta, leta, leta, leta,',
      'Ubupe nomba:',
      'Fyonse kuli Yesu',
      'Apoka ifi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Hear the pennies dropping,',
        'Listen as they fall;',
        'Every one for Jesus,',
        'He will get them all.'
      ],
      [
        'Though our coins are little,',
        'Few and small our store,',
        'Yet we give with gladness,',
        'For we love Him more.'
      ],
      [
        'Now we give in love, Lord,',
        'Savior, unto Thee;',
        'Jesus, blessed Master,',
        'Take them graciously.'
      ]
    ],
    englishChorus: [
      'Dropping, dropping, dropping, dropping,',
      'Hear the pennies fall;',
      'Every one for Jesus,',
      'He will get them all.'
    ]
  },
  {
    id: 'hymn-15',
    number: 15,
    title: 'Yesu Antemwa Ine',
    writer: 'Jesus Loves Me',
    englishTune: 'Jesus Loves Me',
    category: 'children-and-family',
    categoryBemba: 'Ukutemwa kwa kwa Lesa',
    key: 'Eb Major',
    timeSignature: '2/4',
    scripture: 'Yohane 3:16 · 1 Yohane 4:19 · Marko 10:14',
    isSample: false,
    melodicPreview: [67, 67, 67, 63, 65, 67, 70, 70, 68, 67, 65],
    verses: [
      [
        'Yesu antemwa ine! Ilandwe lyanjebele;',
        'Bana bonse ebakwe, Yesu atutemwisha.'
      ],
      [
        'Yesu antemwa ine, Amfwilile ne mubi;',
        "Nomba alenjita 'ne Ukum'temwa pe na pe."
      ],
      [
        'Yesu antemwa ine, Lintu ndi no bulanda;',
        'Atontonkanya ine kuti mbe mwana wakwe.'
      ],
      [
        'Yesu antemwa ine, Akekala mupepi;',
        "Ine nga nam'temwisha, Akansenda ku mwakwe"
      ]
    ],
    chorus: [
      'Yesu antemwa, Antemwa ine;',
      'Yesu antemwa, Ndimwana wakwe pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Jesus loves me! this I know,',
        'For the Bible tells me so;',
        'Little ones to Him belong,',
        'They are weak, but He is strong.'
      ],
      [
        'Jesus loves me! He who died',
        'Heaven’s gate to open wide;',
        'He will wash away my sin,',
        'Let His little child come in.'
      ],
      [
        'Jesus loves me! loves me still,',
        'Though I’m very weak and ill;',
        'From His shining throne on high,',
        'Comes to watch me where I lie.'
      ],
      [
        'Jesus loves me! He will stay',
        'Close beside me all the way;',
        'If I love Him, when I die',
        'He will take me home on high.'
      ]
    ],
    englishChorus: [
      'Yes, Jesus loves me!',
      'Yes, Jesus loves me!',
      'Yes, Jesus loves me!',
      'The Bible tells me so.'
    ]
  },
  {
    id: 'hymn-16',
    number: 16,
    title: 'Nasamba Ndupi Shandi',
    writer: 'I Washed My Hands',
    englishTune: 'I Washed My Hands',
    category: 'children-and-family',
    categoryBemba: 'Abana',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 24:3-4 · 1 Abena Korinte 6:19-20',
    isSample: false,
    melodicPreview: [65, 69, 72, 69, 67, 65, 67, 69, 65],
    verses: [
      [
        'Nasamba ndupi shandi,',
        'Bwino bwino tutu;',
        'Nashiashima Yesu',
        'Kumubombela pe.'
      ],
      [
        'Ndemweba imwe matwi',
        'Mumfwe amashiwi,',
        'Umulimo usuma',
        'Ndupi shilecita.'
      ],
      [
        'Na mensa tulemona',
        'Imilimo yonse,',
        'Yanjishibisho bubi',
        'Lelo ne nshiku pe.'
      ]
    ],
    chorus: [
      'Imwe tumakasa,',
      'Mulentwala kwi,',
      'Fyonse muli Yesu,',
      'Nkaya cita fye.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I washed my hands this morning,',
        'So clean and white and fair;',
        'I give them both to Jesus,',
        'To serve Him everywhere.'
      ],
      [
        'Now listen, little ears of mine,',
        'To hear the words He speaks;',
        'To know the holy work of love',
        'His tender mercy seeks.'
      ],
      [
        'And little eyes be watchful now,',
        'All through the busy day;',
        'To turn away from every sin,',
        'And walk the narrow way.'
      ]
    ],
    englishChorus: [
      'Where are you going, little feet?',
      'Where are you taking me?',
      'Wherever Jesus leads the way,',
      'My willing feet shall be.'
    ]
  },
  {
    id: 'hymn-17',
    number: 17,
    title: 'Temwa Kutusekesha',
    writer: '‘Tis Love That Makes Us Happy',
    englishTune: '‘Tis Love That Makes Us Happy',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 4:7-8 · 1 Yohane 3:18',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 74, 72, 71, 69, 67],
    verses: [
      [
        'Temwa kutusekesha, Yawamisha nshila;',
        'Itwafwa ifwe kutemwa Bambi inshiku pe.'
      ],
      [
        'Bucushi bwafulisha, Imfwa ne yabubi;',
        'No kutemwa tukaesha Ukwafwa bambi pe'
      ],
      [
        'Lintu umweo wapwa, Lesa aletwita,',
        'Lwimbo lwesu nshiku shonse Kutemwa kwa Yesu'
      ]
    ],
    chorus: [
      'Atemwa, ifwe twana twakwe;',
      'Atemwa tukonka Yesu;',
      'Temwa kutusekesha, Yawamisha nshila;',
      'Itwafwa ifwe kutemwa bambi inshiku pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        '’Tis love that makes us happy,',
        '’Tis love that smoothes the way;',
        'It helps us mind, it makes us kind',
        'To others every day.'
      ],
      [
        'This world is full of sorrow,',
        'Of sickness, death, and sin;',
        'With loving heart we’ll do our part,',
        'And try some soul to win.'
      ],
      [
        'And when this life is over,',
        'And Jesus bids us come,',
        '’Tis love’s sweet song we’ll sing among',
        'The angels in our home.'
      ]
    ],
    englishChorus: [
      'God is love; we’re His little children.',
      'God is love; we would follow Him.',
      '’Tis love that makes us happy,',
      '’Tis love that smoothes the way;',
      'It helps us mind, it makes us kind',
      'To others every day.'
    ]
  },
  {
    id: 'hymn-18',
    number: 18,
    title: 'Mwe Mpuka ya Kristu',
    writer: 'Onward Christian Soldiers',
    englishTune: 'Onward Christian Soldiers',
    category: 'faith-and-trust',
    categoryBemba: 'Ifita fya kwa Kristu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: '2 Timote 2:3 · 1 Timote 6:12',
    isSample: false,
    melodicPreview: [65, 65, 65, 65, 67, 69, 69, 67, 65, 67, 69, 72],
    verses: [
      [
        'Mwe mpuka ya Kristu mwende ku fita,',
        'Lupanda lwa Yesu lwamulondola',
        'Kristu Mfumu yesu aletangila,',
        'Bulwi na satana alemwanshisha'
      ],
      [
        'Napabwishibisho bwa bwansho bwesu,',
        'Fita fya kwa ciwa filebutuka;',
        'Ciwa aletina lintu twaimba,',
        'Bamunyina besu mwimbe na maka.'
      ],
      [
        'Nge bumba lya maka abakwa Lesa,',
        'Nshila tuleenda iya mushilo;',
        'Ifwe twende pamo tatwalekane',
        'Pamo mulu Yesu Intungulushi'
      ],
      [
        'Aleni mwe bonse iseni nomba,',
        'Konke Mfumu Yesu, Lesa Kabumba,',
        'Imbeni mwe bonse lwimbo lwanseko',
        'Lulumbi mu cinshi ku Mfumu Kristu.'
      ]
    ],
    chorus: [
      'Mwe mpuka ya Kristu mwende ku fita',
      'Lupanda lwa Yesu lwamulondola.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Onward, Christian soldiers, marching as to war,',
        'With the cross of Jesus going on before.',
        'Christ, the royal Master, leads against the foe;',
        'Forward into battle, see His banners go!'
      ],
      [
        'At the sign of triumph Satan’s host doth flee;',
        'On then, Christian soldiers, on to victory!',
        'Hell’s foundations quiver at the shout of praise;',
        'Brothers, lift your voices, loud your anthems raise!'
      ],
      [
        'Like a mighty army moves the church of God;',
        'Brothers, we are treading where the saints have trod.',
        'We are not divided, all one body we,',
        'One in hope and doctrine, one in charity.'
      ],
      [
        'Onward then, ye people, join our happy throng,',
        'Blend with ours your voices in the triumph song;',
        'Glory, laud, and honor unto Christ the King,',
        'This through countless ages men and angels sing.'
      ]
    ],
    englishChorus: [
      'Onward, Christian soldiers, marching as to war,',
      'With the cross of Jesus going on before.'
    ]
  },
  {
    id: 'hymn-19',
    number: 19,
    title: 'Umutima Wandi',
    writer: 'My Soul Be on Thy Guard',
    englishTune: 'My Soul Be on Thy Guard',
    category: 'faith-and-trust',
    categoryBemba: 'Ukupempula no Kulwisha',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinte 16:13 · Mateo 26:41',
    isSample: false,
    melodicPreview: [67, 67, 69, 71, 72, 71, 69, 67],
    verses: [
      [
        'Umutima wandi ubibi bwafula,',
        'Ciwa aleesha cibi kunasha ne fibi.'
      ],
      [
        'Pempula mwipepo wileka kulwisha',
        'Inshiku shonse pe lomba amaka kwa Lesa.'
      ],
      [
        'Ubwansho ta bwapwa wifumya inkwela;',
        'Mulimo obe pakupwa wapelwa citebo.'
      ],
      [
        'Lwisha mutima wandi, kufika na ku mfwa;',
        'Lesa akakusenda ku mwakwe uwa pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'My soul, be on thy guard;',
        'Ten thousand foes arise;',
        'The hosts of sin are pressing hard',
        'To draw thee from the skies.'
      ],
      [
        'O watch, and fight, and pray;',
        'The battle ne’er give o’er;',
        'Renew it boldly every day,',
        'And help divine implore.'
      ],
      [
        'Ne’er think the victory won,',
        'Nor lay thine armor down;',
        'Thy arduous work will not be done,',
        'Till thou obtain thy crown.'
      ],
      [
        'Fight on, my soul, till death',
        'Shall bring thee to thy God;',
        'He’ll take thee, at thy parting breath,',
        'Up to His blest abode.'
      ]
    ]
  },
  {
    id: 'hymn-20',
    number: 20,
    title: 'Shibuka Mutima Wandi',
    writer: 'Awake My Soul',
    englishTune: 'Awake My Soul',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Ahebere 12:1-2 · Abena Filipi 3:13-14',
    isSample: false,
    melodicPreview: [60, 64, 67, 72, 71, 69, 67, 65, 64],
    verses: [
      [
        'Shibuka mutima wandi,',
        'Wikokola nomba;',
        'Lintu ukabomba kuno',
        'Kafwikwa citebo.'
      ],
      [
        'Shiwi lyakwa Lesa wenu',
        'Lyamwita ku mulu;',
        'Akamupela cilambu',
        'Nge milimo yapwa.'
      ],
      [
        'Makumbi yabunte pe fye,',
        'Bamumona kuno;',
        'Laba ifintu panuma,',
        'Endesha pa ntanshi.'
      ],
      [
        'Mwe Katula Watemwikwa',
        'Mwatutungulula;',
        'Lintu twafwikwa ubwansho',
        'Tukamilumbanya.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Awake, my soul, stretch every nerve,',
        'And press with vigor on;',
        'A heavenly race demands thy zeal,',
        'And an immortal crown.'
      ],
      [
        '’Tis God’s all-animating voice',
        'That calls thee from on high;',
        '’Tis His own hand presents the prize',
        'To thine aspiring eye.'
      ],
      [
        'A cloud of witnesses around',
        'Hold thee in full survey;',
        'Forget the steps already trod,',
        'And onward urge thy way.'
      ],
      [
        'Blest Savior, introduced by Thee,',
        'Have I my race begun;',
        'And, crowned with victory, at Thy feet',
        'I’ll lay my honors down.'
      ]
    ]
  },
  {
    id: 'hymn-21',
    number: 21,
    title: 'Naisa Kulupanda',
    writer: 'I Am Coming to the Cross',
    englishTune: 'I Am Coming to the Cross',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Mateo 11:28 · Abena Galatia 6:14',
    isSample: false,
    melodicPreview: [71, 71, 71, 69, 67, 69, 71, 72, 71, 69],
    verses: [
      [
        'Naisa ku Lupanda, ndi mupina nemfopu;',
        'Fyonse fyandi ifyafye, Ndefwaya mpusushiwe.'
      ],
      [
        'Mutima wandi nomba, Ndefwaya kumupele;',
        'Nomba Yesu anjeba, Ndefwaya mpusushiwe.'
      ],
      [
        'Fyonse fye ndemupela, Ifibusa ne fyuma,',
        'Mubili no mutima, fyenu cine pe na pe.'
      ],
      [
        'Ndesumina malayo Kusambwa mumulopa;',
        'Tekuti njilumbanye, Natanikwe na Yesu'
      ],
      [
        'Yesu aisa nomba Aingila mum\'tima,',
        'Nomba ndebuta tutu, Lulumbi kuli Yesu'
      ]
    ],
    chorus: [
      'Ndemusumina mweka, Mwana Lesa wapalwa;',
      'Ku Lupanda mfukama, Untule Yesu nomba,',
      '(Ibeshi lyakupelekesha) Yesu antula ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I am coming to the cross;',
        'I am poor, and weak, and blind;',
        'I am counting all but dross,',
        'I shall full salvation find.'
      ],
      [
        'Long my heart has sighed for Thee,',
        'Long has evil reigned within;',
        'Jesus sweetly speaks to me,',
        '“I will cleanse you from all sin.”'
      ],
      [
        'Here I give my all to Thee,',
        'Friends, and time, and earthly store;',
        'Soul and body Thine to be,',
        'Wholly Thine forevermore.'
      ],
      [
        'In the promises I trust,',
        'Now I feel the blood applied;',
        'I am prostrate in the dust,',
        'I with Christ am crucified.'
      ],
      [
        'Jesus comes! He fills my soul!',
        'Perfected in Him I am;',
        'I am every whit made whole:',
        'Glory, glory to the Lamb!'
      ]
    ],
    englishChorus: [
      'I am trusting, Lord, in Thee,',
      'Blessed Lamb of Calvary;',
      'Humbly at Thy cross I bow,',
      'Save me, Jesus, save me now.',
      '(Final stanza: Jesus saves me, saves me now.)'
    ]
  },
  {
    id: 'hymn-22',
    number: 22,
    title: 'Mfumu Naumfwa Mapalo',
    writer: 'Lord, I Hear',
    englishTune: 'Lord, I Hear',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Esekiele 34:26 · Amalumbo 85:6',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Mfumu naumfwa mapalo,',
        'Mwapela bantu benu;',
        'Ayaba kubakosesha, Paleni ine nomba.'
      ],
      [
        'Wincila ine Katula nangu ine ndimubi;',
        'Imwe Lesa mukalamba mumpele luse lwenu'
      ],
      [
        'Mpulumushi nacitile shamulengo bulanda;',
        'Fya calo fyambifya ine, Mumbelele kuli ifi'
      ],
      [
        'Mwe Mupashi mwincilila, Nangu ine nanaka:',
        'Munjebe luse lwa Yesu ukumpela mutende'
      ]
    ],
    chorus: [
      'Paleni na ine, Paleni ine nomba.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Lord, I hear of showers of blessing',
        'Thou art scatt’ring full and free;',
        'Showers the thirsty land refreshing;',
        'Let some drops now fall on me.'
      ],
      [
        'Pass me not, O gracious Father,',
        'Sinful though my heart may be;',
        'Thou mightst leave me, but the rather',
        'Let Thy mercy light on me.'
      ],
      [
        'Pass me not, O tender Savior,',
        'Let me love and cling to Thee;',
        'I am longing for Thy favor;',
        'Whilst Thou’rt calling, O call me.'
      ],
      [
        'Pass me not, O mighty Spirit!',
        'Thou canst make the blind to see;',
        'Witnesser of Jesus’ merit,',
        'Speak the word of power to me.'
      ]
    ],
    englishChorus: [
      'Even me, even me,',
      'Let some drops now fall on me.'
    ]
  },
  {
    id: 'hymn-23',
    number: 23,
    title: 'Mwikale na Ine',
    writer: 'Hover O’er Me Holy Spirit',
    englishTune: 'Hover O’er Me Holy Spirit',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Umupashi wa Mushilo',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Abena Efese 5:18 · Luka 11:13',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 67, 65, 69, 67],
    verses: [
      [
        'Mwikale na ine nomba, Mupashi Wamushilo;',
        'Mwikale muli ine pe, Mwise mube na ine.'
      ],
      [
        'Mwaishiba ukumpala, Nangu ine nanaka;',
        'Ine ndemukabila pe, Mwise mube na ine.'
      ],
      [
        'Ine ndi muntu wanaka, Ndemulomba uluse;',
        'Pela kuli ine nomba, Amaka yakutemwa.'
      ],
      [
        'Munsamba nokupususha, Mutima wabutisha;',
        'Wansekesha ine nomba, Mwise mube na ine.'
      ]
    ],
    chorus: [
      'Mwikale, mwikale, Yesu mube na ine;',
      'Mwikale muli ine pe, mwise mube na ine'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Hover o’er me, Holy Spirit,',
        'Bathe my trembling heart and brow;',
        'Fill me with Thy hallowed presence,',
        'Come, O come and fill me now.'
      ],
      [
        'Thou canst fill me, gracious Spirit,',
        'Though I cannot tell Thee how;',
        'But I need Thee, greatly need Thee,',
        'Come, O come and fill me now.'
      ],
      [
        'I am weakness, full of weakness;',
        'At Thy sacred feet I bow;',
        'Blest, divine, eternal Spirit,',
        'Fill with love, and fill me now.'
      ],
      [
        'Cleanse and comfort, bless and save me,',
        'Bathe, O bathe my heart and brow;',
        'Thou art comforting and saving,',
        'Thou art sweetly filling now.'
      ]
    ],
    englishChorus: [
      'Fill me now, fill me now,',
      'Jesus, come and fill me now;',
      'Fill me with Thy hallowed presence,',
      'Come, O come and fill me now.'
    ]
  },
  {
    id: 'hymn-24',
    number: 24,
    title: 'Ndemukabila Pe',
    writer: 'I Need Thee Every Hour',
    englishTune: 'I Need Thee Every Hour',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Yohane 15:5 · Ahebere 4:16',
    isSample: false,
    melodicPreview: [68, 70, 72, 75, 73, 72, 70, 68, 70, 72],
    verses: [
      [
        'Ndemukabila pe. Mfumu ya luse;',
        'Tapali upela mutende nga Imwe.'
      ],
      [
        'Ndemukabila pe, Kaleni Mupepi,',
        'Satana \'kafilwa nga muli mupepi.'
      ],
      [
        'Ndemukabila pe. Bulanda ne nseko;',
        'Nangu tamwikale, Mweo wandi wafwa'
      ],
      [
        'Ndemukabila pe. Mumfundishe lelo:',
        'Ubufwayo bwenu, Muwamye mutima.'
      ],
      [
        'Ndemukabila pe, Lesa wamushilo;',
        'Muncite wacine. Mwe mfumu yandi'
      ]
    ],
    chorus: [
      'Ndemukabila Mfumu, nshita shonse kuno;',
      'Mumpale ine Yesu Naisa nomba.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I need Thee every hour,',
        'Most gracious Lord;',
        'No tender voice like Thine',
        'Can peace afford.'
      ],
      [
        'I need Thee every hour,',
        'Stay Thou nearby;',
        'Temptations lose their power',
        'When Thou art nigh.'
      ],
      [
        'I need Thee every hour,',
        'In joy or pain;',
        'Come quickly and abide,',
        'Or life is vain.'
      ],
      [
        'I need Thee every hour,',
        'Teach me Thy will;',
        'And Thy rich promises',
        'In me fulfill.'
      ],
      [
        'I need Thee every hour,',
        'Most Holy One;',
        'O make me Thine indeed,',
        'Thou blessed Son!'
      ]
    ],
    englishChorus: [
      'I need Thee, O I need Thee;',
      'Every hour I need Thee;',
      'O bless me now, my Savior,',
      'I come to Thee!'
    ]
  },
  {
    id: 'hymn-25',
    number: 25,
    title: 'Fyonse Nacimbila Yesu',
    writer: 'All to Jesus I Surrender',
    englishTune: 'All to Jesus I Surrender',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Luka 9:23 · Abena Roma 12:1 · Abena Filipi 3:7-8',
    isSample: false,
    melodicPreview: [62, 66, 69, 69, 71, 69, 66, 62, 64, 66],
    verses: [
      [
        'Fyonse nacimbila Yesu Fyonse ndemupela fye;',
        'Nkamutemwa nshiku shonse, No kwikala nankwe pe.'
      ],
      [
        'Fyonse nacimbila Yesu,',
        'Ndefukama ku nkasa:',
        'Naposa fyonse fya calo, Mbula Yesu mbuleni.'
      ],
      [
        'Fyonse nacimbila Yesu, Ncita mbe wamushilo;',
        'Mupashi mube na ine, Ngumfwe kuti mbe wenu.'
      ],
      [
        'Fyonse nacimbila Yesu Nomba ningumfwa Wene;',
        'Luseko lwa bupususho! Mulumbanyeni bonse.'
      ]
    ],
    chorus: [
      'Fyonse nacimba, Fyonse nacimba,',
      'Kuli Imwe Mupusushi, nacimba fyonse.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'All to Jesus I surrender,',
        'All to Him I freely give;',
        'I will ever love and trust Him,',
        'In His presence daily live.'
      ],
      [
        'All to Jesus I surrender,',
        'Humbly at His feet I bow,',
        'Worldly pleasures all forsaken;',
        'Take me, Jesus, take me now.'
      ],
      [
        'All to Jesus I surrender,',
        'Make me, Savior, wholly Thine;',
        'Let me feel the Holy Spirit,',
        'Truly know that Thou art mine.'
      ],
      [
        'All to Jesus I surrender,',
        'Now I feel the sacred flame.',
        'O the joy of full salvation!',
        'Glory, glory, to His name!'
      ]
    ],
    englishChorus: [
      'I surrender all,',
      'I surrender all,',
      'All to Thee, my blessed Savior,',
      'I surrender all.'
    ]
  },
  {
    id: 'hymn-26',
    number: 26,
    title: 'Nge Fintu Ndi',
    writer: 'Just As I Am',
    englishTune: 'Just As I Am',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Eb Major',
    timeSignature: '3/2',
    scripture: 'Yohane 6:37 · 1 Yohane 1:7 · Ukusokolola 22:17',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 70, 68, 67],
    verses: [
      [
        'Nge fintu ndi, ndi wafibi,',
        'lelo M\'lopa wasumine,',
        'Elyo mwanjita kuli Mwe.'
      ],
      [
        'Nge fintu ndi, ndi impofu,',
        'Naisa munsambe ine,',
        'Munsambishe no mulopa,'
      ],
      [
        'Nge fintu ndi, Nacushiwe',
        'namatontonkanyo yabi,',
        'Yakutwishika no mweso,'
      ],
      [
        'Nge fintu ndi, ndimupina,',
        'Ndefwaya ukuposhiwa;',
        'Nkasanga fyonse kuli Mwe,'
      ],
      [
        'Nge fintu ndi, mulepoka,',
        'Mulemposha no kunsamba,',
        'Pantu namucetekela'
      ],
      [
        'Nge fintu ndi, ukutemwa',
        'kula nkula kuli Imwe,',
        'Nomba ndiwenu fye Mweka'
      ]
    ],
    chorus: [
      'Mwe Mwana Lesa, naisa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Just as I am, without one plea,',
        'But that Thy blood was shed for me,',
        'And that Thou bid’st me come to Thee,'
      ],
      [
        'Just as I am, and waiting not',
        'To rid my soul of one dark blot,',
        'To Thee, whose blood can cleanse each spot,'
      ],
      [
        'Just as I am, though tossed about',
        'With many a conflict, many a doubt,',
        'Fightings and fears within, without,'
      ],
      [
        'Just as I am, poor, wretched, blind;',
        'Sight, riches, healing of the mind,',
        'Yea, all I need, in Thee to find,'
      ],
      [
        'Just as I am, Thou wilt receive,',
        'Wilt welcome, pardon, cleanse, relieve;',
        'Because Thy promise I believe,'
      ],
      [
        'Just as I am, Thy love unknown',
        'Hath broken every barrier down;',
        'Now to be Thine, yea, Thine alone,'
      ]
    ],
    englishChorus: [
      'O Lamb of God, I come! I come!'
    ]
  },
  {
    id: 'hymn-27',
    number: 27,
    title: 'Twatasha Mwe Lesa',
    writer: 'We Praise Thee O God',
    englishTune: 'We Praise Thee O God',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya no Kutasha',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 85:6 · Habakuki 3:2',
    isSample: false,
    melodicPreview: [65, 65, 69, 72, 72, 72, 74, 72, 69, 65],
    verses: [
      [
        'Twatasha mwe Le-sa ku Mwana wenu,',
        'Ye-su afwile ukutula ifwe.'
      ],
      [
        'Twatasha Lesa ku Mupashi wenu,',
        'A-tulangile Mupusushi wesu.'
      ],
      [
        'Lulumbi lonse kwa Lesa mukulu,',
        'A-tushitile nomba tuli bakwe.'
      ],
      [
        'Lulumbi lonse ku Mwana wa Mpanga.',
        'A-sendele fya bipa fyesu fyonse.'
      ],
      [
        'Mutwimye nokwi-sula fye kutemwa,',
        'Ko-sesha mitima yesu kuli iMwe.'
      ]
    ],
    chorus: [
      'Aleluya! Aleluya! Aleluya! Ameni;',
      'Aleluya! Aleluya! Mutwimye limbi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'We praise Thee, O God! for the Son of Thy love,',
        'For Jesus who died, and is now gone above.'
      ],
      [
        'We praise Thee, O God! for Thy Spirit of light,',
        'Who has shown us our Savior, and scattered our night.'
      ],
      [
        'All glory and praise to the God of all grace,',
        'Who has bought us, and sought us, and guided our ways.'
      ],
      [
        'All glory and praise to the Lamb that was slain,',
        'Who has borne all our sins, and has cleansed every stain.'
      ],
      [
        'Revive us again; fill each heart with Thy love;',
        'May each soul be rekindled with fire from above.'
      ]
    ],
    englishChorus: [
      'Hallelujah! Thine the glory, Hallelujah! Amen;',
      'Hallelujah! Thine the glory, Revive us again.'
    ]
  },
  {
    id: 'hymn-28',
    number: 28,
    title: 'Buleni Inshita Kukonka Yesu',
    writer: 'Take Time to Be Holy',
    englishTune: 'Take Time to Be Holy',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: '1 Petro 1:15-16 · Amalumbo 46:10',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69],
    verses: [
      [
        'Buleni inshita kukonka Yesu:',
        'Mube nankwe pe pe, temwa mashiwi;',
        'Mube ne cibusa ku bana bakwe;',
        'Mwilaba mu fyonse e kumupala'
      ],
      [
        'Buleni inshita kukonka Yesu;',
        '\'Kaleni mu nkama na Yesu Mfumu;',
        'Kumona Katula tulepalama;',
        'Ku fintu mwacita akamoneka,'
      ],
      [
        'Buleni inshita kukonka Yesu;',
        'Mwilaya pantanshi ya ntungulushi;',
        'Mu kwanga ne nsoni konkeni Mfumu;',
        'Moneni Katula, Cetekeleni.'
      ],
      [
        'Buleni inshita kukonka Yesu;',
        'Mweo obe onse pela ku Mfumu;',
        'Mupashi wa Lesa katungulula;',
        'Nokumuwamisha Kwikala nankwe,'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Take time to be holy, speak oft with thy Lord;',
        'Abide in Him always, and feed on His Word.',
        'Make friends of God’s children, help those who are weak,',
        'Forgetting in nothing His blessing to seek.'
      ],
      [
        'Take time to be holy, the world rushes on;',
        'Spend much time in secret, with Jesus alone.',
        'By looking to Jesus, like Him thou shalt be;',
        'Thy friends in thy conduct His likeness shall see.'
      ],
      [
        'Take time to be holy, let Him be thy Guide;',
        'And run not before Him, whatever betide.',
        'In joy or in sorrow, still follow the Lord,',
        'And, looking to Jesus, still trust in His Word.'
      ],
      [
        'Take time to be holy, be calm in thy soul,',
        'Each thought and each motive beneath His control.',
        'Thus led by His Spirit to fountains of love,',
        'Thou soon shalt be fitted for service above.'
      ]
    ]
  },
  {
    id: 'hymn-29',
    number: 29,
    title: 'Ube na Ine',
    writer: 'Abide With Me',
    englishTune: 'Abide With Me',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Luka 24:29 · 1 Abena Korinti 15:55',
    isSample: false,
    melodicPreview: [67, 67, 65, 63, 70, 72, 70, 68, 67],
    verses: [
      [
        'Ube naine kasuba kawa,',
        'Mfimfi yafula ube naine!',
        'No wakungafwa wine nshikwete,',
        'We kafwa wandi ube na ine!'
      ],
      [
        'Inshiku shandi shilepwa bwangu',
        'Fintu fyamucalo fili fyafye,',
        'Fyonse fili fyakupitilila,',
        'We ushaluka ube na ine!'
      ],
      [
        'Ndekufwaya inshiku shonse pe',
        'Uluse lobe lwaansha fyonse,',
        'Ube intungulushi yandi,',
        'Muli fyonsefye ube na ine!'
      ],
      [
        'Nshatine kuti ube na ine,',
        'Amacusho tekuti yancushe,',
        'Wamfwa ukwansha kobe kulikwi?',
        'Nkansha ne pantu uti na ine!'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Abide with me; fast falls the eventide;',
        'The darkness deepens; Lord, with me abide!',
        'When other helpers fail and comforts flee,',
        'Help of the helpless, O abide with me!'
      ],
      [
        'Swift to its close ebbs out life’s little day;',
        'Earth’s joys grow dim; its glories pass away;',
        'Change and decay in all around I see;',
        'O Thou who changest not, abide with me!'
      ],
      [
        'I need Thy presence every passing hour;',
        'What but Thy grace can foil the tempter’s power?',
        'Who, like Thyself, my guide and stay can be?',
        'Through cloud and sunshine, Lord, abide with me!'
      ],
      [
        'I fear no foe, with Thee at hand to bless;',
        'Ills have no weight, and tears no bitterness;',
        'Where is death’s sting? where, grave, thy victory?',
        'I triumph still, if Thou abide with me!'
      ]
    ]
  },
  {
    id: 'hymn-30',
    number: 30,
    title: 'Kasuba Kawa Nomba',
    writer: 'Day Is Dying in the West',
    englishTune: 'Day Is Dying in the West',
    category: 'prayer',
    categoryBemba: 'Icungulo',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'Esaya 6:3 · Ukusokolola 4:8 · Amalumbo 19:1-2',
    isSample: false,
    melodicPreview: [68, 60, 68, 68, 72, 70, 68, 70, 72, 68],
    verses: [
      [
        'Kasuba kawa nomba, Twapelwa ukutusha,',
        'Nomba toteni Lesa Ku mapalo twapelwa pa kasuba'
      ],
      [
        'Lesa Mfumu ya mweo, Ifintu fyonse fyenu;',
        'Mutupale \'fwe bonse, Lintu tulemupepa mube nefwe.'
      ],
      [
        'Tata mutusunge fwe lintu mfimfi yaisa;',
        'Tulemutasha lelo Ne mitima yacine, Lesa wesu.'
      ],
      [
        'Lintu fyonse fikapwa, Milimo yonse yapwa,',
        'Lesa wesu wa mulu Mutupele cifulo kuli imwe'
      ]
    ],
    chorus: [
      'Lesa Wamushilo mukalamba;',
      'Bonse kuno no mulu',
      'Bamutotela nomba Lesa Wesu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Day is dying in the west;',
        'Heaven is touching earth with rest;',
        'Wait and worship while the night',
        'Sets the evening lamps alight',
        'Through all the sky.'
      ],
      [
        'Lord of life, beneath the dome',
        'Of the universe, Thy home,',
        'Gather us who seek Thy face',
        'To the fold of Thy embrace,',
        'For Thou art nigh.'
      ],
      [
        'While the deepening shadows fall,',
        'Heart of love, enfolding all,',
        'Through the glory and the grace',
        'Of the stars that veil Thy face,',
        'Our hearts ascend.'
      ],
      [
        'When at last the shadows flee,',
        'And the eternal dawn we see,',
        'Tender Savior, through the night',
        'Lead us to the heavenly home',
        'Where glory shines.'
      ]
    ],
    englishChorus: [
      'Holy, holy, holy, Lord God of hosts!',
      'Heaven and earth are full of Thee,',
      'Heaven and earth are praising Thee,',
      'O Lord Most High!'
    ]
  },
  {
    id: 'hymn-31',
    number: 31,
    title: 'Mwe Katula Watemwikwa',
    writer: 'Sun of My Soul',
    englishTune: 'Sun of My Soul',
    category: 'prayer',
    categoryBemba: 'Icungulo',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Luka 24:29 · Amalumbo 84:11 · Ukusokolola 21:23',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 69, 67, 65, 72, 70, 69],
    verses: [
      [
        'Mwe Katula wate-mwikwa',
        'Ulubuto nga mu-lipo;',
        'Mwileka fintu fya calo',
        'Kufisha ku menso yesu.'
      ],
      [
        'Lintu napo-na mu tulo',
        'Mumpempule no-luse;',
        'Mupele kutontonkanya',
        'Kutemwa kwa Mupu-sushi.'
      ],
      [
        'Mube na ine \'nshiku pe,',
        'Kwabula Imwe nshi-kala;',
        'Lintu bushiku bwaila',
        'Mube na ine Ka-tula.'
      ],
      [
        'Mumpale ine lucelo',
        'Lintu nshate-ndeke ncito;',
        'Nga lintu Yesu abwela',
        'Nkekale nankwe ku mulu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Sun of my soul, Thou Savior dear,',
        'It is not night if Thou be near;',
        'O may no earthborn cloud arise',
        'To hide Thee from Thy servant’s eyes.'
      ],
      [
        'When the soft dews of kindly sleep',
        'My weary eyelids gently steep,',
        'Be my last thought, how sweet to rest',
        'Forever on my Savior’s breast.'
      ],
      [
        'Abide with me from morn till eve,',
        'For without Thee I cannot live;',
        'Abide with me when night is nigh,',
        'For without Thee I dare not die.'
      ],
      [
        'Come near and bless us when we wake,',
        'Ere through the world our way we take,',
        'Till in the ocean of Thy love',
        'We lose ourselves in heaven above.'
      ]
    ]
  },
  {
    id: 'hymn-32',
    number: 32,
    title: 'Mfumu e Cilibwe',
    writer: 'The Lord’s Our Rock',
    englishTune: 'The Lord’s Our Rock',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 94:22 · Amalumbo 61:2-3 · Esaya 32:2',
    isSample: false,
    melodicPreview: [65, 65, 65, 69, 72, 72, 72, 74, 72, 69],
    verses: [
      [
        'Mfumu e cilibwe cesu, E linga lyesu pe na pe',
        'Mu macusho tulekosa, E linga lyesu pe na pe'
      ],
      [
        'Cintelelwe pa kasuba, E linga lyesu pe na pe,',
        'Tatwabe no mwenso nomba, E linga lyesu pe na pe.'
      ],
      [
        'Nga milamba yafulisha, Elinga lyesu pe na pe.',
        'Lesa wesu atusunga, Elinga lyesu pe na pe.'
      ],
      [
        'Mwe cilibwe catemwikwa, Elinga lyesu pe na pe,',
        'Mube mupepi na ifwe, Elinga lyesu pe na pe.'
      ]
    ],
    chorus: [
      'Cilibwe-e cesu ca maka, cintelelwe muciswebebe,',
      'Ntungulu-shi yesu yacine E linga lyesu pe na pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'The Lord’s our Rock, in Him we hide,',
        'A shelter in the time of storm;',
        'Secure whatever ill betide,',
        'A shelter in the time of storm.'
      ],
      [
        'A shade by day, defense by night,',
        'A shelter in the time of storm;',
        'No fears alarm, no foes affright,',
        'A shelter in the time of storm.'
      ],
      [
        'The raging storms may round us beat,',
        'A shelter in the time of storm;',
        'We’ll never leave our safe retreat,',
        'A shelter in the time of storm.'
      ],
      [
        'O Rock divine, O Refuge dear,',
        'A shelter in the time of storm;',
        'Be Thou our helper ever near,',
        'A shelter in the time of storm.'
      ]
    ],
    englishChorus: [
      'Oh, Jesus is a rock in a weary land,',
      'A weary land, a weary land;',
      'Oh, Jesus is a rock in a weary land,',
      'A shelter in the time of storm.'
    ]
  },
  {
    id: 'hymn-33',
    number: 33,
    title: 'Antungulula Konse Fye',
    writer: 'He Leadeth Me',
    englishTune: 'He Leadeth Me',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 23:2-3 · Ukusokolola 7:17',
    isSample: false,
    melodicPreview: [62, 66, 69, 69, 71, 69, 66, 69, 64],
    verses: [
      [
        'Antungulula konse fye! Mashiwi yalenkosesha!',
        'No ko konse kuntu ndeya, A cili alenondola.'
      ],
      [
        'Nshita shimo mu bulanda, Nangu ndesekela bwino:',
        'Mu buseko na macusho, Acili alenondola.'
      ],
      [
        'Ndefwaya ukwikatisha, Nokushing\'wing\'wintikila;',
        'Lelo nkekushiwa fyonse, Pantu wene anondola.'
      ],
      [
        'Umulimo wandi wapwa, Na ine nayansha fyonse;',
        'Nangu kufwa teti ntine, Pantu Lesa anondola.'
      ]
    ],
    chorus: [
      'Anondola, anondola! Anondola no kuboko;',
      'Nkaba kakonka wawama Pantu anondola ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'He leadeth me: O blessed thought!',
        'O words with heavenly comfort fraught!',
        'Whate’er I do, where’er I be,',
        'Still ’tis God’s hand that leadeth me.'
      ],
      [
        'Sometimes ’mid scenes of deepest gloom,',
        'Sometimes where Eden’s bowers bloom,',
        'By waters still, o’er troubled sea,',
        'Still ’tis His hand that leadeth me.'
      ],
      [
        'Lord, I would clasp Thy hand in mine,',
        'Nor ever murmur nor repine;',
        'Content, whatever lot I see,',
        'Since ’tis my God that leadeth me.'
      ],
      [
        'And when my task on earth is done,',
        'When, by Thy grace, the victory’s won,',
        'E’en death’s cold wave I will not flee,',
        'Since God through Jordan leadeth me.'
      ]
    ],
    englishChorus: [
      'He leadeth me, He leadeth me,',
      'By His own hand He leadeth me;',
      'His faithful follower I would be,',
      'For by His hand He leadeth me.'
    ]
  },
  {
    id: 'hymn-34',
    number: 34,
    title: 'Lintu Mweo Wandi Waenda Bwino',
    writer: 'When Peace Like a River',
    englishTune: 'When Peace Like a River',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: '2 Ishamfumu 4:26 · Amalumbo 46:1-3 · Esaya 66:12',
    isSample: false,
    melodicPreview: [60, 60, 59, 57, 59, 60, 64, 62, 60],
    verses: [
      [
        'Lintu mweo wandi waenda bwino, Nangu malanda yafula;',
        'Muli fyonse \'fi mwalinsambilisha ukuti, Cawama mutima.'
      ],
      [
        'Nangu Ciwa alencusha kuno pe, Ubulayo bulengafwa,',
        'Yesu aleshiba kunaka kwandi, Afwile kumpela amaka'
      ],
      [
        'Nasekela nomba kwishiba ici, Ububi nangu bwafula;',
        'Asendele nomba tebwandi iyo, Lulumbi lulumbi ku Mfumu.'
      ],
      [
        'Mwe Katula wandi mwendeshe kwisa Lintu tukamona fyonse,',
        'Penga likalila apo akesa, Cawama mutima wandi pe.'
      ]
    ],
    chorus: [
      'Cawama .... Mutima .... Cawama mutima wandi pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When peace like a river attendeth my way,',
        'When sorrows like sea billows roll;',
        'Whatever my lot, Thou hast taught me to say,',
        'It is well, it is well with my soul.'
      ],
      [
        'Though Satan should buffet, though trials should come,',
        'Let this blest assurance control,',
        'That Christ has regarded my helpless estate,',
        'And hath shed His own blood for my soul.'
      ],
      [
        'My sin—oh, the bliss of this glorious thought!—',
        'My sin, not in part, but the whole,',
        'Is nailed to the cross, and I bear it no more,',
        'Praise the Lord, praise the Lord, O my soul!'
      ],
      [
        'And, Lord, haste the day when my faith shall be sight,',
        'The clouds be rolled back as a scroll;',
        'The trump shall resound, and the Lord shall descend,',
        'Even so, it is well with my soul.'
      ]
    ],
    englishChorus: [
      'It is well (It is well) with my soul (with my soul),',
      'It is well, it is well with my soul.'
    ]
  },
  {
    id: 'hymn-35',
    number: 35,
    title: 'E Bucibusa E Busekesha',
    writer: 'What a Fellowship',
    englishTune: 'What a Fellowship (Showalter)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Amalango 33:27 · Amalumbo 46:1',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 72, 70, 68, 65, 68, 70, 72, 68],
    verses: [
      [
        'E busibusa, e busekesha',
        'Lintu Yesu aletusunga;',
        'Umutende pe aletupela,',
        'Lintu tulemusumina fye.'
      ],
      [
        'Cawama nomba, ukukonka pe,',
        'Lintu Yesu aletusunga,',
        'Lubuto lwakwe munshila yesu,',
        'Lintu tulemusumina fye.'
      ],
      [
        'Tatwakatine, mwenso takuli,',
        'Lintu Yesu aletusunga;',
        'Atupela pe mutende wakwe,',
        'Lintu tulemusumina fye.'
      ]
    ],
    chorus: [
      'Ta-tu-ti-na Pantu Yesu e Katula;',
      'Ta-tu-ti-na Lintu Yesu aletusunga.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'What a fellowship, what a joy divine,',
        'Leaning on the everlasting arms;',
        'What a blessedness, what a peace is mine,',
        'Leaning on the everlasting arms.'
      ],
      [
        'O how sweet to walk in this pilgrim way,',
        'Leaning on the everlasting arms;',
        'O how bright the path grows from day to day,',
        'Leaning on the everlasting arms.'
      ],
      [
        'What have I to dread, what have I to fear,',
        'Leaning on the everlasting arms?',
        'I have blessed peace with my Lord so near,',
        'Leaning on the everlasting arms.'
      ]
    ],
    englishChorus: [
      'Leaning, leaning, safe and secure from all alarms;',
      'Leaning, leaning, leaning on the everlasting arms.'
    ]
  },
  {
    id: 'hymn-36',
    number: 36,
    title: 'Ndemumona Imwe',
    writer: 'My Faith Looks Up to Thee',
    englishTune: 'My Faith Looks Up to Thee (Olivet)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila no Kutetekela',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 12:2 · Amalumbo 25:1-2 · Yohane 1:29',
    isSample: false,
    melodicPreview: [63, 63, 63, 65, 67, 65, 63, 67, 68, 70, 67, 63],
    verses: [
      [
        'Ndemumona Imwe, Muli pa Kalfali,',
        'Mwana Lesa; Mumfwe shiwi lyandi.',
        'Mufumye ifibi, Ndefwaya pe na pe.',
        'Kuba wenu.'
      ],
      [
        'Peleni cikuku, Mukosho \'mutima,',
        'Ukubomba; Pantu mwamfwilile,',
        'Ndefwaya kutemwa,',
        'No kubomba \'lelo Ne nshiku pe.'
      ],
      [
        'Lintu ndi mu calo, Yafula macusho,',
        'Mulensunga; Mfifi \'be kasuba,',
        'Mufumye bulanda,',
        'Lelo ne nshiku pe, Ni \'ne wenu'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'My faith looks up to Thee, Thou Lamb of Calvary,',
        'Savior divine! Now hear me while I pray,',
        'Take all my guilt away, O let me from this day',
        'Be wholly Thine!'
      ],
      [
        'May Thy rich grace impart Strength to my fainting heart,',
        'My zeal inspire; As Thou hast died for me,',
        'O may my love to Thee Pure, warm, and changeless be,',
        'A living fire!'
      ],
      [
        'While life’s dark maze I tread, And griefs around me spread,',
        'Be Thou my Guide; Bid darkness turn to day,',
        'Wipe sorrow’s tears away, Nor let me ever stray',
        'From Thee aside.'
      ]
    ]
  },
  {
    id: 'hymn-37',
    number: 37,
    title: 'Lesa Mfumu Yandi',
    writer: 'Sarah F. Adams / Lowell Mason',
    englishTune: 'Nearer, My God to Thee (Bethany)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila no Kupalama',
    key: 'G Major',
    timeSignature: '6/4',
    scripture: 'Ukutendeka 28:10-19 · Amalumbo 73:28 · Yakobo 4:8',
    isSample: false,
    melodicPreview: [71, 69, 67, 71, 69, 67, 64, 62],
    verses: [
      [
        'Lesa Mfumu yandi kampalame,',
        'Nangu kulupanda naninikwa;',
        'Elyo, lwimbo lwandi nkamupalamina'
      ],
      [
        'Nangu ngo mweni fye naililwa,',
        'Bushiku bwafita, ine neka;',
        'Lelo mufiloto nkamupalamina,'
      ],
      [
        'Mu nshila ya cine ndefwaisha,',
        'Fyonse wantumina ifya luse;',
        'Bangeli bangafwa kumupalamina,'
      ],
      [
        'Elyo, nashibuka, nkamutasha,',
        'Nangu mubulanda nkamutota;',
        'Elyo mu machusho nkamupalamina'
      ],
      [
        'Elyo, Imfwa yapwa nkaya kwesu,',
        'Munshila ku mulu nkemba cine;',
        'Ulwimbo lwakale lwakupalamina,'
      ]
    ],
    chorus: [
      'Nkamupalamina Lesa wandi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Nearer, my God, to Thee, nearer to Thee!',
        'E’en though it be a cross that raiseth me,',
        'Still all my song shall be, nearer, my God, to Thee.'
      ],
      [
        'Though like the wanderer, the sun gone down,',
        'Darkness be over me, my rest a stone;',
        'Yet in my dreams I’d be nearer, my God, to Thee.'
      ],
      [
        'There let the way appear, steps unto heaven;',
        'All that Thou sendest me, in mercy given;',
        'Angels to beckon me nearer, my God, to Thee.'
      ],
      [
        'Then, with my waking thoughts bright with Thy praise,',
        'Out of my stony griefs Bethel I’ll raise;',
        'So by my woes to be nearer, my God, to Thee.'
      ],
      [
        'Or if on joyful wing cleaving the sky,',
        'Sun, moon, and stars forgot, upward I fly,',
        'Still all my song shall be, nearer, my God, to Thee.'
      ]
    ],
    englishChorus: [
      'Nearer, my God, to Thee, nearer to Thee!'
    ]
  },
  {
    id: 'hymn-38',
    number: 38,
    title: 'Mwe Bakwa Lesa',
    writer: 'Christopher R. Blackall / William H. Doane',
    englishTune: 'Firmly Stand for God (Stand on the Rock)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushipikisha no Kushimpa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinte 10:4 · Efese 6:10-13 · Amalumbo 18:2',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Mwe bakwa Lesa koseni nomba,',
        'Nangu amachushyo yafulishya,',
        'Ali libwe amupela maka,',
        'Lintu Ciwa apalama.'
      ],
      [
        'Koseni mu cine cakwa Lesa.',
        'Koseni bucetekelo bwenu;',
        'Ali Libwe amupelo bwansho,',
        'Pali bubi pa calo.'
      ],
      [
        'Konkeni cine akafwa imwe,',
        'Nangu yalinda nshita itali;',
        'Cine cikamupela mutende,',
        'Mu macusho ya mweo.'
      ]
    ],
    chorus: [
      'Kaleni pa Libwe, kaleni pa Libwe,',
      'Yesu Klistu e Libwe.',
      '"Nga twansho bubi ci-ne tukekala,',
      'Mubufumu bwa Katula.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Firmly stand for God, in the world’s mad strife,',
        'Tho’ the bleak winds roar, and the waves beat high;',
        '’Tis the Rock alone giveth strength and life,',
        'When the hosts of sin are nigh.'
      ],
      [
        'Firmly stand for Right, with a motive pure,',
        'With a true heart bold, and a faith e’er strong;',
        '’Tis the Rock alone giveth triumph sure,',
        'O’er the world’s array of wrong.'
      ],
      [
        'Firmly stand for Truth, it will serve you best;',
        'Tho’ it waiteth long, it is sure at last;',
        '’Tis the Rock alone giveth peace and rest,',
        'When the storms of life are past.'
      ]
    ],
    englishChorus: [
      'Let us stand on the Rock, firmly stand on the Rock,',
      'On the Rock of Christ alone;',
      'If the strife we endure, we shall stand secure,',
      '’Mid the throng who surround the throne.'
    ]
  },
  {
    id: 'hymn-39',
    number: 39,
    title: 'Busumino Bwandi',
    writer: 'Edward Mote / William B. Bradbury',
    englishTune: 'My Hope Is Built (The Solid Rock)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila no Kutetekela',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: '1 Abena Korinte 3:11 · Matayo 7:24-25 · Amalumbo 62:1-2',
    isSample: false,
    melodicPreview: [60, 65, 65, 65, 67, 69, 65, 67, 69, 70, 69, 67, 65],
    verses: [
      [
        'Busumino bwandi nomba,',
        'Mu mulopa wakwa Yesu;',
        'Mu bantu nshilesumina,',
        'Kano Mfumu Yesu eka.'
      ],
      [
        'Lintu mpumi nshilemona,',
        'Ndesumina luse lwakwe',
        'Mu macusho yakalamba,',
        'Yesu ni cibusa wandi.'
      ],
      [
        'Ubulayo bwakwa Yesu',
        'Bwankosesha umutima;',
        'Nga natendeko kufilwa,',
        'Ni Yesu anjikatila.'
      ],
      [
        'Ndemufwaya ukunsunga,',
        'No kubutisha mutima;',
        'Kabili lintu mukesa,',
        'Munsende ine ku mulu'
      ]
    ],
    chorus: [
      'Yesu ni Li bwe lya maka,',
      'Ifintu fimbi ifya fye',
      'Ifintu fimbi ifya fye.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'My hope is built on nothing less',
        'Than Jesus’ blood and righteousness;',
        'I dare not trust the sweetest frame,',
        'But wholly lean on Jesus’ name.'
      ],
      [
        'When darkness veils His lovely face,',
        'I rest on His unchanging grace;',
        'In every high and stormy gale,',
        'My anchor holds within the veil.'
      ],
      [
        'His oath, His covenant, His blood,',
        'Support me in the whelming flood;',
        'When all around my soul gives way,',
        'He then is all my hope and stay.'
      ],
      [
        'When He shall come with trumpet sound,',
        'O may I then in Him be found;',
        'Dressed in His righteousness alone,',
        'Faultless to stand before the throne.'
      ]
    ],
    englishChorus: [
      'On Christ, the solid Rock, I stand;',
      'All other ground is sinking sand,',
      'All other ground is sinking sand.'
    ]
  },
  {
    id: 'hymn-40',
    number: 40,
    title: 'Nga Twaya ne Mfumu',
    writer: 'John H. Sammis / Daniel B. Towner',
    englishTune: 'Trust and Obey',
    category: 'faith-and-trust',
    categoryBemba: 'Ukunakila no Kutetekela',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: '1 Samwele 15:22 · Yohane 14:15, 21 · Amalumbo 119:105',
    isSample: false,
    melodicPreview: [65, 67, 69, 69, 67, 65, 67, 69, 65, 62, 60],
    verses: [
      [
        'Nga twaya ne Mfumu mu mashiwi yakwe',
        'Atupelo lubuto pefye:',
        'Lintu tunakila, Ekala mupepi,',
        'Na kuli bonse banakila'
      ],
      [
        'Amacusho yonse yafumiwa bwangu',
        'Lintu Lesa ati, "Mutende."',
        'Te ukutwishika, takuli bulanda,',
        'Lintu tulenakila Yesu'
      ],
      [
        'Lelo tatwishiba, Ukutemwa kwakwe,',
        'Pantu tatumusuminisha;',
        'Amapalo yakwe, No buseko bonse,',
        'Kuli abo bamusumina.'
      ],
      [
        'Nomba ne cacine, Tukaba pankasa,',
        'Nelyo tukenda nankwe bwino;',
        'Amashiwi yakwe, Tukacita pe pe.',
        'Muli fyonse tukasumina,'
      ]
    ],
    chorus: [
      'Mumfwile pe, pantu kuli bonse,',
      'Basumina na Yesu,',
      'Abapela kwanga'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When we walk with the Lord in the light of His Word,',
        'What a glory He sheds on our way!',
        'While we do His good will, He abides with us still,',
        'And with all who will trust and obey.'
      ],
      [
        'Not a shadow can rise, not a cloud in the skies,',
        'But His smile quickly drives it away;',
        'Not a doubt nor a fear, not a sigh nor a tear,',
        'Can abide while we trust and obey.'
      ],
      [
        'But we never can prove the delights of His love,',
        'Until all on the altar we lay;',
        'For the favor He shows, and the joy He bestows,',
        'Are for them who will trust and obey.'
      ],
      [
        'Then in fellowship sweet we will sit at His feet,',
        'Or we’ll walk by His side in the way;',
        'What He says we will do, where He sends we will go,',
        'Never fear, only trust and obey.'
      ]
    ],
    englishChorus: [
      'Trust and obey, for there’s no other way',
      'To be happy in Jesus,',
      'But to trust and obey.'
    ]
  },
  {
    id: 'hymn-41',
    number: 41,
    title: "Lesa 'be Nemwe",
    writer: 'Jeremiah E. Rankin / William G. Tomer',
    englishTune: 'God Be With You Till We Meet Again',
    category: 'faith-and-trust',
    categoryBemba: 'Amapalo ya Kupwisha',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Ukutendeka 31:49 · 2 Abena Korinte 13:14 · Numeri 6:24-26',
    isSample: false,
    melodicPreview: [67, 64, 67, 69, 67, 64, 65, 62, 60],
    verses: [
      [
        "Lesa 'be nemwe tukumane;",
        'Amutungulula bwino,',
        'Amufimba no luse lwakwe;',
        "Lesa 'be nemwe tukumane."
      ],
      [
        "Lesa 'be nemwe tukumane,",
        'Amufimba na mapindo,',
        'Amwikushisha na mana;',
        "Lesa 'be nemwe tukumane"
      ],
      [
        "Lesa 'be nemwe tukumane,",
        'Lintu muli mumacusho,',
        'Alemukumba nshiku pe,',
        "Lesa 'be nemwe tukumane."
      ],
      [
        "Lesa 'be nemwe tukumane,",
        'Amwisusha no kutemwa,',
        'A-lesha imfwa kuli mwe,',
        "Lesa 'be nemwe tukumane."
      ]
    ],
    chorus: [
      'Lintu twakumana,',
      'Bonse fye kuli Yesu;',
      'Lintu twakumana,',
      "Lesa 'be nemwe tukumane."
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'God be with you till we meet again;',
        'By His counsels guide, uphold you,',
        'With His sheep securely fold you;',
        'God be with you till we meet again.'
      ],
      [
        'God be with you till we meet again;',
        '’Neath His wings protecting hide you,',
        'Daily manna still provide you;',
        'God be with you till we meet again.'
      ],
      [
        'God be with you till we meet again;',
        'When life’s perils thick confound you,',
        'Put His loving arms around you;',
        'God be with you till we meet again.'
      ],
      [
        'God be with you till we meet again;',
        'Keep love’s banner floating o’er you,',
        'Smite death’s threatening wave before you;',
        'God be with you till we meet again.'
      ]
    ],
    englishChorus: [
      'Till we meet, till we meet,',
      'Till we meet at Jesus’ feet;',
      'Till we meet, till we meet,',
      'God be with you till we meet again.'
    ]
  },
  {
    id: 'hymn-42',
    number: 42,
    title: 'Kuli Bamunyinane Kuno',
    writer: 'Anzentia I. P. Chapman / John H. Tenney',
    englishTune: 'With Friends on Earth (We’ll Never Say Goodbye)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:4 · 1 Abena Tesalonika 4:17-18 · Ukusokolola 7:16-17',
    isSample: false,
    melodicPreview: [60, 63, 68, 72, 72, 70, 68, 65, 63],
    verses: [
      [
        'Kuli bamunyinane kuno',
        'Tulesekelela,',
        'Lelo bulanda bwaisa',
        'Kulekana libili.'
      ],
      [
        'Icintu cimo tusekesha',
        'Lintu tulekana,',
        'Kuti tatwakalekane',
        'Ku calo ca kwa Lesa.'
      ],
      [
        'Mashiwi yakulekana',
        'Tayakabe ko kulya,',
        'Lelo nyimbo sha buseko',
        'Tukemba mu mulu pe.'
      ]
    ],
    chorus: [
      'Tatwakalekane uko ku calo ca Lesa,',
      'Mu calo ico cawama tatwakalekane.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'With friends on earth we meet in gladness,',
        'While swift the moments fly,',
        'Yet ever comes the thought of sadness,',
        'That we must say goodbye.'
      ],
      [
        'How joyful is the hope that lingers,',
        'When loved ones cross death’s sea,',
        'That we, when all earth’s toils are ended,',
        'With them shall ever be.'
      ],
      [
        'No parting words shall e’er be spoken,',
        'In yonder home so fair,',
        'But songs of joy, and peace, and gladness,',
        'We’ll sing forever there.'
      ]
    ],
    englishChorus: [
      'We’ll never say goodbye in heaven,',
      'We’ll never say goodbye;',
      'For in that land of joy and song,',
      'We’ll never say goodbye.'
    ]
  },
  {
    id: 'hymn-43',
    number: 43,
    title: 'Tulo Twapalwa',
    writer: 'Margaret Mackay / William B. Bradbury',
    englishTune: 'Asleep in Jesus (Rest)',
    category: 'comfort-grief-and-funerals',
    categoryBemba: 'Ukusansamusha ne Mfwa',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: '1 Abena Tesalonika 4:13-14 · Ukusokolola 14:13 · 1 Abena Korinte 15:51-55',
    isSample: false,
    melodicPreview: [65, 69, 72, 70, 69, 67, 65, 67, 69],
    verses: [
      [
        'Tulo twapalwa, twapalwa,',
        'Ukulila konse kwapwa;',
        'Ukulala utulo fye,',
        'Amacusho yonse yapwa.'
      ],
      [
        'Tulo twapalwa, twapalwa,',
        'Kubuka pamo kwapalwa:',
        'Lintu Katula akesa,',
        'Tulo tukapwa munshinshi.'
      ],
      [
        'Tulo twapalwa, twapalwa,',
        'Yesu, Katula akesa;',
        'Ukonaula imfwa pe,',
        'Bakema mucishifwa pe.'
      ]
    ],
    chorus: [
      'Tulo twapalwa, cawama,',
      'Ukuteyanya kul’ici:',
      'Kutusha mu busumino,',
      'Ukupalwa inshiku pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Asleep in Jesus! blessed sleep,',
        'From which none ever wakes to weep;',
        'A calm and undisturbed repose,',
        'Unbroken by the last of foes.'
      ],
      [
        'Asleep in Jesus! peaceful rest,',
        'Whose waking is supremely blest;',
        'No fear, no woe, shall dim that hour',
        'That manifests the Savior’s power.'
      ],
      [
        'Asleep in Jesus! O for me',
        'May such a blissful refuge be;',
        'Securely shall my ashes lie,',
        'Waiting the summons from on high.'
      ]
    ],
    englishChorus: [
      'Blessed sleep, peaceful and sweet,',
      'Resting safely at His feet;',
      'Resting in faithful hope and grace,',
      'Blessed forever in His embrace.'
    ]
  },
  {
    id: 'hymn-44',
    number: 44,
    title: 'Lintu Imilimo Yandi Yapwa',
    writer: 'Fanny J. Crosby (1891)',
    englishTune: 'When My Life Work Is Ended (I Shall Know Him)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinte 13:12 · Ukusokolola 22:4 · 1 Yohane 3:2',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 75, 77, 75, 72, 70, 68],
    verses: [
      [
        'Lintu imilimo yandi yapwa muno mu calo,',
        'Lintu Lesa ampelo mweo wa pe,',
        'Nkamwishiba Katula lintu nkafika uko,',
        'Pantanshi nkamona Yesu Katula.'
      ],
      [
        'Lintu nkamone mpumi ya Mfumu nkasekela,',
        'Menso yakwe yabengeshima \'luse;',
        'Mutima ukatasha ku luse ne cikuku,',
        'Awamishe ng\'anda yandi ku mulu.'
      ],
      [
        'Ndetontonkanya batemwikwa bandi bafwile,',
        'Ndebukisha nomba lintu bafwile,',
        'Mu bufumu bwa Lesa tukabamona pe pe,',
        'Lelo Yesu ndetemwisha kumona.'
      ],
      [
        'M\'fipata fyamusumba fyafwikwa mu lubuto,',
        'Akafumye filambu fyandi ntanshi,',
        'Ulwimbo nkemba pamo na bantu bakwe bonse,',
        'Lelo Yesu ndetemwisha kumona.'
      ]
    ],
    chorus: [
      'Nkamwishiba, nkamwishiba,',
      'Lintu nkafika mu bufumu;'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When my lifework is ended, and I cross the swelling tide,',
        'When the bright and glorious morning I shall see;',
        'I shall know my Redeemer when I reach the other side,',
        'And His smile will be the first to welcome me.'
      ],
      [
        'Oh, the soul-thrilling rapture when I view His blessed face,',
        'And the luster of His kindly beaming eye;',
        'How my full heart will praise Him for the mercy, love, and grace,',
        'That prepare for me a mansion in the sky.'
      ],
      [
        'Oh, the dear ones in glory, how they beckon me to come,',
        'And our parting at the river I recall;',
        'To the sweet vales of Eden they will sing my welcome home;',
        'But I long to see my Savior first of all.'
      ],
      [
        'Through the gates to the city in a robe of spotless white,',
        'He will lead me where no tears will ever fall;',
        'In the glad song of ages I shall mingle with delight;',
        'But I long to see my Savior first of all.'
      ]
    ],
    englishChorus: [
      'I shall know Him, I shall know Him,',
      'When I reach that heavenly kingdom;',
      'I shall know Him, I shall know Him,',
      'By the print of the nails in His hand.'
    ]
  },
  {
    id: 'hymn-45',
    number: 45,
    title: 'Mpeni Cipingo',
    writer: 'Priscilla J. Owens (1887)',
    englishTune: 'Give Me the Bible',
    category: 'faith-and-trust',
    categoryBemba: 'Cebo ca kwa Lesa no Kutetekela',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 119:105 · 2 Timote 3:16 · 2 Petro 1:19',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 67, 63, 65, 67],
    verses: [
      [
        'Mpeni Cipingo, ntanda ya lubuto,',
        'Eca kukosesha ulebifya;',
        'Takuli ibimbi lingacifisa,',
        'Pantu Yesu aishile tula.'
      ],
      [
        'Mpeni Cipingo lyo ndi no bulanda,',
        'Lintu mpulumushi shafulila,',
        'Mpeni mashiwi yasoswa na Yesu,',
        'Kuti nkabe no kucetekela.'
      ],
      [
        'Mpeni Cipingo cibutisha nshila,',
        'Nkamone fibi fya muno calo;',
        'Cikabutisha ifyo fyafitisha,',
        'E cingapela fye umutende.'
      ],
      [
        'Mpeni Cipingo lubuto lwa mweo,',
        'Ulwa kunkosesha mumfwa yandi;',
        'Nangu ulubuto ulwa ku mulu,',
        'Nangu ululumbi lwakwa Lesa.'
      ]
    ],
    chorus: [
      'Mpeni Cipingo, lubuto lwa mweo,',
      'Lubuto lwenu kuti lwa mbaka;',
      'Kutemwa na malayo fikaba pe,',
      'Bukasuke bushiku bukapwe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Give me the Bible, star of gladness gleaming,',
        'To cheer the wand’rer lone and tempest-tossed;',
        'No storm can hide that radiance peaceful beaming,',
        'Since Jesus came to seek and save the lost.'
      ],
      [
        'Give me the Bible when my heart is broken,',
        'When sin and grief have filled my soul with fear;',
        'Give me the precious words by Jesus spoken,',
        'Hold up faith’s lamp to show my Savior near.'
      ],
      [
        'Give me the Bible, all my steps enlighten,',
        'Teach me the danger of these realms below;',
        'That lamp of safety, o’er the gloom shall brighten,',
        'That light alone the path of peace can show.'
      ],
      [
        'Give me the Bible, light of life immortal!',
        'Hold up that splendor by the open grave;',
        'Show me the light from heaven’s shining portal,',
        'Show me the glory gilding Jordan’s wave.'
      ]
    ],
    englishChorus: [
      'Give me the Bible, holy message shining;',
      'Thy light shall guide me in the narrow way;',
      'Precept and promise, law and love combining,',
      '’Til night shall vanish in eternal day.'
    ]
  },
  {
    id: 'hymn-46',
    number: 46,
    title: 'Imba Kabili Kuli \'Ne',
    writer: 'Philip P. Bliss (1874)',
    englishTune: 'Sing Them Over Again to Me (Wonderful Words of Life)',
    category: 'faith-and-trust',
    categoryBemba: 'Cebo ca kwa Lesa no Kutetekela',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Yohane 6:63, 68 · Abena Filipi 2:16',
    isSample: false,
    melodicPreview: [67, 67, 67, 66, 67, 69, 67, 64],
    verses: [
      [
        'Imba kabili kuli \'ne, Mashiwi ya mweo;',
        'Nangu kuwama kwayako, Mashiwi ya mweo;',
        'Mashiwi yawama,',
        'Yatusambilisha.'
      ],
      [
        'Yesu abapele bonse, Mashiwi ya mweo;',
        'We kabifya umfwo bwite, Mashiwi ya mweo;',
        'Yapelwa kul’ifwe,',
        'Kututwala ku mulu.'
      ],
      [
        'Tume ciunda celandwe, Mashiwi ya mweo;',
        'Yaleta bonse mutende, Mashiwi ya mweo;',
        'Yesu e Katula,',
        'Atubutishishe.'
      ]
    ],
    chorus: [
      'Ayawama, ayawama, Mashiwi ya mweo;',
      'Ayawama, ayawama, Mashiwi ya mweo.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Sing them over again to me, wonderful words of life,',
        'Let me more of their beauty see, wonderful words of life;',
        'Words of life and beauty,',
        'Teach me faith and duty.'
      ],
      [
        'Christ, the blessed One, gives to all wonderful words of life;',
        'Sinner, list to the loving call, wonderful words of life;',
        'All so freely given,',
        'Wooing us to heaven.'
      ],
      [
        'Sweetly echo the gospel call, wonderful words of life;',
        'Offer pardon and peace to all, wonderful words of life;',
        'Jesus, only Savior,',
        'Sanctify forever.'
      ]
    ],
    englishChorus: [
      'Beautiful words, wonderful words,',
      'Wonderful words of life;',
      'Beautiful words, wonderful words,',
      'Wonderful words of life.'
    ]
  },
  {
    id: 'hymn-47',
    number: 47,
    title: 'Pa Mipuma ya Yodani',
    writer: 'Samuel Stennett (1787) / Rigdon M. McIntosh (1877)',
    englishTune: "On Jordan's Stormy Banks I Stand",
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:1-4 · AbaHebere 11:13-16',
    isSample: false,
    chorusLabel: 'Chibwekesho',
    verses: [
      [
        'Pa mipuma ya Yodani,',
        'Ndemona kwishilya;',
        'Eko icalo ca Kenani,',
        'Fintu fyandi uko.'
      ],
      [
        'Icalo ico cawama,',
        'Bushiku takuli;',
        'Yesu e kasuba uko,',
        'Apela lubuto.'
      ],
      [
        "Inshita nshi nkafika 'ko,",
        'Kupalwa pe na pe,',
        'Nokumona Tata wandi,',
        'Kutusha ku mwakwe?'
      ],
      [
        'Nomba umutima wandi,',
        'Tautemwa muno,',
        'Nangu mabimbi bukali,',
        'Ndefwaya kwishilya.'
      ]
    ],
    chorus: [
      'Tukatusha mu calo cisuma,',
      'Kwishilya pa mipuma kulya;',
      'Nokwimba ulwimbo lwa Mpanga pe na pe,',
      'Kwikala pamo na Yesu.'
    ],
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69],
    englishVerses: [
      [
        'On Jordan’s stormy banks I stand,',
        'And cast a wishful eye',
        'To Canaan’s fair and happy land,',
        'Where my possessions lie.'
      ],
      [
        'O’er all those wide, extended plains',
        'Shines one eternal day;',
        'There God the Son forever reigns,',
        'And scatters night away.'
      ],
      [
        'When shall I reach that happy place,',
        'And be forever blest?',
        'When shall I see my Father’s face,',
        'And in His bosom rest?'
      ],
      [
        'Filled with delight, my raptured soul',
        'Would here no longer stay;',
        'Though Jordan’s waves around me roll,',
        'Fearless I’d launch away.'
      ]
    ],
    englishChorus: [
      'We will rest in the fair and happy land,',
      'Just across on the evergreen shore,',
      'Sing the song of Moses and the Lamb, by and by,',
      'And dwell with Jesus evermore.'
    ]
  },
  {
    id: 'hymn-48',
    number: 48,
    title: 'Tukaba no Kwanga',
    writer: 'Franklin E. Belden (1899)',
    englishTune: "Joy By and By (O There'll Be Joy)",
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'B-flat Major',
    timeSignature: '4/4',
    scripture: 'Mateo 13:30, 39 · Yohane 14:1-3 · Ukusokolola 21:2',
    isSample: false,
    chorusLabel: 'Chibwekesho',
    verses: [
      [
        'Lintu imilimo ikapwa,',
        'Elyo tukaba no kwanga;',
        'Lintu baleta mipasa,',
        'Ku musumba wa Lesa.'
      ],
      [
        'Inyimbo tukemba shawama,',
        'Tukatasha ne mitima,',
        'Kulumbanye Mfumu Yesu,',
        'Mu musumba pe na pe.'
      ],
      [
        'Icawama catusekesha,',
        'Masano yafula kulya;',
        'Aya citilwe na Yesu,',
        'Mu musumba wa Lesa.'
      ]
    ],
    chorus: [
      'Tukaba no kwanga kulya,',
      'Tukaba nokwanga pefye;',
      'Pantu inshita yapalama,',
      'Kuli bonse kutusha.'
    ],
    melodicPreview: [70, 70, 70, 70, 72, 74, 70, 67, 70, 65],
    englishVerses: [
      [
        'O there’ll be joy when the work is done,',
        'Joy when the reapers gather home,',
        'Bringing the sheaves at set of sun',
        'To the New Jerusalem.'
      ],
      [
        'Sweet are the songs that we hope to sing,',
        'Grateful the thanks our hearts shall bring,',
        'Praising forever Christ our King',
        'In the New Jerusalem.'
      ],
      [
        'Pure are the joys that await us there,',
        'Many the golden mansions fair;',
        'Jesus Himself doth them prepare,',
        'In the New Jerusalem.'
      ]
    ],
    englishChorus: [
      'Joy, joy, joy, there’ll be joy by and by,',
      'Joy, joy, joy, where the joys never die;',
      'Joy, joy, joy, for the day draweth nigh',
      'When the workers gather home.'
    ]
  },
  {
    id: 'hymn-49',
    number: 49,
    title: 'Ndetontonkanya \'Ne',
    writer: 'Phoebe Cary (1852) / Philip Phillips (1866)',
    englishTune: 'Nearer Home (One Sweetly Solemn Thought)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'B-flat Major',
    timeSignature: '4/4',
    scripture: 'AbaRoma 13:11 · Yohane 14:2-3 · 2 Timote 4:7-8',
    isSample: false,
    chorusLabel: 'Chibwekesho',
    verses: [
      [
        "Ndetontonkanya 'ne,",
        'Libili libili;',
        'Napalama kwesu lelo,',
        'Nomba ndi mupepi.'
      ],
      [
        "Napalama ng'anda,",
        'Yakwa Tata wandi;',
        'Ne cipuna cakwa Yesu,',
        'Nomba ndi mupepi.'
      ],
      [
        'Napalama kwesu,',
        'Nkayatula cipe,',
        'No bulanda bwandi bonse,',
        'Nkafwala citebo.'
      ]
    ],
    chorus: [
      'Napalama, napalama,',
      'Napalama kwesu;',
      'Lelo, nomba ndi mupepi.'
    ],
    melodicPreview: [62, 65, 67, 65, 62, 60, 58],
    englishVerses: [
      [
        'One sweetly solemn thought',
        'Comes to me o’er and o’er;',
        'I’m nearer home today,',
        'Than e’er I’ve been before.'
      ],
      [
        'Nearer my Father’s house,',
        'Where many mansions be;',
        'Nearer the great white throne today,',
        'Nearer the crystal sea.'
      ],
      [
        'Nearer the bound of life,',
        'Where burdens are laid down;',
        'Nearer leaving the cross today,',
        'Nearer gaining the crown.'
      ]
    ],
    englishChorus: [
      'Nearer my home, nearer my home,',
      'Nearer my home today,',
      'Than e’er I’ve been before.'
    ]
  },
  {
    id: 'hymn-50',
    number: 50,
    title: 'Calo Tusumina',
    writer: 'Sanford F. Bennett (1868) / Joseph P. Webster (1868)',
    englishTune: 'Sweet By and By (There’s a Land That Is Fairer Than Day)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:1-4 · AbaHebere 11:13-16 · Yohane 14:1-3',
    melodicPreview: [62, 67, 71, 71, 71, 69, 67, 69, 71, 67],
    verses: [
      [
        'Calo tusumina ciliko,',
        'No busumino tucimona;',
        'Pantu Tata alepembela,',
        'Tukekala mu calo cilya.'
      ],
      [
        'Pa cabu cawama tukemba,',
        'Nyimbo sho shawama shapalwa;',
        'E, no bulanda takwakabe,',
        'No kulila kwine kukapwa.'
      ],
      [
        'A nakuli Shifwe mu mulu,',
        'Tukamulumbanya ne mbila;',
        'Mulandu wa bupe, kutemwa,',
        'Na mapalo ya nshiku shonse.'
      ]
    ],
    chorus: [
      'Tukaya kumana kucalo,',
      'Yesu ateyanya (teyanya);',
      'Tukaya kumana na Yesu,',
      'Na bonse basuma.'
    ],
    englishVerses: [
      [
        'There’s a land that is fairer than day,',
        'And by faith we can see it afar;',
        'For the Father waits over the way',
        'To prepare us a dwelling place there.'
      ],
      [
        'We shall sing on that beautiful shore',
        'The melodious songs of the blest;',
        'And our spirits shall sorrow no more,',
        'Not a sigh for the blessing of rest.'
      ],
      [
        'To our bountiful Father above,',
        'We will offer our tribute of praise',
        'For the glorious gift of His love',
        'And the blessings that hallow our days.'
      ]
    ],
    englishChorus: [
      'In the sweet by and by,',
      'We shall meet on that beautiful shore;',
      'In the sweet by and by,',
      'We shall meet on that beautiful shore.'
    ]
  },
  {
    id: 'hymn-51',
    number: 51,
    title: 'Mwe Lesa Wesu Mulubatisho',
    writer: 'William Augustine Ogden (1876)',
    englishTune: 'Baptize Us Anew (Ogden)',
    category: 'communion-and-baptism',
    categoryBemba: 'Ulubatisho no Kuipeela',
    key: 'A-flat Major',
    timeSignature: '3/4',
    scripture: 'Imilimo 1:5 · Mateo 3:16-17 · Abena Roma 6:3-4',
    melodicPreview: [60, 63, 60, 58, 56, 56, 58, 60, 61, 63],
    verses: [
      [
        'Mwe Lesa wesu mu lubatisho,',
        'Na maka ya mulu Lesa palama'
      ],
      [
        'Ifintu fyesu e fyafye fyeka,',
        'Tusambe ufumye ububi bwesu.'
      ],
      [
        'We Mupusushi tupalwe nomba,',
        'Twalomba mapalo, palama ifwe.'
      ],
      [
        'Mumfwe ishiwi, ishiwi lyakwe',
        'Ube watemwikwa nasekelela.'
      ]
    ],
    chorus: [
      'Twapapata nomba Katula wesu',
      'Kutemwa no M\'pashi mulubatisho.'
    ],
    englishVerses: [
      [
        'Baptize us anew with power from on high,',
        'With love, O refresh us! Dear Savior, draw nigh.'
      ],
      [
        'Unworthy we cry, unholy, unclean,',
        'O wash us and cleanse us from sin’s guilty stain.'
      ],
      [
        'O heavenly Dove, descend from on high!',
        'We plead Thy rich blessing; in mercy draw nigh.'
      ],
      [
        'O list the glad voice! From heaven it came:',
        '“Thou art My beloved, well pleased I am.”'
      ]
    ],
    englishChorus: [
      'We humbly beseech Thee, Lord Jesus, we pray,',
      'With love and the Spirit baptize us today.'
    ]
  },
  {
    id: 'hymn-52',
    number: 52,
    title: 'Iseni Nomba Katula',
    writer: 'Robert Robinson (1758) / John Wyeth (1813)',
    englishTune: 'Come, Thou Fount of Every Blessing (Nettleton)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'D Major',
    timeSignature: '3/4',
    scripture: '1 Samwele 7:12 · Amalumbo 103:1-5 · Abena Efese 1:7',
    melodicPreview: [62, 62, 64, 66, 64, 62, 59, 57, 62, 64, 66, 64, 62],
    verses: [
      [
        'Iseni nomba Katula, M\'wamye mutima wandi;',
        'Mimana ya luse lwa pe, Yatwita ukutasha,',
        'Ndefwaya ukumutasha, pantu luse lwafula;',
        'Busumino bwa mweo pe, Bulempelo buseko.'
      ],
      [
        'Ndeimika Ebenesar, Mwangafwilile ine;',
        'Ndesumina ukufika ku nganda ya Katula;',
        'Yesu amfwaile ine, Nalubile mu mfifi,',
        'Ampuswishe ku macusho, Ampele umulopa.'
      ],
      [
        'Luse lwenu lwafulisha, Ndelumone nshiku pe;',
        'Kabili ndefwaya nomba, Mpalame kuli Imwe;',
        'Ine ndi ne mpulumushi, Shonse ndepela Imwe;',
        'O, Yehofa ndemufwaya, Munyingishe ku mulu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Come, Thou Fount of every blessing, tune my heart to sing Thy grace;',
        'Streams of mercy, never ceasing, call for songs of loudest praise.',
        'Teach me some melodious sonnet, sung by flaming tongues above;',
        'Praise the mount—I’m fixed upon it, mount of Thy redeeming love.'
      ],
      [
        'Here I raise my Ebenezer; hither by Thy help I’ve come;',
        'And I hope, by Thy good pleasure, safely to arrive at home.',
        'Jesus sought me when a stranger, wand’ring from the fold of God;',
        'He, to rescue me from danger, interposed His precious blood.'
      ],
      [
        'O to grace how great a debtor daily I’m constrained to be!',
        'Let Thy goodness, like a fetter, bind my wand’ring heart to Thee.',
        'Prone to wander, Lord, I feel it, prone to leave the God I love;',
        'Here’s my heart, O take and seal it, seal it for Thy courts above.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-53',
    number: 53,
    title: 'Mupashi Wamushilo',
    writer: 'Marcus Morris Wells (1858)',
    englishTune: 'Holy Spirit, Faithful Guide (Wells)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Umupashi wa Mushilo',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Yohane 16:13 · Amalumbo 73:24 · Abena Roma 8:14',
    isSample: false,
    melodicPreview: [62, 67, 67, 66, 67, 69, 67, 66, 64, 62],
    verses: [
      [
        'Mupashi Wamushilo, Mwikale mupepi pe;',
        'Munjikata \'kuboko, Ine mu matololo;',
        'Ndesekela ukumfwa Kwitwa kwa kutemwikwa'
      ],
      [
        'Icibusa ca cine, Twacetekela Imwe;',
        'Mwituleka kufilwa, No kuluba mu mfifi;',
        'Fipupu fyaluluma, Imitima yanaka,'
      ],
      [
        'Mungafwa ine kuno, Ukuposa ububi;',
        'Nshilefwaya fimbi \'yo, Kano kutota Imwe;',
        'Mwe Cibusa ca cine, Lintu fyonse fikapwa'
      ]
    ],
    chorus: [
      'Mutepeta, Munkonka ku mwesu ukutusha'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Holy Spirit, faithful Guide, ever near the Christian’s side,',
        'Gently lead us by the hand, pilgrims in a desert land;',
        'Weary souls fore’er rejoice, while they hear that sweetest voice,'
      ],
      [
        'Ever present, truest Friend, ever near Thine aid to lend,',
        'Leave us not to doubt and fear, groping on in darkness drear;',
        'When the storms are raging sore, hearts growing faint and sore,'
      ],
      [
        'When our days of toil shall cease, waiting still for sweet release,',
        'Nothing left but praise for Thee, trusting in Thy majesty;',
        'Thou shalt lead us, faithful Friend, safely to our journey’s end.'
      ]
    ],
    englishChorus: [
      'Whispering softly, “Wanderer, come! Follow Me, I’ll guide thee home.”'
    ]
  },
  {
    id: 'hymn-54',
    number: 54,
    title: 'Cintu Cimo Ndefwaisha',
    writer: 'Walter Chalmers Smith (1876) / Fred H. Byshe (1901)',
    englishTune: 'A Clean Heart (One Thing I of the Lord Desire)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukulomba Ukusangululwa no Kuipeela',
    key: 'B-flat Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 51:2, 7, 10 · Mateo 5:8 · Amalumbo 27:4',
    isSample: false,
    melodicPreview: [65, 70, 70, 69, 70, 72, 70, 67, 65],
    verses: [
      [
        'Cintu cimo ndefwaisha',
        'Pantu nshila shabipa fye,',
        'Munsambe Imwe mwebene,',
        'Ndefwaisha ici nomba'
      ],
      [
        'Nkalasekela kumona,',
        'Ifintu fyenu kucila;',
        'Lelo ukuba wabuta,',
        'Ndefwaisha, ndefwaisha'
      ],
      [
        'Nde esha kuleko bubi,',
        'No kufumya ku mutima;',
        'Lelo maka yandi yafye,',
        'Nshilebuta, nshilebuta.'
      ],
      [
        'Lintu mutima wabuta,',
        'Menso yandi yakesuka;',
        'Nkamumona Mwe Katula,',
        'Mwe Katula Watemwikwa.'
      ]
    ],
    chorus: [
      'Munsambe ine konse fye,',
      'Napela fyonse kuli \'Mwe;',
      'Ndemufwaya ukufumya',
      'Mpulumushi muli ine'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'One thing I of the Lord desire,',
        'For all my path hath miry been:',
        'Be it by water or by fire,',
        'O make me clean, O make me clean.'
      ],
      [
        'If clearer vision Thou impart,',
        'Grateful and glad my soul shall be;',
        'But yet to have a purer heart',
        'Is more to me, is more to me.'
      ],
      [
        'I watch to shun the miry way,',
        'And stanch the springs of guilty thought;',
        'But, watch and struggle as I may,',
        'Pure I am not, pure I am not.'
      ],
      [
        'Yea, only as this heart is clean',
        'May larger vision yet be mine,',
        'For mirrored in its depths are seen',
        'The things divine, the things divine.'
      ]
    ],
    englishChorus: [
      'So wash me, Thou, without, within,',
      'Or purge with fire, if that must be;',
      'No matter how, if only sin',
      'Die out in me, die out in me.'
    ]
  },
  {
    id: 'hymn-55',
    number: 55,
    title: 'Bushe Waya Kuli Yesu Kusambwa?',
    writer: 'Elisha Albright Hoffman (1878)',
    englishTune: 'Are You Washed in the Blood?',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 7:14 · 1 Yohane 1:7 · Sekaria 13:1',
    melodicPreview: [63, 68, 68, 68, 72, 68, 65, 63, 68, 68, 70, 72, 70],
    verses: [
      [
        'Bushe waya kuli Yesu kusambwa.',
        'Mum\'lopa wa Yesu wamweo?',
        'Wasumina cine cine m\'cikuku,',
        'Wasambwa mum\'lopa wa Yesu?'
      ],
      [
        'Bushe ule enda pe pe ne Mfumu,',
        'Mum\'lopa wa Mwana wa Mpanga?',
        'Uletusha pa lupanda lwa Mfumu,',
        'Wasambwa mum\'lopa wa Yesu.'
      ],
      [
        'Lintu Shibwinga akesa ni shani,',
        'Bushe ukaba mutuntulu?',
        'Bushe ukaba waiteyanisha?',
        'Sambeni mum\'lopa wa Yesu'
      ],
      [
        'Fuleni fyakufwala ifyakale,',
        'Musambe mum\'lopa wa Mpanga;',
        'Kafukauka kaliko musambe,',
        'Sambeni mum\'lopa wa Mpanga.'
      ]
    ],
    chorus: [
      'Wasambwa ... mum\'lopa ... Wabuta',
      'wa Mwana wa Mpanga ... ?',
      'Bushe fyakufwala fyenu fyabuta?',
      'Kanshi musambwe mu mulopa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Have you been to Jesus for the cleansing pow’r?',
        'Are you washed in the blood of the Lamb?',
        'Are you fully trusting in His grace this hour?',
        'Are you washed in the blood of the Lamb?'
      ],
      [
        'Are you walking daily by the Savior’s side?',
        'Are you washed in the blood of the Lamb?',
        'Do you rest each moment in the Crucified?',
        'Are you washed in the blood of the Lamb?'
      ],
      [
        'When the Bridegroom cometh will your robes be white?',
        'Are you washed in the blood of the Lamb?',
        'Will your soul be ready for the mansions bright,',
        'And be washed in the blood of the Lamb?'
      ],
      [
        'Lay aside the garments that are stained with sin,',
        'And be washed in the blood of the Lamb;',
        'There’s a fountain flowing for the soul unclean,',
        'O be washed in the blood of the Lamb!'
      ]
    ],
    englishChorus: [
      'Are you washed in the blood,',
      'In the soul-cleansing blood of the Lamb?',
      'Are your garments spotless? Are they white as snow?',
      'Are you washed in the blood of the Lamb?'
    ]
  },
  {
    id: 'hymn-56',
    number: 56,
    title: 'Naendawike Ukutali',
    writer: 'William James Kirkpatrick (1892)',
    englishTune: "Lord, I'm Coming Home",
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kwelelwa',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Luka 15:18-20 · Amalumbo 51:7',
    melodicPreview: [72, 72, 72, 72, 73, 72, 70, 68, 72, 70, 68, 70, 68],
    verses: [
      [
        'Naendawike kutali, Nomba ndebwela;',
        'Mpulumushi shafulile, Nomba ndebwela.'
      ],
      [
        'Nanaka ne mpulumushi, Nomba Ndebwela;',
        'Kutemwa kobe ndefwaya, Nomba ndebwela.'
      ],
      [
        'Bucetekelo bweka fye, Nomba ndebwela;',
        'Yesu amfwilile ine, Nomba ndebwela.'
      ],
      [
        'Ndenakila m\'lopa wakwe, Nomba Ndebwela;',
        'Munsambe ndebuta tutu, Nomba ndebwela.'
      ]
    ],
    chorus: [
      'Ndebwela ndebwela, Nanako kwenda;',
      'Mumpokelele mwe Mfumu, Nomba ndebwela.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I’ve wandered far away from God,',
        'Now I’m coming home;',
        'The paths of sin too long I’ve trod,',
        'Lord, I’m coming home.'
      ],
      [
        'I’m tired of sin and straying, Lord,',
        'Now I’m coming home;',
        'I’ll trust Thy love, believe Thy word,',
        'Lord, I’m coming home.'
      ],
      [
        'My only hope, my only plea,',
        'Now I’m coming home;',
        'That Jesus died, and died for me,',
        'Lord, I’m coming home.'
      ],
      [
        'I need His cleansing blood, I know,',
        'Now I’m coming home;',
        'O wash me whiter than the snow,',
        'Lord, I’m coming home.'
      ]
    ],
    englishChorus: [
      'Coming home, coming home,',
      'Nevermore to roam;',
      'Open wide Thine arms of love,',
      'Lord, I’m coming home.'
    ]
  },
  {
    id: 'hymn-57',
    number: 57,
    title: 'Bonse Baleumfwa Amashiwi',
    writer: 'Philip Paul Bliss (1870)',
    englishTune: 'Whosoever Heareth (Whosoever Will)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 22:17 · Yohane 3:16 · Esaya 55:1',
    melodicPreview: [62, 66, 69, 74, 74, 71, 69, 66, 69, 69, 67, 66, 64],
    verses: [
      [
        'Bonse baleumfwa amashiwi,',
        'Tumeni ilandwe mu calo conse,',
        'Soseni ilandwe kuli bonse,',
        '"Iseni bonse mwandi."'
      ],
      [
        'Imwe muleisa mwikokola,',
        'Lesa amupela inshita nomba;',
        'Yesu Mupusushi ali nshila,',
        '"Iseni bonse nomba."'
      ],
      [
        'Amashiwi aya e yacine,',
        'Lesa asosele kuli \'mwe bonse;',
        '"Ndefwayo kupelo mweo pe na pe,',
        'Iseni bonse nomba."'
      ]
    ],
    chorus: [
      '"Iseni bonse mwe balubile,"',
      'Yesu alefwaya bonse ukwisa;',
      'Tata watemwika atwita nomba,',
      '"Iseni bonse mwandi."'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        '“Whosoever heareth,” shout, shout the sound!',
        'Send the blessed tidings all the world around;',
        'Spread the joyful news wherever man is found:',
        '“Whosoever will may come.”'
      ],
      [
        'Whosoever cometh need not delay,',
        'Now the door is open, enter while you may;',
        'Jesus is the true, the only Living Way:',
        '“Whosoever will may come.”'
      ],
      [
        '“Whosoever will,” the promise is secure;',
        '“Whosoever will,” forever shall endure;',
        '“Whosoever will!” ’tis life forevermore:',
        '“Whosoever will may come.”'
      ]
    ],
    englishChorus: [
      '“Whosoever will, whosoever will!”',
      'Send the proclamation over vale and hill;',
      '’Tis a loving Father calls the wand’rer home:',
      '“Whosoever will may come.”'
    ]
  },
  {
    id: 'hymn-58',
    number: 58,
    title: 'Cindikeni Mfumu Bonse',
    writer: 'Edward Perronet (1779) / Oliver Holden (1792)',
    englishTune: "All Hail the Power of Jesus' Name (Coronation)",
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 19:16 · Abena Filipi 2:9-11 · Amalumbo 148:1-2',
    melodicPreview: [67, 67, 71, 71, 74, 74, 71, 67, 69, 71, 69, 67, 66, 67],
    verses: [
      [
        'Cindikeni Mfumu bonse,',
        'Bangeli bam\'tota;',
        'Leta \'citebo ca Mfumu,',
        'Lumbanyeni Yesu.',
        'Leta \'citebo ca Mfumu,',
        'Lumbanyeni Yesu.'
      ],
      [
        'Imwe basalwa ba Mfumu,',
        'Mwe bantu bacepa,',
        'Lumbeni Katula wenu,',
        'Lumbanyeni Yesu.',
        'Lumbeni Katula wenu,',
        'Lumbanyeni Yesu.'
      ],
      [
        'Iseni bonse bam\'calo,',
        'Toteni Katula;',
        'Yesu ni Katula wesu,',
        'M\'lumbanyeni nomba.',
        'Yesu ni Katula wesu,',
        'M\'lumbanyeni nomba.'
      ],
      [
        'Na ifwe pamo nga bakwe,',
        'Tukamutotela;',
        'Tukembo lwimbo lusuma,',
        'Kulumbanya Yesu.',
        'Tukembo lwimbo lusuma,',
        'Kulumbanya Yesu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'All hail the pow’r of Jesus’ name!',
        'Let angels prostrate fall;',
        'Bring forth the royal diadem,',
        'And crown Him Lord of all;',
        'Bring forth the royal diadem,',
        'And crown Him Lord of all!'
      ],
      [
        'Ye chosen seed of Israel’s race,',
        'Ye ransomed from the fall,',
        'Hail Him who saves you by His grace,',
        'And crown Him Lord of all;',
        'Hail Him who saves you by His grace,',
        'And crown Him Lord of all!'
      ],
      [
        'Let ev’ry kindred, ev’ry tribe,',
        'On this terrestrial ball,',
        'To Him all majesty ascribe,',
        'And crown Him Lord of all;',
        'To Him all majesty ascribe,',
        'And crown Him Lord of all!'
      ],
      [
        'O that with yonder sacred throng',
        'We at His feet may fall!',
        'We’ll join the everlasting song,',
        'And crown Him Lord of all;',
        'We’ll join the everlasting song,',
        'And crown Him Lord of all!'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-59',
    number: 59,
    title: 'Yesu E Wakutemwa',
    writer: 'Charles Wesley, 1740 (tr. Bemba SDA)',
    englishTune: 'Martyn (Simeon B. Marsh, 1834) / Jesus, Lover of My Soul',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila no Kutetekela',
    key: 'F Major',
    timeSignature: '6/4',
    scripture: 'Amalumbo 46:1 · Esaya 32:2 · Amalumbo 61:2-4',
    isSample: false,
    melodicPreview: [69, 69, 69, 70, 72, 72, 70, 69, 67, 65, 69, 67, 65],
    verses: [
      [
        'Yesu e wakutemwa, Kampalame kuli \'Mwe;',
        'Macusho yafulisha, Yaesha kunasha \'ne;',
        'Mumfishe Mupusushi, Ku macusho ya panshi;',
        'Kupelekesha fyonse, Buleni ‘mupu wandi.'
      ],
      [
        'Linga limbi nshakwata, Kano imwe Katula;',
        'Windeka ine neka, Mungafwe pano calo;',
        'Fyonse ndepoka nomba, Yafuma kuli imwe;',
        'Muncinge ine nomba, Napatwa kuli Ciwa.'
      ],
      [
        'Ndemufwaya mwe Yesu, Imwe Katula wandi;',
        'Muli na maka yonse, Kubaposha balwala;',
        'Shina lyobe mushilo, Ine muntu wabipa;',
        'Bubi bwandi bwafula, Imwe luse lwafula.'
      ],
      [
        'Luse lwenu lwafula, Ukunsamba ne mubi,',
        'Iseni mwe Katula, M\'wamye mutima wandi;',
        'Mupela kuli ine, ku mulonga wa mweo;',
        'Mube na ine pe fye, Kuwamya mweo wandi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Jesus, lover of my soul,',
        'Let me to Thy bosom fly,',
        'While the nearer waters roll,',
        'While the tempest still is high.',
        'Hide me, O my Savior, hide,',
        'Till the storm of life is past;',
        'Safe into the haven guide;',
        'O receive my soul at last.'
      ],
      [
        'Other refuge have I none,',
        'Hangs my helpless soul on Thee;',
        'Leave, ah! leave me not alone,',
        'Still support and comfort me.',
        'All my trust on Thee is stayed,',
        'All my help from Thee I bring;',
        'Cover my defenseless head',
        'With the shadow of Thy wing.'
      ],
      [
        'Thou, O Christ, art all I want,',
        'More than all in Thee I find;',
        'Raise the fallen, cheer the faint,',
        'Heal the sick, and lead the blind.',
        'Just and holy is Thy name,',
        'I am all unrighteousness;',
        'False and full of sin I am,',
        'Thou art full of truth and grace.'
      ],
      [
        'Plenteous grace with Thee is found,',
        'Grace to cover all my sin;',
        'Let the healing streams abound;',
        'Make and keep me pure within.',
        'Thou of life the fountain art,',
        'Freely let me take of Thee;',
        'Spring Thou up within my heart;',
        'Rise to all eternity.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-60',
    number: 60,
    title: 'Yesu Mwe Katula Wesu',
    writer: 'Bernard of Clairvaux (12th c.), tr. Ray Palmer, 1858 (tr. Bemba SDA)',
    englishTune: 'Quebec / Hesperus (Henry Baker, 1854) / Jesus, Thou Joy of Loving Hearts',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela no Kusangululwa',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Yohane 6:35, 51 · Amalumbo 36:9 · 1 Peter 2:3',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 70, 69, 67, 69, 65],
    verses: [
      [
        'Yesu Mwe Katula wesu,',
        'Kafu-ka-u-ka ka mweo;',
        'Kuli fisuma fya calo,',
        'Tulebwela kuli Imwe.'
      ],
      [
        'Tulemusonda Mukate,',
        'Lelo-tu-fwa-ya kulisha;',
        'Tulenwa Imwe Mwe M\'longa,',
        'Tulefwaya ukunwa pe.'
      ],
      [
        'Myeo yesu yamufwaya,',
        'Ise-ni-no-kwikala pe;',
        'Tulesekela icibi,',
        'Kumona cimwemwe cenu.'
      ],
      [
        'Mwe Katula mwituleka,',
        'Pale-ni-i-nshita-shesu;',
        'Fumyeni ububi bwesu,',
        'Paleni lubuto lwenu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Jesus, Thou joy of loving hearts,',
        'Thou fount of life, Thou light of men,',
        'From the best bliss that earth imparts,',
        'We turn unfilled to Thee again.'
      ],
      [
        'We taste Thee, O Thou living Bread,',
        'And long to feast upon Thee still;',
        'We drink of Thee, the Fountain-head,',
        'And thirst our souls from Thee to fill.'
      ],
      [
        'Our restless spirits yearn for Thee,',
        'Where’er our changeful lot is cast;',
        'Glad when Thy gracious smile we see,',
        'Blest when our faith can hold Thee fast.'
      ],
      [
        'O Jesus, ever with us stay,',
        'Make all our moments calm and bright;',
        'Chase the dark night of sin away,',
        'Shed o’er the world Thy holy light.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-61',
    number: 61,
    title: 'Njishibe Fingi Fyamfumu',
    writer: 'Eliza E. Hewitt, 1887 / John R. Sweney, 1887 (tr. Bemba SDA)',
    englishTune: 'Sweney (More About Jesus Would I Know)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukwishiba no Kukonka Yesu',
    key: 'A-flat Major',
    timeSignature: '6/8',
    scripture: 'Abena Filipi 3:10 · 2 Petro 3:18 · Yohane 14:26',
    isSample: false,
    melodicPreview: [63, 60, 63, 68, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Njishibe fingi fya Mfumu;',
        'Nkatungulule banandi;',
        'Monemo \'lupusukilo,',
        'Ndetemwa pantu afwile.'
      ],
      [
        'Nsambilile ifya Mfumu,',
        'Ne fya mushilo fya Mfumu;',
        'Unsambilishe Mupashi,',
        'Nange fintu fya kwa Yesu.'
      ],
      [
        'Njishibe fimbi fya Mfumu,',
        'No kwikala na Wene pe.',
        'No kumfwila muli fyonse,',
        'Ukuti mbe uwa cine.'
      ],
      [
        'Njishibe po fya cipuna,',
        'Fyuma, lulumbi e fyakwe;',
        'Ng’ongesesha ukwishiba,',
        '\'Fya kwisa kwa Mfumu Yandi.'
      ]
    ],
    chorus: [
      'E, fimbi fya Yesu,',
      'E, fimbi fya Yesu,',
      'Monemo ‘lupusukilo,',
      'Ndetemwa pantu afwile.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'More about Jesus would I know,',
        'More of His grace to others show;',
        'More of His saving fullness see,',
        'More of His love who died for me.'
      ],
      [
        'More about Jesus let me learn,',
        'More of His holy will discern;',
        'Spirit of God, my teacher be,',
        'Showing the things of Christ to me.'
      ],
      [
        'More about Jesus; in His Word,',
        'Holding communion with my Lord;',
        'Hearing His voice in every line,',
        'Making each faithful saying mine.'
      ],
      [
        'More about Jesus; on His throne,',
        'Riches in glory all His own;',
        'More of His kingdom’s sure increase;',
        'More of His coming, Prince of Peace.'
      ]
    ],
    englishChorus: [
      'More, more about Jesus,',
      'More, more about Jesus;',
      'More of His saving fullness see,',
      'More of His love who died for me.'
    ]
  },
  {
    id: 'hymn-62',
    number: 62,
    title: 'Yesu Ndemutemwa Katula Wandi',
    writer: 'William Ralph Featherston, 1864 / Adoniram Judson Gordon, 1876 (tr. Bemba SDA)',
    englishTune: 'Gordon (My Jesus, I Love Thee)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kutemwa Yesu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 4:19 · Yohane 21:17 · Amalumbo 116:1 · 1 Petro 1:8',
    isSample: false,
    melodicPreview: [65, 67, 69, 65, 70, 69, 67, 65],
    verses: [
      [
        'Yesu ndemutemwa katula wandi,',
        'Pamulandu obe ndeleko bubi;',
        'Katula waluse Cibusa candi,',
        'Nga nakutemenwe nomba kwacila.'
      ],
      [
        'Ndekutemwa pantu, wantemwa kale;',
        'Kuli ine wamfwile pa Kalfali;',
        'Citebo ca myunga, pa mutwe obe,',
        'Nga nakutemenwe, nomba kwacila.'
      ],
      [
        'Mweo wandi onse ndi wakutemwa,',
        'Nkalamutotela, Mu bumi bwandi;',
        'Mweo wandi onse Ndepela nomba,',
        'Nga nakutemenwe nomba kwacila.'
      ],
      [
        'Mu masano uko Ayalulumbi,',
        'Lintu mukansenda \'Kwikala uko,',
        'Nkalamutotela katula wandi,',
        'Nga nakutemenwe elyo kwacila.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'My Jesus, I love Thee, I know Thou art mine;',
        'For Thee all the follies of sin I resign;',
        'My gracious Redeemer, my Savior art Thou;',
        'If ever I loved Thee, my Jesus, ’tis now.'
      ],
      [
        'I love Thee because Thou hast first loved me,',
        'And purchased my pardon on Calvary’s tree;',
        'I love Thee for wearing the thorns on Thy brow;',
        'If ever I loved Thee, my Jesus, ’tis now.'
      ],
      [
        'I’ll love Thee in life, I will love Thee in death,',
        'And praise Thee as long as Thou lendest me breath;',
        'And say when the death dew lies cold on my brow,',
        'If ever I loved Thee, my Jesus, ’tis now.'
      ],
      [
        'In mansions of glory and endless delight,',
        'I’ll ever adore Thee in heaven so bright;',
        'I’ll sing with the glittering crown on my brow,',
        'If ever I loved Thee, my Jesus, ’tis now.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-63',
    number: 63,
    title: "Cinshi Cingasamba 'Ne?",
    writer: 'Robert Lowry, 1876 (tr. Bemba SDA)',
    englishTune: 'Plainfield (What Can Wash Away My Sin?)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 1:7 · AbaHebere 9:22 · Ukusokolola 1:5 · 1 Petro 1:18-19',
    isSample: false,
    melodicPreview: [67, 67, 71, 74, 74, 71, 67, 69, 71, 69, 67],
    verses: [
      [
        "Cinshi cingasamba 'ne?",
        'Umulopa wakwa Yesu',
        'Mutima wasambwa nshi?',
        'Umulopa wakwa Yesu.'
      ],
      [
        'Ukusamba ndemona,',
        'Umulopa wakwa Yesu;',
        'Ukumbelela ine,',
        'Umulopa wakwa Yesu.'
      ],
      [
        'Ukumfumya mu fibi,',
        'Umulopa wakwa Yesu;',
        'Fintu fyandi fifyafye,',
        'Ndefwaya mulopa wakwe.'
      ],
      [
        "Ndesumina muli'yu,",
        'Umulopa wakwa Yesu;',
        'Busuma bwandi ubu,',
        'Umulopa wakwa Yesu.'
      ],
      [
        'Lumbeni mulu uyu,',
        'Wangafwa mulopa wakwe;',
        'Natasha kuli uyu,',
        'Umulopa wakwa Yesu.'
      ]
    ],
    chorus: [
      'Mulopa usuma, Ukasamba ine;',
      'Nshikwete nacimbi, Umulopa wakwe weka.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'What can wash away my sin?',
        'Nothing but the blood of Jesus;',
        'What can make me whole again?',
        'Nothing but the blood of Jesus.'
      ],
      [
        'For my pardon this I see,',
        'Nothing but the blood of Jesus;',
        'For my cleansing this my plea,',
        'Nothing but the blood of Jesus.'
      ],
      [
        'Nothing can for sin atone,',
        'Nothing but the blood of Jesus;',
        'Naught of good that I have done,',
        'Nothing but the blood of Jesus.'
      ],
      [
        'This is all my hope and peace,',
        'Nothing but the blood of Jesus;',
        'This is all my righteousness,',
        'Nothing but the blood of Jesus.'
      ],
      [
        'Glory! Glory! this I sing,',
        'Nothing but the blood of Jesus;',
        'All my praise for this I bring,',
        'Nothing but the blood of Jesus.'
      ]
    ],
    englishChorus: [
      'Oh! precious is the flow',
      'That makes me white as snow;',
      'No other fount I know,',
      'Nothing but the blood of Jesus.'
    ]
  },
  {
    id: 'hymn-64',
    number: 64,
    title: 'Bushe Mulenaka No Bulanda?',
    writer: 'Jeremiah E. Rankin, 1880 / Edmund S. Lorenz, 1880 (tr. Bemba SDA)',
    englishTune: 'Lorenz (Tell It to Jesus / Are You Weary)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: '1 Petro 5:7 · Mateo 11:28 · Amalumbo 55:22',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 70, 68, 65, 68, 70, 72, 70, 68],
    verses: [
      [
        'Bushe mulenaka no bulanda?',
        'Mwebeni Yesu, mwebeni Yesu;',
        'Bushe ubuseko bwenu bwaya?',
        'Mwebeni Yesu eka.'
      ],
      [
        'Bushe minsoshi ilepona pe?',
        'Mwebeni Yesu, mwebeni Yesu;',
        'Imitima yenu muli bubi?',
        'Mwebeni Yesu eka.'
      ],
      [
        'Bushe muli nomwenso ukufwa?',
        'Mwebeni Yesu, mwebeni Yesu;',
        'Mulepembela \'kwisa kwa Kristu?',
        'Mwebeni Yesu eka.'
      ],
      [
        'Bushe muletina amalanda?',
        'Mwebeni Yesu, mwebeni Yesu;',
        'Mulelangulukila mailo?',
        'Mwebeni Yesu eka.'
      ]
    ],
    chorus: [
      'Mwebeni Yesu, mwebeni Yesu,',
      'E cibusa mupepi;',
      'Tapali umbi pamo nga Yesu,',
      'Mwebeni Yesu eka.'
    ],
    englishVerses: [
      [
        'Are you weary, are you heavy hearted?',
        'Tell it to Jesus, tell it to Jesus;',
        'Are you grieving o\'er joys departed?',
        'Tell it to Jesus alone.'
      ],
      [
        'Do the tears flow down your cheeks unbidden?',
        'Tell it to Jesus, tell it to Jesus;',
        'Have you sins that to men\'s eyes are hidden?',
        'Tell it to Jesus alone.'
      ],
      [
        'Are you troubled at the thought of dying?',
        'Tell it to Jesus, tell it to Jesus;',
        'For Christ\'s coming kingdom are you sighing?',
        'Tell it to Jesus alone.'
      ],
      [
        'Do you fear the gath\'ring clouds of sorrow?',
        'Tell it to Jesus, tell it to Jesus;',
        'Are you anxious what shall be tomorrow?',
        'Tell it to Jesus alone.'
      ]
    ],
    englishChorus: [
      'Tell it to Jesus, tell it to Jesus,',
      'He is a friend that\'s well known;',
      'You\'ve no other such a friend or brother,',
      'Tell it to Jesus alone.'
    ]
  },
  {
    id: 'hymn-65',
    number: 65,
    title: 'Ecawama Kusumina Muli Yesu Katula',
    writer: 'Louisa M. R. Stead, 1882 / William J. Kirkpatrick, 1882 (tr. Bemba SDA)',
    englishTune: 'Trust in Jesus (\'Tis So Sweet to Trust in Jesus)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Amapinda 3:5-6 · Yohane 14:1 · 1 Timote 4:10 · Amalumbo 34:8',
    isSample: false,
    melodicPreview: [68, 72, 72, 70, 68, 65, 68, 70, 72, 70, 68, 65],
    verses: [
      [
        'Ecawama kusumina,',
        'Muli Yesu Katula;',
        'Ukusumina mashiwi,',
        'Yakwe ayamweo pe.'
      ],
      [
        'Ecawama kusumina,',
        'Mu mulopa wakwe pe;',
        'Mu busumino kusamba,',
        'Mum\'lopa wa kwa Yesu.'
      ],
      [
        'Ecawama kusumina,',
        'No kuposa ifibi;',
        'Kuli Yesu tukapoka,',
        'Mweo, kwanga, mutende.'
      ],
      [
        'Nasekela nomba line,',
        'Pantu Yesu antula;',
        'Nomba naishiba cine,',
        'Mukaba na ine pe.'
      ]
    ],
    chorus: [
      'Yesu! Yesu! ndesumina,',
      'Namweseshe kale fye;',
      'Yesu! Yesu! Mfumu yandi,',
      'Ndefwayo kumutota.'
    ],
    englishVerses: [
      [
        '\'Tis so sweet to trust in Jesus,',
        'Just to take Him at His word;',
        'Just to rest upon His promise;',
        'Just to know, "Thus saith the Lord."',
      ],
      [
        'O how sweet to trust in Jesus,',
        'Just to trust His cleansing blood;',
        'Just in simple faith to plunge me',
        '\'Neath the healing, cleansing flood!'
      ],
      [
        'Yes, \'tis sweet to trust in Jesus,',
        'Just from sin and self to cease;',
        'Just from Jesus simply taking',
        'Life and rest, and joy and peace.'
      ],
      [
        'I\'m so glad I learned to trust Thee,',
        'Precious Jesus, Savior, Friend;',
        'And I know that Thou art with me,',
        'Wilt be with me to the end.'
      ]
    ],
    englishChorus: [
      'Jesus, Jesus, how I trust Him!',
      'How I\'ve proved Him o\'er and o\'er!',
      'Jesus, Jesus, precious Jesus!',
      'O for grace to trust Him more!'
    ]
  },
  {
    id: 'hymn-66',
    number: 66,
    title: 'We Kasuba Katemwikwa',
    writer: 'Philip Doddridge, 1755 / Edward F. Rimbault, 1854 (tr. Bemba SDA)',
    englishTune: 'Happy Day (O Happy Day That Fixed My Choice)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: '2 Abena Korinti 5:17 · Amalumbo 118:24 · Mateo 10:32 · Abena Roma 12:1',
    isSample: false,
    melodicPreview: [67, 72, 72, 72, 74, 76, 76, 74, 72, 74, 76, 72],
    verses: [
      [
        'We kasuba katemwikwa,',
        'Lintu nasalile Yesu;',
        'Nomba umutima wandi,',
        'Ukalanda luse lwakwe,'
      ],
      [
        'Nomba umulandu wapwa,',
        'Ali wandi ine wakwe;',
        'Atangile ndemukonka,',
        'Pantu ali Mupusushi.'
      ],
      [
        'We mutima wandi tusha,',
        'Pantu wasalile Yesu;',
        'Wipilibuka kabili,',
        'Akakupela fisuma.'
      ]
    ],
    chorus: [
      'Kasuba kasuba,',
      'Lintu Yesu ansambile;',
      'Ansambilishe \'kupepa,',
      'Nokusekela konse pe;',
      'Kasuba kasuba,',
      'Lintu Yesu ansambila.'
    ],
    englishVerses: [
      [
        'O happy day, that fixed my choice',
        'On Thee, my Savior and my God!',
        'Well may this glowing heart rejoice,',
        'And tell its raptures all abroad.'
      ],
      [
        '\'Tis done: the great transaction\'s done!',
        'I am my Lord\'s, and He is mine;',
        'He drew me and I followed on,',
        'Charmed to confess the voice divine.'
      ],
      [
        'Now rest, my long-divided heart,',
        'Fixed on this blissful center, rest;',
        'Nor ever from thy Lord depart,',
        'With Him of every good possessed.'
      ]
    ],
    englishChorus: [
      'Happy day, happy day,',
      'When Jesus washed my sins away!',
      'He taught me how to watch and pray,',
      'And live rejoicing ev\'ry day;',
      'Happy day, happy day,',
      'When Jesus washed my sins away!'
    ]
  },
  {
    id: 'hymn-67',
    number: 67,
    title: 'Mwe Bantu Ba Mfumu Nomba Tusekela',
    writer: 'Isaac Watts, 1707; Refrain & Music by Robert Lowry, 1867',
    englishTune: 'Marching to Zion (Come, We That Love the Lord)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya no Kucindika',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Esaya 35:10 · Esaya 51:11 · AbaHebere 12:22 · Ukusokolola 21:2',
    isSample: false,
    melodicPreview: [65, 65, 69, 72, 72, 69, 70, 72, 74, 74, 72],
    verses: [
      [
        'Mwe bantu ba Mfumu nomba tusekela;',
        'Twimbe ulwimbo lusuma,',
        'Twimbe ulwimbo lusuma,',
        'No kwisa ku Mfumu, No kwisa ku Mfumu.'
      ],
      [
        'Bakana ukwimba, Tabeshiba Lesa;',
        'Lelo bana bakwa Lesa,',
        'Lelo bana bakwa Lesa;',
        'Basekela pe fye, Basekela pe fye.'
      ],
      [
        'Kuno bantu bakwe bapelwa mapalo;',
        'Nangu tatulafikako,',
        'Nangu tatulafikako,',
        'Kwenda mu misebo, Kwenda mu misebo.'
      ],
      [
        'Tukemba pe na pe, Tatuli ne nsoni;',
        'Twapalama ku Kenani,',
        'Twapalama ku Kenani,',
        'Icalo ca Mfumu, Icalo ca Mfumu.'
      ]
    ],
    chorus: [
      'Tuleya ku Zion, Yawama Zion yawama;',
      'Tuleya nomba kwi sano,',
      'Mu musumba wakwa Lesa.'
    ],
    englishVerses: [
      [
        'Come, we that love the Lord,',
        'And let our joys be known;',
        'Join in a song with sweet accord,',
        'Join in a song with sweet accord,',
        'And thus surround the throne,',
        'And thus surround the throne.'
      ],
      [
        'Let those refuse to sing',
        'Who never knew our God;',
        'But children of the heav\'nly King,',
        'But children of the heav\'nly King',
        'May speak their joys abroad,',
        'May speak their joys abroad.'
      ],
      [
        'The hill of Zion yields',
        'A thousand sacred sweets',
        'Before we reach the heav\'nly fields,',
        'Before we reach the heav\'nly fields,',
        'Or walk the golden streets,',
        'Or walk the golden streets.'
      ],
      [
        'Then let our songs abound,',
        'And ev\'ry tear be dry;',
        'We\'re marching through Emmanuel\'s ground,',
        'We\'re marching through Emmanuel\'s ground',
        'To fairer worlds on high,',
        'To fairer worlds on high.'
      ]
    ],
    englishChorus: [
      'We\'re marching to Zion,',
      'Beautiful, beautiful Zion;',
      'We\'re marching upward to Zion,',
      'The beautiful city of God.'
    ]
  },
  {
    id: 'hymn-68',
    number: 68,
    title: 'Nalipusushiwa, Nasosa',
    writer: 'Fanny J. Crosby, 1882; Music by William J. Kirkpatrick',
    englishTune: 'Redeemed, How I Love to Proclaim It! (ADA)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka',
    key: 'A-flat Major',
    timeSignature: '9/8',
    scripture: 'Amalumbo 107:2 · Abena Efese 1:7 · Tito 2:14',
    isSample: false,
    melodicPreview: [68, 68, 68, 72, 72, 70, 68, 70, 68, 65, 63],
    verses: [
      [
        'Nalipusushiwa, nasosa, Mu mulopa wa Mwana Lesa;',
        'Ampususha no luse lwa-kwe,',
        'Nomba ndi mwana wakwe pe.'
      ],
      [
        'Nalipusushiwa na temwa,',
        'Nasekelela pali\'ici;',
        'Naishiba nshili no mwenso,',
        'Imfumu ili mupepi.'
      ],
      [
        'Katula wapalwa natemwa,',
        'Ndemutontonkanya lyonse;',
        'Ndeimba lulumbi lwamfumu,',
        'Ndeimba uluse lwakwe.'
      ],
      [
        'Naishiba nkalamumona, Mfumu mu lulumbi lwakwe;',
        'Mafunde yakwe naya temwa,',
        'Yapelwa ku bantu bonse.'
      ],
      [
        'Naishiba kuli citebo, Mu masano ya kumulu;',
        'Bwangu pamo na bapusuka,',
        'Tukekala kumwakwe pe.'
      ]
    ],
    chorus: [
      'Yesu Yesu, Yesu ni Katula wandi;',
      'Yesu, Yesu, Nomba ndi mwana wakwe pe.'
    ],
    englishVerses: [
      [
        'Redeemed, how I love to proclaim it!',
        'Redeemed by the blood of the Lamb;',
        'Redeemed through His infinite mercy,',
        'His child, and forever, I am.'
      ],
      [
        'Redeemed, and so happy in Jesus,',
        'No language my rapture can tell;',
        'I know that the light of His presence',
        'With me doth continually dwell.'
      ],
      [
        'I think of my blessed Redeemer,',
        'I think of Him all the day long;',
        'I sing, for I cannot be silent;',
        'His love is the theme of my song.'
      ],
      [
        'I know I shall see in His beauty',
        'The King in whose law I delight,',
        'Who lovingly guardeth my footsteps,',
        'And giveth me songs in the night.'
      ],
      [
        'I know there\'s a crown that is waiting',
        'In yonder bright mansion for me,',
        'And soon, with the spirits made perfect,',
        'At home with the Lord I shall be.'
      ]
    ],
    englishChorus: [
      'Redeemed, redeemed,',
      'Redeemed by the blood of the Lamb;',
      'Redeemed, redeemed,',
      'His child, and forever, I am.'
    ]
  },
  {
    id: 'hymn-69',
    number: 69,
    title: 'Amenshi Ya Mweo Yaliko',
    writer: 'Franklin E. Belden, 1886',
    englishTune: 'We\'ll Tarry by the Living Waters',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka',
    key: 'E-flat Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:6 · Ukusokolola 22:17 · Yohane 4:14',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 67, 68, 70, 67, 65, 63],
    verses: [
      [
        'Amenshi ya mweo yaliko,',
        'Mukafukauka;',
        'Kwena Yesu aletulinda,',
        'Ukutuposhako'
      ],
      [
        'Ilintu twanaka no lwendo,',
        'Catuwamina \'fwe;',
        'Ukutusha kuli amenshi, Yantu',
        'yakesuka.'
      ],
      [
        'Isa kuli Kristu e Menshi,',
        'Akakukosesha;',
        'Isa sonda Yesu musuma, Cilaka',
        'cikapwa'
      ]
    ],
    chorus: [
      'Amenshi ya mweo yaliko,',
      'Menshi ya mweo yaliko;',
      'Menshi ya mweo yaliko.',
      'Muli kafukauka.'
    ],
    englishVerses: [
      [
        'We\'ll tarry by the living waters,',
        'The fountain pure and free;',
        'There Jesus waits to give us welcome,',
        'A welcome sweet \'twill be.'
      ],
      [
        'When weary with the toilsome journey,',
        '\'Tis sweet to rest awhile,',
        'Where crystal waters gently murmur,',
        'And sunny fountains smile.'
      ],
      [
        'Then come to Christ, the living water,',
        'Thy strength will He restore;',
        'Come, taste the joy of His salvation,',
        'And drink to thirst no more.'
      ]
    ],
    englishChorus: [
      'We\'ll tarry by the living waters,',
      'Tarry by the living waters;',
      'Tarry by the living waters,',
      'Tarry by the Fount of Life.'
    ]
  },
  {
    id: 'hymn-70',
    number: 70,
    title: 'Lintu Yesu Akesa Pa Calo',
    writer: 'Harriet B. McKeever (1807–1887); Music by John R. Sweney',
    englishTune: 'When Jesus Shall Gather the Nations (He Will Gather the Wheat)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'B-flat Major',
    timeSignature: '4/4',
    scripture: 'Mateo 3:12 · Mateo 25:31-34 · 1 Abena Tesalonika 4:16',
    isSample: false,
    melodicPreview: [70, 70, 70, 72, 70, 67, 65, 67, 70],
    verses: [
      [
        'Lintu Yesu akesa pa calo',
        'kupingula bantu bonse,',
        'Na ifwe tukeminina shani ilyo',
        'mashina yaketwa'
      ],
      [
        'Bushe tukomfwa umupusushi,',
        'Amashiwi yapalwa ya,',
        'Wacitile bwino mwana wandi,',
        'Ingila mung\'anda yandi'
      ],
      [
        'Nangu tukekala kubabipa,',
        'Nokumfwa ishiwi lya nsoni,',
        'Tamwacitile bwino pa calo,',
        'Fumeni imwe uko ndi.'
      ],
      [
        'Akasekela pa bantu bakwe, Lintu',
        'akabamona uko,',
        'Akabafwika lubuto tutu, Lintu',
        'bafika ku mwakwe.'
      ],
      [
        'Pempuleni nomba no kupepa,',
        'Nyali shenu shibekeshe,',
        'Kabili lintu shibwinga akesa,',
        'Twaya ku cimuno cakwe.'
      ]
    ],
    chorus: [
      'Akatutile ngano mubutala. Lelo',
      'misungu akaposa;',
      'Na ifwe tukeminina shani, pa',
      'bupingulo bukulu.'
    ],
    englishVerses: [
      [
        'When Jesus shall gather the nations,',
        'Before Him at last to appear,',
        'Then how shall we stand in the judgment,',
        'When summoned our sentence to hear?'
      ],
      [
        'Shall we hear from the lips of the Savior',
        'The words, "Faithful servant, well done;',
        'Enter into the joy of your Father,',
        'And sit with your Lord on His throne"?'
      ],
      [
        'Or trembling with terror and anguish,',
        'And hearing that sorrowful word:',
        '"Depart from Me, ye who worked evil,',
        'No place is for you with the Lord"?'
      ],
      [
        'He will smile when He looks on His children,',
        'When He sees on their forehead His seal;',
        'He will clothe them in heavenly beauty,',
        'As low at His footstool they kneel.'
      ],
      [
        'Then let us be watching and praying,',
        'With lamps burning steady and bright;',
        'When the Bridegroom shall call to the wedding,',
        'We\'ll enter His mansions of light.'
      ]
    ],
    englishChorus: [
      'He will gather the wheat in His garner,',
      'But the chaff will He scatter away;',
      'Then how shall we stand in the judgment',
      'Of the great resurrection day?'
    ]
  },
  {
    id: 'hymn-71',
    number: 71,
    title: 'Bushe Ishina Lyandi Lyalilembwa Uko?',
    writer: 'Mary A. Kidder, 1876; Music by Frank M. Davis, 1878',
    englishTune: 'Is My Name Written There?',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Luka 10:20 · Ukusokolola 20:12, 15 · Ukusokolola 21:27 · Esaya 1:18',
    isSample: false,
    melodicPreview: [60, 64, 67, 67, 67, 69, 67, 64, 60, 62, 64],
    verses: [
      [
        'Mfumu nshisakamana na fyuma kuno,',
        'Ndeiteyanishisha kwingila ku mulu;',
        'Muli buku lya mweo lyalembwa ku mulu,',
        'Njeba nomba Katula \'shina lyandi uko.'
      ],
      [
        'Mwe Mupusushi wandi ububi bwafula,',
        'Lelo mulopa wenu wabutishe tutu;',
        'Ubulayo bwapalwa kuli ifwe babi,',
        '"Nangu bubi bwafula ndemusamba."'
      ],
      [
        'Umusumba wawama mayanda yabuta,',
        'Na bantu bamushilo bafwikwa fisuma,',
        'Mpulumushi takuli mu bufumu ubo;',
        'Njeba nomba Katula \'shina lyandi uko.'
      ]
    ],
    chorus: [
      'Bushe shina lyandi lyalilembwa uko?',
      'Bushe ishina lyandi mwi buku lya mweo?'
    ],
    englishVerses: [
      [
        'Lord, I care not for riches, neither silver nor gold;',
        'I would make sure of heaven, I would enter the fold.',
        'In the book of Thy kingdom, with its pages so fair,',
        'Tell me, Jesus, my Savior, is my name written there?'
      ],
      [
        'Lord, my sins they are many, like the sands of the sea,',
        'But Thy blood, O my Savior, is sufficient for me;',
        'For Thy promise is written in bright letters that glow,',
        '"Though your sins be as scarlet, I will make them like snow."'
      ],
      [
        'Oh, that beautiful city, with its mansions of light,',
        'With its glorified beings, in pure garments of white;',
        'Where no evil thing cometh to despoil what is fair;',
        'Where the angels are watching, is my name written there?'
      ]
    ],
    englishChorus: [
      'Is my name written there,',
      'On the page white and fair?',
      'In the book of Thy kingdom,',
      'Is my name written there?'
    ]
  },
  {
    id: 'hymn-72',
    number: 72,
    title: 'Inshita Shepingulo Shatendeka',
    writer: 'Franklin E. Belden (1858–1945)',
    englishTune: 'The Judgment Has Set (How Shall We Stand in the Judgment?)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubupingulo no Bwisa bwa kwa Kristu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Daniele 7:9-10 · Ukusokolola 20:12 · 2 Abena Korinti 5:10 · Kasambilisha 12:14',
    isSample: false,
    melodicPreview: [65, 65, 69, 72, 72, 70, 69, 67, 65, 67, 69],
    verses: [
      [
        'Inshita shepingulo shatendeka,',
        'Elyo tukekala shani,',
        'Lintu matontonkanyo na fyonse',
        'Fikapingulwa na Lesa?'
      ],
      [
        'Ubupingulo bwatendeke na',
        'bafwa, Abomi bashala beka;',
        'Fintu fyonse ifyalembelwe Mu',
        'mabuku ya kwa Lesa.'
      ],
      [
        'Elyo naifwe tukekala shani Lintu',
        'mabuku yesulwe,',
        'Lintwi milandu yonse ikapwa Mu',
        'bupingulo bwa Lesa?'
      ]
    ],
    chorus: [
      'Elyo tukekala shani, Mu bupingulo',
      'bwa Lesa;',
      'Nangu Lesa akatukana, Nangu',
      'bubi bwafutilwe'
    ],
    englishVerses: [
      [
        'The judgment has set, the books have been opened;',
        'How shall we stand in that great day,',
        'When every thought, and word, and action,',
        'God, the righteous Judge, shall weigh?'
      ],
      [
        'The work is begun with those who are sleeping,',
        'Soon will the living here be tried,',
        'Out of the books of God\'s remembrance,',
        'His decision to abide.'
      ],
      [
        'O, how shall we stand that moment of searching,',
        'When all our sins those books reveal?',
        'When from that court, each case decided,',
        'Shall be granted no appeal?'
      ]
    ],
    englishChorus: [
      'How shall we stand in that great day?',
      'How shall we stand in that great day?',
      'Shall we be found before Him wanting?',
      'Or with our sins all washed away?'
    ]
  },
  {
    id: 'hymn-73',
    number: 73,
    title: 'Twitwa Ku Cimuno',
    writer: 'J. E. Landor, 1882; Music by Edmund S. Lorenz, 1882',
    englishTune: 'Called to the Feast (When the King Comes In)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Mateo 22:1-14 · Luka 14:16-24 · Ukusokolola 19:7-9',
    isSample: false,
    melodicPreview: [67, 67, 67, 69, 67, 64, 60, 62, 64, 65, 67],
    verses: [
      [
        'Twitwa ku cimuno ca Mfumu,',
        'Nangu tuli pamo nga bakwe,',
        'Tukacita nshi munyina Lintu',
        'ikesa?'
      ],
      [
        'Lintu Yesu Mfumu akesa, Akesa',
        'mu Lulumbi lwakwe;',
        'Tukacitanshi munyina Lintu',
        'ikesa?'
      ],
      [
        'Fintu fyamunkama fyakale ifi',
        'fyonse fikamoneka;',
        'Mitima yesu kamoneka Lintu',
        'ikesa.'
      ],
      [
        'Na bonse bafwikwa mushilo',
        'Bakamusekelesha cine;',
        'We munyinane tukaba nshi Lintu',
        'ikesa?'
      ],
      [
        'Bulanda icibi ku babi, Lintu',
        'Mfumu Yesu ikesa;',
        'Ikesa kubapela bonse, Filambu',
        'fyabo.'
      ],
      [
        'Mwe Lesa mutupe cikuku,',
        'Kuwamishe mitima yesu;',
        'Elyo tekuti tumutine, Lintu',
        'mukesa.'
      ]
    ],
    chorus: [
      'Lintu ikesa mwandi, Lintu ikesa;',
      'Tukacitanshi munyina Lintu ikesa?'
    ],
    englishVerses: [
      [
        'Called to the feast by the King are we,',
        'Sitting, perhaps, where His people be;',
        'How will it fare, then, with thee and me',
        'When the King comes in?'
      ],
      [
        'Crowns on the head where the thorns have been,',
        'Glorified He who once died for men;',
        'Splendid the vision before us then,',
        'When the King comes in.'
      ],
      [
        'Like lightning\'s flash will that instant show',
        'Things hidden long from both friend and foe;',
        'Just what we are will each neighbor know,',
        'When the King comes in.'
      ],
      [
        'Joyful His eye shall on each one rest',
        'Who is in white wedding garments dressed;',
        'Ah! well for us if we stand the test,',
        'When the King comes in.'
      ],
      [
        'Endless the sad separation then,',
        'Bitter the cry of deluded men,',
        'Awful that moment of anguish when',
        'Christ, the King, comes in.'
      ],
      [
        'Lord, grant us all, we implore Thee, grace,',
        'So to await Thee each in his place,',
        'That we may fear not to see Thy face',
        'When Thou comest in.'
      ]
    ],
    englishChorus: [
      'When the King comes in, brother,',
      'When the King comes in!',
      'How will it fare with thee and me',
      'When the King comes in?'
    ]
  },
  {
    id: 'hymn-74',
    number: 74,
    title: 'Tanda Ku Lucelo',
    writer: 'Knowles Shaw, 1874; Music by George A. Minor, 1880',
    englishTune: 'Bringing in the Sheaves (Sowing in the Morning)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 126:5-6 · Abena Galatia 6:9 · Kasambilisha 11:6',
    isSample: false,
    melodicPreview: [60, 60, 60, 60, 64, 67, 67, 69, 67, 64, 60],
    verses: [
      [
        'Tanda kulucelo, Mbuto shabusuma,',
        'Tuletanda nomba, Mbuto sha Mfumu;',
        'Tulolela nshita, Yakusepa mbuto,',
        'Tukabwela bonse No kusekela.'
      ],
      [
        'Tanda pa kasuba, Nelyo mumiloke,',
        'E milimo yesu tukacita pe,',
        'Lintu imilimo Yakusepa yapwa,',
        'Tukabwela bonse Nokusekela.'
      ],
      [
        'Uyo alelila Lintu aletanda,',
        'Mbuto sha kwa Yesu muno mu calo;',
        'Lintu imilimo, Pano calo yapwa,',
        'Tukabwela bonse nokusekela.'
      ]
    ],
    chorus: [
      'Tukasekela, tukasekela,',
      'Lintu tukabwela tukasekela;',
      'Tukasekela, tukasekela,',
      'Lintu tukabwela tukasekela'
    ],
    englishVerses: [
      [
        'Sowing in the morning, sowing seeds of kindness,',
        'Sowing in the noontide and the dewy eve;',
        'Waiting for the harvest, and the time of reaping,',
        'We shall come rejoicing, bringing in the sheaves.'
      ],
      [
        'Sowing in the sunshine, sowing in the shadows,',
        'Fearing neither clouds nor winter\'s chilling breeze;',
        'By and by the harvest, and the labor ended,',
        'We shall come rejoicing, bringing in the sheaves.'
      ],
      [
        'Going forth with weeping, sowing for the Master,',
        'Though the loss sustained our spirit often grieves;',
        'When our weeping\'s over, He will bid us welcome,',
        'We shall come rejoicing, bringing in the sheaves.'
      ]
    ],
    englishChorus: [
      'Bringing in the sheaves, bringing in the sheaves,',
      'We shall come rejoicing, bringing in the sheaves;',
      'Bringing in the sheaves, bringing in the sheaves,',
      'We shall come rejoicing, bringing in the sheaves.'
    ]
  },
  {
    id: 'hymn-75',
    number: 75,
    title: 'Umfwe Mashiwi Ya Yesu',
    writer: 'Alexcenah Thomas, c. 1885; Music by William A. Ogden, 1885',
    englishTune: 'Bring Them In (Hark! \'Tis the Shepherd\'s Voice)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'A-flat Major',
    timeSignature: '4/4',
    scripture: 'Luka 15:4-7 · Mateo 18:12-14 · Yohane 10:16 · Esekiele 34:11-12',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 72, 70, 68, 70, 72, 75, 72],
    verses: [
      [
        'Umfwe mashiwi ya Yesu, Uyu mu',
        'mpanga yamfimfi,',
        'Aita abo baluba, Balekele ng\'anda',
        'yakwe.'
      ],
      [
        'Nani akafwa Katula, kwafwa',
        'kufwaya baluba,',
        'Nani ababwesha nomba, Ku',
        'ng\'anda ya wishi wabo'
      ],
      [
        'Mu mpanga umfwa balila, Pa',
        'lupili lwa ku mfimfi;',
        'Nomba Yesu amuita "Fwayeni',
        'abantu bandi."'
      ]
    ],
    chorus: [
      'Leteni leteni bwesheni',
      'bampulumushi;',
      'Leteni leteni bwesheni kuli Yesu'
    ],
    englishVerses: [
      [
        'Hark! \'tis the Shepherd\'s voice I hear,',
        'Out in the desert dark and drear,',
        'Calling the sheep who\'ve gone astray,',
        'Far from the Shepherd\'s fold away.'
      ],
      [
        'Who\'ll go and help this Shepherd kind,',
        'Help Him the wand\'ring ones to find?',
        'Who\'ll bring the lost ones to the fold,',
        'Where they\'ll be sheltered from the cold?'
      ],
      [
        'Out in the desert hear their cry,',
        'Out on the mountain wild and high;',
        'Hark! \'tis the Master speaks to thee,',
        '"Go find My sheep where\'er they be."'
      ]
    ],
    englishChorus: [
      'Bring them in, bring them in,',
      'Bring them in from the fields of sin;',
      'Bring them in, bring them in,',
      'Bring the wand\'rers to Jesus.'
    ]
  },
  {
    id: 'hymn-76',
    number: 76,
    title: 'Mwafwe Abaluba',
    writer: 'Fanny J. Crosby, 1869; Music by William H. Doane, 1870',
    englishTune: 'Rescue the Perishing',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'B-flat Major',
    timeSignature: '4/4',
    scripture: 'Yuda 1:22-23 · Luka 14:23 · Mateo 28:19-20 · Yakobo 5:19-20',
    isSample: false,
    melodicPreview: [65, 70, 70, 72, 70, 68, 67, 65, 68, 70, 72, 70],
    verses: [
      [
        'Mwafwe abaluba, \'sunge balefwa,',
        'Cita no luse kufumya kumfwa,',
        'Bebeni baluba kuli Katula,',
        'Alifwilile ku bubi bwabo.'
      ],
      [
        'Nangu bam\'sulile alebalinda,',
        'Alebafwaya kuleka bubi;',
        'Mubapapatile, pepeni nabo,',
        'Alebelela lintu babwela'
      ],
      [
        'Kutemwa kwa Yesu kuli na maka,',
        'Kulebaposha nga basumina;',
        'Nangu Balenaka Yeswa batemwa,',
        'Bomba no luse ulebabwesha'
      ],
      [
        'Mwafwe abaluba e umulimo,',
        'Maka akamupela kucita;',
        'Bwesheni baluba ube mufuke;',
        'Bebeni Yesu alebafwila.'
      ]
    ],
    chorus: [
      'Mwafwe abaluba, \'sunge balefwa,',
      'Yesu abatemwa abafwila.'
    ],
    englishVerses: [
      [
        'Rescue the perishing, care for the dying,',
        'Snatch them in pity from sin and the grave;',
        'Weep o\'er the erring one, lift up the fallen,',
        'Tell them of Jesus, the mighty to save.'
      ],
      [
        'Though they are slighting Him, still He is waiting,',
        'Waiting the penitent child to receive;',
        'Plead with them earnestly, plead with them gently;',
        'He will forgive if they only believe.'
      ],
      [
        'Down in the human heart, crushed by the tempter,',
        'Feelings lie buried that grace can restore;',
        'Touched by a loving heart, wakened by kindness,',
        'Chords that were broken will vibrate once more.'
      ],
      [
        'Rescue the perishing, duty demands it;',
        'Strength for thy labor the Lord will provide;',
        'Back to the narrow way patiently win them;',
        'Tell the poor wand\'rer a Savior has died.'
      ]
    ],
    englishChorus: [
      'Rescue the perishing, care for the dying,',
      'Jesus is merciful, Jesus will save.'
    ]
  },
  {
    id: 'hymn-77',
    number: 77,
    title: 'Natemwa Ukusosa \'Fya Fintu Fya Lesa',
    writer: 'Katherine Hankey, 1866; Music by William G. Fischer, 1869',
    englishTune: 'I Love to Tell the Story (HANKEY)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'A-flat Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 89:1 · Abena Roma 1:16 · 1 Yohane 4:9-10 · Marko 16:15',
    isSample: false,
    melodicPreview: [68, 68, 68, 68, 67, 68, 70, 72, 70, 68],
    verses: [
      [
        'Natemwa ukusosa, Fya fintu fya',
        'Lesa;',
        'Fya lulumbi lwa Yesu, No',
        'kutemwa kwakwe;',
        'Natemwa ukusosa, Ilandwe',
        'lisuma,',
        'Lisansamusha ine ukucila fyonse'
      ],
      [
        'Lyawama e lyawama,',
        'Ilyakupapisha;',
        'Kucila ifiloto, Landwe lya',
        'kutemwa;',
        'Natemwa kulisosa pantu',
        'lilengafwa,',
        'Na pa mulandu uyu, Naleba kuli',
        'Mwe.'
      ],
      [
        'Lyawama e lyawama kusosa libili;',
        'Lintu nalibwekesha, Lyawama kucila;',
        'Natemwa kulisosa, Pantu bengi kuno,',
        'Tabomfwile ilandwe, Lya kutemwa kwakwe.'
      ],
      [
        'Lyawama e lyawama, Ku',
        'balishibisha;',
        'Nga Iintu tuli kuno, Tulefwaisha',
        'pe,',
        'Lintu twaya ku mulu, Kwimbo',
        'lwimbo lupya;',
        'Lukaba ulwa kale. Lwa kutemwa',
        'kwakwe.'
      ]
    ],
    chorus: [
      'Natemwa ukusosa ilandwe lyakwa',
      'Yesu,',
      'Ilandwe lya kutemwa, Kutemwa',
      'kwa Yesu.'
    ],
    englishVerses: [
      [
        'I love to tell the story of unseen things above,',
        'Of Jesus and His glory, of Jesus and His love.',
        'I love to tell the story, because I know \'tis true;',
        'It satisfies my longings as nothing else can do.'
      ],
      [
        'I love to tell the story; more wonderful it seems',
        'Than all the golden fancies of all our golden dreams.',
        'I love to tell the story, it did so much for me;',
        'And that is just the reason I tell it now to thee.'
      ],
      [
        'I love to tell the story; \'tis pleasant to repeat',
        'What seems, each time I tell it, more wonderfully sweet.',
        'I love to tell the story, for some have never heard',
        'The message of salvation from God\'s own holy Word.'
      ],
      [
        'I love to tell the story, for those who know it best',
        'Seem hungering and thirsting to hear it like the rest.',
        'And when, in scenes of glory, I sing the new, new song,',
        '\'Twill be the old, old story that I have loved so long.'
      ]
    ],
    englishChorus: [
      'I love to tell the story, \'twill be my theme in glory,',
      'To tell the old, old story of Jesus and His love.'
    ]
  },
  {
    id: 'hymn-78',
    number: 78,
    title: 'Fwayeni Baluba',
    writer: 'William A. Ogden (1841–1897), 1887',
    englishTune: 'Seeking the Lost',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'A-flat Major',
    timeSignature: '9/8',
    scripture: 'Luka 19:10 · Luka 15:4 · Esekiele 34:16 · Mateo 10:6',
    isSample: false,
    melodicPreview: [68, 70, 72, 70, 68, 65, 68, 70, 72, 75, 72],
    verses: [
      [
        'Fwayeni ba-lu-ba no kute-mwa,',
        'Abaluba mu calo conse;',
        'Basosheni fye ilandwe lya-kwe,',
        'Bebeni bo-mfwe shiwi lyakwe'
      ],
      [
        'Abaluba mu balange Ye-su,',
        'Abanaka na balecula,',
        'Batungulu-le pe Mupusu-shi;',
        'Mubalange nshi-la ya mweo.'
      ],
      [
        'Ndemuciti-la Yesu na i-ci,',
        'Ndemukonka nshi-ku ne nshiku,',
        'Nkabafwa bawa nabo bale-fwa;',
        'No kubala-nga kuli Yesu.'
      ]
    ],
    chorus: [
      'Kabiyeni ... mu calo, mu mpi-li;',
      'Leteni a ... balubi-lile; Mwi cinka',
      'lya ... kwa Mu-pusu-shi,',
      'Yes\'aipa .. .ililwe- \'babi.'
    ],
    englishVerses: [
      [
        'Seeking the lost, yes, kindly entreating',
        'Wanderers on the mountain astray;',
        '"Come unto Me," His message repeating,',
        'Words of the Master speaking today.'
      ],
      [
        'Seeking the lost, and pointing to Jesus,',
        'Souls that are weak and hearts that are sore;',
        'Leading them forth in ways of salvation,',
        'Showing the path to life evermore.'
      ],
      [
        'Thus I would go on missions of mercy,',
        'Following Christ from day unto day;',
        'Cheering the faint and raising the fallen,',
        'Pointing the lost to Jesus, the Way.'
      ]
    ],
    englishChorus: [
      'Going afar upon the mountain,',
      'Bringing the wand\'rer back again,',
      'Into the fold of grace and pardon,',
      'Jesus the Lamb for sinners slain.'
    ]
  },
  {
    id: 'hymn-79',
    number: 79,
    title: 'Konse Fye Mabala Yapya',
    writer: 'James Oren Thompson, 1885; Music by J. B. O. Clemm, 1895',
    englishTune: 'Far and Near the Fields Are Teeming (CLEMM)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Mateo 9:37-38 · Luka 10:2 · Yohane 4:35-36 · Ukusokolola 14:15',
    isSample: false,
    melodicPreview: [60, 64, 67, 67, 69, 67, 64, 60, 62, 64, 65, 64, 62],
    verses: [
      [
        'Konse fye mabala yapya. Yapemba',
        'ukusepwa;',
        'Konse fye ngano nashipya,',
        'Shibengeshima bwino'
      ],
      [
        'Mubatuma ulucelo, Kubomba',
        'mwibala;',
        'Bebeni kubafwaisha, konse fye',
        'muno calo.'
      ],
      [
        'Na iwe Lesa natuma, Sepa mwi',
        'bala lyakwe;',
        'Nge lintu milimo yapwa,',
        'Mukasekela cine.'
      ]
    ],
    chorus: [
      'Mwe Lesa tuma babomfi',
      'mutumfwe Lesa nomba;',
      'Mubatuma ukusepa Pantu \'nshita',
      'yacepa.'
    ],
    englishVerses: [
      [
        'Far and near the fields are teeming',
        'With the waves of ripened grain;',
        'Far and near their gold is gleaming',
        'O\'er the sunny slope and plain.'
      ],
      [
        'Send them forth with morn\'s first beaming;',
        'Send them in the noontide\'s glare;',
        'When the sun\'s last rays are gleaming,',
        'Bid them gather everywhere.'
      ],
      [
        'O thou, whom thy Lord is sending,',
        'Gather now the sheaves of gold;',
        'Heav\'nward then at evening wending,',
        'Thou shalt come with joy untold.'
      ]
    ],
    englishChorus: [
      'Lord of harvest, send forth reapers!',
      'Hear us, Lord, to Thee we cry;',
      'Send them now the sheaves to gather,',
      'Ere the harvest-time pass by.'
    ]
  },
  {
    id: 'hymn-80',
    number: 80,
    title: 'Tuleya Kubomba',
    writer: 'Fanny J. Crosby, 1870; Music by William H. Doane, 1871',
    englishTune: 'To the Work',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinti 15:58 · Yohane 9:4 · Kasambilisha 9:10 · Abena Kolose 3:23-24',
    isSample: false,
    melodicPreview: [65, 65, 65, 65, 67, 69, 69, 72, 70, 69, 67],
    verses: [
      [
        'Tuleya kubomba tuli bamilimo,',
        'Konkeni mu nshila Yesu aendele;',
        'Na mashiwi aletupela amaka,',
        'Tukacita maka \'ncito atupela'
      ],
      [
        'Tuleya kubomba kulisha bansala,',
        'Sendeni banaka kuminwe ya mweo,',
        'Ululumbi lwesu pa lupanda lwakwe,',
        'Bebeni bonse bupususho apela.'
      ],
      [
        'Tuleya kubomba, mu nakila nomba;',
        'Pantu inshita ikesa ukusepa;',
        'Katula wesu ateyanye cifulo,',
        'Lwimbo lwesu lwape ku ubupususho'
      ]
    ],
    chorus: [
      'Tuleya Kubomba Tuleya ... kubomba',
      'Sumina pempula Bomba milimo ya Mfumu.'
    ],
    englishVerses: [
      [
        'To the work! to the work! we are servants of God,',
        'Let us follow the path that our Master has trod;',
        'With the balm of His counsel our strength to renew,',
        'Let us do with our might what our hands find to do.'
      ],
      [
        'To the work! to the work! let the hungry be fed;',
        'To the fountain of life let the weary be led;',
        'In the cross and its banner our glory shall be,',
        'While we herald the tidings, "Salvation is free!"'
      ],
      [
        'To the work! to the work! in the strength of the Lord,',
        'And a robe and a crown shall our labor reward;',
        'When the home of the faithful our dwelling shall be,',
        'And we shout with the ransomed, "Salvation is free!"'
      ]
    ],
    englishChorus: [
      'Toiling on, toiling on,',
      'Toiling on, toiling on,',
      'Let us hope, let us watch,',
      'And labor till the Master comes.'
    ]
  },
  {
    id: 'hymn-81',
    number: 81,
    title: 'Mwe Bantu Bakwa Lesa',
    writer: 'Anna L. Walker Coghill, 1854; Music by Lowell Mason, 1864',
    englishTune: 'Work, for the Night Is Coming (DILIGENCE)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Yohane 9:4 · Kasambilisha 9:10 · Abena Roma 13:11-12',
    isSample: false,
    melodicPreview: [65, 65, 65, 67, 69, 65, 69, 70, 72, 72, 70, 69, 67],
    verses: [
      [
        'Mwe bantu bakwa Lesa',
        'mwapelwa milimo;',
        'Bomb ni pa kasuba nelyo cungulo;',
        'Nomba nshita kubomba kucili',
        'lubuto;',
        'Ubushiku bwaila milimo yapwa,'
      ],
      [
        'Mwe bantu bakwa Lesa',
        'mwikokola mwise;',
        'Lesa apele nshita kubomba',
        'nomba;',
        'Lintu milimo yapwa atupa',
        'kutusha,',
        'Lelo ili inshita iya milimo.'
      ],
      [
        'Mwe bantu bakwa Lesa nshita',
        'yapalama,',
        'Kuleka imilimo kubapususha;',
        'Bomba na maka yenu kupwishe',
        'milimo',
        'Pantu bushiku bwisa',
        'tamwakabombe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Work, for the night is coming,',
        'Work through the morning hours;',
        'Work while the dew is sparkling,',
        'Work \'mid springing flowers;',
        'Work when the day grows brighter,',
        'Work in the glowing sun;',
        'Work, for the night is coming,',
        'When man\'s work is done.'
      ],
      [
        'Work, for the night is coming,',
        'Work through the sunny noon;',
        'Fill brightest hours with labor,',
        'Rest comes sure and soon.',
        'Give every flying minute',
        'Something to keep in store;',
        'Work, for the night is coming,',
        'When man works no more.'
      ],
      [
        'Work, for the night is coming,',
        'Under the sunset skies;',
        'While their bright tints are glowing,',
        'Work, for daylight flies.',
        'Work till the last beam fadeth,',
        'Fadeth to shine no more;',
        'Work, while the night is darkening,',
        'When man\'s work is o\'er.'
      ]
    ]
  },
  {
    id: 'hymn-82',
    number: 82,
    title: 'Imfumu Mu Lucelo Pe',
    writer: 'Isaac Watts (1674–1748), 1719; Music by Samuel Stanley (1767–1822)',
    englishTune: 'Lord, in the Morning (WARWICK)',
    category: 'praise-and-worship',
    categoryBemba: 'Ulucelo',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 5:1-3, 8, 11-12',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Imfumu mu lucelo pe,',
        'Mukang\'ufwe shiwi;',
        'Mu kupepa kuli Imwe,',
        'Lesa wa ku mulu.'
      ],
      [
        'Ndefwayo Mupashi wenu,',
        'Wakuntungulula;',
        'Unange mulimo wandi,',
        'Ni lufyanishiwa.'
      ],
      [
        'Abantu abamutemwa,',
        'Babe na mapalo;',
        'Lesa akabafwa bonse,',
        'Inshiku shonse pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Lord, in the morning Thou shalt hear',
        'My voice ascending high;',
        'To Thee will I direct my prayer,',
        'To Thee lift up mine eye.'
      ],
      [
        'O may Thy Spirit guide my feet',
        'In ways of righteousness,',
        'Make every path of duty straight',
        'And plain before my face.'
      ],
      [
        'The men that love and fear Thy name',
        'Shall see their hopes fulfilled;',
        'The mighty God will compass them',
        'With favor as a shield.'
      ]
    ]
  },
  {
    id: 'hymn-83',
    number: 83,
    title: 'Ndefwaya Ukwimba Ishi Nyimbo',
    writer: 'Charles Wesley, 1739; arr. Ralph E. Hudson, 1887',
    englishTune: 'Blessed Be the Name (O for a Thousand Tongues to Sing)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya no Kucindika',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 72:18-19 · Amalumbo 113:2 · Abena Filipi 2:9-11',
    isSample: false,
    melodicPreview: [68, 72, 72, 72, 70, 68, 70, 72, 70, 68],
    verses: [
      [
        'Ndefwaisha kwimbe-shi nyimbo,',
        'Lyashuka ishina lyenu:',
        'Mfumu yandi iya lulumbi,',
        'Lyashuka ishina lyenu.'
      ],
      [
        'Ni Yesu, e-shina lisuma; Lyashuka',
        'ishina lyenu;',
        'Ku bantu a-babi-pa bonse,',
        'Lyashuka ishina Iyenu.'
      ],
      [
        'Wafumya ma-ka ya Satana;',
        'Lyashuka ishina lyenu;',
        'Umulopa wakwe wawamya,',
        'Lyashuka ishina lyenu.'
      ]
    ],
    chorus: [
      'Lyashuke shina, Lyashuke shina,',
      'Lyashuka ishina lyenu;',
      'Lyashuke shina, Lyashuke shina,',
      'Lyashuka ishina lyenu.'
    ],
    englishVerses: [
      [
        'O for a thousand tongues to sing,',
        'Blessed be the name of the Lord!',
        'The glories of my God and King,',
        'Blessed be the name of the Lord!'
      ],
      [
        'Jesus, the name that charms our fears,',
        'Blessed be the name of the Lord!',
        '\'Tis music in the sinner\'s ears,',
        'Blessed be the name of the Lord!'
      ],
      [
        'He breaks the power of canceled sin,',
        'Blessed be the name of the Lord!',
        'His blood can make the foulest clean,',
        'Blessed be the name of the Lord!'
      ]
    ],
    englishChorus: [
      'Blessed be the name, blessed be the name,',
      'Blessed be the name of the Lord!',
      'Blessed be the name, blessed be the name,',
      'Blessed be the name of the Lord!'
    ]
  },
  {
    id: 'hymn-84',
    number: 84,
    title: 'Lumbeni Lesa Wapalwa',
    writer: 'Thomas Ken, 1674; Music by Louis Bourgeois, 1551',
    englishTune: 'Old Hundredth (Praise God, From Whom All Blessings Flow)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutota Lesa',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 100:1-5 · Amalumbo 150:6 · Abena Efese 1:3 · Ukusokolola 5:13',
    isSample: false,
    melodicPreview: [67, 67, 66, 64, 62, 67, 69, 71, 71, 71, 69, 67, 72, 71, 69, 67],
    verses: [
      [
        'Lumbeni Lesa wapalwa',
        'Mulumbanyeni mwe bonse;',
        'Na \'bangeli ba kumulu;',
        'Lumbanyeni Lesa wesu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Praise God, from whom all blessings flow;',
        'Praise Him, all creatures here below;',
        'Praise Him above, ye heav\'nly host;',
        'Praise Father, Son, and Holy Ghost.'
      ]
    ]
  },
  {
    id: 'hymn-85',
    number: 85,
    title: 'Ndeimba Maka Ya Mfumu',
    writer: 'Isaac Watts, 1715; Tune: Gesangbuch, 1784 (ELLACOMBE)',
    englishTune: 'I Sing the Mighty Power of God (ELLACOMBE)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya no Kucindika',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 104:1-24 · Yeremia 10:12-13 · Amalumbo 139:7-10 · Amalumbo 19:1-6',
    isSample: false,
    melodicPreview: [60, 64, 67, 69, 67, 64, 60, 65, 64, 62, 60],
    verses: [
      [
        'Ndeimba maka ya Mfumu,',
        'Yapangile mpili:',
        'Yapangile na mabemba, No',
        'lwelele pamo:',
        'Ndeimba mano ye funde, Kasuba',
        'ukuteka;',
        'Ku mweshi apele funde, Kabili ku',
        'ntanda.'
      ],
      [
        'Ndetota busuma bwakwe, Kupele',
        'cakulya;',
        'Apangile nama shonse, Ku',
        'mashiwi yakwe;',
        'Konse fye Mfumu ndemona, Ifintu',
        'mwachitile;',
        'Nangu ndemona panshi fye, Nelyo',
        'mulwelele.'
      ],
      [
        'Maluba yonse yatweba lulumbi',
        'lwa Mfumu;',
        'Amakumbi ne fipupu, Fyatumwa',
        'na Lesa;',
        'Bonse bapoka umweo, Baletekwa',
        'na Imwe;',
        'Takuli cifulo kuno, Kufisa ku',
        'mulu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I sing the mighty power of God, that made the mountains rise,',
        'That spread the flowing seas abroad, and built the lofty skies.',
        'I sing the wisdom that ordained the sun to rule the day;',
        'The moon shines full at His command, and all the stars obey.'
      ],
      [
        'I sing the goodness of the Lord, that filled the earth with food;',
        'He formed the creatures with His word, and then pronounced them good.',
        'Lord, how Thy wonders are displayed, where’er I turn mine eye,',
        'If I survey the ground I tread, or gaze upon the sky!'
      ],
      [
        'There’s not a plant or flower below, but makes Thy glories known,',
        'And clouds arise, and tempests blow, by order from Thy throne;',
        'While all that borrows life from Thee is ever in Thy care,',
        'And everywhere that man can be, Thou, God, art present there.'
      ]
    ]
  },
  {
    id: 'hymn-86',
    number: 86,
    title: 'Mutote Mfumu',
    writer: 'Robert Grant, 1833; Tune: Johann Michael Haydn / arr. William Gardiner, 1815 (LYONS)',
    englishTune: 'O Worship the King (LYONS)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya no Kucindika',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 104:1-35 · Amalumbo 145:1-13 · 1 Timote 1:17 · Ukusokolola 4:11',
    isSample: false,
    melodicPreview: [63, 63, 68, 68, 70, 72, 73, 72, 70, 68],
    verses: [
      [
        'Mutote Mfumu pelo muchinshi,',
        'No kwimba lelo kutemwa kwakwe;',
        'Kabumba kachinga no Mpusushi,',
        'Alumbaniwe kuno na ku mulu,'
      ],
      [
        'Bunte namaka ku Mfumu yesu,',
        'Mingila yakwe yalibutisha;',
        'Fipupu ne nkuba fyacitwa nankwe,',
        'Lesa mukalamba ni Lesa wesu.'
      ],
      [
        'Kusunga kwakwe kwalikulisha;',
        'Apelo mwela, lubuto pamo;',
        'Amenshi tulenwa yapelwa nankwe;',
        'Imfula, kusepa, mapalo yakwe.'
      ],
      [
        "Ni'Mwe wa maka, Ni Mwe kutemwa;",
        'Pa fintu fyonse tulemutota;',
        'Bangeli mu mulu batota imwe;',
        'Imitima yesu tupela nomba.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O worship the King, all glorious above,',
        'And gratefully sing His wonderful love;',
        'Our Shield and Defender, the Ancient of Days,',
        'Pavilioned in splendor, and girded with praise.'
      ],
      [
        'O tell of His might, and sing of His grace,',
        'Whose robe is the light, whose canopy space;',
        'His chariots of wrath the deep thunderclouds form,',
        'And dark is His path on the wings of the storm.'
      ],
      [
        'Thy bountiful care, what tongue can recite?',
        'It breathes in the air, it shines in the light;',
        'It streams from the hills, it descends to the plain,',
        'And sweetly distills in the dew and the rain.'
      ],
      [
        'Frail children of dust, and feeble as frail,',
        'In Thee do we trust, nor find Thee to fail;',
        'Thy mercies, how tender, how firm to the end,',
        'Our Maker, Defender, Redeemer, and Friend!'
      ]
    ]
  },
  {
    id: 'hymn-87',
    number: 87,
    title: 'Kuli Imwe Tata Twaisa Ilelo',
    writer: 'Franklin E. Belden, 1880; Music by William J. Bostwick, 1880',
    englishTune: 'Father, We Come to Thee (Bostwick)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 46:1 · Amalumbo 91:1-2 · AbaHebere 4:16 · Amalumbo 5:1-3',
    isSample: false,
    melodicPreview: [65, 69, 72, 69, 67, 65, 67, 69, 67, 65],
    verses: [
      [
        'Kuli Imwe Tata twaisa ilelo,',
        'Mwe ilinga lyesu twapapata;',
        'Mu calo camfimfi, takuli lubuto,',
        'Mutusansamusha Tata wesu.'
      ],
      [
        'Mupusushe ifwe ku bupulumushi,',
        'Ube linga lyesu insiku pe;',
        'Tunaka no mwenso na balwani besu,',
        'Tulemufwaisha kutukosha.'
      ],
      [
        'Mutupale lelo mucikuku cenu,',
        'Mututangilile ku mweo pe,',
        'Na mu nshita shesu shonse mwituleka,',
        'Pela icifulo ku mobe pe.'
      ]
    ],
    chorus: [
      'Kuli Imwe Tata tuleisa',
      'Ku mapepo yesu mumfwe nomba.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Father, we come to Thee,',
        'No other help have we;',
        'Thou wilt our refuge be,',
        'On Thee we call.',
        'Earth is but dark and drear',
        'Without Thy presence near;',
        'Be Thou our comfort here,',
        'Father of all.'
      ],
      [
        'Save from our many foes,',
        'Save from our earthly woes;',
        'Be Thou our soul’s repose',
        'In time of need.',
        'Doubting are we, and weak;',
        'To us sweet courage speak;',
        'Thy mighty arm we seek',
        'For strength indeed.'
      ],
      [
        'Give us Thy grace divine,',
        'Seal us forever Thine;',
        'Our wayward feet incline',
        'From sin to flee.',
        'Oh, guide us, we implore,',
        'Till weary life is o’er,',
        'And on a brighter shore',
        'We dwell with Thee.'
      ]
    ],
    englishChorus: [
      'Father, we come to Thee,',
      'Turn not away;',
      'Helpless we come to Thee,',
      'Hear while we pray.'
    ]
  },
  {
    id: 'hymn-88',
    number: 88,
    title: 'Mwincila Ine Katula',
    writer: 'Fanny J. Crosby, 1868; Music by William H. Doane, 1870',
    englishTune: 'Pass Me Not (Pass Me Not, O Gentle Savior)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Luka 18:35-39 · Amalumbo 86:1 · Amapinda 3:5',
    isSample: false,
    melodicPreview: [72, 70, 68, 70, 72, 72, 72, 70, 68, 65, 68],
    verses: [
      [
        'Mwinchila ine Katula,',
        "Mumfwe kuli 'ne;",
        'Apo mulemona bambi,',
        'Mwinchila ine.'
      ],
      [
        'Ku ci puna ca kwa Lesa,',
        'Ndefwayo kwafwa;',
        'Ndefukama mu bulanda,',
        'Mungafwe ine.'
      ],
      [
        'Mu kutemwa kwakwa Yesu,',
        "Ndesumina 'ne;",
        "Mutima wandi 'kalipa,",
        'Muntule ine.'
      ],
      [
        'Mu ntulo ya nsansamusho,',
        'No mweo wandi;',
        "N'ani umbi pano calo,",
        'N’ani ku mulu'
      ]
    ],
    chorus: [
      "Yesu, Yesu, mumfwe kuli 'ne;",
      'Apo mulemona bambi, Mwinchila ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Pass me not, O gentle Savior,',
        'Hear my humble cry;',
        'While on others Thou art calling,',
        'Do not pass me by.'
      ],
      [
        'Let me at Thy throne of mercy',
        'Find a sweet relief;',
        'Kneeling there in deep contrition,',
        'Help my unbelief.'
      ],
      [
        'Trusting only in Thy merit,',
        'Would I seek Thy face;',
        'Heal my wounded, broken spirit,',
        'Save me by Thy grace.'
      ],
      [
        'Thou the spring of all my comfort,',
        'More than life to me,',
        'Whom have I on earth beside Thee?',
        'Whom in heaven but Thee?'
      ]
    ],
    englishChorus: [
      'Savior, Savior, hear my humble cry;',
      'While on others Thou art calling,',
      'Do not pass me by.'
    ]
  },
  {
    id: 'hymn-89',
    number: 89,
    title: 'Yawama e Yawama Pe',
    writer: 'William W. Walford, 1845; Music by William B. Bradbury, 1861',
    englishTune: 'Sweet Hour of Prayer (SWEET HOUR)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'D Major',
    timeSignature: '6/8',
    scripture: 'Amalumbo 55:17 · 1 Abena Tesalonika 5:17 · Abena Filipi 4:6 · AbaHebere 4:16',
    isSample: false,
    melodicPreview: [62, 66, 69, 62, 66, 69, 71, 69, 66, 64, 62],
    verses: [
      [
        'Yawama e yawama pe, Inshita kupepa Lesa;',
        'Na ku cipuna ca Tata, Ukwabo bufwayo bwandi;',
        'Mu nshita sha ubulanda, Mutima wandi wafwile',
        "Napusuka ku fiteyo, Pantu 'nshita yakupepa."
      ],
      [
        'Yawama e yawama pe, Inshita kupepa Lesa;',
        'Naishiba cine lelo, Katula akapalama;',
        'Anjebele kumufwaya, Kusumina mu cikuku;',
        'Nkapela malanda yonse, No kusekela kupepa.'
      ],
      [
        'Yawama e yawama pe, Inshita kupepa Lesa;',
        'Lintu napwishe milimo, Yesu takalabe ine;',
        'Akampelo mweo wa pe, Na ku mulu icifulo;',
        'Nge nshita lintu yafika, Nkamone mpumi yakwe pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Sweet hour of prayer! sweet hour of prayer!',
        'That calls me from a world of care,',
        'And bids me at my Father’s throne',
        'Make all my wants and wishes known.',
        'In seasons of distress and grief,',
        'My soul has often found relief,',
        'And oft escaped the tempter’s snare,',
        'By thy return, sweet hour of prayer!'
      ],
      [
        'Sweet hour of prayer! sweet hour of prayer!',
        'Thy wings shall my petition bear',
        'To Him whose truth and faithfulness',
        'Engage the waiting soul to bless.',
        'And since He bids me seek His face,',
        'Believe His word, and trust His grace,',
        'I’ll cast on Him my every care,',
        'And wait for thee, sweet hour of prayer!'
      ],
      [
        'Sweet hour of prayer! sweet hour of prayer!',
        'May I thy consolation share,',
        'Till, from Mount Pisgah’s lofty height,',
        'I view my home and take my flight.',
        'This robe of flesh I’ll drop, and rise',
        'To seize the everlasting prize,',
        'And shout, while passing through the air,',
        'Farewell, farewell, sweet hour of prayer!'
      ]
    ]
  },
  {
    id: 'hymn-90',
    number: 90,
    title: 'Umbi Umulungu Wapwa',
    writer: 'Joseph Stennett (1663–1713), 1712; Tune: Thomas Billings, 1770 (BROOKFIELD)',
    englishTune: 'Another Six Days\' Work (BROOKFIELD)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Ukutendeka 2:1-3 · Ukufuma 20:8-11 · AbaHebere 4:9-11 · Esaya 58:13-14',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 65, 70, 69, 67, 65],
    verses: [
      [
        'Umbi umulungu wapwa;',
        'Isabata lyafikila;',
        'Buli bushiku busuma,',
        'Bwakucila nshiku shonse.'
      ],
      [
        'Mwise toteni Yehofa',
        'Amupela ukutemwa;',
        'Cimonwa capelwa ifwe,',
        'Pali Sabata kucila.'
      ],
      [
        'Tuletontonkanya lelo,',
        'Kuli Katula wapalwa;',
        'Akatupela kwanga pe,',
        "Na kuli bonse bam'temwa."
      ],
      [
        'Tondolo wa kwa Yehofa,',
        'Atupela pano calo;',
        'Lelo lintu fyonse fyapwa,',
        'Tukatusha ku mwakwe pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Another six days’ work is done,',
        'Another Sabbath is begun;',
        'Return, my soul, enjoy thy rest,',
        'Improve the day that God has blest.'
      ],
      [
        'Come, bless the Lord, whose love assigns',
        'So sweet a rest to weary minds;',
        'A blest memorial is given,',
        'On this day more than all the seven.'
      ],
      [
        'O that our thoughts and thanks may rise',
        'As grateful incense to the skies,',
        'And draw from Christ that sweet repose',
        'Which none but he who feels it knows!'
      ],
      [
        'This heavenly calm within the breast',
        'Is the best pledge of glorious rest,',
        'Which for the church of God remains,',
        'The end of cares, the end of pains.'
      ]
    ]
  },
  {
    id: 'hymn-91',
    number: 91,
    title: 'Pempuleni',
    writer: 'Robert Lowry (1826–1899), 1871',
    englishTune: 'Watch and Pray (Watch, for the Time Is Short)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukulola no Kupepa',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Marko 13:33-37 · Mateo 24:42-44 · Mateo 25:1-13 · 1 Petro 5:8 · 1 Abena Tesalonika 5:6',
    isSample: false,
    melodicPreview: [65, 69, 72, 69, 67, 65, 69, 72, 70, 69],
    verses: [
      [
        'Pempuleni lintwi nshita ilya pepi;',
        'Mwe bena Kristu, pempuleni mupepe;',
        'Tengeleleni umulwani nakosa;',
        'Pempuleni Shibwinga aisa bwangu.'
      ],
      [
        'Tamfyeni mwenso no kushipula konse;',
        'Mwalailo kutusha ku mulu kwakwe;',
        'Pempuleni mwe baKristu no kupepa,',
        'Mupusushi wenu alemupempwila.'
      ],
      [
        'Cetekeleni fye Yesu Kafwa wenu,',
        'Ikatisheni akasuke akese;',
        "Lintu m'cili no mweo ikatisheni,",
        'Muli ino nshita pempula upepe'
      ]
    ],
    chorus: [
      'Pempuleni no kupepa,',
      'Pempuleni akasuba no bushiku,',
      'No kupepa pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Watch, for the time is short;',
        'Watch while ’tis called today;',
        'Watch lest the world prevail;',
        'Watch, Christian, watch and pray;',
        'Watch, for the flesh is weak;',
        'Watch, for the foe is strong;',
        'Watch lest the Bridegroom come;',
        'Watch, tho’ He tarry long.'
      ],
      [
        'Chase slumber from thine eyes,',
        'Chase doubting from thy breast;',
        'Thine is the promised prize',
        'Of heaven’s eternal rest;',
        'Watch, Christian, watch and pray;',
        'Thy Savior watched for thee,',
        'Till from His brow there poured',
        'Great drops of agony.'
      ],
      [
        'Take Jesus for thy trust;',
        'Watch while the foe is near;',
        'Gird well the armor on;',
        'Watch till thy Lord appear;',
        'Now when thy sun is up,',
        'Make thou no more delay,',
        'In this accepted time,',
        'Watch, Christian, watch and pray.'
      ]
    ],
    englishChorus: [
      'O watch and pray,',
      'O watch and pray;',
      'O watch in the darkness, and watch in the day;',
      'Christian, watch and pray.'
    ]
  },
  {
    id: 'hymn-92',
    number: 92,
    title: 'Mwilaba Sabata',
    writer: 'Fanny J. Crosby, 1868; Music by William B. Bradbury, 1868',
    englishTune: 'Don\'t Forget the Sabbath (Bradbury)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 20:8-11 · Esaya 58:13-14 · Marko 2:27-28 · Ukutendeka 2:2-3',
    isSample: false,
    melodicPreview: [70, 70, 65, 67, 70, 69, 67, 65, 67, 70, 69, 67, 65],
    verses: [
      [
        'Mwilaba Sabata Mfumu yapalile,',
        'Ilya palwa kucila Lya mulungu onse;',
        'Liletuletelo butusho no buseko,',
        'Bwisa pe mu bulesa ilyo tulemona.'
      ],
      [
        'Sunga iSabata no kumutotela,',
        "Mfumu ya ba nang'anga Ishila ya bumi;",
        'Nga twakonke Mfumu, muli cino calo,',
        'Akatupa Kafukauka ka pe na pe.'
      ],
      [
        'Kasuba ka Mfumu ka kumutotela,',
        'Twimbile Yesu nyimbo, Cibusa wa bana,',
        'Mufuke wa kutemwa musuma icibi,',
        'Malayo yobe yale tusekelesesha.'
      ]
    ],
    chorus: [
      'Isa, isa nomba isa Kasuba ka Mfumu,',
      'Isa, isa, nomba isa kasuba ka Mfumu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Don’t forget the Sabbath, the Lord our God hath blest,',
        'Of all the week the brightest, of all the week the best;',
        'It brings repose from labor, it tells of joy divine,',
        'Its beams of light descending, with heavenly beauty shine.'
      ],
      [
        'Keep the Sabbath holy, and worship Him today,',
        'Who said to His disciples, “I am the living way;”',
        'And if we meekly follow our Savior here below,',
        'He’ll give us of the fountain whose streams eternal flow.'
      ],
      [
        'Day of sacred pleasure! Its golden hours we’ll spend',
        'In thankful hymns to Jesus, the children’s dearest Friend;',
        'O gentle, loving Savior, how good and kind Thou art,',
        'How precious is Thy promise to dwell in every heart!'
      ]
    ],
    englishChorus: [
      'Welcome, welcome, ever welcome, blessed Sabbath day;',
      'Welcome, welcome, ever welcome, blessed Sabbath day.'
    ]
  },
  {
    id: 'hymn-93',
    number: 93,
    title: 'Kasuba Kakutusha',
    writer: 'Christopher Wordsworth, 1862; arr. Lowell Mason, 1839 (MENDEBRAS)',
    englishTune: 'O Day of Rest and Gladness (MENDEBRAS)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 20:8-11 · Esaya 58:13-14 · Amalumbo 118:24 · AbaHebere 4:9',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 65, 70, 69, 67, 65, 69, 72, 70, 69, 67],
    verses: [
      [
        'Kasuba kakutusha. Kasuba kabuta;',
        'Kafumye nsoni shonse, Kalubuto lweka;',
        'Bamulu bamu calo, Balefukamina;',
        'No kwimba wafya, wafya, Wene wa pe na pe.'
      ],
      [
        'Wene Cibumba cesu, Cashinguluka \'fwe;',
        'Ibala lyakutemwa, Menshi ya Padiso;',
        'Wene Kafukauka, ku bantu banaka;',
        "Ifwe tuli pa mulu, Tumona 'patali."
      ],
      [
        'Kasuba ka lubuto, Nikakwangamo fye,',
        "Kakutemwa 'fwe Mfumu, Fya muJu ne calo;",
        'Tupokele cikuku, Mubushiku ubu,',
        'Kwashala fye kutusha, Mu mulu ne Mfumu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O day of rest and gladness, O day of joy and light,',
        'O balm of care and sadness, most beautiful, most bright;',
        'On thee the high and lowly, through ages joined in tune,',
        'Sing, “Holy, holy, holy,” to the great God Triune.'
      ],
      [
        'Thou art a port protected from storms that round us rise,',
        'A garden intersected with streams of Paradise;',
        'Thou art a cooling fountain to pilgrims on their way,',
        'From thee, like Pisgah’s mountain, we view our promised land.'
      ],
      [
        'Today on weary nations the heavenly manna falls;',
        'To holy convocations the silver trumpet calls,',
        'Where gospel light is glowing with pure and radiant beams,',
        'And living water flowing with soul-refreshing streams.'
      ]
    ]
  },
  {
    id: 'hymn-94',
    number: 94,
    title: 'Skulu Yesu Ye Sabata',
    writer: 'Christopher R. Blackall, 1871; Music by Horatio R. Palmer, 1874',
    englishTune: 'Sweet Sabbath School / My Sabbath Home (Palmer)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 122:1 · Amapinda 22:6 · 2 Timote 3:15 · Esaya 58:13-14',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 68, 67, 65, 67, 68, 70, 68, 67],
    verses: [
      [
        'Skulu yesu ye Sabata,',
        'Yatemwikwa nefwe;',
        "M'tima wandi uitemwa;",
        'Skulu ye Saba'
      ],
      [
        'Muno mwine natendeka,',
        'Kutemwa mafunde;',
        'No kufwaisha cawama.',
        'Nasango mutende.'
      ],
      [
        'Pano Yesu eminine,',
        'Alenjita ine;',
        'Kuti nsale Yesu eka,',
        'No kwikala nankwe.'
      ]
    ],
    chorus: [
      'Skulu ye ... Sabata,',
      'Skulu ye ... Sabata;',
      "M'tima wandi uitemwa",
      'Skulu ye Sabata.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Sweet Sabbath school! more dear to me',
        'Than fairest palace dome,',
        'My heart e’er turns with joy to thee,',
        'My own dear Sabbath home.'
      ],
      [
        'Here first my willful, wand’ring heart',
        'The way of life was shown,',
        'Here first I sought the better part,',
        'And gained a Sabbath home.'
      ],
      [
        'Here Jesus stood with loving voice,',
        'Entreating me to come,',
        'And make of Him my only choice,',
        'In this dear Sabbath home.'
      ]
    ],
    englishChorus: [
      'Sabbath home! blessed home!',
      'Sabbath home! blessed home!',
      'My heart e’er turns with joy to thee,',
      'My own dear Sabbath home.'
    ]
  },
  {
    id: 'hymn-95',
    number: 95,
    title: 'Lesa Atupalile Mumulungu Wapita',
    writer: 'John Newton, 1774; Music by Lowell Mason, 1824 (SABBATH)',
    englishTune: 'Safely Through Another Week (SABBATH)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Ukutendeka 2:1-3 · Ukufuma 20:8-11 · AbaHebere 4:9-11 · Amalumbo 92:1-4',
    isSample: false,
    melodicPreview: [65, 69, 72, 69, 65, 67, 69, 65, 67, 69, 72, 70, 69, 67],
    verses: [
      [
        'Lesa atupalile mu mulungu wapita;',
        'Nomba tulefwaisha kutupala ilelo;',
        'Kasuba kapashanya ka kutusha ku mulu;',
        'Kasuba kapashanya kakutusha ku mulu.'
      ],
      [
        'Kwi shina lya kwa Yesu tulepushe cikuku;',
        'Nomba mwe Tata wesu fumyeni bubi bwesu;',
        'Mutwelele ububi no kupalama ifwe;',
        'Mutwelele ububi no kupalama ifwe.'
      ],
      [
        'Twaisa kumutota mumfwe mapepo yesu;',
        "Mu ng’anda ya mushilo mwise 'kala na ifwe;",
        'Peleni kuli lelo cakulya ca mitima;',
        'Peleni kuli lelo cakulya ca mitima.'
      ],
      [
        'Leka mashiwi yesu yabombe umulimo;',
        'Ukwansha mpulumushi no kubafwa basuma;',
        'Peleni muli fyonse lintu tuli pa calo;',
        'Peleni muli fyonse lintu tuli pa calo,'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Safely through another week, God has brought us on our way;',
        'Let us now a blessing seek, waiting in His courts today;',
        'Day of all the week the best, emblem of eternal rest;',
        'Day of all the week the best, emblem of eternal rest.'
      ],
      [
        'While we seek supplies of grace, through the dear Redeemer’s name,',
        'Show Thy reconciling face, take away our sin and shame;',
        'From our worldly cares set free, may we rest this day in Thee;',
        'From our worldly cares set free, may we rest this day in Thee.'
      ],
      [
        'Here we come Thy name to praise, let us feel Thy presence near;',
        'May Thy glory meet our eyes, while we in Thy house appear;',
        'Here afford us, Lord, a taste of our everlasting feast;',
        'Here afford us, Lord, a taste of our everlasting feast.'
      ],
      [
        'May Thy gospel’s joyful sound conquer sinners, comfort saints;',
        'Make the fruits of grace abound, bring relief for all complaints;',
        'Thus may all our Sabbaths prove, till we join the church above;',
        'Thus may all our Sabbaths prove, till we join the church above.'
      ]
    ]
  },
  {
    id: 'hymn-96',
    number: 96,
    title: 'Sabata Lya Temwikwa',
    writer: 'Thomas Hastings, 1858; Music by Ignaz Pleyel, 1790 (PLEYEL\'S HYMN)',
    englishTune: 'Welcome, Welcome, Day of Rest (PLEYEL\'S HYMN)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 20:8-11 · Esaya 58:13-14 · Amalumbo 118:24 · AbaHebere 4:9',
    isSample: false,
    melodicPreview: [67, 71, 74, 71, 69, 67, 66, 67, 69, 71, 72, 71, 69, 67],
    verses: [
      [
        'Sabata lyatemwikwa,',
        'Lyatupelwe mu luse;',
        "Isa nomba kuli 'fwe,",
        'Kasuba ka kwa Lesa.'
      ],
      [
        'Kasuba kakutusha,',
        'No kutasha Yehofa;',
        'Kapelwa kutupala;',
        'No kubwesha kwa Lesa'
      ],
      [
        'Kasuba kamushilo,',
        'No kutota Katula;',
        'Sabata lyatemwikwa;',
        'Mapalo yafulisha.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Welcome, welcome, day of rest,',
        'To the world in kindness given;',
        'Welcome to this humble breast,',
        'As the beaming light from heaven.'
      ],
      [
        'Day of calm and sweet repose,',
        'Gently now thy moments run;',
        'Balm to soothe our cares and woes,',
        'Till our labor here is done.'
      ],
      [
        'Holy day that most we prize,',
        'Day of solemn praise and prayer,',
        'Day to make the simple wise,',
        'O, how great thy blessings are!'
      ]
    ]
  },
  {
    id: 'hymn-97',
    number: 97,
    title: 'Twaumfwile Ilandwe',
    writer: 'Priscilla J. Owens, 1882; Music by William J. Kirkpatrick, 1882',
    englishTune: 'We Have Heard the Joyful Sound (JESUS SAVES)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 89:15 · Mateo 1:21 · Luka 2:10-11 · AbaHebere 7:25',
    isSample: false,
    melodicPreview: [62, 67, 67, 69, 71, 67, 69, 71, 67, 69, 71, 74, 72, 71, 69],
    verses: [
      [
        'Twaumfwile ilandwe, Yesu ni Katula;',
        'Eya! Atupususha, Yesu ni Katula;',
        'Tume nkombe konse fye, Mu mpili mu malungu;',
        'Bebeni bonse uko, Yesu ni Katula.'
      ],
      [
        'Imbeni imwe fita, Yesu ni Katula;',
        'Bebeni babi bonse, Yesu ni Katula;',
        'Baleimba panono, Lintu bali no mwenso;',
        'Pantu abafwilile, Yesu ni Katula'
      ],
      [
        'Na maka sosa nomba, Yesu ni Katula;',
        'Mumfwa no mweo wakwe, Yesu ni Katula;',
        'Mwe bantu sekeleni, Kumo ne calo conse;',
        'Ulwimbo ulwa bwansho, Yesu ni Katula.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'We have heard the joyful sound: Jesus saves! Jesus saves!',
        'Spread the tidings all around: Jesus saves! Jesus saves!',
        'Bear the news to every land, climb the steeps and cross the waves;',
        'Onward! ’tis our Lord’s command; Jesus saves! Jesus saves!'
      ],
      [
        'Sing above the battle strife: Jesus saves! Jesus saves!',
        'By His death and endless life, Jesus saves! Jesus saves!',
        'Sing it softly through the gloom, when the heart for mercy craves;',
        'Sing in triumph o’er the tomb, Jesus saves! Jesus saves!'
      ],
      [
        'Give the winds a mighty voice: Jesus saves! Jesus saves!',
        'Let the nations now rejoice: Jesus saves! Jesus saves!',
        'Shout salvation full and free, highest hills and deepest caves;',
        'This our song of victory: Jesus saves! Jesus saves!'
      ]
    ]
  },
  {
    id: 'hymn-98',
    number: 98,
    title: 'Ndefwayo Kwenda Na Yesu',
    writer: 'Fanny J. Crosby (Lizzie Edwards), 1888; Music by John R. Sweney, 1888',
    englishTune: 'I Must Have the Savior With Me (Sweney)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 23:4 · Ukufuma 33:14-15 · Amapinda 3:5-6 · Mateo 28:20',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 68, 67, 65, 67, 68, 70, 68, 67],
    verses: [
      [
        'Ndefwayo kwenda na yesu,',
        'Tekuti nyende neka;',
        'Ndekabile cinso cakwe,',
        'Na maboko yambake;'
      ],
      [
        'Ndefwayo kwenda na Yesu,',
        'Pantu ndi wa kunaka;',
        'Akantepelesha ine,',
        'No kulankoselesha.'
      ],
      [
        'Ndefwayo kwenda na Yesu.',
        'Mu Mweo wandi onse;',
        'Nangu nkacula icibi,',
        'Mu nkondo ya macusho.'
      ],
      [
        'Ndefwayo kwenda na Yesu,',
        'Antungulula ine;',
        'Nsuke nkafike ku mulu,',
        'Nkekale nankwe pe fye.'
      ]
    ],
    chorus: [
      'Elyo nsha katine i,',
      'Nga anta ... ngililako;',
      "Nkaya nsha kang'wing'wintike.",
      'Nkamukonka pe na pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I must have the Savior with me,',
        'For I dare not walk alone;',
        'I must feel His presence near me,',
        'And His arm around me thrown.'
      ],
      [
        'I must have the Savior with me,',
        'For my faith, at best, is weak;',
        'He can whisper of the promises',
        'That no other voice can speak.'
      ],
      [
        'I must have the Savior with me',
        'In the onward march of life,',
        'Thro’ the tempest and the sunshine,',
        'Thro’ the vigor of the strife.'
      ],
      [
        'I must have the Savior with me,',
        'And His eye the way must guide,',
        'Till I reach the vale of Jordan,',
        'Till I cross the rolling tide.'
      ]
    ],
    englishChorus: [
      'Then my soul shall fear no ill,',
      'Let Him lead me where He will;',
      'I will go without a murmur,',
      'And His footsteps follow still.'
    ]
  },
  {
    id: 'hymn-99',
    number: 99,
    title: 'Lintu Namona Lupanda',
    writer: 'Isaac Watts, 1707; Music by Lowell Mason, 1824 (HAMBURG)',
    englishTune: 'When I Survey the Wondrous Cross (HAMBURG)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Abena Galatia 6:14 · 1 Abena Korinte 2:2 · Abena Filipi 3:7-8 · 2 Abena Korinte 5:14-15',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 70, 69, 67, 65, 69, 72, 72, 70, 69, 67],
    verses: [
      [
        'Lintu namona ‘lupanda,',
        "Mfumu yandi yafwile 'ko;",
        'Fyuma fyandi fyonse fyafye;',
        'Ndesula cilumba candi.'
      ],
      [
        'Mona ifintu acita,',
        'Pantu atutemwishisha;',
        'Nomba fibi fyandi fyonse,',
        "Ndeposa mu m'lopa wakwe."
      ],
      [
        'Ine nalubile kale,',
        'Nomba naelelwa cine;',
        'Nshili ne cintu kuilumba,',
        'Kano mu lupanda lwakwe.'
      ],
      [
        'Nangu calo conse candi,',
        'Ici cacepa kupelwa;',
        'Kuli ukutemwa kwakwe,',
        'Alefwayo mweo weka.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'When I survey the wondrous cross',
        'On which the Prince of glory died,',
        'My richest gain I count but loss,',
        'And pour contempt on all my pride.'
      ],
      [
        'See, from His head, His hands, His feet,',
        'Sorrow and love flow mingled down;',
        'Did e’er such love and sorrow meet,',
        'Or thorns compose so rich a crown?'
      ],
      [
        'Forbid it, Lord, that I should boast,',
        'Save in the death of Christ my God;',
        'All the vain things that charm me most,',
        'I sacrifice them to His blood.'
      ],
      [
        'Were the whole realm of nature mine,',
        'That were a present far too small;',
        'Love so amazing, so divine,',
        'Demands my soul, my life, my all.'
      ]
    ]
  },
  {
    id: 'hymn-100',
    number: 100,
    title: 'Yesu Nicibusa Cine',
    writer: 'Joseph M. Scriven, 1855; Music by Charles C. Converse, 1868 (CONVERSE)',
    englishTune: 'What a Friend We Have in Jesus (CONVERSE)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Yohane 15:13-15 · Abena Filipi 4:6-7 · 1 Petro 5:7 · AbaHebere 4:14-16',
    isSample: false,
    melodicPreview: [72, 72, 74, 72, 69, 65, 65, 67, 69, 70, 69, 67, 72, 72, 74, 72, 69, 65],
    verses: [
      [
        'Yesu ni Cibusa cine, Atufwilile ifwe!',
        'Nomba tungasenda fyonse, Kuli Lesa mwipepo:',
        'Lintu tulecule cibi, Mutende tuleposa,',
        'Ifi fyonse pa mulandu, Twafilwa ukupepa!'
      ],
      [
        'Bushe tuletunkwa cibi, Satana atucusha?',
        "Tatwanashiwe kul ' ifi, Tutwale kwa Katula;",
        'Tapali umbi nga Yesu, Atwafwa kuli fyonse,',
        'Alishiba tulenaka, Akatupela maka.'
      ],
      [
        'Mwe Katula watemwikwa. Umfwa ipepo lyesu;',
        'Fintu fyonse fyatucusha. Tuleta kuli Imwe:',
        'Bantu besu batulabe, Yesu takatulabe;',
        'Mumaboko atwikata, Tusanga umutende.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'What a Friend we have in Jesus, all our sins and griefs to bear!',
        'What a privilege to carry everything to God in prayer!',
        'O what peace we often forfeit, O what needless pain we bear,',
        'All because we do not carry everything to God in prayer!'
      ],
      [
        'Have we trials and temptations? Is there trouble anywhere?',
        'We should never be discouraged, take it to the Lord in prayer.',
        'Can we find a friend so faithful who will all our sorrows share?',
        'Jesus knows our every weakness; take it to the Lord in prayer.'
      ],
      [
        'Are we weak and heavy laden, cumbered with a load of care?',
        'Precious Savior, still our refuge; take it to the Lord in prayer.',
        'Do thy friends despise, forsake thee? Take it to the Lord in prayer!',
        'In His arms He’ll take and shield thee; thou wilt find a solace there.'
      ]
    ]
  },
  {
    id: 'hymn-101',
    number: 101,
    title: 'Yesu wa Cikuku Alekwta',
    writer: 'Fanny J. Crosby, 1883; Music by George C. Stebbins, 1883 (CALLING TODAY)',
    englishTune: 'Jesus Is Calling (CALLING TODAY)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'AbaHebere 3:7-8, 15 · Mateo 11:28-30 · Ukusokolola 22:17 · 2 Abena Korinte 6:2',
    isSample: false,
    melodicPreview: [63, 72, 72, 72, 70, 68, 72, 70, 72, 68, 65, 63, 68, 70, 72, 70, 68],
    verses: [
      [
        'Yesu wa cikuku alekwita,',
        'Alekwita, Alekwita,',
        "Cinshi 'we wingafumino kwali,",
        'No kuye ciyeyeye?'
      ],
      [
        'We wanaka Yesu alekwita,',
        'Alekwita iso tushe;',
        "Isa ne cisendo cobe 'kwali,",
        "Ena tet' akutamfye"
      ],
      [
        "'Sa kuli Yesu alekulinda,",
        "'Lekulinda, 'lekulinda,",
        'Leta ububi pa nkasa shakwe,',
        'Endesha walacelwa.'
      ],
      [
        "Yesu 'lepapata Umfwe shiwi,",
        'Mumfwe lelo, mumfwe lelo;',
        'Abasumina pe shina lyakwe,',
        'Mwandi bakasekela.'
      ]
    ],
    chorus: [
      'A ... lekwita, A ... lekwita,',
      'Wa-cikuku, Wa luse Yesu alekwita.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Jesus is tenderly calling thee home—',
        'Calling today, calling today;',
        'Why from the sunshine of love wilt thou roam',
        'Farther and farther away?'
      ],
      [
        'Jesus is calling the weary to rest,',
        'Calling today, calling today;',
        'Bring Him thy burden, and thou shalt be blest;',
        'He will not turn thee away.'
      ],
      [
        'Jesus is waiting; O come to Him now,',
        'Waiting today, waiting today;',
        'Come with thy sins, at His footstool low bow;',
        'Come, and no more delay.'
      ],
      [
        'Jesus is pleading; O list to His voice:',
        'Hear Him today, hear Him today;',
        'They who believe on His name shall rejoice;',
        'Quickly arise and away.'
      ]
    ],
    englishChorus: [
      'Calling today, calling today,',
      'Jesus is calling, is tenderly calling today.'
    ]
  },
  {
    id: 'hymn-102',
    number: 102,
    title: 'Mwiswile Engile',
    writer: 'J. B. Atchinson, 1881; Music by Edwin O. Excell, 1881 (LET HIM IN)',
    englishTune: 'Let Him In (LET HIM IN)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 3:20 · Olwimbo lwa Nyimbo 5:2 · Luka 12:36 · AbaHebere 3:15',
    isSample: false,
    melodicPreview: [62, 65, 70, 70, 69, 67, 65, 62, 65, 62, 63, 65, 62, 63, 65],
    verses: [
      [
        'Mweni ali pa mwinshi E ... ngile',
        '(mwiswile ngile, mwiswile ngile);',
        'Eshilepofye kale E ... ngile',
        "(mwiswile 'ngile, mwiswile 'ngile);",
        'Mwiswile Iyo talaya, Mwiswile wa mushilo,',
        'Yesu mwana wa Mfumu E ... ngile',
        "(Mwiswile 'ngile, Mwiswile 'ngile)."
      ],
      [
        'Shi mwiswile mutima E ... ngile',
        "(mwiswile 'ngile, mwiswile 'ngile);",
        'Nga wakokola leya E ... ngile',
        "(mwiswile 'ngile, Mwiswile 'ngile);",
        'Mwiswile e Cibusa, Mwiswile wa mushilo;',
        'No kufika ku mpela E ... ngile',
        "(mwiswile 'ngile, mwiswile 'ngile)."
      ],
      [
        'Umfwa alepapata E ... ngile',
        "(Mwiswile 'ngile, Mwiswile 'ngile);",
        'Nomba iwe mwiswile E ... ngile',
        "(mwiswile 'ngile, mwiswile 'ngile).",
        'Eminine pa mwinshi, Uleba wa kutemwa;',
        'No kucindika Ena E ... ngile',
        "(Mwiswile 'ngile, mwiswile 'ngile)."
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'There’s a Stranger at the door, let Him in;',
        '(Let Him in, let Him in);',
        'He has been there oft before, let Him in;',
        '(Let Him in, let Him in);',
        'Let Him in, ere He is gone, let Him in, the Holy One,',
        'Jesus Christ, the Father’s Son, let Him in;',
        '(Let Him in, let Him in).'
      ],
      [
        'Open now to Him your heart, let Him in;',
        '(Let Him in, let Him in);',
        'If you wait He will depart, let Him in;',
        '(Let Him in, let Him in);',
        'Let Him in, He is your Friend, He your soul will sure defend,',
        'He will keep you to the end, let Him in;',
        '(Let Him in, let Him in).'
      ],
      [
        'Hear you now His pleading voice, let Him in;',
        '(Let Him in, let Him in);',
        'Now, oh now make Him your choice, let Him in;',
        '(Let Him in, let Him in);',
        'He is standing at your door, joy to you He will restore,',
        'And His name you will adore, let Him in;',
        '(Let Him in, let Him in).'
      ]
    ]
  },
  {
    id: 'hymn-103',
    number: 103,
    title: 'Mulefyalwa Libili',
    writer: 'William T. Sleeper, 1877; Music by George C. Stebbins, 1877 (YE MUST BE BORN AGAIN)',
    englishTune: 'Ye Must Be Born Again (BORN AGAIN)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Yohane 3:1-7 · 1 Petro 1:23 · Tito 3:5 · 2 Abena Korinte 5:17',
    isSample: false,
    melodicPreview: [60, 65, 65, 65, 67, 69, 69, 70, 72, 72, 74, 72, 70, 69, 67, 65],
    verses: [
      [
        'Chilolo aishi-le kuli Yesu,',
        'Kumwipusha ifya lupusukilo,',
        'Mfumu nayo yamwaswike bwino,',
        '"Mufya-lwe libili."'
      ],
      [
        'Mwe bana baba-ntu kutikeni,',
        'Mashiwi ayafuma kuli Yesu,',
        'Mwiya mona yamashiwi nga yafye,',
        '"Mufya-lwe libili."'
      ],
      [
        'Mwe bakwingila-mo mubutusho,',
        'Nokwimbo lwimbo ulwabapusuka,',
        'Nga mulefwaya ukusango mweo,',
        '"Mufya-lwe libili."'
      ]
    ],
    chorus: [
      '"Mufya-lwe libili. Mufya-lwe libili,',
      'Ndemweba ine ifya cine cine,',
      'mufyalwe libili."'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'A ruler once came to Jesus by night,',
        'To ask Him the way of salvation and light;',
        'The Master made answer in words true and plain,',
        '“Ye must be born again.”'
      ],
      [
        'Ye children of men, attend to the word',
        'So solemnly uttered by Jesus the Lord;',
        'And let not this message to you be in vain,',
        '“Ye must be born again.”'
      ],
      [
        'O ye who would enter that glorious rest,',
        'And sing with the ransomed the song of the blest,',
        'The life everlasting if ye would obtain,',
        '“Ye must be born again.”'
      ]
    ],
    englishChorus: [
      '“Ye must be born again,',
      'Ye must be born again;',
      'I verily, verily, say unto thee,',
      'Ye must be born again.”'
    ]
  },
  {
    id: 'hymn-104',
    number: 104,
    title: 'Kalubula Isa',
    writer: 'Fanny J. Crosby, 1877; Music by William H. Doane, 1877 (DELIVERER)',
    englishTune: 'Come, Great Deliverer, Come (DELIVERER)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 40:17 · Amalumbo 119:176 · Luka 15:4-7 · AbaHebere 4:16',
    isSample: false,
    melodicPreview: [72, 72, 72, 73, 72, 70, 68, 70, 72, 68, 65, 63, 68, 70, 68],
    verses: [
      [
        'Ngumfwe Mfumu, umbelelyo luse',
        'kalubula isa;',
        'Mweo wandi ule mufuluka,',
        'kalubula isa;'
      ],
      [
        'Nshi kwete cifulo, nelye nganda',
        'kalubula isa;',
        'Mweo lubuto fyaba kuli mwe.',
        'kalubula isa.'
      ],
      [
        'Nshila yana-sha makasa yandi,',
        'Kalubula isa:',
        'Cimwemwe cobe condekabila,',
        'kalubula isa.'
      ],
      [
        'Nangu waka-na ukwesha kwandi,',
        'kalubula isa;',
        'Sakamano kupapata kwandi,',
        'kalubula isa.'
      ]
    ],
    chorus: [
      'Naile kumpili kwa talala,',
      'kutalyu kufuma kumwesu.',
      'Shi mbuleni mbikeni mwicinka',
      'kalubula isa;'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'O hear my cry, be gracious now to me,',
        'Come, Great Deliverer, come;',
        'My soul in weakness turneth unto Thee,',
        'Come, Great Deliverer, come.'
      ],
      [
        'I have no place, no shelter from the night,',
        'Come, Great Deliverer, come;',
        'One look from Thee would make the darkness light,',
        'Come, Great Deliverer, come.'
      ],
      [
        'The path is rough, my foot is sore and tired,',
        'Come, Great Deliverer, come;',
        'Thy smile is all I have desired,',
        'Come, Great Deliverer, come.'
      ],
      [
        'Thou canst not despise my humble quest,',
        'Come, Great Deliverer, come;',
        'Consider Thou my pleading, grant me rest,',
        'Come, Great Deliverer, come.'
      ]
    ],
    englishChorus: [
      'I’ve wandered far away o’er mountains cold,',
      'I’ve wandered far away from home;',
      'O take me now, and bring me to Thy fold,',
      'Come, Great Deliverer, come.'
    ]
  },
  {
    id: 'hymn-105',
    number: 105,
    title: 'Wena Ali na Maka',
    writer: 'J. B. Atchinson, 1878; Music by Emma L. Morton, 1878 (ABLE TO DELIVER)',
    englishTune: 'Able to Deliver (ABLE TO DELIVER)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Daniel 3:17 · Daniel 6:20, 27 · AbaHebere 7:25 · Yuda 1:24',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 72, 71, 69, 67, 71, 74, 74, 76, 74],
    verses: [
      [
        'We-na li na maka E-nga pususha,',
        'Uku-pokolo-lo Yo wasumina:',
        'Kufuma mumulilo kubonaushi;',
        'Yesu apususha uwasumina.'
      ],
      [
        "Busho'li namaka! nga Mpokolola?",
        'Bushe ku-lya maka yampokolola?',
        'Njebekeshe cine ngalipa iwe;',
        'Nga a mpokolola kuli Satana?'
      ],
      [
        'E-na Ii na maka witutuma fye!',
        'We bombela Yesu-le kupususha;',
        'Wi tina Satana, mwikate Yesu,',
        'Iwe witwishika mu-cetekele.'
      ]
    ],
    chorus: [
      'Kut‘ akupusu-sha ku-poko-lola,',
      'we we munyi-na nga wasu-mina.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Able to deliver! sound it far and near;',
        'Able to deliver whosoe’er will hear;',
        'From the fiery furnace, from the sinner’s doom,',
        'Jesus will deliver whosoe’er will come.'
      ],
      [
        'Able to deliver! Can it really be?',
        'Is there any power can deliver me?',
        'Tell me, tell me truly, is the Christ once slain',
        'Able to deliver me from Satan’s chain?'
      ],
      [
        'Able to deliver! Courage, trembling one!',
        'Are you serving Jesus? He will save His own.',
        'Fear not Satan’s power, cling to Jesus’ hand,',
        'Cease your fear and doubting, boldly for Him stand.'
      ]
    ],
    englishChorus: [
      'Able to deliver, able now to save,',
      'When you are, my brother, able to believe.'
    ]
  },
  {
    id: 'hymn-106',
    number: 106,
    title: 'Kuleni Palibwe',
    writer: 'Franklin E. Belden, 1886',
    englishTune: 'We’ll Build on the Rock (BELDEN)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 7:24-27 · 1 Abena Korinte 10:4 · 1 Abena Korinte 3:11 · Amalumbo 18:2',
    isSample: false,
    melodicPreview: [65, 62, 62, 65, 70, 70, 69, 67, 65, 70, 72, 74, 70, 72, 72, 70],
    verses: [
      [
        'Fwe tu-le kula. Pe bwe lyesu,',
        'Libwe lya bumi ni Ye-su;',
        'Emo tukoba fya bu-kali,',
        'Ilyo kukabo bubi.'
      ],
      [
        'Bamo bakula pamisenga.',
        'Pakutemwishe fya ca-lo;',
        'Na pa mabimbi ya macusho,',
        'Pakutemwishe calo'
      ],
      [
        'O! we kula palya pe na pe,',
        'Ilya kosesha lya ci-ne;',
        'Lyena likeka-lilila pe,',
        'E bupususho bwesu.'
      ]
    ],
    chorus: [
      'Kuleni ... Palibwe .. ,',
      'Kuleni ... palibwe,',
      'Tukule pa mwalala wakosa,',
      'Palibwe ni-Yesu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'We’ll build on the Rock, the living Rock,',
        'On Jesus, the Rock of Ages;',
        'So shall we abide the fearful shock,',
        'When loud the tempest rages.'
      ],
      [
        'Some build on the sinking sands of life,',
        'On visions of earthly treasure;',
        'Some build on the waves of sin and strife,',
        'Of fame, and worldly pleasure.'
      ],
      [
        'O build on the Rock, forever sure,',
        'The firm and the true foundation;',
        'Its hope is the hope which shall endure,',
        'The hope of our salvation.'
      ]
    ],
    englishChorus: [
      'We’ll build on the Rock, on the solid Rock,',
      'We’ll build on the Rock, on the solid Rock;',
      'We’ll build on the Rock, on the solid Rock,',
      'On Christ, the mighty Rock.'
    ]
  },
  {
    id: 'hymn-107',
    number: 107,
    title: 'Njebo Mulumbe wa Yesu',
    writer: 'Fanny J. Crosby, 1880; Music by John R. Sweney, 1880 (STORY OF JESUS)',
    englishTune: 'Tell Me the Story of Jesus (STORY OF JESUS)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Luka 2:10-14 · Mateo 4:1-11 · Mateo 27:32-56 · Luka 24:1-7 · 1 Abena Korinte 15:3-4',
    isSample: false,
    melodicPreview: [69, 66, 67, 69, 71, 69, 69, 74, 73, 71, 71, 69, 67, 66, 67, 69],
    verses: [
      [
        'Njeba mulumbe wa Yesu, Ulembe pa mutima:',
        'Njeba mulumbe usuma. Ndeutemwisha kumfwa',
        'Njeba ifyo baimbile, ilyo Yesu afyelwe,',
        'Ululumbi kuli Lesa, No mutende ku bantu.'
      ],
      [
        'Talile mu ciswebebe, Njeba fya nshita ilya;',
        'Atunkwa ku bubi bwesu, lelo alianshishe:',
        'Njeba conse acitile, Njeba bulanda bwakwe,',
        "Asalwilwe, acushiwe; Ushakwete ing'anda."
      ],
      [
        'Njeba ine fya lupanda, Apo Yesu\' aculile;',
        'Njeba munshinshi alele, Nefyo atutubwike;',
        'Umulumbe wa kutemwa, Ndemona nomba bwino,',
        'Webe kuli ine nomba, Kutemwa kwandubwile.'
      ]
    ],
    chorus: [
      'Njeba mulumbe wa Yesu, Ulembe pa mutima;',
      'Njeba mulumbe usuma, Ndeutemwisha kumfwa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Tell me the story of Jesus, write on my heart every word;',
        'Tell me the story most precious, sweetest that ever was heard.',
        'Tell how the angels in chorus, sang as they welcomed His birth,',
        '“Glory to God in the highest! Peace and good tidings to earth.”'
      ],
      [
        'Fasting alone in the desert, tell of the days that are past;',
        'How for our sins He was tempted, yet was triumphant at last.',
        'Tell of the years of His labor, tell of the sorrow He bore;',
        'He was despised and afflicted, homeless, rejected and poor.'
      ],
      [
        'Tell of the cross where they nailed Him, writhing in anguish and pain;',
        'Tell of the grave where they laid Him, tell how He liveth again.',
        'Love in that story so tender, clearer than ever I see:',
        'Stay, let me weep while you whisper, love paid the ransom for me.'
      ]
    ],
    englishChorus: [
      'Tell me the story of Jesus, write on my heart every word;',
      'Tell me the story most precious, sweetest that ever was heard.'
    ]
  },
  {
    id: 'hymn-108',
    number: 108,
    title: 'No Kutemwa Yesu',
    writer: 'William A. Ogden, 1884 (LOVING SHEPHERD)',
    englishTune: 'Lovingly, Tenderly Calling (Ogden)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Yohane 10:11, 14-16 · Luka 15:4-7 · Amalumbo 23:1-3 · Mateo 18:12-14',
    isSample: false,
    melodicPreview: [69, 69, 70, 72, 69, 65, 67, 69, 67, 65, 69, 69, 70, 72, 74, 72],
    verses: [
      [
        'Yesu ni Kakumba, alekwitila',
        'Mukati ke cinka emofili fifulo;',
        'Iseni mwe-bakulu, na baice bonse;',
        'Mwingile mubutusho, mwingile mu cine.'
      ],
      [
        'Yesu Kakumba wine, afwilile iwe;',
        'Alekwita no luse, we waluba isa;',
        'Butuka ubusanso, isa alekwita,',
        'Ingila mu mutende, ingila utushe.'
      ],
      [
        'Wipembelela Panse Mimbulu yafula;',
        'Ilefwaya impanga, shalubila panse,',
        'Kakumba wakutemwa; Alekwita iwe,',
        'Mwicinka mubucingo, Isa emo tushe.'
      ]
    ],
    chorus: [
      'Nokutemwa Yesu alekwita,',
      'We waluba Yesu alekwita,',
      'Naiminina lekulindila;',
      'Yesu Kakumba wandi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Jesus, the loving Shepherd, calleth thee now to come,',
        'Into the fold of safety, where there is rest and room;',
        'Come in the strength of manhood, come in the morn of youth,',
        'Enter the fold of safety, enter the way of truth.'
      ],
      [
        'Jesus, the loving Shepherd, gave His dear life for thee;',
        'Tenderly now He’s calling, “Wanderer, come to Me;”',
        'Haste! for without is danger, “Come,” cries the Shepherd blest;',
        'Enter the fold of safety, enter the place of rest.'
      ],
      [
        'Lingering is but folly, wolves are abroad today,',
        'Seeking the sheep who’re straying, seeking the lambs to slay;',
        'Jesus, the loving Shepherd, calleth thee now to come;',
        'Enter the fold of safety, where there is rest and room.'
      ]
    ],
    englishChorus: [
      'Lovingly, tenderly calling is He,',
      '“Wanderer, wanderer, come unto Me;”',
      'Patiently waiting, there standing I see,',
      'Jesus, my Shepherd divine.'
    ]
  },
  {
    id: 'hymn-109',
    number: 109,
    title: 'Wapimwa Wapeluka',
    writer: 'Franklin E. Belden, 1886 (WEIGHED AND WANTING)',
    englishTune: 'Weighed and Wanting (Belden)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubupingulo no Bwisa bwa kwa Kristu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Daniel 5:27 · 2 Abena Korinte 5:10 · Mateo 25:21 · Mateo 25:31-46',
    isSample: false,
    melodicPreview: [60, 65, 65, 67, 69, 69, 70, 72, 69, 65, 67, 69, 65, 67, 65],
    verses: [
      [
        "Lintu Kapingula 'ka-tu-pima fya mu mutima,",
        'Bushe tukaba baci-ne, Nangula ifinangwa?'
      ],
      [
        'Tukomfwe shiwi lyaku-ti, "Wacita bwino iwe,"',
        'Nangu bushe tukomfwa-’ti, "Iwe naupeluka."'
      ],
      [
        "Natumumfwile Mupa-shi, Ily' aletupapata,",
        'Nga twacelwa tukomfwa-’ti, "Inshita nomba yapwa."'
      ]
    ],
    chorus: [
      "Wabika 'we pa cipimo, Na-upelu-ka;",
      'Nupimwa ne shiwi lyakwe, Na-upelu-ka,'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'When the Judge shall weigh our motives, for eternal gain or loss,',
        'Shall we stand as gold before Him, or as vile and worthless dross?'
      ],
      [
        'Shall we hear the glad words spoken: “Faithful servant,” and “Well done,”',
        'Or the dread and awful sentence, “Thou art wanting,” sinful one?'
      ],
      [
        'Shall we heed the Spirit’s pleading, while for mercy we may call,',
        'Or delay till God’s handwriting seals the final doom of all?'
      ]
    ],
    englishChorus: [
      'Weighed in the balance of the Lord, weighed, weighed, and wanting;',
      'Weighed by the standard of His word, weighed, weighed, and wanting.'
    ]
  },
  {
    id: 'hymn-110',
    number: 110,
    title: 'Balishuka Abayacita',
    writer: 'Philip P. Bliss, 1871 (BLESSED ARE THEY THAT DO)',
    englishTune: 'Blessed Are They That Do (Bliss)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukumfwila no Kucetekela',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 22:14 · Abena Roma 2:13 · Yakobo 1:22, 25 · Mateo 7:24-27',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 69, 71, 69, 67, 64, 67, 62, 62, 67, 67, 67, 69, 71],
    verses: [
      [
        'Amashiwi ya Mupusushi,',
        'Umfwa yali aya mweo,',
        "Uyasakamane umfwa Yes' ati,",
        '"Balishu-ka basu-nge funde."'
      ],
      [
        'Ukulau-mfwa amafunde,',
        'Pamo na ma-layo yakwe,',
        'Kuyomfwa, kutina, tacili kantu,',
        'Balishu-ka abo bacita.'
      ],
      [
        'Bena bakengila mu m’sumba,',
        'Tabakasa-ngwe no bubi;',
        'Bakashi-lishiwa ukwape na pe,',
        'Bakalya ku muti wa mweo.'
      ]
    ],
    chorus: [
      'Balishu-ka bo bacite funde,',
      'Balishuka-, balishuka;',
      'Balishu-ka bo bacite funde,',
      'Bali-shuka, balishuka.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Hear the words our Saviour hath spoken,',
        'Words of life, unfailing and true;',
        'Careless one, prayerless one, hear and remember,',
        'Jesus says, “Blessed are they that do.”'
      ],
      [
        'All in vain we hear His commandments,',
        'All in vain His promises, too;',
        'Hearing them, fearing them, never can save us,',
        'Blessed, O blessed are they that do.'
      ],
      [
        'They with joy may enter the city,',
        'Free from sin, from sorrow and strife,',
        'Sanctified, glorified, now and forever,',
        'They may have right to the tree of life.'
      ]
    ],
    englishChorus: [
      'Blessed are they that do His commandments,',
      'Blessed are they, blessed are they;',
      'Blessed are they that do His commandments,',
      'Blessed, blessed, blessed are they.'
    ]
  },
  {
    id: 'hymn-111',
    number: 111,
    title: 'Tatwaba na Chibusa nga Yesu',
    writer: 'Johnson Oatman, Jr., 1895; Music by George C. Hugg, 1895 (NO, NOT ONE)',
    englishTune: 'No, Not One! (NO, NOT ONE)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amapinda 18:24 · AbaHebere 4:15-16 · Mateo 28:20 · Mateo 11:28-30',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69, 65, 67, 69, 65],
    verses: [
      [
        'Tatwaba na chibusa nga Yesu takuli nakalya,',
        'Uinga tuposhe mitima yesu takuli nakalya.'
      ],
      [
        'Chibusa weswena wa mushilo, takwabo linga Yesu,',
        'Uwaicefya uwafukisha, takwabo linga Yesu.'
      ],
      [
        'Takwaba nshite lyabo kutali, Alaba apepi;',
        'Takwaba bushikwi lya shibapo, Alaba mupepi.'
      ],
      [
        'Takwaba chibuso yo atamfya, Takwaba we nakalya,',
        "Nangu mubi uyo ashingafwaya, T'akwaba we nakalya."
      ],
      [
        'Tatwakwate chabupe nga Yesu takwaba nakalya;',
        'Bushe akatila nshi mwishibe Awe ta-kwakabe'
      ]
    ],
    chorus: [
      'Alishibo kuchula kwesu twakula sungwa suke se,',
      'Takwaba na chibusa nga Yesu takuli nakalya'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There’s not a friend like the lowly Jesus, no, not one! no, not one!',
        'None else could heal all our soul’s diseases, no, not one! no, not one!'
      ],
      [
        'No friend like Him is so high and holy, no, not one! no, not one!',
        'And yet no friend is so meek and lowly, no, not one! no, not one!'
      ],
      [
        'There’s not an hour that He is not near us, no, not one! no, not one!',
        'No night so dark but His love can cheer us, no, not one! no, not one!'
      ],
      [
        'Did ever saint find this Friend forsake him? no, not one! no, not one!',
        'Or sinner find that He would not take him? no, not one! no, not one!'
      ],
      [
        'Was e’er a gift like the Savior given? no, not one! no, not one!',
        'Will He refuse us a home in heaven? no, not one! no, not one!'
      ]
    ],
    englishChorus: [
      'Jesus knows all about our struggles, He will guide till the day is done;',
      'There’s not a friend like the lowly Jesus, no, not one! no, not one!'
    ]
  },
  {
    id: 'hymn-112',
    number: 112,
    title: 'Kupusuka Lolesha',
    writer: 'Franklin E. Belden, 1886 (LIFE IN A LOOK)',
    englishTune: 'There’s Life in a Look (BELDEN)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Esaya 45:22 · Yohane 3:14-15 · Impendwa 21:8-9 · AbaHebere 12:2',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 72, 74, 72, 69, 70, 69, 67, 65, 69, 69, 67, 65],
    verses: [
      [
        'Pa lupanda pa-liba umweo.',
        'Yes\' ati, "Lolesha Ine;"',
        'Ifyuma fya mu calo fibi,',
        'Kano ifyuma fya pa lupanda.'
      ],
      [
        'I-lyo nalole-sha Mupusushi,',
        'Namona cimwemwe cakwe;',
        'Nga naponena mu matunko,',
        'Ndasanga amaka pa lupanda.'
      ],
      [
        'Na-ku-lacetekelo lupanda,',
        'Pamo na malayo yakwe;',
        'Pa-ntu takawe mu matunko,',
        'Wacetekela maka ya mulu.'
      ]
    ],
    chorus: [
      'Kupusu ka lolesha, lolesha pa Kalvari,',
      'Tupelwa kupusuka Kumona pa Kalvari.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There’s life in a look at the sacred cross,',
        'Jesus has said, “Look unto Me;”',
        'Earth with its riches is only dross,',
        'Bright treasures beyond in the cross I see.'
      ],
      [
        'When first to the Saviour I raised my eyes,',
        'Sweet was the smile that fell on me;',
        'Oft as the clouds of temptation rise,',
        'A look at the cross still my strength shall be.'
      ],
      [
        'I’ll look to the cross ev’ry day and hour,',
        'Trusting the promise God has given;',
        'None ever fall ‘neath the tempter’s pow’r,',
        'Who trust and obey in the strength of Heav’n.'
      ]
    ],
    englishChorus: [
      'In a look there’s life for thee, in a look at Calvary;',
      'Blessed thought, salvation free, by a look at Calvary.'
    ]
  },
  {
    id: 'hymn-113',
    number: 113,
    title: 'Ale Ita',
    writer: 'Will L. Thompson, 1880 (THOMPSON)',
    englishTune: 'Softly and Tenderly Jesus Is Calling (THOMPSON)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'Mateo 11:28 · Luka 15:11-24 · AbaHebere 3:7-8, 15 · 2 Petro 3:9',
    isSample: false,
    melodicPreview: [72, 72, 72, 70, 68, 65, 68, 63, 72, 72, 70, 68, 70],
    verses: [
      [
        "Ne cikuku Yesu aleita 'we, Kwita",
        'iwe na ine;',
        'A-li pa mwinshi alekulolela,',
        'Kulolela na ine.'
      ],
      [
        'Ci-nshi wakokwele lya le papata',
        'Kuli iwe na ine;',
        'Walashima shime lyo alekwita,',
        'Kwita iwe na ine.'
      ],
      [
        'I-nshita ifyo ileyo lubilo, Kuli iwe',
        'na ine;',
        'Bu-shiku bwa mfwa',
        'nabupalamina, Pali iwe na ine.'
      ],
      [
        'To-ntonkanya ubulayo alaya, Kuli',
        'iwe na ine;',
        'Na-ngu twabipa kuti atwelela,',
        '\'lelo iwe na ine.'
      ]
    ],
    chorus: [
      'Isa ... Isa ... We waluba we bwela-;',
      'No kutemwa Yesu alepapata.: ati,',
      '"We mubi isa."'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Softly and tenderly Jesus is calling,',
        'Calling for you and for me;',
        'See, on the portals He’s waiting and watching,',
        'Watching for you and for me.'
      ],
      [
        'Why should we tarry when Jesus is pleading,',
        'Pleading for you and for me?',
        'Why should we linger and heed not His mercies,',
        'Mercies for you and for me?'
      ],
      [
        'Time is now fleeting, the moments are passing,',
        'Passing from you and from me;',
        'Shadows are gathering, deathbeds are coming,',
        'Coming for you and for me.'
      ],
      [
        'O for the wonderful love He has promised,',
        'Promised for you and for me!',
        'Though we have sinned, He has mercy and pardon,',
        'Pardon for you and for me.'
      ]
    ],
    englishChorus: [
      'Come home, come home,',
      'You who are weary, come home;',
      'Earnestly, tenderly, Jesus is calling,',
      'Calling, O sinner, come home!'
    ]
  },
  {
    id: 'hymn-114',
    number: 114,
    title: 'Icipata na Cisulwa',
    writer: 'Lydia Baxter, 1872; Music by Silas J. Vail, 1872 (THE GATE AJAR FOR ME)',
    englishTune: 'The Gate Ajar for Me (Vail)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:25 · Yohane 10:9 · Mateo 7:13-14 · Ukusokolola 2:10',
    isSample: false,
    melodicPreview: [67, 64, 65, 67, 72, 71, 69, 67, 64, 67, 65, 64, 62],
    verses: [
      [
        'Icipata nacisulwa, Mukati mulebeka;',
        'Kubeka kwa pa lupanda, Kutemwa kwamoneka.'
      ],
      [
        'Naciswililwa fye bonse bafwayo kupusuka,',
        'Bapina na bakankala, Mishobo ne mitundu.'
      ],
      [
        'Kabiyeni fye ku ntanshi, Cipata na cisulwa;',
        "Pokeleleni 'lupanda, Mukapelwe citebo."
      ],
      [
        'Kwishilya i-lya mumana, Tukatula ‘lupanda:',
        'No kupelwa icitebo, No ku mutemwa kulya.'
      ]
    ],
    chorus: [
      'Yangu luse lukalamba, Cipata canjiswililwe;',
      'Ukwi-swilwa ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There is a gate that stands ajar, and through its portals gleaming,',
        'A radiance from the cross afar, the Saviour’s love revealing.'
      ],
      [
        'That gate ajar stands free for all who seek through it salvation;',
        'The rich and poor, the great and small, of ev’ry tribe and nation.'
      ],
      [
        'Press onward, then, though foes may frown, while mercy’s gate is open;',
        'Accept the cross, and win the crown, love’s everlasting token.'
      ],
      [
        'Beyond the river’s brink we’ll lay the cross that here is given,',
        'And bear the crown of life away, and love Him more in heaven.'
      ]
    ],
    englishChorus: [
      'O depth of mercy! can it be that gate was left ajar for me?',
      'For me, for me? was left ajar for me?'
    ]
  },
  {
    id: 'hymn-115',
    number: 115,
    title: 'Shing’anga Ali Mupepi',
    writer: 'William Hunter, 1859; Music by John H. Stockton, 1874 (GREAT PHYSICIAN)',
    englishTune: 'The Great Physician (Stockton)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Yeremia 8:22 · Mateo 9:12 · Luka 4:18 · Mateo 8:16-17 · Abena Filipi 2:9-11',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 67, 68, 70, 72, 70, 67, 65, 63],
    verses: [
      [
        'Shing’anga ali mupepi, Uwa luse ni Yesu;',
        'Lisansamusho mutima, Ishina lya kwa Yesu.'
      ],
      [
        'Lulumbi lube ku Mfumu. Ndemusumina Yesu,',
        'Nalilitemwa Ishina, Ishina lya kwa Yesu.'
      ],
      [
        'Lifumya fibi no mwenso, Ishina lya kwa Yesu;',
        'Ndatemwa ‘lyo ng\'ufwe shina Lisuma lya kwa Yesu.'
      ],
      [
        'Lint\' a-kalete citebo, Ca mweo no lulumbi;',
        'Tukekala \'kalatweba, Ifyalupusukilo.'
      ]
    ],
    chorus: [
      'I-mba lwimbo lusuma, Lwe-shina lya kwa Yesu;',
      '\'Shina ili lyacila, Yesu uwapalwa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'The great Physician now is near, the sympathizing Jesus;',
        'He speaks the drooping heart to cheer, oh! hear the voice of Jesus.'
      ],
      [
        'All glory to the dying Lamb! I now believe in Jesus;',
        'I love the blessed Savior’s name, I love the name of Jesus.'
      ],
      [
        'His name dispels my guilt and fear, no other name but Jesus;',
        'Oh! how my soul delights to hear the precious name of Jesus.'
      ],
      [
        'And when to that bright world on high, we rise to see our Jesus,',
        'We’ll round the throne of glory sing the saving name of Jesus.'
      ]
    ],
    englishChorus: [
      'Sweetest note in seraph song, sweetest name on mortal tongue;',
      'Sweetest carol ever sung, Jesus, blessed Jesus.'
    ]
  },
  {
    id: 'hymn-116',
    number: 116,
    title: 'Nangu Kamo Kuli Yesu',
    writer: 'Mary D. James, 1886; Music by William J. Kirkpatrick, 1886 (NOTHING FOR JESUS)',
    englishTune: 'Nothing for Jesus (Kirkpatrick)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'D Major',
    timeSignature: '6/8',
    scripture: 'Mateo 21:19 · Ukusokolola 3:20 · Mateo 19:21-22 · Mateo 25:14-30',
    isSample: false,
    melodicPreview: [69, 69, 69, 71, 69, 66, 67, 69, 71, 69],
    verses: [
      [
        'Ngo muti-ma wa cula, Bushe tet\' e-kale-mo?',
        'Ku-sendwa ne fya calo, Bushe tet\' e-kale-mo?',
        'Mo-na \'le-kunta pa cibi, Aleko-nkosha fye lyonse;',
        'U-mfwa a-lepa-pata, Bushe tet\' e-kale-mo.'
      ],
      [
        'Wa-pose nshita shobe, Kwabule nci-to ya-kwe?',
        'Wa-ona-ula maka, Kwabule nci-to ya-kwe?',
        'Kwa-bula \'kwesho kucimfya, Na-ngu ku-letapo umo;',
        'Na-ngu fye uwa-luba, Taubombe-le Yesu.'
      ],
      [
        'Wa-temwa fyamu calo, Yes\' ena \'le-ti sha-ni?',
        'Wa-kane ncito yakwe, Yes\' ena ‘le-ti-sha-ni?',
        'Wa-temwa fye ukwangala, Ne fyuma ifya mu calo;',
        'No-kui-seke-sha fye, Yes\' ena \'leti sha-ni?'
      ],
      [
        'Fi-mabu-la fye-ka fye, Ukwabule fitwa-lo?',
        'U-li fye minwe-nkutwa, Ukwabule fitwa-lo?',
        'Na-ngu ka-me taukwete, Na-ngu ni ncito ya maka;',
        'Ta-ukwe-te bu-seko, Bwakukuma-nya Yesu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Crowded is your heart with cares, have you no room for Jesus?',
        'Captured by earth’s gilded snares, have you no room for Jesus?',
        'Lo! He’s standing at your door, knocking, knocking o’er and o’er;',
        'Hear Him pleading evermore, have you no room for Jesus?'
      ],
      [
        'Wasting all your precious hours, have you no work for Jesus?',
        'Spending those God-given powers, have you no work for Jesus?',
        'Striving not to conquer sin, seeking not a soul to win,',
        'Bringing not a wand’rer in; have you no work for Jesus?'
      ],
      [
        'Seeking earth’s possessions fair, have you no time for Jesus?',
        'None for gracious deeds to spare, have you no time for Jesus?',
        'Worldly pleasures, wealth, and ease, seeking, grasping toys like these,',
        'Striving only self to please; have you no time for Jesus?'
      ],
      [
        'Bearing only worthless leaves, have you no fruit for Jesus?',
        'In your hands no precious sheaves, have you no fruit for Jesus?',
        'Not a grain to store away, naught your labor to repay,',
        'Not a joy for that great day, when you shall meet with Jesus.'
      ]
    ]
  },
  {
    id: 'hymn-117',
    number: 117,
    title: 'Ndeisa Mfumu',
    writer: 'Lewis Hartsough, 1872 (WELCOME VOICE)',
    englishTune: 'I Hear Thy Welcome Voice / I Am Coming, Lord (Hartsough)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: '1 Yohane 1:7 · Mateo 11:28 · Tito 3:5 · AbaHebere 9:14 · Esaya 1:18',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 68, 67, 65, 67, 68, 70, 68, 67],
    verses: [
      [
        'I-shi-wi ndeumfwa, Lyanji-ta kuli \'We;',
        'U-ku-sambwa mu mulopa, Ulya wasumine.'
      ],
      [
        'Na-ngu-la ndi mubi, Yesu alintemwa;',
        'A-lemfumye mpulumushi, A-le mpela maka.'
      ],
      [
        'Ye-su alenjita, No ku-temwa kwakwe;',
        'Bu-su-mino alempela, Lu-se no mutende.'
      ],
      [
        'Lu-lu-mbi ku mfumu, Pa mu-lopa wakwe,',
        'Na pa bupe bwa kwa Kristu, Bolo-loke bwesu.'
      ]
    ],
    chorus: [
      'Nde-isa Mfumu, Nji-se kuli \'We;',
      'U-nsambe mu mulopa, Ulya wasumine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I hear Thy welcome voice, that calls me, Lord, to Thee;',
        'For cleansing in Thy precious blood, that flowed on Calvary.'
      ],
      [
        'Though coming weak and vile, Thou dost my strength assure;',
        'Thou dost my vileness fully cleanse, till spotless all, and pure.'
      ],
      [
        '’Tis Jesus calls me on to perfect faith and love,',
        'To perfect hope, and peace, and trust, for earth and heaven above.'
      ],
      [
        'All hail, atoning blood! All hail, redeeming grace!',
        'All hail! the gift of Christ, our Lord, our Strength and Righteousness.'
      ]
    ],
    englishChorus: [
      'I am coming, Lord! Coming now to Thee!',
      'Wash me, cleanse me, in the blood that flowed on Calvary.'
    ]
  },
  {
    id: 'hymn-118',
    number: 118,
    title: 'Apele Fyonse',
    writer: 'Elvina M. Hall, 1865; Music by John T. Grape, 1868 (ALL TO CHRIST)',
    englishTune: 'Jesus Paid It All (ALL TO CHRIST)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: 'Esaya 1:18 · 2 Abena Korinte 12:9 · Abena Kolose 2:13-14 · 1 Yohane 1:7 · Ukusokolola 7:14',
    isSample: false,
    melodicPreview: [63, 63, 67, 70, 70, 72, 70, 67, 63, 65, 67, 68, 67, 65],
    verses: [
      [
        'Ye-su anjeba \'ti, "Maka taukwete;',
        'Pe-mpula upepe, Le-ta fyonse \'ko ndi."'
      ],
      [
        'Ni-we weka mfumu, U-wa-kwata maka,',
        'Ku-po-sha malwele, Ku-na-sho mutima.'
      ],
      [
        'Na-ngula nshakwata, Ica-kumupela;',
        'Sa-mfye fyakufwala, Mu mu-lopa obe.'
      ],
      [
        'Ku-ci-puna cobe, E-ko nkeminina;',
        'Nka-tu-le citebo, Pa-ma-kasa yobe.'
      ]
    ],
    chorus: [
      'A-pele fyonse, I-ne ndi wakwe,',
      'Bu-bi e bwafitishe, Nde-bu-ta nge mpemba.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I hear the Savior say, “Thy strength indeed is small;',
        'Child of weakness, watch and pray, find in Me thine all in all.”'
      ],
      [
        'Lord, now indeed I find Thy pow’r, and Thine alone,',
        'Can change the leper’s spots and melt the heart of stone.'
      ],
      [
        'For nothing good have I whereby Thy grace to claim;',
        'I’ll wash my garments white in the blood of Calv’ry’s Lamb.'
      ],
      [
        'And when, before the throne, I stand in Him complete,',
        '“Jesus died my soul to save,” my lips shall still repeat.'
      ]
    ],
    englishChorus: [
      'Jesus paid it all, all to Him I owe;',
      'Sin had left a crimson stain, He washed it white as snow.'
    ]
  },
  {
    id: 'hymn-119',
    number: 119,
    title: 'Ibimbi lya Kubutisha',
    writer: 'Phoebe Palmer, 1872; Music by Mrs. Joseph F. Knapp, 1872 (CLEANSING WAVE)',
    englishTune: 'The Cleansing Wave (Knapp)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kwelelwa',
    key: 'Eb Major',
    timeSignature: '3/2',
    scripture: 'Sekaria 13:1 · 1 Yohane 1:7 · 2 Abena Korinte 5:17 · Ukusokolola 7:14',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 67, 68, 70, 68, 67, 65, 63],
    verses: [
      [
        'I-bimbi i-lya kashika Ku Kafukauka;',
        'Ye-su Mfumu walashilwe, A-le tupususha.'
      ],
      [
        'Na-ba ici-lengo cipya, Mulopa wanjita;',
        'U-bubi bonse nabufwa, Bwa-shikwa mu m\'lopa,'
      ],
      [
        'Na-laenda mu lubuto, pa mulu wa calo;',
        'Ni-nsambwa ndi u-wabuta, Yesu muli ine.'
      ],
      [
        'We cikuku ca kulisha, Nsambe mu mulopa;',
        'Ni Yesu fye \'waishiba, Yesu \'watanikwe,'
      ]
    ],
    chorus: [
      'U-mumana naumona, \'Wa kunsangu-lula ine;',
      'Na-mutasha Mfumu yandi, Pakubutisho mutima.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Oh now I see the crimson wave, the fountain deep and wide;',
        'Jesus, my Lord, mighty to save, points to His wounded side.'
      ],
      [
        'I see the new creation rise, I hear the speaking blood;',
        'It speaks—polluted nature dies, sinks ’neath the cleansing flood.'
      ],
      [
        'I rise to walk in heaven’s own light, above the world and sin;',
        'With heart made pure and garments white, and Christ enthroned within.'
      ],
      [
        'Amazing grace! ’tis heaven below to feel the blood applied,',
        'And Jesus, only Jesus, know, my Jesus crucified.'
      ]
    ],
    englishChorus: [
      'The cleansing stream I see, I see, I plunge, and O, it cleanseth me!',
      'O praise the Lord! it cleanseth me, it cleanseth me, yes, cleanseth me.'
    ]
  },
  {
    id: 'hymn-120',
    number: 120,
    title: 'Ndesumina',
    writer: 'Charles Wesley, 1741; Traditional American Camp Meeting Melody (I DO BELIEVE)',
    englishTune: 'I Do Believe / Father, I Stretch My Hands to Thee (Wesley)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Ilumbo 143:6 · Marko 9:24 · Abena Roma 5:8 · Tito 2:14',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 76, 74, 71, 67, 69, 71, 72, 71, 69],
    verses: [
      [
        'Tata nomba naisa fye, Mwe Katula wandi;',
        'Nga mulefuma kuli ‘ne Tata one nkaya kwi?'
      ],
      [
        'Muli Yesu ndesumina, Peleni amaka;',
        'No Bufwayo bonse bwandi, Mupele kuli \'ne.'
      ],
      [
        'Nalolesha menso yandi, Kuli Imwe Mfumu;',
        'Ukuti ndepokelela, Bupe bwa Mupashi.'
      ]
    ],
    chorus: [
      'Ndesumina shakalabe. Yesu amfwilile;',
      'Asumishe umulopa, Kupususha ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Father, I stretch my hands to Thee, no other help I know;',
        'If Thou withdraw Thyself from me, ah! whither shall I go?'
      ],
      [
        'On Jesus could I now believe, and feel His saving power;',
        'His full salvation now receive, nor wait another hour.'
      ],
      [
        'Author of faith! to Thee I lift my weary, longing eyes;',
        'O let me now receive that gift, the Spirit from the skies.'
      ]
    ],
    englishChorus: [
      'I do believe, I now believe, that Jesus died for me;',
      'And on the cross He shed His blood, from sin to set me free.'
    ]
  },
  {
    id: 'hymn-121',
    number: 121,
    title: 'Kutemwa kwa kwa Yesu',
    writer: 'Franklin E. Belden, 1886 (BELDEN)',
    englishTune: 'I Will Sing of Jesus’ Love (Belden)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 4:19 · Abena Roma 5:8 · Efese 3:18-19 · Esaya 1:18',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69, 70, 69, 67, 65],
    verses: [
      [
        'Kutemwa kwakwa Yesu, Eko na ... kulaimba;',
        'Pantu a- ntemwa kale, No kufwa pa Kalvari.'
      ],
      [
        'Nalila ne minsoshi, Na Yesu ... andilila;',
        'Kupepa kwandi kwafye, Kano u-kwa kwa Yesu.'
      ],
      [
        'Kutemwa .. , kwa kwa Yesu, Kwacilo ... mulu, calo;',
        'No bubi bwafitisha, Bukabu-ta nge mpemba.'
      ],
      [
        'Nshakuci tile kantu, Pakuti ... \'We untemwe:',
        'Nakupa ... umutima. Ngafwa ku-ti nkutemwe.'
      ]
    ],
    chorus: [
      'Nakula ... i-mba lyonse, Kutemwa ... kwa-kwa Yesu;',
      'Ukuti mbe no mweo, Wene e wamfwilile.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I will sing (I will sing) of Jesus’ love, sing of Him (sing of Him) who first loved me;',
        'For He left (for He left) bright worlds above, and died on Calvary.'
      ],
      [
        'Ere a tear (ere a tear) had dimmed mine eyes, Jesus’ tears (Jesus’ tears) for me did flow;',
        'Ere my first (ere my first) faint pray’r could rise, He had prayed in tones of woe.'
      ],
      [
        'O the depths (O the depths) of love divine! Earth or heav’n (earth or heav’n) can never know;',
        'How that sins (how that sins) as dark as mine, can be made as white as snow.'
      ],
      [
        'Nothing good (nothing good) for Him I’ve done; how could He (how could He) such love bestow?',
        'Lord, I own (Lord, I own) my heart is won, help me now my love to show.'
      ]
    ],
    englishChorus: [
      'I will sing (I will sing) of Jesus’ love, endless praise (endless praise) my heart shall give;',
      'He has died (He has died) that I might live; I will sing His love to me.'
    ]
  },
  {
    id: 'hymn-122',
    number: 122,
    title: 'Kucili Afwaafwi',
    writer: 'Lelia N. Morris, 1898 (NEARER, STILL NEARER)',
    englishTune: 'Nearer, Still Nearer (Morris)',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kupalama kuli Lesa',
    key: 'Db Major',
    timeSignature: '4/4',
    scripture: 'Yakobo 4:8 · AbaHebere 10:22 · Ilumbo 73:28 · Abena Efese 2:13',
    isSample: false,
    melodicPreview: [61, 65, 68, 68, 70, 68, 65, 61, 63, 65, 68, 66, 65, 63],
    verses: [
      [
        'Pe-pi pepi fye ku-li Imwe,',
        'Mpa-lamike-ni \'Mwe Mu-pusushi;',
        'Ku-li Imwe \'ko mpa-lamikwe,',
        'Ntu-she muli \'Mwe Mfumu Mfisame.'
      ],
      [
        'Pe-pi pepi fye Mfu-mu yandi,',
        'Ii, takuli cisuma naleta;',
        'Ka-no imili-mo yabipa,',
        'I-sambeni no mulo-pa wenu;',
        'I-sambeni no mulo-pa wenu.'
      ],
      [
        'Pe-pi pepi fye mbe uwenu,',
        'I-mpulumu-shi nshile-shifwaya;',
        'I-filumba ne fya mu calo,',
        'Mfu-mu mpeni Yesu wa-tanikwe;',
        'Mfu-mu mpeni Yesu wa-Tanikwe.'
      ],
      [
        'Pe-pi naku-la-ba na Imwe,',
        'Ku-suka nka-be ne Mwe ku mulu;',
        'Nka-be na Imwe muyayaya,',
        'Pe-pi pepi Mupusu-shi wandi;',
        'Pe-pi pepi Mupusu-shi wandi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Nearer, still nearer, close to Thy heart,',
        'Draw me, my Savior, so precious Thou art;',
        'Fold me, O fold me close to Thy breast,',
        'Shelter me safe in that haven of rest,',
        'Shelter me safe in that haven of rest.'
      ],
      [
        'Nearer, still nearer, nothing I bring,',
        'Naught as an off’ring to Jesus, my King;',
        'Only my sinful, now contrite heart,',
        'Grant me the cleansing Thy blood doth impart,',
        'Grant me the cleansing Thy blood doth impart.'
      ],
      [
        'Nearer, still nearer, Lord, to be Thine,',
        'Sin, with its follies, I gladly resign,',
        'All of its pleasures, pomp and its pride;',
        'Give me but Jesus, my Lord crucified,',
        'Give me but Jesus, my Lord crucified.'
      ],
      [
        'Nearer, still nearer, while life shall last,',
        'Till safe in glory my anchor is cast;',
        'Thro’ endless ages, ever to be,',
        'Nearer, my Savior, still nearer to Thee,',
        'Nearer, my Savior, still nearer to Thee.'
      ]
    ]
  },
  {
    id: 'hymn-123',
    number: 123,
    title: 'Inshina lya Mushilo',
    writer: 'Margaret Moody, 1886; Music by W. A. Ogden, 1886 (THE HOLIEST NAME)',
    englishTune: 'The Holiest Name (Ogden)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Mateo 1:21 · Abena Filipi 2:9-10 · Luka 1:31 · Imilimo 4:12',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69, 67, 65],
    verses: [
      [
        'Ishina ilya temwikwa Pa-calo na mu mulu;',
        'Lyapelwe na Lesa Tata, U-mwana watemwikwa.'
      ],
      [
        'Lisansa-musho mutima, E-lwimbo \'ne ndeimba,',
        'Nasumi-ne Shina lyakwe, Na-kula-lisosa pe.'
      ],
      [
        'Mutima wakulaimba U-kute-mwa kwa Mfumu;',
        'Nakula-lilumbanya pe, I-shina lya kwa Yesu.'
      ]
    ],
    chorus: [
      'Lyena lya mushilo \'Shina lya kwa Yesu,',
      'Ilyapelwe na Tata pa calo,',
      'Lyaletelwe na bangeli ubushiku,',
      '\'Shina lya kwa Yesu Mfumu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Dearest name in earth or heaven, sweetest name my heart hath known,',
        'By the Father it was given, to His well-beloved Son.'
      ],
      [
        'To my heart it brings a blessing, and my lips take up the strain,',
        'And His wondrous name confessing, tell its sweetness o’er again.'
      ],
      [
        'Oh, my soul would swell the chorus, singing His redeeming love,',
        'And ascribe eternal praises, to the name all names above.'
      ]
    ],
    englishChorus: [
      '’Tis the holiest name, ’tis the holiest name,',
      'From the Father’s lips to the earth it came;',
      'Brought by angels of light in the stillness of night,',
      'Was the dear, dear name of Jesus.'
    ]
  },
  {
    id: 'hymn-124',
    number: 124,
    title: 'Te\'ne Kano Kristu',
    writer: 'Ada Anne Whiddington, c. 1880; Music & Adapt. by Fannie E. Bolton, c. 1900 (BOLTON)',
    englishTune: 'Not I, But Christ (Bolton)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ubumi bwa Bwina Kristu no Kuipeela',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Abena Galatia 2:20 · Yohane 3:30 · Abena Filipi 1:20-21 · 2 Abena Korinte 4:5',
    isSample: false,
    melodicPreview: [70, 70, 72, 70, 68, 67, 65, 67, 68, 70, 68, 67, 65, 63],
    verses: [
      [
        'Kano fye Ye-su eka acindikwe',
        'Te \'ne iyo, Omfwike. \'moneke',
        'Te \'ne kano Yesu ew\' amoneke,',
        'Mu mashiwi muli fyonse ncita.'
      ],
      [
        'Kano Kristu e wingapwa bulanda,',
        'Kristu enga-kumune filamba;',
        'Kano Kristu, engantule cisendo,',
        'Kano Kristu, engamfumyo mwenso.'
      ],
      [
        'Kristu eka, Mashiwi yambi ya fye,',
        'Kristu eka, Fyonse fingomfwika;',
        'Kristu eka, Ine nshilipo kantu,',
        'Kristu eka, Teti njilumbanye.'
      ],
      [
        'Te \'ne ni Kristu, E umpela fyonse,',
        'Kristu eka, e maka e bumi;',
        'E mubili, umweo na Mupashi;',
        'Pano calo pamo na ku mulu,'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Not I, but Christ, be honored, loved, exalted;',
        'Not I, but Christ, be seen, be known, be heard;',
        'Not I, but Christ, in every look and action,',
        'Not I, but Christ, in every thought and word.'
      ],
      [
        'Not I, but Christ, to gently soothe in sorrow,',
        'Not I, but Christ, to wipe the falling tear;',
        'Not I, but Christ, to lift the weary burden,',
        'Not I, but Christ, to hush away all fear.'
      ],
      [
        'Christ, only Christ! No idle words e’er falling,',
        'Christ, only Christ; no needless bustling sound;',
        'Christ, only Christ, no self important bearing;',
        'Christ, only Christ, no trace of “I” be found.'
      ],
      [
        'Not I, but Christ, my every need supplying,',
        'Not I, but Christ, my strength and health to be;',
        'Christ, only Christ, for body, soul, and spirit,',
        'Christ, only Christ, here and eternally.'
      ]
    ]
  },
  {
    id: 'hymn-125',
    number: 125,
    title: 'Akasuba pa Lupili',
    writer: 'Mrs. M. T. Haughey, 1886; Music by Mrs. M. T. Haughey, arr. F. E. Belden, 1886 (SUNLIGHT IN THE HEART)',
    englishTune: 'There Is Sunlight on the Hilltop / Sunlight in the Heart (Haughey)',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Kukoselesha',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: '2 Abena Korinte 4:6 · Ilumbo 27:1 · Yohane 8:12 · Esaya 60:19-20',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 77, 75, 72, 70, 68, 70, 72, 70, 68],
    verses: [
      [
        'Akasuba pa lupili. Pamo na pa cimana;',
        'Ulubuto lwa kasuba, Lulapwa lulaleka,',
        'Lelo lubuto lwa cine. Lwaisulo mutima;',
        'Pantu umwikala Yesu, Mulabuta fye lyonse.'
      ],
      [
        'Naposa bulanda bwandi. Nge nsalu yabipisha,',
        'Nabumfwika ubuseko, Mutima wandi wanga;',
        'Na mu mushi wa lulumbi, Untu anteyanisha,',
        'Mutima wandi ulanga, Nakulamukonka pe.'
      ]
    ],
    chorus: [
      'Ulubuto ulwawamisha. Lwamu mutima wandi,',
      'Cimwemwe ica kwa Yesu, Lubuto ku mutima.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There is sunlight on the hilltop, there is sunlight on the sea,',
        'And the golden beams are sleeping on the soft and verdant lea;',
        'But a richer light is filling all the chambers of my heart;',
        'For Thou dwellest there, my Saviour, and ’tis sunlight where Thou art.'
      ],
      [
        'In the dust I leave my sadness, as the garb of other days,',
        'For Thou robest me with gladness, and Thou fillest me with praise;',
        'And to that bright home of glory which Thy love hath won for me,',
        'In my heart and mind ascending, my glad spirit follows Thee.'
      ]
    ],
    englishChorus: [
      'O the sunlight! beautiful sunlight! O the sunlight in the heart!',
      'Jesus’ smile can banish sadness; it is sunlight in the heart.'
    ]
  },
  {
    id: 'hymn-126',
    number: 126,
    title: 'Ndi no Lwimbo ulo Natemwa',
    writer: 'Edwin O. Excell, 1884 (OTHELLO)',
    englishTune: 'Since I Have Been Redeemed (Excell)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ilumbo 40:3 · Ilumbo 107:2 · Yohane 14:2-3 · Efese 1:7',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 72, 74, 72, 69, 70, 72, 69, 67, 65],
    verses: [
      [
        'Ndi nolwimbo ulo natemwa, Ilyo nalubwilwe;',
        'Kwimbile Mfumu Katula, Ilyo nalubwilwe.'
      ],
      [
        'Kristu alansansamusha, Pantu andubwile;',
        'Kucito bufwayo bwakwe, E cilambu candi.'
      ],
      [
        'Naliba no wa cishinka, pantu andubwile;',
        'Alafwayo mweo wandi, Pantu andubwile.'
      ],
      [
        'Alinteyanishe ng\'anda, Pantu andubwile;',
        '\'Ko nkekala muyayaya, Pantu andubwile.'
      ]
    ],
    chorus: [
      'Ilyo nalubwilwe, Ndelumbanya Katula,',
      'Nakulalumbe Shina Pantu andubwile,',
      'Nakulalumbo Mupusushi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I have a song I love to sing, since I have been redeemed,',
        'Of my Redeemer, Savior, King, since I have been redeemed.'
      ],
      [
        'I have a Christ who satisfies, since I have been redeemed,',
        'To do His will—my highest prize, since I have been redeemed.'
      ],
      [
        'I have a witness bright and clear, since I have been redeemed,',
        'Dispelling ev’ry doubt and fear, since I have been redeemed.'
      ],
      [
        'I have a home prepared for me, since I have been redeemed,',
        'Where I shall dwell eternally, since I have been redeemed.'
      ]
    ],
    englishChorus: [
      'Since I have been redeemed, since I have been redeemed,',
      'I will glory in His name;',
      'Since I have been redeemed, I will glory in my Savior’s name.'
    ]
  },
  {
    id: 'hymn-127',
    number: 127,
    title: 'Alintemwa',
    writer: 'Maria Straub, 1874; Music by Solomon W. Straub, 1874 (PROVIDENCE)',
    englishTune: 'He Loves Me Too / God Sees the Little Sparrow Fall (Straub)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa kwa kwa Lesa',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Mateo 10:29-31 · Luka 12:6-7 · Mateo 6:28-30 · 1 Yohane 4:19',
    isSample: false,
    melodicPreview: [60, 65, 65, 67, 67, 69, 72, 67, 70, 69],
    verses: [
      [
        'Lesa amona ifyuni, Ena ‘lafitemwa;',
        'Nga alitemwa ifyuni, Alintemwa ine.'
      ],
      [
        'Lesa abyala maluba, Ilyena Lisuma;',
        'Nga alitemwa tuluba, Alintemwa ine.'
      ],
      [
        'Lesa apangile ifyuni, Fintu fyonse kuno;',
        'Takalabe kana kakwe, Alitemwa bonse.'
      ]
    ],
    chorus: [
      'Alintemwa Alintemwa, Alintemwa ine;',
      'Pantu alitemwa fyonse, Alintemwa ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'God sees the little sparrow fall, It meets His tender view;',
        'If God so loves the little birds, I know He loves me too.'
      ],
      [
        'He paints the lily of the field, Perfumes each lily bell;',
        'If He so loves the little flowers, I know He loves me well.'
      ],
      [
        'God made the little birds and flowers, And all things large and small;',
        'He’ll not forget His little ones, I know He loves them all.'
      ]
    ],
    englishChorus: [
      'He loves me, too, He loves me, too, I know He loves me, too;',
      'Because He loves the little things, I know He loves me, too.'
    ]
  },
  {
    id: 'hymn-128',
    number: 128,
    title: 'Inshita ya Kupepa',
    writer: 'Fanny J. Crosby, 1880; Music by William H. Doane, 1880 (BLESSED HOUR OF PRAYER)',
    englishTune: 'Blessed Hour of Prayer (Doane)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: '1 Petro 5:7 · AbaFilipi 4:6-7 · Mateo 11:28 · AbaHebere 4:16',
    isSample: false,
    melodicPreview: [68, 70, 72, 72, 70, 68, 72, 75, 75, 73, 72, 70, 68],
    verses: [
      [
        'Inshita ya kupepa ni ‘lyo twafininwa;',
        '\'Lyo tuya kuli Yesu cibusa wesu;',
        'Nga twamucetekela, ena katulama,',
        'Emuti ku-banaka, cisumo kuyo kwali.'
      ],
      [
        'Inshita ya kupepa ni ‘lyo Yesu ‘lipo,',
        'Ena wa luse kuli \'Iwe bana bakwe;',
        'Masakamano yonse tubike pa nkasa,',
        'Emuti kubanaka, cisumo kuyo kwali.'
      ],
      [
        'Inshita ya kupepa ni ‘lyo tuletunkwa,',
        'Tuye ku mupusushi uwatutemwa;',
        'No mutima wa luse alefumya fyonse,',
        'E muti kabanaka, cisumo kuyo kwali.'
      ],
      [
        'Pa nshita ya kupepa tumucetekela,',
        'Ukuti fyo tufwaya aletupela;',
        'Nga twamucetekela akatukakula,',
        'E muti kubanaka, cisumo kuyo kwali.'
      ]
    ],
    chorus: [
      'Nshita yapalwa, nshita ya kupepa,',
      'Emuti kubanaka, cisumo kuyo kwali.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        '’Tis the blessed hour of prayer, when our hearts lowly bend,',
        'And we gather to Jesus, our Savior and Friend;',
        'If we come to Him in faith, His protection to share,',
        'What a balm for the weary! O how sweet to be there!'
      ],
      [
        '’Tis the blessed hour of prayer, when the Savior draws near,',
        'With a tender compassion His children to hear;',
        'When He tells us we may cast at His feet every care,',
        'What a balm for the weary! O how sweet to be there!'
      ],
      [
        '’Tis the blessed hour of prayer, when the tempted and tried',
        'To the Savior who loves them their sorrows confide;',
        'With a sympathizing heart He removes every care;',
        'What a balm for the weary! O how sweet to be there!'
      ],
      [
        '’Tis the blessed hour of prayer, trusting Him we believe,',
        'That the blessings we’re needing we’ll surely receive;',
        'In the fullness of this trust we shall lose every care;',
        'What a balm for the weary! O how sweet to be there!'
      ]
    ],
    englishChorus: [
      'Blessed hour of prayer, blessed hour of prayer,',
      'What a balm for the weary! O how sweet to be there!'
    ]
  },
  {
    id: 'hymn-129',
    number: 129,
    title: 'Yesu Iseni Mutupale',
    writer: 'Eden Reeder Latta, 1878; Music by Dr. William Oscar Perkins (JESUS, THOU HAST PROMISED)',
    englishTune: 'Jesus, Come and Bless Us / Jesus, Thou Hast Promised (Perkins)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Mateo 18:20 · Ilumbo 102:1-2 · AbaHebere 10:25 · 2 Timote 4:18',
    isSample: false,
    melodicPreview: [68, 63, 63, 68, 65, 68, 70, 72, 70, 68],
    verses: [
      [
        'Yesu mwalilaya, Ko mwalongana,',
        'Babili, batatu, mwishina lyandi,',
        'Ndi pakati kenu, ici ca cine;',
        'Twafukama Mfumu isa tupale.'
      ],
      [
        'Yesu mwali nefwe nshita yapita,',
        'Tulemufwaisha kufike mpela;',
        '\'Sa Mfumu! Wapalwa wise tupale,',
        'Tumfwe tubuleni, \'lyo tulebomba.'
      ],
      [
        '\'Lyo tulemwimbila, Yesu twafweni;',
        'Kupapa-ta kwesu, Tumfweni Mfumu;',
        'Twasumina imwe, Bucetekelo;',
        'Mubengeshimishe munshila yesu.'
      ]
    ],
    chorus: [
      '\'Seni mutupale twamulolela',
      'Yesu mutupale twamulo-lela.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Jesus, Thou hast promised that where two or three',
        'In Thy name have gathered, Thou wilt present be;',
        'And Thy word believing, now in pray’r we kneel;',
        'Jesus, come and bless us; Lord, Thyself reveal.'
      ],
      [
        'Jesus, Thou hast met us oft in seasons past,',
        'But we need Thy presence with us till the last;',
        'Come, O blessed Savior, and Thy grace display;',
        'Hear us and accept us; bless us while we pray.'
      ],
      [
        'Jesus, tune our voices to Thy songs of praise;',
        'Be in each petition that to Thee we raise:',
        'May our faith grow stronger, and our hope more bright;',
        'May our love be purer, and our path more light.'
      ]
    ],
    englishChorus: [
      'Jesus, come and bless us while we linger here;',
      'Jesus, come and bless us, be Thou ever near.'
    ]
  },
  {
    id: 'hymn-130',
    number: 130,
    title: 'Ndiwenu Mfumu',
    writer: 'Fanny J. Crosby, 1875; Music by William H. Doane, 1875 (I AM THINE)',
    englishTune: 'I Am Thine, O Lord / Draw Me Nearer (Doane)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 10:22 · Yakobo 4:8 · Efese 3:17-19 · 1 Yohane 3:2',
    isSample: false,
    melodicPreview: [60, 60, 61, 63, 63, 65, 63, 60, 61, 63, 65, 63],
    verses: [
      [
        'Ndi wenu Mfumu, naumfwe shiwi,',
        'Lyanjeba kumutemwa;',
        'Lelo ndefwaya kupalamina,',
        'Pepi pepi mwe Mfumu.'
      ],
      [
        'Kanjipe cipya kumubombela,',
        'Mpelwe maka cikuku;',
        'Mpunamine ko mubusumino,',
        'Ndoshe ‘mo mufwaila.'
      ],
      [
        'Eyawame nshita napepamo,',
        'Ilyo mifukamina;',
        'Na ine nsoshanye nemwe Lesa,',
        'Fyo nsosa ne cibusa.'
      ],
      [
        'Kwabako kutemwa nshingeshiba,',
        'Kanwe Iyo nkaye shilya;',
        'Kwabakwe nseko nshingakumamo,',
        'Kano ntushe muli \'Mwe.'
      ]
    ],
    chorus: [
      'Mpalamine pepi mwe Mfumu,',
      'Palya \'po mwamfwilile,',
      'Mpalamine pepi mwe Mfumu,',
      'Palya \'po mwandashilwe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I am Thine, O Lord, I have heard Thy voice,',
        'And it told Thy love to me;',
        'But I long to rise in the arms of faith,',
        'And be closer drawn to Thee.'
      ],
      [
        'Consecrate me now to Thy service, Lord,',
        'By the pow’r of grace divine;',
        'Let my soul look up with a steadfast hope,',
        'And my will be lost in Thine.'
      ],
      [
        'O the pure delight of a single hour',
        'That before Thy throne I spend,',
        'When I kneel in prayer, and with Thee, my God,',
        'I commune as friend with friend!'
      ],
      [
        'There are depths of love that I cannot know',
        'Till I cross the narrow sea;',
        'There are heights of joy that I may not reach',
        'Till I rest in peace with Thee.'
      ]
    ],
    englishChorus: [
      'Draw me nearer, nearer, blessed Lord,',
      'To the cross where Thou hast died;',
      'Draw me nearer, nearer, nearer, blessed Lord,',
      'To Thy precious, bleeding side.'
    ]
  },
  {
    id: 'hymn-131',
    number: 131,
    title: 'Kuti Naba Nga Yesu',
    writer: 'Fanny J. Crosby, 1868; Music by William H. Doane, 1868 (MORE LIKE JESUS)',
    englishTune: 'More Like Jesus Would I Be (Doane)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: '1 Petro 2:21 · Mateo 11:29 · Filipi 2:5 · 1 Yohane 2:6 · Mateo 5:3, 8',
    isSample: false,
    melodicPreview: [65, 65, 67, 69, 69, 67, 65, 69, 69, 70, 72],
    verses: [
      [
        'Kuti naba nga Yesu; Ngaikala muli \'ne,',
        'Mutende no kutemwa, Fyaisa-nge ci-pele;',
        'Mbe nga Yesu \'lyo nyenda, Ngo mulendo pa calo,',
        'Mupina ku mupashi, Ikala-muli ine.'
      ],
      [
        'Nga koni kalelila, Alakabele nkumbu,',
        'Nga lasunga tuseba, Akomfwa kwita kwandi,',
        'Akamfunda kwikala, Nokunjelelo bubi,',
        'Ndebo wa buta tutu, Ikala-muli ine.'
      ],
      [
        'Nga Yesu ilyo mpepa, Nga Yesu nshiku shonse,',
        'Ntusha pepi naiwe, Amenshi-yalipita,',
        'Ukuti mfyalwe cipya, Ncite kufwaya kwenu,',
        'Ndeba no busumino, Ikala-muli Ine.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'More like Jesus would I be, let my Savior dwell with me;',
        'Fill my soul with peace and love, make me gentle as a dove;',
        'More like Jesus, while I go, pilgrim in this world below;',
        'Poor in spirit would I be; let my Savior dwell in me.'
      ],
      [
        'If He hears the raven’s cry, if His ever watchful eye',
        'Marks the sparrows when they fall, surely He will hear my call:',
        'He will teach me how to live, all my sinful thoughts forgive;',
        'Pure in heart I still would be; let my Savior dwell in me.'
      ],
      [
        'More like Jesus when I pray, more like Jesus day by day;',
        'May I rest me by His side, where the tranquil waters glide:',
        'Born of Him, through grace renewed, by His love my will subdued,',
        'Rich in faith I still would be; let my Savior dwell in me.'
      ]
    ]
  },
  {
    id: 'hymn-132',
    number: 132,
    title: 'Mbe Pepi Nolupanda',
    writer: 'Fanny J. Crosby, 1869; Music by William H. Doane, 1869 (NEAR THE CROSS)',
    englishTune: 'Near the Cross / Jesus, Keep Me Near the Cross (Doane)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Abena Galatia 6:14 · Yohane 19:25 · 1 Abena Korinte 1:18 · Ukusokolola 22:1-2',
    isSample: false,
    melodicPreview: [69, 69, 67, 65, 62, 65, 65, 67, 69, 69, 67],
    verses: [
      [
        'Mbe pepi no lupanda,',
        'Ekafukauka,',
        'Ukundapwa kwa bonse,',
        'Kufuma ku Mfumu.'
      ],
      [
        'Uluse no kutemwa',
        'Pepi no lupanda,',
        'No lubuto pali\'ne,',
        'Nalunshinguluka.'
      ],
      [
        'Palupanda ndemona',
        'Umwana wa mpanga,',
        'Ungafwa kuba pepi,',
        'Pepi fye na Iwe.'
      ],
      [
        'Apepi no lupanda,',
        'Nakulalolela,',
        'Nsuke mfike kwishilya,',
        '\'Shilya lya mumana.'
      ]
    ],
    chorus: [
      'M\'lupanda M\'lupanda,',
      'Elulumbi lwandi,',
      'Kufiko mweo wandi,',
      'Ukatushe kulya.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Jesus, keep me near the cross;',
        'There a precious fountain,',
        'Free to all, a healing stream,',
        'Flows from Calv’ry’s mountain.'
      ],
      [
        'Near the cross, a trembling soul,',
        'Love and mercy found me;',
        'There the bright and morning star',
        'Sheds its beams around me.'
      ],
      [
        'Near the cross! O Lamb of God,',
        'Bring its scenes before me;',
        'Help me walk from day to day',
        'With its shadow o’er me.'
      ],
      [
        'Near the cross I’ll watch and wait,',
        'Hoping, trusting ever,',
        'Till I reach the golden strand',
        'Just beyond the river.'
      ]
    ],
    englishChorus: [
      'In the cross, in the cross,',
      'Be my glory ever,',
      'Till my raptured soul shall find',
      'Rest beyond the river.'
    ]
  },
  {
    id: 'hymn-133',
    number: 133,
    title: 'Munsuminishe Nyende Nemwe',
    writer: 'Lillian D. Avery-Stuttle, 1886; Music by Edwin Barnes, 1886 (MORTON)',
    englishTune: 'O Let Me Walk with Thee (Barnes / SDAH #554)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ubumi bwa Bwina Kristu',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Ukutendeka 5:24 · AbaHebere 11:5 · Mikaya 6:8 · 2 Abena Korinte 5:7',
    isSample: false,
    melodicPreview: [71, 74, 72, 71, 69, 67, 71, 69, 67],
    verses: [
      [
        'Munsuminishe nyende nemwe,',
        'Pamo nga Enoki wakale.',
        'Njikate ku maboko yenu,',
        'Munsuminishe nande nemwe,',
        'Nangwi nshila nshileimona,',
        'Katula \'ne nyende nemwe.'
      ],
      [
        'Teti njesho kwenda neka,',
        'Makumbi yafisha kumulu,',
        'Masanso nayo yafula,',
        'Ama cusho, nayo bwingi,',
        'Cimana naco capunga,',
        'Shikulu \'ne nyende nemwe.'
      ],
      [
        'Mbike amaboko palimwe,',
        'Ndekakulwa ndesekela,',
        'Inkoseshe namu nshila,',
        'Pakusenda ulupanda,',
        'Ku Zion nsuke mfike,',
        'Katula \'ne nyende nemwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O let me walk with Thee, my God,',
        'As Enoch walked in days of old;',
        'Place Thou my trembling hand in Thine,',
        'And sweet communion with me hold;',
        'E’en though the path I may not see,',
        'Yet, Jesus, let me walk with Thee.'
      ],
      [
        'I cannot, dare not, walk alone;',
        'The tempest rages in the sky,',
        'A thousand snares beset my feet,',
        'A thousand foes are lurking nigh.',
        'Still Thou the raging of the sea,',
        'O Master! let me walk with Thee.'
      ],
      [
        'If I may rest my hand in Thine,',
        'I’ll count the joys of earth but loss,',
        'And firmly, bravely journey on;',
        'I’ll bear the banner of the cross',
        'Till Zion’s glorious gates I see;',
        'Yet, Savior, let me walk with Thee.'
      ]
    ]
  },
  {
    id: 'hymn-134',
    number: 134,
    title: 'Ukutemwa kwa Kupapa Kwakwa Yesu',
    writer: 'Edmund S. Lorenz, 1883 (WONDERFUL LOVE)',
    englishTune: 'Wonderful Love of Jesus / In Joyful High and Holy Lays (Lorenz)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa kwa kwa Lesa',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Efese 3:18-19 · 1 Yohane 4:9-10 · Abena Roma 8:38-39 · Ilumbo 103:2-4',
    isSample: false,
    melodicPreview: [67, 72, 72, 72, 71, 69, 71, 72, 74, 71, 67],
    verses: [
      [
        'Mucifulo ca mushilo,',
        'Mutima wandi waanga;',
        'Bushe n\' ani ungalanda,',
        'Ukutemwa kwakwa Yesu.'
      ],
      [
        'Emutende akasuba,',
        'Elubuto namu mfifi;',
        'Kula posha abalwele,',
        'Ukuteemwa kwakwa Yesu.'
      ],
      [
        'Alanjelela ububi,',
        'Alanjimya ne nga nawa;',
        'Mu mweo, nangu nimumfwa,',
        'Ukuteemwa kwakwa Yesu.'
      ]
    ],
    chorus: [
      'Ukutemwa, kwakupapa;',
      'Kutemwa kwakwa Yesu;',
      'Ukutemwa, Kwakupapa;',
      'Kutemwa kwakwa Yesu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'In joyful high and holy lays',
        'My soul her grateful voice would raise;',
        'For who can sing the worthy praise',
        'Of the wonderful love of Jesus!'
      ],
      [
        'A joy by day, a peace by night,',
        'In storms a calm, in darkness light;',
        'In pain a balm, in weakness might,',
        'Is the wonderful love of Jesus.'
      ],
      [
        'My hope for pardon when I call,',
        'My trust for lifting when I fall;',
        'In life, in death, my all in all,',
        'Is the wonderful love of Jesus.'
      ]
    ],
    englishChorus: [
      'Wonderful love! wonderful love!',
      'Wonderful love of Jesus!',
      'Wonderful love! wonderful love!',
      'Wonderful love of Jesus!'
    ]
  },
  {
    id: 'hymn-135',
    number: 135,
    title: 'Nalikutemwa',
    writer: 'Frances Ridley Havergal, 1872; Refrain & Music by Ralph E. Hudson, 1881 (THE HALF HAS NEVER YET BEEN TOLD)',
    englishTune: 'I Love Thee Better, Lord / The Half Has Never Yet Been Told (Hudson)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa kwa kwa Lesa',
    key: 'D Major',
    timeSignature: '3/4',
    scripture: '1 Bakamfumu 10:7 · 1 Petro 1:8 · Ilumbo 4:7 · 1 Yohane 1:7',
    isSample: false,
    melodicPreview: [66, 66, 67, 69, 69, 66, 62, 64, 66, 67, 64],
    verses: [
      [
        'Nalikutemwa we Mfumu,',
        'Ukucila fyonse,',
        'Pamutendyo yo wampela,',
        'Ushingonaulwa.'
      ],
      [
        'Ninjishiboli mupepi,',
        'Nokucila fyonse;',
        'Nelintu ntontonkanyeci,',
        'Mutima \'sekela.'
      ],
      [
        'Wambikila mo buseko,',
        'Eco ndesekela;',
        'Kwabulo kutemwa kwenu,',
        'Nga teti nsekele.'
      ],
      [
        'We mfumu yandi Katula!',
        'Ngacabefi nomba,',
        'Tacakacilyo busuma,',
        '\'Lyo tukamonana?'
      ]
    ],
    chorus: [
      'Tatulati twebwe fyonse,',
      'Fyakutemwa kobe;',
      'Tatulati twebwe fyonse,',
      'Fyamulopa obe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I know I love Thee better, Lord,',
        'Than any earthly joy;',
        'For Thou hast given me the peace',
        'Which nothing can destroy.'
      ],
      [
        'I know that Thou art nearer still',
        'Than any earthly throng,',
        'And sweeter is the thought of Thee',
        'Than any lovely song.'
      ],
      [
        'Thou hast put gladness in my heart;',
        'Then well may I be glad!',
        'Without the secret of Thy love',
        'I could not but be sad.'
      ],
      [
        'O Savior, precious Savior mine!',
        'What will Thy presence be,',
        'If such a life of joy can crown',
        'Our walk on earth with Thee?'
      ]
    ],
    englishChorus: [
      'The half has never yet been told,',
      'Of love so full and free!',
      'The half has never yet been told,',
      'The blood—it cleanseth me!'
    ]
  },
  {
    id: 'hymn-136',
    number: 136,
    title: 'Konse \'Kantwala',
    writer: 'William Clark Martin, 1900; Music by James Milton Black, 1900 (I REMEMBER CALVARY)',
    englishTune: 'I Remember Calvary / Where He May Lead Me (Black)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukukonka Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Luka 9:23 · 1 Petro 2:21 · Yohane 10:27 · Abena Galatia 2:20 · Ukusokolola 14:4',
    isSample: false,
    melodicPreview: [63, 63, 65, 67, 70, 68, 67, 65, 67, 67, 68, 70],
    verses: [
      [
        'Konse kantwala \'ne nkaya,',
        'Pantu namu cetekela;',
        'Ndeibukisha pa lwandi;',
        'Afwilile pa kalfali.'
      ],
      [
        'O ndetemwe funde lyakwe,',
        'Nokutungululwa nankwe:',
        'Bufwayo bwakwe nde temwa,',
        'Bwashishiwe pa kalufali.'
      ],
      [
        'Kuntanshi \'ne nshakatine,',
        'Yesu akaba naine;',
        'Bushiku bumo nsubila,',
        'Nkamumona mupusushi.'
      ]
    ],
    chorus: [
      'Yes\' akula ntangilila,',
      'Akasuba no bushiku,',
      'Cibusa wandi wacine,',
      'Amfwilile pa kalufali.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Where He may lead me I will go,',
        'For I have learned to trust Him so,',
        'And I remember ’twas for me,',
        'That He was slain on Calvary.'
      ],
      [
        'O I delight in His command,',
        'Love to be led by His dear hand;',
        'His divine will is sweet to me,',
        'Hallowed by blood-stained Calvary.'
      ],
      [
        'Onward I go, nor doubt nor fear,',
        'Happy with Christ, my Savior, near,',
        'Trusting that I some day shall see,',
        'Jesus, my Friend, of Calvary.'
      ]
    ],
    englishChorus: [
      'Jesus shall lead me night and day,',
      'Jesus shall lead me all the way,',
      'He is the truest Friend to me,',
      'For I remember Calvary.'
    ]
  },
  {
    id: 'hymn-137',
    number: 137,
    title: 'Bule Calo Umpe Yesu',
    writer: 'Fanny J. Crosby, 1879; Music by John R. Sweney, 1879 (SWENEY)',
    englishTune: 'Take the World, but Give Me Jesus (Sweney / SDAH #329)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'AbaFilipi 3:7-8 · Mateo 16:26 · Efese 3:18-19 · 1 Abena Korinte 13:12',
    isSample: false,
    melodicPreview: [65, 67, 69, 70, 72, 69, 65, 67, 69, 70, 69, 67],
    verses: [
      [
        'Bule calo umpe Yesu,',
        'Pantwi calo \'ci cafye;',
        'Pantu ukutemwa kwakwe,',
        'Kwabafyo kwa penape;'
      ],
      [
        'Bule calo umpe Yesu,',
        'Pant\' eunsansamusha;',
        'Nga ninga pempulwa nakwe,',
        'Kuti na ansha bubi.'
      ],
      [
        'Bule calo umpe Yesu,',
        'Mone cimwemwe cakwe;',
        'Lubuto munshila yandi,',
        'Lunsansamushe ine.'
      ],
      [
        'Bule calo umpe Yesu,',
        'Lupanda ncetekele;',
        'Bwino bwino Mfumu yandi,',
        'Nkasuke nkamumone.'
      ]
    ],
    chorus: [
      'Yangu ukutemwa kwakwe,',
      'No luse lwafulisha;',
      'Ubupususho kuli ‘fwe,',
      'No mweo wape na pe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Take the world, but give me Jesus,',
        'All its joys are but a name;',
        'But His love abideth ever,',
        'Through eternal years the same.'
      ],
      [
        'Take the world, but give me Jesus,',
        'Sweetest comfort of my soul;',
        'With my Savior watching o’er me,',
        'I can sing though billows roll.'
      ],
      [
        'Take the world, but give me Jesus,',
        'Let me view His constant smile;',
        'Then throughout my pilgrim journey',
        'Light will cheer me all the while.'
      ],
      [
        'Take the world, but give me Jesus,',
        'In His cross my trust shall be,',
        'Till, with clearer, brighter vision,',
        'Face to face my Lord I see.'
      ]
    ],
    englishChorus: [
      'Oh, the height and depth of mercy!',
      'Oh, the length and breadth of love!',
      'Oh, the fullness of redemption,',
      'Pledge of endless life above!'
    ]
  },
  {
    id: 'hymn-138',
    number: 138,
    title: 'Buleni Umweo Wandi',
    writer: 'Frances Ridley Havergal, 1874; Refrain & Music by William J. Kirkpatrick (ENTIRE CONSECRATION)',
    englishTune: 'Take My Life, and Let It Be / Entire Consecration (Kirkpatrick)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Abena Roma 12:1 · 1 Abena Korinte 6:19-20 · 1 Petro 1:18-19 · 1 Yohane 1:7',
    isSample: false,
    melodicPreview: [67, 72, 71, 69, 67, 65, 64, 67, 72, 71, 69, 67],
    verses: [
      [
        'Bulen\'umweo wandi,',
        'Mfumu yand\'ube wenu,',
        'Pamo ne minwe yandi,',
        'Icite fyo mwatemwa.'
      ],
      [
        'Bula makasa yandi,',
        'Yacite co lefwaya;',
        'Shiwi nalyo limbile,',
        'Limbile Mfumu yandi.'
      ],
      [
        'Bule milomo yandi,',
        'Isose shiwi lyobe;',
        'Ne mpiya shandi shonse,',
        'Ninsha po fye nakalya.'
      ],
      [
        'Bula inshiku shandi,',
        'Ne nshita yandi yonse;',
        'Na mano yandi yonse,',
        'Fibomfye Mfumu yandi.'
      ],
      [
        'Bula bufwayo bwandi,',
        'Bucite bube bobe;',
        'Bulo mutima wandi,',
        'Ube cipuna cobe;'
      ],
      [
        'Bula kutemwa kwandi,',
        'Kube pankasa shobe;',
        'Naine wine pano,',
        'Ukuti mbe obe pe.'
      ]
    ],
    chorus: [
      'Nsambeni mbute mumulopa, (mumulopa)',
      'Nsambeni mbute mumulopa, (mumulopa)',
      'Mfumu napela, Umweo nafyonse,',
      'Kube ukwa penape.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Take my life and let it be',
        'Consecrated, Lord, to Thee;',
        'Take my hands and let them move',
        'At the impulse of Thy love.'
      ],
      [
        'Take my feet and let them be',
        'Swift and beautiful for Thee;',
        'Take my voice and let me sing',
        'Always, only, for my King.'
      ],
      [
        'Take my lips and let them be',
        'Filled with messages from Thee;',
        'Take my silver and my gold,',
        'Not a mite would I withhold.'
      ],
      [
        'Take my moments and my days,',
        'Let them flow in ceaseless praise;',
        'Take my intellect and use',
        'Every power as Thou shalt choose.'
      ],
      [
        'Take my will and make it Thine,',
        'It shall be no longer mine;',
        'Take my heart, it is Thine own,',
        'It shall be Thy royal throne.'
      ],
      [
        'Take my love, my Lord, I pour',
        'At Thy feet its treasure store;',
        'Take myself, and I will be',
        'Ever, only, all for Thee.'
      ]
    ],
    englishChorus: [
      'Wash me in the Savior’s precious blood, (in the blood)',
      'Cleanse me in its purifying flood; (in the flood)',
      'Lord, I give to Thee my life and all, to be',
      'Thine, henceforth, eternally.'
    ]
  },
  {
    id: 'hymn-139',
    number: 139,
    title: 'Ninsanga Cibusa',
    writer: 'James Grindlay Small, 1866; Music by George C. Stebbins, 1878 (FRIEND)',
    englishTune: 'I’ve Found a Friend, O Such a Friend! (Stebbins / SDAH #186)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa kwa kwa Lesa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Yohane 15:13-15 · Hosea 11:4 · Abena Roma 8:35-39 · 1 Yohane 4:19',
    isSample: false,
    melodicPreview: [67, 67, 68, 70, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Ninsanga cibusa uwacila, Uwantemenwe;',
        'Ankula no mwa-ndo wakutemwa, Ndikuntu ali;',
        'Mutima walikakwa no mwando uwakutemwa,',
        'Yesu wandi na ine ndiwakwe ukwa penape.'
      ],
      [
        'Ninsanga cibusa uwacila, Ewamfwilile;',
        'Te mweo weka untu ampele, No mwine pamo;',
        'Conse ndi naco tecandi iyo, Ndemupela fye,',
        'Mweo wandi wa-kwe nshita shonse, Ukwa penape.'
      ],
      [
        'Ninsanga cibusa uwacila, Apelwa maka;',
        'Maka yakunsu-nga ilyo nyenda, Kuya kumulu;',
        'Ululumbi ulubengeshima, Lumpela maka,',
        'Nakulapempu-la noku bomba, Elyo nkatushe.'
      ],
      [
        'Ninsanga cibusa uwacila, Aba no luse;',
        'Cilolo wama-no, Wa maka yonse nikacinga;',
        'Kufumo kwali uwantemenwe, Ndasanga maka,',
        'Nangu mweo i-mfwa nelyo kumbo, \'Nendifye wenu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I’ve found a Friend, O such a Friend! He loved me ere I knew Him;',
        'He drew me with the cords of love, and thus He bound me to Him;',
        'And round my heart still closely twine those ties which naught can sever,',
        'For I am His, and He is mine, forever and forever.'
      ],
      [
        'I’ve found a Friend, O such a Friend! He bled, He died to save me;',
        'And not alone the gift of life, but His own self He gave me;',
        'Naught that I have my own I’ll call, I’ll hold it for the Giver,',
        'My heart, my strength, my life, my all, are His, and His forever.'
      ],
      [
        'I’ve found a Friend, O such a Friend! All power to Him is given,',
        'To guard me on my onward course, and bring me safe to heaven:',
        'The eternal glories gleam afar, to nerve my faint endeavor:',
        'So now to watch, to work, to war, and then to rest forever.'
      ],
      [
        'I’ve found a Friend, O such a Friend! So kind and true and tender,',
        'So wise a Counselor and Guide, so mighty a Defender!',
        'From Him who loves me now so well what power my soul can sever?',
        'Shall life or death, shall earth or hell? No! I am His forever.'
      ]
    ]
  },
  {
    id: 'hymn-140',
    number: 140,
    title: 'Naumfwile Yesu Anjita',
    writer: 'Horatius Bonar, 1846; Music by John Bacchus Dykes, 1868 (VOX DILECTI)',
    englishTune: 'The Voice of Jesus / I Heard the Voice of Jesus Say (Dykes / SDAH #465)',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 11:28 · Yohane 4:14 · Yohane 7:37 · Yohane 8:12 · Ukusokolola 22:17',
    isSample: false,
    melodicPreview: [65, 70, 70, 70, 69, 67, 69, 70, 65, 62],
    verses: [
      [
        'Naumfwile Yesu anjita, \'Leti iso tushe,',
        'We wanaka biko mutwe, Pa cifuba candi;',
        'Ilyo nai-le kuntwali, Nali wa bulanda,',
        'Nshasangile mo kutusha, Nomba ndesekela.'
      ],
      [
        'Naumfwile Yesu anjita, Aleti ndekupa,',
        'Amenshi ya mweo sonwe, Kut\'ube no mweo;',
        'Naishile kuli Yesu, Mulonga wa mweo,',
        'Nomba nshili necilaka, Ndyu mumi muntwali.'
      ],
      [
        'Naumfwile Yesu ati: Ndi nyali ya calo,',
        'Lolesha kuli ne iwe, Elyo kukabuta;',
        'Ilyo nalo-leshe Wene, Naba ngo lutanda,',
        'Nakulaya mulubuto, Nkasuke nkafike.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I heard the voice of Jesus say, “Come unto Me and rest;',
        'Lay down, thou weary one, lay down thy head upon My breast.”',
        'I came to Jesus as I was, weary, and worn, and sad;',
        'I found in Him a resting place, and He has made me glad.'
      ],
      [
        'I heard the voice of Jesus say, “Behold, I freely give',
        'The living water; thirsty one, stoop down and drink, and live.”',
        'I came to Jesus, and I drank of that life-giving stream;',
        'My thirst was quenched, my soul revived, and now I live in Him.'
      ],
      [
        'I heard the voice of Jesus say, “I am this dark world’s Light;',
        'Look unto Me, thy morn shall rise, and all thy day be bright.”',
        'I looked to Jesus, and I found in Him my Star, my Sun;',
        'And in that light of life I’ll walk, till trav’ling days are done.'
      ]
    ]
  },
  {
    id: 'hymn-141',
    number: 141,
    title: 'Nabo Wenu',
    writer: 'Franklin E. Belden, 1886 (BELDEN / WHOLLY THINE)',
    englishTune: 'Wholly Thine (Belden / SDAH #309)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Ilumbo 119:94 · Abena Roma 6:13 · 1 Abena Korinte 6:19-20 · AbaFilipi 3:8',
    isSample: false,
    melodicPreview: [63, 60, 63, 68, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Ine mbe wenu Mupusushi,',
        'Mfundisha we Mfumu;',
        'Ine ncite kufwaya kwenu,',
        'Ngafweni Mfumu.'
      ],
      [
        'Cuma ca calo cili cafye,',
        'Ukwabu-la Imwe;',
        'Pe shina Lyenu ndefisula,',
        'Mwe cuma candi.'
      ],
      [
        'Naposa fyoonse fya mu calo,',
        'Mpalame ku Mfumu;',
        'Nasansamuke lyo mulipo,',
        'Mbe wenu Mfumu.'
      ]
    ],
    chorus: [
      'Mbe wenu (Mfumu), Mbe wenu (Mfumu),',
      'Uku kulaya kwandi Mbe wenu (Mfumu);',
      'Mbe wenu (Mfumu),',
      'Wenu nomba mwe Mfumu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I would be, dear Savior, wholly Thine;',
        'Teach me how, teach me how;',
        'I would do Thy will, O Lord, not mine;',
        'Help me, help me now.'
      ],
      [
        'What is worldly pleasure, wealth, or fame,',
        'Without Thee, without Thee?',
        'I will leave them all for Thy dear name;',
        'This my wealth shall be.'
      ],
      [
        'As I cast earth’s transient joys behind,',
        'Come Thou near, come Thou near;',
        'In Thy presence all in all I find,',
        '’Tis my comfort here.'
      ]
    ],
    englishChorus: [
      'Wholly Thine, wholly Thine,',
      'Wholly Thine, this is my vow;',
      'Wholly Thine, wholly Thine,',
      'Wholly Thine, O Lord, just now.'
    ]
  },
  {
    id: 'hymn-142',
    number: 142,
    title: 'Bwali Wama',
    writer: 'Eliza Lee Follen, 1836; Music by George Kingsley, 1838 (ELIZABETHTOWN)',
    englishTune: 'How Sweet Upon This Sacred Day (Kingsley / Christ in Song #432 / Church Hymnal #458)',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: 'Ukufuma 20:8-11 · Esaya 58:13-14 · Ilumbo 92:1-2 · AbaHebere 4:9',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Bushiku bwa mushilo bwali cile nshiku shonse,',
        'Twitontonkanyapo fibi, Kano Lesa wesu.'
      ],
      [
        'Cisumo kumfwa ipepo, Ku-ule pepelela;',
        'Kuti babi bala-pile, Kulola ku mulu.'
      ],
      [
        'Nga tufwaya kutamfyo bubi Ekw\'ali umona;',
        'Amona mu kati kesu, Kuti atwelela.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'How sweet upon this sacred day, the best of all the sev’n,',
        'To cast our earthly thoughts away, and think of God and heav’n.'
      ],
      [
        'How sweet to be allowed to pray, our sins may be forgiven!',
        'With filial confidence to say, “Father, who art in heaven!”'
      ],
      [
        'And if to make our sins depart, in vain the will has striv’n,',
        'He who regards the inmost heart will send His grace from heav’n.'
      ]
    ]
  },
  {
    id: 'hymn-143',
    number: 143,
    title: 'Mutufumye no Bupalo',
    writer: 'John Fawcett, 1773; Melody from Sicilian Mariners (SICILIAN MARINERS / SICILY)',
    englishTune: 'Lord, Dismiss Us With Thy Blessing (Sicilian Mariners / SDAH #64 / Christ in Song #448)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Impendwa 6:24-26 · 2 Abena Korinte 13:14 · Ilumbo 29:11 · 1 Abena Tesalonika 5:23',
    isSample: false,
    melodicPreview: [65, 67, 69, 70, 69, 67, 65, 69, 70, 72, 74, 72, 70, 69],
    verses: [
      [
        'Mutufumye no bupalo,',
        'Mu mitima yesu pe;',
        'Tube no kutemwa kwenu,',
        'Twange no luse lwenu;',
        'Mutukoshe, mutukoshe,',
        'Lyonse tuli pano nse.'
      ],
      [
        'No mucinshi twatotela,',
        'Pa fyebo ifisuma;',
        'Cibe cakulya ca myeo,',
        'Cikale mu mitima;',
        'Imwe bene, Imwe bene.',
        'Muleba ne fwe lyonse.'
      ],
      [
        'Nshiku shonse shesu Mfumu,',
        'Twashipela kuli ‘mwe;',
        'Tusansamusheni lyonse,',
        'Tuketaba ne nseko;',
        'Tukekala, tukekala,',
        'Na Yesu Inshiku pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Lord, dismiss us with Thy blessing,',
        'Fill our hearts with joy and peace;',
        'Let us each, Thy love possessing,',
        'Triumph in redeeming grace:',
        'O refresh us, O refresh us,',
        'Trav’ling through this wilderness.'
      ],
      [
        'Thanks we give, and adoration,',
        'For Thy Gospel’s joyful sound;',
        'May the fruits of Thy salvation',
        'In our hearts and lives abound;',
        'Ever faithful, ever faithful,',
        'To the truth may we be found.'
      ],
      [
        'So, whene’er the signal’s given,',
        'Us from earth to call away,',
        'Borne on angels’ wings to heaven,',
        'Glad the summons to obey,',
        'May we ever, may we ever,',
        'Reign with Christ in endless day.'
      ]
    ]
  },
  {
    id: 'hymn-144',
    number: 144,
    title: 'Mpimpila Ukuya ku Mulu',
    writer: 'Johnson Oatman, Jr., 1898; Music by Charles H. Gabriel, 1898 (HIGHER GROUND)',
    englishTune: 'Higher Ground / I’m Pressing on the Upward Way (Gabriel / SDAH #625 / Church Hymnal #331)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ubumi bwa Bwina Kristu',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'AbaFilipi 3:13-14 · Ilumbo 61:2 · Habakuki 3:19 · Abena Kolose 3:1-2',
    isSample: false,
    melodicPreview: [63, 68, 72, 72, 72, 70, 68, 70, 72, 68],
    verses: [
      [
        'Mpimpilo kuya ku mulu,',
        'Ndanina inshiku shonse;',
        'Ndalomba ilyo nde enda,',
        'Ntila Mfumu nje ku mulu.'
      ],
      [
        'Nshifwayo kwikala muno,',
        'Mwaba macusho no mwenso;',
        'Nangu bambi balefwaya,',
        'Ine ndefwaya ku mulu.'
      ],
      [
        'Mfwayo kwikala ku mulu,',
        'Nangu Satana ‘lencusha;',
        'No busumino ndeumfwa',
        'nyimbo sha bashila kulya.'
      ],
      [
        'Ndefwayo kuya ku mulu,',
        'Ukuyaba no lulumbi;',
        'Nanomba ncili ndepepa.',
        'Muntungulule ku mulu.'
      ]
    ],
    chorus: [
      'Mfumu njimya njiminine.',
      'Busumino bwa ku mulu;',
      'Icifulo cacile ci,',
      'Mfumu ndefwaya ku mulu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I’m pressing on the upward way,',
        'New heights I’m gaining every day;',
        'Still praying as I onward bound,',
        '“Lord, plant my feet on higher ground.”'
      ],
      [
        'My heart has no desire to stay',
        'Where doubts arise and fears dismay;',
        'Though some may dwell where these abound,',
        'My prayer, my aim, is higher ground.'
      ],
      [
        'I want to live above the world,',
        'Though Satan’s darts at me are hurled;',
        'For faith has caught the joyful sound,',
        'The song of saints on higher ground.'
      ],
      [
        'I want to scale the utmost height,',
        'And catch a gleam of glory bright;',
        'But still I’ll pray till heaven I’ve found,',
        '“Lord, lead me on to higher ground.”'
      ]
    ],
    englishChorus: [
      'Lord, lift me up, and let me stand',
      'By faith, on heaven’s tableland;',
      'A higher plane than I have found,',
      'Lord, plant my feet on higher ground.'
    ]
  },
  {
    id: 'hymn-145',
    number: 145,
    title: 'Iwe Wilakana',
    writer: 'Franklin E. Belden, 1886 (ASK NOT TO BE EXCUSED)',
    englishTune: 'Ask Not to Be Excused (Belden / Christ in Song #513 / Hymns and Tunes #703)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Luka 14:16-24 · Mateo 9:37-38 · Mateo 20:1-7 · 2 Abena Korinte 6:2',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 67, 68, 65, 63],
    verses: [
      [
        'Iwe wilakana, eko ili ncito',
        '\'yo Lesa \'lefwaya iwe kuyabomba;',
        'Umfwa bwite bwakwe kuli \'we \'lekwita,',
        'Cisumo kubomba, kubombelo mulu.'
      ],
      [
        'Iwe wilakana Shikul\' alekwita;',
        'Walekana kale, Shi mumfwile lelo;',
        'Mabala na yapya babomfi bacepa,',
        'Sumina kubomba, Shi bombele Mfumu.'
      ],
      [
        'Mu kukane ncito no kucelwacelwa,',
        'Mukano kutemwa kulya kwa ku mulu;',
        'Ilyo luse lwakwe lulepapatila,',
        'No kulango mulu, Isa \'sa welelwe.'
      ]
    ],
    chorus: [
      'Iseni (seni) mwikana kubomba,',
      'Iteya (teya) nisheni kubomba,',
      'Mwikana kubomba mukomfwa \'katila,',
      'Kukana kubomba, mwakana no mulu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Ask not to be excused, there’s earnest work to do;',
        'Stand ready to be used where God may station you.',
        'His invitation kind to thee has oft been giv’n;',
        'Accept, and thou shalt find ’tis sweet to work for heav’n.'
      ],
      [
        'Ask not to be excused, the Master calls today;',
        'Too long hast thou refused, now hasten to obey.',
        'The harvest fields are white, the laborers are few;',
        'Let this be thy delight, the Master’s work to do.'
      ],
      [
        'Ask not to be excused, there’s danger in delay;',
        'That wondrous love abused, forever turns away.',
        'While Mercy gently pleads and points the way to heav’n,',
        'While Jesus intercedes, O come and be forgiv’n!'
      ]
    ],
    englishChorus: [
      'Come, O come! Ask not to be excused;',
      'Come, O come! Stand ready to be used.',
      'Ask not to be excused, this answer may be giv’n:',
      'Thou hast My love abused, thou art excused from heav’n.'
    ]
  },
  {
    id: 'hymn-146',
    number: 146,
    title: 'Ikala Mu M\'tima',
    writer: 'Frances Ridley Havergal, 1876; Music by Samuel Sebastian Wesley, 1864 (AURELIA)',
    englishTune: 'Thy Life Within Me / Live Out Thy Life Within Me (Wesley / SDAH #316)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Abena Galatia 2:20 · Abena Roma 6:13 · 1 Abena Korinte 6:19-20 · AbaFilipi 1:20-21',
    isSample: false,
    melodicPreview: [63, 67, 68, 70, 72, 70, 68, 67, 68, 70, 67],
    verses: [
      [
        'Ikala mu m\'tima wandi, O Yesu Mfumu,',
        'Ngasukila fyonse, Ifyaba mu mutima,',
        'Ikala muli \'ne u-ntungulule nshila,',
        'Ukuti fye ndumone ululumbi lwenu.'
      ],
      [
        'Mubili waipela na usanguluka,',
        'Ululumbi lwenu nalubekamuli \'ne,',
        'No mubili wandi ube nomba uwenu,',
        'Inshiku fye shonse, Ndecite fyo mufwaya.'
      ],
      [
        'Ifilundwa fya uko fyonse fimumfwile,',
        'Ukuti mufibomfye monse mufwaila,',
        'Ukuipela u-kwabula ukushako,',
        'Ukuba wacincila ku mulimo wenu.'
      ],
      [
        'Ukutusha kwa cine kukaba muli \'ne,',
        'Nkalamulolela ilyo fye mukamfwaya,',
        'Ikala muli \'ne, O Yesu Mfumu yandi,',
        'Ungasukileko ifyaba mu mutima.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Live out Thy life within me, O Jesus, King of kings!',
        'Be Thou Thyself the answer to all my questionings;',
        'Live out Thy life within me, in all things have Thy way!',
        'I, the weak and the earthly, and Thou, the strength and stay.'
      ],
      [
        'The temple has been yielded, and purified of sin;',
        'Let Thy Shekinah glory now shine forth from within,',
        'And all the earth keep silence, the body henceforth be',
        'Thy silent, gentle servant, moved only as by Thee.'
      ],
      [
        'Its members every moment held subject to Thy call,',
        'Ready to have Thee use them, or not be used at all;',
        'Held without one reservation, held only for Thy will,',
        'Ready for eager service, or waiting calm and still.'
      ],
      [
        'Held without restless longing, or strain, or stress, or fret,',
        'Awaiting Thy decision, when Thou hast need of me;',
        'Live out Thy life within me, O Jesus, King of kings,',
        'Be Thou the glorious answer to all my questionings.'
      ]
    ]
  },
  {
    id: 'hymn-147',
    number: 147,
    title: 'Mpalamikwe Mupepi',
    writer: 'Mrs. E. W. Chapman, 1886; Music by J. H. Tenney, 1886 (CLOSER TO THEE)',
    englishTune: 'Draw Me Closer to Thee / Closer to Thee, My Father, Draw Me (Tenney / Christ in Song #534)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'A Major',
    timeSignature: '4/4',
    scripture: 'Yeremiya 30:21 · Yakobo 4:8 · AbaHebere 10:22 · Ilumbo 73:28',
    isSample: false,
    melodicPreview: [69, 73, 73, 71, 69, 64, 66, 69, 71, 73],
    verses: [
      [
        'Tata mumpalamike,',
        'Ndefwaya mfukatilwe ;',
        'Mbe fye mu maboko yenu,',
        'Kuti nsange kutusha.'
      ],
      [
        'Mupusushi \'ne mbe pepi,',
        'Nimfuma kuli Iwe,,',
        'Ng’ufwe naumfukatila,',
        'Ndi mu maboko yenu.'
      ],
      [
        'Mupashi mpalamikile Kuti mbe',
        'fye na Iwe,',
        'Mbutisheni umutima,',
        'Munsambe mbute tutu.'
      ]
    ],
    chorus: [
      'Mpa-lamikwe mupepi,',
      'Mpa-lamikwe kuli Imwe,',
      'Mpa-lamine pepi na \'Mwe'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Closer to Thee, my Father, draw me,',
        'I long for Thine embrace;',
        'Closer within Thine arms enfold me,',
        'I seek a resting place.'
      ],
      [
        'Closer to Thee, my Savior, draw me,',
        'Nor let me leave Thee more;',
        'Fain would I feel Thine arms around me,',
        'And count my wand’rings o’er.'
      ],
      [
        'Closer by Thy sweet Spirit draw me,',
        'Till I am all like Thee;',
        'Quicken, refine, and wash and cleanse me,',
        'Till I am pure and free.'
      ]
    ],
    englishChorus: [
      'Closer with the cords of love,',
      'Draw me to Thyself above;',
      'Closer draw me to Thyself above.'
    ]
  },
  {
    id: 'hymn-148',
    number: 148,
    title: 'Konse Konse na Yesu',
    writer: 'Jessie Brown Pounds, 1887; Music by Daniel B. Towner, 1887 (SECURITY)',
    englishTune: 'Anywhere With Jesus (Towner / SDAH #508 / Church Hymnal #338 / Christ in Song #328)',
    category: 'faith-and-trust',
    categoryBemba: 'Isubilo no Kutetekela',
    key: 'D Major',
    timeSignature: '6/8',
    scripture: 'Ilumbo 139:7-10 · Mateo 28:20 · Ukusokolola 14:4 · AbaHebere 13:5',
    isSample: false,
    melodicPreview: [66, 66, 67, 69, 69, 71, 69, 66, 62],
    verses: [
      [
        'Konse konse na Yesu kuti naya.',
        'Konse ngantungulula mu calo \'ci,',
        'Nga Yesu talipo tekuti ntemwe,',
        'Konse konse nge pwali kuti naya.'
      ],
      [
        'Konse konse na Yesu nshili neka.',
        'Nangu nkanwe ne fibusa fya calo;',
        'Nangu inshila ibe yabipisha,',
        'Nga Yesu alike kutifye naya.'
      ],
      [
        'Konse kuli Yesu ningasendama.',
        'Nangu ningashingulukwa ne mfifi,',
        'Ninjishiba \'kanjimya \'kwapenape,',
        'Konse kukaba Yesu ni kumwesu.'
      ]
    ],
    chorus: [
      'Konse fye. konse fye. tekuti ntine;',
      'Konse nga Yesu alipo kuti naya.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Anywhere with Jesus I can safely go,',
        'Anywhere He leads me in this world below;',
        'Anywhere without Him dearest joys would fade;',
        'Anywhere with Jesus I am not afraid.'
      ],
      [
        'Anywhere with Jesus I am not alone;',
        'Other friends may fail me, He is still my own;',
        'Though His hand may lead me over dreary ways,',
        'Anywhere with Jesus is a house of praise.'
      ],
      [
        'Anywhere with Jesus I can safely sleep,',
        'When the dark’ning shadows round about me creep,',
        'Knowing I shall waken never more to roam;',
        'Anywhere with Jesus will be home, sweet home.'
      ]
    ],
    englishChorus: [
      'Anywhere! anywhere! Fear I cannot know;',
      'Anywhere with Jesus I can safely go.'
    ]
  },
  {
    id: 'hymn-149',
    number: 149,
    title: 'Enda Mu Lubuto',
    writer: 'Asa Hull, 1876 (WALK IN THE LIGHT)',
    englishTune: 'Walk in the Light / Walk in the Light, the Lord Has Given (Hull)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ubumi bwa Bwina Kristu',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 1:7 · Yohane 8:12 · Ilumbo 119:105 · Efese 5:8',
    isSample: false,
    melodicPreview: [66, 66, 67, 69, 71, 69, 66, 62],
    verses: [
      [
        'E-nda mu lubuto wape-lwa',
        'lukutungulule,',
        '\'Mupa-shi kufuma ku mulu,',
        'Winga fumye mfifi'
      ],
      [
        'Enda mu lubuto lwe landwe,',
        'shiwi lya kwa Lesa,',
        'Lula batungulula bonse,',
        '\'Ba cine \'ba Mfumu.'
      ],
      [
        'Na-ngu mwabe mfifi ‘mo leya,',
        'Enda mu lubuto,',
        'Mfifi ‘letina ulubuto,',
        'Ku kwisa kwa Mfumu.'
      ],
      [
        'E-nda mu lubuto ulwakwe,',
        'Elyo \'kamutemwa.',
        'Kumu-temwa pano pa ca-lo,',
        'Cikacila kulya'
      ]
    ],
    chorus: [
      'E-nda mu lubuto, E-nda mu lubuto,',
      'E-nda mu lubuto, Mu lubuto ulwa Mfumu.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Walk in the light, the Lord has given,',
        'To guide thy steps aright;',
        'His Holy Spirit, sent from heav’n,',
        'Can cheer the darkest night.'
      ],
      [
        'Walk in the light of gospel truth,',
        'That shines from God’s own Word,',
        'A light to guide in early youth',
        'The faithful of the Lord.'
      ],
      [
        'Walk in the light; tho’ shadows dark',
        'Should fall across thy way,',
        'Darkness will flee before the light',
        'Of God’s eternal day.'
      ],
      [
        'Walk in the light, and thou shalt know',
        'The love of God to thee;',
        'The fellowship, so sweet below,',
        'In heav’n will sweeter be.'
      ]
    ],
    englishChorus: [
      'Walk in the light, walk in the light,',
      'Walk in the light, walk in the light of God.'
    ]
  },
  {
    id: 'hymn-150',
    number: 150,
    title: 'Abasepa Bali Kwi?',
    writer: 'Eben E. Rexford, 1870; Music by George F. Root, 1870 (REAPERS)',
    englishTune: 'Where Are the Reapers? / O Where Are the Reapers That Garner In (Root / SDAH #366 / Church Hymnal #468 / Christ in Song #510)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Imilimo no Kwebela',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 9:37-38 · Mateo 13:30 · Yohane 4:35-36 · Ukusokolola 14:14-16',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 66, 67, 69, 71, 71, 71],
    verses: [
      [
        'Yangu bakusepa nga bali kwi,',
        'Abengalobolola mu fibi,',
        'Ukulobolola ukwa cine,',
        'Kukana \'tusha basuke bapwe.'
      ],
      [
        'Kabiyeni mu tushila tonse,',
        'Kafwayeni ngano mu fisoso;',
        'Fwayeni na mu misebo monse,',
        'No kwisabengisha mu bufumu.'
      ],
      [
        'Mabala nayapya konse konse,',
        'Yalelindililo kusombolwa:',
        'Yakulisha, babomfi bacepa;',
        'Yal\'onaika nga twakokola.'
      ],
      [
        'Eco ishileni ne fikwakwa,',
        'Mwe bana mukolonganye ngano,',
        'Bombeni isuke Mfumu ise,',
        'Ikapwishe bulimi ne nseko.'
      ]
    ],
    chorus: [
      'Abakusepa nga bali kwi,',
      'Bakwisa bomba bulobololo?',
      'Abakutwafwa ukusepa,',
      'Kufumya bantu mu fyabipa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'O where are the reapers that garner in',
        'The sheaves of the good from the fields of sin?',
        'With sickles of truth must the work be done,',
        'And no one may rest till the “harvest home.”'
      ],
      [
        'Go out in the byways and search them all;',
        'The wheat may be there, though the weeds are tall;',
        'Then search in the highway, and pass none by,',
        'But gather them all for the home on high.'
      ],
      [
        'The fields all are ripening, and far and wide',
        'The world now is waiting the harvest tide:',
        'But reapers are few, and the work is great,',
        'And much will be lost should the harvest wait.'
      ],
      [
        'So come with your sickles a-gleaming clean,',
        'And gather the grains with no spots between,',
        'And come with the sheaves in the early morn,',
        'To crown the Lord Jesus in “harvest home.”'
      ]
    ],
    englishChorus: [
      'Where are the reapers? O who will come',
      'And share in the glory of the “harvest home”?',
      'O who will help us to garner in',
      'The sheaves of good from the paths of sin?'
    ]
  },
  {
    id: 'hymn-151',
    number: 151,
    title: 'Ntanda Kulya?',
    writer: 'Eliza E. Hewitt, 1897; Music by John R. Sweney, 1897 (BEAUTIFUL LAND / STARS IN MY CROWN)',
    englishTune: 'Will There Be Any Stars? / Will There Be Any Stars in My Crown? (Sweney / Christ in Song #553 / Church Hymnal #470)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ukwisa kwa kwa Kristu no Mulu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Daniele 12:3 · 1 Abena Tesalonika 2:19 · 2 Timote 4:8 · Ukusokolola 2:10',
    isSample: false,
    melodicPreview: [65, 65, 67, 65, 62, 65, 70, 70, 72, 74],
    verses: [
      [
        'Ndetontonkanya le-lo calo cisuma,',
        'Nkafika-ko bushi-ku bumo,',
        'Mu luse lwa Mupusushi nkeminin a,',
        'Mukabe ntanda mu citebo.'
      ],
      [
        'Mombe no kupepa mumaka ya Mfumu,',
        'Mbe nga kalinda uwa mweo,',
        'Kuti nkabe ne ntanda bulya bushiku,',
        'Lintu Yesu \'Kalumbaniwa,'
      ],
      [
        'Bushe cikaba shani \'lyonkamumona.',
        'Ilyo nkamupele fya bupe,',
        'Nkasekela ilyo nkaba mumusumba,',
        'No kufwi-kwe cite-bo kulya.'
      ]
    ],
    chorus: [
      'Bushe mukaba ne ntanda mu citebo,',
      'Ilyo a kasuba kakawa?',
      'Ilyo nkashibuka muma sano yakwe,',
      'Bushe nkaba ne ntanda kulya?'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'I am thinking today of that beautiful land',
        'I shall reach when the sun goeth down;',
        'When through wonderful grace by my Savior I stand,',
        'Will there be any stars in my crown?'
      ],
      [
        'In the strength of the Lord let me labor and pray,',
        'Let me watch as a winner of souls;',
        'That bright stars may be mine in the glorious day,',
        'When His praise like the sea-billow rolls.'
      ],
      [
        'O what joy will it be when His face I behold,',
        'Living gems at His feet to lay down;',
        'It would sweeten my bliss in the city of gold,',
        'Should there be any stars in my crown.'
      ]
    ],
    englishChorus: [
      'Will there be any stars, any stars in my crown',
      'When at evening the sun goeth down?',
      'When I wake with the blest in the mansions of rest,',
      'Will there be any stars in my crown?'
    ]
  },
  {
    id: 'hymn-152',
    number: 152,
    title: 'Landa Kuli Ine',
    writer: 'Leander L. Pickett, 1897; Music by Leander L. Pickett, after F. Campana, 1897 (SPEAK TO MY SOUL)',
    englishTune: 'Speak to My Soul / Speak to My Soul, Dear Jesus (Pickett / Christ in Song #554)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: '1 Samwele 3:9-10 · Ilumbo 85:8 · Yohane 10:3-4 · Mateo 28:20',
    isSample: false,
    melodicPreview: [67, 67, 67, 68, 70, 70, 72, 70, 67],
    verses: [
      [
        'Landa kuli- ‘ne Yesu, Ne shiwi lya luse,',
        'Ne shiwi lya kutemwa; "Taushele weka."',
        'Njiswila umuti-ma, Umfwe shiwi lyobe,',
        'Muti wa-ndi wange no kutasha Imwe.'
      ],
      [
        'Landa ku bana bobe, Batungululeni,',
        'Besulemo ukwanga, Besule kupepa,',
        'Baipele kuli \'we ne mitima yonse,',
        'Bwise bufumu bwenu, Tumumone,'
      ],
      [
        'Landa pamo nga kale, Njishibe fyo fwaya,',
        'Njishibe ncito yandi, Njisushishe funde,',
        'Lekeni mucindike noku mulumbanya,',
        'Ncite kufwaya kobe, Nshiku shandi shonse.'
      ]
    ],
    chorus: [
      'Landeni kuli ine, Shiwi lya mutembo,',
      '"Ukaba wa kucimfya, Ukaba muntungwa."',
      'Landa kuli \'ne Mfumu, Shiwi lya kutemwa,',
      'Landa kuli \'ne lyonse, Ng\'ufwe shiwi lyobe.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Speak to my soul, dear Jesus, speak now in tend’rest tone;',
        'Whisper in loving-kindness, “Thou art not left alone.”',
        'Open my heart to hear Thee, quickly to hear Thy voice,',
        'Fill Thou my soul with praises, let me in Thee rejoice.'
      ],
      [
        'Speak to Thy children ever, lead in the holy way;',
        'Fill them with joy and gladness, teach them to watch and pray.',
        'May they in consecration yield their whole lives to Thee,',
        'Hasten Thy coming kingdom, till our dear Lord we see.'
      ],
      [
        'Speak now as in the old time Thou didst reveal Thy will;',
        'Let me know all my duty, let me Thy law fulfill.',
        'Lead me to glorify Thee, help me to show Thy praise,',
        'Gladly to do Thy bidding, honor Thee all my days.'
      ]
    ],
    englishChorus: [
      'Speak Thou in softest whispers, whispers of love to me;',
      '“Thou shalt be always conq’ror, thou shalt be always free.”',
      'Speak Thou to me each day, Lord, always in tend’rest tone,',
      'Let me now hear Thy whisper, “Thou art not left alone.”'
    ]
  },
  {
    id: 'hymn-153',
    number: 153,
    title: 'Lelo Lyeka',
    writer: 'Sybil F. Partridge, 1877; Music by Franklin E. Belden, 1886 (JUST FOR TODAY)',
    englishTune: 'Just for Today / Lord, for Tomorrow and Its Needs (Belden / Christ in Song #563)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 6:11, 34 · Ilumbo 118:24 · 2 Abena Korinte 6:2 · AbaHebere 3:13',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Mfu-mu fya mailo tefyo, Nshi-lelomba;',
        'Nda-meni mfume ku bubi, Lelo line;',
        'Ni-sosa mashiwi yabi, Ya-shelelwe,',
        'Su-ngeni milomo yandi tela line.'
      ],
      [
        'Ni-ngabombe ncito yenu no kupepa;',
        'Mu-mashiwi mube \'luse, Lelo line:',
        'Nci-te ubufwayo bwenu, Ne cumfwilo;',
        'No-kuipela nemwine, Lelo line.'
      ],
      [
        'Nga umweo wandi lelo, Ine nafwa;',
        'Le-keni bulayo bwenu, Bube bwandi;',
        'Nshi-lelomba fya mailo, kano lelo;',
        'Mfu-mu munjikatilile, Lelo line.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Lord, for tomorrow and its needs, I do not pray;',
        'Keep me from ev’ry stain of sin, just for today;',
        'Let me no wrong or idle word, unthinking say;',
        'Set Thou a seal upon my lips, just for today.'
      ],
      [
        'I would both diligently work, and duly pray;',
        'I would be kind in word and deed, just for today;',
        'O make me strong to do Thy will, swift to obey;',
        'Willing to sacrifice myself, just for today.'
      ],
      [
        'And if today this life of mine should ebb away,',
        'O may Thy promises divine still be my stay;',
        'So for tomorrow and its needs I do not pray;',
        'O keep me, guide me, hold me, Lord, just for today.'
      ]
    ]
  },
  {
    id: 'hymn-154',
    number: 154,
    title: 'Kalinda Njeba',
    writer: 'Sidney S. Brewer, 1853; Music by William B. Bradbury, 1857 (DAWNING)',
    englishTune: 'Watchman, Tell Me / Watchman, Tell Me, Does the Morning (Bradbury / Christ in Song #734)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ukwisa kwa kwa Kristu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Esaya 21:11-12 · Mateo 24:32-33 · 1 Abena Tesalonika 4:16-17 · Ukusokolola 21:1-4',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 76, 74, 71, 67, 69, 71],
    verses: [
      [
        'Kalinda, njeba bushe u-bushiku buli shani?',
        'Bushe amalangililo ya kwisa yali \'pepi?',
        'We mulendo ima bwaca! Mona kasuba katula;',
        'Ima fwalila bwala ca; Lucelo na lufika.'
      ],
      [
        'Kalinda, mona lubuto lule butishe nshila;',
        'Malangililo pa calo, Yatwebo kwisa kwakwe;',
        'Lint\' ipenga likalila, Kwimya bonse \'basendama,',
        '\'Bashila bali mutulo, Kufwalo muyayaya.'
      ],
      [
        'Mona bwafika bushiku Bukulu bwe Sabata;',
        'Bonse natubilikishe, Bufumu bwapalama;',
        'Yangu! Namona pe shilya, Lulumbi lwenu Kenani;',
        'No musumba wa wamisha, Yerusalemu mupya.'
      ],
      [
        'Njeba fya musumba ulya, Wakulwa na Sahabu,',
        'Umusumba wa kwa Lesa, Wa cine wa mutende;',
        'Kwabe mpili shabekesha, Ukubeka nga Sahabu;',
        'Imimana ya wamisha, Yafimbwa na maluba.'
      ],
      [
        'Mone mpanga ilyapepi, Fitwalo tafikuba,',
        'Kulya kwaliba fyo kwanga! Mu mpanga yawamisha;',
        'Umfwe ciunda ca nyimbo, Icilesendwa no mwela;',
        'Minshipendwa ileimba, Twalaba nabo kulya.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Watchman, tell me, does the morning of fair Zion’s glory dawn?',
        'Have the signs that mark His coming yet upon thy pathway shone?',
        'Pilgrim, yes! arise, look round thee; light is breaking in the skies;',
        'Gird thy bridal robes around thee, morning dawns, arise! arise!'
      ],
      [
        'Watchman, see, the light is beaming brighter still upon thy way;',
        'Signs through all the earth are gleaming, omens of the coming day,',
        'When the Jubal trumpet, sounding, shall awake from earth and sea',
        'All the saints of God, now sleeping, clad in immortality.'
      ],
      [
        'Watchman, hail the light ascending of the grand, Sabbatic year;',
        'All with voices loud proclaiming that the kingdom now is near;',
        'Pilgrim, yes, I see just yonder, Canaan’s glorious heights arise;',
        'Salem, too, appears in grandeur, towering ’neath its sunlit skies.'
      ],
      [
        'Watchman, in the golden city, seated on His jasper throne,',
        'Zion’s King, arrayed in beauty, reigns in peace from zone to zone;',
        'There, on sunlit hills and mountains, golden beams serenely glow;',
        'Purling streams and crystal fountains, on whose banks sweet flowerets blow.'
      ],
      [
        'Watchman, see, the land is nearing, with its vernal fruits and flowers;',
        'On, just yonder — O, how cheering! bloom forever Eden’s bowers;',
        'Hark, the choral strains are ringing, wafted on the balmy air;',
        'See the millions, hear them singing, soon the pilgrims will be there.'
      ]
    ]
  },
  {
    id: 'hymn-155',
    number: 155,
    title: 'Shing\' anga Ali Mupepi',
    writer: 'William Hunter, 1859; Music arranged by John H. Stockton, 1874 (GREAT PHYSICIAN)',
    englishTune: 'The Great Physician Now Is Near (Stockton / SDAH #254 / Christ in Song #94)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka no Bulubulo',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Yeremia 8:22 · Mateo 9:12 · Imilimo 4:12 · Abena Filipi 2:9-11',
    isSample: false,
    melodicPreview: [70, 67, 63, 67, 70, 72, 70, 67, 65, 63],
    verses: [
      [
        'Shing’anga ali mupepi, Uwa luse ni Yesu;',
        'Lisansamusho mutima, Ishina lya kwa Yesu.'
      ],
      [
        'Lulumbi lube ku Mfumu. Ndemusumina Yesu,',
        'Nalilitemwa Ishina, Ishina lya kwa Yesu.'
      ],
      [
        'Lifumya fibi no mwenso, Ishina lya kwa Yesu;',
        'Ndatemwa ‘lyo ng\'ufwe shina Lisuma lya kwa Yesu.'
      ],
      [
        'Lint\' a-kalete citebo, Ca mweo no lulumbi;',
        'Tukekala \'kalatweba, Ifyalupusukilo.'
      ]
    ],
    chorus: [
      'I-mba lwimbo lusuma, Lwe-shina lya kwa Yesu;',
      '\'Shina ili lyacila, Yesu uwapalwa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'The great Physician now is near, the sympathizing Jesus;',
        'He speaks, the drooping heart to cheer, O hear the voice of Jesus!'
      ],
      [
        'All glory to the dying Lamb! I now believe in Jesus;',
        'I love the blessed Savior’s name, I love the name of Jesus.'
      ],
      [
        'His name dispels my guilt and fear; no other name but Jesus;',
        'O how my soul delights to hear the precious name of Jesus!'
      ],
      [
        'And when to that bright world above we rise to see our Jesus,',
        'We’ll sing around the throne of love the name, the name of Jesus.'
      ]
    ],
    englishChorus: [
      'Sweetest note in seraph song, sweetest name on mortal tongue;',
      'Sweetest carol ever sung, Jesus, blessed Jesus.'
    ]
  },
  {
    id: 'hymn-156',
    number: 156,
    title: 'Amashiwi ya Bukali',
    writer: 'Horatio R. Palmer (or D. K. P.), 1867; Music by Horatio R. Palmer, 1867 (LOVE ONE ANOTHER)',
    englishTune: 'Angry Words! O Let Them Never / Love One Another (Palmer / Christ in Song #581)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Uwikalo wa Bwina Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 12:36-37 · Efese 4:29, 31-32 · Yohane 13:34-35 · Yakobo 3:5-10',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 67, 65, 63],
    verses: [
      [
        'Amashiwi yabukali, Yeba mutunwa twenu,',
        'Eyabifya umutima Nokukowesha milomo'
      ],
      [
        'Citemwiko calibuta, Kabili camushilo.',
        'Lekeni mwiconaula. Namashiwi yashawama.'
      ],
      [
        'Amashiwi yabukali, Yasoswa mulubilo,',
        'Eyabifya umutima, Yonaula bucibusa'
      ]
    ],
    chorus: [
      '"Temwaneni" -- efyasose Mfumu,',
      'Bana umfwileni funde lyakwe,',
      '"Temwaneni" -- efyasose Mfumu.',
      'Bana umfwileni funde.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Angry words! O let them never from the tongue unbridled slip;',
        'May the heart’s best impulse ever check them ere they soil the lip.'
      ],
      [
        'Love is much too pure and holy, friendship is too sacred far,',
        'For a moment’s reckless folly thus to desolate and mar.'
      ],
      [
        'Angry words are lightly spoken, bitt’rest thoughts are rashly stirred,',
        'Brightest links of life are broken by a single angry word.'
      ]
    ],
    englishChorus: [
      '“Love one another,” thus saith the Savior;',
      'Children, obey the Father’s blest command;',
      '“Love one another,” thus saith the Savior;',
      'Children, obey the blest command.'
    ]
  },
  {
    id: 'hymn-157',
    number: 157,
    title: 'Ulya Uya Ilyo Alila',
    writer: 'Thomas Hastings, 1836; Music by Charles S. Cable (HARVEST TIME)',
    englishTune: 'Harvest Time / He That Goeth Forth With Weeping (Cable / Christ in Song #588)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Ukubombela Lesa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Ilumbo 126:5-6 · Mateo 9:37-38 · Abena Galatia 6:9',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 68, 67, 65],
    verses: [
      [
        'Ulya uya ilya lila, Nokutanda imbuto-o,',
        'Ukwabula ukunaka, Akabelelwo luse.'
      ],
      [
        'Kalabalika kasuba, Ne mfula ilaloka-a,',
        'Ifitwalo filakula namaka yakumulu.'
      ],
      [
        'Tande mbuto wilanaka, witina winashiwa-a,',
        'Nangu kube macusho, Ukaba mubuseko.'
      ]
    ],
    chorus: [
      'Shilolesha! We mulimi, Imbuto nomba shapya;',
      'Mona amabala yapya yapembwa Ukusepwa'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'He that goeth forth with weeping, bearing precious seed in love,',
        'Never tiring, never sleeping, findeth mercy from above.'
      ],
      [
        'Soft descend the dews of heaven, bright the rays celestial shine;',
        'Precious fruits will thus be given, thro’ an influence all divine.'
      ],
      [
        'Sow thy seed, be never weary, let no fears thy soul annoy;',
        'Be the prospect ne’er so dreary, thou shalt reap the fruits of joy.'
      ]
    ],
    englishChorus: [
      'Lo, the scene of verdure bright’ning! See the rising grain appear;',
      'Look! the waving fields are whit’ning, for the harvest time is near.'
    ]
  },
  {
    id: 'hymn-158',
    number: 158,
    title: 'Kusombole Calo Nakupalama',
    writer: 'Franklin E. Belden, 1894 (HASTEN ON, GLAD DAY)',
    englishTune: 'Hasten On, Glad Day! / The World’s Glorious Harvest (Belden / Christ in Song #589)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Ukubombela Lesa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Mateo 9:37-38 · Mateo 13:30, 39 · Ukusokolola 14:14-16 · Yohane 4:35-36',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 67, 68, 67, 65, 63],
    verses: [
      [
        'Kusombole calo nakupalama,',
        'Imfumu leita bakusombola,',
        'Ingano nashipya kutal\'apepi,',
        'Shilongelwe nombe \'ilyo talaisa.'
      ],
      [
        'Ulucelo lulya luli fya pepi,',
        'Umo mo tatwakaponye filamba;',
        'Nangu bubi bwali bifishe ngano,',
        'Shikalonganikwa kufike mpela.'
      ],
      [
        'Cawa-mo kubomba ukwa kutemwa!',
        'Pantu kwaba nga kukafukauka,',
        'Kutwita nokutulango kubomba;',
        'Ala kutemwa kubombe milimo.'
      ]
    ],
    chorus: [
      '\'Sa we bu-shiku, Ubwaku-sekela,',
      'Sendeni mipo, Ku-mu-shi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'The world’s glorious harvest is fast drawing on,',
        'The Master is calling His reapers to come;',
        'The grain bright and golden, in fields far and near,',
        'Is ripe for the garner when He shall appear.'
      ],
      [
        'That morn everlasting, that day free from tears,',
        'Is swiftly approaching as on roll the years;',
        'The wheat, rudely scattered by sin’s cruel blast,',
        'Then hasten to gather e’er autumn be past.'
      ],
      [
        'O sweet is the labor that floweth from love!',
        'A stream never failing, whose Fount is above;',
        '’Tis love that invites us, ’tis love points the field,',
        '’Tis love wields the sickle, and wondrous the yield.'
      ]
    ],
    englishChorus: [
      'Hasten on, glad day, bear the sheaves away;',
      'Hasten on, glad day, bear us home.'
    ]
  },
  {
    id: 'hymn-159',
    number: 159,
    title: 'Mfumu ‘Ne Ndamufwaisha',
    writer: 'Franklin E. Belden, 1886 (HOW MUCH I NEED THEE)',
    englishTune: 'How Much I Need Thee / Blessed Lord, How Much I Need Thee (Belden / Christ in Song #597)',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Yohane 15:5 · 2 Abena Korinte 12:9 · AbaHebere 4:16 · Ilumbo 86:1-4',
    isSample: false,
    melodicPreview: [67, 71, 74, 71, 67, 69, 71, 69, 67],
    verses: [
      [
        'Mfumu \'ne, Ndamufwaisha! Nangu ndi mubi mpofu;',
        'Mundame, muntungulule, ukuti mbe na maka.'
      ],
      [
        'Mfwikeni mwingila wenu, uwandi walibipa;',
        'Nangeni bunake bwandi, Ekuti nsange amaka.'
      ],
      [
        'Ndi bwino nga mwe mwandama, Nekafye kuti nawa!',
        'Twende nemwe munshileyi, Uli lubuto lwandi'
      ],
      [
        'Ifili kuntanshi yandi; Buseko nangu bubi,',
        'Nshakafume fye kuli we, Niwe fye wakungafwa.'
      ]
    ],
    chorus: [
      'We mfumu nshita sho-nse',
      'Ndakufwa-isha lyo-nse',
      'Undame, Mfumu yandi,',
      'Unsunge nshita shonse.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Blessed Lord, how much I need Thee! Weak and sinful, poor and blind;',
        'Take my trembling hand and lead me, strength and sight in Thee I find.'
      ],
      [
        'Clothe me with Thy robe of meekness, stained with sin this robe of mine;',
        'Teach me first to feel my weakness, then to plead for strength divine.'
      ],
      [
        'Safe am I if Thou dost guide me; trusting self, how soon I fall!',
        'Walk life’s rugged way beside me, Thou, my light, my life, my all.'
      ],
      [
        'Then whate’er the future bringeth, smiles of joy or tears of grief,',
        'Still to Thee my spirit clingeth, Thou art still my soul’s relief.'
      ]
    ],
    englishChorus: [
      'Ev’ry hour, ev’ry hour, Blessed Lord, how much I need Thee!',
      'Ev’ry hour, ev’ry hour, Savior, keep me ev’ry hour.'
    ]
  },
  {
    id: 'hymn-160',
    number: 160,
    title: 'Nindaminwa Fye Yesu',
    writer: 'Edith G. Cherry, c. 1895; Music by Ira Allan Sankey (KEPT FOR JESUS)',
    englishTune: 'Kept for Jesus / Oh, to Be Kept for Jesus (I. Allan Sankey / Christ in Song #598)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeelesha',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: '1 Petelo 1:5 · Yuda 1:24 · 2 Timote 1:12 · Abena Kolose 3:3-4',
    isSample: false,
    melodicPreview: [62, 66, 69, 71, 69, 66, 64, 62],
    verses: [
      [
        'Nindaminwa fye Yesu! mpe-lwa maka yakwe;',
        'Nokufuma kubu-bi, Kwendo mwaendele'
      ],
      [
        '\'Kulaminwa fye Ye-su! Kucitefya fwaya,',
        'Neite bufwayo bwa-kwe, Mubombele ine.'
      ],
      [
        'Yesu munsunge bwino, Ntaluke fya calo,',
        'Uwaitwa-la panshi, Wabuto mu-tima.'
      ],
      [
        '\'Kulaminwa fye Ye-su kuba wakwe lyonse,',
        'Ukubafye uwa-kwe, ukwamuya-yaya.'
      ]
    ],
    chorus: [
      'Nalaminwa fye Yesu! Ndi pankasa shakwe;',
      'Nshilipwe cintu, Ndifyo wafye, kano Yesu eka.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Oh, to be “Kept for Jesus!” Kept, by the pow’r of God;',
        'Kept, from the world unspotted, treading where Jesus trod.'
      ],
      [
        'Oh, to be “Kept for Jesus!” Serving as He shall choose;',
        '“Kept” for the Master’s pleasure; “Kept” for the Master’s use.'
      ],
      [
        'Oh, to be “Kept for Jesus!” Kept from the world apart;',
        'Lowly in mind and spirit, gentle and pure in heart.'
      ],
      [
        'Oh, to be “Kept for Jesus!” Oh, to be all His own!',
        'Kept, to be His forever, kept to be His alone!'
      ]
    ],
    englishChorus: [
      'Oh, to be “Kept for Jesus!” Lord at Thy feet I fall;',
      'I would be “nothing, nothing, nothing;” Thou shalt be “all in all.”'
    ]
  },
  {
    id: 'hymn-161',
    number: 161,
    title: 'Naliba No Wantemwa',
    writer: 'Mrs. L. Shorey, 1890; Music by Joseph D. Little (MY LORD AND I)',
    englishTune: 'My Lord and I / I Have a Friend So Precious (Little / SDAH #456 / Christ in Song #601)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukubishanya na Kristu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 11:29 · Yohane 15:14-15 · Amapinda 18:24 · Imilimo 4:13',
    isSample: false,
    melodicPreview: [67, 69, 71, 71, 71, 71, 71, 69, 67, 69],
    verses: [
      [
        'Naliba nowantemwa, Cibusa wacine;',
        'Alintemwisha kwacine, Ecibusa wandi;',
        'Teti mfume uko ali, Kano fye apepi,',
        'Nokwikala fye pamo, Ine na-nkwe.'
      ],
      [
        'Naliba uwanaka Mfumu yalishiba,',
        'Ndashintilila ukwali, Alangafwa ine;',
        'Alantungulula ine, Lubuto munshila,',
        'Tulendelafye pamo, Ine na-nkwe.'
      ],
      [
        'Ubulanda ‘bo mweba, Nobuseko bwandi,',
        'Ndamweba ifinsekesha, Pamo nefimbifya,',
        'Alanjeba fyakucita. Alanjebo kwansha,',
        'Tulalandila pamo Ine na-nkwe.'
      ],
      [
        'Alishiba ndafwaya, Kupususha bambi,',
        'Alanjeba kuya ine kuya mulandila,',
        'Kuya sose ilandwelyo. Neco afwilile,',
        'Tula bombela pamo, Ine na-nkwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I have a Friend so precious, so very dear to me,',
        'He loves me with such tender love, He loves so faithfully;',
        'I could not live apart from Him, I love to feel Him nigh,',
        'And so we dwell together, My Lord and I.'
      ],
      [
        'Sometimes I’m faint and weary, He knows that I am weak,',
        'And as He bids me lean on Him, His help I gladly seek;',
        'He leads me in the paths of light, beneath a sunny sky,',
        'And so we walk together, My Lord and I.'
      ],
      [
        'I tell Him all my sorrows, I tell Him all my joys,',
        'I tell Him all that pleases me, I tell Him what annoys;',
        'He tells me what I ought to do, He tells me how to try,',
        'And so we talk together, My Lord and I.'
      ],
      [
        'He knows that I am longing some weary soul to win,',
        'And so He bids me go and speak the loving word for Him;',
        'He bids me tell His wondrous love, and why He came to die,',
        'And so we work together, My Lord and I.'
      ]
    ]
  },
  {
    id: 'hymn-162',
    number: 162,
    title: 'Yesu Alentungulula',
    writer: 'Fanny J. Crosby, 1875; Music by Robert Lowry, 1875 (ALL THE WAY)',
    englishTune: 'All the Way My Savior Leads Me (Lowry / SDAH #516 / Christ in Song #602)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Esaya 48:17 · Amalumbo 23:1-3 · Amalumbo 32:8 · 2 Abena Korinte 12:9 · Mateo 28:20',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 70, 68, 72, 75, 73, 72, 70],
    verses: [
      [
        'Yesu alentungulula; Bushe mfwaye na cimo?',
        'Ntwishike uluse lwakwe, Untungulula lyonse?',
        'Umutende waku mulu, M\'busumino ndi nao',
        'Conse ii-cinga mponena, Kut\'a ncitila bwino,',
        'Conse ii-cinga mponena, Kut\'a ncitila bwino.'
      ],
      [
        'Yesu alentungulula, Mo nyenda lansekesha;',
        'Alangafwa mumatunko, Nokumpele cakulya,',
        'Nangu nanaka ukwenda, Nomutima wauma,',
        'Kuntanshi yandi namona, Amenshi yakungafwa,',
        'Kuntanshi yandi narnona, Amenshi yakungafwa.'
      ],
      [
        'Yesu alentungulula, Nokutemwa kwa cine',
        'Alandaya icifulo, Mung\'anda yakwa Tata;',
        'Ilyo nkemina ku mweo, Nkapupuka kumulu,',
        'Lukabe lwimbo penape, Yesale ntungulula,',
        'Lukabe lwimbo penape, Yesale ntungulula.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'All the way my Savior leads me; what have I to ask beside?',
        'Can I doubt His tender mercy, who through life has been my Guide?',
        'Heav’nly peace, divinest comfort, here by faith in Him to dwell!',
        'For I know, whate’er befall me, Jesus doeth all things well;',
        'For I know, whate’er befall me, Jesus doeth all things well.'
      ],
      [
        'All the way my Savior leads me, cheers each winding path I tread,',
        'Gives me grace for every trial, feeds me with the living bread.',
        'Though my weary steps may falter, and my soul athirst may be,',
        'Gushing from the Rock before me, lo! a spring of joy I see;',
        'Gushing from the Rock before me, lo! a spring of joy I see.'
      ],
      [
        'All the way my Savior leads me; oh, the fullness of His love!',
        'Perfect rest to me is promised in my Father’s house above.',
        'When my spirit, clothed immortal, wings its flight to realms of day,',
        'This my song through endless ages: Jesus led me all the way;',
        'This my song through endless ages: Jesus led me all the way.'
      ]
    ]
  },
  {
    id: 'hymn-163',
    number: 163,
    title: 'Epo Ndi Ntumeni',
    writer: 'Daniel March, 1868; Music arranged by Franklin E. Belden / W. A. Mozart (ELLESDIE / FILLMORE)',
    englishTune: 'Here Am I, Send Me / Hark! the Voice of Jesus Calling (SDAH #359 / Christ in Song #641)',
    category: 'mission-and-evangelism',
    categoryBemba: 'Ukubombela Lesa',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Esaya 6:8 · Mateo 9:37-38 · 1 Samwele 3:10 · Ukufuma 17:12',
    isSample: false,
    melodicPreview: [65, 65, 69, 72, 70, 69, 67, 65],
    verses: [
      [
        'Umfwa Yesu aleita, "Nani \'leya kubomba?"',
        'Mabala nayapya kale, "Nani ‘leya sombola?"',
        'Shikulu abilikisha, Cilambu kapelwafye;',
        'Nan\'engasuka no kwanga, Epo ndi tuma Mfumu'
      ],
      [
        'Nga tekuti iwe uye, Kwishilya lya fimana;',
        'Kuti wabasanga bantu, Abalya pepi nobe,',
        'Tetyu lande ngo mungeli, Nangufye nga Paulo,',
        'Landa kutemwa kwa Yesu, Bebyatya limufwila.'
      ],
      [
        'Nga teti ube kalinda, pa mulu wa Zioni,',
        'Kulange nshita yamulu, Nomutende kubantu,',
        'Ukupepelela bambi Kucite ncito yakwe,',
        'Kuti waba nga Aroni, Uwa afwile Mose.'
      ],
      [
        'Lintu abantu balefwa, Shikulu alekwita;',
        'Leko munt\'eumfwo leti, \'Ne teti ncite kantu;',
        'Kabombe ncito \'kupela, temwa kumubombela,',
        'Asuka ily\'alekwita, Tila ndi pano ntuma.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Hark! the voice of Jesus calling, “Who will go and work today?',
        'Fields are white, and harvests waiting, who will bear the sheaves away?”',
        'Loud and long the Master calleth, rich reward He offers free;',
        'Who will answer, gladly saying, “Here am I, send me, send me”?'
      ],
      [
        'If you cannot cross the ocean, and the heathen lands explore,',
        'You can find the lost around you, you can help them at your door;',
        'If you cannot speak like angels, if you cannot preach like Paul,',
        'You can tell the love of Jesus, you can say He died for all.'
      ],
      [
        'If you cannot be a watchman, standing high on Zion’s wall,',
        'Pointing out the path to heaven, off’ring life and peace to all,',
        'With your prayers and with your bounties you can do what heav’n demands;',
        'You can be like faithful Aaron, holding up the prophet’s hands.'
      ],
      [
        'While the souls of men are dying, and the Master calls for you,',
        'Let none hear you idly saying, “There is nothing I can do!”',
        'Gladly take the task He gives you, let His work your pleasure be;',
        'Answer quickly when He calleth, “Here am I, send me, send me.”'
      ]
    ]
  },
  {
    id: 'hymn-164',
    number: 164,
    title: 'Pamakasa Yakwa Yesu',
    writer: 'J. H., 1878; Tune: HUMILITY (Christ in Song #648)',
    englishTune: 'At the Feet of Jesus / Sitting at the Feet of Jesus (HUMILITY / Christ in Song #648)',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeelesha',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Luka 10:39 · Luka 7:38 · Abena Filipi 2:5 · 1 Abena Korinte 1:30',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69],
    verses: [
      [
        'Pa-makasa yakwa Yesu, ndomfwa mashiwi yakwe!',
        'Mucifulo ica wa-ma nsangwe mwenshiku shonse,',
        'Pa-makasa yakwa Yesu, ndamone fya kunuma,',
        'Kutemwa kwakwo kwacila, kuwamyo mweo wandi.'
      ],
      [
        'Ni-kwi ninga sange shuko? Kano pa nkasa shakwe,',
        'Nshe-po bubi no bulanda, elyo nsange kutusha;',
        'Pa-makasa yakwa Yesu, ntule bulanda bwandi.',
        'Nda-sange cikuku ca-kwe noku nsansamusha pe.'
      ],
      [
        'Mpa-leni ne mupusushi, lyondi pa nkasa shenu',
        'Umbeleleko uluse, mone icinso cobe;',
        'Nkwate ulya umutima. uwaba muli Yesu,',
        'Nshininkishe ndi na Yesu, ubololoke bwandi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Sitting at the feet of Jesus, O what words I hear Him say!',
        'Happy place! so near, so precious! May it find me there each day;',
        'Sitting at the feet of Jesus, I would look upon the past,',
        'For His love has been so gracious, it has won my heart at last.'
      ],
      [
        'Sitting at the feet of Jesus, where can mortal be more blest?',
        'There I lay my sins and sorrows, and, when weary, find sweet rest;',
        'Sitting at the feet of Jesus, there I love to weep and pray,',
        'While I from His fullness gather grace and comfort ev’ry day.'
      ],
      [
        'Bless me, O my Savior, bless me, as I’m waiting at Thy feet,',
        'O look down in love upon me, let me see Thy face so sweet;',
        'Give me, Lord, the mind of Jesus, make me holy as He is,',
        'May I prove I’ve been with Jesus, who is all my righteousness.'
      ]
    ]
  },
  {
    id: 'hymn-165',
    number: 165,
    title: 'Natemwa',
    writer: 'Anonymous / John A. Granade, c. 1804; Music by Jeremiah Ingalls, 1805 (I LOVE THEE)',
    englishTune: 'I Love Thee / I Love Thee, My Lord (Ingalls / SDAH #236 / Christ in Song #663)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukutemwa Kristu',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: '1 Yohane 4:19 · Yohane 14:15 · 1 Petelo 1:8 · Ilumbo 116:1-2',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 65],
    verses: [
      [
        'Natemwa, natemwa. na-temwe Mfumu;',
        'Natemwo m\'pusushi, na-temwa Lesa,',
        'Nalikutemwisha, we walishiba;',
        'Nga nali-kutemwa, mu-lifyo ncita.'
      ],
      [
        'Ndeanga, ndeanga, ndeanga nganshi;',
        'Ukucankwa kwandi, ukushakapwe;',
        'Ndefuluka kulya, kwabo bulayo;',
        'Ukuka-ba Yesu \'lyo na bangeli.'
      ],
      [
        'Mupusu-shi wandi, Nshuka ngepoli,',
        'Niwe mweo wandi, kwanga butusho;',
        'Ukute-mwa kobe, Elwimbo lwandi;',
        'Nda sansamushiwa, no luse lobe.'
      ],
      [
        'Nani wa-ba ngo mupu-sushi wandi?',
        'Alinte-mwa ine, ‘langafwa lyonse;',
        'Nakula mutasha, Nokumwimbila;',
        'Nokutemwa lyonse, mu-tima wandi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I love Thee, I love Thee, I love Thee, my Lord;',
        'I love Thee, my Savior, I love Thee, my God;',
        'I love Thee, I love Thee, and that Thou dost know;',
        'But how much I love Thee my actions will show.'
      ],
      [
        'I’m happy, I’m happy, oh, wondrous account!',
        'My joys are immortal, I stand on the mount!',
        'I gaze on my treasure, and long to be there,',
        'With Jesus and angels, and kindred so dear.'
      ],
      [
        'O Jesus, my Savior, with Thee I am blest,',
        'My life and salvation, my joy and my rest;',
        'Thy name be my theme, and Thy love be my song;',
        'Thy grace shall inspire both my heart and my tongue.'
      ],
      [
        'Oh, who’s like my Savior? He’s Salem’s bright King;',
        'He smiles, and He loves me, and helps me to sing;',
        'I’ll praise Him, I’ll praise Him, with notes loud and clear,',
        'While rivers of pleasure my spirit do cheer.'
      ]
    ]
  },
  {
    id: 'hymn-166',
    number: 166,
    title: 'Mwe Cilibwe ca Kale',
    writer: 'Augustus M. Toplady, 1776; Music by Thomas Hastings, 1830 (TOPLADY)',
    englishTune: 'Rock of Ages / Rock of Ages, Cleft for Me (TOPLADY / SDAH #300 / Christ in Song #448)',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka no Bulubulo',
    key: 'Bb Major',
    timeSignature: '3/4',
    scripture: 'Ukufuma 33:22 · 1 Abena Korinte 10:4 · Ilumbo 18:2 · Yohane 19:34',
    isSample: false,
    melodicPreview: [70, 70, 67, 70, 69, 67, 65, 67, 69, 70],
    verses: [
      [
        'Mwecilibwe ca kale, Kamfisame muli Mwe,',
        'Umulopa na menshi, Fyafumine muli Mwe',
        'Ekundapwa kwa fibi, Nsangululwe kububi.'
      ],
      [
        'Milimo ya maboko, Tetici-te mafunde,',
        'Maka yandi nemwine, Nokuponya filamba,',
        'Tekuti fi fintule, Kanofye Imwe Yesu.'
      ],
      [
        'Takuli co naleta, Njikate ku lupanda;',
        'Mumfwike ndi no bwamba, Ngafwa, nimbulwa maka;',
        'Naisa kuli Imwe, Munsambe ninkesa fwa.'
      ],
      [
        'Ilyo nkaleko mweo, Yakashibata menso;',
        'Nokwikala mu mfifi, Ndolele bupingulo;',
        'Mwe cili-bwe cakale, Kamfisame muli mwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Rock of Ages, cleft for me, let me hide myself in Thee;',
        'Let the water and the blood, from Thy wounded side which flowed,',
        'Be of sin the double cure, save from wrath and make me pure.'
      ],
      [
        'Not the labors of my hands can fulfill Thy law’s demands;',
        'Could my zeal no respite know, could my tears forever flow,',
        'All for sin could not atone; Thou must save, and Thou alone.'
      ],
      [
        'Nothing in my hand I bring, simply to the cross I cling;',
        'Naked, come to Thee for dress; helpless, look to Thee for grace;',
        'Foul, I to the fountain fly; wash me, Savior, or I die.'
      ],
      [
        'While I draw this fleeting breath, when mine eyes shall close in death,',
        'When I soar to worlds unknown, see Thee on Thy judgment throne,',
        'Rock of Ages, cleft for me, let me hide myself in Thee.'
      ]
    ]
  },
  {
    id: 'hymn-167',
    number: 167,
    title: 'Citendekelo Ici',
    writer: '"K" in John Rippon\'s Selection of Hymns, 1787; Traditional American melody (FOUNDATION)',
    englishTune: 'How Firm a Foundation / Firm Foundation (FOUNDATION / SDAH #509 / Christ in Song #409)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Esaya 43:1-2 · 2 Timote 2:19 · AbaHebere 13:5 · 1 Abena Korinte 3:11',
    isSample: false,
    melodicPreview: [68, 68, 68, 70, 72, 72, 70, 72, 73, 75],
    verses: [
      [
        'Cite-ndekelwe ci mwebashila ba Mfumu,',
        'Bucetekelo bwenu mwishiwi lyakwe,',
        'Cinshi cimbi cacila ci casosele;',
        'Iseni kumupusushi mwe mwise mufisame,',
        'Iseni mwe ku mupusushi mufisame.'
      ],
      [
        'Nangu nkakwitila mumenshi yatali,',
        'Mimana yamacusho tayakasende',
        'Amacusho yobe yakaba mapalo,',
        'Pantu nkaba naimwe mumacusho fye yonse,',
        'Nokukushilisha mumacusho fye yonse.'
      ],
      [
        'Namgu ukende mumacusho yamulilo,',
        'Cikuku candi cikalaba fye nobe;',
        'Nangu mucilunga camulilo mo kaba,',
        '\'Kasungululwa bwino pamo fye nga Golide;',
        'Mulilo ukafumya fyonse fyabipa.'
      ],
      [
        'Mutima ushintilila fye kuli Yesu,',
        'Nshakatale ngusha weka kubalwani;',
        'Nangu fya kashingulukwa nama cusho,',
        'Nshamulekeleshe Nshakafume kuntwali;',
        'Nshakatale ne Mfumu fye ukuntwali.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'How firm a foundation, ye saints of the Lord,',
        'Is laid for your faith in His excellent Word!',
        'What more can He say than to you He hath said,',
        'To you who for refuge to Jesus have fled?',
        'To you who for refuge to Jesus have fled?'
      ],
      [
        '“When through the deep waters I call thee to go,',
        'The rivers of sorrow shall not overflow;',
        'For I will be with thee, thy troubles to bless,',
        'And sanctify to thee thy deepest distress,',
        'And sanctify to thee thy deepest distress.”'
      ],
      [
        '“When through fiery trials thy pathway shall lie,',
        'My grace, all-sufficient, shall be thy supply;',
        'The flame shall not hurt thee; I only design',
        'Thy dross to consume, and thy gold to refine,',
        'Thy dross to consume, and thy gold to refine.”'
      ],
      [
        '“The soul that on Jesus doth lean for repose,',
        'I will not, I will not desert to his foes;',
        'That soul, though all hell should endeavor to shake,',
        'I’ll never, no never, no never forsake,',
        'I’ll never, no never, no never forsake!”'
      ]
    ]
  },
  {
    id: 'hymn-168',
    number: 168,
    title: 'Jehova Mucemi Wandi',
    writer: 'James Montgomery, 1822; Traditional German melody (GOSHEN)',
    englishTune: 'The Lord Is My Shepherd (GOSHEN / Christ in Song #665 / #480)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 23:1-6 · Yohane 10:11-14 · 1 Petro 2:25',
    isSample: false,
    melodicPreview: [59, 67, 67, 69, 71, 71, 69, 67, 69, 71],
    verses: [
      [
        'Yehova muceni wandi nshakakabile kantu,',
        'Andi-sha na mumulemfwe uteku ine ntushe,',
        'Ala-ntungulula \'ne ku menshi yasuma,',
        'Ambwesha mu nshila Antungulula mumacusho.'
      ],
      [
        'Kabili lyo nyenda mu mupokapoka uwa-mfwa,',
        'Mwandi niwe kafwa wandi, nshiletina bubi;',
        'Nkonto yobe no mutambu fyakulansunga:',
        'Teku-ti ububi bwise kuli-ne ngoli \'pepi.'
      ],
      [
        'Wang\'anshikile cintamba candi ilyo ndecula;',
        'Nama-palo yengi luko-mbo lwandi lwaisula;',
        'Amafuta yawamisha mwansu-bo mutwe.',
        'Cinshi ningepusha ukucilo kusungwa ngo ku'
      ],
      [
        'Mfumu lekeni busuma bwenu \'bo bufulishe,',
        'Lyonse nakula mukonka nsuke mfike ku mwenu;',
        'Ndefwa-ye nshila ya kale umo baendele;',
        'Nokwe-nda munshila yabo kufika naku mulu'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'The Lord is my Shepherd, no want shall I know;',
        'I feed in green pastures, safe-folded I rest;',
        'He leadeth my soul where the still waters flow,',
        'Restores me when wand’ring, redeems when oppressed.'
      ],
      [
        'Through the valley and shadow of death though I stray,',
        'Since Thou art my guardian, no evil I fear;',
        'Thy rod shall defend me, Thy staff be my stay;',
        'No harm can befall, with my Comforter near.'
      ],
      [
        'In the midst of affliction my table is spread;',
        'With blessings unmeasured my cup runneth o’er;',
        'With perfume and oil Thou anointest my head;',
        'O what shall I ask of Thy providence more?'
      ],
      [
        'Let goodness and mercy, my bountiful God,',
        'Still follow my steps till I meet Thee above;',
        'I seek by the path which my forefathers trod,',
        'Through the land of their sojourn, Thy kingdom of love.'
      ]
    ]
  },
  {
    id: 'hymn-169',
    number: 169,
    title: 'We Mpyani ya Bufumu',
    writer: 'Anonymous (Advent Hymns, 1854); Lowell Mason (RODMAN)',
    englishTune: 'Heir of the Kingdom / Heirs of the Kingdom (RODMAN / SDAH #594 / Christ in Song #679)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Yakobo 2:5 · Luka 21:28 · 1 Abena Tesalonika 5:6 · Ukusokolola 22:12',
    isSample: false,
    melodicPreview: [70, 70, 70, 72, 74, 72, 70, 69, 67, 65],
    verses: [
      [
        'We mpyani ya bufumu walalila nshi?',
        'Wa-lalila nshi pepi no mushi?',
        'Ala endesha imo fwale nkwela,',
        'We mpyani ya bufumu wa celwa.'
      ],
      [
        'Ku shumfwana pakati ka mishobo,',
        'Nabatina mwenso wabekata,',
        'Umfwa uku-luluma kwe celeta,',
        'We mpyani yabufumu endesha.'
      ],
      [
        'Leko kukonko lunkumbwa lwa calo!',
        'Muno lulumbi lwaluko lwapwa;',
        'Fuma mufikakilo fya mu calo,',
        'We mpyani ya bufumu fumako.'
      ],
      [
        'Sansula menso lolesha pantanshi;',
        'Ululumbi lwa mfumu lwaisa,',
        'Ala-alifye pepi nokufika;',
        'We mpyani ya bufum\' anga wimbe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Heir of the kingdom, O why dost thou slumber?',
        'Why art thou sleeping so near thy blest home?',
        'Wake thee, arouse thee, and gird on thine armor,',
        'Speed, for the moments are hurrying on.'
      ],
      [
        'Earth’s mighty nations, in strife and commotions,',
        'Tremble with terror, and sink in dismay;',
        'Listen, ’tis naught but the chariot’s loud rumbling;',
        'Heir of the kingdom, no longer delay.'
      ],
      [
        'Stay not, O stay not for earth’s vain allurements,',
        'See how its glory is passing away;',
        'Break the strong fetters the foe hath bound o’er thee;',
        'Heir of the kingdom, turn, turn thee away.'
      ],
      [
        'Keep the eye single, the head upward lifted;',
        'Watch for the glory of earth’s coming King;',
        'Lo! O’er the mountaintops light is now breaking,',
        'Heirs of the kingdom, rejoice ye and sing.'
      ]
    ]
  },
  {
    id: 'hymn-170',
    number: 170,
    title: 'Mfumu na Kabumba',
    writer: 'Anne Steele, 1760; Traditional melody (EL KADER)',
    englishTune: 'My Maker and My King (EL KADER / SDAH #15 / Christ in Song #689)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kupepa',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 95:6 · Amalumbo 100:3 · Amalumbo 103:1-2 · 1 Abena Korinte 4:7',
    isSample: false,
    melodicPreview: [62, 66, 69, 69, 71, 69, 67, 66, 64, 62],
    verses: [
      [
        'Mfumu nakabumba, E-ko mfumya fyonse;',
        'Ukupa kobe cishima ko mfumya mapalo;',
        'Ukupa kobe cishima ko mfu-mya mapalo.'
      ],
      [
        'Ndi cibumbwa cobe, E-konsango mweo;',
        'Mfumu nendafilwa kutasha mapalo yobe:',
        'Mfumu nendafilwa kutasha ma-palo yobe.'
      ],
      [
        'Cinshi ninga kupa, Mfu-mu fyonse fyobe;',
        'Ukutemwa kobe kuli ifwe kutashiwe;',
        'Ukutemwa kobe kuli ifwe kutashiwe.'
      ],
      [
        'Icukuku cobe ci-nkosho mutima;',
        'Leke shiwi no bufwayo fibe fyobe pefye.',
        'Leke shiwi no bufwayo fibe fyobe pefye.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'My Maker and my King, to Thee my all I owe;',
        'Thy sovereign bounty is the spring whence all my blessings flow;',
        'Thy sovereign bounty is the spring whence all my blessings flow.'
      ],
      [
        'The creature of Thy hand, on Thee alone I live;',
        'My God, Thy benefits demand more praise than I can give;',
        'My God, Thy benefits demand more praise than I can give.'
      ],
      [
        'Lord, what can I impart when all is Thine before?',
        'Thy love demands a thankful heart; the gift, alas! how poor;',
        'Thy love demands a thankful heart; the gift, alas! how poor.'
      ],
      [
        'O let Thy grace inspire my soul with strength divine;',
        'Let every word and each desire, and all my days be Thine;',
        'Let every word and each desire, and all my days be Thine.'
      ]
    ]
  },
  {
    id: 'hymn-171',
    number: 171,
    title: 'We Kalinda wa Zion',
    writer: 'Anonymous (Adventist Pioneer Hymns, 1855); Thomas Hastings, 1830 (ZION)',
    englishTune: 'What of the Night? / Watchmen, on the Walls of Zion (ZION / SDAH #601)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'D Major',
    timeSignature: '3/4',
    scripture: 'Esaya 21:11-12 · 2 Petro 1:19 · Luka 21:28 · Ukusokolola 22:16',
    isSample: false,
    melodicPreview: [62, 66, 69, 74, 73, 71, 69],
    verses: [
      [
        'We kalinda wa Zion, Bushiku buli shani?',
        'Ngo lutanda lwa lucelo, Bushe nomba lwatula?',
        'Bushe nomba kwabe mibengelele?',
        'Bushe nomba kwabe mibengelele?'
      ],
      [
        'Twebeni filangililo, Filepita fileya?',
        'Twapalamina ku cabu, Kuti twamone mpanga?',
        'Bushe cine bufumu bwapalama?',
        'Bushe cine bufumu bwapalama?'
      ],
      [
        'Kwabengeshima bwalaca!',
        'Natwimbe tuweleshe!',
        'Twalumona ulutanda,',
        'Lwabengeshima bwino!',
        'Sekeleni bupususho nabwisa',
        'Sekeleni bupususho nabwisa,'
      ],
      [
        'Natusange cishibilo, lmpanga ilya pepi',
        'Endesheni natuleya, Icabu cilya pepi!',
        'Auleni mutile wa mushilo,',
        'Auleni mutile wa mushilo'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Watchmen, on the walls of Zion, what, O tell us, of the night?',
        'Is the day-star now arising? Will the morn soon greet our sight?',
        'O’er your vision shine there now some rays of light?',
        'O’er your vision shine there now some rays of light?'
      ],
      [
        'Tell, O tell us, are the landmarks on our voyage all passed by?',
        'Are we nearing now the haven? Can we e’en the land descry?',
        'Do we truly see the heav’nly kingdom nigh?',
        'Do we truly see the heav’nly kingdom nigh?'
      ],
      [
        'Light is beaming, day is coming!',
        'Let us sound aloud the cry;',
        'We behold the day-star rising',
        'Pure and bright in yonder sky!',
        'Saints, be joyful, your redemption draweth nigh,',
        'Saints, be joyful, your redemption draweth nigh.'
      ],
      [
        'We have found the chart and compass, and are sure the land is near;',
        'Onward, onward we are hasting, soon the haven will appear;',
        'Let your voices sound aloud your holy cheer,',
        'Let your voices sound aloud your holy cheer.'
      ]
    ]
  },
  {
    id: 'hymn-172',
    number: 172,
    title: 'Shikulu Mukesa Lilali?',
    writer: 'James George Deck, 1837; George J. Webb, 1837 (WEBB)',
    englishTune: 'How Long? / How Long, O Lord, Our Savior (WEBB / Christ in Song #716)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 13:1-2 · Ukusokolola 6:10 · Luka 12:35-37 · Matayo 25:1-13',
    isSample: false,
    melodicPreview: [65, 70, 74, 72, 70, 65, 67, 70],
    verses: [
      [
        'Shikulu, caba shani, mukesa tilali?',
        'Imitima yanaka pantu tamwishile;',
        'Bushe bulya bushiku bukaba lilali?',
        'Ubukabengeshimisha pa bantu bobe.'
      ],
      [
        'Ni lilali shikulu \'kashe ng\'anda yobe?',
        'Pantu wakokola, banana basumina;',
        'Abengi bantu bobe, nabawa mufibi,',
        'Banono balelindo kwisa kusengela'
      ],
      [
        'Shibukeni mutulo, shimikeni landwe,',
        'Soseni mutile\'ti, Mfumu yalaisa,',
        'Natwashe nyali shesu, tube ba cincila,',
        'Nokufwaisha ukumone cinso cenu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'How long, O Lord, our Savior, wilt Thou remain away?',
        'Our hearts are growing weary at Thy so long delay.',
        'Oh, when shall come the moment, when, brighter than the morn,',
        'The sunshine of Thy glory shall on Thy people dawn?'
      ],
      [
        'How long, O gracious Master, wilt Thou Thy household leave?',
        'So long hast Thou now tarried, few Thy return believe.',
        'Immersed in sloth and folly, Thy servants, Lord, we see;',
        'And few of us stand ready with joy to welcome Thee.'
      ],
      [
        'Oh, wake Thy slumbering people; send forth the solemn cry;',
        'Let all Thy saints repeat it—“The Savior draweth nigh!”',
        'May all our lamps be burning, our loins well girded be,',
        'Each longing heart preparing with joy Thy face to see.'
      ]
    ]
  },
  {
    id: 'hymn-173',
    number: 173,
    title: 'Ndefwayo Bucetekelo',
    writer: 'William Hiley Bathurst, 1831; Jeremiah Ingalls, 1800 (NORTHFIELD)',
    englishTune: 'O for a Faith / O for a Faith That Will Not Shrink (NORTHFIELD / SDAH #533 / Christ in Song #723)',
    category: 'faith-and-trust',
    categoryBemba: 'Bucetekelo',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Luka 17:5 · AbaHebere 11:1 · 1 Yohane 5:4 · Esaya 43:2',
    isSample: false,
    melodicPreview: [70, 70, 72, 74, 72, 70, 74, 75, 77],
    verses: [
      [
        'Ndefwayo bucetekelo,',
        'Mushingabo mwenso;',
        'Bushinga tino bupina. Nangu kucula konse,',
        'Nangu nimu malanda.'
      ],
      [
        'Umushilyu kwi lishanya, Nangu mumacusho,',
        'Munshita iya macusho,',
        'Kucetekela Lesa;',
        'Nangula ncule nganshi.'
      ],
      [
        'Ulubengeshima bwino, Nangu mumasanso;',
        'Nangu kube amasanso tatutina akantu,',
        'Nangu kufite shani'
      ],
      [
        'Lusenda macusho yonse, Nangu musebanya;',
        'Mabimbi aya cimana tekuti yalushike,',
        'Mabi mbi yaca mbeshi.'
      ],
      [
        'Mpeni ulu lucetekelo; kuti ncimfye fyonse,',
        'Nangu fye nipano calo, ndomfwa cena cisuma.',
        'Kumushi wa pe na pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O for a faith that will not shrink,',
        'Though pressed by many a foe,',
        'That will not tremble on the brink',
        'Of poverty or woe;'
      ],
      [
        'That will not murmur nor complain',
        'Beneath the chast’ning rod,',
        'But in the hour of grief or pain',
        'Can lean upon its God;'
      ],
      [
        'A faith that shines more bright and clear',
        'When tempests rage without;',
        'That, when in danger, knows no fear,',
        'In darkness feels no doubt;'
      ],
      [
        'That bears unmoved the world’s dread frown,',
        'Nor heeds its scornful smile;',
        'That sin’s wild ocean cannot drown,',
        'Nor its soft arts beguile;'
      ],
      [
        'Lord, give me such a faith as this,',
        'And then, whate’er may come,',
        'I’ll taste e’en now the hallowed bliss',
        'Of an eternal home.'
      ]
    ]
  },
  {
    id: 'hymn-174',
    number: 174,
    title: 'Kwa Buseko',
    writer: 'Anonymous / Bessie Doolittle, c. 1850; S. Hibbard, 1869 (EXHORTATION)',
    englishTune: 'How Cheering! / How Cheering Is the Christian’s Hope (EXHORTATION / SDAH #440 / Hymns and Tunes #883)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'A Major',
    timeSignature: '4/4',
    scripture: '1 Abena Tesalonika 4:16-18 · Ukusokolola 21:4 · Tito 2:13 · Matayo 22:30',
    isSample: false,
    melodicPreview: [69, 73, 76, 76, 78, 76, 74, 73, 71, 69],
    verses: [
      [
        'Kwa bu-seko ku-su-bila ‘lyo twa-cula-pano;',
        'Kulatwafwa mu macusho \'lyo tuli pano nse,',
        'Kulatwafwa mu macusho \'lyo tuli pano nse.'
      ],
      [
        'Kwatu-langa \'ko-tu-tushe, tuka-teka-nankwe;',
        '\'Ko tukamonana bonse tatwakalekane,',
        '\'Ko tukamonana bonse tatwakalekane.'
      ],
      [
        'Mu mpa-nge yi ta-ba-bifya, taba-tunkwa-iyo;',
        'Ubuseko tabwakapwe bukekalila pe,',
        'Ubuseko tabwakapwe bukekalila pe.'
      ],
      [
        'Mu ca-lo‘mo ta-ba-losha, ne mfwa-tamwa-kabe;',
        '\'Bakaba mu calo cilya kuba nga bangeli,',
        '\'Bakaba mu calo cilya kuba nga bangeli.'
      ],
      [
        'We nshita we bu-tu-kisha, mupu--sushi--isa;',
        'Twafuluko kukumona tufike ku mwesu',
        'Twafuluko kukumona tulike ku mwesu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'How cheering is the Christian’s hope, while toiling here below!',
        'It buoys us up while passing through this wilderness of woe,',
        'It buoys us up while passing through this wilderness of woe.'
      ],
      [
        'It points us to a land of rest, where saints with Christ will reign;',
        'Where we shall meet the loved of earth, and never part again,',
        'Where we shall meet the loved of earth, and never part again.'
      ],
      [
        'A land where sin can never come, temptations ne’er annoy;',
        'Where happiness will ever dwell, and that without alloy,',
        'Where happiness will ever dwell, and that without alloy.'
      ],
      [
        'In that bright world no tears will flow, death ne’er can enter there;',
        'For all who gain that heavenly land will be as angels are,',
        'For all who gain that heavenly land will be as angels are.'
      ],
      [
        'Fly, lingering moments, fly, O fly, dear Savior, quickly come!',
        'We long to see Thee as Thou art, and reach that blissful home,',
        'We long to see Thee as Thou art, and reach that blissful home.'
      ]
    ]
  },
  {
    id: 'hymn-175',
    number: 175,
    title: 'We Mupusushi Kakumba',
    writer: 'Dorothy A. Thrupp, 1836; William B. Bradbury, 1859 (BRADBURY)',
    englishTune: 'Savior, Like a Shepherd Lead Us (BRADBURY / SDAH #545 / Christ in Song #726)',
    category: 'faith-and-trust',
    categoryBemba: 'Ukushintilila',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 23:1 · Yohane 10:11 · 1 Petro 2:25 · Luka 15:4-7',
    isSample: false,
    melodicPreview: [62, 66, 69, 74, 73, 71, 71, 69],
    verses: [
      [
        'We mupusushi, kakumba wesu, shi tusunge bwino:',
        'Tulisheni ifisu-ma, tube mwicinka lyobe ‘li ;',
        'Yesu Mfumu, we wapalwa, bonse tuli fye bobe;',
        'Yesu Mfumu, we wapalwa, twashitilwe fye nobe.'
      ],
      [
        'Tuli bobe fye Cibu-sa wesu tungulule nshila:',
        'Tutalushe fye kubu-bi bonse, bwesha nga twaluba;',
        'Yesu Mfumu, we wapalwa, umfwo kupepa kwesu,',
        'Yesu Mfumu, we wapalwa, umfwo kupepa kwesu'
      ],
      [
        'Walitulayo kutu-poka, nangu fye tuli babi;',
        'Waliba no luse \'la-twafwa, icikuku na maka,',
        'Yesu Mfumu, we wapalwa, tuleisa kuli iwe,',
        'Yesu Mfumu, we wapalwa, tuleisa kuli iwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Savior, like a shepherd lead us, much we need Thy tenderest care;',
        'In Thy pleasant pastures feed us, for our use Thy folds prepare:',
        'Blessed Jesus, blessed Jesus! Thou hast bought us, Thine we are;',
        'Blessed Jesus, blessed Jesus! Thou hast bought us, Thine we are.'
      ],
      [
        'We are Thine, Thou dost befriend us, be the guardian of our way;',
        'Keep Thy flock, from sin defend us, seek us when we go astray:',
        'Blessed Jesus, blessed Jesus! Hear, O hear us when we pray;',
        'Blessed Jesus, blessed Jesus! Hear, O hear us when we pray.'
      ],
      [
        'Thou hast promised to receive us, poor and sinful though we be;',
        'Thou hast mercy to relieve us, grace to cleanse, and power to free:',
        'Blessed Jesus, blessed Jesus! We will early turn to Thee;',
        'Blessed Jesus, blessed Jesus! We will early turn to Thee.'
      ]
    ]
  },
  {
    id: 'hymn-176',
    number: 176,
    title: 'Ubuchetekelo Bwapalwa',
    writer: 'Anonymous; Johann G. Nägeli, arr. Lowell Mason, 1845 (DENNIS)',
    englishTune: 'Blessed Hope / There Is a Blessed Hope (DENNIS / Christ in Song #743)',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Bucetekelo',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Tito 2:13 · AbaHebere 6:19 · 1 Yohane 4:8 · 1 Petro 1:3-4',
    isSample: false,
    melodicPreview: [69, 69, 67, 65, 67, 69, 70, 69, 67],
    verses: [
      [
        'Ubu-cete-kelo bwapa-lwa bwa-buta',
        'Kuci-la no kuse-kela calo cinga-pela.'
      ],
      [
        '\'Ko lu-li lu-tanda lwinga-tamfye mfimfi,',
        'Lule-to bu-cete-kelo, Bufu-mya no mwenso'
      ],
      [
        'Shiwi lya bu-seko lila-sansa-musha,',
        'Lila-fumya \'kutwi-shika, Lila-ndo ku-temwa.'
      ],
      [
        'Shiwi pa Kal-vari "Iwe nawe-lelwa!"',
        'Luta-nda lu-soko-lola Kusu-bilo mulu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'There is a blessed hope, more precious and more bright',
        'Than all the joyless mockery the world esteems delight.'
      ],
      [
        'There is a lovely star that lights the darkest gloom,',
        'And sheds a peaceful radiance o’er the prospects of the tomb.'
      ],
      [
        'There is a cheering voice that lifts the soul above,',
        'Dispels the painful, anxious doubt, and whispers, “God is love.”'
      ],
      [
        'That voice from Calvary’s height proclaims the soul forgiv’n;',
        'That star is revelation’s light, that hope, the hope of heav’n.'
      ]
    ]
  },
  {
    id: 'hymn-177',
    number: 177,
    title: 'Mu Mpanga ya Kumulu',
    writer: 'John R. Clements, 1899; Hart P. Danks, 1899 (NO NIGHT THERE)',
    englishTune: 'No Night There / In the Land of Fadeless Day (NO NIGHT THERE / SDAH #427 / Christ in Song #177)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:1-4 · Ukusokolola 21:23-25 · Ukusokolola 22:5 · Esaya 60:19-20',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 68, 67],
    verses: [
      [
        'Mu mpanga ya kumulu, Mwalibo "Musumba,"',
        'Ukekalilila pe, "Bushiku takwaba."'
      ],
      [
        'Fipata fyabekesha, Mu "musumba ulya;"',
        'Misebo ya Sahabu, "Bushiku takwaba."'
      ],
      [
        'Fipata tafisalwa, Ku "musumba ulya,"',
        'Mumana upita pe, "Bushiku takwaba."'
      ],
      [
        'Tabafwaya kasuba, Mu "musumba ulya,"',
        'Pantu Yeswe lubuto, "Bushiku takwaba,"'
      ]
    ],
    chorus: [
      'Akafute filamba, Mu "musumba ulya;"',
      'Tabaka lepende myaka, "Bushiku takwaba."'
    ],
    englishVerses: [
      [
        'In the land of fadeless day lies the city four-square;',
        'It shall never pass away, and there is no night there.'
      ],
      [
        'All the gates of pearl are made, in the city four-square;',
        'All the streets with gold are laid, and there is no night there.'
      ],
      [
        'And the gates shall never close to the city four-square;',
        'There life’s crystal river flows, and there is no night there.'
      ],
      [
        'There they need no sunshine bright, in that city four-square;',
        'For the Lamb is all the light, and there is no night there.'
      ]
    ],
    englishChorus: [
      'God shall wipe away all tears; there’s no death, no pain, nor fears;',
      'And they count not time by years, for there is no night there.'
    ]
  },
  {
    id: 'hymn-178',
    number: 178,
    title: 'Aleisa',
    writer: 'H. L. Turner, 1878; James McGranahan, 1878 (CHRIST RETURNETH)',
    englishTune: 'Christ Returneth / It May Be at Morn (CHRIST RETURNETH / SDAH #207 / Christ in Song #682)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa bwa kwa Kristu',
    key: 'C Major',
    timeSignature: '3/4',
    scripture: 'Marko 13:35-37 · 1 Abena Tesalonika 4:16-17 · 1 Abena Korinte 15:51-52 · Ukusokolola 22:20',
    isSample: false,
    melodicPreview: [60, 64, 67, 67, 67, 69, 67, 64, 65, 67],
    verses: [
      [
        'Limbi lucelo, lyakasuba katula.',
        'Lye mfimfi yaya, nakasuba katula,',
        'Kuti aisa mululumbi ulwakwe.',
        'Kwisa senda abantu bakwe.'
      ],
      [
        'Limbi cungulo, Limbi ilyo bwaila,',
        'Engesa lyonse, ilyo tatwibukile,',
        'Nokumona ulubuto lwa lulumbi,',
        'Lwakwisa senda-a bakwe,'
      ],
      [
        'Abakumulu bakatila Hosana,',
        'Abashila bakwe, Nabangeli pamo;',
        'Elyo tukamona ululumbi lwakwe,',
        'Lukabengeshima konse.'
      ],
      [
        'Tukala cankwa pantu takwakabe mfwa,',
        'Kulila noku lwala takwakabe ko;',
        'Tukasumbulwa ne Mfumu Yesu ilyo aisa,',
        'Kwisa senda bantu bakwe,'
      ]
    ],
    chorus: [
      'Nililali Mfumu ilyo tukembo lwimbolu?',
      'Aleisa Aleluya, Aleluya Ameni,',
      'Aleluya Ameni.'
    ],
    englishVerses: [
      [
        'It may be at morn, when the day is awaking,',
        'When sunlight through darkness and shadow is breaking,',
        'That Jesus will come in the fullness of glory,',
        'To receive from the world His own.'
      ],
      [
        'It may be at midday, it may be at twilight,',
        'It may be, perchance, that the blackness of midnight',
        'Will burst into light in the blaze of His glory,',
        'When Jesus receives His own.'
      ],
      [
        'While hosts cry Hosanna, from heaven descending,',
        'With glorified saints and the angels attending,',
        'With grace on His brow, like a halo of glory,',
        'Will Jesus receive His own.'
      ],
      [
        'O joy! O delight! should we go without dying,',
        'No sickness, no sadness, no dread and no crying;',
        'Caught up through the clouds with our Lord into glory,',
        'When Jesus receives His own.'
      ]
    ],
    englishChorus: [
      'O Lord Jesus, how long, how long ere we shout the glad song,',
      'Christ returneth! Hallelujah! Hallelujah! Amen.',
      'Hallelujah! Amen.'
    ]
  },
  {
    id: 'hymn-179',
    number: 179,
    title: 'Bushe Wate-yanishisha Shibwinga Ngaisa?',
    writer: 'Ralph E. Hudson (1843–1901)',
    englishTune: 'BEHOLD THE BRIDEGROOM (Are You Ready for the Bridegroom?)',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Mateo 25:1-13 · Mateo 25:6 · Ukusokolola 19:7',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 75, 77, 75, 72, 68],
    verses: [
      [
        'Bushe wate-yanishisha shibwinga ngaisa?',
        'Bushe iwe wamuteyanishisha iwe;',
        'Moneni Aisa isa fwalila umukumanye, shibwinga Aisa.'
      ],
      [
        'Butisheni inyali shenu shibeke lyaisa;',
        'Butisheni inyali shenu shibeke shibeke;',
        'Alaisa fye bwangu, Iteya-nyeni!',
        'Alaisa fye nombaline'
      ],
      [
        "Bonse tuka-yo kumusengela 'lyaisa!",
        "Bonse tuka-yo kumusengela 'lyaisa!",
        'Cacine akesa akesa! Bonse tukaya kuya kumanya shibwinga.'
      ],
      [
        'Tukemba pamofye aleluya ‘lyaisa!',
        'Tukemba pamofye aleluya ‘lyaisa!',
        "Mone'na isa isa natwimbe bonse moneni shibwinga isa."
      ]
    ],
    chorus: [
      'Mona shibwinga Aisa Aisa! Mona fwalila Aisa Aisa!',
      'Mona shibwinga Aisa Aisa! Iteyanishishe shibwinga Aisa.'
    ],
    englishVerses: [
      [
        'Are you ready for the Bridegroom when He comes, when He comes?',
        'Are you ready for the Bridegroom when He comes, when He comes?',
        'Behold, He cometh! Behold, He cometh!',
        'Be robed and ready, for the Bridegroom comes.'
      ],
      [
        'Have your lamps all trimmed and burning when He comes, when He comes;',
        'Have your lamps all trimmed and burning when He comes, when He comes;',
        'He quickly cometh, O be ready!',
        'He quickly cometh, even now.'
      ],
      [
        'We will all go out to meet Him when He comes, when He comes;',
        'We will all go out to meet Him when He comes, when He comes;',
        'He surely cometh, He surely cometh!',
        'We will all go out to meet the Bridegroom then.'
      ],
      [
        'We will sing and shout hosannas when He comes, when He comes;',
        'We will sing and shout hosannas when He comes, when He comes;',
        'Behold, He cometh! Let us sing together,',
        'Behold the Bridegroom cometh now.'
      ]
    ],
    englishChorus: [
      'Behold the Bridegroom, for He comes, for He comes!',
      'Behold the Bridegroom, for He comes, for He comes!',
      'Behold, He cometh! Behold, He cometh!',
      'Be robed and ready, for the Bridegroom comes.'
    ]
  },
  {
    id: 'hymn-180',
    number: 180,
    title: 'Inshita Tatwishibe',
    writer: 'Franklin E. Belden (1858–1945)',
    englishTune: 'WE KNOW NOT THE HOUR',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Mateo 24:36-44 · Marko 13:32-37 · Mateo 25:13',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 75, 73, 72, 73, 75],
    verses: [
      [
        'Mfumwi leisa; Inshita tatwishibe;',
        'Malangililo yaleti Alaisa,',
        'Lintwa kabwela, Bulayo bu bwacine,',
        'Nshita ta-twishibe.'
      ],
      [
        'Kulyu lubuto kuli balya bamano;',
        'Mwi buku lyakwe emo fili fishinka;',
        'Ifile sonta kuli bulya bushiku,',
        'Nshita ta-twishibe.'
      ],
      [
        'Kulalolela, Nenyali shileyaka,',
        'Twakulabomba, Twakula mulolela,',
        'Kwanga nokwimba, Bonse balya bamano,',
        'Nshita ta-twishibe.'
      ]
    ],
    chorus: [
      'Akesa (Akesa), Pempuleni teyanyeni;',
      'Akesa (Akesa), Haleluya! Haleluya!',
      "'Kesa mu makumbi, Mululumbi lwakwa Wishi.",
      'Nshita ta twishibe.'
    ],
    englishVerses: [
      [
        "We know not the hour of the Master's appearing;",
        'Yet signs all foretell that the moment is nearing.',
        "When He shall return—'tis the promise most cheering—",
        'But we know not the hour.'
      ],
      [
        "There's light for the wise who are seeking salvation;",
        "There's truth in the book of the Lord's revelation;",
        'Each prophecy points to the great consummation—',
        'But we know not the hour.'
      ],
      [
        "We'll watch and we'll pray, with our lamps trimmed and burning;",
        "We'll work and we'll wait till the Master's returning;",
        "We'll sing and rejoice, every omen discerning—",
        'But we know not the hour.'
      ]
    ],
    englishChorus: [
      'He will come, let us watch and be ready;',
      'He will come, hallelujah! hallelujah!',
      "He will come in the clouds of His Father's bright glory—",
      'But we know not the hour.'
    ]
  },
  {
    id: 'hymn-181',
    number: 181,
    title: 'Tatwaishiba Ilya Kesa',
    writer: 'Sarepta M. I. Henry (1839–1900)',
    englishTune: 'WAITING AND WATCHING',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'E♭ Major',
    timeSignature: '6/8',
    scripture: 'Marko 13:35-37 · Luka 12:35-40 · Mateo 25:1-13',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 70, 72, 70, 67, 65, 63],
    verses: [
      [
        'Tatwaishiba ilya kesa, Cungulo nelyo lucelo,',
        'Limbi kuti fye ubushiku, Limbi kuti ni kumaca,',
        'Aleti kanshi pempuleni, Mwileka nyali shishime,',
        'Ilya kabwela katusange, Abaiteyanishisha.'
      ],
      [
        'Ndetontonkanyo luse lwake, Mutengo nashitwa nao,',
        'Ashilyo mulu uwashila, No Kwisa fwila baluba,',
        'Nao cika lamusekesha, Pa kumona balubulwa.',
        'Twange na ubucetekelo, Tulole no kupempula.'
      ],
      [
        'Yesu we mupusushi wa-ndi, Nalikutemwisha nganshi,',
        "Ndecetekela nkakumo-na, 'Ne mwine nkakusengela,",
        'Kuli bambi nga kapingu-la, Abakala kubutuka,',
        'Lelo ine nga icibusa, Nakulakulolela fye.'
      ]
    ],
    chorus: [
      'Li-nda pempu-la, Li-nda pempu-la;',
      'Li-nda pempu-la, Uku mulolela Yesu.'
    ],
    englishVerses: [
      [
        'We know not the time when He cometh, at even, or midnight, or morn;',
        'It may be at deepening twilight, it may be at earliest dawn.',
        'He bids us to watch and be ready, nor suffer our lights to grow dim;',
        'That when He shall come, He may find us, all waiting and watching for Him.'
      ],
      [
        'I think of His wonderful pity, the price our salvation hath cost;',
        'He left the bright mansions of glory, to suffer and die for the lost.',
        'And sometimes I think it will please Him, when those whom He died to redeem,',
        'Rejoice in the hope of His coming, by waiting and watching for Him.'
      ],
      [
        'O Jesus, my loving Redeemer, Thou knowest I cherish as dear',
        'The hope that mine eyes shall behold Thee, that I shall Thine own welcome hear!',
        'If to some as a Judge Thou appearest, who forth from Thy presence would flee,',
        'A Friend most beloved I’ll greet Thee, I’m waiting and watching for Thee.'
      ]
    ],
    englishChorus: [
      'Waiting and watching, waiting and watching;',
      'Waiting and watching, still waiting and watching for Thee.'
    ]
  },
  {
    id: 'hymn-182',
    number: 182,
    title: 'Bushiku Bulya',
    writer: 'S. J. Graham (c. 1880)',
    englishTune: 'GOLDEN MORNING',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:4 · 1 Abena Tesalonika 4:16-17 · Mateo 24:30-31',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65],
    verses: [
      [
        'Bushiku bulya nabupalama; Yesu alaisa.',
        'Ukwisa senda babusumino, Ukuya kumushi.'
      ],
      [
        'Ilandwe ili lyalaya nomba konse mucalwe ci',
        'Shibwinga nao tale kokola, Penga lyalalila.'
      ],
      [
        'Bangeli bakwe akesa nabo, Mulu ukabeka,',
        'Akesa senda abantu bakwe, Kuyo kushabe mfwa.'
      ],
      [
        'Tuka kumana nabatemwika. Abailya kale.',
        'Akala bakumune filamba abo balelila.'
      ]
    ],
    chorus: [
      'Yangu twamona mibengelele kutandule mfifi yonse!',
      'Mibengelele yakwisa kwakwe, Nshishi shikesuka.'
    ],
    englishVerses: [
      [
        'The golden morning is fast approaching; Jesus soon will come',
        'To take His faithful and happy children to their promised home.'
      ],
      [
        'The gospel summons will soon be carried to the nations round;',
        'The Bridegroom then will cease to tarry and the trumpet sound.'
      ],
      [
        'Attended by all the shining angels, down the flaming sky',
        'The Judge will come, and will take His people where they will not die.'
      ],
      [
        'There those loved ones who have long been parted, will all meet that day;',
        'The tears of those who are broken-hearted will be wiped away.'
      ]
    ],
    englishChorus: [
      'O, we see the gleams of the golden morning piercing thro’ this night of gloom!',
      'O, see the gleams of the golden morning that will burst the tomb.'
    ]
  },
  {
    id: 'hymn-183',
    number: 183,
    title: 'Ikatisheni Nsuke Njise',
    writer: 'Franklin E. Belden (1858–1945)',
    englishTune: 'HOLD FAST TILL I COME',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Ukusokolola 2:25 · Ukusokolola 3:11 · 1 Abena Tesalonika 5:1-6',
    isSample: false,
    melodicPreview: [65, 69, 72, 69, 65, 67, 69, 65],
    verses: [
      [
        'Bulayo bwakwe kubasumina',
        '"mona naisa ukwisa basenda,',
        'Ikatisha we kufika njise,',
        'Wilala we buka, ndeisa bwangu."'
      ],
      [
        '"Twakulalinda" nyali lyoshaka;',
        'Engesa ubushiku ngo mupupu,',
        'Kwena lyapepi, Lelo kasuba,',
        'Aka kwishilapo tatwaishiba.'
      ],
      [
        'Bucetekelo, bweshiwi lyakwe,',
        'Yeswa laisa, bwangu icacine,',
        'Malayo yakwe Yena yacine,',
        '"mona naisa bwa-ngu ikatisha."'
      ]
    ],
    chorus: [
      '"Ikatisheni insuke njise,"',
      'Bufumu bukapelwa kulimwe,',
      'Ingila mubuseko bwa Mfumu,',
      'Kafwikwa fitebo filye fya yemba.'
    ],
    englishVerses: [
      [
        'Sweet promise is given to all who believe–',
        '“Behold I come quickly, Mine own to receive;',
        'Hold fast till I come; the danger is great;',
        'Sleep not as do others; be watchful, and wait.”'
      ],
      [
        'We’ll “watch unto prayer” with lamps burning bright;',
        'He comes to all others a “thief in the night.”',
        'We know He is near, but know not the day,',
        'As spring shows that summer is not far away.'
      ],
      [
        'Yes! this is our hope, ’tis built on His word–',
        'The glorious appearing of Jesus, our Lord;',
        'Of promises all, it stands as the sum:',
        '“Behold I come quickly; hold fast till I come.”'
      ]
    ],
    englishChorus: [
      '“Hold fast till I come,” sweet promise of heaven–',
      '“The kingdom restored, to you shall be given.”',
      '“Come, enter My joy, sit down on the throne;',
      'Bright crowns are in waiting; hold fast till I come.”'
    ]
  },
  {
    id: 'hymn-184',
    number: 184,
    title: 'Angeni Mfumu Yaisa',
    writer: 'Isaac Watts (1674–1748) / Lowell Mason (1792–1872)',
    englishTune: 'Joy to the World',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwisa Bwakwe Bwacibili',
    key: 'D Major',
    timeSignature: '2/4',
    scripture: 'Amalumbo 98:4-9 · Luka 2:10-14 · Ukusokolola 11:15',
    isSample: false,
    melodicPreview: [74, 73, 71, 69, 67, 66, 64, 62],
    verses: [
      [
        'Angeni Mfumu yaisa! Natu isengele,',
        'Tute ya-ni she ci fulo,',
        'Bapanonse bembe, bapanonse bembe,',
        'Bapa bapa-nonse-bembe.'
      ],
      [
        'Angeni Mfumu yateka! Bantu bonse bembe,',
        'Menshi-ma-bwe-mpili sha-nge',
        'Nafimbisho lwimbo, nafimbisho lwimbo',
        'Nafi Nafi-mbisho lwimbo.'
      ],
      [
        'Nomba line aleteka cine, necikuku,',
        'Abe-na fya-lo be-shi-be',
        'Ubukata bwakwe, Bololoke bwakwe',
        'Uku uku-temwa kwakwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Joy to the world, the Lord is come!',
        'Let earth receive her King;',
        'Let every heart prepare Him room,',
        'And heaven and nature sing, and heaven and nature sing,',
        'And heaven, and heaven and nature sing.'
      ],
      [
        'Joy to the earth, the Savior reigns!',
        'Let men their songs employ;',
        'While fields and floods, rocks, hills, and plains',
        'Repeat the sounding joy, repeat the sounding joy,',
        'Repeat, repeat the sounding joy.'
      ],
      [
        'He rules the world with truth and grace,',
        'And makes the nations prove',
        'The glories of His righteousness,',
        'And wonders of His love, and wonders of His love,',
        'And wonders, wonders of His love.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-185',
    number: 185,
    title: 'Ukuba Kulya',
    writer: 'Elizabeth King Mills (1805–1829)',
    englishTune: 'We Speak of the Realms of the Blest',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubukata bwa ku Mulu',
    key: 'F Major',
    timeSignature: '8/8',
    scripture: 'Ukusokolola 21:1-4 · Ukusokolola 21:18-21 · 1 Abena Korinte 2:9',
    isSample: false,
    melodicPreview: [65, 65, 69, 72, 72, 70, 69, 67, 65],
    verses: [
      [
        'Tulanda ifya mpanga i-lya, icalo cawamisha',
        'Icalo cilya icisuma nishani kuba kulya!',
        'Ne misebo iya ngolide fibumbe fya bekesha,',
        'Wene mwandi wakupapi-sha nishani kuba kulya!'
      ],
      [
        'Kulya ububi bwena takwa-ba, matunko no bulanda,',
        'Nangu mesho yonse takwa-ba nishani kuba kulya!',
        'Nemilimo yakutemwa, ne mingile yabashila,',
        'Icilonganino canta-nshi nishani kuba kulya!'
      ],
      [
        'Mulafwo mutima wa-ndi pantu ndefwaya mulu,',
        'Nomba line nakulau-mfwa ifyo ine nkaya kulya!',
        'Tu-kalaenda mumaba-la mubu cindami ifwe!',
        "Tukaba pamo na Bangeli na Yes'u akaba kulya."
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'We speak of the realms of the blest, that country so bright and so fair,',
        'And oft are its glories confessed—but what must it be to be there!',
        'We speak of its pathways of gold, its walls decked with jewels so rare,',
        'Its wonders and pleasures untold—but what must it be to be there!'
      ],
      [
        'We speak of its freedom from sin, from sorrow, temptation, and care,',
        'From trials without and within—but what must it be to be there!',
        'We speak of its service of love, of the robes which the glorified wear,',
        'The church of the first-born above—but what must it be to be there!'
      ],
      [
        'Do Thou, Lord, ’midst pleasure and woe, still for heaven our spirits prepare;',
        'And shortly we also shall know and feel what it is to be there!',
        'We’ll walk in the gardens of light, in the robes of our Savior so fair,',
        'With angels and saints in His sight, and Jesus Himself will be there!'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-186',
    number: 186,
    title: 'Mfumu Twalongana',
    writer: 'Traditional / Christ in Song #186',
    englishTune: 'Lord, We Have Met (Nkosi Sihlangene)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 18:20 · Amalumbo 122:1 · Amalumbo 27:4',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 72, 71, 69, 67],
    verses: [
      [
        "Mfumu twalo-ngana, Mung'a-nda ye-nwiyi;",
        'Ise-ni Mfu-mu mwi-kale pamo-fye na-ifwe.'
      ],
      [
        'Imi-tima-yesu ile-mufwa-isha;',
        'Ne mi-pashi yesu nayo, Ile-muli-lila.'
      ],
      [
        'Umu-pashi wesu, Leke-ni u-twalwe,',
        'Uku-mfwa ma-shiwi yesu, Twika-le na-imwe,'
      ],
      [
        'Tufu-mishe-nipo ifya-bipa-fyonse.',
        'Kuti ngamwa-isa Mfumu, Mutu-sende kwenu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Lord, we have met again, within Thine house of prayer;',
        'Come, Holy Spirit, abide and dwell with us here.'
      ],
      [
        'Our longing hearts we give, yearning for Thy pure grace;',
        'Our spirits cry to Thee, seeking Thy holy face.'
      ],
      [
        'Lead our revived souls, by Thy sweet, living word;',
        'To hear Thy voice divine, and walk with Thee, O Lord.'
      ],
      [
        'Cleanse us from every sin, and keep us by Thy grace;',
        'That when Thou comest, Lord, we may behold Thy face.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-187',
    number: 187,
    title: 'Ulwimbo Lwesu Ulwakulekana',
    writer: 'John Ellerton (1826–1893) / Edward J. Hopkins (1818–1901)',
    englishTune: 'Saviour, Again to Thy Dear Name We Raise (Our Parting Hymn)',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Impendwa 6:24-26 · Amalumbo 29:11 · Yohane 14:27',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Mu-pusushi wesu, tuleimba,',
        'Ulwimbo ulu lwakulekana;',
        'I’ule fwaisha kupalwa nemwe,',
        'Shiwi lya mutende tupeleni.'
      ],
      [
        'Tupenyu mutende lyo tuleya,',
        'Lyo twashibuka \'lyo twasendama;',
        'Milomo yesu isoso bubi,',
        'Iiyo tuli mu ng\'anda yenwi yi.'
      ],
      [
        'Tusungeni lyo tuli pa calo,',
        'Muma cusho na mumesho yonse;',
        'Ilya macusho yonse yakapwa!',
        'Mfumu twiteni twise tutushe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Saviour, again to Thy dear name we raise',
        'With one accord our parting hymn of praise;',
        'We stand to bless Thee ere our worship cease,',
        'Then, lowly kneeling, wait Thy word of peace.'
      ],
      [
        'Grant us Thy peace upon our homeward way;',
        'With Thee began, with Thee shall end the day;',
        'Guard Thou the lips from sin, the hearts from shame,',
        'That in this house have called upon Thy name.'
      ],
      [
        'Grant us Thy peace throughout our earthly life,',
        'Our balm in sorrow, and our stay in strife;',
        'Then, when Thy voice shall bid our conflict cease,',
        'Call us, O Lord, to Thine eternal peace.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-188',
    number: 188,
    title: 'Ndi Mubi Nokucila',
    writer: 'William McComb (1793–1873)',
    englishTune: 'Chief of Sinners Though I Be',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kutetekela',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: '1 Timote 1:15 · Yohane 15:5 · Mateo 11:28',
    isSample: false,
    melodicPreview: [65, 67, 69, 70, 72, 70, 69, 67, 65],
    verses: [
      [
        'Ndi mubi nokucila, Yesu amfwile me;',
        'Kupela mweo wa pe. No kumpela cifulo;',
        'Nomba ndi wakwe wa pe, E\' kala mu mutima.'
      ],
      [
        'Temwa kwakwe kwacila, Temwa kwakwe penape;',
        'Fyonse fimbi ifya fye, Myulu yacepesha fye;',
        'Alinsangile ine, Lintu nali mu mfimfi.'
      ],
      [
        'Ndi Mubi nokucila, Yesu fyonse kuli \'ne;',
        'Aleshiba ndefwaya, Asendele macusho;',
        'Ndekala no mutende, Pantu angafwa ine.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Chief of sinners though I be, Jesus shed His blood for me;',
        'Died that I might live on high, lives that I may never die;',
        'As the branch is to the vine, I am His and He is mine.'
      ],
      [
        'Oh, the height of Jesus’ love! Higher than the heavens above,',
        'Deeper than the depths of sea, lasting as eternity;',
        'Love that found me—wondrous thought!—found me when I sought Him not.'
      ],
      [
        'Chief of sinners though I be, Christ is all in all to me;',
        'All my wants to Him are known, all my sorrows are His own;',
        'Safe with Him from earthly harm, lean I on His mighty arm.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-189',
    number: 189,
    title: 'Tatukwete Ng\'anda Kuno',
    writer: 'Thomas Kelly (1769–1855)',
    englishTune: 'No Abiding City Here',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubukata bwa ku Mulu',
    key: 'E♭ Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 13:14 · Amalumbo 55:6 · Ukusokolola 21:2',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 67, 65, 63],
    verses: [
      [
        'Tatukwete ng\'anda kuno,',
        'Tulefwaye, calo cilya;',
        'Tatukwete ubulanda,',
        'Icalo cesu e cilya,',
        'Icalo cesu e cilya.'
      ],
      [
        'Tatukwete ng\'anda kuno,',
        'Calo cesu cileisa;',
        'Ni Zion, Mfumu ilya,',
        'Yabengeshima bwino pe,',
        'Yabengeshima bwino pe'
      ],
      [
        'Mwe calo candi cawama.',
        'Basuma batusha cilya;',
        'Nga nimgaba na mapindo,',
        'Ine nkaya no kutusha,',
        'Ine nkaya no kutusha.'
      ],
      [
        'Talala mutima wandi,',
        'Inshita yakwe isuma;',
        'Ndecita bufwayo bwake,',
        'Akampele cifulo \'ko,',
        'Akampele cifulo \'ko,'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'We’ve no abiding city here;',
        'Sad truth, were this to be our home;',
        'But let this thought our spirits cheer,',
        'We seek a city yet to come,',
        'We seek a city yet to come.'
      ],
      [
        'We’ve no abiding city here,',
        'We seek a city out of sight;',
        'Zion its name, the Lord is there,',
        'It shines with everlasting light,',
        'It shines with everlasting light.'
      ],
      [
        'O sweet abode of peace and love,',
        'Where pilgrims, freed from toil, are blest!',
        'Had I the pinions of a dove,',
        'I’d fly to thee, and be at rest,',
        'I’d fly to thee, and be at rest.'
      ],
      [
        'But hush, my soul! Nor dare repine;',
        'The time my God appoints is blest;',
        'While here, to do His will be mine,',
        'And His to fix my time of rest,',
        'And His to fix my time of rest.'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-190',
    number: 190,
    title: 'Ishina Lisuma',
    writer: 'Lydia Baxter (1809–1874) / William H. Doane (1832–1915)',
    englishTune: 'Precious Name',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Abena Filipi 2:9-11 · Imilimo 4:12 · Amalumbo 72:17-19',
    isSample: false,
    melodicPreview: [63, 68, 68, 70, 72, 70, 68, 65, 63],
    verses: [
      [
        'Bule shina lyakwa Yesu,',
        'we mwana wa bulanda,',
        'Li ka kupelo buseko,',
        'nakonse kuntu kaya.'
      ],
      [
        'Bule shina lyakwe lyonse,',
        'Libe cishangu cobe;',
        'Lintu waba no kweshiwa,',
        'Lilumbule upepe.'
      ],
      [
        'Yesu eshina lisuma!',
        'Liletupo buseko!',
        'Lintwa katupokelela,',
        'Nyimbo tukamwimbila.'
      ],
      [
        'Tota peshina lya Yesu,',
        'Muwe pa nkasa shakwe;',
        'Tuka mupele citebo,',
        'Ngolwendo lwesu lwapwa.'
      ]
    ],
    chorus: [
      'Ishina -- lisuma --',
      'lya cetekelwa muno;',
      'Ishina -- lisuma --',
      'lishina lya katula.'
    ],
    englishVerses: [
      [
        'Take the name of Jesus with you,',
        'Child of sorrow and of woe;',
        'It will joy and comfort give you,',
        'Take it, then, where’er you go.'
      ],
      [
        'Take the name of Jesus ever,',
        'As a shield from every snare;',
        'If temptations round you gather,',
        'Breathe that holy name in prayer.'
      ],
      [
        'O the precious name of Jesus!',
        'How it thrills our souls with joy,',
        'When His loving arms receive us,',
        'And His songs our tongues employ!'
      ],
      [
        'At the name of Jesus bowing,',
        'Falling prostrate at His feet,',
        'King of kings in heaven we’ll crown Him,',
        'When our journey is complete.'
      ]
    ],
    englishChorus: [
      'Precious name, O how sweet!',
      'Hope of earth and joy of heaven;',
      'Precious name, O how sweet!',
      'Hope of earth and joy of heaven.'
    ]
  },
  {
    id: 'hymn-191',
    number: 191,
    title: 'Cacine Cine Yesu Wandi',
    writer: 'Fanny J. Crosby (1820–1915) / Phoebe P. Knapp (1839–1908)',
    englishTune: 'Blessed Assurance',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'D Major',
    timeSignature: '9/8',
    scripture: 'AbaHebere 10:22 · Abena Roma 8:14-17 · 1 Yohane 5:13 · Amalumbo 34:1',
    isSample: false,
    melodicPreview: [69, 74, 74, 66, 69, 74, 71, 69, 66],
    verses: [
      [
        'Cacine cine Yesu wandi,',
        'Kuwama kwakwe kwa lulumbi!',
        'Ndi mpyani nali-shitwa nankwe,',
        'Kufyalwa ku Mupashi wakwe.'
      ],
      [
        'Kumfwila Yesu e buseko,',
        'Cimonwa ca-kutemwa kwakwe,',
        'Abangeli e bandetela,',
        'Uluse lwakwe lwa kutemwa'
      ],
      [
        'Mutima wandi watalala,',
        'Ine mu Mfumu nde sekela,',
        'Ndelolela nde-lindilila,',
        'Bucetekelo bwa kutemwa,'
      ]
    ],
    chorus: [
      'Elyashi lyandi, lwimbo lwandi,',
      'ndetasha Yesu Mfumu yandi,',
      'Elyashi lyandi, lwimbo lwandi,',
      'Ndetesha Yesu Mfumu yandi.'
    ],
    englishVerses: [
      [
        'Blessed assurance, Jesus is mine!',
        'O, what a foretaste of glory divine!',
        'Heir of salvation, purchase of God,',
        'Born of His Spirit, washed in His Blood.'
      ],
      [
        'Perfect submission, perfect delight,',
        'Visions of rapture now burst on my sight,',
        'Angels descending, bring from above',
        'Echoes of mercy, whispers of love.'
      ],
      [
        'Perfect submission, all is at rest,',
        'I in my Saviour am happy and blest,',
        'Watching and waiting, looking above,',
        'Filled with His goodness, lost in His love.'
      ]
    ],
    englishChorus: [
      'This is my story, this is my song,',
      'Praising my Saviour all the day long;',
      'This is my story, this is my song,',
      'Praising my Saviour all the day long.'
    ]
  },
  {
    id: 'hymn-192',
    number: 192,
    title: 'Ali Mfwilile Palupanda',
    writer: 'Elisha A. Hoffman (1839–1929) / John H. Stockton (1813–1877)',
    englishTune: 'Glory to His Name',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ipusukilo',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 1:7 · Abena Kolose 1:20 · Ukusokolola 1:5',
    isSample: false,
    melodicPreview: [72, 72, 72, 70, 68, 72, 70, 68],
    verses: [
      [
        'Ali mfwilile pa lupanda,',
        'epo nsamba ifibi fyandi.',
        'Mumulopa wakwe ndebuta,',
        'Lumbeni Yesu.'
      ],
      [
        'Napusuka cine mufibi.',
        'Yesu aikala muntu ndi,',
        'Palupanda ambulile \'ne,',
        'Lumbeni Yesu.'
      ],
      [
        'Kafukauka wapapisha;',
        'Nasekela pakuingila,',
        'Nokusamba mwansamba bwino,',
        'Lumbeni Yesu.'
      ],
      [
        'Iseni ku kafukauka,',
        'Ipele we mwine kwa Yesu,',
        'Isa nomba akakuposha,',
        'Lumbeni Yesu.'
      ]
    ],
    chorus: [
      'Lumbeni Yesu, Lumbeni Yesu,',
      'mu mulopa wakwe ndebuta,',
      'Lumbeni Yesu.'
    ],
    englishVerses: [
      [
        'Down at the cross where my Saviour died,',
        'Down where for cleansing from sin I cried,',
        'There to my heart was the blood applied;',
        'Glory to His name!'
      ],
      [
        'I am so wondrously saved from sin,',
        'Jesus so sweetly abides within,',
        'There at the cross where He took me in;',
        'Glory to His name!'
      ],
      [
        'O precious fountain that saves from sin!',
        'I am so glad I have entered in;',
        'There Jesus saves me and keeps me clean;',
        'Glory to His name!'
      ],
      [
        'Come to this fountain so rich and sweet,',
        'Cast thy poor soul at the Saviour’s feet;',
        'Plunge in today, and be made complete;',
        'Glory to His name!'
      ]
    ],
    englishChorus: [
      'Glory to His name, glory to His name:',
      'There to my heart was the blood applied;',
      'Glory to His name!'
    ]
  },
  {
    id: 'hymn-193',
    number: 193,
    title: 'Cinshi Ushingekalila Ngo Mweo Wakwe',
    writer: 'Cyrus S. Nusbaum (1861–1937)',
    englishTune: 'His Way with Thee',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukuipeela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Abena Galatia 2:20 · Abena Filipi 1:21 · Mateo 11:29-30 · 1 Peter 5:7',
    isSample: false,
    melodicPreview: [60, 65, 65, 65, 67, 69, 69, 67, 65, 67],
    verses: [
      [
        'Cinshi ushingekalila ngo mweo wakwe?',
        'Nokwenda nankwe munshila yacepa?',
        'Cinshi shinga muleka sende icisendo?',
        'Sumina ifya fwaya.'
      ],
      [
        'Teti musuminishe kucite muntungwa?',
        'Busho lefwaya umutende wakwe?',
        'Busho lefwaya kuti Yeswa kupusushe?',
        'Sumina ifya fwaya.'
      ],
      [
        'Bushe muli cifulo cobe mu bufumu?',
        'Washininkinsha ukwesha kwa cine?',
        'Wakulamubombela kwabula kunaka?',
        'Sumina ifya fwaya.'
      ]
    ],
    chorus: [
      'Ube muntungwa kumaka yakwe;',
      'Umulopa wakwe ukusambe;',
      'Elyo kaba mu kutemwa kwakwe,',
      'Nga wacita iwe ifya fwaya.'
    ],
    englishVerses: [
      [
        'Would you live for Jesus, and be always pure and good?',
        'Would you walk with Him within the narrow road?',
        'Would you have Him bear your burden, carry all your load?',
        'Let Him have His way with thee.'
      ],
      [
        'Would you have Him make you free, and follow at His call?',
        'Would you know the peace that comes by giving all?',
        'Would you have Him save you, so that you can never fall?',
        'Let Him have His way with thee.'
      ],
      [
        'Would you in His kingdom find a place of constant rest?',
        'Would you prove Him true in providential test?',
        'Would you in His service labor always at your best?',
        'Let Him have His way with thee.'
      ]
    ],
    englishChorus: [
      'His power can make you what you ought to be;',
      'His blood can cleanse your heart and make you free;',
      'His love can fill your soul, and you will see',
      '’Twas best for Him to have His way with thee.'
    ]
  },
  {
    id: 'hymn-194',
    number: 194,
    title: 'Mulawama Mu Ng\'anda',
    writer: 'John Hugh McNaughton (1829–1891)',
    englishTune: 'Love at Home',
    category: 'weddings-and-family-life',
    categoryBemba: 'Ulupwa no Kutemwana',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 133:1 · 1 Yohane 4:7-12 · Efese 4:1-3 · Abena Kolose 3:12-14',
    isSample: false,
    melodicPreview: [67, 71, 74, 74, 72, 71, 69, 67, 69, 71],
    verses: [
      [
        'Mulawama mu ng\'anda nga mwatemwana;',
        'Nokusekela konse nga mwatemwana.',
        'Ngo mutende wafula nokusekela konse,',
        'Nshita taikokola ilapwa bwino.'
      ],
      [
        'Mu ng\'anda mulyu kwanga, nga mwatemwana;',
        'Takuli kusulana nga mwatemwana:',
        'Nshila mwaba maluba, ilawama fye lyonse,',
        'Ilamusansamusha nga mwatemwana.'
      ],
      [
        'Mu mulu muli nsansa, nga twatemwana,',
        'No kutemwa mu calo, nga twatemwana.',
        'Kamana kalapoma, kasuba kalabala,',
        'Ne Mfumu ilatemwa, nga twatemwana.'
      ],
      [
        'Yesu muncite wenu no kutemwana,',
        'Ilambo lyobe lyandi, Nokutemwana;',
        'Takuli cinga ncusha nangu fye fya mucalo,',
        'Nokupalwa fye nobe nokutemwana.'
      ]
    ],
    chorus: [
      'Mu ng\'anda, Mu ng\'anda,',
      'Nshita taikokola',
      'Nga mwatemwana.'
    ],
    englishVerses: [
      [
        'There is beauty all around, when there’s love at home;',
        'There is joy in every sound, when there’s love at home.',
        'Peace and plenty here abide, smiling sweet on every side;',
        'Time doth softly, sweetly glide, when there’s love at home.'
      ],
      [
        'In the cottage there is joy, when there’s love at home;',
        'Hate and malice can’t annoy, when there’s love at home.',
        'Roses blossom ’neath our feet, all the earth’s a garden sweet,',
        'Making life a bliss complete, when there’s love at home.'
      ],
      [
        'Kindly heaven smiles above, when there’s love at home;',
        'All the world is filled with love, when there’s love at home.',
        'Sweeter sings the brooklet by, brighter beams the azure sky;',
        'Oh, there’s One who smiles on high, when there’s love at home.'
      ],
      [
        'Jesus, make me wholly Thine, then there’s love at home;',
        'May Thy sacrifice divine fill my soul with love!',
        'Nothing shall my steps disturb, neither care nor earthly fear,',
        'Blest with Thy sweet presence near, when there’s love at home.'
      ]
    ],
    englishChorus: [
      'Love at home, love at home;',
      'Time doth softly, sweetly glide,',
      'When there’s love at home.'
    ]
  },
  {
    id: 'hymn-195',
    number: 195,
    title: 'Ndeufwaya Ulya Mulilo',
    writer: 'William H. Bathurst (1796–1877)',
    englishTune: 'O for That Flame',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Mupashi wa Mushilo',
    key: 'D Minor',
    timeSignature: '4/4',
    scripture: 'Imilimo 2:1-4 · Habakuki 3:2 · 1 Ishinte 18:36-39 · Abena Efese 3:16-19',
    isSample: false,
    melodicPreview: [62, 65, 67, 69, 67, 65, 64, 62],
    verses: [
      [
        'Ndeufwaya ulya m‘lilo',
        'wabamushilo bakale;',
        'Wabalangililyo mulu,',
        'waba fwile mumacusho.'
      ],
      [
        'Ulikwi Mfumu Mupashi',
        'wafundishe nshila yobe;',
        'Uwaya fwile Esaya',
        'Dabid abo wamushilo.'
      ],
      [
        'Ulikwi Mfumu Mupashi,',
        'uwali muli Abramu,',
        'Uwayafwile Paulo.',
        'kusanga maka ya mulu.'
      ],
      [
        'Bushe takuli Mupashi,',
        'Ulya wakwete Eliya;',
        'Wabengeshimye Mosesi,',
        'Yobo ayansha matunko.'
      ],
      [
        'Mfumu pamo fye nga kale',
        'kosheni mulimo wenu,',
        'Mitima yesu kuli‘mwe,',
        'bikeni Mupashi wenu.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O for that flame of living fire,',
        'Which shone so bright in saints of old!',
        'Which bade their famished souls aspire,',
        'Calm in distress, in danger bold!'
      ],
      [
        'Where is that Spirit, Lord, which dwell',
        'In ancient times to guide Thy way?',
        'Which strengthened David and of old',
        'Gave holy seers their shining day?'
      ],
      [
        'Where is that Spirit, Lord, whose grace',
        'In Abraham’s faithful soul was known?',
        'Which aided Paul to run his race,',
        'And find the strength around Thy throne?'
      ],
      [
        'Is not Thy grace as mighty now',
        'As when Elijah felt its power?',
        'When glory beamed from Moses’ brow,',
        'Or Job endured the trying hour?'
      ],
      [
        'Remember, Lord, the ancient days;',
        'Renew Thy work; Thy grace impart;',
        'And while to Thee our souls we raise,',
        'O let Thy Spirit fill each heart!'
      ]
    ],
    englishChorus: null
  },
  {
    id: 'hymn-196',
    number: 196,
    title: 'Mulya Maka Mu Mulopa',
    writer: 'Lewis E. Jones (1865–1936)',
    englishTune: 'There Is Power in the Blood',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ipusukilo',
    key: 'B♭ Major',
    timeSignature: '4/4',
    scripture: '1 Yohane 1:7 · Ukusokolola 12:11 · AbaHebere 9:14 · 1 Peter 1:18-19',
    isSample: false,
    melodicPreview: [58, 62, 65, 65, 65, 67, 65, 62, 60, 58],
    verses: [
      [
        'Busho lefwaya kwelelwo bubi,',
        'mwaliba maka mumulopa,',
        'Taulefwaya ukwansho bubi?',
        'Muli maka mu mulopa.'
      ],
      [
        'Busho lefwayo cimfye cilumba?',
        'Mwaliba maka mu mulopa,',
        'Iso sangululwe pa Kalvali,',
        'muli maka mu mulopa.'
      ],
      [
        'Bushe tetyu bombe ncito yakwe?',
        'Mwaliba maka mu mulopa,',
        'Bubi bonse kuti bwafumiwa,',
        'muli maka mu mulopa.'
      ],
      [
        'Busho lefwayo bute nge mpemba?',
        'Mwaliba maka mu mulopa,',
        'Shani tetyu fwayo ku mwimbila?',
        'Muli maka mu mulopa.'
      ]
    ],
    chorus: [
      'Mulya maka yakupapisha,',
      'Mum‘lopa wampanga,',
      'Amaka ayakupapisha,',
      'Mu m‘lopa wakwa Yesu.'
    ],
    englishVerses: [
      [
        'Would you be free from the burden of sin?',
        'There’s power in the blood, power in the blood;',
        'Would you o’er evil a victory win?',
        'There’s wonderful power in the blood.'
      ],
      [
        'Would you be free from your passion and pride?',
        'There’s power in the blood, power in the blood;',
        'Come for a cleansing to Calvary’s tide;',
        'There’s wonderful power in the blood.'
      ],
      [
        'Would you do service for Jesus your King?',
        'There’s power in the blood, power in the blood;',
        'Daily His marvelous praise would you sing?',
        'There’s wonderful power in the blood.'
      ],
      [
        'Would you be whiter, much whiter than snow?',
        'There’s power in the blood, power in the blood;',
        'Sin stains are lost in its life-giving flow;',
        'There’s wonderful power in the blood.'
      ]
    ],
    englishChorus: [
      'There is power, power, wonder-working power',
      'In the blood of the Lamb;',
      'There is power, power, wonder-working power',
      'In the precious blood of the Lamb.'
    ]
  },
  {
    id: 'hymn-197',
    number: 197,
    title: 'Tapali Kwicusha',
    writer: 'William O. Cushing (1823–1902) / Ira D. Sankey (1840–1908)',
    englishTune: 'There’ll Be No Dark Valley',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ukwisa kwa Bubili',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 21:4 · Amalumbo 23:4 · 1 Abena Tesalonika 4:16-17 · Esaya 35:10',
    isSample: false,
    melodicPreview: [60, 65, 65, 65, 69, 67, 65, 65, 67, 69],
    verses: [
      [
        'Tapali kwicusha ilya isa;',
        'tapati kwicusha ilya isa;',
        'Tapali kwicusha ilya isa;',
        'kusenda bantu bakwe.'
      ],
      [
        'Tapali bulanda ilya isa:',
        'Tapali bulanda ilya isa;',
        'Tapali bulanda ilya isa;',
        'kusenda bantu bakwe.'
      ],
      [
        'Tapali minsoshi ilya isa;',
        'tapali minsoshi ilya isa;',
        'Tapali minsoshi ilya:',
        'kusenda bantu bakwe.'
      ],
      [
        'Tukemba ulwimbo ilya isa;',
        'tukemba ulwimbo ilya isa;',
        'Tukemba ulwimbo ilya isa;',
        'kusenda bantu bakwe.'
      ]
    ],
    chorus: [
      'Kusenda bantu bakwe:',
      'kusenda bantu bakwe;',
      'Tapali kwicusha ilya isa,',
      'kusenda bantu bakwe.'
    ],
    englishVerses: [
      [
        'There’ll be no dark valley when Jesus comes,',
        'There’ll be no dark valley when Jesus comes;',
        'There’ll be no dark valley when Jesus comes',
        'To gather His loved ones home.'
      ],
      [
        'There’ll be no more sorrow when Jesus comes,',
        'There’ll be no more sorrow when Jesus comes;',
        'There’ll be no more sorrow when Jesus comes',
        'To gather His loved ones home.'
      ],
      [
        'There’ll be no more weeping when Jesus comes,',
        'There’ll be no more weeping when Jesus comes;',
        'There’ll be no more weeping when Jesus comes',
        'To gather His loved ones home.'
      ],
      [
        'There’ll be songs of triumph when Jesus comes,',
        'There’ll be songs of triumph when Jesus comes;',
        'There’ll be songs of triumph when Jesus comes',
        'To gather His loved ones home.'
      ]
    ],
    englishChorus: [
      'To gather His loved ones home,',
      'To gather His loved ones home;',
      'There’ll be no dark valley when Jesus comes',
      'To gather His loved ones home.'
    ]
  },
  {
    id: 'hymn-198',
    number: 198,
    title: 'Ukuba Yesu e Cibusa',
    writer: 'Peter P. Bilhorn (1865–1936)',
    englishTune: 'The Best Friend Is Jesus',
    category: 'praise-and-worship',
    categoryBemba: 'Yesu Cibusa Wesu',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Amapinda 18:24 · Yohane 15:13-15 · AbaHebere 13:5 · Mateo 28:20',
    isSample: false,
    melodicPreview: [68, 70, 72, 70, 68, 65, 68, 70, 72, 70, 68],
    verses: [
      [
        'Ukuba yesu e cibusa;',
        'Ilyo macusho yafulisha,',
        'Aposha umutima, alapela, amaka;',
        'Cibusa wacine ni Yesu.'
      ],
      [
        'Ninsanga cibusa ni Yesu;',
        'ulensansamusho mutima,',
        'Mumaboko ayakwe nshakatine akantu;',
        'cibusa wacine ni Yesu.'
      ],
      [
        'Nangu fye mpite mumalanda.',
        'nangu mabimbi yacimana,',
        'Ine nshakatineko nelyo kuba nomwenso,',
        'cibusa wacine ni Yesu.'
      ],
      [
        'Ilyo nkafika kumwesuko,',
        'tukaba naba tangilako,',
        'Tuka lamwimbila fye nyimbo ukwapenape,',
        'Cibusa wacine ni Yesu.'
      ]
    ],
    chorus: [
      'Yesu e cibusa wesu (Yesu wine)',
      'cibusa wesu wacine (Yesu wesu)',
      'Kulakwafwa nga wawa,',
      'nokukumfwa nga waita,',
      'cibusa wacine Yesu.'
    ],
    englishVerses: [
      [
        'Oh, the best Friend to have is Jesus,',
        'When the cares of this life oppress;',
        'He will heal each wounded heart, He will strength and peace impart;',
        'Oh, the best Friend to have is Jesus.'
      ],
      [
        'What a Friend for the weary pilgrim,',
        'How He comforts the fainting soul;',
        'In His loving arms secure, while the stormy tempests roar;',
        'Oh, the best Friend to have is Jesus.'
      ],
      [
        'Though I pass through the deepest sorrow,',
        'Though the waters around me roll;',
        'I will never yield to fear, for my Saviour is so near;',
        'Oh, the best Friend to have is Jesus.'
      ],
      [
        'When at last I shall reach the homeland,',
        'With the redeemed who have gone before;',
        'We shall sing His boundless grace, as we look upon His face;',
        'Oh, the best Friend to have is Jesus.'
      ]
    ],
    englishChorus: [
      'The best Friend to have is Jesus, (Yes, Jesus,)',
      'The best Friend to have is Jesus; (My Jesus;)',
      'He will help you when you fall, He will hear you when you call;',
      'Oh, the best Friend to have is Jesus.'
    ]
  },
  {
    id: 'hymn-199',
    number: 199,
    title: 'Natotelwe Lesa',
    writer: 'Fanny J. Crosby / William H. Doane',
    englishTune: 'To God Be the Glory',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutootela no Kulumbanya',
    key: 'A♭ Major',
    timeSignature: '3/4',
    scripture: 'Yohane 3:16 · Amalumbo 126:3 · Abena Efese 1:7 · 1 Yohane 1:7 · 1 Abena Korinte 15:57',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 70, 68, 72, 75, 75, 73, 72, 70],
    verses: [
      [
        "Natotelwe Lesa, pafint' a cita;",
        'Atemenwe calo apele mwane;',
        'Uwa tufwilile elambo lyesu,',
        "Atwiswilyo mulu 'fwe twingile mo."
      ],
      [
        'Ubwe bulubulo bwa mumulopa!',
        'Ebulayo bwine ku wa sumina',
        'No muntu wabipa nga a sumina,',
        'lilya fye lapila ena elelwa.'
      ],
      [
        'Fikulwa citile fya tufundisha,',
        'Nefwe twasekela mu mwana wakwe;',
        'Lelo tukacila muku sekela ilyo',
        'Yeswa kesa kwisa tusenda'
      ]
    ],
    chorus: [
      'Imbileni Mfumu, calo cumfwe naco,',
      'Imbileni Mfumu bantu basekele;',
      'Isa kuli Tata, mu mwana wakwe;',
      "Tumupyo lulumbi, pafint' acita."
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'To God be the glory, great things He hath done;',
        'So loved He the world that He gave us His Son,',
        'Who yielded His life an atonement for sin,',
        'And opened the life gate that all may go in.'
      ],
      [
        'O perfect redemption, the purchase of blood,',
        'To every believer the promise of God;',
        'The vilest offender who truly believes,',
        'That moment from Jesus a pardon receives.'
      ],
      [
        'Great things He hath taught us, great things He hath done,',
        'And great our rejoicing through Jesus the Son;',
        'But purer, and higher, and greater will be',
        'Our wonder, our transport, when Jesus we see.'
      ]
    ],
    englishChorus: [
      'Praise the Lord, praise the Lord, let the earth hear His voice!',
      'Praise the Lord, praise the Lord, let the people rejoice!',
      'O come to the Father through Jesus the Son,',
      'And give Him the glory, great things He hath done.'
    ]
  },
  {
    id: 'hymn-200',
    number: 200,
    title: 'Uli wa Mushilo',
    writer: 'Reginald Heber / John B. Dykes',
    englishTune: 'Holy, Holy, Holy',
    category: 'praise-and-worship',
    categoryBemba: 'Ukulumbanya Lesa',
    key: 'E♭ Major',
    timeSignature: '4/4',
    scripture: 'Esaya 6:3 · Ukusokolola 4:8-11 · Amalumbo 99:5, 9',
    isSample: false,
    melodicPreview: [63, 63, 67, 67, 70, 70, 70, 72, 72, 70, 67, 63, 65, 67],
    verses: [
      [
        'Uli wa mushilo, Lesa wa maka!',
        'Ulucelo celo twakulamwimbila;',
        'Uli wa mushilo, Wa luse Mfumu!',
        'Mwine wa fyonse, Uwa pe na pe.'
      ],
      [
        'Uli wa mushilo, Pano pa calo;',
        'Bangeli bawila pa makasa yenu,',
        'Bonse ba kumulu ba la mupepa;',
        'Niwe fye weka uwa pe na pe.'
      ],
      [
        "Nangu wingafimbwa ne mfifi 'kulu,",
        'Ne linso lya muntu teti limumone,',
        'Uli wa mushilo, Umbi takuli;',
        'Wa luse wa ma-ka, Wa mushilo.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Holy, holy, holy! Lord God Almighty!',
        'Early in the morning our song shall rise to Thee;',
        'Holy, holy, holy, merciful and mighty!',
        'God in three Persons, blessed Trinity!'
      ],
      [
        'Holy, holy, holy! All the saints adore Thee,',
        'Casting down their golden crowns around the glassy sea;',
        'Cherubim and seraphim falling down before Thee,',
        'Which wert, and art, and evermore shalt be.'
      ],
      [
        'Holy, holy, holy! though the darkness hide Thee,',
        'Though the eye of sinful man Thy glory may not see;',
        'Only Thou art holy; there is none beside Thee,',
        'Perfect in power, in love, and purity.'
      ]
    ]
  },
  {
    id: 'hymn-201',
    number: 201,
    title: 'Amfumishe Mo',
    writer: 'Henry J. Zelley / Henry L. Gilmour',
    englishTune: 'He Brought Me Out',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukupusuka no Kutootela',
    key: 'A♭ Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 40:1-3 · Esaya 38:17 · Amalumbo 30:3',
    isSample: false,
    melodicPreview: [60, 63, 68, 72, 70, 68, 65, 68, 70, 68],
    verses: [
      [
        'Muti-ma wandi wabifya ku Mfumu;',
        'Mpulu-mushi sha-ntwele mu cilindi;',
        'Ali-mpuswishe ukufuma ku-mfwa,',
        'Nali-lile ku Mfumu ku-mfumya mo.'
      ],
      [
        'Ambi-kile pepi nankwe pa libwe;',
        'Naku-laika-la na Wene lyonse;',
        "Teti-ngwile mu fibi 'lyo ndi nankwe,",
        'Mulu-se lwakwe nkakwate cite-bo'
      ],
      [
        'Ampe-le lwimbo lupya lwa-malumbo;',
        'Naku-lamulu-mbanya i-ne lyonse;',
        'Mulyu buseko mu muti-ma wandi,',
        'Noku-lalumba Mupusushi wandi.'
      ],
      [
        "Naku-laimba 'fya luse kuli 'we;",
        'Naku-lamwimbi-la bonse bamone;',
        'Naku-laimba fya lupu-sukilo,',
        'Bengi bomfwe shiwi bamusumine.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'My heart was distressed \'neath Jehovah\'s dread frown,',
        'And low in the pit where my sins dragged me down;',
        'I cried to the Lord from the deep miry clay,',
        'Who lovingly brought me out to the light of day.'
      ],
      [
        'He placed me upon the strong Rock by His side,',
        'My steps were established and here I\'ll abide;',
        'No danger of falling while here I remain,',
        'But stand by His grace until the crown I gain.'
      ],
      [
        'He gave me a song, \'twas a new song of praise;',
        'By day and by night its sweet notes I will raise;',
        'My heart\'s overflowing, I\'m happy and free,',
        'I\'ll praise my Redeemer, Who has rescued me.'
      ],
      [
        'I\'ll sing of His wonderful mercy to me,',
        'I\'ll praise Him till all men His goodness shall see;',
        'I\'ll sing of salvation at home and abroad,',
        'Till many shall hear the truth and trust in God.'
      ]
    ],
    englishChorus: [
      'He brought me out of the miry clay,',
      'He set my feet on the rock to stay;',
      'He puts a song in my soul today,',
      'A song of praise, hallelujah!'
    ]
  },
  {
    id: 'hymn-202',
    number: 202,
    title: "Yesu Mungabushe 'Ne",
    writer: 'Edward Hopper / John E. Gould',
    englishTune: 'Jesus, Saviour, Pilot Me',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutungululwa na Yesu',
    key: 'B♭ Major',
    timeSignature: '3/4',
    scripture: 'Marko 4:35-41 · Mateo 8:23-27 · Amalumbo 107:23-30',
    isSample: false,
    melodicPreview: [70, 72, 74, 72, 70, 69, 70, 72, 70, 69, 67, 65],
    verses: [
      [
        "Yesu mu-ngabushe 'ne,",
        'Kwishilya lya cimana',
        'Ndetina amabimbi,',
        'Amabwe yaluluma',
        'Mwalishi-ba inshila',
        "Yesu mu-ngabushe 'ne."
      ],
      [
        'Nge fyo nyi-na no mwana,',
        'Alamu-talalika',
        'Amabi-mbi yaumfwa,',
        'Nga mwaya-talalika',
        'Mwe Mfumu ya cimana',
        "Yesu mu-ngabushe 'ne"
      ],
      [
        'Ilyo nka-ba pa-calo,',
        'Mabimbi yakantinya;',
        'Nkasanga ukutusha,',
        'Nkafuka-tilwa ne mwe;',
        "Ngumfwe mu lenjeba 'ti",
        'Witina ndekwabusha.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Jesus, Savior, pilot me',
        'Over life’s tempestuous sea;',
        'Unknown waves before me roll,',
        'Hiding rock and treacherous shoal;',
        'Chart and compass came from Thee:',
        'Jesus, Savior, pilot me.'
      ],
      [
        'As a mother stills her child,',
        'Thou canst hush the ocean wild;',
        'Boisterous waves obey Thy will,',
        'When Thou say’st to them, “Be still!”',
        'Wondrous Sovereign of the sea,',
        'Jesus, Savior, pilot me.'
      ],
      [
        'When at last I near the shore,',
        'And the fearful breakers roar',
        '’Twixt me and the peaceful rest,',
        'Then, while leaning on Thy breast,',
        'May I hear Thee say to me,',
        '“Fear not, I will pilot thee.”'
      ]
    ]
  },
  {
    id: 'hymn-203',
    number: 203,
    title: 'Mupashi Naisa',
    writer: 'Frank Bottome / William J. Kirkpatrick',
    englishTune: 'The Comforter Has Come',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Umupashi wa Mushilo',
    key: 'A♭ Major',
    timeSignature: '3/4',
    scripture: 'Yohane 14:16-18, 26 · Yohane 16:7-14 · Imilimo 2:1-4',
    isSample: false,
    melodicPreview: [63, 68, 68, 70, 72, 68, 72, 73, 72, 70, 68],
    verses: [
      [
        'Bile-ni imbila, konse kulyu muntu,',
        'Uku-li mitima ya cula cibi,',
        'Bena Kristu bonse, Bile-ni no kwanga,',
        'Mupa-shi na-isa.'
      ],
      [
        'Bushi-ku nabupwa, Ka-suba kaisa,',
        'Kale-sha mabimbi ne nku-ta ikali',
        'Nkapi-ta pa mpili, Nkala-pita bwangu;',
        'Mupa-shi Na-isa.'
      ],
      [
        'Mfumu ya shamfumu, Onda-pe mitima;',
        'Yaba-fungwa bonse, No ku bapususha;',
        "Bonse 'balubulwa, Bale imbo lwimbo,",
        'Mupa-shi Na-isa.'
      ],
      [
        'Kute-mwa kwa cine, Nkakulande shani,',
        'Nolu-limi lwandi, ku bantu baluba;',
        'Mu ci-kuku cakwe, Na-ngu ndi wabipa;',
        'Mupa-shi Na-isa.'
      ],
      [
        "Natu-mfwike konse 'lyo tu-lemwimbila,",
        "Na 'ba-shila bonse, Twimbi-le ca pamo;",
        'Lwimbo lwa kutemwa, Ulo lushakapwe:',
        'Mupa-shi Na-isa.'
      ]
    ],
    chorus: [
      'Mupa-shi Naisa, Mupa-shi Naisa,',
      'Kufu-ma kumulu, Kuli Tala wesu,',
      'Bile-ni imbila konse kulyu muntu;',
      'Mupa-shi Na-isa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        "O spread the tidings 'round, wherever man is found,",
        'Wherever human hearts and human woes abound;',
        'Let every Christian tongue proclaim the joyful sound:',
        'The Comforter has come!'
      ],
      [
        'The long, long night is past, the morning breaks at last,',
        'And hushed the dreadful wail and fury of the blast,',
        'As o\'er the golden hills the day advances fast:',
        'The Comforter has come!'
      ],
      [
        'Lo, the great King of kings, with healing in His wings,',
        'To every captive soul a full deliverance brings;',
        'And through the vacant cells the song of triumph rings:',
        'The Comforter has come!'
      ],
      [
        'O boundless love divine! how shall this tongue of mine',
        'To wond\'ring mortals tell the matchless grace divine—',
        'That I, a child of hell, should in His image shine!',
        'The Comforter has come!'
      ],
      [
        'Sing, till the echoes fly above the vaulted sky,',
        'And all the sainted hosts to earth are drawing nigh,',
        'In strains of endless love, the song that ne\'er shall die:',
        'The Comforter has come!'
      ]
    ],
    englishChorus: [
      'The Comforter has come, the Comforter has come!',
      'The Holy Ghost from heav\'n, the Father\'s promise giv\'n;',
      'O spread the tidings \'round, wherever man is found—',
      'The Comforter has come!'
    ]
  },
  {
    id: 'hymn-204',
    number: 204,
    title: 'Bwela We Waluba',
    writer: 'Horatius Bonar / Ira D. Sankey',
    englishTune: 'Welcome Wanderer Welcome',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukwita Abalubile',
    key: 'E♭ Major',
    timeSignature: '4/4',
    scripture: 'Luka 15:11-24 · Esaya 55:7 · Yeremia 31:20',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Mu-mpanga ya bwe-ni mo walubila',
        'Ukomfwe shiwi, "We mwana wandi."'
      ],
      [
        'U-mo muli nsa-la, No kutembuka',
        "'Sa kubuseko, we mwana wandi."
      ],
      [
        'Fu-ma ku fika-nsa, No kushumfwana;',
        'Mutima wacu-la mwana wandi.'
      ],
      [
        'Ci -bi nacisu-lwa, U-cili wandi;',
        'Ndekulolela, we mwana wandi.'
      ],
      [
        "Ku-tali 'ko wa-ya, Na nombo leya?",
        'Nalikwelela, Bwela we mwana wandi'
      ],
      [
        'Mo-na ifya ku-lya, Ni-mpekanisha;',
        "'So ipakishe, we mwana wandi."
      ],
      [
        "Fi-busa tapa-li, Ng'anda ne ncito;",
        'Nalikutemwa, We mwana wandi.'
      ]
    ],
    chorus: [
      'Bwela wewalubile, Bwela ku mushi!',
      'Waliye chiyeyeye, We bwela! Bwela!'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'In the land of strangers, whither thou hast gone,',
        'Hear a far voice calling, “My son! my son!”'
      ],
      [
        'From the land of hunger, fainting, famished, lone,',
        'Come to love and gladness, “My son! my son!”'
      ],
      [
        'Quit the haunts of riot, wasted, wild, and wan;',
        'Cast away thy sorrow, “My son! my son!”'
      ],
      [
        'Forget the past of darkness, now that thou art won;',
        'Leave the sin that grieved Me, “My son! my son!”'
      ],
      [
        'Far off thou hast wandered; wilt thou farther roam?',
        'Come, and all is pardoned, “My son! my son!”'
      ],
      [
        'See the feast prepared! while the robe is on,',
        'Thou art welcomed warmly, “My son! my son!”'
      ],
      [
        'Thou hast found a Father, who has loved His own;',
        'Rest from all thy sorrow, “My son! my son!”'
      ]
    ],
    englishChorus: [
      'Welcome, wanderer, welcome! Welcome back to home!',
      'Thou hast wandered far away: Welcome, wanderer, home!'
    ]
  },
  {
    id: 'hymn-205',
    number: 205,
    title: 'Ilyo Yesu Alekwita',
    writer: 'Will L. Thompson',
    englishTune: 'While Jesus Whispers',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukwita Abalubile',
    key: 'A♭ Major',
    timeSignature: '6/8',
    scripture: 'Mateo 11:28 · 2 Abena Korinte 6:2 · Ukusokolola 22:17',
    isSample: false,
    melodicPreview: [72, 70, 68, 65, 68, 70, 72, 70, 68],
    verses: [
      [
        'I-lyo Yesu alekwita, I-sa- mubi,',
        'Tu-le-kupa-pati-la, I -sa- mubi.',
        'No-mba nshita isu-ma, l-sa- mubi,',
        'No-mba nshita yakwi-sa, l-sa mubi'
      ],
      [
        'U-le-pita cafi-na, l-sa- mubi,',
        "Ye-su 'kase-nda co-be, l-sa- mubi,",
        "Ilyo Yes' a-kute-mwa, I -sa- mubi,",
        'E-u-katu-la i-we, l-sa- mubi'
      ],
      [
        'U-mfwa ishi-wi lya-kwe, l-sa- mubi,',
        'I-so poke mapa-lo, I-sa- mubi',
        'l-lyo Yesu a-lekwi-ta, I-sa- mubi,',
        'Tu-le kupa-pati-la, I-sa- mubi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'While Jesus whispers to you, Come, sinner, come!',
        'While we are praying for you, Come, sinner, come!',
        'Now is the time to own Him, Come, sinner, come!',
        'Now is the time to know Him, Come, sinner, come!'
      ],
      [
        'Are you too heavy laden? Come, sinner, come!',
        'Jesus will bear your burden, Come, sinner, come!',
        'Jesus will not deceive you, Come, sinner, come!',
        'Jesus can now receive you, Come, sinner, come!'
      ],
      [
        'Oh, hear His tender pleading, Come, sinner, come!',
        'Come and receive the blessing, Come, sinner, come!',
        'While Jesus whispers to you, Come, sinner, come!',
        'While we are praying for you, Come, sinner, come!'
      ]
    ]
  },
  {
    id: 'hymn-206',
    number: 206,
    title: 'Cintu Nshi Wancitila?',
    writer: 'Frances R. Havergal / Philip P. Bliss',
    englishTune: 'What Hast Thou Done for Me?',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukupeela Umweo Kuli Kristu',
    key: 'C Major',
    timeSignature: '6/8',
    scripture: 'Tito 2:14 · 1 Peter 2:21-24 · Abena Galatia 2:20 · 2 Abena Korinte 5:15',
    isSample: false,
    melodicPreview: [67, 67, 69, 67, 64, 67, 72, 71, 69, 67],
    verses: [
      [
        'Nafwi-lile iwe wine, Wala-nciti-la nshi?',
        'Kuti ulu-buke, Uku-fuma ku mfwa,',
        "N'ine naku-fwili-le 'we, Wala-nciti-la nshi?",
        'Nafwi-lile iwe wine, Wala-nciti-la nshi?'
      ],
      [
        "Ng'anda yakwa Tata, No lu-lumbi lwandi;",
        'Nai-shile panshi, Uku-ti ‘ne ncule,',
        'Fyonse fine nafi-shile, Bushe finshi washa?',
        'Fyonse fi na-lifi-shile, Bushe finshi washa?'
      ],
      [
        'Nali kucu-lile, Ifyo nshinga-landa,',
        'Uku-cula konse, Kuti upu-suke,',
        'Naku-sende-le fi fyonse, Finshi wala-senda?',
        'Naku-sendele fi fyonse, Finshi wala-senda?'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I gave My life for thee, My precious blood I shed,',
        'That thou might’st ransomed be, and quickened from the dead;',
        'I gave, I gave My life for thee, what hast thou given for Me?',
        'I gave, I gave My life for thee, what hast thou given for Me?'
      ],
      [
        'My Father’s house of light, My glory-circled throne',
        'I left for earthly night, for wanderings sad and lone;',
        'I left, I left it all for thee, hast thou left aught for Me?',
        'I left, I left it all for thee, hast thou left aught for Me?'
      ],
      [
        'I suffered much for thee, more than thy tongue can tell,',
        'Of bitterest agony, to rescue thee from hell;',
        'I’ve borne, I’ve borne it all for thee, what hast thou borne for Me?',
        'I’ve borne, I’ve borne it all for thee, what hast thou borne for Me?'
      ]
    ]
  },
  {
    id: 'hymn-207',
    number: 207,
    title: 'Alinjelela',
    writer: 'John Newton',
    englishTune: 'Seals My Pardon',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ukusuminina pa Lupanda',
    key: 'A♭ Major',
    timeSignature: '3/4',
    scripture: 'Luka 23:33-43 · Zakaria 12:10 · 1 Peter 2:24 · Abena Efese 1:7',
    isSample: false,
    melodicPreview: [63, 68, 72, 70, 68, 65, 63, 68, 70, 72],
    verses: [
      [
        "Namu-mwene pa lu-panda, Mulo-pa 'le-suma",
        'Ando-leke-sha no luse-, Pepi no lu-panda'
      ],
      [
        'Nshaka-labe kulo-lesha, Kufi-ka no kufwa-.',
        "Ali kwati ale-njeba-, Fya mfwa 'lyo ndo-lesha."
      ],
      [
        'Kundo-lesha kwa ci-bili, Ati, Nawe-lelwa-.',
        "Mulo-pa ci-lambu cobe-, Kuti 'be no mweo."
      ],
      [
        'Bubi bwandi bwale-ngele, Kuti Iwe ufya-,',
        'Iwe wafu-lisho luse, Wanje-lelo bubi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I saw One hanging on a tree, in agony and blood,',
        'Who fixed His languid eyes on me, as near His cross I stood.'
      ],
      [
        'Sure, never to my latest breath, can I forget that look;',
        'It seemed to charge me with His death, though not a word He spoke.'
      ],
      [
        'A second look He gave, which said, “I freely all forgive;',
        'This blood is for thy ransom paid, I die that thou mayst live.”'
      ],
      [
        'Thus, while His death my sin displays in all its blackest hue,',
        'Such is the mystery of grace, it seals my pardon too!'
      ]
    ]
  },
  {
    id: 'hymn-208',
    number: 208,
    title: 'Endeni Bwino',
    writer: 'Fanny J. Crosby / William H. Doane',
    englishTune: 'Tread Softly',
    category: 'praise-and-worship',
    categoryBemba: "Umutende mu Ng'anda ya kwa Lesa",
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Habakuki 2:20 · Amalumbo 89:7 · Kasambilizya 5:1 · Ukufuma 3:5',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 65, 67, 69],
    verses: [
      [
        'Tondolo, Tondolo, Umfweni shiwi;',
        'Talaleni mumfwe kutikisheni.'
      ],
      [
        "Tondolo, Tondolo, Mwa mushilo 'mu;",
        "Mashiwi yafuma 'pa ya cikuku."
      ],
      [
        'Tondolo, Tufukame. Tuicefye;',
        'Natukwata busuma bwa Edeni.'
      ],
      [
        'Tondolo, Tondolo, Musange luse;',
        'Tondolo, Tondolo, Muloleleni.'
      ]
    ],
    chorus: [
      "Endeni bwino Shikulu 'li pano,",
      'Mwende bwino bwino aletufwaya'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Be silent, be silent, a whisper is heard;',
        'Be silent, and listen to God’s holy Word.'
      ],
      [
        'Be silent, be silent, for holy this place;',
        'This altar that echoes the message of grace.'
      ],
      [
        'Be silent, be silent, and bow we the knee;',
        'How blessed the peace that is given to thee.'
      ],
      [
        'Be silent, be silent, His presence adore;',
        'Be silent, be silent, and wait evermore.'
      ]
    ],
    englishChorus: [
      'Tread softly, tread softly, the Master is here;',
      'Tread softly, tread softly, He bids us draw near.'
    ]
  },
  {
    id: 'hymn-209',
    number: 209,
    title: 'Apepi Nankwe',
    writer: 'William Cowper / John B. Dykes',
    englishTune: 'O for a Closer Walk',
    category: 'faith-and-trust',
    categoryBemba: 'Ukwenda Pepi na Lesa',
    key: 'A♭ Major',
    timeSignature: '3/4',
    scripture: 'Ukutendeka 5:24 · Mika 6:8 · Amalumbo 51:11-12 · 1 Yohane 1:7',
    isSample: false,
    melodicPreview: [72, 72, 73, 72, 70, 68, 65, 68, 70, 72],
    verses: [
      [
        'Ukwenda pepi na Lesa,',
        'E nshila ya ku mu-lu;',
        'Lubuto lubushe nshila-,',
        'Yakuya ku Mfumu.'
      ],
      [
        'Bwela Mupa-shi Wa-shila,',
        'We ntu-mi i-ya ci-ne;',
        'Nali pato bubi pantu-,',
        "Bufumya ku-li 'Mwe"
      ],
      [
        'Kwali nshita shamu-tende,',
        'Ndatemwe lyo njibu-sha;',
        'Shali-ya nsha-kashi-sange,',
        'Muli cino calo.'
      ],
      [
        'Aka-lubi nate-mwisha,',
        'Nangu kabe shani-,',
        "Ngafwa kafu-me ku-li 'ne-,",
        'Nshale fye na Imwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O for a closer walk with God, a calm and heavenly frame,',
        'A light to shine upon the road that leads me to the Lamb!'
      ],
      [
        'Return, O holy Dove, return, sweet messenger of rest!',
        'I hate the sins that made Thee mourn and drove Thee from my breast.'
      ],
      [
        'What peaceful hours I once enjoyed! How sweet their memory still!',
        'But they have left an aching void the world can never fill.'
      ],
      [
        'The dearest idol I have known, whate\'er that idol be,',
        'Help me to tear it from Thy throne, and worship only Thee.'
      ]
    ]
  },
  {
    id: 'hymn-210',
    number: 210,
    title: 'Yesu wa Kupapa',
    writer: 'Elisha A. Hoffman',
    englishTune: 'What a Wonderful Saviour',
    category: 'praise-and-worship',
    categoryBemba: 'Yesu Wakupapisha',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Esaya 9:6 · Tito 2:14 · 1 Peter 1:18-19 · Abena Kolose 1:13-14',
    isSample: false,
    melodicPreview: [66, 67, 69, 71, 69, 66, 62, 64, 66, 67, 66],
    verses: [
      [
        'Kristu e watufwilile Yesu Wakupapisha',
        'Twashitilwe no mutengo Yesu Wakupapisha.'
      ],
      [
        'Ansambile no mulopa Yesu Wakupapisha;',
        'Ambweseshe kuli Lesa Yesu Wakupapisha.'
      ],
      [
        'Abutisho mweo wandi Yesu Wakupapisha;',
        "Akulateka muli 'ne Yesu Wakupapisha."
      ],
      [
        'Alenda pepi na ine Yesu Wakupapisha;',
        'No kunsunge nshiku shonse Yesu Wakupapisha'
      ],
      [
        'Namupo mutima wandi Wakupapisha Yesu;',
        'Nasula fyonse fya calo Wakupapisha Yesu.'
      ]
    ],
    chorus: [
      'Yesu Wakupapisha Mupusushi wandi;',
      'Yesu Wakupapisha e Mfumu yandi.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Christ has for sin atonement made, What a wonderful Saviour!',
        'We are redeemed! the price is paid, What a wonderful Saviour!'
      ],
      [
        'I praise Him for the cleansing blood, What a wonderful Saviour!',
        'That reconciled my soul to God, What a wonderful Saviour!'
      ],
      [
        'He cleanses me from all my sin, What a wonderful Saviour!',
        'And walks and speaks with me within, What a wonderful Saviour!'
      ],
      [
        'He walks with me from day to day, What a wonderful Saviour!',
        'And leads me in the narrow way, What a wonderful Saviour!'
      ],
      [
        'To Him I’ve given all my heart, What a wonderful Saviour!',
        'The world and I forever part, What a wonderful Saviour!'
      ]
    ],
    englishChorus: [
      'What a wonderful Saviour is Jesus, my Jesus!',
      'What a wonderful Saviour is Jesus, my Lord!'
    ]
  },
  {
    id: 'hymn-211',
    number: 211,
    title: 'Mfula ye Palo',
    writer: 'Daniel W. Whittle / James McGranahan',
    englishTune: 'Showers of Blessing',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Imfula ya Mapalo',
    key: 'B♭ Major',
    timeSignature: '6/8',
    scripture: 'Esekiele 34:26 · Hosea 6:3 · Malaki 3:10 · Zakaria 10:1',
    isSample: false,
    melodicPreview: [62, 65, 70, 74, 72, 70, 67, 70, 65],
    verses: [
      [
        'Kukabe mfula ye pa-lo, Bulayo bwa kutemwa;',
        'Nshita isuma ike-sa, Kufuma kuli Yesu.'
      ],
      [
        'Kukabe mfula ye pa-lo, Yakutubukulula;',
        'Mu mpili na mu miko-nko, Monse mukabe mfula'
      ],
      [
        'Kukabe mfula ye pa-lo, Ikafuma ku mulu:',
        'Ikapelwa yakutwa-fwa, Kusose shiwi Lyakwe.'
      ],
      [
        'Kukabe mfula ye pa-lo, Yalaisa fye bwangu:',
        'Tulapile kuli Lesa, No kwita pali Yesu.'
      ]
    ],
    chorus: [
      'Mfula ye palo Eyo tulekabila;',
      'Mu luse lwenu twalomba, Imfula ya bupalo'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There shall be showers of blessing: This is the promise of love;',
        'There shall be seasons refreshing, Sent from the Savior above.'
      ],
      [
        'There shall be showers of blessing: Precious reviving again;',
        'Over the hills and the valleys, Sound of abundance of rain.'
      ],
      [
        'There shall be showers of blessing: Send them upon us, O Lord!',
        'Grant to us now a refreshing; Come, and now honor Thy Word.'
      ],
      [
        'There shall be showers of blessing: Oh, that today they might fall,',
        'Now as to God we\'re confessing, Now as on Jesus we call!'
      ]
    ],
    englishChorus: [
      'Showers of blessing, Showers of blessing we need:',
      'Mercy drops round us are falling, But for the showers we plead.'
    ]
  },
  {
    id: 'hymn-212',
    number: 212,
    title: 'Mutende Usuma',
    writer: 'Peter P. Bilhorn',
    englishTune: 'Sweet Peace',
    category: 'hope-and-encouragement',
    categoryBemba: 'Umutende wa kwa Lesa',
    key: 'A♭ Major',
    timeSignature: '6/8',
    scripture: 'Yohane 14:27 · Abena Filipi 4:7 · Amalumbo 29:11 · Kolose 3:15',
    isSample: false,
    melodicPreview: [72, 72, 72, 73, 72, 70, 68, 65, 68],
    verses: [
      [
        'Mu mutima muli lwimbo, Natemwa kulubwekesha;',
        'Ndemba libili libili-, Mutende wa kutemwa.'
      ],
      [
        'Umutende pa lupanda, Imisha yandi yapelwe;',
        'Takuli mufula umbi-, Kano fye umutende.'
      ],
      [
        "Yesu Mfumu asamikwe, Muli 'ne mwali mutende;",
        'Nasangilemo bupalo-. Mutende wa kutemwa.'
      ],
      [
        'Muli Yesu ndeikala, No kwenda mupepi nankwe;',
        'Takuli cimo cacila-. Mutende wa kutemwa'
      ]
    ],
    chorus: [
      'U-mu-te-nde. E bupe bwa ku mulu;',
      'Mutende wakupapisha, E bupe bwakwa Lesa.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'There comes to my heart one sweet strain, A glad and a joyous refrain;',
        'I sing it again and again, Sweet peace, the gift of God’s love.'
      ],
      [
        'Through Christ on the cross peace was made, My debt by His death was all paid;',
        'No other foundation is laid For peace, the gift of God’s love.'
      ],
      [
        'When Jesus as Lord I had crowned, My heart with this peace did abound;',
        'In Him the rich blessing I found, Sweet peace, the gift of God’s love.'
      ],
      [
        'In Jesus for peace I abide, And as I keep close to His side;',
        'There’s nothing my soul can divide From peace, the gift of God’s love.'
      ]
    ],
    englishChorus: [
      'Peace, peace, sweet peace, Wonderful gift from above;',
      'Oh, wonderful, wonderful peace, Sweet peace, the gift of God’s love.'
    ]
  },
  {
    id: 'hymn-213',
    number: 213,
    title: 'Lwimbo Lwandi',
    writer: 'Franklin E. Belden / D. S. Hakes',
    englishTune: 'My Song',
    category: 'faith-and-trust',
    categoryBemba: 'Yesu Ulwimbo Lwandi',
    key: 'E♭ Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 118:14 · Esaya 12:2 · Amalumbo 28:7 · Ukusokolola 15:3',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 68, 67, 65, 67, 68, 70, 67],
    verses: [
      [
        'Yesu we Mu-pusu-shi, Niwe lwimbo-lwandi;',
        'We ka-lubu-la wa-ndi, Ilyo nape-lelwa.'
      ],
      [
        'Niwe buce-teke-lo, Bwandi myaka-yonse;',
        "'Lyo nsa-ngwa mu-macu-sho, Ndepo-nye fi-lamba."
      ],
      [
        'Niwe nace-teke-la, Cibu-sa wa-cine;',
        "Mutemwikwa kuli 'ine, Uku-cila fyonse"
      ],
      [
        'Yesu e lwi-mbo lwandi, \'Lyo ndi muno-calo;',
        'Aka-ba lwi-mbo lwa-ndi, \'Lyo nka-ba ku-mulu.'
      ]
    ],
    chorus: [
      'We Mu-pusu-shi wa-ndi, Naku-lakwi-mbila;',
      'Niwe Cibu-sa wa-ndi, Yesu ndeku-temwa'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'O Jesus, my Redeemer, Thou art my joy and song,',
        'My Saviour and my solace when griefs around me throng.'
      ],
      [
        'Thou art my hope and comfort, thro’ all the weary years,',
        'When shadows dark surround me, when fall the bitter tears.'
      ],
      [
        'I trust in Thee, my Saviour, my faithful Friend and Guide,',
        'For Thou to me art dearer than all on earth beside.'
      ],
      [
        'Thou art my soul’s rejoicing while in this world of sin,',
        'Thou shalt be my rejoicing the heav’nly gates within.'
      ]
    ],
    englishChorus: [
      'O Jesus, my Redeemer, my song shall be of Thee;',
      'No other friend so constant, no other friend so dear to me.'
    ]
  },
  {
    id: 'hymn-214',
    number: 214,
    title: 'Bushe Yesu Kuti Ansunga?',
    writer: 'Frank E. Graeff / J. Lincoln Hall',
    englishTune: 'Does Jesus Care?',
    category: 'faith-and-trust',
    categoryBemba: 'Yesu Alatusunga',
    key: 'D♭ Major',
    timeSignature: '6/8',
    scripture: '1 Petro 5:7 · Amalumbo 55:22 · AbaHebere 4:15 · Mateo 11:28',
    isSample: false,
    melodicPreview: [65, 65, 66, 65, 63, 61, 63, 65, 68],
    verses: [
      [
        'Bushe Yesu kuti ansunga, Ilyo ndi mu macusho?',
        "'Lyo nafininwa ne fya mu calo,",
        'Fyalenge nshilo kulepa'
      ],
      [
        'Bushe Yesu kuti ansunga, Nge nshila yafitisha?',
        'Kasuba kawa, yaise mfifi, Bushe kuti aba pepe?'
      ],
      [
        'Bushe Yesu kuti ansunga, Nga nawa mumatunko?',
        'Ilyo na cula, nshili no bwafwo,',
        'Nalila bushiku bonse.'
      ],
      [
        "Bushe Yesu kuti ansunga, Nga nasha 'ba mu calo?",
        'Nangu mutima wandi wa cula,',
        'Bushe tekuti amone?'
      ]
    ],
    chorus: [
      'Ala-nsunga, Ninji-shiba, Tatemwa ilyo ncula,',
      'Inshiku nasho shanasha,',
      'Mupusushi wandi alansunga.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Does Jesus care when my heart is pained Too deeply for mirth or song,',
        'As the burdens press, and the cares distress,',
        'And the way grows weary and long?'
      ],
      [
        'Does Jesus care when my way is dark With a nameless dread and fear?',
        'As the daylight fades into deep night shades, Does He care enough to be near?'
      ],
      [
        'Does Jesus care when I’ve tried and failed To resist some temptation strong;',
        'When for my deep grief there is no relief,',
        'Though my tears flow all the night long?'
      ],
      [
        'Does Jesus care when I’ve said “goodbye” To the dearest on earth to me,',
        'And my sad heart aches till it nearly breaks—',
        'Is it aught to Him? Does He see?'
      ]
    ],
    englishChorus: [
      'O yes, He cares, I know He cares, His heart is touched with my grief;',
      'When the days are weary, the long nights dreary,',
      'I know my Saviour cares.'
    ]
  },
  {
    id: 'hymn-215',
    number: 215,
    title: 'Lolela Wilailishanya',
    writer: 'William H. Bellamy / William J. Kirkpatrick',
    englishTune: 'Wait and Murmur Not',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutekanya no Kulolela',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 10:36-37 · Yakobo 5:7-8 · Amalumbo 27:14 · Abena Roma 8:25',
    isSample: false,
    melodicPreview: [64, 65, 67, 72, 71, 69, 67, 65, 64, 62, 60],
    verses: [
      [
        "Ku mushu 'ko tabaluka, macusho yonse takwaba;",
        "E mushi uwawamisha, Eko 'fwe tukayatusha."
      ],
      [
        'Nangu cisendo cafina. Mona cafuma ku mulu;',
        'Wafuluka kuba kulya, Lolela wi ilishanya.'
      ],
      [
        'Munshila nga mwabe myunga, Ibukisha uwaifwele;',
        'Ngo mutima wanashiwa, Ibukisho wa mushilo.'
      ],
      [
        'Nangu cule cabipisha, wilabako ukupepa;',
        'Bushiku nabupalama, Lolela wi ilishanya.'
      ]
    ],
    chorus: [
      'Lole-la wilailishanya,',
      'Lole-la wilailishanya;',
      'Shilo-lela wilailishanya'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'O weary heart, there is a Home, Beyond the reach of toil and care;',
        'A Home where changes never come: Who would not fain be resting there?'
      ],
      [
        'Yet when bowed down beneath the load By heaven allowed, thine earthly lot;',
        'Look up! thou’lt reach that blest abode: Wait, meekly wait, and murmur not!'
      ],
      [
        'If in thy path some thorns are found, Oh, think who bore them on His brow;',
        'If grief thy sorrowing heart has found, It reached a holier than thou.'
      ],
      [
        'Toil on! nor deem, though sore it be, One sigh unheard, one prayer forgot;',
        'The day of rest will dawn for thee: Wait, meekly wait, and murmur not!'
      ]
    ],
    englishChorus: [
      'O wait, meekly wait, and murmur not,',
      'O wait, meekly wait, and murmur not,',
      'O wait, O wait, O wait, and murmur not.'
    ]
  },
  {
    id: 'hymn-216',
    number: 216,
    title: 'Nshili Neka',
    writer: 'C. F. O. / V. A. White (Christ in Song)',
    englishTune: 'Never Alone',
    category: 'faith-and-trust',
    categoryBemba: 'Yesu Ali na Ine',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 13:5 · Mateo 28:20 · Amalumbo 23:4 · Esaya 41:10',
    isSample: false,
    melodicPreview: [64, 67, 72, 71, 69, 67, 65, 64, 62, 60],
    verses: [
      [
        'Nshili no mwenso ine nga Yesu ali pepi;',
        'Ukubapo kwakwe kulansansamusha lyonse,',
        'Nangu nshili na Cibusa Yesu Cibusa;',
        'Ndaluka, Ena lantemwisha lyonse ukwa pe na pe.'
      ],
      [
        'Teti nake ilyo Yesu ali na Ine,',
        'Mutima wandi wacetekela ubutusho;',
        'Nshakwata maka lelo nshintilila uko ali,',
        'Mu maboko yakwemo nakula sungwe nshiku pe.'
      ],
      [
        'Nakulalolela pantu efyo anjeba,',
        'Nshishibe cinshi Mfumu yandi yacelwo kwisa,',
        'Ndi no buseko ubushingalondololwa;',
        'Bucetekelo bwandi bwa cine bwaba muli Yesu.'
      ]
    ],
    chorus: [
      'Takanshe neka, kunsha neka, nkaba nankwe;',
      'Alindaya takanshe neka, Akulaba na Ine.'
    ],
    chorusLabel: 'Chibwekesho',
    englishVerses: [
      [
        'Lonely? no, not lonely While Jesus standeth by;',
        'His presence always cheers me; I know that He is nigh.',
        'Friendless? no, not friendless, For Jesus is my Friend;',
        'I change, but He remaineth The same unto the end.'
      ],
      [
        'Weary? no, not weary While leaning on His breast;',
        'My soul hath full enjoyment, ’Tis His eternal rest.',
        'Helpless? yes, so helpless; But I am leaning hard',
        'On the mighty arm of Jesus, And He is keeping guard.'
      ],
      [
        'Waiting? O yes, waiting; He bade me watch and wait;',
        'I only wonder often, What makes my Lord so late.',
        'Joyful? yes, so joyful; With joy too deep for words;',
        'A precious, sure foundation, The joy that is my Lord’s.'
      ]
    ],
    englishChorus: [
      'No, never alone, no, never alone;',
      'He has promised never to leave me, Never to leave me alone.'
    ]
  },
  {
    id: 'hymn-217',
    number: 217,
    title: 'Cimo Ningapela Yesu',
    writer: 'Sylvanus Dryden Phelps / Robert Lowry',
    englishTune: 'Something for Jesus',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukupeela Umweo Kuli Kristu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Abena Roma 12:1 · 2 Abena Korinte 5:14-15 · 1 Yohane 4:19 · Luka 9:23',
    isSample: false,
    melodicPreview: [71, 69, 67, 66, 67, 64, 62, 67, 69, 71],
    verses: [
      [
        'We Mfumu kutemwa ku-lya wampele-,',
        'Teti mise kantu kufumo ko li',
        'Nakulato-tela nci-te fyo na-laya;',
        'Naleta u-bupe ku-li Imwe.'
      ],
      [
        'Ku cipuna cenu mumpapatila-,',
        "Mu-kunaka kwandi njise ku-li 'Mwe,",
        'Nse-nde ulu-panda, Na-nde uku-temwa;',
        'Nyimbe ulwimbo mpepe ku-li Imwe'
      ],
      [
        'Mpe-ni umu-tima waba nga Imwe-,',
        'U-kuti mbe wenu Inshita shonse.',
        'Ncite fya kutemwa, Pamo ne fya luse,',
        'Ukuti nkonke mo mu-li Imwe'
      ],
      [
        'Fyonse fyo nakwata ni Mwe mwampele-,',
        'Mu-nsansa, malanda, Fyonse kuli Mwe;',
        'Ilyo nkamumona elyo nkalubuka,',
        'U-kwa muyayaya, Ku-li Imwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Savior, Thy dying love Thou gavest me,',
        'Nor should I aught withhold, Dear Lord, from Thee:',
        'In love my soul would bow, My heart fulfill its vow,',
        'Some offering bring Thee now, Something for Thee.'
      ],
      [
        'At the blest mercy seat, Pleading for me,',
        'My feeble faith looks up, Jesus, to Thee:',
        'Help me the cross to bear, Thy wondrous love declare,',
        'Some song to raise, or prayer, Something for Thee.'
      ],
      [
        'Give me a faithful heart, Guided by Thee,',
        'That each departing day Henceforth may see',
        'Some work of love begun, Some deed of kindness done,',
        'Some wanderer sought and won, Something for Thee.'
      ],
      [
        'All that I am and have— Thy gifts so free—',
        'In joy, in grief, through life, Dear Lord, for Thee;',
        'And when Thy face I see, My ransomed soul shall be,',
        'Through all eternity, Offered for Thee.'
      ]
    ]
  },
  {
    id: 'hymn-218',
    number: 218,
    title: 'Mufula Umo',
    writer: 'Samuel J. Stone / Samuel S. Wesley',
    englishTune: 'One Foundation',
    category: 'faith-and-trust',
    categoryBemba: 'Ichilonganino ca kwa Kristu',
    key: 'E♭ Major',
    timeSignature: '4/4',
    scripture: 'Abena Efese 2:19-22 · Abena Efese 4:4-6 · 1 Abena Korinte 3:11 · Ukusokolola 21:2',
    isSample: false,
    melodicPreview: [63, 67, 67, 68, 67, 65, 63, 62, 63, 65, 67, 70],
    verses: [
      [
        'Chilonganino ca-ba pali Yesu Kristu;',
        'Cili cilengo ci-pya ce shiwi na menshi,',
        'Aishilecifwa-ya ukuba nabwinga;',
        'Cashitwa no mulo-pa alicifwilile.'
      ],
      [
        'Bafuma ku misho-bo lelo bali umo,',
        'Bucetekelo bumo ne Mfumu imo fye',
        'Batashe shina li-mo, Ne cilyo cimo fye,',
        'No busubilo bu-mo ebo cakwatisha.'
      ],
      [
        'Cibe mu macusho, nangu ni mu malanda,',
        'Nangula Satana nao aletulwisha',
        'Abashila bai-mba Isa bwangu Mfumu,',
        'Ukulila kuka-pwa Inyimbo tukemba.'
      ],
      [
        'Pakati ka macu-sho, pakati ka bulwi;',
        'Ichilonganino chilolelyo mutende;',
        'Ukusuka bonse bakamone Imfumu,',
        'Ninshi naci cimfya, cikaba pa kutusha.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'The Church has one foundation, ’Tis Jesus Christ her Lord;',
        'She is His new creation By water and the Word:',
        'From heaven He came and sought her To be His holy bride;',
        'With His own blood He bought her, And for her life He died.'
      ],
      [
        'Elect from every nation, Yet one o’er all the earth,',
        'Her charter of salvation, One Lord, one faith, one birth;',
        'One holy name she blesses, Partakes one holy food,',
        'And to one hope she presses, With every grace endued.'
      ],
      [
        'Though with a scornful wonder Men see her sore oppressed,',
        'By schisms rent asunder, By heresies distressed:',
        'Yet saints their watch are keeping, Their cry goes up, “How long?”',
        'And soon the night of weeping Shall be the morn of song!'
      ],
      [
        '’Mid toil and tribulation, And tumult of her war,',
        'She waits the consummation Of peace forevermore;',
        'Till, with the vision glorious, Her longing eyes are blest,',
        'And the great Church victorious Shall be the Church at rest.'
      ]
    ]
  },
  {
    id: 'hymn-219',
    number: 219,
    title: 'Muntungulule Yehova',
    writer: 'William Williams / John Hughes',
    englishTune: 'Guide Me, O Thou Great Jehovah',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutungululwa na Yehova',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 13:21-22 · Amalumbo 23:1-3 · Yohane 6:35 · Yoshua 3:14-17',
    isSample: false,
    melodicPreview: [62, 64, 62, 67, 67, 66, 67, 69, 71, 69, 67, 64, 62],
    verses: [
      [
        'Muntungulule Yehova, Ndi mweni muno calo',
        'Nanaka muli na maka, Mundame mumaboko',
        'U mukate wa ku mulu, Ndisheni ninkabila,',
        'Ndisheni ni-nkabila'
      ],
      [
        'Isule-ni i-cishima, Nwemo amenshi ya mweo;',
        'Muntungulule mu lwendo, Mweba maka yakwansha',
        'Mwe ba maka Mwe ba maka, Mu-be cishangu candi',
        'Mube ci-shangu candi.'
      ],
      [
        'Ilyo nkafika Jodani, Umwenso wandi wapwa',
        'Munga-bushe i-cimana, Munfishe ku Kenani',
        'Nkamwimbila, nkamwimbila.',
        'Nkalamulumbanya pee ..',
        'Nka-lamu-lumba-nya pee.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Guide me, O Thou great Jehovah, Pilgrim through this barren land.',
        'I am weak, but Thou art mighty; Hold me with Thy powerful hand.',
        'Bread of heaven, bread of heaven, Feed me till I want no more;',
        'Feed me till I want no more.'
      ],
      [
        'Open now the crystal fountain, Whence the healing stream doth flow;',
        'Let the fire and cloudy pillar Lead me all my journey through.',
        'Strong Deliverer, strong Deliverer, Be Thou still my strength and shield;',
        'Be Thou still my strength and shield.'
      ],
      [
        'When I tread the verge of Jordan, Bid my anxious fears subside;',
        'Death of death, and hell’s destruction, Land me safe on Canaan’s side.',
        'Songs of praises, songs of praises,',
        'I will ever give to Thee;',
        'I will ever give to Thee.'
      ]
    ]
  },
  {
    id: 'hymn-220',
    number: 220,
    title: 'Ku Mwesu',
    writer: 'Hugh R. Haweis / George C. Stebbins',
    englishTune: 'The Homeland',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Umushi wa ku Mulu',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 11:13-16 · Ukusokolola 21:4, 23-25 · Ukusokolola 22:5',
    isSample: false,
    melodicPreview: [65, 69, 72, 72, 74, 72, 69, 67, 65],
    verses: [
      [
        "Ku mwesu! 'ye ku mwesu! Mpanga ya mutende!",
        'No bushiku takwaba! Kasuba takawa;',
        'Ndefwaisha kwesu, Ndefulukisha kwesu;',
        'Kukalipwa takwaba, Ku mwesu uko ndeya;',
        'Kukalipwa takwaba, Ku mwesu uko ndeya.'
      ],
      [
        'Mfumu ili mu mushi, Ili na bangeli;',
        'Mpulumushi takwaba, Matunko tamwaba;',
        'Nyimbo sha ku mwesu ndemfwa iciunda,',
        "'Lyo ntontonkanya ku mwesu ndaponya filamba;",
        "'Lyo ntontonkanya ku mwesu, ndaponya ifilamba."
      ],
      [
        'Bantu bekala mulya, Bafwaya nje kulya,',
        'Uko imfwa, bulanda, awe tafisangwa;',
        'We calo natemwa calo ca mutende,',
        'Kristu tusendeni ku mushi wabapusuka,',
        'Kristu tusendeni ku mushi wabapusuka'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'The homeland! O the homeland! The land of the freeborn!',
        'There’s no night in the homeland, But aye the fadeless morn;',
        'I’m sighing for the homeland, My heart is aching here;',
        'There is no pain in the homeland To which I’m drawing near;',
        'There is no pain in the homeland To which I’m drawing near.'
      ],
      [
        'My Lord is in the homeland, With angels bright and fair;',
        'There’s no sin in the homeland, And no temptation there;',
        'The music of the homeland Is ringing in my ears,',
        'And when I think of the homeland My eyes are filled with tears;',
        'And when I think of the homeland, My eyes are filled with tears.'
      ],
      [
        'The dwellers in the homeland Are beckoning me to come,',
        'Where neither death nor sorrow Invades their holy home;',
        'O dear, dear native country! O rest and peace above!',
        'Christ bring us all to the homeland Of Thy redeeming love;',
        'Christ bring us all to the homeland Of Thy redeeming love.'
      ]
    ]
  },
  {
    id: 'hymn-221',
    number: 221,
    title: 'Galile',
    writer: 'Robert Morris / Horatio R. Palmer',
    englishTune: 'Galilee',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukutemwa no Kukonka Yesu',
    key: 'Bb Major',
    timeSignature: '6/8',
    scripture: 'Mateo 4:18-22 · Marko 1:16-20 · Mateo 14:22-33',
    isSample: false,
    melodicPreview: [65, 62, 63, 65, 67, 65, 70, 69, 67, 65],
    verses: [
      [
        'Kalelila ... Koni kakwe ...•',
        'Icungulo ... Icapalwa ...',
        'Cilelanga ... Bumushilo ....',
        'Ndefuluka ... Ku Galile ...'
      ],
      [
        'Mu mukonko ... wa maluba ..•',
        'Emo fyuni ... Fimbe nyimbo ...',
        'Ulucelo ... Fileimba ...•',
        'Kulumbanya ... O Galile ...'
      ],
      [
        'Lyombelenga ... shiwi lyakwe ... ,',
        'Fyaendele ... Pa cimana ...',
        'Ndefwaisha ... Ukwishiba ...•',
        'Kumukonka ... Ku Galile ...'
      ]
    ],
    chorus: [
      'O Galile, Waliwama, uko Yesu Atemenwe,',
      "O Galile. Waliwama, Imba ulwimbo kuli 'ne."
    ],
    englishVerses: [
      [
        'Each cooing dove and sighing bough,',
        'That makes the eve so blest to me,',
        'Has something far diviner now,',
        'It bears me back to Galilee.'
      ],
      [
        'Each flow’ry glen and mossy dell,',
        'Where happy birds in song agree,',
        'Through sunny morn the praises tell',
        'Of sights and sounds in Galilee.'
      ],
      [
        'And when I read the thrilling lore',
        'Of Him who walked upon the sea,',
        'I long, oh, how I long once more',
        'To follow Him in Galilee.'
      ]
    ],
    englishChorus: [
      'O Galilee! sweet Galilee! Where Jesus loved so much to be;',
      'O Galilee! blue Galilee! Come, sing thy song again to me!'
    ]
  },
  {
    id: 'hymn-222',
    number: 222,
    title: 'Mumaboko ya kwa Yesu',
    writer: 'Fanny J. Crosby / William H. Doane',
    englishTune: 'Safe in the Arms of Jesus',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutetekela no Kusungwa muli Yesu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalango 33:27 · Yohane 10:28-29 · Amalumbo 91:1-4',
    isSample: false,
    melodicPreview: [71, 69, 67, 64, 62, 67, 66, 67, 69, 71, 69],
    verses: [
      [
        'Nindamwa bwino mwandi mumaboko yakwe;',
        'Na mukutemwa kwakwe nakulatusha mo,',
        'Bangeli baleimba ciunda ndeumfwa',
        'Mu mabala yasuma kwishilya Iya bemba-.'
      ],
      [
        'Nindamwa bwino mwandi teti nsakamane;',
        'Kufuma kumatunko, Teti mbe no bubi',
        'Mpokololwe ku bubi pamo na ku mwenso,',
        'Matunko ya nono nokulila konse.'
      ],
      [
        'Yesu e cubo candi, wene amfwilile,',
        'Pa libwe lya kaele, ndecetekela pe',
        'Nakulalolela, ukusuka buce',
        'Nsuke nkamumone pa cabu ca Golide.'
      ]
    ],
    chorus: [
      'Njikale muli Yesu mumaboko yakwe;',
      'Na mukutemwa kwakwe nakulatushamo.'
    ],
    englishVerses: [
      [
        'Safe in the arms of Jesus, Safe on His gentle breast,',
        'There by His love o’ershaded, Sweetly my soul shall rest.',
        'Hark! ’tis the voice of angels, Borne in a song to me,',
        'Over the fields of glory, Over the jasper sea.'
      ],
      [
        'Safe in the arms of Jesus, Safe from corroding care,',
        'Safe from the world’s temptations, Sin cannot harm me there.',
        'Free from the blight of sorrow, Free from my doubts and fears;',
        'Only a few more trials, Only a few more tears!'
      ],
      [
        'Jesus, my heart’s dear refuge, Jesus has died for me;',
        'Firm on the Rock of Ages, Ever my trust shall be.',
        'Here let me wait with patience, Wait till the night is o’er;',
        'Wait till I see the morning Break on the golden shore.'
      ]
    ],
    englishChorus: [
      'Safe in the arms of Jesus, Safe on His gentle breast,',
      'There by His love o’ershaded, Sweetly my soul shall rest.'
    ]
  },
  {
    id: 'hymn-223',
    number: 223,
    title: 'Ku Mukonka Konse',
    writer: 'Elisha A. Hoffman / John S. Norris',
    englishTune: 'Follow All the Way',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukukonka Yesu Lyonse',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Luka 9:23 · Mateo 16:24 · Yohane 8:12 · Yohane 10:27',
    isSample: false,
    melodicPreview: [69, 69, 69, 67, 65, 67, 69, 65, 60],
    verses: [
      [
        "Ndeumfwa Yesu 'lenjita, Noluse Wen' alanjita;",
        "Ndeumfwa shiwi lileti, 'Sa unkonke lyonse, unkonke."
      ],
      [
        'Nangu nshila yafitisha, Makasa nayo yanaka;',
        'Lelo umutima wandi wena kumukonka lyonse.'
      ],
      [
        "Yes' ali kuntanshi yandi, Lubuto munshila yandi;",
        'Nga nanaka alampa amaka, Nakulamukonka lyonse.'
      ],
      [
        'Mu mikonko alansunga, lyonse alampelo kulya;',
        'Ndamukabila fye lyonse, Nakulamukonka lyonse.'
      ],
      [
        'Walintemwa Mfumu yandi, Nsungwe mumaboko yenu;',
        'Mucikuku cobe nsungwe, Nakulamukonka lyonse.'
      ]
    ],
    chorus: [
      'Nakula sendo lupanda, no kukonko Mupusushi;',
      'Uko konse ntungulula, Ku mukonka konse fye.'
    ],
    englishVerses: [
      [
        'I can hear my Saviour calling, In the tend’rest accents calling;',
        'On my ear these words are falling, “Come and follow, daily follow Me.”'
      ],
      [
        'Tho’ the way be dark and dreary, Tho’ my feet be worn and weary,',
        'Yet my heart keeps bright and cheery, As I follow, follow all the way.'
      ],
      [
        'Jesus, ever go before me, Shining heaven’s sunlight o’er me,',
        'And when weak, by grace restore me, As I follow, follow all the way.'
      ],
      [
        'Thro’ the valley safely lead me, Heav’nly manna daily feed me;',
        'Ev’ry hour, dear Lord, I need Thee, As I follow, follow all the way.'
      ],
      [
        'In Thy heart’s affection hold me, In Thy arms of love enfold me,',
        'And with Thine own grace uphold me, As I follow, follow all the way.'
      ]
    ],
    englishChorus: [
      'I will take my cross and follow, My dear Saviour I will follow;',
      'Where He leads me I will follow, I’ll go with Him, with Him all the way.'
    ]
  },
  {
    id: 'hymn-224',
    number: 224,
    title: 'Nyali Shibengeshime',
    writer: 'Philip P. Bliss',
    englishTune: 'Let the Lower Lights Be Burning',
    category: 'mission-and-evangelism',
    categoryBemba: 'Ukubala Lubuto ku Calo',
    key: 'Bb Major',
    timeSignature: '3/4',
    scripture: 'Mateo 5:14-16 · Abena Filipi 2:15 · Esaya 60:1',
    isSample: false,
    melodicPreview: [65, 65, 67, 65, 70, 70, 69, 67, 65],
    verses: [
      [
        'Uluse lwakwa Shikulu, Lulabeka nshiku pe;',
        'Atupa kasunge nyali pa cabu ca cimana.'
      ],
      [
        'Ububi bwafishe calo, Na mabimbi yaima;',
        'Bambi bali mu cimana, Balefwayo lubuto.'
      ],
      [
        'Ashe nyali we munyina, tupusushe balefwa;',
        'Kuti bafike ku cabu, Mumfifi bengaluba.'
      ]
    ],
    chorus: [
      'Inyali shibengeshime, Bashimone pe bimbi,',
      'Ku balecula mu fibi, Ukuti bapusuke.'
    ],
    englishVerses: [
      [
        'Brightly beams our Father’s mercy, From His lighthouse evermore,',
        'But to us He gives the keeping Of the lights along the shore.'
      ],
      [
        'Dark the night of sin has settled, Loud the angry billows roar;',
        'Eager eyes are watching, longing, For the lights along the shore.'
      ],
      [
        'Trim your feeble lamp, my brother: Some poor sailor, tempest-tossed,',
        'Trying now to make the harbor, In the darkness may be lost.'
      ]
    ],
    englishChorus: [
      'Let the lower lights be burning! Send a gleam across the wave!',
      'Some poor fainting, struggling seaman You may rescue, you may save.'
    ]
  },
  {
    id: 'hymn-225',
    number: 225,
    title: 'Iminina Ngo Wamaka',
    writer: 'Fanny J. Crosby / William B. Bradbury & Philip Phillips',
    englishTune: 'Stand Like the Brave',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulwi bwa Bwina Kristu',
    key: 'Bb Major',
    timeSignature: '3/4',
    scripture: 'Abena Efese 6:10-18 · 1 Abena Korinti 16:13 · 2 Timote 2:3',
    isSample: false,
    melodicPreview: [65, 70, 70, 70, 74, 72, 70, 69, 67, 65],
    verses: [
      [
        'Mu Kristu ima! Shikulu akwita;',
        'Fwala ku mutwe, Lupanga ku minwe;',
        'Ulwishe Satana, Kwabulo mwenso;',
        'Ima nge cita ulwishe mulwani.'
      ],
      [
        'Na mubusanso cenjela, Lolesha wifutatuka,',
        'Nkwela tailiko; Mabumba yababi ngawayacimfya,',
        'Ima nge cita ulwishe mulwani.'
      ],
      [
        'Mulimo wakwe wiulekelesha usunge bwino,',
        'Ube wa cishinka; Ulwishe na maka ukufike mpela,',
        'Ima namaka ulwishe umulwani.'
      ],
      [
        'Wilatwishika kabiye kuntanshi',
        'Ape cikuku nokusansamusha ~',
        'Kutemwa kwakwe kwaba fye nga menshi,',
        'Ima nge cita ulwishe mulwani'
      ]
    ],
    chorus: [
      'Wilatina, Wilatina, Wilatina;',
      'ulwishe mulwani'
    ],
    englishVerses: [
      [
        'O Christian, awake! ’tis the Master’s command;',
        'With helmet and shield, and a sword in thy hand,',
        'To meet the bold tempter, go, fearlessly go,',
        'And stand like the brave, with thy face to the foe.'
      ],
      [
        'Whatever thy danger, take heed and beware, And turn not thy back,',
        'For no armor is there; the legions of darkness, if thou wouldst o’erthrow,',
        'Then stand like the brave, with thy face to the foe.'
      ],
      [
        'The cause of thy Master with vigor defend;',
        'Be watchful, be zealous, and fight to the end; wherever He leads thee, go, valiantly go,',
        'And stand like the brave, with thy face to the foe.'
      ],
      [
        'Press on, never doubting, thy Captain is near,',
        'With grace to supply, and with comfort to cheer;',
        'His love, like a stream in the desert will flow,',
        'Then stand like the brave, with thy face to the foe.'
      ]
    ],
    englishChorus: [
      'Stand like the brave, stand like the brave,',
      'Stand like the brave, with thy face to the foe!'
    ]
  },
  {
    id: 'hymn-226',
    number: 226,
    title: 'Apepi No Kusumina',
    writer: 'Philip P. Bliss',
    englishTune: 'Almost Persuaded',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwite bwa Kupusuka',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Imilimo 26:28 · Imilimo 24:25 · 2 Abena Korinti 6:2 · AbaHebere 3:7-8',
    isSample: false,
    melodicPreview: [71, 72, 74, 74, 74, 74, 71, 69, 67, 67, 69, 71],
    verses: [
      [
        'Ndi-fye ape-pi ku-su mina;',
        'Kuti nsumi-ne Kristu wandi;',
        'Mu-lwani a-sosa ka-biye Mupashi,',
        "U-kabwele limbi 'kasu-mina"
      ],
      [
        'Shi-wi lile-ti I-sa lelo,',
        'Li-le papa-ta, Wi-bwe-lela;',
        'Yesu ale-kwita, Bange-li ba-lipo,',
        'U-mfwa amapepo Bwe-la iwe.'
      ],
      [
        'Nati nsumine, Nshi-ta yapwa,',
        'Na-ti sumi-ne, nomba kufwa;',
        'U-kushintauka Te-kuti ku-ngafwe,',
        'U-kushintauka Ku-lete mfwa.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        '“Almost persuaded” now to believe;',
        '“Almost persuaded” Christ to receive;',
        'Seems now some soul to say, “Go, Spirit, go Thy way,',
        'Some more convenient day On Thee I’ll call.”'
      ],
      [
        '“Almost persuaded,” come, come today;',
        '“Almost persuaded,” turn not away;',
        'Jesus invites you here, Angels are lingering near,',
        'Prayers rise from hearts so dear, O wanderer, come!'
      ],
      [
        '“Almost persuaded,” harvest is past!',
        '“Almost persuaded,” doom comes at last!',
        '“Almost” cannot avail; “Almost” is but to fail!',
        'Sad, sad, that bitter wail— “Almost,” but lost!'
      ]
    ]
  },
  {
    id: 'hymn-227',
    number: 227,
    title: 'Palupanda',
    writer: 'Isaac Watts / Ralph E. Hudson',
    englishTune: 'At the Cross',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ulubulo ku Lupanda',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: '1 Petro 1:18-19 · Abena Galatia 6:14 · Abena Roma 5:8 · Abena Efese 1:7',
    isSample: false,
    melodicPreview: [63, 67, 70, 70, 68, 67, 65, 67, 63],
    verses: [
      [
        'Mupu-sushi andu-bwile no mulopa wakwe;',
        'Acu-lile pali ine kuti nsange mweo.'
      ],
      [
        'Bu-she bwali bu-bi bwandi eco aculile?',
        'Awe kwali ukutemwa Uko nshinga landa.'
      ],
      [
        'Na-ngu ndile teti mpwishe imisha nakwata;',
        'Ta-kuli co ninga-cita Kano kuipela'
      ]
    ],
    chorus: [
      'Palya pa lupanda namwene-lubuto;',
      'Cisendo ca mutima casendwa .....',
      'Mu busu-mi-no napelwa menso,',
      'No-mba nakulasekela pe'
    ],
    englishVerses: [
      [
        'Alas! and did my Savior bleed, And did my Sovereign die?',
        'Would He devote that sacred head For such a worm as I?'
      ],
      [
        'Was it for crimes that I have done He groaned upon the tree?',
        'Amazing pity! grace unknown! And love beyond degree!'
      ],
      [
        'But drops of grief can ne’er repay The debt of love I owe:',
        'Here, Lord, I give myself away— ’Tis all that I can do.'
      ]
    ],
    englishChorus: [
      'At the cross, at the cross where I first saw the light,',
      'And the burden of my heart rolled away,',
      'It was there by faith I received my sight,',
      'And now I am happy all the day!'
    ]
  },
  {
    id: 'hymn-228',
    number: 228,
    title: 'Mulumbanyeni',
    writer: 'Fanny J. Crosby / Chester G. Allen',
    englishTune: 'Praise Him! Praise Him!',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kulumbanya',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'Amalumbo 150:1-6 · Ukusokolola 5:12 · Abena Filipi 2:9-11',
    isSample: false,
    melodicPreview: [68, 72, 75, 75, 75, 72, 68, 70, 72, 70, 68],
    verses: [
      [
        'Lumbanyeni Yesu uwatulubula;',
        'Mwimbe bonse ukutemwa kwakwe;',
        'Cindikeni umungeli mukalamba,',
        'E wamaka natumucindike'
      ],
      [
        'Lumbanyeni Yesu watulubula,',
        'Fibi fyesu efyo aculile;',
        'Wene libwe lyesu ilyabupususho,',
        'Mulumbeni Yesu watanikwe.'
      ],
      [
        'Lumbanyeni Yesu uwatulubwile;',
        'Mwimbileni bonse bakumulu;',
        'Yesu Mfumu aleteko muyayaya,',
        'Asamikwe shimapepo Mfumu;'
      ]
    ],
    chorus: [
      'Mulumbeni! Lumbuleni ubukulu;',
      'Mulumbeni! Mu lwimbo no kwanga.'
    ],
    englishVerses: [
      [
        'Praise Him! praise Him! Jesus, our blessed Redeemer!',
        'Sing, O earth—His wonderful love proclaim!',
        'Hail Him! hail Him! highest archangels in glory;',
        'Strength and honor give to His holy name!'
      ],
      [
        'Praise Him! praise Him! Jesus, our blessed Redeemer!',
        'For our sins He suffered, and bled, and died;',
        'He—our Rock, our hope of eternal salvation,',
        'Hail Him! hail Him! Jesus the Crucified.'
      ],
      [
        'Praise Him! praise Him! Jesus, our blessed Redeemer!',
        'Heavenly portals, loud with hosannas ring!',
        'Jesus, Saviour, reigneth forever and ever;',
        'Crown Him! crown Him! Prophet, and Priest, and King!'
      ]
    ],
    englishChorus: [
      'Praise Him! praise Him! Tell of His excellent greatness;',
      'Praise Him! praise Him! Ever in joyful song!'
    ]
  },
  {
    id: 'hymn-229',
    number: 229,
    title: 'Nani Ali ku Mfumu',
    writer: 'Franklin E. Belden',
    englishTune: 'Who Is on the Lord’s Side?',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukusala Inshila ya Mfumu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 32:26 · Yoshua 24:15 · 1 Ishamfumu 18:21 · Mateo 12:30',
    isSample: false,
    melodicPreview: [67, 67, 71, 74, 74, 72, 71, 69, 67],
    verses: [
      [
        "N'ani uwasala Imfumu,",
        'Bubi no busu-ma salapo.'
      ],
      [
        'Abengi nabasalo bubi,',
        'Ta ili inshila isuma.'
      ],
      [
        'Isa ku lubali lwa Mfumu,',
        'Pantu e kuli shuko lyobe.'
      ]
    ],
    chorus: [
      'Sa-la, le-lo, Busuma no bubi salapo.'
    ],
    englishVerses: [
      [
        'Who is on the Lord’s side? Always true;',
        'There’s a right and wrong side,—Where stand you?'
      ],
      [
        'Thousands on the wrong side Choose to stand;',
        'Still ’tis not the strong side, True and grand.'
      ],
      [
        'Come and join the Lord’s side; Ask you why?',
        '’Tis the only safe side By and by.'
      ]
    ],
    englishChorus: [
      'Choose now, choose now: On the right or wrong side,—Where stand you?'
    ]
  },
  {
    id: 'hymn-230',
    number: 230,
    title: 'Ine Nshila',
    writer: 'G. M. J. / James McGranahan',
    englishTune: 'I Am the Way',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Inshila ya Kupusuka',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Yohane 14:6 · Esaya 53:6 · Yohane 10:9',
    isSample: false,
    melodicPreview: [67, 67, 67, 67, 65, 63, 67, 70, 70],
    verses: [
      [
        'Pamo nge mpanga shaluba, twaye ciye yeye-,',
        'Kufuma mwicinka lyakwe, Tusange shani nshila.'
      ],
      [
        'Twenda na masakamano, munshila mutende,',
        "Ilyo 'bengi balelila, Tusange shani nshila."
      ],
      [
        'Twenda na masakamano, munshila mutende,',
        "Ilyo 'bengi balelila, Tusange shani nshila."
      ]
    ],
    chorus: [
      'I-ne nshila ne cine no mweo;',
      "Teti wise kwa Tala kano muli 'ne"
    ],
    englishVerses: [
      [
        'Like wand’ring sheep o’er mountains cold, Since all have gone astray;',
        'To “Life” and peace within the fold, How may I find the way?'
      ],
      [
        'Bewildered oft with doubt and care, To God I fain would go;',
        'But while they cry, “Lo here! lo there!” The Truth how may I know?'
      ],
      [
        'To Christ the Way, the Truth, the Life, I come, no more to roam;',
        'He’ll guide me to my “Father’s house,” To my eternal home.'
      ]
    ],
    englishChorus: [
      'I am the way, the Truth, and the Life;',
      'No man cometh unto the Father but by me.'
    ]
  },
  {
    id: 'hymn-231',
    number: 231,
    title: 'Njebo Mulumbe Wakale',
    writer: 'Lelia N. Morris',
    englishTune: 'Let Jesus Come Into Your Heart',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukusumina Yesu mu Mutima',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'Ukusokolola 3:20 · Yohane 1:12 · Abena Efese 3:17',
    isSample: false,
    melodicPreview: [68, 68, 72, 75, 75, 73, 72, 70, 68],
    verses: [
      [
        'Nga wafininwa ne mpulumushi,',
        "Yesu leka'be mu mweo;",
        'Ngo lefwayo be no mweo upya,',
        "Yesu leka'be mu mweo."
      ],
      [
        "Ngo lefwayo kut'ubutishiwe, Yesu leka'be mu mweo:",
        "Utufukauka tuli pepi, Yesu leka 'be mu mweo"
      ],
      [
        "Ngo li na macusho 'shingacimfya,",
        "Yesu leka'be mu mweo,",
        'Nokusango kwafwiwa mu calo.',
        "Yesu leka'be mu mweo."
      ],
      [
        "Nge fibusa fyafuma kuli 'we, Yesu leka'be mu mweo;",
        "Wene nicibusa wa cishinka, Yesu leka 'be mu mweo."
      ],
      [
        "Ngo lefwaisha ukumwishiba, Yesu leka'be mu mweo;",
        "Ngo lefwaya kuba mumasano, Yesu leka'be mu mweo."
      ]
    ],
    chorus: [
      'Le-ko kulengulula, wi-mutamfya kabili;',
      "Shi-mwi-swile 'mutima Yesu engile mu mweo."
    ],
    englishVerses: [
      [
        'If you are tired of the load of your sin,',
        'Let Jesus come into your heart;',
        'If you desire a new life to begin,',
        'Let Jesus come into your heart.'
      ],
      [
        'If ’tis for purity now that you sigh, Let Jesus come into your heart;',
        'Fountains for cleansing are flowing near by, Let Jesus come into your heart.'
      ],
      [
        'If there’s a tempest your voice cannot still,',
        'Let Jesus come into your heart;',
        'If there’s a void this world never can fill,',
        'Let Jesus come into your heart.'
      ],
      [
        'If friends, once trusted, have proven untrue, Let Jesus come into your heart;',
        'Find what a friend He will be unto you, Let Jesus come into your heart.'
      ],
      [
        'If you would join the glad songs of the blest, Let Jesus come into your heart;',
        'If you would enter the mansions of rest, Let Jesus come into your heart.'
      ]
    ],
    englishChorus: [
      'Just now your doubtings give o’er; Just now reject Him no more;',
      'Just now throw open the door; Let Jesus come into your heart.'
    ]
  },
  {
    id: 'hymn-232',
    number: 232,
    title: 'Nshakakushe',
    writer: 'Anonymous / Traditional (Tune: Promise)',
    englishTune: 'I Will Never Leave Thee',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulayo bwa kwa Lesa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'AbaHebere 13:5 · Esaya 41:10 · Yoshua 1:5 · Mateo 28:20',
    isSample: false,
    melodicPreview: [67, 67, 65, 63, 67, 70, 72, 70, 67],
    verses: [
      [
        'Nshakakushe nkaba nobe,',
        'Nshakabale nkutamfya;',
        'Nkalakwensha, nkakusunga.',
        'Pamulandu wa luse;',
        'Wi latina, wilatina, We konke shiwi lyandi'
      ],
      [
        'Nge fipupu fyakushinga. Ulenjita mwipepo;',
        'Nakula kufukatila, Nokusungwa kwa cine;',
        'Mumesho nakula kwafwa,',
        'Nkabushe nshila yobe.'
      ],
      [
        "Ngo lwelele lwabutisha, Na'po ‘li palebeka;",
        "Kusekela ngo mumana, Wamona 'ti fyawama;",
        'Nakulaba na iwe pe, Nkasungo kwenda kobe.'
      ],
      [
        'Ilyo mweo wabipisha, Mwaba nokutwishika;',
        'Matunko nga yafulisha, Ndetuma ulubuto;',
        'No luunga lwakutemwa, muli ne ukacimfya'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I will never, never leave thee,',
        'I will never thee forsake;',
        'I will guide, and save, and keep thee,',
        'For My name and mercy’s sake:',
        'Fear no evil, fear no evil, Only all My counsel take.'
      ],
      [
        'When the storm is raging round thee, Call on Me in humble prayer;',
        'I will fold My arms around thee, Guard thee with the tenderest care;',
        'In the trial, in the trial,',
        'I will make thy pathway clear.'
      ],
      [
        'When the sky above is glowing, And around thee all is bright,',
        'Pleasure like a river flowing, All things tending to delight;',
        'I’ll be with thee, I’ll be with thee, I will guide thy steps aright.'
      ],
      [
        'When thy soul is dark and clouded, Filled with doubt, and grief, and care,',
        'Through the mists by which ’tis shrouded, I will make the light appear,',
        'And the banner, and the banner, Of My love I will uprear.'
      ]
    ]
  },
  {
    id: 'hymn-233',
    number: 233,
    title: 'Njebo Mulumbe Wakale',
    writer: 'A. Katherine Hankey / William H. Doane',
    englishTune: 'Tell Me the Old, Old Story',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Umulumbe wa Lupulumuko',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: '1 Abena Korinti 15:1-4 · Abena Roma 1:16 · 1 Timote 1:15',
    isSample: false,
    melodicPreview: [67, 67, 67, 64, 65, 67, 69, 67, 65, 64],
    verses: [
      [
        'Njeba umulumbe wakale wa fya kwa Yesuu no lulumbi,',
        'Nokutemwa kwaakwe;',
        'Loondoolola mulumbe, kwati-nikumwana nalikana,',
        'Wama cusho, uwabuula maaka.'
      ],
      [
        'Njebe umulumbe ukuti njishibishe,',
        'Ine ndi waa mpuulumushi, untu aafwilile;',
        'Njeebo mulumbe lyoonse nokuunjeebe cine,',
        'Mushita iishaa macusho, ukusansamusha.'
      ],
      [
        'Njeba umulumbe, lintu waba no mweenso,',
        'Pamulanduu waacalweci, Naifiifyabaamo,',
        'Ee, lulumbi lwacaalo, lulii kuumutima',
        'Njeba muulumbe, wakale, Yeswaleekupoosha.'
      ]
    ],
    chorus: [
      'Unjebe umulu-mbe, umulumbe wakale,',
      'Unjebe umulumbe, Yesu nokutemwa.'
    ],
    englishVerses: [
      [
        'Tell me the old, old story Of unseen things above,',
        'Of Jesus and His glory, Of Jesus and His love.',
        'Tell me the story simply, As to a little child;',
        'For I am weak and weary, And helpless and defiled.'
      ],
      [
        'Tell me the story softly, With earnest tones and grave;',
        'Remember I’m the sinner Whom Jesus came to save.',
        'Tell me the story always, If you would really be,',
        'In any time of trouble, A comforter to me.'
      ],
      [
        'Tell me the same old story When you have cause to fear',
        'That this world’s empty glory Is costing me too dear.',
        'Yes, and when that world’s glory Is dawning on my soul,',
        'Tell me the old, old story: “Christ Jesus makes thee whole.”'
      ]
    ],
    englishChorus: [
      'Tell me the old, old story, Tell me the old, old story,',
      'Tell me the old, old story Of Jesus and His love.'
    ]
  },
  {
    id: 'hymn-234',
    number: 234,
    title: 'Yesu Lubuto Lwa Calo',
    writer: 'Charles Wesley / George D. Elderkin',
    englishTune: 'Jesus, the Light of the World',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Lubuto lwa Calo',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Yohane 8:12 · Luka 2:10-14 · Yohane 1:4-9 · Malaki 4:2',
    isSample: false,
    melodicPreview: [70, 70, 70, 67, 68, 70, 72, 70],
    verses: [
      [
        'Bangeli baleimba, Yesu, Lubuto lwesu,',
        'Lulumbi kuli Yesu, E lubuto lwa calo.'
      ],
      [
        'Angeni mwemitundu, Yesu lubuto lwesu,',
        'Imbeni naba ngeli, E lubuto lwa calo.'
      ],
      [
        'Kristu tumucindike, Elubuto lwa calo,',
        'Ni-Mfumwi yape-nape, E lubuto lwacalo'
      ],
      [
        'A-cindikwe Mwanangwa, E lubuto Iwa calo,',
        'E-bulu-ngami bwesu, E lubuto Iwa calo.'
      ]
    ],
    chorus: [
      'Twakulaenda, mulubuto. seni uko luse lulebeka:',
      'Lubeka kasuba nobushiku, Yesu lubuto lwesu.'
    ],
    englishVerses: [
      [
        'Hark! the herald angels sing, Jesus, the Light of the world;',
        'Glory to the newborn King, Jesus, the Light of the world.'
      ],
      [
        'Joyful, all ye nations, rise, Jesus, the Light of the world;',
        'Join the triumph of the skies, Jesus, the Light of the world.'
      ],
      [
        'Christ, by highest heav’n adored, Jesus, the Light of the world;',
        'Christ, the everlasting Lord, Jesus, the Light of the world.'
      ],
      [
        'Hail the heav’n-born Prince of Peace! Jesus, the Light of the world;',
        'Hail the Sun of Righteousness! Jesus, the Light of the world.'
      ]
    ],
    englishChorus: [
      'We’ll walk in the light, beautiful light; Come where the dewdrops of mercy are bright.',
      'Shine all around us by day and by night, Jesus, the Light of the world.'
    ]
  },
  {
    id: 'hymn-235',
    number: 235,
    title: 'Kabili Ubushiku Bwafika',
    writer: 'William Mason / Tune: Freeport',
    englishTune: 'Again the Day Returns',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata lya kwa Yehova',
    key: 'Eb Major',
    timeSignature: '2/2',
    scripture: 'Ukutendeka 2:1-3 · Ukufuma 20:8-11 · Esaya 58:13-14',
    isSample: false,
    melodicPreview: [63, 67, 70, 72, 70, 68, 67, 65, 63],
    verses: [
      [
        'Bushiku bwa muushilo bwafika,',
        'Bwalipaliilwee kubutendeko;',
        'Fwe bana bakwe tatu bombamo,',
        'Mubushiku bwakwa Jehova.'
      ],
      [
        'Natusunge bushiku bwashila;',
        'Tuusambilile bufwayo bwakwe;',
        'Aleumfwa kuu pepa kwa cine;',
        'Muma pepo pamo namunyimbo.'
      ],
      [
        'Mfumu yesu umfwo kwita kwesu,',
        'Uumfwa ukwiitaa kwa bana bobe,',
        'Bulayo bwenu be nge mpili,',
        'Tupeni ci-kuku fwe baluba.'
      ],
      [
        'Tata muli mwee twacetekela,',
        'Muumaka Yee nuu twacetekela.',
        'Wakulaba ciibusa kasunga',
        'Lulumbi lu-be nenu pe nape.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Again the day returns of holy rest,',
        'Which, when He made the world, Jehovah blest;',
        'When, like His own, He bade our labors cease,',
        'And all be piety, and all be peace.'
      ],
      [
        'Let us devote this consecrated day',
        'To learn His will, and all we learn obey;',
        'So shall He hear, when fervently we raise',
        'Our supplications, and our songs of praise.'
      ],
      [
        'Lord of all worlds, incline Thy gracious ear;',
        'Thy children’s voice in tender mercy hear;',
        'Bear Thy blest promise, fix’d as hills, in mind,',
        'And shed renewing grace on lost mankind.'
      ],
      [
        'Father in heav’n, in whom our hopes confide,',
        'Whose pow’r defends us, and whose precepts guide,',
        'Thro’ life our surest guardian, and friend,',
        'Glory supreme be Thine till time shall end.'
      ]
    ]
  },
  {
    id: 'hymn-236',
    number: 236,
    title: 'Ukutemwa Kwakwe',
    writer: 'Samuel Medley / William Caldwell',
    englishTune: 'His Loving Kindness',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kulumbanya',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Yeremia 31:3 · Amalumbo 63:3 · Esaya 63:7',
    isSample: false,
    melodicPreview: [65, 72, 72, 74, 72, 69, 70, 69, 67, 65],
    verses: [
      [
        'We mutima shibuka, mwimbile kabumba obe',
        'Ima ne nseko no kuya kukwimba nokutotela.'
      ],
      [
        "Alimwene lyo nawile, antemenwe'lyo nali lyo,",
        'Ampuswishe mukuluba, luse elyo ne cikuku.'
      ],
      [
        'Nangu fita fyafulisha nangu calo cilendufya',
        'Antungulula mu mweo, luse elyo ne cikuku.'
      ],
      [
        'Lyo macusho yafulisha, nga makumbi yafitisha',
        'Lyonse eminina pepi, luse elyo ne cikuku'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ima ne nseko no kuya kukwimba nokutotela.'
    ],
    englishVerses: [
      [
        'Awake, my soul, in joyful lays, And sing thy great Redeemer’s praise;',
        'He justly claims a song from me; His lovingkindness, O how free!'
      ],
      [
        'He saw me ruined in the fall, Yet loved me notwithstanding all;',
        'He saved me from my lost estate; His lovingkindness, O how great!'
      ],
      [
        'Though numerous hosts of mighty foes, Though earth and hell my way oppose,',
        'He safely leads my soul along: His lovingkindness, O how strong!'
      ],
      [
        'When trouble, like a gloomy cloud, Has gathered thick and thundered loud,',
        'He near my soul has always stood: His lovingkindness, O how good!'
      ]
    ],
    englishChorus: [
      'Lovingkindness, lovingkindness, His lovingkindness, O how free!'
    ]
  },
  {
    id: 'hymn-237',
    number: 237,
    title: 'Mwiminineni Yesu',
    writer: 'George Duffield Jr. / George J. Webb',
    englishTune: 'Stand Up, Stand Up for Jesus',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulwi bwa Bwina Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Abaefeso 6:10-18 · 1 Abakorinti 16:13 · 2 Timoteo 2:3',
    isSample: false,
    melodicPreview: [65, 70, 70, 72, 74, 70, 67, 65],
    verses: [
      [
        'Mwiminineni Yesu mwe fita fyakwe mwe,',
        'Imyeni imwe uluunga lwikanshiwa;',
        'A letutungulula mukwansha no kwansha,',
        'Limbi kuti bamushika bakwe bayanshya'
      ],
      [
        'Mwiminineni Yesu Umfwileni penga,',
        'Alemutuma ilelo muyemulwila,',
        'Ilelo imwe bonse muye mubombela,',
        'Muba abakoseshiwa mube na maka.'
      ],
      [
        'Mwiminineni Yesu mu maka yakwe fye,',
        'Imwe bene tekuti muicetekele,',
        'Fwaleni fye inkwela ye landwe lisuma;',
        'Kabiyeni konse konse nangu kwayafya.'
      ],
      [
        'Mwiminineni Yesu inshita ilepwa,',
        'Ilelo fye ekulwa mailo mutende;',
        'Ilyo wayansha akapelwa icitebo,',
        'Wene akalaba ne Mfumu inshiku pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Stand up, stand up for Jesus, ye soldiers of the cross;',
        'Lift high His royal banner, it must not suffer loss.',
        'From vict’ry unto vict’ry His army shall He lead,',
        'Till ev’ry foe is vanquished, and Christ is Lord indeed.'
      ],
      [
        'Stand up, stand up for Jesus, the trumpet call obey;',
        'Forth to the mighty conflict, in this His glorious day.',
        'Ye that are brave now serve Him against unnumbered foes;',
        'Let courage rise with danger, and strength to strength oppose.'
      ],
      [
        'Stand up, stand up for Jesus, stand in His strength alone;',
        'The arm of flesh will fail you, ye dare not trust your own.',
        'Put on the gospel armor, each piece put on with prayer;',
        'Where duty calls or danger, be never wanting there.'
      ],
      [
        'Stand up, stand up for Jesus, the strife will not be long;',
        'This day the noise of battle, the next the victor’s song.',
        'To him that overcometh a crown of life shall be;',
        'He with the King of Glory shall reign eternally.'
      ]
    ]
  },
  {
    id: 'hymn-238',
    number: 238,
    title: "Ni Ba 'Ni Aba?",
    writer: 'Tullius C. O’Kane',
    englishTune: 'Who, Who Are These?',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 7:13-14 · Ukusokolola 22:14',
    isSample: false,
    melodicPreview: [67, 67, 70, 70, 68, 67, 65, 67, 63],
    verses: [
      [
        "Bushe nibani 'ba bayabuka",
        'Bapusuka ukufuma kumfwa',
        'Yesu abapususha basambwa mumulopa'
      ],
      [
        'Aba mano mubwaice bwabo',
        'Basalile nshila shakwa Yesu',
        'Basangile cikulu, Basambwa mu mulopa.'
      ],
      [
        'Aba ebo bali mu macusho',
        'Bali na Yesu baleseketa',
        'Ne mitima yabuta, basambwa mumulopa'
      ],
      [
        'Aba ebo bali mumatunko',
        'Bayanshishe maka ya mulilo',
        'Nomba Yesu abeta, basambwa mumulopa.'
      ],
      [
        'Nabapusuka bali pa cabu',
        'Bubi misongo ne mfwa takuli',
        'Balesekela lyonse basambwa mumulopa.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Bengile fipata mu Jerusalemu',
      'Basambwa mumulopa wakwe',
      'Bengile fipata mu Jerusalemu',
      'Basambwa mu mulopa.'
    ],
    englishVerses: [
      [
        'Who, who are these beside the chilly wave,',
        'Just on the borders of the silent grave,',
        'Shouting Jesus’ power to save, Washed in the blood of the Lamb?'
      ],
      [
        'These, these are they who in their youthful days,',
        'Found Jesus early, and in wisdom’s ways,',
        'Proved the fullness of His grace, Washed in the blood of the Lamb.'
      ],
      [
        'These, these are they who, in affliction’s woes,',
        'Ever have found in Jesus calm repose,',
        'Such as from a pure heart flows, Washed in the blood of the Lamb.'
      ],
      [
        'These, these are they who, in the conflict dire,',
        'Boldly have stood amid the hottest fire;',
        'Jesus now says, “Come up higher,” Washed in the blood of the Lamb.'
      ],
      [
        'Safe, safe upon the ever-shining shore,',
        'Sin, pain, and death, and sorrow are all o’er;',
        'Happy now and evermore, Washed in the blood of the Lamb.'
      ]
    ],
    englishChorus: [
      'Sweeping through the gates of the New Jerusalem,',
      'Washed in the blood of the Lamb;',
      'Sweeping through the gates of the New Jerusalem,',
      'Washed in the blood of the Lamb.'
    ]
  },
  {
    id: 'hymn-239',
    number: 239,
    title: 'Bushe Wanaka?',
    writer: 'Stephen the Sabaite (tr. John Mason Neale) / Henry W. Baker',
    englishTune: 'Art Thou Weary?',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwite bwa Kupusuka',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 11:28-30 · Yohane 20:27',
    isSample: false,
    melodicPreview: [71, 71, 71, 69, 71, 72, 69, 67],
    verses: [
      [
        'Bushe iwe naunaka, naupelelwa?',
        "Yesu ati, Isa kuno 'sotushe."
      ],
      [
        "Bushe nakwate tilaso 'kuti mwishibe?",
        'Ee mu mbafu namu mimwe ne nkasa.'
      ],
      [
        'Bushe afwele citebo pa mutwe wakwe?',
        'Ee citebo alifwele ca myunga.'
      ],
      [
        'Nga nakonka namusanga akampela nshi?',
        'Amalanda no kucula fikapwa.'
      ],
      [
        'Nga namukonka mupepi cinshi akampela?',
        'Ubulanda nokucula fikapwa.'
      ],
      [
        'Nga namulomba ukumbula, engankana?',
        'Tetyakane; mulu, calo tipite.'
      ],
      [
        'Kusango kukonka kulya bushe ampale?',
        'Bakasesema bashila bati Ee.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Art thou weary, art thou languid, Art thou sore distressed?',
        '“Come to Me,” saith One, “and coming, Be at rest.”'
      ],
      [
        'Hath He marks to lead me to Him, If He be my guide?',
        '“In His feet and hands are wound-prints, And His side.”'
      ],
      [
        'Is there diadem, as Monarch, That His brow adorns?',
        '“Yea, a crown, in very surety, But of thorns.”'
      ],
      [
        'If I find Him, if I follow, What His guerdon here?',
        '“Many a sorrow, many a labor, Many a tear.”'
      ],
      [
        'If I still hold closely to Him, What hath He at last?',
        '“Sorrow vanquished, labor ended, Jordan passed.”'
      ],
      [
        'If I ask Him to receive me, Will He say me nay?',
        '“Not till earth and not till heaven Pass away.”'
      ],
      [
        'Finding, following, keeping, struggling, Is He sure to bless?',
        '“Saints, apostles, prophets, martyrs, Answer, ‘Yes.’”'
      ]
    ]
  },
  {
    id: 'hymn-240',
    number: 240,
    title: 'Mona Umupusushi Ali Pa Mwinshi',
    writer: 'Joseph Grigg (adapted) / Lowell Mason',
    englishTune: 'Behold the Saviour at the Door',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwite bwa Kupusuka',
    key: 'E Major',
    timeSignature: '3/4',
    scripture: 'Ukusokolola 3:18-20 · Ukusokolola 22:11',
    isSample: false,
    melodicPreview: [71, 68, 71, 76, 75, 73, 71, 69, 68, 66, 64],
    verses: [
      [
        "Umupusushi pa mwinshi, Kale 'shile, akonkonsha;",
        'Acili a-lelolela, Wikana ukumwiswila.'
      ],
      [
        'Aleti, shita Golide, No mwingila wabutisha;',
        'Ku mensa su-ba mafuta, Elyo ulemona bwino.'
      ],
      [
        'Umfwe shiwi lilekwita, Lyafuma ku-wacishinka;',
        'Walikaba, Watalala, Esha ukupilibuka'
      ],
      [
        'Mulimo wakwe walapwa, Alaleka kupapata;',
        "Wa fiko a-be wa fiko, Wa mushilo n'ifyo fine."
      ],
      [
        'Icibi calaisalwa. Ala wice-lwa mwiswile;',
        'Ima wisu-le ku cibi, Alaya takulolele.'
      ],
      [
        'Musuminishe engile, Alekupelo butusho;',
        'Akulae-nda na iwe, Akula lya nobe lyonse.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Behold the Saviour at the door! He gently knocks, has knocked before,',
        'Has waited long, is waiting still; You treat no other friend so ill.'
      ],
      [
        'He counsels thee to buy of Him Gold tried by fire, and raiment clean;',
        'Anoint thine eyes, that thou may’st see, And put away thy stains from thee.'
      ],
      [
        'O, hear the faithful Witness’ voice, He offers now a final choice;',
        'Thou art offensive, O lukewarm! Therefore be zealous and reform.'
      ],
      [
        'His mission now is almost o’er, Before the throne He’ll plead no more;',
        'The filthy must his filth retain, He that is holy, so remain.'
      ],
      [
        'His locks with dews of night are wet, But at thy heart He ling’reth yet.',
        'Awake! and open wide the door; Bid thy Beloved wait no more.'
      ],
      [
        'Yes, bring Him in, a welcome guest; So shalt thou in His presence rest,',
        'And in communion sweet and free, Shalt sup with Him and He with thee.'
      ]
    ]
  },
  {
    id: 'hymn-241',
    number: 241,
    title: 'Nafike Calo Cisuma',
    writer: 'Edgar Page Stites / John R. Sweney',
    englishTune: 'Beulah Land',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Esaya 62:4 · Ukusokolola 21:1-4 · Ukusokolola 22:1-5',
    isSample: false,
    melodicPreview: [62, 67, 71, 74, 71, 69, 67, 64, 67],
    verses: [
      [
        "Nafike calo cisuma, Ne fyuma fyonse 'ne fyandi;",
        'Kasuba kabalika pe, Pantu bushiku nabupwa.'
      ],
      [
        'Yesu aenda na ine, Tulesosa bwino bwino.',
        'Antungulula kuboko, Pantu nafika mu pepi.'
      ],
      [
        'Cena kuno cawamisha, Cafuma ku calo cilya,',
        'Ku mimana ya bumi pe, Maluba yasuma sana.'
      ],
      [
        'Natontonkanya ndeumfwa,',
        'Nyimbo sha bangeli kulya.',
        "Baleimba 'lwimbo nsuma,",
        'Lwimbo lwa lupusukilo.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Icalo ici Keneni, Lintu nafiko lupili,',
      "Kwishilya kwa mumana 'ko namone ng'anda shisuma;",
      'Icalo ici cawama nkekala uko pe na pe.'
    ],
    englishVerses: [
      [
        'I’ve reached the land of corn and wine, And all its riches freely mine;',
        'Here shines undimmed one blissful day, For all my night has passed away.'
      ],
      [
        'My Savior comes and walks with me, And sweet communion here have we;',
        'He gently leads me by His hand, For this is Heaven’s border land.'
      ],
      [
        'A sweet perfume upon the breeze Is borne from ever vernal trees,',
        'And flow’rs that never fading grow, Where streams of life forever flow.'
      ],
      [
        'The zephyrs seem to float to me,',
        'Sweet sounds to Heaven’s melody,',
        'As angels with the white robed throng,',
        'Join in the sweet redemption song.'
      ]
    ],
    englishChorus: [
      'O Beulah Land, sweet Beulah Land, As on thy highest mount I stand,',
      'I look away across the sea, Where mansions are prepared for me,',
      'And view the shining glory shore, My Heav’n, my home forever more!'
    ]
  },
  {
    id: 'hymn-242',
    number: 242,
    title: 'Walishuka Umwando',
    writer: 'John Fawcett / Hans Georg Nägeli (arr. Lowell Mason)',
    englishTune: 'Blest Be the Tie',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukumfwana kwa Bena Kristu',
    key: 'F Major',
    timeSignature: '3/4',
    scripture: 'Abaefeso 4:1-6 · 1 Yohane 4:7-12 · Abagalatia 6:2',
    isSample: false,
    melodicPreview: [69, 69, 65, 67, 69, 67, 65, 64, 65],
    verses: [
      [
        'Washu-ka u-mwando, Waka-ke mi-tima;',
        "Ukwa-mpana-, 'Kuba-pamo-,",
        'Kwaba-nga ku-mulu.'
      ],
      [
        'Ku ci-puna-cenu, Twape-la ma-pepo;',
        'Mwenso-kufwa-ya ne-nsansa,',
        'Fyonse-fili-pamo.'
      ],
      [
        'Tweshe-ukwa-fwana, Mu ma-landa-yonse;',
        'Tuse-ndesha-nye fi-sendo-,',
        'Tule-ba ne-nkumbu.'
      ],
      [
        'Ilyo-twale-kana, Tatu-seke-lela;',
        'Tuli-no bucete-kelo-,',
        'Tuka-ya ku-mana.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Blest be the tie that binds Our hearts in Christian love;',
        'The fellowship of kindred minds',
        'Is like to that above.'
      ],
      [
        'Before our Father’s throne We pour our ardent prayers;',
        'Our fears, our hopes, our aims are one,',
        'Our comforts and our cares.'
      ],
      [
        'We share our mutual woes, Our mutual burdens bear,',
        'And often for each other flows',
        'The sympathizing tear.'
      ],
      [
        'When we asunder part, It gives us inward pain;',
        'But we shall still be joined in heart,',
        'And hope to meet again.'
      ]
    ]
  },
  {
    id: 'hymn-243',
    number: 243,
    title: 'Buka We Mutima Wandi',
    writer: 'Charles Wesley / Lewis Edson',
    englishTune: 'Arise, My Soul, Arise',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ulubulo no Lupulumuko',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'AbaRoma 8:34 · AbaHebere 7:25 · 1 Yohane 2:1-2',
    isSample: false,
    melodicPreview: [70, 74, 70, 65, 67, 69, 70],
    verses: [
      [
        'Shibuka we mutima wiba na mwenso,',
        'Ilambo lya cine lyamfumishe ku mfwa;',
        'Ku cipuna ndesumina, Ku cipuna ndesumina;',
        'Shina lyandi lyalilembwa.'
      ],
      [
        'Ekala ku mulu, Alepapatila,',
        'Alepapatila no mulopa wakwe,',
        'Twalubwilwe no mulopa, Twalubwilwe no mulopa:',
        'Uwatwelwe ku cipuna.'
      ],
      [
        'Ali ne filaso, Ifya pa Kalvari,',
        'Ampepeleleko, Anandile bwino,',
        "Mweleleni 'fya sosele, Mweleleni 'fya sosele;",
        'Aicefya teti afwe.'
      ],
      [
        'Tata alaumfwa nga apepa Yesu.',
        'Umusubwa wakwe, Tekuti amushe,',
        'Mupashi wakwe waita, Mupashi wakwe waita;',
        "'Ne nimfwalwa kuli Lesa."
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Arise, my soul, arise; shake off thy guilty fears;',
        'The bleeding sacrifice in my behalf appears:',
        'Before the throne my surety stands, Before the throne my surety stands,',
        'My name is written on His hands.'
      ],
      [
        'He ever lives above, for me to intercede;',
        'His all-redeeming love, His precious blood, to plead:',
        'His blood atoned for all our race, His blood atoned for all our race,',
        'And sprinkles now the throne of grace.'
      ],
      [
        'Five bleeding wounds He bears; received on Calvary;',
        'They pour effectual prayers; they strongly plead for me:',
        '“Forgive him, O forgive,” they cry, “Forgive him, O forgive,” they cry,',
        '“Nor let that ransomed sinner die!”'
      ],
      [
        'The Father hears Him pray, His dear anointed One;',
        'He cannot turn away the presence of His Son;',
        'His Spirit answers to the blood, His Spirit answers to the blood,',
        'And tells me I am born of God.'
      ]
    ]
  },
  {
    id: 'hymn-244',
    number: 244,
    title: 'Konka Yesu',
    writer: 'Traditional Gospel Hymn',
    englishTune: 'Come to Jesus',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwite bwa Kupusuka',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 11:28 · Abafilipi 4:13 · Yohane 6:37',
    isSample: false,
    melodicPreview: [67, 71, 74, 71, 67, 69, 71, 67],
    verses: [
      [
        'Konka Yesu, Konka Yesu;',
        'Konka Yesu nomba;',
        'Nomba konka Yesu,',
        'Konka Yesu nomba.'
      ],
      [
        'Mwite Yesu, Mwite Yesu',
        'Mwite Yesu nomba',
        'Nomba Mwite Yesu.',
        'Mwite Yesu nomba'
      ],
      [
        'Ulemumfwa Yesu, Ulemumfwa Yesu.',
        'Ulemumfwa Yesu nomba',
        'Nomba Ulemumfwa Yesu',
        'Ulemumfwa Yesu nomba'
      ],
      [
        'Akulinda Yesu, Akulinda Yesu',
        'Akulinda Yesu nomba',
        'Nomba akulinda Yesu',
        'Akulinda Yesu nomba'
      ],
      [
        'Akutemwa Yesu, Akutemwa Yesu',
        'Akutemwa Yesu Nomba',
        'Nomba Akutemwa Yesu',
        'Akutemwa Yesu nomba'
      ],
      [
        'wamaka Yesu, wamaka Yesu',
        'wamaka Yesu nomba',
        'Nomba wamaka Yesu',
        'wamaka Yesu nomba'
      ],
      [
        'Cetekela Yesu, Cetekela Yesu',
        'Cetekela Yesu nomba',
        'nomba Cetekela nomba',
        'Cetekela Yesu nomba'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Come to Jesus, come to Jesus,',
        'Come to Jesus just now;',
        'Just now come to Jesus,',
        'Come to Jesus just now.'
      ],
      [
        'Call upon Him, call upon Him,',
        'Call upon Him just now;',
        'Just now call upon Him,',
        'Call upon Him just now.'
      ],
      [
        'He will hear you, He will hear you,',
        'He will hear you just now;',
        'Just now He will hear you,',
        'He will hear you just now.'
      ],
      [
        'He is waiting, He is waiting,',
        'He is waiting just now;',
        'Just now He is waiting,',
        'He is waiting just now.'
      ],
      [
        'He will love you, He will love you,',
        'He will love you just now;',
        'Just now He will love you,',
        'He will love you just now.'
      ],
      [
        'He is able, He is able,',
        'He is able just now;',
        'Just now He is able,',
        'He is able just now.'
      ],
      [
        'Only trust Him, only trust Him,',
        'Only trust Him just now;',
        'Just now only trust Him,',
        'Only trust Him just now.'
      ]
    ]
  },
  {
    id: 'hymn-245',
    number: 245,
    title: 'Takuli Ishina Limbi',
    writer: 'Franklin E. Belden',
    englishTune: 'No Other Name',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Imilimo 4:12 · Abafilipi 2:9-11',
    isSample: false,
    melodicPreview: [67, 67, 71, 74, 74, 72, 71, 69],
    verses: [
      [
        'Takuli Ishina limbi ilyo ifwe twatemwa,',
        'Lilasekesha bangeli na baKristu pano nse.'
      ],
      [
        'Takuli Ishina limbi lyakutusekelesha;',
        'Takuli Ishina limbi, Kuti twasekelela.'
      ],
      [
        'Ninjishiba nkamumona, Lintu akamoneka;',
        'No kumfwa, "Wacita bwino," Nkaba no kusekela'
      ],
      [
        'Nga afwaya nalabomba, Mwi bala lyakwe muno;',
        'Ndeti mumpalile fyonse, Mashiwi ne milimo.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Yesu ... Yesu ... Takuli Ishina limbi.',
      'Yesu ... Yesu ... Takuli Ishina limbi.'
    ],
    englishVerses: [
      [
        'There’s no other name like Jesus, ’Tis the dearest name we know,',
        '’Tis the angels’ joy in heaven, ’Tis the Christian’s joy below.'
      ],
      [
        'There’s no other name like Jesus When the heart with grief is sad,',
        'There’s no other name like Jesus When the heart is free and glad.'
      ],
      [
        '’Tis the hope that I shall see Him When in glory He appears,',
        '’Tis the hope to hear His welcome That my fainting spirit cheers.'
      ],
      [
        'If He wills that I should labor In His vineyard day by day,',
        'Then ’tis well if only Jesus Blesses all I do or say.'
      ]
    ],
    englishChorus: [
      'Sweet name, dear name, There’s no other name like Jesus;',
      'Sweet name, dear name, There’s no other name like Jesus.'
    ]
  },
  {
    id: 'hymn-246',
    number: 246,
    title: 'Ishiwi Limo Fye Ilya Kwa Yesu',
    writer: 'Fanny J. Crosby / William H. Doane',
    englishTune: 'Now Just a Word for Jesus',
    category: 'mission-and-evangelism',
    categoryBemba: 'Ubunte kuli Yesu',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 107:2 · Imilimo 4:20 · Abafilipi 4:13',
    isSample: false,
    melodicPreview: [66, 67, 69, 74, 71, 69, 66, 67, 69, 66, 64],
    verses: [
      [
        'Natumfwe shiwi lya Yesu Cibusa obe,',
        "Bwela iwe utwebeko 'Co akwitila."
      ],
      [
        'Tumfwe Shiwi lya Yesu, Ne fyo akwelela;',
        'Mu cikuku tulesha kufika ku mulu.'
      ],
      [
        'Tumfwe Shiwi lya Yesu,',
        'Uwatufwilile,',
        'Natemwa Umupusushi uwamfwilile.'
      ],
      [
        'Tumfwe Shiwi lya Yesu, Twilapose nshita,',
        'Umutima wabipa, Uleto bulanda.'
      ],
      [
        'Tumfwe Shiwi lya Yesu, Kusho busumino.',
        'Fuma mu kunaka, Fyonse pela ku Mfumu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      "Tumfwe kuli Yes'i-shiwi. Litwafwe mu nshila;",
      'Shiwi lyakwa Yesu limo, Imba upepe.'
    ],
    englishVerses: [
      [
        'Now just a word for Jesus; Your dearest Friend so true,',
        'Come, cheer our hearts and tell us What He has done for you.'
      ],
      [
        'Now just a word for Jesus; You feel your sins forgiven,',
        'And by His grace are striving To reach a home in heaven.'
      ],
      [
        'Now just a word for Jesus;',
        'A cross it cannot be',
        'To say, “I love my Saviour Who gave His life for me.”'
      ],
      [
        'Now just a word for Jesus; Let not the time be lost;',
        'The heart’s neglected duty Brings sorrow to its cost.'
      ],
      [
        'Now just a word for Jesus; And if your faith be dim,',
        'Arise in all your weakness, And leave the rest to Him.'
      ]
    ],
    englishChorus: [
      'Now just a word for Jesus— ’Twill help us on our way;',
      'One little word for Jesus, O speak, or sing, or pray.'
    ]
  },
  {
    id: 'hymn-247',
    number: 247,
    title: 'Lisheni Ndibu',
    writer: 'William O. Cushing / George F. Root',
    englishTune: 'Ring the Bells of Heaven',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ubuseko bwa Kupusuka',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Luka 15:7 · Luka 15:10 · Luka 15:20-24',
    isSample: false,
    melodicPreview: [72, 70, 68, 72, 75, 68, 72, 70],
    verses: [
      [
        'Lisheni indibu kulyu buseko,',
        'Pa muntu wafuma ku bubi;',
        'Wishi alemukumanya mu nshila,',
        'Amusengela walubile.'
      ],
      [
        'Lisheni indibu kuli buseko,',
        'Walubile nomba nabwela;',
        'Apusushiwa kufuma ku bubi,',
        'Wene afyalwa cipya cipya.'
      ],
      [
        'Lisheni Indibu ku mutebeto,',
        'Bangeli baleimbo bwansho;',
        'Twaleni ilyashi liye kutali,',
        'Watemwikwa nafyalwa lelo.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Lulu-mbi baimba bangeli,',
      'Lulu-mbi lisheni amasese:',
      'Abalubulwa baleimbo lwimbo,',
      'Baleimba lwa kulubulwa'
    ],
    englishVerses: [
      [
        'Ring the bells of Heaven! there is joy today',
        'For a soul returning from the wild!',
        'See! the Father meets him out upon the way,',
        'Welcoming His weary, wand’ring child.'
      ],
      [
        'Ring the bells of Heaven! there is joy today,',
        'For the wand’rer now is reconciled;',
        'Yes, a soul is rescued from his sinful way,',
        'And is born anew a ransomed child.'
      ],
      [
        'Ring the bells of Heaven! spread the feast today!',
        'Angels, swell the glad triumphant strain!',
        'Tell the joyful tidings, bear it far away!',
        'For a precious soul is born again.'
      ]
    ],
    englishChorus: [
      'Glory! glory! how the angels sing;',
      'Glory! glory! how the loud harps ring!',
      '’Tis the ransomed army, like a mighty sea,',
      'Pealing forth the anthem of the free!'
    ]
  },
  {
    id: 'hymn-248',
    number: 248,
    title: 'Yesu Waku Nazareti Alepita',
    writer: 'Etta Campbell / Theodore E. Perkins',
    englishTune: 'Jesus of Nazareth Passeth By',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwite bwa Kupusuka',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Marko 10:47 · Luka 18:37 · 2 Abakorinti 6:2',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 69, 71, 67, 64, 62],
    verses: [
      [
        'Cinshi bumba lilekonka? Nia-ni untulilekonka,',
        'Kuli congo cikalamba, Bushe kupepa, balepepa?',
        'Mubukali-i balyaswike, Alani Yeswalepita,',
        'Mubukali balyaswike, Ala ni Yesu alepita.'
      ],
      [
        "Ninani Yesu winioyu? 'Walenga bantu bamukonke,",
        'Mweni ewalenga-abantu, Kuci-taifyo alefwaya;',
        'Mashiwi yabo yaleta, Alani Yesu alepita.',
        'Mashiwi yabo yaleti. Ala ni Yesu alepita.'
      ],
      [
        'Uyu Yesu taliwafye, Afumishe kucula kwesu,',
        'Bonse bali ne fyafina, Alibakakulwile bonse;',
        'Impofu yasekelo kumfwa, Ala ni Yesu alepita;',
        'Mpofu yasekelo kumfwa, Alani Yesu alepita.'
      ],
      [
        'Elo tule-enda mu-makasa aendele,',
        'Aletupembela lyonse, ukutupa ukusekela,',
        'Natubilikishe bonse, Alani Yesu alepita;',
        'Natubilikishe bonse, Alani Yesu alepita.'
      ],
      [
        'Mwebafininwa iseni, Alemwelela bonse fibi,',
        'Mwebafuma kuli Lesa, Bweleni mwelelwe.',
        'Mwe baletunkwa iseni. Ala ni Yesu alepita,',
        'Mwebaletunkwa Iseni, Alani Yesu alepita.'
      ],
      [
        'Nga mwakana kwita kwakwe, Noluse pamo nokutemwa,',
        'Akafuma kuli Imwe, Takatalya mwita kabili.',
        'Ngamwacelwa Imwe mukomfwa, Alani Yesu alepita,',
        'Nga mwacelwa Imwe mukomfwa, Alani Yesu alepita.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'What means this eager, anxious throng, Which moves with busy haste along,',
        'These wondrous gatherings day by day? What means this strange commotion, pray?',
        'In accents hushed the throng reply: “Jesus of Nazareth passeth by.”',
        'In accents hushed the throng reply: “Jesus of Nazareth passeth by.”'
      ],
      [
        'Who is this Jesus? Why should He The city move so mightily?',
        'A passing stranger, has He skill To move the multitude at will?',
        'Again the stirring tones reply: “Jesus of Nazareth passeth by.”',
        'Again the stirring tones reply: “Jesus of Nazareth passeth by.”'
      ],
      [
        'Jesus! ’tis He who once below Man’s pathway trod ’mid pain and woe;',
        'And burdened ones, where’er He came, Brought out their sick, and deaf, and lame:',
        'The blind rejoiced to hear the cry: “Jesus of Nazareth passeth by.”',
        'The blind rejoiced to hear the cry: “Jesus of Nazareth passeth by.”'
      ],
      [
        'Again He comes! From place to place His holy footprints we can trace,',
        'He pauseth at our threshold—nay, He enters—condescends to stay;',
        'Shall we not gladly raise the cry? “Jesus of Nazareth passeth by.”',
        'Shall we not gladly raise the cry? “Jesus of Nazareth passeth by.”'
      ],
      [
        'Ho! all ye heavy-laden, come, Here’s pardon, comfort, rest, and home;',
        'Ye wanderers from a Father’s face, Return, accept His proffered grace;',
        'Ye tempted ones, there’s refuge nigh— “Jesus of Nazareth passeth by.”',
        'Ye tempted ones, there’s refuge nigh— “Jesus of Nazareth passeth by.”'
      ],
      [
        'But if you still His call refuse, And all His wondrous love abuse,',
        'Soon will He sadly from you turn, Your bitter prayer for pardon spurn;',
        '“Too late, too late!” will be your cry, Jesus of Nazareth has passed by.',
        '“Too late, too late!” will be your cry, Jesus of Nazareth has passed by.'
      ]
    ]
  },
  {
    id: 'hymn-249',
    number: 249,
    title: 'Makumi Pabula na Pabula',
    writer: 'Elizabeth C. Clephane / Ira D. Sankey',
    englishTune: 'The Ninety and Nine',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ulubulo no Lupulumuko',
    key: 'Ab Major',
    timeSignature: '6/8',
    scripture: 'Luka 15:4-7 · Mateo 18:12-14',
    isSample: false,
    melodicPreview: [68, 68, 68, 68, 70, 72, 73, 72, 70, 68],
    verses: [
      [
        "Makumi pabula 'lyo na pabula,",
        'Shali mwi-ci-nka mulya,',
        'Imo tayalimo, yali pampili, kutali kufuma kwi cinka,',
        'Yalubile yali mu mpanga yeka,',
        'Tayali mumaboko ya mucemi;',
        'Tayali mumaboko yamu Cemi.'
      ],
      [
        'Makumi pabula lyo na pabula,',
        "Bushe ta'shili sha-linga,",
        'Kacema atile, "Imo pa-li shi, na iya kufuma kuli\'ne',
        'Nangwi nshila yabipa mulya mabwe,',
        'Ndeya fwaye mpanga mu matololo,',
        'Ndeya fwaye mpanga mu matololo."'
      ],
      [
        'hilye shapuswike tashaishibe,',
        'Amenshi fyo ya shikile,',
        'Nemfimfi fyo yali umo aile,',
        'Asangile mpange yaluba.',
        'Aumfwa yalila mumatololo, Yali yalwala pepi nokufwa,',
        'Yali yalwala pepi nokufwa.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'There were ninety and nine that safely lay',
        'In the shelter of the fold,',
        'But one was out on the hills away, Far off from the gates of gold;—',
        'Away on the mountains wild and bare,',
        'Away from the tender Shepherd’s care,',
        'Away from the tender Shepherd’s care.'
      ],
      [
        '“Lord, Thou hast here Thy ninety and nine;',
        'Are they not enough for Thee?”',
        'But the Shepherd made answer: “One of mine Has wandered away from Me,',
        'And although the road be rough and steep,',
        'I go to the desert to find My sheep,',
        'I go to the desert to find My sheep.”'
      ],
      [
        'But none of the ransomed ever knew',
        'How deep were the waters crossed;',
        'Nor how dark was the night that the Lord passed through',
        'Ere He found His sheep that was lost.',
        'Far out in the desert He heard its cry,— Sick and helpless, and ready to die,',
        'Sick and helpless, and ready to die.'
      ]
    ]
  },
  {
    id: 'hymn-250',
    number: 250,
    title: 'Ukufuma ku Mesho',
    writer: 'Horatio R. Palmer',
    englishTune: 'Yield Not to Temptation',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukucimfya Amatunko',
    key: 'Bb Major',
    timeSignature: '6/8',
    scripture: 'Yakobo 1:12 · 1 Abakorinti 10:13 · Abafilipi 4:13',
    isSample: false,
    melodicPreview: [65, 67, 65, 62, 65, 70, 69, 67, 65],
    verses: [
      [
        'Su-la matunko-ya-twa-la ku bubi,',
        "Nga 'we wayaci-mfya 'ka-leta bambi,",
        'Lwi-sha fye nama-ka ka-nisho bubi,',
        'U-mwipushe Yesu- E-na lekwafwa.'
      ],
      [
        "Fu-ma kububi na- 'ba-sose nsele,",
        "Shi-nailya Mfumu -- wi- bula 'pa fye,",
        "Ba-uwa cine-we Ba' -walekanya,",
        "U-mwipushe Ye-su E-na 'ukwafwa."
      ],
      [
        "Kulyu-yo wansha 'kapelwe citebo,",
        'No-lucetekelo, A-we tukansha,',
        'Mupusushi Ena, Emaka yesu,',
        "U-mwipushe Yesu, E-na 'lekwafwa."
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Mwi-pushe Yesu E-ka Ma-ka alekupe-la',
      'A-Ii Uwaipe-Ia U-kukwafwa iwe.'
    ],
    englishVerses: [
      [
        'Yield not to temptation, for yielding is sin;',
        'Each vict’ry will help you some other to win;',
        'Fight manfully onward, dark passions subdue;',
        'Look ever to Jesus, He’ll carry you through.'
      ],
      [
        'Shun evil companions, bad language disdain,',
        'God’s name hold in rev’rence, nor take it in vain;',
        'Be thoughtful and earnest, kind-hearted and true;',
        'Look ever to Jesus, He’ll carry you through.'
      ],
      [
        'To him that o’ercometh, God giveth a crown,',
        'Through faith we will conquer, though often cast down;',
        'He who is our Savior, our strength will renew;',
        'Look ever to Jesus, He’ll carry you through.'
      ]
    ],
    englishChorus: [
      'Ask the Savior to help you, Comfort, strengthen, and keep you;',
      'He is willing to aid you, He will carry you through.'
    ]
  },
  {
    id: 'hymn-251',
    number: 251,
    title: 'Nangu Ndile Ukulila Teti Kumpusushe',
    writer: 'Robert Lowry',
    englishTune: 'Weeping Will Not Save Me',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ulubulo no Lupulumuko',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Abaefeso 2:8-9 · Tito 3:5 · Imilimo 4:12',
    isSample: false,
    melodicPreview: [67, 67, 67, 65, 63, 68, 67, 65, 63],
    verses: [
      [
        'Nangu ndile sha-ni Tekuti cimpusushe,',
        "Nangu kufumyo 'mwenso,",
        'Takwingafumya bubi, Teti kumpusu-she.'
      ],
      [
        'Nangu mombe shani, No bololoke bwandi',
        'No kuyumfwa ndi bwino,',
        'Mweo teti ube upya, Teti fimpusu-she'
      ],
      [
        'Nangu kulole-la Tekuti kumpusushe,',
        'Nangu naba no luse,',
        'Nga nati, kandolele, Kulolela nimfwa'
      ],
      [
        'Muli Yesu mweka',
        'Emwakupusukila,',
        'Pa mulimo acita,',
        'Eko ndebutukila. Kuti napusuka'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Yesu e wamfwilile, Aculile pa muti,',
      'E winga nkakula, E winga mpusu-sha.'
    ],
    englishVerses: [
      [
        'Weeping will not save me— Tho’ my face were bathed in tears,',
        'That could not allay my fears,',
        'Could not wash the sins of years— Weeping will not save me.'
      ],
      [
        'Working will not save me— Purest deeds that I can do,',
        'Holiest thoughts and feelings, too,',
        'Can not form my soul anew— Working will not save me.'
      ],
      [
        'Waiting will not save me— Helpless, guilty, lost I lie,',
        'In my ear is mercy’s cry;',
        'If I wail I can but die— Waiting will not save me.'
      ],
      [
        'Faith in Christ will save me—',
        'Let me trust Thy weeping Son,',
        'Trust the work that He has done;',
        'To His arms, Lord, help me run— Faith in Christ will save me.'
      ]
    ],
    englishChorus: [
      'Jesus wept and died for me; Jesus suffered on the tree;',
      'Jesus waits to make me free; He alone can save me.'
    ]
  },
  {
    id: 'hymn-252',
    number: 252,
    title: 'Mucetekele Ekafye',
    writer: 'John H. Stockton',
    englishTune: 'Only Trust Him',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Mateo 11:28 · Yohane 14:6 · Abaroma 10:11',
    isSample: false,
    melodicPreview: [71, 71, 71, 69, 67, 69, 71, 67, 64],
    verses: [
      [
        'Isa we wa mpulumushi kuluse lwa Mfumu,',
        'Alekupa ukutusha, nga wamusumina.'
      ],
      [
        'Aitile umulopa wakwe palupanda,',
        'Itumpike mumulopa wakwe walabuta.'
      ],
      [
        'Yesu enshila ya cine, Iya ku butusho,',
        'Musumine walacelwa, ukapoka amapalo.'
      ],
      [
        'Isa nomba wilundanye,',
        'Kwibumba lya Mfumu,',
        'Ukekale mumpange yo',
        'mulyukusekela'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ceteke-ela, cetekela, Mucetekele;',
      'Upusu-uke, Upusuke,',
      "'Lakupususha."
    ],
    englishVerses: [
      [
        'Come, every soul by sin oppressed, There’s mercy with the Lord,',
        'And He will surely give you rest, By trusting in His word.'
      ],
      [
        'For Jesus shed His precious blood, Rich blessings to bestow;',
        'Plunge now into the crimson flood That washes white as snow.'
      ],
      [
        'Yes, Jesus is the Truth, the Way, That leads you into rest;',
        'Believe in Him without delay, And you are fully blest.'
      ],
      [
        'Come, then, and join this holy band,',
        'And on to glory go,',
        'To dwell in that celestial land,',
        'Where joys immortal flow.'
      ]
    ],
    englishChorus: [
      'Only trust Him, only trust Him, Only trust Him now;',
      'He will save you, He will save you,',
      'He will save you now.'
    ]
  },
  {
    id: 'hymn-253',
    number: 253,
    title: 'Mona Kakumba Musuma',
    writer: 'Philip Doddridge / William H. Havergal',
    englishTune: "See, Israel's Gentle Shepherd",
    category: 'children-and-family',
    categoryBemba: 'Abana',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Marko 10:14 · Yesaya 40:11 · Yohane 10:11',
    isSample: false,
    melodicPreview: [63, 68, 72, 70, 68, 65, 63, 68],
    verses: [
      [
        'Mo-na Kakumba Aima, Kakumba musuma;',
        'A-leite-Mpanga shakwe,',
        'Ukuyakuntwali.'
      ],
      [
        'Le-ka shise kuli ine, Imfumwileita,',
        'Kuti shikwatyo bupalo, Eco Aishile.'
      ],
      [
        'Twa-baleta ku-li Imwe, Mu-maboko yenu,',
        'Twasekela tuli benu benu fye penape.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'See Israel’s gentle Shepherd stand, With all-engaging charms;',
        'Hark! how He calls the tender lambs,',
        'And folds them in His arms!'
      ],
      [
        '“Permit them to approach,” He cries, “Nor scorn their humble name;',
        'For ’twas to bless such souls as these The Lord of angels came.”'
      ],
      [
        'We bring them, Lord, in thankful hands, And yield them up to Thee;',
        'Joyful that we ourselves are Thine, Thine let our offspring be.'
      ]
    ]
  },
  {
    id: 'hymn-254',
    number: 254,
    title: 'Lumbanyeni Shina Lyakwa Jehova',
    writer: 'William Goode / Henry Carey',
    englishTune: "Praise Ye Jehovah's Name",
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kulumbanya',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 148:1-2 · Amalumbo 150:1-6 · Ukusokolola 5:13',
    isSample: false,
    melodicPreview: [67, 67, 69, 66, 67, 69, 71, 71, 72],
    verses: [
      [
        'Lumbanyeni shina ilyakwa Jehova, lumbanyeni',
        'Imeni mumwimbile mweba ku mulu,',
        'Ni Leso waluse, lumbanyeni.'
      ],
      [
        'Natwimbile Mfumu Mapenga yomfwike konse konse,',
        'Natumucindike mu nyimbo shisuma,',
        'Lumbuleni shina tumwimbile.'
      ],
      [
        'Lyo mulemwimbila kusheni ciunda, mwimbileni,',
        'Mwebalemwimbila cindikeni Mfumu,',
        'Natumucindike, tumwimbile.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Praise ye Jehovah’s name, Praise thro’ His courts proclaim, Rise and adore,',
        'High o’er the heav’ns above, Sounds His great acts of love, While His rich grace we prove,',
        'Vast as His pow’r.'
      ],
      [
        'Now let the trumpet raise Sounds of triumphant praise, Wide as His fame.',
        'There let the harp be found; Organs of solemn sound, Roll your deep notes around,',
        'Filled with His name.'
      ],
      [
        'While His high praise you sing, Shake ev’ry sounding string; Sweet the accord!',
        'He vital breath bestows; Let ev’ry breath that flows, His noble fame disclose;',
        'Praise ye the Lord.'
      ]
    ]
  },
  {
    id: 'hymn-255',
    number: 255,
    title: 'Ndekukabila Yesu',
    writer: 'Frederick Whitfield',
    englishTune: 'I Need Thee, Precious Jesus',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Abafilipi 4:19 · 2 Abakorinti 12:9 · Ukusokolola 7:17',
    isSample: false,
    melodicPreview: [60, 65, 65, 65, 67, 69, 67, 65],
    verses: [
      [
        'Ndekukabila Ye-su pantu ndi mupina,',
        'Ndi mwe-ni u-mule-ndo,',
        'Nshakwata fya calo,',
        'Kute-mwa kwa kwa Ye-su, Kula-nsansa-mu-sha.',
        'Ku-tungulu-le nshi-la mubulendo bwandi'
      ],
      [
        'Ndefwaya umuti-ma, Uwa-Mfumu Yesu,',
        'Waku-ngafwa mu-me-sho, Pamo mu-malanda.',
        'Ndefwa-ya Umupa-shi Waku-nsambi -li -sha,',
        'U-nange fya kwa Ye-su, Umwana wa-mpanga.'
      ],
      [
        'Ndekukabila Y e-su Kumu-mona bwangu,',
        'Nkafi-mbwe no bu-ka-ta Nka-mo-ne cipuna',
        'Pamo-naba lubu-lwa Tuka-lasekela,',
        'Tu-kembo lwimbo pe-fye,',
        'Tukamone Mfumu'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'I need Thee, precious Jesus, for I am very poor;',
        'A stranger and a pilgrim,',
        'I have no earthly store.',
        'I need the love of Jesus to cheer me on my way,',
        'To guide my doubting footsteps, to be my strength and stay.'
      ],
      [
        'I need the heart of Jesus, to feel each anxious care,',
        'To help me in temptations, and all my sorrows bear.',
        'I need Thy Holy Spirit to teach me what I am,',
        'To show me more of Jesus, to point me to the Lamb.'
      ],
      [
        'I need Thee, precious Jesus, and hope to see Thee soon,',
        'Encircled with the rainbow and seated on Thy throne.',
        'There, with Thy blood-bought children, my joy shall ever be,',
        'To sing my Jesus’ praises,',
        'To gaze, O Lord, on Thee.'
      ]
    ]
  },
  {
    id: 'hymn-256',
    number: 256,
    title: 'Mwe Lesa Kafwa',
    writer: 'Isaac Watts / William Croft',
    englishTune: 'O God, Our Help in Ages Past',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulayo bwa kwa Lesa',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 90:1-4 · AbaHebere 13:8 · Yesaya 26:4',
    isSample: false,
    melodicPreview: [67, 64, 69, 67, 72, 72, 71, 72],
    verses: [
      [
        'Mwe Lesa kafwa wakale, Ne nshita shikesa;',
        "Cubo cesu ku cipupu, We ng'anda yesu pe"
      ],
      [
        'Mwe cinshingwa ca cipuna,',
        'Twakulasungwa pe.',
        'Kuboko kwenu kwamaka',
        'Kwakulatucinga'
      ],
      [
        'Lintu mpili tashaliko, Pamo ne ci calo;',
        'Nshita shonse uli Lesa, kufika ne mpela.'
      ],
      [
        'Imyaka ikana limo, yaba nge cungulo;',
        'Nshiku shesu nasho bwipi, shaba ngo lucelo.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O God, our help in ages past, Our hope for years to come,',
        'Our shelter from the stormy blast, And our eternal home!'
      ],
      [
        'Under the shadow of Thy throne',
        'Still may we dwell secure;',
        'Sufficient is Thine arm alone,',
        'And our defense is sure.'
      ],
      [
        'Before the hills in order stood, Or earth received her frame,',
        'From everlasting Thou art God, To endless years the same.'
      ],
      [
        'A thousand ages in Thy sight Are like an evening gone;',
        'Short as the watch that ends the night Before the rising sun.'
      ]
    ]
  },
  {
    id: 'hymn-257',
    number: 257,
    title: 'Tasunkanishiwa',
    writer: 'Isaac Watts / Guillaume Franc',
    englishTune: 'Unshaken as the Sacred Hills',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulayo bwa kwa Lesa',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 125:1-4 · Amapinda 3:5-6 · Yesaya 26:3',
    isSample: false,
    melodicPreview: [65, 69, 70, 72, 70, 69, 67, 65],
    verses: [
      [
        'Twisunkanishiwa tube nge mpili sha mushilo,',
        'Takaseshiwe nakalya,',
        'Uwamusumina'
      ],
      [
        'Te fibumba nangu impili ifinga tusunga;',
        'Kano mumaboko yakwe, Emo twinga sungwa.'
      ],
      [
        'Ubasunge, Bakutemwa mu mitima yabo:',
        'Abacetekela cine, Ta basule funde.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Unshaken as the sacred hills, And fixed as mountains stand,',
        'Firm as a rock the soul shall rest',
        'That trusts th’ Almighty hand.'
      ],
      [
        'Not walls nor hills could guard so well Fair Salem’s happy ground,',
        'As those eternal arms of love That every saint surround.'
      ],
      [
        'Do good, O Lord, do good to those Who cleave to Thee in heart,',
        'Who on Thy truth alone repose, Nor from Thy law depart.'
      ]
    ]
  },
  {
    id: 'hymn-258',
    number: 258,
    title: 'Bucetekelo Bumo',
    writer: 'C. A. Briggs / Louis Bourgeois',
    englishTune: 'One Living Faith',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kutetekela',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Yakobo 2:17-18 · Abaroma 3:31 · Amalumbo 19:7',
    isSample: false,
    melodicPreview: [67, 67, 66, 64, 62, 67, 69, 71],
    verses: [
      [
        'Funde lya Mfumu lifwaya bucetekelo bwa cine;',
        'Bufwayo bwakwe ni ubu, bonse bacite cishinka.'
      ],
      [
        'Mfumu tubelele luse pa fintu fyonse twabifya;',
        'Funde lyenu lya mushilo, lelo talisungwa bwino.'
      ],
      [
        'Tatucite fyo mufwaya, Mwe Mfumu mutubutishe,',
        'Pa mulandu wakwa Yesu, kuti tulesunge funde.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'God’s law demands one living faith, And not a crowd of lifeless creeds;',
        'Its warrant is a firm “God saith;” Its claim not words, but living deeds.'
      ],
      [
        'O Lord, forgive thy holy law Grows tarnish’d in our earthly clasp;',
        'Pure in itself, without a flaw, It dims in our too worldly grasp.'
      ],
      [
        'Forgive the sacrilege, and take From ev’ry soul th’ unholy stain,',
        'And help us for thy Son’s dear sake, To keep thy perfect law again.'
      ]
    ]
  },
  {
    id: 'hymn-259',
    number: 259,
    title: 'Bushe Tukaya Kumana',
    writer: 'Horace L. Hastings / Elihu S. Rice',
    englishTune: 'Shall We Meet?',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'A Major',
    timeSignature: '3/4',
    scripture: 'Ukusokolola 21:4 · 1 Abatesalonika 4:17 · Yohane 14:2-3',
    isSample: false,
    melodicPreview: [64, 66, 68, 69, 73, 71, 69, 66, 64],
    verses: [
      [
        'Bushe tukaya kumana nga amacusho yapwa',
        'Kukaba ukusekela, Malanda takwakabe.'
      ],
      [
        'Tukaku-mana pa cabu ngo lwendo lwesu lwapwa-;',
        'Tukemi-nike cibwato, Pa cabu ca ku mulu.'
      ],
      [
        "Tukaku-mana mu mushi, 'Mo maya-nda yabeka-;",
        'Fibumba ifyabekesha, Uwakulwa no Mwine.'
      ],
      [
        "Tukaku-mana na Kristu, 'Ly' akesa-senda bakwe",
        'Tukeshi-bo luse lwakwe, Tukeka-la na Wene.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tukaya - Kumana, Kwishilya ilya ci-mana;',
      'Nga twaku-mana kwishilya, Pa cabu caku mulu.'
    ],
    englishVerses: [
      [
        'Shall we meet beyond the river, Where the surges cease to roll?',
        'Where, in all the bright forever, Sorrow ne’er shall press the soul?'
      ],
      [
        'Shall we meet in that blest harbor, When our stormy voyage is o’er?',
        'Shall we meet and cast the anchor By the fair, celestial shore?'
      ],
      [
        'Shall we meet in yonder city, Where the tow’rs of crystal shine?',
        'Where the walls are all of jasper, Built by workmanship divine?'
      ],
      [
        'Shall we meet with Christ, our Saviour, When He comes to claim His own?',
        'Shall we know His blessëd favor, And sit down upon His throne?'
      ]
    ],
    englishChorus: [
      'Shall we meet, shall we meet, Shall we meet beyond the river?',
      'Shall we meet beyond the river, Where the surges cease to roll?'
    ]
  },
  {
    id: 'hymn-260',
    number: 260,
    title: 'Ilungu Lya Wama',
    writer: 'Elisha A. Hoffman / Joseph Garrison',
    englishTune: 'The Vale of Beulah',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Kukoselesha',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Yesaya 62:4 · Amalumbo 23:4 · Amapinda 4:18',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 69, 71, 69, 67, 64],
    verses: [
      [
        'Ndepita mwilungu ili baletila libi.',
        'Lelo nasanga mu nshila muli fye amaluba;',
        'Ilungu lya wama ninshila isuma,',
        'Mupusushi nyende nankwe inshita fye shonse'
      ],
      [
        'Tekuti kube cinshingwa cakulishe nshila,',
        'Lulumbi lwa Mupusushi lubutishe nsnila;',
        'Abangeli baleimba inyimbo shisuma,',
        'Shawamisha, shansekesha ilyo ndeya mu nshila'
      ],
      [
        'Awe ndi u-wacimwemwe, Ndeya ku musumba,',
        'Nakulasekela lyonse lyo nshila yabuta;',
        'Ndi apepi no kumona fibi fyaisulwa,',
        'Pantu iyi e nshila i-yalola ku mulu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'We lungu lya wama',
      'Walicindamisha;',
      'We mpanga we yabulayo',
      'Nakumona kulya'
    ],
    englishVerses: [
      [
        'I am passing down the valley that they say is so lone,',
        'But I find that all the pathway is with flowers o’ergrown;',
        '’Tis to me the vale of Beulah, ’tis a beautiful way,',
        'For the Saviour walks beside me, my companion all day.'
      ],
      [
        'Not a shadow, not a shadow ever darkens the way,',
        'For a radiance of rare glory shines upon it all day;',
        'And the music, sweetly chanted by the heavenly throng,',
        'Floats in cadence down the valley, and it cheers me along.'
      ],
      [
        'So I journey with rejoicing toward the city of light,',
        'While each day my joy is deeper, and the path grows more bright;',
        'And I near the open portals of the kingdom above,',
        'For this highway leads to heaven, to the kingdom of love.'
      ]
    ],
    englishChorus: [
      'Vale of Beulah,',
      'Vale of Beulah, thou art precious to me;',
      'For the lovely land of promise',
      'In the distance I see.'
    ]
  },
  {
    id: 'hymn-261',
    number: 261,
    title: 'Ilungu Lisuma Ilya Edeni',
    writer: 'William O. Cushing / William F. Sherwin',
    englishTune: 'Beautiful Valley of Eden',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '6/8',
    scripture: 'Yesaya 51:3 · Ukusokolola 21:4 · Ukusokolola 22:1-2',
    isSample: false,
    melodicPreview: [67, 65, 63, 67, 70, 72, 70, 67],
    verses: [
      [
        'Mpanga isuma ya Edeni, Yabe yawamisha;',
        'Ku mitima ya banaka, Yaba yawamisha.'
      ],
      [
        'Umutima uleloosha, Ukayasekela,',
        'Kumfwe nyimbo sha bangeli kufuma kutali'
      ],
      [
        'Ku musumba wakwa Yesu, kuli abafusuka',
        'Pa mapili ya lulumbi, Nyimbo shilomfwika.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Mpanga yawama ya Eden, Mushi wa bapalwa;',
      'Nangu ningaba mu macusho, Ndota kutusha kulya.'
    ],
    englishVerses: [
      [
        'Beautiful valley of Eden! Sweet is thy noontide calm;',
        'Over the hearts of the weary, Breathing thy waves of balm.'
      ],
      [
        'Over the heart of the mourner Shineth thy golden day,',
        'Wafting the songs of the angels Down from the far away.'
      ],
      [
        'There is the home of my Savior; There, with the bloodwashed throng,',
        'Over the highlands of glory Rolleth the great new song.'
      ]
    ],
    englishChorus: [
      'Beautiful valley of Eden, Home of the pure and blest,',
      'How often amid the wild billows I dream of thy rest, sweet rest!'
    ]
  },
  {
    id: 'hymn-262',
    number: 262,
    title: 'Kristu Nangu Barabba',
    writer: 'Franklin E. Belden',
    englishTune: 'Christ or Barabbas?',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'C Major',
    timeSignature: '3/4',
    scripture: 'Mateo 27:22 · Yoshua 24:15 · 2 Abakorinti 6:2',
    isSample: false,
    melodicPreview: [64, 67, 67, 69, 67, 64, 62, 60],
    verses: [
      [
        "Ncite nshi na-Yesu 'Yu imwe mwande-tela,",
        'Nafwalo mwi-ngilo yu-, Ne myunga ku mutwe.'
      ],
      [
        'Bushe mupe mpupu-, Umubi wa fi-lumba?',
        "Uwa bipa na Yesu-, N'ani mule-fwaya?"
      ],
      [
        "Lipusho 'li kwena-, Likulu lyaku-papa!",
        'Bushe ndeci-ta shani-, Cape-seshe amano'
      ],
      [
        'Bushe ncite shani-, Bushe nka-ne-i-calo?',
        "Babiliki-she 'bati-, Awe, Ata-nikwe."
      ],
      [
        "Te ku mubi eka-, Lipusho 'Ii lya-isa,",
        'Na imwe be-na Kristu-, Muli mu kwe-shiwa.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ndemwipusha imwe, Muletila shani?',
      "Bushe nta-nike Yesu yu, Ndeke Barabba- 'ye?"
    ],
    englishVerses: [
      [
        'What shall I do with Jesus? He stands before me now,',
        'Wearing the robe of purple, And thorns upon His brow.'
      ],
      [
        'Shall I release the robber, The carnal man of pride?',
        'Sin or a sinless Saviour?— O which shall be denied?'
      ],
      [
        'Solemn and awful question! How still the balance stands!',
        'Mercy a moment lingers, It trembles in her hands.'
      ],
      [
        'Self on the seat of judgment, Dare you the world deny?',
        'Louder and louder calling, “Away!” and “Crucify!”'
      ],
      [
        'Not to the sinner only, The question comes with pow’r;',
        'Hear it, ye halting Christians, In ev’ry trial hour.'
      ]
    ],
    englishChorus: [
      'This is the question now; What shall the answer be?',
      'Shall I crucify King Jesus, And set Barabbas free?'
    ]
  },
  {
    id: 'hymn-263',
    number: 263,
    title: 'Leteni Imwe Icekumi Conse',
    writer: 'Helen E. Rasmussen / Henry Lake Gilmour',
    englishTune: 'Bring Ye All the Tithes',
    category: 'thanksgiving',
    categoryBemba: 'Ubupe no Mutulo',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Malaki 3:10 · 2 Abakorinti 9:6-7 · Amapinda 3:9',
    isSample: false,
    melodicPreview: [60, 65, 67, 69, 67, 65, 62, 60],
    verses: [
      [
        'Umfweni mashiwi ayalembelwe-,',
        "Leteni icekumi mu ng'anda:",
        'Peleni ne Mitima yenu yonse-,',
        'Mukapelwa a-ma-pa-lo'
      ],
      [
        "Mulefwaya kwishiba maka yakwe-, Leteni icekumi mu ng'anda;",
        "Ikaleni nankwe mu nshita shonse-, ely'alemupa ma-pa-lo"
      ],
      [
        "Mulandu nshi 'we ukwete ku Mfumu-? Leteni icekumi mu ng 'anda;",
        'Nga mwafilwa kuleta tamwapalwe-, Leteni mupo-ke Pa-Io.'
      ],
      [
        'Mitima yenu icindike Mfumu-,',
        "'Lyo mwalete cekumi mu nganda:",
        'Sumineni malayo mulumbanye-,',
        'Pela Imfumu mu-ti--ma.'
      ],
      [
        "Imbeni nyimbo shisuma ku Mfumu-, 'Lyo mwalete cekumi mu nganda;",
        'Twimbe Aleluya bonse ku Mfumu-, Pantu wene a-tu-pa--la'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      "Leteni imwe bonse ceku-mi, Lesa 'leti elyo munje-she,",
      'Nga- nsha-kamupele mapa-lo,',
      'Tamwaka-kwate nce-nde paku-bi-ka.'
    ],
    englishVerses: [
      [
        'Hear the words of Scripture from the ages past,',
        '“Bring ye all the tithes into the storehouse.”',
        'Make a consecration that will ever last,',
        'Trusting for the promised blessing.'
      ],
      [
        'Do you seek to know the Holy Spirit’s pow’r? “Bring ye all the tithes into the storehouse.”',
        'Live in sweet communion with Him hour by hour, While He gives the promised blessing.'
      ],
      [
        'Is there aught that stands between you and your Lord? “Bring ye all the tithes into the storehouse.”',
        'Bring them on conditions promised in His word, And He’ll pour you out a blessing.'
      ],
      [
        'Lift your heart this moment, claim Him Lord and King,',
        'As ye bring the tithes into the storehouse;',
        'Trust the blessed promise, and your praise shall ring,',
        'From the heart He is possessing.'
      ],
      [
        'Let the anthems roll in grandeur thro’ the skies, Having bro’t the tithes into the storehouse;',
        'Joyous hallelujahs from our hearts arise, For we have the promised blessing.'
      ]
    ],
    englishChorus: [
      '“Bring ye all the tithes into the storehouse, And prove me now,” saith the Lord of hosts;',
      '“And I will pour you out a blessing,',
      'There shall not be room enough to receive it.”'
    ]
  },
  {
    id: 'hymn-264',
    number: 264,
    title: 'Kasuba ka Yehofa',
    writer: 'Franklin E. Belden',
    englishTune: "Holy Day, Jehovah's Rest",
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata lya kwa Yehova',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Ukufuma 20:8-11 · Ukutendeka 2:2-3 · Yesaya 58:13',
    isSample: false,
    melodicPreview: [67, 69, 71, 67, 69, 71, 74, 71],
    verses: [
      [
        'Kasuba ka Yehofa kapabutendekelo,',
        "Akasalile 'mwine lintwa pwile milimo."
      ],
      [
        'Abombele milimo mu nshiku mutanda fye,',
        'Ubwa cinelubali ebwabutishe bweka.'
      ],
      [
        'Bantu bapilibwile kutusha pali cimo,',
        'Moneni mu Chipingo tacilesosa ifyo.'
      ],
      [
        'Abacine basosa: Muntu apilibwile,',
        'Ishiwi lyakwa Lesa lyena lya muyayaya.'
      ],
      [
        'Ilyo nafwailishe no kusange Sabata,',
        'Natendeke kukonka, E calinga kucita.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tusekele, Tusekele, Tusekele, Tusekele,',
      'Kwingila mu butusho, Bwa bushiku bwa Mfumu'
    ],
    englishVerses: [
      [
        'Holy day, Jehovah’s rest, Of creation’s week the best;',
        'Last of all the chosen seven, Blest of God, to man ’twas given.'
      ],
      [
        'First His six days’ work was done, Then the Sabbath was begun;',
        'Thus He blessed the seventh day, Thus in resting we obey.'
      ],
      [
        'Thousands have His plan reversed, Resting now upon the first;',
        'Search the Book and you shall know There’s no scripture tells them so.'
      ],
      [
        'All who speak the truth must say It was man who changed the day;',
        'In God’s word no change appears Through the whole six thousand years!'
      ],
      [
        'Thus I searched; and when I saw Only one great Sabbath law,',
        'Then I hastened to obey— Plainly, ’twas the only way.'
      ]
    ],
    englishChorus: [
      'Welcome, welcome, welcome, welcome;',
      'Glad we hail its presence blest, ’Tis the great Jehovah’s rest.'
    ]
  },
  {
    id: 'hymn-265',
    number: 265,
    title: 'Umutende Usuma',
    writer: 'Edward H. Bickersteth / George T. Caldbeck',
    englishTune: 'Peace, Perfect Peace',
    category: 'hope-and-encouragement',
    categoryBemba: 'Umutende wa kwa Lesa',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Yesaya 26:3 · Yohane 14:27 · Abafilipi 4:7',
    isSample: false,
    melodicPreview: [65, 65, 65, 65, 67, 65, 62, 65],
    verses: [
      [
        'U-mutende mu calo ca bipa?',
        'Mulo-pa wakwa Yesu mu-tende,'
      ],
      [
        'U-mutende mu kumubombela?',
        'Kuci-te fya Mfumu e bu-tu-sho,'
      ],
      [
        'U-mutende naculishe cibi?',
        'Kuli Ye-su nasango bu-tu-sho.'
      ],
      [
        'U-mutende ne fibusa kulya,',
        'Muli Ye-su bonse tule-su-ngwa.'
      ],
      [
        'U-mutende nangu tatwishiba,',
        'Twai-shiba Ali pa cipuna.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Peace, perfect peace, in this dark world of sin?',
        'The blood of Jesus whispers peace within.'
      ],
      [
        'Peace, perfect peace, by thronging duties pressed?',
        'To do the will of Jesus: this is rest.'
      ],
      [
        'Peace, perfect peace, with sorrows surging round?',
        'On Jesus’ bosom naught but calm is found.'
      ],
      [
        'Peace, perfect peace, with loved ones far away?',
        'In Jesus’ keeping we are safe, and they.'
      ],
      [
        'Peace, perfect peace, our future all unknown?',
        'Jesus we know, and He is on the throne.'
      ]
    ]
  },
  {
    id: 'hymn-266',
    number: 266,
    title: 'Yesu Ndekonka Imwe',
    writer: 'Grace Glenn (L. M. Beal Bateman) / J. H. Rosecrans',
    englishTune: 'Jesus, I Will Follow Thee',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukwishiba no Kukonka Yesu',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Yohane 10:27 · Mateo 4:19 · Yohane 8:12',
    isSample: false,
    melodicPreview: [68, 67, 65, 63, 65, 68, 70, 72],
    verses: [
      [
        'Yesu ndekonka Imwe, Pantu mwaita ine,',
        "Temwa shonse naisa, kukonka ku ng'anda."
      ],
      [
        'Menso yandi yaluba, Nshila ku nkasa shandi,',
        'Nalimo nalinaka, Lelo mwalikosa.'
      ],
      [
        'Kubipa no kunaka, Ifi balwani bandi,',
        'Lelo ndeposa shonse pantu ndemukonka'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ndeko-nka Imwe, Ndeko-nka Imwe,',
      'Ndeko-nka Imwe, Shonse muntangila'
    ],
    englishVerses: [
      [
        'Jesus, I will follow Thee, For I hear Thee calling me;',
        'Loving, trusting, glad I come, To let Thee lead me home.'
      ],
      [
        'Little eyes might lose the way, Little feet might go astray;',
        'I might weak and weary be, But Thou art strong for me.'
      ],
      [
        'Grief and want may be my foes, Foolish sins my way oppose;',
        'Full of courage I will be, Whene’er I follow Thee.'
      ]
    ],
    englishChorus: [
      'I will follow Thee, I will follow Thee,',
      'I will follow Thee, Wherever Thou dost lead.'
    ]
  },
  {
    id: 'hymn-267',
    number: 267,
    title: 'Tande Mbuto Sha Luse',
    writer: 'Mary Riley Smith / Silas J. Vail',
    englishTune: 'Scatter Seeds of Kindness',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ulupwa no Kutemwana',
    key: 'G Major',
    timeSignature: '2/4',
    scripture: 'Abagalatia 6:7-9 · Abaefeso 4:32 · Amapinda 15:1',
    isSample: false,
    melodicPreview: [62, 67, 67, 69, 71, 69, 67, 64, 62],
    verses: [
      [
        'Tukolonganike mbuto Lyo tuleya mu nshila,',
        'Isha ngano na maluba,',
        'Tufumyemo fisoso.',
        'Natusange kusekela mu mapalo ya lelo;',
        'No kuboko kwatekanya',
        'Kufumyemo kalolo.'
      ],
      [
        'Tatusakamane nyimbo utoni tuleimba;',
        'Tatulemona maluba kufike lyo yauma,',
        'Tatusakamana ku ma-kumbi yalya ya mfula;',
        'Ukusuka amakumbi, Ayamfula yapita.'
      ],
      [
        "Nga mwabika utuminwe twa mwana 'patalala,",
        'Kuti tonse twaumina, Teti tusakamane;',
        'Bushe Mupusushi wesu engatulekelesha?',
        'Ifilembo fya tuminwe, Bushe filetucusha?'
      ],
      [
        'Tulya tu minwe tunono,',
        'Tulatwibukisha lyonse,',
        'Ku mashiwi yabipa, Tulebukisha lyonse;',
        'Tulatwibukisha tuli mu mfula ya talala,',
        'Tekulatanda imyunga, Tukasepa maluba.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tande mbuto sha fuse, Tande mbuto sha luse;',
      'Tande mbuto sha luse, Kuti tukasombole.'
    ],
    englishVerses: [
      [
        'Let us gather up the sunbeams, Lying all around our path;',
        'Let us keep the wheat and roses,',
        'Casting out the thorns and chaff;',
        'Let us find our sweetest comfort In the blessings of today,',
        'With a patient hand removing',
        'All the briers from the way.'
      ],
      [
        'Strange we never prize the music Till the sweet-voiced bird is flown!',
        'Strange that we should slight the violets Till the lovely flow’rs are gone!',
        'Strange that summer skies and sunshine Never seem one half so fair',
        'As when winter’s snowy pinions Shake the white down in the air.'
      ],
      [
        'If we knew the baby fingers, Pressed against the window pane,',
        'Would be cold and stiff tomorrow, Never trouble us again,',
        'Would the bright eyes of our darling Catch the frown upon our brow?',
        'Would the prints of rosy fingers Vex us then as they do now?'
      ],
      [
        'Ah! those little ice-cold fingers,',
        'How they point our mem’ries back',
        'To the hasty words and actions Strewn along our backward track!',
        'How those little hands remind us, As in snowy grace they lie,',
        'Not to scatter thorns—but roses— For our reaping by and by!'
      ]
    ],
    englishChorus: [
      'Then scatter seeds of kindness, Then scatter seeds of kindness,',
      'Then scatter seeds of kindness, For our reaping by and by.'
    ]
  },
  {
    id: 'hymn-268',
    number: 268,
    title: 'Mfumu Cipupu Capunga',
    writer: 'Mary Ann Baker / Horatio R. Palmer',
    englishTune: 'Master, the Tempest Is Raging',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutungululwa na Yehova',
    key: 'C Major',
    timeSignature: '6/8',
    scripture: 'Marko 4:37-39 · Mateo 8:24-26 · Amalumbo 107:28-30',
    isSample: false,
    melodicPreview: [67, 67, 67, 69, 67, 64, 60, 62, 64],
    verses: [
      [
        'Mfumu cipupu capu-nga,',
        'Mabimbi yafu-lisha;',
        'Kumulu kwafita fiti-ti, Umwa kuba mwa-bula;',
        'Mfumu moneni twala-fwa',
        'Mwasendama-shani!',
        'Ubwato bwesu bwalabu-nda,',
        'Shibukeni mutwafwe.'
      ],
      [
        'Mfumu mutima wana-ka, Ku mabimbi ya calo,',
        'Mutima waculishe ci-bi, Shibukeni mungafwe;',
        'Masakamano ya bu-bi, yanasho mu-tima;',
        'Nalafwa Mfumu yandi nala-fwa,',
        'Endesheni mu ntule.'
      ],
      [
        'Mfumu amacusho ya-pwa, Nomba kwaba to-ndolo,',
        'Kasuba nomba kabali-ka, Na ku mulu kwa buta;',
        'Mwinsha neka Mupusu-shi, Ba pepi na-ine,',
        'No buseko palya nkamwimbi-la,',
        '\'Lyo nkafika pa cabu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      '"Umwela ulomfwe shiwi lyandi, Ta ... lala ... Mutende, Tondolo',
      'Nangu mabimbi ya cambeshi,',
      'Fibanda, bantu nangu fi-ntu nshi!',
      'Amenshi teti yabunsho bwato,',
      'Umulyu mwine wa fintu fyonse;',
      'Fyonse filomfwe shiwi lyandi;',
      'Mutende, Tondolo,',
      'Fyonse filomfwe shiwi lyandi;',
      'Umu-tende."'
    ],
    englishVerses: [
      [
        'Master, the tempest is raging!',
        'The billows are tossing high!',
        'The sky is o’ershadowed with blackness, No shelter or help is nigh.',
        'Carest Thou not that we perish?',
        'How canst Thou lie asleep,',
        'When each moment so madly is threat’ning',
        'A grave in the angry deep?'
      ],
      [
        'Master, with anguish of spirit I bow in my grief today.',
        'The depths of my sad heart are troubled, Oh, waken and save, I pray!',
        'Torrents of sin and of anguish Sweep o’er my sinking soul,',
        'And I perish! I perish! dear Master,',
        'Oh, hasten and take control!'
      ],
      [
        'Master, the terror is over, The elements sweetly rest.',
        'Earth’s sun in the calm lake is mirrored, And heaven’s within my breast.',
        'Linger, O blessed Redeemer! Leave me alone no more,',
        'And with joy I shall make the blest harbor,',
        'And rest on the blissful shore.'
      ]
    ],
    englishChorus: [
      'The winds and the waves shall obey Thy will: Peace, be still,',
      'Whether the wrath of the storm-tossed sea,',
      'Or demons or men or whatever it be,',
      'No waters can swallow the ship where lies',
      'The Master of ocean and earth and skies.',
      'They all shall sweetly obey Thy will;',
      'Peace, be still;',
      'They all shall sweetly obey Thy will;',
      'Peace, peace, be still.'
    ]
  },
  {
    id: 'hymn-269',
    number: 269,
    title: 'Umupusushi Wa Kupapa',
    writer: 'Fanny J. Crosby / William J. Kirkpatrick',
    englishTune: 'He Hideth My Soul',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulayo bwa kwa Lesa',
    key: 'Db Major',
    timeSignature: '6/8',
    scripture: 'Ukufuma 33:22 · Esaya 32:2 · Amalumbo 27:5',
    isSample: false,
    melodicPreview: [68, 68, 68, 66, 65, 70, 68, 66, 65],
    verses: [
      [
        "Mupusushi wandi ni Yesu Mfumu, Wa kupapisha kuli'ne,",
        'Afisa umweo wandi mu libwe,',
        'Ukwaba menshi yasuma.'
      ],
      [
        'Mupusushi wandi ni Yesu Mfumu, Antule cisendo candi;',
        "Mu maboko yakwe lyonse ndasungwa, Awe 'ne nshakaseshiwe."
      ],
      [
        'Ndasamikwa na mapalo ayengi, Anjisusha na Mupashi;',
        'Ndeimba lwimbo lwa kumulumbanya, Pa kutuma Mupusushi.'
      ],
      [
        'Ilyo nkafwikwa lulumbi nkasendwa, Nkamusanga mulwelele;',
        'Kupususha kwakwe kwa kupapisha, Ne minshipendwa tukemba.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Afisa umweo wandi mu Cilibwe,',
      'Cimfule mu chiswebebe',
      'Afiso mweo mu kutemwa kwakwe,',
      'Alemfimba no kuboko',
      'Alemfimba no kuboko.'
    ],
    englishVerses: [
      [
        'A wonderful Savior is Jesus my Lord, A wonderful Savior to me;',
        'He hideth my soul in the cleft of the rock,',
        'Where rivers of pleasure I see.'
      ],
      [
        'A wonderful Savior is Jesus my Lord, He taketh my burden away;',
        'He holdeth me up, and I shall not be moved, He giveth me strength as my day.'
      ],
      [
        'With numberless blessings each moment He crowns, And filled with His fullness divine,',
        'I sing in my rapture, “Oh, glory to God For such a Redeemer as mine!”'
      ],
      [
        'When clothed in His brightness, transported I rise To meet Him in clouds of the sky,',
        'His perfect salvation, His wonderful love, I’ll shout with the millions on high.'
      ]
    ],
    englishChorus: [
      'He hideth my soul in the cleft of the rock',
      'That shadows a dry, thirsty land;',
      'He hideth my life in the depths of His love,',
      'And covers me there with His hand,',
      'And covers me there with His hand.'
    ]
  },
  {
    id: 'hymn-270',
    number: 270,
    title: 'Umupusushi Wesu',
    writer: 'Harriet Auber / John B. Dykes',
    englishTune: 'Our Blest Redeemer',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Imfula ya Mapalo',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Yohane 14:16-17 · Yohane 16:7-13 · Abagalatia 5:22',
    isSample: false,
    melodicPreview: [63, 63, 65, 67, 68, 67, 65, 63],
    verses: [
      [
        "Lintu Yesu 'shalikepo abasambi bakwe;",
        'Umupashi atupela kuba nefwe.'
      ],
      [
        'Aishiletusangula tube ba cikuku;',
        'Afwaya fwaye mitima mwa kwikala.'
      ],
      [
        'Tuleumfwe shiwi lyakwe liletepelesha:',
        'Lyaleshe fibi lyatweba ifya ku mulu.'
      ],
      [
        'Cikuku ico twakwata kwanshya kwesu konse:',
        'Matontonkanyo yashila yali yakwe.'
      ],
      [
        'We Mupashi wa mushilo utumfwile luse:',
        'Mitima yesu ibe cifulo cobe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Our blest Redeemer, ere He breathed His tender, last farewell,',
        'A Guide, a Comforter, bequeathed With us to dwell.'
      ],
      [
        'He came sweet influence to impart, A gracious, willing Guest,',
        'While He can find one humble heart Wherein to rest.'
      ],
      [
        'And His that gentle voice we hear, Soft as the breath of even,',
        'That checks each fault, that calms each fear, And speaks of heaven.'
      ],
      [
        'And every virtue we possess, And every conquest won,',
        'And every thought of holiness, Are His alone.'
      ],
      [
        'Spirit of purity and grace, Our weakness, pitying, see:',
        'O make our hearts Thy dwelling place, And worthier Thee.'
      ]
    ]
  },
  {
    id: 'hymn-271',
    number: 271,
    title: 'Nangu Fye Shakashika',
    writer: 'Fanny J. Crosby / William H. Doane',
    englishTune: 'Though Your Sins Be as Scarlet',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Esaya 1:18 · Esaya 45:22 · Amalumbo 51:7',
    isSample: false,
    melodicPreview: [72, 72, 70, 68, 68, 67, 65, 65, 63],
    verses: [
      [
        'Nangu fye sha-kashika shikabuta nge mpemba,',
        'Nangu fye sha-kashika shikabuta nge mpemba',
        'Nangu shaka., shiki-sha',
        'Shikabutisha;',
        'Nangu fye sha-kashika, Nangu fye sha-kashika,',
        'Shikabuta nge mpemba,',
        'Shikabuta nge mpemba'
      ],
      [
        'lshiwi li-lekwita. Bwelela kuli Yesu,',
        'Ishiwi li-lekwita, Bwelela kuli Yesu;',
        'Alikwati sho lu-se no kute-mwisha:',
        'Ishiwi li-lekwita, Ishiwi li-lekwita,',
        'Bwelela kuli Lesa, Bwelela kuli Lesa'
      ],
      [
        "'Kakwele-la-ububi.",
        'Takabwibukisheko,',
        "'Kakwele-la-ububi,",
        'Takabwibukisheko;',
        "Lolesheni .. kul i - 'ne, Asosa Lesa,",
        "'Kakwele-la-ububi . kakwele-la-ububi;",
        'Takabwi-bukisheko, Takabwi bukisheko'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        '“Though your sins be as scarlet, They shall be as white as snow;',
        'Though your sins be as scarlet, They shall be as white as snow;',
        'Though they be red like crimson,',
        'They shall be as wool!”',
        '“Though your sins be as scarlet, Though your sins be as scarlet,',
        'They shall be as white as snow,',
        'They shall be as white as snow.”'
      ],
      [
        'Hear the voice that entreats you, O return ye unto God!',
        'Hear the voice that entreats you, O return ye unto God!',
        'He is of great compassion, And of wondrous love;',
        'Hear the voice that entreats you, Hear the voice that entreats you,',
        'O return ye unto God! O return ye unto God!'
      ],
      [
        'He’ll forgive your transgressions,',
        'And remember them no more;',
        'He’ll forgive your transgressions,',
        'And remember them no more;',
        '“Look unto Me, ye people,” Saith the Lord your God!',
        'He’ll forgive your transgressions, He’ll forgive your transgressions,',
        'And remember them no more, And remember them no more.'
      ]
    ]
  },
  {
    id: 'hymn-272',
    number: 272,
    title: 'Posa Umwando Wa Mweo',
    writer: 'Edward S. Ufford / George C. Stebbins',
    englishTune: 'Throw Out the Life-Line',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Yuda 1:23 · Mateo 28:19 · Marko 16:15',
    isSample: false,
    melodicPreview: [62, 67, 69, 71, 67, 62, 64, 67, 71, 69],
    verses: [
      [
        'Poso mwando obe pa mabimbi,',
        'Epali umo wingapususha:',
        "Nan'engafwaya ku nupususha?",
        'Kuti a-pusuke kufuma kumfwa.'
      ],
      [
        'Paso mwando obe fye na maka,',
        'Wikokola, wilashima shima;',
        'Mona anwena aleya panshi, Iwe po-sa mwando umupusushe.'
      ],
      [
        'Paso Mwando obe ku baluba,',
        'Abali uko ushingafika;',
        'Myela ya matunko yabasenda, No kuse-ndwa na menshi ya mu calo.'
      ],
      [
        'Nshita ya kupususha yalapwa,',
        'Balaswa baye ku muyayaya;',
        'Kanshi endesha fye we munyina,',
        'Iwe po-so mwando ubapusushe.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Poso umwando, posa umwando,',
      'Umo asendwa na menshi,',
      'Paso umwando, posa umwando,',
      'Umo asendwa na menshi.'
    ],
    englishVerses: [
      [
        'Throw out the life-line across the dark wave;',
        'There is a brother whom someone should save;',
        'Somebody’s brother! Oh, who then will dare',
        'To throw out the life-line, his peril to share?'
      ],
      [
        'Throw out the life-line with hand quick and strong:',
        'Why do you tarry, why linger so long?',
        'See! he is sinking; oh, hasten today And out with the life-boat! Away, then, away!'
      ],
      [
        'Throw out the life-line to danger-fraught men,',
        'Sinking in anguish where you’ve never been;',
        'Winds of temptation and billows of woe Will soon hurl them out where the dark waters flow.'
      ],
      [
        'Soon will the season of rescue be o’er,',
        'Soon will they drift to eternity’s shore;',
        'Haste, then, my brother, no time for delay,',
        'But throw out the life-line and save them today.'
      ]
    ],
    englishChorus: [
      'Throw out the life-line! Throw out the life-line!',
      'Someone is drifting away;',
      'Throw out the life-line! Throw out the life-line!',
      'Someone is sinking today.'
    ]
  },
  {
    id: 'hymn-273',
    number: 273,
    title: 'Shintilila Mu Maboko',
    writer: 'Lewis E. Jones',
    englishTune: 'Lean on His Arms',
    category: 'faith-and-trust',
    categoryBemba: 'Ubulayo bwa kwa Lesa',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 37:5 · Amapinda 3:5-6 · Amalango 33:27',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 69, 71, 67, 69],
    verses: [
      [
        'Shinti-lila we pali Ye-su, A-kula kwafwa Kula kwafwa;',
        'Nga wa-cetekela kute-mwa, Uke-mba ulwimbo.'
      ],
      [
        'Shinti-lila we pali Ye-su, A-kabu-tishe-, Nshila yobe;',
        'Konka uko alekutwa-la; Umfwe shiwi lyakwe.'
      ],
      [
        'Shinti-lila we pali Ye-su, Mu-shile fyonse-, Shile lyonse:',
        'Aba no kutemwa no lu-se, Ala-mona fyonse'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Shinti-lila, Mucetekele; Shinti-lila. Mu luse lwakwe;',
      'Shinti-Iila, Mona ku mulu, Ba, muma-boko yakwe'
    ],
    englishVerses: [
      [
        'Just lean upon the arms of Jesus, He’ll help you along, help you along;',
        'If you will trust His love unfailing, He’ll fill your heart with song.'
      ],
      [
        'Just lean upon the arms of Jesus, He’ll brighten the way, brighten the way;',
        'Just follow gladly where He leadeth, His gentle voice obey.'
      ],
      [
        'Just lean upon the arms of Jesus, Then leave all to Him, leave all to Him;',
        'His heart is full of love and mercy, His eyes are never dim.'
      ]
    ],
    englishChorus: [
      'Lean on His arms, trusting in His love; Lean on His arms, all His mercies prove;',
      'Lean on His arms, looking home above, Just lean on the Savior’s arms!'
    ]
  },
  {
    id: 'hymn-274',
    number: 274,
    title: 'Naliba No Mu Pusushi',
    writer: 'Samuel O’Malley Cluff / Ira D. Sankey',
    englishTune: 'I Have a Savior',
    category: 'prayer',
    categoryBemba: 'Ipepo no Kucetekela',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Abahebri 7:25 · Yohane 17:9 · Yakobo 5:16',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 71, 69, 67, 64, 62],
    verses: [
      [
        'Ninkwato Mu-pusushi-anjita,',
        'Aliba no luse e Cibusa candi;',
        'Ala-mpepula no kute-mwa kwakwe, Ni Katula wandi e Katula obe'
      ],
      [
        'Ni nkwata Ta-ta ena alimpela;',
        'Ubuce-tekelo ubwa mu-yayaya;',
        'Bwangu alanjinjita ku mulu ku mwakwe, Akansu-minisha kuti nka-ye nobe.'
      ],
      [
        'Ni-nkwata mwingila u-wabuta,',
        "Nakula-linda nka-fwale 'ly'a-kabwela;",
        'Nkafwa-lo mwingi-la uwa-bekesha, Nobe we cibusa ukakwa-te umo.'
      ],
      [
        "A-mpo mute-nde 'pita nga menshi,",
        'Untu fi-busa fya calo ta-fyakwata;',
        'Kristu e mwine e upe-la fyonse.',
        'Nobe u mutende kuti a-kupa.'
      ],
      [
        'Nga-wamusa-nga kebe-ko bambi,',
        'Mupusu-shi wandi. Mupusushi obe.',
        'Pepa Mupusu-shi kuba-pususha,',
        'Akasu-ke pepo lyayasu-kwa kale.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ndeku-lombela we ndeku-lombela;',
      'Ndekupe-pelela ko-. Ndeku-pepe-, la.'
    ],
    englishVerses: [
      [
        'I have a Savior, He’s pleading in glory,',
        'A dear, loving Savior, though earth-friends be few;',
        'And now He is watching in tenderness o’er me, And oh, that my Savior were your Savior, too!'
      ],
      [
        'I have a Father; to me He has given',
        'A hope for eternity, blessed and true;',
        'And soon He will call me to meet Him in heaven, But, oh, that He’d let me bring you with me, too!'
      ],
      [
        'I have a robe; ’tis resplendent in whiteness,',
        'Awaiting in glory my wondering view;',
        'Oh, when I receive it all shining in brightness, Dear friend, could I see you receiving one, too!'
      ],
      [
        'I have a peace: it is calm as a river,',
        'A peace that the friends of this world never knew;',
        'My Savior alone is its Author and Giver,',
        'And O could I know it was given to you!'
      ],
      [
        'When Jesus has found you, tell others the story,',
        'That my loving Savior is your Savior, too;',
        'Then pray that your Savior may bring them to glory,',
        'And prayer will be answered—’twas answered for you!'
      ]
    ],
    englishChorus: [
      'For you I am praying, for you I am praying,',
      'For you I am praying, I’m praying for you.'
    ]
  },
  {
    id: 'hymn-275',
    number: 275,
    title: 'Umuyayaya Ni Kwi?',
    writer: 'John R. Bryant / John R. Sweney',
    englishTune: 'Eternity! Where?',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubupingulo no Bwisa bwa kwa Kristu',
    key: 'E Major',
    timeSignature: '3/4',
    scripture: 'Yoshua 24:15 · Abafilipi 3:20 · 2 Abakorinto 5:10',
    isSample: false,
    melodicPreview: [71, 71, 71, 68, 66, 64, 68, 71, 69],
    verses: [
      [
        'Umuyayaya bushe ni kwi waba?',
        'Tekutl ucumfwe lelo e-ko waba;',
        'Lipu-sho likalamba: Muyayaya?',
        'Lipu-sho likalamba: Waba kwisa?'
      ],
      [
        'Umuyayaya bushe ni kwi waba?',
        'Niku balubulwa nangu ku baluba;',
        'Cirno pali fibili: Muyayaya, Cimo pali fibili: Waba kwisa?'
      ],
      [
        'Umuyayaya bushe ni kwi waba?',
        'Salo bu-suma bwa calo no bwa mulu:',
        'Cisu-ma ukusala Muyayaya, Cisu-ma ukusala: Waba kwisa?'
      ],
      [
        'Umuyayaya bushe ni kwi waba?',
        'Ubupi-ngulo bwa Mfumu buli pepi:',
        'Ile-lo ulesala: Muyayaya, Ile-lo ulesala: Waba kwisa?'
      ],
      [
        'Umuyayaya bushe ni kwi waba?',
        'Cibusa wilatemwa ifya mu calo;',
        'Asu-ka ilipusho Muyayaya, Asu-ka ilipusho Waba kwisa?'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        '“Eternity! Where?” It floats in the air;',
        'Amid clamor or silence it ever is there!',
        'The question so solemn—“Eternity! Where?”',
        'The question so solemn—“Eternity! Where?”'
      ],
      [
        '“Eternity! Where?” Oh! Eternity! where?',
        'With redeemed ones in glory? Or lost in despair?',
        '’Tis one or the other—“Eternity! Where?” ’Tis one or the other—“Eternity! Where?”'
      ],
      [
        '“Eternity! Where?” Oh! how can you share',
        'The world’s giddy pleasures, or heedlessly dare',
        'Do aught till you settle—“Eternity! Where?” Do aught till you settle—“Eternity! Where?”'
      ],
      [
        '“Eternity! Where?” Oh! friend, have a care;',
        'Soon God will no longer His judgment forbear;',
        'This day may decide your—“Eternity! Where?” This day may decide your—“Eternity! Where?”'
      ],
      [
        '“Eternity! Where?” Oh! Eternity! Where?',
        'Friend, sleep not, nor take in the world any share,',
        'Till you answer this question—“Eternity! Where?” Till you answer this question—“Eternity! Where?”'
      ]
    ]
  },
  {
    id: 'hymn-276',
    number: 276,
    title: 'Ukufwaya Ine',
    writer: 'A. N. / Emerson E. Hasty',
    englishTune: 'Seeking for Me',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Ulubulo no Lupulumuko',
    key: 'G Major',
    timeSignature: '6/8',
    scripture: 'Luka 19:10 · Luka 2:7 · 1 Timote 1:15',
    isSample: false,
    melodicPreview: [62, 67, 69, 71, 67, 69, 71, 74],
    verses: [
      [
        'Yesu Imfumu mu Betelemu,',
        "'Fyalilwe mwi cinka ngo mupina;",
        'Awe mwandi! Cali ca kupapa,',
        'Kwisa fwaya ine.'
      ],
      [
        'Yesu Mupusushi pa lupanda,',
        'Andubwile no mulopa wakwe;',
        'Awe mwandi! Cali ca kupapa,',
        'Ukufwila ine.'
      ],
      [
        'Yesu Mupusushi umo wine. Na lilya naile ciyeyeye:',
        'Alepapatilo mweo wandi, Aleita ine.'
      ],
      [
        "Yes' akesa kufuma ku mulu,",
        'Bulayo busuma kuli ifwe;',
        "Nkamumona 'lefuma ku mulu,",
        'Akeshila ine.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Jesus, my Savior, to Bethlehem came,',
        'Born in a manger to sorrow and shame;',
        'Oh, it was wonderful—blest be His name!',
        'Seeking for me, for me!'
      ],
      [
        'Jesus, my Savior, on Calvary’s tree,',
        'Paid the great debt, and my soul He set free;',
        'Oh, it was wonderful—how could it be?',
        'Dying for me, for me!'
      ],
      [
        'Jesus, my Savior, the same as of old, While I was wand’ring afar from the fold,',
        'Gently and long did He plead with my soul, Calling for me, for me!'
      ],
      [
        'Jesus, my Savior, shall come from on high—',
        'Sweet is the promise as weary years fly;',
        'Oh, I shall see Him descending the sky,',
        'Coming for me, for me!'
      ]
    ]
  },
  {
    id: 'hymn-277',
    number: 277,
    title: 'Ntungulula Lubuto Niluba',
    writer: 'John Henry Newman / John B. Dykes',
    englishTune: 'Lead, Kindly Light',
    category: 'faith-and-trust',
    categoryBemba: 'Ukutungululwa na Yehova',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 119:105 · Amalumbo 43:3 · Yohane 8:12',
    isSample: false,
    melodicPreview: [68, 70, 72, 72, 73, 70, 72, 68, 65, 63],
    verses: [
      [
        'Ntungulula Lubuto ni luba-, Ntungululwe;',
        'Mfifi yafulisha ndyu kutali-, Ntungu-lulwe-;',
        'Munsunge ine epali na-lu-ba,',
        'Mulame amakasa-yandi-'
      ],
      [
        'Naikele kwabulo kwipusha-. Ukuntangilila;',
        'Nasalile nshila nalefwaya-. Ntungu-lulwe-;',
        'Natemenwe kwenda mu fya-bi-pa,',
        'Nshali bwino labenyu-bubi-'
      ],
      [
        'Nge fyo nimpalwa na maka yenu-. Ntungululwe;',
        'Kupita mu macusho ya calo-, naya-pita-;',
        'Mu lucelo nkamona ba-nge-li,',
        'Balemposha nabatemwa-kale-.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Lead, kindly Light, amid th’encircling gloom, Lead Thou me on!',
        'The night is dark, and I am far from home, Lead Thou me on!',
        'Keep Thou my feet; I do not ask to see',
        'The distant scene—one step enough for me.'
      ],
      [
        'I was not ever thus, nor prayed that Thou Shouldst lead me on;',
        'I loved to choose and see my path; but now, Lead Thou me on!',
        'I loved the garish day, and, spite of fears,',
        'Pride ruled my will. Remember not past years.'
      ],
      [
        'So long Thy pow’r hath blest me, sure it still Will lead me on',
        'O’er moor and fen, o’er crag and torrent, till The night is gone;',
        'And with the morn those angel faces smile,',
        'Which I have loved long since, and lost awhile!'
      ]
    ]
  },
  {
    id: 'hymn-278',
    number: 278,
    title: 'Nshila Yobe We Mfumu',
    writer: 'Horatius Bonar / Franklin E. Belden',
    englishTune: 'Not My Way',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Ukupeela Umweo Kuli Kristu',
    key: 'Db Major',
    timeSignature: '4/4',
    scripture: 'Luka 22:42 · Mateo 6:10 · Amapinda 3:5-6',
    isSample: false,
    melodicPreview: [65, 65, 65, 66, 65, 63],
    verses: [
      [
        'Nshila - yobe-, Mfumu, Nangu - yafi-, tisha; Ntungu-lula-, Mfumu, Unsa-, lile - nshila. Teti-, njisa-Iile, Awe-, teti-ncite. Nsali-la we-, Mfumu, Nkenda-, mwalu-ngama.'
      ],
      [
        "Bufu-mu bo-. mfwayo; Bobe - ne nshi-le yi; Yale-la ku-, Mfumu; Epa-, Ii na-luba, Uli, bumi-bwandi, 'Lyo ncu-, la no-bumi; Nsali-la we-, mwine Ici-, kuwa-mina"
      ],
      [
        'Nsali-la fi-, busa: Malwe - leno-, bumi, Nama-saka-, mano; Bupi-na ne-, fyuma: Teku-, sala - kwandi; Munsa-, lile - Imwe; Nimwe - Ntungu-, lushi, We ntu-, lo ya - fyonse.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Thy way, not mine, O Lord, However dark it be; Lead me by Thine own hand, And choose the path for me. I dare not choose my lot; I would not if I might; Choose Thou for me, my God, So shall I walk aright.'
      ],
      [
        'The kingdom that I seek Is Thine; so let the way That leads to it be Thine, Else I must surely stray. Hold Thou my cup of life; With joy or sorrow fill, As best to Thee may seem: Choose Thou my good and ill.'
      ],
      [
        'Choose Thou for me my friends, My sickness or my health; Choose Thou my cares for me, My poverty or wealth. Not mine, not mine the choice, In either great or small; Be Thou my Guide, my Strength, My Wisdom, and my All.'
      ]
    ]
  },
  {
    id: 'hymn-279',
    number: 279,
    title: 'Iseni Kuli Ine',
    writer: 'Franklin E. Belden',
    englishTune: 'Come Unto Me',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'C Major',
    timeSignature: '3/4',
    scripture: 'Mateo 11:28-30 · Yohane 6:37 · Esaya 55:1',
    isSample: false,
    melodicPreview: [64, 67, 69, 67, 64, 60, 62, 64],
    verses: [
      [
        'We wa-ba no bulanda, Menso tawakwata,',
        'Kusu-mina mu Mfumu E mwa-ba buseko.'
      ],
      [
        'Fyonse ifya mu calo tafi-belelela;',
        'Lelo kutemwa kwakwe eku-belela pe.'
      ],
      [
        'Ubu-mi bwa Mupashi, Bupe-lwa na Kristu,',
        "Bushe nausenukwa, Is'obe no mweo."
      ],
      [
        'Mute-nde ngo mumana, Kute-mwa ngo lwimbo,',
        'Iko-Ii lyapepuka, Talya-fina iyo.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      "Se ... ni kuli 'ne- ... mweba- ... bomba,",
      'Mwe-ba fininwa, Ndemupa ubutusho,',
      'Se ... ndeni koli ... ilyandi- ... lyapepu ... ka.'
    ],
    englishVerses: [
      [
        'O heart bowed down with sorrow! O eyes that long for sight!',
        'There’s gladness in believing; In Jesus there is light.'
      ],
      [
        'Earth’s fleeting gain and pleasure Can never satisfy;',
        '’Tis love our joy doth measure, For love can never die.'
      ],
      [
        'Divinest consolation Doth Christ the Healer give;',
        'Art thou in condemnation? Repent, believe, and live.'
      ],
      [
        'His peace is like a river, His love is like a song;',
        'His yoke’s a burden never, ’Tis easy all the way.'
      ]
    ],
    englishChorus: [
      '“Come unto Me, all ye that labor,',
      'And are heavy laden, and I will give you rest.',
      'Take My yoke upon you, and learn of Me, for My yoke is easy.”'
    ]
  },
  {
    id: 'hymn-280',
    number: 280,
    title: 'Inyimbo E Shisuma',
    writer: 'Charles H. Gabriel',
    englishTune: 'Our King',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kulumbanya',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Amalumbo 95:1-2 · Marko 10:14 · Mateo 21:15-16',
    isSample: false,
    melodicPreview: [60, 65, 67, 69, 70, 72, 69, 67, 65],
    verses: [
      [
        "Inyimbo e shisu-ma twimba ku-li 'Mwe;",
        'Tumutasha Katu-Ia Inshila ya-mwe.'
      ],
      [
        'Atemenwe aba-na lintu ali - pano;',
        'Nomba ali ku mu-lu Atutemwi-sha pe'
      ],
      [
        'Tutemwa ukuta-sha no kumfwe mi-lumbe:',
        'Ilintu ali pa-nshi Epo ku Ga-lile.'
      ],
      [
        "Mwe Katula washu-ka Twaisa ku-Ii 'Mwe;",
        'Tulelomba mutwa-fwe Kumupala-mina.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tule ... tasha E Katula - wesu',
      '(tasha)',
      'Tule... imba Ubufumu - bwakwe.'
    ],
    englishVerses: [
      [
        'Our sweetest songs of gladness, On this delightful day,',
        'We bring to praise the Savior, Who is the Life, the Way.'
      ],
      [
        'He loved the little children, When He was here below,',
        'And though He’s up in heaven, He loves us yet, we know.'
      ],
      [
        'We love to sing His praises, And hear the stories told,',
        'Of Him when He was dwelling In Galilee of old.'
      ],
      [
        'O Savior, blessed Savior, We kneel before Thy throne,',
        'And ask that Thou wilt help us To live for Thee alone.'
      ]
    ],
    englishChorus: [
      'We sing, we sing, the praises of our King,',
      '(we sing)',
      'We sing, we sing, the glory of our King.'
    ]
  },
  {
    id: 'hymn-281',
    number: 281,
    title: 'Ulutanda Lusuma',
    writer: 'Franklin E. Belden',
    englishTune: 'A Beautiful Star',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Mateo 2:2,9-10 · 2 Petro 1:19 · Ukusokolola 22:16',
    isSample: false,
    melodicPreview: [67, 64, 65, 67, 69, 67, 64, 60, 62],
    verses: [
      [
        'Kwalyu lutanda ubu-shiku,',
        'Lwabeka na ma-ka ya-mulu:',
        'Lwatungul wi Ie aba-mano,',
        'Kwafya-lilwe, Mupu-sushi.'
      ],
      [
        'Amalembo a-yaci-shinka, E yabalangi-le lu-tanda;',
        'Balukonkele apa-tali, Lwali - luta-nda Iwa - Yesu'
      ],
      [
        'Natulukonke nga ba-kale, Nyali ya calo yaso-belwe;',
        'Twakulakonka ulu buto, Kufi-ka tu-tushe-kwesu'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Lule-beka. Lule-beka, Mu ma-lungu na pa-mpili,',
      'Lule-beka, Lule-beka, Lupusukilo lwa kwa - Lesa.'
    ],
    englishVerses: [
      [
        'A beautiful star arose one night,',
        'Divinely it shone with purest light;',
        'Its wonderful rays the wise men led',
        'To find the Savior’s lowly bed.'
      ],
      [
        'They knew by the word of truth divine, ’Twas time that the guiding star should shine;',
        'They follow’d its light which shone afar, ’Twas Christ, “the bright and Morning Star.”'
      ],
      [
        'We’ll follow its light, like those of old, The “Light of the World,” by seers foretold;',
        'We’ll follow His light till we shall come To perfect rest in heav’n, our home.'
      ]
    ],
    englishChorus: [
      '’Tis shining still, ’tis shining still, That beautiful star, o’er plain and hill;',
      '’Tis shining still, ’tis shining still, Salvation’s star of God’s good will.'
    ]
  },
  {
    id: 'hymn-282',
    number: 282,
    title: 'Amakana Makumi Yamasase',
    writer: 'Thomas Kelly / Lowell Mason',
    englishTune: 'Ten Thousand Harps',
    category: 'praise-and-worship',
    categoryBemba: 'Ukutasha no Kulumbanya',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Ukusokolola 5:11-12 · Ukusokolola 19:6 · Amalumbo 150:1-6',
    isSample: false,
    melodicPreview: [71, 71, 74, 71, 67, 69, 71, 74, 71],
    verses: [
      [
        'Mu masese na mashiwi',
        'Balelumbanye Mfumu;',
        'Ni Yesu e uleteka, Myulu na isekele.',
        'Nipaci ... puna Yesu, Ateke ... calo eka,',
        'Aleluya, Aleluya, Aleluya, Amen .'
      ],
      [
        'Teka Mfumu ya lulumbi, Teka umuyayaya,',
        'Bonse bakalasekela abo wakomenena;',
        'Ni pacipuna Yesu-, ... Ateke calo eka-,',
        'Aleluya, Aleluya, Aleluya, Amen'
      ],
      [
        "'Seni bwangu Mupusushi. Bwise bushiku bwenu;",
        'Nga bwapwa ubupingulo. Mulu calo fikapwa;',
        'Bakasekela nobe, Kumone cinso cobe,',
        'Aleluya, Aleluya, Aleluya, Amen.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Hark! ten thousand harps and voices',
        'Sound the note of praise above;',
        'Jesus reigns, and heaven rejoices; Jesus reigns, the God of love:',
        'See, He sits on yonder throne; Jesus rules the world alone.',
        'Alleluia! Alleluia! Alleluia! Amen.'
      ],
      [
        'King of glory, reign forever, Thine an everlasting crown;',
        'Happy objects of Thy grace, Destined to behold Thy face.',
        'See, He sits on yonder throne; Jesus rules the world alone.',
        'Alleluia! Alleluia! Alleluia! Amen.'
      ],
      [
        'Savior, hasten Thine appearing; Bring, O bring the glorious day,',
        'When, the awful summons hearing, Heaven and earth shall pass away:',
        'Then, with golden harps we’ll sing, “Glory, glory to our King!”',
        'Alleluia! Alleluia! Alleluia! Amen.'
      ]
    ]
  },
  {
    id: 'hymn-283',
    number: 283,
    title: "Bushe Ni'we Bushe Ni'ne?",
    writer: 'G. M. J. / James McGranahan',
    englishTune: 'Shall You? Shall I?',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Mateo 25:10-12 · Luka 13:24-25 · Ukusokolola 21:21-27',
    isSample: false,
    melodicPreview: [65, 65, 65, 69, 67, 65, 62, 60],
    verses: [
      [
        "limo 'kengila pa cipata, No-mba fye, no-mba fye:",
        "No kuba mu lulumbi lulya, Bushe ni'we? Bushe ni'ine?",
        'Akenda mu misebo ilya,',
        'Akalamona ifisuma,',
        "No kulya filya twaebelwe; Bushe ni 'we? Bushe ni 'ne?"
      ],
      [
        'Umo akatulo lupanda, No-mba fye, No-mba fye;',
        "Bakamufwika icitebo, Bushe ni 'we? Bushe ni 'ne?",
        'Umo akalamone Mfumu, Macusho ya calo yakapwa,',
        "Akalasekelela nankwe; Bushe ni 'we? Bushe ni 'ne?"
      ],
      [
        'Umo akakunta pa cibi, No-mba fye, No-mba fye;',
        'Akomfwe shiwi, "Nshikwishibe,\' Bushe ni \'we? Bushe ni \'ne?',
        'Aketa tabakarnwasuke, Pantu icibi cikesalwa,',
        "Tabakamupele cilambu; Bushe ni 'we? Bushe ni 'ne?"
      ],
      [
        'Umo akemba ulwa bwansho, No-mba fye, No-mba fye:',
        "Kwimba pamo na bapusuka, Bushe ni 'we? Bushe ni 'ne?",
        'Kuposhanya palya pa cabu, Na batemwikwa ba pa calo,',
        "Akaba mu lulumbi lwa pe, Bushe ni 'we? Bushe ni 'ne?"
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Someone will enter the pearly gate By and by, by and by,',
        'Taste of the glories that there await, Shall you? shall I? Shall you? shall I?',
        'Someone will travel the streets of gold,',
        'Beautiful visions will there behold,',
        'Feast on the pleasures so long foretold: Shall you? shall I? Shall you? shall I?'
      ],
      [
        'Someone will gladly his cross lay down By and by, by and by,',
        'Faithful, approved, shall receive a crown, Shall you? shall I? Shall you? shall I?',
        'Someone the glorious King will see, Ever from sorrow of earth be free,',
        'Happy with Him thro’ eternity: Shall you? shall I? Shall you? shall I?'
      ],
      [
        'Someone will knock when the door is shut By and by, by and by,',
        'Hear a voice saying, “I know you not,” Shall you? shall I? Shall you? shall I?',
        'Someone will call and shall not be heard, Vainly will strive when the door is barred,',
        'Someone will fail of the saint’s reward: Shall you? shall I? Shall you? shall I?'
      ],
      [
        'Someone will sing the triumphant song By and by, by and by,',
        'Join in the praise with the blood-bought throng, Shall you? shall I? Shall you? shall I?',
        'Someone will greet on the golden shore Loved ones of earth who have gone before,',
        'Safe in the glory forevermore: Shall you? shall I? Shall you? shall I?'
      ]
    ]
  },
  {
    id: 'hymn-284',
    number: 284,
    title: 'Ilyo Inshiku Shileya',
    writer: 'George Cooper / Ira D. Sankey',
    englishTune: 'While the Days Are Going By',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Abagalatia 6:9-10 · Abena Efese 5:16 · Mateo 25:35-40',
    isSample: false,
    melodicPreview: [72, 73, 72, 70, 68, 65, 67, 68, 72],
    verses: [
      [
        'Kulya bantu balecula, Ilyo nshiku shileya;',
        'Kuli bambi abalefwa, Ilyo nshiku shileya:',
        "'Fwe tubakoseleshe. Bonse bali mu nshila,",
        'Tulecite fisuma, Ilyo nshiku shileya.'
      ],
      [
        'Te nshita iyakwikala, Ilyo nshiku shileya;',
        'Mpumi yobe ibekeshe, Ilyo nshiku shileya:',
        'Icalo ca malanda, Macusho no kulila,',
        'Twafwe bonse balewa, Ilyo nshiku shileya.'
      ],
      [
        'Imyando ya kutemwana, Ilyo nshiku shileya,',
        'Tatuleisakamana, Ilyo nshiku shileya;',
        'Lelo mbuto shisuma Isho ifwe twabyele,',
        'Shiletusansamusha. Ilyo nshiku shileya.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Shileya (shileya), Shileya (shileya),',
      'Shileya (shileya),',
      'Shileya (shileya), Tulecite fisuma ilyo nshiku shileya'
    ],
    englishVerses: [
      [
        'There are lonely hearts to cherish, While the days are going by;',
        'There are weary souls who perish, While the days are going by;',
        'If a smile we can renew, As our journey we pursue,',
        'O, the good we all may do, While the days are going by!'
      ],
      [
        'There’s no time for idle scorning, While the days are going by;',
        'Let your face be like the morning, While the days are going by;',
        'For the world is full of sighs, Full of sad and weeping eyes;',
        'Help your fallen brother rise, While the days are going by.'
      ],
      [
        'All the loving links that bind us, While the days are going by;',
        'One by one we leave behind us, While the days are going by;',
        'But the seeds of good we sow, Both in shade and shine will grow,',
        'And will keep our hearts aglow, While the days are going by.'
      ]
    ],
    englishChorus: [
      'Going by (going by), going by (going by),',
      'Going by (going by),',
      'Going by (going by), O, the good we all may do, while the days are going by!'
    ]
  },
  {
    id: 'hymn-285',
    number: 285,
    title: 'Ku Cifulo Catalala',
    writer: 'Cleland B. McAfee',
    englishTune: 'There Is a Place of Quiet Rest',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'Db Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 91:1 · Mateo 11:28-29 · Abena Filipi 4:6-7',
    isSample: false,
    melodicPreview: [65, 65, 65, 66, 65, 63, 61, 63, 65],
    verses: [
      [
        'Ku cifulo catalala, Mupepi na Lesa,',
        'Ububi tabukowesha, Mupepi na Lesa.'
      ],
      [
        'Ku cifulo icansansa, Mupepi na Lesa,',
        'Eko tukumanye Mfumu, Mupepi na Lesa.'
      ],
      [
        'Ku cifulo ca kutusha, Mupepi na Lesa,',
        'Kwabe nsansa no mutende, Mupepi na Lesa.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'O Yesu Mupusushi, Atumwa na Lesa;',
      'Twikate fwe balinda, Mupepi na Lesa.'
    ],
    englishVerses: [
      [
        'There is a place of quiet rest, Near to the heart of God;',
        'A place where sin cannot molest, Near to the heart of God.'
      ],
      [
        'There is a place of comfort sweet, Near to the heart of God;',
        'A place where we our Savior meet, Near to the heart of God.'
      ],
      [
        'There is a place of full release, Near to the heart of God;',
        'A place where all is joy and peace, Near to the heart of God.'
      ]
    ],
    englishChorus: [
      'O Jesus, blest Redeemer, Sent from the heart of God,',
      'Hold us, who wait before Thee, Near to the heart of God.'
    ]
  },
  {
    id: 'hymn-286',
    number: 286,
    title: 'Nsendeni',
    writer: 'Sidney S. Brewer',
    englishTune: 'Bear Me On',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'D Major',
    timeSignature: '6/8',
    scripture: 'Esaya 35:10 · Ukusokolola 21:2-4 · Ukusokolola 19:1',
    isSample: false,
    melodicPreview: [62, 66, 69, 69, 71, 69, 66, 64, 62],
    verses: [
      [
        'Ndebu-fulu-ka bu-shiku, Ilya-balu-bulwa',
        'Bake-ngila-mu Zi-yoni, Mushi wa mu-shilo'
      ],
      [
        "Baka-lai-mb' Ale-luyah, 'Bumba lika-lamba",
        'Nkemba nabo- ulu lwimbo, Ulwa bupu-susho'
      ],
      [
        'Seke-leni bwapa-lama, Twale-bufu-luka-;',
        'Buka-kumu-ne fi-lamba, Bushi-ku bwa kwanga'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'O nse-ndeni, nsendeni; Ku Zi--yo-ni.',
      'Nsende-ni ku mushi wa kutemwa:',
      'Mushi wa mu-shilo.'
    ],
    englishVerses: [
      [
        'O how I long to see that day, When the redeemed shall come',
        'To Zion, clad in white array, Their blissful, happy home.'
      ],
      [
        'I’ll hear the alleluias roll From the unnumbered throng,',
        'And with a heaven-enraptured soul, I’ll join redemption’s song.'
      ],
      [
        'All hail! the morn of glory’s nigh, The pilgrim longs to see,',
        'That dries the tear from every eye, Creation’s jubilee.'
      ]
    ],
    englishChorus: [
      'O bear me on, bear me on, To Mount Zion,',
      'O bear me on to that city of love,',
      'Where saints shall ever dwell.'
    ]
  },
  {
    id: 'hymn-287',
    number: 287,
    title: 'Mu Nshita Ya Mesho',
    writer: 'James Montgomery / Spencer Lane',
    englishTune: 'In the Hour of Trial',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Luka 22:31-32 · 1 Abena Korinti 10:13 · 1 Petro 5:7',
    isSample: false,
    melodicPreview: [64, 64, 65, 64, 62, 60, 62, 64, 60],
    verses: [
      [
        'Mu nshita ya me-sho- Yesu mungafwe,',
        "Ukuti ni tu-nkwa, Mfume kuli 'Mwe;",
        'Nga nabo wana-ka,',
        'Mwindekelesha',
        'Munjikatili-le Ukuti niwa.'
      ],
      [
        'Fintu fya mu ca-lo fingansekesha,',
        'Tafyawama fyo-na-ula Mupashi;',
        'Ibala lya Get-se-mani njibushe;',
        'Nangu mbe mwisa-mba ilya Kalvari.'
      ],
      [
        'Busho luse lwi-nga leta malanda,',
        'Nangu kukali-pwa, Muno mu calo;',
        'Nsuminisheni-fye, Mbe mu maboko',
        "Amasakama-no, Mbike pali 'Mwe."
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'In the hour of trial, Jesus, plead for me,',
        'Lest by base denial I depart from Thee;',
        'When Thou seest me waver,',
        'With a look recall,',
        'Nor for fear or favor Suffer me to fall.'
      ],
      [
        'With forbidden pleasures Would this vain world charm,',
        'Or its sordid treasures Spread to work me harm,',
        'Bring to my remembrance Sad Gethsemane;',
        'Or, in darker semblance, Cross-crowned Calvary.'
      ],
      [
        'Should Thy mercy send me Sorrow, toil, and woe,',
        'Or should pain attend me On my path below,',
        'Grant that I may never Fail Thy hand to see;',
        'Grant that I may ever Cast my care on Thee.'
      ]
    ]
  },
  {
    id: 'hymn-288',
    number: 288,
    title: 'Baletele Fya Bupe Kuli Yesu',
    writer: 'Eben E. Rexford / Joseph Garrison',
    englishTune: 'They Brought Their Gifts to Jesus',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Mupashi wa Mushilo no Kuipeela',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Luka 21:1-4 · Amapinda 23:26 · 2 Abena Korinti 8:5,12',
    isSample: false,
    melodicPreview: [65, 67, 69, 69, 67, 65, 69, 72, 69],
    verses: [
      [
        'Baletele- fya bu-pe fyabo kuli-Yesu,',
        'Pa kumute-mwa Yesu bamupele bupe,',
        'Imilimo- ya luse, No kwafwa ba-pina;',
        'Na fyonse fyo- bapele,',
        'Fyalipokelelwe'
      ],
      [
        'Na bambi e-po ba-li bapele fya-bupe,',
        'Umupina- ape-le, Yesu atashishe;',
        'Umupina-Twai-she Kupela ko-nse fye.',
        'Takwete ne-lyo ka-me Kakupele Mfumu.'
      ],
      [
        'Alilile ati-le, We wa-ba no luse,',
        'Bula fyonse- ndi na-fyo, Mutima wabipa;',
        'Elyo Yesu ‘mwaswike, Witila ka-cepa,',
        'Bonse buli-fye bwino, Iwe bwacilapo.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Bushe teti- ulete bupe ate-mwisha,',
      'Tila, Napo- mutima Pa makasa yenu.'
    ],
    englishVerses: [
      [
        'They brought their gifts to Jesus, And laid them at His feet,',
        'And love for this dear Savior, Made every offering sweet;',
        'Good deeds and words of kindness, Help for the poor of earth,',
        'And not a gift among them',
        'Was thought of little worth.'
      ],
      [
        'Apart from other givers A poor wayfarer stood;',
        'He saw the gifts they offered, The poorest counted good;',
        'And he was filled with longing, A gift, though poor, to bring;',
        'Alas! all empty handed He stood before the King.'
      ],
      [
        '“Dear Lord,” he cried in sorrow, “I know how kind Thou art,',
        'Take all I have to give Thee, My sinful wayward heart.”',
        'Then Jesus answered softly, “Count not the gift as small,',
        'Though all of them are precious, Thine is the best of all.”'
      ]
    ],
    englishChorus: [
      'Wouldst bring a gift to Jesus, That He will count most sweet?',
      'Say, “Lord, my heart I give Thee,” And lay it at His feet.'
    ]
  },
  {
    id: 'hymn-289',
    number: 289,
    title: 'Mumbule Fyo Ndi',
    writer: 'Eliza H. Hamilton / John H. Stockton',
    englishTune: 'Take Me As I Am',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kwelelwa',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Yohane 6:37 · Abena Roma 5:8 · Luka 18:13',
    isSample: false,
    melodicPreview: [68, 68, 70, 72, 72, 73, 72, 70, 68],
    verses: [
      [
        "Yesu ni 'Mwe ndelilila, Nga tamwangafwe nalafwa;",
        'Leteni ubupu-susho, Mumbule nge fyo ndi.'
      ],
      [
        "Nshikwete ma-ka ndi mubi, Lelo ni'Mwe mwamfwilile;",
        'Mumpange ngefyo mu-fwaya,',
        'Mumbule ngc fyo ndi'
      ],
      [
        'Teti njiteyani-shishe, Pantu ndi muntu wabipa;',
        'Mwi Shina lyenu mpusuke,',
        'Mumbule nge fyo ndi.'
      ],
      [
        'Nafukama ku ci-puna, Moneni nawa pa nkasa;',
        'Mulimo wenu u-suma, Mumbule nge fyo ndi'
      ],
      [
        'Mulefwayo kuu-mombe,',
        'Mbutisheni umutima:',
        'Beni muli ine-mombe, Mumbule nge fyo ndi.'
      ],
      [
        'Ilyo mulimo u-kapwa, Ubulwi bwapwa nacimfya:',
        'Ukwita kwandi ku-kaba-Mumbule nge fyo ndi.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Mumbule- fyo ndi, Mumbule- fyo ndi,',
      'Leteni ubupu-susho, Mumbule nge fyo ndi.'
    ],
    englishVerses: [
      [
        'Jesus, my Lord, to Thee I cry; Unless Thou help me, I must die;',
        'O bring Thy free salvation nigh, And take me as I am.'
      ],
      [
        'Helpless I am, and full of guilt, But yet for me Thy blood was spilt,',
        'And Thou canst make me what Thou wilt,',
        'And take me as I am.'
      ],
      [
        'No preparation can I make, My best resolves I only break;',
        'Yet save me for Thine own name’s sake,',
        'And take me as I am.'
      ],
      [
        'Behold me, Savior, at Thy feet, Deal with me as Thou seest meet;',
        'Thy work begin, Thy work complete, And take me as I am.'
      ],
      [
        'If Thou hast work for me to do,',
        'Inspire my will, my heart renew;',
        'And work both in, and by me, too, And take me as I am.'
      ],
      [
        'And when at last the work is done, The battle fought, the vict’ry won;',
        'Still, still my cry shall be alone, Lord, take me as I am.'
      ]
    ],
    englishChorus: [
      'O take me as I am, O take me as I am;',
      'My only plea—Christ died for me; O take me as I am.'
    ]
  },
  {
    id: 'hymn-290',
    number: 290,
    title: 'Bombela Imfumu',
    writer: 'William A. Ogden',
    englishTune: 'Toiling for Jesus',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'A Major',
    timeSignature: '4/4',
    scripture: 'Mateo 9:37-38 · 1 Abena Korinti 15:58 · Yohane 1:29',
    isSample: false,
    melodicPreview: [69, 69, 69, 73, 73, 71, 69, 66, 69],
    verses: [
      [
        'Temwa temwa bombela Imfumu',
        'Twafuma bonse ne mitima;',
        'Kubombela conse atulanga.',
        'No busumino tukacita.'
      ],
      [
        'Kwanga kwanga tusose ilandwe.',
        'Muno calo ku bantu bonse:',
        'Kristu ulubuto lwakwa Tata,',
        'Wene aletupala nomba.'
      ],
      [
        'Fuka fuka konke Mfumu Yesu.',
        'Mu fyonse Wene aendele;',
        'Nkatangilile bambi ku Mfumu.',
        'Bamonemo Mwana wa Mpanga'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Bo-mbela Yesu. Tuleya ifwe tuleimbila.',
      'Bo-mbela Yesu, Muno mwibala lyakwe.'
    ],
    englishVerses: [
      [
        'Gladly, gladly, toiling for the Master,',
        'Go we forth with willing hands to do;',
        'Whatsoe’er to us He hath appointed,',
        'Faithfully our mission we’ll pursue.'
      ],
      [
        'Joyful, joyful, we will tell the story',
        'Of His love to mortals here below;',
        'Christ, the brightness of the Father’s glory,',
        'Freely here His blessing will bestow.'
      ],
      [
        'Meekly, meekly, following the Master,',
        'Walking faithfully the path He trod;',
        'Leading wand’rers to the dear Redeemer,',
        'Pointing sinners to the Lamb of God.'
      ]
    ],
    englishChorus: [
      'Toiling for Jesus, Joyfully we go, joyfully we go;',
      'Toiling for Jesus, In His vineyard here below.'
    ]
  },
  {
    id: 'hymn-291',
    number: 291,
    title: 'Ewalinga Fye Eka',
    writer: 'Traditional / Anonymous',
    englishTune: 'Worthy, Worthy Is the Lamb',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 5:12-13 · Ukusokolola 19:6 · Yohane 1:29',
    isSample: false,
    melodicPreview: [67, 67, 69, 67, 64, 60, 62, 64, 60],
    verses: [
      [
        'Yesu Mwana wa Mpanga. E walinga fye eka,',
        'Yesu Mwana wa Mpanga; Wa--fwi--Ie.'
      ],
      [
        'Leteni ubufumu, Bwise pwisha macusho',
        'Leteni myake kana, Wa--shi--la.'
      ],
      [
        "Kanshi 'fwe nshita shonse,",
        'Tubombe tumutashe.',
        "Tusuke tumumone, Ku--Zi-yon',"
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Lu-lumbi ku Mfu-mu, Mwimbe',
      'Haleluyah,',
      'Lu-lumbi ku Mfu-mu, Ku-mwa-na.'
    ],
    englishVerses: [
      [
        'Worthy, worthy is the Lamb, Worthy, worthy is the Lamb,',
        'Worthy, worthy is the Lamb That was slain.'
      ],
      [
        'Savior, let Thy kingdom come! Now the power of sin consume;',
        'Bring Thy blest millennium, Holy Lamb.'
      ],
      [
        'Thus may we each moment feel,',
        'Love Him, serve Him, praise Him still,',
        'Till we all on Zion’s hill See the Lamb.'
      ]
    ],
    englishChorus: [
      'Glory, hallelujah! Praise Him,',
      'Hallelujah!',
      'Glory, hallelujah! To the Lamb!'
    ]
  },
  {
    id: 'hymn-292',
    number: 292,
    title: 'Utuboko Tubili',
    writer: 'William A. Ogden',
    englishTune: 'Two Little Hands',
    category: 'children-and-family',
    categoryBemba: 'Abana no Lupwa',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: 'Marko 10:14 · Amalumbo 8:2 · 1 Samwele 3:10',
    isSample: false,
    melodicPreview: [66, 66, 66, 67, 69, 69, 69, 66, 64],
    verses: [
      [
        'Ndi no tuboko twakubomba na ka lulimi kamutashe,',
        'Tu matwi nato twakumfwila, Ka shiwi kamulumbanye.'
      ],
      [
        'Ndi no tukasa twakwendela,',
        'Ukulaya ku mulu kulya,',
        "Tu menso nato twakumona 'Pali amashiwi yakwe."
      ],
      [
        'Na ka mutima mpele Yesu, Na ka mupashi kapusuke;',
        'Na ka mweo kamubombele, Ine kuti naba wakwe.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Twaisa. Twaisa, Fwe bana bobe twaisa,',
      'Twaisa, Twaisa, Twishibe Imwe.'
    ],
    englishVerses: [
      [
        'I’ve two little hands to work for Jesus, One little tongue His praise to tell,',
        'Two little ears to hear His counsel, One little voice a song to swell.'
      ],
      [
        'I’ve two little feet to tread the pathway,',
        'Up to the heav’nly courts above;',
        'Two little eyes to read the Bible, Telling of Jesus’ wondrous love.'
      ],
      [
        'I’ve one little heart to give to Jesus, One little soul for Him to save,',
        'One little life for His dear service, One little self that He must have.'
      ]
    ],
    englishChorus: [
      'Lord, we come, Lord, we come, In our childhood’s early morning;',
      'Lord, we come, Lord, we come, Come to learn of Thee.'
    ]
  },
  {
    id: 'hymn-293',
    number: 293,
    title: 'Kunta, Kunta',
    writer: 'Harriet Beecher Stowe / George F. Root',
    englishTune: 'Knocking, Knocking',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ubwilishi no Kulapila',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: 'Ukusokolola 3:20 · Ulwimbo lwa Nyimbo 5:2',
    isSample: false,
    melodicPreview: [67, 65, 63, 62, 63, 65, 67, 68, 67],
    verses: [
      [
        "Kunta, Kunia niw'ani-? Linda linda cawama,",
        'Mulendo mweni ni Mfu-mu,',
        'Tatwatala tumumo--na',
        'Wapapa umutima. Bushe teti wisule-?',
        'Bushe teti wisule.'
      ],
      [
        "Kunta, Kunta ep'ali-, Linda. Linda cawama-,",
        'Lelo cibi naciko-sa Nseku shakosha ici-bi',
        'Mishimba naifula, Cibi cakakatila-.',
        'Nacikano kwisuka.'
      ],
      [
        "Kunta, Kunta ep'ali-, Linda, Linda cawama-,",
        'Walashilwe ‘li pa mwi-nshi, Ku mutwe afwele myu--nga',
        'Menso yalolekesha, Alepembela iwe-,',
        'Bushe teti wisule.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Knocking, knocking, who is there? Waiting, waiting, O how fair!',
        '’Tis a Pilgrim, strange and kingly,',
        'Never such was seen before;',
        'Ah, my soul, for such a wonder, Wilt thou not undo the door?',
        'Wilt thou not undo the door?'
      ],
      [
        'Knocking, knocking, still He’s there: Waiting, waiting, wondrous fair!',
        'But the door is hard to open, For the weeds and ivy vine,',
        'With their dark and clinging tendrils, Ever round the hinges twine;',
        'Ever round the hinges twine.'
      ],
      [
        'Knocking, knocking—what, still there? Waiting, waiting, grand and fair!',
        'Yes, the piercèd hand still knocketh, And beneath the crownèd hair',
        'Beam the patient eyes, so tender, Of thy Savior waiting there;',
        'Wilt thou not undo the door?'
      ]
    ]
  },
  {
    id: 'hymn-294',
    number: 294,
    title: 'Kufimbwa No Mweo Wakwe',
    writer: 'Franklin E. Belden',
    englishTune: 'Cover With His Life',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'Db Major',
    timeSignature: '9/8',
    scripture: 'Esaya 1:18 · Abena Roma 5:9-10 · Abagalatia 3:27',
    isSample: false,
    melodicPreview: [65, 65, 65, 68, 66, 65, 63, 61, 65],
    verses: [
      [
        'Lolesha Ye-su, Wakaele-, Tata abi-ka pali ine',
        'Umweo wa-kwe; Ne wabipa-, Kuti nsafi-we Mbute tutu'
      ],
      [
        'Ububi bwa-ndi nabufula-, Ndetina uku-kulolesha-,',
        "Isa we Mfu-mu wise 'nsenda- Mfume mu bu-bi bwa chalo 'ci."
      ],
      [
        'Ndatemwisha kwe-lela kobe-,',
        'Walindamina umwingila-,',
        'Uwabuti-sha; Namulomba-.',
        'Munsambe i-ne mbute tutu.'
      ],
      [
        'Alimfwili-Ie kumpususha-, E',
        'wasambi-le bubi bwandi-,',
        'Kwi shiwi lye-be ndeumfwila-,',
        'Nkabe mu lu-lu-mbi na Iwe.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Mfimbeni e-lyo mbute tutu-,',
      'Nkeshiba bwi-no mwco wenu-,',
      'Umweo wa-ndi walibipa-, Unsambe ine mbute tutu'
    ],
    englishVerses: [
      [
        'Look upon Jesus, sinless is He; Father, impute His life unto me.',
        'My life of scarlet, my sin and woe, Cover with His life, whiter than snow.'
      ],
      [
        'Deep are the wounds transgression has made; Red are the stains; my soul is afraid.',
        'O to be covered, Jesus, with Thee, Safe from the law that now judgeth me!'
      ],
      [
        'Longing the joy of pardon to know;',
        'Jesus holds out a robe white as snow;',
        '“Lord, I accept it! Leaving my own,',
        'Gladly I wear Thy pure life alone.”'
      ],
      [
        'Reconciled by His death for my sin,',
        'Justified by His life pure and clean,',
        'Sanctified by obeying His word,',
        'Glorified when returneth my Lord.'
      ]
    ],
    englishChorus: [
      'Cover with His life, whiter than snow;',
      'Fullness of His life then shall I know;',
      'My life of scarlet, my sin and woe, Cover with His life, whiter than snow.'
    ]
  },
  {
    id: 'hymn-295',
    number: 295,
    title: 'Lisheni Penga Lya Bulwi',
    writer: 'William F. Sherwin',
    englishTune: 'Sound the Battle Cry',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Abena Efese 6:10-18 · 1 Timote 6:12 · 2 Timote 4:7-8',
    isSample: false,
    melodicPreview: [65, 65, 65, 67, 70, 69, 67, 65, 62],
    verses: [
      [
        'Lisheni penga, mona mulwani, Imyeni ulu-unga lwakwe;',
        'Buleni ifilwilo, mukose, Mwi shiwi lyakwe lya mushilo'
      ],
      [
        'Tukose bonse twanshe mulwani, Tuye kuntanshi, tucimfye.',
        'Inkwela yesu e shiwi lyakwe,',
        'Tukamucimfya umulwani'
      ],
      [
        'Lesa wa bonse tukutikeni, Lyo tulekwita wa luse;',
        'Ngo bulwi bwapwa, bonse twacimfya, Twafwikwe citebo ca bwansho.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Akuyeni mwe bashilikale,',
      'Teyanyeni shiwi lipita;',
      'Akuyeni no kwimba Hosana!',
      'Chilongoshi ‘mwine ni Kristu.'
    ],
    englishVerses: [
      [
        'Sound the battle cry, See! the foe is nigh; Raise the standard high For the Lord;',
        'Gird your armor on, Stand firm, every one, Rest your cause upon His holy word.'
      ],
      [
        'Strong to meet the foe, Marching on we go, While our cause we know Must prevail;',
        'Shield and banner bright, Gleaming in the light,',
        'Battling for the right, We ne’er can fail.'
      ],
      [
        'O Thou God of all, Hear us when we call, Help us, one and all, By Thy grace;',
        'When the battle’s done, And the victory won, May we wear the crown Before Thy face.'
      ]
    ],
    englishChorus: [
      'Rouse, then, soldiers! Rally round the banner!',
      'Ready, steady, pass the word along;',
      'Onward, forward, shout aloud Hosanna!',
      'Christ is Captain of the mighty throng.'
    ]
  },
  {
    id: 'hymn-296',
    number: 296,
    title: 'Ntungululeni Mwe Mupusushi',
    writer: 'Frank M. Davis',
    englishTune: 'Lead Me, Savior',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'Db Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 23:2-3 · Amalumbo 31:3 · Ukusokolola 21:4',
    isSample: false,
    melodicPreview: [65, 65, 65, 68, 66, 65, 63, 61],
    verses: [
      [
        'Ye-su nyensha niluba (niluba)',
        'Nye-nsha bwino mu nshila (mu nshila)',
        'Ndi bwino nga ulipo (ulipo)',
        'Ku-temwa kobe mbepo (be mbepo)'
      ],
      [
        "U-li cubo kuli ‘ne (kuli 'ne),",
        'Ilyo kwaba macusho (macusho);',
        'Ndi-bwino ngo li pepi (apepi),',
        "Nce-tekela muli 'We (muli 'we)."
      ],
      [
        'Nsu-ngwe kufike mpela (impela),',
        "'Lyo cipupu capita (capita);",
        'Nsu-ke mfike kwi shilya (kwishilya),',
        'Nkakumune filamba (filamba).'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Nye-nshya, Nye-nshya, Ye ... su nyensha niluba;',
      'Nye ... nshya bwino mu nshila,',
      'Munsunge nshita shonse'
    ],
    englishVerses: [
      [
        'Savior, lead me, lest I stray (lest I stray),',
        'Gently lead me all the way (all the way);',
        'I am safe when by Thy side (by Thy side),',
        'I would in Thy love abide (love abide).'
      ],
      [
        'Thou the refuge of my soul (of my soul),',
        'When life’s stormy billows roll (billows roll);',
        'I am safe when Thou art nigh (Thou art nigh),',
        'All my hopes on Thee rely (Thee rely).'
      ],
      [
        'Savior, lead me, then at last (then at last),',
        'When the storm of life is past (life is past);',
        'To the land of endless day (endless day),',
        'Where all tears are wiped away (wiped away).'
      ]
    ],
    englishChorus: [
      'Lead me, lead me, Savior, lead me, lest I stray;',
      'Gently down the stream of time,',
      'Lead me, Savior, all the way.'
    ]
  },
  {
    id: 'hymn-297',
    number: 297,
    title: 'Eko Ali Uwatemenwe',
    writer: 'Carrie E. Breck / Grant Colfax Tullar',
    englishTune: 'There Was One Who Was Willing',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Abena Kolose 2:14 · Abena Roma 8:1 · 1 Petro 2:24',
    isSample: false,
    melodicPreview: [60, 60, 69, 69, 69, 67, 65, 62, 65],
    verses: [
      [
        'Eko a-li uwate-me-nwe kumfwila.',
        'Ukuti ine mbe no mweo;',
        'Alisu-minishe kuya palupanda,',
        "Ukuti 'ne nsange umweo."
      ],
      [
        'Wa ciku-ku, kutemwa uwa tekanya, Pa kusa-mba muti-ma wandi,',
        'Nshili no mulandu nomba ndi muntungwa, Nashipopelwa pa lupanda.'
      ],
      [
        "Nakula-ba Iyonse fye no Mupusushi Nshakata-le mfuma kunt'ali;",
        'No lwimbo pamilomo na mu mutima, Pantu ni-njelelwa ububi'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Epo shapopelwe palya pa lupanda,',
      'Wene a-shisende-le shonse,',
      'No kucu-la konse, Yesu pa lupanda,',
      'Asende-le ubu-bi bwandi.'
    ],
    englishVerses: [
      [
        'There was One who was willing to die in my stead,',
        'That a soul so unworthy might live;',
        'And the path to the cross He was willing to tread,',
        'All the sins of my life to forgive.'
      ],
      [
        'He is tender and loving and patient with me, While He cleanses my heart of its dross;',
        'But “there’s no condemnation”—I know I am free, For my sins are all nailed to the cross.'
      ],
      [
        'I will cling to my Savior and never depart—I will joyfully journey each day,',
        'With a song on my lips and a song in my heart, That my sins have been taken away.'
      ]
    ],
    englishChorus: [
      'They are nailed to the cross, they are nailed to the cross,',
      'O how much He was willing to bear!',
      'With what anguish and loss, Jesus went to the cross!',
      'But He carried my sins with Him there.'
    ]
  },
  {
    id: 'hymn-298',
    number: 298,
    title: 'Te Fya Ine, Fya Imwe',
    writer: 'Theodore Monod / James McGranahan',
    englishTune: 'None of Self and All of Thee',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Mupashi wa Mushilo no Kuipeela',
    key: 'C Major',
    timeSignature: '3/4',
    scripture: 'Yohane 3:30 · Abagalatia 2:20 · Abena Filipi 3:7-8',
    isSample: false,
    melodicPreview: [64, 65, 67, 67, 67, 65, 64, 62, 60],
    verses: [
      [
        'Kuilumbanya mu cabi-pa kwali muli ine,',
        'Nalemwasuka Yesu a-ti, awe fyonse fyandi,',
        'Fyonse fi awe fyandi; Tapali fintu fyobe;',
        'Efyo mwaswike Ye-su, Te fyobe fyonse fyandi.'
      ],
      [
        "Alinsangile 'ne Ye-su Namumwene pa muti.",
        "Mutima wandi wati-le, Awe 'fi fyonse fyobe;",
        'Watile umutima, Watile umutima;',
        "Mutima wandi wati-le, Awe 'fi fyonse fyobe."
      ],
      [
        'Luse lwakwe lulapo-sha, No kutwafwa nshiku pe,',
        "Lulenenga kuti na-nde, 'Ne ncepe Yesu akule;",
        'Kanjitwale fye panshi; Yesu abe pa mulu,',
        'Lulenenga kuti na-nde, Yesu abe pa mulu.'
      ],
      [
        'Uluse ulwa kwa Ye-su, Lwacila myulu yonse,',
        'Luse lobe nalunga-fwa, Takuli cili candi;',
        'Takuli cili candi, Nomba fyonse fye fyobe',
        'Luse lobe nalunga-fwa. Fyonse i-fyandi fyobe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O the bitter shame and sorrow, That a time could ever be,',
        'When I let the Savior’s pity Plead in vain, and proudly answered: “All of self, and none of Thee!”',
        'All of self, and none of Thee, All of self, and none of Thee,',
        'When I proudly said to Jesus: “All of self, and none of Thee!”'
      ],
      [
        'Yet He found me; I beheld Him Bleeding on the accursèd tree,',
        'Heard Him pray, “Forgive them, Father!” And my wistful heart said faintly: “Some of self, and some of Thee!”',
        'Some of self, and some of Thee, Some of self, and some of Thee,',
        'And my wistful heart said faintly: “Some of self, and some of Thee!”'
      ],
      [
        'Day by day His tender mercy, Healing, helping, full and free,',
        'Sweet and strong, and, ah! so patient, Brought me lower, while I whispered: “Less of self, and more of Thee!”',
        'Less of self, and more of Thee, Less of self, and more of Thee,',
        'Brought me lower, while I whispered: “Less of self, and more of Thee!”'
      ],
      [
        'Higher than the highest heaven, Deeper than the deepest sea,',
        'Lord, Thy love at last hath conquered; Grant me now my supplication—None of self, and all of Thee!',
        'None of self, and all of Thee, None of self, and all of Thee,',
        'Lord, Thy love at last hath conquered: None of self, and all of Thee!'
      ]
    ]
  },
  {
    id: 'hymn-299',
    number: 299,
    title: 'Lyonse Uwa Kusekela',
    writer: 'Fanny Crosby / Robert Lowry',
    englishTune: 'Always Cheerful',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Kukoselesha',
    key: 'E Major',
    timeSignature: '4/4',
    scripture: 'Abena Filipi 4:4 · Amapinda 17:22 · Esaya 41:10',
    isSample: false,
    melodicPreview: [68, 68, 68, 66, 68, 69, 68, 66, 64],
    verses: [
      [
        'Mitima iseke-lele,',
        'Te kula-i-Iishanya,',
        'Ilyo Lesa atulenga',
        'Ukuba bantu bakwe.'
      ],
      [
        'Atusunga mu ma-boko,',
        'Bubi ta-bwa-ka cimfye,',
        'Alitulaya ku-twafwa,',
        'E bulayo bwa cine.'
      ],
      [
        'Ilyo twafilwa ku-bomba,',
        'Tulomfwa u-bukali,',
        'Icinshingwa catu-fimba,',
        'Twafilwa kwimba lwimbo.'
      ],
      [
        'Basuma bali ne nsansa,',
        'Mu nshita ya-lungama,',
        'Tumfwe fya cine tu-konke,',
        'Tuleke bubi bwesu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tuleseke-Iela Iyonse.',
      'Ulubu-to lwaisa,',
      'Tulesekelela mu milimo,',
      'Lyonse, Twakulasekelela'
    ],
    englishVerses: [
      [
        'Let our hearts be always cheerful;',
        'Why should murm’ring enter there,',
        'When our kind and loving Father',
        'Makes us children of His care?'
      ],
      [
        'With His gentle hand to lead us,',
        'Should the pow’rs of sin assail,',
        'He has promised grace to help us;',
        'Never can His promise fail.'
      ],
      [
        'When we turn aside from duty,',
        'Comes the pain of doing wrong;',
        'And a shadow, creeping o’er us,',
        'Checks the rapture of our song.'
      ],
      [
        'Oh! the good are always happy,',
        'And their path is ever bright;',
        'Let us heed the blessed counsel,',
        'Shun the wrong and love the right.'
      ]
    ],
    englishChorus: [
      'Always cheerful, always cheerful,',
      'Sunshine all around we see;',
      'Full of beauty is the path of duty,',
      'Cheerful we may always be.'
    ]
  },
  {
    id: 'hymn-300',
    number: 300,
    title: 'Bacula Bakatusha',
    writer: 'Samuel Y. Harmer / John W. Dadmun',
    englishTune: 'Rest for the Weary',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Yohane 14:2-3 · Ukusokolola 21:4 · AbaHebere 4:9',
    isSample: false,
    melodicPreview: [64, 65, 67, 67, 69, 67, 64, 62, 60],
    verses: [
      [
        'Umushi wa mwina Kristu,',
        'Waba mu-Mpanga ilya,',
        'Mupusushi atangila,',
        'Kuyanteyani-shi-, sha.'
      ],
      [
        "Alenteyanishe ng'anda,",
        'Ikeka-la pe nape;',
        'Nkekala kulya pe nape.',
        'Mu mpanga ya mu-ishi-, lo'
      ],
      [
        'Kulwala no kukalipwa,',
        'Takwaka-tale kuba,',
        'Icikonko no bulanda,',
        'Tafyakasangwe-, ku-, lya.'
      ],
      [
        'lmfwa tayakasangwemo,',
        'No lubo-la lwa iko,',
        'Imbeni no kusekela,',
        'Imbeni nomba-, bwacha'
      ],
      [
        'Imbeni mwe mpyani shakwe,',
        "No bwansho 'lyo muleya,",
        'Fipata fya mu Zioni,',
        'Fili no kumwi-, swi-, lwa.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Bacula ba-katusha. Bacula ba-katusha;',
      'Kulya kwi-shi-lya ilya Yordani, Kulya;',
      'Bacula ba-katusha, Bacula ba-katusha,',
      'Bakalalya mwi-bala lya Edeni, Mulya'
    ],
    englishVerses: [
      [
        'In the Christian’s home in glory,',
        'There remains a land of rest;',
        'And my Savior’s gone before me',
        'To fulfill my soul’s request.'
      ],
      [
        'He is fitting up my mansion,',
        'Which eternally shall stand,',
        'For my stay shall not be transient',
        'In that holy, happy land.'
      ],
      [
        'Pain or sickness ne’er shall enter,',
        'Grief nor woe my lot shall share;',
        'But in that celestial center,',
        'I a crown of life shall wear.'
      ],
      [
        'Death itself shall then be vanquished,',
        'And its sting shall be withdrawn;',
        'Shout for gladness, O ye ransomed!',
        'Hail with joy the rising morn.'
      ],
      [
        'Sing, O sing, ye heirs of glory,',
        'Shout your triumph as you go;',
        'Zion’s gates will open for you,',
        'You shall find an entrance through.'
      ]
    ],
    englishChorus: [
      'There is rest for the weary, There is rest for the weary,',
      'On the other side of Jordan, There is rest for you;',
      'There is rest for the weary, There is rest for the weary,',
      'In the sweet fields of Eden, There is rest for you.'
    ]
  },
  {
    id: 'hymn-301',
    number: 301,
    title: 'Munyina Sumina',
    writer: 'Uriah Smith / Isaac B. Woodbury',
    englishTune: 'O Brother Be Faithful',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 2:10 · Mateo 25:21 · Ukusokolola 22:12',
    isSample: false,
    melodicPreview: [62, 71, 71, 71, 74, 71, 69, 67, 69],
    verses: [
      [
        'Munyina sumina Yeswa laisa,',
        'Untu twalolela nga nshi,',
        'Twalaba mumusumbo wa lulumbi,',
        'Nokwimbo Iwimbo lwa Bwansho,',
        'Munyina cinshi twingakaninoku-sumina uwatutemwa,',
        'Uwatulango kutemwo kwa cine,',
        'Uwa tulubwile ifwe.'
      ],
      [
        'Kwalibo musumbo wacindamisha,',
        'Uwabasuma bapalwa,',
        'Ulebalolela kubasengela,',
        'nokusanga ubutusho,',
        'Kanshi we munyina fye cetekela,',
        'tacabule nshite ntali,',
        'Ukwikala mu mfifi nokucula,',
        'bwalaca fye nomba line.'
      ],
      [
        'Sumina munyina nomba laisa,',
        'Kabumba Mfumwi ya maka,',
        'Kwisa neminshipendwa yabangeli,',
        'mu maka yakwa ya bwansho,',
        'Munyina walaumfwe shiwi lyakwe,',
        'ilyo akasoka kati;',
        '"Wacita bwino we musha musuma,',
        'ba mubuseko bwa Mfumu."'
      ],
      [
        'Munyina teti umfwikishe lelo,',
        'Kano fye mu muyayaya,',
        'Ilyo kamone cinso cakwa Yesu,',
        'elyo kafwikwe citebo,',
        'Munyina sumino bulayo bwakwe,',
        'bulelolela bacine,',
        'Bakapyana pamo nabalubulwa,',
        'no kwikala na Yesu pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'O brother, be faithful! soon Jesus will come,',
        'For whom we have waited so long;',
        'O, soon we shall enter our glorious home,',
        'And join in the conqueror’s song.',
        'O brother, be faithful! for why should we prove Unfaithful to Him who hath shown',
        'Such deep, such unbounded and infinite love—',
        'Who died to redeem us His own.'
      ],
      [
        'O brother, be faithful! the city of gold,',
        'Prepared for the good and the blest,',
        'Is waiting its portals of pearl to unfold,',
        'And welcome thee into thy rest.',
        'Then, brother, prove faithful! not long shall we stay',
        'In weariness here, and forlorn,',
        'Time’s dark night of sorrow is wearing away,',
        'We haste to the glorious morn.'
      ],
      [
        'O brother, be faithful! He soon will descend,',
        'Creation’s omnipotent King,',
        'While legions of angels His chariot attend,',
        'And palm-wreaths of victory bring.',
        'O brother, be faithful! and soon shalt thou hear',
        'Thy Savior pronounce the glad word,',
        '“Well done, faithful servant; thy title is clear',
        'To enter the joy of thy Lord.”'
      ],
      [
        'O brother, be faithful! eternity’s years',
        'Shall tell for thy faithfulness now,',
        'When bright smiles of gladness shall scatter thy tears,',
        'And a coronet gleam on thy brow.',
        'O brother, be faithful! the promise is sure,',
        'That waits for the faithful and tried;',
        'To reign with the ransomed, immortal and pure,',
        'And ever with Jesus abide.'
      ]
    ]
  },
  {
    id: 'hymn-302',
    number: 302,
    title: 'Tuli Bana Ba Mfumu',
    writer: 'Lucy J. Rider Meyer',
    englishTune: 'We Are Children of a King',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Abena Roma 8:16-17 · Ukusokolola 21:23 · Esaya 35:10',
    isSample: false,
    melodicPreview: [67, 67, 69, 71, 71, 69, 67, 69, 67],
    verses: [
      [
        'Tuli bana ba Mfumu, ba Mfumu, ba Mfumu,',
        'Tuli bana ba Mfumu, tuleimba nomba;',
        'Tulekonka Yesu pe, nomba tatuletina,',
        'Tulekonka mupepi, tuleimba pe pe'
      ],
      [
        'Tule-enda kumwesu, kumwesu, kumwesu,',
        'Tule-enda kumwesu, tuleimba nomba;',
        "Ku ng'anda yakwa Tala, mfifi takuli kulya,",
        "Yes' elubuto kulya, tuleimba pe pe."
      ],
      [
        'Sekela tule-enda, kumwesu, kumulu,',
        'Sekela tule-enda, tuleimba nomba;',
        'Tuleimba nshiku pe, bakosa baleimba,',
        'Palwendo tuleimba, tuleimba pe pe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'We are children of a King, Heav’nly King, Heav’nly King,',
        'We are children of a King, Singing as we journey;',
        'Jesus Christ, our guard and guide, Bids us, nothing terrified,',
        'Follow closely at His side, Singing as we journey.'
      ],
      [
        'We are trav’ling to our home, Blessed home, Blessed home,',
        'We are trav’ling to our home, Singing as we journey;',
        'Tow’rd a city out of sight, Where will fall no shade of night,',
        'For our Savior is its light, Singing as we journey.'
      ],
      [
        'Full of joy we onward go, Heav’nward go, Heav’nward go,',
        'Full of joy we onward go, Singing as we journey;',
        'Singing all the journey thro’—Singing hearts are brave and true—',
        'Singing till our home we view, Singing as we journey.'
      ]
    ]
  },
  {
    id: 'hymn-303',
    number: 303,
    title: 'Ukukuta Kuleumfwikwa Konse',
    writer: 'Charles H. Gabriel',
    englishTune: 'Send the Light',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Mateo 28:19-20 · Imilimo 16:9 · Mateo 5:14-16',
    isSample: false,
    melodicPreview: [60, 68, 70, 72, 72, 72, 70, 68, 65],
    verses: [
      [
        'Ukukuta kuleumfwikwa konse,',
        '"Tupeni ulubuto."',
        'Bantu balelila lupusukilo,',
        'Bapeni ulubuto.'
      ],
      [
        'Twabomfwa baleita konse konse,',
        '"Tupeni ulubuto."',
        'Twaleto bupe bwesu no buseko,',
        'Bapeni ulubuto'
      ],
      [
        'Cikuku ca Yesu cibakumane,',
        'Bapeni ulubuto.',
        'Tuleba no mupashi wakwa Yesu,',
        'Bapeni ulubuto.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Tumeni ilandwe lyabuta,',
      'Libutishishe konse,',
      'Tumeni ilandwe lyabuta,',
      'Libutishishe konse.'
    ],
    englishVerses: [
      [
        'There’s a call comes ringing o’er the restless wave,',
        '“Send the light! Send the light!”',
        'There are souls to rescue, there are souls to save,',
        'Send the light! Send the light!'
      ],
      [
        'We have heard the Macedonian call today,',
        '“Send the light! Send the light!”',
        'And a golden off’ring at the cross we lay,',
        'Send the light! Send the light!'
      ],
      [
        'Let us pray that grace may everywhere abound,',
        'Send the light! Send the light!',
        'And a Christlike spirit everywhere be found,',
        'Send the light! Send the light!'
      ]
    ],
    englishChorus: [
      'Send the light, the blessed gospel light;',
      'Let it shine from shore to shore!',
      'Send the light, the blessed gospel light;',
      'Let it shine forevermore!'
    ]
  },
  {
    id: 'hymn-304',
    number: 304,
    title: 'Lintu Wasakamikwa',
    writer: 'Johnson Oatman, Jr. / Edwin O. Excell',
    englishTune: 'Count Your Blessings',
    category: 'thanksgiving',
    categoryBemba: 'Ukutootela',
    key: 'D Major',
    timeSignature: '2/4',
    scripture: 'Amalumbo 103:2 · Abena Efese 5:20 · 1 Abena Tesalonika 5:18',
    isSample: false,
    melodicPreview: [69, 74, 74, 74, 74, 76, 78, 74],
    verses: [
      [
        'Lintu wasakamikwa na macusho,',
        'Lintu wanashiwa mulwendo lobe,',
        'Penda mapalo yobe limo limo,',
        'Fikakupapishe fyacite Mfumu.'
      ],
      [
        'Bushe wanashiwa we ne cisendo?',
        'Bushe naufininwa no lupanda,',
        'Penda mapalo yobe limo limo,',
        'Elyo ukembo mwaye nshiku shonse.'
      ],
      [
        "Lint'wa mona 'bukankala bwa bambi,",
        'Tontonkanye fyuma fyobe ku mulu,',
        'Na mapalo yobe ya shinga shitwa,',
        'Namalipilo yobe yaku mulu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Penda mapalo limo limo',
      'Yantu Lesa akucitila;',
      'Penda mapalo limo limo',
      'Umone ci kakucitile Lesa.'
    ],
    englishVerses: [
      [
        'When upon life’s billows you are tempest-tossed,',
        'When you are discouraged, thinking all is lost,',
        'Count your many blessings, name them one by one,',
        'And it will surprise you what the Lord hath done.'
      ],
      [
        'Are you ever burdened with a load of care?',
        'Does the cross seem heavy you are called to bear?',
        'Count your many blessings, every doubt will fly,',
        'And you will keep singing as the days go by.'
      ],
      [
        'When you look at others with their lands and gold,',
        'Think that Christ has promised you His wealth untold;',
        'Count your many blessings—money cannot buy',
        'Your reward in heaven, nor your home on high.'
      ]
    ],
    englishChorus: [
      'Count your blessings, name them one by one;',
      'Count your blessings, see what God hath done;',
      'Count your blessings, name them one by one;',
      'Count your many blessings, see what God hath done.'
    ]
  },
  {
    id: 'hymn-305',
    number: 305,
    title: 'Bushe Ndi Mushilikale?',
    writer: 'Isaac Watts / Ira D. Sankey',
    englishTune: 'A Soldier of the Cross',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'D Major',
    timeSignature: '4/4',
    scripture: '2 Timote 2:3 · 1 Timote 6:12 · Abena Efese 6:10-13',
    isSample: false,
    melodicPreview: [62, 66, 69, 74, 73, 71, 69, 66, 62],
    verses: [
      [
        'Bushe ndi mushilikale, Kakonka wa Mpanga?',
        'Bushe nkatina munshila no kuba ne nsoni?'
      ],
      [
        'Bushe nje mumulu mulya, Mushili macusho,',
        'Ilyo bambi balecula mu fimana monse'
      ],
      [
        'Bushe balwani balipo? Bushe nkalwe nabo?',
        'Bushe calo ni cibusa cinsukile m‘mulu'
      ],
      [
        'Kulwa kwandi kwiba kwa fye, Unkoseshe Mfumu,',
        'Nkashipikisha macusho mu mashiwi yenu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ishina, ilya wama, Wene amfwilile,',
      'Mucikuku nkapokela icitebo candi.'
    ],
    englishVerses: [
      [
        'Am I a soldier of the cross, A foll’wer of the Lamb,',
        'And shall I fear to own His cause, Or blush to speak His name?'
      ],
      [
        'Must I be carried to the skies On flow’ry beds of ease,',
        'While others fought to win the prize, And sailed thro’ bloody seas?'
      ],
      [
        'Are there no foes for me to face? Must I not stem the flood?',
        'Is this vile world a friend to grace, To help me on to God?'
      ],
      [
        'Sure I must fight if I would reign; Increase my courage, Lord;',
        'I’ll bear the toil, endure the pain, Supported by Thy word.'
      ]
    ],
    englishChorus: [
      'In the name of Christ the King, Who hath purchased life for me,',
      'Thro’ grace I’ll win the promised crown, Whate’er my cross may be.'
    ]
  },
  {
    id: 'hymn-306',
    number: 306,
    title: 'Sekeleni',
    writer: 'Daniel W. Whittle / James McGranahan',
    englishTune: 'If God Be for Us',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Kukoselesha',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Abena Roma 8:31 · Abena Filipi 4:4 · Yohane 10:28-29',
    isSample: false,
    melodicPreview: [62, 67, 67, 67, 71, 69, 67, 69, 71],
    verses: [
      [
        'Sekeleni mu cikuku cakwe co,',
        'Pantu aletukakula,',
        'No umulopa cinshi tuletina,',
        'Pantu Yesu ni wesu ‘fwe.'
      ],
      [
        'Kosa mu Mfumu pantu e wamaka;',
        "'Kala wakumfwile shiwi,",
        'Namumacusho kosesha mu cine,',
        'Nokwikalililamo pe.'
      ],
      [
        'Kosa kwishiwi lyamalayo yakwe,',
        'Aya cine muli Kristu,',
        'Wacine ici casoswa kabili,',
        'Cine cine tayakapwe.'
      ],
      [
        "Kala mu Mfumu namaka yakwe 'yo,",
        'Muli mweo wakutapwa,',
        'Ukuponako mumaboko yakwe,',
        "Nshakafume kabili 'yo."
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      "Bushe nga Lesa ali na ifwe nga kuli nani akatuansha 'fwe,",
      'Na, ni, Ko? ... Nani akatuansha ifwe.'
    ],
    englishVerses: [
      [
        'Rejoice in the Lord! O let His mercy cheer,',
        'He sunders the bands that enthrall;',
        'Redeemed by His blood, why should we ever fear,',
        'Since Jesus is our “all in all?”'
      ],
      [
        'Be strong in the Lord! Rejoicing in His might,',
        'Be loyal and true day by day;',
        'When evils assail, be valiant for the right,',
        'And He will be our strength, our stay.'
      ],
      [
        'Confide in His Word, His promises so sure;',
        'In Christ they are “yea, and amen”;',
        'Tho’ earth pass away, they ever shall endure,',
        '’Tis written o’er and o’er again.'
      ],
      [
        'Abide in the Lord, secure in His control,',
        '’Tis life everlasting begun;',
        'To pluck from His hand the weakest, trembling soul,',
        'It never, never can be done!'
      ]
    ],
    englishChorus: [
      '“If God be for us, if God be for us, If God be for us, who can be against us,',
      'Who, who, who? Who can be against us, against us?”'
    ]
  },
  {
    id: 'hymn-307',
    number: 307,
    title: 'Abantu Bakwa Yesu',
    writer: 'Traditional / Klistu Mu Nyimbo',
    englishTune: 'He Is Coming Soon',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 22:20 · 1 Abena Tesalonika 4:16-17 · Abena Filipi 4:4',
    isSample: false,
    melodicPreview: [65, 65, 65, 63, 62, 65, 70, 72, 74],
    verses: [
      [
        'Abantu bakwa Yesu balesekela nomba;',
        'Abantu bakwa Yesu balesekela nomba;',
        'Yesu Mfumu yabo alebwela ku calo,',
        'Aleisa bwangu.'
      ],
      [
        'Abantu bakwa yesu balepembela nomba;',
        'Abantu bakwa Yesu balepembela nomba;',
        'Katula alebapela mweo pe na pe,',
        'Aleisa bwangu.'
      ],
      [
        'Mweo wa Yesu eka wawamisha ifwe;',
        'Mweo wa Yesu eka wawamisha ifwe;',
        'Nomba ali no kusenda abantu bakwe,',
        'Aleisa bwangu.'
      ],
      [
        'Abantu bakwa Yesu tabati-na iyo;',
        'Abantu bakwa Yesu tabati-na iyo;',
        'Lintu Yesu akabwela fyonse fikapwa;',
        'Aleisa bwangu.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Ululumbi Aleluya, Ululumbi Aleluya;',
      'Ululumbi Aleluya, Aleisa bwangu.'
    ],
    englishVerses: [
      [
        'The people of the Lord are rejoicing today;',
        'The people of the Lord are rejoicing today;',
        'Jesus their King is returning to earth again,',
        'He is coming soon.'
      ],
      [
        'The people of the Lord are now watching and waiting;',
        'The people of the Lord are now watching and waiting;',
        'The Redeemer gives them life eternal forever,',
        'He is coming soon.'
      ],
      [
        'The life of Jesus only hath made us righteous;',
        'The life of Jesus only hath made us righteous;',
        'Now He is coming to gather His own people,',
        'He is coming soon.'
      ],
      [
        'The people of the Lord are not afraid at all;',
        'The people of the Lord are not afraid at all;',
        'When Jesus comes again every sorrow shall end;',
        'He is coming soon.'
      ]
    ],
    englishChorus: [
      'Glory, hallelujah! Glory, hallelujah!',
      'Glory, hallelujah! He is coming soon.'
    ]
  },
  {
    id: 'hymn-308',
    number: 308,
    title: "Yesu Mfumu Umfwa Kuli 'Ne",
    writer: 'Mary Lundie Duncan / Charlotte A. Barnard',
    englishTune: 'Bless Thy Little Lamb Tonight',
    category: 'children-and-family',
    categoryBemba: 'Abana no Lupwa',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 4:8 · Amapinda 3:24 · Yohane 10:11',
    isSample: false,
    melodicPreview: [67, 67, 71, 69, 67, 66, 64, 62],
    verses: [
      [
        "Yesu Mfumu umfwa kuli 'ne,",
        'Upale mwana obe;',
        "Mu Mfufi 'kala mupepi,",
        'Ukufiko lucelo.'
      ],
      [
        'Kasuba naunondola,',
        "Nedkutasha kuli 'ci",
        'Wampele ifintu fyonse,',
        'Ufwa ipepo lyandi.'
      ],
      [
        'Welele fyabipa fyandi,',
        "'Pale banandi bonse;",
        "Ukesa senda 'fwe bonse,",
        'Ku kwikala na iwe.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Jesus, tender Shepherd, hear me,',
        'Bless Thy little lamb tonight;',
        'Through the darkness be Thou near me,',
        'Watch my sleep till morning light.'
      ],
      [
        'All this day Thy hand has led me,',
        'And I thank Thee for Thy care;',
        'Thou hast clothed me, warmed and fed me,',
        'Listen to my evening prayer.'
      ],
      [
        'Let my sins be all forgiven;',
        'Bless the friends I love so well;',
        'Take me, when I die, to heaven,',
        'Happy there with Thee to dwell.'
      ]
    ]
  },
  {
    id: 'hymn-309',
    number: 309,
    title: 'Yesu Wesu Afyelwe',
    writer: 'Traditional / Klistu Mu Nyimbo',
    englishTune: 'The Birth of Jesus',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Luka 2:7 · Mateo 1:21 · Luka 2:11-12',
    isSample: false,
    melodicPreview: [65, 67, 69, 69, 67, 65, 62, 65],
    verses: [
      [
        'Yesu wesu afyelwe,',
        'Mu Betelemu;',
        'Asendeme mu fyani,',
        'Fya mu mukondo'
      ],
      [
        'O, Yesu uleshiba,',
        'Ifinti kuno;',
        'Washo bufumu bobe,',
        "Kututula 'fwe."
      ],
      [
        'O, Cibusa ca bana,',
        'Ndetota Iwe;',
        'Pantu washile kale,',
        "Ing'anda iyobe."
      ],
      [
        'Ndemukabila Yesu,',
        'Ukwafwa ine;',
        'Ndemukonke nshiku pe,',
        'Ndemunakila.'
      ],
      [
        'Ndepalamina Iwe,',
        'Cibusa wandi;',
        'Ndetemwa ukuleka,',
        'Fyabipa fyandi.'
      ]
    ],
    chorus: null,
    englishVerses: [
      [
        'Our dear Jesus was born,',
        'In Bethlehem town;',
        'Laying sweetly in the hay,',
        'In a manger low.'
      ],
      [
        'O, Lord Jesus, Thou knowest',
        'What befalls us here;',
        'Thou didst leave Thy royal throne',
        'To deliver us.'
      ],
      [
        'O, Thou Friend of the children,',
        'I give thanks to Thee;',
        'For Thou leftest long ago',
        'Thine own home above.'
      ],
      [
        'I have need of Thee, Jesus,',
        'To be helping me;',
        'I will follow all my days,',
        'And obey Thy word.'
      ],
      [
        'I am drawing near to Thee,',
        'Dearest Friend of mine;',
        'Gladly will I put away',
        'All my sinful ways.'
      ]
    ]
  },
  {
    id: 'hymn-310',
    number: 310,
    title: 'Napusuka',
    writer: 'Traditional / Klistu Mu Nyimbo',
    englishTune: 'I Am Saved',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Esaya 12:2 · Abena Efese 2:8 · Ukusokolola 19:16',
    isSample: false,
    melodicPreview: [67, 69, 71, 71, 69, 67, 64, 67],
    verses: [
      [
        "Napusuka 'ne mu fibi,",
        'Napusuka kuma lwele;',
        'Naingila mu lubuto,',
        'Nausanga umutende'
      ],
      [
        'Mabimbi mu calo yafula,',
        'lelo kwimba kuleumfwika;',
        'Kutemwa kobe we Mfumu,',
        'Kwapususha calo conse.'
      ],
      [
        'Bapusuka basekela,',
        'Muli Mfumu ya shamfumu;',
        'Abapusuka baleimba,',
        'Matotelo kulumbanya.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Napusuka, Ndeimbila,',
      'Nshita shonse, Kwa pe na pe',
      'Bapusuka, Baimbila,',
      'Nshita shonse, Kristu Mfumu.'
    ],
    englishVerses: [
      [
        'I am saved from all my sins,',
        'I am saved from dark despair;',
        'I have entered into light,',
        'And have found a lasting peace.'
      ],
      [
        'Troubled waves abound on earth,',
        'Yet a joyful song is heard;',
        'Thy great love, O Lord our King,',
        'Bringeth grace to all the world.'
      ],
      [
        'All the ransomed now rejoice,',
        'In the mighty King of kings;',
        'All the saved ones lift their song,',
        'Songs of thankfulness and praise.'
      ]
    ],
    englishChorus: [
      'I am saved, and I will sing,',
      'Evermore, through endless days;',
      'All the saved ones sing of Thee,',
      'Evermore, O Christ the King.'
    ]
  },
  {
    id: 'hymn-311',
    number: 311,
    title: 'Nshita Yapwa',
    writer: 'George W. Sederquist',
    englishTune: '’Tis Almost Time for the Lord to Come',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu no Muulu',
    key: 'Db Major',
    timeSignature: '4/4',
    scripture: 'Luka 21:25-28 · Mateo 22:9-10 · Abena Roma 13:11-12',
    isSample: false,
    melodicPreview: [65, 65, 65, 66, 65, 63, 61, 65],
    verses: [
      [
        'Nshita yapwa Mfumu yalaisa,',
        'Ndeumfwa bantu baleti;',
        'Ntanda ku mulu nasho shashima,',
        "Ubushiku bulu 'pepi no kuca."
      ],
      [
        'Filangililo, mweshi, kasuba;',
        'Mu calo namu lwelele,',
        'Mashiwi yafiko yatusoka;',
        'Filetwebe Mfumu ili mupepi.'
      ],
      [
        "Iy'e nshita yacilonganino,",
        'Icilelolela Yesu;',
        'Cifume ku misango yabipa,',
        'Citeyanishishe ku kwisa kwakwe.'
      ],
      [
        'Kabiyeni bonse mu tushila,',
        'Pamofye na mu misebo;',
        'Mubalete bonse nefilema;',
        'Baiteyanishisho kwisa kwakwe.'
      ]
    ],
    chorusLabel: 'Chibwekesho:',
    chorus: [
      'Bu-shiku bwandi nomba bwalaca,',
      'Bu-shiku bwandi nomba bwalaca-,',
      'Inshita naipwa Mfumu yalaisa;',
      "Teyanishisheni 'kwisa kwakwe."
    ],
    englishVerses: [
      [
        '’Tis almost time for the Lord to come,',
        'I hear the people say;',
        'The stars of heaven are growing dim,',
        'It must be the breaking of the day.'
      ],
      [
        'The signs foretold in the sun and moon,',
        'In earth and sea and sky,',
        'Aloud proclaim to all mankind,',
        'The coming of the Master draweth nigh.'
      ],
      [
        'It must be time for the waiting church',
        'To cast her pride away,',
        'With girded loins and burning lamps,',
        'To look for the breaking of the day.'
      ],
      [
        'Go quickly out in the streets and lanes,',
        'And in the broad highway,',
        'And call the maimed, the halt, and blind,',
        'To be ready for the breaking of the day.'
      ]
    ],
    englishChorus: [
      'O it must be the breaking of the day!',
      'O it must be the breaking of the day!',
      'The night is almost gone, the day is coming on;',
      'O it must be the breaking of the day!'
    ]
  }
];

export interface CategoryItem {
  id: string;
  number: number;
  name: string;
  bemba: string;
}

export const CATEGORIES_LIST: CategoryItem[] = [
  { id: 'praise-and-worship', number: 1, name: 'Praise and Worship', bemba: 'Ukupepa no Kulumbanya' },
  { id: 'prayer', number: 2, name: 'Prayer', bemba: 'Ipepo' },
  { id: 'thanksgiving', number: 3, name: 'Thanksgiving', bemba: 'Ukutootela' },
  { id: 'jesus-christ-and-salvation', number: 4, name: 'Jesus Christ and Salvation', bemba: 'Yesu Kristu no Lupulumuko' },
  { id: 'faith-and-trust', number: 5, name: 'Faith and Trust', bemba: 'Ukusubila no Mutende' },
  { id: 'hope-and-encouragement', number: 6, name: 'Hope and Encouragement', bemba: 'Isubilo no Kukoselesha' },
  { id: 'sabbath-and-creation', number: 7, name: 'Sabbath and Creation', bemba: 'Isabata no Bubumbo' },
  { id: 'repentance-and-forgiveness', number: 8, name: 'Repentance and Forgiveness', bemba: 'Ukulapila no Kwelelwa' },
  { id: 'holy-spirit-and-consecration', number: 9, name: 'Holy Spirit and Consecration', bemba: 'Mupashi wa Mushilo no Kuipeela' },
  { id: 'second-coming-and-heaven', number: 10, name: 'Second Coming and Heaven', bemba: 'Ubwishilo bwa kwa Kristu no Muulu' },
  { id: 'communion-and-baptism', number: 11, name: 'Communion and Baptism', bemba: 'Icakulya ca Mfumu no Lubatisho' },
  { id: 'children-and-family', number: 12, name: 'Children and Family', bemba: 'Abana no Lupwa' },
  { id: 'weddings-and-family-life', number: 13, name: 'Weddings and Family Life', bemba: 'Uwinga no Mweo wa Lupwa' },
  { id: 'comfort-grief-and-funerals', number: 14, name: 'Comfort, Grief and Funerals', bemba: 'Ukusansamusha ne Mfwa' },
  { id: 'mission-and-evangelism', number: 15, name: 'Mission and Evangelism', bemba: 'Mulimo wa Mbila Nsuma' },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Hymns', bemba: 'Inyimbo Shonse' },
  ...CATEGORIES_LIST.map((c) => ({
    id: c.id,
    label: `${c.number}. ${c.name}`,
    bemba: c.bemba,
  })),
];

export interface WorshipProgramItem {
  id: string;
  order: string;
  label: string;
  bembaLabel: string;
  hymnNumber: number;
}

export const DEFAULT_SABBATH_PROGRAM: WorshipProgramItem[] = [
  {
    id: 'prog-1',
    order: '01',
    label: 'Opening Hymn of Praise',
    bembaLabel: 'Inyimbo ya Kwiswila',
    hymnNumber: 1
  },
  {
    id: 'prog-2',
    order: '02',
    label: 'Sabbath Welcome & Song',
    bembaLabel: 'Inyimbo ye Sabata',
    hymnNumber: 7
  },
  {
    id: 'prog-3',
    order: '03',
    label: 'Tithes & Offertory Reflection',
    bembaLabel: 'Inyimbo ya Milambu',
    hymnNumber: 18
  },
  {
    id: 'prog-4',
    order: '04',
    label: 'Sermon Appeal & Commitment',
    bembaLabel: 'Inyimbo ya Kwitabilamo',
    hymnNumber: 104
  },
  {
    id: 'prog-5',
    order: '05',
    label: 'Closing & Benediction',
    bembaLabel: 'Inyimbo ya Kusondwelela',
    hymnNumber: 33
  }
];

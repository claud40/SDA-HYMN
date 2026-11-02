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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'second-coming',
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
    category: 'consecration',
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
    category: 'salvation',
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
    category: 'consecration',
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
    category: 'stewardship',
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
    category: 'love-of-god',
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
    category: 'children',
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
    category: 'love-of-god',
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
    category: 'warfare',
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
    category: 'warfare',
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
    category: 'warfare',
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
    id: 'hymn-33',
    number: 33,
    title: 'Kristu Aleisa na Kabili',
    writer: 'Wayne Hooper',
    englishTune: 'Sample Tune: We Have This Hope',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'Bb Major',
    timeSignature: '4/4',
    scripture: 'Tito 2:13 · Ukusokolola 1:7',
    isSample: true,
    melodicPreview: [70, 72, 74, 75, 77, 75, 74, 72, 70],
    verses: [
      [
        'Tukwete ili isubilo ililebengeshima,',
        'Ilyo Kristu Shikulu akabwela pe sonde;',
        'Amakumbi yakayasuka, inyimbo shikaumfwika,',
        'Bonse abafwa muli Wene bakabuuka.'
      ],
      [
        'Tulepemba ubushiku bwa lupulumuko,',
        'Apo ukufwa takwakabepo na kabili;',
        'Yesu akasangulula icalo conse cibe cipya,',
        'Bonse abamubombela bakekala nankwe.'
      ]
    ],
    chorus: [
      'Aleisa! Aleisa! Mfumu ya shamfumu!',
      'Mwe bana ba kwa Lesa, sungeni isubilo;',
      'Ndekana na bubi, palameni kuli Kristu,',
      'Pantu ubwishilo bwakwe buli mupepi!'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-49',
    number: 49,
    title: 'Mwe Mupashi wa Mushilo Iseni',
    writer: 'Edwin H. Stokes',
    englishTune: 'Sample Tune: Hover O’er Me, Holy Spirit',
    category: 'holy-spirit-and-consecration',
    categoryBemba: 'Mupashi wa Mushilo',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Yohane 14:16-17',
    isSample: true,
    melodicPreview: [67, 71, 74, 72, 71, 69, 67],
    verses: [
      [
        'Mwe Mupashi wa Mushilo, iseni mu mitima yesu,',
        'Lengekesheni ukulungama na kutemwa;',
        'Tufundeni ifya kwenda mu nshila ya cine,',
        'Ukuti Kristu emininwe muli ifwe.'
      ],
      [
        'Iteeni amaka ya peulu pali ifwe lelo,',
        'Mu calici cenu muno tulepemba;',
        'Sukuleni ifibi fyonse ifyabamo mu nda,',
        'Twishulemo ubusuma bwa kwa Wisi.'
      ]
    ],
    chorus: [
      'Mupashi wa Mushilo, tulikwisa kuli Imwe,',
      'Tupeeni amaka, tusalapukemo;',
      'Lengeleni Shikulu ukucindikwa,',
      'Mu mitima ne milimo yesu yonse.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-72',
    number: 72,
    title: 'Ni Cisuma Ku Mweo Wandi',
    writer: 'Horatio G. Spafford',
    englishTune: 'Sample Tune: It Is Well With My Soul',
    category: 'faith-and-trust',
    categoryBemba: 'Ukusubila no Mutende',
    key: 'C Major',
    timeSignature: '4/4',
    scripture: 'Esaya 26:3 · Amalumbo 46:1',
    isSample: true,
    melodicPreview: [60, 64, 67, 72, 71, 69, 67],
    verses: [
      [
        'Ilyo umutende uleelela ngo mumana,',
        'Nangu amacushi yabimbana nga mabimbi;',
        'Conse ico nasangamo, mwalimfunda ukutila:',
        'Ni cisuma, ni cisuma ku mweo wandi.'
      ],
      [
        'Nangu Satana eshe ukutwesha amasanso,',
        'Kristu alinsungila mu mutende wakwe;',
        'Alipooesele umulopa wakwe pa musalaba,',
        'Ukuti mbe uwacingililwa kuli Wene.'
      ],
      [
        'Ulubembu lwandi lwalipikwa pa musalaba,',
        'Talwaba pa mutwe wandi na kabili;',
        'Lelo lwalifutikwa kuli Mupulumusi,',
        'Tooteleni Shikulu mwe mweo wandi!'
      ]
    ],
    chorus: [
      'Ni cisuma... ku mweo wandi...',
      'Ni cisuma, ni cisuma ku mweo wandi.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-85',
    number: 85,
    title: 'Ulucelo Ulwa Nsansa mu Luchelo',
    writer: 'Reginald Heber',
    englishTune: 'Sample Tune: Holy, Holy, Holy, Lord God Almighty',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 5:3 · Ukusokolola 4:8',
    isSample: true,
    melodicPreview: [63, 63, 67, 67, 70, 70, 75],
    verses: [
      [
        'Mwa mushilo, mwa mushilo, Lesa wa bulashi,',
        'Ulucelo inyimbo shesu shileya kuli Imwe;',
        'Mwa mushilo, mwa mushilo, wa luse no bukata,',
        'Mulumbanyeni Lesa Ubwatatu bwa mushilo.'
      ],
      [
        'Mwa mushilo, mwa mushilo, abashila ba muulu,',
        'Balefukama pambele ya cipuna cenu;',
        'Malaika ne fipangilwe fyonse filebila:',
        'Imwe mwe balipo, abalipo, na bakabapo.'
      ]
    ],
    chorus: null
  },
  {
    id: 'hymn-104',
    number: 104,
    title: 'Mu Mushinge wa Mwali Yesu',
    writer: 'Edward Mote',
    englishTune: 'Sample Tune: The Solid Rock',
    category: 'jesus-christ-and-salvation',
    categoryBemba: 'Yesu Kristu no Lupulumuko',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: '1 Abena Korinte 10:4 · Mateo 7:24-25',
    isSample: true,
    melodicPreview: [67, 67, 67, 71, 74, 71, 67],
    verses: [
      [
        'Isubilo lyandi talyaiminina pa fintu fya fye,',
        'Lelo pa mulopa wa kwa Yesu no kulungama kwakwe;',
        'Nshingatwishika ishina lya Mfumu Yesu,',
        'Lelo ntetekela ishina lyakwe lyeka.'
      ],
      [
        'Ilyo ubushiku bwa mfifi bukwiteka,',
        'Ulusalo lwakwe luli e nchingililo yandi;',
        'Mu mfula iikalamba na mu cikuuku ca mwela,',
        'Isubilo lyandi lyakakilwa muli Wene.'
      ]
    ],
    chorus: [
      'Pali Kristu ilwala lyakosa ninaiminina,',
      'Imipepele imbi e musekeseke wa fye,',
      'Imipepele imbi e musekeseke wa fye.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-126',
    number: 126,
    title: 'Tuleya mu Kubila Imbila Nsuma',
    writer: 'Charles H. Gabriel',
    englishTune: 'Sample Tune: Send the Light',
    category: 'mission-and-evangelism',
    categoryBemba: 'Mulimo wa Mbila Nsuma',
    key: 'Ab Major',
    timeSignature: '4/4',
    scripture: 'Marko 16:15 · Mateo 28:19',
    isSample: true,
    melodicPreview: [68, 72, 75, 75, 75, 73, 72],
    verses: [
      [
        'Kuli umusowa uleumfwika ukufuma ku fyalo,',
        'Tumeni ulubuuto lwa kwa Kristu!',
        'Abantu abengi bali mu mfifi ya lubembu,',
        'Tumeni ulubuuto lwa kwa Kristu!'
      ],
      [
        'Twasambilishako abana na bakulu bonse,',
        'Pali ukutemwa kwa kwa Kalubula;',
        'Tumeni ulubuuto lulebengeshima amayanda,',
        'Mpaka bonse bateshe ishina lya kwa Yesu.'
      ]
    ],
    chorus: [
      'Tumeni ulubuuto! Ulubuuto lwa mbila nsuma!',
      'Lulebengeshima conse cifulo;',
      'Tumeni ulubuuto! Ulubuuto lwa kwa Kristu!',
      'Mpaka fyonse fipwe na Shikulu abwele!'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-145',
    number: 145,
    title: 'Mu Menshi ya Lubatisho',
    writer: 'Philip Doddridge',
    englishTune: 'Sample Tune: O Happy Day That Fixed My Choice',
    category: 'communion-and-baptism',
    categoryBemba: 'Icakulya ca Mfumu no Lubatisho',
    key: 'G Major',
    timeSignature: '3/4',
    scripture: 'Romambo 6:3-4 · Mateo 3:16',
    isSample: true,
    melodicPreview: [67, 69, 71, 72, 74, 72, 71, 69, 67],
    verses: [
      [
        'Lelo ninsala Shikulu Yesu ukuba Mfumu yandi,',
        'Nindekana na masambi ya kale yonse;',
        'Mu menshi ya lubatisho nindeingila ne nsansa,',
        'Ukubuuka muli Kristu mu mweo upya.'
      ],
      [
        'Nshikabwela inuma kuli fya pa calo,',
        'Pantu Kristu alintwala mu nshila yakwe;',
        'Mwe bamunyina iseni tusekelele pamo,',
        'Kuli Lesa uubwesha abana abalubile.'
      ]
    ],
    chorus: [
      'Bushiku bwa nsansa! Bushiku bwa nsansa!',
      'Ilyo Yesu asambile umutima wandi;',
      'Alimfundile ifya kupepa no kuteekanya,',
      'Bushiku bwa nsansa, bushiku bwa nsansa!'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-178',
    number: 178,
    title: 'Cungulo Ilyo Akasuba Kawila',
    writer: 'Henry F. Lyte',
    englishTune: 'Sample Tune: Abide With Me',
    category: 'comfort-grief-and-funerals',
    categoryBemba: 'Ukusansamusha ne Mfwa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Luka 24:29 · Amalumbo 91:1-2',
    isSample: true,
    melodicPreview: [67, 65, 63, 67, 70, 68, 67],
    verses: [
      [
        'Ikaleni na ifwe, ilyo imfifi yaisa,',
        'Akasuba kawa, ubushiku bwalapalamina;',
        'Pakubula bambi abangantangilila,',
        'Mwe Mututekeleshi, ikaleni na ine.'
      ],
      [
        'Inshiku sha pano isonde shilepita lubilo,',
        'Ubukata bwa fyonse bulepwa mu kashita;',
        'Kuli fyonse ifyapano nindolesha ukwaluka,',
        'Imwe mushaluka, ikaleni na ine.'
      ]
    ],
    chorus: null
  },
  {
    id: 'hymn-203',
    number: 203,
    title: 'Twapalama Ku Musalaba',
    writer: 'Fanny J. Crosby',
    englishTune: 'Sample Tune: Near the Cross',
    category: 'thanksgiving',
    categoryBemba: 'Ukutootela',
    key: 'F Major',
    timeSignature: '6/8',
    scripture: 'Abena Galatia 6:14 · 1 Abena Korinte 1:18',
    isSample: true,
    melodicPreview: [65, 69, 72, 70, 69, 67, 65],
    verses: [
      [
        'Kuli umusalaba kuntu Yesu afwilile,',
        'Kuntu umulopa wakwe wasuminine fwe;',
        'Apo e pacilila umutende no luse,',
        'Ukuti ifwe abalubile tupusushe.'
      ],
      [
        'Ku musalaba wandi nkatootela Shikulu,',
        'Pantu tapali cimbi icanjeba icisuma;',
        'Mweo wandi conse nkaupeela kuli Kristu,',
        'Ukuti abe e kalubula wandi wa muyayaya.'
      ]
    ],
    chorus: [
      'Ku musalaba, ku musalaba,',
      'Eko nkasangilamo ulubuuto;',
      'Mpaka umweo wandi ukasange ukutusha,',
      'Mu musumba wa kwa Lesa umupya.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-222',
    number: 222,
    title: 'Iseni Bonse Tusekelele mwi Sabata',
    writer: 'Robert Lowry',
    englishTune: 'Sample Tune: Don’t Forget the Sabbath',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata Lisuma',
    key: 'G Major',
    timeSignature: '4/4',
    scripture: 'Ukufuma 20:8-11',
    isSample: true,
    melodicPreview: [67, 71, 74, 76, 74, 71, 67],
    verses: [
      [
        'Mwilibila ubushiku bwa Sabata lya Mfumu,',
        'Ubo Lesa amulangile ukufuma pa kutendeka;',
        'Mulimo wa nshiku mutanda walipwa bwino,',
        'Lelo lelo twasenda ukutusha na Lesa.'
      ],
      [
        'Tukalumbanya Shikulu pamo na bana besu,',
        'Tubalange ifyo Lesa atemenwe icalo;',
        'Ilyo ilanga lilewila mu cungulo ca Cisano,',
        'Isabata lileingila na mapaalo ya pe.'
      ]
    ],
    chorus: [
      'Isabata lisuma, ilya kwa Lesa,',
      'Isubilo lyesu lyaba muli Kristu;',
      'Tulumbanye Ishina Lyakwe lyonse,',
      'Mwe bantu ba kwa Lesa sangaleni!'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-250',
    number: 250,
    title: 'Tukamonana pa Mulonga wa Mweo',
    writer: 'Robert Lowry',
    englishTune: 'Sample Tune: Shall We Gather at the River',
    category: 'second-coming-and-heaven',
    categoryBemba: 'Ubwishilo bwa kwa Kristu',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Ukusokolola 22:1-2',
    isSample: true,
    melodicPreview: [63, 67, 70, 72, 75, 72, 70, 67],
    verses: [
      [
        'Tukamonana bushe pa mulonga wa mweo,',
        'Uusuma uupita pambele ya cipuna ca Mfumu;',
        'Kuntu amalaika no mushilo baletotela,',
        'Ukwimba inyimbo sha lupulumuko.'
      ],
      [
        'Pa lulamba lwa mulonga ukusuma nga nshi,',
        'Tukalolesha icenjelelo ca kwa Kalubula;',
        'Ukusenda inkata ya mweo uushakapwe,',
        'Kukaba amaka ya pe kuli bonse abasubila.'
      ]
    ],
    chorus: [
      'Eeco tukamonana pa mulonga,',
      'Mulonga usuma, mulonga wa mweo;',
      'Tukalumbanya pamo na basangwa,',
      'Pambele ya cipuna ca kwa Lesa.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-300',
    number: 300,
    title: 'Tekanya Mweo Wandi, Shikulu Ali Nawe',
    writer: 'Katharina von Schlegel',
    englishTune: 'Sample Tune: Be Still, My Soul',
    category: 'hope-and-encouragement',
    categoryBemba: 'Isubilo no Kukoselesha',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Amalumbo 46:10 · Luka 8:24-25',
    isSample: true,
    melodicPreview: [69, 70, 72, 69, 67, 65, 64, 65],
    verses: [
      [
        'Tekanya mweo wandi, Shikulu ali nawe,',
        'Senda umusalaba mu mutende wa cine;',
        'Leka Lesa ateye ifya kuntanshi fyobe,',
        'Takuli iciwama ico akakulama naco.'
      ],
      [
        'Tekanya mweo wandi, cibusa wobe Yesu,',
        'Alaishiba amacushi yonse ayo ukwete;',
        'Nga filya atekanye amabimbi muli bemba,',
        'Akakutwala ku cishingo ca mutende.'
      ]
    ],
    chorus: null
  },
  {
    id: 'hymn-55',
    number: 55,
    title: 'Palameni Kuli Yesu Mwe Balubile',
    writer: 'Charlotte Elliott',
    englishTune: 'Sample Tune: Just As I Am',
    category: 'repentance-and-forgiveness',
    categoryBemba: 'Ukulapila no Kwelelwa',
    key: 'Eb Major',
    timeSignature: '3/4',
    scripture: 'Yohane 6:37 · Esaya 1:18',
    isSample: true,
    melodicPreview: [63, 67, 70, 68, 67, 65, 63],
    verses: [
      [
        'Efyo naba, nshikwete ca kulanda,',
        'Lelo pa mulopa wenu uwansangulwila;',
        'Kuli Imwe mwe Mwene muleita,',
        'Mwe Mwana wa Mpaanga, ndikwisa.'
      ]
    ],
    chorus: null
  },
  {
    id: 'hymn-112',
    number: 112,
    title: 'Yesu Alitemwa Utwana Tonse',
    writer: 'C. Herbert Woolston',
    englishTune: 'Sample Tune: Jesus Loves the Little Children',
    category: 'children-and-family',
    categoryBemba: 'Abana no Lupwa',
    key: 'G Major',
    timeSignature: '2/4',
    scripture: 'Mateo 19:14',
    isSample: true,
    melodicPreview: [67, 67, 71, 74, 71, 67],
    verses: [
      [
        'Yesu alitemwa utwana twonse utwa pano isonde,',
        'Utubutushi na twafita tonse twacindama kuli Wene;',
        'Yesu alitemwa utwana tonse twa pano isonde.'
      ]
    ],
    chorus: null
  },
  {
    id: 'hymn-160',
    number: 160,
    title: 'Paaleni Ing’anda na Lupwa Lwesu',
    writer: 'Dorothy B. Gurney',
    englishTune: 'Sample Tune: O Perfect Love',
    category: 'weddings-and-family-life',
    categoryBemba: 'Uwinga no Mweo wa Lupwa',
    key: 'Eb Major',
    timeSignature: '4/4',
    scripture: 'Kolose 3:18-21',
    isSample: true,
    melodicPreview: [63, 65, 67, 68, 70, 72, 70],
    verses: [
      [
        'Mwe Lesa wa kutemwa paaleni aba balelayana,',
        'Bapeeni umutende no bucine mu ng’anda yabo;',
        'Mube e mutwe wa cikolwe cabo conse cilya.',
        'Insansa shabo shikekale kuli Kristu.'
      ]
    ],
    chorus: null
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

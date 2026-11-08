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
    id: 'hymn-21',
    number: 21,
    title: 'Naisa Kulupanda',
    writer: 'I Am Coming to the Cross',
    englishTune: 'I Am Coming to the Cross',
    category: 'consecration',
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
    category: 'holy-spirit',
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
    category: 'consecration',
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
    category: 'invitation-and-repentance',
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
    category: 'praise-and-adoration',
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
    category: 'consecration',
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
    category: 'evening-and-close-of-day',
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
    category: 'evening-and-close-of-day',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'trust-and-assurance',
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
    category: 'baptism-and-consecration',
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
    category: 'holy-spirit',
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
    category: 'consecration',
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
    category: 'invitation-and-repentance',
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
    category: 'trust-and-assurance',
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
    category: 'consecration',
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
    category: 'discipleship',
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
    category: 'worship-and-adoration',
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
    category: 'prayer-and-communion',
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
    category: 'praise-and-adoration',
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
    category: 'salvation',
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
    category: 'salvation',
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
    category: 'second-coming',
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
    category: 'salvation',
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
    category: 'judgment-and-second-coming',
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
    category: 'second-coming',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'service-and-mission',
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
    category: 'morning-worship',
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
    category: 'praise-and-adoration',
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
    category: 'doxology',
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
    category: 'praise-and-adoration',
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
    category: 'praise-and-adoration',
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
    category: 'prayer-and-communion',
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
    category: 'prayer-and-communion',
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
    category: 'prayer-and-communion',
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
    category: 'sabbath',
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
    category: 'christian-life-and-discipleship',
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
    category: 'sabbath',
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
    category: 'sabbath',
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
    category: 'sabbath',
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
    category: 'sabbath',
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
    category: 'sabbath',
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
    category: 'trust-and-assurance',
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
    category: 'prayer-and-communion',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
    category: 'trust-and-assurance',
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
    category: 'invitation-and-repentance',
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
    category: 'judgment-and-second-coming',
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
    category: 'christian-life-and-discipleship',
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
    category: 'trust-and-assurance',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
    category: 'invitation-and-repentance',
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
        'Pe-mpula upepe, Le-ta fyonse \'ko ndi.\''
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
    category: 'christian-life-and-discipleship',
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
    category: 'love-of-god',
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
    category: 'consecration',
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
    category: 'consecration',
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
    category: 'consecration',
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
    category: 'christian-life-and-discipleship',
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
    category: 'love-of-god',
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
    category: 'love-of-god',
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
    category: 'christian-life-and-discipleship',
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
    category: 'consecration',
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
    category: 'consecration',
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
    category: 'love-of-god',
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
    category: 'invitation-and-repentance',
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
    category: 'consecration',
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
    category: 'sabbath',
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
    category: 'worship-and-adoration',
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
    category: 'christian-life-and-discipleship',
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
    category: 'service-and-mission',
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
    category: 'consecration',
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
    category: 'christian-life-and-discipleship',
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
    category: 'service-and-mission',
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
    category: 'second-coming',
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

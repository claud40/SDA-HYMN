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
  isSample: true;
  melodicPreview?: number[]; // MIDI note numbers for tune pitch helper
}

export const SAMPLE_DISCLAIMER =
  'SAMPLE CONTENT ONLY: These lyrics and titles are representative liturgical sample texts generated exclusively for prototyping this digital hymnal interface. Do not use as official Seventh-day Adventist church hymnal text.';

export const SAMPLE_HYMNS: Hymn[] = [
  {
    id: 'hymn-1',
    number: 1,
    title: 'Lelo Tulelumbanya Lesa',
    writer: 'Fanny J. Crosby',
    englishTune: 'Sample Tune: To God Be the Glory',
    category: 'praise-and-worship',
    categoryBemba: 'Ukupepa no Kulumbanya',
    key: 'Ab Major',
    timeSignature: '3/4',
    scripture: 'Amalumbo 100:1-4',
    isSample: true,
    melodicPreview: [68, 70, 72, 75, 75, 73, 72, 70, 68],
    verses: [
      [
        'Lelo tulelumbanya Lesa wa muulu,',
        'Ku fintu fikulu ifyo acitila fwe;',
        'Apeele Umwana wakwe uwatemwikwa,',
        'Ukuti alubule abamutetekela.'
      ],
      [
        'O lilumbanyeni ishina lya Mfumu,',
        'Mwe bantu bonse abapemba kuli Wene;',
        'Kuli Yesu Kristu twakwata umutende,',
        'No bupe bwa mweo uushakapwe nakalya.'
      ],
      [
        'Ubukata bwa kwa Lesa buli peulu,',
        'Umutende pe sonde ku bantu basuma;',
        'Iseni bonse tubombele Shikulu,',
        'Mu nsansa ne cikuuku cisuma ca pe.'
      ]
    ],
    chorus: [
      'Lumbanya! Lumbanya! Isuule amashiwi!',
      'Lumbanya! Lumbanya! Iseni kuli Lesa!',
      'Mupalamine kuli Wisi kupitila muli Yesu,',
      'No kumutootela ku milimo yakwe yonse.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-7',
    number: 7,
    title: 'Isabata Lisuma Ilya kwa Lesa',
    writer: 'Christopher Wordsworth',
    englishTune: 'Sample Tune: O Day of Rest and Gladness',
    category: 'sabbath-and-creation',
    categoryBemba: 'Isabata Lisuma',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Ukutendeka 2:1-3 · Esaya 58:13',
    isSample: true,
    melodicPreview: [65, 67, 69, 70, 72, 69, 67, 65],
    verses: [
      [
        'Isabata lya kwa Lesa lyaisa na kabili,',
        'Ubushiku bwa kupumula na mutende;',
        'Lesa alipaalishe ubushiku bwa cinelubali,',
        'Ukuti fwe bana bakwe tubembekemo.'
      ],
      [
        'Fwe bantu bakwe twasungana mwi calici,',
        'Ukulumbanya Shikulu Kabumba wa fyonse;',
        'Icipangano cakwe cikekala pe na pe,',
        'Mu mitima ya balelinda amashiwi yakwe.'
      ],
      [
        'Pakupwa kwa mulimo wa pa calo conse,',
        'Tukesa kumona Isabata lya muulu;',
        'Kuntu takwakabe ifipowe nangu ifilamba,',
        'Lelo insansa sha muyayaya kuli Kristu.'
      ]
    ],
    chorus: [
      'Isabata lisuma, ilya kupumula,',
      'Ubusuma bwa kwa Lesa bwalengesa;',
      'Tulepepa kuli Wene lelo no mutima,',
      'Mwe Mfumu ya Sabata, pokeleleni ukulumbanya.'
    ],
    chorusLabel: 'Icililishi (Chorus - Sample)'
  },
  {
    id: 'hymn-18',
    number: 18,
    title: 'Yesu E Bucibusa Bwandi Bwine',
    writer: 'Joseph M. Scriven',
    englishTune: 'Sample Tune: What a Friend We Have in Jesus',
    category: 'prayer',
    categoryBemba: 'Ipepo',
    key: 'F Major',
    timeSignature: '4/4',
    scripture: 'Abena Filipi 4:6-7',
    isSample: true,
    melodicPreview: [69, 69, 70, 69, 67, 65, 65, 67],
    verses: [
      [
        'Yesu e cibusa cesu, usendeka mafya yesu,',
        'Ilyo tulepepa kuli Wene mu luse;',
        'Kanshi tulefililwa ukukwata umutende,',
        'Pantu tatuleleta fyonse kuli Wene.'
      ],
      [
        'Nga tweshiwa ku fyakwesha, nangu amasanso yaingi,',
        'Twikatontonkanya ati twashala fweka;',
        'Yesu alamona fyonse, e cibusa uwacishamo,',
        'Twaleni fyonse kwi pepo ilya luse.'
      ],
      [
        'Nga twanenuka pa mulandu wa fisendo,',
        'Yesu atila: Iseni kuli Ine mwe bonse;',
        'Mu maboko yakwe muli ukucingililwa,',
        'Tukapokelela amaka no mutende.'
      ]
    ],
    chorus: null
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

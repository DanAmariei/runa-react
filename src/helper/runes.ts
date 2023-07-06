interface IRuna {
  title: string;
  image?: string;
  content?: string;
  details?: string;
  detailsdn?: string;
  message?: string;
  messagetitle?: string;
  titleamulet?: string;
  amulet?: string;
  keyup?: string;
  keydn?: string;
  keytitle?: string;
  keywords?: string;
  keywordsdn?: string;
}

interface IRunaList {
  [key: string]: IRuna;
}

export const runes: IRunaList = {
  fehu: {
    title: "Fehu",
    image: "/pngs/FEHU.png",
    keywords: "Speranță • Succes • Determinare",
    keywordsdn: "Probleme • Impedimente • Alegeri greșite",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet:
      "Fehu protjează proprietatea noastră, oamenii pe care îi iubim. Poate servi pentru a consolida o situație economică sau o relație sentimentală. Ne învață să ne recunoaștem valoarea în viața noastră. Încurajează noi proiecte și creativitatea.",
    messagetitle: "Mesajul:",
    message:
      "Ceea ce ne conduce la adevărata fericire, nu are nimic de-a face cu bogăția materială, ci, mai degrabă cu dragostea de viață, cu cei dragi nouă și cu devotamentul față de Dumnezeu.",
    details:
      "Guvernată de Freyr, preotul-rege, sau Freya, în rolul fecundității și al fertilității. Denotă bogăție, prosperitate, fericire, care implică un mod de acțiune drept și cinstit. Printr-un comportament ghidat de generozitatea și spiritul umanitar, ne putem deschide la viață, lăsăm să curgă energia acesteia în noi, obținând toate beneficiile pe care le merităm. Când extragem această Rună, înseamnă că ne îndreptăm în direcția cea bună, facem alegerile corecte, care ne vor conduce cu siguranță la realizare. Acum ne simțim capabili să împărțim, în mod liber, ceea ce avem, pentru că am dobândit capacitatea de a percepe care este echilibrul corect între a da și a primi. Avere bruscă, suces în dragoste și în afaceri.",
    detailsdn:
      "Fehu inversat poate indica pierderea a ceva și nemulțumire. Pot exista probleme cu gestionarea sau întâmpinăm dificultăți în a produce ceva. Ar putea fi vorba de o lipsă de bani, ca să trăim așa cum ne-am dori sau putem munci din greu, fără a fi capabili de a câștiga suficient. Pe lângă toate acestea, am putea avea dificultăți în a ne recunoaște valoarea, nepermițând energiei de care avem nevoie să intre. Motivele care ne conduc să fim în această stare de privare și de nemulțumire ar putea fi legate de modul în care acționăm, calculat, pentru a ieși în câștig. În condituare suntem cuprinși de teama de a pierde ceva, gonim după o falsă siguranță.",
    keytitle: "Gratitudine și generozitate",
    keyup:
      "noroc meritat, stabilitate financiară, utilizare în comun, succes în dragoste, prosperitate",
    keydn:
      "rău, gelozie, invidie, lăcomie, pierderi economice, eșecuri, sclavie, datorii",
  },
  uruz: {
    title: "Uruz",
    image: "/pngs/URUZ.png",
    keywords: "Sănătate • Rezistență • Spirit de voință",
    keywordsdn: "Imobilitate • Lipsă de energie • Fragilitate",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "Insuflă vitalitate, curaj în fața obstacolelor și ajută la eliminarea îndoielilor și a temerilor. Dă determinare pentru realizarea de noi proiecte (în relații, la locul de muncă, în afaceri), luciditate și curaj de a face față unor decizii importante, atunci când avem acest drept.",
    messagetitle: "Mesajul:",
    message: "Dă putere, vitalitate și determinare în fața obstacolelor, ajută la depășirea nesiguranței și îndoielilor. Întărește sănătatea și îndepărtează bolile.",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "Instinctul de supraviețuire",
    keyup: "tărie fizică și morală, curaj, vitalitate, inițiativă, independență, inventivitate",
    keydn: "ferocitate, masculinitate, rigiditate, amorțeală, agresiune, dependență, imobilitate",
  },
  thurisaz: {
    title: "Thurisaz",
    image: "/pngs/THURISAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  ansuz: {
    title: "Ansuz",
    image: "/pngs/ANSUZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  raido: {
    title: "Raido",
    image: "/pngs/RAIDO.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  kenaz: {
    title: "Kenaz",
    image: "/pngs/KENAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  gebo: {
    title: "Gebo",
    image: "/pngs/GEBO.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  wunjo: {
    title: "Wunjo",
    image: "/pngs/WUNJO.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  hagalaz: {
    title: "Hagalaz",
    image: "/pngs/HAGALAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  nauthiz: {
    title: "Nauthiz",
    image: "/pngs/NAUTHIZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  isa: {
    title: "Isa",
    image: "/pngs/ISA.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  jera: {
    title: "Jera",
    image: "/pngs/JERA.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  eihwaz: {
    title: "Eihwaz",
    image: "/pngs/EIHWAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  perthrc: {
    title: "Perthrc",
    image: "/pngs/PERTHRC.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  algiz: {
    title: "Algiz",
    image: "/pngs/ALGIZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  sowilo: {
    title: "Sowilo",
    image: "/pngs/SOWILO.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  tiewaz: {
    title: "Tiewaz",
    image: "/pngs/TIEWAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  berkana: {
    title: "Berkana",
    image: "/pngs/BERKANA.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  ehwaz: {
    title: "Ehwaz",
    image: "/pngs/EHWAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  mannaz: {
    title: "Mannaz",
    image: "/pngs/MANNAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  laguz: {
    title: "Laguz",
    image: "/pngs/LAGUZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  inguz: {
    title: "Inguz",
    image: "/pngs/INGUZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  dagaz: {
    title: "Dagaz",
    image: "/pngs/DAGAZ.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
  othala: {
    title: "Othala",
    image: "/pngs/OTHALA.png",
    keywords: " •  • ",
    keywordsdn: " •  • ",
    titleamulet: "Folosirea Runei ca Amuletă:",
    amulet: "xxxx",
    messagetitle: "Mesajul:",
    message: "xxxxx",
    details: "xxxx",
    detailsdn: "xxx",
    keytitle: "xxxxx",
    keyup: "xxxxx",
    keydn: "xxx",
  },
};

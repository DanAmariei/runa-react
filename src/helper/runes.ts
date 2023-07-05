interface IRuna {
  title: string;
  image?: string;
  content?: string;
}

interface IRunaList {
  [key: string]: IRuna;
}

export const runes: IRunaList = {
  fehu: {
    title: "Fehu",
    image: "/pngs/FEHU.png", 
  },
  uruz: {
    title: "Uruz",
    image: "/pngs/URUZ.png"
  },
  thurisaz: {
    title: "Thurisaz",
    image: "/pngs/THURISAZ.png",
  },
  ansuz: {
    title: "Ansuz",
    image: "/pngs/ANSUZ.png",
  },
  raido: {
    title: "Raido",
    image: "/pngs/RAIDO.png",
  },
  kenaz: {
    title: "Kenaz",
    image: "/pngs/KENAZ.png",
  },
  gebo: {
    title: "Gebo",
    image: "/pngs/GEBO.png",
  },
  wunjo: {
    title: "Wunjo",
    image: "/pngs/WUNJO.png",
  },
  hagalaz: {
    title: "Hagalaz",
    image: "/pngs/HAGALAZ.png",
  },
  nauthiz: {
    title: "Nauthiz",
    image: "/pngs/NAUTHIZ.png",
  },
  isa: {
    title: "Isa",
    image: "/pngs/ISA.png",
  },
  jera: {
    title: "Jera",
    image: "/pngs/JERA.png",
  },
  eihwaz: {
    title: "Eihwaz",
    image: "/pngs/EIHWAZ.png",
  },
  perthrc: {
    title: "Perthrc",
    image: "/pngs/PERTHRC.png",
  },
  algiz: {
    title: "Algiz",
    image: "/pngs/ALGIZ.png",
  },
  sowilo: {
    title: "Sowilo",
    image: "/pngs/SOWILO.png",
  },
  tiewaz: {
    title: "Tiewaz",
    image: "/pngs/TIEWAZ.png",
  },
  berkana: {
    title: "Berkana",
    image: "/pngs/BERKANA.png",
  },
  ehwaz: {
    title: "Ehwaz",
    image: "/pngs/EHWAZ.png",
  },
  mannaz: {
    title: "Mannaz",
    image: "/pngs/MANNAZ.png",
  },
  laguz: {
    title: "Laguz",
    image: "/pngs/LAGUZ.png",
  },
  inguz: {
    title: "Inguz",
    image: "/pngs/INGUZ.png",
  },
  dagaz: {
    title: "Dagaz",
    image: "/pngs/DAGAZ.png",
  },
  othala: {
    title: "Othala",
    image: "/pngs/OTHALA.png",
  },

};

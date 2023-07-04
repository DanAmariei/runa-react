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
    title: "FEHU",
    image: "https://img.freepik.com/premium-vector/black-square-background-with-fehu-rune-magic-circle_477392-467.jpg?w=2000"
  },
  uruz: {
    title: "URUZ",
    image: "/svgs/2.svg"
  },
  thurisaz: {
    title: "THURISAZ"
  },
  ansuz: {
    title: "ANSUZ"
  },

};

interface IPropsRunaImage {
  runaNumber: number;
}
interface ISeal {
  [key: string]: {
    x: string;
    y: string;
    color: string;
  };
}
const seal: ISeal = {
  1: {
    x: "340.56",
    y: " 53.25",
    color: "#FF0000",
  },
  2: {
    x: "513.02",
    y: " 111.5",
    color: "#FFA500",
  },
  3: {
    x: "615.68",
    y: " 258.99",
    color: "#ff0",
  },
  4: {
    x: "610.37",
    y: " 436.02",
    color: "#bfff00",
  },
  5: {
    x: "504.92",
    y: " 574.53",
    color: "#00cbff",
  },
  6: {
    x: "176.26",
    y: " 574.55",
    color: "#0b00b8",
  },
  7: {
    x: "70.55",
    y: " 436.11",
    color: "#ff3fe6",
  },
  8: {
    x: "63.46",
    y: " 258.97",
    color: "#ccc",
  },
  9: {
    x: "167.87",
    y: " 111.05",
    color: "#ff9ae8",
  },
};

const RunaImage = (props: IPropsRunaImage) => {
  const getSvgLinesAndGradients = (num: number) => {
    const arr = (num + "").split("");
    const lines = [];
    const gradients = [];

    for (let i = 1; i < arr.length; i++) {
      const prevPoint = seal[arr[i - 1]];
      const currentPoint = seal[arr[i]];

      const newGradient = (
        <linearGradient
          id={`gradient${i}`}
          x1={prevPoint.x}
          y1={prevPoint.y}
          x2={currentPoint.x}
          y2={currentPoint.y}
          key={`gradient${i}`}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="10%" stopColor={prevPoint.color} stopOpacity={1} />
          <stop offset="90%" stopColor={currentPoint.color} stopOpacity={1} />
        </linearGradient>
      );

      gradients.push(newGradient);

      const newLine = (
        <line
          x1={prevPoint.x}
          y1={prevPoint.y}
          x2={currentPoint.x}
          y2={currentPoint.y}
          // stroke={currentPoint.color}
          stroke={`url(#gradient${i})`}
          strokeWidth={10}
          key={`line${i}`}
        />
      );

      lines.push(newLine);
    }
    return { lines, gradients };
  };

  const { lines, gradients } = getSvgLinesAndGradients(props.runaNumber);

  return (
    <div className="w-full flex-grow min-w-[250px]">
      <svg
        id="Layer_2"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 688.2 688.2"
      >
        <defs>{gradients}</defs>
        <title>RunaSeal</title>
        <circle
          cx="340.6"
          cy="339.83"
          r="286.59"
          fill="#cce7ff"
          fillOpacity="0.2"
          stroke="#858585"
          stroke-width="5"
        />
        {lines}

        {Object.keys(seal).map((key, idx) => (
          <circle
            key={key}
            cx={seal[key].x}
            cy={seal[key].y}
            r={7}
            fill={seal[key].color}
          />
        ))}
        <text transform="translate(333.76 40.47)" fontSize={20}>
          1
        </text>
        <text transform="translate(513.02 96.91)" fontSize={20}>
          2
        </text>
        <text transform="translate(632.16 269.47)" fontSize={20}>
          3
        </text>
        <text transform="translate(627.19 452.89)" fontSize={20}>
          4
        </text>
        <text transform="translate(506.22 618.78)" fontSize={20}>
          5
        </text>
        <text transform="translate(331.7 666.17)" fontSize={20}>
          0
        </text>
        <text transform="translate(148.61 599.07)" fontSize={20}>
          6
        </text>
        <text transform="translate(43.95 448.62)" fontSize={20}>
          7
        </text>
        <text transform="translate(37.66 270.32)" fontSize={20}>
          8
        </text>
        <text transform="translate(147.76 104.27)" fontSize={20}>
          9
        </text>
      </svg>
    </div>
  );
};

export default RunaImage;

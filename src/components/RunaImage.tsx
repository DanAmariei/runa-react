
interface IPropsRunaImage {
    runaNumber: number;
}
interface ISigiliu {

    [key: string]: {

        x: string;
        y: string;
        color: string;
    }
}
const sigiliu: ISigiliu = {
    1: {
        x: '340.56',
        y: ' 53.25',
        color: '#FF0000'
    },
    2: {
        x: '513.02',
        y: ' 111.5',
        color: '#FFA500'
    },
    3: {
        x: '615.68',
        y: ' 258.99',
        color: '#ff0'
    },
    4: {
        x: '610.37',
        y: ' 436.02',
        color: '#bfff00'
    },
    5: {
        x: '504.92',
        y: ' 574.53',
        color: '#00cbff'
    },
    6: {
        x: '176.26',
        y: ' 574.55',
        color: '#0b00b8'
    },
    7: {
        x: '70.55',
        y: ' 436.11',
        color: '#ff3fe6'
    },
    8: {
        x: '63.46',
        y: ' 258.97',
        color: '#ccc'
    },
    9: {
        x: '167.87',
        y: ' 111.05',
        color: '#ff9ae8'
    },
}


const RunaImage = (props: IPropsRunaImage) => {
    // function calculateRotation(x1: number, y1: number, x2: number, y2: number)

    function calculateRotation(x1: any, y1: any, x2: any, y2: any) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.atan2(dy, dx) * (180 / Math.PI);
    }

    const getSvgLines = (num: number) => {

        let arr = (num + '').split('');
        let lines = [];
        let gradients = [];

        for (let i = 1; i < arr.length; i++) {

            let prevPoint = sigiliu[arr[i - 1]];
            let currentPoint = sigiliu[arr[i]];

            const rotationAngle = calculateRotation(prevPoint.x, prevPoint.y, currentPoint.x, currentPoint.y)

            const newGradient = (<linearGradient
                id={`gradient${i}`}
                // gradientUnits="userSpaceOnUse" 
                x1="0%" y1="0%" x2="100%" y2="100%"
                // gradientTransform={`rotate(${rotationAngle})`}
                // x1={prevPoint.x}
                // y1={prevPoint.y}
                // x2={currentPoint.x}
                // y2={currentPoint.y}
            >
                <stop offset="0%" stop-color={prevPoint.color}/>
                <stop offset="100%" stop-color={currentPoint.color} />
            </linearGradient>);

            gradients.push(newGradient);

            // <linearGradient id="gradient" gradientUnits="userSpaceOnUse"
            // x1="x1-coordinate" y1="y1-coordinate" x2="x2-coordinate" y2="y2-coordinate"
            // gradientTransform="rotate(rotation-angle, x1-coordinate, y1-coordinate)">
            // <stop offset="0%" stop-color="color-for-point-A" />
            // <stop offset="100%" stop-color="color-for-point-B" />
            // </linearGradient>

            const newLine = (<line 
                x1={prevPoint.x}
                y1={prevPoint.y}
                x2={currentPoint.x}
                y2={currentPoint.y}
                // stroke={currentPoint.color}
                stroke={`url(#gradient${i})`}
                strokeWidth={10}
            />

            )

            lines.push(newLine);
        }
        return [lines, gradients];
    }

    return <div>
        runa image: {props.runaNumber}


        <svg id="Layer_2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688.2 688.2">
            <defs>
                {getSvgLines(props.runaNumber)[1]}
            </defs>
            <title>RunaSeal</title>
            <circle cx="340.6" cy="339.83" r="286.59"
                fill="#cce7ff" fill-opacity="0.2" stroke="#858585" stroke-width="5" />
            {getSvgLines(props.runaNumber)[0]}
            <circle cx="340.56" cy="53.25" r="6.5" />
            <circle cx="340.6" cy="626.42" r="6.5" />
            <circle cx="167.86" cy="111.05" r="6.5" />
            <circle cx="65.46" cy="258.97" r="6.5" />
            <circle cx="70.55" cy="436.11" r="6.5" />
            <circle cx="176.27" cy="574.55" r="6.5" />
            <circle cx="504.92" cy="574.53" r="6.5" />
            <circle cx="610.37" cy="436.02" r="6.5" />
            <circle cx="615.68" cy="258.99" r="6.5" />
            <circle cx="513.02" cy="111.05" r="6.5" />
            <text transform="translate(333.76 40.47)">1</text>
            <text transform="translate(513.02 96.91)">2</text>
            <text transform="translate(632.16 269.47)">3</text>
            <text transform="translate(627.19 452.89)">4</text>
            <text transform="translate(506.22 618.78)">5</text>
            <text transform="translate(331.7 666.17)">0</text>
            <text transform="translate(148.61 599.07)">6</text>
            <text transform="translate(43.95 448.62)">7</text>
            <text transform="translate(37.66 270.32)">8</text>
            <text transform="translate(147.76 104.27)">9</text>
        </svg>
    </div>
}

export default RunaImage;
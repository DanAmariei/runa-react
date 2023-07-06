import { useState } from "react";
import CalculatorForm from "../components/CalculatorForm";
import RunaImage from "../components/RunaImage";
import { runes } from "../helper/runes";
import { runeNames } from "../helper/runenames";

interface IRunaResult {
  name: string;
  firstName: string;
  secondName: string;
  birthdate: string;
  runaGasUnique: number;
  runaNotes: string[];
  runaResult: string;
}

const RunaCalcPage = () => {
  const [runaNumber, setRunaNumber] = useState(0);
  const [runaResult, setRunaResult] = useState<IRunaResult | null>(null);

  const getRunaNamesFromSymbols = (runaSymbols: string) => {
    const res: string[] = [];

    runaSymbols.split("").forEach((symbol) => {
      const nameOfRuna = runeNames[symbol];
      res.push(nameOfRuna.toLowerCase());
    });
    return res;
  };

  const handleFormSubmit = (result: any) => {
    console.log("!! runa calc page. ", result);
    setRunaNumber(result.runaGasUnique);
    setRunaResult(result);
  };
  const runaNotesString = runaResult?.runaNotes?.join(" - ");

  return (
    <div className=" p-2 mx-auto lg:px-10">
      {runaNumber !== 0 && (
        <div className="p-2">
          <button
            className="mt-2 inline-flex justify-center px-4 py-2 text-sm font-medium
             text-white bg-purple-900 border border-transparent 
             duration-200
            rounded-md shadow-sm hover:bg-purple-950 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-purple-900"
            onClick={() => {
              setRunaNumber(0);
            }}
          >
            Calculate another one
          </button>
        </div>
      )}

      {runaNumber === 0 ? (
        <CalculatorForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="flex gap-2 p-2 flex-col md:flex-row">
          <div className="flex-grow">
            <p>{runaResult?.name}</p>
            <p>{runaResult?.firstName}</p>
            <p>{runaResult?.secondName}</p>
            <p>{runaResult?.birthdate}</p>
            <p>
              <span className="font-bold">COD Dans Activare Chakre: </span>
              {runaResult?.runaGasUnique}
            </p>

            <p>
              <span className="font-bold">Note Muzicale:</span> {runaNotesString}
            </p>

            <div className="flex flex-wrap items-center">
              {runaResult &&
                getRunaNamesFromSymbols(runaResult.runaResult).map(
                  (runaKey, idx) => {
                    const runa = runes[runaKey];

                    return (
                      <div key={idx}>
                        <img className="max-w-[50px]" src={runa.image} />
                      </div>
                    );
                  }
                )}
            </div>
          </div>
          <div className="flex flex-grow max-w-[400px]">
            <RunaImage runaNumber={runaNumber} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RunaCalcPage;

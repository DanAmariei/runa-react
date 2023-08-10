import { FormEvent, useEffect, useState } from "react";
import { runeNames } from "../helper/runenames";
import { musicNotes } from "../helper/musicnotes";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const alphabet = "aăâbcdefghiîjklmnopqrsștțuvwxyz";

const runa = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛝᛞᛟ";

interface IPropsCalculatorForm {
  onSubmit: (res: any) => void;
}

const CalculatorForm = ({ onSubmit }: IPropsCalculatorForm) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const [searchParams] = useSearchParams();
  const nameParam = searchParams.get("name");
  const firstNameParam = searchParams.get("firstName");
  const secondNameParam = searchParams.get("secondName");
  const birthdateParam = searchParams.get("birthdate");

  const [initialized, setInitialized] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (nameParam && firstNameParam && secondNameParam && birthdateParam) {
      setName(nameParam);
      setSecondName(secondNameParam);
      setFirstName(firstNameParam);
      setBirthdate(birthdateParam);
      setInitialized(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (initialized) {
      calculateRunaResult();
    }
  }, [initialized]);

  // sums all digits of a number and returns the result
  const sumNumberDigits = (num: number) => {
    if (num < 10) {
      return num;
    }
    let res = 0;
    (num + "").split("").forEach((digit) => {
      res = res + Number(digit);
    });
    return res;
  };

  // // letter index goes from 1 to 31
  // const nameToNumbersAll = (name: string) => {
  //   let res: number[] = [];

  //   name
  //     .toLowerCase()
  //     .split("")
  //     .forEach((letter) => {
  //       const letterIndex = alphabet.indexOf(letter) + 1;
  //       res.push(letterIndex);
  //     });

  //   return res;
  // };

  // if letter index is bigger than 9 then sum the digits
  const nameToNumbersSmall = (name: string) => {
    let res: number[] = [];

    name
      .toLowerCase()
      .split("")
      .forEach((letter) => {
        const letterIndex = alphabet.indexOf(letter) + 1;

        let newNum = sumNumberDigits(letterIndex);
        if (newNum > 9) {
          newNum = sumNumberDigits(newNum);
        }
        res.push(newNum);
      });

    return Number(res.join(""));
  };

  // example input: 4201542
  // will sum 4+2, 2+0, 0+1, and so on
  const sumEachTwoDigits = (num: number) => {
    let res: number[] = [];

    const digits = (num + "").split("");

    digits.forEach((digit, idx) => {
      if (idx > 0) {
        const newDigit = Number(digit) + Number(digits[idx - 1]);
        res.push(sumNumberDigits(newDigit));
      }
    });

    return Number(res.join(""));
  };

  const generateSumOfTwoNumbers = (num: number) => {
    let res = [num];

    while (num > 9) {
      const newNumber = sumEachTwoDigits(num);
      res.push(newNumber);
      num = newNumber;
    }
    return res.map((element) => {
      return sumNumberDigits(element);
    });
  };

  const sumAllElements = (numbers: number[]) => {
    return numbers.reduce((total, element) => {
      return total + element;
    }, 0);
  };

  const numberToRune = (num: number) => {
    let runaIndex = num % 24;

    if (runaIndex === 0) {
      runaIndex = 24;
    }
    return runa[runaIndex - 1];
  };

  const numbersToRune = (numbers: number[]) => {
    return numbers
      .map((num) => {
        let runaIndex = num % 24;

        if (runaIndex === 0) {
          runaIndex = 24;
        }
        return runa[runaIndex - 1];
      })
      .join("");
  };

  //  date inputr will be in this format 2023-05-31
  const convertDateToNumbers = (date: string) => {
    let res = 0;

    date.split("-").forEach((el) => {
      const num = parseInt(el);
      res = res + num;
    });

    return res;
  };

  const runesToLetters = (runes: string) => {
    let res = "";
    runes.split("").forEach((runaSymbol) => {
      const runaName = runeNames[runaSymbol];

      res = res + runaName[0];
    });
    return res;
  };

  const getRunaGasUnique = (num: number) => {
    let res: string[] = [];
    (num + "").split("").forEach((digit) => {
      if (!res.includes(digit)) {
        res.push(digit);
      }
    });
    return Number(res.join(""));
  };

  const getNotesFromNumber = (num: number) => {
    let res: string[] = [];
    (num + "").split("").forEach((digit) => {
      const note = musicNotes[digit];
      res.push(note);
    });
    return res;
  };

  const calculateRunaResult = () => {
    const numeAsNumbers = nameToNumbersSmall(name);
    const prenumeAsNumbers = nameToNumbersSmall(firstName);
    const prenume2AsNumbers = nameToNumbersSmall(secondName);
    const birthdateAsNumber = convertDateToNumbers(birthdate);

    const sumOfNames =
      numeAsNumbers + prenumeAsNumbers + prenume2AsNumbers + birthdateAsNumber;

    const sumTwo = generateSumOfTwoNumbers(sumOfNames);

    const runes = numbersToRune(sumTwo);

    const sum = sumAllElements(sumTwo);

    const runaVehicle = numberToRune(sum);

    const runaGas = runesToLetters(runes + runaVehicle);

    const runaGasAsNumbers = nameToNumbersSmall(runaGas);

    const runaNumbersArr = (runaGasAsNumbers + "")
      .split("")
      .map((el) => parseInt(el));

    const runaGasSum = sumAllElements(runaNumbersArr);

    const runaGasSymbol = numberToRune(runaGasSum);

    //For each extracted rune, call the Runes nameslibrary
    //extract the first character from the names of each provided Rune
    //Transform Letters to Numbers
    //Sum of extracted number will result in runaGas, the last in the Personal Runes
    //From converted numbers array , remove all reapeating numbers
    //Resulting the Personal Seal Numbers & Musical Notes
    //SVG

    const runaResult = runes + runaVehicle + runaGasSymbol;
    console.log("runaResult: ", runaResult);

    const runaGasUnique = getRunaGasUnique(runaGasAsNumbers);
    console.log("!!! runaGasUnique ", runaGasUnique);

    const runaNotes = getNotesFromNumber(runaGasUnique);
    console.log("!!! runaNotes ", runaNotes);

    const result = {
      name,
      firstName,
      secondName,
      birthdate,
      runaGasUnique,
      runaNotes,
      runaResult,
    };

    onSubmit(result);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const params = {
      name,
      firstName,
      secondName,
      birthdate,
    };

    navigate({
      pathname: "/runa-calculator",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nume" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="nume"
            type="text"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="prenume"
            className="text-sm font-medium text-gray-700"
          >
            Prenume
          </label>
          <input
            id="prenume"
            type="text"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="prenume2"
            className="text-sm font-medium text-gray-700"
          >
            Prenume 2 sau Prenume tata
          </label>
          <input
            id="prenume2"
            type="text"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="birthdate"
            className="text-sm font-medium text-gray-700"
          >
            Data nasterii
          </label>
          <input
            id="birthdate"
            type="date"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            id="submit-button"
            className="mt-2 w-full inline-flex justify-center px-4 py-2 text-sm font-medium
             text-white bg-purple-900 border border-transparent 
             duration-200
            rounded-md shadow-sm hover:bg-purple-950 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-purple-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;

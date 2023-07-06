import { useParams } from "react-router-dom";
import { runes } from "../helper/runes";

const baseURL = "http://localhost:5173";

const SingleRunaPage = () => {
  const params = useParams();

  const runaid = params.id || "";
  const runa = runes[runaid];
  console.log(params);

  return (
    <div className="flex flex-col md:flex-row gap-2 py-4 px-4">
      <div className=" flex flex-col gap-2 md:max-w-[350px] md:flex-grow">
        <div className="border  p-4 bg-slate-50">
          <img className=" max-w-[150px]" src={baseURL + runa?.image} />

          <p className="text-xl font-bold">{runa?.titleamulet}</p>
          <p className="italic">{runa?.amulet}</p>
        </div>
        <div className="border-2 bg-red-200 flex items-center p-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
        </div>
      </div>

      <div className="border flex-grow p-4">
        <h2 className=" text-5xl text-purple-700 font-bold py-2">
          {runa?.title}
          <p className="italic text-xl font-thin px-7 py-2">{runa?.keywords}</p>
        </h2>
        <p className="text-xl px-3 py-2">{runa?.details}</p>
        <p className="text-xl px-3 py-2 bg-slate-400 italic">
          {runa?.title} răsturnat:
        </p>
        <p className="italic text-xl font-thin px-5 py-2">{runa?.keywordsdn}</p>
        <p className="text-xl px-3 py-2">{runa?.detailsdn}</p>
      </div>
      <div className="border max-w-sm">
        <div className="border bg-red-200">
          <p>
            <p className="text-xl px-3 py-3 italic">{runa?.keytitle}</p>
            <p className="px-4 py-3">
              <p className="italic font-bold">
                Cuvinte cheie în poziție dreaptă:
              </p>{" "}
              {runa?.keyup}
            </p>
            <p className="px-4 py-3">
              <p className="italic font-bold">
                Cuvinte cheie în poziție răsturnată:{" "}
              </p>{" "}
              {runa?.keydn}
            </p>
          </p>
        </div>
        <h2 className="text-xl text-purple-700 font-bold px-7">
          {runa?.messagetitle}
        </h2>
        <p className="font-semibold italic px-3">{runa?.message}</p>
      </div>
    </div>
  );
};

export default SingleRunaPage;

import { IRuna } from "../../helper/runes";

interface IRunContentProps {
  runa: IRuna;
}

const RunaContent = ({ runa }: IRunContentProps) => {
  return (
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
  );
};

export default RunaContent;

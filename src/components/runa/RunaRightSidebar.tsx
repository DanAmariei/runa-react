import { IRuna } from "../../helper/runes";

interface IRunaRightSidebarProps {
  runa: IRuna;
}

const RunaRightSidebar = ({ runa }: IRunaRightSidebarProps) => {
  return (
    <div className="border max-w-sm md:w-[200px] flex-shrink-0">
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
  );
};

export default RunaRightSidebar;

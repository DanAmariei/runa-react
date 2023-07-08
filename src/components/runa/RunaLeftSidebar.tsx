import React from "react";
import { Link } from "react-router-dom";
import { IRuna } from "../../helper/runes";

const baseURL = "http://localhost:5173";

interface IRunaLeftSidebarProps {
  runa: IRuna;
}

const RunaLeftSidebar = ({ runa }: IRunaLeftSidebarProps) => {
  return (
    <div className=" flex flex-col gap-2 md:w-[200px] md:flex-grow flex-shrink-0">
      <div className="border  p-4 bg-slate-50 flex justify-between gap-2 md:flex-col">
        <div>
        <img className=" max-w-[150px]" src={baseURL + runa?.image} />
        </div>

        <div>
          <p className="text-xl font-bold">{runa?.titleamulet}</p>
          <p className="italic">{runa?.amulet}</p>
        </div>
      </div>

      {runa.prev && runa.next ? (
        <div className="border-2 bg-red-200 flex items-center p-2 gap-2">
          <Link to={`/runa/${runa.prev}`} className="flex-grow">
            <button className="py-2 px-4 rounded-md bg-gray-200 w-full">
              {" "}
              Prev Runa
            </button>
          </Link>
          <Link to={`/runa/${runa.next}`} className="flex-grow">
            <button className="py-2 px-4 rounded-md bg-gray-200 w-full">
              {" "}
              Next Runa
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default RunaLeftSidebar;

import { Link } from "react-router-dom";
import { runes } from "../helper/runes";

const Homepage = () => {
  return (
    <div className="py-4 px-4 md:px-10">
      <div className="flex gap-2 flex-wrap justify-center">
        {Object.keys(runes).map((key, idx) => {
          const runa = runes[key];
          return (
            <Link key={idx} to={`/runa/${key}`}>
              <div className="p-4 flex flex-col items-center justify-center
               border-gray-400 rounded-md w-[90px]">

                <h2 className="font-bold text-xl text-gray-600">{runa.title}</h2>
                
                <img
                className="max-w-[80px]"
                 src={runa.image}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;

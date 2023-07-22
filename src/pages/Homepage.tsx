import { Link } from "react-router-dom";
import { runes } from "../helper/runes";

const Homepage = () => {
  return (
    <div className="py-4 px-4 md:px-10">
      <p className="font-bold text-gray-600 items-center justify-center">ᚱunele sunt un vechi alfabet de origine germanică, folosite în diviniație și magie. Sunt cunoscute înca din anul 100 d.Hristos și aduc mesajul divinității într-o formă nouă. În fiecare Rună în parte găsim un sfat legat de modul în care ar trebui să acționăm pentru a ne atinge scopurile. Acestea ne pot arăta unde suntem sau unde am greșit în drumul ales.</p>
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

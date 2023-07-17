import { Link } from "react-router-dom";
import RadixDrawer from "./RadixDrawer";

const Navigation = () => {
  

  return (
    <div className="fixed top-0 left-0 w-full border shadow-sm h-[60px] flex text-sky-900 bg-white px-2 z-10">
      <div className=" m-auto flex items-center justify-between w-full">
        <Link to="/">
          <h2 className="font-bold">Runa</h2>
        </Link>

        <RadixDrawer />
      </div>
    </div>
  );
};

export default Navigation;
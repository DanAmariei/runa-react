import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="border-b py-2 px-10 flex justify-between 
    items-center font-semibold text-lg bg-slate-100 text-gray-800"
    >
      <Link to={"/"}>
        <span>RUNA Calculator</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/runa-calculator"}>
          <span>About us</span>
        </Link>
        <Link to={"/runa-calculator"}>
          <span>Calculator</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="border-b py-2 px-10 flex justify-between 
    items-center font-semibold text-lg bg-slate-100 text-gray-800"
    >
      <Link to={"/"}>
        <span>ᚱUNE</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/runa-calculator"}>
          <span>ᚱUNE ᚹERSONALE</span>
        </Link>
        <Link to={"/Calatorii"}>
          <span>Călătorii</span>
        </Link>
        <Link to={"/CristaleEterice"}>
          <span>Cristale Eterice</span>
        </Link>
        <Link to={"/CristaleEterice"}>
          <span>Cristale Fizice</span>
        </Link>
        <Link to={"/CristaleEterice"}>
          <span>Reiki</span>
        </Link>
        <Link to={"/CristaleEterice"}>
          <span>Multimedia</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

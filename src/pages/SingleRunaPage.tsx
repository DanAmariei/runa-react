import { Link, useParams } from "react-router-dom";
import { runes } from "../helper/runes";
import RunaLeftSidebar from "../components/runa/RunaLeftSidebar";
import RunaRightSidebar from "../components/runa/RunaRightSidebar";
import RunaContent from "../components/runa/RunaContent";

const SingleRunaPage = () => {
  const params = useParams();

  const runaid = params.id || "";
  const runa = runes[runaid];
  console.log(params);

  if (!runa) {
    return <div>Runa not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 py-4 px-4">
      <RunaLeftSidebar runa={runa} />
      <RunaContent runa={runa} />
      <RunaRightSidebar runa={runa} />
    </div>
  );
};

export default SingleRunaPage;

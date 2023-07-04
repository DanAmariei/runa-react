import { useParams } from "react-router-dom";
import { runes } from "../helper/runes";

const baseURL = 'http://localhost:5173';

const SingleRunaPage = () => {
  const params = useParams();

  const runaid = params.id || "";
  const runa = runes[runaid];
  console.log(params);

  return (
    <div className="flex flex-col md:flex-row gap-2 py-4 px-4 md:px-12">
      <div className="border md:max-w-[300px] md:flex-grow p-4">
        <img
          className=""
          src={baseURL + runa?.image}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt rem
          consequuntur mollitia tempora consectetur nesciunt quaerat optio et
          sed totam eveniet expedita, tempore deleniti, eos id suscipit
          explicabo fuga architecto.
        </p>
      </div>
      <div className="border flex-grow p-4">
        <h2 className="text-xl text-purple-700 font-bold">{runa?.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque animi
          dolorem culpa numquam nisi vel dolor et, sapiente voluptatem. Vel
          mollitia saepe quam natus deserunt quia rerum distinctio suscipit
          sapiente!
        </p>
      </div>
    </div>
  );
};

export default SingleRunaPage;

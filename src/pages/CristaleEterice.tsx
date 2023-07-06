import NotePlayer from "../components/NotePlayer";

const notes = ["A4", "C4", "D4", "A4", "C5", "E5"];

const CristaleEterice = () => {
  return (
    <div className="max-w-lg p-2 mx-auto">
      <img src="/pngs/Shanti.png" width={200} />
      <div>
        <p>
          OM Shanti Shanti Shanti - Acesta este simbolul Shanti. Traducerea din
          limba sanscrită înseamnă „Pace”.
        </p>
        <NotePlayer notes={notes} />
      </div>
    </div>
  );
};

export default CristaleEterice;

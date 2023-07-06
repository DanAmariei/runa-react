import { useEffect } from "react";
import * as Tone from "tone";
interface INotePlayerProps {
  notes: string[];
}
const NotePlayer = ({ notes }: INotePlayerProps) => {
  const playnotes = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();


    notes.forEach((note, idx) => {
        synth.triggerAttackRelease(note, "8n", now + idx * 0.5);
    })
    // synth.triggerAttackRelease("C4", "8n", now);
    // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    // synth.triggerAttackRelease("G4", "8n", now + 1);
  };

  return (
    <div>
      <button onClick={playnotes}>Play Notes</button>
    </div>
  );
};

export default NotePlayer;

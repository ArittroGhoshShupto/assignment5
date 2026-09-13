import { type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../../types/tech";
import SelectedTechCard from "./selectedtechcard";

interface ISelectedTechsProps {
  selectedTechs: ITech[];
  setSelectedTechs: Dispatch<SetStateAction<ITech[]>>;
}

const SelectedTechs = ({
  selectedTechs,
  setSelectedTechs,
}: ISelectedTechsProps) => {

  return (
    <div className="space-y-3 mt-4">
      {selectedTechs.map((tech) => (
        <SelectedTechCard
          key={tech.id}
          tech={tech}
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      ))}
    </div>
  );
};

export default SelectedTechs;
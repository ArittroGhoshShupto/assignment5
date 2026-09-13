import { type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../../types/tech";
import TechCard from "./techcard";

interface IAvailableTechsProps {
  techs: ITech[];
  selectedTechs: ITech[];
  setSelectedTechs: Dispatch<SetStateAction<ITech[]>>;
}

const AvailableTechs = ({
  techs,
  selectedTechs,
  setSelectedTechs,
}: IAvailableTechsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {techs.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      ))}
    </div>
  );
};

export default AvailableTechs
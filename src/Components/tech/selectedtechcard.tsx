import { type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../../types/tech";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";

interface ISelectedTechCardProps {
  tech: ITech;
  selectedTechs: ITech[];
  setSelectedTechs: Dispatch<SetStateAction<ITech[]>>;
}

const SelectedTechCard = ({
  tech,
  selectedTechs,
  setSelectedTechs,
}: ISelectedTechCardProps) => {

  const handleRemoveTech = () => {

    const restTechs = selectedTechs.filter(
      (t) => t.name !== tech.name
    );

    setSelectedTechs(restTechs);

    toast.info(`${tech.name} removed from your stack`, {
      position: "top-center",
    });
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">

      <div className="flex items-center gap-3">

        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 object-contain"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {tech.name}
          </h3>

          <p className="text-xs text-gray-400">
            {tech.category}
          </p>
        </div>

      </div>

      <button
        onClick={handleRemoveTech}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        <TbTrash size={18} />
      </button>

    </div>
  );
};

export default SelectedTechCard;
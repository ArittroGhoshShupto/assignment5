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
      (t) => t.id !== tech.id && t.name !== tech.name
    );

    setSelectedTechs(restTechs);

    toast.info(`${tech.name} removed from your stack`, {
      position: "top-center"
    });
  };
  return (
    <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100/60 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-6 h-6 object-contain shrink-0"
        />
        <div className="truncate">
          <h3 className="text-xs font-bold text-gray-900 truncate">
            {tech.name}
          </h3>
          <p className="text-[12px] text-gray-400">
            {tech.category}
          </p>
        </div>
      </div>
      <button
        onClick={handleRemoveTech}
        className="text-gray-400 hover:text-red-500 p-1 rounded-md transition-colors cursor-pointer"
        title="Remove"
      >
        <TbTrash size={18} />
      </button>
    </div>
  );
};
export default SelectedTechCard;
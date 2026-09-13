import { type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../../types/tech";
import SelectedTechCard from "./selectedtechcard";
import { toast } from "react-toastify";

interface ISelectedTechsProps {
  selectedTechs: ITech[];
  setSelectedTechs: Dispatch<SetStateAction<ITech[]>>;
}

const SelectedTechs = ({
  selectedTechs,
  setSelectedTechs,
}: ISelectedTechsProps) => {

  const handleClearAll = () => {
    if (selectedTechs.length === 0) return;
    setSelectedTechs([]);
    toast.error("Cleared all items from your stack!", {
      position: "top-center",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div>
          <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
          <p className="text-xs text-gray-400 mt-0.75">
            {selectedTechs.length === 0
              ? "No technologies selected yet"
              : `${selectedTechs.length} ${selectedTechs.length === 1 ? "Technology" : "Technologies"} Selected`}
          </p>
        </div>

        {selectedTechs.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-red-600 hover:text-red-700 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded-md transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {selectedTechs.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center rounded-xl bg-gray-50 border border-dashed border-gray-200 mt-4 p-4">
          <p className="text-xs font-medium text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <div className="space-y-3 mt-4 max-h-115 overflow-y-auto pr-1">
          {selectedTechs.map((tech) => (
            <SelectedTechCard
              key={tech.id}
              tech={tech}
              selectedTechs={selectedTechs}
              setSelectedTechs={setSelectedTechs}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedTechs;
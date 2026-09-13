
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
      position: "bottom-center",
    });
  };

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
        <p className="text-xs text-gray-400 mt-1">
          {selectedTechs.length === 0
            ? "No technologies selected yet"
            : `${selectedTechs.length} ${selectedTechs.length === 1 ? "Technology" : "Technologies"} Selected`}
        </p>
      </div>

      {selectedTechs.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center rounded-xl bg-gray-50 border border-dashed border-gray-200 mt-4 p-4">
          <p className="text-xs font-medium text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <>
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

          <button
            onClick={handleClearAll}
            className="w-full mt-4 py-2.5 border border-red-200 text-red-500 font-semibold text-sm rounded-xl hover:bg-red-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default SelectedTechs;
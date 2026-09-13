import { use, useState } from "react";
import type { ITech } from "../../types/tech";
import AvailableTechs from "./availabletech";
import SelectedTechs from "./selectedtech";

interface TechnologiesProps {
  techPromise: Promise<ITech[]>;
}
const Technologies = ({ techPromise }: TechnologiesProps) => {
  const techs = use(techPromise);
  const [buttonType, setButtonType] = useState<"available" | "selected">("available");
  const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);

  const handleUpdateButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex justify-between items-center gap-4 mb-8">
        <h2 className="font-bold text-3xl text-gray-900">
          {buttonType === "available"
            ? "Explore the Technologies"
            : `Your Stack (${selectedTechs.length})`}
        </h2>

        <div className="join border border-gray-200 rounded-xl overflow-hidden bg-gray-50 p-1">
          <button
            onClick={() => handleUpdateButtonType("available")}
            className={`btn btn-sm sm:btn-md join-item border-none rounded-lg ${
              buttonType === "available"
                ? "bg-purple-600 text-white hover:bg-purple-700 font-bold"
                : "btn-ghost text-gray-600"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateButtonType("selected")}
            className={`btn btn-sm sm:btn-md join-item border-none rounded-lg ${
              buttonType === "selected"
                ? "bg-purple-600 text-white hover:bg-purple-700 font-bold"
                : "btn-ghost text-gray-600"
            }`}
          >
            Your Stack ({selectedTechs.length})
          </button>
        </div>
      </div>

      {buttonType === "available" ? (
        <AvailableTechs
          techs={techs}
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      ) : (
        <SelectedTechs
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      )}
    </div>
  );
};
export default Technologies;
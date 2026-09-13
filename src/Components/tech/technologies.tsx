
import { use, useState } from "react";
import type { ITech } from "../../types/tech";
import AvailableTechs from "./availabletech";
import SelectedTechs from "./selectedtech";

interface TechnologiesProps {
  techPromise: Promise<ITech[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const techs = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900">
              Explore the{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <AvailableTechs
            techs={techs}
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          />
        </div>

        <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-5 sticky top-24 shadow-xs mt-25">
          <SelectedTechs
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
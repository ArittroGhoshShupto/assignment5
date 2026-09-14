import { type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../../types/tech";
import { Bounce, toast } from "react-toastify";

interface ITechCardProps {
  tech: ITech;
  selectedTechs: ITech[];
  setSelectedTechs: Dispatch<SetStateAction<ITech[]>>;
}

const TechCard = ({
  tech,
  selectedTechs,
  setSelectedTechs,
}: ITechCardProps) => {

  const isSelected = selectedTechs.some(
    (t) => t.id === tech.id || t.name === tech.name
  );

  const handleSelectTech = () => {
    if (isSelected) {
      toast.warn(` ${tech.name} is already in your stack!`, {
        position: "top-center",
        autoClose: 2550,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setSelectedTechs([...selectedTechs, tech]);

    toast.success(` ${tech.name} added to your stack!`, {
      position: "top-center",
      autoClose: 2550,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="border border-gray-200 rounded-2xl bg-white p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-6 w-6 object-contain"
            />
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-md text-violet-600 bg-blue-50">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-1">
          {tech.name}
        </h3>

        <p className="text-xs leading-5 text-gray-500 line-clamp-3 min-h-12">
          {tech.description}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
          <span className="px-2 py-0.5 rounded bg-gray-100 font-medium text-gray-700">
            {tech.category}
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600">
            {tech.difficulty}
          </span>
          <span className="flex items-center gap-1 font-semibold text-amber-500 ml-auto">
            <span>★</span>
            {tech.rating}
          </span>
        </div>

        <button
          onClick={handleSelectTech}
          className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isSelected
              ? "bg-gray-200 text-gray-500 hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800 shadow-xs"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;

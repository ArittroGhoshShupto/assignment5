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
    (t) => t.name === tech.name
  );

  const handleSelectTech = () => {

    if (isSelected) return;

    setSelectedTechs([...selectedTechs, tech]);

    toast.success(`${tech.name} added to your stack!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="border border-gray-200 rounded-2xl bg-white p-5 min-h-62 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">

      {/* Card Top */}
      <div>

        {/* Logo + Badge */}
        <div className="flex items-start justify-between mb-5">

          <div className="h-11 w-11 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-9 w-9 object-contain"
            />
          </div>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-600">
            {tech.badge}
          </span>

        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs leading-5 text-gray-500">
          {tech.description}
        </p>

      </div>

      {/* Bottom */}
      <div className="mt-5">

        {/* Category / Difficulty / Rating */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">

          <span>
            {tech.category}
          </span>

          <span>
            {tech.difficulty}
          </span>

          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {tech.rating}
          </span>

        </div>

        {/* Button */}
        <button
          onClick={handleSelectTech}
          disabled={isSelected}
          className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
            isSelected
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 cursor-pointer"
          }`}
        >
          {isSelected ? "Added" : "Add to Stack"}
        </button>

      </div>

    </div>
  );
};

export default TechCard;
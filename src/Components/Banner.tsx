import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row justify-between items-center gap-12">
      {/* Text Area */}
      <div className="flex-1 space-y-5">
        <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button className="px-6 py-3 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium text-sm shadow-md hover:opacity-95 transition-all cursor-pointer">
            Explore Technologies
          </button>

          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-all cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={banner}
          alt="Dev Stack Illustration"
          className="w-90 sm:w-105 md:w-120 lg:w-135 max-w-full object-contain drop-shadow-lg transition-all"
        />
      </div>
    </div>
  );
};

export default Banner;
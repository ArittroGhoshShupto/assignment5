import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-14 flex flex-col lg:flex-row justify-between items-center gap-10">

      <div>

        <h2 className="font-bold text-4xl md:text-5xl text-slate-800">
          Build Your Ideal
        </h2>

        <h2 className="font-bold text-4xl md:text-5xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Development Stack
        </h2>

        <p className="text-gray-500 mt-5 max-w-xl leading-6">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="flex gap-3 mt-7">

          <button className="px-6 py-3 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-md font-medium shadow-sm hover:opacity-90 cursor-pointer">
            Explore Technologies
          </button>

          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 cursor-pointer">
            Learn More
          </button>

        </div>

      </div>

      <img
        src={banner}
        alt="Banner"
        className="w-80 lg:w-100 object-contain"
      />

    </div>
  );
};

export default Banner;
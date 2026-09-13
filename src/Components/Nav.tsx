import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="bg-white h-20 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-full">

        <button className="md:hidden text-2xl text-gray-700">
          ☰
        </button>

        <img src={logo} alt="Logo" />

        <ul className="hidden md:flex gap-6 items-center text-gray-600">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2 md:gap-5 items-center">
          <button className="text-gray-700">
            Sign In
          </button>

          <button className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-4 md:px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
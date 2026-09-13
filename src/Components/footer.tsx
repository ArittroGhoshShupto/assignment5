import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="text-sm text-gray-500 leading-6 mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-6">
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-purple-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-700 hover:text-purple-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-700 hover:text-purple-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-5">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-5">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-5">
              LEGAL
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-purple-600"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-gray-400 hover:text-purple-600"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
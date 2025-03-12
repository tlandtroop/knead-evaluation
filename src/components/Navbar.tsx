import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          Theme Switcher
        </h1>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          Theme Switcher
        </h1>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

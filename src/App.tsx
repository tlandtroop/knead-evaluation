import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Welcome to the Knead Theme Switcher!
          </h2>
          <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 transition-colors duration-300">
              Theme Switcher Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              This is a demonstration of the dark mode toggle feature. Try
              clicking the toggle button in the top right corner to see how it
              works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                Light/Dark Mode Features
              </h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 transition-colors duration-300">
                <li>System preference based dark mode</li>
                <li>Persistent theme selection</li>
                <li>Smooth theme transitions</li>
                <li>Accessible toggle controls</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                Implementation Details
              </h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 transition-colors duration-300">
                <li>TypeScript & React</li>
                <li>Tailwind CSS</li>
                <li>Custom React Hook</li>
                <li>Local Storage</li>
                <li>Lucide React Icons</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

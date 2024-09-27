import React, { useState, useEffect } from 'react';

function DayNightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle day/night mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme class to the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // else{
    //     body. backgroundColor = #000000
    // }
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-lg">🌞</span> {/* Emoji for day */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-black">
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDarkMode ? 'translate-x-5' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
      <span className="text-lg">🌜</span> {/* Emoji for night */}
    </div>
  );
}

export default DayNightToggle;

import { useState, useEffect } from "react";
import AnimeList from "./components/animeList";
import AnimeFilters from "./components/animeFilters";

function App() {
  const [counter, setCounter] = useState(0);

  window.electronAPI.onUpdateCounter((value: number) => {
    setCounter(counter + value);
  });

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  window.electronAPI.onToggleLightMode(() => {
    setLightTheme();
  });

  window.electronAPI.onToggleDarkMode(() => {
    setDarkTheme();
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center bg-white p-8 dark:bg-gray-900">
      <h1 className="mb-4 text-4xl font-bold text-black">Anime List</h1>
      <AnimeFilters />
      <AnimeList />
    </div>
  );
}

export default App;

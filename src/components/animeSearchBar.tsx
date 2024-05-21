import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AnimeSearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // Implementar lógica de búsqueda aquí
    console.log(`Searching for ${search}`);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementar lógica de búsqueda aquí
    console.log(`Searching for ${search}`);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative flex items-center">
      <div className="absolute left-3 flex h-full items-center">
        <i className="fas fa-search text-gray-400"></i>
      </div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Search anime..."
      />
      {search && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 flex h-full items-center text-gray-400"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </form>
  );
};

export default AnimeSearchBar;

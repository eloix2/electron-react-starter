import React from "react";
import AnimeSearchBar from "./animeSearchBar";

const AnimeFilters = () => {
  return (
    <div className="mb-4 flex space-x-4">
      <AnimeSearchBar />
      <div>
        <label
          htmlFor="genre"
          className="block text-sm font-medium text-gray-700"
        >
          Genre
        </label>
        <select
          id="genre"
          name="genre"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option>All</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Comedy</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option>All</option>
          <option>Ongoing</option>
          <option>Completed</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default AnimeFilters;

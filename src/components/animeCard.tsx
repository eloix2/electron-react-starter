import React from "react";

interface Item {
  image: string;
  title: string;
  description: string;
}

const AnimeCard = ({ item }: { item: Item }) => {
  return (
    <div className="m-8 flex w-60 transform flex-col items-center overflow-hidden rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105">
      <div className="h-full w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-white p-6">
        <h2 className="mb-2 overflow-hidden overflow-ellipsis text-center text-lg font-bold">
          {item.title}
        </h2>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </div>
  );
};

export default AnimeCard;

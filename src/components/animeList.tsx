import React from "react";
import AnimeCard from "./animeCard";

const AnimeList = () => {
  const items = [
    {
      title: "Item 1",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 1",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },

    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    {
      title: "Item 2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      description: "Description 2",
    },
    // Agrega más objetos aquí
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      {items.map((item, index) => (
        <AnimeCard key={index} item={item} />
      ))}
    </div>
  );
};

export default AnimeList;

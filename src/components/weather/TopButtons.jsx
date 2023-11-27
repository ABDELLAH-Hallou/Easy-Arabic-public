import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Doha",
    },
    {
      id: 2,
      title: "Al Khor",
    },
    {
      id: 3,
      title: "Al Wakrah",
    },
    {
      id: 4,
      title: "Al Rayyan",
    },
    {
      id: 5,
      title: "Lusail",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
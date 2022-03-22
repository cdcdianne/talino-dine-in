import React from "react";

const items = [
  "All",
  "Chefs Picks",
  "Small Plates",
  "Large Plates",
  "Pasta & Pizza",
  "Sides & Extras",
  "Desserts",
  "Ramadan Package",
];
const types = ["Vegan", "Vegetarian", "Low Carb", "Gluten Free"];

function Selections({ setSidebarOpen }) {
  return (
    <div className="bg-white w-64 md:w-60 py-4 h-full md:h-auto md:pb-10">
      <h1 className="hidden font-mainFont text-center text-xl pb-10 md:block">
        Food Selections
      </h1>
      <h1 className="font-mainFont text-center text-xl pb-10 md:hidden">
        Filter Search
      </h1>

      <h2 className="font-raleway font-semibold px-6 uppercase tracking-widest mb-2 md:hidden">
        Category
      </h2>
      {items.map((item) => (
        <p
          className={`px-6 font-raleway text-sm py-2 hover:bg-yellow-light cursor-pointer border-b border-gray-100 ${
            item === "Small Plates" &&
            "border-l-4 border-b-0 bg-yellow-light !border-yellow"
          }`}
        >
          {item}
        </p>
      ))}

      <h2 className="font-raleway font-semibold px-6 uppercase tracking-widest my-4 md:hidden">
        Food type
      </h2>

      <div className="md:hidden">
        {types.map((item) => (
          <p
            className={`px-6 font-raleway text-sm py-2 hover:bg-yellow-light cursor-pointer ${
              item === "Vegetarian" &&
              "border-l-4 bg-yellow-light border-yellow"
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="px-6 flex flex-col gap-1 mt-4 md:hidden">
        <button
          className="btn btn-block btn-primary bg-opacity-80"
          onClick={() => setSidebarOpen(false)}
        >
          Apply filters
        </button>
        <button className="btn btn-block" onClick={() => setSidebarOpen(false)}>
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default Selections;

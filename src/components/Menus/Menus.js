import React from "react";
import Menu from "./Menu";

function Menus({ name, img, names }) {
  return (
    <div className="text-white w-screen md:w-auto border-b-[15px] pt-4 pb-8 border-black md:border-b-[1px] md:border-white">
      <div className="flex justify-between items-center mb-4 px-6 md:px-0">
        <h1 className="font-mainFont text-3xl md:text-5xl">{name}</h1>
        <p className="text-yellow font-raleway text-sm cursor-pointer">
          See all
        </p>
      </div>
      <div className="menus flex overflow-x-scroll w-screen md:w-auto gap-5 md:grid md:grid-cols-2 md:gap-10 px-6 pb-5 md:pb-0">
        <Menu
          name={names ? names[0] : "Avocado Salad"}
          price="4.800"
          img={img[0]}
        />
        <Menu
          name={names ? names[1] : "Avocado Salad"}
          price="4.800"
          img={img[1]}
        />
        <Menu
          name={names ? names[0] : "Avocado Salad"}
          price="4.800"
          img={img[0]}
        />
        <Menu
          name={names ? names[1] : "Avocado Salad"}
          price="4.800"
          img={img[1]}
        />
      </div>
    </div>
  );
}

export default Menus;

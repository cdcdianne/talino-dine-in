import React from "react";

function Menu({ name, price, img }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="w-36 h-36">
        <img
          src={
            img ||
            "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          alt=""
          className="w-36 h-36 object-cover"
        />
      </div>
      <div className="md:w-24">
        <p className="md:hidden font-raleway text-sm text-center md:text-left tracking-widest">
          {price}
        </p>
        <h2 className="font-mainFont text-center md:text-left text-md md:text-xl md:leading-[20px] md:mb-2">
          {name}
        </h2>
        <p className="hidden font-raleway md:block text-sm text-center md:text-left">
          BHD {price}
        </p>
      </div>
    </div>
  );
}

export default Menu;

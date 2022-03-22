import React from "react";
import Menu from "./Menu";
import first from "../../img/products/first.png";
import second from "../../img/products/second.png";
import third from "../../img/products/third.png";
import fourth from "../../img/products/fourth.png";
import fifth from "../../img/products/fifth.png";
import sixth from "../../img/products/sixth.png";
import seventh from "../../img/products/seventh.png";

function MenusDesktop({ name }) {
  return (
    <div className="text-white w-screen md:w-auto pb-8 ">
      <div className="flex justify-between items-center mb-4 px-6 md:px-0">
        <h1 className="font-mainFont text-3xl md:text-5xl">{name}</h1>
      </div>
      <div className="product-row-desktop">
        <Menu name="Avocado Salad" price="4.800" img={first} />
        <Menu name="Avocado Salad" price="4.800" img={second} />
      </div>
      <div className="product-row-desktop">
        <Menu name="Avocado Salad" price="4.800" img={third} />
        <Menu name="Avocado Salad" price="4.800" img={fourth} />
      </div>
      <div className="product-row-desktop">
        <Menu name="Avocado Salad" price="4.800" img={fifth} />
        <Menu name="Avocado Salad" price="4.800" img={sixth} />
      </div>
      <div className="product-row-desktop border-0">
        <Menu name="Avocado Salad" price="4.800" img={seventh} />
      </div>
    </div>
  );
}

export default MenusDesktop;

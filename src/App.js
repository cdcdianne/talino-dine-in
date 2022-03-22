import "./App.css";
import Navbar from "./components/Navbar";
import background from "./img/header.jpeg";
import {
  SearchIcon,
  ShoppingBagIcon,
  FilterIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import Selections from "./components/Selections";
import Menus from "./components/Menus/Menus";
import Footer from "./components/Footer";
import { useState } from "react";
import MenusDesktop from "./components/Menus/MenusDesktop";
import chefs1 from "./img/products/chefs-pick/first.png";
import chefs2 from "./img/products/chefs-pick/second.png";
import pasta1 from "./img/products/pasta-pizza/first.png";
import pasta2 from "./img/products/pasta-pizza/second.png";
import small1 from "./img/products/first.png";
import small2 from "./img/products/second.png";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggle");
    setSidebarOpen((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      {sidebarOpen && (
        <div
          className="bg-black w-screen h-screen fixed z-20 opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`fixed left-0 top-0 h-screen z-50 transition-all duration-200 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Selections setSidebarOpen={setSidebarOpen} />
      </div>

      {/* BANNER */}
      <main className="h-[500px] w-screen md:h-5/6 relative">
        <img src={background} alt="" className="h-full w-full object-cover" />
        <div className="bg-black h-full w-full absolute top-0 opacity-20" />
        <div className="h-72 w-full bg-gradient-to-t from-secondary-bg to-transparent absolute bottom-0 md:hidden"></div>

        <div className="absolute bottom-0 md:bottom-20 text-white md:w-[600px] md:bg-secondary-bg px-6 md:pl-20 md:pr-10 md:py-10">
          <h2 className="font-raleway mb-1 md:hidden">WELCOME TO</h2>
          <h1 className="font-mainFont text-4xl font-semibold md:text-6xl">
            MASSO
          </h1>
          <p class="font-raleway text-xs md:text-lg my-2">
            Manama - Bld Number: 404, Road Number: 382 Block Number 338, Adliya
          </p>
          <div class="flex gap-6 mb-4 mt-1 ">
            <div class="font-raleway text-xs flex items-center gap-1 md:text-lg">
              <ClockIcon className="h-4 w-4" /> 40 - 50 mins
            </div>
            <div class="font-raleway text-xs md:text-lg">
              BHD 15,000 minimum order
            </div>
          </div>
        </div>
      </main>

      {/* BODY */}

      <div className="bg-secondary-bg pt-10 md:py-16">
        <div className="max-w-screen-lg mx-auto px-6 md:px-0">
          <div className="flex items-center gap-2 md:justify-between md:gap-0">
            <div
              className="rounded-full bg-white p-2 md:hidden cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            >
              <FilterIcon className="h-5 w-5 text-yellow" />
            </div>

            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full md:w-96">
              <SearchIcon className="h-6 w-6 text-yellow mr-2" />
              <input
                type="text"
                placeholder="What's your craving?"
                className="font-raleway outline-none"
              />
            </div>

            <div className="hidden bg-white rounded-full w-16 md:grid place-items-center md:py-2">
              <svg height="15" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6638 10.3751L16.6413 1.35509C16.5126 1.17297 16.3414 1.02511 16.1424 0.92444C15.9435 0.823771 15.7229 0.773353 15.5 0.77759C15.06 0.77759 14.62 0.970091 14.3588 1.36884L8.33625 10.3751H1.75C0.99375 10.3751 0.375 10.9938 0.375 11.7501C0.375 11.8738 0.38875 11.9976 0.43 12.1213L3.9225 24.8676C4.23875 26.0226 5.2975 26.8751 6.5625 26.8751H24.4375C25.7025 26.8751 26.7613 26.0226 27.0913 24.8676L30.5838 12.1213L30.625 11.7501C30.625 10.9938 30.0063 10.3751 29.25 10.3751H22.6638ZM11.375 10.3751L15.5 4.32509L19.625 10.3751H11.375ZM15.5 21.3751C13.9875 21.3751 12.75 20.1376 12.75 18.6251C12.75 17.1126 13.9875 15.8751 15.5 15.8751C17.0125 15.8751 18.25 17.1126 18.25 18.6251C18.25 20.1376 17.0125 21.3751 15.5 21.3751Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="pt-8 md:pt-0 md:px-0">
          <div className="md:max-w-screen-xl mx-auto flex gap-10 md:border-t-[1px] md:border-gray-500 md:mt-10 md:pt-9"></div>
          <div className="md:max-w-screen-lg mx-auto flex gap-10">
            <div className="hidden md:block">
              <Selections />
            </div>
            <div className="flex flex-col gap-5 md:hidden xs:pb-8">
              <Menus
                name="Chefs Pick"
                img={[chefs1, chefs2]}
                names={["Dinner Course", "Light Course"]}
              />
              <Menus
                name="Small Plates"
                img={[small1, small2]}
                names={["Avocado Salad", "Bresaola della Valtellina"]}
              />
              <Menus
                name="Pasta & Pizza"
                img={[pasta1, pasta2]}
                names={["Pizza Ai Funghi", "Beef Shortrib lasagne"]}
              />
            </div>
            <div className="hidden md:block">
              <MenusDesktop name="Small Plates" />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

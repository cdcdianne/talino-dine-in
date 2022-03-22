import React from "react";
import logo from "../img/logo.svg";

function Footer() {
  return (
    <div className="font-raleway bg-black py-14 text-white px-6 md:px-0">
      <div className="custom-mx-100 mx-2">
        <img src={logo} alt="" className="h-8 text-center mx-auto md:mx-0" />

        <div className="flex flex-col gap-10 md:flex-row md:gap-40">
          {/* LEFT */}
          <div className="w-full">
            <div className="flex flex-col gap-1 md:flex-row md:flex-wrap items-center md:gap-4 font-semibold my-5 md:justify-between justify-around">
              <p>About Us</p>
              <p>Partner With Us</p>
              <p>Join Our Team</p>
              <p>FAQs</p>
              <p>Press</p>
            </div>

            <div className="mb-4 flex justify-center md:justify-start xl:flex">
              <a href="#!" type="button" className="mr-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9999 0.929932C11.7082 0.929932 0.833221 11.7808 0.833221 25.1449C0.833221 37.2283 9.67822 47.2574 21.2299 49.0699V32.1533H15.0916V25.1449H21.2299V19.8041C21.2299 13.7383 24.8307 10.4033 30.3649 10.4033C32.9991 10.4033 35.7541 10.8624 35.7541 10.8624V16.8316H32.7091C29.7124 16.8316 28.7699 18.6924 28.7699 20.6016V25.1449H35.4882L34.4007 32.1533H28.7699V49.0699C34.4646 48.1705 39.6502 45.2649 43.3905 40.8776C47.1309 36.4902 49.1795 30.9102 49.1665 25.1449C49.1665 11.7808 38.2916 0.929932 24.9999 0.929932Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#!" type="button">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9998 15.4496C18.8424 15.4496 15.4496 18.8424 15.4496 22.9998C15.4496 27.1573 18.8424 30.55 22.9998 30.55C27.1572 30.55 30.55 27.1573 30.55 22.9998C30.55 18.8424 27.1572 15.4496 22.9998 15.4496ZM45.6447 22.9998C45.6447 19.8733 45.6731 16.775 45.4975 13.6541C45.3219 10.0291 44.4949 6.81194 41.8442 4.16116C39.1877 1.50471 35.9762 0.683423 32.3512 0.507837C29.2246 0.332251 26.1264 0.360571 23.0055 0.360571C19.8789 0.360571 16.7807 0.332251 13.6598 0.507837C10.0348 0.683423 6.8176 1.51038 4.16682 4.16116C1.51037 6.8176 0.689084 10.0291 0.513498 13.6541C0.337912 16.7807 0.366232 19.8789 0.366232 22.9998C0.366232 26.1207 0.337912 29.2246 0.513498 32.3455C0.689084 35.9705 1.51604 39.1877 4.16682 41.8385C6.82326 44.4949 10.0348 45.3162 13.6598 45.4918C16.7863 45.6674 19.8846 45.6391 23.0055 45.6391C26.132 45.6391 29.2303 45.6674 32.3512 45.4918C35.9762 45.3162 39.1934 44.4893 41.8442 41.8385C44.5006 39.1821 45.3219 35.9705 45.4975 32.3455C45.6787 29.2246 45.6447 26.1264 45.6447 22.9998ZM22.9998 34.6168C16.5711 34.6168 11.3828 29.4285 11.3828 22.9998C11.3828 16.5711 16.5711 11.3828 22.9998 11.3828C29.4285 11.3828 34.6168 16.5711 34.6168 22.9998C34.6168 29.4285 29.4285 34.6168 22.9998 34.6168ZM35.0926 13.6201C33.5916 13.6201 32.3795 12.408 32.3795 10.9071C32.3795 9.40608 33.5916 8.19397 35.0926 8.19397C36.5936 8.19397 37.8057 9.40608 37.8057 10.9071C37.8061 11.2635 37.7363 11.6165 37.6001 11.9458C37.4639 12.2752 37.2641 12.5745 37.012 12.8265C36.76 13.0785 36.4607 13.2783 36.1314 13.4145C35.802 13.5507 35.449 13.6206 35.0926 13.6201Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row items-center flex-wrap gap-4 pt-4 md:justify-between">
              <p className="links">Wellness Policy</p>
              <p className="links">Privacy Policy</p>
              <p className="links">Terms & Conditions</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-left w-full">
            <h3>Get the latest from DINE IN</h3>
            <div className="flex flex-col md:flex-row gap-2 my-2">
              <input
                type="text"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border border-white px-4 py-2 md:w-80"
              />
              <button className="bg-yellow px-6 py-2">SUBSCRIBE</button>
            </div>
            <p className="mt-4 mb-2 font-raleway">customerservice@dinein.me</p>
            <p className="font-raleway">
              We are located in Seef District, Manama, Bahrain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

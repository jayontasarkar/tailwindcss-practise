import React, { useState } from "react";

import Logo from "../../assets/images/loopstudios/logo.svg";
import InteractiveImg from "../../assets/images/loopstudios/desktop/image-interactive.jpg";
import DeepEarthImg from "../../assets/images/loopstudios/desktop/image-deep-earth.jpg";
import DeepEarthMobileImg from "../../assets/images/loopstudios/mobile/image-deep-earth.jpg";

import FacebookIcon from "../../assets/images/loopstudios/icon-facebook.svg";
import TwitterIcon from "../../assets/images/loopstudios/icon-twitter.svg";
import PinterestIcon from "../../assets/images/loopstudios/icon-pinterest.svg";
import InstagramIcon from "../../assets/images/loopstudios/icon-instagram.svg";

const LoopStudiosPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="hero">
        <div class="container max-w-6xl mx-auto px-6 py-12">
          <nav class="flex items-center justify-between font-bold text-white">
            <img src={Logo} alt="" />
            <div class="hidden h-10 font-alata md:flex md:space-x-8">
              <div class="group">
                <a href="#">About</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="#">Careers</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="#">Events</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="#">Products</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="#">Support</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            <div class="md:hidden">
              <button
                id="menu-btn"
                type="button"
                class={`${
                  isOpen ? "open" : ""
                } z-40 block hamburger md:hidden focus:outline-none`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
              </button>
            </div>
          </nav>

          <div
            id="menu"
            class={`${
              isOpen ? "flex" : "hidden"
            } absolute top-0 bottom-0 left-0  flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href="#" class="hover:text-pink-500">
              About
            </a>
            <a href="#" class="hover:text-pink-500">
              Careers
            </a>
            <a href="#" class="hover:text-pink-500">
              Events
            </a>
            <a href="#" class="hover:text-pink-500">
              Products
            </a>
            <a href="#" class="hover:text-pink-500">
              Support
            </a>
          </div>

          <div class="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img src={InteractiveImg} alt="interactive desktop" />
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden btn md:block">See All</button>
          </div>

          {/* Items Container */}
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            {/* Item 1 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Deep Earth
              </h5>
            </div>
            {/* Item 2 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Night Arcade
              </h5>
            </div>
            {/* Item 3 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Soccer Team VR
              </h5>
            </div>
            {/* Item 4 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Grid
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-10">
            {/* Item 5 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                From Up Above VR
              </h5>
            </div>
            {/* Item 6 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Pocket Borealis
              </h5>
            </div>
            {/* Item 7 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Curiosity
              </h5>
            </div>
            {/* Item 8 */}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src={DeepEarthImg}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <img
                src={DeepEarthMobileImg}
                className="md:hidden w-full"
                alt=""
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Make It FishEye
              </h5>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img src={Logo} className="w-44 md:ml-3" alt="logo" />
              </div>
              <div className="flex flex-col items-center space-between space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center mx-auto md:justify-start md:mx-auto space-x-4">
                <div className="h-8 group">
                  <a href="#">
                    <img src={FacebookIcon} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={TwitterIcon} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={PinterestIcon} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={InstagramIcon} className="h-6" alt="" />
                  </a>
                </div>
              </div>
              <div className="font-bold">
                &copy; 2023 loopstudios. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LoopStudiosPage;

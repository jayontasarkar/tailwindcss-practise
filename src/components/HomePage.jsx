import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h3 className="text-3xl mb-5"> TailwindCSS Mini Projects</h3>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link
              to="/email-subscribe"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Email Subscribe
            </Link>
          </li>
          <li>
            <Link
              to="/price-grid"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Price Grid
            </Link>
          </li>
          <li>
            <Link
              to="/product-modal"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Product Modal
            </Link>
          </li>
          <li>
            <Link
              to="/image-gallery"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Image Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/login-modal"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Login Modal
            </Link>
          </li>
        </ul>
      </div>
      <h3 className="text-3xl mt-10 mb-5"> Landing Page Projects</h3>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link
              to="/loopstudios-website"
              className="text-blue-500 hover:text-blue-700 transition-all hover:underline underline-offset-4"
            >
              Loopstudios Website
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

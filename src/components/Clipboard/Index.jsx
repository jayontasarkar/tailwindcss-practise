import React from "react";
import Logo from "../../assets/images/clipboard/logo.svg";
import FeatureImg from "../../assets/images/clipboard/image-computer.png";
import DevicesImg from "../../assets/images/clipboard/image-devices.png";
import BlacklistIcon from "../../assets/images/clipboard/icon-blacklist.svg";
import TextIcon from "../../assets/images/clipboard/icon-text.svg";
import PreviewIcon from "../../assets/images/clipboard/icon-preview.svg";
import GoogleLogo from "../../assets/images/clipboard/logo-google.png";
import MicrosoftLogo from "../../assets/images/clipboard/logo-microsoft.png";
import IbmLogo from "../../assets/images/clipboard/logo-ibm.png";
import HpLogo from "../../assets/images/clipboard/logo-hp.png";
import VectorGraphicsLogo from "../../assets/images/clipboard/logo-vector-graphics.png";

import FacebookIcon from "../../assets/images/clipboard/icon-facebook.svg";
import TwitterIcon from "../../assets/images/clipboard/icon-twitter.svg";
import InstagramIcon from "../../assets/images/clipboard/icon-instagram.svg";

const ClipboardWebsitePage = () => {
  return (
    <>
      <section id="hero" className="">
        <div className="section-container mb-40 pt-16">
          <img src={Logo} className="mx-auto my-16" alt="logo" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* Action Button Container */}
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="section-paragraph mb-24 text-2xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div class="relative flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div class="md:w-1/2">
            <img
              src={FeatureImg}
              alt=""
              class="md:absolute top-0 right-[50%]"
            />
          </div>

          {/* Item Container */}
          <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 text-center md:text-left md:pl-16">
            {/* Item 1 */}
            <div>
              <h5>Quick Search</h5>
              <p class="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/** Item 2 */}
            <div>
              <h5>iCloud Sync</h5>
              <p class="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* Item 3 */}
            <div>
              <h5>Completely History</h5>
              <p class="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access anywhere section */}
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-paragraph mb-24 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src={DevicesImg} alt="devices" className="mx-auto" />
        </div>
      </section>
      {/* Supercharge Section */}
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-paragraph mb-16 text-xl">
            We've got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <img src={BlacklistIcon} alt="blacklist icon" className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={TextIcon} alt="blacklist icon" className="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={PreviewIcon} alt="blacklist icon" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* References Section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src={GoogleLogo} alt="google" />
          <img src={IbmLogo} alt="ibm" />
          <img src={MicrosoftLogo} alt="microsoft" />
          <img src={HpLogo} alt="hp" />
          <img src={VectorGraphicsLogo} alt="vector graphics" />
        </div>
      </section>
      {/* Call to actions */}
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="section-paragraph mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          {/* Action Button Container */}
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src={Logo} alt="logo" className="scale-50" />
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQS
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src={FacebookIcon}
                    className="duration-200 ficon"
                    alt="facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src={TwitterIcon}
                    className="duration-200 ficon"
                    alt="twitter"
                  />
                </a>
                <a href="#">
                  <img
                    src={InstagramIcon}
                    className="duration-200 ficon"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ClipboardWebsitePage;

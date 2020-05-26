import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import LogoDark from "../images/logo-dark.svg";
import Helmet from "react-helmet";
// import LogoLight from "../images/logo-light.svg";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white bg-black";
  // headerClass += scrolled ? " bg-white shadow" : " bg-black";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow text-black bg-orange";
  // navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  // navActionClass += textWhite || scrolled ? " bg-black text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 font-bold text-white p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  // navContentClass += textWhite || scrolled ? " bg-white" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  // titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  // titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            {/* {siteTitle} */}
            <img
              src={LogoDark} // scrolled ? LogoLight : LogoDark
              style={{ height: 60 }}
              alt="codeSTACKr logo"
            />
          </Link>
        </div>

        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map(i => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
              <li className="mt-2 ml-5">
                <Helmet>
                  <script src="https://apis.google.com/js/platform.js" />
                </Helmet>

                <div
                  className="g-ytsubscribe"
                  data-channelid="UCDCHcqyeQgJ-jVSd6VJkbCw"
                  data-layout="default"
                  data-count="default"
                ></div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <hr className="border-b border-orange opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;

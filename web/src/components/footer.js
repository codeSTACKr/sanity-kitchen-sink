import { Link } from "gatsby";
import React from "react";
import LogoDark from "../images/logo-dark.svg";

const Footer = ({ siteTitle }) => (
  <footer className="bg-darkBlack">
    <div className="container mx-auto px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="w-1/2 mb-6">
          <a href="#">
            <img src={LogoDark} style={{ height: 50 }} alt="codeSTACKr logo" />
          </a>
          <p class="text-gray-200 my-6">
            Built with <strong>Gatsby</strong>. Data from <strong>Sanity.io</strong>. Hosted on{" "}
            <strong>Netlify</strong>.
          </p>
          <p className="uppercase text-gray-200 md:pb-6">© 2020 codeSTACKr. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-200 md:mb-6">Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="/blog">
                <span className="hover:underline text-gray-600 hover:text-orange">Blog</span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://courses.codeSTACKr.com"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Courses
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex-1">
          <p className="uppercase text-gray-200 md:mb-6">Legal</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Terms
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div> */}
        <div className="flex-1">
          <p className="uppercase text-gray-200 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://youtube.com/codeSTACKr"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                YouTube
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/codeSTACKr"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.instagram.com/codeSTACKr"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex-1">
          <p className="uppercase text-gray-200 md:mb-6">Company</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/about"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                About
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="no-underline hover:underline text-gray-600 hover:text-orange"
              >
                Contact
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;

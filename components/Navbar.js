import React from "react";
import Link from "next/link";

import {
  Bars3Icon,
} from '@heroicons/react/24/outline'; // https://heroicons.com/


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  bg-regen-blue shadow">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/">
                <a
                  className="font-Cormorant text-white font-semibold text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                  href="#pablo"
                >
                  Regenerative Fund
                </a>
              </Link>
              <button
                className="cursor-pointer text-xl text-white leading-none rounded block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                   <Bars3Icon className="text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"/>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                (navbarOpen ? " block" : " hidden")
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <a
                    className="hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#paulo"
                  >
                      Invested In
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#paulo"
                  >
                      Regenerative Projects
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#paulo"
                  >
                     Artists Collective
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#paulo"
                  >
                    About Us
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                    <Link href= "/auth/login/" passHref>
                        <button
                          className=" shadow-lg bg-regen-seablue shadow-black text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          type="button"
                        >
                         Login
                        </button>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
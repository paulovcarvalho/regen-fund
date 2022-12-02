import React from "react"
import Link from "next/link"
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

import {
  Bars3Icon,
} from '@heroicons/react/24/outline'; // https://heroicons.com/


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { user, logout } = useAuth()
    const router = useRouter()
    
    return (
      <>
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-3 py-3 navbar-expand-lg  bg-regen-blue shadow opacity-90 overflow-clip">
          <div className="container mx-auto flex flex-wrap items-center justify-between overflow-clip">
            <div className="w-full text-white  relative px-2 flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start font-Cormorant text-2xl">
              <Link href="/">
                  Regenerative Fund
                
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
              className={ "lg:flex flex-grow py-2 items-center rounded-lg lg:bg-opacity-0 lg:shadow-none" +
                (navbarOpen ? " block" : " hidden")
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className= {router.pathname == "/invesdedIn" ? "rounded-full bg-regen-seablue hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    : "flex items-center hoverAnimation text-white px-5 py-2 lg:py-2  text-xs uppercase font-bold"}>
                  <Link href="/invesdedIn" >
                      Invested In
                  </Link>
                </li>
                <li className= {router.pathname == "/regenerativeProjects" ? "rounded-full bg-regen-seablue hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    : "flex items-center hoverAnimation text-white px-5 py-2 lg:py-2  text-xs uppercase font-bold"}>
                  <Link href="/regenerativeProjects" >
                      Regenerative Projects
                  </Link>
                </li>
                <li className= {router.pathname == "/artistsCollective" ? "rounded-full bg-regen-seablue hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    : "flex items-center hoverAnimation text-white px-5 py-2 lg:py-2 text-xs uppercase font-bold"} >
                  <Link href="/artistsCollective">   
                      Artists Collective 
                  </Link>
                </li>
                <li className={router.pathname == "/aboutUs" ? "rounded-full bg-regen-seablue hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    : "flex items-center hoverAnimation text-white px-5 py-2 lg:py-2 text-xs uppercase font-bold"} >
                  <Link href="/aboutUs">
                      About Us
                  </Link>
                </li>
              </ul>
              
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-x-7">       
                  <li className="flex items-center">
                    {user  ? (
                              <div>
                                    <button
                                      className=" bg-regen-seablue text-white active:bg-gray-800 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick = {() => {
                                        logout()
                                      }}
                                    >
                                    Logout
                                    </button>
                                </div>
                      ) : (
                            <button
                                  className="  bg-regen-seablue text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick = {() => {
                                    router.push("/auth/login")
                                  }}
                              >
                                Login
                          </button>
                      )}
                    </li>
                    <li className="">
                    {user  ? (
                              <div className="flex flex-row align-middle hover:mix-blend-luminosity cursor-pointer"
                                  onClick= {() => {
                                      router.push("/usr/userProfile")
                                    }}
                              >
                                  <img
                                    src={user.photo}
                                    alt=""
                                    className="h-10 w-10 rounded-full xl:mr-2.5"
                                  />
                                 
                                </div>
                      ) : (
                            <></>
                      )}
              </li>    
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
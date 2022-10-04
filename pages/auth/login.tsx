import Link from "next/link";
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'


var errorMessage = ''

const Login = () => {
const router = useRouter()

  const { user, login, googleSignin } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      await login(data.email, data.password)
    } catch (error) {
      console.log(error)
      const errorCode = error.code;
      errorMessage = error.message;
    } 
    router.push('/usr/userpage')
  }

  const handleGoogleLogin = async (e: any) => {
    e.preventDefault()
    try {
      await googleSignin()
    } catch (error) {
      const errorCode = error.code;
      errorMessage = error.message;
    } 
    router.push('/usr/userpage')
  }

  return (
    <>
      <div className="absolute w-full h-full bg-center bg-cover flex items-center">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: "url('/img/bgImage_1st.jpg')",
                }}
            >
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
      <div  id="login"
            className="container fixed top-0 mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full max-w-md min-w-fit px-4">
            <div className="relative bg-slate-100 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className=" text-sm text-regen-blue font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white  text-regen-blue text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick= {handleGoogleLogin}
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className=" text-regen-blue text-center mb-3">
                  <small>Or sign in with credentials</small>
                </div>
                <div className="  text-regen-blue text-center mb-3 flex-wrap max-w">
                  <hr className="mt-6 border-b-1 border-gray-200" />
                  <small> {errorMessage} </small>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-regen-blue text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      id="txtEmail"
                      type="loginEmail"
                      className="border-0 px-3 py-3 placeholder:text-gray-300 text-regen-blue bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      required
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-regen-blue text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                       id="txtPassword"
                      type="password"
                      className="border-0 px-3 py-3 placeholder:text-gray-400  text-gray-500  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      required
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-500 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold  text-regen-blue">
                        Remember me
                      </span>
                      <span id="" className="ml-2 text-sm font-semibold  text-regen-blue">
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      id="btnLogin"
                      className=" text-white bg-regen-blue active:bg-gray-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-white"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/signup">
                  <a href="#pablo" className="text-white">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login

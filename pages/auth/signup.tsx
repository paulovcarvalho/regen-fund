import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'



var errorMessage = '';

const Signup = () => {
  const { user, signup,googleSignin } = useAuth()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const handleSignup = async (e: any) => {
    e.preventDefault()
    try {
      await signup(data.email, data.password)
    } catch (error) {
      console.log(error)
      const errorCode = error.code;
      errorMessage = error.message;
    }
    router.push('/usr/userProfile')
  }

  const handleGoogleLogin = async (e: any) => {
    e.preventDefault()
    try {
      await googleSignin()
    } catch (error) {
      const errorCode = error.code;
      errorMessage = error.message;
    } 
    router.push('/usr/userProfile')
  }

  return (
    <div>
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
      <div className="container fixed top-0 mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full max-w-md min-w-fit px-4">
            <div className="relative bg-gray-300 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-regen-blue text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-50 text-regen-blue px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick= {handleGoogleLogin}
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <div className="text-blueGray-400 text-center mb-3 font-bold flex-wrap max-w">
                   <hr className="mt-6 border-b-1 border-gray-400" />
                  <small> error is {errorMessage}</small>
                </div>
                <form  onSubmit={handleSignup}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-regen-blue text-xs font-bold mb-2" htmlFor="grid-password">
                      Email
                    </label>

                    <input id="txtEmail" type="email" className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Type eMail"
                      required
                      onChange={(e: any) =>
                                  setData({
                                    ...data,
                                    email: e.target.value,
                                  })
                        }
                      value={data.email}
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
                      className="border-0 px-3 py-3 placeholder-blueGray-300  text-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      required
                      onChange={(e: any) =>
                              setData({
                                ...data,
                                password: e.target.value,
                              })
                      }
                      value={data.password}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-regen-blue ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-regen-blue">
                        I agree with the
                        <a
                          href="#pablo"
                          className="text-regen-blue "
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      id="btnSignup"
                      className=" text-white bg-regen-blue active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Signup
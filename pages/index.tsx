import Head from "next/head";

import HomeTopSection from "../components/HomeTopSection";
import HomeBottomSection from "../components/HomeBottomSection"
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import ProjectCaroucel from "../components/ProjectCaroucel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta
          name="Regen Fund"
          content="©Value Flow is creating the Regen Fund Pilot Experiment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeTopSection />
      <div className="flex">
        <div className="flex w-screen h-[200vh] bg-center bg-cover overflow-hidden">
          <div
            className="w-screen h-[200vh] bg-center bg-cover bg-gradient-to-br from-black via-black to-transparent overflow-hidden"
            style={{ backgroundImage: "url('/img/bgImage_2nd.jpg')" }}
          >
            <div
              className="flex w-screen h-screen bg-right bg-cover overflow-hidden  bg-black bg-opacity-20"
              style={{ backgroundImage: "url('/img/wave.svg')" }}
            ></div>
            <div
              className="flex w-screen h-screen bg-bottom bg-cover overflow-hidden  bg-black bg-opacity-20"
              style={{ backgroundImage: "url('/img/wave-dark.svg')" }}
            ></div>
          </div>
          <div className="absolute w-screen">
            <Dashboard/>
            <div className="absolute w-screen mt-40">
              <ProjectCaroucel/>
              <div className="absolute w-screen justify-center">
              <HomeBottomSection/>
            </div>
            </div>
            
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

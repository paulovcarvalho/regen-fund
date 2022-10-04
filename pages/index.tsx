import Head from 'next/head'


import MainSection from '../components/MainSection'
import { 
  getAuth,
  onAuthStateChanged, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator
} from 'firebase/auth';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Create Next App</title>
        <meta name="Regen Fund" content="©Value Flow is creating the Regen Fund Pilot Experiment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

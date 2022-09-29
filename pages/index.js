import Head from 'next/head'
import Image from 'next/image'

import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Regen Fund" content="©Value Flow is creating the Regen Fund Pilot Experiment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className="text-3xl font-bold">
      </h1>
   
            {/* Navegation Bar */}
            <Navbar/>

            {/* Main Section */}
            <MainSection/>
            {/* projects */}



            {/* Invite Section */}

            {/* Footer */}
  

      </main>
    
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

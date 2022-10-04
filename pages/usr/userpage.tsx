import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../context/AuthContext'

export default function Userpage() {

  return (
    <div className="absolute w-full h-full bg-center bg-cover flex-row items-start py-20">
      <Sidebar/>
    
      <body>
          <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
            <a id="S1">
              <h1> First Section </h1>
            </a>
            <a id="S2">
              second Section
            </a>
            <a id="S3">
              Third Section
            </a>
          </main>
    </body>
    </div>
  )
}

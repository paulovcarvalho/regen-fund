import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../context/AuthContext'

export default function UserTeam() {

  return (
    <body>
    <div className="relative w-full h-full flex-col items-start py-20">
      <Sidebar/>
    </div>
    <main className="w-[calc(100%-100px)] lg:w-[calc(100%-550px)] ml-auto bg-white min-h-screen flex max-w-[1500px] mx-auto">
            <a id="Profile">
              <h1> Team </h1>
            </a>
            
    </main>

    </body>

  )
}
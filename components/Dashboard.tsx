import React from 'react'
import CardStats from './CardStats'

export default function Dashboard() {
  return (
    <div className='flex'>

            <div className="flex w-screen h-[200vh] bg-center bg-cover overflow-hidden">
                    <div className="w-screen h-[200vh] bg-center bg-cover bg-gradient-to-br from-black via-black to-transparent overflow-hidden"
                        style={{ backgroundImage: "url('/img/bgImage_2nd.jpg')" }}
                    >
                            <div className="flex w-screen h-screen bg-right bg-cover overflow-hidden"
                                style={{ backgroundImage: "url('/img/wave.svg')" }}
                            >
                            </div>
                            <div className="flex w-screen h-screen bg-bottom bg-cover overflow-hidden"
                                style={{ backgroundImage: "url('/img/wave-dark.svg')" }}
                            >
                            </div>
                </div>
                <div className="absolute">
                        <div className="flex w-screen p-6 flex-row content-center items-center bg-regen-lighblue justify-center min-h-screen-30 overflow-scroll">
                                            
                                <div className=" xl:mb-0 px-4">
                                    <CardStats/>
                                </div>
                                <div className="xl:mb-0 px-4">
                                   <CardStats/>
                                </div>
                                <div className="xl:mb-0 px-4">
                                      <CardStats/>
                                </div>
                                <div className="xl:mb-0 px-4">
                                    <CardStats/>
                                </div>
                                <div className="xl:mb-0 px-4">
                                    <CardStats/>
                                </div>
                        </div>
                </div>
                
            </div>
    </div>
  )
}
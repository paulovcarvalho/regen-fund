import React from "react";
import { useRouter } from "next/router";
import { BsFillCheckCircleFill, BsCircle,BsArrowRightCircle } from "react-icons/bs";

export default function ProjectTaskDashboard() {
    const router = useRouter();
    const urlRef = "/Project/ProjectPublic";
    
  return (
    <>
 <div className="hidden relative sm:flex flex-col m-2 max-w-[400px] min-w-[400px] min-h-[280px] max-h-[280px] overflow-hidden rounded-xl bg-slate-200 shadow-xl dark:bg-gray-900 dark:text-gray-100 duration-500">
        <div>
        <div className=" bg-gray-600 rounded-full max-w-[400px] min-w-[400px]">
            <div className="w-[90%] bg-gradient-to-r from-green-500 to-green-700 rounded-full max-h-[30px]">
              <div className="flex  max-w-[80px] min-w-[50px]  max-h-[80px] min-h-[30px] py-1 font-Montserrat text-white text-sm px-2 rounded-full">
                €5.300
              </div>
            </div>
          </div>

          <div className="flex text-center justify-center">
            <h2 className="mb-4 text-lg pt-2 italic font-Cormorant">
                How will the received abundance be used
            </h2>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row px-4 space-x-4">
                <BsFillCheckCircleFill className="text text-green-700 text-2xl" />
                <div className="font-Montserrat italic">
                    Goal A is  to do y
                </div>
            </div>
            <div className="flex flex-row px-4 space-x-4">
                <BsCircle className=" text-gray-500 text-2xl" />
                <div className="font-Montserrat italic">
                     Purchase tool A
                </div>
            </div>
            <div className="flex flex-row px-4 space-x-4">
                <BsCircle className=" text-gray-500 text-2xl" />
                <div className="font-Montserrat italic">
                     Improve watter capture
                </div>
            </div>
            <div className="flex flex-row px-4 space-x-4">
                <BsCircle className=" text-gray-500 text-2xl" />
                <div className="font-Montserrat italic">
                     Do this and that
                </div>
            </div>
          </div>

          <div className="flex text-right justify-end m-4">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-regen-sealighblue  hover:text-white"
                    
                    >
                      <BsArrowRightCircle className="w-7 h-7" />
                      <input
                      type="file"
                
                      hidden
    
                    />
                    </div>          
          </div>

        </div>
       
      </div>
    </>
  );
}

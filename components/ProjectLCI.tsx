import React from "react";
import { useRouter } from "next/router";
const xdata = ((2 * 22) / 7) * 120;
import { RadialBarChart, PolarAngleAxis, RadialBar,PolarRadiusAxis,YAxis } from "recharts";

export default function ProjectLCI() {
  const router = useRouter();
  const urlRef = "/Project/ProjectPublic";
  const index = [
    { name: "A", value: 10, fill: 'rgb(153 27 27)' },
    { name: "B", value: 80, fill: 'rgb(249 115 22)' },
    { name: 'C', value: 20, fill: 'rgb(34 197 94 )' },
    { name: 'Natural Index', value: 90, fill: 'rgb(21 128 61)' },
  ];
  
  return (
    <>
      <div className="hidden relative sm:flex flex-col m-2 max-w-[400px] min-w-[400px] min-h-[330px] max-h-[330px] p-5 space-y-4 overflow-hidden rounded-xl bg-slate-200 shadow-xl dark:bg-gray-900 dark:text-gray-100 duration-500">
        <div className="flex flex-col">
          <div className="flex text-center justify-center">
            <h2 className="mb-4 text-xl italic font-Cormorant">
              Project Life Contributions
            </h2>
          </div>
        <div className="flex flex-row">
        <RadialBarChart width={210} height={210} data={index}  innerRadius={40} outerRadius={100} barSize={10} startAngle={90} endAngle={-270} >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar  background={{ fill: '#D9D9D9' }} dataKey="value" cornerRadius={30 / 2}/>
          </RadialBarChart>
          <div className="flex flex-col pt-4  space-y-4">
             <div className="flex flex-row align-middle">
                <div className=" bg-green-700 max-w-[30px] min-w-[30px] min-h-[30px] max-h-[30px] font-Montserrat text-sm italic font-semibold rounded-full text-center pt-1">
                {index[3].value} 
                </div>
                <div className="font-Montserrat italic px-1 pt-1"> Natural Index</div>
             </div>
             <div className="flex flex-row">
                <div className=" bg-green-500 max-w-[30px] min-w-[30px] min-h-[30px] max-h-[30px] font-Montserrat text-sm italic font-semibold rounded-full text-center pt-1">
                {index[2].value} 
                </div>
                <div className="font-Montserrat italic px-1 pt-1"> Social Index</div>
             </div>
             <div className="flex flex-row">
                <div className=" bg-orange-500  max-w-[30px] min-w-[30px] min-h-[30px] max-h-[30px] font-Montserrat text-sm italic font-semibold rounded-full text-center pt-1">
                {index[1].value} 
                </div>
                <div className="font-Montserrat italic px-1 pt-1"> Ethical Index</div>
             </div>
             <div className="flex flex-row">
                <div className=" bg-red-800  max-w-[30px] min-w-[30px] min-h-[30px] max-h-[30px] font-Montserrat text-sm text-white italic font-semibold rounded-full text-center pt-1">
                {index[0].value} 
                </div>
                <div className="font-Montserrat text-sm italic px-1 pt-1"> Reciprocity Index</div>
             </div>
         </div>
        </div>
        <div className="flex text-center justify-center">
            <h2 className="mb-4 text-sm italic font-Montserrat font-light">
              Project Life Contributions compares the project with its potential
            </h2>
          </div>
        </div>

      </div>
    </>
  );
}

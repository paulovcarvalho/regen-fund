import React from "react";
import { useRouter } from "next/router";

export default function ProjectHead() {
  const router = useRouter();
  const urlRef = "/Project/ProjectPublic";
  return (
    <>
      <div className="flex flex-col bg-slate-400  m-2 max-w-[800px] min-w-[800px] min-h-[300px] max-h-[700px] space-y-4 overflow-hidden rounded-xl shadow-xl duration-500">
        <img
          src="https://source.unsplash.com/random/600x600/?5"
          alt=""
          className=" object-cover  w-full border-white rounded-xl h-[330px] dark:bg-gray-50"
        />
        <div className="absolute border-white">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover border-[6px] border-white min-w-[120px] min-h-[120px] mx-[50px] mt-[250px] rounded-full dark:bg-gray-500"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 max-w-[800px] min-w-[800px]">
        <div>
          <div className="flex align-top pl-[190px]">
            <h2 className="text-4xl font-semibold font-Cormorant">
              Project title bit title that ads ee a a a grows
            </h2>
          </div>
          <p className=" dark:text-gray-100 pt-4 pl-[190px] font-Montserrat font-light text-base">
            Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
            pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud
            atqui apeirian...
          </p>
        </div>
      </div>
    </>
  );
}

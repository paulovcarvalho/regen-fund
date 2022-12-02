import React from 'react'
import ProjectCard from './ProjectCard'

import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

import { db } from "../config/firebase";


export default function ProjectCaroucel() {

    const indicatorlist = [
        ["5%","Natural Index"], 
        ["+1%","Social Index"], 
        ["4%","Reciprocity Index"], 
        ["5HA","Land Protected"],
        ["A","Effort"], 
        ["10Y","Commitment"], 
    ];
  /*
    useEffect(
      () =>
        onSnapshot(
          query(collection(db, "Key Indicators")),
          (snapshot) => {
            setIndicators(snapshot.docs);
          }
        ),
      [db]
    );
*/
  return (
 <>
  <h2 className="flex justify-center text-center text-4xl pl-10 py-50 font-Cormorant font-bold text-white"> Regenerative Actions are ready for a wave of support</h2>
  <div className="flex py-20">
    <div className="flex flex-row overflow-scroll px-8 py-2 max-w-[100%]">
        <ProjectCard indicators = {indicatorlist}  />
        <ProjectCard indicators = {indicatorlist}  />
        <ProjectCard indicators = {indicatorlist}  />
        <ProjectCard indicators = {indicatorlist}  />
        <ProjectCard indicators = {indicatorlist}  />
        <ProjectCard indicators = {indicatorlist}  />
    </div>
    </div>
    </>
  )
}
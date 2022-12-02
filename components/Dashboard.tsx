import React from 'react'
import CardStats from './CardStats'
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

import { db } from "../config/firebase";


export default function Dashboard() {
    const [indicators, setIndicators] = useState([]);
  
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

  return (
    <div className='flex flex-row adjust-top'>
                <div className="relative">
                        <div className="flex w-scree p-8 flex-wrap content-center items-center justify-center min-h-screen-30 overflow-scroll"
                        >
                              { indicators.map((indicator) =>(
                                    <div key={indicator.id} className=" xl:mb-0 px-2">
                                        <CardStats 
                                            statSubtitle={indicator.data().Indicator} 
                                            statTitle={indicator.data().Value+indicator.data().Unit}
                                            statArrow={indicator.data().Trend}
                                            statDescripiron={indicator.data().TrendDesc}
                                            statPercent={indicator.data().TrendPercent}
                                            statPercentColor={indicator.data().Trendcolor}
                                        />
                                    </div>
                              ))}              
                        </div>
                </div>
                
            </div>

  )
}
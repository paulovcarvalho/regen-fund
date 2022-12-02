import React from "react";
import PropTypes from "prop-types";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
}) {
  return (
    <>
      <div className="relative flex flex-col w-50 min-w-[180px] max-w-[180px] text-center break-words bg-white rounded-lg mb-3 mt-3 xl:mb-0 shadow-lg hover:bg-slate-200">
        <div className="flex-auto p-4">
          <div className="flex flex-nowrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="uppercase text-regen-lighblue font-bold text-xs sm:text-sm">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl sm:text-2xl font-Montserrat text-regen-blue">
                {statTitle}
              </span>
            </div>
          </div>
          <p className="text-xs text-blueGray-400 mt-4">
            <div
              className={ 
                  statPercentColor === "red"
                  ? "text-red-500 flex"
                  : statPercentColor === "green"
                  ? "text-green-600 flex"
                  : "flex"
              }
            >
              {statArrow === "up" ? (
                <BsArrowUp className="" />
              ) : statArrow === "down" ? (
                <BsArrowDown className="justify-left"/>
              ) : (
                ""
              )}
              <span className={"mr-1"}> {statPercent}% </span>
              <span className="whitespace-nowrap font-Montserrat text-regen-blue">
                {statDescripiron}
              </span>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
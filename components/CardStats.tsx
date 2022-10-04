import React from "react";
import PropTypes from "prop-types";

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
      <div className="relative flex flex-col w-50 min-w-10 text-center break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg hover:bg-slate-200">
        <div className="flex-auto p-4">
          <div className="flex flex-nowrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="uppercase text-regen-lighblue font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-2xl font-Montserrat text-regen-blue">
                {statTitle}
              </span>
            </div>

          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap font-Montserrat text-regen-blue">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
} 

CardStats.defaultProps = {
  statSubtitle: "Reciprocity Index",
  statTitle: "360,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};

import React, { useEffect, useContext } from "react";

import SearchEngineContext from "../context/SearchEngineContext";
import ButtonCustom from "./ButtonCustom";
// import Navigation from "./Navigation";

const Steps = () => {
  const states = useContext(SearchEngineContext);
  const { step, strapiData } = states;

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl mb-10 text-white">
        {strapiData.steps[step].heading}
      </h1>

      <div className="flex w-full justify-evenly items center ">
        {strapiData &&
          strapiData.steps[step].options.map((option, i) => {
            return (
              <ButtonCustom
                key={i}
                type="buttonSteps"
                filterType={strapiData.steps[step][option].filter_type}
                content={strapiData.steps[step][option].content}
                next={strapiData.steps[step][option].next}
              />
            );
          })}
      </div>
    </>
  );
};
export default Steps;

import React, { useEffect, useContext } from "react";

import SearchEngineContext from "../context/SearchEngineContext";
import ButtonCustom from "./ButtonCustom";
import Navigation from "./Navigation";

const Steps = () => {
  const COMPONENT = "steps";
  const states = useContext(SearchEngineContext);
  const { step, shownComponent, strapiData } = states;
  // useEffect(() => {
  //   console.log(backStep);
  // }, [backStep]);

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-auto bg-black">
      <Navigation />

      {shownComponent == COMPONENT && (
        <>
          <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white">
            {strapiData.steps[step].heading}
          </h1>

          <div className="flex w-full justify-evenly items center ">
            {strapiData &&
              strapiData.steps[step].options.map((option, i) => {
                return (
                  <ButtonCustom
                    key={i}
                    type="buttonSteps"
                    content={strapiData.steps[step][option].content}
                    nextStep={strapiData.steps[step][option].nextStep}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};
export default Steps;

import React, { useState } from "react";
import { DATA } from "../../lib/utils";
import ButtonCustom from "./ButtonCustom";

const Heading = () => {
  const [entry, setEntry] = useState(true);
  const [step, setStep] = useState("step1");
  // console.log(DATA.filters[step]["hardware"].content);

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-auto bg-black">
      <ButtonCustom
        type="back"
        content={DATA.navigation.back.content}
        entry={entry}
        setEntry={setEntry}
        step={step}
        setStep={setStep}
        prevStep={DATA.steps[step].prevStep}
      />
      <ButtonCustom
        type="clear"
        content={DATA.navigation.clear.content}
        entry={entry}
        setEntry={setEntry}
        step={step}
        setStep={setStep}
      />
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white">
        {DATA.steps[step].heading}
      </h1>

      <div className="flex w-full justify-evenly items center ">
        {DATA &&
          DATA.steps[step].options.map((option) => {
            console.log(DATA.steps[step][option].content);
            return (
              <ButtonCustom
                type="buttonSteps"
                content={DATA.steps[step][option].content}
                nextStep={DATA.steps[step][option].nextStep}
                entry={entry}
                setEntry={setEntry}
                step={step}
                setStep={setStep}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Heading;

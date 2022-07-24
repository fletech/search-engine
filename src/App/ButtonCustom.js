import React from "react";
// import { BUTTON_HANDLERS } from "../../lib/utils";

const BUTTON_MODEL = (props) => {
  const PROPERTIES = {
    className: {
      buttonSteps:
        "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover ",
      back: "absolute -top-10 lg:-top-20 left-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary ",
      clear:
        "absolute -top-10 lg:-top-20 right-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary ",
    },
    handlers: {
      buttonSteps() {
        const { nextStep, setStep, setEntry } = props;
        setEntry(false);
        setStep(nextStep);
      },
      back() {
        const { prevStep, setStep, setEntry } = props;
        let entry = prevStep == "step1" ? true : false;
        setEntry(entry);
        setStep(prevStep);
      },
      clear() {
        const { setStep, setEntry } = props;
        setEntry(true);
        setStep("step1");
      },
    },
  };

  const { type } = props;

  return {
    className: PROPERTIES.className[type],
    handler: PROPERTIES.handlers[type],
  };
};

const ButtonCustom = (props) => {
  return (
    <button
      className={
        props.entry && (props.type == "back" || props.type == "clear")
          ? "hidden"
          : BUTTON_MODEL(props).className
      }
      onClick={BUTTON_MODEL(props).handler}
    >
      {props.content}
    </button>
  );
};
export default ButtonCustom;

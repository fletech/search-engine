import React, { useEffect, useContext, useState } from "react";
import SearchEngineContext from "../context/SearchEngineContext";
import { BUTTON_HANDLER } from "../../lib/buttonHandler";

const CLASSNAME = {
  buttonSteps:
    "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md ",
  filters:
    "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md",
  back: "absolute -top-10 lg:-top-20 left-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary ",
  clear:
    "absolute -top-10 lg:-top-20 right-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary ",
};

const ButtonCustom = ({ content, type, next, filterType }) => {
  const states = useContext(SearchEngineContext);
  const { entry } = states;

  return (
    <button
      className={
        entry && (type == "back" || type == "clear")
          ? "hidden"
          : CLASSNAME[type]
      }
      onClick={BUTTON_HANDLER(type, filterType, next, states)}
    >
      {content}
    </button>
  );
};
export default ButtonCustom;

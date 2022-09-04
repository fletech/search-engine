import React, { useEffect, useContext, useState } from "react";
import SearchEngineContext from "../context/SearchEngineContext";
import { BUTTON_HANDLER } from "../../lib/buttonHandler";
import ButtonIcon from "./ButtonIcon";

const CLASSNAME = {
  buttonSteps:
    "w-1/4 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md ",
  devicePicker:
    "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md",
  devicePickerPrev:
    "w-[6rem] min-h-[2.5rem] mx-4 h-auto p-2 text-primary font-regular text-[16px] capitalize tracking-[1px] border-primary rounded-md",
  devicePickerNext:
    "w-[6rem] min-h-[2.5rem] mx-4 h-auto p-2 text-white font-regular text-[16px] capitalize tracking-[1px] bg-primary hover:bg-primaryHover rounded-md",
  deviceSearch:
    "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md",
  error: "bg-gray-400 hover:bg-gray-300 cursor-not-allowed pointer-events-none",
  filters:
    "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover rounded-md",
  back: "absolute -top-10 lg:-top-20 left-20 w-auto h-[3rem] font-regular text-[14px] uppercase tracking-[1px] text-blue-400 ",
  clear:
    "absolute -top-10 lg:-top-20 right-20 w-auto h-[3rem] font-regular text-[14px] uppercase tracking-[1px] text-red-500 ",
};

const ButtonCustom = ({
  content,
  hidden,
  type,
  filterType,
  prev,
  next,
  error,
}) => {
  const states = useContext(SearchEngineContext);
  const { entry } = states;
  return (
    <button
      onClick={BUTTON_HANDLER(states, type, filterType, prev, next)}
      className={
        (entry && (type == "back" || type == "clear")) ||
        (!prev && type == "devicePickerPrev") ||
        (!next && type == "devicePickerNext") ||
        hidden
          ? "hidden"
          : error
          ? `${CLASSNAME[type]} ${CLASSNAME["error"]}`
          : CLASSNAME[type]
      }
    >
      {type == "clear" || type == "back" ? (
        // ||type == "devicePickerPrev" ||type == "devicePickerNext"
        <ButtonIcon type={type} content={content} />
      ) : (
        <p>{content}</p>
      )}
    </button>
  );
};
export default ButtonCustom;

import React, { useEffect, useState, useRef, useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";

const STATUS_STYLE = {
  [true]: {
    container:
      "bg-green-500 w-[4rem] h-8 rounded-full ring-inset ring-2 ring-white",
    dot: "dot absolute right-1 top-1 bg-white w-6 h-6 rounded-full shadow-md shadow-black transition",
  },
  [false]: {
    container:
      "bg-red-500 w-[4rem] h-8 rounded-full ring-inset ring-2 ring-white",
    dot: "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md shadow-black transition",
  },
};

const Toggle = ({ filterContent, searchKey, align }) => {
  const states = useContext(SearchEngineContext);
  const { searchBody, setSearchBody, backToFilter } = states;

  const [value, setValue] = useState();
  const [isReady, setIsReady] = useState();

  useEffect(() => {
    console.log(backToFilter);
    const defaultValue = filterContent.default;
    const priorValue = searchBody[searchKey];

    !backToFilter ? setValue(defaultValue) : setValue(priorValue);
    setIsReady(true);
  }, []);

  useEffect(() => {
    setSearchBody((prevState) => ({
      ...prevState,
      [searchKey]: value,
    }));
  }, [value]);

  return (
    <div
      onClick={() => setValue(!value)}
      className={
        align &&
        `flex flex-col w-auto relative justify-between items-${align} cursor-pointer`
      }
    >
      <span className="font-semibold text-xl text-white uppercase">
        {filterContent.label}
      </span>
      <div className="rounded-full w-auto relative flex flex-col justify-center items-end">
        <div className={isReady && STATUS_STYLE[value].container}></div>
        <div className={isReady && STATUS_STYLE[value].dot}></div>
      </div>

      {/* <div className="flex flex-col w-[60%] justify-evenly items-center">
        <div className="flex w-full items-center justify-between mb-4">
          <span className="font-semibold text-xl text-white uppercase">
            {filterContent.label}
          </span>
          <span className="font-semibold text-lg text-center bg-primaryDark rounded-full p-2 min-w-[5rem] w-auto">
            {currentValue}{" "}
            {currentValue != "Unlimited" && filterContent.reference_unit}
          </span>
        </div>

        <div className="flex w-full h-auto items-center justify-center px-10 py-6 bg-blackLight border-[2px] border-gray-300 rounded-full">
          <input
            ref={inputRef}
            className="custom-range w-full md:w-[100%]"
            id="steps-range"
            type="range"
            min="1"
            max={filterContent.options.length}
            value={index}
            step="1"
            onChange={() => setIndex(inputRef.current.value)}
          />
        </div>
      </div> */}
    </div>
  );
};
export default Toggle;

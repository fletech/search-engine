import React, { useEffect, useState, useRef, useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";

const InpuptRange = ({ filterContent, searchKey }) => {
  const inputRef = useRef();
  const states = useContext(SearchEngineContext);
  const { searchBody, setSearchBody, backToFilter } = states;

  const [currentValue, setCurrentValue] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    const defaultIndex =
      filterContent.options.indexOf(filterContent.default) + 1;
    const priorIndex = filterContent.options.indexOf(searchBody[searchKey]) + 1;
    !backToFilter ? setIndex(defaultIndex) : setIndex(priorIndex);
  }, []);

  useEffect(() => {
    setCurrentValue(filterContent.options[index - 1]);
    setSearchBody((prevState) => ({
      ...prevState,
      [searchKey]: filterContent.options[index - 1],
    }));
  }, [index]);

  return (
    <>
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
          className="custom-range w-full md:w-[100%] cursor-pointer"
          id="steps-range"
          type="range"
          min="1"
          max={filterContent.options.length}
          value={index}
          step="1"
          onChange={() => setIndex(inputRef.current.value)}
        />
      </div>
    </>
  );
};
export default InpuptRange;

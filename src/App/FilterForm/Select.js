import React, { useEffect, useState, useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";

const Select = ({ filterContent, searchKey }) => {
  const states = useContext(SearchEngineContext);
  const { searchBody, setSearchBody, backToFilter } = states;

  const [currentValue, setCurrentValue] = useState();

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const defaultValue = filterContent.default;
    const priorValue = searchBody[searchKey];
    !backToFilter ? setCurrentValue(defaultValue) : setCurrentValue(priorValue);
  }, []);

  useEffect(() => {
    setSearchBody((prevState) => ({
      ...prevState,
      [searchKey]: currentValue,
    }));
  }, [currentValue]);

  return (
    <>
      <div className="flex w-full items-center justify-between mb-4">
        <span className="font-semibold text-xl text-white uppercase">
          {filterContent.label}
        </span>
        <span className="font-semibold text-lg text-center bg-primaryDark rounded-full p-2 min-w-[5rem] w-auto">
          {currentValue}
        </span>
      </div>

      <div className="relative w-full max-h-[10vh] mb-2 bg-blackLight border-[2px] border-gray-300 rounded-full ">
        <div
          className="flex items-center justify-between px-10 py-6 w-full h-auto cursor-pointer"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <p className="text-lg font-semibold">{currentValue}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {dropdown && (
          <div
            role="list"
            className={`dropdown absolute p-2 mt-2 left-0 z-[1000] max-h-[10rem] overflow-y-scroll w-full flex flex-col items-start bg-blackMedium border-[2px] border-gray-300 shadow-lg shadow-gray-500 rounded-md `}
          >
            {filterContent.options.map((option, i) => (
              <p
                key={i}
                onClick={() => {
                  setCurrentValue(option);
                  setDropdown(!dropdown);
                }}
                className="px-8 py-2 hover:text-primary font-semibold w-full cursor-pointer hover:bg-blackLight"
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Select;

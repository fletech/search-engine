import React, { useEffect, useState, useContext } from "react";
import { LABELS_DK } from "../../../lib/strapiData";
import { normalizeString } from "../../../lib/utils";

import SearchEngineContext from "../../context/SearchEngineContext";

const SearchDevice = ({ searchKey, setElementOpen }) => {
  const states = useContext(SearchEngineContext);
  const {
    devicePickerSearchBody,
    devicePickerModel,
    setDevicePickerSearchBody,
    devicePickerIsback,
  } = states;

  const [currentValue, setCurrentValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleInputValue = (e) => {
    const value = e.target.value;
    setCurrentValue(value);
  };

  useEffect(() => {
    setDevicePickerSearchBody((prevState) => ({
      ...prevState,
      [searchKey]: currentValue,
    }));
  }, [currentValue]);

  return (
    <div
      className={`relative w-full max-h-[10vh] mb-2 bg-blackLight border-[2px]  rounded-full ${
        focus ? "border-primary" : "border-gray-300"
      }`}
    >
      <div
        className={`relative flex items-center justify-between w-full h-auto cursor-text  ${""}`}
      >
        <label for="input-search">
          <input
            id="input-search"
            type="search"
            name="input-search"
            placeholder={LABELS_DK["placeholder_search"]}
            className="text-lg overflow-hidden font-regular border-none bg-transparent h-16 py-2 px-6 outline-none capitalize"
            onChange={(e) => handleInputValue(e)}
            onClick={() => (setFocus(true), setElementOpen(""))}
            onKeyDown={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={` absolute right-4 w-6 h-6 ${
            focus ? "text-primary" : "text-white"
          }`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchDevice;

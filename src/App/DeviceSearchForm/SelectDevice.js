import React, { useEffect, useState, useContext, useCallback } from "react";
import { LABELS_DK } from "../../../lib/strapiData";
import { normalizeString } from "../../../lib/utils";
import check from "../../images/check.svg";

import SearchEngineContext from "../../context/SearchEngineContext";

const SelectDevice = ({ searchKey, elementOpen, setElementOpen }) => {
  const states = useContext(SearchEngineContext);
  const {
    devicePickerSearchBody,
    devicePickerModel,
    errorForm,
    errorFormElements,
    setDevicePickerSearchBody,
  } = states;

  const OPTIONS = devicePickerModel[searchKey].options;
  const SELECTED = devicePickerSearchBody[searchKey].selected;

  const [allSelected, setAllSelected] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const handleSelectOption = (option) => {
    let optionSelected = SELECTED.some((select) => select == option);

    let newSelected = optionSelected
      ? SELECTED.filter((element) => element != option)
      : [...SELECTED, option];
    setCurrentValue(newSelected);

    OPTIONS.length == newSelected.length
      ? setAllSelected(true)
      : setAllSelected(false);
  };

  const handleDropdown = () => {
    elementOpen == searchKey
      ? setDropdown((prevState) => !prevState)
      : (setElementOpen(searchKey), setDropdown(true));
  };

  useEffect(() => {
    setCurrentValue(SELECTED);
    OPTIONS.length == SELECTED.length
      ? setAllSelected(true)
      : setAllSelected(false);
  }, []);

  useEffect(() => {
    setDevicePickerSearchBody((prevState) => ({
      ...prevState,
      [searchKey]: {
        all: allSelected,
        selected: currentValue,
      },
    }));
  }, [currentValue, allSelected]);

  return (
    <div
      className={`relative w-full max-h-[10vh] mb-2 bg-blackLight border-[2px] border-gray-300 rounded-full ${
        errorForm && errorFormElements.some((key) => key == searchKey)
          ? "border-red-500"
          : elementOpen == searchKey
          ? "border-primary"
          : "border-gray-300"
      }`}
    >
      <div
        className="flex items-center justify-between w-full h-auto cursor-pointer"
        onClick={handleDropdown}
      >
        <label for="input-select">
          <input
            id="input-select"
            readOnly
            type="text"
            name="input-select"
            onChange={currentValue.length}
            value={
              allSelected
                ? "All"
                : currentValue.length == 1
                ? currentValue[0]
                : `${currentValue.length} selected`
            }
            className={`text-lg overflow-hidden font-light border-none bg-transparent h-16 py-2 px-6 outline-none cursor-pointer capitalize ${
              errorForm &&
              errorFormElements.some((key) => key == searchKey) &&
              "text-red-500"
            }`}
          />
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute right-4 h-6 w-6 transition duration-300 ${
            errorForm && errorFormElements.some((key) => key == searchKey)
              ? "text-red-500"
              : elementOpen == searchKey
              ? "text-primary"
              : "text-white"
          } ${elementOpen == searchKey && dropdown && "rotate-180 "}`}
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
      {dropdown && elementOpen == searchKey && (
        <div
          role="list"
          className={`dropdown absolute p-2 mt-2 left-0 z-[1000] max-h-[10rem] overflow-y-scroll w-full flex flex-col items-start bg-blackMedium border-[2px] border-gray-300 shadow-sm shadow-gray-200 rounded-md `}
        >
          {devicePickerSearchBody &&
            OPTIONS.map((option, i) => (
              <div
                className={`relative py-2 w-full hover:text-primary hover:bg-blackLight flex items-center justify-start cursor-pointer`}
                onClick={() => handleSelectOption(option)}
              >
                <div className="pl-4 mr-4 min-w-8 min-h-4 flex items-center">
                  {SELECTED.some((select) => select == option) && (
                    <img
                      id={option}
                      alt={option}
                      src={check}
                      className="pointer-events-none w-4 h-4 relative -top-[0.2rem]"
                    />
                  )}
                </div>
                <p
                  id={option}
                  key={i}
                  className="font-semibold w-full  capitalize"
                >
                  {normalizeString(option)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default SelectDevice;

import React, { useEffect, useState, useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";
import { normalizeString } from "../../../lib/utils";

import small from "../../images/size-small.svg";
import medium from "../../images/size-medium.svg";
import large from "../../images/size-large.svg";
import cheap from "../../images/cost-cheap.svg";
import midRange from "../../images/cost-mid-range.svg";
import highEnd from "../../images/cost-high-end.svg";
import check from "../../images/check.svg";

const IMAGES = {
  ["small"]: small,
  ["medium"]: medium,
  ["large"]: large,
  ["cheap"]: cheap,
  ["mid-range"]: midRange,
  ["high-end"]: highEnd,
};

const Picker = ({ defaultOption, options, step }) => {
  const states = useContext(SearchEngineContext);
  const {
    devicePickerSearchBody,
    setDevicePickerSearchBody,
    devicePickerIsBack,
  } = states;

  const [fieldsSelected, setFieldSelect] = useState([]);

  const showChecked = (option, state) => {
    return state.some((element) => element == option);
  };
  const selectOptionHandler = (e, option, state, setState) => {
    e.stopPropagation();
    let filtered;
    const isChecked = showChecked(option, state);

    if (isChecked) {
      filtered = state.filter((element) => element != e.target.id);
      setState(filtered);
    } else {
      setState((prevState) => [...prevState, option]);
    }
  };

  useEffect(() => {
    let optionsUpdated = [];
    if (!devicePickerIsBack) {
      defaultOption == "All" && (optionsUpdated = options);
      defaultOption != "All" &&
        (optionsUpdated = options.filter((option) => option == defaultOption));
    } else {
      optionsUpdated = devicePickerSearchBody[step].selected;
    }
    setFieldSelect(optionsUpdated);
  }, [devicePickerIsBack, step]);

  useEffect(() => {
    setDevicePickerSearchBody((prevState) => {
      return {
        ...prevState,
        [step]: {
          all: options.length == fieldsSelected.length,
          selected: fieldsSelected,
        },
      };
    });
  }, [fieldsSelected]);

  return (
    <div className="flex items-start justify-evenly h-auto w-[80%] mb-[4rem]">
      {options.map((option, i) => {
        const isSelected = showChecked(option, fieldsSelected);
        return (
          option && (
            <div
              key={i}
              className="h-full min-h-[16rem] min-w-[12rem] w-auto flex flex-col items-center justify-evenly border border-gray-300 bg-blackLight px-8 py-6  rounded-md"
            >
              <p className="capitalize text-2xl font-semibold">
                {normalizeString(option)}
              </p>
              <div
                id={option}
                className="relative mt-4 mb-6 h-[2rem] w-[2rem] rounded-md bg-white border border-primary grid items-center"
                onClick={(e) =>
                  selectOptionHandler(e, option, fieldsSelected, setFieldSelect)
                }
              >
                {isSelected && (
                  <img
                    id={option}
                    alt={option}
                    src={check}
                    className="pointer-events-none max-h-[2rem] absolute -top-[0.4rem] -left-[0.2rem]"
                  />
                )}
              </div>
              {step != "payment_types" && (
                <img
                  className="max-h-[8rem]"
                  alt={option}
                  src={IMAGES[option]}
                />
              )}
            </div>
          )
        );
      })}
    </div>
  );
};
export default Picker;

import React from "react";
import small from "../../images/size-small.svg";
import medium from "../../images/size-medium.svg";
import large from "../../images/size-large.svg";
import cheap from "../../images/cost-cheap.svg";
import midRange from "../../images/cost-mid-range.svg";
import highEnd from "../../images/cost-high-end.svg";

const IMAGES = {
  ["small"]: small,
  ["medium"]: medium,
  ["large"]: large,
  ["cheap"]: cheap,
  ["mid-range"]: midRange,
  ["high-end"]: highEnd,
};

const Picker = ({ options, step }) => {
  return (
    <div className="flex items-start justify-evenly h-auto w-full mb-4">
      {options.map((option) => {
        return (
          option && (
            <div className="h-auto min-h-[10rem] w-auto flex flex-col items-center justify-evenly">
              <p className="capitalize text-2xl font-semibold">{option}</p>
              <div className="mt-4 mb-6 h-[2rem] w-[2rem] rounded-md bg-white border border-primary"></div>
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

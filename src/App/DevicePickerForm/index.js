import React, { useContext, useEffect } from "react";
import ButtonCustom from "../ButtonCustom";
import SearchEngineContext from "../../context/SearchEngineContext";
import Picker from "./Picker";

const DevicePickerForm = () => {
  const states = useContext(SearchEngineContext);
  const {
    strapiData,
    devicePickerModel,
    devicePickerStep,
    errorForm,
    devicePickerSearchBody,
    setErrorForm,
    devicePickerIsBack,
  } = states;

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.devicePicker.help_heading}
      </h1>
      {/*TODO: H2 variable segun sea tablet o phone*/}
      <div className="flex justify-evenly items-center w-[80%]  mb-10">
        <div className="w-1/2">
          <h2 className=" tracking-[1px] font-light text-2xl text-white capitalize">
            {strapiData.devicePicker.model[devicePickerStep].h2}
          </h2>
        </div>
        <div className="w-1/2 flex items-center justify-end my-6 ">
          <ButtonCustom
            type="devicePickerPrev"
            content={"<< Prev"}
            prev={strapiData.devicePicker.model[devicePickerStep].prev}
          />
          <ButtonCustom
            error={errorForm}
            type="devicePickerNext"
            content={"Next >>"}
            next={strapiData.devicePicker.model[devicePickerStep].next}
          />
        </div>
      </div>

      {devicePickerStep && (
        <Picker
          step={devicePickerStep}
          options={strapiData.devicePicker.model[devicePickerStep].options}
          defaultOption={
            strapiData.devicePicker.model[devicePickerStep].default
          }
        />
      )}
    </>
  );
};
export default DevicePickerForm;

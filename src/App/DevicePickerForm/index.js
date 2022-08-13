import React, { useContext } from "react";
import ButtonCustom from "../ButtonCustom";
import SearchEngineContext from "../../context/SearchEngineContext";
import Picker from "./Picker";

const DevicePickerForm = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData, devicePicker, devicePickerStep } = states;
  console.log(devicePickerStep);
  console.log(devicePicker);

  //TODO: falta manejar el ida y vuelta de la info, un devicePickerBody={} que funcione como el searchBody={} del filter

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.devicePicker.help_heading}
      </h1>
      {/*TODO: H2 variable segun sea tablet o phone*/}
      <h2 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {devicePicker[devicePickerStep].h2}
      </h2>
      <div
        className={`my-2 w-full min-h-[10vh] h-auto flex flex-col items-center justify-center`}
      >
        {devicePickerStep && (
          <Picker
            step={devicePickerStep}
            options={strapiData.devicePicker.model[devicePickerStep].options}
          />
        )}
      </div>
      <div className="flex items-center w-[80%] justify-evenly mb-6">
        <ButtonCustom
          type="devicePickerPrev"
          content={"<Prev"}
          prev={strapiData.devicePicker.model[devicePickerStep].prev}
          //TODO: corregir los prev false o true false, porque tablets, tiene un paso menos
        />
        <ButtonCustom
          type="devicePickerNext"
          content={"Next>"}
          next={strapiData.devicePicker.model[devicePickerStep].next}
        />
      </div>
    </>
  );
};
export default DevicePickerForm;

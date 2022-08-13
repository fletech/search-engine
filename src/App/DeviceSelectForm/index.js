import React, { useContext } from "react";
import ButtonCustom from "../ButtonCustom";
import SearchEngineContext from "../../context/SearchEngineContext";
import Picker from "./Picker";

const DeviceSelectForm = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData } = states;

  //TODO:

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.devicePicker.select_heading}
      </h1>
    </>
  );
};
export default DeviceSelectForm;

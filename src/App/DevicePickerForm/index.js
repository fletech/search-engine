import React, { useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";

const DevicePickerForm = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData, filter, searchBody } = states;

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.devicePicker.heading}
      </h1>
      <div
        className={`my-6 w-full min-h-[10vh] h-auto flex flex-col items-center justify-center`}
      ></div>
    </>
  );
};
export default DevicePickerForm;

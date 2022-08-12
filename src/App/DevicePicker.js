import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import DevicePickerForm from "./DevicePickerForm";

const DevicePicker = () => {
  const COMPONENT = "devicePicker";
  const states = useContext(SearchEngineContext);
  const { shownComponent, setShownComponent, strapiData } = states;
  return (
    shownComponent == COMPONENT && (
      <main className="w-full flex flex-col justify-center items-center">
        <DevicePickerForm />
        <ButtonCustom
          type="devicePicker"
          shownComponent={shownComponent}
          setShownComponent={setShownComponent}
          content={strapiData.filter.cta}
        />
      </main>
    )
  );
};
export default DevicePicker;

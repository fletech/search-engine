import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import DevicePickerForm from "./DevicePickerForm";

const DevicePicker = () => {
  const COMPONENT = "devicePicker";
  const states = useContext(SearchEngineContext);
  const {
    shownComponent,
    strapiData,
    devicePicker,
    devicePickerStep,
    devicePickerType,
  } = states;
  console.log(devicePickerType);
  return (
    shownComponent == COMPONENT && (
      <main className="w-full flex flex-col justify-center items-center">
        {devicePickerType == "help_select_phone" ||
        devicePickerType == "help_select_tablet" ? (
          <DevicePickerForm />
        ) : (
          ""
        )}

        <ButtonCustom
          hidden={devicePickerStep == "payment_types" ? false : true}
          type="devicePicker"
          content={strapiData.devicePicker.cta}
        />
      </main>
    )
  );
};
export default DevicePicker;

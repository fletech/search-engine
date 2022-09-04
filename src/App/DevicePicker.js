import React, { useContext, useEffect } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import DevicePickerForm from "./DevicePickerForm";

const DevicePicker = () => {
  const states = useContext(SearchEngineContext);
  const {
    devicePickerModel,
    devicePickerSearchBody,
    devicePickerIsBack,
    devicePickerStep,
    devicePickerType,
    errorForm,
    setErrorForm,
  } = states;

  useEffect(() => {
    let filtered = Object.keys(devicePickerSearchBody).filter(
      (key) =>
        typeof devicePickerSearchBody[key] == "object" &&
        devicePickerSearchBody[key]?.selected.length == 0 &&
        true
    );

    devicePickerIsBack
      ? setErrorForm(false)
      : filtered.length != 0
      ? setErrorForm(true)
      : setErrorForm(false);
  }, [devicePickerSearchBody, devicePickerIsBack]);

  return (
    <>
      <DevicePickerForm className="mb-10" />

      <ButtonCustom
        error={errorForm}
        hidden={devicePickerStep == "payment_types" ? false : true}
        type="devicePicker"
        content={devicePickerModel.next[devicePickerType].cta}
        next={devicePickerModel.next[devicePickerType].step}
      />
    </>
  );
};
export default DevicePicker;

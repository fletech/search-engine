import React, { useContext, useEffect, useState } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import DeviceSearchForm from "./DeviceSearchForm";

const DeviceSearch = () => {
  const states = useContext(SearchEngineContext);
  const {
    devicePickerModel,
    devicePickerType,
    devicePickerSearchBody,
    errorForm,
    setErrorForm,
    setErrorFormElements,
  } = states;

  useEffect(() => {
    let filtered = Object.keys(devicePickerSearchBody).filter(
      (key) =>
        typeof devicePickerSearchBody[key] == "object" &&
        devicePickerSearchBody[key]?.selected.length == 0
    );
    filtered.length != 0 ? setErrorForm(true) : setErrorForm(false);
    setErrorFormElements(filtered);
  }, [devicePickerSearchBody]);

  return (
    <>
      <DeviceSearchForm />

      <ButtonCustom
        error={errorForm}
        hidden={false}
        type="deviceSearch"
        content={devicePickerModel.next[devicePickerType].cta}
      />
    </>
  );
};
export default DeviceSearch;

import { useState } from "react";
import { DATA_CONTENT } from "../../lib/strapiData";

const SEARCH_BODY = {
  data_amount: {},
  talk_minutes: {},
  carriers: {},
  services: {},
  network_5G: {},
  roaming: {},
};

const PICKER_SEARCH_BODY = {
  fromPicker: false,
  search: "",
};

const States = () => {
  const [backStep, setBackStep] = useState([]);
  const [backToFilter, setBackToFilter] = useState(false);
  const [backComponent, setBackComponent] = useState("");
  const [data, setData] = useState([]);
  const [devicePickerIsBack, setDevicePickerIsBack] = useState(false);
  const [devicePickerModel, setDevicePickerModel] = useState({});
  const [devicePickerSearchBody, setDevicePickerSearchBody] =
    useState(PICKER_SEARCH_BODY);
  const [devicePickerStep, setDevicePickerStep] = useState("");
  const [devicePickerType, setDevicePickerType] = useState("");
  const [deviceSelectOn, setDeviceSelectOn] = useState(false);
  const [entry, setEntry] = useState(true);
  const [errorForm, setErrorForm] = useState(false);
  const [errorFormElements, setErrorFormElements] = useState([]);
  const [filter, setFilter] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [searchBody, setSearchBody] = useState({});
  const [shownComponent, setShownComponent] = useState("steps");
  const [step, setStep] = useState("step1");
  const [strapiData, setStrapiData] = useState(DATA_CONTENT);

  const STATES = {
    backStep,
    backToFilter,
    backComponent,
    data,
    devicePickerIsBack,
    devicePickerModel,
    devicePickerSearchBody,
    devicePickerStep,
    devicePickerType,
    deviceSelectOn,
    entry,
    errorForm,
    errorFormElements,
    filter,
    loadingData,
    searchBody,
    shownComponent,
    step,
    strapiData,
    setBackStep,
    setBackToFilter,
    setBackComponent,
    setData,
    setDevicePickerIsBack,
    setDevicePickerModel,
    setDevicePickerSearchBody,
    setDevicePickerStep,
    setDevicePickerType,
    setDeviceSelectOn,
    setEntry,
    setErrorForm,
    setErrorFormElements,
    setFilter,
    setLoadingData,
    setSearchBody,
    setShownComponent,
    setStep,
    setStrapiData,
  };
  return STATES;
};
export default States;

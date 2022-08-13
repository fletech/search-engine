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

const DEVICE_PICKER_BODY = {
  size: {
    all: true,
    selected: [],
  },
  cost: {
    all: true,
    selected: [],
  },
  payment_method: {
    all: true,
    selected: [],
  },
};

const States = () => {
  const [backStep, setBackStep] = useState(Array);
  const [backToFilter, setBackToFilter] = useState(false);
  const [backComponent, setBackComponent] = useState("");
  const [data, setData] = useState([]);
  const [devicePicker, setDevicePicker] = useState();
  const [devicePickerBody, setDevicePickerBody] = useState({});
  const [devicePickerStep, setDevicePickerStep] = useState();
  const [devicePickerType, setDevicePickerType] = useState();
  const [entry, setEntry] = useState(true);
  const [filter, setFilter] = useState();
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
    devicePicker,
    devicePickerBody,
    devicePickerStep,
    devicePickerType,
    entry,
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
    setDevicePicker,
    setDevicePickerBody,
    setDevicePickerStep,
    setDevicePickerType,
    setEntry,
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

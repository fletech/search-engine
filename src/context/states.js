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

const States = () => {
  const [backStep, setBackStep] = useState(Array);
  const [backToFilter, setBackToFilter] = useState(false);
  const [data, setData] = useState([]);
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
    data,
    entry,
    filter,
    loadingData,
    searchBody,
    shownComponent,
    step,
    strapiData,
    setBackStep,
    setBackToFilter,
    setData,
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

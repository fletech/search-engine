import React, { useState } from "react";
import { DATA } from "../../lib/strapiData";

const States = () => {
  const [backStep, setBackStep] = useState(Array);
  const [data, setData] = useState([]);
  const [entry, setEntry] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [shownComponent, setShownComponent] = useState("steps");
  const [step, setStep] = useState("step1");
  const [strapiData, setStrapiData] = useState(DATA);

  const STATES = {
    backStep,
    data,
    entry,
    loadingData,
    shownComponent,
    step,
    strapiData,
    setBackStep,
    setData,
    setEntry,
    setLoadingData,
    setShownComponent,
    setStep,
    setStrapiData,
  };
  return STATES;
};
export default States;

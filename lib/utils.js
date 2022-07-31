// export const FORM_CLASSES = {
//   label: "text-black font-light md:text-md text-sm",
//   input_textarea_primary: `primary w-full bg-white text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
//   input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
// };

import { fetchAPI } from "./fetchApi";

const HANDLERS = (nextStep, states) => {
  return {
    buttonSteps() {
      const { setBackStep, step, setStep, setEntry, setShownComponent } =
        states;

      if (nextStep == "filter") {
        setShownComponent("filters");
      }
      setBackStep((prevState) => [...prevState, step]);
      setEntry(false);
      setStep(nextStep);
    },
    filters() {
      const { setData, setShownComponent, setLoadingData } = states;

      fetchAPI(
        "https://jsonplaceholder.typicode.com/todos",
        setData,
        setLoadingData
      );
      setShownComponent("searchResults");
    },
    back() {
      const {
        backStep,
        setBackStep,
        setStep,
        setEntry,
        shownComponent,
        setShownComponent,
      } = states;

      let prevSteps = backStep.filter((item, i) => {
        if (i + 1 != backStep.length) return item;
      });

      if (shownComponent == "searchResults") {
        setShownComponent("filters");
      }
      if (shownComponent == "filters") {
        setShownComponent("steps");
        setBackStep(prevSteps);
      }

      setStep(backStep[backStep.length - 1]);
      setEntry(backStep[backStep.length - 1] == "step1");

      if (shownComponent == "steps") {
        setBackStep(prevSteps);
      }
    },
    clear() {
      const { setStep, setEntry, setShownComponent, setBackStep } = states;
      setShownComponent("steps");
      setEntry(true);
      setStep("step1");
      setBackStep([]);
    },
  };
};

export const BUTTON_HANDLER = (type, nextStep, states) =>
  HANDLERS(nextStep, states)[type];

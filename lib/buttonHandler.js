// export const FORM_CLASSES = {
//   label: "text-black font-light md:text-md text-sm",
//   input_textarea_primary: `primary w-full bg-white text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
//   input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
// };

import { fetchAPI } from "./fetchApi";
import { getFilterModel } from "./utils";
import { FILTERS } from "./strapiData";

export const BUTTON_HANDLER = (type, filterType, next, states) => {
  const HANDLERS = {
    buttonSteps() {
      const {
        step,
        setBackStep,
        setEntry,
        setFilter,
        setShownComponent,
        setStep,
        strapiData,
      } = states;

      if (next?.filter) {
        const FILTER_MODEL = getFilterModel(
          FILTERS,
          filterType,
          strapiData.filter.model
        );

        setFilter(FILTER_MODEL);
        setShownComponent("filters");
      }
      setBackStep((prevState) => [...prevState, step]);
      setEntry(false);
      setStep(next.step);
    },
    filters() {
      const { setData, searchBody, setShownComponent, setLoadingData } = states;
      console.log(searchBody);
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
        setBackToFilter,
        setSearchBody,
        setShownComponent,
      } = states;

      let previous_steps = backStep.filter((item, i) => {
        if (i + 1 != backStep.length) return item;
      });

      if (shownComponent == "searchResults") {
        setShownComponent("filters");
        setSearchBody((prevState) => ({ ...prevState }));
        setBackToFilter(true);
      }
      if (shownComponent == "filters") {
        setShownComponent("steps");
        setBackStep(previous_steps);
        setSearchBody({});
        setBackToFilter(false);
      }

      setStep(backStep[backStep.length - 1]);
      setEntry(backStep[backStep.length - 1] == "step1");

      if (shownComponent == "steps") {
        setBackStep(previous_steps);
      }
    },
    clear() {
      const {
        setBackStep,
        setBackToFilter,
        setEntry,
        setSearchBody,
        setShownComponent,
        setStep,
      } = states;
      setShownComponent("steps");
      setEntry(true);
      setStep("step1");
      setBackStep([]);
      setSearchBody({});
      setBackToFilter(false);
    },
  };
  return HANDLERS[type];
};

// export const BUTTON_HANDLER = (type, filterType, next, states) =>
//   HANDLERS(filterType, next, states)[type];

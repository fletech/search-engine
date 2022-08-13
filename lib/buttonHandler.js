// export const FORM_CLASSES = {
//   label: "text-black font-light md:text-md text-sm",
//   input_textarea_primary: `primary w-full bg-white text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
//   input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
// };

import { fetchAPI } from "./fetchApi";
import { getFilterModel } from "./utils";
import { FILTERS } from "./strapiData";

export const BUTTON_HANDLER = (states, type, filterType, prev, next) => {
  const HANDLERS = {
    buttonSteps() {
      const {
        step,
        setBackComponent,
        setBackStep,
        setDevicePicker,
        setDevicePickerBody,
        setDevicePickerStep,
        setDevicePickerType,
        setEntry,
        setFilter,
        setShownComponent,
        setStep,
        strapiData,
      } = states;

      let filterModel;
      let devicePickerModel;

      if (filterType) {
        filterModel = getFilterModel(
          FILTERS,
          filterType,
          strapiData.filter.model
        );
        devicePickerModel = getFilterModel(
          FILTERS,
          filterType,
          strapiData.devicePicker.model
        );
      }

      if (next?.filter) {
        setFilter(filterModel);
        setShownComponent("filters");
      }

      if (next?.devicePicker) {
        setShownComponent("devicePicker");
        setDevicePicker(devicePickerModel);
        setDevicePickerType(filterType);
        filterType == "help_select_tablet" &&
          setDevicePickerStep("tablet_sizes");
        filterType == "help_select_phone" && setDevicePickerStep("phone_sizes");
      }

      setBackComponent("steps");
      setBackStep((prevState) => [...prevState, step]);
      setEntry(false);
      setStep(next.step);
      //TODO: al terminar de elegir un hardware, se pasa al buttonCustom, la prop next={filter:true} y filter_type="el que aplique según el tipo de hardware"
    },
    devicePicker() {
      const {
        setBackComponent,
        setData,
        searchBody,
        setShownComponent,
        setLoadingData,
      } = states;
      fetchAPI(
        "https://mobilexpert-server.herokuapp.com/api/subscriptions",
        setData,
        setLoadingData
      );
      setBackComponent("devicePicker");
      setShownComponent("searchResults");
    },
    devicePickerPrev() {
      console.log(prev);
      const { setDevicePickerStep } = states;
      setDevicePickerStep(prev);
    },
    devicePickerNext() {
      const { setDevicePickerStep } = states;
      console.log(next);
      setDevicePickerStep(next);
    },
    filters() {
      const {
        setBackComponent,
        setData,
        searchBody,
        setShownComponent,
        setLoadingData,
      } = states;
      fetchAPI(
        "https://mobilexpert-server.herokuapp.com/api/subscriptions",
        setData,
        setLoadingData
      );
      setBackComponent("filters");
      setShownComponent("searchResults");
    },
    back() {
      const {
        backStep,
        backComponent,
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
        setShownComponent(backComponent);
        setSearchBody((prevState) => ({ ...prevState }));
        setBackToFilter(true);
      }
      if (shownComponent == "filters" || shownComponent == "devicePicker") {
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

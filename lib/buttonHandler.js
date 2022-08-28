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
        setDevicePickerModel,
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

      if (next?.notAvailable) {
        setShownComponent("notAvailable");
      }

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

        setDevicePickerModel(devicePickerModel);
        setDevicePickerType(filterType);
        filterType == "help_select_tablet" &&
          setDevicePickerStep("tablet_sizes");
        filterType == "help_select_phone" && setDevicePickerStep("phone_sizes");
      }
      if (next?.deviceSearch) {
        setShownComponent("deviceSearch");
        setDevicePickerModel(devicePickerModel);
        setDevicePickerType(filterType);
      }

      setBackComponent("steps");
      setBackStep((prevState) => [...prevState, step]);
      setEntry(false);
      setStep(next.step);
      //TODO: al terminar de elegir un hardware, se pasa al buttonCustom, la prop next={filter:true} y filter_type="el que aplique según el tipo de hardware"
    },
    devicePicker() {
      const {
        filter,
        setData,
        searchBody,
        setBackComponent,
        setDevicePickerSearchBody,
        setDeviceSelectOn,
        setLoadingData,
        setShownComponent,
      } = states;
      // fetchAPI(
      //   "https://mobilexpert-server.herokuapp.com/api/subscriptions",
      //   setData,
      //   setLoadingData
      // );

      setDevicePickerSearchBody((prevState) => ({
        ...prevState,
        fromPicker: true,
      }));
      setBackComponent("devicePicker");
      setDeviceSelectOn(true);
      setShownComponent(next);
    },
    devicePickerPrev() {
      const {
        setDevicePickerStep,
        devicePickerType,
        setDevicePickerIsBack,
        setErrorForm,
      } = states;
      devicePickerType == "help_select_tablet"
        ? setDevicePickerStep("tablet_sizes")
        : setDevicePickerStep(prev);
      // setErrorForm(false)
      setDevicePickerIsBack(true);
    },
    devicePickerNext() {
      const { setDevicePickerStep, setDevicePickerIsBack } = states;
      setDevicePickerStep(next);
      setDevicePickerIsBack(false);
    },
    deviceSearch() {
      const {
        filter,
        setData,
        searchBody,
        setBackComponent,
        setDeviceSelectOn,
        setLoadingData,
        setShownComponent,
        devicePickerSearchBody,
      } = states;
      fetchAPI(
        "https://mobilexpert-server.herokuapp.com/api/subscriptions",
        setData,
        setLoadingData
      );
      console.log(devicePickerSearchBody);
      setBackComponent("deviceSearch");
      setDeviceSelectOn(true);
      setShownComponent("searchResults");

      // setBackComponent("devicePicker");
    },
    filters() {
      const {
        setBackComponent,
        setData,
        searchBody,
        setShownComponent,
        setLoadingData,
      } = states;

      setBackComponent("filters");
      setShownComponent("searchResults");

      fetchAPI(
        "https://mobilexpert-server.herokuapp.com/api/subscriptions",
        setData,
        setLoadingData
      );
      // fetch("http://localhost:3000/wp-json/wp/v2/users")
      //   .then((res) => res.json())
      //   .then((data) => console.log(data))
      //   .catch((e) => console.log(e));
    },
    back() {
      const {
        backStep,
        backComponent,
        devicePickerSearchBody,
        setBackStep,
        setBackToFilter,
        setBackComponent,
        setDevicePickerIsBack,
        setDevicePickerSearchBody,
        setEntry,
        setStep,
        setSearchBody,
        setShownComponent,
        shownComponent,
      } = states;

      let previous_steps = backStep.filter((item, i) => {
        if (i + 1 != backStep.length) return item;
      });

      if (shownComponent == "steps") {
        setBackStep(previous_steps);
        setBackToFilter(false);
      }
      if (shownComponent == "notAvailable") {
        setShownComponent("steps");
        setBackStep(previous_steps);
      }

      if (shownComponent == "filters" || shownComponent == "devicePicker") {
        setBackToFilter(false);
        setShownComponent("steps");
        setBackStep(previous_steps);
        setDevicePickerSearchBody({ search: "", fromPicker: false });
        setDevicePickerIsBack(false);
        setBackComponent(shownComponent);
      }

      if (shownComponent == "deviceSearch") {
        devicePickerSearchBody.fromPicker &&
          (setShownComponent("devicePicker"),
          setDevicePickerSearchBody((prevState) => prevState));

        !devicePickerSearchBody.fromPicker &&
          (setShownComponent("steps"),
          setDevicePickerSearchBody({
            search: "",
            fromPicker: false,
          }));
        setDevicePickerIsBack(false);
        setBackStep(previous_steps);
        setBackComponent(shownComponent);
      }

      if (shownComponent == "searchResults") {
        console.log(backComponent);
        backComponent == "deviceSearch" &&
          (setDevicePickerIsBack(true),
          setDevicePickerSearchBody((prevState) => prevState));

        (backComponent == "filters" || backComponent == "devicePicker") &&
          (setBackToFilter(true),
          setSearchBody((prevState) => ({ ...prevState })));

        setShownComponent(backComponent);
      }
      setStep(backStep[backStep.length - 1]);
      setEntry(backStep[backStep.length - 1] == "step1");
    },
    clear() {
      const {
        setBackStep,
        setBackToFilter,
        setEntry,
        setDevicePickerIsBack,
        setDevicePickerSearchBody,
        setSearchBody,
        setShownComponent,
        setStep,
      } = states;
      setDevicePickerIsBack(false);
      setShownComponent("steps");
      setEntry(true);
      setStep("step1");
      setBackStep([]);
      setSearchBody({});
      setDevicePickerSearchBody({ search: "", fromPicker: false });
      setBackToFilter(false);
    },
  };
  return HANDLERS[type];
};

// export const BUTTON_HANDLER = (type, filterType, next, states) =>
//   HANDLERS(filterType, next, states)[type];

import React, { useContext, useEffect, useState } from "react";
import SearchEngineContext from "../../context/SearchEngineContext";
import { FILTERS, LABELS_DK } from "../../../lib/strapiData";
import SelectDevice from "./SelectDevice";
import SearchDevice from "./SearchDevice";

const DeviceSelectForm = () => {
  const [isReady, setIsReady] = useState(false);
  const [elementOpen, setElementOpen] = useState("");
  const states = useContext(SearchEngineContext);
  const {
    devicePickerIsBack,
    devicePickerSearchBody,
    devicePickerType,
    devicePickerModel,
    setDevicePickerSearchBody,
    strapiData,
  } = states;

  const LABELS = (type) => {
    let arrayOfLabels;
    if (type == "help_select_phone") {
      arrayOfLabels = FILTERS["select_phone"];
    }
    if (type == "help_select_tablet") {
      arrayOfLabels = FILTERS["select_tablet"];
    }
    if (type == "select_phone" || type == "select_tablet") {
      arrayOfLabels = FILTERS[type];
    }
    return arrayOfLabels;
  };

  const BODY_SEARCH = (objectKey) => {
    return setDevicePickerSearchBody((prevState) => ({
      ...prevState,
      [objectKey]: {
        all: devicePickerModel[objectKey].default == "All" ? true : false,
        selected: devicePickerModel[objectKey].options,
      },
    }));
  };

  useEffect(() => {
    !devicePickerIsBack &&
      (devicePickerSearchBody.fromPicker &&
        LABELS(devicePickerType).map((objectKey) => {
          (objectKey == "phone_brands" || objectKey == "tablet_brands") &&
            BODY_SEARCH(objectKey);
        }),
      !devicePickerSearchBody.fromPicker &&
        LABELS(devicePickerType).map((objectKey) => {
          objectKey != "search" && BODY_SEARCH(objectKey);
        }));

    setIsReady(true);
  }, []);

  //

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.devicePicker.select_heading}
      </h1>
      <div className="flex items-center justify-around w-full my-[4rem]">
        {isReady &&
          LABELS(devicePickerType).map((objectKey, i) => {
            return (
              <div
                className="flex flex-col items-start justify-evenly min-h-[6rem] w-full mx-2"
                key={i}
              >
                <p className=" mb-2 capitalize font-semibold text-xl">
                  {LABELS_DK[objectKey]}
                </p>
                {objectKey == "search" ? (
                  <SearchDevice
                    searchKey={objectKey}
                    elementOpen={elementOpen}
                    setElementOpen={setElementOpen}
                  />
                ) : (
                  <SelectDevice
                    searchKey={objectKey}
                    elementOpen={elementOpen}
                    setElementOpen={setElementOpen}
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default DeviceSelectForm;

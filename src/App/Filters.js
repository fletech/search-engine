import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";

const Filters = () => {
  const COMPONENT = "filters";
  const states = useContext(SearchEngineContext);
  const { shownComponent, setShownComponent, strapiData } = states;
  return (
    shownComponent == COMPONENT && (
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
          {strapiData.filters.heading}
        </h1>
        <ButtonCustom
          type="filters"
          action={strapiData.filters.action}
          shownComponent={shownComponent}
          setShownComponent={setShownComponent}
          content={strapiData.filters.action}
        />
      </div>
    )
  );
};
export default Filters;

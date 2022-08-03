import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import FilterForm from "./FilterForm";

const Filters = () => {
  const COMPONENT = "filters";
  const states = useContext(SearchEngineContext);
  const { shownComponent, setShownComponent, strapiData } = states;
  return (
    shownComponent == COMPONENT && (
      <main className="w-full flex flex-col justify-center items-center">
        <FilterForm />
        <ButtonCustom
          type="filters"
          shownComponent={shownComponent}
          setShownComponent={setShownComponent}
          content={strapiData.filter.cta}
        />
      </main>
    )
  );
};
export default Filters;

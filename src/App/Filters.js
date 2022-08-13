import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import FilterForm from "./FilterForm";

const Filters = () => {
  const COMPONENT = "filters";
  const states = useContext(SearchEngineContext);
  const { shownComponent, strapiData } = states;
  return (
    shownComponent == COMPONENT && (
      <main className="w-full flex flex-col justify-center items-center">
        <FilterForm />
        <ButtonCustom type="filters" content={strapiData.filter.cta} />
      </main>
    )
  );
};
export default Filters;

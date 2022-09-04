import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import FilterForm from "./FilterForm";

const Filters = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData } = states;

  return (
    <>
      <FilterForm />
      <ButtonCustom type="filters" content={strapiData.filter.cta} />
    </>
  );
};
export default Filters;

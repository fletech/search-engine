import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";
import SearchEngineContext from "../context/SearchEngineContext";
import FilterForm from "./FilterForm";

const Filters = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData } = states;

  return (
    <main className=" relative h-auto w-full flex flex-col justify-between items-center ">
      <FilterForm />
      <ButtonCustom type="filters" content={strapiData.filter.cta} />
    </main>
  );
};
export default Filters;

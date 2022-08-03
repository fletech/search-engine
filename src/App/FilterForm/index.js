import React, { useContext } from "react";

import SearchEngineContext from "../../context/SearchEngineContext";
import FormSection from "../AuxComponents/formSection";
import InputRange from "./InputRange";
import Select from "./Select";
import Toggle from "./Toggle";

const FilterForm = () => {
  const states = useContext(SearchEngineContext);
  const { strapiData, filter, searchBody } = states;

  return (
    <>
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        {strapiData.filter.heading}
      </h1>
      <div
        className={`my-6 w-full min-h-[10vh] h-auto flex flex-col items-center justify-center`}
      >
        <FormSection flexDirection={"flex-row"}>
          {filter.network_5G && (
            <Toggle
              filterContent={filter.network_5G}
              searchKey="network_5G"
              align={"start"}
            />
          )}

          {filter.roaming && (
            <Toggle
              filterContent={filter.roaming}
              searchKey="roaming"
              align={"end"}
            />
          )}
        </FormSection>

        <FormSection flexDirection={"flex-col"}>
          {filter.data_amount && (
            <InputRange
              filterContent={filter.data_amount}
              searchKey="data_amount"
            />
          )}
        </FormSection>

        <FormSection flexDirection={"flex-col"}>
          {filter.talk_minutes && (
            <InputRange
              filterContent={filter.talk_minutes}
              searchKey="talk_minutes"
            />
          )}
        </FormSection>

        <FormSection flexDirection={"flex-col"}>
          {filter.services && (
            <Select filterContent={filter.services} searchKey="services" />
          )}
        </FormSection>

        <FormSection flexDirection={"flex-col"}>
          {filter.carriers && (
            <Select filterContent={filter.carriers} searchKey="carriers" />
          )}
        </FormSection>
      </div>
    </>
  );
};
export default FilterForm;

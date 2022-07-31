import React, { useContext } from "react";

import SearchEngineContext from "../context/SearchEngineContext";
import Spinner from "./AuxComponents/spinner";

const SearchResults = () => {
  const COMPONENT = "searchResults";
  const states = useContext(SearchEngineContext);
  const { shownComponent, data, loadingData } = states;

  return (
    shownComponent == COMPONENT && (
      <div
        className={`w-full flex flex-col justify-evenly list ${
          loadingData ? "items-center" : "items-start"
        }`}
      >
        <h2
          className={` tracking-[1px] font-bold text-4xl my-6 text-white ${
            loadingData ? "text-center" : "text-left"
          }`}
        >
          {loadingData ? (
            <div className="flex items-center justify-evenly border border-2 border-gray-300 rounded-sm p-10 bg-gray-100">
              <Spinner />
              <span className="text-black">Loading best results</span>
            </div>
          ) : (
            <span className="text-primary">Results</span>
          )}
        </h2>
        {!loadingData &&
          data.map((result) => (
            <h1 className="capitalize tracking-[1px] text-left font-semibold text-2xl  my-6 text-white first:mt-0 last:mb-0">
              {result.title}
            </h1>
          ))}
      </div>
    )
  );
};
export default SearchResults;

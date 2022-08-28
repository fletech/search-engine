import React, { useContext } from "react";
import SearchEngineContext from "../context/SearchEngineContext";

const NotAvailable = () => {
  const states = useContext(SearchEngineContext);
  const { shownComponent } = states;

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className=" tracking-[1px] font-semibold text-4xl  mb-10 text-white capitalize">
        Not available
      </h1>
    </main>
  );
};
export default NotAvailable;

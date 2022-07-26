import React, { useContext } from "react";
import ButtonCustom from "./ButtonCustom";

import SearchEngineContext from "../context/SearchEngineContext";

const Navigation = () => {
  const states = useContext(SearchEngineContext);
  const { entry, strapiData } = states;
  return (
    !entry && (
      <>
        <ButtonCustom
          type="back"
          content={strapiData.navigation.back.content}
        />
        <ButtonCustom
          type="clear"
          content={strapiData.navigation.clear.content}
        />
      </>
    )
  );
};
export default Navigation;

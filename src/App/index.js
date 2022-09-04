import { useContext } from "react";
// import { SearchEngineProvider } from "../context/SearchEngineContext";
import DevicePicker from "./DevicePicker";
import DeviceSearch from "./DeviceSearch";
import Filters from "./Filters";
import Navigation from "./Navigation";
import NotAvailable from "./NotAvailable";
import SearchResults from "./SearchResults";
import Steps from "./Steps";

import SearchEngineContext from "../context/SearchEngineContext";

const COMPONENTS = {
  steps: <Steps />,
  devicePicker: <DevicePicker />,
  deviceSearch: <DeviceSearch />,
  filters: <Filters />,
  notAvailable: <NotAvailable />,
  searchResults: <SearchResults />,
};

function App() {
  const states = useContext(SearchEngineContext);
  const { shownComponent } = states;
  return (
    <div className="content">
      <React.StrictMode>
        <Navigation />
        <main className="h-full w-full flex flex-col justify-center items-center ">
          {shownComponent && COMPONENTS[shownComponent]}
        </main>
      </React.StrictMode>
    </div>
  );
}

export default App;

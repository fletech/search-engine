import Steps from "./Steps";
import DevicePicker from "./DevicePicker";
import Filters from "./Filters";
import SearchResults from "./SearchResults";
import { SearchEngineProvider } from "../context/SearchEngineContext";

function App() {
  return (
    <div className="content">
      <React.StrictMode>
        <SearchEngineProvider>
          <Steps />
          <DevicePicker />
          <Filters />
          <SearchResults />
        </SearchEngineProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;

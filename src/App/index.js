import Steps from "./Steps";
import Filters from "./Filters";
import SearchResults from "./SearchResults";
import { SearchEngineProvider } from "../context/SearchEngineContext";

function App() {
  return (
    <div className="content">
      <React.StrictMode>
        <SearchEngineProvider>
          <Steps />
          <Filters />
          <SearchResults />
        </SearchEngineProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;

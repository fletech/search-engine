import { createContext, useState } from "react";
import { DefaultProvider } from "./provider";
import States from "./states";

const SearchEngineContext = createContext();

export function SearchEngineProvider({ children }) {
  return DefaultProvider(children, SearchEngineContext, States());
}

export default SearchEngineContext;

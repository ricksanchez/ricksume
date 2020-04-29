import { createContext } from "react";

const Store = {
  isWeb: !window.location.search.includes("pdf=true"),
};

export const StoreContext = createContext(Store);

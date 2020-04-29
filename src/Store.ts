import { createContext } from "react";

const urlParams = new URLSearchParams(window.location.search);

const Store = {
  isWeb: !window.location.search.includes("pdf=true"),
  email: urlParams.get("email"),
  phone: urlParams.get("phone"),
};

export const StoreContext = createContext(Store);

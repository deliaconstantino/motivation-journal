import { createContext } from "react";

export type SetIsLoggedInFunctionType = {
  setIsLoggedIn: (loggedIn: boolean) => void;
};

export interface LoggedInContextType extends SetIsLoggedInFunctionType {
  isLoggedIn: boolean;
}

export const LoggedInContext = createContext<LoggedInContextType | null>(null);

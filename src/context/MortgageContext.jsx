import { createContext, useState } from "react";

export const MortgageContext = createContext();
export default function MortgageContextProvider({ children }) {
  const [mortgage, setMortgage] = useState();

  return (
    <MortgageContext.Provider value={{ mortgage, setMortgage }}>
      {children}
    </MortgageContext.Provider>
  );
}

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import MortgageContextProvider from "./context/MortgageContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MortgageContextProvider>
    <App />
  </MortgageContextProvider>
);

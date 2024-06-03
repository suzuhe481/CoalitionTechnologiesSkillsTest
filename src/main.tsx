import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PatientDataContext from "./Context/PatientDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PatientDataContext>
      <App />
    </PatientDataContext>
  </React.StrictMode>
);

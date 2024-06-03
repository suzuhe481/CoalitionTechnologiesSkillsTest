import React from "react";
import { useContext } from "react";
import { PatientDataContext } from "../../../../../Context/PatientDataContext";

import "./DiagnosticList.scss";

function DiagnosticList() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  const DiagnosticList = singlePatient.diagnostic_list;

  const DiagnosticGridItems = DiagnosticList.map((value, index: number) => {
    const newIndex: number = index * 4;
    return (
      <React.Fragment key={newIndex}>
        <div key={newIndex + 1} className="chart-value">
          {value.name}
        </div>
        <div key={newIndex + 2} className="chart-value">
          {value.description}
        </div>
        <div key={newIndex + 3} className="chart-value">
          {value.status}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="diagnostic-list-container">
      <div className="title">Diagnostic List</div>
      <div className="diagnostic-list-chart">
        <div className="chart-labels">
          <div className="label">Problem/Diagnosis</div>
          <div className="label">Description</div>
          <div className="label">Status</div>
        </div>
        <div className="chart-values">{DiagnosticGridItems}</div>
      </div>
    </div>
  );
}

export default DiagnosticList;

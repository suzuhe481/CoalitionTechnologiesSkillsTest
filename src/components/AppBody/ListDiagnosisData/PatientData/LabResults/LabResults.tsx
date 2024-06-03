import { useContext } from "react";
import { PatientDataContext } from "../../../../../Context/PatientDataContext";

import DownloadIcon from "../../../../../assets/images/icons/download_FILL0_wght300_GRAD0_opsz24 (1).png";

import "./LabResults.scss";

function LabResults() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  if (singlePatient === null) {
    return <div>Loading</div>;
  }

  const listOfResults = singlePatient.lab_results.map(
    (result: string, index: number) => {
      return (
        <div className="result" key={index}>
          <div className="value">{result}</div>
          <img className="download-icon" src={DownloadIcon} />
        </div>
      );
    }
  );

  return (
    <div className="lab-results-container">
      <div className="title">Lab Results</div>
      <div className="results-list">{listOfResults}</div>
    </div>
  );
}

export default LabResults;

import { useContext } from "react";
import { PatientDataContext } from "../../../../../Context/PatientDataContext";

import PatientChart from "./PatientChart/PatientChart";
import RespTempHeartCharts from "./RespTempHeartCharts/RespTempHeartCharts";

import HollowArrowDown from "../../../../../assets/images/icons/expand_more_FILL0_wght300_GRAD0_opsz24.png";
import ArrowUp from "../../../../../assets/images/icons/ArrowUp.png";
import ArrowDown from "../../../../../assets/images/icons/ArrowDown.png";

import "./DiagnosisHistory.scss";

function DiagnosisHistory() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  const recentData = singlePatient.diagnosis_history[0];
  const SystolicValue = recentData.blood_pressure.systolic.value;
  const SystolicLevel = recentData.blood_pressure.systolic.levels;

  const DiastolicValue = recentData.blood_pressure.diastolic.value;
  const DiastolicLevel = recentData.blood_pressure.diastolic.levels;

  return (
    <div className="diagnosis-history-container">
      <div className="title-container">
        <div className="title">Diagnosis History</div>
      </div>
      <div className="chart-container">
        <div className="left-chart">
          <div className="top-chart-title">
            <div className="chart-title">Blood Pressure</div>
            <div className="chart-range">
              <div className="range-title">Last 6 months</div>
              <img className="range-arrow" src={HollowArrowDown} />
            </div>
          </div>
          <div className="chart">
            <PatientChart />
          </div>
        </div>
        <div className="right-chart">
          <div className="systolic-container">
            <div className="title-container">
              <div className="circle"></div>
              <div className="title">Systolic</div>
            </div>
            <div className="number-container">
              <div>{SystolicValue}</div>
            </div>
            <div className="description-container">
              <img className="arrow-up-icon" src={ArrowUp} />
              <div className="description">{SystolicLevel}</div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="diastolic-container">
            <div className="title-container">
              <div className="circle"></div>
              <div className="title">Diastolic</div>
            </div>
            <div className="number-container">
              <div>{DiastolicValue}</div>
            </div>
            <div className="description-container">
              <img className="arrow-down-icon" src={ArrowDown} />
              <div className="description">{DiastolicLevel}</div>
            </div>
          </div>
        </div>
      </div>
      <RespTempHeartCharts />
    </div>
  );
}

export default DiagnosisHistory;

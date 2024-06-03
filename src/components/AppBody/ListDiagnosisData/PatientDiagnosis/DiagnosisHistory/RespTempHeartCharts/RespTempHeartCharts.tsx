import { useContext } from "react";
import { PatientDataContext } from "../../../../../../Context/PatientDataContext";

import RespIcon from "../../../../../../assets/images/icons/respiratory rate.png";
import TempIcon from "../../../../../../assets/images/icons/temperature.png";
import HeartIcon from "../../../../../../assets/images/icons/HeartBPM.png";
import ArrowDownIcon from "../../../../../../assets/images/icons/ArrowDown.png";

import "./RespTempHeartCharts.scss";

function RespTempHeartCharts() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  const recentData = singlePatient.diagnosis_history[0];
  const RespValue = recentData.respiratory_rate.value;
  const RespLevel = recentData.respiratory_rate.levels;

  const TempValue = recentData.temperature.value;
  const TempLevel = recentData.temperature.levels;

  const HeartValue = recentData.heart_rate.value;
  const HeartLevel = recentData.heart_rate.levels;

  return (
    <div className="respTempHeartCharts">
      <div className="resp-chart">
        <img className="resp-icon" src={RespIcon} />
        <div className="data">
          <div className="title">Respiratory Rate</div>
          <div className="value">{RespValue} bpm</div>
        </div>
        <div className="level">{RespLevel}</div>
      </div>

      <div className="temp-chart">
        <img className="temp-icon" src={TempIcon} />
        <div className="data">
          <div className="title">Temperature</div>
          <div className="value">{TempValue} °F</div>
        </div>
        <div className="level">{TempLevel}</div>
      </div>

      <div className="heart-chart">
        <img className="heart-icon" src={HeartIcon} />
        <div className="data">
          <div className="title">Heart Rate</div>
          <div className="value">{HeartValue} °F</div>
        </div>
        <div className="level">
          <img className="level-icon" src={ArrowDownIcon} />
          {HeartLevel}
        </div>
      </div>
    </div>
  );
}

export default RespTempHeartCharts;

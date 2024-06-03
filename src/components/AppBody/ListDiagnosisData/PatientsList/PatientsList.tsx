import { useContext } from "react";
import { PatientDataContext } from "../../../../Context/PatientDataContext";

import "./PatientsList.scss";

import SearchIcon from "../../../../assets/images/icons/search_FILL0_wght300_GRAD0_opsz24.png";
import KebabHorizontalIcon from "../../../../assets/images/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.png";

function PatientList() {
  const { patients } = useContext(PatientDataContext);

  const listOfPatients = patients.map((patient: any, index: number) => {
    if (patient.name === "Jessica Taylor") {
      return (
        <div className="single-patient-container selected" key={index}>
          <div className="patient-left">
            <div
              className="patient-image"
              style={{
                background: `transparent url("${patient.profile_picture}") 0% 0% no-repeat
                  padding-box`,
              }}
            />
            <div className="patient-data">
              <div className="patient-name">{patient.name}</div>
              <div>
                {patient.gender}, {patient.age}
              </div>
            </div>
          </div>
          <div className="patient-right">
            <div className="patient-settings" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="single-patient-container" key={index}>
          <div className="patient-left">
            <div
              className="patient-image"
              style={{
                background: `transparent url("${patient.profile_picture}") 0% 0% no-repeat
                  padding-box`,
              }}
            />
            <div className="patient-data">
              <div className="patient-name">{patient.name}</div>
              <div>
                {patient.gender}, {patient.age}
              </div>
            </div>
          </div>
          <div className="patient-right">
            <img className="patient-settings" src={KebabHorizontalIcon} />
          </div>
        </div>
      );
    }
  });

  return (
    <div className="patients-list-container">
      <div className="title-container">
        <div className="title">Patients</div>
        <img className="search" src={SearchIcon} />
      </div>
      <div className="patients-list">{listOfPatients}</div>
    </div>
  );
}

export default PatientList;

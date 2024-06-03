import { useContext } from "react";
import { PatientDataContext } from "../../../../Context/PatientDataContext";
import LabResults from "./LabResults/LabResults";

import Layer2 from "../../../../assets/images/people/Layer 2.png";
import BirthIcon from "../../../../assets/images/icons/BirthIcon.png";
import FemaleIcon from "../../../..//assets/images/icons/FemaleIcon.png";
import PhoneIcon from "../../../..//assets/images/icons/PhoneIcon.png";
import InsuranceIcon from "../../../..//assets/images/icons/InsuranceIcon.png";

import "./PatientData.scss";

function PatientData() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  return (
    <div className="current-patient-data-container">
      <div className="current-patient-data">
        <div className="top">
          <img className="patient-image" src={Layer2} />
          <div className="patient-name">{singlePatient.name}</div>
        </div>
        <div className="middle">
          <div className="patient-dob">
            <img className="dob-image" src={BirthIcon} />
            <div className="data">
              <div className="title">Date of Birth</div>
              <div className="value">{singlePatient.date_of_birth}</div>
            </div>
          </div>
          <div className="patient-gender">
            <img className="gender-image" src={FemaleIcon} />
            <div className="data">
              <div className="title">Gender</div>
              <div className="value">{singlePatient.gender}</div>
            </div>
          </div>
          <div className="patient-contact">
            <img className="contact-image" src={PhoneIcon} />
            <div className="data">
              <div className="title">Contact info.</div>
              <div className="value">{singlePatient.phone_number}</div>
            </div>
          </div>
          <div className="patient-emergency">
            <img className="emergency-image" src={PhoneIcon} />
            <div className="data">
              <div className="title">Emergency Contacts</div>
              <div className="value">{singlePatient.emergency_contact}</div>
            </div>
          </div>
          <div className="patient-insurance">
            <img className="insurance-image" src={InsuranceIcon} />
            <div className="data">
              <div className="title">Insurance Provider</div>
              <div className="value">{singlePatient.insurance_type}</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="show">
            <div className="text">Show All Information</div>
          </div>
        </div>
      </div>

      <LabResults />
    </div>
  );
}

export default PatientData;

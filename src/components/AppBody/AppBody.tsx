import PatientsList from "./ListDiagnosisData/PatientsList/PatientsList";
import PatientDiagnostics from "./ListDiagnosisData/PatientDiagnosis/PatientDiagnosis";
import PatientData from "./ListDiagnosisData/PatientData/PatientData";

import "./AppBody.scss";

function AppBody() {
  return (
    <div className="app-body">
      <PatientsList />
      <PatientDiagnostics />
      <PatientData />
    </div>
  );
}

export default AppBody;

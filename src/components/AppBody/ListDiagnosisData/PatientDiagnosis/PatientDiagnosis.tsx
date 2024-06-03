import DiagnosisHistory from "./DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "./DiagnosticList/DiagnosticList";
import "./PatientDiagnosis.scss";

function PatientDiagnosis() {
  return (
    <div className="patient-diagnosis-container">
      <DiagnosisHistory />
      <DiagnosticList />
    </div>
  );
}

export default PatientDiagnosis;

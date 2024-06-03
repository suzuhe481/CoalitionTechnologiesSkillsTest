import { createContext, ReactNode, useState, useEffect } from "react";

import getPatientData from "../getPatientData";

interface ChildrenProps {
  children?: ReactNode;
}

// Interface declaration containing types for the Context's
// variables and functions.
interface IPatientDataContext {
  children?: ReactNode;

  patients: unknown;
  singlePatient: unknown;
}

export const PatientDataContext = createContext<IPatientDataContext>(
  {} as IPatientDataContext
);

const PatientDataProvider = ({ children }: ChildrenProps) => {
  const [patients, setPatients] = useState<unknown>([]);
  const [singlePatient, setSinglePatient] = useState<unknown>();

  // Gets all patients data and sets it to "patients" state.
  useEffect(() => {
    const patientData = getPatientData();

    patientData.then(function (results: never[]) {
      setPatients(results);
    });
  }, []);

  // Gets only Jessica Taylor's patient data and sets it to "singlePatient" state.
  useEffect(() => {
    setSinglePatient(
      patients.find(
        (patient: { name: string }) => patient.name === "Jessica Taylor"
      )
    );
  }, [patients]);

  return (
    <div>
      <PatientDataContext.Provider value={{ patients, singlePatient }}>
        {children}
      </PatientDataContext.Provider>
    </div>
  );
};

export default PatientDataProvider;

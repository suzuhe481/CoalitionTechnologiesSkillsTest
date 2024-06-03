import { useContext } from "react";
import { PatientDataContext } from "../../../../../../Context/PatientDataContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

function PatientChart() {
  const { singlePatient } = useContext(PatientDataContext);

  if (typeof singlePatient === "undefined") {
    return <div>Loading</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const sixMonthData = singlePatient.diagnosis_history.slice(0, 6);

  const labels = [
    "Oct, 2023",
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
  ];

  const systolicData = sixMonthData
    .map((value: number) => value.blood_pressure.systolic.value)
    .reverse();

  const DiastolicData = sixMonthData
    .map((value: number) => value.blood_pressure.diastolic.value)
    .reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: systolicData.map((value: number) => value),
        borderColor: "#E66FD2",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: DiastolicData.map((value: number) => value),
        borderColor: "#8C6FE6",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.5,
      },
    ],
  };

  return <Line className="chart" options={options} data={data} />;
}

export default PatientChart;

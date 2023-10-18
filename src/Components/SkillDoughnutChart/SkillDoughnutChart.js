import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useUserProvider } from "../../Providers/UserProvider";
import { useJobProvider } from "../../Providers/JobProvider";
import SkillsComponent from "../Job/SkillsComponent";
import "./SkillDoughnutChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

function SkillDoughnutChart() {
  const { applicantSkillIds } = useUserProvider();
  const { jobSkills } = useJobProvider();
  const skillMatches = applicantSkillIds.filter((el) => jobSkills.includes(el));
  const skillMatchPercent = Math.floor(
    (skillMatches.length / jobSkills.length) * 100
  );

  const data = {
    labels: ["Skill Compatibilty"],
    datasets: [
      {
        label: "Skill Match",
        data: [skillMatches.length, jobSkills.length - skillMatches.length],
        backgroundColor: ["#ffde59", "#41cdbc"],
        borderColor: ["#ffde59", "#41cdbc"],
      },
    ],
  };
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      // maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="skillDoughnutChart">
      <h3>You have {skillMatchPercent}% Skill Compability with this Job </h3>
      <>
        <Doughnut data={data} options={options}></Doughnut>
      </>

      <span className="skillDoughnutChart_percentage">
        {skillMatchPercent}%
      </span>

      <SkillsComponent justList={true} skillsArr={skillMatches} />
    </div>
  );
}

export default SkillDoughnutChart;

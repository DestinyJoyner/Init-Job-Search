import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useContextProvider } from "../../Providers/Provider";
import { useUserProvider } from "../../Providers/UserProvider";
import { useJobProvider } from "../../Providers/JobProvider";
import SkillsComponent from "../Job/SkillsComponent";
import { BiSolidRectangle } from "react-icons/bi";
import "./SkillDoughnutChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

function SkillDoughnutChart() {
  const { applicantSkillIds } = useUserProvider();
  const {isRecruiterAcc, isSignedIn} = useContextProvider()
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
        backgroundColor: ["#41cdbc", "#ffde59"],
        borderColor: ["#41cdbc", "#ffde59"],
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
      <section className="skillDoughnutChart_chartHeader">
        <h3>
          <BiSolidRectangle />
          Skill Compatibility
        </h3>
        {
          isSignedIn  ? <span>
          You have {skillMatchPercent}% skill compatibility with this job{" "}
        </span> :
        isRecruiterAcc ? <span>Feature unavailable for Recruiter Accounts</span> :
        <span>Sign in to see your skill compatibility with this job</span>
        }
        
      </section>
      
      <>
        <Doughnut data={data} options={options}></Doughnut>
      </>

      {isSignedIn &&
        <span className="skillDoughnutChart_percentage">
        {skillMatchPercent}%
      </span>
}

    {
      skillMatches.length > 0 &&
      <div className="skillDoughnutChart_skills">
        <span className="skillDoughnutChart_skills_header">
          Qualifying Skills
        </span>
        <SkillsComponent justList={true} skillsArr={skillMatches} />
      </div>
    }
      
    </div>
  );
}

export default SkillDoughnutChart;

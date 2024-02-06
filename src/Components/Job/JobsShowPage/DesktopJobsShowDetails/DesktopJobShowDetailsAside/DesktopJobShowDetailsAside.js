import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContextProvider } from "../../../../../Providers/Provider";
import SkillDoughnutChart from "../../../../SkillDoughnutChart/SkillDoughnutChart";
import { jobLocation } from "../../../../App/Data/Icons";
import "./DesktopJobShowDetailsAside.scss"

function DesktopJobShowDetailsAside({jobDetails}) {
    const { API, axios } = useContextProvider();
    const { city } = jobDetails
    const [relatedJobs, setRelatedJobs] = useState([]);

    useEffect(() => {
        if (city) {
          const convertCity = city.replaceAll(" ", "").toLowerCase();
          axios
            .get(`${API}/jobs?start=0&limit=4&city=${convertCity}`)
            .then(({ data }) => {
              data.shift();
              const filterRelatedJobs = data.filter(
                ({ id }) => id !== jobDetails.id
              );
              setRelatedJobs(filterRelatedJobs);
            })
            .catch((err) => console.log(err));
        }
      }, [jobDetails]);


    return (
        <aside className="desktopJobShowDetailsAside">
          <SkillDoughnutChart />
          <hr />
          <div className="desktopJobShowDetailsAside_relatedJobs">
            <span className="desktopJobShowDetailsAside_relatedJobs_header">
              {jobLocation} Jobs Near {city}
            </span>
            <ul className="desktopJobShowDetailsAside_relatedJobs_list">
              {relatedJobs.length > 0 ? (
                relatedJobs.map(({ title, company, id }) => (
                  <li key={uuidv4()}>
                    <Link to={`/jobs/${id}`}>
                      {title}, <br />
                      {company}
                    </Link>
                  </li>
                ))
              ) : (
                <span className="desktopJobShowDetailsAside_relatedJobs_list_none">
                  No Jobs to Display
                </span>
              )}
            </ul>
          </div>

          {/* <Link className="desktopJobShowDetailsAside_backButton" to="/jobs">
            {"<"}
            <span>Back to Jobs</span>
          </Link> */}
        </aside>
    );
}

export default DesktopJobShowDetailsAside;
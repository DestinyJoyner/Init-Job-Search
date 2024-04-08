import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "../../../../Job/Inputs/Dropdown";
import DesktopRecruiterJobCard from "../DesktopRecruiterJobCard/DesktopRecruiterJobCard";
import { recruiterSortOptionsArr } from "../../../../App/Data/RecruiterSortObj";
import { handleRecruiterJobSort } from "../../../../Functions/RecruiterFunctions/RecruiterProfileFunctions";
import { FaList } from "react-icons/fa6";
import { FaSortAmountDown } from "react-icons/fa";
import "./DesktopRecruiterJobs.scss"

function DesktopRecruiterJobs({recruiterJobsWithUsers, recruiterID, setRecruiterJobs, recruiterJobs}) {
    const [recruiterSortJobs, setRecruiterSortJobs] = useState("")

    return (
        <div className="desktopRecruiterJobs">
            <section className="desktopRecruiterJobs_header">
               
               <span className="desktopRecruiterJobs_header_label">
                <FaList />
               <span>Current Job Postings</span>
               </span> 

        <section className="desktopRecruiterJobs_header_sort">
            <FaSortAmountDown />
            <Dropdown 
          idVal={"recruiterSort"}
          stateVar={recruiterSortJobs}
          value={recruiterSortJobs}
          onChange={(event) => handleRecruiterJobSort(event, setRecruiterSortJobs, setRecruiterJobs, recruiterJobsWithUsers, recruiterID)}
          optionsArray={recruiterSortOptionsArr}/>

        </section>
              

            </section>

            <section className="desktopRecruiterJobs_jobsList">
                {
                    recruiterJobs.length > 0 ?
                    (recruiterJobs.map(el => <DesktopRecruiterJobCard jobObj ={el} setRecruiterSortJobs={setRecruiterSortJobs} key={uuidv4()} />)) :
                    (<p>No Current Job Postings</p>)
                }
            </section>

            

            
        </div>
    );
}

export default DesktopRecruiterJobs;
import { useEffect, useState } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import Bonus from "./Bonus.js";
import "./JobsIndex.css"
    // *****PAGINATION FOR LISTING ABOUT 10 JOBS AT A TIME => BACKEND QUERY SET UP EACH CLICK, GETS NEXT 10 -> BACK END FILTERING???*****,

function JobsIndex() {
    const { triggerBonus, setAppHeader, API, axios } = useContextProvider()
   const { jobs, bonus } = useJobProvider()

   useEffect(() => setAppHeader("inIT Jobs"), [])

   const [jobQuery, setJobQuery] = useState([])
   const [queryStart, setQueryStart] = useState(0)

   useEffect(() => {
    axios.get(`${API}/jobs?start=${queryStart}&limit=3`)
    .then(({data}) => setJobQuery(data))
    .catch(err => console.log(err))
   },[queryStart])

   return (
       <div className="jobsIndex">
           <SearchBar />
           <button onClick={() => setQueryStart(queryStart + 3)}>
            Query Click
           </button>
           <section className="jobListings grid-center">
           { !triggerBonus ?
               jobQuery.map(obj =>{
                if(obj["job_id"] !== 22){
                    return <JobsCard
                    key = {uuidv4()}
                    jobObj = {obj}  />
                }
               }
               
               ) :
               <Bonus 
               jobObj={bonus}/>
           }
           </section>
       </div>
   );
}


export default JobsIndex;
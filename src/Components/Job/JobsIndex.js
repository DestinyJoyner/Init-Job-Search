import { useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import Bonus from "./Bonus.js";
import "./JobsIndex.css"

function JobsIndex() {
    const { triggerBonus, setAppHeader } = useContextProvider()
   const { jobs, bonus } = useJobProvider()

   useEffect(() => setAppHeader("inIT Jobs"), [])

   return (
       <div className="jobsIndex">
           <SearchBar />
           <section className="jobListings grid-center">
           { !triggerBonus ?
               jobs.map(obj =>{
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
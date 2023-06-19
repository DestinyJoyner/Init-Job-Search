import { useContextProvider } from "../../Providers/Provider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from 'uuid';
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import Bonus from "./Bonus.js";
import "./JobsIndex.css"

function JobsIndex() {
    const { triggerBonus } = useContextProvider()
   const { jobs, bonus } = useJobProvider()

   return (
       <div className="jobsIndex">
           <SearchBar />
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
       </div>
   );
}


export default JobsIndex;
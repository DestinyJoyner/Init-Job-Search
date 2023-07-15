
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { BsClipboardCheck } from "react-icons/bs";
import {CiSearch} from  "react-icons/ci"
import { CgAsterisk } from "react-icons/cg";


const jobCompany = <HiOutlineBuildingOffice2 size={"20px"} color={"#41cdbc"} />

const jobLocation = <GoLocation size={"20px"} color={"#41cdbc"} />

const jobApplied = <BsClipboardCheck color={"black"} size={"40px"} />
          
const searchIcon =  <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" />

const asterisk = <CgAsterisk color={"#BA1A1A"} size={"15px"} />

export {
    jobCompany,
    jobLocation,
    jobApplied,
    searchIcon,
    asterisk,

}
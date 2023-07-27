import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { BsClipboardCheck, BsFillCircleFill, BsFillPlusCircleFill  } from "react-icons/bs";
import {CiSearch} from  "react-icons/ci"
import { CgAsterisk, CgProfile  } from "react-icons/cg";
import {FaUserTie} from "react-icons/fa"
import { AiOutlineHome, AiOutlineClose  } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";


const jobCompany = <HiOutlineBuildingOffice2 size={"20px"} color={"#41cdbc"} />

const jobLocation = <GoLocation size={"20px"} color={"#41cdbc"} />

const jobApplied = <BsClipboardCheck color={"black"} size={"40px"} />
          
const searchIcon =  <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" />

const asterisk = <CgAsterisk color={"#BA1A1A"} size={"15px"} />

const bulletPoint = <BsFillCircleFill />

// Recruiter Icons
const recruiter = <FaUserTie />
const addJob = <BsFillPlusCircleFill />

// Nav Bar Icons
const navLogin = <FiLogIn className="slideNav_link_icons" />

const navProfile = <CgProfile className="slideNav_link_icons" />

const navRegister = <FiUserPlus className="slideNav_link_icons" />

const navHome = <AiOutlineHome className="slideNav_link_icons" />

const navJobs = <MdWorkOutline className="slideNav_link_icons" />

const navAbout = <BiInfoCircle className="slideNav_link_icons" />

const navLogout = <FiLogOut className="slideNav_link_icons" />

export {
    jobCompany,
    jobLocation,
    jobApplied,
    searchIcon,
    asterisk,
    bulletPoint,
    recruiter,
    addJob,
    navAbout,
    navHome,
    navJobs,
    navLogin,
    navLogout,
    navProfile,
    navRegister
 

}
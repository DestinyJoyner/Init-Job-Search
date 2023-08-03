import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { BsClipboardCheck, BsFillCircleFill, BsFillPlusCircleFill, BsCheck  } from "react-icons/bs";
import {CiSearch} from  "react-icons/ci"
import { CgAsterisk, CgProfile  } from "react-icons/cg";
import {FaUserTie} from "react-icons/fa"
import { AiOutlineHome, AiOutlineClose  } from "react-icons/ai";
import { MdWorkOutline, MdOutlineMail, MdLockOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { BiInfoCircle, BiError } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5"

const jobCompany = <HiOutlineBuildingOffice2 size={"20px"} color={"#41cdbc"} />

const jobLocation = <GoLocation size={"20px"} color={"#41cdbc"} />

const jobApplied = <BsClipboardCheck color={"black"} size={"40px"} />

const loginEmail = <MdOutlineMail />
const loginPassword = <MdLockOutline />
          
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

//  Form emailVerification icons
const emailValid = <IoShieldCheckmarkOutline color={"green"} size={"1.4em"} />

const emailInvalid = <BiError color ={"rgb(186, 26, 26)"} size={"1.4em"} />

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
    navRegister,
    loginPassword,
    loginEmail,
    emailValid,
    emailInvalid
}
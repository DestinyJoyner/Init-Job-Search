import {CgWebsite} from "react-icons/cg"
import {AiOutlineFileSearch} from "react-icons/ai"
import {IoOptionsSharp} from "react-icons/io5"
import {MdOutlineHistory} from "react-icons/md"

const thumbnailArr = [
    {
        icon : <CgWebsite />,
        text: "Showcase your projects",
        header: "Portfolio"
    },
    {
        icon : <AiOutlineFileSearch />,
        text: "Find and apply to entry-level jobs",
        header: "Jobs"
    },
    {
        icon : <IoOptionsSharp />,
        text: "Filter search by skills, location, and remote work",
        header: "Filters"
    },
    {
        icon : <MdOutlineHistory />,
        text: "Track your application history",
        header: "History"
    }
]

export {thumbnailArr}
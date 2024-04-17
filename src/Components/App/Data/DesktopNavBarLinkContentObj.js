import { ImProfile } from "react-icons/im";
import { FaEdit, FaUserTie } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const applicantLinkContent = {
  profile: {
    icon: <ImProfile />,
    header: "View Profile",
    subheader:
      "Explore your personal information, resume, job applications, and skills at a glance.",
    route: "/user",
  },
  edit: {
    icon: <FaEdit />,
    header: "Edit Profile",
    subheader:
      "Edit your education, skills, projects, personal info, and resume to keep your profile up to date.",
    route: "/user/edit",
  },
  delete: {
    icon: <MdDeleteForever />,
    header: "Delete Profile",
    subheader:
      "Permanently delete your profile and remove all current job applications from consideration.",
    route: "/",
  },
};

const recruiterLinkContent = {
  profile: {
    icon: <FaUserTie />,
    header: "View Profile",
    subheader:
      "Browse and oversee your job postings, company information, and evaluate applicants for your listings.",
    route: "/recruiter",
  },
  postJob: {
    icon: <AiFillFileAdd />,
    header: "Post New Job",
    subheader:
      "Share new opportunities for entry-level software engineers and connect with talent on our platform.",
    route: "/jobs/new",
  },
  delete: {
    icon: <MdDeleteForever />,
    header: "Delete Profile",
    subheader:
      "Permanently delete your profile and remove all current job postings from inIT.",
    route: "/",
  },
};

const navbarLinkHTMLGenerator = (obj) => {

    return <div className="navBarLinkDropDown_links">
    {obj.icon}
    <span>{obj.header}</span>
    <p>{obj.subheader}</p>
  </div>
}

const navBarLinkDropdownValues = {
  "/user": [
    {
      value: navbarLinkHTMLGenerator(applicantLinkContent.profile),
      route: applicantLinkContent.profile.route,
    },
    {
      value: navbarLinkHTMLGenerator(applicantLinkContent.edit),
      route: applicantLinkContent.edit.route,
    },
    {
      value: navbarLinkHTMLGenerator(applicantLinkContent.delete),
      route: applicantLinkContent.delete.route,
    },
  ],
  "/recruiter": [
    {
      value: navbarLinkHTMLGenerator(recruiterLinkContent.postJob),
      route: recruiterLinkContent.postJob.route,
    },
    {
      value: navbarLinkHTMLGenerator(recruiterLinkContent.profile),
      route: recruiterLinkContent.profile.route,
    },
    {
      value: navbarLinkHTMLGenerator(recruiterLinkContent.delete),
      route: recruiterLinkContent.delete.route,
    },
  ],
};

export default navBarLinkDropdownValues;

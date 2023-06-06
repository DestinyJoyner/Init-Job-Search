import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useJobProvider } from "../../Providers/JobProvider";
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js";
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Job/Functions/SearchBarFunctions";
import { convertTasks } from "../Job/Functions/JobFunctions";
import { convertSkills } from "../Job/Functions/SkillsFunctions";
import { IoMdAddCircle } from "react-icons/io";
import { CgAsterisk } from "react-icons/cg";
import { TfiAngleLeft } from "react-icons/tfi";
import "./NewEditJobForm.css";

export default function NewEditJobForm({ edit }) {
  const {
    API,
    axios,
    jobID,
    recruiterID,
    setRecruiterID,
    access,
    setAccess,
    isRecruiter,
  } = useJobProvider();
  const navigate = useNavigate();
  const [jobDropdown, setJobDropdown] = useState("");
  const [taskArr, setTaskArr] = useState(["", ""]);
  const [skills, setSkills] = useState([]);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    city: "",
    details: "",
    full_remote: false,
    tasks: ["", ""],
    recruiter_id: recruiterID,
  });

  //   may need to check if changes were made before sending put that wipes skills etc...
  const [originalData, setOriginalData] = useState({});

  function handleSkills(e) {
    const id = +e.target.id;
    if (!skills.includes(id) && skills.length < 4) {
      setSkills([...skills, id]);
      setJobForm({ ...jobForm, ["skills"]: [...skills, id] });
    } else {
      const remove = skills.filter((el) => el !== id);
      setSkills(remove);
      setJobForm({ ...jobForm, ["skills"]: remove });
    }
  }

  function taskButton(e) {
    e.preventDefault();
    setTaskArr([...taskArr, ""]);
  }

  function checkForm(obj, stateVar) {
    const { jobDetails } = obj;
    // key values
    const originalForm = Object.values(stateVar);
    const updatedForm = Object.values(jobDetails);

    for (let i = 0; i < updatedForm.length; i++) {
      if (i === 8 && originalForm[i].length !== updatedForm[i].length) {
        return true;
      }
      if (i !== 6 && i !== 8 && updatedForm[i] !== originalForm[i]) {
        return true;
      }
    }
    const originalSkills = originalForm[8];
    const updatedSkills = updatedForm[8];
    const changedSkills = updatedSkills.every((el) =>
      originalSkills.includes(el)
    );
    if (!changedSkills) {
      console.log("changed skills");
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      jobDetails: jobForm,
    };
    obj.jobDetails.tasks = taskArr;
    obj.skills = skills;
    // check for updates
    const changes = checkForm(obj, originalData);
    // remote boolean to string
    obj.jobDetails.full_remote = `${obj.jobDetails.full_remote}`;

    if (edit && changes) {
      axios
        .put(`${API}/jobs/${jobID}`, obj)
        .then(({ data }) => navigate(`/jobs/${data.id}`))
        .catch((err) => console.log(err));
    } else if (edit && !changes) {
      navigate(`/jobs/${jobID}`);
    } else {
      axios
        .post(`${API}/jobs`, obj)
        .then(({ data }) => navigate(`/jobs/${data.id}`))
        .catch((err) => console.log(err));
    }
  }
  //   useEffect for edit
  useEffect(() => {
    if (edit) {
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => {
          setRecruiterID(data["recruiter_id"]);
          if (data["recruiter_id"] === recruiterID) {
            setAccess(true);
            if (data["full_remote"] === "false") {
              data["full_remote"] = false;
            }
            if (data["full_remote"] === "true") {
              data["full_remote"] = true;
            }
            const form = {
              ...data,
              ["tasks"]: convertTasks(data.tasks),
              ["city"]: data.city,
              ["skills"]: convertSkills(data.skills),
            };
            setOriginalData(form);
            setJobForm(form);
            setTaskArr(convertTasks(data.tasks));
            setSkills(convertSkills(data.skills));
            setJobDropdown(data.city);
          } else {
            setAccess(false);
            navigate("/not-found");
          }
        })
        .catch((err) => console.log(err));
    } else if (isRecruiter) {
      setAccess(true);
    } else if (!isRecruiter) {
      navigate("/not-found");
    }
  }, [jobID]);

  return (
    <div className="job-form-page">
      <section className="job-form-header">
        <TfiAngleLeft onClick={() => navigate(-1)} size={"30px"} />
        <h2 className={edit ? "edit-header" : ""}>
          {edit ? "Edit Post" : "Post a New Opportunity!"}
        </h2>
      </section>

      <form className="job-form" onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          label={"Job Title"}
          formId={"title"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Job Title"}
        />

        <TextInput
          label={"Company"}
          formId={"company"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Company"}
        />

        <section className="job-form-location">
          <label htmlFor="city" className="job-form-label-dropdown">
            <span>
              City
              <CgAsterisk color={"#cd5f41"} size={"15px"} />
            </span>
          </label>
          <Dropdown
            idVal={"city"}
            stateVar={jobDropdown}
            optionsArray={dropdownCities}
            onChange={(event) =>
              handleSearchBar(
                event,
                jobDropdown,
                setJobDropdown,
                jobForm,
                setJobForm
              )
            }
          />

          <Checkbox
            label={"Remote Work"}
            formId={"full_remote"}
            stateVar={jobForm}
            setFunction={setJobForm}
          />
        </section>

        <TextArea
          label={"Job Details"}
          formId={"details"}
          stateVar={jobForm}
          setFunction={setJobForm}
          required={true}
          placeholder={"Enter Job Overview details here"}
        />

        {/* Tasks */}
        <div className="job-form-tasks">
          <div className="task-container">
            {taskArr.map((el, i) => (
              <section className="task-line" key={uuidv4()}>
                <TextInput
                  key={uuidv4()}
                  label={"Job Tasks"}
                  formId={"tasks"}
                  stateVar={taskArr}
                  setFunction={setTaskArr}
                  required={true}
                  placeholder={`Job Task (${i + 1})`}
                  index={i}
                  task={true}
                />
              </section>
            ))}
          </div>
          <section className="task-header">
            <span onClick={(event) => taskButton(event)}>
              Click to Add A Task
            </span>
            <IoMdAddCircle
              size={"20px"}
              onClick={(event) => taskButton(event)}
            />
          </section>
        </div>

        <section className="job-form-skills">
          <span>
            <span>Min. 1, Max. 4 Skills req.</span>
            <CgAsterisk color={"#cd5f41"} size={"15px"} />
          </span>
          <SkillsComponent
            checkbox={true}
            checkedArr={skills}
            checkBoxHandle={(event) => handleSkills(event)}
          />
        </section>

        <input
          className="job-form-submit"
          type="submit"
          value={edit ? "Update Post" : "Post Job"}
        />
      </form>
    </div>
  );
}
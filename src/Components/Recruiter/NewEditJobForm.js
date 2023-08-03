import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContextProvider } from "../../Providers/Provider";
import { useNavProvider } from "../../Providers/NavProvider";
import { useJobProvider } from "../../Providers/JobProvider";
import TextInput from "../Job/Inputs/TextInput";
import TextArea from "../Job/Inputs/TextArea";
import Checkbox from "../Job/Inputs/Checkbox";
import Dropdown from "../Job/Inputs/Dropdown";
import SkillsComponent from "../Job/SkillsComponent.js";
import { dropdownCities } from "../Job/Data/Cities";
import { handleSearchBar } from "../Functions/SearchFunctions/SearchBarFunctions";
import { convertTasks, convertSkills } from "../Functions/ConvertFunctions/ConversionFunctions";
import { asterisk } from "../Job/Data/Icons.js";
import { IoMdAddCircle } from "react-icons/io";
import "./NewEditJobForm.css";

export default function NewEditJobForm({ edit }) {
  const { jobID, editAccess } = useJobProvider();
  const { setAppHeader } = useNavProvider();
  const { API, axios, recruiterID, isSignedIn, isRecruiterAcc } =
    useContextProvider();
  const navigate = useNavigate();
  const [originalData, setOriginalData] = useState({});
  const [jobDropdown, setJobDropdown] = useState("");
  const [taskArr, setTaskArr] = useState(["", ""]);
  const [skills, setSkills] = useState([]);
  const [formError, setFormError] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    city: "",
    details: "",
    full_remote: false,
    tasks: ["", ""],
    recruiter_id: recruiterID,
  });

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

  function handleSubmit(e) {
    e.preventDefault();
    // check values
    const taskFilter = taskArr.filter((el) => el !== "");
    const obj = {
      jobDetails: jobForm,
      skills: skills,
    };
    obj.jobDetails.tasks = taskFilter;
    if (skills.length < 1 || taskFilter < 1 || !jobForm.city) {
      setFormError(true);
    } else {
      if (edit) {
        let checkSkill = null;
        let checkTask = null;
        let checkStr = null;
        if (
          skills.length === originalData.skills.length ||
          taskFilter.length === originalData.tasks
        ) {
          if (skills.length === originalData.skills.length) {
            checkSkill = skills.every((el, i) => el === originalData.skills[i]);
          }
          if (taskFilter.length === originalData.tasks.length) {
            checkTask = taskFilter.every(
              (el, i) => el === originalData.tasks[i]
            );
          }
        }
        if (checkSkill && checkTask) {
          const originalValues = Object.entries(originalData)
            .filter(([key, value]) => {
              if (
                key !== "skills" &&
                key !== "tasks" &&
                key !== "id" &&
                key !== "recruiter_id"
              ) {
                return value;
              }
            })
            .map((arr) => arr[1]);

          const editValues = Object.entries(jobForm)
            .filter(([key, value]) => {
              if (
                key !== "skills" &&
                key !== "tasks" &&
                key !== "id" &&
                key !== "recruiter_id"
              ) {
                return value;
              }
            })
            .map((arr) => arr[1]);
          if (editValues.length !== originalValues.length) {
            checkStr = false;
          } else {
            checkStr = editValues.every((el, i) => el === originalValues[i]);
          }
        }
        if (checkSkill && checkTask && checkStr) {
          navigate(`/jobs/${jobID}`);
        } else {
          obj.jobDetails.full_remote = `${obj.jobDetails.full_remote}`;
          setFormError(false);
          axios
            .put(`${API}/jobs/${jobID}`, obj)
            .then(({ data }) => navigate(`/jobs/${data.id}`))
            .catch((err) => console.log(err));
        }
      }
      if (!edit) {
        setFormError(false);
        obj.jobDetails.full_remote = `${obj.jobDetails.full_remote}`;
        axios
          .post(`${API}/jobs`, obj)
          .then(({ data }) => navigate(`/jobs/${data.id}`))
          .catch((err) => console.log(err));
      }
    }
  }

  // remove error
  useEffect(() => {
    setFormError(false);
  }, [jobForm]);
  //   useEffect for edit
  useEffect(() => {
    if (edit) {
      setAppHeader("Edit Job Posting");
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => {
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
          setOriginalData({ ...form });
          setJobForm(form);
          setTaskArr(convertTasks(data.tasks));
          setSkills(convertSkills(data.skills));
          setJobDropdown(data.city);
        })
        .catch((err) => console.log(err));
    } else {
      setAppHeader("Post New Job");
    }
    if (isSignedIn || !isRecruiterAcc) {
      navigate("/not-found");
    }
  }, []);

  return (
    ((isRecruiterAcc && !edit) || editAccess) && (
      <div className="job-form-page">
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
              <span>City{asterisk}</span>
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
              <span className="task-req">Min. 1 Job Task req.</span>
              <span onClick={(event) => taskButton(event)}>
                Click to Add A Task
              </span>
              <IoMdAddCircle
                size={"20px"}
                color={"#41cdbc"}
                onClick={(event) => taskButton(event)}
              />
            </section>
          </div>

          <section className="job-form-skills">
            <span>
              <span>Min. 1, Max. 4 Skills req.</span>
              {asterisk}
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
            value={edit ? "SAVE" : "SUBMIT"}
          />
        </form>
        {formError && (
          <span className="job-form-error">"Form is incomplete"</span>
        )}
      </div>
    )
  );
}

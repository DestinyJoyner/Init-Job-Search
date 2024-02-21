import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import { useJobProvider } from "../../../Providers/JobProvider.js";
import { useRecruiterProvider } from "../../../Providers/RecruiterProvider.js";
import JobFormTextInput from "../../FormInputs/JobFormInputs/JobFormTextInput/JobFormTextInput.js";
import JobFormDataList from "../../FormInputs/JobFormInputs/JobFormDataListInput/JobFormDataList.js";
import JobFormTextArea from "../../FormInputs/JobFormInputs/JobFormTextArea/JobFormTextArea.js";
import JobFormCheckbox from "../../FormInputs/JobFormInputs/JobFormCheckbox/JobFormCheckbox.js";
import JobFormDropdown from "../../FormInputs/JobFormInputs/JobFormDropdown/JobFormDropdown.js";

import Dropdown from "../../Job/Inputs/Dropdown.js";

import SkillsComponent from "../../Job/SkillsComponent.js";
import { dropdownCities } from "../../App/Data/Cities.js";
import { handleSearchBar } from "../../Functions/SearchFunctions/SearchBarFunctions.js";
import {
  convertTasks,
  convertSkills,
} from "../../Functions/ConvertFunctions/ConversionFunctions.js";
import { asterisk } from "../../App/Data/Icons.js";
import { IoMdAddCircle } from "react-icons/io";
import "./NewEditJobForm.scss";
import "./DarkModeNewEditJobForm.scss"

export default function NewEditJobForm({ edit }) {
  const { jobID } = useJobProvider();
  const { editAccess } = useRecruiterProvider();
  const { setAppHeader } = useNavProvider();
  const {
    API,
    axios,
    recruiterID,
    isSignedIn,
    isRecruiterAcc,
    setLoading,
    loading,
  } = useContextProvider();
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
        console.log(obj);
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
      setAppHeader("Edit Job");
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
      setLoading(false);
    }
    if (isSignedIn || !isRecruiterAcc) {
      navigate("/not-found");
    }
  }, [loading]);

  useEffect(() => {
    if (jobForm.id) {
      setLoading(false);
    }
  }, [jobForm]);

  return (
    ((isRecruiterAcc && !edit) || editAccess || !loading) && (
      <div className="jobFormPage">
        <form
          className="jobFormPage_form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <JobFormTextInput
            label={"Job Title"}
            formId={"title"}
            stateVar={jobForm}
            setFunction={setJobForm}
            required={true}
            placeholder={"Job Title"}
          />

          <JobFormDataList
            label={"Company"}
            formId={"company"}
            stateVar={jobForm}
            setFunction={setJobForm}
            required={true}
            placeholder={"Company"}
          />

          <section className="jobFormPage_form_location">
            {/* <label
              htmlFor="city"
              className="jobFormPage_form_location_label_dropdown"
            >
              <span>City{asterisk}</span>
            </label> */}
            <JobFormDropdown
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

            <JobFormCheckbox
              label={"Remote Work"}
              formId={"full_remote"}
              stateVar={jobForm}
              setFunction={setJobForm}
            />
          </section>

          <section className="jobFormPage_form_details">
            <label className="jobFormPage_form_details_border_label">
              Job Details{asterisk}
            </label>
            <JobFormTextArea
              label={"Job Details"}
              formId={"details"}
              stateVar={jobForm}
              setFunction={setJobForm}
              required={true}
              placeholder={"Enter Job Overview details here"}
            />

            {/* Tasks */}
            <div className="jobFormPage_form_details_tasks">
              <div className="jobFormPage_form_details_tasks_container">
                {taskArr.map((el, i) => (
                  <section
                    className="jobFormPage_form_details_tasks_container_line"
                    key={uuidv4()}
                  >
                    <JobFormTextInput
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
              <section className="jobFormPage_form_details_tasks_header">
                <span className="jobFormPage_form_details_tasks_header_req">
                  Min. 1 Job Task req.
                </span>
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
          </section>

          <section className="jobFormPage_form_skills">
            <label className="jobFormPage_form_details_border_label">
              Skills Req.{asterisk}
            </label>

            <span className="jobFormPage_form_skills_req">Min. 1, Max. 4 Skills req.{asterisk}</span>

            <SkillsComponent
              checkbox={true}
              checkedArr={skills}
              checkBoxHandle={(event) => handleSkills(event)}
            />
          </section>

          <input
            className="jobFormPage_form_submit"
            type="submit"
            value={edit ? "SAVE" : "SUBMIT"}
          />
        </form>
        {formError && (
          <span className="jobFormPage_error">Form is Incomplete!</span>
        )}
      </div>
    )
  );
}

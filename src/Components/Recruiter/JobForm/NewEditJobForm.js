import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import { useJobProvider } from "../../../Providers/JobProvider.js";
import { useRecruiterProvider } from "../../../Providers/RecruiterProvider.js";
import {useWindowSizeProvider} from "../../../Providers/WindowSizeProvider.js"
import LogoBanner from "../../App/LogoBanner/LogoBanner.js"
import JobFormTextInput from "../../FormInputs/JobFormInputs/JobFormTextInput/JobFormTextInput.js";
import JobFormDataList from "../../FormInputs/JobFormInputs/JobFormDataListInput/JobFormDataList.js";
import JobFormLocation from "./JobFormLocation/JobFormLocation.js";
import JobFormDetails from "./JobFormDetails/JobFormDetails.js";
import JobFormSkills from "./JobFormSkills/JobFormSkills.js";
import {
  convertTasks,
  convertSkills,
} from "../../Functions/ConvertFunctions/ConversionFunctions.js";
import "./NewEditJobForm.scss";
import "./DarkModeNewEditJobForm.scss";

export default function NewEditJobForm({ edit }) {
  const { jobID } = useJobProvider();
  const { editAccess } = useRecruiterProvider();
  const { setAppHeader } = useNavProvider();
  const { isDesktopView } = useWindowSizeProvider()
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
        // console.log(obj);
        
          axios.post(`${API}/jobs`, obj)
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
    ((isRecruiterAcc && !edit) || editAccess) &&
    !loading && (
      <div className={ !isDesktopView ? "jobFormPage" : "jobFormPage jobFormPage_desktop"}>
        {
          isDesktopView && <LogoBanner />
        }
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

          <JobFormLocation
            stateVar={jobDropdown}
            setFunction={setJobDropdown}
            formStateVar={jobForm}
            formSetFunction={setJobForm}
          />

          <JobFormDetails
            tasksStateVar={taskArr}
            tasksSetFunction={setTaskArr}
            formStateVar={jobForm}
            formSetFunction={setJobForm}
          />

          <JobFormSkills handleSkills={handleSkills} skills={skills} />

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

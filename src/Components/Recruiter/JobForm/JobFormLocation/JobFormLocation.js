import JobFormDropdown from "../../../FormInputs/JobFormInputs/JobFormDropdown/JobFormDropdown";
import JobFormCheckbox from "../../../FormInputs/JobFormInputs/JobFormCheckbox/JobFormCheckbox";
import { handleSearchBar } from "../../../Functions/SearchFunctions/SearchBarFunctions";
import "./JobFormLocation.scss";

function JobFormLocation({
  stateVar,
  setFunction,
  formStateVar,
  formSetFunction,
}) {
  return (
    <section className="jobFormLocation">
      <JobFormDropdown
        idVal={"city"}
        stateVar={stateVar}
        onChange={(event) =>
          handleSearchBar(
            event,
            stateVar,
            setFunction,
            formStateVar,
            formSetFunction
          )
        }
      />

      <JobFormCheckbox
        label={"Remote Work"}
        formId={"full_remote"}
        stateVar={formStateVar}
        setFunction={formSetFunction}
      />
    </section>
  );
}

export default JobFormLocation;

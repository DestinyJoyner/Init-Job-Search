import { useState } from "react";
import {
  handleTextChange,
  handleTasks,
  removeTask,
} from "../../Functions/FormFunctions/JobFormFunctions.js";
import { asterisk } from "../../App/Data/Icons.js";
import { HiMinusCircle } from "react-icons/hi";

function TextInput({
  label,
  formId,
  stateVar,
  setFunction,
  required,
  placeholder,
  index,
  task,
}) {
  const [taskTest, setTaskTest] = useState(stateVar);

  function handleTaskBlur() {
    setFunction(taskTest);
  }

  return (
    <label htmlFor={formId}>
      <input
        className="jobFormPage_input_text"
        type="text"
        value={task ? taskTest[index] : stateVar[formId]}
        id={formId}
        placeholder={placeholder ? placeholder : ""}
        onChange={(event) => {
          !task
            ? handleTextChange(event, stateVar, setFunction)
            : handleTasks(event, taskTest, setTaskTest, index);
        }}
        onBlur={task ? () => handleTaskBlur() : null}
        required = {!task ? true : false}
      />
      <span className="jobFormPage_label">
        {label}
        {required && asterisk}
      </span>
      {task && (
        <HiMinusCircle
          className="jobFormPage_form_tasks_container_remove"
          size={"16px"}
          color={"#BA1A1A"}
          onClick={() => removeTask(stateVar, setFunction, index)}
        />
      )}
    </label>
  );
}

export default TextInput;

import { IoMdAddCircle } from "react-icons/io";

function JobFormTasksHeader({ tasksStateVar, tasksSetFunction }) {
  function taskButton(e) {
    e.preventDefault();
    tasksSetFunction([...tasksStateVar, ""]);
  }

  return (
    <section className="jobFormTasks_header">
      <span className="jobFormTasks_header_req">Min. 1 Job Task req.</span>
      <span onClick={(event) => taskButton(event)}>Click to Add A Task</span>
      <IoMdAddCircle
        size={"20px"}
        color={"#41cdbc"}
        onClick={(event) => taskButton(event)}
      />
    </section>
  );
}

export default JobFormTasksHeader;

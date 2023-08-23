import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function getTwoHighestAppliedToJobs(recruiterJobs) {
  const recruiterJobsFilteredByApplicants = recruiterJobs.filter(
    ({ users }) => users
  );

  const recruiterJobsHighestApplicantsDesc =
    recruiterJobsFilteredByApplicants.sort(
      (a, b) => b.users.length - a.users.length
    );

  return recruiterJobsHighestApplicantsDesc.splice(0, 3);
}

function handleRecruiterJobSort(
  e,
  setDropdownFunction,
  setJobListFuction,
  jobListWithUsers,
  recruiterID
) {
  const sortValue = e.target.value;
  setDropdownFunction(sortValue);

  if (sortValue === "applicants") {
      const sortByApplicants = jobListWithUsers.sort(
        (a, b) => {
          if(a.users && b.users){
            return b.users.length - a.users.length
          }
          }
      );
      setJobListFuction(sortByApplicants);
    
    
  } else {
    axios
      .get(`${API}/recruiters-jobs/${recruiterID}?sort=${sortValue}`)
      .then(({ data }) => setJobListFuction(data))
      .catch((err) => console.log(err));
  }
}

export { getTwoHighestAppliedToJobs, handleRecruiterJobSort };

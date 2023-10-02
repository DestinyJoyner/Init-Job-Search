import { useContextProvider } from "../../../Providers/Provider";
const {API, axios} = useContextProvider()


function deleteJob(jobId) {
    axios
      .delete(`${API}/jobs/${jobId}`)
      .then(() => navigate("/recruiter"))
      .catch((err) => console.log(err));
  }

  function applyToJob(userId, jobId, setFunction) {
    const obj = {
      user_id: userId,
      job_id: jobId,
    };
    axios
      .post(`${API}/user-jobs`, obj)
      .then(({ data }) => setFunction(data.date_applied))
      .catch((err) => console.log(err));
  }

  export {
    deleteJob,
    applyToJob
  }
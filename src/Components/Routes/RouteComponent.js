import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../Pages/About.js";
import ApplicantEdit from "../../Pages/ApplicantEdit.js";
import Error from "../../Pages/Error.js";
import Home from "../../Pages/Home.js";
import Jobs from "../../Pages/Jobs.js";
import JobsShow from "../Job/JobsShow.js";
import Applicant from "../../Pages/Applicant.js";
import JobProvider from "../../Providers/JobProvider.js";
import RecruiterProvider from "../../Providers/RecruiterProvider.js";
import Recruiter from "../../Pages/Recruiter.js";
import Register from "../../Pages/Register.js";
import Login from "../../Pages/Login.js";
import JobForm from "../../Pages/JobForm.js";
import JobApplicants from "../../Pages/JobApplicants.js";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {/* LOGIN ROUTES */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* USER ROUTES */}
        <Route path="user">
          <Route index element={<Applicant />} />
          <Route path="edit" element={<ApplicantEdit />} />
        </Route>
        {/* RECRUITER ROUTES */}
        <Route path="recruiter">
          <Route index element={<Recruiter />} />
        </Route>
        {/* JOBS ROUTES */}
        <Route path="jobs">
          <Route index element={<Jobs />} />
          <Route path="new" element={<JobForm edit={false} />} />
          <Route path=":jobID">
            <Route
              index
              element={
                <JobProvider>
                  <RecruiterProvider>
                  <JobsShow />
                  </RecruiterProvider>
                </JobProvider>
              }
            />
            <Route path="applicants" element={<JobApplicants />} />
            <Route path="edit" element={<JobForm edit={true} />} />
          </Route>
        </Route>
        {/* ABOUT ROUTE */}
        <Route path="about" element={<About />} />
        {/* ERROR ROUTES */}
        <Route path="/not-found" element={<Error />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default RouteComponent;

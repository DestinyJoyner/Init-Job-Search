import RecruiterProvider from "../Providers/RecruiterProvider.js";
import RecruiterProfile from "../Components/Recruiter/RecruiterProfile.js";

export default function Recruiter() {
  return (
    <RecruiterProvider>
      <RecruiterProfile />
    </RecruiterProvider>
    
  );
}

import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import ApplicantProfileEditForm from "../Components/Applicant/EditApplicantProfile/ApplicantProfileEditForm";
import DesktopApplicantProfileEditForm from "../Components/Applicant/EditApplicantProfile/DesktopApplicantProfileEditForm/DesktopApplicantProfileEditForm.js";
import UserProvider from "../Providers/UserProvider.js";

function ApplicantEdit() {
  const { isDesktopView } = useWindowSizeProvider();

  return (
    <UserProvider>
      {isDesktopView ? (
        <DesktopApplicantProfileEditForm />
      ) : (
        <ApplicantProfileEditForm />
      )}
    </UserProvider>
  );
}

export default ApplicantEdit;

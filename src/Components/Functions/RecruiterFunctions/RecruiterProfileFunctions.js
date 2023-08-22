function getTwoHighestAppliedToJobs(recruiterJobs) {
    const recruiterJobsFilteredByApplicants = recruiterJobs.filter(
      ({ users }) => users
    );

    const recruiterJobsHighestApplicantsDesc =
      recruiterJobsFilteredByApplicants.sort(
        (a, b) => b.users.length - a.users.length
      );

    return recruiterJobsHighestApplicantsDesc;
  }

  export {
    getTwoHighestAppliedToJobs
  }
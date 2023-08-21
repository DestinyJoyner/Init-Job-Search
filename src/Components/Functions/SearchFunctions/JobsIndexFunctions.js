function handlePagination(e, stateVar, setFunction, buttonSetFunction1, buttonSetFunction2, allJobs) {
    const buttonValue = e.target.value;
    if (buttonValue === "next") {
      buttonSetFunction2(false);
      if (stateVar + 4 <= allJobs.length) {
        stateVar + 8 >= allJobs.length
          ? buttonSetFunction1(true)
          : buttonSetFunction1(false);

        setFunction(stateVar + 4);
      } else {
        buttonSetFunction1(true);
      }
    }
    if (buttonValue === "previous") {
      buttonSetFunction2(false);
      if (stateVar - 4 >= 0) {
        stateVar - 8 < 0 ? buttonSetFunction1(true) : buttonSetFunction1(false);

        setFunction(stateVar - 4);
      } else {
        buttonSetFunction1(true);
      }
    }
  }

export {
    handlePagination
}
function handlePagination(e, stateVar, setFunction, buttonSetFunction1, buttonSetFunction2, searchCount, limit) {
    const buttonValue = e.target.value;
  
    if (buttonValue === "next") {
      buttonSetFunction2(false);
      if (stateVar + limit <= searchCount) {
        stateVar + (2*limit) >= searchCount
          ? buttonSetFunction1(false)
          : buttonSetFunction1(true);

        setFunction(stateVar + limit);
      } else {
        buttonSetFunction1(true);
      }
    }
    if (buttonValue === "previous") {
      buttonSetFunction2(false);
      if (stateVar - limit >= 0) {
        stateVar - (2*limit) < 0 ? buttonSetFunction1(true) : buttonSetFunction1(false);

        setFunction(stateVar - limit);
      } else {
        buttonSetFunction1(true);
      }
    }
  }

export {
    handlePagination
}
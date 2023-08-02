function handleFormInput(e, stateVar, setFunction) {
    const value = e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id] : value})
  }

  function registrationEmailCheck(value){
    const validEmailSyntax = value.includes("@") && value.includes(".")
    const atSymbolIndex = value.indexOf("@")
    const isPeriodAfterAtSymbol = value.indexOf(".", atSymbolIndex) === -1 ? false : true
    return validEmailSyntax && isPeriodAfterAtSymbol
  }

   // regex check for password
  function checkPasswordRequirements(password) {
    const cond1 = password.length >= 5;
    const cond2 =
      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-])/g.test(
        password
      );
    return cond1 && cond2;
  };

  // check for valid password and match both values
  function checkPasswordMatchAndValid(formPassword, confirmPassword) {
    const validPasswordMatch = (confirmPassword === formPassword) && checkPasswordRequirements(formPassword)
    return validPasswordMatch
  }

  // check if all form inputs have a value
  function checkIfFormInputsHaveValue(formObj){
    const formValues = Object.values(formObj)
    return formValues.every(el => el)
  }



  export {
    handleFormInput,
    registrationEmailCheck,
    checkPasswordRequirements,
    checkPasswordMatchAndValid,
    checkIfFormInputsHaveValue,
  }
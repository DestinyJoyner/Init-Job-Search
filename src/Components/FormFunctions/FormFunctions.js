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

  export {
    handleFormInput,
    registrationEmailCheck,
  }
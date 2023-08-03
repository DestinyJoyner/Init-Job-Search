 // handleTextChange
 function handleTextChange(e, stateVar, setFunction){
    const value = e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id]: value})
}

function handleTasks(e, stateVar, setFunction, index){
    const value = e.target.value
    const copyArr = [...stateVar]
    copyArr[index] = value
    setFunction(copyArr)   
}

function removeTask(stateVar, setFunction, index) {
    const remove = [...stateVar].filter((el,i) => i !== index)
    setFunction(remove)
}



export {
    handleTextChange,
    handleTasks,
    removeTask,
}
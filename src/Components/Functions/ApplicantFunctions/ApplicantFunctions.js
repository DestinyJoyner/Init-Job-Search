function applicantJobSortByDateDesc(arr) {
    const sortDateDesc = arr.sort((a,b) => {
        const dateA = new Date(a.date_applied)
        const dateB = new Date(b.date_applied)
        return dateB - dateA
    })
   return sortDateDesc
}

function checkIfEditsWereMade(originalObj, editedObj) {
    for (const key in editedObj){
        if(editedObj[key] !== originalObj[key]){
            return true
        }
    }
    return false
}

function checkIfSkillArrWasEdited(originalArr, editedArr) {
    if(originalArr.length !== editedArr.length){
        return true
    }
    const skillIdVal = originalArr.reduce((acc, el) => {
        acc[el] = 1
        return acc
    },{})
    for(const key in editedArr){
        if(!(key in skillIdVal)){
            return true
        }
    }
    return false
}


function applicantSubmitEditForm(e,originalObj, editedObj) {
    e.preventDefault()
}

export {
    applicantSubmitEditForm
}
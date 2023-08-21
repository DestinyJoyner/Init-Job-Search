import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function checkIfEditsWereMade(originalObj, editedObj) {
    for (const key in editedObj){
        if(key !== "skills"){
            if(editedObj[key] !== originalObj[key]){
                return true
            }
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


function applicantSubmitEditForm(e,originalObj, editedObj, navigate) {
    e.preventDefault()
    const changesToProfileDetails = checkIfEditsWereMade(originalObj, editedObj)

    const changesToSkills = checkIfSkillArrWasEdited(originalObj["skills"]["skill_ids"], editedObj.skills)

    if(changesToProfileDetails || changesToSkills){
        const editedDetailsObj = {
            profile: editedObj,
            skills: editedObj.skills
        }

        axios.put(`${API}/users/${originalObj.id}`, editedDetailsObj)
        .then(() => navigate("/user"))
        .catch(err => console.log(err))
    }
}

export {
    applicantSubmitEditForm
}
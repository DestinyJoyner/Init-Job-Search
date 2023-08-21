import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function checkIfProfileDetailsEdited(originalObj, editedObj) {
  for (const key in editedObj) {
    if (key !== "skills") {
      if (editedObj[key] !== originalObj[key]) {
        return true;
      }
    }
  }
  return false;
}

function checkIfSkillArrWasEdited(originalArr, editedArr) {
  if (originalArr.length !== editedArr.length) {
    return true;
  }
  const skillIdVal = originalArr.reduce((acc, el) => {
    acc[el] = 1;
    return acc;
  }, {});
  for (const val of editedArr) {
    if (!(val in skillIdVal)) {
      return true;
    }
  }
  return false;
}

function checkIfEditsMade(originalObj, editedObj) {
  const changesToProfileDetails = checkIfProfileDetailsEdited(
    originalObj,
    editedObj
  );

  let changesToSkills = false
  if(Array.isArray(editedObj.skills)){
    changesToSkills = 
    checkIfSkillArrWasEdited(
      originalObj["skills"]["skill_ids"],
      editedObj.skills
    );
  }
 

  if (changesToProfileDetails || changesToSkills) {
    return true;
  }
  return false;
}

function applicantSubmitEditForm(e, originalObj, editedObj, navigate) {
  e.preventDefault();
  const editedDetailsObj = {
    profile: editedObj,
    skills: editedObj.skills,
  };

  axios
    .put(`${API}/users/${originalObj.id}`, editedDetailsObj)
    .then(() => navigate("/user"))
    .catch((err) => console.log(err));
}

export { 
    applicantSubmitEditForm, 
    checkIfEditsMade 
};

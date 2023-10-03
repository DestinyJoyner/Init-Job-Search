import {dropdownCities} from "../../App/Data/Cities.js"

function convertDate(str){
    const strArr= str.split("T")[0].split("-")
    const arranged = [strArr[1], strArr[2], strArr[0].slice(2,4)].join("/")
    return arranged
}

function convertTasks(str) {
    const arr = str.split("__TASKBREAK__");
    return arr
  }

  function convertCities (str) {
    const match = dropdownCities.find(({val}) => str.toLowerCase() === val.toLowerCase())
    
    return match ? match.name : str

  }

  function convertSkills(arr, setFunction) {
    const newArr = arr.map((obj) => +Object.keys(obj)[0]);
    if(setFunction){
        setFunction(newArr)
    }
    else {
      return newArr
    }
  }

  function convertCitySearchValToDropdown(str) {
    const match = dropdownCities.find(({val}) => str === val.toLowerCase().replaceAll(" ", ""))
    
    return match.val 
  }

export {
    convertDate,
    convertTasks,
    convertCities,
    convertSkills,
    convertCitySearchValToDropdown
}
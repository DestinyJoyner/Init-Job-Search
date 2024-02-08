import React from "react";
import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import { handleTextChange } from "../../Functions/FormFunctions/JobFormFunctions";

function FilterDatalist({label, formId,stateVar,setFunction,required,placholder}) {
  const { API, axios } = useContextProvider();
  const [companyArr, setCompanyArr] = useState([{ company_name: "" }]);
  const [companyFilter, setCompanyFilter] = useState([{ company_name: "" }]);

  const filterDatalist = (e) => {
    const id = e.target.id
    const value = e.target.value;
    const removeSymbols = value.replaceAll(/[$&+,:;=?@#|'<>.^*()%!-]/g,"")
    
    const regex = new RegExp(removeSymbols.toLowerCase(), "gi");
    const filter = [...companyFilter].filter(({ company_name }) =>
      regex.test(company_name.toLowerCase())
    );
    setCompanyArr(filter);
    setFunction({...stateVar, [id]: removeSymbols})
  };

  useEffect(() => {
    axios.get(`${API}/company?companyName=true`)
      .then(({ data }) => {
        setCompanyArr(data);
        setCompanyFilter(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <label htmlFor={label}>
      <span>{label}</span>
      <input 
      list="companyList" 
      name="company"
      value={stateVar[formId]}
      id={formId} 
      onChange={filterDatalist} />

      <datalist id="companyList">
        {companyArr.map(({ company_name }) => (
          <option value={company_name} />
        ))}
      </datalist>
    </label>
  );
}

export default FilterDatalist;

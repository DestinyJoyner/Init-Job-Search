import React from 'react';
import { useState,useEffect } from 'react';
import { useContextProvider } from '../../../Providers/Provider';

function FilterDatalist(props) {
    const { API, axios } = useContextProvider()
    const [companyArr, setCompanyArr] = useState
    ([{company_name: ""}])
    const [companyFilter, setCompanyFilter] = useState([{company_name: ""}])
    
    const filterDatalist = (e) => {
        const value = e.target.value.toLowerCase()
        const regex = new RegExp(value,'gi')
        const filter = [...companyFilter].filter(({company_name})=> regex.test(company_name.toLowerCase()))
        setCompanyArr(filter)
    }

    useEffect(() => {
        axios.get(`${API}/company?companyName=true`)
        .then(({data}) => {
            setCompanyArr(data)
            setCompanyFilter(data)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <>
        <label><span>Company</span>
            <input list="companyList" name="company"
            onChange={filterDatalist} />
        </label>
        <datalist id="companyList">
            {
                companyArr.map(({company_name}) => <option value={company_name} />)
            }
        </datalist>

        </>
    );
}

export default FilterDatalist;
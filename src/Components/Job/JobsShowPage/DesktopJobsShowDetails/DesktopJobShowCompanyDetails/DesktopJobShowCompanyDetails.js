import { useEffect, useState } from "react"
import { useContextProvider } from "../../../../../Providers/Provider"
import convertCompanyForLogo from "../../../../App/Data/CompanyLogos"
import { website } from "../../../../App/Data/Icons"
import "./DesktopJobShowCompanyDetails.scss"

function DesktopJobShowCompanyDetails({jobDetails}) 
{
    const { API, axios } = useContextProvider()
    const {city, company } = jobDetails
    const [companyDetails, setCompanyDetails] = useState({})

    const companyLogo = company ?convertCompanyForLogo(company.toLowerCase()): ""

    useEffect(() => {
        if(company){
            const companyQueryValue = company.replaceAll(" ","").toLowerCase()
        axios.get(`${API}/company/${companyQueryValue}`)
        .then(({data}) => {
            console.log(data)
            setCompanyDetails(data)})
        .catch(err => console.log(err))
        }
        
    },[jobDetails.id])

    return (
        companyDetails.id &&
        <div className="desktopJobShowCompanyDetails">
            <section className="desktopJobShowCompanyDetails_header">
                <img className="desktopJobShowCompanyDetails_header_companyLogo" src={companyLogo} alt={`${company}`} />
                <span className="desktopJobShowCompanyDetails_header_companyName">{companyDetails.company_name}</span>
                <a 
                className="desktopJobShowCompanyDetails_header_companyWebsite"
                href={companyDetails.website}
                target="_blank">
                    {website}
                    <span>{companyDetails.website}</span></a>
                    <p className="desktopJobShowCompanyDetails_header_companyDescription">{companyDetails.company_description}</p>

            </section>
            
        </div>
    );
}

export default DesktopJobShowCompanyDetails;
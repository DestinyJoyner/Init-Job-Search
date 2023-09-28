 import recruiterStockImage from "../../../Assets/register-recruiter.jpeg"
 import applicantStockImage from "../../../Assets/register-applicant.jpg"

 const registerAccountTypeObj = {
    applicant : {
        image : applicantStockImage,
        listItems : [
            "Embrace a worry-free approach, as inIT exclusively features entry-level positions that welcome applicants without any prior professional work history.",
            "Explore entry-level job opportunities aligned with your skillset.",
            "Highlight your most impressive portfolio projects to capture recruiters' attention.",
            "Simplify the job application process with one-click submissions for positions matching your skill level.",
            "Keep tabs on your application progress with our application tracking feature."]
    },
    recruiter : {
        image: recruiterStockImage,
        listItems: [
        "Foster an inclusive workplace culture through the recruitment of entry-level developers who are enthusiastic about advancing in the tech industry.",
        "Publish entry-level job opportunities tailored for graduates of bootcamps and college programs who are eager to kickstart their careers in the tech sector.",
        "Engage with aspiring entry-level developers to expand your company's talent pool and drive growth.",
        "Keep your job postings up to date by removing or updating positions once they are filled."
        ]
    }
}

export {
    registerAccountTypeObj
}
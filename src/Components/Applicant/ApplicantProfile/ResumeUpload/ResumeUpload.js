import { useState } from "react";
import "./ResumeUpload.scss"

// prop is function to trigger one file is uploaded.
function ResumeUpload({onFileUpload}) {
    // state to hold the uploaded file
    const [resumeFile, setResumeFile] = useState(null)

    // function to check for file on event trigger to update state of resumeFile
    const handleFileChange = (event) => {
        const firstSelectedFile = event.target.file[0]
        if(firstSelectedFile){
            setResumeFile(firstSelectedFile)
        }
    }
    // function if file is preent, to upload file on button click to upload
    const handleUpload = () => {
        if(resumeFile){
        //   parent prop function call
        onFileUpload(resumeFile)   
        }
    }

    return (
        <div className="resumeUpload">
            <input 
            type="file" 
            accept=".pdf"
            onChange={(e) =>handleFileChange(e)} />
            <button onClick={() => handleUpload()}></button>
        </div>
    );
}

export default ResumeUpload;
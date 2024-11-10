import { useState, useEffect } from "react";
import { pipeline } from "@xenova/transformers";
import ResumeParse from "../../../HuggingFace/ResumeParse";
import "./ResumeUpload.scss"

// prop is function to trigger one file is uploaded.
function ResumeUpload({onFileUpload}) {
    // state to hold the uploaded file
    const [resumeFile, setResumeFile] = useState(null)
    const [extractedText, setExtractedText] = useState(null)
    const [nerModel, setNerModel] = useState(null)
    const [nerData, setNerData] = useState(null)

    // function to check for file on event trigger to update state of resumeFile
    const handleFileChange = (event) => {
        // console.log(event.target.files)
        const firstSelectedFile = event.target.files[0]
        if(firstSelectedFile){
            setResumeFile(firstSelectedFile)
        }
    }
    // function if file is present, to upload file on button click to upload
    const handleUpload = async () => {
        if(resumeFile && nerModel){
        //   parent prop function call
        const extractedResumeText = await onFileUpload(resumeFile, nerModel)   
        setExtractedText(extractedResumeText)

        }
    }

    useEffect(() => {
        // loading the pipeline model -> NER (name entity recognizition) -> choose from transfomers library for resume template type
        const loadModel = async () => {
            try {
                const pipeModel = await pipeline("text-classification","has-abi/bert-finetuned-resumes-sections")
            setNerModel(pipeModel)
                
            } catch (error) {
                console.log(error, "pipeline error")
                
            }
            
        } 

        loadModel()
        console.log("load model")
    }, [])

    return (
        <div className="resumeUpload">
            <div className="resumeUpload_input">
            <input className="resumeUpload_input_file" 
            type="file" 
            accept=".pdf"
            onChange={(e) =>handleFileChange(e)} />
            <button className="resumeUpload__input_submitButton" 
            onClick={() => handleUpload()}>Upload</button>
            </div>
            {/* <ResumeParse  extractedText={extractedText}/> */}
        </div>
    );
}

export default ResumeUpload;
import { useState, useEffect } from "react";
import { pipeline } from "@xenova/transformers";


function ResumeParse({extractedText}) {
    // state to hold pipeline model once loaded -> async
    const [nerModel, setNerModel] = useState(null)
    const [nerData, setNerData] = useState(null)



    useEffect(() => {
        // loading the pipeline model -> NER (name entity recognizition) -> choose from transfomers library for resume template type
        const loadModel = async () => {
            const pipeModel = await pipeline("text-classification","has-abi/bert-finetuned-resumes-sections")
            setNerModel(pipeModel)
        } 

        loadModel()
    }, [])

    useEffect( () => {
        if(nerModel){
            const processedExtractedText = async () => {
            const processedText = await nerModel(extractedText)
            return processedText
            } 
            const processedResume = processedExtractedText()
            setNerData(processedResume)
            console.log(processedResume, "pipeline parsed resume info")
        }
    },[nerModel])
    



    return (
        <div>
            resume
        </div>
    );
}

export default ResumeParse;
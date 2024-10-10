import { PDFDocument } from "pdf-lib"; // Import PDFDocument from pdf-lib

const extractTextFromPDF = async (file) => {
    const pdfData = await file.arrayBuffer(); 
    // Convert the file to an ArrayBuffer
        /* 
    - ArrayBuffer: An ArrayBuffer is a built-in JavaScript object that represents a generic, fixed-length binary data buffer. It is used to handle raw binary data in a more efficient way, especially when dealing with binary file formats, such as images, audio, and PDF files
*/
    const pdfDoc = await PDFDocument.load(pdfData); // Load the PDF document
    let textContent = ""; // Initialize a variable to hold the extracted text

    // Loop through each page in the PDF document
    const pages = pdfDoc.getPages(); // Get all pages
    for (const page of pages) {
        const text = await page.getTextContent(); // Extract text content from the page
        textContent += text.items.map(item => item.str).join(" "); // Concatenate the text items
    }

    return textContent; // Return the extracted text
};


// function to be used on Applicant Profile page/ paaed as prop onto resume uplad component to handle the pdf resume file upload 

export const handleExtractedTextFromResumeFile = async (resume) => {
    const extractedText = await extractTextFromPDF(resume)
    console.log(extractedText, "extracted text from pdf")

}


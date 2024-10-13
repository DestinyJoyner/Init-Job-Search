
// ISSUE RESOLVED HERE: https://github.com/mozilla/pdf.js/issues/10478

// Set the workerSrc to the path of the pdf.worker.js file
/* 
GlobalWorkerOptions.workerSrc: This line sets the workerSrc property to the URL of the pdf.worker.js file hosted on a CDN. This allows pdf.js to use the worker script for processing PDFs.
Using a CDN: The URL provided points to a version of the pdf.worker.js file hosted on a CDN (Content Delivery Network). This is a convenient way to include the worker without needing to host it yourself.

*/
export const extractTextFromPDF = async (file) => {
   const pdfjs = await import('pdfjs-dist/build/pdf');
   pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`

    const pdfData = await file.arrayBuffer(); 
    // console.log(pdfData, "file")
    // extract text using pdf-parse
    const fileData = await pdfjs.getDocument({data: pdfData}).promise
    // console.log(fileData, "returned from get document")
    // string to store extracted text from pdf pages
    let pdfFileContent = ""

    // lop through fileData to combine text
    for (let i = 1; i <= fileData.numPages; i++){
        const page = await fileData.getPage(i)

        // return array of text
        const pageText = await page.getTextContent()
        // console.log(pageText, "extracted pdf files shape")
        // loop through page text and join and add to pdffileContent
        const pageTextArr = pageText.items.map(el => el.str)
        pdfFileContent += pageTextArr.join(" ")
    }

    return pdfFileContent
    

    // console.log(fileData, "extracted text")
   

}

// code for pdf -lib with no text extraction
// const extractTextFromPDF = async (file) => {
    // const pdfData = await file.arrayBuffer(); 
    // Convert the file to an ArrayBuffer
        /* 
    - ArrayBuffer: An ArrayBuffer is a built-in JavaScript object that represents a generic, fixed-length binary data buffer. It is used to handle raw binary data in a more efficient way, especially when dealing with binary file formats, such as images, audio, and PDF files
*/
    // const pdfDoc = await PDFDocument.load(pdfData); 
    // Load the PDF document
    // let textContent = ""; 
    // Initialize a variable to hold the extracted text

    // Loop through each page in the PDF document
    // const pages = pdfDoc.getPages(); 
    // Get all pages
    // for (const page of pages) {
        // const text = await page.getTextContent(); 
        // Extract text content from the page
        // textContent += text.items.map(item => item.str).join(" "); 
        // Concatenate the text items
    // }

    // return textContent; 
    // Return the extracted text
// };


// function to be used on Applicant Profile page/ paaed as prop onto resume uplad component to handle the pdf resume file upload 

export const handleExtractedTextFromResumeFile = async (resume) => {
    const extractedText = await extractTextFromPDF(resume)
    console.log(extractedText, "extracted text from pdf")

}


// // ai-mock-Interview/pages/api/uploadResume.js

// import formidable from "formidable";
// import fs from "fs";
// import os from "os";
// import pdfParse from "pdf-parse";
// import { fromPath } from "pdf2pic";
// import { createWorker } from "tesseract.js";

// // Disable Next.js's default body parser so that formidable can handle file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   // Handle OPTIONS (preflight) requests
//   if (req.method === "OPTIONS") {
//     res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     res.setHeader("Access-Control-Max-Age", "86400");
//     return res.status(200).end();
//   }

//   // Only allow POST requests
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   // Parse the incoming form-data using formidable
//   let formData;
//   try {
//     formData = await new Promise((resolve, reject) => {
//       const form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve({ fields, files });
//       });
//     });
//   } catch (err) {
//     console.error("Error parsing form:", err);
//     return res.status(500).json({ error: "Error parsing form data" });
//   }

//   // Retrieve the uploaded file (ensure the file input key is "file")
//   let uploadedFile = formData.files.file;
//   if (Array.isArray(uploadedFile)) {
//     uploadedFile = uploadedFile[0];
//   }
//   if (!uploadedFile) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }
//   const filePath = uploadedFile.filepath || uploadedFile.path;
//   if (!filePath) {
//     return res.status(500).json({ error: "File path not found" });
//   }

//   // (Optional) Use pdf-parse to get PDF metadata (like number of pages)
//   let numPages = 1;
//   try {
//     const dataBuffer = fs.readFileSync(filePath);
//     const pdfData = await pdfParse(dataBuffer);
//     numPages = pdfData.numpages;
//   } catch (err) {
//     console.error("Error reading PDF metadata:", err);
//     // We'll default to 1 page if metadata extraction fails
//   }

//   // Convert each PDF page to an image using pdf2pic  
//   const tempDir = os.tmpdir(); // Use OS temporary directory
//   const options = {
//     density: 150,
//     saveFilename: "temp_page",
//     savePath: tempDir,
//     format: "png",
//     width: 1200,
//     height: 1600,
//   };

//   const pages = Array.from({ length: numPages }, (_, i) => i + 1);

//   let imagePaths = [];
//   try {
//     // convertBulk converts all pages specified in the array
//     const conversionResults = await fromPath(filePath, options).convertBulk(pages, true);
//     imagePaths = conversionResults.map(result => result.path);
//   } catch (err) {
//     console.error("Error converting PDF pages to images:", err);
//     return res.status(500).json({ error: "Error converting PDF pages to images" });
//   }

//   // Use tesseract.js to perform OCR on each image and collect text
//   const worker = createWorker();
//   let extractedText = "";
//   try {
//     await worker.load();
//     await worker.loadLanguage("eng");
//     await worker.initialize("eng");

//     for (const imagePath of imagePaths) {
//       const { data: { text } } = await worker.recognize(imagePath);
//       extractedText += text + "\n";
//     }
//     await worker.terminate();
//   } catch (err) {
//     console.error("Error during OCR processing:", err);
//     return res.status(500).json({ error: "Error during OCR processing" });
//   }

//   // Return the concatenated text from all pages
//   return res.status(200).json({ text: extractedText });
// }
// ai-mock-Interview/pages/api/uploadResume.js

import formidable from "formidable";
import fs from "fs";
import puppeteer from "puppeteer";

// Disable Next.js's default body parser so that formidable can handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Only accept POST requests (OPTIONS requests are handled for preflight)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Parse the incoming form-data using formidable
  let formData;
  try {
    formData = await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
  } catch (err) {
    console.error("Error parsing form:", err);
    return res.status(500).json({ error: "Error parsing form data" });
  }

  // Get the uploaded file (ensure the input key is "file")
  let uploadedFile = formData.files.file;
  if (Array.isArray(uploadedFile)) {
    uploadedFile = uploadedFile[0];
  }
  if (!uploadedFile) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = uploadedFile.filepath || uploadedFile.path;
  if (!filePath) {
    return res.status(500).json({ error: "File path not found" });
  }

  // Use Puppeteer to automate pdf2go.com/pdf-to-text
  try {
    // Launch Puppeteer; use --no-sandbox if necessary (for example in certain hosting environments)
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto("https://www.pdf2go.com/pdf-to-text", { waitUntil: "networkidle2" });

    // Step 1. Click the "Choose File" button (using your provided XPath)
    const [uploadButton] = await page.$x(
      '/html/body/div[3]/div[2]/div[3]/div/div/div[1]/div/div/div/div[1]/div/div/div[1]/div/div/div/div/button[1]'
    );
    if (!uploadButton) {
      throw new Error("Upload button not found");
    }
    // Wait for the file chooser to appear and then click the button
    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      uploadButton.click(),
    ]);
    // Use the temporary file path (uploaded by the user) for the file chooser
    await fileChooser.accept([filePath]);

    // Wait 3-4 seconds for the file to upload and process on pdf2go
    await page.waitForTimeout(4000);

    // Step 2. Click the next button to start the conversion (using your XPath)
    const [convertButton] = await page.$x(
      '/html/body/div[3]/div[2]/div[3]/div/div/div[1]/div/div/div/div[1]/div/div/div[1]/div/div/div[2]/div[3]/button'
    );
    if (!convertButton) {
      throw new Error("Convert button not found");
    }
    await convertButton.click();

    // Wait 5 seconds for the conversion to complete
    await page.waitForTimeout(5000);

    // Step 3. Click the first result element (using your XPath)
    const [resultButton1] = await page.$x(
      '/html/body/div[3]/div[4]/div[2]/div[1]/div[1]/div/div/div[2]'
    );
    if (!resultButton1) {
      throw new Error("Result button (first) not found");
    }
    await resultButton1.click();

    // Wait a couple of seconds
    await page.waitForTimeout(2000);

    // Step 4. Click the final element to show the extracted text (using your XPath)
    const [resultButton2] = await page.$x(
      '/html/body/div[3]/div[4]/div[2]/div[1]/div[1]/div/div[2]'
    );
    if (!resultButton2) {
      throw new Error("Result button (second) not found");
    }
    await resultButton2.click();

    // Wait a few seconds for the text to appear; you may need to adjust this timeout
    await page.waitForTimeout(3000);

    // Now, extract the text from the page.
    // (This selector depends on how pdf2go displays the result.
    // Here we assume that the result text is in a container with id "extractedText".
    // You may need to inspect the page and adjust accordingly.)
    const extractedText = await page.evaluate(() => {
      // Try to get an element that contains the converted text.
      // For example, if the site uses a textarea or div, adjust the selector.
      const el = document.querySelector("#extractedText") || document.querySelector("textarea");
      return el ? el.value || el.innerText : "";
    });

    await browser.close();

    // Return the extracted text (even if empty) to the client
    return res.status(200).json({ text: extractedText });
  } catch (err) {
    console.error("Error during Puppeteer automation:", err);
    return res.status(500).json({ error: "Error during Puppeteer automation" });
  }
}

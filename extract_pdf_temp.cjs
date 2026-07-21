const { PDFParse } = require('pdf-parse');
const fs = require('fs');

async function run() {
  const pdfPath = "Dexsol- Branding Final .pdf";
  const buffer = fs.readFileSync(pdfPath);
  console.log("Buffer size:", buffer.length);
  
  console.log("Loading PDF and parsing...");
  // Pass the data buffer in the LoadParameters options object.
  const parser = new PDFParse({ data: buffer });
  
  console.log("Extracting text...");
  const textResult = await parser.getText();
  
  const text = textResult.text;
  const outputPath = 'branding_guidelines.txt';
  fs.writeFileSync(outputPath, text, 'utf-8');
  console.log(`Success! Extracted ${text.length} characters to ${outputPath}`);
  
  await parser.destroy();
}

run().catch(err => {
  console.error("Error during execution:", err);
});

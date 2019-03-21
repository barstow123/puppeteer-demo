const puppeteer = require('puppeteer');
 
var PDFgenerate = (async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:6789', {waitUntil: 'networkidle2'});
  await page.pdf({path: '../PDFcards', format: 'A4'});
 
  await browser.close();
})();

module.exports = {
  generate: PDFgenerate
}
//require, imports
var express = require("express");
const puppeteer = require("puppeteer");

//express app settings
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Views for app
app.get('/', function(req, res) {
   res.render('index', {title: "My card"});
})
app.post('/pdfgenerate', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6789', {waitUntil: 'networkidle2'});
    await page.pdf({path: '../puppeteer demo/PDFcards/card.pdf', width: 300, height: 200, pageRanges: '1'});
    throw new Error();
    console.log('made a card!');
    await browser.close();
    res.redirect('/');
})

//starts app on port 6789
app.listen(6789, function() {
  console.log("listening on port 6789");
})
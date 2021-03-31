var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const fetch = require('node-fetch')
dotenv.config();


const app = express()

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cors())

const port = 3000;


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/analyse', function (req, res) {
    const articleURL = req.body.url
    const apiKey = process.env.API_KEY
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("url", articleURL);
    formdata.append("lang", "en");
    const formdata = {
        "key":apiKey,
        "url":articleURL,
        "lang":"en"
    }
    fetch(baseURL,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/JSON'
        },
        body:formdata
    }).then((analysis) => analysis.json()).then(function (analysis){
        res.send({
                 "agreement": analysis.agreement,
                 "confidence": analysis.confidence,
                 "subjectivity": analysis.subjectivity
             })
        console.log(analysis)
    
})
})

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cors())

const port = 3000;
const apiKey = process.env.API_KEY
const baseURL = "https://api.meaningcloud.com/sentiment-2.1"


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/analyse', async (req, res) => {
    const articleURL = req.body.url
    
    apiURL = `${baseURL}?key=${process.env.API_KEY}&url=${articleURL}&lang=en`
    fetch(apiURL, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        }
    })
    .then(response => {
        return response.json()
    })
    .then((analysis) => {
        res.send({
            confidence:analysis.confidence,
            agreement:analysis.agreement,
            score:analysis.score_tag,
            irony:analysis.irony
        })
    })
    .catch(error => console.log('error', error));
})

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

const port = 3000;

console.log(__dirname)

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
    urlReq = req.body;
    console.log(urlReq)

    formdata = {
        "key":"359858ef84deeccf76da0de203d5f639",
        "lang":"en",
        "url":"https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url"
    }

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      console.log("options are",requestOptions)
      
      
})

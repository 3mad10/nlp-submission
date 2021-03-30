function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const formdata = {
        "key":"359858ef84deeccf76da0de203d5f639",
        "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
        "lang":"en"
    }
    const response = fetch("https://api.meaningcloud.com/sentiment-2.1",formdata)
    console.log(response)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }

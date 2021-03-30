function handleSubmit(event) {
    event.preventDefault()

        
    // check what text was put into the form field
    
    console.log("::: Form Submitted :::")
    // fetch('http://localhost:3000/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

    const postData = async (url = '', data = {})=>{
        const response = await fetch(url, {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data),
        })
        try {
            const newData = await response.json();
            return newData
        }catch(error) {
            console.log('error',error);
        }
    
    }

    

    let formText = document.getElementById('name').value;

    postData('http://localhost:3000/analyse',"https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url").then(function(analysis){

    const resultSpace = document.getElementById('results');

    resultSpace.innerHTML = analysis;
    })

    
    console.log("posted")
}

export { handleSubmit }

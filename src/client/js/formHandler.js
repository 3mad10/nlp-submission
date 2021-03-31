function handleSubmit(event) {
    event.preventDefault()
    
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

    if (Client.checkURL(formText)){
        postData('/analyse',{'url':formText}).then((analysis) => console.log(analysis))
    }
    else {alert('please enter a valid url')}
    
}

export { handleSubmit }

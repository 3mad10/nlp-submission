function handleSubmit(event) {
    event.preventDefault()


    
    const apiKey = '359858ef84deeccf76da0de203d5f639';
        
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

    

    postData('/analyse',{'url':formText}).then(analysis => console.log(analysis))
    
    console.log("posted")
}

export { handleSubmit }

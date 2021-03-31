function handleSubmit(event) {
    event.preventDefault()


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
        postData('/analyse',{'url':formText}).then((analysis)=>{
            document.getElementById('confidence').innerHTML = `confidence level : ${analysis.confidence}`;
            document.getElementById('score').innerHTML = `score : ${analysis.score}`;
            document.getElementById('irony').innerHTML = `irony level : ${analysis.irony}`;
            document.getElementById('agreement').innerHTML = `agreement : ${analysis.agreement}`;
        });
    }
    else {alert('please enter a valid url')}
    
}

export { handleSubmit }

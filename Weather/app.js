const button = document.querySelector("button")
const baseURL = 'https://api.weatherstack.com'
const accessKey = 'da0a3a915bf71ae00589133a3370c2b2'
button.addEventListener('click', ()=>{
    const input = document.querySelector("input")
    const city = input.value
    if(!city){
        alert("Please enter a city.")
        return
    }

    // make a api request
    // http://api.weatherstack.com/current
    // ? access_key = da0a3a915bf71ae00589133a3370c2b2
    // & query = New York

    fetch(`${baseURL}/current?access_key=${accessKey}&query=${city}`, {
        method: "GET"
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
})


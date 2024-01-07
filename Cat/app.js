const btn = document.querySelector("button")
const baseUrl = 'https://cat-fact.herokuapp.com'

btn.addEventListener('click', () => {
    fetch(`${baseUrl}/facts/random`, {
        method: "GET"
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data)
        const body = document.querySelector("body")
        let output = document.getElementById("output")
        if(output){
            output.innerText = data.text;
        } 
        else{
            output = document.createElement("div")
            output.setAttribute("id", "output")
            output.innerText = data.text;
            body.append(output)
        }
    })
    .catch((err) => {
        console.log(err)
    })
})
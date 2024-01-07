// This is to create all the options in both the select tags
window.addEventListener('load', () => {
    console.log('fetching data')
    const fromSelect = document.getElementById("from")
    const toSelect = document.getElementById("to")
    fetchAvailableCurrency()
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})


// Button => Event Listener => API call to convert => Show the output

function fetchAvailableCurrency(){
    console.log("Fetching currencies...")
    const ans = fetch(`https://currencyconverter.p.rapidapi.com/availablecurrencies`,{
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'fa054ff29cmsh49bf4c23c5b8719p15303djsnfc6cc95ebb74',
            'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
          }
    })
    return ans;
}
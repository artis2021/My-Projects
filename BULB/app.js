const bulb = document.getElementById("fourth");
const button = document.getElementById("switch");
let curr = false;

button.addEventListener('click',()=>{
    if(curr == true)
    {
        button.innerText = "ON"
        curr = false;
        bulb.style.backgroundColor = "rgba(255, 255, 255, 0.265)";
        bulb.style.boxShadow = "0 0 0 0 white";
    }
    else{
        curr = true;
        button.innerText = "OFF";
        bulb.style.backgroundColor =  "white";
        bulb.style.boxShadow = "0 0 500px 70px white";
    }
})


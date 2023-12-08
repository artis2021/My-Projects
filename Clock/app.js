const day = document.getElementById("day")
const date = document.getElementById("date")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const today = new Date();

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"]

day.innerText = days[today.getDay()]
date.innerText = `${today.getDate()}, ${months[today.getMonth()]}, ${today.getFullYear()}`

setInterval(()=>{
    const current = new Date();
    hour.innerText = `${current.getHours()}`
    minute.innerText = `${current.getMinutes()}`
    second.innerText = `${current.getSeconds()}`
},1000)

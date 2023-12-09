const body = document.querySelector("body");

const box = document.createElement("div");
box.setAttribute("id","box");

let present = false;

let vx = 20
let vy = 20
let currX = 0
let currY = 0

const width = window.innerWidth
const height = window.innerHeight

body.addEventListener('click',(event) => {
    if(present) return ;

    present = true
    currX = event.clientX;
    currY = event.clientY;
    box.style.left = `${currX-50}px`;
    box.style.top = `${currY-50}px`;

    
    body.append(box);
})

setInterval(() => {
    box.style.left = `${currX-50}px`;
    box.style.top = `${currY-50}px`;
    

    // Bopundary checks

    if(currX<50)
    {
        vx *= -1;
    }

    else if(currY<50)
    {
        vy *= -1;
    }
    else if(currX>(width - 60))
    {
        vx *= -1
    }
    else if(currY>(height - 60))
    {
        vy *= -1
    }

    currX += vx;
    currY += vy;


}, 100)


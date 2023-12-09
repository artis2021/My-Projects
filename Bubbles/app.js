const body = document.querySelector("body");
let prevX = 0;
let prevY = 0;

const distance = (x,y) => {
    return Math.sqrt((x-prevX)*(x-prevX) + (y-prevY)*(y-prevY));
}
const randColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const dis = distance(x,y)


    if(dis<=30)
    {
        return;
    }
    // create div
    const div = document.createElement("div")

    //add id
    div.setAttribute("id", "box");


    //div color
    div.style.backgroundColor = randColor();
    div.style.left = `${x-50}px`;
    div.style.top = `${y-50}px`;

    //div append
    body.append(div);

    prevX = x
    prevY = y
    //div position
})

setInterval(()=>{
    const first = body.firstChild
    if(first)
    body.removeChild(first)
},100)


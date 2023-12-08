const generateButton = document.getElementById("generate");

function randomColor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}

generateButton.addEventListener('click',()=>{
    // Creating new element
    const box = document.createElement('div')

    // set the styles
    const size = `${Math.floor(Math.random()*191) + 10}px`
    box.style.width = size
    box.style.height = size
    box.style.backgroundColor = randomColor();
    box.style.borderRadius = "50%"
    box.style.position = "fixed"
    box.style.left = `${Math.floor(Math.random()*1920)}px`
    box.style.top = `${Math.floor(Math.random()*1080)}px`

    // access the body
    const body = document.getElementsByTagName('body')[0]
    body.append(box)
})
const body = document.querySelector("body");

const heading = document.querySelector("h1");

body.addEventListener("keydown", (event) => {
    heading.innerHTML = `You Pressed <span>${event.key}</span>`;

})
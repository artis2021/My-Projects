const add = document.getElementById("add")

// state of our application
const todo = []

const render = () => {
    const allTodo = document.getElementById("allToDo")
    allTodo.innerHTML = " <h1>All ToDos</h1>"

    for(let ele of todo){
        const newDiv = document.createElement("div")
        const newH1 = document.createElement("h1")
        const newP = document.createElement("p")

        newH1.innerText = ele.title
        newP.innerText = ele.description

        newDiv.append(newH1)
        newDiv.append(newP)

        // give some classname to every div
        newDiv.classList.add("card")
        allTodo.append(newDiv)
    }
}

add.addEventListener("click", ()=>{
    // grab input values
    const title = document.getElementById("title")
    const desc = document.getElementById("descriptionInput")
    
    if(title.value == "" || desc.value == "") {
        alert("Please enter something on both fields.")
        return;
    }

    // push a new todo the array
    todo.push({
        title: title.value,
        description: desc.value
    })

    // Render new content
    render();
})
const name = document.getElementById("name")
const createTodo = document.getElementById("create-list")
const radio = document.getElementById("radio")
const button = document.getElementById("add")
const result = document.getElementById("result")

// add event

add.addEventListener("click", (e) => {
    if (createTodo.value === "") return
    createDeleteElements(createTodo.value)
    createTodo.value = ""
})
function createDeleteElements(value) {
    console.log(value);

    const li = document.createElement("li")
    const btn = document.createElement("button")
    const deleteBtn=document.createElement("button")
    const liRadio=document.createElement("input")
    



    li.className = "li"
    li.textContent = value
    result.appendChild(li)

    liRadio.className="li__radio"
    liRadio.type="radio"
    li.appendChild(liRadio)


    btn.className ="edit__btn"
    btn.textContent="Edit"
    li.appendChild(btn)

    deleteBtn.className="delete__btn"
    deleteBtn.textContent="Delete"
    li.appendChild(deleteBtn)

 }
let btn = document.createElement("button")

btn.classList.add("btn", "btn-success")
btn.textContent = "hola sam"

const main = document.querySelector("main")

const hijoUno = document.querySelector("#hijo-uno")
const hijoDos = document.querySelector("#hijo-dos")

main.insertBefore(btn,hijoDos)
// main.before(btn)
// El before me agrega un hijo antes del contenedor Padre
// El after me agrega un hijo después del contenedor Padre
// El prepend me agrega un hijo dentro del contenedor Padre antes del primer hijo
// El append me agrega un hijo dentro del contenedor Padre después del último hijo
// replaceChildren reemplaza todos los hijos
// replaceChild reemplaza solo un hijo
// El replaceWith me reemplaza todos los hijos y también al padre

const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
const btnExample = createAButton()

// // Insert element before content
// main.before(btnExample)

// // Insert element after content
// main.after(btnExample)

// // Insert element before first child
// main.prepend(btnExample)

// // Insert element after the last child
// main.append(btnExample)

// // Replace all children
// main.replaceChildren(btnExample)

// // Replace all children and the father
// main.replaceWith(btnExample)

// // Delete the content father
// main.remove(btnExample)

function createAButton() {
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-dark")
    btn.textContent = "dark button"
    return btn
}

// console.log(main.children) // Children of the main
// console.log(footer.children) // Children of the footer
// console.log(main.parentElement) // Return the father

// console.log(main.firstElementChild) // First child of the content
// console.log(main.lastElementChild) // Last child of the content

// console.log(main.previousElementSibling) // The before sibling
// console.log(main.nextElementSibling) // The next sibling
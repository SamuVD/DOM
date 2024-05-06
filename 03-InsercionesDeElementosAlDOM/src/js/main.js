const btnExecute = document.getElementById("btn-execute")
const main = document.querySelector("main")

// Me agrega un elemento hijo
function createBtnSuccess() {

    //############################
    // btn element construction
    //############################

    // DOS MANERAS DE CREAR UN ELEMENTO Y DARLE ATRIBUTOS
    const btnExample = document.createElement("button")
    // btnExample.setAttribute("type", "button")  // Opción A
    btnExample.type = "button" // Opción B


    // DOS MANERAS PARA AGREGAR CLASES A UN ELEMENTO
    btnExample.classList.add("btn") // Opción A 
    btnExample.classList.add("btn-success")
    btnExample.classList.add("btn", "btn-success") // Opción B


    // DOS MANERAS PARA AGREGAR TEXTO A UN ELEMENTO
    btnExample.textContent = "ALEJO ES GAY"

    return btnExample
    //############################
    // click in btn-execute 
    //############################
    // btnExecute.addEventListener("click", () => {
    //     const btnExample = createBtnSuccess()
    //     main.appendChild(btnExample)
    // })
}


// Me elimina un hijo
function callBtnInfo() {
    const btnExample = document.querySelector(".btn-info")
    return btnExample
}
btnExecute.addEventListener("click", () => {
    // const btnExampleReturned = callBtnInfo()
    // main.removeChild(btnExampleReturned)

    const actualElement = callBtnInfo()
    const newElement = createBtnSuccess()

    main.replaceChild(newElement, actualElement)
    
})



function replaceChildExample() {

}



function insertBeforeExample() {

}
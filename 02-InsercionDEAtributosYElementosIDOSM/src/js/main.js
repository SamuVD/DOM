const can = document.createElement("img")
//const main = document.getElementsByTagName("main")
const main=document.querySelector("main")

can.alt="perrito hermoso"
can.src="./public/img/can-2.jpeg"
can.width="385"
can.title="perro"

can.src="https://t1.uc.ltmcdn.com/es/posts/4/9/1/como_es_el_temperamento_del_rottweiler_52194_600_square.jpg" // Manera tradicional
can.setAttribute("src","https://t1.uc.ltmcdn.com/es/posts/4/9/1/como_es_el_temperamento_del_rottweiler_52194_600_square.jpg") // Manera moderna

main.appendChild(can)

const card=document.querySelector(".card")

console.log(card)
card.classList.remove("border")
card.classList.remove("border-5")
card.classList.remove("border-primary")
card.classList.remove("rounded-5")
card.classList.add("text-center")



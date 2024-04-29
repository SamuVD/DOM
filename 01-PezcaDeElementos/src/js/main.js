let first = document.getElementById("btn-first") //call an element with id
let second = document.getElementsByClassName("btn-second") //call an element with class name
let third = document.getElementsByName("btn-third") //call an element with
let fourth = document.getElementsByTagName("button") // call an element with tag name


// console.log(first)
// console.log(second[0])
// console.log(third[0])
// console.log(fourth[3])

// Lamar 4 botones desde html utilizando solo querySelector y querySelectorAll
console.groupCollapsed("element one")

let one = document.querySelector("#btn-one")
let two = document.querySelector(".btn-two")
let three = document.querySelector("[name='btn-three']")
let four = document.querySelectorAll("button")

console.log(one)
console.log(two)
console.log(three)
console.log(four[7])

console.groupEnd()
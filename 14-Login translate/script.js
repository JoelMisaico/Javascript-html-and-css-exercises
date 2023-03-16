const container = document.querySelector(".container")
const btnresgistrase = document.getElementById("sign-up-btn")
const btniniciarsesion = document.getElementById("sign-in-btn")

btnresgistrase.addEventListener("click",()=>{
    container.classList.add("sign-up-mode")
})
btniniciarsesion.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode")
})
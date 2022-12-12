const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const icon = document.querySelector(".ri-close-line")

document.addEventListener('load',()=>{
    navbar.classList.remove("show");
})

menu.addEventListener('click',()=>{
    navbar.classList.toggle("show");

})
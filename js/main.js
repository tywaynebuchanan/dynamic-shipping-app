const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const icon = document.querySelector(".ri-close-line")


menu.addEventListener('click',()=>{
    navbar.classList.toggle("show");

})
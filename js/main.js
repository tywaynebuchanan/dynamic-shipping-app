const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click',()=>{
    navbar.classList.toggle("show");
})
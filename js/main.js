const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const icon = document.querySelector(".ri-close-line")

window.onload = function(){
    navbar.classList.remove("show");
}
menu.addEventListener('click',()=>{
    navbar.classList.toggle("show");

})
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
document.addEventListener('contextmenu', event => event.preventDefault());
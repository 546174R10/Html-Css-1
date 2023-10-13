const navbar = document.querySelector('nav');
const openMenu = document.getElementById('menu-button');

openMenu.addEventListener("click", () =>{ 
navbar.classList.add("open")
})


const closeMenu = document.getElementById('menu-close')

closeMenu.addEventListener("click", () =>{ 
    navbar.classList.remove("open")
    })
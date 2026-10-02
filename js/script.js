document.addEventListener("DOMContentLoaded", () =>{
    const menuResponsivo = document.getElementById("menuResponsivo");// Pegou tag botão
    const navMenu = document.getElementById("nav-menu");

    menuResponsivo.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        
    });//Fecha menu responsivo
});//Final Função Evento Carregar Todo HTML
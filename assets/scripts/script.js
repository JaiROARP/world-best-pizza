

//DOM
//querySelector = Devuelve un elemento del DOM que coincida con el selector dado
//querySelectorAll = Devuelve todos los elementos del DOM que coincidan con el selector dado

/*
let links = document.querySelectorAll("a");

links.forEach(function (link) {    
    console.log(link);
})
*/

/*
// De esta forma evitamos el evento por defecto
let closes = document.querySelectorAll(".close");

closes.forEach(function (close) {
    close.addEventListener('click', function(evento){

        evento.preventDefault();
       return false;
       
        
    });
});
*/

// De esta forma removemos clases
let iconos = querySelectorAll("i");

iconos.forEach(function (icono) {
    
    icono.classList.remove("fa-star");
})




//DOM
//querySelector = Devuelve un elemento del DOM que coincida con el selector dado
//querySelectorAll = Devuelve todos los elementos del DOM que coincidan con el selector dado

// -----------------------QUERYSELECTOR----------------------
/*
let links = document.querySelectorAll("a");

links.forEach(function (link) {    
    console.log(link);
})
*/

// -------------------EVITAR EL EVENTO POR DEFECTO----------------
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
// -------------------REMOVER CLASES-------------------------
/*
// De esta forma removemos clases
let iconos = querySelectorAll("i");

iconos.forEach(function (icono) {
    
    icono.classList.remove("fa-star");
})
*/


// --------------- AñADIR CLASES--------------------

let links = document.querySelectorAll(".close");
links.forEach(function (link) {

    //Añadimos un evento click a los links
    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitamos las clases de animacion: animate__animated y animate__zoomInDown
        content.classList.remove("animate__animated");
        content.classList.remove("animate__zoomInDown");
        
        //Añadimos las clases de animacion: animate__animated y animate__bounceOutUp
        content.classList.add("animate__bounceOutUp");
        content.classList.add("animate__animated");

        //Despues de 600ms volvemos a la pagina principal
        setTimeout(function () {
            location.href = "/";
        }, 600);        
     
    });
});










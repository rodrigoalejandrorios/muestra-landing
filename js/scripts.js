/*
window.addEventListener("scroll", ()=>{
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })*/


window.addEventListener("scroll", ()=>{
    var encabezado = document.getElementsByTagName("header")

    if(window.scrollY > 0){
        encabezado[0].setAttribute("class", "sticky")
    }else{
        encabezado[0].classList.remove("sticky");
    }
    
})

//Sortable


const grilla = document.getElementById("lista")
console.log(grilla)


Sortable.create(grilla, {
    animation: 200
})
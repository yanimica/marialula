
let botones = document.querySelectorAll(".botton");

function onClick(event){

    let unidades;
    
    do{
        unidades = prompt("¿Cuantas unidades desea llevar?");
        
        if (unidades <= 0) {
            alert("Por favor, agregue unidades mayores a cero");
        } else {
            alert("Se agrego correctamente " + unidades + " unidades al carrito");
            console.log("Se agrego correctamente " + unidades + " unidades al carrito");
        }
        
    } while(unidades <= 0);
    

}

botones.forEach(
    boton => boton.addEventListener("click",onClick)
);


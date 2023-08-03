/* 
////////////////////////////////////Primera entrega///////////////////////////////////

let botones = document.querySelectorAll(".botton");

function onClick(event) {

    let unidades;

    do {
        unidades = Number(prompt("¿Cuántas unidades desea llevar?"));

        if (unidades === null) {
            break;
        } else if (unidades <= 0) {
            alert("Por favor, agregue unidades mayores a cero");
        } else {
            alert("Se agregaron correctamente " + unidades + " unidades al carrito");
            console.log("Se agregaron correctamente " + unidades + " unidades al carrito");
        }

        nuevaCompra = confirm("¿Quieres realizar otra compra?")
        console.log(nuevaCompra)
    } while (nuevaCompra)
}


botones.forEach(
    boton => boton.addEventListener("click", onClick)
);


///////////////////////////////Segunda entrega/////////////////////////////////


class Compra{

    generos = [] 
    productos = []
    talles = []
    
    constructor(generos, productos, talles) {
        this.generos = generos;
        this.productos = productos;
        this.talles = talles;
    }


    agregarGenero(g){
        this.generos.push(g);
    }


    agregarProducto(p){
        this.productos.push(p);
    }

    agregarTalles(t){
        this.talles.push(t);
    }

    obtenerProductos(){
        return this.productos;
    }

    obtenerGeneros(){
        return this.generos;
    }

    obtenerTalles(){
        return this.talles;
    }

    agregar () {
        console.log("Agregar al carrito");
    }
}


const compra = new Compra([],[],[]);
console.log (compra.obtenerProductos());
compra.agregarProducto("Camisa");
compra.agregarProducto("Buzo");
compra.agregarGenero("Femenino");
compra.agregarTalles("Small");
console.log("Lista de Talles: " + compra.obtenerTalles());
console.log("Lista de Productos: "+ compra.obtenerProductos());
console.log("Lista de Generos: " + compra.obtenerGeneros());
compra.agregarGenero("Masculino");
console.log("Lista de Generos: " + compra.obtenerGeneros());


compra.obtenerProductos().forEach(producto => console.log(`agarre ${producto}`)) */


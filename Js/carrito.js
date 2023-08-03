
let productos = [

    {
        id: 1,
        nombre: "Cubo",
        precio: 5500,
        imagen: "../../assets/img/cubo.jpg",
        descripcion: "Ayuda a los niños pequeños a obtener experiencia de espacio.Pueden jugar y desarrollar su motricidad, equilibrio, seguridad, coordinación y visión"
    },
    {
        id: 2,
        nombre: "Tobogan",
        precio: 7200,
        imagen: "../../assets/img/tobogan.jpg",
        descripcion: "Suma complejidad a la exploración del movimiento, la motricidad y la autonomia, transformando la exploración motriz en un juego con equilibrio y altura"
    },

    
    {
        id: 3,
        nombre: "Rampa",
        precio: 3800,
        imagen: "../../assets/img/rampa.jpg",
        descripcion: "Es la combinación perfecta del triángulo, cubo.Suma complejidad a la exploración del movimiento, la motricidad y la autonomia, transformando la exploración motriz en un juego con equilibrio y altura"
    },
    {
        id: 4,
        nombre: "Mesa",
        precio: 7400,
        imagen: "../../assets/img/mesa silla.jpg",
        descripcion: "Las sillas pueden ser mesa, y tambien pueden ser utilizadas en dos alturas acompañando el crecimiento de los peques"
    },
    {
        id: 5,
        nombre: "Triangulo",
        precio: 4300,
        imagen: "../../assets/img/triangulo.jpg",
        descripcion: "Complemento perfecto de la Rampa, a la cual sirve de apoyo para transformarse en un ascenso o descenso.Además sirve de sostén para comenzar a pararse, y al empujarlo acompaña los primeros pasos."
    },
    {
        id: 6,
        nombre: "Encastre",
        precio: 5200,
        imagen: "../../assets/img/encastre redondo.jpg",
        descripcion: "Se comprende conceptos como el equilibrio, la simetría y la resistencia.Además, les obliga a planificar y aplicar la lógica."
    },
    {
        id: 7,
        nombre: "Circulo",
        precio: 4800,
        imagen: "../../assets/img/circulo.jpg",
        descripcion: "A través de él van comprendiendo conceptos complejos como el equilibrio, la simetría y la resistencia.Les abre la puerta de par en par al juego simbólico"
    },
    {
        id: 8,
        nombre: "Plaza Completa",
        precio: 7900,
        imagen: "../../assets/img/plaza completa.png",
        descripcion: "Incluye:Triangulo,Rampa,Cubo,Cilindro,Balancin"
    }
];

let carrito = document.getElementById("carrito");

for (let i = 0; i < productos.length; i++) {

    let producto = productos[i];

    let cardHTML = `<div class="mainNuestrosJuegos">
            <div class="titulo">
                <h2>${producto.nombre}</h2>
            </div>
            <div class="img">
                <br>
                <img src="${producto.imagen}" alt="imagen balancin" style="width:50%">
            </div>
            <div class="descripcion">
            <p>${producto.descripcion}</p>
            </div>
            <h3>Precio: $${producto.precio}</h3>
            <div class="botton">
                <button class="btn-comprar" id="equilibrio" type="submit">Agregar</button>
            </div>
        </div>`

    carrito.innerHTML += cardHTML;
}

function onClick(event){
    console.log("Agregado al carrito");
}

const botones = document.querySelectorAll(".botton");

for (let index = 0; index < botones.length; index++) {
    const boton = botones[index];
    boton.addEventListener('click',onClick);
}


localStorage.setItem("comprar", "agregaste al carrito")

const producto1 = {id: 1, nombre: "cubo", precio: 5500};

const enJSON    = JSON.stringify(producto1);

console.log(enJSON);

localStorage.setItem("clave", enJSON);
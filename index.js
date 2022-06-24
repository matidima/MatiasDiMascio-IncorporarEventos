class producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const relieveGrande = new producto(1, 'Relieve Grande', 1100);
const tachasChica = new producto(2, 'tachas Chica', 670);
const zigZagGrande = new producto(3, 'Zig Zag Grande', 1655);
const hombrecitoYoga = new producto(4, 'Hombrecito Yoga', 430);
const soporteCelular = new producto(5, 'Soporte Celular', 525);
const yoda = new producto(6, 'Yoda', 550);
const caraAbstracta = new producto(7, 'Cara Abstracta', 495);
const macetaFrida = new producto(8, 'Maceta Frida', 680);


class productosLista {
    constructor() {
        this.lista = []
    }
    agregarProducto(producto) {
        this.lista.push(producto)
    }
}

const productos = new productosLista()

productos.agregarProducto(relieveGrande)
productos.agregarProducto(tachasChica)
productos.agregarProducto(zigZagGrande)
productos.agregarProducto(hombrecitoYoga)
productos.agregarProducto(soporteCelular)
productos.agregarProducto(yoda)
productos.agregarProducto(caraAbstracta)
productos.agregarProducto(macetaFrida)

console.log(productos)


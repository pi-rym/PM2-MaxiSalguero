const CarritoCompra = require("../index");

/* Carrito compra:
- Debe ser una clase ✔
- Debe tener constructor definido ✔
- Dentro de su constructor debe tener una propiedad llamada products cuyo valor es un array vacio ✔
- Debe tener 3 metodos: ✔
    .agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito. ✔
    .calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito. ✔
    .aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado. ✔
*/

describe("La clase CarritoCompra' ", () => {
    let carritoCompra;
    beforeEach( () => {
        carritoCompra = new CarritoCompra();
    })   

    describe("El constructor de CarritoCompra", () => {
        
        test("CarritoCompra es una clase y se pueden crear instancias de el", () => {
            expect(typeof CarritoCompra).toBe("function");
            expect(carritoCompra).toBeInstanceOf(CarritoCompra);
        }),

        test("CarritoCompra posee un constructor definido", () => {
            //Este test no controla si tiene un constructor definido explicitamente por nosotros, porque
            //aun si no lo definimos nosotros pasara igualmente porque JS le define uno predeterminado
            expect(CarritoCompra.prototype.constructor).toBeDefined();
        }),

        test("CarritoCompra tiene la propiedad 'products' en su constructor y la misma contiene un array vacio", () => {
            //toHaveProperty es valido tanto como para propiedades como metodos
            //CarritoCompra no tiene la propiedad products definida directamente en ella. En su lugar, 
            //products se define como una propiedad de las instancias de CarritoCompra en su constructor. por ello
            //se debe usar toHaveProperty en las instancias y no en la clase en si.
            expect(carritoCompra).toHaveProperty('products')
            expect(carritoCompra.products).toEqual([])
        })

    })

    describe("Los metodos de CarritoCompra", () => {
        test("CarritoCompra tiene la propiedad 'agregarProducto()' definida y es un metodo", () => {
            expect(carritoCompra).toHaveProperty('agregarProducto')
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        test("'agregarProducto()' recibe un objeto representando un producto y lo agrega al carrito", () => {
            const producto = { name: "Producto A", price:10, quantity:2 }
            carritoCompra.agregarProducto(producto)
            expect(carritoCompra.products).toContain(producto)
        })

        test("CarritoCompra tiene la propiedad 'calcularTotal()' definida y es un metodo", () => {
            expect(carritoCompra).toHaveProperty('calcularTotal')
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        test("'calcularTotal()' Calcula el total de la compra sumando los precios de todos los productos en el carrito.", () => {
            const product1 = {name: "Producto A", price:10, quantity:2}
            const product2 = {name: "Producto B", price:20, quantity:3}
            const product3 = {name: "Producto C", price:40, quantity:1}
            carritoCompra.products.push(product1)
            carritoCompra.products.push(product2)
            carritoCompra.products.push(product3)
            let total = carritoCompra.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
            console.log(total);
            expect(carritoCompra.calcularTotal()).toEqual(total)
        })

        test("Carrito Compra tiene la propiedad 'aplicarDescuento()' definida y es un metodo", () => { 
            expect(carritoCompra).toHaveProperty('aplicarDescuento')
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        test("'aplicarDescuento()' Aplica un descuento al total de la compra según el porcentaje especificado.", () => { 
            const product1 = {name: "Producto A", price:10, quantity:2}
            const product3 = {name: "Producto C", price:40, quantity:1}
            carritoCompra.products.push(product1)
            carritoCompra.products.push(product3)

            let subtotal = carritoCompra.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
            let total = subtotal - ((subtotal * 10) / 100 )

            expect(carritoCompra.aplicarDescuento(10)).toEqual(total)
        })

    })
 
});

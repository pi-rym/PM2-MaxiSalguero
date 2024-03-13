class CarritoCompra {
    constructor(){
        this.products = [];
    } 

    agregarProducto(producto){
        this.products.push(producto)
    } 

    calcularTotal(){
        let total = 0

        for (let product of this.products) total += product.price * product.quantity 

        return total
    }   
    
    aplicarDescuento(porcentaje){
        let subtotal = this.calcularTotal()

        let total = subtotal - ((subtotal * 10) / 100 )

        return total
    }   
}

module.exports = CarritoCompra;
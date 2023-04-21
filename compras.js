const fs = require("fs");
fs.readFile("ventas.txt", "utf8", (error, datos) => {
    if (error) {
        console.error("Se ha generado un error al leer el archivo");
    } else {
        const compradores = datos.split("\n");
        let total = 0;
        let listaCompras = "";
        compradores.forEach((comprador) => {
            const compra = comprador.split(",");
            const objeto = compra[0];
            const cantidad = parseInt(compra[1]);
            const precio = parseFloat(compra[2]);
            const subtotal = cantidad * precio;
            total += subtotal;
            listaCompras += `${cantidad}  ${objeto} ... $${subtotal.toFixed(2)}\n`;
        });
        console.log(`
- - - - - - - - - - - - - - -
VENTAS DEL DÍA
- - - - - - - - - - - - - - -
Vendedor: Juan Sebastian Ortegon Escobar
- - - - - - - - - - - - - - -
${listaCompras}- - - - - - - - - - - - - - -
VENTA TOTAL  $${total.toFixed(2)}
- - - - - - - - - - - - - - -`);
    }
});








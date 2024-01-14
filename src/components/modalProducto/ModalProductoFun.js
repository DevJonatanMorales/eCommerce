/* - Comentario: almacenamos las compras  - */
const AgregarCompras = (datosCompras) => {
    if (datosCompras != null) {
        localStorage.setItem(
            "compras",
            JSON.stringify([
                ...JSON.parse(localStorage.getItem("compras") || "[]"),
                { idProducto: datosCompras.id_producto, imgProducto: datosCompras.img, NomProducto: datosCompras.nombre, canticad: datosCompras.canticad, total: datosCompras.totalPagar },
            ])
        );
    }
}

/* - Comentario: eliminamos un producto  - */
const removeProducto = (id_producto) => {

    /* compras.forEach(compra => {
        if (compra.idProducto == id_producto) {
            compras.splice(compras.indexOf(compra), 1);
        }
    });
    localStorage.setItem("compras", JSON.stringify(compras)); */
}
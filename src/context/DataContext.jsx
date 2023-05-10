import { createContext, useEffect, useState } from "react";
import { data } from '../API'
export const DataContext = createContext()

/* - Comentario: traemos todas las categorias  - */
const allCategorias = (state) => {
    state(data.categorias)
}

/* - Comentario: mostramos una categoria por id  - */
const Categoria = (id, state) => {
    let _id = parseInt(id) - 1;
    state(data.categorias[_id].menus)
}

export const DataProvider = ({ children }) => {
    const [compras, setCompras] = useState([]);
    const [total, setTotal] = useState(0.00)

    /* - Comentario: obtenemos las compras hechas  - */
    const CargarCompras = () => {

        if (localStorage.getItem("compras")) {
            setCompras(Array.from(JSON.parse(localStorage.getItem("compras"))))

            for (let i = 0; i < compras.length; i++) {
                setTotal(total += compras[i].total)
            }
        } else {
            setCompras([])
        }
    }

    /* - Comentario: almacenamos las compras  - */
    const AgregarCompras = (datosCompras) => {
        if (datosCompras.nombre != '') {
            localStorage.setItem(
                "compras",
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem("compras") || "[]"),
                    { idProducto: datosCompras.id_producto, imgProducto: datosCompras.img, NomProducto: datosCompras.nombre, canticad: datosCompras.canticad, total: datosCompras.totalPagar },
                ])
            );

            CargarCompras()
        }
    }

    /* - Comentario: eliminamos un producto  - */
    const removeProducto = (id_producto) => {

        compras.forEach(compra => {
            if (compra.idProducto == id_producto) {
                compras.splice(compras.indexOf(compra), 1);
            }
        });
        localStorage.setItem("compras", JSON.stringify(compras));
        CargarCompras()
    }

    /* - Comentario: Cancelamos la compra  - */
    const CancelarOrden = () => {
        console.log("CancelarOrden");
        localStorage.clear();
        CargarCompras()
    }

    useEffect(() => { CargarCompras }, [])

    return (
        <DataContext.Provider
            value={{
                allCategorias,
                Categoria,
                compras,
                CargarCompras,
                AgregarCompras,
                removeProducto,
                CancelarOrden,
                total
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
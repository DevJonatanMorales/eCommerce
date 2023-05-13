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
    const [total, setTotal] = useState(0);

    /* - Comentario: obtenemos las compras hechas  - */
    const CargarCompras = () => {

        if (localStorage.getItem("compras")) {
            let data = Array.from(JSON.parse(localStorage.getItem("compras")))
            setCompras(data)

        } else {
            setCompras([])
        }
    }

    /* - Comentario: Cargamos el total a pagar - */
    const TotalPagar = () => {
        if (localStorage.getItem("compras")) {
            let data = Array.from(JSON.parse(localStorage.getItem("compras")))
            let comprasPagar = 0;
            for (let i = 0; i < data.length; i++) {
                comprasPagar += data[i].total
            }
            setTotal(comprasPagar)
        }
    }

    /* - Comentario: almacenamos las compras  - */
    const AgregarCompras = (datosCompras) => {
        setTotal(0)
        if (datosCompras.nombre != '') {
            localStorage.setItem(
                "compras",
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem("compras") || "[]"),
                    { idProducto: datosCompras.id_producto, imgProducto: datosCompras.img, NomProducto: datosCompras.nombre, canticad: datosCompras.canticad, total: datosCompras.totalPagar },
                ])
            );
            CargarCompras()
            TotalPagar()
        }
    }

    /* - Comentario: eliminamos un producto  - */
    const removeProducto = (id_producto) => {
        setTotal(0)
        compras.forEach(compra => {
            if (compra.idProducto == id_producto) {
                compras.splice(compras.indexOf(compra), 1);
            }
        });
        localStorage.setItem("compras", JSON.stringify(compras));
        CargarCompras()
        TotalPagar()
    }

    useEffect(() => { CargarCompras, TotalPagar }, [])

    return (
        <DataContext.Provider
            value={{
                allCategorias,
                Categoria,
                compras,
                CargarCompras,
                AgregarCompras,
                removeProducto,
                total
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
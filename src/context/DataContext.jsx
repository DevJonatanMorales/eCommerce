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

    /* - Comentario: obtenemos las compras hechas  - */
    const CargarCompras = () => {

        if (localStorage.getItem("compras")) {
            setCompras(Array.from(JSON.parse(localStorage.getItem("compras"))))
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
                    { NomProducto: datosCompras.nombre, canticad: datosCompras.canticad, total: datosCompras.totalPagar },
                ])
            );

            CargarCompras()
        }
    }

    useEffect(() => {
        CargarCompras()
    }, [])

    return (
        <DataContext.Provider
            value={{
                allCategorias,
                Categoria,
                compras,
                CargarCompras,
                AgregarCompras
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
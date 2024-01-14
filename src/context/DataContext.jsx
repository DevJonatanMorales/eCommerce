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

    /* - Comentario: listado de compras  - */
    const [compras, setCompras] = useState(null);
    const [total, setTotal] = useState(0)

    /* - Comentario: detalles del producto  - */
    const [detalleCompra, setDetalleCompra] = useState({
        titleModel: "",
        id_producto: "",
        img: "",
        nombre: "",
        descripcion: "",
        canticad: "",
        totalPagar: ""
    })

    /* - Comentario: obtenemos las compras hechas  - */
    const CargarCompras = () => {

        if (localStorage.getItem("compras")) {
            let data = Array.from(JSON.parse(localStorage.getItem("compras")))
            if (data.length > 0) {
                console.log(data[0].detalleCompra);
                setCompras(data)
                data.map(compra => {
                    setTotal(total + compra.total)
                })
                
            }
        }
    }

    useEffect(() => CargarCompras(), [])

    return (
        <DataContext.Provider
            value={{
                allCategorias,
                Categoria,
                compras,
                setDetalleCompra,
                detalleCompra,
                total
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
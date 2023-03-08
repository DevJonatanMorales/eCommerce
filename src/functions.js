import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const url = 'http://173.254.242.213:8080/clientapp-web/webresources/getMenus/APP'

const allCategorias = async (state) => {
    const result = await axios.get(url);
    state(result.data.categorias);
}

export const Categoria = async (id,state) => {
    let _id = parseInt(id) - 1;
    const result = await axios.get(url);
    state(result.data.categorias[_id].menus);
}

export const ShowAlert = (msj, icon, focu='') => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: 'eCommer',
        text: msj,
        confirmButtonText: "Aceptar",
        icon: icon
    })
}

export const ProductsCounter = () => {
    const [count, setCount] = useState(1);
    const increment = () => setCount( count + 1);
    const decrement = () => setCount( count - 1);
    const reset = () => setCount(1)

    return { count, increment, decrement, reset}
}

export {
    allCategorias
}
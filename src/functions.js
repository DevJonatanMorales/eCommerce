import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const url = 'http://173.254.242.213:8080/clientapp-web/webresources/getMenus/APP'

const allCategorias = (state) => {
    fetch(url)
    .then(response => response.json())
    .then(data => state(data.categorias));
}

export const Categoria = (id,state) => {
    let _id = parseInt(id) - 1;
    fetch(url)
    .then(response => response.json())
    .then(data => state(data.categorias[_id].menus));
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
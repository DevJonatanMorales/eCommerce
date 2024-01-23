import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
        title: 'ADMINISTRACION',
        text: msj,
        confirmButtonText: "Aceptar",
        icon: icon
    })
}

export {
    allCategorias
}
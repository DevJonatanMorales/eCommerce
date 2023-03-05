import axios from "axios";

const url = 'http://173.254.242.213:8080/clientapp-web/webresources/getMenus/APP'

const allCategorias = async (state) => {
    const result = await axios.get(url);
    state(result.data.categorias);
}

export {
    allCategorias
}
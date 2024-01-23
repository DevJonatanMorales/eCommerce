import React from 'react'
import { Link } from "react-router-dom";

const CardCategoria = ({ categoria }) => {
    return (
        <div
            key={categoria.id}
            className="bg-card col card my-2 p-3 mx-auto text-center bg-body-secondary position-relative"
            style={{ width: "21rem" }}
        >
            <img
                src={categoria.imagenes.normal}
                className="rounded card-img-top mx-auto mb-5"
                style={{ width: "18rem", height: "200px" }}
                alt="Error al cargar"
            />
            <Link
                style={{ width: "90%" }}
                className="btn btn-dark position-absolute bottom-0 mb-2"
                to={`/eCommerce/catagoria/${categoria.id}/nombre/${categoria.nombre}`}
            > {categoria.nombre} </Link>
        </div>
    )
}

export default CardCategoria
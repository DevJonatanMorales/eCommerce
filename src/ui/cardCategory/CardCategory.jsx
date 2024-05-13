import React from "react";
import { Link } from "react-router-dom";

export const CardCategory = ({ categoria }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-1">
      <div
        key={categoria.id}
        className="bg-card card m-0 p-3 text-center bg-body-secondary"
      >
        <img
          src={categoria.imagenes.normal}
          className="rounded card-img-top m-0 mb-2"
          style={{ width: "100%", height: "200px" }}
          alt="Error al cargar"
        />
        <Link
          className="btn btn-dark mb-0 w-100"
          to={`/eCommerce/catagoria/${categoria.id}/nombre/${categoria.nombre}`}
        >
          {categoria.nombre}
        </Link>
      </div>
    </div>
  );
};

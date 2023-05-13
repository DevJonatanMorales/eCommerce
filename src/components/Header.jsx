import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../context/DataContext";
import { CardProductos } from "./CardProductos";

export const Header = () => {

  const { compras, total } = useContext(DataContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" tabIndex={1}>
        <div className="container-fluid d-flex px-3">

          <Link
            className="navbar-brand text-light"
            to={"https://devjonatanmorales.github.io/eCommerce/"}
          > <i className="fa-sharp fa-solid fa-dumpster"></i> eCommer </Link>

          <button
            id="btnCanvas"
            className="btn btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
          >
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            <i id="counts" className={(compras != null) ? `fa-solid mx-2 fa-${compras.length}` : 'fa-solid fa-0 mx-2'} ></i>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end fondo"
        tabIndex={2}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            Orden
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" id="ShowCompras">
          {compras.length >= 1 ? (
            compras.map((compra) => (
              <CardProductos
                producto={compra}
              />
            ))
          ) : (
            <div className="alert alert-secondary" role="alert"
            >
              No hay ordenes
            </div>
          )}
        </div>
        <div className="offcanvas-footer px-2" id="ShowCompras">

          <div className="alert alert-secondary" role="alert"
          >
            Total a pagar: ${total}
          </div>
        </div>
      </div>
    </>
  );
};

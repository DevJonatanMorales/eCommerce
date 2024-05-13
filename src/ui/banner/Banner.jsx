import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../context/DataContext";
import { CardProducts } from "../cardProducts/CardProducts";

export const Banner = () => {
  const { compras, total } = useContext(DataContext);
  const ICON = {
    NO_PURCHASES: "fa-solid fa-0 mx-2",
    PURCHASES: `fa-solid mx-2 fa-${compras.length}`,
  };
  const [classIconShopping, setClassIconShopping] =
    useState("fa-solid fa-0 mx-2");

  useEffect(() => {
    const classIcon = compras != null ? ICON.PURCHASES : ICON.NO_PURCHASES;
    setClassIconShopping(classIcon);
  }, [compras, total]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark" tabIndex={1}>
        <div className="container-fluid d-flex px-3">
          <Link className="navbar-brand text-light" to={"/eCommerce/"}>
            {" "}
            <i className="fa-sharp fa-solid fa-dumpster"></i> eCommer{" "}
          </Link>

          <button
            id="btnCanvas"
            className="btn btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
          >
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            <i id="counts" className={classIconShopping}></i>
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
          {Array.isArray(compras) && compras.length > 0 ? (
            compras.map((compra) => (
              <CardProducts key={compra.id_producto} producto={compra} />
            ))
          ) : (
            <div className="alert alert-secondary" role="alert">
              No hay ordenes
            </div>
          )}
        </div>
        <div className="offcanvas-footer px-2" id="ShowCompras">
          <div className="alert alert-secondary" role="alert">
            Total a pagar: ${total}
          </div>
        </div>
      </div>
    </header>
  );
};

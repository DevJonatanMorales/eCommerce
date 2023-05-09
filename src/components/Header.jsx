import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import { CardProductos } from "./cardproductos";

export const Header = () => {
  const { compras } = useContext(DataContext)

  const EliminarOrden = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "Seguro de eliminar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setDatosCompras(null)
      } else {
        ShowAlert("La orden no fue eliminada", "info");
      }
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" tabIndex={1}>
        <div className="container-fluid d-flex px-3">

          <Link
            className="navbar-brand text-light"
            to={"//localhost:5173/eCommerce/"}
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
                name={compra.NomProducto}
                cantidad={compra.canticad}
                total={compra.total}
              />
            ))
          ) : (
            <div className="alert alert-secondary" role="alert">
              No hay ordenes
            </div>
          )}
        </div>
        <div className="offcanvas-footer px-2" id="ShowCompras">
          <button
            type="button"
            className="btn btn-ms btn-danger mb-2"
            onClick={() => EliminarOrden()}
            style={{ width: "100%" }}
          >
            <i className="fa-solid fa-trash-can"></i> Cancelar Orden
          </button>
        </div>
      </div>
    </>
  );
};

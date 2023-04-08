import { CardProductos } from "./cardproductos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//window.onload = loadCompras;

let compras = null;

if (localStorage.getItem("compras")) {
  compras = Array.from(JSON.parse(localStorage.getItem("compras")));
}

function loadCompras() {
  const compras = Array.from(JSON.parse(localStorage.getItem("compras")));

  if (compras.length > 0) {
    counts.classList.remove(`fa-0`);
    counts.classList.add(`fa-${compras.length}`);
  } else {
    counts.classList.add(`fa-0`);
  }
}

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
      loadTasks();
    } else {
      ShowAlert("La orden no fue eliminada", "info");
    }
  });
};

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" tabIndex={1}>
        <div className="container-fluid d-flex px-3">
          <a className="navbar-brand text-light" href="/">
            <i className="fa-sharp fa-solid fa-dumpster"></i> eCommer
          </a>
          <button
            id="btnCanvas"
            onClick={loadCompras}
            className="btn btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
          >
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            <i id="counts" className="fa-solid fa-0 mx-2"></i>
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
          {compras != null ? (
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
        <div className="offcanvas-footer" id="ShowCompras">
          <button
            type="button"
            className="btn btn-ms btn-danger m-2"
            onClick={() => EliminarOrden()}
          >
            <i className="fa-solid fa-trash-can"></i> Cancelar Orden
          </button>
        </div>
      </div>
    </>
  );
};

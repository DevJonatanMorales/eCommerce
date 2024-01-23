import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ShowAlert } from "../functions";

export const CardProductos = ({ producto }) => {
  const { EliminarProducto, setDetalleCompra, setCount } =
    useContext(DataContext);

  function removeCompras(producto) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `Seguro que desea eliminar el producto ${producto.nombre}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        EliminarProducto(producto.id_producto);
      } else {
        ShowAlert("La orden no fue eliminada", "info");
      }
    });
  }

  const OpenModal = (
    id_producto,
    img,
    nombre,
    descripcion,
    precio,
    cantidad,
    pagar
  ) => {
    setCount(cantidad);
    setDetalleCompra({
      titleModel: "Editar",
      id_producto,
      img,
      nombre,
      descripcion,
      precio,
      pagar,
    });
  };

  return (
    <div className="card Categorias p-2" tabIndex={producto?.nombre}>
      <div className="card-body p-0">
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
          <div className="col">
            <img
              className="rounded"
              style={{ width: "100%", height: "100%" }}
              src={producto?.img}
              alt={producto?.nombre}
            />
          </div>
          <div className="col">
            <p className="text-md-start m-0 mb-1">
              PLATO:{" "}
              <span className="text-sm-start m-0 mb-1">{producto?.nombre}</span>
            </p>
            <p className="text-md-start m-0 mb-1 ">
              PRECIO:{" "}
              <span className="text-sm-start m-0 mb-1">
                ${producto?.precio}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1">
              CANTIDAD:{" "}
              <span className="text-sm-start m-0 mb-1">
                {producto?.cantidad}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1 ">
              TOTAL:{" "}
              <span className="text-sm-start m-0 mb-1">${producto?.pagar}</span>
            </p>

            <div className="d-flex justify-content-between">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-dark btn-sm "
                type="submit"
                onClick={() => {
                  OpenModal(
                    producto?.id_producto,
                    producto?.img,
                    producto?.nombre,
                    producto?.descripcion,
                    producto?.precio,
                    producto?.cantidad,
                    producto?.pagar
                  );
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => {
                  removeCompras(producto);
                }}
              >
                <i className="fa-solid fa-xmark"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useDataModal from "../../../hook/useDataModal";
import { ShowAlert } from "../../../utils/showAlert";
import { DataContext } from "../../../context/DataContext";
import { TITLE_MODAL } from "../../../constants/titleModal";

export const CardProducts = ({ producto }) => {
  const titleModel = TITLE_MODAL.MODIFICAR;
  const { setDataModal } = useDataModal();
  const { EliminarProducto } = useContext(DataContext);

  const handleClick = (
    titleModel,
    id,
    img,
    nombre,
    descripcion,
    cantidad,
    precio
  ) => {
    setDataModal(titleModel, id, img, nombre, descripcion, cantidad, precio);
  };

  const removeCompras = (producto) => {
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
                className="btn btn-success btn-sm "
                type="submit"
                onClick={() => {
                  handleClick(
                    titleModel,
                    producto?.id_producto,
                    producto?.img,
                    producto?.nombre,
                    producto?.descripcion,
                    producto?.cantidad,
                    producto?.precio,
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

import React from "react";
import useDataModal from "../../../hook/useDataModal";
import { TITLE_MODAL } from "../../../constants/titleModal";

export const CardProduct = ({ product }) => {
  const titleModel = TITLE_MODAL.AGREGAR;
  const cantidad = 1;
  const { setDataModal } = useDataModal();
  const handleClick = (titleModel, id, img, nombre, descripcion, precio) => {
    setDataModal(titleModel, id, img, nombre, descripcion, cantidad, precio);
  };
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-1">
      <div
        key={product?.id}
        className="bg-card  card my-2 p-3 m-0 text-start text-light bg-body-secondary"
      >
        <img
          src={product?.imagenes?.normal}
          className="rounded card-img-top m-0 w-100"
          style={{ width: "18rem" }}
          alt="Error al cargar"
        />

        <div className="card-body m-0 p-0 pt-3">
          <h5 className="card-title fw-bold mb-3">{product?.nombre}</h5>

          <button
            type="button"
            id={product?.id}
            className="btn btn-dark w-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() =>
              handleClick(
                titleModel,
                product?.id,
                product?.imagenes.normal,
                product?.nombre,
                product?.descripcion,
                product?.precio
              )
            }
          >
            <i className="fa-solid fa-dollar-sign"></i> {product?.precio}
          </button>
        </div>
      </div>
    </div>
  );
};

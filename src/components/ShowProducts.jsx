import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import { TabsCategorias } from "./TabsCategorias";
import Spinners from "./Spinners";
import { ModalProducto } from "./modalProducto/ModalProducto";

export const ShowProducts = () => {
  const { Categoria, setDetalleCompra, setCount } = useContext(DataContext);

  const params = useParams();
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    Categoria(params.categoria, setCategoria);
  }, [params]);

  const OpenModal = (id, img, nombre, descripcion, precio) => {
    setCount(1)
    setDetalleCompra({
      titleModel: "Agregar",
      id_producto: id,
      img: img,
      nombre,
      descripcion,
      cantidad: 1,
      precio: precio,
      pagar: precio * 1,
    });
  };

  return (
    <>
      <TabsCategorias />
      <div tabIndex={2} className="container text-center pt-2">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {categoria != null ? (
            categoria.map((producto) => (
              <div
                key={producto.id}
                className="bg-card  col card my-2 p-3 mx-auto text-start text-light bg-body-secondary"
                style={{ width: "21rem" }}
              >
                <img
                  src={producto.imagenes.normal}
                  className="rounded card-img-top mx-auto"
                  style={{ width: "18rem" }}
                  alt="Error al cargar"
                />

                <div className="card-body m-0 position-relative">
                  <h5 className="card-title fw-bold">{producto.nombre}</h5>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="text-sm-start fw-normal">
                      {producto.descripcion}
                    </p>
                  </div>

                  <button
                    style={{ width: "90%" }}
                    type="button"
                    id={producto.id}
                    className="btn btn-dark position-absolute bottom-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      OpenModal(
                        producto.id,
                        producto.imagenes.normal,
                        producto.nombre,
                        producto.descripcion,
                        producto.precio
                      )
                    }
                  >
                    <i className="fa-solid fa-dollar-sign"></i>{" "}
                    {producto.precio}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <Spinners />
          )}
        </div>
      </div>

      <ModalProducto />
    </>
  );
};

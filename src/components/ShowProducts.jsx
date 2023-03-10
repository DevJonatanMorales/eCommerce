import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categoria, ProductsCounter, ShowAlert } from "../functions";
import { TabsCategorias } from "./TabsCategorias";

export const ShowProducts = () => {
  const { count, increment, decrement, reset } = ProductsCounter();
  const params = useParams();
  const [categoria, setCategoria] = useState(null);
  const [id, setId] = useState("");
  const [img, setImg] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  //* Funcion que se encarga de abrir la ventan modal
  const OpenModal = (id, img, nombre, descripcion, precio) => {
    setId(id);
    setImg(img);
    setNombre(nombre);
    setDescripcion(descripcion);
    setPrecio(precio);
  };

  //* validamos los datos a almacenar
  const ValidarDatos = () => {
    let totalPagar = 0;
    
    if (count > 0) {
      totalPagar = precio * count;

      localStorage.setItem("compras", JSON.stringify([...JSON.parse(localStorage.getItem("compras") || "[]"), { NomProducto: nombre, canticad: count, total: totalPagar }]));
      
      ShowAlert("Añadido a su orden", "success");

      document.getElementById("btnCloseModel").click();

      
    } else {
      ShowAlert("Por favor, ingrese la cantidad de producto", "warning");
    }

  };

  useEffect(() => {
    Categoria(params.categoria, setCategoria);
  }, []);

  return (
    <>
      <TabsCategorias/>
      <div className="container text-center pt-2">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {categoria != null ? (
            categoria.map((producto) => (
              <div
                key={producto.id}
                className="bg-card  col card my-2 p-3 mx-auto text-start text-light bg-body-secondary"
                style={{ width: "21rem" }}
              >
                <img
                  src={
                    producto.imagenes.normal == null
                      ? producto.imagenes.unavailable
                      : producto.imagenes.normal
                  }
                  className="rounded card-img-top mx-auto"
                  style={{ width: "18rem" }}
                  alt="Error al cargar"
                />

                <div className="card-body m-0">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <div className="d-flex justify-content-between">
                    <p style={{ width: "70%" }}>{producto.descripcion}</p>
                    <button
                      style={{ width: "70px" }}
                      type="button"
                      id={producto.id}
                      className="btn btn-dark my-auto"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        OpenModal(
                          producto.id,
                          producto.imagenes.normal == null
                            ? producto.imagenes.unavailable
                            : producto.imagenes.normal,
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
              </div>
            ))
          ) : (
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-md-4 offset-4">
                  <div className="d-grid mx-auto">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {nombre}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <img
                    src={img}
                    className="rounded card-img-top mx-auto"
                    style={{ width: "100%" }}
                    alt="Error al cargar"
                  />
                </div>
                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Producto: {nombre}</li>
                    <li className="list-group-item">
                      Descripcion: {descripcion}
                    </li>
                    <li className="list-group-item">Precio: ${precio}</li>
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between m-0">
                        <button
                          className="btn btn-dark"
                          onClick={decrement}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="text-dark my-auto">Cantidad: {count} </p>
                        <button
                          className="btn btn-dark"
                          onClick={increment}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </li>
                  </ul>

                  <input type="hidden" id={id} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={reset}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                id="btnCloseModel"
              >
                <i className="fa-solid fa-ban"></i> Cancelar
              </button>
              <button type="button" onClick={ValidarDatos} className="btn btn-success">
                <i className="fa-solid fa-cart-plus"></i> Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

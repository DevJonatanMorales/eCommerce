import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { ProductsCounter, ShowAlert } from "../../functions";

export const ModalProducto = () => {
  const { detalleCompra, setDetalleCompra } = useContext(DataContext);
  const { count, increment, decrement, reset } = ProductsCounter();
  const [BtnDisable, SetBtnDisable] = useState(false);

  const ValidarBoton = () => {
    if (count > 1) {
      SetBtnDisable(false);
    } else {
      SetBtnDisable(true);
    }
  };
  /* - Comentario: almacenamos las compras  - */
  const AgregarCompras = () => {

    if (detalleCompra.nombre != "") {
      localStorage.setItem(
        "compras",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("compras") || "[]"),
          {
            detalleCompra
          },
        ])
      );
      setDetalleCompra({
        titleModel: "",
        id_producto: "",
        img: "",
        nombre: "",
        descripcion: "",
        canticad: "",
        totalPagar: ""
    })}
  };
  //* validamos los datos a almacenar
  const ValidarDatos = () => {
    let totalPagar = 0;

    if (count > 0) {
      totalPagar = detalleCompra.totalPagar * count;

      detalleCompra.totalPagar = totalPagar;
      AgregarCompras();

      ShowAlert("Añadido a su orden", "success");
      document.getElementById("btnCloseModel").click();
    } else {
      ShowAlert("Por favor, ingrese la cantidad de producto", "warning");
    }
  };

  useEffect(() => {
    ValidarBoton();
  }, [count]);

  return (
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
              {detalleCompra.TitleModel}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                SetBtnDisable(false);
                reset();
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <img
                  src={detalleCompra.img}
                  className="rounded card-img-top mx-auto"
                  style={{ width: "100%" }}
                  alt="Error al cargar"
                />
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Producto: {detalleCompra.nombre}
                  </li>
                  <li className="list-group-item">
                    Descripcion: {detalleCompra.descripcion}
                  </li>
                  <li className="list-group-item">
                    Precio: ${detalleCompra.totalPagar}
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between m-0">
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          decrement();
                        }}
                        disabled={BtnDisable}
                        id="btnDecrement"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <p className="text-dark my-auto">Cantidad: {count} </p>
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          increment();
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </li>
                </ul>

                <input type="hidden" id={detalleCompra.id} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                SetBtnDisable(false);
                reset();
              }}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              id="btnCloseModel"
            >
              <i className="fa-solid fa-ban"></i> Cancelar
            </button>
            <button
              type="button"
              onClick={ValidarDatos}
              className="btn btn-success"
            >
              <i className="fa-solid fa-cart-plus"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

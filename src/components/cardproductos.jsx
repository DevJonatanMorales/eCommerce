import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CardProductos = ({ producto }) => {
  const { compras, setDetalleCompra } = useContext(DataContext)
const product = producto[0].detalleCompra;
  const removeProducto = (id_producto) => {
    setTotal(0)
    compras.forEach(compra => {
      if (compra.idProducto == id_producto) {
        compras.splice(compras.indexOf(compra), 1);
      }
    });
    localStorage.setItem("compras", JSON.stringify(compras));
    CargarCompras()
    TotalPagar()
  }

  function removeCompras(producto, idProducto) {
    const MySwal = withReactContent(Swal);
    let id_producto = document.getElementById(`idProducto__${idProducto}`).value

    MySwal.fire({
      title: `Seguro que desea eliminar el producto ${producto}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeProducto(id_producto)
      } else {
        ShowAlert("La orden no fue eliminada", "info");
      }
    });

  }

  //* Funcion que se encarga de abrir la ventan modal
  const OpenModal = (id_producto, img, nombre, descripcion, totalPagar) => {

    setDetalleCompra({
      TitleModel: "Editar",
      id_producto,
      img,
      nombre,
      descripcion,
      totalPagar
    })

  };

  return (
    <div className="card Categorias p-2" tabIndex={product.nombre}>
      <div className="card-body p-0">

        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
          <div className="col">
            <img className='rounded' style={{ width: "100%", height: "100%" }} src={product.img} alt={product.nombre} />
          </div>
          <div className="col">
            <input type="hidden" id={`idProducto__${product.id_producto}`} value={product.id_producto} />
            <p className="text-md-start m-0 mb-1">
              PLATO: <span className="text-sm-start m-0 mb-1">
                {product.nombre}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1">
              CANTIDAD: <span className="text-sm-start m-0 mb-1">
                {product.canticad}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1 ">
              TOTAL: <span className="text-sm-start m-0 mb-1">
                ${product.totalPagar}
              </span>
            </p>

            <div className='d-flex justify-content-between'>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-dark btn-sm "
                type="submit"
                onClick={() =>
                  OpenModal(
                    product.id_producto,
                    product.img,
                    product.nombre,
                    product.descripcion,
                    product.totalPagar
                  )
                }
              >
                <i className="fa-solid fa-pen-to-square"></i> Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => removeCompras(product.nombre, product.id_producto)}
              ><i className="fa-solid fa-xmark"></i> Eliminar
              </button>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}


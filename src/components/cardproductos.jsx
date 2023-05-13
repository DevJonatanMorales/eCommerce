import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CardProductos = ({ producto }) => {
  const { removeProducto } = useContext(DataContext)

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

  return (
    <div className="card Categorias p-1" key={producto.NomProducto}>
      <div className="card-body">

        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mb-3">
          <div className="col">
            <img className='rounded' style={{ width: "100%" }} src={producto.imgProducto} alt={producto.NomProducto} />
          </div>
          <div className="col">
            <input type="hidden" id={`idProducto__${producto.idProducto}`} value={producto.idProducto} />
            <p className="text-md-start m-0 mb-1">
              PLATO: <span className="text-sm-start m-0 mb-1">
                {producto.NomProducto}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1">
              CANTIDAD: <span className="text-sm-start m-0 mb-1">
                {producto.canticad}
              </span>
            </p>
            <p className="text-md-start m-0 mb-1 ">
              TOTAL: <span className="text-sm-start m-0 mb-1">
                ${producto.total}
              </span>
            </p>
          </div>
        </div>

        <button
          className="btn btn-dark"
          type="button"
          style={{ width: "100%" }}
          onClick={() => removeCompras(producto.NomProducto, producto.idProducto)}
        ><i className="fa-solid fa-xmark"></i> Eliminar
        </button>

      </div>
    </div >
  )
}


import React from 'react'

function removeCompras(event) {
  let compras = Array.from(JSON.parse(localStorage.getItem("compras")));
  compras.forEach(compra => {
    if (compra.compra === event.parentNode.children[1].value) {
      // delete task
      compras.splice(compras.indexOf(compra), 1);
    }
  });
  localStorage.setItem("compras", JSON.stringify(compras));
  event.parentElement.remove();
}

export const CardProductos = (props) => {
  return (
    <div className="card Categorias p-1" key={props.name}>
      <div className="card-body">
        <p className="text-md-start m-0 mb-1">
          PLATO: <span className="text-sm-start m-0 mb-1">
            {props.name}
          </span>
        </p>
        <p className="text-md-start m-0 mb-1">
          CANTIDAD: <span className="text-sm-start m-0 mb-1">
            {props.cantidad}
          </span>
        </p>
        <p className="text-md-start m-0 mb-1 ">
          TOTAL: <span className="text-sm-start m-0 mb-1">
            ${props.total}
          </span>
        </p>
        <button
          className="btn btn-dark"
          type="button"
          style={{ width: "100%" }}
          onClick={() => removeCompras(this)}
        ><i className="fa-solid fa-xmark"></i> Eliminar
        </button>
      </div>
    </div >
  )
}


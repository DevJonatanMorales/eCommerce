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
            <h5 className="card-title">PLATO: {props.name} <br /> CANTIDAD: {props.cantidad} <br /> TOTAL: ${props.total} </h5>
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => removeCompras(this)}
               ><i className="fa-solid fa-xmark"></i> Eliminar
            </button>
        </div>
    </div>
  )
}


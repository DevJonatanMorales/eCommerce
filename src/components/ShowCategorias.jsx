import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";

export const ShowCategorias = () => {
  const [categorias, setCategorias] = useState(null);

  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div className="container  text-center">
      <h1 className="Categorias">Nuestras Categorias</h1>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {
          categorias != null ? 
            categorias.map((categoria) => (
              <div key={categoria.id} class="bg-card col card my-2 p-3 mx-auto text-center bg-body-secondary" style={{width: '21rem'}}>
                <img src={categoria.imagenes.normal} class="card-img-top mx-auto" style={{width: '18rem'}} alt="Error al cargar"/>
                <div class="card-body m-0">
                  <a className="btn btn-dark" href={`/catagoria/${categoria.id}`} > {categoria.nombre} </a>
                </div>
              </div>
            ))
          : ('No hay categorias')
        }
      </div>
    </div>
  );
};

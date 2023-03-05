import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";

export const CarucelBanner = () => {
  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  console.log(categorias);

  return (
    <div id="carouselExample" className="mb-5 container-fluid carousel slide">
      <div className="carousel-inner">
        {categorias != null
          ? categorias.map((categoria) => (
              <div className={categoria.id == '1' ? 'carousel-item active' : 'carousel-item'} key={categoria.id}>
                <img
                  src={categoria.imagenes.normal}
                  className="d-block w-100 img"
                  alt="..." style={{ height: "60vh" }}                  
                />
                
                <div class="carousel-caption d-none d-md-block">
                  <h5> {categoria.nombre} </h5>
                </div>

              </div>
            ))
          : "No hay categorias"
          }
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

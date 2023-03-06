import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";

export const CarucelBanner = () => {
  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div id="carouselExampleAutoplaying" class="mb-3 carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {categorias != null
          ? categorias.map((categoria) => (
              <div className={categoria.id == '1' ? 'carousel-item active' : 'carousel-item'} key={categoria.id}>
                <img
                  src={categoria.imagenes.normal}
                  className="rounded d-block w-100 imgmx-1"
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
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

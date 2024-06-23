import { useEffect, useState, useContext } from "react";
import { Spinners } from "../spinners/Spinners";
import { DataContext } from "../../../context/DataContext";

export const CarouselBanner = () => {
  const [categorias, setCategorias] = useState(null);
  const { allCategorias } = useContext(DataContext);
  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {categorias != null ? (
          categorias.map((categoria) => (
            <div
              className={
                categoria.id == "1" ? "carousel-item active" : "carousel-item"
              }
              key={categoria.id}
            >
              <img
                src={categoria.imagenes.normal}
                className="rounded d-block w-100 imgmx-1"
                alt={categoria.nombre}
                style={{ height: "60vh" }}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5> {categoria.nombre} </h5>
              </div>
            </div>
          ))
        ) : (
          <Spinners />
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

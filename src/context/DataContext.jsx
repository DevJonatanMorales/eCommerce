import { createContext, useEffect, useState } from "react";
import { data } from "../services/API";
import { ShowAlert } from "../utils/showAlert";

export const DataContext = createContext();

const allCategorias = (state) => {
  state(data.categorias);
};

const Categoria = (id, state) => {
  let _id = parseInt(id) - 1;
  state(data.categorias[_id].menus);
};

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [compras, setCompras] = useState([]);
  const [total, setTotal] = useState(0);

  const [detalleCompra, setDetalleCompra] = useState({
    titleModel: "",
    id_producto: "",
    img: "",
    nombre: "",
    descripcion: "",
    canticad: "",
    precio: 0,
    pagar: 0,
  });

  const InicialState = () => {
    setDetalleCompra({
      titleModel: "",
      id_producto: "",
      img: "",
      nombre: "",
      descripcion: "",
      canticad: "",
      precio: 0,
      pagar: 0,
    });
  };

  const CargarCompras = () => {
    if (localStorage.getItem("compras")) {
      let data = Array.from(JSON.parse(localStorage.getItem("compras")));
      if (data.length > 0) {
        setCompras(data);
        CalcularTotal();
      }
    }
  };

  const AgregarCompras = () => {
    const listCompra = compras;
    let isNewProduct = true;
    listCompra.forEach((element) => {
      if (element.id_producto === detalleCompra.id_producto) {
        isNewProduct = false;
      }
    });
    if (!isNewProduct) {
      ShowAlert(
        `El producto "${detalleCompra.nombre}" ya se encuentra en su orden`,
        "warning"
      );
      return;
    }
    listCompra.push(detalleCompra);
    setCompras(listCompra);
    InicialState();
    ShowAlert("Añadido a su orden", "success");
  };

  const EditarCompras = () => {
    if (Array.isArray(compras) && compras.length > 0) {
      const listCompra = compras.map((element) => {
        if (element.id_producto === detalleCompra.id_producto) {
          return detalleCompra;
        }
        return element;
      });
      setCompras(listCompra);
      InicialState();
      ShowAlert("Producto editado a su orden", "success");
    }
  };

  const EliminarProducto = (id_producto) => {
    if (Array.isArray(compras) && compras.length > 0) {
      const listCompra = compras.filter(
        (element) => Number(element.id_producto) !== Number(id_producto)
      );

      if (listCompra) {
        setCompras(listCompra);
      }
    }
  };

  const CalcularTotal = () => {
    if (Array.isArray(compras) && compras.length > 0) {
      let newTotal = 0;
      compras.forEach((item) => {
        newTotal += item.pagar;
      });
      setTotal(newTotal);
    } else {
      setTotal(0.0);
    }
  };

  const SaveLocalStorage = () => {
    localStorage.setItem("compras", JSON.stringify(compras));
  };

  useEffect(() => {
    CargarCompras();
  }, []);

  useEffect(() => {
    CalcularTotal();
    SaveLocalStorage();
  }, [compras, detalleCompra]);

  return (
    <DataContext.Provider
      value={{
        allCategorias,
        Categoria,
        compras,
        setCompras,
        detalleCompra,
        setDetalleCompra,
        total,
        count,
        setCount,
        AgregarCompras,
        EditarCompras,
        EliminarProducto,
        InicialState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const useDataModal = () => {
  const { setDetalleCompra, setCount } = useContext(DataContext);
  const setDataModal = (titleModel, id, img, nombre, descripcion, cantidad, precio) => {
    setCount(cantidad);
    setDetalleCompra({
      titleModel,
      id_producto: id,
      img: img,
      nombre,
      descripcion,
      cantidad,
      precio: precio,
      pagar: precio * 1,
    });
  };

  return { setDataModal };
};

export default useDataModal;

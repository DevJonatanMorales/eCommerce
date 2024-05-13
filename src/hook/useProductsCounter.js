import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const useProductosCounter = () => {
  const initialState = 1
  const { count, setCount } = useContext(DataContext);

  const increment = () => setCount(count + initialState);
  const decrement = () => setCount(count - initialState);
  const reset = () => setCount(initialState);

  return { increment, decrement, reset };
};

export default useProductosCounter;

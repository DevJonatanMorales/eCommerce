import { UseCounter } from "../functions";

export function Count() {
    const { count, increment, decrement } = UseCounter()

    return (
        <p className="m-0">
            <p className="text-dark">Cantidad: {count} </p>
            <div className="d-flex justify-content-between m-0">
            <button className="btn btn-danger" onClick={decrement} >
                <i class="fa-solid fa-minus"></i>
            </button>
            <button className="btn btn-success" onClick={increment} >
                <i class="fa-solid fa-plus"></i>
            </button>
            </div>
        </p>
    )
}
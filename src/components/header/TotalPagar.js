/* - Comentario: Cargamos el total a pagar - */
export const TotalPagar = (compras, setTotal, total) => {
    if (compras != null) {
        for (let i = 0; i < compras.length; i++) {
            setTotal(total + compras[i].totalPagar)
        }
    } else (
        setTotal(0.00)
    )
}
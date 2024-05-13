import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ShowAlert = (msj, icon ) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
      title: 'ADMINISTRACION',
      text: msj,
      confirmButtonText: "Aceptar",
      icon: icon
  })
}
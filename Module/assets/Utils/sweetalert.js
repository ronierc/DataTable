/** Plugin sweetalert2 - https://sweetalert2.github.io/ **/
import { loadStylesAndScripts } from "../Utils/loader.js";

export async function SweetAlert (vTitle, vMessage, vType, vUrl) {

  await loadStylesAndScripts([
      "https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.min.css"
  ], [
      "https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.all.min.js"
  ]);

  var paramSweet = {
    title: vTitle,
    message: vMessage,
    type: vType,
    url: vUrl
  };

  if (paramSweet.type == 'warning' ) {
      Swal.fire({
        title: paramSweet.title,
        text: paramSweet.message,
        icon: 'warning'
      })        
  }
  if (paramSweet.type == 'error' ) {
      Swal.fire({
        title: paramSweet.title,
        text: paramSweet.message,
        icon: 'error'
      })        
  }
  if (paramSweet.type == 'question' ) {
      Swal.fire({
        title: paramSweet.message,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Confirmado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Operação Recusada!", "", "info");
        }
      });      
  }
  if (paramSweet.type == 'toastSuccess' ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: paramSweet.message
      });      
  }
  if (paramSweet.type == 'toastError' ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: paramSweet.message
      });      
  }
  if (paramSweet.type == 'confirm' ) {
    Swal.fire({
        title: paramSweet.title,
        html: paramSweet.message,
        showDenyButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Salvo!", "", "success");
        window.location.href = paramSweet.url;
      } else if (result.isDenied) {
        Swal.fire("Não Salvo", "", "info");
      }
    });
  }
}

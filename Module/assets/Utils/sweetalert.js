/** Plugin sweetalert2 - https://sweetalert2.github.io/ **/
import { loadStylesAndScripts } from "../Utils/loader.js";

export async function SweetAlert (swtATitle, swtAText, swtType) {

    await loadStylesAndScripts([
        "https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.min.css"
    ], [
        "https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.all.min.js"
    ]);

    if (swtType == 'warning' ) {
        Swal.fire({
          title: swtATitle,
          text: swtAText,
          icon: 'warning'
        })        
    }
    if (swtType == 'error' ) {
        Swal.fire({
          title: swtATitle,
          text: swtAText,
          icon: 'error'
        })        
    }
    if (swtType == 'question' ) {
        Swal.fire({
          title: swtAText,
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
    if (swtType == 'toastSuccess' ) {
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
          title: swtAText
        });      
    }
    if (swtType == 'toastError' ) {
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
          title: swtAText
        });      
    }
}

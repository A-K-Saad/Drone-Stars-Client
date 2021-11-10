import Swal from "sweetalert2";

const Alert = () => {
  const sweetAlert = (icon, title, text, showConfirm) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500,
      showConfirmButton: showConfirm,
    });
  };

  return { sweetAlert };
};

export default Alert;

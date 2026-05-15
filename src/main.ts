import { IUser } from "./types/IUser";

export const verificarSesion = () => {
  const userData = localStorage.getItem("userData");
  if (!userData) {
    window.location.href = "/pages/auth/login/index.html";
    return;
  }

  const usuario: IUser = JSON.parse(userData);

  if (window.location.pathname.includes("/admin/") && usuario.rol !== "admin") {
    alert("Acceso denegado");
    window.location.href = "/pages/client/index.html";
  }
};

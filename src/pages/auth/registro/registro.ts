import { IUser } from "../../../types/IUser";

const formRegistro = document.getElementById("form-registro") as HTMLFormElement;

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  const nuevoUsuario: IUser = { email, password, rol: "client" };

  const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

  // Evitar duplicados
  if (users.some(u => u.email === email)) {
    alert("El usuario ya existe");
    return;
  }

  users.push(nuevoUsuario);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Usuario registrado correctamente");
});

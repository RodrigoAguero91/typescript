import { IUser } from "../../../types/IUser";

const formLogin = document.getElementById("form-login") as HTMLFormElement;

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
  const usuario = users.find(u => u.email === email && u.password === password);

  if (usuario) {
    localStorage.setItem("userData", JSON.stringify(usuario));
    alert("Login exitoso");
    window.location.href = "/pages/client/index.html";
  } else {
    alert("Credenciales incorrectas");
  }
});


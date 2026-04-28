import { IUser } from "../../../types/IUser";

    const loginForm = document.getElementById("login-form") as HTMLFormElement;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

        // Buscar coincidencia real[cite: 1]
        const userFound = users.find(u => u.email === email && u.password === password);

        if (userFound) {
            localStorage.setItem("userData", JSON.stringify(userFound));[cite: 1]
            window.location.href = userFound.rol === 'admin' ? "../../admin/index.html" : "../../client/index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
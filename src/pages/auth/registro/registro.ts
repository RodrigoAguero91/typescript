import { IUser } from "../../../types/IUser";
import { Rol } from "../../../types/Rol";

const form = document.getElementById("reg-form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

        const newUser: IUser = { email, password, rol: Rol.CLIENT };[cite: 1]
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));[cite: 1]
        
        alert("Registro exitoso");
        window.location.href = "../login/index.html";
});
import type { IUser } from "../../../types/IUser";

const formRegistro = document.getElementById("form-registro") as HTMLFormElement;

if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("email") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;

        
        const nuevoUsuario: IUser = {
            email: emailInput.value,
            password: passwordInput.value,
            rol: 'client'
        };


        const usuariosGuardados: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

    
        const existe = usuariosGuardados.find(u => u.email === nuevoUsuario.email);
        if (existe) {
            alert("Este correo ya está registrado.");
            return;
        }

        
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem("users", JSON.stringify(usuariosGuardados));

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        

        window.location.href = "../login/index.html";
    });
}
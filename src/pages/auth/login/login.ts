// src/pages/auth/login/login.ts

// 1. Importamos la interfaz para mantener el tipado fuerte
import { type IUser } from '../../../types/IUser';

// 2. Capturamos el formulario de login mapeando el DOM
const formLogin = document.getElementById('form-login') as HTMLFormElement;

if (formLogin) {
    formLogin.addEventListener('submit', (e: Event) => {
        e.preventDefault(); // Evitamos que la página se recargue

        // 3. Capturamos los inputs con sus respectivos tipos HTML
        const emailInput = document.getElementById('login-email') as HTMLInputElement;
        const passwordInput = document.getElementById('login-password') as HTMLInputElement;

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validación básica de campos vacíos
        if (!email || !password) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // 4. Obtenemos el listado de usuarios de localStorage (casteado a nuestro tipo estricto)
        const usuarios: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

        // 5. Buscamos si existe un usuario que coincida exactamente en Email y Contraseña
        const usuarioEncontrado = usuarios.find(
            (user: IUser) => user.email === email && user.password === password
        );

        if (usuarioEncontrado) {
            // 6. ¡Credenciales correctas! Guardamos la sesión activa en 'userData'
            localStorage.setItem('userData', JSON.stringify(usuarioEncontrado));

            alert('¡Inicio de sesión exitoso!');

            // 7. Redirección inteligente basada en el ROL del usuario
             if (usuarioEncontrado.rol === 'admin') {
                 window.location.href = '/admin.html';
            } else {
                 window.location.href = '/client.html';
            }
        } else {
            // 8. Si no coincide, mostramos un error genérico por seguridad
            alert('Correo electrónico o contraseña incorrectos.');
        }
    });
}
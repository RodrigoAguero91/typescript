// src/pages/client/client.ts

const btnLogout = document.getElementById('btn-logout') as HTMLButtonElement;

if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        // 1. Eliminamos los datos de la sesión activa del localStorage
        localStorage.removeItem('userData');

        alert('Sesión cerrada correctamente.');

        // 2. Redireccionamos al Login de manera absoluta
        window.location.href = '/login.html';
    });
}
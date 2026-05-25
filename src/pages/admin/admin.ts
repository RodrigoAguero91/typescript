// src/pages/admin/admin.ts

const btnLogoutAdmin = document.getElementById('btn-logout-admin') as HTMLButtonElement;

if (btnLogoutAdmin) {
    btnLogoutAdmin.addEventListener('click', () => {
        // 1. Eliminamos los datos de la sesión activa
        localStorage.removeItem('userData');

        alert('Sesión de Administrador cerrada.');

        // 2. Redireccionamos al Login
        window.location.href = '/login.html';
    });
}
export const checkAuth = () => {
    const userData = JSON.parse(localStorage.getItem('userData') || 'null');
    const path = window.location.pathname;

    // Si intenta entrar a admin y no es admin[cite: 4]
    if (path.includes('/admin/') && (!userData || userData.rol !== 'admin')) {
        alert("No tienes permisos para acceder aquí");
        window.location.href = '/pages/auth/login/';
    }
    
    // Si intenta entrar a cualquier parte sin estar logueado
    if (!userData && !path.includes('/auth/')) {
        window.location.href = '/pages/auth/login/';
    }
};

// Ejecutar al cargar la página
checkAuth();
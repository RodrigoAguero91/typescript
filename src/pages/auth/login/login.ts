const validarLogin = (email: string, pass: string) => {
    const usuarios: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Buscar coincidencia
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === pass);

    if (usuarioEncontrado) {
        // Guardar solo los datos necesarios en 'userData' para iniciar sesión
        const sessionData = { email: usuarioEncontrado.email, rol: usuarioEncontrado.rol };
        localStorage.setItem('userData', JSON.stringify(sessionData));
        
        // Redirigir según el rol
        window.location.href = usuarioEncontrado.rol === 'admin' ? '/pages/admin/' : '/';
    } else {
        alert("Credenciales incorrectas");
    }
};
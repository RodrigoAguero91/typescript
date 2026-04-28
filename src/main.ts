import { productos } from './data/productos'; 


const proteccionDeRuta = () => {
    const user = JSON.parse(localStorage.getItem("userData") || "null");
    const path = window.location.pathname;

    if (path.includes("/admin/") && (!user || user.rol !== "admin")) {
        alert("Acceso denegado");
        window.location.href = "/pages/auth/login/";
    }
};
proteccionDeRuta();


const contenedor = document.getElementById("contenedor-productos");
if (contenedor) {
    productos.forEach(prod => {
        const card = document.createElement("article");
        card.innerHTML = `
            <img src="${prod.imagen}" width="200">
            <h3>${prod.nombre}</h3>
            <p>Precio: $${prod.precio}</p>
            <button>Agregar</button>
        `
        contenedor.appendChild(card);
    });
}


const user = JSON.parse(localStorage.getItem('userData') || 'null');
const linkAdmin = document.getElementById('link-admin');
const linkLogin = document.getElementById('link-login');

if (user) {
    if (linkLogin) linkLogin.style.display = 'none';
    if (user.rol === 'admin' && linkAdmin) linkAdmin.style.display = 'block';
}
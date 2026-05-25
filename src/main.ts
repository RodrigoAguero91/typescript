// src/main.ts
import { type IUser } from './types/IUser.ts';
// Importamos tu catálogo y el método de filtrado
import { PRODUCTS, getCategories } from './utils/data.ts';

function verificarRutasGuard(): void {
    const path = window.location.pathname;
    const userDataRaw = localStorage.getItem('userData');
    const usuarioLogueado: IUser | null = userDataRaw ? JSON.parse(userDataRaw) : null;

    // --- 1. VALIDACIONES DEL GUARD DE SEGURIDAD ---
    if ((path.includes('/admin.html') || path.includes('/client.html')) && !usuarioLogueado) {
        alert('Acceso denegado. Por favor, inicie sesión.');
        window.location.href = '/login.html';
        return;
    }

    if (path.includes('/admin.html') && usuarioLogueado?.rol !== 'admin') {
        alert('No tiene permisos de administrador para acceder a esta sección.');
        window.location.href = '/client.html';
        return;
    }

    // --- 2. LÓGICA PARA LA RAÍZ DEL SITIO (index.html o /) ---
    // --- 2. LÓGICA PARA LA RAÍZ DEL SITIO (index.html o /) ---
    // Cambiamos .endsWith por .includes para que detecte index.html en cualquier variante de URL
    if (path === '/' || path.includes('index.html')) {
        if (!usuarioLogueado) {
            window.location.href = '/login.html';
            return;
        }

        // Si superó el Guard, inicializamos la interfaz completa de la tienda
        inicializarTienda();
    }
}

function inicializarTienda(): void {
    const listaCategorias = document.getElementById("lista-categorias");
    const contenedorProductos = document.getElementById("contenedor-productos");
    const btnLogout = document.getElementById('btn-logout');

    // Manejo de Cierre de Sesión
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            localStorage.removeItem('userData');
            alert('Sesión cerrada correctamente.');
            window.location.href = '/login.html';
        });
    }

    // 1. Renderizar Categorías
    if (listaCategorias) {
        listaCategorias.innerHTML = ""; // Limpiamos residuos
        const categorias = getCategories();

        categorias.forEach(cat => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#" data-id="${cat.id}">${cat.nombre}</a>`;
            listaCategorias.appendChild(li);
        });
    }

    // 2. Renderizar Catálogo de Productos
    if (contenedorProductos) {
        contenedorProductos.innerHTML = ""; // Limpiamos residuos

        PRODUCTS.forEach(prod => {
            if (prod.eliminado) return; // Saltamos eliminados

            const article = document.createElement("article");
            article.className = "producto-card";

            const sinStock = prod.stock === 0 || !prod.disponible;

            // Inyectamos el HTML de la tarjeta del producto usando tus datos tipados
            article.innerHTML = `
                <div class="imagen-placeholder">🍔</div>
                <h3>${prod.nombre}</h3>
                <p class="desc">${prod.descripcion}</p>
                <p class="precio">Precio: <strong>$${prod.precio.toLocaleString('es-AR')}</strong></p>
                <p class="stock ${sinStock ? 'sin-stock' : ''}">Stock: ${prod.stock} u.</p>
                <button class="btn-agregar" ${sinStock ? 'disabled' : ''}>
                    ${sinStock ? 'Sin Stock' : 'Agregar'}
                </button>
            `;

            const boton = article.querySelector(".btn-agregar") as HTMLButtonElement;
            if (boton && !sinStock) {
                boton.addEventListener("click", () => {
                    alert(`Has seleccionado: ${prod.nombre}`);
                });
            }

            contenedorProductos.appendChild(article);
        });
    }
}
// Ejecución instantánea del Guard al cargar la página
verificarRutasGuard();
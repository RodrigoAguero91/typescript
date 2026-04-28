import { IUser } from "../types/IUser";
    import { Rol } from "../types/Rol";

    export const checkGuard = () => {
        const userData = localStorage.getItem("userData");
        const user: IUser | null = userData ? JSON.parse(userData) : null;
        const path = window.location.pathname;

        // Si no hay sesión y no está en auth, redirigir al login[cite: 1]
        if (!user && !path.includes("/auth/")) {
            window.location.href = "/src/pages/auth/login/index.html";
            return;
        }

        // Si es cliente e intenta entrar a admin, redirigir[cite: 1]
        if (user?.rol === Rol.CLIENT && path.includes("/admin/")) {
            window.location.href = "/src/pages/client/index.html";
        }
    };
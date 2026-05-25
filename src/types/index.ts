// src/types/index.ts

// Definimos los únicos dos roles permitidos en el sistema
export type Rol = 'admin' | 'client';

// Contrato estricto para la estructura de un usuario
export interface IUser {
    email: string;
    password?: string; // Opcional por si en un futuro preferís no persistir o retornar la clave en ciertas vistas
    rol: Rol;
}
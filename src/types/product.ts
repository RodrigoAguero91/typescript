// src/types/product.ts
import { type ICategory } from './category.ts';

export interface Product {
    id: number;
    eliminado: boolean;
    createdAt: string;
    nombre: string;
    precio: number;
    descripcion: string;
    stock: number;
    imagen: string;
    disponible: boolean;
    categorias: ICategory[]; // Es una lista porque así está en tu data.ts
}
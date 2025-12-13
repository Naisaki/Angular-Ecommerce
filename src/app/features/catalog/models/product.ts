export interface Product {
    id: number;
    name: string;
    description?: string;
    category?: string;
    price: number;
    discount?: number;
    tags?: string[];
    imageUrl: string;
    stock: number;
    rating?: number;
}

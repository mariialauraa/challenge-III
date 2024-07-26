import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { IProductsContext } from '../types/product_types';

export const useProducts = (): IProductsContext => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider')
    }
    return context
}

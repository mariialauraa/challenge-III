import { createContext, useEffect, useState, ReactNode } from "react";
import { IProductsValues, IProductsContext } from '../types/product_types';

export const ProductsContext = createContext<IProductsContext | null>(null)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProductsValues[] | null>(null)
  const [cart, setCart] = useState<IProductsValues[] | null>(null)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/data/products.json')
                if (!response.ok) {
                    throw new Error('Erro ao buscar o arquivo JSON')
                }
                const data: { products: IProductsValues[] } = await response.json()
                setProducts(data.products);
                localStorage.setItem('products', JSON.stringify(data.products))
            } catch (error) {
                console.error(error)
            }
        }

        const storedProducts = localStorage.getItem('products')
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts))
        } else {
            fetchProducts()
        }
    }, [])

    useEffect(() => {
        const getCart = () => {
            const storedCart = localStorage.getItem('cart')
            if (storedCart) {
                setCart(JSON.parse(storedCart))
            }
        }

        getCart()
    }, [])

    const getSingleProduct = (id: number): IProductsValues | undefined => {
        return products?.find(product => product.id === id)
    }

    const filterCategory = (category: string): IProductsValues[] | undefined => {
        return products?.filter(product => product.category === category)
    }

    const addCart = (id: number) => {
        const productToAdd = products?.find(product => product.id === id)
        if (productToAdd) {
            const updatedCart = cart ? [...cart, productToAdd] : [productToAdd]
            setCart(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    }

    const values: IProductsContext = {
        products,
        getSingleProduct,
        filterCategory,
        cart,
        addCart,
        setCart,
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )
}

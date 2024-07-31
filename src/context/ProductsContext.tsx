import { createContext, useEffect, useState, ReactNode } from "react";
import { IProductsValues, IProductsContext, ICartProduct } from '../types/product_types';

export const ProductsContext = createContext<IProductsContext | null>(null)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProductsValues[] | null>(null)
  const [cart, setCart] = useState<ICartProduct[]>([])

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

    const addCart = (id: number, quantity: number = 1) => {
        const productToAdd = products?.find(product => product.id === id)
        if (productToAdd) {
            setCart(prevCart => {
                const existingProduct = prevCart.find(item => item.id === id)
                const updatedCart = existingProduct 
                    ? prevCart.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                      )
                    : [...prevCart, { ...productToAdd, quantity }]
                localStorage.setItem('cart', JSON.stringify(updatedCart))
                return updatedCart
            })
        }
    }

    const removeCart = (id: number) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== id)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
    }

    const values: IProductsContext = {
        products,
        getSingleProduct,
        filterCategory,
        cart,
        addCart,
        removeCart,
        setCart,
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )
}

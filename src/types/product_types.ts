export interface Idescription {
    short: string;
    long: string;
}
  
export interface Icolors {
    name: string;
    hex: string;
}
  
export interface Iimages {
    mainImage: string;
    gallery: string[];
}
  
export type IProductsValues = {
    id: number;
    sku: string;
    title: string;
    category: string;
    tags: string[];
    normalPrice: number;
    salePrice: number;
    discountPercentage: number;
    new: boolean;
    description: Idescription;
    colors: Icolors[];
    sizes: string[];
    rating: number;
    images: Iimages;
}

export interface ICartProduct extends IProductsValues {
    quantity: number;
}
  
export interface IProductsContext {
    products: IProductsValues[] | null;
    getSingleProduct: (id: number) => IProductsValues | undefined;
    filterCategory: (category: string) => IProductsValues[] | undefined;
    cart: ICartProduct[];
    addCart: (id: number, quantity: number) => void;
    removeCart: (id: number) => void;
    setCart: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}
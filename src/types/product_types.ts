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
  
export interface IProductsContext {
    products: IProductsValues[] | null;
    getSingleProduct: (id: number) => IProductsValues | undefined;
    filterCategory: (category: string) => IProductsValues[] | undefined;
    cart: IProductsValues[] | null;
    addCart: (id: number) => void;
    setCart: React.Dispatch<React.SetStateAction<IProductsValues[] | null>>;
}
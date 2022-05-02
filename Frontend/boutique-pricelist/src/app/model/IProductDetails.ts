import { IProductPrice } from "./IProductPrice";

export interface IProductDetails{
    id: number;
    brand: string;
    model: string;
    product_type: string;
    img_src: string;
    productSpecifics: IProductPrice[];
}
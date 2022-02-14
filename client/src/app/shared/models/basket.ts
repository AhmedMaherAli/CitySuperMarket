
import { v4 as uuidv4 } from 'uuid';
export interface IBasketItem {
    name: string;
    id: number;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface IBasket {
    id: string;
    items: IBasketItem[];
}
export interface IBasketTotal{
    shippingCost:number;
    subtotal:number;
    total:number;
}

export class Basket implements IBasket{
    id= uuidv4();
    items: IBasketItem[]=[];
}



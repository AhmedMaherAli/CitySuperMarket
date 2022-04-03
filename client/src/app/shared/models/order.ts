import { IAddress } from "./address";


export interface IOrderToCeate {
    basketId: string;
    shipToAddress: IAddress;
    deliveryMethod: number;
}


export interface IOrderItem {
    productId: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;
} 

export interface IOrder {
    id:number
    buyerEmail: string;
    orderDate: Date;
    shipToAddress: IAddress;
    shippingPrice: number;
    deliveryMethodName: string;
    orderItems: IOrderItem[];
    subtotal: number;
    total: number;
    status: string;
}


import { IAddress } from "./address";

declare module namespace {


    export interface OrderItem {
        productId: number;
        productName: string;
        pictureUrl: string;
        price: number;
        quantity: number;
    }

    export interface RootObject {
        buyerEmail: string;
        orderDate: Date;
        shipToAddress: IAddress;
        shippingPrice: number;
        deliveryMethodName: string;
        orderItems: OrderItem[];
        subtotal: number;
        total: number;
        status: string;
    }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem, IBasketTotal } from '../shared/models/basket';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl=environment.apiUrl;
  initialBasket = {} as Basket
  initialTotalSource={} as IBasketTotal

  private basketSource =new BehaviorSubject<IBasket>(this.initialBasket);
  private basketTotalSource =new BehaviorSubject<IBasketTotal>(this.initialTotalSource);
  basket$=this.basketSource.asObservable();
  basketTotal$=this.basketTotalSource.asObservable();

  constructor(private http:HttpClient) { }

  getBasket(basketId:string){
    return this.http.get<IBasket>(this.baseUrl+'basket?id='+basketId).pipe(
      map( (basket:IBasket) => {
        this.basketSource.next(basket);
        this.calculateTotalCost();
    }));
  }
  setBasket(basket:IBasket){
    
    this.http.post<IBasket>(this.baseUrl+'basket',basket).subscribe((response:IBasket)=>{
      this.basketSource.next(response);
      this.calculateTotalCost();
    },error => {
      console.log(error);
    })
  }
  getCurrentBasketValue(){
    return this.basketSource.value;
  }
  addItemToBasket(productItem:IProduct,quantity=1){
    const itemToAdd:IBasketItem=this.mapProductToBaketItem(productItem,quantity); 
    const basket = this.getCurrentBasketValue().id==null ? this.createBasket(): this.getCurrentBasketValue() ;
    basket.items=this.addOrUpdateBasketItem(basket.items,itemToAdd,quantity);
    this.setBasket(basket);
  }
  private calculateTotalCost(){
    const basket=this.getCurrentBasketValue();
    const shippingCost=0;
    const subtotal=basket.items.reduce((a,b)=>(b.quantity*b.price)+a,0);
    const total =subtotal+shippingCost;
    this.basketTotalSource.next({shippingCost,subtotal,total});
    return total;
  }

  private addOrUpdateBasketItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number) {
    const idx=items.findIndex(u=>u.id===itemToAdd.id);
    if(idx !=-1)
    {
        items[idx].quantity+=quantity;
        return items;
    }
    itemToAdd.quantity=quantity;
    items.push(itemToAdd);
    return items;
  }
  createBasket(): IBasket {
    const basket=new Basket();
    localStorage.setItem('basket_id',basket.id);
    return basket;  
  }
  private mapProductToBaketItem(productItem: IProduct, quantity: number): IBasketItem {
    return {
      name: productItem.name,
      id: productItem.id,
      price: productItem.price,
      quantity: quantity,
      pictureUrl: productItem.pictureUrl,
      brand: productItem.productBrand,
      type: productItem.productType
    }

  }  
  increaseQuantity(item: IBasketItem) {
    const basket=this.getCurrentBasketValue();
    const idx=basket.items.indexOf(item);
    basket.items[idx].quantity++;
    this.setBasket(basket);

  }
  decreaseQuantity(item: IBasketItem) {
    if (item.quantity > 1)
    {
      const basket=this.getCurrentBasketValue();
      const idx=basket.items.indexOf(item);
      basket.items[idx].quantity--;
      this.setBasket(basket);
    }
    else{
      this.removeBasketItem(item);
    }
  }
  removeBasketItem(item:IBasketItem){
    const basket=this.getCurrentBasketValue();
    if(basket.items.some(x=>x.id===item.id)){
      basket.items=basket.items.filter(i=>i.id!==item.id);
      if(basket.items.length>0){
        this.setBasket(basket);
      }else{
        this.deletBasket(basket);
      }
    }
  }
  deletBasket(basket: IBasket) {
    return this.http.delete(this.baseUrl+'basket?id='+basket.id).subscribe(()=>{
      this.basketSource.next(this.initialBasket);
      this.basketTotalSource.next(this.initialTotalSource);
      localStorage.removeItem('basket_id');
    },error=>{console.log(error)});
  }
}

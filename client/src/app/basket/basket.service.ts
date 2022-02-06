import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem } from '../shared/models/basket';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl=environment.apiUrl;
  initialBasket = {} as Basket


  private basketSource =new BehaviorSubject<IBasket>(this.initialBasket);
  basket$=this.basketSource.asObservable();

  constructor(private http:HttpClient) { }

  getBasket(basketId:string){
    console.log(this.baseUrl+'basket?id='+basketId);
    return this.http.get<IBasket>(this.baseUrl+'basket?id='+basketId).pipe(
      map( (basket:IBasket) => {
        this.basketSource.next(basket);
    }));
  }
  getBasket2(id:string){
    return this.http.get<IBasket>(this.baseUrl+'basket?id='+id);
  }
  
  setBasket(basket:IBasket){
    this.http.post<IBasket>(this.baseUrl+'basket',basket).subscribe((response:IBasket)=>{
      this.basketSource.next(response);
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
    console.log(basket);
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
}

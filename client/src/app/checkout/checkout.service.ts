import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IOrder, IOrderToCeate } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  getDeliveryMethods(){
    this.http.get<IDeliveryMethod[]>(this.baseUrl+'order/deliveryMethods').pipe(
      map((dms:IDeliveryMethod[])=>{
    }));
    return this.http.get<IDeliveryMethod[]>(this.baseUrl+'order/deliveryMethods').pipe(
      map((dMs:IDeliveryMethod[])=>{
        return dMs.sort((a,b)=> b.price-a.price);
      })
    );
  }

  creatOrder(order:IOrderToCeate){
    return this.http.post(this.baseUrl+'order',order);

  }
}

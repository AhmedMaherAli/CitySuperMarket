import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  userOrders:IOrder[];
  intialOrders=[{}] as IOrder[];
  baseUrl=environment.apiUrl;
  
  private ordersSource =new BehaviorSubject<IOrder[]>(this.intialOrders);
  orders$=this.ordersSource.asObservable();



  getUserOrder(){
    this.http.get<IOrder[]>(this.baseUrl+'Order').subscribe((orders:IOrder[])=>{
      this.ordersSource.next(orders);
    },error=>{console.log(error);});
  }

  getOrderDetails(orderId:number){
    return this.http.get<IOrder>(this.baseUrl+'order/'+orderId);
  }

  getCurrentOrdersValue(){
    return this.ordersSource.value;
  }

}

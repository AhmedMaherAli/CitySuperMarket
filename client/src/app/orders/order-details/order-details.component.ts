import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderService:OrdersService,private activateRoute:ActivatedRoute) { }
  order:IOrder
  ngOnInit(): void {
    this.orderService.getOrderDetails(this.activateRoute.snapshot.params['orderId']).subscribe((order:IOrder)=>{
      this.order=order;
    },error =>{console.log(error)});
  }



}

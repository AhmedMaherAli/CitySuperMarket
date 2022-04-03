import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';

import { IBasket, IBasketItem } from '../../models/basket';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  @Input() isBasket=true;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  @Input() items:any[]=[];
  @Input() isOrder=false;

  ngOnInit(): void {
    console.log(this.items);
  }
  decreaseQuantity(item:IBasketItem){
    this.decrement.emit(item);
  }

  increaseQuantity(item:IBasketItem){
    this.increment.emit(item);
  }

  removeBasketItem(item:IBasketItem){
    this.remove.emit(item);
  }


}

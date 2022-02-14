import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { BasketService } from './basket.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  @ViewChild('productQuantity', { static: false }) quantityElement: ElementRef;
  constructor(private basketService: BasketService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  increaseQuantity(item:IBasketItem){
    this.basketService.increaseQuantity(item);
  }
  decreaseQuantity(item:IBasketItem){
    this.basketService.decreaseQuantity(item);
  }
  
  removeBasketItem(item:IBasketItem){
    this.basketService.removeBasketItem(item);
  }
}

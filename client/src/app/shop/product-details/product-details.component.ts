import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct;
  quantity=0;
  @ViewChild('productQuantity',{static:false}) quantityElement :ElementRef;
  
  constructor(private shopService:ShopService, private activateRoute:ActivatedRoute, private basketService:BasketService) {}

  ngOnInit(): void {
    
    this.loadProduct(this.activateRoute.snapshot.params['id']);
  }
  loadProduct(id:number){
    this.shopService.getProduct(id).subscribe(product=>this.product=product,error=>console.log(error));
  }
  increaseQuantity(){
    this.quantity++;
  }
  decreaseQuantity(){
    if( this.quantity>0)
      this.quantity--;
  }
  addItemToBasket(){
    if(this.quantity===0)
      this.quantity++;
    this.basketService.addItemToBasket(this.product,this.quantity);
  }

}

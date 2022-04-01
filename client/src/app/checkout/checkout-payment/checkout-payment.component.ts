import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder, IOrderToCeate } from 'src/app/shared/models/order';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {

  constructor( private router:Router, private basketService:BasketService,private toastrService:ToastrService,private checkoutService:CheckoutService) { }
  @Input()checkoutForm:FormGroup;
  ngOnInit(): void {
  }

  submitOrder(){
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate= this.getOrederToCreate(basket);
    this.checkoutService.creatOrder(orderToCreate).subscribe(()=>{
      this.toastrService.success('Order created succesfully.');
      this.basketService.deleteLocalBaset();
      const navigationExtras:NavigationExtras ={state:orderToCreate};
      this.router.navigate(['checkout/success'],navigationExtras)
    },error=>{this.toastrService.error(error.title);console.log(error);}
    )
  }
  getOrederToCreate(basket: IBasket):IOrderToCeate {
    return {
      basketId:basket.id,
      shipToAddress:this.checkoutForm.get("addressForm")?.value,
      deliveryMethod:this.checkoutForm.get("deliveryForm")?.get("deliveryMethod")?.value
    };
  }

}

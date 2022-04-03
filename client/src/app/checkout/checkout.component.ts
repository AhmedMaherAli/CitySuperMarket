import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';
import { BasketService } from '../basket/basket.service';
import { IAddress } from '../shared/models/address';
import { IBasketTotal } from '../shared/models/basket';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkOutForm:FormGroup;

  basketTotals$: Observable<IBasketTotal>;
  constructor(private fb:FormBuilder, private accountService:AccountService, private basketService:BasketService) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.getCurrentUserAddress();
    this.basketTotals$=this.basketService.basketTotal$;
  }

  createCheckoutForm(){
    this.checkOutForm=this.fb.group(
      {
        addressForm:this.fb.group({
          street: [null,Validators.required],
          city: [null,Validators.required],
          state: [null,Validators.required],
          zipCode: [null,Validators.required],
        }),
        deliveryForm:this.fb.group({
          deliveryMethod:[null,Validators.required]
        }),
        paymentForm:this.fb.group({
          nameOnCard:[null,Validators.required]
        }),
      }
    )
  }

  getCurrentUserAddress(){
    return this.accountService.getUserAddress().subscribe(address=>{
      if(address){
        this.checkOutForm.get('addressForm')?.patchValue(address);
      }
    },error=>{
      console.log(error);
    })
  }
}

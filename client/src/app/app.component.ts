import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'City Supermarket';
  constructor(private basketService:BasketService, private accountService:AccountService) {
  }

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }
  
  loadCurrentUser(){
    const token=localStorage.getItem('token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe(()=>{
        console.log('user loaded');
      },error=>{
        console.log(error);
      })
    }
  }

  loadBasket(){
    const basket_id=localStorage.getItem('basket_id');
    if(basket_id)
      { 
         this.basketService.getBasket(basket_id).subscribe(()=>{
          console.log('Basket Initialized.');
        },error => console.log(error))
      }
  }
}

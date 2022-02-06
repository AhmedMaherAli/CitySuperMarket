import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BasketService } from './basket/basket.service';
import { IBasket } from './shared/models/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'City Supermarket';
  constructor(private basketService:BasketService) {
  }
  ngOnInit(): void {
    const basket_id=localStorage.getItem('basket_id');

    if(basket_id)
      { 
        this.basketService.getBasket2(basket_id).subscribe(response=>{

        });

         this.basketService.getBasket(basket_id).subscribe((response)=>{
          console.log('Basket Initialized.',response);
        },error => console.log(error))
      }
  }
}

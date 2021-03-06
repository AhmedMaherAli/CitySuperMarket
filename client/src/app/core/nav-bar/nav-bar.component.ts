import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IUser } from 'src/app/shared/models/user';
import { IBasket } from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$:Observable<IBasket>;
  currentUser$:Observable<IUser|null>;
  constructor(private basketService:BasketService, private accountService:AccountService) { }

  ngOnInit(): void {
    this.basket$=this.basketService.basket$;
    this.currentUser$=this.accountService.currentUser$;
  }
  logoutUser(){
    this.accountService.logOut();
  }

}

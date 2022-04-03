import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',loadChildren: ()=> import('./shop/shop.module').then(mod=>mod.ShopModule)},
  {path:'basket',loadChildren: ()=> import('./basket/basket.module').then(mod=>mod.BasketModule)},
  {path:'checkout', canActivate:[AuthGuard] ,loadChildren: ()=> import('./checkout/checkout.module').then(mod=>mod.CheckoutModule)},
  {path:'orders', canActivate:[AuthGuard] ,loadChildren: ()=> import('./orders/orders.module').then(mod=>mod.OrdersModule)},
  {path:'account',loadChildren: ()=> import('./account/account.module').then(mod=>mod.AccountModule)},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

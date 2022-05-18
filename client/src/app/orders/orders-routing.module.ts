import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


const routes: Routes = [
  { path: '', component: OrdersComponent },
  {path: ':orderId', component: OrderDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }


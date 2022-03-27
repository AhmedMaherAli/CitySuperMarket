import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NavBarComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      preventDuplicates:true
    })
  ],
  exports:[SectionHeaderComponent,NavBarComponent]
})
export class CoreModule { }

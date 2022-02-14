import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [NavBarComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  exports:[SectionHeaderComponent,NavBarComponent]
})
export class CoreModule { }

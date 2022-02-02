import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';




@NgModule({
  declarations: [NavBarComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SectionHeaderComponent,NavBarComponent]
})
export class CoreModule { }

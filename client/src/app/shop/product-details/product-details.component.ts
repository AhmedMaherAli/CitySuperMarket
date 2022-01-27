import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct;
  productId:number;
  @ViewChild('productQuantity',{static:false}) quantityElement :ElementRef;
  
  constructor(private shopService:ShopService, private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.url.forEach(param=>this.productId=+param[1].path)
    this.loadProduct(this.productId);
  }
  loadProduct(id:number){
    this.shopService.getProduct(id).subscribe(product=>this.product=product,error=>console.log(error));
  }
  increaseQuantity(){
    this.quantityElement.nativeElement.innerHTML= +this.quantityElement.nativeElement.innerHTML+1;
  }
  decreaseQuantity(){
    if( +this.quantityElement.nativeElement.innerHTML>0)
      this.quantityElement.nativeElement.innerHTML= +this.quantityElement.nativeElement.innerHTML-1;
  }

}

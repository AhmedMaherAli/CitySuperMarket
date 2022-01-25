import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ibrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { Itype } from '../shared/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search',{static:true}) searchElement :ElementRef;
  products: IProduct[];
  brands:Ibrand[];
  types:Itype[];
  params:ShopParams;
  totalCount=0;
  sortOptions=[
    {name:"Alphabetical",value:"name"},
    {name:"Price: Low to High",value:"price"},
    {name:"Price: High to Low",value:"priceDesc"},
    {name:"Brands",value:"brands"},
    {name:"Types",value:"types"}
  ];
  constructor(private shopService:ShopService) { 
    this.products = [];
    this.brands=[];
    this.types=[];
  }
  
  ngOnInit(): void {
    this.params  = new ShopParams();
    this.getProducts();
    this.getTypes();
    this.getBrands();
    
  }
  getProducts(){
    
    this.shopService.getProducts(this.params).subscribe(response=>{
      this.products=response.products;
      this.totalCount=response.count;
    }, error => {
      console.log(error);
    });
  }
  getTypes(){
    this.shopService.getTypes().subscribe(response=>{
      this.types=[{id:0, name:'All'},...response];
    }, error => {
      console.log(error);
    });
  }
  getBrands(){
    this.shopService.getBrands().subscribe(response=>{
      this.brands=[{id:0, name:'All'},...response];
    }, error => {
      console.log(error);
    });
  }
  onBrandSelected(brandId:number):void{
    this.params.brandIdSelected=brandId;
    this.getProducts();
  }
  onTypeSelected(typeId:number):void{
    this.params.typeIdSelected=typeId;
    this.getProducts();
  }
  onSortSelected(sort:string){
    this.params.sortSelected=sort;
    this.getProducts();
  }
  onSearchClicked(){

    this.params.search=this.searchElement.nativeElement.value;
    this.getProducts();
  }
  onPageChanged(event:any){
    this.params.pageIndex=event.page;
    this.getProducts();
  }
  onReset(){
    this.searchElement.nativeElement.value='';
    this.params=new ShopParams();
    this.getProducts();
  }
}

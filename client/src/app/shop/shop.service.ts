import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ibrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { Itype } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts(params:ShopParams):Observable<IPagination>{
    
    let queryUrl:string=this.baseUrl;
    queryUrl+='products?pageSize='+params.pageSize.toString();
    queryUrl+='&pageIndex='+params.pageIndex.toString();
    if(params.brandIdSelected!==0){
     queryUrl+='&BrandId='+params.brandIdSelected.toString();
    }
    if(params.typeIdSelected!==0){
      queryUrl+='&TypeId='+params.typeIdSelected.toString();
    }
    if(params.search){
      queryUrl+='&search='+params.search;
    }
    queryUrl+='&sort='+params.sortSelected;
    return this.http.get<IPagination>(queryUrl);
  };


  getBrands():Observable<Ibrand[]>{
    let queryUrl:string=this.baseUrl;
    queryUrl+='products/brands';
    return this.http.get<Ibrand[]>(queryUrl);
  };


  getTypes():Observable<Itype[]>{
    
    let queryUrl:string=this.baseUrl;
    queryUrl+='products/types';
    return this.http.get<Ibrand[]>(queryUrl);
  };
  
  getProduct(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(this.baseUrl+'products/'+id.toString());
  }
}



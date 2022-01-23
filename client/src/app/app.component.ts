import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'City Supermarket';
  products: IProduct[];

  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:44346/api/products').subscribe( (response: IProduct) => {
      this.products = response;
      console.log(this.products);
    }, error => {
      console.log(error)
    });
  }
}

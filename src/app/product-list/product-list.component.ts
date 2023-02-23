import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

 coffeeBrands:any = {
    "brands": [
      {
        "name": "Starbucks",
        "location": "Seattle, Washington",
        "popular_products": [" Capacchuno", "Vanilla Latte"],
        "rate": "$10"
      },
      {
        "name": "Dunkin'",
        "location": "Quincy, Massachusetts",
        "popular_products": ["Hot Chocolate"],
        "rate": "$11"
      },
      {
        "name": "Peet's Coffee",
        "location": "Emeryville, California",
        "popular_products": [ "Decaf Major Dickason's Blend"],
        "rate": "$12"
      },
      {
        "name": "Lavazza",
        "location": "Turin, Italy",
        "popular_products": ["Gran Espresso"],
        "rate": "$13"
      },
      {
        "name": "Illy",
        "location": "Trieste, Italy",
        "popular_products": [ "Illy Moka"],    
        "rate": "$14"
      }
    ]
  }
  
}
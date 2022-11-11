import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

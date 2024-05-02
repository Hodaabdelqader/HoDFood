import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/cart/car.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartservices:CarService){
    this.setCart();
  }
  setCart(){
    this.cart=this.cartservices.getCart();
  }
  removeFromCart(cartItem:CartItem){
  this.cartservices.removeFromCart(cartItem.food.id);
  this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartservices.changeQuantity(cartItem.food.id,quantity)
    this.setCart();
  }


  ngOnInit(): void {
  }

}



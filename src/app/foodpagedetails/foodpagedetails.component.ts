import { Component, OnInit } from '@angular/core';
import { food } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CarService } from '../services/cart/car.service';

@Component({
  selector: 'app-foodpagedetails',
  templateUrl: './foodpagedetails.component.html',
  styleUrls: ['./foodpagedetails.component.css']
})
export class FoodpagedetailsComponent implements OnInit{
    constructor( private activetedroute:ActivatedRoute,
      private foodservice:FoodService,
      private cartservices:CarService,
      private router:Router){
      activetedroute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodservice.getFoodById(params['id'])
      })
    }
    food!:food;
  ngOnInit(): void {

  }
  addToCart(){
    this.cartservices.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}

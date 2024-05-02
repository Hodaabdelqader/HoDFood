import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getFoodById(id:number):food{
  return this.getAll().find(food =>food.id==id)!
  }
  getAllTags():Tag[]{
  return[
    {name:'All',count:8},
    {name:'Pizza',count:3},
    {name:'Soup',count:1},
    {name:'Meat',count:1},
    {name:'Fish',count:2},
    {name:'pasta',count:1}
  ]
  }
  getAllFoodsByTag(tag:string):food[]{
    return(tag=="All")?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAll():food[]{
  return[
    {
      id:1,
      name:'Pasta',
      price:100,
      fav:false,
      origins:['itely','egypt','japan'],
      stars:4.5,
      cooktime:'16-20',
    imgurl: '/food-project/docs/assets/images/food1.jpg',
    tags:['Pasta', 'lunch']
    },
    {
      id:2,
      name:'pizza seafood',
      price:190,
      fav:true,
      origins:['Egypt'],
      stars:4.5,
      cooktime:'5-10',
    imgurl:'docs/assets/images/f2).jpg',
    tags:['Fast food','Pizza']
    },
    {
      id:3,
      name:'Pizza pepperoni',
      price:500,
      fav:false,
      origins:['Japan'],
      stars:4.5,
      cooktime:'20-30',
    imgurl:'/assets/images/f (3).jpg',
    tags:['Fast food', 'lunch','Pizza']
    },
    {
      id:4,
      name:' Meat',
      price:290,
      fav:true,
      origins:['itely'],
      stars:5,
      cooktime:'16-20',
    imgurl:'/assets/images/meat 4.jpg',
    tags:['Fast food', 'Meat']
    },
    {
      id:5,
      name:'pizza margherita',
      price:99,
      fav:true,
      origins:['itely'],
      stars:3.5,
      cooktime:'16-20',
    imgurl:'/assets/images/f4.jpg',
    tags:['Fast food','Pizza', 'lunch'],
    },
    {
      id:6,
    name:'Fish',
    price:180,
    fav:false,
    origins:['itely'],
    stars:2.5,
    cooktime:'30-90',
    imgurl:'/assets/images/food6.jpg',
    tags:['Fish', 'lunch'],
    },
    {
      id:7,
    name:'Soup',
    price:100,
    fav:false,
    origins:['itely'],
    stars:2.5,
    cooktime:'20-30',
    imgurl:'/assets/images/food7.jpg',
    tags:[ 'Soup','lunch'],
    },
    {
      id:8,
    name:'herb barbecued Fish',
    price:280,
    fav:false,
    origins:['itely'],
    stars:2.5,
    cooktime:'60-90',
    imgurl:'/assets/images/food 8.jpg',
    tags:[ 'Fish','lunch'],
    }]}}

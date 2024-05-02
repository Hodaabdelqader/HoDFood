import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpagedetailsComponent } from './foodpagedetails/foodpagedetails.component';
import { CartpageComponent } from './cartpage/cartpage.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'Food/:id',component:FoodpagedetailsComponent},
  {path:'cart-page',component:CartpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { MainComponent } from './MyComponent/main/main.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';
import { AllUsersComponent } from './MyComponent/all-users/all-users.component';
import { AllProductsComponent } from './MyComponent/all-products/all-products.component';
import { AddProductComponent } from './MyComponent/add-product/add-product.component';
import { OrderRequestsComponent } from './MyComponent/order-requests/order-requests.component';
import { ResetPasswordComponent } from './MyComponent/reset-password/reset-password.component';
import { UserSignInComponent } from './MyComponent/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './MyComponent/user-sign-up/user-sign-up.component';
import { UserAreaComponent } from './MyComponent/user-area/user-area.component';
import { OrderComponent } from './MyComponent/order/order.component';

const routes: Routes = [
  {path:"footer", component:FooterComponent},
  {path:"signIn" , component:UserSignInComponent},
  {path:"signUp" , component:UserSignUpComponent},
  {path:"", component:MainComponent},
  {path:"order", component:OrderComponent},

  {path:"userArea", component: UserAreaComponent},
  {path:"adminArea",component:AdminAreaComponent,
    children:
    [
     {path:"allUsers",component:AllUsersComponent},
     {path:"allProducts",component:AllProductsComponent},
     {path:"addProduct",component:AddProductComponent},
     {path:"orderRequests",component:OrderRequestsComponent},
     {path:"resetPassword",component:ResetPasswordComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

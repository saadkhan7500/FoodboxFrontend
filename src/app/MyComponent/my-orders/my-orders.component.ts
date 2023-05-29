import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { PurchasedServiceService } from 'src/app/MyServices/purchased-service.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  purchased: any;
  user:any;
  productID: any;
  constructor(private service: PurchasedServiceService, private userService: UserService, private productService: ProductServiceService){}

  ngOnInit(): void {

   this.user =  sessionStorage.getItem("user");
   this.user = JSON.parse(this.user);
   this.service.getPurchasedByUser(this.user.email).subscribe(response=>
       {
         console.log(response);
         this.purchased=response;
       },
       error=>
       {

       }
       );
  }
  productDetail(productId:any)
  {
    this.productService.getProductById(productId).subscribe(
      Response=>{
        this.productID = JSON.stringify(Response);
      },
      error=>{

      }
    )
    console.log("hello");
  }

}

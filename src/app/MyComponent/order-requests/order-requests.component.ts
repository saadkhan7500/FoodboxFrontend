import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { PurchasedService } from 'src/app/MyServices/purchased.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit
{

  purchased:any;
  productID:any;
  userEmail:any;
  constructor(private service: PurchasedService, private userService: UserService, private productService: ProductServiceService ){}

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


  userDetail(userEmail:any)
  {
    this.userService.getUserbyEmail(userEmail).subscribe(
      Response=>{
        this.userEmail = JSON.stringify(Response);
      },
      error=>{

      }
    )

    console.log("hello");
  }

  users:any={

  };

 ngOnInit(): void {
     this.service.getAllPurchased().subscribe(response=>
       {
         console.log(response);
         this.purchased=response;
       },
       error=>
       {

       }
       );
 }

}

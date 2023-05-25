import { Component, OnInit } from '@angular/core';
import { PurchasedServiceService } from 'src/app/MyServices/purchased-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  flag:boolean = false;
  product:any;
  user:any;
  purchased:any={
    productId:0,
    userEmail:"",
  }

  showWelcomeContent:boolean=false;
  constructor(private purchase:PurchasedServiceService)
  {

  }
  ngOnInit(): void {

    //getting product from session
      let productTemp = sessionStorage.getItem("product") as string;
      this.product=JSON.parse(productTemp);




    //getting user from session
    let userTemp = sessionStorage.getItem("user") as string;
    this.user = JSON.parse(userTemp);

    //creating purchased JSON  to store in Purchased Table
    this.purchased = {
      productId: this.product.id,
      userEmail: this.user.email,
    };

  }

  placeOrder()
  {
    this.flag = true;
    console.log(this.purchased);
    this.purchase.addPurchased(this.purchased).subscribe(response=>
      {
        this.flag = false;
         console.log(response);
         this.showWelcomeContent=true;

      },
      error=>{
      }
      );

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { Service2Service } from 'src/app/MyServices/service2.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent {
  flag: boolean = true;
  products :any={};
  product: any;
  user:any={
   email:"",
   name:"",
   dob:"",
   gender:"",
   pno:"",
   password:""

  };

  constructor(private productService: ProductServiceService, private route: ActivatedRoute, public service2: Service2Service, private router: Router){

  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user);
    console.log(this.user);
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    },
      error => {

      })
  }

  getProductDetails(product:any)
  {
     this.product = JSON.stringify(product);
     console.log("inside getProductDetails"+this.product);
     sessionStorage.setItem("product",this.product);
     this.router.navigate(
      ['/order'],
    );
  }

}

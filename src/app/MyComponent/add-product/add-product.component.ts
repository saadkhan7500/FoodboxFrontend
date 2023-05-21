import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  product:any={
   name:"",
   kcal:"",
   category :"",
   price:"",
   quantity:"",
   discount:"",
   imgname:"",
   status:"",
  }
  ngOnInit(): void {
      
  }

  constructor(private productService:ProductServiceService){}

  addProduct()
  {
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(
      response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}

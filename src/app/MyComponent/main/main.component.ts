import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  product: any;
  user: any;
  flag: boolean = true;
  showSingIn: boolean = false;
  showSignUp: boolean = false;

  products: any =
    {

    };
  constructor(private productService: ProductServiceService, private router: Router, private userService: UserService) { }
  ngOnInit(): void {

    let userTemp = sessionStorage.getItem('user') as string;
    this.user = JSON.parse(userTemp);
    console.log(this.user);

    this.productService.getProducts().subscribe(response => {
      this.products = response;
    },
      error => {

      })
  }

  breakdown(product: any) {
    this.flag = false;
    console.log(product);
    this.product = product;
    window.scroll(0, 0);
  }

  breakdownOff() {
    this.flag = true;
  }
  order() {
    if (this.user != null) {
      const product = JSON.stringify(this.product);
      sessionStorage.setItem("product", product);
      this.router.navigate(
        ['/order'],
      );
    }
    else {
      console.log("inside else condition");
      this.showSingIn = true;
    }
  }


  //sign in method starts here
  data = {
    email: "",
    password: "",
  }
  SignIn() {

    const apiUrl = "http://localhost:1111/checkUser"

    this.userService.SignIn(this.data, apiUrl).subscribe(
      response => {
        const user = JSON.stringify(response);
        sessionStorage.setItem('user', user);
        this.router.navigate(
          ['/order'],
        );
      },
      error => {
        console.log(error);
      }
    );

  }
  // signIn method ends here



  // signUp method starts here
  userData = {
    email: "",
    name: "",
    dob: "",
    gender: "",
    pno: "",
    password: "",
    userAddress:
    {
      address: "",
      zipCode: "",
      city: "",
      state: "",
      country: ""
    }
  }

  addUser()
  {
    console.log(this.userData)
    this.userService.addUser(this.userData).subscribe(
      response=>
      {
        console.log(response);
        const user = JSON.stringify(response);
        console.log(user);
        sessionStorage.setItem('user', user);
        this.router.navigate(
          ['/order'],
        );
      },
      error=>
      {
        console.log(error);
      }
    )
  }
  // signUp method ends here


  //search method starts here
  searchProduct:any;
  search()
  {
    console.log("inside search function");
    console.log(this.searchProduct);
    this.productService.getNameOrCategory(this.searchProduct).subscribe(
      response=>{
        this.products = response;
      },
      error=>
      {

      }
    )
  }

   //search method ends here
}

import { Component, OnInit} from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { Service2Service } from 'src/app/MyServices/service2.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:any;
  showResetForm=false;
 
  searchProduct:any;
  searchResult:any;

  constructor(public service2: Service2Service, private productService:ProductServiceService){
    
  }

  signOut()
  {
    sessionStorage.removeItem('user');
    this.service2.saveState("main");
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user") as string;
    this.user=JSON.parse(this.user);
    
  }


  search()
  {
    console.log("inside search function");
    console.log(this.searchProduct);
    this.productService.getNameOrCategory(this.searchProduct).subscribe(
      response=>{
         this.service2.searchResponse=response;
         this.service2.searchResponseCon=true;
      },
      error=>
      {

      }
    )
  }

}

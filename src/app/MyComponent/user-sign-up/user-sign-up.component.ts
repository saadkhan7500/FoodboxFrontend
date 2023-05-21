import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  showmsg:any=false;
  flag:boolean = false;
  data={
    email:"",
    name:"",
    dob:"",
    gender:"",
    pno:"",
    password:"",
    userAddress:
   {
       address:"",
       zipCode:"",
       city:"",
       state:"",
       country:""
   }


  }

ngOnInit(): void {

}

constructor(private user:UserService){}

  addUser()
  {
    this.flag=true;
    console.log(this.data)
    this.user.addUser(this.data).subscribe(
      response=>
      {
        console.log(response);
        this.flag=false;
        this.showmsg = true;
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}

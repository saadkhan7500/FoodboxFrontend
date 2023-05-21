import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private user: UserService ){}
  admin: any =
    {
      email:"",
      password: ""
    };
  ngOnInit(): void {
    this.admin = sessionStorage.getItem("admin")as string;
    this.admin == JSON.parse(this.admin);
    console.log(this.admin);
  }
  resetPassword() {
    console.log(this.admin);
  }
}

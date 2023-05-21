import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { Service2Service } from 'src/app/MyServices/service2.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  data = {
    email: "",
    password: "",
  }

  ngOnInit(): void {

  }

  constructor(private user: UserService, private nav: NavBarComponent, private router: Router,private service2:Service2Service) { }

  getApiUrl(username: string) {
    const [, domain] = username.split('@');
    if (domain === 'admin.com') {
      return 'http://localhost:1111/checkAdmin';
    } else {
      return 'http://localhost:1111/checkUser';
    }
  }

  responseData: any = {
    email: "",
    name: "",
    dob: "",
    gender: "",
    pno: "",
    password: ""

  };

  SignIn() {

    const apiUrl = this.getApiUrl(this.data.email);

    this.user.SignIn(this.data, apiUrl).subscribe(
      response => {
        this.responseData = response;
        console.log(this.responseData.email);
        const [, domain] = this.responseData.email.split('@');

        if (domain === 'admin.com') {
          this.service2.saveState("admin");
          const user = JSON.stringify(response);
          sessionStorage.setItem('admin', user);
          this.router.navigate(
            ['/adminArea'],
          );
        }
        else {
          this.service2.saveState("user");
          const user = JSON.stringify(response);
          sessionStorage.setItem('user', user);
          this.router.navigate(
            ['/userArea'],
          );
        }


      },
      error => {
        console.log(error);
      }
    )

  }
}

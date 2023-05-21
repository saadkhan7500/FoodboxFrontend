import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any={
   
   };
 
  constructor(private service:UserService)
  {

  }
  ngOnInit(): void {
      this.service.getAllUSers().subscribe(response=>
        {
          console.log(response);
          this.users=response;
        },
        error=>
        {

        }
        );
  }
}

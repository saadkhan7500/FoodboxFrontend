import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service2Service } from 'src/app/MyServices/service2.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent {

  admin:any={
    email:"",
    password:""
  }
  constructor(private route: ActivatedRoute, public serve: Service2Service){
    
  }

  ngOnInit(): void {

    this.admin = this.route.snapshot.queryParamMap.get('user');
    this.admin = JSON.parse(this.admin);
  }

}

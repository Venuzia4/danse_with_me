
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!:User;
  id!:string;

  constructor(private userservice:UserService,private route: ActivatedRoute,) {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      return this.userservice.getUser(<string>params.get('id')).subscribe((response)=>{
        console.log(response)
        this.user=response;
      })

    })
   }

  ngOnInit(): void {


  }
}

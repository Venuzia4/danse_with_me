import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Dance } from '../_models/dance';
import { DanceService } from '../_services/dance.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dance!: Dance;
  user!:User;
  id!:string;

  constructor(private userservice:UserService,private route: ActivatedRoute, private danseService: DanceService) {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      return this.userservice.getUser(<string>params.get('id')).subscribe((response)=>{
        console.log(response)
        this.user=response;
      })

    });

   }

  ngOnInit(): void {

  }
}

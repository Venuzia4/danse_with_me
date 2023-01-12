import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileId!: string;
  users!:User[];
  user!: User;
  id!:number;

  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((
      (result:User[])=>{
        console.log(result);
        this.users=result;
      }
    ));
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users!:User[];
  id!:number;

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((
      (result:User[])=>{
        console.log(result);
        this.users=result;

      }
    ))

  }

}

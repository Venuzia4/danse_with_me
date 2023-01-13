import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Dance } from '../_models/dance';
import { User } from '../_models/user';
import { DanceService } from '../_services/dance.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {

  public selectedGender!: string;
  public listProfileId!: string;
  public dance!: Dance;
  public users!: User[];
  public dances!: Dance[];
  public safeUrl!: SafeUrl;
  public user!: User;

  constructor(
    private route: ActivatedRoute,
    private danseService: DanceService,
    private userService: UserService,
    private router: Router) { }


  gotToProfileId(id: string) {
    this.router.navigate([`/profile/${id}`])
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = <string>params.get('id');
      this.userService.getUsersByDanceId(id).subscribe(user => {
        this.users = user ;
      })
      this.danseService.getDance(id).subscribe((dance: Dance) => {
          this.dance = dance;
      });
  });
  this.userService.getUsersByDanceAndGender(this.dance.name, this.selectedGender).subscribe((users: User[]) => {
      this.users = users;
  });
}

onGenderChange(gender: string) {
  this.selectedGender = gender;
  this.userService.getUsersByDanceAndGender(this.dance.name, this.selectedGender).subscribe((users: User[]) => {
      this.users = users;
  });
}

allGender(id: string) {
    this.userService.getUsersByDanceId(id).subscribe(users => {
      console.log(users);
      this.users = users;
  });
  }
}



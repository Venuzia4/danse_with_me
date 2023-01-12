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
			 this.listProfileId = <string> params.get('id');
       this.danseService.getDance(this.listProfileId).subscribe((dance: Dance) => {
				this.dance = dance;
        console.log(dance);
       });
      }
    );
    this.userService.getUsersByDanceId(this.listProfileId).subscribe(users => {
      this.users = users;
      console.log(users);
    });
    this.danseService.getDances().subscribe(dance => {
      this.dances = dance;
    });

}
}

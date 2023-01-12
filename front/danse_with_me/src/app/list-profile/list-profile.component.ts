
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  users!:User[];
  dance!:Dance;
  name!:string;
  selectedDanseName='';



  constructor(private userService:UserService,private router: Router,
		private route: ActivatedRoute,private danceService:DanceService) {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        return this.danceService.getDance(<string>params.get('id')).subscribe((response)=>{
          console.log(response)
          this.dance=response;
        })

      })
     }






  ngOnInit(): void {


  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Dance } from '../_models/dance';
import { DanceService } from '../_services/dance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: User[];
  dances!:Dance[];
  id!:string;
  public searchForm!:FormGroup;


  autoPlay = false;
  intervalId!: any;
  currentIndex: number = 0;

  items = [
    { label: 'SALSA', imageUrl: '../../assets/65890971.png' },
    { label: 'BACHATA', imageUrl: '../../assets/65891002.png' },
    { label: 'KIZOMBA', imageUrl: '../../assets/65899291.png' },

  ];



  constructor(private userService: UserService,private router: Router,private formBuilder:FormBuilder,private danseService:DanceService
		) { }


  startAutoPlay() {
    this.intervalId = setInterval(() => this.scrollRight(), 3000);
  }

  toggleAutoPlay() {
    this.autoPlay = !this.autoPlay;
    if (this.autoPlay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.startAutoPlay();

    this.userService.getUsers().subscribe((
      (result: User[]) => {
        console.log(result);
        this.users = result;

      }
    ))

    this.danseService.getDances().subscribe((
      (result: Dance[]) => {
        console.log(result);
        this.dances = result;


      }
    ))


     this.searchForm=this.formBuilder.group({

       id:['',Validators.required],

     });

  }

   onSearchUsers(id:string){
    this.searchForm.getRawValue;
   this.router.navigate(['/list-profile',id])

    console.log(this.searchForm.value)
   }

  getUser(id: string) {
		this.router.navigate(['/profil',id]);
	}

   get name() {
	 	return this.searchForm.get('name');
	}

  get danceId() {
		return this.searchForm.get('id');
	}

  resetAutoPlay() {
    this.currentIndex = 0;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  scrollRight() {
    if (this.currentIndex < this.users.length - 5) {
      this.currentIndex++;
    } else {
      this.resetAutoPlay();
    }
  }

}



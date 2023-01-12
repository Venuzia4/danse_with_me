import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Dance } from '../_models/dance';
import { DanceService } from '../_services/dance.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: User[];
  public searchForm!:FormGroup;
  public autoPlay = false;
  public intervalId!: any;
  public currentIndex: number = 0;
  public dances!: Dance[];
  public id!: string;


  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder:FormBuilder,
    private danseService:DanceService
		) { }



  ngOnInit(): void {
    this.danseService.getDances().subscribe(dance => {
      this.dances = dance

    });
    this.startAutoPlay();
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    })
  };

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


  getUser(id: string) {
		this.router.navigate(['/profil',id]);
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

  goToListProfil(id: string){
    this.router.navigate([`/list-profile/${id}`]);
  }

  gotToProfileId(id: string) {
    this.userService.getUsersByDanceId(id).subscribe(users => {
      this.users = users;
      this.router.navigate([`/list-profile/${id}`]);
      console.log(users);

  });

  }

  goToRegister(): void {
    this.router.navigate(['/register'])
  }

  goToLogin(): void {
    this.router.navigate(['/login'])
  }
}


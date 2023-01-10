import { Component, OnInit } from '@angular/core';
import { Dance } from '../_models/dance';
import { User } from '../_models/user';
import { DanceService } from '../_services/dance.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users!: User[];
  public autoPlay = false;
  public intervalId!: any;
  public currentIndex: number = 0;
  public dances!: Dance[];

  constructor(private danceService: DanceService, private userService: UserService) { }

  ngOnInit(): void {
    this.danceService.getDances().subscribe(dance => {
      this.dances = dance
    });
    this.startAutoPlay();
    this.userService.getUsers().subscribe(user => {
      this.users = user
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

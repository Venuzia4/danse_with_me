import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
      { label: 'Mot 1', imageUrl: '../../assets/lightyear-frontier.jpg' },
      { label: 'Mot 2', imageUrl: '../../assets/taipei-101-romain-trystram.jpg' },
      { label: 'Mot 3', imageUrl: '../../assets/the_tree_shelter_by_ellysiumn.jpg' },
      { label: 'Mot 4', imageUrl: '../../assets/zelda-botw-marmastry.jpg' }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

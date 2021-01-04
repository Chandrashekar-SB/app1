import { Component, OnInit } from '@angular/core';
import { Leaders } from '../shared/leader'
import { LEADERS } from '../shared/leaders'
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Leaders: Leaders[];
  constructor( private leaderservice : LeaderService) { }

  ngOnInit(): void {
    this.Leaders = this.leaderservice.getLeaders();
  }

}

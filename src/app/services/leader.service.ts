import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leader'
import { LEADERS } from '../shared/leaders'


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leaders[] {
    return LEADERS;
  }

  getLeader(id: string):Leaders  {
    return LEADERS.filter((Leaders) => (Leaders.id === id))[0];
  }

  getFeaturedLeaders(): Leaders {
    return LEADERS.filter((Leaders) => Leaders.featured)[0];
  }
}

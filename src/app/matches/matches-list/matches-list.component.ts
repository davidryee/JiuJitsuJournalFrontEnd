import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../match.model';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  public matches: Match[] = [];
  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
    this.getMatches()
  }

  private async getMatches() : Promise<void> {
    await this.matchService.retrieveMatches().subscribe((results) => {
      this.matches = results
    })
  }  
}

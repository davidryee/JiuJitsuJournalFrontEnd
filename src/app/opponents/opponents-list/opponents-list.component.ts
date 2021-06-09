import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opponent } from '../opponent.model';
import { OpponentService } from '../opponent.service';

@Component({
  selector: 'app-opponents-list',
  templateUrl: './opponents-list.component.html',
  styleUrls: ['./opponents-list.component.css']
})
export class OpponentsListComponent implements OnInit {

  public opponents: Opponent[] = [];
  constructor(private opponentService: OpponentService, private router: Router) { }

  ngOnInit(): void {
    this.getOpponents();
  }

  public navigateToCreateNewOpponent(): void {
    this.router.navigate(['/createOpponent'])
  }

  private async getOpponents() : Promise<void> {
    await this.opponentService.retrieveOpponents().subscribe((results) => {
      this.opponents = results
    })
  }

}

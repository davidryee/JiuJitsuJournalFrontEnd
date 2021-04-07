import { Component, OnInit } from '@angular/core';
import { Opponent } from '../opponent.model';
import { OpponentService } from '../opponent.service';

@Component({
  selector: 'app-opponents-screen',
  templateUrl: './opponents-list.component.html',
  styleUrls: ['./opponents-list.component.css']
})
export class OpponentsListComponent implements OnInit {

  public opponents: Opponent[] = [];
  constructor(private opponentService: OpponentService) { }

  ngOnInit(): void {
    this.getOpponents();
  }

  private async getOpponents() : Promise<void> {
    await this.opponentService.retrieveOpponents().subscribe((results) => {
      this.opponents = results
    })
  }

}

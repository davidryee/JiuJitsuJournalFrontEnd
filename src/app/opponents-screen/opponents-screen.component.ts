import { Component, OnInit } from '@angular/core';
import { Opponent } from './opponent.model';
import { OpponentService } from './opponent.service';

@Component({
  selector: 'app-opponents-screen',
  templateUrl: './opponents-screen.component.html',
  styleUrls: ['./opponents-screen.component.css']
})
export class OpponentsScreenComponent implements OnInit {

  constructor(private opponentService: OpponentService) { }

  ngOnInit(): void {
    this.getOpponents();
  }

  private async getOpponents() : Promise<void> {
    await this.opponentService.retrieveOpponents().then(res => {
      console.log("opponents: ", res);
    });
  }

}

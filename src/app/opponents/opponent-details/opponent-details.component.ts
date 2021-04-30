import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeltRankEnum, BeltRankToLabelMapping, LabelToBeltRankMapping, Opponent } from '../opponent.model';
import { OpponentService } from '../opponent.service';
import { from } from 'rxjs';

@Component({
    selector: 'app-opponent-details',
    templateUrl: './opponent-details.component.html',
    styleUrls: ['./opponent-details.component.css']
})
export class OpponentDetailsComponent implements OnInit {
    public opponent: Opponent = null;
    beltRankToLabelMapping = BeltRankToLabelMapping;
    labelToBeltRankMapping = LabelToBeltRankMapping;
    beltRanks = Object.values(BeltRankEnum).filter(f => !isNaN(Number(f)))

    constructor(private opponentService: OpponentService,
        private route: ActivatedRoute) { 
        }

    ngOnInit(): void {
        this.getOpponentById(this.route.snapshot.paramMap.get('id'));
    }

    private async getOpponentById(id) : Promise<void>{
        await this.opponentService.retrieveOpponentById(id).subscribe((result) => {
            this.opponent = result
            this.opponent.beltRank = LabelToBeltRankMapping[result.beltRank]
        })
    }

    public async updateOpponent() :Promise<void>{   
        console.log("this.opponent is; ", this.opponent)
        var updatedOpponent = this.opponent
        await this.opponentService.updateOpponent(this.opponent.id, updatedOpponent).subscribe(data => this.opponent = data)
    }
    
}
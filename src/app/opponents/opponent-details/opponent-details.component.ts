import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opponent } from '../opponent.model';
import { OpponentService } from '../opponent.service';

@Component({
    selector: 'app-opponent-details',
    templateUrl: './opponent-details.component.html',
    styleUrls: ['./opponent-details.component.css']
})
export class OpponentDetailsComponent implements OnInit {
    public opponent: Opponent = null;
    constructor(private opponentService: OpponentService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getOpponentById(this.route.snapshot.paramMap.get('id'));
    }

    private async getOpponentById(id) : Promise<void>{
        await this.opponentService.retrieveOpponentById(id).subscribe((result) => {
            console.log(result)
            this.opponent = result
        })
    }
    
}
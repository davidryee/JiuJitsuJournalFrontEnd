import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeltRankEnum, BeltRankToLabelMapping, LabelToBeltRankMapping, Opponent } from '../opponent.model';
import { OpponentService } from '../opponent.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ModalConfig } from 'src/app/modal/modal.config';

@Component({
    selector: 'app-opponent-details',
    templateUrl: './opponent-details.component.html',
    styleUrls: ['./opponent-details.component.css']
})
export class OpponentDetailsComponent implements OnInit {
    public opponent: Opponent = null;
    public disablePageFlag: boolean = null
    modalConfig: ModalConfig = {
        modalTitle: "Opponents"
    };
    beltRankToLabelMapping = BeltRankToLabelMapping;
    labelToBeltRankMapping = LabelToBeltRankMapping;
    beltRanks = Object.values(BeltRankEnum).filter(f => !isNaN(Number(f)))

    @ViewChild('modal') private modalComponent: ModalComponent

    closeResult: string;


    constructor(private opponentService: OpponentService,
        private route: ActivatedRoute) { 
        }

    ngOnInit(): void {
        this.getOpponentById(this.route.snapshot.paramMap.get('id'));
        this.modalConfig.closeButtonLabel = "Close"
    }

    public async updateOpponent() :Promise<void>{   
        var updatedOpponent = this.opponent
        await this.opponentService.updateOpponent(this.opponent.id, updatedOpponent).subscribe(data => 
            {
                this.opponent = data;
                this.opponent.beltRank = this.labelToBeltRankMapping[data.beltRank]
                this.modalConfig.modalTitle = "Success!"
                this.modalConfig.content = "Opponent Updated!"
                this.openModal()
            }, 
            error => 
            {
                this.modalConfig.modalTitle = "Error!"
                this.modalConfig.content = "Opponent NOT Updated!"
                this.openModal()
            })
    }

    public async deleteOpponent() : Promise<void> {
        await this.opponentService.deleteOpponent(this.opponent.id).subscribe(success => 
            {
                this.modalConfig.modalTitle = "Success!"
                this.modalConfig.content = "Opponent Deleted!"
                this.disablePageFlag = true
                this.openModal()
            },
            error =>
            {
                this.modalConfig.modalTitle = "Error!"
                this.modalConfig.content = "Opponent NOT Deleted!"
                this.disablePageFlag = true
                this.openModal()
            })
    }

    private async getOpponentById(id) : Promise<void>{
        await this.opponentService.retrieveOpponentById(id).subscribe((result) => {
            this.opponent = result
            this.opponent.beltRank = LabelToBeltRankMapping[result.beltRank]
        })
    }
    async openModal() {
        return await this.modalComponent.open()
      }
}
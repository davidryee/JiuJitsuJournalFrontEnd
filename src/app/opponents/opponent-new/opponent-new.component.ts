import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalComponent } from "src/app/modal/modal.component";
import { ModalConfig } from "src/app/modal/modal.config";
import { Opponent, BeltRankToLabelMapping, LabelToBeltRankMapping, BeltRankEnum } from "../opponent.model";
import { OpponentService } from "../opponent.service";

@Component({
    selector: 'app-opponent-new',
    templateUrl: './opponent-new.component.html',
    styleUrls: ['./opponent-new.component.css']
})
export class OpponentNewComponent implements OnInit {
    public opponent: Opponent = {
        beltRank: null,
        heightInInches: null,
        name: '',
        weightInLbs: null,
        id: null
    };
    public disablePageFlag: boolean = null
    modalConfig: ModalConfig = {
        modalTitle: "Opponents"
    };
    beltRankToLabelMapping = BeltRankToLabelMapping;
    labelToBeltRankMapping = LabelToBeltRankMapping;
    beltRanks = Object.values(BeltRankEnum).filter(f => !isNaN(Number(f)))

    @ViewChild('modal') private modalComponent: ModalComponent

    closeResult: string;

    constructor(private opponentService: OpponentService) {        
    }

    ngOnInit(): void {
        this.modalConfig.closeButtonLabel = "Close"
    }

    public async createOpponent() : Promise<void> {        
        await this.opponentService.createOpponent(this.opponent).subscribe(success =>
            {
                this.modalConfig.modalTitle = "Success!"
                this.modalConfig.content = "Opponent Created!"
                this.disablePageFlag = true
                this.openModal()
            },
            error => 
            {
                this.modalConfig.modalTitle = "Error!"
                this.modalConfig.content = "Opponent NOT Created"
                this.openModal()
            })
    }

    async openModal() {
        return await this.modalComponent.open()
      }

}

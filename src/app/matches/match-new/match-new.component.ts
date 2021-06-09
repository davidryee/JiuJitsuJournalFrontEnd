import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalComponent } from "src/app/modal/modal.component";
import { ModalConfig } from "src/app/modal/modal.config";
import { Opponent } from "src/app/opponents/opponent.model";
import { OpponentService } from "src/app/opponents/opponent.service";
import { Match } from "../match.model";
import { MatchRequest } from "../match.request";
import { MatchService } from "../match.service";

@Component({
    selector: 'app-match-new',
    templateUrl: './match-new.component.html',
    styleUrls: ['./match-new.component.css']
})
export class MatchNewComponent implements OnInit {
    public matchRequest: MatchRequest = 
    {
        description: null,
        matchDate: null,
        opponentId: null
    }
    public opponents: Opponent[]
    public disablePageFlag: boolean = null
    modalConfig: ModalConfig = {
        modalTitle: "Matches"
    };

    @ViewChild('modal') private modalComponent: ModalComponent

    closeResult: string;

    constructor(private matchService: MatchService, private opponentService: OpponentService) {

    }

    ngOnInit(): void {
        this.modalConfig.closeButtonLabel = "Close"
        this.getOpponents()
    }

    public async createMatch() : Promise<void> {

        await this.matchService.createMatch(this.matchRequest).subscribe(success => 
            {
                this.modalConfig.modalTitle = "Success!"
                this.modalConfig.content = "Match Created!"
                this.disablePageFlag = true
                this.openModal()
            },
            error => 
            {
                this.modalConfig.modalTitle = "Error!"
                this.modalConfig.content = "Match NOT Created!"
                this.openModal()
            })
    }

    private async openModal() {
        return await this.modalComponent.open()
    }

    private async getOpponents() : Promise<void> {
        await this.opponentService.retrieveOpponents().subscribe( results => {
            this.opponents = results
        })
    }
}
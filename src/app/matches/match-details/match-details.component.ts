import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { error } from "selenium-webdriver";
import { ModalComponent } from "src/app/modal/modal.component";
import { ModalConfig } from "src/app/modal/modal.config";
import { Match } from "../match.model";
import { MatchRequest } from "../match.request";
import { MatchService } from "../match.service";

@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
    public match: Match = null
    public disablePageFlag: boolean = null
    modalConfig: ModalConfig = {
        modalTitle: "Matches"
    }

    @ViewChild('modal') private modalComponent: ModalComponent

    closeResult: string;

    constructor(private matchService: MatchService,
        private route: ActivatedRoute){}

    ngOnInit(): void {
        this.getMatchById(this.route.snapshot.paramMap.get('id'))
        this.modalConfig.closeButtonLabel = "Close"
    }

    public async updateMatch() : Promise<void> {
        var matchRequest: MatchRequest =
        {
            description: this.match.description,
            matchDate: this.match.matchDate,
            opponentId: this.match.opponent.id
        } 
        await this.matchService.updateMatch(this.match.id, matchRequest).subscribe(data => {
            this.match = data
            this.modalConfig.modalTitle = "Success!"
            this.modalConfig.content = "Match Updated!"
            this.openModal()
        }, 
        error => 
        {
            this.modalConfig.modalTitle = "Error!"
            this.modalConfig.content = "Match NOT Updated"
            this.openModal()
        })

    }

    public async deleteMatch() : Promise<void> {
        await this.matchService.deleteMatch(this.match.id).subscribe(success => 
            {
                this.modalConfig.modalTitle = "Success!"
                this.modalConfig.content = "Match Deleted!"
                this.disablePageFlag = true
                this.openModal()
            },
            error => 
            {
                this.modalConfig.modalTitle = "Error!"
                this.modalConfig.content = "Match NOT Deleted!"
                this.disablePageFlag = true
                this.openModal()
            })
    }

    private async getMatchById(id) : Promise<void> {
        await this.matchService.retrieveMatchById(id).subscribe((result) => {
            this.match = result
        })
    }
    async openModal() {
        return await this.modalComponent.open()
    }

}
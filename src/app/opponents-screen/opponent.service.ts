import { Injectable } from "@angular/core";
import { EnvironmentService } from "../environment/environment.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Opponent } from "./opponent.model";

@Injectable({
    providedIn: 'root'
  })
export class OpponentService {
    constructor(
        private env: EnvironmentService,
        private httpClient: HttpClient
    )
    {
    }

    public async retrieveOpponents(): Promise<Opponent[]> {
        const result = this.httpClient.get<Opponent[]>(this.env.getUrl() + "opponents").toPromise()
            .catch();
        return result;
    }
}
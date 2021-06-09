import { Injectable } from "@angular/core";
import { EnvironmentService } from "../environment/environment.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Opponent } from "./opponent.model";
import { Observable } from "rxjs";

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

    public createOpponent(opponentRequest: Opponent) : Observable<Opponent> {
        return this.httpClient.post<Opponent>(this.env.getUrl() + `opponents`, opponentRequest);
    }

    public retrieveOpponents(): Observable<Opponent[]> {
        return this.httpClient.get<Opponent[]>(this.env.getUrl() + `opponents`);
    }

    public retrieveOpponentById(id): Observable<Opponent> {
        return this.httpClient.get<Opponent>(this.env.getUrl() + `opponents/${id}`)
    }

    public deleteOpponent(id) : Observable<void> {
        return this.httpClient.delete<void>(this.env.getUrl() + `opponents/${id}`)
    }

    public updateOpponent(id, payload) : Observable<Opponent> {
        return this.httpClient.put<Opponent>(this.env.getUrl() + `opponents/${id}`, payload)
    }
}
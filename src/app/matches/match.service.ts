import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnvironmentService } from "../environment/environment.service";
import { Match } from "./match.model";

@Injectable({
    providedIn: 'root'
})

export class MatchService {
    constructor(
        private env: EnvironmentService,
        private httpClient: HttpClient
    ){}

    public retrieveMatches(): Observable<Match[]> {
        return this.httpClient.get<Match[]>(this.env.getUrl() + `matches`)
    }

    public retrieveMatchById(id): Observable<Match> {
        return this.httpClient.get<Match>(this.env.getUrl() + `matches/${id}`)
    }

    public deleteMatch(id) : Observable<void> {
        return this.httpClient.delete<void>(this.env.getUrl() + `matches/${id}`)
    }

    public updateMatch(id, payload) : Observable<Match> {
        return this.httpClient.put<Match>(this.env.getUrl() + `matches/${id}`, payload)
    }
}
import {
    Injectable,
} from '@angular/core'

@Injectable({
    providedIn: 'root'
  })
export class EnvironmentService {
    public getUrl(): string{
        return "http://localhost:8080/"
    }
}
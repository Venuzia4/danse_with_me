import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dance } from '../_models/dance';

@Injectable({
  providedIn: 'root'
})
export class DanceService {

  readonly ENDPOINT_DANCE = '/dance/';
  readonly ENDPOINT_DANCES = '/dances';



  constructor(private httpClient:HttpClient) { }
  getDances(): Observable<Dance[]> {
		return this.httpClient.get<Dance[]>(environment.urlAPI + this.ENDPOINT_DANCES);
	}


  getDance(id: string): Observable<Dance> {
		return this.httpClient.get<Dance>(environment.urlAPI + this.ENDPOINT_DANCE + id);
	}


}

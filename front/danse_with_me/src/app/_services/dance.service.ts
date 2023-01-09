import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dance } from '../_models/dance';

@Injectable({
  providedIn: 'root'
})
export class DanceService {

	readonly API_URL = 'http://localhost:8080';
  readonly ENDPOINT_DANCE = '/dance';
  readonly ENDPOINT_DANCES = '/dances';



  constructor(private httpClient:HttpClient) { }
  getDances(): Observable<Dance[]> {
		return this.httpClient.get<Dance[]>(this.API_URL + this.ENDPOINT_DANCES);
	}


  getDance(id: string): Observable<Dance> {
		return this.httpClient.get<Dance>(this.API_URL+this.ENDPOINT_DANCE+ id);
	}


}

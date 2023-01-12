import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	readonly API_URL = 'http://localhost:8080';
  readonly ENDPOINT_USER = '/user/';
  readonly ENDPOINT_USERS = '/users';



  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.API_URL + this.ENDPOINT_USERS +"/all");
	}


  getUser(id:string): Observable<User> {
		return this.httpClient.get<User>(this.API_URL+this.ENDPOINT_USER + id);
	}
}

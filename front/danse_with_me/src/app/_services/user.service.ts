import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ENDPOINT_USER = '/user/';
  readonly ENDPOINT_USERS = '/users';



  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(environment.urlAPI + this.ENDPOINT_USERS +"/all");
	}

  getUser(id:string): Observable<User> {
		return this.httpClient.get<User>(environment.urlAPI+this.ENDPOINT_USER + id);

	}
}

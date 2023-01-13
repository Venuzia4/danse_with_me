import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ENDPOINT_USER = '/user/';
  readonly ENDPOINT_USERS = '/users';



  constructor(private httpClient:HttpClient, private sanitizer: DomSanitizer) { }

  public getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(environment.urlAPI + this.ENDPOINT_USERS +"/all");
	}

  getUser(id:string): Observable<User> {
		return this.httpClient.get<User>(environment.urlAPI+this.ENDPOINT_USER + id);
	}

  public createSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public getUsersByDanceId(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.urlAPI + "/dances/" + id + this.ENDPOINT_USERS);
  }

  getUsersByDanceAndGender(danceName: string, gender: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.urlAPI}/getUsersByDance?name=${danceName}&genre=${gender}`);
}
}

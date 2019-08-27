import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
//import { Observable } from 'node_modules/rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/getAllUsers';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}

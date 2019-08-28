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
    this.usersUrl = 'http://localhost:8080/users';
  }
 
  public findAll(): Observable<User[]> {
    
    return this.http.get<User[]>(`${this.usersUrl}/all`);
  }

  public save(user: User) {
    return this.http.post<User>(`${this.usersUrl}/create`, user);
  }
}

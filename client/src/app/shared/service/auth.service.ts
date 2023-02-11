import { Credentials } from './../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public fetchCurrentUser(): Observable<User> {
    return this.http.get<User>('/api/auth/currentuser');
  }

  public inscription(user: User): Observable<any> {
    return this.http.post('/api/user', user);
  }

  public connexion(credentials: Credentials): Observable<User> {
    return this.http.post<User>('/api/auth/connexion', credentials);
  }

  public logout(): Observable<any> {
    return this.http.delete('/api/auth/logout');
  }
}

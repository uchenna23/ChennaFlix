import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


interface User {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUsername: string | null = null;

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<User>(`${this.apiUrl}/create`, user, { headers });
  }

  userLogin(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/login/${user.username}/${user.password}`;
    return this.http.get<User>(url, { headers });
  }

  setLoggedInUsername(username: string): void {
    this.loggedInUsername = username;
  }
  
  getLoggedInUsername(): string | null {
    return this.loggedInUsername;
  }

  getUserAvatar(username: string): Observable<string> {
    return this.http.get<{ avatarUrl: string }>(`${this.apiUrl}/getUserAvatar/${username}`)
      .pipe(
        map(response => response.avatarUrl)
      );
  }
}

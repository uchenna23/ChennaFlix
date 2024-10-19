import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<User>(`${this.apiUrl}/create`, user, { headers});
  }

  userLogin(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.apiUrl}/login/${user.username}/${user.password}`;
    return this.http.get<User>(url, {headers});
  }
  
}

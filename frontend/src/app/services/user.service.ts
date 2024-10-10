import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<User>(`${this.apiUrl}/create`, user, { headers});
  }
}

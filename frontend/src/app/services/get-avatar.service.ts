import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAvatarService {

  private apiUrl = 'http://localhost:8080';

  private avatarUrlSubject = new BehaviorSubject<string | null>(null);
  avatarUrl$ = this.avatarUrlSubject.asObservable();

  constructor(private http: HttpClient){}

  updateAvatarUrl(newAvatarUrl: string): void {
    this.avatarUrlSubject.next(newAvatarUrl);
  }
}

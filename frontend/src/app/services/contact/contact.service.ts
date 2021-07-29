import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = 'http://localhost:3000/sendmail';
  constructor(private http : HttpClient) { }

  sendMail(user : object) {
    return this.http.post(this.url, user);
  }
}

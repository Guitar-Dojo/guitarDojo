import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) {}

  sendEmail(email: Object): Observable<any> {
    return this.http.post(environment.emailAPI + 'sendMail', email, {responseType: 'text'});

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StaffMember } from '../models/staff-member';

@Injectable({
  providedIn: 'root'
})
export class StaffMemberService {

  constructor(
    private http: HttpClient
  ) { }

  getStaffMembers() {
    return this.http.get<any>(environment.api + 'staff/getAll') as Observable<any>;
  }

  getStaffMemberById(id: string) {
    return this.http.get<StaffMember>(environment.api + 'staff/get?id=' + id) as Observable<StaffMember>;
  }
}

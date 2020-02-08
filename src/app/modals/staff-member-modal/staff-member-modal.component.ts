import { Component, OnInit, Input, Inject } from '@angular/core';
import { StaffMember } from 'src/app/models/staff-member';
import { StaffMemberService } from 'src/app/services/staff-member.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-member-modal',
  templateUrl: './staff-member-modal.component.html',
  styleUrls: ['./staff-member-modal.component.css']
})
export class StaffMemberModalComponent implements OnInit {

  @Input() name;
  id: any;
  member: StaffMember;

  staffMembers: StaffMember[] = [];

  constructor(
    private sms: StaffMemberService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
  }

  ngOnInit() {
    this.getStaffMembers();
    this.getStaffMemberById();
  }

  getStaffMembers() {
    this.sms.getStaffMembers().subscribe(members => {
      members.forEach(member => {
        this.staffMembers.push(member);
      });
    });
    return this.staffMembers;
  }

  getStaffMemberById() {
    this.sms.getStaffMemberById(this.id).subscribe(res => {
      this.member = res as StaffMember;
      console.log('staff member by id');
      console.log(this.member);
    });
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaffMember } from '../models/staff-member';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import 'jarallax';
import { StaffMemberModalComponent } from '../modals/staff-member-modal/staff-member-modal.component';
import { StaffMemberService } from '../services/staff-member.service';
import { MatDialog } from '@angular/material/dialog';
declare let jarallax: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  id: any;
  staffMembers: StaffMember[] = [];
  staffMember: StaffMember;

  constructor(

    private modalService: NgbModal,
    private memberService: StaffMemberService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getStaffMembers();
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: .2
    });
  }

  getStaffMembers() {
    this.memberService.getStaffMembers().subscribe(members => {
      members.forEach(member => {
        this.staffMembers.push(member);
      });
    });
    console.log(this.staffMembers);
    return this.staffMembers;
  }

  open(value) {
    this.id = value;
    console.log(value);
    this.memberService.getStaffMemberById(this.id).subscribe(res => {
      this.staffMember = res as StaffMember;

    });
    const dialogRef = this.dialog.open(StaffMemberModalComponent, {
      panelClass: 'staff-member-modal',
      data: {
        id: this.id
      },
      disableClose: true,
      width: '500px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(res => {

    })
  }

}

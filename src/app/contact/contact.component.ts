import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: [''],
  });


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.contactForm.value);
    const firstName = this.contactForm.controls['firstName'].value;
    const lastName = this.contactForm.controls['lastName'].value;
    const email = this.contactForm.controls['email'].value;
    const phone = this.contactForm.controls['phone'].value;
    const message = this.contactForm.controls['message'].value;

    console.log('First name: ' + firstName);
    console.log('Last name: ' + lastName);
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);
    console.log('Message: ' + message);
  }

}

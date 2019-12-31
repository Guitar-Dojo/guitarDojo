import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ContactService } from 'src/services/Contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm;
  contactForm: FormGroup;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phonePattern = '/^\(\d{3}\)\s\d{3}-\d{4}$/';

  contacts: any[];

  ngOnInit() {
    this.contactForm = this.creatForm();
  }

  constructor(
    private fb: FormBuilder,
    private cs: ContactService
  ) { }

  creatForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    const ob = {
      'firstName': this.contactForm.controls.firstName.value,
      'lastName': this.contactForm.controls.lastName.value,
      'email': this.contactForm.controls.email.value,
      'phone': this.contactForm.controls.phone.value,
      'message': this.contactForm.controls.message.value
    }
    console.log(ob);
    this.cs.createContact(ob).subscribe(contacts => {
      if (contacts) {
        this.contacts = contacts;
      }
    })
    this.clearFunction();
  }

  private clearFunction(): void {
    this.formDirective.resetForm();
    this.contactForm.reset();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  submitForm(contactForm: any) {
    if (contactForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
      console.log(this.formData);
    } else {
      // Mark all form fields as touched to trigger validation errors
      Object.keys(contactForm.controls).forEach((field) => {
        const control = contactForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  twitterIcon = 'fab fa-twitter';
  linkedInIcon = 'fab fa-linkedin';
  facebookIcon = 'fab fa-facebook';
  githubIcon = 'fab fa-github';
}

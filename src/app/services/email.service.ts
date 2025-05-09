import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';  // Import emailjs-com

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  // Send email function
  sendEmail(templateParams: any) {
    const serviceId = 'service_vn3kqwb'; // Replace with your service ID from EmailJS
    const templateId = 'template_7tcjwim'; // Replace with your template ID from EmailJS
    const userId = 'kpuE379FsxaL8_kQ9'; // Replace with your user ID from EmailJS

    // Sending the email using EmailJS
    return emailjs.send(serviceId, templateId, templateParams, userId)
      .then(response => {
        console.log('Email sent successfully:', response);
        return response;
      })
      .catch(error => {
        console.error('Email send failed:', error);
        throw error;
      });
  }
}

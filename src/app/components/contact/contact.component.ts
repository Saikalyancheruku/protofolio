import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faEnvelope, faPhone, faLocationDot,
  faCircleCheck, faCircleXmark, faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, faGithub, faTwitter, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        
        <div class="contact-container">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div class="info-item">
              <fa-icon [icon]="faLocationDot" class="info-icon"></fa-icon>
              <div>
                <h4>Location</h4>
                <p>Hyderabad</p>
              </div>
            </div>
            
            <div class="info-item">
              <fa-icon [icon]="faEnvelope" class="info-icon"></fa-icon>
              <div>
  <h4>Email</h4>
  <a href="mailto:kalyancheruku56&#64;gmail.com">kalyancheruku56&#64;gmail.com</a>
</div>


            </div>
            
            <div class="info-item">
              <fa-icon [icon]="faPhone" class="info-icon"></fa-icon>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+1917013254137">+91 7013254137</a></p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/sai-kalyan-cheruku-b72947170/" class="social-link" aria-label="LinkedIn">
                <fa-icon [icon]="faLinkedin"></fa-icon>
              </a>
              <a href="https://github.com/Saikalyancheruku" class="social-link" aria-label="GitHub">
                <fa-icon [icon]="faGithub"></fa-icon>
              </a>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-header">
                <h3>Send Me a Message</h3>
                <p>I'll get back to you as soon as possible</p>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name" 
                    [class.is-invalid]="isInvalid('name')"
                    [class.is-valid]="isValid('name')"
                  >
                  <div *ngIf="isInvalid('name')" class="error-message">
                    Please enter your name
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    [class.is-invalid]="isInvalid('email')"
                    [class.is-valid]="isValid('email')"
                  >
                  <div *ngIf="isInvalid('email')" class="error-message">
                    Please enter a valid email address
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.is-invalid]="isInvalid('subject')"
                  [class.is-valid]="isValid('subject')"
                >
                <div *ngIf="isInvalid('subject')" class="error-message">
                  Please enter a subject
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5"
                  [class.is-invalid]="isInvalid('message')"
                  [class.is-valid]="isValid('message')"
                ></textarea>
                <div *ngIf="isInvalid('message')" class="error-message">
                  Please enter your message
                </div>
              </div>
              
              <div class="form-submit">
                <button 
                  type="submit" 
                  class="submit-btn" 
                  [disabled]="contactForm.invalid || isSubmitting"
                >
                  <span *ngIf="!isSubmitting">
                    <fa-icon [icon]="faPaperPlane"></fa-icon> Send Message
                  </span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </div>
              
              <div *ngIf="submitStatus" class="submit-status" [class.success]="submitStatus === 'success'" [class.error]="submitStatus === 'error'">
                <fa-icon [icon]="submitStatus === 'success' ? faCircleCheck : faCircleXmark"></fa-icon>
                <span>{{ statusMessage }}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: var(--space-10);
      background-color: var(--bg-secondary);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    
    .contact-info {
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-700) 100%);
      color: white;
      padding: var(--space-8);
      display: flex;
      flex-direction: column;
    }
    
    .contact-info h3 {
      margin-bottom: var(--space-6);
      font-size: var(--font-size-2xl);
      color: white;
    }
    
    .contact-info > p {
      margin-bottom: var(--space-8);
      opacity: 0.9;
      line-height: 1.6;
    }
    
    .info-item {
      display: flex;
      margin-bottom: var(--space-6);
      align-items: flex-start;
    }
    
    .info-icon {
      font-size: var(--font-size-xl);
      margin-right: var(--space-4);
      margin-top: var(--space-1);
      color: var(--accent-300);
    }
    
    .info-item h4 {
      margin-bottom: var(--space-1);
      font-size: var(--font-size-base);
      color: white;
    }
    
    .info-item p {
      margin-bottom: 0;
      opacity: 0.8;
      font-size: var(--font-size-sm);
    }
    
    .info-item a {
      color: white;
      opacity: 0.8;
      transition: opacity var(--transition-fast);
    }
    
    .info-item a:hover {
      opacity: 1;
      color: var(--accent-300);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-4);
      margin-top: auto;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
    }
    
    .social-link:hover {
      background-color: white;
      color: var(--primary-600);
      transform: translateY(-3px);
    }
    
    .contact-form-container {
      padding: var(--space-8);
    }
    
    .form-header {
      margin-bottom: var(--space-6);
    }
    
    .form-header h3 {
      color: var(--text-primary);
      font-size: var(--font-size-2xl);
      margin-bottom: var(--space-2);
    }
    
    .form-header p {
      color: var(--text-secondary);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }
    
    .form-group {
      margin-bottom: var(--space-4);
      position: relative;
    }
    
    label {
      display: block;
      margin-bottom: var(--space-2);
      font-weight: 500;
      color: var(--text-primary);
    }
    
    input, textarea {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      transition: all var(--transition-fast);
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.1);
    }
    
    textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .is-invalid {
      border-color: var(--error-500) !important;
    }
    
    .is-valid {
      border-color: var(--success-500) !important;
    }
    
    .error-message {
      color: var(--error-500);
      font-size: var(--font-size-xs);
      margin-top: var(--space-1);
    }
    
    .form-submit {
      margin-top: var(--space-6);
    }
    
    .submit-btn {
      background-color: var(--primary-500);
      color: white;
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-md);
      font-weight: 500;
      font-size: var(--font-size-base);
      transition: all var(--transition-normal);
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
    }
    
    .submit-btn:hover {
      background-color: var(--primary-600);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    
    .submit-btn:disabled {
      background-color: var(--neutral-400);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    
    .submit-status {
      margin-top: var(--space-4);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--font-size-sm);
    }
    
    .submit-status.success {
      background-color: rgba(34, 197, 94, 0.1);
      color: var(--success-500);
    }
    
    .submit-status.error {
      background-color: rgba(239, 68, 68, 0.1);
      color: var(--error-500);
    }
    
    @media (max-width: 992px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
      
      .contact-info {
        padding: var(--space-6);
      }
      
      .social-links {
        margin-top: var(--space-6);
      }
    }
    
    @media (max-width: 576px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  statusMessage = '';
  
  // Font Awesome icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  faPaperPlane = faPaperPlane;
  
  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  
  isValid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.valid && (control.dirty || control.touched));
  }
  
  onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to trigger validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    
    this.emailService.sendEmail(this.contactForm.value).then(response => {
      // Set submission status and success message
      this.submitStatus = 'success';
      this.statusMessage = 'Your message has been sent successfully. I will get back to you soon!';
    }).catch(error => {
      // Handle any errors if the API call fails
      this.submitStatus = 'error';
      this.statusMessage = 'There was an issue sending your message. Please try again later.';
    }).finally(() => {
      // Reset form and stop the submission progress
      this.isSubmitting = false;
      this.contactForm.reset();
    });
  }
}

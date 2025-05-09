import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faLinkedin, faGithub, faTwitter, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-content">
          <a href="#home" class="logo">Portfolio</a>
          
          <div class="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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
        
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} Sai Kalyan Cheruku. All rights reserved. Built with 
            <fa-icon [icon]="faHeart" class="heart-icon"></fa-icon> 
            using Angular.
          </p>
        </div>
      </div>
      
      <button (click)="scrollToTop()" class="scroll-top" [class.visible]="showScrollTop">
        <fa-icon [icon]="faArrowUp"></fa-icon>
      </button>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--neutral-900);
      color: white;
      padding: var(--space-10) 0 var(--space-4);
      position: relative;
    }
    
    .footer-container {
      display: flex;
      flex-direction: column;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-6);
      margin-bottom: var(--space-10);
    }
    
    .logo {
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--primary-300);
      text-decoration: none;
    }
    
    .footer-nav {
      display: flex;
      gap: var(--space-6);
    }
    
    .footer-nav a {
      color: var(--neutral-300);
      transition: color var(--transition-fast);
    }
    
    .footer-nav a:hover {
      color: var(--primary-300);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-4);
    }
    
    .social-link {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background-color: var(--neutral-800);
      color: var(--neutral-300);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
    }
    
    .social-link:hover {
      background-color: var(--primary-500);
      color: white;
      transform: translateY(-3px);
    }
    
    .footer-bottom {
      border-top: 1px solid var(--neutral-800);
      padding-top: var(--space-4);
      text-align: center;
    }
    
    .copyright {
      color: var(--neutral-400);
      font-size: var(--font-size-sm);
    }
    
    .heart-icon {
      color: var(--error-500);
      margin: 0 var(--space-1);
      animation: pulse 1.5s infinite;
    }
    
    .scroll-top {
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background-color: var(--primary-500);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow-lg);
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-normal);
      transform: translateY(20px);
    }
    
    .scroll-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .scroll-top:hover {
      background-color: var(--primary-600);
      transform: translateY(-5px);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--space-8);
      }
      
      .footer-nav {
        order: 2;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .social-links {
        order: 3;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  showScrollTop = false;
  
  // Font Awesome icons
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faHeart = faHeart;
  faArrowUp = faArrowUp;
  
  constructor() {
    window.addEventListener('scroll', this.checkScrollPosition.bind(this));
  }
  
  checkScrollPosition() {
    this.showScrollTop = window.scrollY > 500;
  }
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
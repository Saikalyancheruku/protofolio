import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="intro">
      <div class="container">
        <div class="intro-content">
          <h1 class="animate-item">Hello, I'm <span class="highlight">Kalyan Cheruku</span></h1>
          <h2 class="profession animate-item"> Full Stack Developer</h2>
          <p class="description animate-item">Solving Real-World Problems Through Code</p>
          
          <div class="action-buttons animate-item">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      
      <a href="#about" class="scroll-down">
        <span>Scroll Down</span>
        <fa-icon [icon]="faArrowDown" class="scroll-icon"></fa-icon>
      </a>
    </section>
  `,
  styles: [`
    .intro {
      height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      background: linear-gradient(135deg, var(--primary-900) 0%, var(--secondary-900) 100%);
      color: white;
    }
    
    .intro-content {
      max-width: 800px;
      margin-top: -80px;
    }
    
    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin-bottom: var(--space-2);
      line-height: 1.1;
    }
    
    .highlight {
      color: var(--accent-500);
      position: relative;
      display: inline-block;
    }
    
    .highlight::after {
      content: '';
      position: absolute;
      bottom: 0.1em;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: var(--accent-500);
      opacity: 0.5;
      z-index: -1;
    }
    
    .profession {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      margin-bottom: var(--space-6);
      color: var(--primary-200);
      font-weight: 500;
    }
    
    .description {
      font-size: var(--font-size-lg);
      max-width: 600px;
      margin-bottom: var(--space-8);
      line-height: 1.6;
      opacity: 0.9;
    }
    
    .action-buttons {
      display: flex;
      gap: var(--space-4);
      margin-top: var(--space-8);
    }
    
    .action-buttons a {
      padding: var(--space-3) var(--space-6);
      font-size: var(--font-size-base);
      font-weight: 500;
      border-radius: var(--radius-md);
      transition: all var(--transition-normal);
    }
    
    .btn-primary {
      background-color: var(--primary-500);
      color: white;
    }
    
    .btn-primary:hover {
      background-color: var(--primary-600);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    
    .btn-outline {
      border: 2px solid white;
      color: white;
    }
    
    .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .scroll-down {
      position: absolute;
      bottom: var(--space-8);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      opacity: 0.7;
      transition: opacity var(--transition-normal);
      font-size: var(--font-size-sm);
    }
    
    .scroll-down:hover {
      opacity: 1;
      color: white;
    }
    
    .scroll-icon {
      margin-top: var(--space-2);
      animation: bounce 2s infinite;
    }
    
    .animate-item {
      opacity: 0;
      transform: translateY(20px);
      animation: slideUpFade 0.5s forwards;
    }
    
    .animate-item:nth-child(1) { animation-delay: 0.3s; }
    .animate-item:nth-child(2) { animation-delay: 0.5s; }
    .animate-item:nth-child(3) { animation-delay: 0.7s; }
    .animate-item:nth-child(4) { animation-delay: 0.9s; }
    
    @keyframes slideUpFade {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
    
    @media (max-width: 768px) {
      .intro {
        padding-top: var(--space-12);
      }
      
      .action-buttons {
        flex-direction: column;
        gap: var(--space-4);
      }
      
      .action-buttons a {
        text-align: center;
      }
    }
  `]
})
export class IntroComponent implements OnInit {
  faArrowDown = faArrowDown;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
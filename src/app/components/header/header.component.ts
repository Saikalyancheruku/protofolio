import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <header [class.scrolled]="scrolled" [class.nav-open]="isNavOpen">
      <div class="container header-container">
        <a href="#home" class="logo">Portfolio</a>
        
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <fa-icon [icon]="isNavOpen ? faXmark : faBars"></fa-icon>
        </button>
        
        <nav [class.open]="isNavOpen">
          <ul class="nav-links">
            <li><a href="#home" (click)="closeNav()">Home</a></li>
            <li><a href="#about" (click)="closeNav()">About</a></li>
            <li><a href="#projects" (click)="closeNav()">Projects</a></li>
            <li><a href="#contact" (click)="closeNav()">Contact</a></li>
          </ul>
          
          <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
            <fa-icon [icon]="isDarkMode ? faSun : faMoon"></fa-icon>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: transparent;
      transition: all var(--transition-normal);
      padding: var(--space-4) 0;
    }
    
    header.scrolled {
      background-color: var(--bg-secondary);
      box-shadow: var(--shadow-md);
      padding: var(--space-2) 0;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--primary-500);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    
    .logo:hover {
      color: var(--primary-600);
    }
    
    nav {
      display: flex;
      align-items: center;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin-right: var(--space-4);
    }
    
    .nav-links li {
      margin-left: var(--space-6);
    }
    
    .nav-links a {
      color: var(--text-primary);
      font-weight: 500;
      position: relative;
      padding-bottom: var(--space-1);
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-500);
      transition: width var(--transition-normal);
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .theme-toggle {
      background-color: transparent;
      color: var(--text-primary);
      border: none;
      cursor: pointer;
      padding: var(--space-2);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color var(--transition-fast);
    }
    
    .theme-toggle:hover {
      background-color: var(--bg-tertiary);
    }
    
    .mobile-menu-btn {
      display: none;
      background-color: transparent;
      color: var(--text-primary);
      border: none;
      cursor: pointer;
      padding: var(--space-2);
      font-size: var(--font-size-xl);
    }
    
    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: block;
        z-index: 1001;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: var(--bg-secondary);
        flex-direction: column;
        justify-content: center;
        transition: right var(--transition-normal);
        box-shadow: var(--shadow-xl);
      }
      
      nav.open {
        right: 0;
      }
      
      .nav-links {
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        margin-bottom: var(--space-6);
      }
      
      .nav-links li {
        margin: var(--space-4) 0;
      }
      
      header.nav-open {
        background-color: var(--bg-secondary);
      }
    }
  `]
})
export class HeaderComponent {
  scrolled = false;
  isNavOpen = false;
  isDarkMode = false;
  
  // FontAwesome icons
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars;
  faXmark = faXmark;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  toggleMobileMenu() {
    this.isNavOpen = !this.isNavOpen;
    document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
  }
  
  closeNav() {
    this.isNavOpen = false;
    document.body.style.overflow = '';
  }
}
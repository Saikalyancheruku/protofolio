import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCode, faServer, faMobileScreen, faDatabase, 
  faCheck,faTools
} from '@fortawesome/free-solid-svg-icons';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="about" class="section">
        <div class="container">
    <h2 class="section-title">About Me</h2>
    
    <div class="about-content">
      <div class="about-image-container">
        <div class="about-image">
          <img src="assets/sai_kalyan_cheruku.png" alt="Profile picture">
        </div>
      </div>
      
      <div class="about-text">
        <h3>Who I Am</h3>
        <p>
          I’m <strong>Kalyan Cheruku</strong>, a software engineer building **scalable enterprise applications** using <strong>.NET 8, Spring Boot, AWS</strong>, and **Angular**. I specialize in backend development, clean architecture, and cloud-integrated systems, delivering solutions that are secure, maintainable, and high-performing.
        </p>
        <p>
          I focus on solving complex business problems, optimizing existing systems, and turning requirements into efficient, production-ready applications. With hands-on experience across diverse industries, I bring innovation and technical excellence to every project.
        </p>
        <p>
          I am currently open to **freelance and contract opportunities**. Whether you need help modernizing legacy systems, building APIs, or integrating cloud services, I can step in and deliver results efficiently.
        </p>
        
        <div class="highlights">
          <div class="highlight-item">
            <fa-icon [icon]="faCheck" class="highlight-icon"></fa-icon>
            <div>
              <h4>2+ Years Experience</h4>
              <p>Working on enterprise-grade applications and complex backend systems</p>
            </div>
          </div>
          <div class="highlight-item">
            <fa-icon [icon]="faCheck" class="highlight-icon"></fa-icon>
            <div>
              <h4>10+ Projects Completed</h4>
              <p>Delivering solutions for diverse industries, from finance to healthcare</p>
            </div>
          </div>
          <div class="highlight-item">
            <fa-icon [icon]="faCheck" class="highlight-icon"></fa-icon>
            <div>
              <h4>Freelance Ready</h4>
              <p>Available for remote freelance projects and short-term contracts</p>
            </div>
          </div>
        </div>
        
        <a href="assets/sai_kalyan_resume.pdf" class="btn-primary download-resume">Download Resume</a>
      </div>
    </div>
  
        
        <div class="skills-section">
          <h3 class="skills-title">My Skills</h3>
          
          <div class="skill-categories">
            <div *ngFor="let category of skillCategories" class="skill-category">
              <div class="category-header">
                <fa-icon [icon]="category.icon" class="category-icon"></fa-icon>
                <h4>{{ category.title }}</h4>
              </div>
              
              <div class="skills-list">
                <div *ngFor="let skill of category.skills" class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width]="skill.level + '%'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: var(--space-10);
      margin-bottom: var(--space-16);
    }
    
    .about-image-container {
      position: relative;
    }
    
    .about-image {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      transition: transform var(--transition-normal);
    }
    
    .about-image:hover {
      transform: translateY(-10px);
    }
    
    .about-image::before {
      content: '';
      position: absolute;
      top: var(--space-4);
      left: var(--space-4);
      right: var(--space-4);
      bottom: var(--space-4);
      border: 2px solid var(--primary-500);
      border-radius: var(--radius-lg);
      z-index: -1;
      transition: all var(--transition-normal);
    }
    
    .about-image:hover::before {
      top: var(--space-2);
      left: var(--space-2);
      right: var(--space-2);
      bottom: var(--space-2);
    }
    
    .about-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: filter var(--transition-normal);
    }
    
    .about-text h3 {
      color: var(--primary-500);
      margin-bottom: var(--space-4);
    }
    
    .about-text p {
      margin-bottom: var(--space-4);
      line-height: 1.7;
    }
    
    .highlights {
      margin: var(--space-6) 0;
    }
    
    .highlight-item {
      display: flex;
      gap: var(--space-4);
      margin-bottom: var(--space-4);
      align-items: flex-start;
    }
    
    .highlight-icon {
      color: var(--success-500);
      font-size: var(--font-size-xl);
      flex-shrink: 0;
      margin-top: var(--space-1);
    }
    
    .highlight-item h4 {
      margin-bottom: var(--space-1);
      font-size: var(--font-size-base);
    }
    
    .highlight-item p {
      margin-bottom: 0;
      color: var(--text-secondary);
      font-size: var(--font-size-sm);
    }
    
    .download-resume {
      display: inline-block;
      margin-top: var(--space-4);
    }
    
    .skills-section {
      margin-top: var(--space-12);
    }
    
    .skills-title {
      text-align: center;
      margin-bottom: var(--space-8);
      color: var(--primary-500);
    }
    
    .skill-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-8);
    }
    
    .skill-category {
      background-color: var(--bg-secondary);
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }
    
    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
    
    .category-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--space-6);
    }
    
    .category-icon {
      font-size: var(--font-size-xl);
      color: var(--primary-500);
      margin-right: var(--space-3);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-100);
      border-radius: var(--radius-full);
      padding: var(--space-4);
    }
    
    .category-header h4 {
      margin-bottom: 0;
      font-size: var(--font-size-lg);
      color: var(--text-primary);
    }
    
    .skill-item {
      margin-bottom: var(--space-4);
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-2);
    }
    
    .skill-name {
      font-weight: 500;
    }
    
    .skill-percentage {
      color: var(--text-secondary);
    }
    
    .skill-bar {
      height: 8px;
      background-color: var(--bg-tertiary);
      border-radius: var(--radius-full);
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background-color: var(--primary-500);
      border-radius: var(--radius-full);
      transition: width 1.5s ease;
      width: 0;
      animation: progressAnimation 1.5s ease forwards;
    }
    
    @keyframes progressAnimation {
      0% { width: 0; }
    }
    
    @media (max-width: 992px) {
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .about-image-container {
        max-width: 400px;
        margin: 0 auto var(--space-8);
      }
    }
  `]
})
export class AboutComponent {
  // Font Awesome icons
  faCode = faCode;
  faServer = faServer;
  faMobileScreen = faMobileScreen;
  faDatabase = faDatabase;
  faCheck = faCheck;
  faTools = faTools;
  
  
  skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: this.faCode,
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Angular', level: 95 },
      { name: 'PrimeNG', level: 85 },
      { name: 'Bootstrap', level: 80 }
    ]
  },
  {
    title: 'Backend Development',
    icon: this.faServer,
    skills: [
      { name: '.NET 8', level: 95 },
      { name: 'C#', level: 95 },
      { name: 'Entity Framework Core', level: 90 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 85 },
      { name: 'AWS (Lambda, SQS, SNS)', level: 85 }
    ]
  },
  {
    title: 'Databases & DevOps',
    icon: this.faDatabase,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 75 },
      { name: 'Oracle SQL', level: 80 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 75 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: this.faTools,
    skills: [
      { name: 'Jenkins', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'Swagger', level: 80 },
      { name: 'GitHub', level: 90 },
      { name: 'ClickUp', level: 85 },
      { name: 'Jira', level: 80 }
    ]
  }
];

  
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">My Projects</h2>
        
        <div class="project-filters">
          <button 
            *ngFor="let category of categories" 
            (click)="filterProjects(category)"
            [class.active]="currentFilter === category"
            class="filter-btn"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div *ngFor="let project of filteredProjects; let i = index" class="project-card" 
               [class.appear]="true"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="project-image">
              <img [src]="project.imageUrl" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.githubUrl" target="_blank" class="project-link" *ngIf="project.githubUrl">
                    <fa-icon [icon]="faGithub"></fa-icon>
                  </a>
                  <a [href]="project.liveUrl" target="_blank" class="project-link" *ngIf="project.liveUrl">
                    <fa-icon [icon]="faChrome"></fa-icon>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .project-filters {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: var(--space-8);
      gap: var(--space-2);
    }
    
    .filter-btn {
      padding: var(--space-2) var(--space-4);
      border: none;
      background-color: var(--bg-secondary);
      color: var(--text-secondary);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: 500;
      transition: all var(--transition-fast);
      cursor: pointer;
    }
    
    .filter-btn:hover {
      background-color: var(--bg-tertiary);
    }
    
    .filter-btn.active {
      background-color: var(--primary-500);
      color: white;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-6);
    }
    
    .project-card {
      background-color: var(--bg-secondary);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
      opacity: 0;
      transform: translateY(20px);
    }
    
    .project-card.appear {
      animation: projectAppear 0.5s forwards;
    }
    
    @keyframes projectAppear {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-lg);
    }
    
    .project-image {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-links {
      display: flex;
      gap: var(--space-4);
    }
    
    .project-link {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background-color: var(--bg-secondary);
      color: var(--primary-500);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-lg);
      transition: transform var(--transition-fast), background-color var(--transition-fast);
    }
    
    .project-link:hover {
      transform: scale(1.1);
      background-color: var(--primary-500);
      color: white;
    }
    
    .project-content {
      padding: var(--space-4);
    }
    
    .project-title {
      font-size: var(--font-size-lg);
      margin-bottom: var(--space-2);
      color: var(--text-primary);
    }
    
    .project-description {
      color: var(--text-secondary);
      font-size: var(--font-size-sm);
      margin-bottom: var(--space-4);
      line-height: 1.5;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }
    
    .tech-tag {
      font-size: var(--font-size-xs);
      padding: var(--space-1) var(--space-2);
      background-color: var(--primary-100);
      color: var(--primary-700);
      border-radius: var(--radius-full);
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['All'];
  currentFilter: string = 'All';
  
  // Font Awesome icons
  faGithub = faGithub;
  faChrome = faChrome;
  
  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = [...this.projects];
    
    // Extract unique categories
    const projectCategories = new Set<string>();
    this.projects.forEach(project => {
      project.categories.forEach(category => {
        projectCategories.add(category);
      });
    });
    
    // Add unique categories to the categories array
    this.categories = ['All', ...Array.from(projectCategories)];
  }
  
  filterProjects(category: string): void {
    this.currentFilter = category;
    
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.categories.includes(category)
      );
    }
  }
}
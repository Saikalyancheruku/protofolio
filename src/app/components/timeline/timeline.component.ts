import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="timeline" class="section">
      <div class="container">
        <h2 class="section-title">My Journey</h2>
        
        <div class="timeline-container">
          <div class="timeline">
            <div *ngFor="let item of timelineItems" class="timeline-item" [class.right]="item.type === 'work'">
              <div class="timeline-icon" [class.work]="item.type === 'work'" [class.education]="item.type === 'education'">
                <fa-icon [icon]="item.type === 'work' ? faBriefcase : faGraduationCap"></fa-icon>
              </div>
              <div class="timeline-content">
                <div class="timeline-date">{{ item.date }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <h4 class="timeline-company">{{ item.company }}</h4>
                <p class="timeline-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-container {
      position: relative;
      padding: var(--space-8) 0;
    }

    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }

    .timeline::after {
      content: '';
      position: absolute;
      width: 4px;
      background-color: var(--primary-200);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      border-radius: var(--radius-full);
    }

    .timeline-item {
      padding: var(--space-6) var(--space-4);
      position: relative;
      width: 50%;
      box-sizing: border-box;
    }

    .timeline-item.right {
      left: 50%;
    }

    .timeline-icon {
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: var(--primary-500);
      border-radius: 50%;
      top: var(--space-6);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: var(--shadow-md);
    }

    .timeline-item:not(.right) .timeline-icon {
      right: -20px;
    }

    .timeline-item.right .timeline-icon {
      left: -20px;
    }

    .timeline-icon.work {
      background-color: var(--primary-500);
    }

    .timeline-icon.education {
      background-color: var(--success-500);
    }

    .timeline-content {
      padding: var(--space-6);
      background-color: var(--bg-secondary);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      position: relative;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }

    .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .timeline-date {
      color: var(--primary-500);
      font-weight: 600;
      margin-bottom: var(--space-2);
    }

    .timeline-title {
      color: var(--text-primary);
      margin-bottom: var(--space-2);
      font-size: var(--font-size-lg);
    }

    .timeline-company {
      color: var(--text-secondary);
      margin-bottom: var(--space-4);
      font-size: var(--font-size-base);
    }

    .timeline-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media screen and (max-width: 768px) {
      .timeline::after {
        left: 31px;
      }

      .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: var(--space-4);
      }

      .timeline-item.right {
        left: 0;
      }

      .timeline-icon {
        left: 11px !important;
      }
    }
  `]
})
export class TimelineComponent {
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;

  timelineItems: TimelineItem[] = [
    {
      date: '2023 - Present',
      title: 'Software Engineer',
      company: 'Dynamatix Analytics Pvt Ltd',
      description: 'Working on full-stack development using Angular, Spring Boot, and various other technologies. Leading the development of enterprise applications and implementing best practices.',
      type: 'work'
    },
    {
      date: '2019 - 2022',
      title: 'Bachelor of Technology',
      company: 'BVC Engineering College',
      description: 'As an engineer, I’ve focused on solving real-world problems through software development.',
      type: 'education'
    }
  ];
}

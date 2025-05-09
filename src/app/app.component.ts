import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    TimelineComponent
  ],
  template: `
    <div class="app-container" [class.dark-mode]="isDarkMode">
      <app-header></app-header>
      <main>
        <app-intro id="home"></app-intro>
        <app-about id="about"></app-about>
        <app-timeline id="timeline"></app-timeline>
        <app-projects id="projects"></app-projects>
        <app-contact id="contact"></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
}
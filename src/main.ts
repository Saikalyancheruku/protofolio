import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ThemeService } from './app/services/theme.service';
import { ProjectService } from './app/services/project.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    ThemeService,
    ProjectService
  ]
}).catch(err => console.error(err));
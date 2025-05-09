import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Risk and Compliance Management System',
      description: 'A comprehensive platform to manage enterprise risks, improve compliance, and optimize database performance.',
      imageUrl: 'https://static.wixstatic.com/media/55a42f_af8b1574ffa24719ab4746561130852e~mv2.png',
      categories: ['Web', 'Enterprise', 'Risk Management'],
      technologies: ['Java', 'MySQL', 'Oracle SQL', 'Apache Tomcat', 'Nginx'],
      liveUrl: 'https://www.riskhawk.net/'
    },
    {
      id: 2,
      title: 'Catura Platform',
      description: 'A low-code automation platform designed to transform legacy systems without data migration, offering modules for UI/UX enhancement, process building, document intelligence, communication, automation, and integration.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/C560BAQEMSp43JU-OaQ/company-logo_200_200/company-logo_200_200/0/1630662419556/dynamatix_limited_logo?e=2147483647&v=beta&t=tgOBHI-6XxLQTbU-kuuX7E6gkj0RFZhTH_6x7gfe7N0', // Replace with actual image URL
      categories: ['Enterprise Software', 'Automation', 'Legacy Transformation'],
      technologies: ['Node.js', 'Angular', 'MySQL', 'Oracle SQL', 'Apache Tomcat', 'Nginx', 'GWT Libraries'],// Replace with actual GitHub URL if available
      liveUrl: 'https://www.dynamatix.com/'
    },
    {
      id: 2,
      title: 'Project Management Tool',
      description: 'A robust project management tool with features like task management, sprint planning, and project workflows.',
      imageUrl: 'https://media.istockphoto.com/id/1496029848/vector/project-management-tools-blue-gradient-concept-icon.jpg?s=612x612&w=0&k=20&c=BtIwUwulz-YGouHhAcZB5u_fQCpudgewk8dUUE8Er4E=',
      categories: ['Web', 'SaaS', 'Productivity'],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'PrimeNG'],
      githubUrl: 'https://github.com/Saikalyancheruku/PmToolNg'
    },
    {
      id: 3,

      title: 'PromptBoard',

      description: 'A frontend application that allows users to customize dashboards by inputting prompts, integrated with a ChatGPT model to generate queries, and visualized with ECharts.',

      imageUrl: 'https://sdmntprwestus2.oaiusercontent.com/files/00000000-b524-61f8-8508-24652b82536f/raw?se=2025-05-09T03%3A21%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T13%3A53%3A48Z&ske=2025-05-09T13%3A53%3A48Z&sks=b&skv=2024-08-04&sig=XgcgaEc/KdO1eDM6zu6j4hogWcbhbJL1ZES11zf/Tvs%3D',
      categories: ['Web', 'Frontend', 'AI', 'Dashboard'],

      technologies: ['Angular', 'Node.js', 'MySQL', 'ChatGPT', 'ECharts'],

      githubUrl: 'https://github.com/Saikalyancheruku/promptboard'
    },
    {
      id: 4,
      title: 'Email Generator/Extractor',
      description: 'A Chrome extension that generates email subjects and bodies using TinyLlama AI models. Helps automate email composition in Gmail and Outlook.',
      imageUrl: 'https://sdmntprwestus2.oaiusercontent.com/files/00000000-1750-61f8-998e-1a68be23dd5a/raw?se=2025-05-09T03%3A25%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A13%3A14Z&ske=2025-05-09T12%3A13%3A14Z&sks=b&skv=2024-08-04&sig=N8LdioCMxvKK7jZAdO6Cjq74WtF33J1%2B7isstMCmZy8%3D',
      categories: ['Chrome Extension', 'AI', 'Productivity'],
      technologies: ['JavaScript', 'TinyLlama', 'Chrome API'],
      githubUrl: 'https://github.com/Saikalyancheruku/email-generator'
    },
    {
      id: 5,
      title: 'TinyDocs',
      description: 'A document-based Q&A application where users can upload documents and ask questions about them, utilizing AI to summarize and answer queries.',
      imageUrl: 'https://sdmntprwestus2.oaiusercontent.com/files/00000000-75a4-61f8-83f6-243d0e09843e/raw?se=2025-05-09T03%3A27%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T01%3A57%3A05Z&ske=2025-05-10T01%3A57%3A05Z&sks=b&skv=2024-08-04&sig=Vh0M3KSR5iAgzdE/06oRexqexVzBdpMUzMpIfDBnA2M%3D',
      categories: ['Web', 'AI', 'Document Management'],
      technologies: ['React', 'Node.js', 'TinyLlama', 'Express'],
      githubUrl: 'https://github.com/Saikalyancheruku/TinyDocs'
    },
    {
      id: 6,
      title: 'Asset Management System',
      description: 'A Computerized Maintenance Management System (CMMS) for asset management, maintenance tracking, and operational optimization.',
      imageUrl: 'https://www.shutterstock.com/image-vector/asset-management-word-concepts-banner-600nw-1919061062.jpg',
      categories: ['Web', 'Backend', 'Business', 'Asset Management'],
      technologies: ['Node.js', 'MySQL', 'Angular']
    },
    {
      id: 7,
      title: 'Recruitment Email-Sending App',
      description: 'A Node.js application that sends recruitment emails, utilizing Nodemailer for email composition and MySql for storage.',
      imageUrl: 'https://sdmntprwestus2.oaiusercontent.com/files/00000000-f51c-61f8-96e4-c05b76519ab1/raw?se=2025-05-09T03%3A29%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T01%3A57%3A04Z&ske=2025-05-10T01%3A57%3A04Z&sks=b&skv=2024-08-04&sig=Fbn8UhKuWrCNnesQ2Nu4hymYihcz%2B4sVWROJRtT2SB0%3D',
      categories: ['Backend', 'Productivity', 'Business'],
      technologies: ['Node.js', 'Nodemailer', 'MySQL'],
      githubUrl: 'https://github.com/Saikalyancheruku/recruitment-email'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
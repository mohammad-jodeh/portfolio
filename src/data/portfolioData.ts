export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  extension?: string;
  content?: string;
  language?: string;
  children?: FileItem[];
}

export const portfolioFiles: FileItem[] = [
  {
    id: 'portfolio',
    name: 'portfolio',
    type: 'folder',
    children: [
      {
        id: 'about',
        name: 'about.md',
        type: 'file',
        extension: 'md',
        language: 'markdown',
        content: `# Mohammad Abojodeh
## Backend Developer

Fresh graduate passionate about back-end development, eager to learn and grow within a professional software team.

### Contact Information
- **Location**: Amman, Jordan
- **Phone**: +962 77 609 5592
- **Email**: moh.mb.dev@gmail.com

### Summary
Fresh graduate with hands-on experience in backend development through internships and academic projects. Demonstrated leadership skills and practical experience with modern backend technologies and clean architecture principles.

### Skills
- **Backend Technologies**: Node.js, ASP.NET Core
- **Low-Code Platforms**: Mendix
- **Databases**: PostgreSQL, Microsoft SQL Server
- **Architecture**: Clean Architecture principles
- **Version Control**: GitHub
- **Soft Skills**: Teamwork, Problem-solving, Leadership

### Languages
- **Arabic**: Native
- **English**: B1 Level

### Education
**Al-Hussein Bin Talal University, Jordan**
- Bachelor of Science: Computer Information Systems
- 2021 - 2025

### Learning & Development
- Udemy Courses
- Free Code Camp
- Mendix Learning Path`
      },
      {
        id: 'projects',
        name: 'projects',
        type: 'folder',
        children: [
          {
            id: 'work-experience',
            name: 'work-experience.md',
            type: 'file',
            extension: 'md',
            language: 'markdown',
            content: `# Work Experience

## Back-End Development Intern
**Ulm Care | Amman, Jordan**  
*June 2025 - July 2025*

### Responsibilities & Achievements
- Participated in the development and debugging of back-end APIs
- Learned real-world software architecture patterns and best practices
- Collaborated with management and team members on end-to-end project needs
- Organized project materials and facilitated communication between team members
- Performed code review and proofreading work to ensure quality standards

### Technical Skills Developed
- API development and debugging techniques
- Real-world backend architecture understanding
- Team collaboration in professional software development environment
- Code quality assurance and review processes

### Key Learnings
- Professional software development workflows
- Industry-standard coding practices
- Team communication and project management
- Problem-solving in production environments`
          },
          {
            id: 'final-project',
            name: 'ai-project-management.md',
            type: 'file',
            extension: 'md',
            language: 'markdown',
            content: `# Final University Project: AI-Powered Project Management

## Project Overview
**Role**: Team Leader  
**Duration**: Final semester project  
**Team Size**: Multiple team members

## Project Description
Led the development of a smart system integrating AI for task management and scheduling. This project demonstrated advanced project management skills and technical leadership capabilities.

## Leadership Responsibilities
- **Team Leadership**: Successfully led a multi-member development team
- **Project Planning**: Oversaw the entire development lifecycle from conception to completion
- **Quality Assurance**: Maintained clean, safe working environments to eliminate accident risks
- **Performance Management**: Achieved service time and quality targets consistently

## Technical Implementation
- Integrated AI algorithms for intelligent task management
- Developed automated scheduling systems
- Implemented smart resource allocation features
- Created user-friendly interfaces for project management

## Key Achievements
- Successfully delivered the project on time and within scope
- Demonstrated strong leadership and team coordination skills
- Applied modern software development practices
- Integrated cutting-edge AI technologies into practical solutions

## Skills Demonstrated
- Project leadership and team management
- AI integration and implementation
- Full-stack development capabilities
- Problem-solving and critical thinking
- Communication and coordination skills`
          },
          {
            id: 'technical-skills',
            name: 'technical-skills.js',
            type: 'file',
            extension: 'js',
            language: 'javascript',
            content: `// Mohammad Abojodeh - Technical Skills Portfolio
// Backend Developer | Fresh Graduate

const techSkills = {
  // Backend Development
  backend: {
    nodejs: {
      level: "Intermediate",
      experience: "Academic projects and internship",
      description: "RESTful API development, server-side logic"
    },
    aspNetCore: {
      level: "Intermediate", 
      experience: "University coursework and projects",
      description: "Web API development, MVC architecture"
    }
  },

  // Low-Code Platforms
  lowCode: {
    mendix: {
      level: "Beginner to Intermediate",
      certification: "Mendix Learning Path completed",
      description: "Rapid application development, business logic"
    }
  },

  // Database Management
  databases: {
    postgresql: {
      level: "Intermediate",
      experience: "Academic projects and internship",
      description: "Database design, queries, optimization"
    },
    sqlServer: {
      level: "Intermediate",
      experience: "University coursework",
      description: "T-SQL, stored procedures, database administration"
    }
  },

  // Software Architecture
  architecture: {
    cleanArchitecture: {
      level: "Beginner to Intermediate",
      description: "SOLID principles, separation of concerns",
      application: "Applied in final university project"
    }
  },

  // Version Control & Collaboration
  versionControl: {
    github: {
      level: "Intermediate",
      experience: "Academic projects and internship",
      description: "Git workflows, collaboration, code review"
    }
  },

  // Soft Skills
  softSkills: {
    teamwork: {
      demonstration: "Led final project team successfully",
      experience: "Internship collaboration with development team"
    },
    problemSolving: {
      application: "API debugging, project troubleshooting",
      strength: "Analytical thinking and systematic approach"
    },
    leadership: {
      experience: "Team leader for AI-powered project management system",
      skills: "Project coordination, team motivation, task delegation"
    }
  }
};

// Learning Journey
const continuousLearning = {
  platforms: [
    "Udemy - Backend development courses",
    "Free Code Camp - Full-stack development",
    "Mendix Learning Path - Low-code development"
  ],
  
  currentFocus: [
    "Advanced Node.js patterns",
    "Database optimization techniques", 
    "Clean architecture principles",
    "Professional development practices"
  ]
};

module.exports = { techSkills, continuousLearning };`
          },
          {
            id: 'achievements',
            name: 'achievements.json',
            type: 'file',
            extension: 'json',
            language: 'json',
            content: `{
  "personal_profile": {
    "name": "Mohammad Abojodeh",
    "title": "Backend Developer",
    "status": "Fresh Graduate",
    "graduation_year": 2025,
    "location": "Amman, Jordan",
    "education": "Bachelor of Science: Computer Information Systems"
  },
  "professional_experience": {
    "internship": {
      "company": "Ulm Care",
      "position": "Back-End Development Intern",
      "duration": "June 2025 - July 2025",
      "location": "Amman, Jordan",
      "key_responsibilities": [
        "API development and debugging",
        "Learning real-world architecture",
        "Team collaboration and communication",
        "Code review and quality assurance"
      ]
    },
    "leadership_experience": {
      "project": "AI-Powered Project Management System",
      "role": "Team Leader",
      "context": "Final University Project",
      "achievements": [
        "Successfully led multi-member development team",
        "Integrated AI for task management and scheduling",
        "Achieved project targets on time",
        "Maintained quality standards throughout development"
      ]
    }
  },
  "technical_competencies": {
    "backend_technologies": [
      "Node.js",
      "ASP.NET Core"
    ],
    "databases": [
      "PostgreSQL", 
      "Microsoft SQL Server"
    ],
    "platforms": [
      "Mendix"
    ],
    "architecture": [
      "Clean Architecture"
    ],
    "tools": [
      "GitHub",
      "Version Control"
    ]
  },
  "soft_skills": [
    "Teamwork",
    "Problem-solving", 
    "Leadership",
    "Communication",
    "Project Management"
  ],
  "languages": {
    "arabic": "Native",
    "english": "B1 Level"
  },
  "continuous_learning": {
    "completed_courses": [
      "Udemy Courses",
      "Free Code Camp",
      "Mendix Learning Path"
    ],
    "learning_approach": "Self-motivated continuous improvement",
    "career_goal": "Growth within professional software development team"
  },
  "contact_information": {
    "phone": "07 7609 5592",
    "email": "moh.mb.dev@gmail.com",
    "location": "Amman, Jordan"
  }
}`
          }
        ]
      }
    ]
  }
];
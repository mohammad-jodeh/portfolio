# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Mohammad Abojodeh - Backend Developer Portfolio

A VS Code-inspired portfolio website showcasing Mohammad Abojodeh's backend development skills and professional journey.

## About Mohammad

Fresh graduate passionate about back-end development, eager to learn and grow within a professional software team. Based in Amman, Jordan.

This portfolio mimics the Visual Studio Code interface where each file represents a different aspect of Mohammad's work as a backend developer. Navigate through the file explorer to discover:

- **About Mohammad** - Professional background, education, and skills
- **Work Experience** - Internship at Ulm Care and project leadership
- **Technical Skills** - Backend technologies and development capabilities
- **Final Project** - AI-Powered Project Management system leadership

## Technologies & Skills

- **Backend**: Node.js, ASP.NET Core
- **Databases**: PostgreSQL, Microsoft SQL Server
- **Platforms**: Mendix
- **Architecture**: Clean Architecture principles
- **Tools**: GitHub, Version Control
- **Education**: Bachelor of Science: Computer Information Systems (2021-2025)

## Professional Experience

- **Backend Development Intern** at Ulm Care (June-July 2025)
- **Team Leader** for AI-Powered Project Management final project
- **Continuous Learning** through Udemy, Free Code Camp, and Mendix Learning Path

## Contact Information

- **Location**: Amman, Jordan
- **Phone**: 07 7609 5592
- **Email**: moh.mb.dev@gmail.com

## Portfolio Highlights

- **Fresh Graduate** with hands-on internship experience
- **Team Leadership** demonstrated in final university project
- **Real-world Experience** from professional internship
- **Continuous Learning** mindset with multiple completed courses
- **Clean Architecture** understanding and application

---

*This portfolio demonstrates Mohammad's backend development skills and his ability to create engaging web experiences while showcasing his professional growth and potential.*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

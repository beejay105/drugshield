# DrugShield

DrugShield is a health-focused digital platform designed to support drug-abuse prevention, early intervention, education, behavioral assessment, AI-guided support, and access to care. The project is being designed for and initially targeted at Nigeria, with a strong emphasis on trust, safety, accessibility, and professional support.

## Current technology stack

- React
- TypeScript
- Vite
- Tailwind CSS

This stage focuses on establishing a clean, mobile-first, responsive foundation that can later support backend integration, database work, and more advanced functionality.

## How to run the project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build the project for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Current project structure

```text
src/
├── assets/
├── components/
│   ├── ErrorState.tsx
│   ├── LoadingState.tsx
│   └── TopNav.tsx
├── data/
│   └── navigation.ts
├── hooks/
│   └── useAppLoading.ts
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── AISupportPage.tsx
│   ├── AssessmentPage.tsx
│   ├── EducationPage.tsx
│   ├── HelpFinderPage.tsx
│   ├── HomePage.tsx
│   └── ProfilePage.tsx
├── services/
│   └── placeholder.ts
├── types/
│   └── app.ts
├── utils/
│   └── cn.ts
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## What will be built in later stages

- A full assessment flow and screening experience
- Secure user profile and progress tracking
- Service directory and help-finder functionality
- AI support tools with safety and professional escalation design
- Backend and database integration
- Authentication and role-based access
- Real content management and data persistence
- Production-ready analytics and reporting

This repo currently contains the initial project foundation and application shell only. The next stages will build on this structure without changing the core architecture.

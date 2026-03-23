## 1. Setup

- [x] 1.1 Create src/data/ directory
- [x] 1.2 Create src/components/ui/ directory
- [x] 1.3 Create src/components/layout/ directory
- [x] 1.4 Create page folders: src/pages/Home/, src/pages/Projects/, src/pages/About/, src/pages/Contact/

## 2. Data Layer

- [x] 2.1 Create src/data/links.js with navLinks, utilityLinks, externalNodes, systemStatus, infoColumns exports
- [x] 2.2 Create src/data/stats.js with homeStats, aboutStats exports
- [x] 2.3 Create src/data/projects.js with caseStudies, miniProjects exports
- [x] 2.4 Create src/data/experience.js with timeline, techStack exports

## 3. UI Components

- [x] 3.1 Create src/components/ui/Button.jsx with primary/secondary/ghost variants
- [x] 3.2 Create src/components/ui/TerminalPanel.jsx with title and children props
- [x] 3.3 Create src/components/ui/SectionHeader.jsx with label, title, description, actionLink props
- [x] 3.4 Create src/components/ui/index.js barrel export

## 4. Layout Components

- [x] 4.1 Create src/components/layout/PageShell.jsx with page container classes
- [x] 4.2 Create src/components/layout/index.js barrel export

## 5. Home Page Sections

- [x] 5.1 Create src/pages/Home/HeroSection.jsx with status badge, headline, tagline, description, action buttons
- [x] 5.2 Create src/pages/Home/TerminalSection.jsx using TerminalPanel with whoami, stack.matrix, impact.log
- [x] 5.3 Create src/pages/Home/HistorySection.jsx importing historyCards and stats from data layer
- [x] 5.4 Create src/pages/Home/StatsSection.jsx with full-width stats display
- [x] 5.5 Create src/pages/Home/index.jsx composing all sections with PageShell

## 6. Projects Page Sections

- [x] 6.1 Create src/pages/Projects/CaseStudiesSection.jsx importing caseStudies from data layer
- [x] 6.2 Create src/pages/Projects/MiniProjectsSection.jsx importing miniProjects from data layer
- [x] 6.3 Create src/pages/Projects/index.jsx composing all sections

## 7. About Page Sections

- [x] 7.1 Create src/pages/About/ProfileSection.jsx with mission manifesto, stats, profile card
- [x] 7.2 Create src/pages/About/TechStackSection.jsx importing techStack from data layer
- [x] 7.3 Create src/pages/About/TimelineSection.jsx importing timeline from data layer
- [x] 7.4 Create src/pages/About/index.jsx composing all sections

## 8. Contact Page Sections

- [x] 8.1 Create src/pages/Contact/TerminalSection.jsx with contact channels, availability, quick actions
- [x] 8.2 Create src/pages/Contact/StatusSection.jsx importing systemStatus, externalNodes, infoColumns from data layer
- [x] 8.3 Create src/pages/Contact/index.jsx composing all sections

## 9. Integration

- [x] 9.1 Update src/App.jsx imports to use new page folder structure
- [x] 9.2 Update src/components/Navbar.jsx to import navLinks and utilityLinks from data layer
- [x] 9.3 Update src/components/Footer.jsx to import links from data layer if applicable
- [x] 9.4 Delete old page files: src/pages/Home.jsx, src/pages/Projects.jsx, src/pages/About.jsx, src/pages/Contact.jsx

## 10. Verification

- [x] 10.1 Run npm run dev and verify Home page renders identically
- [x] 10.2 Verify Projects page renders identically
- [x] 10.3 Verify About page renders identically
- [x] 10.4 Verify Contact page renders identically
- [x] 10.5 Verify all navigation links work correctly
- [x] 10.6 Run npm run build and verify production build succeeds

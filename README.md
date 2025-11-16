# Honeywell Incident App

A React + TypeScript + Vite application for displaying airport incidents with priority, date/time, location, and description. The app uses Material UI for theming and responsiveness, along with ESLint + Prettier for production-ready code quality.

---

## Project Overview

- Displays incidents in **table** and **list** views.
- Uses **priority icons**, **localized date/time**, and **sorting by priority/date**.
- Fully typed with **TypeScript**.
- **Fake API** simulates asynchronous fetching of locations and incidents.
- **Theming** ensures consistent colors, fonts, and hover effects.

---

## Technologies

- React 19.x
- TypeScript 5.x
- Vite 7.x
- Material UI 7.x
- ESLint + Prettier

---

## Folder Structure

src/
├─ api/ # Fake API (fakeApi.ts, types)
├─ components/ # Components (IncidentTable.tsx, IncidentList.tsx, PriorityIcon.tsx)
├─ hooks/ # Custom hooks (useIncidents.ts)
├─ styles/ # Theme, colors, font styles
├─ utils/ # Utility functions (formatters.ts)
├─ App.tsx # Main App component
└─ main.tsx # Project entry point

---

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x (or yarn >= 4.x)
- VS Code recommended

### Install Dependencies

```bash
npm install
# or
yarn install
```

Run Development Server
npm run dev

# or

yarn dev

---

Check Lint Errors
npm run lint

# or

yarn lint

Format Code Automatically
npm run format

# or

yarn format

---

Production Build

npm run build

# or

yarn build

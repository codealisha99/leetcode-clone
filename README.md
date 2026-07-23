# Leetcode Clone

A coding practice platform with problem browsing, submission activity, leaderboards, Firebase auth, and Firebase Functions backend support.

![React](https://img.shields.io/badge/React-18-61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28)
![Recoil](https://img.shields.io/badge/Recoil-3578E5)

## Project Preview

The app includes a landing page, problem list, problem detail screens, submission activity, and leaderboard views.

Screenshots can be added in a future `screenshots/` folder:

- Landing page
- Problem list
- Submission activity

## Features

- Problem list and problem detail pages.
- Submission activity and submission history screens.
- Leaderboard UI.
- Firebase client integration.
- Recoil state management.
- Firebase Functions backend scaffold.
- Chart.js support for activity or leaderboard visuals.
- React Router navigation.

## Tech Stack

- React
- Vite
- TypeScript
- Firebase
- Firebase Functions
- Recoil
- React Router
- Chart.js
- Tailwind CSS

## Repository Structure

```text
frontend/             Vite React frontend
backend/functions/    Firebase Functions backend
```

## Getting Started

Install frontend dependencies:

```bash
cd frontend
npm install
npm run dev
```

Install backend function dependencies:

```bash
cd backend/functions
npm install
npm run build
```

Run Firebase emulators:

```bash
npm run serve
```

## Environment Variables

Recommended frontend variables:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_BASE_URL=
```

## Documentation

- [Project Overview](./OVERVIEW.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Improvement Roadmap](./ROADMAP.md)

## Status

The main frontend surfaces and Firebase backend foundation are in place. The next major step is adding a real problem database, editor, sandboxed judge service, and full submission lifecycle.

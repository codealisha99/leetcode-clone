# Leetcode Clone Overview

## What This Project Does

Leetcode Clone is a coding practice platform with sign-in, problem browsing, submission activity, leaderboard-style screens, and a Firebase Functions backend. The frontend is a Vite React app and the backend is designed around Firebase Cloud Functions.

## Main Features

- Landing page and navigation.
- Google and GitHub style sign-in assets.
- Problem list and problem detail screens.
- Submission activity and submission list screens.
- Leaderboard screen.
- User state managed with Recoil.
- Firebase client integration.
- Firebase Functions backend scaffold.
- Chart.js dependency for data visualization.

## Technology Stack

- **React 18**: Frontend UI.
- **Vite**: Frontend dev server and production build.
- **TypeScript**: Typed frontend and backend code.
- **React Router**: Frontend navigation.
- **Recoil**: Client-side state management.
- **Firebase**: Auth, hosting, and backend functions target.
- **Firebase Admin and Functions**: Backend function runtime.
- **Axios**: API requests.
- **Chart.js**: Leaderboard or activity visualizations.
- **Tailwind CSS**: Utility styling.

## Project Structure

- `frontend`: Vite React app.
- `frontend/src/components`: Landing, problem, leaderboard, auth, and activity components.
- `frontend/src/store`: Recoil atoms for user and submissions.
- `frontend/src/utils/firebase.ts`: Firebase client setup.
- `frontend/public`: Static images and icons.
- `backend/functions`: Firebase Functions source, config, and TypeScript build setup.
- `backend/firebase.json`: Firebase project deployment config.

## Data Flow

1. The user opens the frontend app.
2. Firebase client code handles authentication.
3. The app loads problem and submission screens.
4. User state is stored in Recoil atoms.
5. Backend functions can provide API behavior for submissions, judging, and activity.
6. Leaderboard and activity pages present ranking and progress data.

## Current State

The project has a strong frontend skeleton and Firebase backend foundation. It presents the main coding platform surfaces, but the product needs a real judge pipeline, problem database, submission execution, and reliable scoring before it feels like a finished coding platform.

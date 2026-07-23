# Leetcode Clone Deployment

## Production Targets

Recommended setup:

- **Frontend**: Vercel, Netlify, or Firebase Hosting.
- **Backend**: Firebase Cloud Functions.
- **Auth**: Firebase Authentication.
- **Data**: Firestore or another database added behind Firebase Functions.
- **Code execution**: A separate sandboxed judge service before accepting untrusted code.

Before deploying frontend with Vercel CLI, upgrade it:

```bash
npm i -g vercel@latest
```

## Current Environment Values

The frontend currently includes:

```bash
TSC_COMPILE_ON_ERROR=true
```

Before production, create a proper `.env.example` and add Firebase public config:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_BASE_URL=
```

Firebase values exposed with `VITE_` are public client config. Do not expose admin credentials.

## Local Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

## Firebase Backend Setup

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Log in:

```bash
firebase login
```

3. Select or create a Firebase project.

4. Install function dependencies:

```bash
cd backend/functions
npm install
```

5. Build functions:

```bash
npm run build
```

6. Run locally with emulators:

```bash
npm run serve
```

7. Deploy functions:

```bash
npm run deploy
```

## Firebase Auth Setup

1. Open Firebase Console.
2. Enable Authentication.
3. Add Google provider if Google login is used.
4. Add GitHub provider if GitHub login is used.
5. Add authorized domains:

```text
localhost
YOUR_FRONTEND_DOMAIN
```

## Frontend Deployment On Vercel

1. Import the repository.
2. Set root directory to `frontend`.
3. Install command:

```bash
npm install
```

4. Build command:

```bash
npm run build
```

5. Output directory:

```text
dist
```

6. Add `VITE_` environment variables.

## Frontend Deployment On Firebase Hosting

1. Build frontend:

```bash
cd frontend
npm run build
```

2. Configure Firebase Hosting to serve `frontend/dist`.

3. Deploy:

```bash
firebase deploy --only hosting
```

## Code Execution Warning

Do not execute submitted code directly inside Firebase Functions without isolation. A real judge needs:

- Sandboxed execution.
- Time and memory limits.
- Language-specific runners.
- Input/output validation.
- Queueing and retry behavior.
- Protection from filesystem, network, and process abuse.

## External Services And API Keys

- Firebase is required for auth and backend functions.
- Firebase public config belongs in `VITE_` frontend variables.
- Firebase admin credentials must stay server-side.
- Neon and Supabase are not required by the current code.
- Anthropic and OpenAI keys are not used by the current code.

## Deployment Checklist

- Frontend build passes.
- Firebase Functions build passes.
- Firebase Auth providers are enabled.
- Production domain is authorized in Firebase.
- Frontend API URL points to deployed functions.
- No admin keys are exposed to the frontend.
- Submission flow is tested end to end after deployment.

# Leetcode Clone Roadmap

## Immediate Polish

- Replace committed local `.env` with a safe `.env.example`.
- Add clear setup instructions for Firebase Auth and Functions.
- Add loading, empty, and error states for problem lists and submissions.
- Improve problem detail layout for mobile and desktop.
- Add form validation and clear auth redirect behavior.
- Add basic test data for problems and submissions.

## Product Features

- Add a problem database with title, difficulty, tags, statement, examples, and constraints.
- Add code editor integration with language selection.
- Add submission flow with status: queued, running, accepted, wrong answer, runtime error, timeout.
- Add daily, weekly, monthly, and all-time leaderboard views.
- Add user profile with solved problems, streaks, and submission history.
- Add problem filters by difficulty, tag, and status.
- Add editorial and solution discussion pages.

## Judge System

- Add a backend queue for submissions.
- Add isolated code execution service.
- Add test case storage.
- Add language runners for JavaScript, Python, Java, and C++ if needed.
- Add time and memory limits.
- Store stdout, stderr, runtime, memory, and test case results.
- Add anti-abuse limits per user.

## Production Readiness

- Add Firebase security rules for user-owned data.
- Add tests for auth, problem loading, and submission status.
- Add backend tests for function handlers.
- Add CI for frontend build and functions build.
- Add logs for submission lifecycle.
- Add monitoring for failed function executions.
- Add backup strategy for problem and submission data.

## UI/UX Improvements

- Make the problem list dense and scannable with difficulty, tags, acceptance, and status.
- Add an editor layout with problem statement on the left and code/test output on the right.
- Add clear success and failure result screens.
- Add progress indicators for daily activity.
- Add leaderboard visuals with rank movement and solved count.
- Improve empty states for new users who have not submitted yet.

## Step-by-Step Priority

1. Clean env handling and Firebase setup docs.
2. Build a real problem data model.
3. Add editor and submission UI.
4. Build sandboxed judge service.
5. Add leaderboards and user profiles.
6. Add tests and CI.
7. Add monitoring, rate limits, and security rules.

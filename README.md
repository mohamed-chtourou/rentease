# RentEase

A full‑stack rental platform prototype (React + Express + MongoDB).

## Prerequisites
- Node.js 18+ and npm 9+
- MongoDB running locally or a connection string (Atlas, etc.)

## Project structure
- `front/frontend/` — Vite + React app
- `back/` — Express API (Mongoose)

## Quick start

1. Backend env
   ```bash
   cd back
   copy .env.example .env   # on Windows PowerShell: Copy-Item .env.example .env
   # Edit .env if needed (MONGODB_URI, PORT)
   ```

2. Install dependencies
   ```bash
   cd back && npm install
   cd ../../front/frontend && npm install
   ```

3. Run backend
   ```bash
   cd back
   npm run dev   # nodemon reloads on changes
   # API: http://localhost:5000
   # Health: GET /
   # Listings: GET /api/listings
   ```

4. Run frontend (in another terminal)
   ```bash
   cd front/frontend
   npm run dev
   # App: http://localhost:5173
   ```

## Notes for contributors
- API base path is normalized to lowercase plural nouns:
  - `/api/listings`
  - `/api/listings/:listingId/reviews`
- Ensure `.env` exists in `back/` before starting the API.
- If you see CRLF warnings on Windows, `.gitattributes` normalizes line endings.
- React 19 requires a recent Node/npm; use Node 18+.

## Branch workflow (GitHub Flow)
1. Update local main: `git checkout main && git pull`
2. Create a feature branch: `git checkout -b feature/scope`
3. Commit small, atomic changes
4. Keep branch in sync: `git fetch && git rebase origin/main`
5. Push branch: `git push -u origin feature/scope`
6. Open a Pull Request → review → merge (squash or merge)

## Troubleshooting
- Backend 404s: verify you’re hitting `/api/listings` not `/api/Listing`
- Connection errors: check `MONGODB_URI` in `.env`
- CORS issues: backend has CORS enabled by default
- Frontend cannot reach API: ensure API is running on port 5000


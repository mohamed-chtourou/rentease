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

## Collaborator Setup

If you're joining the project, follow these steps for a clean, consistent environment:

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohamed-chtourou/rentease.git
   cd rentease
   ```

2. **Copy and configure environment variables**
   ```powershell
   Copy-Item "back\.env.example" "back\.env"
   ```
   Edit `back\.env` and set:
   - `JWT_SECRET` to a long random string (e.g., generate with `openssl rand -base64 64`)
   - `MONGODB_URI` to your MongoDB connection string (local or Atlas)
   - `PORT` defaults to 5000

3. **Install all dependencies**
   ```bash
   npm run install:all
   ```
   This installs both backend and frontend dependencies.

4. **Run both services**
   ```bash
   npm run dev
   ```
   Or run separately:
   ```bash
   npm run dev --prefix "back"
   npm run dev --prefix "front/frontend"
   ```

5. **Verify services are running**
   - Backend: http://localhost:5000 (should return JSON health check)
   - Frontend: http://localhost:5173 (Vite dev server URL)
   - Test auth API:
     ```powershell
     curl -X POST http://localhost:5000/api/users/signup -H "Content-Type: application/json" `
       -d '{ "username": "test", "email": "test@example.com", "password": "Passw0rd!", "role":"Tenant" }'
     ```

**Important:**
- Node.js 18+ is required (enforced in `package.json`)
- MongoDB must be running locally or accessible via your connection string
- Don't open `index.html` directly—use the Vite dev server URL

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


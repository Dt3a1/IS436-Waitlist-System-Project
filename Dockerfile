# ── Stage 1: Build the React/Vite frontend ──────────────────────────
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build
# Output: /app/frontend/dist

# ── Stage 2: Run the Express backend + serve frontend ────────────────
FROM node:20-alpine
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/ .

# Copy the built frontend into the backend so Express can serve it
COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 5055
CMD ["node", "server.js"]
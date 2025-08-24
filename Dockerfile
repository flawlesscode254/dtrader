FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY packages ./packages
COPY tsconfig.json nx.json lerna.json babel.config.json ./
RUN npm ci --strict-peer-deps
# Build all packages (produces packages/core/dist)
RUN npm run build:all

# --- Runtime stage (serve static) ---
FROM node:18-alpine
WORKDIR /app
# Copy built static files
COPY --from=builder /app/packages/core/dist ./dist
# Lightweight static HTTP server that respects $PORT and does SPA fallback
RUN npm i -g serve
ENV PORT=3000
EXPOSE 3000
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
# Usa Node.js versión estable basado en Alpine para obtener una imagen ligera
FROM node:20-alpine AS base

# Fase 1: Dependencias
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Fase 2: Constructor (Builder)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Fase 3: Producción (Runner)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Creamos la carpeta necesaria y ajustamos permisos
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiamos la build standalone de Next.js
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
# Cloud Run por defecto inyecta la variable estandar $PORT,
# le decimos a Next que escuche en este puerto.
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Ejecuta server.js generado por la compilación standalone
CMD ["node", "server.js"]

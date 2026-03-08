# ROZEL

GitHub-ready monorepo foundation for **ROZEL** — a luxury fashion house storefront, private admin surface, and API backbone.

## Stack

- **apps/web** — Next.js storefront
- **apps/admin** — hidden admin surface foundation
- **apps/api** — NestJS API
- **packages/ui** — shared UI primitives
- **packages/types** — shared types
- **packages/utils** — shared utilities
- **PostgreSQL + Prisma** — data layer foundation
- **Cloudflare + Render** — deployment target

## Monorepo layout

```text
rozel-github-starter/
├── .github/
├── apps/
│   ├── admin/
│   ├── api/
│   └── web/
├── packages/
│   ├── config/
│   ├── types/
│   ├── ui/
│   └── utils/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── render.yaml
├── tsconfig.base.json
└── turbo.json
```

## What is included

- premium storefront skeleton for `rozelshop.com`
- hidden admin foundation under a secret path
- NestJS API with domain modules for auth, catalog, collections, CMS, settings, and audit
- Prisma schema foundation for users, roles, catalog, content, settings, carts, and orders
- GitHub CI workflow, issue templates, PR template, and CODEOWNERS example
- local PostgreSQL via Docker Compose
- Render deployment manifest

## Important note

This repo is a **production foundation**, not a finished commerce system.
Core structure is ready for GitHub and scalable development. Real auth hardening, payment flows, checkout, media pipeline, order orchestration, email flows, RBAC enforcement, and full admin security still need to be completed during implementation.

## Local setup

### 1. Requirements

- Node.js 22+
- pnpm 10+
- Docker Desktop

### 2. Install

```bash
corepack enable
pnpm install
```

### 3. Create environment file

```bash
cp .env.example .env
```

### 4. Start PostgreSQL

```bash
docker compose up -d
```

### 5. Run Prisma migration later

```bash
pnpm --filter @rozel/api prisma:generate
pnpm --filter @rozel/api prisma:migrate
```

### 6. Run apps

```bash
pnpm dev
```

Expected local ports:

- web: `http://localhost:3000`
- admin: `http://localhost:3001/atelier-portal`
- api: `http://localhost:4000/api`

## GitHub bootstrap

```bash
git init
git add .
git commit -m "feat: initialize ROZEL monorepo foundation"
git branch -M main
git remote add origin git@github.com:YOUR_ORG/rozel.git
git push -u origin main
```

## Recommended GitHub repository settings

- repository visibility: **private**
- enable branch protection on `main`
- require pull request before merge
- require CI before merge
- store secrets in GitHub Actions secrets
- keep admin route/subdomain out of public docs

## Cloudflare + Render deployment target

Recommended production routing:

- `rozelshop.com` → storefront
- `api.rozelshop.com` → API
- `vault.rozelshop.com` → admin, or keep admin behind a secret path and access policy

Recommended protection for admin:

- Cloudflare Access
- IP allowlist for internal roles
- MFA / TOTP
- audit logging
- hidden route rotation before launch

## First implementation priorities

1. real authentication and session model
2. admin RBAC and audit coverage
3. product catalog CRUD
4. CMS blocks and home page builder
5. R2/S3 media pipeline
6. checkout and payment orchestration
7. email, CRM, and private-client flows

## License

Private commercial codebase. See `LICENSE.md`.

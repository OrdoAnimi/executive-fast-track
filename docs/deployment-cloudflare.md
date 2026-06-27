# Cloudflare Pages Deployment

## Purpose

Deploy Executive Fast Track remotely for private testing using Cloudflare Pages connected to GitHub.

The app lives inside the `app/` directory, so Cloudflare Pages must build from that directory rather than the repository root.

## Recommended Pages settings

Project name:

```text
executive-fast-track
```

Repository:

```text
OrdoAnimi/executive-fast-track
```

Production branch:

```text
main
```

Framework preset:

```text
Vite
```

Root directory:

```text
app
```

Build command:

```text
npm run build
```

Build output directory:

```text
dist
```

Environment variables:

```text
NODE_VERSION=22
```

## Fallback settings if Root directory is not available

Use these settings instead:

Build command:

```text
cd app && npm install && npm run build
```

Build output directory:

```text
app/dist
```

## Deployment flow

1. Open Cloudflare dashboard.
2. Go to Workers & Pages.
3. Create application.
4. Choose Pages.
5. Import from an existing Git repository.
6. Select `OrdoAnimi/executive-fast-track`.
7. Configure the build settings above.
8. Save and deploy.

## Expected result

Cloudflare will build the Vite app and publish it to a `pages.dev` URL, usually in this form:

```text
https://executive-fast-track.pages.dev
```

The first deployment is for remote testing only. Custom domain, access control, analytics, and production hardening should be handled in a later release.

## Build validation

Before deploying, local validation should run from Git Bash or terminal inside the app directory:

```bash
cd /c/Users/phill/Documents/GitHub/executive-fast-track/app
npm install
npm run build
npm run dev
```

## Notes

The project is currently a static React/Vite app. It does not require Pages Functions, backend services, authentication, or environment secrets.

# VeoPortal

Personal portfolio website for Jerome Villaruel (VeoScript), featuring career experience, selected projects, technology stack, contact links, and the Pandan POS promotion.

## Tech Stack

- Next.js 16.3.8 with the App Router and Turbopack
- React 19.3 and TypeScript
- Tailwind CSS 3.4
- `next-themes` for light/dark mode, with persisted green, purple, orange, and blue accent choices
- Headless UI, Framer Motion, and Sonner for accessible UI, animation, and notifications
- `next/image` and Sharp for image delivery
- ESLint 9 with `eslint-config-next`; pnpm for package management

The UI uses the Raleway font through `next/font/google`.

## Requirements

- Node.js 22.15.0 (see `.nvmrc`; Next.js 16 requires Node.js 20.9 or newer)
- pnpm 10.10.0 (see the `packageManager` field in `package.json`)

## Setup

Install dependencies and create a local environment file:

```bash
pnpm install
cp .env.example .env
```

Set the environment variables in `.env`:

| Variable         | Purpose                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `DEV_URL`        | Absolute local URL used as the metadata base in development, for example `http://localhost:3000`. |
| `PROD_URL`       | Absolute deployed site URL used as the metadata base outside development.                         |
| `PROMOTION_FLAG` | Set to `true` to show the Pandan POS promotion; otherwise leave it unset or set it to `false`.    |

Both URL values should include the protocol (`http://` or `https://`). Keep `.env` local and do not commit secrets.

## Development Commands

```bash
pnpm dev                 # Start the development server at http://localhost:3000
pnpm lint                # Run ESLint
pnpm exec tsc --noEmit   # Run the TypeScript check
pnpm build               # Create a production build
pnpm start               # Serve the production build
```

Run `pnpm build` before `pnpm start`.

## Project Structure

```text
src/
	app/                  App Router layout, home page, and API routes
	components/           Navigation, profile, appearance controls, social links, and promotion flag
	constants/            Experience, project, service, social, and stack data
	hooks/                Theme and media-query hooks
	layouts/              Page composition and homepage sections
	styles/               Global Tailwind styles and theme tokens
	utils/                Icons and shared helpers
public/
	files/                Resume and Pandan POS version data
	images/               Portfolio, project, experience, and promotion media
```

The homepage composition is in `src/app/page.tsx`. Update portfolio content in `src/constants/` and add or replace static media under `public/`.

## Appearance Preferences

The navigation controls let visitors choose a green, purple, orange, or blue accent and switch between light and dark mode. The accent and mode are saved in browser storage; the initial mode follows the operating system until the visitor chooses one.

## API

`GET /api/pandan-pos` returns the JSON version data stored in `public/files/pandan_app_version.json`.

## Deployment

Set `PROD_URL` to the deployed site’s absolute URL, then run `pnpm build`. Deploy the generated Next.js application using a Node.js host compatible with Next.js 16.3.8.

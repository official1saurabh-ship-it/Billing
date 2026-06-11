# Billing Mitra — Sales & Billing Software

Smart GST billing and business management software built for Indian businesses. Manage billing, inventory, accounting, and compliance in one platform.

## Tech Stack

- **React 19** + **Vite 7**
- **TailwindCSS 4** for styling
- **React Router 7** for routing
- **Remix Icons**

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start development server        |
| `npm run build`  | Build for production            |
| `npm run preview`| Preview production build        |
| `npm run lint`   | Run ESLint                      |

## Project Structure

```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # Reusable components (Navbar, Footer)
├── pages/           # Page components (HeroPage, policy pages)
├── App.jsx          # Root component with routing
├── Home.jsx         # Home entry point
├── main.jsx         # App entry point
└── index.css        # Global styles
```

## Pages

- `/` — Hero / Landing page
- `/privacy-policy`
- `/refund-policy`
- `/terms-of-service`

## Deployment

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static hosting.

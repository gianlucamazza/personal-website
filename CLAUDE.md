# CLAUDE.md - Guidelines for Agentic Assistants

## Build & Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run preview` - Preview production build

## Code Style Guidelines
- **TypeScript**: Strict mode with React. Use proper type annotations, avoid `any`.
- **Components**: Use functional components with hooks. Export as default.
- **Imports**: Group imports: React/libraries first, then components, then utilities.
- **Formatting**: Use consistent indentation (2 spaces). Maintain clean JSX formatting.
- **Styling**: Use Tailwind CSS classes with semantic class ordering.
- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for CSS classes.
- **Error Handling**: Use proper effect cleanup in useEffect hooks. Handle async operations safely.
- **State Management**: Use React hooks (useState, useEffect) for component state.
- **Responsiveness**: Include responsive design with Tailwind breakpoints (sm, md, lg).

This is a Vite + React + TypeScript project with Tailwind CSS for styling.
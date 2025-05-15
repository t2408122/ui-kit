# IOCare UI Kit

A comprehensive UI component library built with React and TypeScript. This monorepo contains primitive UI components, control components, and a documentation website.

## Repository Structure

```
ui-kit/
├── apps/
│   └── website/       # Documentation website built with Next.js
├── packages/
│   ├── primitives/    # Low-level UI components (Switch, Button, etc.)
│   └── controls/      # Higher-level controls using primitives
```

## Packages

### Primitives (`@iocare-ui-kit/primitives`)

Basic UI components that serve as building blocks for more complex components:

- **Switch** - Toggle component
- **Button** - Button component

### Controls (`@iocare-ui-kit/controls`)

Higher-level UI controls built on top of the primitives:

- **ToggleSwitch** - Enhanced Switch component with additional functionality
- **useToggle** - Hook for toggle state management

### Website

Documentation website built with Next.js, showcasing components and their usage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v10.8.1 or newer)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ui-kit

# Install dependencies
pnpm install
```

### Development

```bash
# Start the documentation website in development mode
pnpm dev:website

# Build all packages
pnpm build

# Clean all build artifacts and node_modules
pnpm clean
```

## Developing Components

### Creating a New Component

1. Add your component in the appropriate package (`primitives` or `controls`)
2. Export the component in the package's main `index.ts` file
3. Document the component usage in the website

### Package Scripts

- `build` - Build the package
- `dev` - Build in watch mode for development

## Technologies

- **React** - UI library
- **TypeScript** - Static typing
- **Vite** - Build tool
- **Next.js** - Documentation website
- **Turborepo** - Monorepo management
- **SCSS** - Styling

## License

ISC 
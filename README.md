# Memory Card Game

A simple memory card game built with React, TypeScript, and Vite, using ShadCN and TailwindCSS for styling.

## Live Demo 🎮

Play the game here: [Memory Card Game](https://nethitters.github.io/memory-game/)

## Features

- **Shuffle and Flip Logic**: Cards are shuffled and displayed face-down until flipped.
- **Turn-Based Gameplay**: Players take turns flipping two cards at a time.
- **Game Progress Tracking**: Tracks matched pairs and determines when the game is complete.
- **Card Design**: Uses images instead of numbers for a more engaging experience.
- **Difficulty Levels**: Choose between **Easy**, **Medium**, and **Hard**.
- **Player Timers**: Each player has their own countdown timer.
- **Animated Reset Button**: Resets the game with a zoom-in-out animation.
- **Multiple Game Modes**: Play **Multiplayer**, **Survival**, or try upcoming **Online Play**.
- **Testing**: Jest and React Testing Library are used for unit and integration tests.

## Game Modes 🕹️

- **Multiplayer Mode**: Classic two-player mode where players take turns to match pairs.
- **Survival Mode**: Race against the clock in a single-player challenge.
- **(Coming Soon) Online Play**: Play against friends remotely!

## Technologies Used

### UI Development

- **[Storybook](https://storybook.js.org/)** - A tool for building and testing UI components in isolation.

### Frameworks & Libraries

- **[React](https://react.dev/)** - A JavaScript library for building user interfaces.
- **[React Router](https://reactrouter.com/)** - Enables navigation between game modes.
- **[TypeScript](https://www.typescriptlang.org/)** - A strongly typed programming language that builds on JavaScript.
- **[Vite](https://vitejs.dev/)** - A fast development build tool for modern frontend applications.
- **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework for styling.
- **[ShadCN](https://ui.shadcn.com/)** - A set of beautifully styled UI components for React.
- **[Lucide React](https://www.npmjs.com/package/lucide-react)** - Icon library for consistent, lightweight UI elements.

### State Management

- **React Hooks** (`useState`, `useEffect`) - Used for managing game state and UI updates.

### Testing

- **[Jest](https://jestjs.io/)** - A JavaScript testing framework.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Used for testing UI interactions.

### Linting & Code Quality

- **[ESLint](https://eslint.org/)** - Ensures code quality and consistency.
- **[Prettier](https://prettier.io/)** - A code formatter to maintain styling consistency.
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Integrates ESLint with TypeScript.

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/nethitters/memory-game.git
   cd memory-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Run tests:
   ```sh
   npm test
   ```
5. Run Storybook:
   ```sh
   npm run storybook
   ```

## Folder Structure

```
.
├── .storybook       # Storybook configuration
├── src
│   ├── components   # React components
│   ├── modes        # Contains different game modes
│   ├── pages        # High-level pages
│   ├── stories      # Component stories for Storybook
│   ├── assets       # Images and static files
│   ├── tests        # Unit and integration tests
│   ├── utils        # Utilities
│   ├── App.tsx      # Main application component
│   ├── index.css    # TailwindCSS configuration
│   ├── index.tsx    # Entry point
├── public           # Static public files
├── .eslintrc.js     # ESLint configuration
├── vite.config.ts   # Vite configuration
├── package.json     # Project dependencies
└── README.md        # Documentation
```

## Contributing

Feel free to submit issues or pull requests to improve the project!

## License

This project is open-source and available under the [MIT License](LICENSE).

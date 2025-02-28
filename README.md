# Memory Card Game

A simple memory card game built with React, TypeScript, and Vite, using ShadCN and TailwindCSS for styling.

## Features

- **Shuffle and Flip Logic**: Cards are shuffled and displayed face-down until flipped.
- **Turn-Based Gameplay**: Players take turns flipping two cards at a time.
- **Game Progress Tracking**: Tracks matched pairs and determines when the game is complete.
- **Card Design**: Cards use images instead of numbers for a more engaging experience.
- **Animated Reset Button**: Resets the game with a zoom-in-out animation.
- **Testing**: Jest and React Testing Library are used for unit and integration tests.

## Technologies Used

### UI Development

- **[Storybook](https://storybook.js.org/)** - A tool for building and testing UI components in isolation.

### Frameworks & Libraries

- **[React](https://react.dev/)** - A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - A strongly typed programming language that builds on JavaScript.
- **[Vite](https://vitejs.dev/)** - A fast development build tool for modern frontend applications.
- **[ShadCN](https://ui.shadcn.com/)** - A set of beautifully styled UI components for React.
- **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework for styling.

### State Management

- **React Hooks** (`useState`, `useEffect`) - Used for managing game state and UI updates.

### Testing

- **[Storybook](https://storybook.js.org/)** - A tool for building and testing UI components in isolation.

- **[Jest](https://jestjs.io/)** - A JavaScript testing framework.

- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Used for testing UI interactions.

### Linting & Code Quality

- **[ESLint](https://eslint.org/)** - Ensures code quality and consistency.
- **[Prettier](https://prettier.io/)** - A code formatter to maintain styling consistency.
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Integrates ESLint with TypeScript.

## add

1. Clone the repository:
   ```sh
   git clone https://github.com/to-be-determined/memory-card-game.git
   cd memory-card-game
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
│   ├── assets       # Images and static files
│   ├── styles       # TailwindCSS configuration
│   ├── tests        # Unit and integration tests
│   ├── App.tsx      # Main application component
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

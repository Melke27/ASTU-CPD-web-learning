# Todo List Application

A modern and responsive Todo List application built with React and TypeScript. This application allows users to add, edit, and delete tasks with a clean and intuitive user interface.

## Features

- Add new tasks
- Mark tasks as complete
- Edit existing tasks
- Delete tasks
- Responsive design that works on all devices
- Modern and clean user interface
- Built with TypeScript for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-list-ts.git
   cd todo-list-ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   The application will automatically open in your default browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` or `yarn start`: Starts the development server
- `npm run build` or `yarn build`: Builds the app for production
- `npm test` or `yarn test`: Launches the test runner
- `npm run eject` or `yarn eject`: Ejects from Create React App

## Project Structure

```
src/
  ├── App.tsx        # Main application component
  ├── App.css        # Application styles
  └── index.tsx      # Application entry point
```

## Technologies Used

- React 18
- TypeScript
- CSS3 (with modern features like Flexbox and CSS Variables)
- Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save gh-pages
   # or
   yarn add gh-pages
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/todo-list-ts",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

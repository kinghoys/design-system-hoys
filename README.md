# Design System

A modern, React-based design system with reusable components, built with TypeScript and Storybook.

## Demo

The design system is live at: [https://design-system-q6lb5tsc1-y-hoysala-patels-projects.vercel.app](https://design-system-q6lb5tsc1-y-hoysala-patels-projects.vercel.app)

## Components

This design system includes the following components:

### Button
- Various sizes: small, medium, large
- Types: primary, secondary
- Custom colors
- Click tracking functionality
- Usage example: `<Button primary size="large" label="Primary Large" onClick={handleClick} />`

### Header
- Brand identity with logo
- Authentication components (Login/Signup)
- User greeting when logged in
- Logout functionality

## Features

- **Individual Click Tracking**: Each button maintains its own click counter
- **Authentication Flow**: Working login and signup functionality
- **Responsive Design**: Components adapt to different screen sizes
- **TypeScript Support**: Full type safety for all components
- **Storybook Integration**: Component documentation and sandbox environment

## Running Storybook

To view the components in isolation:

```
npm run storybook
```

This will start Storybook on port 6006. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## Building the Design System

To build Storybook as a static site:

```
npm run build-storybook
```

## Getting Started with Development

### Installation

```
npm install
```

### Running the App

```
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/components/` - Reusable UI components
- `src/stories/` - Storybook stories and example components
- `src/theme/` - Design tokens and theme variables

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

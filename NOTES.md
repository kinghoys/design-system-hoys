# Design System Notes

## Component Documentation

### Button Component

The Button component is versatile and supports multiple variants:

```jsx
// Primary button
<Button 
  primary 
  size="medium" 
  label="Submit" 
  onClick={handleSubmit} 
/>

// Secondary button
<Button 
  size="small" 
  label="Cancel" 
  onClick={handleCancel} 
/>

// Custom color
<Button 
  primary 
  backgroundColor="#FF5733" 
  label="Custom" 
  onClick={handleCustomAction} 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| primary | boolean | false | Whether the button is primary |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the button |
| backgroundColor | string | undefined | Custom background color |
| label | string | required | Button text |
| onClick | () => void | undefined | Click handler |

### Header Component

The Header component provides navigation and authentication UI:

```jsx
<Header 
  user={user}
  onLogin={handleLogin}
  onLogout={handleLogout}
  onCreateAccount={handleCreateAccount}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| user | { name: string } \| undefined | undefined | Current user |
| onLogin | () => void | undefined | Login handler |
| onLogout | () => void | undefined | Logout handler |
| onCreateAccount | () => void | undefined | Account creation handler |

## Implementation Details

### Individual Button Counters

Each button maintains its own click counter using React's useState:

```jsx
const [counters, setCounters] = useState({
  primaryLarge: 0,
  primaryMedium: 0,
  primarySmall: 0,
  secondaryLarge: 0,
  secondaryMedium: 0,
  secondarySmall: 0,
  customColor: 0
});

const incrementCounter = (buttonName) => {
  setCounters(prev => ({
    ...prev,
    [buttonName]: prev[buttonName] + 1
  }));
};
```

### Authentication Flow

The authentication flow is implemented using React state:

```jsx
const [user, setUser] = useState(undefined);

const handleLogin = () => {
  setUser({ name: 'User' });
};

const handleLogout = () => {
  setUser(undefined);
};

const handleCreateAccount = () => {
  setUser({ name: 'New User' });
};
```

## Design Decisions

### Button Styling

- Primary buttons use a blue background (`#555ab9`) with white text
- Secondary buttons have a transparent background with a subtle border
- All buttons have rounded corners with a 3em border-radius for a friendly appearance
- Font family is 'Nunito Sans' for a modern look

### Responsive Considerations

- The button container uses Flexbox to allow buttons to wrap on smaller screens
- The counter grid uses CSS Grid with auto-fill and minmax to create responsive columns

## Future Enhancements

1. **Theme Support**: Add dark/light mode support
2. **Form Components**: Develop form inputs, checkboxes, radio buttons
3. **Navigation Components**: Build out more navigation elements like a sidebar
4. **Data Visualization**: Add charts and graphs components
5. **Accessibility Improvements**: Ensure all components meet WCAG standards

## Testing Strategy

- **Component Tests**: Using React Testing Library to test component functionality
- **Storybook Stories**: Visual testing through Storybook
- **Accessibility Tests**: Use axe-core to verify accessibility

## Performance Considerations

- Component memoization for frequently re-rendered components
- Lazy loading for larger component imports
- Bundle size optimization through code splitting 
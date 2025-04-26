import React, { useState } from 'react';
import './App.css';
import { Button } from './stories/Button';
import { Header } from './stories/Header';

function App() {
  // Individual counters for each button
  const [counters, setCounters] = useState({
    primaryLarge: 0,
    primaryMedium: 0,
    primarySmall: 0,
    secondaryLarge: 0,
    secondaryMedium: 0,
    secondarySmall: 0,
    customColor: 0
  });
  
  // User state
  const [user, setUser] = useState<{ name: string } | undefined>(undefined);
  
  // Functions to increment individual button counters
  const incrementCounter = (buttonName: keyof typeof counters) => {
    setCounters(prev => ({
      ...prev,
      [buttonName]: prev[buttonName] + 1
    }));
  };
  
  // Login/Signup handlers
  const handleLogin = () => {
    setUser({ name: 'User' });
    console.log('User logged in');
  };
  
  const handleLogout = () => {
    setUser(undefined);
    console.log('User logged out');
  };
  
  const handleCreateAccount = () => {
    setUser({ name: 'New User' });
    console.log('New account created');
  };

  return (
    <div className="App">
      <Header 
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
      <div className="App-content">
        <h1>Design System Components</h1>
        
        <div className="component-section">
          <h2>Buttons</h2>
          <div className="button-container">
            <Button 
              primary 
              size="large" 
              label={`Primary Large (${counters.primaryLarge})`} 
              onClick={() => incrementCounter('primaryLarge')} 
            />
            <Button 
              primary 
              size="medium" 
              label={`Primary Medium (${counters.primaryMedium})`} 
              onClick={() => incrementCounter('primaryMedium')} 
            />
            <Button 
              primary 
              size="small" 
              label={`Primary Small (${counters.primarySmall})`} 
              onClick={() => incrementCounter('primarySmall')} 
            />
            
            <Button 
              size="large" 
              label={`Secondary Large (${counters.secondaryLarge})`} 
              onClick={() => incrementCounter('secondaryLarge')} 
            />
            <Button 
              size="medium" 
              label={`Secondary Medium (${counters.secondaryMedium})`} 
              onClick={() => incrementCounter('secondaryMedium')} 
            />
            <Button 
              size="small" 
              label={`Secondary Small (${counters.secondarySmall})`} 
              onClick={() => incrementCounter('secondarySmall')} 
            />
            
            <Button 
              primary 
              backgroundColor="#ff4785" 
              label={`Custom Color (${counters.customColor})`} 
              onClick={() => incrementCounter('customColor')} 
            />
          </div>
          
          <div className="counter">
            <h3>Button Click Counters</h3>
            <div className="counter-grid">
              {Object.entries(counters).map(([key, count]) => (
                <div key={key} className="counter-item">
                  <span className="counter-name">{key}:</span>
                  <span className="counter-value">{count}</span>
                </div>
              ))}
            </div>
            <Button 
              primary 
              backgroundColor="green" 
              label="Reset All Counters" 
              onClick={() => setCounters({
                primaryLarge: 0,
                primaryMedium: 0,
                primarySmall: 0,
                secondaryLarge: 0,
                secondaryMedium: 0,
                secondarySmall: 0,
                customColor: 0
              })} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

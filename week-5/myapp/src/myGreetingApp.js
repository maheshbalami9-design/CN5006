import './App.css';

function GreetingElement() {
  // Create a variable inside the component
  const greeting = 'Hello! Let’s start learning functional components...';

  // Return JSX (HTML inside JS)
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

// Export the component so it can be used outside
export default GreetingElement;

import './App.css'
import home from "./pages.home"
// imported Home Component that we created 



// In React a function is also known as a Component
// A Component is any function in JavaScript that returns some kind of JSX code
// JSX stand for JavaScript XML it allows Developers to write HTML-like code within JavaScript

// Each component can only contain one parent element ex: only 1 div per component 
// First Component - Components always start with a capitol letter 

function App() {
  return (
    // Inserting a fragment "<> </>"" allows for mulitple div elements within a component 
    // Now to display our imported MovieCard component that we created 
    <>
      <home />

    </>
  );
}

export default App;

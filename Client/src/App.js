import React from 'react'
import './App.css';
import DisneyArticles from "../src/components/DisneyArticles/DisneyArticles"
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <h1>Disney App!</h1>
      <DisneyArticles />
      <Navigation />
    </div>
  );
}

export default App;

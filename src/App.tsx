import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

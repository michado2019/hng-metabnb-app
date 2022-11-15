import React from 'react';
import './App.css';
import { Navbar, Footer } from './components';
import { AppRoutes } from './components/routes';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

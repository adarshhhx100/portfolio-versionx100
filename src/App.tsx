import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />  
      </main>
      <Footer />
    </div>
  );
};

export default App;

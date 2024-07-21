import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import ContactForm from './components/ContactForm';
import './index.css';

const App: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSayHelloClick={handleOpenContactForm} />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
    </div>
  );
};

export default App;

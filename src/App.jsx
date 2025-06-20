import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import SearchBox from './components/SearchBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Logo />
        <SearchBox />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Main from './components/main';
import Avatar from './components/avatar/avatar';
import Footer from './components/footer/footer';
import FindMore from './gtkmButton/button';

function App() {
  return (
    <div className="App">
        <Main />
        <Avatar />
        <FindMore />
        <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <div id="main-content">
        <h1>Hello World</h1>
        <p>Let us learn ReactJS</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;

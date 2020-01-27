import React from 'react';
import Header from './components/layouts/Header';
import FullScreenMenu from './components/layouts/FullScreenMenu';
import './assets/sass/main.scss';

function App() {
  return (
    <div className="App">
      <FullScreenMenu open="true"/>
      <Header />
    </div>
  );
}

export default App;

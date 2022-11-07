import './App.css';
import React from 'react';
import Login from './components/Login.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Login />);
  return (
    <div className="App">
      <header className="App-header">



        {/* <Login></Login> */}

      </header>
    </div>
  );
}

export default App;

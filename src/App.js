import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';

function App() {

  const [form, changeForm] = useState('');
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<Form/>);
  return (
    <div className="App">
    </div>
  );
}

export default App;

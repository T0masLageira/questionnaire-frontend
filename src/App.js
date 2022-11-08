import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';


function App() {

  function handleFormState(currentPage) {}
  
  //const [form, changeForm] = useState('');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  

  if (!currentPage)
  root.render(<Login page = {handleFormState}/>);
  else if (currentPage)
  root.render(<Form/>);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function App() {

  function handleFormState(currentPage) { }

  //const [form, changeForm] = useState('');

  if (currentPage)
    return (<Login></Login>)
  else if (!currentPage)
    return (<Form></Form>)


}

export default App;

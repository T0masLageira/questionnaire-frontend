import './App.css';
import React from 'react';
import Login from './components/Login.js'
import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function App() {

  function handleFormState(props) { }

  //const [form, changeForm] = useState('');

  if (props.currentPage)
    return (<Login></Login>)
  else if (!props.currentPage)
    return (<Form></Form>)


}

export default App;

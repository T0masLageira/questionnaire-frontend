import './App.css';
import React, { useEffect } from 'react';
import Login from './components/Login.js'
import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './components/Login.css'


function App(props) {

  const [page, setPage] = useState("login")

  function pageChange(pagestatus){
    setPage(pagestatus)

  }



  return (

    <div className='Login'>
      {/* <button type="button" className="btn btn-primary mt-5" onClick={() => setPage("form")}> Submit</button>
      <button type="button" className="btn btn-primary mt-5" onClick={() => setPage("login")}> Login</button> */}

      <div>
        {page === "login" && <Login onButtonClick={pageChange} />}
        {page === "form" && <Form />}
      </div>

    </div>
  )
}

export default App;

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import { useState } from 'react';

let currentPage = true;


export default function Login(props) {

    const [username, setUsername] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        currentPage = false;
        props.handleFormState(currentPage);
    }
    return (
        <form className="Auth-for Login">
            <table>
                <tr>
                    <h1 className="font-weight-bold mb-5">Sign In</h1>
                    <label>Name</label>
                    <input
                        value={username}
                        type="text"
                        className="form-control mt-3"
                        placeholder="First Name" />
                </tr>
                <tr>
                    <label className="mt-3">Surname</label>
                    <input
                        value={surname}
                        type="text"
                        className="form-control mt-3"
                        placeholder="Surname" />
                </tr>
                <label className="mt-3">Email address</label>
                <input
                    value={email}
                    type="email"
                    className="form-control mt-3"
                    placeholder="E-mail" />
                <div className="d-grid gap-2 mt-3">
                    <button type="button" className="btn btn-primary mt-5" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </table>
        </form>
    )
}
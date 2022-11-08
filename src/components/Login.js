import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

export default function Login(props) {
    return (
        <form className="Auth-for Login">
            <table>
                <tr>
                    <h1 className="font-weight-bold mb-5">Sign In</h1>
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="First Name" />
                </tr>
                <tr>
                    <label className="mt-3">Surname</label>
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Surname" /> 
                </tr>
                <label className="mt-3">Email address</label>
                <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="E-mail" />
                <div className="d-grid gap-2 mt-3">
                    <button  type="button" className="btn btn-primary mt-5" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </table>
        </form>
    )
}
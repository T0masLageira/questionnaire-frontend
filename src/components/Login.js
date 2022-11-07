import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

export default function (props) {
    return (
        <form className="Auth-form">
            <table>
                <tr>
                    <h1 class="font-weight-bold mb-5">Sign In</h1>
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
                    <button type="button" className="btn btn-primary mt-5">
                        Submit
                    </button>
                </div>
            </table>
        </form>
    )
}
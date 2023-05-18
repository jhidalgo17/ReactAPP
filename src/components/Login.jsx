// Import necessary dependencies and components
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MainMenu } from "./MainMenu";
import "./Login.css";

// Define the Login component
export function Login() {
    // Declare state variables using the useState hook
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Event handler for input changes
    function handleChange(ev) {
        switch (ev.target.id) {
            case "username":
                setUsername(ev.target.value);
                break;
            case "password":
                setPassword(ev.target.value);
                break;
            default:
                break;
        }
    }

    // Event handler for login button click
    function handleEnter(ev) {
        // Render the MainMenu component with the entered username and password
        ReactDOM.createRoot(document.getElementById("registerContainer")).render(
            <MainMenu user={{ username: username, password: password }} />
        );
    }

    // Render the login form
    return (
        <>
            <div className="container mt-5 registerContainer" id="registerContainer">
                <div className="col">
                    <div className="card" style={{ width: "18rem;" }}>
                        <div className='card-header bg-warning'>LOGIN</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" onInput={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" onInput={handleChange} id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="row">
                                    <button
                                        type="button"
                                        onClick={handleEnter}
                                        className="btn btn-success"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <a href="./components/register" className="card-link">Don't have an account? REGISTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

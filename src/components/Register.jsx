import { useEffect, useState } from "react";

// Define the Register component
export function Register(props) {
  // Declare state variables for username and password
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // Run the effect only once when the component mounts
  useEffect(() => {
    console.log("Register montado");

    // Clean up the effect when the component is unmounted
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  // Handle form submission
  function handleForm(ev) {
    ev.preventDefault();
    alert(`Username: ${username} || Password: ${password}`);
  }

  // Handle input changes
  function handleInput(ev) {
    switch (ev.target.id) {
      case "username":
        setUserName(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
      default:
        break;
    }
  }

  // Render the registration form
  return (
    <>
      <div className="container mt-5 registerContainer">
        <div className="col">
          <div className="card" style={{ width: "18rem;" }}>
            <div className="card-header bg-primary">REGISTER</div>
            <div className="card-body">
              <form onSubmit={handleForm} method="post">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" onInput={handleInput} id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" onInput={handleInput} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

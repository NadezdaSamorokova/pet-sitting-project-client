import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./../services/auth.service";

// React component for the Signup page
function SignupPage(props) {
  // State variables to store email, password, username, error message, and role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [role, setRole] = useState("owner");

  // Log the current role for debugging purposes
  console.log("THIS IS ROLE", role)

  // Access the navigation function from React Router
  const navigate = useNavigate();
  
  // Event handlers for updating the state variables
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  // Event handler for submitting the signup form
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username, role };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state

    // axios.post(`${API_URL}/auth/signup`, requestBody)    

    authService.signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  // Render the Signup form
  return (
    <div className="AuthPage">
      <h1 className="auth-title">Sign Up</h1>

      <form className="auth-form" onSubmit={handleSignupSubmit}>

        <input className="auth-input" type="text" name="username" value={username} placeholder="Username" onChange={handleUsername} />

        <input className="auth-input" type="email" name="email" value={email} placeholder="Email" onChange={handleEmail} />

        <input className="auth-input" type="password" name="password" value={password} placeholder="Password" onChange={handlePassword} />

        <label className="selectRole" for="select-role">Are you an parent or a sitter?</label>
        <select className="dropdown-role" onChange={handleRole}>
          <option value="owner">Parent</option>
          <option value="sitter">Sitter</option>
        </select>

        <button className="auth-button" type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="auth-text">Already have account?</p>
      <Link className="auth-link" to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage;
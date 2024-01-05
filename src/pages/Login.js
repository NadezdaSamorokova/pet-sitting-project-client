import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import authService from "./../services/auth.service";

// React component for the Login page
function LoginPage(props) {
  // State variables to store email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Access the navigation function from React Router
  const navigate = useNavigate();

  // Access authentication functions from the AuthContext using useContext
  const { storeToken, authenticateUser } = useContext(AuthContext);

  // Event handler for updating the email state
  const handleEmail = (e) => setEmail(e.target.value);

  // Event handler for updating the password state
  const handlePassword = (e) => setPassword(e.target.value);

  // Event handler for submitting the login form
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Create a request body object with email and password
    const requestBody = { email, password };

    // Call the login function from authService to authenticate the user
    authService.login(requestBody)
      .then((response) => {
        // If successful, log the JWT token, store it, authenticate the user, and navigate to the home page
        console.log("JWT token", response.data.authToken);
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If an error occurs, set the error message state with the response message
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  // Render the Login form
  return (
    <div className="AuthPage">
      <h1 className="auth-title">Login</h1>

      <form className="auth-form" onSubmit={handleLoginSubmit}>
        
        <input className="auth-input" type="email" name="email" value={email} placeholder="Email" onChange={handleEmail} />

        <input className="auth-input" type="password" name="password" value={password} placeholder="Password" onChange={handlePassword} />

        <button className="auth-button" type="submit">Login</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="auth-text">Don't have an account yet?</p>
      <Link className="auth-link" to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
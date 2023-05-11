import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import authService from "./../services/auth.service";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // axios.post(`${API_URL}/auth/login`, requestBody

    authService.login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };


  
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
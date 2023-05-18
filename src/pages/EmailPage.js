import { Link } from "react-router-dom";

function Email() {
    return (
      <div className="Email">
        <p className="email-text">Your Application has been sent via e-mail. Expect the answer from the user!</p>
        <p className="span">... or not</p>
        
        <Link className="link" to="/"><button className="email-button">Return to main Page</button></Link>
      </div>
    );
  }
  
  export default Email;
import { Link } from "react-router-dom";
import Dog from "../images/Homepage/about-dog.jpg"
import Cat from "../images/Homepage/about-cat.jpg"
import HighFive from "../images/Homepage/about-highfive.jpg"

function HomePage() {
    return (
      <div className="homePage">
        <div className="introduction">
          <div className="introduction-section">
             <h1 className="title"><span className="title-span">Petmypet</span><br/>in Berlin</h1>
             <div className="buttons">
               <Link className="link" to="/sitter-list"><button className="homePage-button">Find a sitter</button></Link>
               <Link className="link" to="/pet-list"><button className="homePage-button">Find a pet</button></Link>
             </div>
          </div>
        </div>
        <div className="about-us">
          <div className="about-section">
            <img className="aboutImage" src={Dog} alt="Dog" />
            <h2 className="subtitle">Good for Parents</h2>
            <p className="aboutText">Pet parents enjoy a profound sense of peace and reassurance, knowing that their cherished pets (and homes) are being well taken care of while they are away.</p>
          </div>
          <div className="about-section">
            <img className="aboutImage" src={HighFive} alt="HighFive" />
            <h2 className="subtitle">Better for sitters</h2>
            <p className="aboutText">Sitters embark on captivating homestays and extraordinary travel adventures, trading their time, expertise, and nurturing care for unforgettable experiences.</p>
          </div>
          <div className="about-section">
            <img className="aboutImage" src={Cat} alt="Cat" />
            <h2 className="subtitle">Best for Pets</h2>
            <p className="aboutText">Pets thrive in the comfort of their own homes, receiving abundant love, care, and companionship from a dedicated sitter.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;
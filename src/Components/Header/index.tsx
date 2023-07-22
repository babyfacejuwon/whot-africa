import { Link } from "react-router-dom";
import "./tsyle.scss"
import Home from "../Home";


const Header = () => {
    return ( 
        <div className="entire-header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://res.cloudinary.com/dglwvpea5/image/upload/v1689632750/Logo_oxorif.png" alt="" />
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                         <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">How to play</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active ">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active ">Contact Us</a>
                                    </li>
                                </ul>
                         </div>
                    <button type="button" className="btn btn-success">Login
                    </button>
                </div>
            </nav>
        </div>
     );
        
}
 
export default Header;